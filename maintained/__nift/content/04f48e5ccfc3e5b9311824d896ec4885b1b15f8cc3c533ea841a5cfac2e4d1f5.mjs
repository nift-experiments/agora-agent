import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "原始视频数据",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_video_raw" />

<a id="api_ivideoframeobserver_getmirrorapplied" />

## getMirrorApplied [#getmirrorapplied]

每次 SDK 接收到视频帧时触发的回调，用于设置是否对采集的视频进行镜像。

<a id="api_ivideoframeobserver_getmirrorapplied__prototype" />

\`\`\`java
@CalledByNative boolean getMirrorApplied();
\`\`\`

<a id="api_ivideoframeobserver_getmirrorapplied__detailed_desc" />

如果你希望获取的视频数据是原始视频的镜像图像，需要在调用 [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver) 时注册该回调。成功注册视频帧观察器后，SDK 每次接收到视频帧时都会触发该回调。你需要在该回调的返回值中设置是否对视频帧进行镜像。

注：

* 在 Android 平台，该回调支持的视频数据格式包括：I420、RGBA 和 Texture。
* 该方法与 setVideoEncoderConfiguration 都支持设置镜像效果。建议你仅使用其中一种方式进行设置，同时使用两种方式会导致镜像效果叠加，从而使设置失效。

<a id="api_ivideoframeobserver_getmirrorapplied__timing" />

### 调用时机 [#调用时机]

该回调在 SDK 每次接收到视频帧时被触发。

<a id="api_ivideoframeobserver_getmirrorapplied__return_values" />

### 返回值 [#返回值]

是否对采集的视频进行镜像：

* true：对采集的视频进行镜像。
* false：（默认）不对采集的视频进行镜像。

### 所属接口类 [#所属接口类]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)

<a id="api_ivideoframeobserver_getobservedframeposition" />

## getObservedFramePosition [#getobservedframeposition]

设置视频观察器的帧位置。

<a id="api_ivideoframeobserver_getobservedframeposition__prototype" />

\`\`\`java
@CalledByNative int getObservedFramePosition();
\`\`\`

<a id="api_ivideoframeobserver_getobservedframeposition__detailed_desc" />

在成功注册视频数据观察器后，SDK 会通过该回调判断是否在特定的视频帧处理位置触发 [onCaptureVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe)、 [onRenderVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe) 和 [onPreEncodeVideoFrame](/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe) 回调。你可以根据业务场景，通过修改返回值设置一个或多个需要观察的位置：

* VIDEO\\_MODULE\\_POSITION\\_POST\\_CAPTURER (1 \\<\\< 0)：视频采集后的位置，对应 onCaptureVideoFrame 回调。
* VIDEO\\_MODULE\\_POSITION\\_PRE\\_RENDERER (1 \\<\\< 1)：远端视频渲染前的位置，对应 onRenderVideoFrame 回调。
* VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER (1 \\<\\< 2)：编码前的位置，对应 onPreEncodeVideoFrame 回调。

<a id="api_ivideoframeobserver_getobservedframeposition__return_values" />

### 返回值 [#返回值-1]

方法调用成功，返回用于控制视频观察器帧位置的位掩码：

* VIDEO\\_MODULE\\_POSITION\\_POST\\_CAPTURER (1 \\<\\< 0)：视频采集后的位置。
* VIDEO\\_MODULE\\_POSITION\\_PRE\\_RENDERER (1 \\<\\< 1)：远端视频渲染前的位置。
* VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER (1 \\<\\< 2)：编码前的位置。

### 所属接口类 [#所属接口类-1]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)

<a id="api_ivideoframeobserver_getrotationapplied" />

## getRotationApplied [#getrotationapplied]

getRotationApplied 回调在每次 SDK 接收到视频帧时触发，用于设置是否旋转采集的视频。

<a id="api_ivideoframeobserver_getrotationapplied__prototype" />

\`\`\`java
@CalledByNative boolean getRotationApplied();
\`\`\`

<a id="api_ivideoframeobserver_getrotationapplied__detailed_desc" />

如果你希望根据 \`VideoFrame\` 中的 \`rotation\` 成员旋转采集的视频，需要在调用 [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver) 时注册该回调。注册成功后，SDK 每次接收到视频帧时会触发该回调。你需要通过该回调的返回值设置是否旋转视频帧。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在 Android 平台上，该回调支持的视频数据格式包括：I420、RGBA 和 Texture。
  </CalloutDescription>
</CalloutContainer>

<a id="api_ivideoframeobserver_getrotationapplied__timing" />

### 调用时机 [#调用时机-1]

该回调在 SDK 每次接收到视频帧时被触发。

<a id="api_ivideoframeobserver_getrotationapplied__return_values" />

### 返回值 [#返回值-2]

* true：旋转采集的视频。
* false：（默认）不旋转采集的视频。

### 所属接口类 [#所属接口类-2]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)

<a id="api_ivideoframeobserver_getvideoformatpreference" />

## getVideoFormatPreference [#getvideoformatpreference]

设置 SDK 输出的原始视频数据格式。

<a id="api_ivideoframeobserver_getvideoformatpreference__prototype" />

\`\`\`java
@CalledByNative int getVideoFormatPreference();
\`\`\`

<a id="api_ivideoframeobserver_getvideoformatpreference__detailed_desc" />

调用 [registerVideoFrameObserver](/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver) 方法注册回调后，SDK 每次接收到视频帧时会触发该回调。你需要在该回调的返回值中设置期望的视频数据格式。

注： \`VIDEO_PIXEL_DEFAULT\` 表示原始视频的默认像素格式类型，具体如下：

* 在 Android 平台上，默认的视频帧类型可能为 I420Buffer 或 TextureBuffer。 TextureBuffer 类型的纹理格式可能为 OES 或 RGB。如果 getVideoFormatPreference 返回的视频帧类型为 VIDEO\\_PIXEL\\_DEFAULT，则在处理视频数据时需要适配 I420Buffer 或 TextureBuffer。

视频帧类型固定为 \`I420Buffer\` 的情况包括但不限于：

* 特定设备，例如：LG G5 SE（H848）、Google Pixel 4a、Samsung Galaxy A7 或小米 Max。
* 已集成美颜特效扩展并启用了视频降噪或弱光增强功能。

<a id="api_ivideoframeobserver_getvideoformatpreference__return_values" />

### 返回值 [#返回值-3]

方法调用成功，返回 SDK 输出的原始数据格式：

* VIDEO\\_PIXEL\\_DEFAULT （0）：原始视频格式，需适配 I420Buffer 或 TextureBuffer。
* VIDEO\\_PIXEL\\_I420 （1）：I420 格式。
* VIDEO\\_PIXEL\\_RGBA （4）：RGBA 格式。
* VIDEO\\_PIXEL\\_I422 （16）：I422 格式。

### 所属接口类 [#所属接口类-3]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)

<a id="api_ivideoframeobserver_getvideoframeprocessmode" />

## getVideoFrameProcessMode [#getvideoframeprocessmode]

getVideoFrameProcessMode 回调。每次 SDK 接收到视频帧时触发，并提示你设置视频帧的处理模式。

<a id="api_ivideoframeobserver_getvideoframeprocessmode__prototype" />

\`\`\`java
@CalledByNative int getVideoFrameProcessMode();
\`\`\`

<a id="api_ivideoframeobserver_getvideoframeprocessmode__detailed_desc" />

在成功注册视频帧观察器后，SDK 每次接收到视频帧时会触发 [getVideoFrameProcessMode](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode) 回调。你需要在该回调的返回值中设置偏好的处理模式。

<a id="api_ivideoframeobserver_getvideoframeprocessmode__return_values" />

### 返回值 [#返回值-4]

视频帧的处理模式：

* PROCESS\\_MODE\\_READ\\_ONLY （0）：（默认）只读取视频帧。
* PROCESS\\_MODE\\_READ\\_WRITE （1）：读取并写入视频帧。

### 所属接口类 [#所属接口类-4]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)

<a id="api_irtcengine_registervideoframeobserver" />

## registerVideoFrameObserver [#registervideoframeobserver]

注册原始视频帧观察器对象。

<a id="api_irtcengine_registervideoframeobserver__prototype" />

\`\`\`java
public abstract int registerVideoFrameObserver(IVideoFrameObserver observer);
\`\`\`

<a id="api_irtcengine_registervideoframeobserver__detailed_desc" />

建议通过该方法注册一个 [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver) 实例，并在该类中根据需要实现回调。成功注册后，每当接收到视频帧时，SDK 会触发相应的回调。你可以在虚拟背景、美颜特效等视频预处理场景中使用这些原始视频数据。

注： 在处理回调中返回的视频数据时，请注意 \`width\` 和 \`height\` 参数可能发生变化，具体情况如下：

* 当网络状况恶化时，视频分辨率会逐步降低。
* 当用户调整视频配置时，回调中返回的视频分辨率也会随之变化。

<a id="api_irtcengine_registervideoframeobserver__timing" />

### 调用时机 [#调用时机-2]

请在加入频道前调用此方法。

<a id="api_irtcengine_registervideoframeobserver__parameters" />

### 参数 [#参数]

#### \`observer\` [#observer]

观察器实例。详见 [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如需释放该实例，请将该参数设为 \`null\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_registervideoframeobserver__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_ivideoframeobserver_oncapturevideoframe" />

## onCaptureVideoFrame [#oncapturevideoframe]

本地设备采集到视频帧时触发的回调。

<a id="callback_ivideoframeobserver_oncapturevideoframe__prototype" />

\`\`\`java
@CalledByNative boolean onCaptureVideoFrame(int sourceType, VideoFrame videoFrame);
\`\`\`

<a id="callback_ivideoframeobserver_oncapturevideoframe__detailed_desc" />

你可以通过该回调获取本地设备采集的原始视频数据，并根据需要进行预处理。预处理完成后，可以直接在该回调中修改 \`videoFrame\`，并将返回值设置为 true，以将修改后的视频数据发送给 SDK。如果需要将预处理后的视频数据发送给 SDK，需先调用 [getVideoFrameProcessMode](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode) 将视频处理模式设置为读写模式（\`PROCESS_MODE_READ_WRITE\` ）。

注：

* 如果获取的视频数据类型为 RGBA，SDK 不支持处理 alpha 通道的数据。
* 建议确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致。否则，可能会导致本地预览和远端视频显示出现异常旋转、拉伸等问题。
* 通过该回调获取的视频格式默认可能为 I420Buffer 或 TextureBuffer。 TextureBuffer 的纹理格式可能为 OES 格式或 RGB 格式。如果你需要其他格式的视频数据，可以在 getVideoFormatPreference 回调的返回值中设置期望的数据格式。

<a id="callback_ivideoframeobserver_oncapturevideoframe__timing" />

### 触发时机 [#触发时机]

该回调在成功注册视频数据观察器后，每次 SDK 采集到视频帧时被触发。

<a id="callback_ivideoframeobserver_oncapturevideoframe__parameters" />

### 参数 [#参数-1]

#### \`sourceType\` [#sourcetype]

视频源类型，包括摄像头、屏幕或媒体播放器。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`videoFrame\` [#videoframe]

视频帧。

注： 通过该回调获取的视频帧数据格式默认值如下：

* Android：I420 或 RGB（GLES20.GL\\_TEXTURE\\_2D）

<a id="callback_ivideoframeobserver_oncapturevideoframe__return_values" />

### 返回值 [#返回值-6]

* 当视频处理模式为 PROCESS\\_MODE\\_READ\\_ONLY 时：
  * true：保留以供后续使用。
  * false：保留以供后续使用。
* 当视频处理模式为 PROCESS\\_MODE\\_READ\\_WRITE 时：
  * true：设置 SDK 接收该视频帧。
  * false：设置 SDK 丢弃该视频帧。

### 所属接口类 [#所属接口类-6]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)

<a id="callback_ivideoframeobserver_onpreencodevideoframe" />

## onPreEncodeVideoFrame [#onpreencodevideoframe]

每次 SDK 接收到编码前视频帧时触发该回调。

<a id="callback_ivideoframeobserver_onpreencodevideoframe__prototype" />

\`\`\`java
@CalledByNative boolean onPreEncodeVideoFrame(int sourceType, VideoFrame videoFrame);
\`\`\`

<a id="callback_ivideoframeobserver_onpreencodevideoframe__detailed_desc" />

在你成功注册视频帧观察器后，SDK 每次接收到视频帧时都会触发该回调。在该回调中，你可以获取编码前的视频数据，并根据具体场景对数据进行处理。处理完成后，可以将处理后的视频数据返回给 SDK。

注：

* 如果你需要将预处理后的视频数据发送回 SDK，需要先调用 getVideoFrameProcessMode 将视频处理模式设置为读写模式（PROCESS\\_MODE\\_READ\\_WRITE ）。
* 若需获取从第二路屏幕采集的编码前视频数据，需要通过 getObservedFramePosition 设置帧位置为 VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER （1 \\<\\< 2）。
* 该回调获取的视频数据已被预处理，包括裁剪、旋转和美颜特效。
* 建议确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致，否则可能导致本地预览和远端视频显示出现异常旋转、图像拉伸等问题。

<a id="callback_ivideoframeobserver_onpreencodevideoframe__timing" />

### 触发时机 [#触发时机-1]

该回调在 SDK 每次接收到编码前的视频帧时被触发。

<a id="callback_ivideoframeobserver_onpreencodevideoframe__parameters" />

### 参数 [#参数-2]

#### \`sourceType\` [#sourcetype-1]

视频源类型。详见 [VideoSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype)。

#### \`videoFrame\` [#videoframe-1]

视频帧。

注： 通过该回调获取的视频帧数据格式默认如下：

* Android：I420 或 RGB（GLES20.GL\\_TEXTURE\\_2D）。

<a id="callback_ivideoframeobserver_onpreencodevideoframe__return_values" />

### 返回值 [#返回值-7]

* 当视频处理模式为 PROCESS\\_MODE\\_READ\\_ONLY 时：
  * true：保留以供后续使用。
  * false：保留以供后续使用。
* 当视频处理模式为 PROCESS\\_MODE\\_READ\\_WRITE 时：
  * true：SDK 接收该视频帧。
  * false：SDK 丢弃该视频帧。

### 所属接口类 [#所属接口类-7]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)

<a id="callback_ivideoframeobserver_onrendervideoframe" />

## onRenderVideoFrame [#onrendervideoframe]

远端用户发送视频帧时触发的回调。

<a id="callback_ivideoframeobserver_onrendervideoframe__prototype" />

\`\`\`java
boolean onRenderVideoFrame(String channelId, int uid, VideoFrame videoFrame)
\`\`\`

<a id="callback_ivideoframeobserver_onrendervideoframe__detailed_desc" />

在你成功注册视频帧观察器后，SDK 每次接收到远端用户发送的视频帧时会触发该回调。你可以在渲染前获取远端发送的视频数据，并根据具体场景进行处理。通过该回调获取的视频帧默认格式可能为 \`I420Buffer\` 或 \`TextureBuffer\`， \`TextureBuffer\` 的纹理格式可能为 \`OES\` 或 \`RGB\`。如果你需要其他格式的视频数据，可以在 [getVideoFormatPreference](/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoformatpreference) 回调中设置期望的数据格式。

注：

* 如果你需要将预处理后的视频数据发送回 SDK，需要先调用 getVideoFrameProcessMode 将视频处理模式设置为读写模式（PROCESS\\_MODE\\_READ\\_WRITE ）。
* 如果你获取的视频数据类型为 RGBA，SDK 不支持处理 alpha 通道的数据。
* 建议你确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致。否则，可能会导致本地预览和远端视频显示出现异常旋转、图像拉伸等问题。

<a id="callback_ivideoframeobserver_onrendervideoframe__timing" />

### 触发时机 [#触发时机-2]

该回调在 SDK 接收到远端用户发送的视频帧时被触发。

<a id="callback_ivideoframeobserver_onrendervideoframe__parameters" />

### 参数 [#参数-3]

#### \`channelId\` [#channelid]

频道 ID。

#### \`uid\` [#uid]

发送当前视频帧的远端用户 ID。

#### \`videoFrame\` [#videoframe-2]

视频帧。

<a id="callback_ivideoframeobserver_onrendervideoframe__return_values" />

### 返回值 [#返回值-8]

* 当视频处理模式为 PROCESS\\_MODE\\_READ\\_ONLY 时：
  * true：保留以供后续使用。
  * false：保留以供后续使用。
* 当视频处理模式为 PROCESS\\_MODE\\_READ\\_WRITE 时：
  * true：SDK 接收该视频帧。
  * false：SDK 丢弃该视频帧。

### 所属接口类 [#所属接口类-8]

* [IVideoFrameObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver)
`;
export let structuredData = {
  contents: [{
    heading: "getmirrorapplied",
    content: "每次 SDK 接收到视频帧时触发的回调，用于设置是否对采集的视频进行镜像。"
  }, {
    heading: "getmirrorapplied",
    content: "如果你希望获取的视频数据是原始视频的镜像图像，需要在调用 registerVideoFrameObserver 时注册该回调。成功注册视频帧观察器后，SDK 每次接收到视频帧时都会触发该回调。你需要在该回调的返回值中设置是否对视频帧进行镜像。"
  }, {
    heading: "getmirrorapplied",
    content: "注："
  }, {
    heading: "getmirrorapplied",
    content: "在 Android 平台，该回调支持的视频数据格式包括：I420、RGBA 和 Texture。"
  }, {
    heading: "getmirrorapplied",
    content: "该方法与 setVideoEncoderConfiguration 都支持设置镜像效果。建议你仅使用其中一种方式进行设置，同时使用两种方式会导致镜像效果叠加，从而使设置失效。"
  }, {
    heading: "调用时机",
    content: "该回调在 SDK 每次接收到视频帧时被触发。"
  }, {
    heading: "返回值",
    content: "是否对采集的视频进行镜像："
  }, {
    heading: "返回值",
    content: "true：对采集的视频进行镜像。"
  }, {
    heading: "返回值",
    content: "false：（默认）不对采集的视频进行镜像。"
  }, {
    heading: "所属接口类",
    content: "IVideoFrameObserver"
  }, {
    heading: "getobservedframeposition",
    content: "设置视频观察器的帧位置。"
  }, {
    heading: "getobservedframeposition",
    content: "在成功注册视频数据观察器后，SDK 会通过该回调判断是否在特定的视频帧处理位置触发 onCaptureVideoFrame、 onRenderVideoFrame 和 onPreEncodeVideoFrame 回调。你可以根据业务场景，通过修改返回值设置一个或多个需要观察的位置："
  }, {
    heading: "getobservedframeposition",
    content: "VIDEO\\_MODULE\\_POSITION\\_POST\\_CAPTURER (1 \\<\\< 0)：视频采集后的位置，对应 onCaptureVideoFrame 回调。"
  }, {
    heading: "getobservedframeposition",
    content: "VIDEO\\_MODULE\\_POSITION\\_PRE\\_RENDERER (1 \\<\\< 1)：远端视频渲染前的位置，对应 onRenderVideoFrame 回调。"
  }, {
    heading: "getobservedframeposition",
    content: "VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER (1 \\<\\< 2)：编码前的位置，对应 onPreEncodeVideoFrame 回调。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回用于控制视频观察器帧位置的位掩码："
  }, {
    heading: "返回值-1",
    content: "VIDEO\\_MODULE\\_POSITION\\_POST\\_CAPTURER (1 \\<\\< 0)：视频采集后的位置。"
  }, {
    heading: "返回值-1",
    content: "VIDEO\\_MODULE\\_POSITION\\_PRE\\_RENDERER (1 \\<\\< 1)：远端视频渲染前的位置。"
  }, {
    heading: "返回值-1",
    content: "VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER (1 \\<\\< 2)：编码前的位置。"
  }, {
    heading: "所属接口类-1",
    content: "IVideoFrameObserver"
  }, {
    heading: "getrotationapplied",
    content: "getRotationApplied 回调在每次 SDK 接收到视频帧时触发，用于设置是否旋转采集的视频。"
  }, {
    heading: "getrotationapplied",
    content: "如果你希望根据 `VideoFrame` 中的 `rotation` 成员旋转采集的视频，需要在调用 registerVideoFrameObserver 时注册该回调。注册成功后，SDK 每次接收到视频帧时会触发该回调。你需要通过该回调的返回值设置是否旋转视频帧。"
  }, {
    heading: "getrotationapplied",
    content: "在 Android 平台上，该回调支持的视频数据格式包括：I420、RGBA 和 Texture。"
  }, {
    heading: "调用时机-1",
    content: "该回调在 SDK 每次接收到视频帧时被触发。"
  }, {
    heading: "返回值-2",
    content: "true：旋转采集的视频。"
  }, {
    heading: "返回值-2",
    content: "false：（默认）不旋转采集的视频。"
  }, {
    heading: "所属接口类-2",
    content: "IVideoFrameObserver"
  }, {
    heading: "getvideoformatpreference",
    content: "设置 SDK 输出的原始视频数据格式。"
  }, {
    heading: "getvideoformatpreference",
    content: "调用 registerVideoFrameObserver 方法注册回调后，SDK 每次接收到视频帧时会触发该回调。你需要在该回调的返回值中设置期望的视频数据格式。"
  }, {
    heading: "getvideoformatpreference",
    content: "注： `VIDEO_PIXEL_DEFAULT` 表示原始视频的默认像素格式类型，具体如下："
  }, {
    heading: "getvideoformatpreference",
    content: "在 Android 平台上，默认的视频帧类型可能为 I420Buffer 或 TextureBuffer。 TextureBuffer 类型的纹理格式可能为 OES 或 RGB。如果 getVideoFormatPreference 返回的视频帧类型为 VIDEO\\_PIXEL\\_DEFAULT，则在处理视频数据时需要适配 I420Buffer 或 TextureBuffer。"
  }, {
    heading: "getvideoformatpreference",
    content: "视频帧类型固定为 `I420Buffer` 的情况包括但不限于："
  }, {
    heading: "getvideoformatpreference",
    content: "特定设备，例如：LG G5 SE（H848）、Google Pixel 4a、Samsung Galaxy A7 或小米 Max。"
  }, {
    heading: "getvideoformatpreference",
    content: "已集成美颜特效扩展并启用了视频降噪或弱光增强功能。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功，返回 SDK 输出的原始数据格式："
  }, {
    heading: "返回值-3",
    content: "VIDEO\\_PIXEL\\_DEFAULT （0）：原始视频格式，需适配 I420Buffer 或 TextureBuffer。"
  }, {
    heading: "返回值-3",
    content: "VIDEO\\_PIXEL\\_I420 （1）：I420 格式。"
  }, {
    heading: "返回值-3",
    content: "VIDEO\\_PIXEL\\_RGBA （4）：RGBA 格式。"
  }, {
    heading: "返回值-3",
    content: "VIDEO\\_PIXEL\\_I422 （16）：I422 格式。"
  }, {
    heading: "所属接口类-3",
    content: "IVideoFrameObserver"
  }, {
    heading: "getvideoframeprocessmode",
    content: "getVideoFrameProcessMode 回调。每次 SDK 接收到视频帧时触发，并提示你设置视频帧的处理模式。"
  }, {
    heading: "getvideoframeprocessmode",
    content: "在成功注册视频帧观察器后，SDK 每次接收到视频帧时会触发 getVideoFrameProcessMode 回调。你需要在该回调的返回值中设置偏好的处理模式。"
  }, {
    heading: "返回值-4",
    content: "视频帧的处理模式："
  }, {
    heading: "返回值-4",
    content: "PROCESS\\_MODE\\_READ\\_ONLY （0）：（默认）只读取视频帧。"
  }, {
    heading: "返回值-4",
    content: "PROCESS\\_MODE\\_READ\\_WRITE （1）：读取并写入视频帧。"
  }, {
    heading: "所属接口类-4",
    content: "IVideoFrameObserver"
  }, {
    heading: "registervideoframeobserver",
    content: "注册原始视频帧观察器对象。"
  }, {
    heading: "registervideoframeobserver",
    content: "建议通过该方法注册一个 IVideoFrameObserver 实例，并在该类中根据需要实现回调。成功注册后，每当接收到视频帧时，SDK 会触发相应的回调。你可以在虚拟背景、美颜特效等视频预处理场景中使用这些原始视频数据。"
  }, {
    heading: "registervideoframeobserver",
    content: "注： 在处理回调中返回的视频数据时，请注意 `width` 和 `height` 参数可能发生变化，具体情况如下："
  }, {
    heading: "registervideoframeobserver",
    content: "当网络状况恶化时，视频分辨率会逐步降低。"
  }, {
    heading: "registervideoframeobserver",
    content: "当用户调整视频配置时，回调中返回的视频分辨率也会随之变化。"
  }, {
    heading: "调用时机-2",
    content: "请在加入频道前调用此方法。"
  }, {
    heading: "observer",
    content: "观察器实例。详见 IVideoFrameObserver。"
  }, {
    heading: "observer",
    content: "如需释放该实例，请将该参数设为 `null`。"
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
    heading: "oncapturevideoframe",
    content: "本地设备采集到视频帧时触发的回调。"
  }, {
    heading: "oncapturevideoframe",
    content: "你可以通过该回调获取本地设备采集的原始视频数据，并根据需要进行预处理。预处理完成后，可以直接在该回调中修改 `videoFrame`，并将返回值设置为 true，以将修改后的视频数据发送给 SDK。如果需要将预处理后的视频数据发送给 SDK，需先调用 getVideoFrameProcessMode 将视频处理模式设置为读写模式（`PROCESS_MODE_READ_WRITE` ）。"
  }, {
    heading: "oncapturevideoframe",
    content: "注："
  }, {
    heading: "oncapturevideoframe",
    content: "如果获取的视频数据类型为 RGBA，SDK 不支持处理 alpha 通道的数据。"
  }, {
    heading: "oncapturevideoframe",
    content: "建议确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致。否则，可能会导致本地预览和远端视频显示出现异常旋转、拉伸等问题。"
  }, {
    heading: "oncapturevideoframe",
    content: "通过该回调获取的视频格式默认可能为 I420Buffer 或 TextureBuffer。 TextureBuffer 的纹理格式可能为 OES 格式或 RGB 格式。如果你需要其他格式的视频数据，可以在 getVideoFormatPreference 回调的返回值中设置期望的数据格式。"
  }, {
    heading: "触发时机",
    content: "该回调在成功注册视频数据观察器后，每次 SDK 采集到视频帧时被触发。"
  }, {
    heading: "sourcetype",
    content: "视频源类型，包括摄像头、屏幕或媒体播放器。详见 VideoSourceType。"
  }, {
    heading: "videoframe",
    content: "视频帧。"
  }, {
    heading: "videoframe",
    content: "注： 通过该回调获取的视频帧数据格式默认值如下："
  }, {
    heading: "videoframe",
    content: "Android：I420 或 RGB（GLES20.GL\\_TEXTURE\\_2D）"
  }, {
    heading: "返回值-6",
    content: "当视频处理模式为 PROCESS\\_MODE\\_READ\\_ONLY 时："
  }, {
    heading: "返回值-6",
    content: "true：保留以供后续使用。"
  }, {
    heading: "返回值-6",
    content: "false：保留以供后续使用。"
  }, {
    heading: "返回值-6",
    content: "当视频处理模式为 PROCESS\\_MODE\\_READ\\_WRITE 时："
  }, {
    heading: "返回值-6",
    content: "true：设置 SDK 接收该视频帧。"
  }, {
    heading: "返回值-6",
    content: "false：设置 SDK 丢弃该视频帧。"
  }, {
    heading: "所属接口类-6",
    content: "IVideoFrameObserver"
  }, {
    heading: "onpreencodevideoframe",
    content: "每次 SDK 接收到编码前视频帧时触发该回调。"
  }, {
    heading: "onpreencodevideoframe",
    content: "在你成功注册视频帧观察器后，SDK 每次接收到视频帧时都会触发该回调。在该回调中，你可以获取编码前的视频数据，并根据具体场景对数据进行处理。处理完成后，可以将处理后的视频数据返回给 SDK。"
  }, {
    heading: "onpreencodevideoframe",
    content: "注："
  }, {
    heading: "onpreencodevideoframe",
    content: "如果你需要将预处理后的视频数据发送回 SDK，需要先调用 getVideoFrameProcessMode 将视频处理模式设置为读写模式（PROCESS\\_MODE\\_READ\\_WRITE ）。"
  }, {
    heading: "onpreencodevideoframe",
    content: "若需获取从第二路屏幕采集的编码前视频数据，需要通过 getObservedFramePosition 设置帧位置为 VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER （1 \\<\\< 2）。"
  }, {
    heading: "onpreencodevideoframe",
    content: "该回调获取的视频数据已被预处理，包括裁剪、旋转和美颜特效。"
  }, {
    heading: "onpreencodevideoframe",
    content: "建议确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致，否则可能导致本地预览和远端视频显示出现异常旋转、图像拉伸等问题。"
  }, {
    heading: "触发时机-1",
    content: "该回调在 SDK 每次接收到编码前的视频帧时被触发。"
  }, {
    heading: "sourcetype-1",
    content: "视频源类型。详见 VideoSourceType。"
  }, {
    heading: "videoframe-1",
    content: "视频帧。"
  }, {
    heading: "videoframe-1",
    content: "注： 通过该回调获取的视频帧数据格式默认如下："
  }, {
    heading: "videoframe-1",
    content: "Android：I420 或 RGB（GLES20.GL\\_TEXTURE\\_2D）。"
  }, {
    heading: "返回值-7",
    content: "当视频处理模式为 PROCESS\\_MODE\\_READ\\_ONLY 时："
  }, {
    heading: "返回值-7",
    content: "true：保留以供后续使用。"
  }, {
    heading: "返回值-7",
    content: "false：保留以供后续使用。"
  }, {
    heading: "返回值-7",
    content: "当视频处理模式为 PROCESS\\_MODE\\_READ\\_WRITE 时："
  }, {
    heading: "返回值-7",
    content: "true：SDK 接收该视频帧。"
  }, {
    heading: "返回值-7",
    content: "false：SDK 丢弃该视频帧。"
  }, {
    heading: "所属接口类-7",
    content: "IVideoFrameObserver"
  }, {
    heading: "onrendervideoframe",
    content: "远端用户发送视频帧时触发的回调。"
  }, {
    heading: "onrendervideoframe",
    content: "在你成功注册视频帧观察器后，SDK 每次接收到远端用户发送的视频帧时会触发该回调。你可以在渲染前获取远端发送的视频数据，并根据具体场景进行处理。通过该回调获取的视频帧默认格式可能为 `I420Buffer` 或 `TextureBuffer`， `TextureBuffer` 的纹理格式可能为 `OES` 或 `RGB`。如果你需要其他格式的视频数据，可以在 getVideoFormatPreference 回调中设置期望的数据格式。"
  }, {
    heading: "onrendervideoframe",
    content: "注："
  }, {
    heading: "onrendervideoframe",
    content: "如果你需要将预处理后的视频数据发送回 SDK，需要先调用 getVideoFrameProcessMode 将视频处理模式设置为读写模式（PROCESS\\_MODE\\_READ\\_WRITE ）。"
  }, {
    heading: "onrendervideoframe",
    content: "如果你获取的视频数据类型为 RGBA，SDK 不支持处理 alpha 通道的数据。"
  }, {
    heading: "onrendervideoframe",
    content: "建议你确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致。否则，可能会导致本地预览和远端视频显示出现异常旋转、图像拉伸等问题。"
  }, {
    heading: "触发时机-2",
    content: "该回调在 SDK 接收到远端用户发送的视频帧时被触发。"
  }, {
    heading: "channelid",
    content: "频道 ID。"
  }, {
    heading: "uid",
    content: "发送当前视频帧的远端用户 ID。"
  }, {
    heading: "videoframe-2",
    content: "视频帧。"
  }, {
    heading: "返回值-8",
    content: "当视频处理模式为 PROCESS\\_MODE\\_READ\\_ONLY 时："
  }, {
    heading: "返回值-8",
    content: "true：保留以供后续使用。"
  }, {
    heading: "返回值-8",
    content: "false：保留以供后续使用。"
  }, {
    heading: "返回值-8",
    content: "当视频处理模式为 PROCESS\\_MODE\\_READ\\_WRITE 时："
  }, {
    heading: "返回值-8",
    content: "true：SDK 接收该视频帧。"
  }, {
    heading: "返回值-8",
    content: "false：SDK 丢弃该视频帧。"
  }, {
    heading: "所属接口类-8",
    content: "IVideoFrameObserver"
  }],
  headings: [{
    id: "getmirrorapplied",
    content: "getMirrorApplied"
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
    id: "getobservedframeposition",
    content: "getObservedFramePosition"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "getrotationapplied",
    content: "getRotationApplied"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getvideoformatpreference",
    content: "getVideoFormatPreference"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "getvideoframeprocessmode",
    content: "getVideoFrameProcessMode"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "registervideoframeobserver",
    content: "registerVideoFrameObserver"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "observer",
    content: "`observer`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "oncapturevideoframe",
    content: "onCaptureVideoFrame"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "videoframe",
    content: "`videoFrame`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "onpreencodevideoframe",
    content: "onPreEncodeVideoFrame"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "sourcetype-1",
    content: "`sourceType`"
  }, {
    id: "videoframe-1",
    content: "`videoFrame`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "onrendervideoframe",
    content: "onRenderVideoFrame"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "channelid",
    content: "`channelId`"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "videoframe-2",
    content: "`videoFrame`"
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
  url: "#getmirrorapplied",
  title: _jsx(_Fragment, {
    children: "getMirrorApplied"
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
  url: "#getobservedframeposition",
  title: _jsx(_Fragment, {
    children: "getObservedFramePosition"
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
  url: "#getrotationapplied",
  title: _jsx(_Fragment, {
    children: "getRotationApplied"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#getvideoformatpreference",
  title: _jsx(_Fragment, {
    children: "getVideoFormatPreference"
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
  url: "#getvideoframeprocessmode",
  title: _jsx(_Fragment, {
    children: "getVideoFrameProcessMode"
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
  url: "#registervideoframeobserver",
  title: _jsx(_Fragment, {
    children: "registerVideoFrameObserver"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
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
  url: "#observer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "observer"
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
  url: "#oncapturevideoframe",
  title: _jsx(_Fragment, {
    children: "onCaptureVideoFrame"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-1",
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
  url: "#videoframe",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoFrame"
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
  url: "#onpreencodevideoframe",
  title: _jsx(_Fragment, {
    children: "onPreEncodeVideoFrame"
  })
}, {
  depth: 3,
  url: "#触发时机-1",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-2",
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
  depth: 4,
  url: "#videoframe-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoFrame"
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
  url: "#onrendervideoframe",
  title: _jsx(_Fragment, {
    children: "onRenderVideoFrame"
  })
}, {
  depth: 3,
  url: "#触发时机-2",
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
  depth: 4,
  url: "#videoframe-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoFrame"
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
      id: "toc_video_raw"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getmirrorapplied"
    }), `
`, _jsx(_components.h2, {
      id: "getmirrorapplied",
      children: "getMirrorApplied"
    }), `
`, _jsx(_components.p, {
      children: "每次 SDK 接收到视频帧时触发的回调，用于设置是否对采集的视频进行镜像。"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getmirrorapplied__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " getMirrorApplied"
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
      id: "api_ivideoframeobserver_getmirrorapplied__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你希望获取的视频数据是原始视频的镜像图像，需要在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver",
        children: "registerVideoFrameObserver"
      }), " 时注册该回调。成功注册视频帧观察器后，SDK 每次接收到视频帧时都会触发该回调。你需要在该回调的返回值中设置是否对视频帧进行镜像。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在 Android 平台，该回调支持的视频数据格式包括：I420、RGBA 和 Texture。"
      }), `
`, _jsx(_components.li, {
        children: "该方法与 setVideoEncoderConfiguration 都支持设置镜像效果。建议你仅使用其中一种方式进行设置，同时使用两种方式会导致镜像效果叠加，从而使设置失效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getmirrorapplied__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 每次接收到视频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getmirrorapplied__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "是否对采集的视频进行镜像："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：对采集的视频进行镜像。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不对采集的视频进行镜像。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getobservedframeposition"
    }), `
`, _jsx(_components.h2, {
      id: "getobservedframeposition",
      children: "getObservedFramePosition"
    }), `
`, _jsx(_components.p, {
      children: "设置视频观察器的帧位置。"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getobservedframeposition__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " getObservedFramePosition"
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
      id: "api_ivideoframeobserver_getobservedframeposition__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在成功注册视频数据观察器后，SDK 会通过该回调判断是否在特定的视频帧处理位置触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_oncapturevideoframe",
        children: "onCaptureVideoFrame"
      }), "、 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onrendervideoframe",
        children: "onRenderVideoFrame"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#callback_ivideoframeobserver_onpreencodevideoframe",
        children: "onPreEncodeVideoFrame"
      }), " 回调。你可以根据业务场景，通过修改返回值设置一个或多个需要观察的位置："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_MODULE_POSITION_POST_CAPTURER (1 << 0)：视频采集后的位置，对应 onCaptureVideoFrame 回调。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MODULE_POSITION_PRE_RENDERER (1 << 1)：远端视频渲染前的位置，对应 onRenderVideoFrame 回调。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MODULE_POSITION_PRE_ENCODER (1 << 2)：编码前的位置，对应 onPreEncodeVideoFrame 回调。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getobservedframeposition__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回用于控制视频观察器帧位置的位掩码："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_MODULE_POSITION_POST_CAPTURER (1 << 0)：视频采集后的位置。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MODULE_POSITION_PRE_RENDERER (1 << 1)：远端视频渲染前的位置。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_MODULE_POSITION_PRE_ENCODER (1 << 2)：编码前的位置。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getrotationapplied"
    }), `
`, _jsx(_components.h2, {
      id: "getrotationapplied",
      children: "getRotationApplied"
    }), `
`, _jsx(_components.p, {
      children: "getRotationApplied 回调在每次 SDK 接收到视频帧时触发，用于设置是否旋转采集的视频。"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getrotationapplied__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " getRotationApplied"
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
      id: "api_ivideoframeobserver_getrotationapplied__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你希望根据 ", _jsx(_components.code, {
        children: "VideoFrame"
      }), " 中的 ", _jsx(_components.code, {
        children: "rotation"
      }), " 成员旋转采集的视频，需要在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver",
        children: "registerVideoFrameObserver"
      }), " 时注册该回调。注册成功后，SDK 每次接收到视频帧时会触发该回调。你需要通过该回调的返回值设置是否旋转视频帧。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "在 Android 平台上，该回调支持的视频数据格式包括：I420、RGBA 和 Texture。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getrotationapplied__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 每次接收到视频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getrotationapplied__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：旋转采集的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不旋转采集的视频。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getvideoformatpreference"
    }), `
`, _jsx(_components.h2, {
      id: "getvideoformatpreference",
      children: "getVideoFormatPreference"
    }), `
`, _jsx(_components.p, {
      children: "设置 SDK 输出的原始视频数据格式。"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getvideoformatpreference__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " getVideoFormatPreference"
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
      id: "api_ivideoframeobserver_getvideoformatpreference__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_irtcengine_registervideoframeobserver",
        children: "registerVideoFrameObserver"
      }), " 方法注册回调后，SDK 每次接收到视频帧时会触发该回调。你需要在该回调的返回值中设置期望的视频数据格式。"]
    }), `
`, _jsxs(_components.p, {
      children: ["注： ", _jsx(_components.code, {
        children: "VIDEO_PIXEL_DEFAULT"
      }), " 表示原始视频的默认像素格式类型，具体如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在 Android 平台上，默认的视频帧类型可能为 I420Buffer 或 TextureBuffer。 TextureBuffer 类型的纹理格式可能为 OES 或 RGB。如果 getVideoFormatPreference 返回的视频帧类型为 VIDEO_PIXEL_DEFAULT，则在处理视频数据时需要适配 I420Buffer 或 TextureBuffer。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["视频帧类型固定为 ", _jsx(_components.code, {
        children: "I420Buffer"
      }), " 的情况包括但不限于："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "特定设备，例如：LG G5 SE（H848）、Google Pixel 4a、Samsung Galaxy A7 或小米 Max。"
      }), `
`, _jsx(_components.li, {
        children: "已集成美颜特效扩展并启用了视频降噪或弱光增强功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getvideoformatpreference__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回 SDK 输出的原始数据格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_PIXEL_DEFAULT （0）：原始视频格式，需适配 I420Buffer 或 TextureBuffer。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_PIXEL_I420 （1）：I420 格式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_PIXEL_RGBA （4）：RGBA 格式。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_PIXEL_I422 （16）：I422 格式。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getvideoframeprocessmode"
    }), `
`, _jsx(_components.h2, {
      id: "getvideoframeprocessmode",
      children: "getVideoFrameProcessMode"
    }), `
`, _jsx(_components.p, {
      children: "getVideoFrameProcessMode 回调。每次 SDK 接收到视频帧时触发，并提示你设置视频帧的处理模式。"
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getvideoframeprocessmode__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " getVideoFrameProcessMode"
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
      id: "api_ivideoframeobserver_getvideoframeprocessmode__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在成功注册视频帧观察器后，SDK 每次接收到视频帧时会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode",
        children: "getVideoFrameProcessMode"
      }), " 回调。你需要在该回调的返回值中设置偏好的处理模式。"]
    }), `
`, _jsx("a", {
      id: "api_ivideoframeobserver_getvideoframeprocessmode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "视频帧的处理模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "PROCESS_MODE_READ_ONLY （0）：（默认）只读取视频帧。"
      }), `
`, _jsx(_components.li, {
        children: "PROCESS_MODE_READ_WRITE （1）：读取并写入视频帧。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoframeobserver"
    }), `
`, _jsx(_components.h2, {
      id: "registervideoframeobserver",
      children: "registerVideoFrameObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册原始视频帧观察器对象。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoframeobserver__prototype"
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
              children: " registerVideoFrameObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IVideoFrameObserver observer);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoframeobserver__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["建议通过该方法注册一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
        children: "IVideoFrameObserver"
      }), " 实例，并在该类中根据需要实现回调。成功注册后，每当接收到视频帧时，SDK 会触发相应的回调。你可以在虚拟背景、美颜特效等视频预处理场景中使用这些原始视频数据。"]
    }), `
`, _jsxs(_components.p, {
      children: ["注： 在处理回调中返回的视频数据时，请注意 ", _jsx(_components.code, {
        children: "width"
      }), " 和 ", _jsx(_components.code, {
        children: "height"
      }), " 参数可能发生变化，具体情况如下："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当网络状况恶化时，视频分辨率会逐步降低。"
      }), `
`, _jsx(_components.li, {
        children: "当用户调整视频配置时，回调中返回的视频分辨率也会随之变化。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoframeobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "请在加入频道前调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoframeobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["观察器实例。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
        children: "IVideoFrameObserver"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如需释放该实例，请将该参数设为 ", _jsx(_components.code, {
            children: "null"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_registervideoframeobserver__return_values"
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
      id: "callback_ivideoframeobserver_oncapturevideoframe"
    }), `
`, _jsx(_components.h2, {
      id: "oncapturevideoframe",
      children: "onCaptureVideoFrame"
    }), `
`, _jsx(_components.p, {
      children: "本地设备采集到视频帧时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_oncapturevideoframe__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " onCaptureVideoFrame"
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
              children: " sourceType, VideoFrame videoFrame);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_oncapturevideoframe__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以通过该回调获取本地设备采集的原始视频数据，并根据需要进行预处理。预处理完成后，可以直接在该回调中修改 ", _jsx(_components.code, {
        children: "videoFrame"
      }), "，并将返回值设置为 true，以将修改后的视频数据发送给 SDK。如果需要将预处理后的视频数据发送给 SDK，需先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoframeprocessmode",
        children: "getVideoFrameProcessMode"
      }), " 将视频处理模式设置为读写模式（", _jsx(_components.code, {
        children: "PROCESS_MODE_READ_WRITE"
      }), " ）。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果获取的视频数据类型为 RGBA，SDK 不支持处理 alpha 通道的数据。"
      }), `
`, _jsx(_components.li, {
        children: "建议确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致。否则，可能会导致本地预览和远端视频显示出现异常旋转、拉伸等问题。"
      }), `
`, _jsx(_components.li, {
        children: "通过该回调获取的视频格式默认可能为 I420Buffer 或 TextureBuffer。 TextureBuffer 的纹理格式可能为 OES 格式或 RGB 格式。如果你需要其他格式的视频数据，可以在 getVideoFormatPreference 回调的返回值中设置期望的数据格式。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_oncapturevideoframe__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在成功注册视频数据观察器后，每次 SDK 采集到视频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_oncapturevideoframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型，包括摄像头、屏幕或媒体播放器。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "videoframe",
      children: _jsx(_components.code, {
        children: "videoFrame"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧。"
    }), `
`, _jsx(_components.p, {
      children: "注： 通过该回调获取的视频帧数据格式默认值如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android：I420 或 RGB（GLES20.GL_TEXTURE_2D）"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_oncapturevideoframe__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["当视频处理模式为 PROCESS_MODE_READ_ONLY 时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：保留以供后续使用。"
          }), `
`, _jsx(_components.li, {
            children: "false：保留以供后续使用。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["当视频处理模式为 PROCESS_MODE_READ_WRITE 时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：设置 SDK 接收该视频帧。"
          }), `
`, _jsx(_components.li, {
            children: "false：设置 SDK 丢弃该视频帧。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onpreencodevideoframe"
    }), `
`, _jsx(_components.h2, {
      id: "onpreencodevideoframe",
      children: "onPreEncodeVideoFrame"
    }), `
`, _jsx(_components.p, {
      children: "每次 SDK 接收到编码前视频帧时触发该回调。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onpreencodevideoframe__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "CalledByNative"
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
              children: " onPreEncodeVideoFrame"
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
              children: " sourceType, VideoFrame videoFrame);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onpreencodevideoframe__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在你成功注册视频帧观察器后，SDK 每次接收到视频帧时都会触发该回调。在该回调中，你可以获取编码前的视频数据，并根据具体场景对数据进行处理。处理完成后，可以将处理后的视频数据返回给 SDK。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你需要将预处理后的视频数据发送回 SDK，需要先调用 getVideoFrameProcessMode 将视频处理模式设置为读写模式（PROCESS_MODE_READ_WRITE ）。"
      }), `
`, _jsx(_components.li, {
        children: "若需获取从第二路屏幕采集的编码前视频数据，需要通过 getObservedFramePosition 设置帧位置为 VIDEO_MODULE_POSITION_PRE_ENCODER （1 << 2）。"
      }), `
`, _jsx(_components.li, {
        children: "该回调获取的视频数据已被预处理，包括裁剪、旋转和美颜特效。"
      }), `
`, _jsx(_components.li, {
        children: "建议确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致，否则可能导致本地预览和远端视频显示出现异常旋转、图像拉伸等问题。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onpreencodevideoframe__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 每次接收到编码前的视频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onpreencodevideoframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-1",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videosourcetype",
        children: "VideoSourceType"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "videoframe-1",
      children: _jsx(_components.code, {
        children: "videoFrame"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧。"
    }), `
`, _jsx(_components.p, {
      children: "注： 通过该回调获取的视频帧数据格式默认如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android：I420 或 RGB（GLES20.GL_TEXTURE_2D）。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onpreencodevideoframe__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["当视频处理模式为 PROCESS_MODE_READ_ONLY 时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：保留以供后续使用。"
          }), `
`, _jsx(_components.li, {
            children: "false：保留以供后续使用。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["当视频处理模式为 PROCESS_MODE_READ_WRITE 时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：SDK 接收该视频帧。"
          }), `
`, _jsx(_components.li, {
            children: "false：SDK 丢弃该视频帧。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onrendervideoframe"
    }), `
`, _jsx(_components.h2, {
      id: "onrendervideoframe",
      children: "onRenderVideoFrame"
    }), `
`, _jsx(_components.p, {
      children: "远端用户发送视频帧时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onrendervideoframe__prototype"
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
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onRenderVideoFrame"
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
              children: " uid, VideoFrame videoFrame)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onrendervideoframe__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在你成功注册视频帧观察器后，SDK 每次接收到远端用户发送的视频帧时会触发该回调。你可以在渲染前获取远端发送的视频数据，并根据具体场景进行处理。通过该回调获取的视频帧默认格式可能为 ", _jsx(_components.code, {
        children: "I420Buffer"
      }), " 或 ", _jsx(_components.code, {
        children: "TextureBuffer"
      }), "， ", _jsx(_components.code, {
        children: "TextureBuffer"
      }), " 的纹理格式可能为 ", _jsx(_components.code, {
        children: "OES"
      }), " 或 ", _jsx(_components.code, {
        children: "RGB"
      }), "。如果你需要其他格式的视频数据，可以在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-raw#api_ivideoframeobserver_getvideoformatpreference",
        children: "getVideoFormatPreference"
      }), " 回调中设置期望的数据格式。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果你需要将预处理后的视频数据发送回 SDK，需要先调用 getVideoFrameProcessMode 将视频处理模式设置为读写模式（PROCESS_MODE_READ_WRITE ）。"
      }), `
`, _jsx(_components.li, {
        children: "如果你获取的视频数据类型为 RGBA，SDK 不支持处理 alpha 通道的数据。"
      }), `
`, _jsx(_components.li, {
        children: "建议你确保 videoFrame 中修改后的参数与视频帧缓冲区中视频帧的实际情况一致。否则，可能会导致本地预览和远端视频显示出现异常旋转、图像拉伸等问题。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onrendervideoframe__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 接收到远端用户发送的视频帧时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onrendervideoframe__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "channelid",
      children: _jsx(_components.code, {
        children: "channelId"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "uid",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送当前视频帧的远端用户 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "videoframe-2",
      children: _jsx(_components.code, {
        children: "videoFrame"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧。"
    }), `
`, _jsx("a", {
      id: "callback_ivideoframeobserver_onrendervideoframe__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["当视频处理模式为 PROCESS_MODE_READ_ONLY 时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：保留以供后续使用。"
          }), `
`, _jsx(_components.li, {
            children: "false：保留以供后续使用。"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: ["当视频处理模式为 PROCESS_MODE_READ_WRITE 时：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "true：SDK 接收该视频帧。"
          }), `
`, _jsx(_components.li, {
            children: "false：SDK 丢弃该视频帧。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoframeobserver",
          children: "IVideoFrameObserver"
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
