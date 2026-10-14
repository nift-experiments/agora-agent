import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "视频设备管理",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_video_device" />

<a id="api_irtcengine_getcameramaxzoomfactor" />

## getCameraMaxZoomFactor [#getcameramaxzoomfactor]

获取摄像头支持的最大变焦倍数。

<a id="api_irtcengine_getcameramaxzoomfactor__prototype" />

\`\`\`java
public abstract float getCameraMaxZoomFactor();
\`\`\`

<a id="api_irtcengine_getcameramaxzoomfactor__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_getcameramaxzoomfactor__return_values" />

### 返回值 [#返回值]

方法调用成功，返回摄像头支持的最大变焦倍数。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_iscameraautofocusfacemodesupported" />

## isCameraAutoFocusFaceModeSupported [#iscameraautofocusfacemodesupported]

检查设备是否支持人脸自动对焦功能。

<a id="api_irtcengine_iscameraautofocusfacemodesupported__prototype" />

\`\`\`java
public abstract boolean isCameraAutoFocusFaceModeSupported();
\`\`\`

<a id="api_irtcengine_iscameraautofocusfacemodesupported__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_iscameraautofocusfacemodesupported__return_values" />

### 返回值 [#返回值-1]

* true：设备支持人脸自动对焦功能。
* false：设备不支持人脸自动对焦功能。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_iscameraexposurepositionsupported" />

## isCameraExposurePositionSupported [#iscameraexposurepositionsupported]

检查设备是否支持手动曝光。

<a id="api_irtcengine_iscameraexposurepositionsupported__prototype" />

\`\`\`java
public abstract boolean isCameraExposurePositionSupported();
\`\`\`

<a id="api_irtcengine_iscameraexposurepositionsupported__detailed_desc" />

#### \`自从\` [#自从]

自 v2.3.2 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_iscameraexposurepositionsupported__return_values" />

### 返回值 [#返回值-2]

* true：设备支持手动曝光。
* false：设备不支持手动曝光。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_iscameraexposuresupported" />

## isCameraExposureSupported [#iscameraexposuresupported]

查询当前摄像头是否支持调节曝光值。

<a id="api_irtcengine_iscameraexposuresupported__prototype" />

\`\`\`java
public abstract boolean isCameraExposureSupported();
\`\`\`

<a id="api_irtcengine_iscameraexposuresupported__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.2.2 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用。在调用 [setCameraExposureFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposurefactor) 之前，建议先调用该方法查询当前摄像头是否支持调节曝光值。该方法会调节当前激活摄像头的曝光值，即调用 [setCameraCapturerConfiguration](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration) 时指定的摄像头。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_iscameraexposuresupported__return_values" />

### 返回值 [#返回值-3]

* true：当前摄像头支持调节曝光值。
* false：当前摄像头不支持调节曝光值。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_iscamerafacedetectsupported" />

## isCameraFaceDetectSupported [#iscamerafacedetectsupported]

检查设备摄像头是否支持人脸检测。

<a id="api_irtcengine_iscamerafacedetectsupported__prototype" />

\`\`\`java
public abstract boolean isCameraFaceDetectSupported();
\`\`\`

<a id="api_irtcengine_iscamerafacedetectsupported__detailed_desc" />

<a id="api_irtcengine_iscamerafacedetectsupported__return_values" />

### 返回值 [#返回值-4]

* true：设备摄像头支持人脸检测。
* false：设备摄像头不支持人脸检测。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_iscamerafocussupported" />

## isCameraFocusSupported [#iscamerafocussupported]

检查设备是否支持手动对焦功能。

<a id="api_irtcengine_iscamerafocussupported__prototype" />

\`\`\`java
public abstract boolean isCameraFocusSupported();
\`\`\`

<a id="api_irtcengine_iscamerafocussupported__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_iscamerafocussupported__return_values" />

### 返回值 [#返回值-5]

* true：设备支持手动对焦功能。
* false：设备不支持手动对焦功能。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_iscameratorchsupported" />

## isCameraTorchSupported [#iscameratorchsupported]

检查设备是否支持相机闪光灯功能。

<a id="api_irtcengine_iscameratorchsupported__prototype" />

\`\`\`java
public abstract boolean isCameraTorchSupported();
\`\`\`

<a id="api_irtcengine_iscameratorchsupported__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用该方法。App 默认启用前置摄像头。如果前置摄像头不支持闪光灯，该方法返回 false。如果你想检查后置摄像头是否支持闪光灯功能，请在调用该方法前调用 \`switchCamera\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_iscameratorchsupported__return_values" />

### 返回值 [#返回值-6]

* true：设备支持相机闪光灯功能。
* false：设备不支持相机闪光灯功能。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_iscamerazoomsupported" />

## isCameraZoomSupported [#iscamerazoomsupported]

检查设备是否支持摄像头变焦。

<a id="api_irtcengine_iscamerazoomsupported__prototype" />

\`\`\`java
public abstract boolean isCameraZoomSupported();
\`\`\`

<a id="api_irtcengine_iscamerazoomsupported__detailed_desc" />

<a id="api_irtcengine_iscamerazoomsupported__timing" />

### 调用时机 [#调用时机]

必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用。

<a id="api_irtcengine_iscamerazoomsupported__return_values" />

### 返回值 [#返回值-7]

* true：设备支持摄像头变焦。
* false：设备不支持摄像头变焦。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_querycamerafocallengthcapability" />

## queryCameraFocalLengthCapability [#querycamerafocallengthcapability]

查询摄像头支持的焦距能力。

<a id="api_irtcengine_querycamerafocallengthcapability__prototype" />

\`\`\`java
public abstract AgoraFocalLengthInfo[] queryCameraFocalLengthCapability();
\`\`\`

<a id="api_irtcengine_querycamerafocallengthcapability__detailed_desc" />

建议在启用广角或超广角模式进行视频采集前，调用该方法检查设备是否支持所需的焦距能力。根据查询结果调用 [setCameraCapturerConfiguration](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration) 方法调整摄像头的焦距配置，以确保最佳的视频采集性能。

<a id="api_irtcengine_querycamerafocallengthcapability__return_values" />

### 返回值 [#返回值-8]

* 方法调用成功，返回 AgoraFocalLengthInfo 对象数组，包含摄像头的方向和焦距类型。
* 方法调用失败，返回空数组。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_querycodeccapability" />

## queryCodecCapability [#querycodeccapability]

查询 SDK 的视频编解码能力。

<a id="api_irtcengine_querycodeccapability__prototype" />

\`\`\`java
public abstract CodecCapInfo[] queryCodecCapability();
\`\`\`

<a id="api_irtcengine_querycodeccapability__detailed_desc" />

<a id="api_irtcengine_querycodeccapability__return_values" />

### 返回值 [#返回值-9]

方法调用成功，返回 [CodecCapInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-codeccapinfo) 数组，表示设备的视频编码能力。方法调用超时，请修改调用逻辑，避免在主线程中调用该方法。

### 所属接口类 [#所属接口类-9]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcameraautofocusfacemodeenabled" />

## setCameraAutoFocusFaceModeEnabled [#setcameraautofocusfacemodeenabled]

启用或关闭摄像头人脸自动对焦功能。

<a id="api_irtcengine_setcameraautofocusfacemodeenabled__prototype" />

\`\`\`java
public abstract int setCameraAutoFocusFaceModeEnabled(boolean enabled);
\`\`\`

<a id="api_irtcengine_setcameraautofocusfacemodeenabled__detailed_desc" />

<a id="api_irtcengine_setcameraautofocusfacemodeenabled__timing" />

### 调用时机 [#调用时机-1]

必须在 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后调用。

<a id="api_irtcengine_setcameraautofocusfacemodeenabled__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用人脸自动对焦功能：

* true：启用摄像头人脸自动对焦功能。
* false：关闭摄像头人脸自动对焦功能。

<a id="api_irtcengine_setcameraautofocusfacemodeenabled__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcameracapturerconfiguration" />

## setCameraCapturerConfiguration [#setcameracapturerconfiguration]

设置摄像头采集配置。

<a id="api_irtcengine_setcameracapturerconfiguration__prototype" />

\`\`\`java
public abstract int setCameraCapturerConfiguration(CameraCapturerConfiguration config);
\`\`\`

<a id="api_irtcengine_setcameracapturerconfiguration__detailed_desc" />

该方法需要在启用本地视频采集前调用，例如调用 \`startPreview\` 或 \`joinChannel\` 之前。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如需调整摄像头焦距配置，建议先调用 [queryCameraFocalLengthCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability) 查询设备的焦距能力，并根据查询结果进行设置。由于部分 Android 设备的限制，即使根据 [queryCameraFocalLengthCapability](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability) 返回的结果设置了焦距类型，设置也可能不生效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setcameracapturerconfiguration__timing" />

### 调用时机 [#调用时机-2]

该方法需要在启用本地视频采集前调用，例如调用 \`startPreview\` 或 \`joinChannel\` 之前。

<a id="api_irtcengine_setcameracapturerconfiguration__parameters" />

### 参数 [#参数-1]

#### \`config\` [#config]

摄像头采集配置。详见 [CameraCapturerConfiguration](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cameracapturerconfiguration)。

<a id="api_irtcengine_setcameracapturerconfiguration__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcameraexposurefactor" />

## setCameraExposureFactor [#setcameraexposurefactor]

设置摄像头曝光值。

<a id="api_irtcengine_setcameraexposurefactor__prototype" />

\`\`\`java
public abstract int setCameraExposureFactor(int factor);
\`\`\`

<a id="api_irtcengine_setcameraexposurefactor__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.2.2 版本新增。

注：

* 你必须在调用 enableVideo 后再调用此方法。设置结果将在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING （1）后。
* 在调用此方法前，声网建议调用 isCameraExposureSupported 检查当前摄像头是否支持调整曝光值。
* 通过调用此方法，你可以调整当前激活摄像头的曝光值，即调用 setCameraCapturerConfiguration 时指定的摄像头。

<a id="api_irtcengine_setcameraexposurefactor__parameters" />

### 参数 [#参数-2]

#### \`factor\` [#factor]

摄像头曝光值。默认值为 0，表示使用摄像头的默认曝光值。值越大，曝光越强。当视频图像过曝时，可以降低曝光值；当视频图像曝光不足且暗部细节丢失时，可以提高曝光值。如果设置的曝光值超出设备支持的范围，SDK 会自动将其调整为设备实际支持的范围。取值范围为 \\[-20, 20]。

<a id="api_irtcengine_setcameraexposurefactor__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcameraexposureposition" />

## setCameraExposurePosition [#setcameraexposureposition]

设置摄像头曝光位置。

<a id="api_irtcengine_setcameraexposureposition__prototype" />

\`\`\`java
public abstract int setCameraExposurePosition(float positionXinView, float positionYinView);
\`\`\`

<a id="api_irtcengine_setcameraexposureposition__detailed_desc" />

#### \`自从\` [#自从-3]

自 v2.3.2 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后生效。成功调用该方法后，SDK 会触发 [onCameraExposureAreaChanged](/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraexposureareachanged) 回调。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setcameraexposureposition__parameters" />

### 参数 [#参数-3]

#### \`positionXinView\` [#positionxinview]

视图中触摸点的水平坐标。

#### \`positionYinView\` [#positionyinview]

视图中触摸点的垂直坐标。

<a id="api_irtcengine_setcameraexposureposition__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcamerafocuspositioninpreview" />

## setCameraFocusPositionInPreview [#setcamerafocuspositioninpreview]

设置摄像头的手动对焦位置。

<a id="api_irtcengine_setcamerafocuspositioninpreview__prototype" />

\`\`\`java
public abstract int setCameraFocusPositionInPreview(float positionX, float positionY);
\`\`\`

<a id="api_irtcengine_setcamerafocuspositioninpreview__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后生效。成功调用该方法后，SDK 会触发 [onCameraFocusAreaChanged](/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncamerafocusareachanged) 回调。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setcamerafocuspositioninpreview__parameters" />

### 参数 [#参数-4]

#### \`positionX\` [#positionx]

视图中触摸点的水平坐标。

#### \`positionY\` [#positiony]

视图中触摸点的垂直坐标。

<a id="api_irtcengine_setcamerafocuspositioninpreview__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-14]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcameratorchon" />

## setCameraTorchOn [#setcameratorchon]

打开或关闭摄像头闪光灯。

<a id="api_irtcengine_setcameratorchon__prototype" />

\`\`\`java
public abstract int setCameraTorchOn(boolean isOn);
\`\`\`

<a id="api_irtcengine_setcameratorchon__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setcameratorchon__parameters" />

### 参数 [#参数-5]

#### \`isOn\` [#ison]

是否打开摄像头闪光灯：

* true：打开闪光灯。
* false：（默认）关闭闪光灯。

<a id="api_irtcengine_setcameratorchon__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcamerazoomfactor" />

## setCameraZoomFactor [#setcamerazoomfactor]

设置摄像头的缩放因子。

<a id="api_irtcengine_setcamerazoomfactor__prototype" />

\`\`\`java
public abstract int setCameraZoomFactor(float factor);
\`\`\`

<a id="api_irtcengine_setcamerazoomfactor__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之后再调用此方法。该设置在摄像头成功开启后生效，即 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）后。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setcamerazoomfactor__parameters" />

### 参数 [#参数-6]

#### \`factor\` [#factor-1]

摄像头缩放因子。你可以通过调用 [getCameraMaxZoomFactor](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_getcameramaxzoomfactor) 获取设备支持的最大缩放因子。

<a id="api_irtcengine_setcamerazoomfactor__return_values" />

### 返回值 [#返回值-16]

* 方法调用成功，返回摄像头缩放因子 factor 的值。
* 方法调用失败，返回小于 0 的值。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_switchcamera" />

## switchCamera \\[1/2] [#switchcamera-12]

切换前置和后置摄像头。

<a id="api_irtcengine_switchcamera__prototype" />

\`\`\`java
public abstract int switchCamera();
\`\`\`

<a id="api_irtcengine_switchcamera__detailed_desc" />

你可以调用该方法在应用运行过程中根据实际可用的摄像头动态切换前置或后置摄像头，无需重启视频流或重新配置视频源。该方法与 \`switchCamera\` （带参数版本）都可用于切换摄像头。不同之处在于， \`switchCamera(String cameraId)\` 通过指定摄像头 ID 切换到特定摄像头，而本方法则切换摄像头的方向（前置或后置）。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅用于切换由第一个摄像头采集的视频流的摄像头，即调用 [startCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture) 时视频源设置为 \`VIDEO_SOURCE_CAMERA_PRIMARY\` （0）的视频流。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_switchcamera__timing" />

### 调用时机 [#调用时机-3]

必须在摄像头成功启用后调用，即 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）之后。

<a id="api_irtcengine_switchcamera__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-17]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_switchcamera2" />

## switchCamera \\[2/2] [#switchcamera-22]

通过摄像头 ID 切换摄像头。

<a id="api_irtcengine_switchcamera2__prototype" />

\`\`\`java
public abstract int switchCamera(String cameraId);
\`\`\`

<a id="api_irtcengine_switchcamera2__detailed_desc" />

你可以调用该方法在应用运行过程中根据实际可用的摄像头动态切换摄像头，无需重启视频流或重新配置视频源。该方法与 \`switchCamera\` 功能类似，区别在于： \`switchCamera\` 切换的是摄像头方向（前置或后置），而该方法通过指定摄像头 ID 切换到特定摄像头。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅用于切换由第一个摄像头采集的视频流，即调用 [startCameraCapture](/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture) 时视频源设置为 \`VIDEO_SOURCE_CAMERA_PRIMARY\` （0）的视频流。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_switchcamera2__timing" />

### 调用时机 [#调用时机-4]

必须在摄像头成功启用后调用，即 SDK 触发 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged) 回调并返回本地视频状态为 \`LOCAL_VIDEO_STREAM_STATE_CAPTURING\` （1）之后。

<a id="api_irtcengine_switchcamera2__parameters" />

### 参数 [#参数-7]

#### \`cameraId\` [#cameraid]

摄像头 ID。你可以通过 Android 原生系统 API 获取摄像头 ID，例如 \`Camera.open\` 和 \`CameraManager.getCameraIdList\`。

<a id="api_irtcengine_switchcamera2__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_oncameraexposureareachanged" />

## onCameraExposureAreaChanged [#oncameraexposureareachanged]

摄像头曝光区域发生变化回调。

<a id="callback_irtcengineeventhandler_oncameraexposureareachanged__prototype" />

\`\`\`java
public void onCameraExposureAreaChanged(Rect rect)
\`\`\`

<a id="callback_irtcengineeventhandler_oncameraexposureareachanged__detailed_desc" />

当本地用户调用 [setCameraExposurePosition](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition) 更改摄像头曝光位置时，SDK 会触发该回调。

<a id="callback_irtcengineeventhandler_oncameraexposureareachanged__timing" />

### 触发时机 [#触发时机]

该回调在调用 [setCameraExposurePosition](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition) 更改摄像头曝光位置时被触发。

<a id="callback_irtcengineeventhandler_oncameraexposureareachanged__parameters" />

### 参数 [#参数-8]

#### \`rect\` [#rect]

本地预览中的曝光矩形区域。详见 [\`Rect\`](https://developer.android.google.cn/reference/android/graphics/Rect)。

### 所属接口类 [#所属接口类-19]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_oncamerafocusareachanged" />

## onCameraFocusAreaChanged [#oncamerafocusareachanged]

摄像头对焦区域发生变化的回调。

<a id="callback_irtcengineeventhandler_oncamerafocusareachanged__prototype" />

\`\`\`java
public void onCameraFocusAreaChanged(Rect rect)
\`\`\`

<a id="callback_irtcengineeventhandler_oncamerafocusareachanged__detailed_desc" />

当本地用户调用 [setCameraFocusPositionInPreview](/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerafocuspositioninpreview) 更改摄像头对焦位置时，SDK 会触发该回调。

<a id="callback_irtcengineeventhandler_oncamerafocusareachanged__parameters" />

### 参数 [#参数-9]

#### \`rect\` [#rect-1]

本地预览中的对焦矩形区域。详见 [\`Rect\`](https://developer.android.google.cn/reference/android/graphics/Rect)。

### 所属接口类 [#所属接口类-20]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)

<a id="callback_irtcengineeventhandler_oncameraready" />

## onCameraReady [#oncameraready]

摄像头开启并准备好采集视频时触发的回调。

<a id="callback_irtcengineeventhandler_oncameraready__prototype" />

\`\`\`java
public void onCameraReady() {}
\`\`\`

<a id="callback_irtcengineeventhandler_oncameraready__detailed_desc" />

#### \`废弃\` [#废弃]

该方法已废弃，请改用 [onLocalVideoStateChanged](/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged)。

<a id="callback_irtcengineeventhandler_oncameraready__timing" />

### 触发时机 [#触发时机-1]

该回调在摄像头成功开启并准备好采集视频时被触发。

### 所属接口类 [#所属接口类-21]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "getcameramaxzoomfactor",
    content: "获取摄像头支持的最大变焦倍数。"
  }, {
    heading: "getcameramaxzoomfactor",
    content: "你必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用该方法。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回摄像头支持的最大变焦倍数。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "iscameraautofocusfacemodesupported",
    content: "检查设备是否支持人脸自动对焦功能。"
  }, {
    heading: "iscameraautofocusfacemodesupported",
    content: "你必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用该方法。"
  }, {
    heading: "返回值-1",
    content: "true：设备支持人脸自动对焦功能。"
  }, {
    heading: "返回值-1",
    content: "false：设备不支持人脸自动对焦功能。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "iscameraexposurepositionsupported",
    content: "检查设备是否支持手动曝光。"
  }, {
    heading: "自从",
    content: "自 v2.3.2 版本新增。"
  }, {
    heading: "自从",
    content: "你必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用该方法。"
  }, {
    heading: "返回值-2",
    content: "true：设备支持手动曝光。"
  }, {
    heading: "返回值-2",
    content: "false：设备不支持手动曝光。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "iscameraexposuresupported",
    content: "查询当前摄像头是否支持调节曝光值。"
  }, {
    heading: "自从-1",
    content: "自 v4.2.2 版本新增。"
  }, {
    heading: "自从-1",
    content: "该方法必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用。在调用 setCameraExposureFactor 之前，建议先调用该方法查询当前摄像头是否支持调节曝光值。该方法会调节当前激活摄像头的曝光值，即调用 setCameraCapturerConfiguration 时指定的摄像头。"
  }, {
    heading: "返回值-3",
    content: "true：当前摄像头支持调节曝光值。"
  }, {
    heading: "返回值-3",
    content: "false：当前摄像头不支持调节曝光值。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "iscamerafacedetectsupported",
    content: "检查设备摄像头是否支持人脸检测。"
  }, {
    heading: "返回值-4",
    content: "true：设备摄像头支持人脸检测。"
  }, {
    heading: "返回值-4",
    content: "false：设备摄像头不支持人脸检测。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "iscamerafocussupported",
    content: "检查设备是否支持手动对焦功能。"
  }, {
    heading: "iscamerafocussupported",
    content: "你必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用该方法。"
  }, {
    heading: "返回值-5",
    content: "true：设备支持手动对焦功能。"
  }, {
    heading: "返回值-5",
    content: "false：设备不支持手动对焦功能。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "iscameratorchsupported",
    content: "检查设备是否支持相机闪光灯功能。"
  }, {
    heading: "iscameratorchsupported",
    content: "你必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用该方法。App 默认启用前置摄像头。如果前置摄像头不支持闪光灯，该方法返回 false。如果你想检查后置摄像头是否支持闪光灯功能，请在调用该方法前调用 `switchCamera`。"
  }, {
    heading: "返回值-6",
    content: "true：设备支持相机闪光灯功能。"
  }, {
    heading: "返回值-6",
    content: "false：设备不支持相机闪光灯功能。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "iscamerazoomsupported",
    content: "检查设备是否支持摄像头变焦。"
  }, {
    heading: "调用时机",
    content: "必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用。"
  }, {
    heading: "返回值-7",
    content: "true：设备支持摄像头变焦。"
  }, {
    heading: "返回值-7",
    content: "false：设备不支持摄像头变焦。"
  }, {
    heading: "所属接口类-7",
    content: "RtcEngine"
  }, {
    heading: "querycamerafocallengthcapability",
    content: "查询摄像头支持的焦距能力。"
  }, {
    heading: "querycamerafocallengthcapability",
    content: "建议在启用广角或超广角模式进行视频采集前，调用该方法检查设备是否支持所需的焦距能力。根据查询结果调用 setCameraCapturerConfiguration 方法调整摄像头的焦距配置，以确保最佳的视频采集性能。"
  }, {
    heading: "返回值-8",
    content: "方法调用成功，返回 AgoraFocalLengthInfo 对象数组，包含摄像头的方向和焦距类型。"
  }, {
    heading: "返回值-8",
    content: "方法调用失败，返回空数组。"
  }, {
    heading: "所属接口类-8",
    content: "RtcEngine"
  }, {
    heading: "querycodeccapability",
    content: "查询 SDK 的视频编解码能力。"
  }, {
    heading: "返回值-9",
    content: "方法调用成功，返回 CodecCapInfo 数组，表示设备的视频编码能力。方法调用超时，请修改调用逻辑，避免在主线程中调用该方法。"
  }, {
    heading: "所属接口类-9",
    content: "RtcEngine"
  }, {
    heading: "setcameraautofocusfacemodeenabled",
    content: "启用或关闭摄像头人脸自动对焦功能。"
  }, {
    heading: "调用时机-1",
    content: "必须在 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后调用。"
  }, {
    heading: "enabled",
    content: "是否启用人脸自动对焦功能："
  }, {
    heading: "enabled",
    content: "true：启用摄像头人脸自动对焦功能。"
  }, {
    heading: "enabled",
    content: "false：关闭摄像头人脸自动对焦功能。"
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
    heading: "setcameracapturerconfiguration",
    content: "设置摄像头采集配置。"
  }, {
    heading: "setcameracapturerconfiguration",
    content: "该方法需要在启用本地视频采集前调用，例如调用 `startPreview` 或 `joinChannel` 之前。"
  }, {
    heading: "setcameracapturerconfiguration",
    content: "如需调整摄像头焦距配置，建议先调用 queryCameraFocalLengthCapability 查询设备的焦距能力，并根据查询结果进行设置。由于部分 Android 设备的限制，即使根据 queryCameraFocalLengthCapability 返回的结果设置了焦距类型，设置也可能不生效。"
  }, {
    heading: "调用时机-2",
    content: "该方法需要在启用本地视频采集前调用，例如调用 `startPreview` 或 `joinChannel` 之前。"
  }, {
    heading: "config",
    content: "摄像头采集配置。详见 CameraCapturerConfiguration。"
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
    heading: "setcameraexposurefactor",
    content: "设置摄像头曝光值。"
  }, {
    heading: "自从-2",
    content: "自 v4.2.2 版本新增。"
  }, {
    heading: "自从-2",
    content: "注："
  }, {
    heading: "自从-2",
    content: "你必须在调用 enableVideo 后再调用此方法。设置结果将在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 LOCAL\\_VIDEO\\_STREAM\\_STATE\\_CAPTURING （1）后。"
  }, {
    heading: "自从-2",
    content: "在调用此方法前，声网建议调用 isCameraExposureSupported 检查当前摄像头是否支持调整曝光值。"
  }, {
    heading: "自从-2",
    content: "通过调用此方法，你可以调整当前激活摄像头的曝光值，即调用 setCameraCapturerConfiguration 时指定的摄像头。"
  }, {
    heading: "factor",
    content: "摄像头曝光值。默认值为 0，表示使用摄像头的默认曝光值。值越大，曝光越强。当视频图像过曝时，可以降低曝光值；当视频图像曝光不足且暗部细节丢失时，可以提高曝光值。如果设置的曝光值超出设备支持的范围，SDK 会自动将其调整为设备实际支持的范围。取值范围为 \\[-20, 20]。"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-12",
    content: "RtcEngine"
  }, {
    heading: "setcameraexposureposition",
    content: "设置摄像头曝光位置。"
  }, {
    heading: "自从-3",
    content: "自 v2.3.2 版本新增。"
  }, {
    heading: "自从-3",
    content: "你必须在调用 enableVideo 方法之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后生效。成功调用该方法后，SDK 会触发 onCameraExposureAreaChanged 回调。"
  }, {
    heading: "positionxinview",
    content: "视图中触摸点的水平坐标。"
  }, {
    heading: "positionyinview",
    content: "视图中触摸点的垂直坐标。"
  }, {
    heading: "返回值-13",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-13",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-13",
    content: "RtcEngine"
  }, {
    heading: "setcamerafocuspositioninpreview",
    content: "设置摄像头的手动对焦位置。"
  }, {
    heading: "setcamerafocuspositioninpreview",
    content: "你必须在调用 enableVideo 之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后生效。成功调用该方法后，SDK 会触发 onCameraFocusAreaChanged 回调。"
  }, {
    heading: "positionx",
    content: "视图中触摸点的水平坐标。"
  }, {
    heading: "positiony",
    content: "视图中触摸点的垂直坐标。"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-14",
    content: "RtcEngine"
  }, {
    heading: "setcameratorchon",
    content: "打开或关闭摄像头闪光灯。"
  }, {
    heading: "setcameratorchon",
    content: "你必须在调用 enableVideo 之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后。"
  }, {
    heading: "ison",
    content: "是否打开摄像头闪光灯："
  }, {
    heading: "ison",
    content: "true：打开闪光灯。"
  }, {
    heading: "ison",
    content: "false：（默认）关闭闪光灯。"
  }, {
    heading: "返回值-15",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-15",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-15",
    content: "RtcEngine"
  }, {
    heading: "setcamerazoomfactor",
    content: "设置摄像头的缩放因子。"
  }, {
    heading: "setcamerazoomfactor",
    content: "你必须在调用 enableVideo 之后再调用此方法。该设置在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）后。"
  }, {
    heading: "factor-1",
    content: "摄像头缩放因子。你可以通过调用 getCameraMaxZoomFactor 获取设备支持的最大缩放因子。"
  }, {
    heading: "返回值-16",
    content: "方法调用成功，返回摄像头缩放因子 factor 的值。"
  }, {
    heading: "返回值-16",
    content: "方法调用失败，返回小于 0 的值。"
  }, {
    heading: "所属接口类-16",
    content: "RtcEngine"
  }, {
    heading: "switchcamera-12",
    content: "切换前置和后置摄像头。"
  }, {
    heading: "switchcamera-12",
    content: "你可以调用该方法在应用运行过程中根据实际可用的摄像头动态切换前置或后置摄像头，无需重启视频流或重新配置视频源。该方法与 `switchCamera` （带参数版本）都可用于切换摄像头。不同之处在于， `switchCamera(String cameraId)` 通过指定摄像头 ID 切换到特定摄像头，而本方法则切换摄像头的方向（前置或后置）。"
  }, {
    heading: "switchcamera-12",
    content: "该方法仅用于切换由第一个摄像头采集的视频流的摄像头，即调用 startCameraCapture 时视频源设置为 `VIDEO_SOURCE_CAMERA_PRIMARY` （0）的视频流。"
  }, {
    heading: "调用时机-3",
    content: "必须在摄像头成功启用后调用，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）之后。"
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
    heading: "switchcamera-22",
    content: "通过摄像头 ID 切换摄像头。"
  }, {
    heading: "switchcamera-22",
    content: "你可以调用该方法在应用运行过程中根据实际可用的摄像头动态切换摄像头，无需重启视频流或重新配置视频源。该方法与 `switchCamera` 功能类似，区别在于： `switchCamera` 切换的是摄像头方向（前置或后置），而该方法通过指定摄像头 ID 切换到特定摄像头。"
  }, {
    heading: "switchcamera-22",
    content: "该方法仅用于切换由第一个摄像头采集的视频流，即调用 startCameraCapture 时视频源设置为 `VIDEO_SOURCE_CAMERA_PRIMARY` （0）的视频流。"
  }, {
    heading: "调用时机-4",
    content: "必须在摄像头成功启用后调用，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 `LOCAL_VIDEO_STREAM_STATE_CAPTURING` （1）之后。"
  }, {
    heading: "cameraid",
    content: "摄像头 ID。你可以通过 Android 原生系统 API 获取摄像头 ID，例如 `Camera.open` 和 `CameraManager.getCameraIdList`。"
  }, {
    heading: "返回值-18",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-18",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-18",
    content: "RtcEngine"
  }, {
    heading: "oncameraexposureareachanged",
    content: "摄像头曝光区域发生变化回调。"
  }, {
    heading: "oncameraexposureareachanged",
    content: "当本地用户调用 setCameraExposurePosition 更改摄像头曝光位置时，SDK 会触发该回调。"
  }, {
    heading: "触发时机",
    content: "该回调在调用 setCameraExposurePosition 更改摄像头曝光位置时被触发。"
  }, {
    heading: "rect",
    content: "本地预览中的曝光矩形区域。详见 `Rect`。"
  }, {
    heading: "所属接口类-19",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "oncamerafocusareachanged",
    content: "摄像头对焦区域发生变化的回调。"
  }, {
    heading: "oncamerafocusareachanged",
    content: "当本地用户调用 setCameraFocusPositionInPreview 更改摄像头对焦位置时，SDK 会触发该回调。"
  }, {
    heading: "rect-1",
    content: "本地预览中的对焦矩形区域。详见 `Rect`。"
  }, {
    heading: "所属接口类-20",
    content: "IRtcEngineEventHandler"
  }, {
    heading: "oncameraready",
    content: "摄像头开启并准备好采集视频时触发的回调。"
  }, {
    heading: "废弃",
    content: "该方法已废弃，请改用 onLocalVideoStateChanged。"
  }, {
    heading: "触发时机-1",
    content: "该回调在摄像头成功开启并准备好采集视频时被触发。"
  }, {
    heading: "所属接口类-21",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "getcameramaxzoomfactor",
    content: "getCameraMaxZoomFactor"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "iscameraautofocusfacemodesupported",
    content: "isCameraAutoFocusFaceModeSupported"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "iscameraexposurepositionsupported",
    content: "isCameraExposurePositionSupported"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "iscameraexposuresupported",
    content: "isCameraExposureSupported"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "iscamerafacedetectsupported",
    content: "isCameraFaceDetectSupported"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "iscamerafocussupported",
    content: "isCameraFocusSupported"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "iscameratorchsupported",
    content: "isCameraTorchSupported"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "iscamerazoomsupported",
    content: "isCameraZoomSupported"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "querycamerafocallengthcapability",
    content: "queryCameraFocalLengthCapability"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "querycodeccapability",
    content: "queryCodecCapability"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "setcameraautofocusfacemodeenabled",
    content: "setCameraAutoFocusFaceModeEnabled"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "setcameracapturerconfiguration",
    content: "setCameraCapturerConfiguration"
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
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "setcameraexposurefactor",
    content: "setCameraExposureFactor"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "factor",
    content: "`factor`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "setcameraexposureposition",
    content: "setCameraExposurePosition"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "positionxinview",
    content: "`positionXinView`"
  }, {
    id: "positionyinview",
    content: "`positionYinView`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "setcamerafocuspositioninpreview",
    content: "setCameraFocusPositionInPreview"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "positionx",
    content: "`positionX`"
  }, {
    id: "positiony",
    content: "`positionY`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "setcameratorchon",
    content: "setCameraTorchOn"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "ison",
    content: "`isOn`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "setcamerazoomfactor",
    content: "setCameraZoomFactor"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "factor-1",
    content: "`factor`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "switchcamera-12",
    content: "switchCamera [1/2]"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "switchcamera-22",
    content: "switchCamera [2/2]"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "cameraid",
    content: "`cameraId`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "oncameraexposureareachanged",
    content: "onCameraExposureAreaChanged"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "rect",
    content: "`rect`"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "oncamerafocusareachanged",
    content: "onCameraFocusAreaChanged"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "rect-1",
    content: "`rect`"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "oncameraready",
    content: "onCameraReady"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#getcameramaxzoomfactor",
  title: _jsx(_Fragment, {
    children: "getCameraMaxZoomFactor"
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
  url: "#iscameraautofocusfacemodesupported",
  title: _jsx(_Fragment, {
    children: "isCameraAutoFocusFaceModeSupported"
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
  url: "#iscameraexposurepositionsupported",
  title: _jsx(_Fragment, {
    children: "isCameraExposurePositionSupported"
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
  url: "#iscameraexposuresupported",
  title: _jsx(_Fragment, {
    children: "isCameraExposureSupported"
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
  url: "#iscamerafacedetectsupported",
  title: _jsx(_Fragment, {
    children: "isCameraFaceDetectSupported"
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
  url: "#iscamerafocussupported",
  title: _jsx(_Fragment, {
    children: "isCameraFocusSupported"
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
  url: "#iscameratorchsupported",
  title: _jsx(_Fragment, {
    children: "isCameraTorchSupported"
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
  url: "#iscamerazoomsupported",
  title: _jsx(_Fragment, {
    children: "isCameraZoomSupported"
  })
}, {
  depth: 3,
  url: "#调用时机",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#querycamerafocallengthcapability",
  title: _jsx(_Fragment, {
    children: "queryCameraFocalLengthCapability"
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
  url: "#querycodeccapability",
  title: _jsx(_Fragment, {
    children: "queryCodecCapability"
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
  url: "#setcameraautofocusfacemodeenabled",
  title: _jsx(_Fragment, {
    children: "setCameraAutoFocusFaceModeEnabled"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#enabled",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  url: "#setcameracapturerconfiguration",
  title: _jsx(_Fragment, {
    children: "setCameraCapturerConfiguration"
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
  url: "#setcameraexposurefactor",
  title: _jsx(_Fragment, {
    children: "setCameraExposureFactor"
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
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#factor",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "factor"
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
  url: "#setcameraexposureposition",
  title: _jsx(_Fragment, {
    children: "setCameraExposurePosition"
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
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#positionxinview",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionXinView"
    })
  })
}, {
  depth: 4,
  url: "#positionyinview",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionYinView"
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
  url: "#setcamerafocuspositioninpreview",
  title: _jsx(_Fragment, {
    children: "setCameraFocusPositionInPreview"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#positionx",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionX"
    })
  })
}, {
  depth: 4,
  url: "#positiony",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionY"
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
  url: "#setcameratorchon",
  title: _jsx(_Fragment, {
    children: "setCameraTorchOn"
  })
}, {
  depth: 3,
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#ison",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "isOn"
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
  url: "#setcamerazoomfactor",
  title: _jsx(_Fragment, {
    children: "setCameraZoomFactor"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#factor-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "factor"
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
  url: "#switchcamera-12",
  title: _jsx(_Fragment, {
    children: "switchCamera [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#switchcamera-22",
  title: _jsx(_Fragment, {
    children: "switchCamera [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#cameraid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "cameraId"
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
  url: "#oncameraexposureareachanged",
  title: _jsx(_Fragment, {
    children: "onCameraExposureAreaChanged"
  })
}, {
  depth: 3,
  url: "#触发时机",
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
  url: "#rect",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rect"
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
  url: "#oncamerafocusareachanged",
  title: _jsx(_Fragment, {
    children: "onCameraFocusAreaChanged"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#rect-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rect"
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
  url: "#oncameraready",
  title: _jsx(_Fragment, {
    children: "onCameraReady"
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
  url: "#所属接口类-21",
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
      id: "toc_video_device"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcameramaxzoomfactor"
    }), `
