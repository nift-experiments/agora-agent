import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "自定义视频采集和渲染",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_video_custom_capturenrendering" />

<a id="api_irtcengine_createcustomvideotrack" />

## createCustomVideoTrack [#createcustomvideotrack]

创建一个自定义视频轨道。

<a id="api_irtcengine_createcustomvideotrack__prototype" />

\`\`\`java
public abstract int createCustomVideoTrack();
\`\`\`

<a id="api_irtcengine_createcustomvideotrack__detailed_desc" />

调用该方法创建一个视频轨道，并获取视频轨道 ID。该 ID 可用于发布自定义视频源。要发布自定义视频源，请按照以下步骤操作：

1. 调用该方法创建一个视频轨道，并获取视频轨道 ID。
2. 调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。
3. 调用 pushExternalVideoFrameById，并将 videoTrackId 设置为第 2 步中指定的视频轨道 ID，即可在频道中发布对应的自定义视频源。

<a id="api_irtcengine_createcustomvideotrack__return_values" />

### 返回值 [#返回值]

* 方法调用成功，返回视频轨道的唯一标识符，即视频轨道 ID。
* 方法调用失败，返回 0xffffffff。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_destroycustomvideotrack" />

## destroyCustomVideoTrack [#destroycustomvideotrack]

销毁指定的视频轨道。

<a id="api_irtcengine_destroycustomvideotrack__prototype" />

\`\`\`java
public abstract int destroyCustomVideoTrack(int video_track_id);
\`\`\`

<a id="api_irtcengine_destroycustomvideotrack__detailed_desc" />

<a id="api_irtcengine_destroycustomvideotrack__parameters" />

### 参数 [#参数]

#### \`video_track_id\` [#video_track_id]

调用 [createCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack) 返回的视频轨道 ID。

<a id="api_irtcengine_destroycustomvideotrack__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_istextureencodesupported" />

## isTextureEncodeSupported [#istextureencodesupported]

检查视频是否支持 Texture 编码。

<a id="api_irtcengine_istextureencodesupported__prototype" />

\`\`\`java
public abstract boolean isTextureEncodeSupported();
\`\`\`

<a id="api_irtcengine_istextureencodesupported__detailed_desc" />

<a id="api_irtcengine_istextureencodesupported__return_values" />

### 返回值 [#返回值-2]

* true：支持 Texture 编码。
* false：不支持 Texture 编码。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pushvideoframe" />

## pushExternalVideoFrameById \\[1/2] [#pushexternalvideoframebyid-12]

通过视频轨道向 SDK 推送外部原始视频帧。

<a id="api_irtcengine_pushvideoframe__prototype" />

\`\`\`java
public abstract int pushExternalVideoFrameById(VideoFrame frame, int videoTrackId);
\`\`\`

<a id="api_irtcengine_pushvideoframe__detailed_desc" />

要发布自定义视频源，请按照以下步骤操作：

1. 调用 createCustomVideoTrack 创建视频轨道并获取视频轨道 ID。
2. 调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。
3. 调用 pushExternalVideoFrameById，并将 videoTrackId 设置为第 2 步中设置的视频轨道 ID，即可在频道中发布对应的自定义视频源。

你可以通过调用 \`pushExternalVideoFrameById\` 或调用 \`pushExternalVideoFrameById\` （参数为 [AgoraVideoFrame](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-externalvideoframe) ）推送视频帧。

注： 如果你只需向频道中推送一个自定义视频源，可以直接调用 [setExternalVideoSource](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource)，SDK 会自动创建一个 \`videoTrackId\` 为 0 的视频轨道。 危险：调用本方法后，即使你停止向 SDK 推送外部视频帧，自定义视频流仍会计入视频时长并产生费用。声网建议你根据实际情况采取适当措施以避免此类视频计费：

* 如果你不再需要采集外部视频数据，可以调用 destroyCustomVideoTrack 销毁自定义视频轨道。
* 如果你只想将外部视频数据用于本地预览而不发布到频道中，可以调用 muteLocalVideoStream 取消发送视频流，或调用 updateChannelMediaOptions 将 publishCustomVideoTrack 设置为 false。

<a id="api_irtcengine_pushvideoframe__parameters" />

### 参数 [#参数-1]

#### \`frame\` [#frame]

要推送的视频帧。

#### \`videoTrackId\` [#videotrackid]

调用 [createCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack) 返回的视频轨道 ID。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你只需推送一个自定义视频源，请将 \`videoTrackId\` 设置为 0。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_pushvideoframe__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pushvideoframe2" />

## pushExternalVideoFrame \\[1/2] [#pushexternalvideoframe-12]

将外部原始视频帧推送至 SDK。

<a id="api_irtcengine_pushvideoframe2__prototype" />

\`\`\`java
public abstract boolean pushExternalVideoFrame(VideoFrame frame)
\`\`\`

<a id="api_irtcengine_pushvideoframe2__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃。

调用 [setExternalVideoSource](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource) 方法并将 \`enabled\` 参数设置为 true， \`encodedFrame\` 参数设置为 false 后，可以使用该方法将外部原始视频帧推送至 SDK。你可以调用该方法或 \`pushExternalVideoFrame\` 推送视频帧。

<a id="api_irtcengine_pushvideoframe2__parameters" />

### 参数 [#参数-2]

#### \`frame\` [#frame-1]

要推送的视频帧。

<a id="api_irtcengine_pushvideoframe2__return_values" />

### 返回值 [#返回值-4]

* true：推送视频帧成功。
* false：推送视频帧失败。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pushvideoframe3" />

## pushExternalVideoFrameById \\[2/2] [#pushexternalvideoframebyid-22]

通过视频轨道向 SDK 推送外部原始视频帧。

<a id="api_irtcengine_pushvideoframe3__prototype" />

\`\`\`java
public abstract int pushExternalVideoFrameById(AgoraVideoFrame frame, int videoTrackId);
\`\`\`

<a id="api_irtcengine_pushvideoframe3__detailed_desc" />

要发布自定义视频源，请按照以下步骤操作：

1. 调用 createCustomVideoTrack 创建视频轨道并获取视频轨道 ID。
2. 调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。
3. 调用 pushExternalVideoFrameById，并将 videoTrackId 设置为步骤 2 中设置的视频轨道 ID，即可在频道中发布对应的自定义视频源。

你可以通过调用 \`pushExternalVideoFrameById\` 或调用 \`pushExternalVideoFrame\` 推送视频帧。

注： 如果你只需向频道中推送一个自定义视频源，可以直接调用 [setExternalVideoSource](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource) 方法，SDK 会自动创建一个 \`videoTrackId\` 为 0 的视频轨道。 警告：调用 \`pushExternalVideoFrameById\` 后，即使你停止向 SDK 推送外部视频帧，自定义视频流仍会被计入视频时长并产生费用。声网建议你根据实际情况采取适当措施以避免此类视频计费：

* 如果你不再需要采集外部视频数据，可以调用 destroyCustomVideoTrack 销毁自定义视频轨道。
* 如果你只想将外部视频数据用于本地预览而不在频道中发布，可以调用 muteLocalVideoStream 取消发送视频流，或调用 updateChannelMediaOptions 将 publishCustomVideoTrack 设置为 false。

<a id="api_irtcengine_pushvideoframe3__parameters" />

### 参数 [#参数-3]

#### \`frame\` [#frame-2]

要推送的外部原始视频帧。详见 [AgoraVideoFrame](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-externalvideoframe)。

#### \`videoTrackId\` [#videotrackid-1]

调用 [createCustomVideoTrack](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack) 返回的视频轨道 ID。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你只需推送一个自定义视频源，请将 \`videoTrackId\` 设置为 0。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_pushvideoframe3__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pushvideoframe4" />

## pushExternalVideoFrame \\[2/2] [#pushexternalvideoframe-22]

将外部原始视频帧推送至 SDK。

<a id="api_irtcengine_pushvideoframe4__prototype" />

\`\`\`java
public abstract boolean pushExternalVideoFrame(AgoraVideoFrame frame)
\`\`\`

<a id="api_irtcengine_pushvideoframe4__detailed_desc" />

#### \`废弃\` [#废弃-1]

自 v4.5.0 版本废弃。

调用 [setExternalVideoSource](/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource) 方法并将 \`enabled\` 参数设置为 true， \`encodedFrame\` 参数设置为 false 后，可以使用 \`pushExternalVideoFrame\` 将外部原始视频帧推送至 SDK。你也可以调用 \`pushExternalVideoFrame\` 推送视频帧。

<a id="api_irtcengine_pushvideoframe4__parameters" />

### 参数 [#参数-4]

#### \`frame\` [#frame-3]

要推送的外部原始视频帧。详见 [AgoraVideoFrame](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-externalvideoframe)。

<a id="api_irtcengine_pushvideoframe4__return_values" />

### 返回值 [#返回值-6]

* true：推送成功。
* false：推送失败。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setexternalremoteeglcontext" />

## setExternalRemoteEglContext [#setexternalremoteeglcontext]

设置用于渲染远端视频流的 EGL 上下文。

<a id="api_irtcengine_setexternalremoteeglcontext__prototype" />

\`\`\`java
public abstract int setExternalRemoteEglContext(Object eglContext);
\`\`\`

<a id="api_irtcengine_setexternalremoteeglcontext__detailed_desc" />

该方法用于替换 SDK 默认的远端 EGL 上下文，便于你自行管理 EGL 上下文。当引擎销毁时，SDK 会自动释放该上下文。

<a id="api_irtcengine_setexternalremoteeglcontext__scenario" />

### 适用场景 [#适用场景]

该方法适用于使用自定义渲染方式（如 Texture 格式）替代 SDK 默认渲染方式渲染远端视频帧的场景。

<a id="api_irtcengine_setexternalremoteeglcontext__timing" />

### 调用时机 [#调用时机]

请在加入频道前调用该方法。

<a id="api_irtcengine_setexternalremoteeglcontext__parameters" />

### 参数 [#参数-5]

#### \`eglContext\` [#eglcontext]

用于渲染远端视频流的 EGL 上下文。

<a id="api_irtcengine_setexternalremoteeglcontext__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setexternalvideosource" />

## setExternalVideoSource [#setexternalvideosource]

配置外部视频源。

<a id="api_irtcengine_setexternalvideosource__prototype" />

\`\`\`java
public abstract int setExternalVideoSource(boolean enable, boolean useTexture, Constants.ExternalVideoSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setexternalvideosource__detailed_desc" />

调用该方法后，可以调用 \`pushExternalVideoFrameById\` 向 SDK 推送外部视频数据。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    频道内不支持动态切换视频源。若需从外部视频源切换为内部视频源，必须先离开频道，调用该方法关闭外部视频源，再重新加入频道。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setexternalvideosource__timing" />

### 调用时机 [#调用时机-1]

请在加入频道前调用该方法。

<a id="api_irtcengine_setexternalvideosource__parameters" />

### 参数 [#参数-6]

#### \`enable\` [#enable]

是否使用外部视频源：

* true：使用外部视频源，SDK 会准备接收外部视频帧。
* false：（默认）不使用外部视频源。

#### \`useTexture\` [#usetexture]

是否使用 Texture 格式的外部视频帧：

* true：使用 Texture 格式的外部视频帧。
* false：（默认）不使用 Texture 格式的外部视频帧。

#### \`sourceType\` [#sourcetype]

外部视频帧是否为编码格式，详见 [ExternalVideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-externalvideosourcetype)。

<a id="api_irtcengine_setexternalvideosource__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "createcustomvideotrack",
    content: "创建一个自定义视频轨道。"
  }, {
    heading: "createcustomvideotrack",
    content: "调用该方法创建一个视频轨道，并获取视频轨道 ID。该 ID 可用于发布自定义视频源。要发布自定义视频源，请按照以下步骤操作："
  }, {
    heading: "createcustomvideotrack",
    content: "调用该方法创建一个视频轨道，并获取视频轨道 ID。"
  }, {
    heading: "createcustomvideotrack",
    content: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。"
  }, {
    heading: "createcustomvideotrack",
    content: "调用 pushExternalVideoFrameById，并将 videoTrackId 设置为第 2 步中指定的视频轨道 ID，即可在频道中发布对应的自定义视频源。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回视频轨道的唯一标识符，即视频轨道 ID。"
  }, {
    heading: "返回值",
    content: "方法调用失败，返回 0xffffffff。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "destroycustomvideotrack",
    content: "销毁指定的视频轨道。"
  }, {
    heading: "video_track_id",
    content: "调用 createCustomVideoTrack 返回的视频轨道 ID。"
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
    heading: "istextureencodesupported",
    content: "检查视频是否支持 Texture 编码。"
  }, {
    heading: "返回值-2",
    content: "true：支持 Texture 编码。"
  }, {
    heading: "返回值-2",
    content: "false：不支持 Texture 编码。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "通过视频轨道向 SDK 推送外部原始视频帧。"
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "要发布自定义视频源，请按照以下步骤操作："
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "调用 createCustomVideoTrack 创建视频轨道并获取视频轨道 ID。"
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。"
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "调用 pushExternalVideoFrameById，并将 videoTrackId 设置为第 2 步中设置的视频轨道 ID，即可在频道中发布对应的自定义视频源。"
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "你可以通过调用 `pushExternalVideoFrameById` 或调用 `pushExternalVideoFrameById` （参数为 AgoraVideoFrame ）推送视频帧。"
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "注： 如果你只需向频道中推送一个自定义视频源，可以直接调用 setExternalVideoSource，SDK 会自动创建一个 `videoTrackId` 为 0 的视频轨道。 危险：调用本方法后，即使你停止向 SDK 推送外部视频帧，自定义视频流仍会计入视频时长并产生费用。声网建议你根据实际情况采取适当措施以避免此类视频计费："
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "如果你不再需要采集外部视频数据，可以调用 destroyCustomVideoTrack 销毁自定义视频轨道。"
  }, {
    heading: "pushexternalvideoframebyid-12",
    content: "如果你只想将外部视频数据用于本地预览而不发布到频道中，可以调用 muteLocalVideoStream 取消发送视频流，或调用 updateChannelMediaOptions 将 publishCustomVideoTrack 设置为 false。"
  }, {
    heading: "frame",
    content: "要推送的视频帧。"
  }, {
    heading: "videotrackid",
    content: "调用 createCustomVideoTrack 返回的视频轨道 ID。"
  }, {
    heading: "videotrackid",
    content: "如果你只需推送一个自定义视频源，请将 `videoTrackId` 设置为 0。"
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
    heading: "pushexternalvideoframe-12",
    content: "将外部原始视频帧推送至 SDK。"
  }, {
    heading: "废弃",
    content: "该方法已废弃。"
  }, {
    heading: "废弃",
    content: "调用 setExternalVideoSource 方法并将 `enabled` 参数设置为 true， `encodedFrame` 参数设置为 false 后，可以使用该方法将外部原始视频帧推送至 SDK。你可以调用该方法或 `pushExternalVideoFrame` 推送视频帧。"
  }, {
    heading: "frame-1",
    content: "要推送的视频帧。"
  }, {
    heading: "返回值-4",
    content: "true：推送视频帧成功。"
  }, {
    heading: "返回值-4",
    content: "false：推送视频帧失败。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "通过视频轨道向 SDK 推送外部原始视频帧。"
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "要发布自定义视频源，请按照以下步骤操作："
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "调用 createCustomVideoTrack 创建视频轨道并获取视频轨道 ID。"
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。"
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "调用 pushExternalVideoFrameById，并将 videoTrackId 设置为步骤 2 中设置的视频轨道 ID，即可在频道中发布对应的自定义视频源。"
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "你可以通过调用 `pushExternalVideoFrameById` 或调用 `pushExternalVideoFrame` 推送视频帧。"
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "注： 如果你只需向频道中推送一个自定义视频源，可以直接调用 setExternalVideoSource 方法，SDK 会自动创建一个 `videoTrackId` 为 0 的视频轨道。 警告：调用 `pushExternalVideoFrameById` 后，即使你停止向 SDK 推送外部视频帧，自定义视频流仍会被计入视频时长并产生费用。声网建议你根据实际情况采取适当措施以避免此类视频计费："
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "如果你不再需要采集外部视频数据，可以调用 destroyCustomVideoTrack 销毁自定义视频轨道。"
  }, {
    heading: "pushexternalvideoframebyid-22",
    content: "如果你只想将外部视频数据用于本地预览而不在频道中发布，可以调用 muteLocalVideoStream 取消发送视频流，或调用 updateChannelMediaOptions 将 publishCustomVideoTrack 设置为 false。"
  }, {
    heading: "frame-2",
    content: "要推送的外部原始视频帧。详见 AgoraVideoFrame。"
  }, {
    heading: "videotrackid-1",
    content: "调用 createCustomVideoTrack 返回的视频轨道 ID。"
  }, {
    heading: "videotrackid-1",
    content: "如果你只需推送一个自定义视频源，请将 `videoTrackId` 设置为 0。"
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
    heading: "pushexternalvideoframe-22",
    content: "将外部原始视频帧推送至 SDK。"
  }, {
    heading: "废弃-1",
    content: "自 v4.5.0 版本废弃。"
  }, {
    heading: "废弃-1",
    content: "调用 setExternalVideoSource 方法并将 `enabled` 参数设置为 true， `encodedFrame` 参数设置为 false 后，可以使用 `pushExternalVideoFrame` 将外部原始视频帧推送至 SDK。你也可以调用 `pushExternalVideoFrame` 推送视频帧。"
  }, {
    heading: "frame-3",
    content: "要推送的外部原始视频帧。详见 AgoraVideoFrame。"
  }, {
    heading: "返回值-6",
    content: "true：推送成功。"
  }, {
    heading: "返回值-6",
    content: "false：推送失败。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "setexternalremoteeglcontext",
    content: "设置用于渲染远端视频流的 EGL 上下文。"
  }, {
    heading: "setexternalremoteeglcontext",
    content: "该方法用于替换 SDK 默认的远端 EGL 上下文，便于你自行管理 EGL 上下文。当引擎销毁时，SDK 会自动释放该上下文。"
  }, {
    heading: "适用场景",
    content: "该方法适用于使用自定义渲染方式（如 Texture 格式）替代 SDK 默认渲染方式渲染远端视频帧的场景。"
  }, {
    heading: "调用时机",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "eglcontext",
    content: "用于渲染远端视频流的 EGL 上下文。"
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
    heading: "setexternalvideosource",
    content: "配置外部视频源。"
  }, {
    heading: "setexternalvideosource",
    content: "调用该方法后，可以调用 `pushExternalVideoFrameById` 向 SDK 推送外部视频数据。"
  }, {
    heading: "setexternalvideosource",
    content: "频道内不支持动态切换视频源。若需从外部视频源切换为内部视频源，必须先离开频道，调用该方法关闭外部视频源，再重新加入频道。"
  }, {
    heading: "调用时机-1",
    content: "请在加入频道前调用该方法。"
  }, {
    heading: "enable",
    content: "是否使用外部视频源："
  }, {
    heading: "enable",
    content: "true：使用外部视频源，SDK 会准备接收外部视频帧。"
  }, {
    heading: "enable",
    content: "false：（默认）不使用外部视频源。"
  }, {
    heading: "usetexture",
    content: "是否使用 Texture 格式的外部视频帧："
  }, {
    heading: "usetexture",
    content: "true：使用 Texture 格式的外部视频帧。"
  }, {
    heading: "usetexture",
    content: "false：（默认）不使用 Texture 格式的外部视频帧。"
  }, {
    heading: "sourcetype",
    content: "外部视频帧是否为编码格式，详见 ExternalVideoSourceType。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-8",
    content: "RtcEngine"
  }],
  headings: [{
    id: "createcustomvideotrack",
    content: "createCustomVideoTrack"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "destroycustomvideotrack",
    content: "destroyCustomVideoTrack"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "video_track_id",
    content: "`video_track_id`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "istextureencodesupported",
    content: "isTextureEncodeSupported"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "pushexternalvideoframebyid-12",
    content: "pushExternalVideoFrameById [1/2]"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "frame",
    content: "`frame`"
  }, {
    id: "videotrackid",
    content: "`videoTrackId`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "pushexternalvideoframe-12",
    content: "pushExternalVideoFrame [1/2]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "frame-1",
    content: "`frame`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "pushexternalvideoframebyid-22",
    content: "pushExternalVideoFrameById [2/2]"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "frame-2",
    content: "`frame`"
  }, {
    id: "videotrackid-1",
    content: "`videoTrackId`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "pushexternalvideoframe-22",
    content: "pushExternalVideoFrame [2/2]"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "frame-3",
    content: "`frame`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "setexternalremoteeglcontext",
    content: "setExternalRemoteEglContext"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "eglcontext",
    content: "`eglContext`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "setexternalvideosource",
    content: "setExternalVideoSource"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "enable",
    content: "`enable`"
  }, {
    id: "usetexture",
    content: "`useTexture`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#createcustomvideotrack",
  title: _jsx(_Fragment, {
    children: "createCustomVideoTrack"
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
  url: "#destroycustomvideotrack",
  title: _jsx(_Fragment, {
    children: "destroyCustomVideoTrack"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#video_track_id",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "video_track_id"
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
  url: "#istextureencodesupported",
  title: _jsx(_Fragment, {
    children: "isTextureEncodeSupported"
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
  url: "#pushexternalvideoframebyid-12",
  title: _jsx(_Fragment, {
    children: "pushExternalVideoFrameById [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#frame",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frame"
    })
  })
}, {
  depth: 4,
  url: "#videotrackid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoTrackId"
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
  url: "#pushexternalvideoframe-12",
  title: _jsx(_Fragment, {
    children: "pushExternalVideoFrame [1/2]"
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
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#frame-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frame"
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
  url: "#pushexternalvideoframebyid-22",
  title: _jsx(_Fragment, {
    children: "pushExternalVideoFrameById [2/2]"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#frame-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frame"
    })
  })
}, {
  depth: 4,
  url: "#videotrackid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoTrackId"
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
  url: "#pushexternalvideoframe-22",
  title: _jsx(_Fragment, {
    children: "pushExternalVideoFrame [2/2]"
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
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#frame-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "frame"
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
  url: "#setexternalremoteeglcontext",
  title: _jsx(_Fragment, {
    children: "setExternalRemoteEglContext"
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
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#eglcontext",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "eglContext"
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
  url: "#setexternalvideosource",
  title: _jsx(_Fragment, {
    children: "setExternalVideoSource"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#enable",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enable"
    })
  })
}, {
  depth: 4,
  url: "#usetexture",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "useTexture"
    })
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
      id: "toc_video_custom_capturenrendering"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createcustomvideotrack"
    }), `
