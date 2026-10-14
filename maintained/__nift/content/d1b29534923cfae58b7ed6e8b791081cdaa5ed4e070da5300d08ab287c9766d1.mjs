import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "视频渲染",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_video_rendering" />

<a id="api_irtcengine_enableinstantmediarendering" />

## enableInstantMediaRendering [#enableinstantmediarendering]

启用音视频帧的即时渲染。

<a id="api_irtcengine_enableinstantmediarendering__prototype" />

\`\`\`java
public abstract int enableInstantMediaRendering();
\`\`\`

<a id="api_irtcengine_enableinstantmediarendering__detailed_desc" />

#### \`自从\` [#自从]

自 v4.1.1 版本新增。

成功调用该方法后，SDK 会启用即时帧渲染模式，从而加快用户加入频道后首帧的渲染速度。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    主播和观众都需要调用该方法，才能体验音视频帧的即时渲染效果。一旦成功调用该方法，只能通过调用 [destroy \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1) 方法销毁 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 对象来取消即时渲染。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_enableinstantmediarendering__scenario" />

### 适用场景 [#适用场景]

声网建议在直播场景中为观众开启该模式。

<a id="api_irtcengine_enableinstantmediarendering__timing" />

### 调用时机 [#调用时机]

该方法需要在加入频道前调用。

<a id="api_irtcengine_enableinstantmediarendering__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -7：在 RtcEngine 初始化之前调用该方法。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalrendermode1" />

## setLocalRenderMode \\[1/2] [#setlocalrendermode-12]

设置本地视频的显示模式。

<a id="api_irtcengine_setlocalrendermode1__prototype" />

\`\`\`java
public abstract int setLocalRenderMode(int renderMode)
\`\`\`

<a id="api_irtcengine_setlocalrendermode1__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃，不推荐使用。

你可以调用该方法设置本地视频的显示模式。在通话过程中可以多次调用以动态调整显示模式。

<a id="api_irtcengine_setlocalrendermode1__parameters" />

### 参数 [#参数]

#### \`renderMode\` [#rendermode]

本地视频的显示模式：

* RENDER\\_MODE\\_HIDDEN （1）：隐藏模式。按比例缩放视频，直到填满视图边界，可能会裁剪视频的一部分内容。
* RENDER\\_MODE\\_FIT （2）：适应模式。按比例缩放视频，直到某一边适配视图边界，未填满的区域以黑色填充。
* RENDER\\_MODE\\_ADAPTIVE （3）：自适应模式。该枚举值已废弃，不推荐使用。

<a id="api_irtcengine_setlocalrendermode1__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalrendermode2" />

## setLocalRenderMode \\[2/2] [#setlocalrendermode-22]

更新本地视频画面的显示模式。

<a id="api_irtcengine_setlocalrendermode2__prototype" />

\`\`\`java
public abstract int setLocalRenderMode(int renderMode, int mirrorMode);
\`\`\`

<a id="api_irtcengine_setlocalrendermode2__detailed_desc" />

该方法仅影响本地用户看到的视频画面，不影响本地视频的发布。

<a id="api_irtcengine_setlocalrendermode2__timing" />

### 调用时机 [#调用时机-1]

确保在调用此方法前已调用 [setupLocalVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo) 方法初始化本地视频画面。在通话过程中，你可以根据需要多次调用此方法更新本地视频画面的显示模式。

<a id="api_irtcengine_setlocalrendermode2__parameters" />

### 参数 [#参数-1]

#### \`renderMode\` [#rendermode-1]

本地视频的显示模式：

* RENDER\\_MODE\\_HIDDEN (1)：隐藏模式。按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一条边可能会被裁剪。
* RENDER\\_MODE\\_FIT (2)：适应模式。按比例缩放视频，直到某一边适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。
* RENDER\\_MODE\\_ADAPTIVE (3)：自适应模式（已废弃，不推荐使用）。

#### \`mirrorMode\` [#mirrormode]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你使用前置摄像头，SDK 默认启用镜像模式；如果你使用后置摄像头，SDK 默认关闭镜像模式。
  </CalloutDescription>
</CalloutContainer>

本地用户的视频镜像模式：

* VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 自动决定是否启用镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：启用本地视图的镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图的镜像模式。

<a id="api_irtcengine_setlocalrendermode2__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalrendertargetfps" />

## setLocalRenderTargetFps [#setlocalrendertargetfps]

设置本地视频渲染的最大帧率。

<a id="api_irtcengine_setlocalrendertargetfps__prototype" />

\`\`\`java
public abstract int setLocalRenderTargetFps(Constants.VideoSourceType sourceType, int targetFps);
\`\`\`

<a id="api_irtcengine_setlocalrendertargetfps__detailed_desc" />

你可以在对视频渲染帧率要求不高的场景中调用该方法，例如屏幕共享或在线教育。SDK 会尝试将本地渲染的实际帧率保持在该值附近，从而降低 CPU 消耗并提升系统性能。

<a id="api_irtcengine_setlocalrendertargetfps__scenario" />

### 适用场景 [#适用场景-1]

在对视频渲染帧率要求不高的场景（如屏幕共享或在线教育）中，你可以调用该方法设置本地视频渲染的最大帧率。SDK 会尝试将本地渲染的实际帧率保持在该值附近，以降低 CPU 消耗并提升系统性能。

<a id="api_irtcengine_setlocalrendertargetfps__timing" />

### 调用时机 [#调用时机-2]

你可以在加入频道前或后调用该方法。

<a id="api_irtcengine_setlocalrendertargetfps__parameters" />

### 参数 [#参数-2]

#### \`sourceType\` [#sourcetype]

视频源类型，详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`targetFps\` [#targetfps]

本地视频的采集帧率（fps）。支持的取值包括：1、7、10、15、24、30、60。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数需设置为低于实际视频帧率的值，否则设置不生效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setlocalrendertargetfps__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlocalvideomirrormode" />

## setLocalVideoMirrorMode [#setlocalvideomirrormode]

设置本地视频镜像模式。

<a id="api_irtcengine_setlocalvideomirrormode__prototype" />

\`\`\`java
public abstract int setLocalVideoMirrorMode(int mode)
\`\`\`

<a id="api_irtcengine_setlocalvideomirrormode__detailed_desc" />

#### \`废弃\` [#废弃-1]

该方法已废弃。

<a id="api_irtcengine_setlocalvideomirrormode__parameters" />

### 参数 [#参数-3]

#### \`mode\` [#mode]

本地视频镜像模式：

* VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：由 SDK 决定是否启用镜像模式。如果使用前置摄像头，SDK 默认启用镜像模式；如果使用后置摄像头，SDK 默认关闭镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：开启本地视图的镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图的镜像模式。

<a id="api_irtcengine_setlocalvideomirrormode__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setremoterendermode2" />

## setRemoteRenderMode [#setremoterendermode]

更新远端用户视频视图的显示模式。

<a id="api_irtcengine_setremoterendermode2__prototype" />

\`\`\`java
public abstract int setRemoteRenderMode(int uid, int renderMode)
\`\`\`

<a id="api_irtcengine_setremoterendermode2__detailed_desc" />

#### \`废弃\` [#废弃-2]

该方法已废弃。

你可以调用该方法更新远端用户视频视图的渲染模式和镜像模式。该方法仅影响本地用户看到的视频视图。

注：

* 请确保在调用此方法前已调用 setupRemoteVideo 初始化远端视频视图。
* 通话过程中，你可以多次调用此方法以更新远端用户视频视图的显示模式。

<a id="api_irtcengine_setremoterendermode2__parameters" />

### 参数 [#参数-4]

#### \`uid\` [#uid]

远端用户 ID。

#### \`renderMode\` [#rendermode-2]

设置远端用户视频视图的显示模式：

* RENDER\\_MODE\\_HIDDEN (1)：按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一部分内容可能会被截断。
* RENDER\\_MODE\\_FIT (2)：按比例缩放视频，直到某一维度适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。

<a id="api_irtcengine_setremoterendermode2__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setremoterendermodeex" />

## setRemoteRenderModeEx [#setremoterendermodeex]

设置指定远端用户的视频显示模式。

<a id="api_irtcengineex_setremoterendermodeex__prototype" />

\`\`\`java
public abstract int setRemoteRenderModeEx(int uid, int renderMode, int mirrorMode, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setremoterendermodeex__detailed_desc" />

请在调用 [setupRemoteVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setupremotevideo) 方法初始化远端视图后再调用此方法。通话过程中，你可以多次调用此方法以更新远端用户视频视图的显示模式。

<a id="api_irtcengineex_setremoterendermodeex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_setremoterendermodeex__parameters" />

### 参数 [#参数-5]

#### \`uid\` [#uid-1]

远端用户 ID。

#### \`renderMode\` [#rendermode-3]

远端用户的视频显示模式：

* RENDER\\_MODE\\_HIDDEN (1)：隐藏模式。按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一部分内容可能被截断。
* RENDER\\_MODE\\_FIT (2)：适应模式。按比例缩放视频，直到某一维度适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。
* RENDER\\_MODE\\_ADAPTIVE (3)：自适应模式（已废弃，不推荐使用）。

#### \`mirrorMode\` [#mirrormode-1]

远端用户视图的镜像模式：

* VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 自动决定是否启用镜像模式。使用前置摄像头时默认启用镜像模式；使用后置摄像头时默认关闭镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：启用本地视图的镜像模式。
* VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图的镜像模式。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setremoterendermodeex__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_setremoterendertargetfps" />

## setRemoteRenderTargetFps [#setremoterendertargetfps]

设置远端视频渲染的最大帧率。

<a id="api_irtcengine_setremoterendertargetfps__prototype" />

\`\`\`java
public abstract int setRemoteRenderTargetFps(int targetFps);
\`\`\`

<a id="api_irtcengine_setremoterendertargetfps__detailed_desc" />

在对视频渲染帧率要求不高的场景（如屏幕共享、在线教育）或远端用户使用中低端设备时，可以调用该方法设置远端客户端的视频渲染最大帧率。SDK 会尽可能将实际渲染帧率控制在该值附近，从而降低 CPU 消耗并提升系统性能。

<a id="api_irtcengine_setremoterendertargetfps__scenario" />

### 适用场景 [#适用场景-3]

在视频渲染帧率要求不高的场景（例如屏幕共享、在线教育）或远端用户使用中低端设备的情况下，你可以调用该方法设置远端客户端的视频渲染最大帧率。SDK 会尽可能将实际渲染帧率控制在该值附近，从而降低 CPU 消耗并提升系统性能。

<a id="api_irtcengine_setremoterendertargetfps__timing" />

### 调用时机 [#调用时机-3]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_setremoterendertargetfps__parameters" />

### 参数 [#参数-6]

#### \`targetFps\` [#targetfps-1]

目标渲染帧率（fps）。支持的取值包括：1、7、10、15、24、30、60。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    将该参数设置为低于实际视频帧率的值，否则设置不生效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setremoterendertargetfps__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_imediaplayer_setrendermode" />

## setVideoRenderMode [#setvideorendermode]

设置媒体播放器的渲染模式。

<a id="api_imediaplayer_setrendermode__prototype" />

\`\`\`java
int setRenderMode(int mode);
\`\`\`

<a id="api_imediaplayer_setrendermode__detailed_desc" />

<a id="api_imediaplayer_setrendermode__parameters" />

### 参数 [#参数-7]

#### \`mode\` [#mode-1]

设置视图的渲染模式：

* RENDER\\_MODE\\_HIDDEN （1）：隐藏模式。按比例缩放视频，直到填满视图边界，可能会裁剪视频的一部分内容。
* RENDER\\_MODE\\_FIT （2）：适应模式。按比例缩放视频，直到某一边适配视图边界。由于宽高比不一致，未填满的区域将以黑色填充。
* RENDER\\_MODE\\_ADAPTIVE （3）：自适应模式。该枚举值已废弃，不推荐使用。

<a id="api_imediaplayer_setrendermode__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_irtcengine_setuplocalvideo" />

## setupLocalVideo [#setuplocalvideo]

初始化本地视频画面。

<a id="api_irtcengine_setuplocalvideo__prototype" />

\`\`\`java
public abstract int setupLocalVideo(VideoCanvas local);
\`\`\`

<a id="api_irtcengine_setuplocalvideo__detailed_desc" />

你可以调用该方法将本地视频流绑定到视频画面（\`view\` ），并设置画面的渲染模式和镜像模式。绑定关系在离开频道后仍然有效。如需停止渲染或解绑本地视频与画面，可将 \`view\` 设为 \`null\`。 在实时互动场景中，如果你需要在本地视频预览中同时查看多个预览画面，且每个画面位于视频链路的不同观察位置，可以多次调用该方法设置不同的 \`view\`，并为每个 \`view\` 设置不同的观察位置。例如，将视频源设置为摄像头后，配置两个 \`view\`，其 \`position\` 分别设置为 \`VIDEO_MODULE_POSITION_POST_CAPTURER_ORIGIN\` 和 \`VIDEO_MODULE_POSITION_POST_CAPTURER\`，即可在本地视频预览中同时查看原始未处理的视频帧和经过美颜特效、虚拟背景、水印等预处理后的视频帧。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如需在通话过程中仅更新本地视频画面的渲染模式或镜像模式，请调用 \`setLocalRenderMode\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setuplocalvideo__scenario" />

### 适用场景 [#适用场景-4]

初始化后调用该方法设置本地视频，然后加入频道。在实时互动场景中，如需在本地预览中同时查看多个不同观察位置的画面，可多次调用该方法设置不同的 \`view\` 和观察位置。

<a id="api_irtcengine_setuplocalvideo__timing" />

### 调用时机 [#调用时机-4]

你可以在加入频道前或后调用该方法。

<a id="api_irtcengine_setuplocalvideo__parameters" />

### 参数 [#参数-8]

#### \`local\` [#local]

本地视频画面及相关设置。详见 [VideoCanvas](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas)。

<a id="api_irtcengine_setuplocalvideo__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setupremotevideo" />

## setupRemoteVideo [#setupremotevideo]

初始化远端视频视图。

<a id="api_irtcengine_setupremotevideo__prototype" />

\`\`\`java
public abstract int setupRemoteVideo(VideoCanvas remote);
\`\`\`

<a id="api_irtcengine_setupremotevideo__detailed_desc" />

该方法在本地设备上初始化远端视频流的视图，仅影响本地用户看到的视频画面。调用该方法可将远端视频流绑定到视频视图，并设置该视图的渲染模式和镜像模式。你需要在该方法中指定远端用户的 ID。如果应用尚未获取远端用户的 ID，请在收到 [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined) 回调后设置。若要将远端用户与视图解绑，请将 \`view\` 参数设置为 \`null\`。一旦远端用户离开频道，SDK 会自动解绑该用户。在移动端进行视频合流布局自定义的场景中，你可以调用该方法，并为合流视频流中的每个子视频流设置独立的 \`view\` 进行渲染。

注：

* 若需在通话过程中更新远端视频视图的渲染模式或镜像模式，请使用 setRemoteRenderMode 方法。
* 使用录制服务时，应用无需绑定视图，因为录制服务不会发送视频流。如果你的应用无法识别录制服务，请在 SDK 触发 onFirstRemoteVideoDecoded 回调时将远端用户绑定到视图。

<a id="api_irtcengine_setupremotevideo__parameters" />

### 参数 [#参数-9]

#### \`remote\` [#remote]

远端视频视图及相关设置。详见 [VideoCanvas](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas)。

<a id="api_irtcengine_setupremotevideo__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_setupremotevideoex" />

## setupRemoteVideoEx [#setupremotevideoex]

初始化远端用户的视频视图。

<a id="api_irtcengineex_setupremotevideoex__prototype" />

\`\`\`java
public abstract int setupRemoteVideoEx(VideoCanvas remote, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_setupremotevideoex__detailed_desc" />

你可以调用该方法将远端视频流绑定到视频视图，并设置视频视图的渲染模式和镜像模式。该方法仅影响本地用户看到的视频视图。 应用需在远端用户加入频道前，通过 [VideoCanvas](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas) 指定远端用户 ID。 如果应用尚未获取远端用户 ID，可在收到 [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined) 回调后设置。 如果启用了视频录制功能，视频录制服务会以虚拟客户端身份加入频道，其他客户端也会因此收到 [onUserJoined](/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined) 回调。请勿将虚拟客户端绑定到应用视图，因为其不会发送任何视频流。 如需解除远端用户与视图的绑定，可将 \`view\` 参数设为 \`null\`。 远端用户离开频道后，SDK 会自动解除其绑定。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    若需在通话过程中更新远端视频视图的渲染或镜像模式，请使用 [setRemoteRenderModeEx](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setremoterendermodeex) 方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengineex_setupremotevideoex__scenario" />

### 适用场景 [#适用场景-5]

该方法适用于多频道场景。

<a id="api_irtcengineex_setupremotevideoex__parameters" />

### 参数 [#参数-10]

#### \`remote\` [#remote-1]

远端视频视图的设置。详见 [VideoCanvas](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas)。

#### \`connection\` [#connection-1]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_setupremotevideoex__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_startmediarenderingtracing" />

## startMediaRenderingTracing [#startmediarenderingtracing]

启用视频帧渲染过程的追踪。

<a id="api_irtcengine_startmediarenderingtracing__prototype" />

\`\`\`java
public abstract int startMediaRenderingTracing();
\`\`\`

<a id="api_irtcengine_startmediarenderingtracing__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.1.1 版本新增。

从成功调用该方法开始，SDK 会追踪频道中视频帧的渲染状态，并通过 [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult) 回调上报相关事件信息。

注：

* 如果你未调用该方法，SDK 会从调用 joinChannel 加入频道开始追踪视频帧的渲染事件。
* 本地用户离开当前频道后，SDK 会自动从再次加入频道开始追踪视频渲染事件。

<a id="api_irtcengine_startmediarenderingtracing__scenario" />

### 适用场景 [#适用场景-6]

你可以结合应用中的 UI 设置（如按钮、滑块）调用该方法，以提升用户体验。例如，在用户点击“加入频道”按钮时调用该方法，然后通过 [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult) 回调获取视频帧渲染过程所耗费的时间，从而优化相关指标。

<a id="api_irtcengine_startmediarenderingtracing__related" />

### 相关回调 [#相关回调]

该方法调用后会触发 [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult) 回调。

<a id="api_irtcengine_startmediarenderingtracing__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -7：在 RtcEngine 初始化之前调用该方法。

### 所属接口类 [#所属接口类-12]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_startmediarenderingtracingex" />

## startMediaRenderingTracingEx [#startmediarenderingtracingex]

启用视频帧渲染过程的追踪。

<a id="api_irtcengineex_startmediarenderingtracingex__prototype" />

\`\`\`java
public abstract int startMediaRenderingTracingEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_startmediarenderingtracingex__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.1.1 版本新增。

从成功调用该方法开始，SDK 会追踪频道中视频帧的渲染状态，并通过 [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult) 回调上报相关事件信息。

注：

* 如果你未调用该方法，SDK 会从调用 joinChannel 加入频道开始追踪视频帧的渲染事件。你可以根据实际应用场景在合适的时间调用该方法，以设置追踪视频渲染事件的起始位置。
* 本地用户离开当前频道后，SDK 会自动从再次加入频道开始追踪视频渲染事件。

<a id="api_irtcengineex_startmediarenderingtracingex__scenario" />

### 适用场景 [#适用场景-7]

该方法适用于多频道场景。

<a id="api_irtcengineex_startmediarenderingtracingex__related" />

### 相关回调 [#相关回调-1]

该方法调用后会触发 [onVideoRenderingTracingResult](/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult) 回调。

<a id="api_irtcengineex_startmediarenderingtracingex__parameters" />

### 参数 [#参数-11]

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_startmediarenderingtracingex__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo" />

## onTranscodedStreamLayoutInfo [#ontranscodedstreamlayoutinfo]

接收到携带布局信息的合图视频流回调。

<a id="callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__prototype" />

\`\`\`java
public void onTranscodedStreamLayoutInfo(int uid, VideoLayoutInfo info) {}
\`\`\`

<a id="callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__detailed_desc" />

当本地用户首次接收到由视频合图服务器发送的合图视频流，或该视频流的布局信息发生变化时，SDK 会触发该回调，报告该合图视频流中每个子视频流的布局信息。

<a id="callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__timing" />

### 触发时机 [#触发时机]

该回调在本地用户首次接收到合图视频流，或该视频流的布局信息发生变化时被触发。

<a id="callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__parameters" />

### 参数 [#参数-12]

#### \`uid\` [#uid-2]

发布该合图视频流的用户 ID。

#### \`info\` [#info]

子视频流的布局信息，详见 [VideoLayoutInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videolayoutinfo)。

### 所属接口类 [#所属接口类-14]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_onvideorenderingtracingresult" />

## onVideoRenderingTracingResult [#onvideorenderingtracingresult]

视频帧渲染事件回调。

<a id="callback_irtcengineeventhandler_onvideorenderingtracingresult__prototype" />

\`\`\`java
public void onVideoRenderingTracingResult(int uid, Constants.MEDIA_TRACE_EVENT currentEvent, VideoRenderingTracingInfo tracingInfo)
\`\`\`

<a id="callback_irtcengineeventhandler_onvideorenderingtracingresult__detailed_desc" />

调用 [startMediaRenderingTracing](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing) 方法或加入频道后，SDK 会触发该回调，报告视频帧渲染事件及渲染过程中的各项指标。你可以通过优化这些指标，提高首帧视频渲染的效率。

<a id="callback_irtcengineeventhandler_onvideorenderingtracingresult__parameters" />

### 参数 [#参数-13]

#### \`uid\` [#uid-3]

用户 ID。

#### \`currentEvent\` [#currentevent]

当前的视频帧渲染事件，详见 [MEDIA\\_TRACE\\_EVENT](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediatraceevent)。

#### \`tracingInfo\` [#tracinginfo]

视频帧渲染过程中的各项指标。详见 [VideoRenderingTracingInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videorenderingtracinginfo)。

### 所属接口类 [#所属接口类-15]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "enableinstantmediarendering",
    content: "启用音视频帧的即时渲染。"
  }, {
    heading: "自从",
    content: "自 v4.1.1 版本新增。"
  }, {
    heading: "自从",
    content: "成功调用该方法后，SDK 会启用即时帧渲染模式，从而加快用户加入频道后首帧的渲染速度。"
  }, {
    heading: "自从",
    content: "主播和观众都需要调用该方法，才能体验音视频帧的即时渲染效果。一旦成功调用该方法，只能通过调用 destroy \\[2/2] 方法销毁 RtcEngine 对象来取消即时渲染。"
  }, {
    heading: "适用场景",
    content: "声网建议在直播场景中为观众开启该模式。"
  }, {
    heading: "调用时机",
    content: "该方法需要在加入频道前调用。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值",
    content: "-7：在 RtcEngine 初始化之前调用该方法。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "setlocalrendermode-12",
    content: "设置本地视频的显示模式。"
  }, {
    heading: "废弃",
    content: "该方法已废弃，不推荐使用。"
  }, {
    heading: "废弃",
    content: "你可以调用该方法设置本地视频的显示模式。在通话过程中可以多次调用以动态调整显示模式。"
  }, {
    heading: "rendermode",
    content: "本地视频的显示模式："
  }, {
    heading: "rendermode",
    content: "RENDER\\_MODE\\_HIDDEN （1）：隐藏模式。按比例缩放视频，直到填满视图边界，可能会裁剪视频的一部分内容。"
  }, {
    heading: "rendermode",
    content: "RENDER\\_MODE\\_FIT （2）：适应模式。按比例缩放视频，直到某一边适配视图边界，未填满的区域以黑色填充。"
  }, {
    heading: "rendermode",
    content: "RENDER\\_MODE\\_ADAPTIVE （3）：自适应模式。该枚举值已废弃，不推荐使用。"
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
    heading: "setlocalrendermode-22",
    content: "更新本地视频画面的显示模式。"
  }, {
    heading: "setlocalrendermode-22",
    content: "该方法仅影响本地用户看到的视频画面，不影响本地视频的发布。"
  }, {
    heading: "调用时机-1",
    content: "确保在调用此方法前已调用 setupLocalVideo 方法初始化本地视频画面。在通话过程中，你可以根据需要多次调用此方法更新本地视频画面的显示模式。"
  }, {
    heading: "rendermode-1",
    content: "本地视频的显示模式："
  }, {
    heading: "rendermode-1",
    content: "RENDER\\_MODE\\_HIDDEN (1)：隐藏模式。按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一条边可能会被裁剪。"
  }, {
    heading: "rendermode-1",
    content: "RENDER\\_MODE\\_FIT (2)：适应模式。按比例缩放视频，直到某一边适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。"
  }, {
    heading: "rendermode-1",
    content: "RENDER\\_MODE\\_ADAPTIVE (3)：自适应模式（已废弃，不推荐使用）。"
  }, {
    heading: "mirrormode",
    content: "如果你使用前置摄像头，SDK 默认启用镜像模式；如果你使用后置摄像头，SDK 默认关闭镜像模式。"
  }, {
    heading: "mirrormode",
    content: "本地用户的视频镜像模式："
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 自动决定是否启用镜像模式。"
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：启用本地视图的镜像模式。"
  }, {
    heading: "mirrormode",
    content: "VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图的镜像模式。"
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
    heading: "setlocalrendertargetfps",
    content: "设置本地视频渲染的最大帧率。"
  }, {
    heading: "setlocalrendertargetfps",
    content: "你可以在对视频渲染帧率要求不高的场景中调用该方法，例如屏幕共享或在线教育。SDK 会尝试将本地渲染的实际帧率保持在该值附近，从而降低 CPU 消耗并提升系统性能。"
  }, {
    heading: "适用场景-1",
    content: "在对视频渲染帧率要求不高的场景（如屏幕共享或在线教育）中，你可以调用该方法设置本地视频渲染的最大帧率。SDK 会尝试将本地渲染的实际帧率保持在该值附近，以降低 CPU 消耗并提升系统性能。"
  }, {
    heading: "调用时机-2",
    content: "你可以在加入频道前或后调用该方法。"
  }, {
    heading: "sourcetype",
    content: "视频源类型，详见 VideoSourceType。"
  }, {
    heading: "targetfps",
    content: "本地视频的采集帧率（fps）。支持的取值包括：1、7、10、15、24、30、60。"
  }, {
    heading: "targetfps",
    content: "该参数需设置为低于实际视频帧率的值，否则设置不生效。"
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
    heading: "setlocalvideomirrormode",
    content: "设置本地视频镜像模式。"
  }, {
    heading: "废弃-1",
    content: "该方法已废弃。"
  }, {
    heading: "mode",
    content: "本地视频镜像模式："
  }, {
    heading: "mode",
    content: "VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：由 SDK 决定是否启用镜像模式。如果使用前置摄像头，SDK 默认启用镜像模式；如果使用后置摄像头，SDK 默认关闭镜像模式。"
  }, {
    heading: "mode",
    content: "VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：开启本地视图的镜像模式。"
  }, {
    heading: "mode",
    content: "VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图的镜像模式。"
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
    heading: "setremoterendermode",
    content: "更新远端用户视频视图的显示模式。"
  }, {
    heading: "废弃-2",
    content: "该方法已废弃。"
  }, {
    heading: "废弃-2",
    content: "你可以调用该方法更新远端用户视频视图的渲染模式和镜像模式。该方法仅影响本地用户看到的视频视图。"
  }, {
    heading: "废弃-2",
    content: "注："
  }, {
    heading: "废弃-2",
    content: "请确保在调用此方法前已调用 setupRemoteVideo 初始化远端视频视图。"
  }, {
    heading: "废弃-2",
    content: "通话过程中，你可以多次调用此方法以更新远端用户视频视图的显示模式。"
  }, {
    heading: "uid",
    content: "远端用户 ID。"
  }, {
    heading: "rendermode-2",
    content: "设置远端用户视频视图的显示模式："
  }, {
    heading: "rendermode-2",
    content: "RENDER\\_MODE\\_HIDDEN (1)：按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一部分内容可能会被截断。"
  }, {
    heading: "rendermode-2",
    content: "RENDER\\_MODE\\_FIT (2)：按比例缩放视频，直到某一维度适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。"
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
    heading: "setremoterendermodeex",
    content: "设置指定远端用户的视频显示模式。"
  }, {
    heading: "setremoterendermodeex",
    content: "请在调用 setupRemoteVideo 方法初始化远端视图后再调用此方法。通话过程中，你可以多次调用此方法以更新远端用户视频视图的显示模式。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "uid-1",
    content: "远端用户 ID。"
  }, {
    heading: "rendermode-3",
    content: "远端用户的视频显示模式："
  }, {
    heading: "rendermode-3",
    content: "RENDER\\_MODE\\_HIDDEN (1)：隐藏模式。按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一部分内容可能被截断。"
  }, {
    heading: "rendermode-3",
    content: "RENDER\\_MODE\\_FIT (2)：适应模式。按比例缩放视频，直到某一维度适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。"
  }, {
    heading: "rendermode-3",
    content: "RENDER\\_MODE\\_ADAPTIVE (3)：自适应模式（已废弃，不推荐使用）。"
  }, {
    heading: "mirrormode-1",
    content: "远端用户视图的镜像模式："
  }, {
    heading: "mirrormode-1",
    content: "VIDEO\\_MIRROR\\_MODE\\_AUTO (0)：SDK 自动决定是否启用镜像模式。使用前置摄像头时默认启用镜像模式；使用后置摄像头时默认关闭镜像模式。"
  }, {
    heading: "mirrormode-1",
    content: "VIDEO\\_MIRROR\\_MODE\\_ENABLED (1)：启用本地视图的镜像模式。"
  }, {
    heading: "mirrormode-1",
    content: "VIDEO\\_MIRROR\\_MODE\\_DISABLED (2)：关闭本地视图的镜像模式。"
  }, {
    heading: "connection",
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
    heading: "setremoterendertargetfps",
    content: "设置远端视频渲染的最大帧率。"
  }, {
    heading: "setremoterendertargetfps",
    content: "在对视频渲染帧率要求不高的场景（如屏幕共享、在线教育）或远端用户使用中低端设备时，可以调用该方法设置远端客户端的视频渲染最大帧率。SDK 会尽可能将实际渲染帧率控制在该值附近，从而降低 CPU 消耗并提升系统性能。"
  }, {
    heading: "适用场景-3",
    content: "在视频渲染帧率要求不高的场景（例如屏幕共享、在线教育）或远端用户使用中低端设备的情况下，你可以调用该方法设置远端客户端的视频渲染最大帧率。SDK 会尽可能将实际渲染帧率控制在该值附近，从而降低 CPU 消耗并提升系统性能。"
  }, {
    heading: "调用时机-3",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "targetfps-1",
    content: "目标渲染帧率（fps）。支持的取值包括：1、7、10、15、24、30、60。"
  }, {
    heading: "targetfps-1",
    content: "将该参数设置为低于实际视频帧率的值，否则设置不生效。"
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
    heading: "setvideorendermode",
    content: "设置媒体播放器的渲染模式。"
  }, {
    heading: "mode-1",
    content: "设置视图的渲染模式："
  }, {
    heading: "mode-1",
    content: "RENDER\\_MODE\\_HIDDEN （1）：隐藏模式。按比例缩放视频，直到填满视图边界，可能会裁剪视频的一部分内容。"
  }, {
    heading: "mode-1",
    content: "RENDER\\_MODE\\_FIT （2）：适应模式。按比例缩放视频，直到某一边适配视图边界。由于宽高比不一致，未填满的区域将以黑色填充。"
  }, {
    heading: "mode-1",
    content: "RENDER\\_MODE\\_ADAPTIVE （3）：自适应模式。该枚举值已废弃，不推荐使用。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-8",
    content: "IMediaPlayer"
  }, {
    heading: "setuplocalvideo",
    content: "初始化本地视频画面。"
  }, {
    heading: "setuplocalvideo",
    content: "你可以调用该方法将本地视频流绑定到视频画面（`view` ），并设置画面的渲染模式和镜像模式。绑定关系在离开频道后仍然有效。如需停止渲染或解绑本地视频与画面，可将 `view` 设为 `null`。 在实时互动场景中，如果你需要在本地视频预览中同时查看多个预览画面，且每个画面位于视频链路的不同观察位置，可以多次调用该方法设置不同的 `view`，并为每个 `view` 设置不同的观察位置。例如，将视频源设置为摄像头后，配置两个 `view`，其 `position` 分别设置为 `VIDEO_MODULE_POSITION_POST_CAPTURER_ORIGIN` 和 `VIDEO_MODULE_POSITION_POST_CAPTURER`，即可在本地视频预览中同时查看原始未处理的视频帧和经过美颜特效、虚拟背景、水印等预处理后的视频帧。"
  }, {
    heading: "setuplocalvideo",
    content: "如需在通话过程中仅更新本地视频画面的渲染模式或镜像模式，请调用 `setLocalRenderMode`。"
  }, {
    heading: "适用场景-4",
    content: "初始化后调用该方法设置本地视频，然后加入频道。在实时互动场景中，如需在本地预览中同时查看多个不同观察位置的画面，可多次调用该方法设置不同的 `view` 和观察位置。"
  }, {
    heading: "调用时机-4",
    content: "你可以在加入频道前或后调用该方法。"
  }, {
    heading: "local",
    content: "本地视频画面及相关设置。详见 VideoCanvas。"
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
    heading: "setupremotevideo",
    content: "初始化远端视频视图。"
  }, {
    heading: "setupremotevideo",
    content: "该方法在本地设备上初始化远端视频流的视图，仅影响本地用户看到的视频画面。调用该方法可将远端视频流绑定到视频视图，并设置该视图的渲染模式和镜像模式。你需要在该方法中指定远端用户的 ID。如果应用尚未获取远端用户的 ID，请在收到 onUserJoined 回调后设置。若要将远端用户与视图解绑，请将 `view` 参数设置为 `null`。一旦远端用户离开频道，SDK 会自动解绑该用户。在移动端进行视频合流布局自定义的场景中，你可以调用该方法，并为合流视频流中的每个子视频流设置独立的 `view` 进行渲染。"
  }, {
    heading: "setupremotevideo",
    content: "注："
  }, {
    heading: "setupremotevideo",
    content: "若需在通话过程中更新远端视频视图的渲染模式或镜像模式，请使用 setRemoteRenderMode 方法。"
  }, {
    heading: "setupremotevideo",
    content: "使用录制服务时，应用无需绑定视图，因为录制服务不会发送视频流。如果你的应用无法识别录制服务，请在 SDK 触发 onFirstRemoteVideoDecoded 回调时将远端用户绑定到视图。"
  }, {
    heading: "remote",
    content: "远端视频视图及相关设置。详见 VideoCanvas。"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-10",
    content: "RtcEngine"
  }, {
    heading: "setupremotevideoex",
    content: "初始化远端用户的视频视图。"
  }, {
    heading: "setupremotevideoex",
    content: "你可以调用该方法将远端视频流绑定到视频视图，并设置视频视图的渲染模式和镜像模式。该方法仅影响本地用户看到的视频视图。 应用需在远端用户加入频道前，通过 VideoCanvas 指定远端用户 ID。 如果应用尚未获取远端用户 ID，可在收到 onUserJoined 回调后设置。 如果启用了视频录制功能，视频录制服务会以虚拟客户端身份加入频道，其他客户端也会因此收到 onUserJoined 回调。请勿将虚拟客户端绑定到应用视图，因为其不会发送任何视频流。 如需解除远端用户与视图的绑定，可将 `view` 参数设为 `null`。 远端用户离开频道后，SDK 会自动解除其绑定。"
  }, {
    heading: "setupremotevideoex",
    content: "若需在通话过程中更新远端视频视图的渲染或镜像模式，请使用 setRemoteRenderModeEx 方法。"
  }, {
    heading: "适用场景-5",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "remote-1",
    content: "远端视频视图的设置。详见 VideoCanvas。"
  }, {
    heading: "connection-1",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-11",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-11",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-11",
    content: "RtcEngineEx"
  }, {
    heading: "startmediarenderingtracing",
    content: "启用视频帧渲染过程的追踪。"
  }, {
    heading: "自从-1",
    content: "自 v4.1.1 版本新增。"
  }, {
    heading: "自从-1",
    content: "从成功调用该方法开始，SDK 会追踪频道中视频帧的渲染状态，并通过 onVideoRenderingTracingResult 回调上报相关事件信息。"
  }, {
    heading: "自从-1",
    content: "注："
  }, {
    heading: "自从-1",
    content: "如果你未调用该方法，SDK 会从调用 joinChannel 加入频道开始追踪视频帧的渲染事件。"
  }, {
    heading: "自从-1",
    content: "本地用户离开当前频道后，SDK 会自动从再次加入频道开始追踪视频渲染事件。"
  }, {
    heading: "适用场景-6",
    content: "你可以结合应用中的 UI 设置（如按钮、滑块）调用该方法，以提升用户体验。例如，在用户点击“加入频道”按钮时调用该方法，然后通过 onVideoRenderingTracingResult 回调获取视频帧渲染过程所耗费的时间，从而优化相关指标。"
  }, {
    heading: "相关回调",
    content: "该方法调用后会触发 onVideoRenderingTracingResult 回调。"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-12",
    content: "-7：在 RtcEngine 初始化之前调用该方法。"
  }, {
    heading: "所属接口类-12",
    content: "RtcEngine"
  }, {
    heading: "startmediarenderingtracingex",
    content: "启用视频帧渲染过程的追踪。"
  }, {
    heading: "自从-2",
    content: "自 v4.1.1 版本新增。"
  }, {
    heading: "自从-2",
    content: "从成功调用该方法开始，SDK 会追踪频道中视频帧的渲染状态，并通过 onVideoRenderingTracingResult 回调上报相关事件信息。"
  }, {
    heading: "自从-2",
    content: "注："
  }, {
    heading: "自从-2",
    content: "如果你未调用该方法，SDK 会从调用 joinChannel 加入频道开始追踪视频帧的渲染事件。你可以根据实际应用场景在合适的时间调用该方法，以设置追踪视频渲染事件的起始位置。"
  }, {
    heading: "自从-2",
    content: "本地用户离开当前频道后，SDK 会自动从再次加入频道开始追踪视频渲染事件。"
  }, {
    heading: "适用场景-7",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "相关回调-1",
    content: "该方法调用后会触发 onVideoRenderingTracingResult 回调。"
  }, {
    heading: "connection-2",
    content: "连接信息。详见 RtcConnection。"
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
    heading: "ontranscodedstreamlayoutinfo",
    content: "接收到携带布局信息的合图视频流回调。"
  }, {
    heading: "ontranscodedstreamlayoutinfo",
    content: "当本地用户首次接收到由视频合图服务器发送的合图视频流，或该视频流的布局信息发生变化时，SDK 会触发该回调，报告该合图视频流中每个子视频流的布局信息。"
  }, {
    heading: "触发时机",
    content: "该回调在本地用户首次接收到合图视频流，或该视频流的布局信息发生变化时被触发。"
  }, {
    heading: "uid-2",
    content: "发布该合图视频流的用户 ID。"
  }, {
    heading: "info",
    content: "子视频流的布局信息，详见 VideoLayoutInfo。"
  }, {
    heading: "所属接口类-14",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "onvideorenderingtracingresult",
    content: "视频帧渲染事件回调。"
  }, {
    heading: "onvideorenderingtracingresult",
    content: "调用 startMediaRenderingTracing 方法或加入频道后，SDK 会触发该回调，报告视频帧渲染事件及渲染过程中的各项指标。你可以通过优化这些指标，提高首帧视频渲染的效率。"
  }, {
    heading: "uid-3",
    content: "用户 ID。"
  }, {
    heading: "currentevent",
    content: "当前的视频帧渲染事件，详见 MEDIA\\_TRACE\\_EVENT。"
  }, {
    heading: "tracinginfo",
    content: "视频帧渲染过程中的各项指标。详见 VideoRenderingTracingInfo。"
  }, {
    heading: "所属接口类-15",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "enableinstantmediarendering",
    content: "enableInstantMediaRendering"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "适用场景",
    content: "适用场景"
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
    id: "setlocalrendermode-12",
    content: "setLocalRenderMode [1/2]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "rendermode",
    content: "`renderMode`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "setlocalrendermode-22",
    content: "setLocalRenderMode [2/2]"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "rendermode-1",
    content: "`renderMode`"
  }, {
    id: "mirrormode",
    content: "`mirrorMode`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "setlocalrendertargetfps",
    content: "setLocalRenderTargetFps"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "targetfps",
    content: "`targetFps`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "setlocalvideomirrormode",
    content: "setLocalVideoMirrorMode"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "setremoterendermode",
    content: "setRemoteRenderMode"
  }, {
    id: "废弃-2",
    content: "`废弃`"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "rendermode-2",
    content: "`renderMode`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "setremoterendermodeex",
    content: "setRemoteRenderModeEx"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "rendermode-3",
    content: "`renderMode`"
  }, {
    id: "mirrormode-1",
    content: "`mirrorMode`"
  }, {
    id: "connection",
    content: "`connection`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "setremoterendertargetfps",
    content: "setRemoteRenderTargetFps"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "targetfps-1",
    content: "`targetFps`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "setvideorendermode",
    content: "setVideoRenderMode"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "mode-1",
    content: "`mode`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "setuplocalvideo",
    content: "setupLocalVideo"
  }, {
    id: "适用场景-4",
    content: "适用场景"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "local",
    content: "`local`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "setupremotevideo",
    content: "setupRemoteVideo"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "remote",
    content: "`remote`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "setupremotevideoex",
    content: "setupRemoteVideoEx"
  }, {
    id: "适用场景-5",
    content: "适用场景"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "remote-1",
    content: "`remote`"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "startmediarenderingtracing",
    content: "startMediaRenderingTracing"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "适用场景-6",
    content: "适用场景"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "startmediarenderingtracingex",
    content: "startMediaRenderingTracingEx"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "适用场景-7",
    content: "适用场景"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "connection-2",
    content: "`connection`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "ontranscodedstreamlayoutinfo",
    content: "onTranscodedStreamLayoutInfo"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "info",
    content: "`info`"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "onvideorenderingtracingresult",
    content: "onVideoRenderingTracingResult"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "currentevent",
    content: "`currentEvent`"
  }, {
    id: "tracinginfo",
    content: "`tracingInfo`"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#enableinstantmediarendering",
  title: _jsx(_Fragment, {
    children: "enableInstantMediaRendering"
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
  url: "#setlocalrendermode-12",
  title: _jsx(_Fragment, {
    children: "setLocalRenderMode [1/2]"
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
  url: "#rendermode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderMode"
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
  url: "#setlocalrendermode-22",
  title: _jsx(_Fragment, {
    children: "setLocalRenderMode [2/2]"
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
  url: "#rendermode-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderMode"
    })
  })
}, {
  depth: 4,
  url: "#mirrormode",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mirrorMode"
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
  url: "#setlocalrendertargetfps",
  title: _jsx(_Fragment, {
    children: "setLocalRenderTargetFps"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
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
  url: "#参数-2",
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
  depth: 4,
  url: "#targetfps",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "targetFps"
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
  url: "#setlocalvideomirrormode",
  title: _jsx(_Fragment, {
    children: "setLocalVideoMirrorMode"
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
  url: "#参数-3",
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
  url: "#setremoterendermode",
  title: _jsx(_Fragment, {
    children: "setRemoteRenderMode"
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
  url: "#参数-4",
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
  url: "#rendermode-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderMode"
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
  url: "#setremoterendermodeex",
  title: _jsx(_Fragment, {
    children: "setRemoteRenderModeEx"
  })
}, {
  depth: 3,
  url: "#适用场景-2",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-5",
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
  url: "#rendermode-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "renderMode"
    })
  })
}, {
  depth: 4,
  url: "#mirrormode-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mirrorMode"
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
  url: "#setremoterendertargetfps",
  title: _jsx(_Fragment, {
    children: "setRemoteRenderTargetFps"
  })
}, {
  depth: 3,
  url: "#适用场景-3",
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
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#targetfps-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "targetFps"
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
  url: "#setvideorendermode",
  title: _jsx(_Fragment, {
    children: "setVideoRenderMode"
  })
}, {
  depth: 3,
  url: "#参数-7",
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
  url: "#setuplocalvideo",
  title: _jsx(_Fragment, {
    children: "setupLocalVideo"
  })
}, {
  depth: 3,
  url: "#适用场景-4",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#local",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "local"
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
  url: "#setupremotevideo",
  title: _jsx(_Fragment, {
    children: "setupRemoteVideo"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#remote",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remote"
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
  url: "#setupremotevideoex",
  title: _jsx(_Fragment, {
    children: "setupRemoteVideoEx"
  })
}, {
  depth: 3,
  url: "#适用场景-5",
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
  url: "#remote-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "remote"
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
  url: "#startmediarenderingtracing",
  title: _jsx(_Fragment, {
    children: "startMediaRenderingTracing"
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
  url: "#适用场景-6",
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
  url: "#startmediarenderingtracingex",
  title: _jsx(_Fragment, {
    children: "startMediaRenderingTracingEx"
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
  url: "#适用场景-7",
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
  url: "#参数-11",
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
  url: "#ontranscodedstreamlayoutinfo",
  title: _jsx(_Fragment, {
    children: "onTranscodedStreamLayoutInfo"
  })
}, {
  depth: 3,
  url: "#触发时机",
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
  url: "#uid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "uid"
    })
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
  url: "#所属接口类-14",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onvideorenderingtracingresult",
  title: _jsx(_Fragment, {
    children: "onVideoRenderingTracingResult"
  })
}, {
  depth: 3,
  url: "#参数-13",
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
  url: "#currentevent",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "currentEvent"
    })
  })
}, {
  depth: 4,
  url: "#tracinginfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "tracingInfo"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-15",
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
      id: "toc_video_rendering"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinstantmediarendering"
    }), `