`, _jsx(_components.h2, {
      id: "getcameramaxzoomfactor",
      children: "getCameraMaxZoomFactor"
    }), `
`, _jsx(_components.p, {
      children: "获取摄像头支持的最大变焦倍数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcameramaxzoomfactor__prototype"
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
              children: " float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getCameraMaxZoomFactor"
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
      id: "api_irtcengine_getcameramaxzoomfactor__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getcameramaxzoomfactor__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回摄像头支持的最大变焦倍数。"
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
      id: "api_irtcengine_iscameraautofocusfacemodesupported"
    }), `
`, _jsx(_components.h2, {
      id: "iscameraautofocusfacemodesupported",
      children: "isCameraAutoFocusFaceModeSupported"
    }), `
`, _jsx(_components.p, {
      children: "检查设备是否支持人脸自动对焦功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameraautofocusfacemodesupported__prototype"
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
              children: " isCameraAutoFocusFaceModeSupported"
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
      id: "api_irtcengine_iscameraautofocusfacemodesupported__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameraautofocusfacemodesupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：设备支持人脸自动对焦功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：设备不支持人脸自动对焦功能。"
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
      id: "api_irtcengine_iscameraexposurepositionsupported"
    }), `
`, _jsx(_components.h2, {
      id: "iscameraexposurepositionsupported",
      children: "isCameraExposurePositionSupported"
    }), `