`, _jsx(_components.h2, {
      id: "createcustomvideotrack",
      children: "createCustomVideoTrack"
    }), `
`, _jsx(_components.p, {
      children: "创建一个自定义视频轨道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createcustomvideotrack__prototype"
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
              children: " createCustomVideoTrack"
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
      id: "api_irtcengine_createcustomvideotrack__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法创建一个视频轨道，并获取视频轨道 ID。该 ID 可用于发布自定义视频源。要发布自定义视频源，请按照以下步骤操作："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "调用该方法创建一个视频轨道，并获取视频轨道 ID。"
      }), `
`, _jsx(_components.li, {
        children: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。"
      }), `
`, _jsx(_components.li, {
        children: "调用 pushExternalVideoFrameById，并将 videoTrackId 设置为第 2 步中指定的视频轨道 ID，即可在频道中发布对应的自定义视频源。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createcustomvideotrack__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回视频轨道的唯一标识符，即视频轨道 ID。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 0xffffffff。"
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
      id: "api_irtcengine_destroycustomvideotrack"
    }), `
`, _jsx(_components.h2, {
      id: "destroycustomvideotrack",
      children: "destroyCustomVideoTrack"
    }), `
`, _jsx(_components.p, {
      children: "销毁指定的视频轨道。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomvideotrack__prototype"
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
              children: " destroyCustomVideoTrack"
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
              children: " video_track_id);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomvideotrack__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomvideotrack__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "video_track_id",
      children: _jsx(_components.code, {
        children: "video_track_id"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack",
        children: "createCustomVideoTrack"
      }), " 返回的视频轨道 ID。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroycustomvideotrack__return_values"
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
      id: "api_irtcengine_istextureencodesupported"
    }), `
