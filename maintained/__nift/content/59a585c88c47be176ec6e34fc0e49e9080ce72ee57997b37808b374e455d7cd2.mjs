import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "屏幕采集",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_screencapture" />

<a id="api_irtcengine_queryscreencapturecapability" />

## queryScreenCaptureCapability [#queryscreencapturecapability]

查询设备在屏幕共享时支持的最高帧率。

<a id="api_irtcengine_queryscreencapturecapability__prototype" />

\`\`\`java
public abstract int queryScreenCaptureCapability();
\`\`\`

<a id="api_irtcengine_queryscreencapturecapability__detailed_desc" />

#### \`自从\` [#自从]

自 v4.2.0 版本新增。

为了确保屏幕共享的最佳性能，特别是在启用如 60 fps 的高帧率时，声网建议你在共享前使用该方法查询设备支持的最大帧率。如果设备无法支持如此高的帧率，你可以相应地调整屏幕共享流的帧率，以避免影响共享质量。

<a id="api_irtcengine_queryscreencapturecapability__scenario" />

### 适用场景 [#适用场景]

为确保屏幕共享的最佳性能，特别是在启用如 60 fps 的高帧率时，建议你在共享前使用该方法查询设备支持的最高帧率。

<a id="api_irtcengine_queryscreencapturecapability__return_values" />

### 返回值 [#返回值]

* 0：设备最多支持 15 fps 的帧率。
* 1：设备最多支持 30 fps 的帧率。
* 2：设备最多支持 60 fps 的帧率。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setexternalmediaprojection" />

## setExternalMediaProjection [#setexternalmediaprojection]

配置 SDK 外部的 MediaProjection 以采集屏幕视频流。

<a id="api_irtcengine_setexternalmediaprojection__prototype" />

\`\`\`java
public abstract int setExternalMediaProjection(MediaProjection mediaProjection);
\`\`\`

<a id="api_irtcengine_setexternalmediaprojection__detailed_desc" />

调用该方法成功后，设置的外部 \`MediaProjection\` 将替代 SDK 申请的 \`MediaProjection\` 用于采集屏幕视频流。当屏幕共享停止或 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 被销毁时，SDK 会自动释放该 \`MediaProjection\`。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在调用该方法前，必须先申请 [\`MediaProjection\`](https://developer.android.com/reference/android/media/projection/MediaProjection) 权限。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setexternalmediaprojection__scenario" />

### 适用场景 [#适用场景-1]

如果你已申请到 \`MediaProjection\`，可以直接使用你自己的 \`MediaProjection\`，而无需使用 SDK 申请的对象。适用场景包括：

* 在定制系统设备上，避免系统弹窗（如用户授权采集屏幕）并直接开始采集屏幕视频流。
* 在涉及一个或多个子进程的屏幕共享流程中，避免在子进程中创建对象时可能出现的错误，从而防止屏幕采集失败。

该方法适用于多频道场景。

<a id="api_irtcengine_setexternalmediaprojection__timing" />

### 调用时机 [#调用时机]

在调用 [startScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture) 之后调用该方法。

<a id="api_irtcengine_setexternalmediaprojection__parameters" />

### 参数 [#参数]

#### \`mediaProjection\` [#mediaprojection]

用于采集屏幕视频流的对象。

<a id="api_irtcengine_setexternalmediaprojection__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setscreencapturescenario" />

## setScreenCaptureScenario [#setscreencapturescenario]

设置屏幕共享场景。

<a id="api_irtcengine_setscreencapturescenario__prototype" />

\`\`\`java
public abstract int setScreenCaptureScenario(Constants.ScreenScenarioType screenScenario);
\`\`\`

<a id="api_irtcengine_setscreencapturescenario__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.2.0 版本新增。

SDK 会根据设置的场景自动调整共享的视频质量和用户体验。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    声网建议你在加入频道前调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setscreencapturescenario__parameters" />

### 参数 [#参数-1]

#### \`screenScenario\` [#screenscenario]

屏幕共享场景。详见 [ScreenScenarioType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-screenscenariotype)。

<a id="api_irtcengine_setscreencapturescenario__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_startscreencapture" />

## startScreenCapture [#startscreencapture]

开始屏幕采集。

<a id="api_irtcengine_startscreencapture__prototype" />

\`\`\`java
public abstract int startScreenCapture(ScreenCaptureParameters screenCaptureParameters);
\`\`\`

<a id="api_irtcengine_startscreencapture__detailed_desc" />

#### \`自从\` [#自从-2]

自 v3.7.0 版本新增。

你可以在加入频道前或加入频道后调用该方法开始采集屏幕视频流，具体如下：

* 先调用该方法，再调用 joinChannel 加入频道，并将 publishScreenCaptureVideo 设置为 true，以开始屏幕共享。
* 加入频道后调用该方法，再调用 updateChannelMediaOptions 并将 publishScreenCaptureVideo 设置为 true，以开始屏幕共享。

注：

* 在 Android 平台，如果用户未授予应用屏幕采集权限，SDK 会触发 onPermissionError （错误码 2）回调。
* 在 Android 9 及以上版本，为避免应用进入后台后被系统杀死，声网建议你在 /app/Manifests/AndroidManifest.xml 文件中添加前台服务权限 android.permission.FOREGROUND\\_SERVICE。
* 由于性能限制，Android TV 不支持屏幕共享。
* 由于系统限制，使用华为手机时，请勿在屏幕共享过程中调整屏幕共享流的视频编码分辨率，否则可能会导致崩溃。
* 由于系统限制，部分小米设备在屏幕共享时不支持采集系统音频。
* 为避免屏幕共享时系统音频采集失败，声网建议你在加入频道前通过 setAudioScenario 方法将音频应用场景设置为 AUDIO\\_SCENARIO\\_GAME\\_STREAMING。
* 屏幕共享流的计费基于 VideoCaptureParameters 中的 dimensions：
  * 如果未传入该值，声网按 1280 × 720 计费。
  * 如果传入该值，声网按传入的值计费。

<a id="api_irtcengine_startscreencapture__scenario" />

### 适用场景 [#适用场景-2]

在屏幕共享场景中。

<a id="api_irtcengine_startscreencapture__timing" />

### 调用时机 [#调用时机-1]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_startscreencapture__parameters" />

### 参数 [#参数-2]

#### \`screenCaptureParameters\` [#screencaptureparameters]

屏幕共享的编码参数，详见 [ScreenCaptureParameters](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screencaptureparameters2)。

<a id="api_irtcengine_startscreencapture__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：系统版本过低。请确保 Android API 级别不低于 21。
  * -3：无法采集系统音频。请确保 Android API 级别不低于 29。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stopscreencapture" />

## stopScreenCapture [#stopscreencapture]

停止屏幕采集。

<a id="api_irtcengine_stopscreencapture__prototype" />

\`\`\`java
public abstract int stopScreenCapture();
\`\`\`

<a id="api_irtcengine_stopscreencapture__detailed_desc" />

#### \`自从\` [#自从-3]

自 v3.7.0 版本新增。

如果你通过调用 [startScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture) 开始了屏幕采集，则需要调用 [stopScreenCapture](/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_stopscreencapture) 停止屏幕采集。

<a id="api_irtcengine_stopscreencapture__scenario" />

### 适用场景 [#适用场景-3]

适用于以下场景：

* iOS：如果你通过调用 startScreenCapture: 开始屏幕采集，则需要调用此方法停止屏幕采集。
* macOS：如果你通过调用 startScreenCaptureByWindowId\\:regionRect\\:captureParams: 或 startScreenCaptureByDisplayId\\:regionRect\\:captureParams: 开始屏幕采集，则需要调用此方法停止屏幕采集。

<a id="api_irtcengine_stopscreencapture__timing" />

### 调用时机 [#调用时机-2]

你可以在加入频道前或后调用此方法。

<a id="api_irtcengine_stopscreencapture__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_updatescreencaptureparameters" />

## updateScreenCaptureParameters [#updatescreencaptureparameters]

更新屏幕采集参数。

<a id="api_irtcengine_updatescreencaptureparameters__prototype" />

\`\`\`java
public abstract int updateScreenCaptureParameters(ScreenCaptureParameters screenCaptureParameters);
\`\`\`

<a id="api_irtcengine_updatescreencaptureparameters__detailed_desc" />

#### \`自从\` [#自从-4]

自 v3.7.0 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在开始屏幕共享或窗口共享后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_updatescreencaptureparameters__parameters" />

### 参数 [#参数-3]

#### \`screenCaptureParameters\` [#screencaptureparameters-1]

屏幕共享的编码参数，详见 [ScreenCaptureParameters](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screencaptureparameters2)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    屏幕共享视频流的视频属性仅需通过此参数设置，与 [setVideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration) 无关。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_updatescreencaptureparameters__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -2：参数无效。
  * -8：屏幕共享状态无效。可能是因为你已共享了其他屏幕或窗口。请尝试调用 stopScreenCapture 停止当前共享，然后重新开始共享屏幕。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)
`;
export let structuredData = {
  contents: [{
    heading: "queryscreencapturecapability",
    content: "查询设备在屏幕共享时支持的最高帧率。"
  }, {
    heading: "自从",
    content: "自 v4.2.0 版本新增。"
  }, {
    heading: "自从",
    content: "为了确保屏幕共享的最佳性能，特别是在启用如 60 fps 的高帧率时，声网建议你在共享前使用该方法查询设备支持的最大帧率。如果设备无法支持如此高的帧率，你可以相应地调整屏幕共享流的帧率，以避免影响共享质量。"
  }, {
    heading: "适用场景",
    content: "为确保屏幕共享的最佳性能，特别是在启用如 60 fps 的高帧率时，建议你在共享前使用该方法查询设备支持的最高帧率。"
  }, {
    heading: "返回值",
    content: "0：设备最多支持 15 fps 的帧率。"
  }, {
    heading: "返回值",
    content: "1：设备最多支持 30 fps 的帧率。"
  }, {
    heading: "返回值",
    content: "2：设备最多支持 60 fps 的帧率。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "setexternalmediaprojection",
    content: "配置 SDK 外部的 MediaProjection 以采集屏幕视频流。"
  }, {
    heading: "setexternalmediaprojection",
    content: "调用该方法成功后，设置的外部 `MediaProjection` 将替代 SDK 申请的 `MediaProjection` 用于采集屏幕视频流。当屏幕共享停止或 RtcEngine 被销毁时，SDK 会自动释放该 `MediaProjection`。"
  }, {
    heading: "setexternalmediaprojection",
    content: "在调用该方法前，必须先申请 `MediaProjection` 权限。"
  }, {
    heading: "适用场景-1",
    content: "如果你已申请到 `MediaProjection`，可以直接使用你自己的 `MediaProjection`，而无需使用 SDK 申请的对象。适用场景包括："
  }, {
    heading: "适用场景-1",
    content: "在定制系统设备上，避免系统弹窗（如用户授权采集屏幕）并直接开始采集屏幕视频流。"
  }, {
    heading: "适用场景-1",
    content: "在涉及一个或多个子进程的屏幕共享流程中，避免在子进程中创建对象时可能出现的错误，从而防止屏幕采集失败。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "调用时机",
    content: "在调用 startScreenCapture 之后调用该方法。"
  }, {
    heading: "mediaprojection",
    content: "用于采集屏幕视频流的对象。"
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
    heading: "setscreencapturescenario",
    content: "设置屏幕共享场景。"
  }, {
    heading: "自从-1",
    content: "自 v4.2.0 版本新增。"
  }, {
    heading: "自从-1",
    content: "SDK 会根据设置的场景自动调整共享的视频质量和用户体验。"
  }, {
    heading: "自从-1",
    content: "声网建议你在加入频道前调用此方法。"
  }, {
    heading: "screenscenario",
    content: "屏幕共享场景。详见 ScreenScenarioType。"
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
    heading: "startscreencapture",
    content: "开始屏幕采集。"
  }, {
    heading: "自从-2",
    content: "自 v3.7.0 版本新增。"
  }, {
    heading: "自从-2",
    content: "你可以在加入频道前或加入频道后调用该方法开始采集屏幕视频流，具体如下："
  }, {
    heading: "自从-2",
    content: "先调用该方法，再调用 joinChannel 加入频道，并将 publishScreenCaptureVideo 设置为 true，以开始屏幕共享。"
  }, {
    heading: "自从-2",
    content: "加入频道后调用该方法，再调用 updateChannelMediaOptions 并将 publishScreenCaptureVideo 设置为 true，以开始屏幕共享。"
  }, {
    heading: "自从-2",
    content: "注："
  }, {
    heading: "自从-2",
    content: "在 Android 平台，如果用户未授予应用屏幕采集权限，SDK 会触发 onPermissionError （错误码 2）回调。"
  }, {
    heading: "自从-2",
    content: "在 Android 9 及以上版本，为避免应用进入后台后被系统杀死，声网建议你在 /app/Manifests/AndroidManifest.xml 文件中添加前台服务权限 android.permission.FOREGROUND\\_SERVICE。"
  }, {
    heading: "自从-2",
    content: "由于性能限制，Android TV 不支持屏幕共享。"
  }, {
    heading: "自从-2",
    content: "由于系统限制，使用华为手机时，请勿在屏幕共享过程中调整屏幕共享流的视频编码分辨率，否则可能会导致崩溃。"
  }, {
    heading: "自从-2",
    content: "由于系统限制，部分小米设备在屏幕共享时不支持采集系统音频。"
  }, {
    heading: "自从-2",
    content: "为避免屏幕共享时系统音频采集失败，声网建议你在加入频道前通过 setAudioScenario 方法将音频应用场景设置为 AUDIO\\_SCENARIO\\_GAME\\_STREAMING。"
  }, {
    heading: "自从-2",
    content: "屏幕共享流的计费基于 VideoCaptureParameters 中的 dimensions："
  }, {
    heading: "自从-2",
    content: "如果未传入该值，声网按 1280 × 720 计费。"
  }, {
    heading: "自从-2",
    content: "如果传入该值，声网按传入的值计费。"
  }, {
    heading: "适用场景-2",
    content: "在屏幕共享场景中。"
  }, {
    heading: "调用时机-1",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "screencaptureparameters",
    content: "屏幕共享的编码参数，详见 ScreenCaptureParameters。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-3",
    content: "-2：系统版本过低。请确保 Android API 级别不低于 21。"
  }, {
    heading: "返回值-3",
    content: "-3：无法采集系统音频。请确保 Android API 级别不低于 29。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "stopscreencapture",
    content: "停止屏幕采集。"
  }, {
    heading: "自从-3",
    content: "自 v3.7.0 版本新增。"
  }, {
    heading: "自从-3",
    content: "如果你通过调用 startScreenCapture 开始了屏幕采集，则需要调用 stopScreenCapture 停止屏幕采集。"
  }, {
    heading: "适用场景-3",
    content: "适用于以下场景："
  }, {
    heading: "适用场景-3",
    content: "iOS：如果你通过调用 startScreenCapture: 开始屏幕采集，则需要调用此方法停止屏幕采集。"
  }, {
    heading: "适用场景-3",
    content: "macOS：如果你通过调用 startScreenCaptureByWindowId\\:regionRect\\:captureParams: 或 startScreenCaptureByDisplayId\\:regionRect\\:captureParams: 开始屏幕采集，则需要调用此方法停止屏幕采集。"
  }, {
    heading: "调用时机-2",
    content: "你可以在加入频道前或后调用此方法。"
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
    heading: "updatescreencaptureparameters",
    content: "更新屏幕采集参数。"
  }, {
    heading: "自从-4",
    content: "自 v3.7.0 版本新增。"
  }, {
    heading: "自从-4",
    content: "请在开始屏幕共享或窗口共享后调用此方法。"
  }, {
    heading: "screencaptureparameters-1",
    content: "屏幕共享的编码参数，详见 ScreenCaptureParameters。"
  }, {
    heading: "screencaptureparameters-1",
    content: "屏幕共享视频流的视频属性仅需通过此参数设置，与 setVideoEncoderConfiguration 无关。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-5",
    content: "-2：参数无效。"
  }, {
    heading: "返回值-5",
    content: "-8：屏幕共享状态无效。可能是因为你已共享了其他屏幕或窗口。请尝试调用 stopScreenCapture 停止当前共享，然后重新开始共享屏幕。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }],
  headings: [{
    id: "queryscreencapturecapability",
    content: "queryScreenCaptureCapability"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "setexternalmediaprojection",
    content: "setExternalMediaProjection"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "mediaprojection",
    content: "`mediaProjection`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "setscreencapturescenario",
    content: "setScreenCaptureScenario"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "screenscenario",
    content: "`screenScenario`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "startscreencapture",
    content: "startScreenCapture"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "screencaptureparameters",
    content: "`screenCaptureParameters`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "stopscreencapture",
    content: "stopScreenCapture"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "适用场景-3",
    content: "适用场景"
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
    id: "updatescreencaptureparameters",
    content: "updateScreenCaptureParameters"
  }, {
    id: "自从-4",
    content: "`自从`"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "screencaptureparameters-1",
    content: "`screenCaptureParameters`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#queryscreencapturecapability",
  title: _jsx(_Fragment, {
    children: "queryScreenCaptureCapability"
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
  url: "#setexternalmediaprojection",
  title: _jsx(_Fragment, {
    children: "setExternalMediaProjection"
  })
}, {
  depth: 3,
  url: "#适用场景-1",
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
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#mediaprojection",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mediaProjection"
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
  url: "#setscreencapturescenario",
  title: _jsx(_Fragment, {
    children: "setScreenCaptureScenario"
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
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#screenscenario",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "screenScenario"
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
  url: "#startscreencapture",
  title: _jsx(_Fragment, {
    children: "startScreenCapture"
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
  url: "#适用场景-2",
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
  url: "#screencaptureparameters",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "screenCaptureParameters"
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
  url: "#stopscreencapture",
  title: _jsx(_Fragment, {
    children: "stopScreenCapture"
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
  url: "#适用场景-3",
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
  url: "#updatescreencaptureparameters",
  title: _jsx(_Fragment, {
    children: "updateScreenCaptureParameters"
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
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#screencaptureparameters-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "screenCaptureParameters"
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
      id: "toc_screencapture"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_queryscreencapturecapability"
    }), `
`, _jsx(_components.h2, {
      id: "queryscreencapturecapability",
      children: "queryScreenCaptureCapability"
    }), `
`, _jsx(_components.p, {
      children: "查询设备在屏幕共享时支持的最高帧率。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_queryscreencapturecapability__prototype"
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
              children: " queryScreenCaptureCapability"
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
      id: "api_irtcengine_queryscreencapturecapability__detailed_desc"
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
      children: "为了确保屏幕共享的最佳性能，特别是在启用如 60 fps 的高帧率时，声网建议你在共享前使用该方法查询设备支持的最大帧率。如果设备无法支持如此高的帧率，你可以相应地调整屏幕共享流的帧率，以避免影响共享质量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_queryscreencapturecapability__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "为确保屏幕共享的最佳性能，特别是在启用如 60 fps 的高帧率时，建议你在共享前使用该方法查询设备支持的最高帧率。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_queryscreencapturecapability__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：设备最多支持 15 fps 的帧率。"
      }), `
`, _jsx(_components.li, {
        children: "1：设备最多支持 30 fps 的帧率。"
      }), `
`, _jsx(_components.li, {
        children: "2：设备最多支持 60 fps 的帧率。"
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
      id: "api_irtcengine_setexternalmediaprojection"
    }), `
`, _jsx(_components.h2, {
      id: "setexternalmediaprojection",
      children: "setExternalMediaProjection"
    }), `
`, _jsx(_components.p, {
      children: "配置 SDK 外部的 MediaProjection 以采集屏幕视频流。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalmediaprojection__prototype"
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
              children: " setExternalMediaProjection"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(MediaProjection mediaProjection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalmediaprojection__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，设置的外部 ", _jsx(_components.code, {
        children: "MediaProjection"
      }), " 将替代 SDK 申请的 ", _jsx(_components.code, {
        children: "MediaProjection"
      }), " 用于采集屏幕视频流。当屏幕共享停止或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
        children: "RtcEngine"
      }), " 被销毁时，SDK 会自动释放该 ", _jsx(_components.code, {
        children: "MediaProjection"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在调用该方法前，必须先申请 ", _jsx(_components.a, {
            href: "https://developer.android.com/reference/android/media/projection/MediaProjection",
            children: _jsx(_components.code, {
              children: "MediaProjection"
            })
          }), " 权限。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalmediaprojection__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你已申请到 ", _jsx(_components.code, {
        children: "MediaProjection"
      }), "，可以直接使用你自己的 ", _jsx(_components.code, {
        children: "MediaProjection"
      }), "，而无需使用 SDK 申请的对象。适用场景包括："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在定制系统设备上，避免系统弹窗（如用户授权采集屏幕）并直接开始采集屏幕视频流。"
      }), `
`, _jsx(_components.li, {
        children: "在涉及一个或多个子进程的屏幕共享流程中，避免在子进程中创建对象时可能出现的错误，从而防止屏幕采集失败。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalmediaprojection__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture",
        children: "startScreenCapture"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalmediaprojection__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mediaprojection",
      children: _jsx(_components.code, {
        children: "mediaProjection"
      })
    }), `
`, _jsx(_components.p, {
      children: "用于采集屏幕视频流的对象。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setexternalmediaprojection__return_values"
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
      id: "api_irtcengine_setscreencapturescenario"
    }), `
`, _jsx(_components.h2, {
      id: "setscreencapturescenario",
      children: "setScreenCaptureScenario"
    }), `
`, _jsx(_components.p, {
      children: "设置屏幕共享场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setscreencapturescenario__prototype"
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
              children: " setScreenCaptureScenario"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.ScreenScenarioType screenScenario);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setscreencapturescenario__detailed_desc"
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
      children: "SDK 会根据设置的场景自动调整共享的视频质量和用户体验。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "声网建议你在加入频道前调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setscreencapturescenario__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "screenscenario",
      children: _jsx(_components.code, {
        children: "screenScenario"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["屏幕共享场景。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-screenscenariotype",
        children: "ScreenScenarioType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setscreencapturescenario__return_values"
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
      id: "api_irtcengine_startscreencapture"
    }), `
`, _jsx(_components.h2, {
      id: "startscreencapture",
      children: "startScreenCapture"
    }), `
`, _jsx(_components.p, {
      children: "开始屏幕采集。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startscreencapture__prototype"
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
              children: " startScreenCapture"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ScreenCaptureParameters screenCaptureParameters);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startscreencapture__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.7.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法开始采集屏幕视频流，具体如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "先调用该方法，再调用 joinChannel 加入频道，并将 publishScreenCaptureVideo 设置为 true，以开始屏幕共享。"
      }), `
`, _jsx(_components.li, {
        children: "加入频道后调用该方法，再调用 updateChannelMediaOptions 并将 publishScreenCaptureVideo 设置为 true，以开始屏幕共享。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "在 Android 平台，如果用户未授予应用屏幕采集权限，SDK 会触发 onPermissionError （错误码 2）回调。"
      }), `
`, _jsx(_components.li, {
        children: "在 Android 9 及以上版本，为避免应用进入后台后被系统杀死，声网建议你在 /app/Manifests/AndroidManifest.xml 文件中添加前台服务权限 android.permission.FOREGROUND_SERVICE。"
      }), `
`, _jsx(_components.li, {
        children: "由于性能限制，Android TV 不支持屏幕共享。"
      }), `
`, _jsx(_components.li, {
        children: "由于系统限制，使用华为手机时，请勿在屏幕共享过程中调整屏幕共享流的视频编码分辨率，否则可能会导致崩溃。"
      }), `
`, _jsx(_components.li, {
        children: "由于系统限制，部分小米设备在屏幕共享时不支持采集系统音频。"
      }), `
`, _jsx(_components.li, {
        children: "为避免屏幕共享时系统音频采集失败，声网建议你在加入频道前通过 setAudioScenario 方法将音频应用场景设置为 AUDIO_SCENARIO_GAME_STREAMING。"
      }), `
`, _jsxs(_components.li, {
        children: ["屏幕共享流的计费基于 VideoCaptureParameters 中的 dimensions：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果未传入该值，声网按 1280 × 720 计费。"
          }), `
`, _jsx(_components.li, {
            children: "如果传入该值，声网按传入的值计费。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startscreencapture__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在屏幕共享场景中。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startscreencapture__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startscreencapture__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "screencaptureparameters",
      children: _jsx(_components.code, {
        children: "screenCaptureParameters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["屏幕共享的编码参数，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screencaptureparameters2",
        children: "ScreenCaptureParameters"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_startscreencapture__return_values"
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
            children: "-2：系统版本过低。请确保 Android API 级别不低于 21。"
          }), `
`, _jsx(_components.li, {
            children: "-3：无法采集系统音频。请确保 Android API 级别不低于 29。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopscreencapture"
    }), `
`, _jsx(_components.h2, {
      id: "stopscreencapture",
      children: "stopScreenCapture"
    }), `
`, _jsx(_components.p, {
      children: "停止屏幕采集。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopscreencapture__prototype"
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
              children: " stopScreenCapture"
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
      id: "api_irtcengine_stopscreencapture__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-3",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.7.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_startscreencapture",
        children: "startScreenCapture"
      }), " 开始了屏幕采集，则需要调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/screencapture#api_irtcengine_stopscreencapture",
        children: "stopScreenCapture"
      }), " 停止屏幕采集。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopscreencapture__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于以下场景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "iOS：如果你通过调用 startScreenCapture: 开始屏幕采集，则需要调用此方法停止屏幕采集。"
      }), `
`, _jsx(_components.li, {
        children: "macOS：如果你通过调用 startScreenCaptureByWindowId:regionRect:captureParams: 或 startScreenCaptureByDisplayId:regionRect:captureParams: 开始屏幕采集，则需要调用此方法停止屏幕采集。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopscreencapture__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopscreencapture__return_values"
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
      id: "api_irtcengine_updatescreencaptureparameters"
    }), `
`, _jsx(_components.h2, {
      id: "updatescreencaptureparameters",
      children: "updateScreenCaptureParameters"
    }), `
`, _jsx(_components.p, {
      children: "更新屏幕采集参数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatescreencaptureparameters__prototype"
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
              children: " updateScreenCaptureParameters"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(ScreenCaptureParameters screenCaptureParameters);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatescreencaptureparameters__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-4",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.7.0 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请在开始屏幕共享或窗口共享后调用此方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatescreencaptureparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "screencaptureparameters-1",
      children: _jsx(_components.code, {
        children: "screenCaptureParameters"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["屏幕共享的编码参数，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-screencaptureparameters2",
        children: "ScreenCaptureParameters"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["屏幕共享视频流的视频属性仅需通过此参数设置，与 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration",
            children: "setVideoEncoderConfiguration"
          }), " 无关。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_updatescreencaptureparameters__return_values"
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
            children: "-2：参数无效。"
          }), `
`, _jsx(_components.li, {
            children: "-8：屏幕共享状态无效。可能是因为你已共享了其他屏幕或窗口。请尝试调用 stopScreenCapture 停止当前共享，然后重新开始共享屏幕。"
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