`, _jsx(_components.p, {
      children: "检查设备是否支持手动曝光。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameraexposurepositionsupported__prototype"
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
              children: " isCameraExposurePositionSupported"
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
      id: "api_irtcengine_iscameraexposurepositionsupported__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v2.3.2 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameraexposurepositionsupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：设备支持手动曝光。"
      }), `
`, _jsx(_components.li, {
        children: "false：设备不支持手动曝光。"
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
      id: "api_irtcengine_iscameraexposuresupported"
    }), `
`, _jsx(_components.h2, {
      id: "iscameraexposuresupported",
      children: "isCameraExposureSupported"
    }), `
`, _jsx(_components.p, {
      children: "查询当前摄像头是否支持调节曝光值。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameraexposuresupported__prototype"
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
              children: " isCameraExposureSupported"
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
      id: "api_irtcengine_iscameraexposuresupported__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.2.2 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法必须在 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后调用。在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposurefactor",
            children: "setCameraExposureFactor"
          }), " 之前，建议先调用该方法查询当前摄像头是否支持调节曝光值。该方法会调节当前激活摄像头的曝光值，即调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration",
            children: "setCameraCapturerConfiguration"
          }), " 时指定的摄像头。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameraexposuresupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：当前摄像头支持调节曝光值。"
      }), `