`, _jsx(_components.h2, {
      id: "istextureencodesupported",
      children: "isTextureEncodeSupported"
    }), `
`, _jsx(_components.p, {
      children: "检查视频是否支持 Texture 编码。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_istextureencodesupported__prototype"
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
              children: " isTextureEncodeSupported"
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
      id: "api_irtcengine_istextureencodesupported__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_istextureencodesupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：支持 Texture 编码。"
      }), `
`, _jsx(_components.li, {
        children: "false：不支持 Texture 编码。"
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
      id: "api_irtcengine_pushvideoframe"
    }), `
`, _jsx(_components.h2, {
      id: "pushexternalvideoframebyid-12",
      children: "pushExternalVideoFrameById [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "通过视频轨道向 SDK 推送外部原始视频帧。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe__prototype"
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
              children: " pushExternalVideoFrameById"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoFrame frame, "
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
              children: " videoTrackId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "要发布自定义视频源，请按照以下步骤操作："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 createCustomVideoTrack 创建视频轨道并获取视频轨道 ID。"
      }), `
`, _jsx(_components.li, {
        children: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。"
      }), `
`, _jsx(_components.li, {
        children: "调用 pushExternalVideoFrameById，并将 videoTrackId 设置为第 2 步中设置的视频轨道 ID，即可在频道中发布对应的自定义视频源。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["你可以通过调用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrameById"
      }), " 或调用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrameById"
      }), " （参数为 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-externalvideoframe",
        children: "AgoraVideoFrame"
      }), " ）推送视频帧。"]
    }), `