`, _jsx(_components.h2, {
      id: "enableinstantmediarendering",
      children: "enableInstantMediaRendering"
    }), `
`, _jsx(_components.p, {
      children: "启用音视频帧的即时渲染。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinstantmediarendering__prototype"
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
              children: " enableInstantMediaRendering"
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
      id: "api_irtcengine_enableinstantmediarendering__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.1.1 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "成功调用该方法后，SDK 会启用即时帧渲染模式，从而加快用户加入频道后首帧的渲染速度。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["主播和观众都需要调用该方法，才能体验音视频帧的即时渲染效果。一旦成功调用该方法，只能通过调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_destroy1",
            children: "destroy [2/2]"
          }), " 方法销毁 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 对象来取消即时渲染。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinstantmediarendering__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "声网建议在直播场景中为观众开启该模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinstantmediarendering__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法需要在加入频道前调用。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enableinstantmediarendering__return_values"
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
      id: "api_irtcengine_setlocalrendermode1"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalrendermode-12",
      children: "setLocalRenderMode [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置本地视频的显示模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode1__prototype"
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
              children: " setLocalRenderMode"
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
              children: " renderMode)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode1__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "该方法已废弃，不推荐使用。"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法设置本地视频的显示模式。在通话过程中可以多次调用以动态调整显示模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "rendermode",
      children: _jsx(_components.code, {
        children: "renderMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频的显示模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RENDER_MODE_HIDDEN （1）：隐藏模式。按比例缩放视频，直到填满视图边界，可能会裁剪视频的一部分内容。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_FIT （2）：适应模式。按比例缩放视频，直到某一边适配视图边界，未填满的区域以黑色填充。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_ADAPTIVE （3）：自适应模式。该枚举值已废弃，不推荐使用。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode1__return_values"
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
      id: "api_irtcengine_setlocalrendermode2"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalrendermode-22",
      children: "setLocalRenderMode [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "更新本地视频画面的显示模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode2__prototype"
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
              children: " setLocalRenderMode"
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
              children: " renderMode, "
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
              children: " mirrorMode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法仅影响本地用户看到的视频画面，不影响本地视频的发布。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["确保在调用此方法前已调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo",
        children: "setupLocalVideo"
      }), " 方法初始化本地视频画面。在通话过程中，你可以根据需要多次调用此方法更新本地视频画面的显示模式。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "rendermode-1",
      children: _jsx(_components.code, {
        children: "renderMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频的显示模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RENDER_MODE_HIDDEN (1)：隐藏模式。按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一条边可能会被裁剪。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_FIT (2)：适应模式。按比例缩放视频，直到某一边适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_ADAPTIVE (3)：自适应模式（已废弃，不推荐使用）。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "mirrormode",
      children: _jsx(_components.code, {
        children: "mirrorMode"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你使用前置摄像头，SDK 默认启用镜像模式；如果你使用后置摄像头，SDK 默认关闭镜像模式。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "本地用户的视频镜像模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_AUTO (0)：SDK 自动决定是否启用镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_ENABLED (1)：启用本地视图的镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_DISABLED (2)：关闭本地视图的镜像模式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendermode2__return_values"
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
      id: "api_irtcengine_setlocalrendertargetfps"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalrendertargetfps",
      children: "setLocalRenderTargetFps"
    }), `