`, _jsx(_components.li, {
        children: "false：当前摄像头不支持调节曝光值。"
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
      id: "api_irtcengine_iscamerafacedetectsupported"
    }), `
`, _jsx(_components.h2, {
      id: "iscamerafacedetectsupported",
      children: "isCameraFaceDetectSupported"
    }), `
`, _jsx(_components.p, {
      children: "检查设备摄像头是否支持人脸检测。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscamerafacedetectsupported__prototype"
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
              children: " isCameraFaceDetectSupported"
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
      id: "api_irtcengine_iscamerafacedetectsupported__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscamerafacedetectsupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：设备摄像头支持人脸检测。"
      }), `
`, _jsx(_components.li, {
        children: "false：设备摄像头不支持人脸检测。"
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
      id: "api_irtcengine_iscamerafocussupported"
    }), `
`, _jsx(_components.h2, {
      id: "iscamerafocussupported",
      children: "isCameraFocusSupported"
    }), `
`, _jsx(_components.p, {
      children: "检查设备是否支持手动对焦功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscamerafocussupported__prototype"
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
              children: " isCameraFocusSupported"
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
      id: "api_irtcengine_iscamerafocussupported__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后调用该方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscamerafocussupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：设备支持手动对焦功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：设备不支持手动对焦功能。"
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
      id: "api_irtcengine_iscameratorchsupported"
    }), `