`, _jsxs(_components.p, {
      children: ["注： 如果你只需向频道中推送一个自定义视频源，可以直接调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource",
        children: "setExternalVideoSource"
      }), "，SDK 会自动创建一个 ", _jsx(_components.code, {
        children: "videoTrackId"
      }), " 为 0 的视频轨道。 危险：调用本方法后，即使你停止向 SDK 推送外部视频帧，自定义视频流仍会计入视频时长并产生费用。声网建议你根据实际情况采取适当措施以避免此类视频计费："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你不再需要采集外部视频数据，可以调用 destroyCustomVideoTrack 销毁自定义视频轨道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你只想将外部视频数据用于本地预览而不发布到频道中，可以调用 muteLocalVideoStream 取消发送视频流，或调用 updateChannelMediaOptions 将 publishCustomVideoTrack 设置为 false。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "frame",
      children: _jsx(_components.code, {
        children: "frame"
      })
    }), `
`, _jsx(_components.p, {
      children: "要推送的视频帧。"
    }), `
`, _jsx(_components.h4, {
      id: "videotrackid",
      children: _jsx(_components.code, {
        children: "videoTrackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack",
        children: "createCustomVideoTrack"
      }), " 返回的视频轨道 ID。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你只需推送一个自定义视频源，请将 ", _jsx(_components.code, {
            children: "videoTrackId"
          }), " 设置为 0。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe__return_values"
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
      id: "api_irtcengine_pushvideoframe2"
    }), `