`, _jsx(_components.p, {
      children: "设置本地视频渲染的最大帧率。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendertargetfps__prototype"
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
              children: " setLocalRenderTargetFps"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoSourceType sourceType, "
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
              children: " targetFps);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendertargetfps__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以在对视频渲染帧率要求不高的场景中调用该方法，例如屏幕共享或在线教育。SDK 会尝试将本地渲染的实际帧率保持在该值附近，从而降低 CPU 消耗并提升系统性能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendertargetfps__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在对视频渲染帧率要求不高的场景（如屏幕共享或在线教育）中，你可以调用该方法设置本地视频渲染的最大帧率。SDK 会尝试将本地渲染的实际帧率保持在该值附近，以降低 CPU 消耗并提升系统性能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendertargetfps__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendertargetfps__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
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
`, _jsx(_components.h4, {
      id: "targetfps",
      children: _jsx(_components.code, {
        children: "targetFps"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频的采集帧率（fps）。支持的取值包括：1、7、10、15、24、30、60。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该参数需设置为低于实际视频帧率的值，否则设置不生效。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalrendertargetfps__return_values"
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
      id: "api_irtcengine_setlocalvideomirrormode"
    }), `
`, _jsx(_components.h2, {
      id: "setlocalvideomirrormode",
      children: "setLocalVideoMirrorMode"
    }), `
`, _jsx(_components.p, {
      children: "设置本地视频镜像模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvideomirrormode__prototype"
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
              children: " setLocalVideoMirrorMode"
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
              children: " mode)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvideomirrormode__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "该方法已废弃。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvideomirrormode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地视频镜像模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_AUTO (0)：由 SDK 决定是否启用镜像模式。如果使用前置摄像头，SDK 默认启用镜像模式；如果使用后置摄像头，SDK 默认关闭镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_ENABLED (1)：开启本地视图的镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_DISABLED (2)：关闭本地视图的镜像模式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlocalvideomirrormode__return_values"
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
      id: "api_irtcengine_setremoterendermode2"
    }), `
`, _jsx(_components.h2, {
      id: "setremoterendermode",
      children: "setRemoteRenderMode"
    }), `
`, _jsx(_components.p, {
      children: "更新远端用户视频视图的显示模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendermode2__prototype"
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
              children: " setRemoteRenderMode"
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
              children: " renderMode)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendermode2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "该方法已废弃。"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法更新远端用户视频视图的渲染模式和镜像模式。该方法仅影响本地用户看到的视频视图。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请确保在调用此方法前已调用 setupRemoteVideo 初始化远端视频视图。"
      }), `
`, _jsx(_components.li, {
        children: "通话过程中，你可以多次调用此方法以更新远端用户视频视图的显示模式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendermode2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
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
      id: "rendermode-2",
      children: _jsx(_components.code, {
        children: "renderMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置远端用户视频视图的显示模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RENDER_MODE_HIDDEN (1)：按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一部分内容可能会被截断。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_FIT (2)：按比例缩放视频，直到某一维度适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendermode2__return_values"
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
      id: "api_irtcengineex_setremoterendermodeex"
    }), `
`, _jsx(_components.h2, {
      id: "setremoterendermodeex",
      children: "setRemoteRenderModeEx"
    }), `
`, _jsx(_components.p, {
      children: "设置指定远端用户的视频显示模式。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremoterendermodeex__prototype"
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
              children: " setRemoteRenderModeEx"
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
              children: " renderMode, "
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
              children: " mirrorMode, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremoterendermodeex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setupremotevideo",
        children: "setupRemoteVideo"
      }), " 方法初始化远端视图后再调用此方法。通话过程中，你可以多次调用此方法以更新远端用户视频视图的显示模式。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremoterendermodeex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setremoterendermodeex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-1",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "rendermode-3",
      children: _jsx(_components.code, {
        children: "renderMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户的视频显示模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RENDER_MODE_HIDDEN (1)：隐藏模式。按比例缩放视频，直到填满视图边界（可能被裁剪）。视频的一部分内容可能被截断。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_FIT (2)：适应模式。按比例缩放视频，直到某一维度适配视图边界。由于宽高比不一致而未填满的区域将以黑色填充。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_ADAPTIVE (3)：自适应模式（已废弃，不推荐使用）。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "mirrormode-1",
      children: _jsx(_components.code, {
        children: "mirrorMode"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户视图的镜像模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_AUTO (0)：SDK 自动决定是否启用镜像模式。使用前置摄像头时默认启用镜像模式；使用后置摄像头时默认关闭镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_ENABLED (1)：启用本地视图的镜像模式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MIRROR_MODE_DISABLED (2)：关闭本地视图的镜像模式。"
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
      id: "api_irtcengineex_setremoterendermodeex__return_values"
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
      id: "api_irtcengine_setremoterendertargetfps"
    }), `
`, _jsx(_components.h2, {
      id: "setremoterendertargetfps",
      children: "setRemoteRenderTargetFps"
    }), `
`, _jsx(_components.p, {
      children: "设置远端视频渲染的最大帧率。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendertargetfps__prototype"
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
              children: " setRemoteRenderTargetFps"
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
              children: " targetFps);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendertargetfps__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在对视频渲染帧率要求不高的场景（如屏幕共享、在线教育）或远端用户使用中低端设备时，可以调用该方法设置远端客户端的视频渲染最大帧率。SDK 会尽可能将实际渲染帧率控制在该值附近，从而降低 CPU 消耗并提升系统性能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendertargetfps__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在视频渲染帧率要求不高的场景（例如屏幕共享、在线教育）或远端用户使用中低端设备的情况下，你可以调用该方法设置远端客户端的视频渲染最大帧率。SDK 会尽可能将实际渲染帧率控制在该值附近，从而降低 CPU 消耗并提升系统性能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendertargetfps__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendertargetfps__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "targetfps-1",
      children: _jsx(_components.code, {
        children: "targetFps"
      })
    }), `
`, _jsx(_components.p, {
      children: "目标渲染帧率（fps）。支持的取值包括：1、7、10、15、24、30、60。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "将该参数设置为低于实际视频帧率的值，否则设置不生效。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoterendertargetfps__return_values"
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
      id: "api_imediaplayer_setrendermode"
    }), `
`, _jsx(_components.h2, {
      id: "setvideorendermode",
      children: "setVideoRenderMode"
    }), `
`, _jsx(_components.p, {
      children: "设置媒体播放器的渲染模式。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setrendermode__prototype"
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
              children: "int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " setRenderMode"
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
              children: " mode);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setrendermode__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setrendermode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode-1",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsx(_components.p, {
      children: "设置视图的渲染模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "RENDER_MODE_HIDDEN （1）：隐藏模式。按比例缩放视频，直到填满视图边界，可能会裁剪视频的一部分内容。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_FIT （2）：适应模式。按比例缩放视频，直到某一边适配视图边界。由于宽高比不一致，未填满的区域将以黑色填充。"
      }), `
`, _jsx(_components.li, {
        children: "RENDER_MODE_ADAPTIVE （3）：自适应模式。该枚举值已废弃，不推荐使用。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setrendermode__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer",
          children: "IMediaPlayer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setuplocalvideo"
    }), `
`, _jsx(_components.h2, {
      id: "setuplocalvideo",
      children: "setupLocalVideo"
    }), `
`, _jsx(_components.p, {
      children: "初始化本地视频画面。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setuplocalvideo__prototype"
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
              children: " setupLocalVideo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoCanvas local);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setuplocalvideo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法将本地视频流绑定到视频画面（", _jsx(_components.code, {
        children: "view"
      }), " ），并设置画面的渲染模式和镜像模式。绑定关系在离开频道后仍然有效。如需停止渲染或解绑本地视频与画面，可将 ", _jsx(_components.code, {
        children: "view"
      }), " 设为 ", _jsx(_components.code, {
        children: "null"
      }), "。 在实时互动场景中，如果你需要在本地视频预览中同时查看多个预览画面，且每个画面位于视频链路的不同观察位置，可以多次调用该方法设置不同的 ", _jsx(_components.code, {
        children: "view"
      }), "，并为每个 ", _jsx(_components.code, {
        children: "view"
      }), " 设置不同的观察位置。例如，将视频源设置为摄像头后，配置两个 ", _jsx(_components.code, {
        children: "view"
      }), "，其 ", _jsx(_components.code, {
        children: "position"
      }), " 分别设置为 ", _jsx(_components.code, {
        children: "VIDEO_MODULE_POSITION_POST_CAPTURER_ORIGIN"
      }), " 和 ", _jsx(_components.code, {
        children: "VIDEO_MODULE_POSITION_POST_CAPTURER"
      }), "，即可在本地视频预览中同时查看原始未处理的视频帧和经过美颜特效、虚拟背景、水印等预处理后的视频帧。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如需在通话过程中仅更新本地视频画面的渲染模式或镜像模式，请调用 ", _jsx(_components.code, {
            children: "setLocalRenderMode"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setuplocalvideo__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-4",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["初始化后调用该方法设置本地视频，然后加入频道。在实时互动场景中，如需在本地预览中同时查看多个不同观察位置的画面，可多次调用该方法设置不同的 ", _jsx(_components.code, {
        children: "view"
      }), " 和观察位置。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setuplocalvideo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setuplocalvideo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "local",
      children: _jsx(_components.code, {
        children: "local"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地视频画面及相关设置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas",
        children: "VideoCanvas"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setuplocalvideo__return_values"
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
      id: "api_irtcengine_setupremotevideo"
    }), `
`, _jsx(_components.h2, {
      id: "setupremotevideo",
      children: "setupRemoteVideo"
    }), `
`, _jsx(_components.p, {
      children: "初始化远端视频视图。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setupremotevideo__prototype"
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
              children: " setupRemoteVideo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoCanvas remote);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setupremotevideo__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法在本地设备上初始化远端视频流的视图，仅影响本地用户看到的视频画面。调用该方法可将远端视频流绑定到视频视图，并设置该视图的渲染模式和镜像模式。你需要在该方法中指定远端用户的 ID。如果应用尚未获取远端用户的 ID，请在收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
        children: "onUserJoined"
      }), " 回调后设置。若要将远端用户与视图解绑，请将 ", _jsx(_components.code, {
        children: "view"
      }), " 参数设置为 ", _jsx(_components.code, {
        children: "null"
      }), "。一旦远端用户离开频道，SDK 会自动解绑该用户。在移动端进行视频合流布局自定义的场景中，你可以调用该方法，并为合流视频流中的每个子视频流设置独立的 ", _jsx(_components.code, {
        children: "view"
      }), " 进行渲染。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "若需在通话过程中更新远端视频视图的渲染模式或镜像模式，请使用 setRemoteRenderMode 方法。"
      }), `
`, _jsx(_components.li, {
        children: "使用录制服务时，应用无需绑定视图，因为录制服务不会发送视频流。如果你的应用无法识别录制服务，请在 SDK 触发 onFirstRemoteVideoDecoded 回调时将远端用户绑定到视图。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setupremotevideo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "remote",
      children: _jsx(_components.code, {
        children: "remote"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["远端视频视图及相关设置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas",
        children: "VideoCanvas"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setupremotevideo__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setupremotevideoex"
    }), `
`, _jsx(_components.h2, {
      id: "setupremotevideoex",
      children: "setupRemoteVideoEx"
    }), `
`, _jsx(_components.p, {
      children: "初始化远端用户的视频视图。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setupremotevideoex__prototype"
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
              children: " setupRemoteVideoEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoCanvas remote, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setupremotevideoex__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法将远端视频流绑定到视频视图，并设置视频视图的渲染模式和镜像模式。该方法仅影响本地用户看到的视频视图。 应用需在远端用户加入频道前，通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas",
        children: "VideoCanvas"
      }), " 指定远端用户 ID。 如果应用尚未获取远端用户 ID，可在收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
        children: "onUserJoined"
      }), " 回调后设置。 如果启用了视频录制功能，视频录制服务会以虚拟客户端身份加入频道，其他客户端也会因此收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/channel#callback_irtcengineeventhandler_onuserjoined",
        children: "onUserJoined"
      }), " 回调。请勿将虚拟客户端绑定到应用视图，因为其不会发送任何视频流。 如需解除远端用户与视图的绑定，可将 ", _jsx(_components.code, {
        children: "view"
      }), " 参数设为 ", _jsx(_components.code, {
        children: "null"
      }), "。 远端用户离开频道后，SDK 会自动解除其绑定。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["若需在通话过程中更新远端视频视图的渲染或镜像模式，请使用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengineex_setremoterendermodeex",
            children: "setRemoteRenderModeEx"
          }), " 方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setupremotevideoex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-5",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_setupremotevideoex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "remote-1",
      children: _jsx(_components.code, {
        children: "remote"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["远端视频视图的设置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videocanvas",
        children: "VideoCanvas"
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
      id: "api_irtcengineex_setupremotevideoex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startmediarenderingtracing"
    }), `
`, _jsx(_components.h2, {
      id: "startmediarenderingtracing",
      children: "startMediaRenderingTracing"
    }), `
`, _jsx(_components.p, {
      children: "启用视频帧渲染过程的追踪。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startmediarenderingtracing__prototype"
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
              children: " startMediaRenderingTracing"
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
      id: "api_irtcengine_startmediarenderingtracing__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.1.1 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["从成功调用该方法开始，SDK 会追踪频道中视频帧的渲染状态，并通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
        children: "onVideoRenderingTracingResult"
      }), " 回调上报相关事件信息。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你未调用该方法，SDK 会从调用 joinChannel 加入频道开始追踪视频帧的渲染事件。"
      }), `
`, _jsx(_components.li, {
        children: "本地用户离开当前频道后，SDK 会自动从再次加入频道开始追踪视频渲染事件。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startmediarenderingtracing__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-6",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以结合应用中的 UI 设置（如按钮、滑块）调用该方法，以提升用户体验。例如，在用户点击“加入频道”按钮时调用该方法，然后通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
        children: "onVideoRenderingTracingResult"
      }), " 回调获取视频帧渲染过程所耗费的时间，从而优化相关指标。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startmediarenderingtracing__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法调用后会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
        children: "onVideoRenderingTracingResult"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startmediarenderingtracing__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
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
      id: "api_irtcengineex_startmediarenderingtracingex"
    }), `
`, _jsx(_components.h2, {
      id: "startmediarenderingtracingex",
      children: "startMediaRenderingTracingEx"
    }), `
`, _jsx(_components.p, {
      children: "启用视频帧渲染过程的追踪。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startmediarenderingtracingex__prototype"
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
              children: " startMediaRenderingTracingEx"
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
      id: "api_irtcengineex_startmediarenderingtracingex__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.1.1 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["从成功调用该方法开始，SDK 会追踪频道中视频帧的渲染状态，并通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
        children: "onVideoRenderingTracingResult"
      }), " 回调上报相关事件信息。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你未调用该方法，SDK 会从调用 joinChannel 加入频道开始追踪视频帧的渲染事件。你可以根据实际应用场景在合适的时间调用该方法，以设置追踪视频渲染事件的起始位置。"
      }), `
`, _jsx(_components.li, {
        children: "本地用户离开当前频道后，SDK 会自动从再次加入频道开始追踪视频渲染事件。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startmediarenderingtracingex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-7",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startmediarenderingtracingex__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法调用后会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#callback_irtcengineeventhandler_onvideorenderingtracingresult",
        children: "onVideoRenderingTracingResult"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_startmediarenderingtracingex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
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
      id: "api_irtcengineex_startmediarenderingtracingex__return_values"
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
      id: "callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo"
    }), `
`, _jsx(_components.h2, {
      id: "ontranscodedstreamlayoutinfo",
      children: "onTranscodedStreamLayoutInfo"
    }), `
`, _jsx(_components.p, {
      children: "接收到携带布局信息的合图视频流回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__prototype"
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
              children: " onTranscodedStreamLayoutInfo"
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
              children: " uid, VideoLayoutInfo info) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当本地用户首次接收到由视频合图服务器发送的合图视频流，或该视频流的布局信息发生变化时，SDK 会触发该回调，报告该合图视频流中每个子视频流的布局信息。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地用户首次接收到合图视频流，或该视频流的布局信息发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_ontranscodedstreamlayoutinfo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-2",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发布该合图视频流的用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "info",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["子视频流的布局信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videolayoutinfo",
        children: "VideoLayoutInfo"
      }), "。"]
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
      id: "callback_irtcengineeventhandler_onvideorenderingtracingresult"
    }), `
`, _jsx(_components.h2, {
      id: "onvideorenderingtracingresult",
      children: "onVideoRenderingTracingResult"
    }), `
`, _jsx(_components.p, {
      children: "视频帧渲染事件回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideorenderingtracingresult__prototype"
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
              children: " onVideoRenderingTracingResult"
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
              children: " uid, Constants.MEDIA_TRACE_EVENT currentEvent, VideoRenderingTracingInfo tracingInfo)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideorenderingtracingresult__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_startmediarenderingtracing",
        children: "startMediaRenderingTracing"
      }), " 方法或加入频道后，SDK 会触发该回调，报告视频帧渲染事件及渲染过程中的各项指标。你可以通过优化这些指标，提高首帧视频渲染的效率。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onvideorenderingtracingresult__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-3",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "currentevent",
      children: _jsx(_components.code, {
        children: "currentEvent"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["当前的视频帧渲染事件，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediatraceevent",
        children: "MEDIA_TRACE_EVENT"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "tracinginfo",
      children: _jsx(_components.code, {
        children: "tracingInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频帧渲染过程中的各项指标。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videorenderingtracinginfo",
        children: "VideoRenderingTracingInfo"
      }), "。"]
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