`, _jsx(_components.h2, {
      id: "iscameratorchsupported",
      children: "isCameraTorchSupported"
    }), `
`, _jsx(_components.p, {
      children: "检查设备是否支持相机闪光灯功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameratorchsupported__prototype"
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
              children: " isCameraTorchSupported"
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
      id: "api_irtcengine_iscameratorchsupported__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后调用该方法。App 默认启用前置摄像头。如果前置摄像头不支持闪光灯，该方法返回 false。如果你想检查后置摄像头是否支持闪光灯功能，请在调用该方法前调用 ", _jsx(_components.code, {
            children: "switchCamera"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscameratorchsupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：设备支持相机闪光灯功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：设备不支持相机闪光灯功能。"
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
      id: "api_irtcengine_iscamerazoomsupported"
    }), `
`, _jsx(_components.h2, {
      id: "iscamerazoomsupported",
      children: "isCameraZoomSupported"
    }), `
`, _jsx(_components.p, {
      children: "检查设备是否支持摄像头变焦。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscamerazoomsupported__prototype"
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
              children: " isCameraZoomSupported"
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
      id: "api_irtcengine_iscamerazoomsupported__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscamerazoomsupported__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在 SDK 触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
        children: "onLocalVideoStateChanged"
      }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
        children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
      }), " （1）后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_iscamerazoomsupported__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：设备支持摄像头变焦。"
      }), `