`, _jsx(_components.h2, {
      id: "pushexternalvideoframe-12",
      children: "pushExternalVideoFrame [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "将外部原始视频帧推送至 SDK。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe2__prototype"
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
              children: " pushExternalVideoFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VideoFrame frame)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "该方法已废弃。"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource",
        children: "setExternalVideoSource"
      }), " 方法并将 ", _jsx(_components.code, {
        children: "enabled"
      }), " 参数设置为 true， ", _jsx(_components.code, {
        children: "encodedFrame"
      }), " 参数设置为 false 后，可以使用该方法将外部原始视频帧推送至 SDK。你可以调用该方法或 ", _jsx(_components.code, {
        children: "pushExternalVideoFrame"
      }), " 推送视频帧。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "frame-1",
      children: _jsx(_components.code, {
        children: "frame"
      })
    }), `
`, _jsx(_components.p, {
      children: "要推送的视频帧。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：推送视频帧成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：推送视频帧失败。"
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
      id: "api_irtcengine_pushvideoframe3"
    }), `
`, _jsx(_components.h2, {
      id: "pushexternalvideoframebyid-22",
      children: "pushExternalVideoFrameById [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "通过视频轨道向 SDK 推送外部原始视频帧。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe3__prototype"
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
              children: " pushExternalVideoFrameById"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AgoraVideoFrame frame, "
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
              children: " videoTrackId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe3__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "要发布自定义视频源，请按照以下步骤操作："
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "调用 createCustomVideoTrack 创建视频轨道并获取视频轨道 ID。"
      }), `