`, _jsx(_components.li, {
        children: "false：设备不支持摄像头变焦。"
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
      id: "api_irtcengine_querycamerafocallengthcapability"
    }), `
`, _jsx(_components.h2, {
      id: "querycamerafocallengthcapability",
      children: "queryCameraFocalLengthCapability"
    }), `
`, _jsx(_components.p, {
      children: "查询摄像头支持的焦距能力。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_querycamerafocallengthcapability__prototype"
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
              children: " AgoraFocalLengthInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "queryCameraFocalLengthCapability"
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
      id: "api_irtcengine_querycamerafocallengthcapability__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["建议在启用广角或超广角模式进行视频采集前，调用该方法检查设备是否支持所需的焦距能力。根据查询结果调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameracapturerconfiguration",
        children: "setCameraCapturerConfiguration"
      }), " 方法调整摄像头的焦距配置，以确保最佳的视频采集性能。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_querycamerafocallengthcapability__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 AgoraFocalLengthInfo 对象数组，包含摄像头的方向和焦距类型。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空数组。"
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
      id: "api_irtcengine_querycodeccapability"
    }), `
`, _jsx(_components.h2, {
      id: "querycodeccapability",
      children: "queryCodecCapability"
    }), `
`, _jsx(_components.p, {
      children: "查询 SDK 的视频编解码能力。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_querycodeccapability__prototype"
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
              children: " CodecCapInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "queryCodecCapability"
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
      id: "api_irtcengine_querycodeccapability__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_querycodeccapability__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-codeccapinfo",
        children: "CodecCapInfo"
      }), " 数组，表示设备的视频编码能力。方法调用超时，请修改调用逻辑，避免在主线程中调用该方法。"]
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
      id: "api_irtcengine_setcameraautofocusfacemodeenabled"
    }), `
`, _jsx(_components.h2, {
      id: "setcameraautofocusfacemodeenabled",
      children: "setCameraAutoFocusFaceModeEnabled"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭摄像头人脸自动对焦功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraautofocusfacemodeenabled__prototype"
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
              children: " setCameraAutoFocusFaceModeEnabled"
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
      id: "api_irtcengine_setcameraautofocusfacemodeenabled__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraautofocusfacemodeenabled__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在 SDK 触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
        children: "onLocalVideoStateChanged"
      }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
        children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
      }), " （1）后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraautofocusfacemodeenabled__parameters"
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
      children: "是否启用人脸自动对焦功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用摄像头人脸自动对焦功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭摄像头人脸自动对焦功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraautofocusfacemodeenabled__return_values"
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
      id: "api_irtcengine_setcameracapturerconfiguration"
    }), `
`, _jsx(_components.h2, {
      id: "setcameracapturerconfiguration",
      children: "setCameraCapturerConfiguration"
    }), `
`, _jsx(_components.p, {
      children: "设置摄像头采集配置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameracapturerconfiguration__prototype"
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
              children: " setCameraCapturerConfiguration"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(CameraCapturerConfiguration config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameracapturerconfiguration__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需要在启用本地视频采集前调用，例如调用 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 或 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 之前。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如需调整摄像头焦距配置，建议先调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability",
            children: "queryCameraFocalLengthCapability"
          }), " 查询设备的焦距能力，并根据查询结果进行设置。由于部分 Android 设备的限制，即使根据 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_querycamerafocallengthcapability",
            children: "queryCameraFocalLengthCapability"
          }), " 返回的结果设置了焦距类型，设置也可能不生效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameracapturerconfiguration__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需要在启用本地视频采集前调用，例如调用 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 或 ", _jsx(_components.code, {
        children: "joinChannel"
      }), " 之前。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameracapturerconfiguration__parameters"
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
      children: ["摄像头采集配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-cameracapturerconfiguration",
        children: "CameraCapturerConfiguration"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameracapturerconfiguration__return_values"
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
      id: "api_irtcengine_setcameraexposurefactor"
    }), `
`, _jsx(_components.h2, {
      id: "setcameraexposurefactor",
      children: "setCameraExposureFactor"
    }), `
`, _jsx(_components.p, {
      children: "设置摄像头曝光值。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposurefactor__prototype"
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
              children: " setCameraExposureFactor"
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
              children: " factor);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposurefactor__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.2.2 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你必须在调用 enableVideo 后再调用此方法。设置结果将在摄像头成功开启后生效，即 SDK 触发 onLocalVideoStateChanged 回调并返回本地视频状态为 LOCAL_VIDEO_STREAM_STATE_CAPTURING （1）后。"
      }), `
`, _jsx(_components.li, {
        children: "在调用此方法前，声网建议调用 isCameraExposureSupported 检查当前摄像头是否支持调整曝光值。"
      }), `
`, _jsx(_components.li, {
        children: "通过调用此方法，你可以调整当前激活摄像头的曝光值，即调用 setCameraCapturerConfiguration 时指定的摄像头。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposurefactor__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "factor",
      children: _jsx(_components.code, {
        children: "factor"
      })
    }), `
`, _jsx(_components.p, {
      children: "摄像头曝光值。默认值为 0，表示使用摄像头的默认曝光值。值越大，曝光越强。当视频图像过曝时，可以降低曝光值；当视频图像曝光不足且暗部细节丢失时，可以提高曝光值。如果设置的曝光值超出设备支持的范围，SDK 会自动将其调整为设备实际支持的范围。取值范围为 [-20, 20]。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposurefactor__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposureposition"
    }), `
`, _jsx(_components.h2, {
      id: "setcameraexposureposition",
      children: "setCameraExposurePosition"
    }), `
`, _jsx(_components.p, {
      children: "设置摄像头曝光位置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposureposition__prototype"
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
              children: " setCameraExposurePosition"
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
              children: "float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " positionXinView, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " positionYinView);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposureposition__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-3",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v2.3.2 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
            children: "enableVideo"
          }), " 方法之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后生效。成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncameraexposureareachanged",
            children: "onCameraExposureAreaChanged"
          }), " 回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposureposition__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "positionxinview",
      children: _jsx(_components.code, {
        children: "positionXinView"
      })
    }), `
`, _jsx(_components.p, {
      children: "视图中触摸点的水平坐标。"
    }), `
`, _jsx(_components.h4, {
      id: "positionyinview",
      children: _jsx(_components.code, {
        children: "positionYinView"
      })
    }), `
`, _jsx(_components.p, {
      children: "视图中触摸点的垂直坐标。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameraexposureposition__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerafocuspositioninpreview"
    }), `
`, _jsx(_components.h2, {
      id: "setcamerafocuspositioninpreview",
      children: "setCameraFocusPositionInPreview"
    }), `
`, _jsx(_components.p, {
      children: "设置摄像头的手动对焦位置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerafocuspositioninpreview__prototype"
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
              children: " setCameraFocusPositionInPreview"
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
              children: "float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " positionX, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " positionY);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerafocuspositioninpreview__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
            children: "enableVideo"
          }), " 之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后生效。成功调用该方法后，SDK 会触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/device-management/video-device#callback_irtcengineeventhandler_oncamerafocusareachanged",
            children: "onCameraFocusAreaChanged"
          }), " 回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerafocuspositioninpreview__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "positionx",
      children: _jsx(_components.code, {
        children: "positionX"
      })
    }), `
`, _jsx(_components.p, {
      children: "视图中触摸点的水平坐标。"
    }), `
`, _jsx(_components.h4, {
      id: "positiony",
      children: _jsx(_components.code, {
        children: "positionY"
      })
    }), `