`, _jsx(_components.li, {
        children: "调用 joinChannel 加入频道。在 ChannelMediaOptions 中，将 customVideoTrackId 设置为要发布的视频轨道 ID，并将 publishCustomVideoTrack 设置为 true。"
      }), `
`, _jsx(_components.li, {
        children: "调用 pushExternalVideoFrameById，并将 videoTrackId 设置为步骤 2 中设置的视频轨道 ID，即可在频道中发布对应的自定义视频源。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["你可以通过调用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrameById"
      }), " 或调用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrame"
      }), " 推送视频帧。"]
    }), `
`, _jsxs(_components.p, {
      children: ["注： 如果你只需向频道中推送一个自定义视频源，可以直接调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource",
        children: "setExternalVideoSource"
      }), " 方法，SDK 会自动创建一个 ", _jsx(_components.code, {
        children: "videoTrackId"
      }), " 为 0 的视频轨道。 警告：调用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrameById"
      }), " 后，即使你停止向 SDK 推送外部视频帧，自定义视频流仍会被计入视频时长并产生费用。声网建议你根据实际情况采取适当措施以避免此类视频计费："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你不再需要采集外部视频数据，可以调用 destroyCustomVideoTrack 销毁自定义视频轨道。"
      }), `
`, _jsx(_components.li, {
        children: "如果你只想将外部视频数据用于本地预览而不在频道中发布，可以调用 muteLocalVideoStream 取消发送视频流，或调用 updateChannelMediaOptions 将 publishCustomVideoTrack 设置为 false。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe3__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "frame-2",
      children: _jsx(_components.code, {
        children: "frame"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要推送的外部原始视频帧。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-externalvideoframe",
        children: "AgoraVideoFrame"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "videotrackid-1",
      children: _jsx(_components.code, {
        children: "videoTrackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_createcustomvideotrack",
        children: "createCustomVideoTrack"
      }), " 返回的视频轨道 ID。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你只需推送一个自定义视频源，请将 ", _jsx(_components.code, {
            children: "videoTrackId"
          }), " 设置为 0。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe3__return_values"
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
      id: "api_irtcengine_pushvideoframe4"
    }), `