`, _jsx(_components.p, {
      children: "视图中触摸点的垂直坐标。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerafocuspositioninpreview__return_values"
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
        }), "了解详情和解决建议。"]
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
      id: "api_irtcengine_setcameratorchon"
    }), `
`, _jsx(_components.h2, {
      id: "setcameratorchon",
      children: "setCameraTorchOn"
    }), `
`, _jsx(_components.p, {
      children: "打开或关闭摄像头闪光灯。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameratorchon__prototype"
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
              children: " setCameraTorchOn"
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
              children: " isOn);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameratorchon__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
            children: "enableVideo"
          }), " 之后再调用此方法。设置结果会在摄像头成功开启后生效，即 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameratorchon__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "ison",
      children: _jsx(_components.code, {
        children: "isOn"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否打开摄像头闪光灯："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：打开闪光灯。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭闪光灯。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcameratorchon__return_values"
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
      id: "api_irtcengine_setcamerazoomfactor"
    }), `
`, _jsx(_components.h2, {
      id: "setcamerazoomfactor",
      children: "setCameraZoomFactor"
    }), `
`, _jsx(_components.p, {
      children: "设置摄像头的缩放因子。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerazoomfactor__prototype"
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
              children: " setCameraZoomFactor"
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
              children: "float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " factor);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerazoomfactor__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
            children: "enableVideo"
          }), " 之后再调用此方法。该设置在摄像头成功开启后生效，即 SDK 触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
            children: "onLocalVideoStateChanged"
          }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
            children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
          }), " （1）后。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerazoomfactor__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "factor-1",
      children: _jsx(_components.code, {
        children: "factor"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["摄像头缩放因子。你可以通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_getcameramaxzoomfactor",
        children: "getCameraMaxZoomFactor"
      }), " 获取设备支持的最大缩放因子。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcamerazoomfactor__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-16",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回摄像头缩放因子 factor 的值。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回小于 0 的值。"
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
      id: "api_irtcengine_switchcamera"
    }), `
`, _jsx(_components.h2, {
      id: "switchcamera-12",
      children: "switchCamera [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "切换前置和后置摄像头。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera__prototype"
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
              children: " switchCamera"
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
      id: "api_irtcengine_switchcamera__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法在应用运行过程中根据实际可用的摄像头动态切换前置或后置摄像头，无需重启视频流或重新配置视频源。该方法与 ", _jsx(_components.code, {
        children: "switchCamera"
      }), " （带参数版本）都可用于切换摄像头。不同之处在于， ", _jsx(_components.code, {
        children: "switchCamera(String cameraId)"
      }), " 通过指定摄像头 ID 切换到特定摄像头，而本方法则切换摄像头的方向（前置或后置）。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法仅用于切换由第一个摄像头采集的视频流的摄像头，即调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture",
            children: "startCameraCapture"
          }), " 时视频源设置为 ", _jsx(_components.code, {
            children: "VIDEO_SOURCE_CAMERA_PRIMARY"
          }), " （0）的视频流。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在摄像头成功启用后调用，即 SDK 触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
        children: "onLocalVideoStateChanged"
      }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
        children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
      }), " （1）之后。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera__return_values"
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
      id: "api_irtcengine_switchcamera2"
    }), `
`, _jsx(_components.h2, {
      id: "switchcamera-22",
      children: "switchCamera [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "通过摄像头 ID 切换摄像头。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera2__prototype"
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
              children: " switchCamera"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String cameraId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用该方法在应用运行过程中根据实际可用的摄像头动态切换摄像头，无需重启视频流或重新配置视频源。该方法与 ", _jsx(_components.code, {
        children: "switchCamera"
      }), " 功能类似，区别在于： ", _jsx(_components.code, {
        children: "switchCamera"
      }), " 切换的是摄像头方向（前置或后置），而该方法通过指定摄像头 ID 切换到特定摄像头。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法仅用于切换由第一个摄像头采集的视频流，即调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/camera-capture#api_irtcengine_startcameracapture",
            children: "startCameraCapture"
          }), " 时视频源设置为 ", _jsx(_components.code, {
            children: "VIDEO_SOURCE_CAMERA_PRIMARY"
          }), " （0）的视频流。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在摄像头成功启用后调用，即 SDK 触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#callback_irtcengineeventhandler_onlocalvideostatechanged",
        children: "onLocalVideoStateChanged"
      }), " 回调并返回本地视频状态为 ", _jsx(_components.code, {
        children: "LOCAL_VIDEO_STREAM_STATE_CAPTURING"
      }), " （1）之后。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "cameraid",
      children: _jsx(_components.code, {
        children: "cameraId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["摄像头 ID。你可以通过 Android 原生系统 API 获取摄像头 ID，例如 ", _jsx(_components.code, {
        children: "Camera.open"
      }), " 和 ", _jsx(_components.code, {
        children: "CameraManager.getCameraIdList"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_switchcamera2__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncameraexposureareachanged"
    }), `
`, _jsx(_components.h2, {
      id: "oncameraexposureareachanged",
      children: "onCameraExposureAreaChanged"
    }), `
`, _jsx(_components.p, {
      children: "摄像头曝光区域发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncameraexposureareachanged__prototype"
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
              children: " onCameraExposureAreaChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Rect rect)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncameraexposureareachanged__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当本地用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition",
        children: "setCameraExposurePosition"
      }), " 更改摄像头曝光位置时，SDK 会触发该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncameraexposureareachanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该回调在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcameraexposureposition",
        children: "setCameraExposurePosition"
      }), " 更改摄像头曝光位置时被触发。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncameraexposureareachanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "rect",
      children: _jsx(_components.code, {
        children: "rect"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地预览中的曝光矩形区域。详见 ", _jsx(_components.a, {
        href: "https://developer.android.google.cn/reference/android/graphics/Rect",
        children: _jsx(_components.code, {
          children: "Rect"
        })
      }), "。"]
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
      id: "callback_irtcengineeventhandler_oncamerafocusareachanged"
    }), `
`, _jsx(_components.h2, {
      id: "oncamerafocusareachanged",
      children: "onCameraFocusAreaChanged"
    }), `
`, _jsx(_components.p, {
      children: "摄像头对焦区域发生变化的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncamerafocusareachanged__prototype"
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
              children: " onCameraFocusAreaChanged"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Rect rect)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncamerafocusareachanged__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["当本地用户调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/device-management/video-device#api_irtcengine_setcamerafocuspositioninpreview",
        children: "setCameraFocusPositionInPreview"
      }), " 更改摄像头对焦位置时，SDK 会触发该回调。"]
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncamerafocusareachanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "rect-1",
      children: _jsx(_components.code, {
        children: "rect"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["本地预览中的对焦矩形区域。详见 ", _jsx(_components.a, {
        href: "https://developer.android.google.cn/reference/android/graphics/Rect",
        children: _jsx(_components.code, {
          children: "Rect"
        })
      }), "。"]
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
      id: "callback_irtcengineeventhandler_oncameraready"
    }), `
`, _jsx(_components.h2, {
      id: "oncameraready",
      children: "onCameraReady"
    }), `
`, _jsx(_components.p, {
      children: "摄像头开启并准备好采集视频时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncameraready__prototype"
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
              children: " onCameraReady"
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
      id: "callback_irtcengineeventhandler_oncameraready__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
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
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_oncameraready__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在摄像头成功开启并准备好采集视频时被触发。"
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