`, _jsx(_components.h2, {
      id: "pushexternalvideoframe-22",
      children: "pushExternalVideoFrame [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "将外部原始视频帧推送至 SDK。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe4__prototype"
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
              children: " pushExternalVideoFrame"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AgoraVideoFrame frame)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe4__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.0 版本废弃。"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-custom-capturenrendering#api_irtcengine_setexternalvideosource",
        children: "setExternalVideoSource"
      }), " 方法并将 ", _jsx(_components.code, {
        children: "enabled"
      }), " 参数设置为 true， ", _jsx(_components.code, {
        children: "encodedFrame"
      }), " 参数设置为 false 后，可以使用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrame"
      }), " 将外部原始视频帧推送至 SDK。你也可以调用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrame"
      }), " 推送视频帧。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe4__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "frame-3",
      children: _jsx(_components.code, {
        children: "frame"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要推送的外部原始视频帧。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-externalvideoframe",
        children: "AgoraVideoFrame"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pushvideoframe4__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：推送成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：推送失败。"
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
      id: "api_irtcengine_setexternalremoteeglcontext"
    }), `
`, _jsx(_components.h2, {
      id: "setexternalremoteeglcontext",
      children: "setExternalRemoteEglContext"
    }), `
`, _jsx(_components.p, {
      children: "设置用于渲染远端视频流的 EGL 上下文。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalremoteeglcontext__prototype"
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
              children: " setExternalRemoteEglContext"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Object eglContext);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalremoteeglcontext__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于替换 SDK 默认的远端 EGL 上下文，便于你自行管理 EGL 上下文。当引擎销毁时，SDK 会自动释放该上下文。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalremoteeglcontext__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于使用自定义渲染方式（如 Texture 格式）替代 SDK 默认渲染方式渲染远端视频帧的场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalremoteeglcontext__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalremoteeglcontext__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "eglcontext",
      children: _jsx(_components.code, {
        children: "eglContext"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于渲染远端视频流的 EGL 上下文。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalremoteeglcontext__return_values"
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
      id: "api_irtcengine_setexternalvideosource"
    }), `
`, _jsx(_components.h2, {
      id: "setexternalvideosource",
      children: "setExternalVideoSource"
    }), `
`, _jsx(_components.p, {
      children: "配置外部视频源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalvideosource__prototype"
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
              children: " setExternalVideoSource"
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
              children: " enable, "
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
              children: " useTexture, Constants.ExternalVideoSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalvideosource__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，可以调用 ", _jsx(_components.code, {
        children: "pushExternalVideoFrameById"
      }), " 向 SDK 推送外部视频数据。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "频道内不支持动态切换视频源。若需从外部视频源切换为内部视频源，必须先离开频道，调用该方法关闭外部视频源，再重新加入频道。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalvideosource__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalvideosource__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enable",
      children: _jsx(_components.code, {
        children: "enable"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否使用外部视频源："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：使用外部视频源，SDK 会准备接收外部视频帧。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不使用外部视频源。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "usetexture",
      children: _jsx(_components.code, {
        children: "useTexture"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否使用 Texture 格式的外部视频帧："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：使用 Texture 格式的外部视频帧。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不使用 Texture 格式的外部视频帧。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["外部视频帧是否为编码格式，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-externalvideosourcetype",
        children: "ExternalVideoSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalvideosource__return_values"
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
