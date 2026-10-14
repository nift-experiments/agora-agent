import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "直播水印",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_watermark" />

<a id="api_irtcengine_addvideowatermark1" />

## addVideoWatermark \\[1/3] [#addvideowatermark-13]

向本地视频添加水印图像。

<a id="api_irtcengine_addvideowatermark1__prototype" />

\`\`\`java
public abstract int addVideoWatermark(AgoraImage watermark)
\`\`\`

<a id="api_irtcengine_addvideowatermark1__detailed_desc" />

#### \`废弃\` [#废弃]

自 v2.9.1 版本废弃，请改用 [addVideoWatermark \\[3/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3)。

该方法在直播场景中向本地视频流添加 PNG 格式的水印图像。频道内的所有用户（包括 CDN 观众）以及视频采集设备都可以看到并采集该水印图像。如果你只想向 CDN 推流添加水印，请使用 [startRtmpStreamWithTranscoding](/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding) 方法。

注：

* 本地视频和 CDN 推流中 URL 的含义不同：在本地视频流中，URL 指的是添加的水印图像文件在本地视频流中的绝对路径；在 CDN 推流中，URL 指的是添加的水印图像在 CDN 推流中的 URL 地址。
* 水印图像的源文件必须为 PNG 格式。如果 PNG 文件的宽高与该方法中的设置不一致，SDK 会对 PNG 文件进行裁剪以符合设置。
* SDK 仅支持在本地视频或 CDN 推流中添加一张水印图像。新添加的水印图像会替换之前的图像。

<a id="api_irtcengine_addvideowatermark1__parameters" />

### 参数 [#参数]

#### \`watermark\` [#watermark]

要添加到本地直播中的水印图像。详见 [AgoraImage](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcimage)。

<a id="api_irtcengine_addvideowatermark1__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_addvideowatermark2" />

## addVideoWatermark \\[2/3] [#addvideowatermark-23]

向本地视频添加水印图像。

<a id="api_irtcengine_addvideowatermark2__prototype" />

\`\`\`java
public abstract int addVideoWatermark(String watermarkUrl, WatermarkOptions options)
\`\`\`

<a id="api_irtcengine_addvideowatermark2__detailed_desc" />

#### \`废弃\` [#废弃-1]

自 v4.6.0 版本废弃，请改用 [addVideoWatermark \\[3/3\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3) 方法。

该方法在直播中向本地视频添加 PNG 格式的水印图像。添加水印后，频道中的所有观众（包括 CDN 观众）以及采集设备都可以看到并采集到该水印图像。声网 SDK 每个直播视频流仅支持添加一张水印图像，新添加的水印会替换之前的图像。 水印图像的位置依赖于 [setVideoEncoderConfiguration](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration) 方法中的设置：

* 如果编码视频的方向模式（ORIENTATION\\_MODE ）为固定横屏模式或自适应横屏模式，则水印使用横屏方向。
* 如果编码视频的方向模式为固定竖屏模式或自适应竖屏模式，则水印使用竖屏方向。
* 设置水印位置时，区域必须小于 setVideoEncoderConfiguration 方法中设置的尺寸，否则水印图像会被裁剪。

你可以通过设置 \`visibleInPreview\` 参数控制预览时水印的可见性。但其最终是否生效还取决于调用 [setupLocalVideo](/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo) 时设置的 \`position\` 参数（视频帧在视频链路中的位置）：

* 观察位置 VIDEO\\_MODULE\\_POSITION\\_POST\\_CAPTURER （默认）： visiblePreview 为 true，则水印可见； visiblePreview 为 false，则水印不可见。
* 观察位置 VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER： visiblePreview 为 true，则水印可见； visiblePreview 为 false，则水印仍可见。

注：

* 请确保在调用该方法前已调用 enableVideo。
* 如果你只想为媒体推流添加水印，可以调用该方法或 startRtmpStreamWithTranscoding 方法。
* 该方法仅支持添加 PNG 文件格式的水印图像。支持的 PNG 图像像素格式包括 RGBA、RGB、Palette、Gray 和 Alpha\\_gray。
* 如果 PNG 图像的尺寸与该方法中的设置不一致，图像将被裁剪或缩放以符合设置。
* 如果你为本地视频启用了镜像模式，则本地视频中的水印也会被镜像。为避免水印被镜像，声网建议不要同时使用本地视频的镜像和水印功能。你可以在应用层实现水印功能。

<a id="api_irtcengine_addvideowatermark2__parameters" />

### 参数 [#参数-1]

#### \`watermarkUrl\` [#watermarkurl]

要添加的水印图像的本地文件路径。支持使用本地绝对路径或相对路径。

#### \`options\` [#options]

水印图像的相关设置。详见 [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions)。

<a id="api_irtcengine_addvideowatermark2__return_values" />

### 返回值 [#返回值-1]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_addvideowatermark3" />

## addVideoWatermark \\[3/3] [#addvideowatermark-33]

向本地视频流添加水印图像。

<a id="api_irtcengine_addvideowatermark3__prototype" />

\`\`\`java
public abstract int addVideoWatermark(WatermarkConfig config);
\`\`\`

<a id="api_irtcengine_addvideowatermark3__detailed_desc" />

#### \`自从\` [#自从]

自 v4.6.0 版本新增。

你可以使用该方法通过 [WatermarkConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig) 配置，在本地视频流中叠加水印图像，包括设置水印在预览中的位置、大小和可见性。

<a id="api_irtcengine_addvideowatermark3__parameters" />

### 参数 [#参数-2]

#### \`config\` [#config]

水印配置。详见 [WatermarkConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig)。

<a id="api_irtcengine_addvideowatermark3__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_addvideowatermarkex" />

## addVideoWatermarkEx \\[1/2] [#addvideowatermarkex-12]

向本地视频添加水印图像。

<a id="api_irtcengineex_addvideowatermarkex__prototype" />

\`\`\`java
public abstract int addVideoWatermarkEx(String watermarkUrl, WatermarkOptions options, RtcConnection connection)
\`\`\`

<a id="api_irtcengineex_addvideowatermarkex__detailed_desc" />

#### \`废弃\` [#废弃-2]

自 v4.6.0 版本废弃，请改用 [addVideoWatermarkEx \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1) 方法。

该方法在直播中向本地视频添加 PNG 格式的水印图像。添加水印图像后，频道中的所有观众（包括 CDN 观众）以及采集设备都可以看到并采集该图像。声网 SDK 仅支持在一个直播视频流中添加一张水印图像，新添加的水印图像会替换之前的图像。 水印图像的坐标依赖于 [setVideoEncoderConfigurationEx](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex) 方法中的设置：

* 如果编码视频的方向模式（ORIENTATION\\_MODE ）为固定横屏模式或自适应横屏模式，则水印使用横屏方向。
* 如果编码视频的方向模式为固定竖屏模式或自适应竖屏模式，则水印使用竖屏方向。
* 设置水印位置时，区域必须小于 setVideoEncoderConfigurationEx 方法中设置的尺寸，否则水印图像会被裁剪。

注：

* 请确保在调用该方法前已调用 enableVideo 方法。
* 该方法仅支持添加 PNG 文件格式的水印图像。支持的 PNG 图像像素格式包括 RGBA、RGB、Palette、Gray 和 Alpha\\_gray。
* 如果 PNG 图像的尺寸与该方法中的设置不一致，图像将被裁剪或缩放以符合设置。
* 如果你已通过调用 startPreview 方法启用了本地视频预览，可以使用 visibleInPreview 成员设置水印在预览中是否可见。
* 如果你为本地视频启用了镜像模式，则本地视频中的水印也会被镜像。为避免水印被镜像，声网建议不要同时使用本地视频的镜像和水印功能。你可以在应用层实现水印功能。

<a id="api_irtcengineex_addvideowatermarkex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_addvideowatermarkex__parameters" />

### 参数 [#参数-3]

#### \`watermarkUrl\` [#watermarkurl-1]

要添加的水印图像的本地文件路径。支持使用本地绝对路径或相对路径。

#### \`options\` [#options-1]

水印图像的相关设置。详见 [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions)。

#### \`connection\` [#connection]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_addvideowatermarkex__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_addvideowatermarkex1" />

## addVideoWatermarkEx \\[2/2] [#addvideowatermarkex-22]

向本地视频添加水印图像。

<a id="api_irtcengineex_addvideowatermarkex1__prototype" />

\`\`\`java
public abstract int addVideoWatermarkEx(WatermarkConfig config, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_addvideowatermarkex1__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.6.0 版本新增。

<a id="api_irtcengineex_addvideowatermarkex1__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_addvideowatermarkex1__parameters" />

### 参数 [#参数-4]

#### \`config\` [#config-1]

水印配置。详见 [WatermarkConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig)。

#### \`connection\` [#connection-1]

[RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection) 对象。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_addvideowatermarkex1__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_clearvideowatermarkex" />

## clearVideoWatermarkEx [#clearvideowatermarkex]

从视频流中移除水印图像。

<a id="api_irtcengineex_clearvideowatermarkex__prototype" />

\`\`\`java
public abstract int clearVideoWatermarkEx(RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_clearvideowatermarkex__detailed_desc" />

<a id="api_irtcengineex_clearvideowatermarkex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_clearvideowatermarkex__parameters" />

### 参数 [#参数-5]

#### \`connection\` [#connection-2]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_clearvideowatermarkex__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_clearvideowatermarks" />

## clearVideoWatermarks [#clearvideowatermarks]

从视频流中移除水印图像。

<a id="api_irtcengine_clearvideowatermarks__prototype" />

\`\`\`java
public abstract int clearVideoWatermarks();
\`\`\`

<a id="api_irtcengine_clearvideowatermarks__detailed_desc" />

<a id="api_irtcengine_clearvideowatermarks__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_watermarkbuffer_getbuffer" />

## getBuffer [#getbuffer]

获取水印图像的数据缓冲区。

<a id="api_watermarkbuffer_getbuffer__prototype" />

\`\`\`java
public ByteBuffer getBuffer()
\`\`\`

<a id="api_watermarkbuffer_getbuffer__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.6.0 版本新增。

<a id="api_watermarkbuffer_getbuffer__return_values" />

### 返回值 [#返回值-7]

方法调用成功时，返回包含水印图像数据的 \`ByteBuffer\` 对象。

### 所属接口类 [#所属接口类-7]

* [WatermarkBuffer](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer)

<a id="api_watermarkbuffer_getformat" />

## getFormat [#getformat]

获取水印图像的格式。

<a id="api_watermarkbuffer_getformat__prototype" />

\`\`\`java
public int getFormat()
\`\`\`

<a id="api_watermarkbuffer_getformat__detailed_desc" />

#### \`自从\` [#自从-3]

自 v4.6.0 版本新增。

<a id="api_watermarkbuffer_getformat__return_values" />

### 返回值 [#返回值-8]

方法调用成功，返回水印图像缓冲区的格式。

### 所属接口类 [#所属接口类-8]

* [WatermarkBuffer](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer)

<a id="api_watermarkbuffer_getheight" />

## getHeight [#getheight]

获取水印图像的高度。

<a id="api_watermarkbuffer_getheight__prototype" />

\`\`\`java
public int getHeight()
\`\`\`

<a id="api_watermarkbuffer_getheight__detailed_desc" />

#### \`自从\` [#自从-4]

自 v4.6.0 版本新增。

<a id="api_watermarkbuffer_getheight__return_values" />

### 返回值 [#返回值-9]

方法调用成功，返回水印图像的高度，单位为像素。

### 所属接口类 [#所属接口类-9]

* [WatermarkBuffer](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer)

<a id="api_watermarkbuffer_getid" />

## getId [#getid]

获取水印的唯一标识符。

<a id="api_watermarkbuffer_getid__prototype" />

\`\`\`java
public String getId()
\`\`\`

<a id="api_watermarkbuffer_getid__detailed_desc" />

#### \`自从\` [#自从-5]

自 v4.6.0 版本新增。

用于从 [WatermarkBuffer](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer) 或 [WatermarkConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig) 实例中获取水印的唯一标识符。

<a id="api_watermarkbuffer_getid__return_values" />

### 返回值 [#返回值-10]

* 方法调用成功时，返回水印的唯一标识符。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-10]

* [WatermarkBuffer](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer)

<a id="api_watermarkconfig_getimageurl" />

## getImageUrl [#getimageurl]

获取水印图像的 URL。

<a id="api_watermarkconfig_getimageurl__prototype" />

\`\`\`java
public String getImageUrl()
\`\`\`

<a id="api_watermarkconfig_getimageurl__detailed_desc" />

#### \`自从\` [#自从-6]

自 v4.6.0 版本新增。

<a id="api_watermarkconfig_getimageurl__return_values" />

### 返回值 [#返回值-11]

* 方法调用成功时，返回水印图像的 URL。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-11]

* [WatermarkConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig)

<a id="api_watermarkoptions_getpositioninlandscapemode" />

## getPositionInLandscapeMode [#getpositioninlandscapemode]

获取横屏模式下水印的位置。

<a id="api_watermarkoptions_getpositioninlandscapemode__prototype" />

\`\`\`java
public int[] getPositionInLandscapeMode()
\`\`\`

<a id="api_watermarkoptions_getpositioninlandscapemode__detailed_desc" />

#### \`自从\` [#自从-7]

自 v4.6.0 版本新增。

<a id="api_watermarkoptions_getpositioninlandscapemode__return_values" />

### 返回值 [#返回值-12]

方法调用成功，返回一个包含四个元素的整数数组，依次表示水印矩形的 x、y、宽度和高度。

### 所属接口类 [#所属接口类-12]

* [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions)

<a id="api_watermarkoptions_getpositioninportraitmode" />

## getPositionInPortraitMode [#getpositioninportraitmode]

获取竖屏模式下水印的位置。

<a id="api_watermarkoptions_getpositioninportraitmode__prototype" />

\`\`\`java
public int[] getPositionInPortraitMode()
\`\`\`

<a id="api_watermarkoptions_getpositioninportraitmode__detailed_desc" />

#### \`自从\` [#自从-8]

自 v4.6.0 版本新增。

<a id="api_watermarkoptions_getpositioninportraitmode__return_values" />

### 返回值 [#返回值-13]

方法调用成功，返回一个包含四个元素的整数数组，分别表示水印矩形的 x、y、宽度和高度。

### 所属接口类 [#所属接口类-13]

* [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions)

<a id="api_watermarkconfig_gettype" />

## getType [#gettype]

获取当前水印配置中的水印类型信息。

<a id="api_watermarkconfig_gettype__prototype" />

\`\`\`java
public int getType()
\`\`\`

<a id="api_watermarkconfig_gettype__detailed_desc" />

#### \`自从\` [#自从-9]

自 v4.6.0 版本新增。

<a id="api_watermarkconfig_gettype__return_values" />

### 返回值 [#返回值-14]

方法调用成功，返回水印类型：

* WATERMARK\\_TYPE\\_IMAGE：图片水印。
* WATERMARK\\_TYPE\\_BUFFER：Buffer 水印。

### 所属接口类 [#所属接口类-14]

* [WatermarkConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig)

<a id="api_watermarkbuffer_getwidth" />

## getWidth [#getwidth]

获取水印图像的宽度。

<a id="api_watermarkbuffer_getwidth__prototype" />

\`\`\`java
public int getWidth()
\`\`\`

<a id="api_watermarkbuffer_getwidth__detailed_desc" />

#### \`自从\` [#自从-10]

自 v4.6.0 版本新增。

<a id="api_watermarkbuffer_getwidth__return_values" />

### 返回值 [#返回值-15]

方法调用成功，返回水印图像的宽度，单位为像素。

### 所属接口类 [#所属接口类-15]

* [WatermarkBuffer](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer)

<a id="api_watermarkoptions_getzorder" />

## getzOrder [#getzorder]

获取水印图像的 Z-order 索引。

<a id="api_watermarkoptions_getzorder__prototype" />

\`\`\`java
public int getzOrder()
\`\`\`

<a id="api_watermarkoptions_getzorder__detailed_desc" />

#### \`自从\` [#自从-11]

自 v4.6.0 版本新增。

<a id="api_watermarkoptions_getzorder__return_values" />

### 返回值 [#返回值-16]

方法调用成功，返回水印图像的 Z-order 索引。

### 所属接口类 [#所属接口类-16]

* [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions)

<a id="api_watermarkoptions_isvisibleinpreview" />

## isVisibleInPreview [#isvisibleinpreview]

检查水印在本地视频预览中是否可见。

<a id="api_watermarkoptions_isvisibleinpreview__prototype" />

\`\`\`java
public boolean isVisibleInPreview()
\`\`\`

<a id="api_watermarkoptions_isvisibleinpreview__detailed_desc" />

#### \`自从\` [#自从-12]

自 v4.6.0 版本新增。

<a id="api_watermarkoptions_isvisibleinpreview__return_values" />

### 返回值 [#返回值-17]

* true：水印在本地视频预览中可见。
* false：水印在本地视频预览中不可见。

### 所属接口类 [#所属接口类-17]

* [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions)

<a id="api_irtcengine_removevideowatermark" />

## removeVideoWatermark [#removevideowatermark]

从本地视频中移除水印图像。

<a id="api_irtcengine_removevideowatermark__prototype" />

\`\`\`java
public abstract int removeVideoWatermark(String id);
\`\`\`

<a id="api_irtcengine_removevideowatermark__detailed_desc" />

#### \`自从\` [#自从-13]

自 v4.6.0 版本新增。

该方法使用指定的唯一 ID，从本地视频流中移除之前添加的水印图像。

<a id="api_irtcengine_removevideowatermark__parameters" />

### 参数 [#参数-6]

#### \`id\` [#id]

要移除的水印图像的 ID。

<a id="api_irtcengine_removevideowatermark__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_removevideowatermarkex" />

## removeVideoWatermarkEx [#removevideowatermarkex]

从本地或远端视频流中移除指定的水印图像。

<a id="api_irtcengineex_removevideowatermarkex__prototype" />

\`\`\`java
public abstract int removeVideoWatermarkEx(String id, RtcConnection connection);
\`\`\`

<a id="api_irtcengineex_removevideowatermarkex__detailed_desc" />

#### \`自从\` [#自从-14]

自 v4.6.0 版本新增。

<a id="api_irtcengineex_removevideowatermarkex__scenario" />

### 适用场景 [#适用场景-3]

该方法适用于多频道场景。

<a id="api_irtcengineex_removevideowatermarkex__parameters" />

### 参数 [#参数-7]

#### \`id\` [#id-1]

要移除的水印图像的 ID。

#### \`connection\` [#connection-3]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

<a id="api_irtcengineex_removevideowatermarkex__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-19]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)
`;
export let structuredData = {
  contents: [{
    heading: "addvideowatermark-13",
    content: "向本地视频添加水印图像。"
  }, {
    heading: "废弃",
    content: "自 v2.9.1 版本废弃，请改用 addVideoWatermark \\[3/3]。"
  }, {
    heading: "废弃",
    content: "该方法在直播场景中向本地视频流添加 PNG 格式的水印图像。频道内的所有用户（包括 CDN 观众）以及视频采集设备都可以看到并采集该水印图像。如果你只想向 CDN 推流添加水印，请使用 startRtmpStreamWithTranscoding 方法。"
  }, {
    heading: "废弃",
    content: "注："
  }, {
    heading: "废弃",
    content: "本地视频和 CDN 推流中 URL 的含义不同：在本地视频流中，URL 指的是添加的水印图像文件在本地视频流中的绝对路径；在 CDN 推流中，URL 指的是添加的水印图像在 CDN 推流中的 URL 地址。"
  }, {
    heading: "废弃",
    content: "水印图像的源文件必须为 PNG 格式。如果 PNG 文件的宽高与该方法中的设置不一致，SDK 会对 PNG 文件进行裁剪以符合设置。"
  }, {
    heading: "废弃",
    content: "SDK 仅支持在本地视频或 CDN 推流中添加一张水印图像。新添加的水印图像会替换之前的图像。"
  }, {
    heading: "watermark",
    content: "要添加到本地直播中的水印图像。详见 AgoraImage。"
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
    heading: "addvideowatermark-23",
    content: "向本地视频添加水印图像。"
  }, {
    heading: "废弃-1",
    content: "自 v4.6.0 版本废弃，请改用 addVideoWatermark \\[3/3] 方法。"
  }, {
    heading: "废弃-1",
    content: "该方法在直播中向本地视频添加 PNG 格式的水印图像。添加水印后，频道中的所有观众（包括 CDN 观众）以及采集设备都可以看到并采集到该水印图像。声网 SDK 每个直播视频流仅支持添加一张水印图像，新添加的水印会替换之前的图像。 水印图像的位置依赖于 setVideoEncoderConfiguration 方法中的设置："
  }, {
    heading: "废弃-1",
    content: "如果编码视频的方向模式（ORIENTATION\\_MODE ）为固定横屏模式或自适应横屏模式，则水印使用横屏方向。"
  }, {
    heading: "废弃-1",
    content: "如果编码视频的方向模式为固定竖屏模式或自适应竖屏模式，则水印使用竖屏方向。"
  }, {
    heading: "废弃-1",
    content: "设置水印位置时，区域必须小于 setVideoEncoderConfiguration 方法中设置的尺寸，否则水印图像会被裁剪。"
  }, {
    heading: "废弃-1",
    content: "你可以通过设置 `visibleInPreview` 参数控制预览时水印的可见性。但其最终是否生效还取决于调用 setupLocalVideo 时设置的 `position` 参数（视频帧在视频链路中的位置）："
  }, {
    heading: "废弃-1",
    content: "观察位置 VIDEO\\_MODULE\\_POSITION\\_POST\\_CAPTURER （默认）： visiblePreview 为 true，则水印可见； visiblePreview 为 false，则水印不可见。"
  }, {
    heading: "废弃-1",
    content: "观察位置 VIDEO\\_MODULE\\_POSITION\\_PRE\\_ENCODER： visiblePreview 为 true，则水印可见； visiblePreview 为 false，则水印仍可见。"
  }, {
    heading: "废弃-1",
    content: "注："
  }, {
    heading: "废弃-1",
    content: "请确保在调用该方法前已调用 enableVideo。"
  }, {
    heading: "废弃-1",
    content: "如果你只想为媒体推流添加水印，可以调用该方法或 startRtmpStreamWithTranscoding 方法。"
  }, {
    heading: "废弃-1",
    content: "该方法仅支持添加 PNG 文件格式的水印图像。支持的 PNG 图像像素格式包括 RGBA、RGB、Palette、Gray 和 Alpha\\_gray。"
  }, {
    heading: "废弃-1",
    content: "如果 PNG 图像的尺寸与该方法中的设置不一致，图像将被裁剪或缩放以符合设置。"
  }, {
    heading: "废弃-1",
    content: "如果你为本地视频启用了镜像模式，则本地视频中的水印也会被镜像。为避免水印被镜像，声网建议不要同时使用本地视频的镜像和水印功能。你可以在应用层实现水印功能。"
  }, {
    heading: "watermarkurl",
    content: "要添加的水印图像的本地文件路径。支持使用本地绝对路径或相对路径。"
  }, {
    heading: "options",
    content: "水印图像的相关设置。详见 WatermarkOptions。"
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
    heading: "addvideowatermark-33",
    content: "向本地视频流添加水印图像。"
  }, {
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从",
    content: "你可以使用该方法通过 WatermarkConfig 配置，在本地视频流中叠加水印图像，包括设置水印在预览中的位置、大小和可见性。"
  }, {
    heading: "config",
    content: "水印配置。详见 WatermarkConfig。"
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
    heading: "addvideowatermarkex-12",
    content: "向本地视频添加水印图像。"
  }, {
    heading: "废弃-2",
    content: "自 v4.6.0 版本废弃，请改用 addVideoWatermarkEx \\[2/2] 方法。"
  }, {
    heading: "废弃-2",
    content: "该方法在直播中向本地视频添加 PNG 格式的水印图像。添加水印图像后，频道中的所有观众（包括 CDN 观众）以及采集设备都可以看到并采集该图像。声网 SDK 仅支持在一个直播视频流中添加一张水印图像，新添加的水印图像会替换之前的图像。 水印图像的坐标依赖于 setVideoEncoderConfigurationEx 方法中的设置："
  }, {
    heading: "废弃-2",
    content: "如果编码视频的方向模式（ORIENTATION\\_MODE ）为固定横屏模式或自适应横屏模式，则水印使用横屏方向。"
  }, {
    heading: "废弃-2",
    content: "如果编码视频的方向模式为固定竖屏模式或自适应竖屏模式，则水印使用竖屏方向。"
  }, {
    heading: "废弃-2",
    content: "设置水印位置时，区域必须小于 setVideoEncoderConfigurationEx 方法中设置的尺寸，否则水印图像会被裁剪。"
  }, {
    heading: "废弃-2",
    content: "注："
  }, {
    heading: "废弃-2",
    content: "请确保在调用该方法前已调用 enableVideo 方法。"
  }, {
    heading: "废弃-2",
    content: "该方法仅支持添加 PNG 文件格式的水印图像。支持的 PNG 图像像素格式包括 RGBA、RGB、Palette、Gray 和 Alpha\\_gray。"
  }, {
    heading: "废弃-2",
    content: "如果 PNG 图像的尺寸与该方法中的设置不一致，图像将被裁剪或缩放以符合设置。"
  }, {
    heading: "废弃-2",
    content: "如果你已通过调用 startPreview 方法启用了本地视频预览，可以使用 visibleInPreview 成员设置水印在预览中是否可见。"
  }, {
    heading: "废弃-2",
    content: "如果你为本地视频启用了镜像模式，则本地视频中的水印也会被镜像。为避免水印被镜像，声网建议不要同时使用本地视频的镜像和水印功能。你可以在应用层实现水印功能。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "watermarkurl-1",
    content: "要添加的水印图像的本地文件路径。支持使用本地绝对路径或相对路径。"
  }, {
    heading: "options-1",
    content: "水印图像的相关设置。详见 WatermarkOptions。"
  }, {
    heading: "connection",
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
    heading: "addvideowatermarkex-22",
    content: "向本地视频添加水印图像。"
  }, {
    heading: "自从-1",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "config-1",
    content: "水印配置。详见 WatermarkConfig。"
  }, {
    heading: "connection-1",
    content: "RtcConnection 对象。详见 RtcConnection。"
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
    heading: "clearvideowatermarkex",
    content: "从视频流中移除水印图像。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
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
    heading: "clearvideowatermarks",
    content: "从视频流中移除水印图像。"
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
    heading: "getbuffer",
    content: "获取水印图像的数据缓冲区。"
  }, {
    heading: "自从-2",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-7",
    content: "方法调用成功时，返回包含水印图像数据的 `ByteBuffer` 对象。"
  }, {
    heading: "所属接口类-7",
    content: "WatermarkBuffer"
  }, {
    heading: "getformat",
    content: "获取水印图像的格式。"
  }, {
    heading: "自从-3",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-8",
    content: "方法调用成功，返回水印图像缓冲区的格式。"
  }, {
    heading: "所属接口类-8",
    content: "WatermarkBuffer"
  }, {
    heading: "getheight",
    content: "获取水印图像的高度。"
  }, {
    heading: "自从-4",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-9",
    content: "方法调用成功，返回水印图像的高度，单位为像素。"
  }, {
    heading: "所属接口类-9",
    content: "WatermarkBuffer"
  }, {
    heading: "getid",
    content: "获取水印的唯一标识符。"
  }, {
    heading: "自从-5",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-5",
    content: "用于从 WatermarkBuffer 或 WatermarkConfig 实例中获取水印的唯一标识符。"
  }, {
    heading: "返回值-10",
    content: "方法调用成功时，返回水印的唯一标识符。"
  }, {
    heading: "返回值-10",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-10",
    content: "WatermarkBuffer"
  }, {
    heading: "getimageurl",
    content: "获取水印图像的 URL。"
  }, {
    heading: "自从-6",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-11",
    content: "方法调用成功时，返回水印图像的 URL。"
  }, {
    heading: "返回值-11",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-11",
    content: "WatermarkConfig"
  }, {
    heading: "getpositioninlandscapemode",
    content: "获取横屏模式下水印的位置。"
  }, {
    heading: "自从-7",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-12",
    content: "方法调用成功，返回一个包含四个元素的整数数组，依次表示水印矩形的 x、y、宽度和高度。"
  }, {
    heading: "所属接口类-12",
    content: "WatermarkOptions"
  }, {
    heading: "getpositioninportraitmode",
    content: "获取竖屏模式下水印的位置。"
  }, {
    heading: "自从-8",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-13",
    content: "方法调用成功，返回一个包含四个元素的整数数组，分别表示水印矩形的 x、y、宽度和高度。"
  }, {
    heading: "所属接口类-13",
    content: "WatermarkOptions"
  }, {
    heading: "gettype",
    content: "获取当前水印配置中的水印类型信息。"
  }, {
    heading: "自从-9",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-14",
    content: "方法调用成功，返回水印类型："
  }, {
    heading: "返回值-14",
    content: "WATERMARK\\_TYPE\\_IMAGE：图片水印。"
  }, {
    heading: "返回值-14",
    content: "WATERMARK\\_TYPE\\_BUFFER：Buffer 水印。"
  }, {
    heading: "所属接口类-14",
    content: "WatermarkConfig"
  }, {
    heading: "getwidth",
    content: "获取水印图像的宽度。"
  }, {
    heading: "自从-10",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-15",
    content: "方法调用成功，返回水印图像的宽度，单位为像素。"
  }, {
    heading: "所属接口类-15",
    content: "WatermarkBuffer"
  }, {
    heading: "getzorder",
    content: "获取水印图像的 Z-order 索引。"
  }, {
    heading: "自从-11",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-16",
    content: "方法调用成功，返回水印图像的 Z-order 索引。"
  }, {
    heading: "所属接口类-16",
    content: "WatermarkOptions"
  }, {
    heading: "isvisibleinpreview",
    content: "检查水印在本地视频预览中是否可见。"
  }, {
    heading: "自从-12",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-17",
    content: "true：水印在本地视频预览中可见。"
  }, {
    heading: "返回值-17",
    content: "false：水印在本地视频预览中不可见。"
  }, {
    heading: "所属接口类-17",
    content: "WatermarkOptions"
  }, {
    heading: "removevideowatermark",
    content: "从本地视频中移除水印图像。"
  }, {
    heading: "自从-13",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-13",
    content: "该方法使用指定的唯一 ID，从本地视频流中移除之前添加的水印图像。"
  }, {
    heading: "id",
    content: "要移除的水印图像的 ID。"
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
    heading: "removevideowatermarkex",
    content: "从本地或远端视频流中移除指定的水印图像。"
  }, {
    heading: "自从-14",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "适用场景-3",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "id-1",
    content: "要移除的水印图像的 ID。"
  }, {
    heading: "connection-3",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "返回值-19",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-19",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-19",
    content: "RtcEngineEx"
  }],
  headings: [{
    id: "addvideowatermark-13",
    content: "addVideoWatermark [1/3]"
  }, {
    id: "废弃",
    content: "`废弃`"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "watermark",
    content: "`watermark`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "addvideowatermark-23",
    content: "addVideoWatermark [2/3]"
  }, {
    id: "废弃-1",
    content: "`废弃`"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "watermarkurl",
    content: "`watermarkUrl`"
  }, {
    id: "options",
    content: "`options`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "addvideowatermark-33",
    content: "addVideoWatermark [3/3]"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "addvideowatermarkex-12",
    content: "addVideoWatermarkEx [1/2]"
  }, {
    id: "废弃-2",
    content: "`废弃`"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "watermarkurl-1",
    content: "`watermarkUrl`"
  }, {
    id: "options-1",
    content: "`options`"
  }, {
    id: "connection",
    content: "`connection`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "addvideowatermarkex-22",
    content: "addVideoWatermarkEx [2/2]"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "config-1",
    content: "`config`"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "clearvideowatermarkex",
    content: "clearVideoWatermarkEx"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "参数-5",
    content: "参数"
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
    id: "clearvideowatermarks",
    content: "clearVideoWatermarks"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "getbuffer",
    content: "getBuffer"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "getformat",
    content: "getFormat"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "getheight",
    content: "getHeight"
  }, {
    id: "自从-4",
    content: "`自从`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "getid",
    content: "getId"
  }, {
    id: "自从-5",
    content: "`自从`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "getimageurl",
    content: "getImageUrl"
  }, {
    id: "自从-6",
    content: "`自从`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "getpositioninlandscapemode",
    content: "getPositionInLandscapeMode"
  }, {
    id: "自从-7",
    content: "`自从`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "getpositioninportraitmode",
    content: "getPositionInPortraitMode"
  }, {
    id: "自从-8",
    content: "`自从`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "gettype",
    content: "getType"
  }, {
    id: "自从-9",
    content: "`自从`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "getwidth",
    content: "getWidth"
  }, {
    id: "自从-10",
    content: "`自从`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "getzorder",
    content: "getzOrder"
  }, {
    id: "自从-11",
    content: "`自从`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "isvisibleinpreview",
    content: "isVisibleInPreview"
  }, {
    id: "自从-12",
    content: "`自从`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "removevideowatermark",
    content: "removeVideoWatermark"
  }, {
    id: "自从-13",
    content: "`自从`"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "id",
    content: "`id`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "removevideowatermarkex",
    content: "removeVideoWatermarkEx"
  }, {
    id: "自从-14",
    content: "`自从`"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "id-1",
    content: "`id`"
  }, {
    id: "connection-3",
    content: "`connection`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#addvideowatermark-13",
  title: _jsx(_Fragment, {
    children: "addVideoWatermark [1/3]"
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
  url: "#watermark",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "watermark"
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
  url: "#addvideowatermark-23",
  title: _jsx(_Fragment, {
    children: "addVideoWatermark [2/3]"
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
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#watermarkurl",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "watermarkUrl"
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
  url: "#addvideowatermark-33",
  title: _jsx(_Fragment, {
    children: "addVideoWatermark [3/3]"
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
  url: "#参数-2",
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
  url: "#addvideowatermarkex-12",
  title: _jsx(_Fragment, {
    children: "addVideoWatermarkEx [1/2]"
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
  url: "#适用场景",
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
  url: "#watermarkurl-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "watermarkUrl"
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
  url: "#connection",
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
  url: "#addvideowatermarkex-22",
  title: _jsx(_Fragment, {
    children: "addVideoWatermarkEx [2/2]"
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
  url: "#适用场景-1",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#参数-4",
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
  url: "#clearvideowatermarkex",
  title: _jsx(_Fragment, {
    children: "clearVideoWatermarkEx"
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
  url: "#clearvideowatermarks",
  title: _jsx(_Fragment, {
    children: "clearVideoWatermarks"
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
  url: "#getbuffer",
  title: _jsx(_Fragment, {
    children: "getBuffer"
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
  url: "#getformat",
  title: _jsx(_Fragment, {
    children: "getFormat"
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
  url: "#getheight",
  title: _jsx(_Fragment, {
    children: "getHeight"
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
  url: "#getid",
  title: _jsx(_Fragment, {
    children: "getId"
  })
}, {
  depth: 4,
  url: "#自从-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#getimageurl",
  title: _jsx(_Fragment, {
    children: "getImageUrl"
  })
}, {
  depth: 4,
  url: "#自从-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#getpositioninlandscapemode",
  title: _jsx(_Fragment, {
    children: "getPositionInLandscapeMode"
  })
}, {
  depth: 4,
  url: "#自从-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#getpositioninportraitmode",
  title: _jsx(_Fragment, {
    children: "getPositionInPortraitMode"
  })
}, {
  depth: 4,
  url: "#自从-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#gettype",
  title: _jsx(_Fragment, {
    children: "getType"
  })
}, {
  depth: 4,
  url: "#自从-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#getwidth",
  title: _jsx(_Fragment, {
    children: "getWidth"
  })
}, {
  depth: 4,
  url: "#自从-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#getzorder",
  title: _jsx(_Fragment, {
    children: "getzOrder"
  })
}, {
  depth: 4,
  url: "#自从-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#isvisibleinpreview",
  title: _jsx(_Fragment, {
    children: "isVisibleInPreview"
  })
}, {
  depth: 4,
  url: "#自从-12",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#removevideowatermark",
  title: _jsx(_Fragment, {
    children: "removeVideoWatermark"
  })
}, {
  depth: 4,
  url: "#自从-13",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-6",
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
  url: "#removevideowatermarkex",
  title: _jsx(_Fragment, {
    children: "removeVideoWatermarkEx"
  })
}, {
  depth: 4,
  url: "#自从-14",
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
  url: "#参数-7",
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
  url: "#connection-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "connection"
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx("a", {
      id: "toc_watermark"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark1"
    }), `
`, _jsx(_components.h2, {
      id: "addvideowatermark-13",
      children: "addVideoWatermark [1/3]"
    }), `
`, _jsx(_components.p, {
      children: "向本地视频添加水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark1__prototype"
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
              children: " addVideoWatermark"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AgoraImage watermark)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark1__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自 v2.9.1 版本废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3",
        children: "addVideoWatermark [3/3]"
      }), "。"]
    }), `
`, _jsxs(_components.p, {
      children: ["该方法在直播场景中向本地视频流添加 PNG 格式的水印图像。频道内的所有用户（包括 CDN 观众）以及视频采集设备都可以看到并采集该水印图像。如果你只想向 CDN 推流添加水印，请使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/cloud-media-relay/media-push#api_irtcengine_startrtmpstreamwithtranscoding",
        children: "startRtmpStreamWithTranscoding"
      }), " 方法。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "本地视频和 CDN 推流中 URL 的含义不同：在本地视频流中，URL 指的是添加的水印图像文件在本地视频流中的绝对路径；在 CDN 推流中，URL 指的是添加的水印图像在 CDN 推流中的 URL 地址。"
      }), `
`, _jsx(_components.li, {
        children: "水印图像的源文件必须为 PNG 格式。如果 PNG 文件的宽高与该方法中的设置不一致，SDK 会对 PNG 文件进行裁剪以符合设置。"
      }), `
`, _jsx(_components.li, {
        children: "SDK 仅支持在本地视频或 CDN 推流中添加一张水印图像。新添加的水印图像会替换之前的图像。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "watermark",
      children: _jsx(_components.code, {
        children: "watermark"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要添加到本地直播中的水印图像。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcimage",
        children: "AgoraImage"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark1__return_values"
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
      id: "api_irtcengine_addvideowatermark2"
    }), `
`, _jsx(_components.h2, {
      id: "addvideowatermark-23",
      children: "addVideoWatermark [2/3]"
    }), `
`, _jsx(_components.p, {
      children: "向本地视频添加水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark2__prototype"
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
              children: " addVideoWatermark"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String watermarkUrl, WatermarkOptions options)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-1",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自 v4.6.0 版本废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengine_addvideowatermark3",
        children: "addVideoWatermark [3/3]"
      }), " 方法。"]
    }), `
`, _jsxs(_components.p, {
      children: ["该方法在直播中向本地视频添加 PNG 格式的水印图像。添加水印后，频道中的所有观众（包括 CDN 观众）以及采集设备都可以看到并采集到该水印图像。声网 SDK 每个直播视频流仅支持添加一张水印图像，新添加的水印会替换之前的图像。 水印图像的位置依赖于 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_setvideoencoderconfiguration",
        children: "setVideoEncoderConfiguration"
      }), " 方法中的设置："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果编码视频的方向模式（ORIENTATION_MODE ）为固定横屏模式或自适应横屏模式，则水印使用横屏方向。"
      }), `
`, _jsx(_components.li, {
        children: "如果编码视频的方向模式为固定竖屏模式或自适应竖屏模式，则水印使用竖屏方向。"
      }), `
`, _jsx(_components.li, {
        children: "设置水印位置时，区域必须小于 setVideoEncoderConfiguration 方法中设置的尺寸，否则水印图像会被裁剪。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["你可以通过设置 ", _jsx(_components.code, {
        children: "visibleInPreview"
      }), " 参数控制预览时水印的可见性。但其最终是否生效还取决于调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-rendering#api_irtcengine_setuplocalvideo",
        children: "setupLocalVideo"
      }), " 时设置的 ", _jsx(_components.code, {
        children: "position"
      }), " 参数（视频帧在视频链路中的位置）："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "观察位置 VIDEO_MODULE_POSITION_POST_CAPTURER （默认）： visiblePreview 为 true，则水印可见； visiblePreview 为 false，则水印不可见。"
      }), `
`, _jsx(_components.li, {
        children: "观察位置 VIDEO_MODULE_POSITION_PRE_ENCODER： visiblePreview 为 true，则水印可见； visiblePreview 为 false，则水印仍可见。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请确保在调用该方法前已调用 enableVideo。"
      }), `
`, _jsx(_components.li, {
        children: "如果你只想为媒体推流添加水印，可以调用该方法或 startRtmpStreamWithTranscoding 方法。"
      }), `
`, _jsx(_components.li, {
        children: "该方法仅支持添加 PNG 文件格式的水印图像。支持的 PNG 图像像素格式包括 RGBA、RGB、Palette、Gray 和 Alpha_gray。"
      }), `
`, _jsx(_components.li, {
        children: "如果 PNG 图像的尺寸与该方法中的设置不一致，图像将被裁剪或缩放以符合设置。"
      }), `
`, _jsx(_components.li, {
        children: "如果你为本地视频启用了镜像模式，则本地视频中的水印也会被镜像。为避免水印被镜像，声网建议不要同时使用本地视频的镜像和水印功能。你可以在应用层实现水印功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "watermarkurl",
      children: _jsx(_components.code, {
        children: "watermarkUrl"
      })
    }), `
`, _jsx(_components.p, {
      children: "要添加的水印图像的本地文件路径。支持使用本地绝对路径或相对路径。"
    }), `
`, _jsx(_components.h4, {
      id: "options",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["水印图像的相关设置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
        children: "WatermarkOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark2__return_values"
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
      id: "api_irtcengine_addvideowatermark3"
    }), `
`, _jsx(_components.h2, {
      id: "addvideowatermark-33",
      children: "addVideoWatermark [3/3]"
    }), `
`, _jsx(_components.p, {
      children: "向本地视频流添加水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark3__prototype"
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
              children: " addVideoWatermark"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(WatermarkConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark3__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以使用该方法通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig",
        children: "WatermarkConfig"
      }), " 配置，在本地视频流中叠加水印图像，包括设置水印在预览中的位置、大小和可见性。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark3__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["水印配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig",
        children: "WatermarkConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_addvideowatermark3__return_values"
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
      id: "api_irtcengineex_addvideowatermarkex"
    }), `
`, _jsx(_components.h2, {
      id: "addvideowatermarkex-12",
      children: "addVideoWatermarkEx [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "向本地视频添加水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex__prototype"
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
              children: " addVideoWatermarkEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String watermarkUrl, WatermarkOptions options, RtcConnection connection)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "废弃-2",
      children: _jsx(_components.code, {
        children: "废弃"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["自 v4.6.0 版本废弃，请改用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/watermark#api_irtcengineex_addvideowatermarkex1",
        children: "addVideoWatermarkEx [2/2]"
      }), " 方法。"]
    }), `
`, _jsxs(_components.p, {
      children: ["该方法在直播中向本地视频添加 PNG 格式的水印图像。添加水印图像后，频道中的所有观众（包括 CDN 观众）以及采集设备都可以看到并采集该图像。声网 SDK 仅支持在一个直播视频流中添加一张水印图像，新添加的水印图像会替换之前的图像。 水印图像的坐标依赖于 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengineex_setvideoencoderconfigurationex",
        children: "setVideoEncoderConfigurationEx"
      }), " 方法中的设置："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果编码视频的方向模式（ORIENTATION_MODE ）为固定横屏模式或自适应横屏模式，则水印使用横屏方向。"
      }), `
`, _jsx(_components.li, {
        children: "如果编码视频的方向模式为固定竖屏模式或自适应竖屏模式，则水印使用竖屏方向。"
      }), `
`, _jsx(_components.li, {
        children: "设置水印位置时，区域必须小于 setVideoEncoderConfigurationEx 方法中设置的尺寸，否则水印图像会被裁剪。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请确保在调用该方法前已调用 enableVideo 方法。"
      }), `
`, _jsx(_components.li, {
        children: "该方法仅支持添加 PNG 文件格式的水印图像。支持的 PNG 图像像素格式包括 RGBA、RGB、Palette、Gray 和 Alpha_gray。"
      }), `
`, _jsx(_components.li, {
        children: "如果 PNG 图像的尺寸与该方法中的设置不一致，图像将被裁剪或缩放以符合设置。"
      }), `
`, _jsx(_components.li, {
        children: "如果你已通过调用 startPreview 方法启用了本地视频预览，可以使用 visibleInPreview 成员设置水印在预览中是否可见。"
      }), `
`, _jsx(_components.li, {
        children: "如果你为本地视频启用了镜像模式，则本地视频中的水印也会被镜像。为避免水印被镜像，声网建议不要同时使用本地视频的镜像和水印功能。你可以在应用层实现水印功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "watermarkurl-1",
      children: _jsx(_components.code, {
        children: "watermarkUrl"
      })
    }), `
`, _jsx(_components.p, {
      children: "要添加的水印图像的本地文件路径。支持使用本地绝对路径或相对路径。"
    }), `
`, _jsx(_components.h4, {
      id: "options-1",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["水印图像的相关设置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
        children: "WatermarkOptions"
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
      id: "api_irtcengineex_addvideowatermarkex__return_values"
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
      id: "api_irtcengineex_addvideowatermarkex1"
    }), `
`, _jsx(_components.h2, {
      id: "addvideowatermarkex-22",
      children: "addVideoWatermarkEx [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "向本地视频添加水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex1__prototype"
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
              children: " addVideoWatermarkEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(WatermarkConfig config, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex1__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex1__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex1__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-1",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["水印配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig",
        children: "WatermarkConfig"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "connection-1",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), " 对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_addvideowatermarkex1__return_values"
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
      id: "api_irtcengineex_clearvideowatermarkex"
    }), `
`, _jsx(_components.h2, {
      id: "clearvideowatermarkex",
      children: "clearVideoWatermarkEx"
    }), `
`, _jsx(_components.p, {
      children: "从视频流中移除水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_clearvideowatermarkex__prototype"
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
              children: " clearVideoWatermarkEx"
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
      id: "api_irtcengineex_clearvideowatermarkex__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_clearvideowatermarkex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_clearvideowatermarkex__parameters"
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
      id: "api_irtcengineex_clearvideowatermarkex__return_values"
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
      id: "api_irtcengine_clearvideowatermarks"
    }), `
`, _jsx(_components.h2, {
      id: "clearvideowatermarks",
      children: "clearVideoWatermarks"
    }), `
`, _jsx(_components.p, {
      children: "从视频流中移除水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_clearvideowatermarks__prototype"
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
              children: " clearVideoWatermarks"
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
      id: "api_irtcengine_clearvideowatermarks__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_clearvideowatermarks__return_values"
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
      id: "api_watermarkbuffer_getbuffer"
    }), `
`, _jsx(_components.h2, {
      id: "getbuffer",
      children: "getBuffer"
    }), `
`, _jsx(_components.p, {
      children: "获取水印图像的数据缓冲区。"
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getbuffer__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ByteBuffer "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getBuffer"
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
      id: "api_watermarkbuffer_getbuffer__detailed_desc"
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
      id: "api_watermarkbuffer_getbuffer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功时，返回包含水印图像数据的 ", _jsx(_components.code, {
        children: "ByteBuffer"
      }), " 对象。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-7",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer",
          children: "WatermarkBuffer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getformat"
    }), `
`, _jsx(_components.h2, {
      id: "getformat",
      children: "getFormat"
    }), `
`, _jsx(_components.p, {
      children: "获取水印图像的格式。"
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getformat__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getFormat"
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
      id: "api_watermarkbuffer_getformat__detailed_desc"
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
`, _jsx("a", {
      id: "api_watermarkbuffer_getformat__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回水印图像缓冲区的格式。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-8",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer",
          children: "WatermarkBuffer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getheight"
    }), `
`, _jsx(_components.h2, {
      id: "getheight",
      children: "getHeight"
    }), `
`, _jsx(_components.p, {
      children: "获取水印图像的高度。"
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getheight__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getHeight"
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
      id: "api_watermarkbuffer_getheight__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-4",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getheight__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回水印图像的高度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-9",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer",
          children: "WatermarkBuffer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getid"
    }), `
`, _jsx(_components.h2, {
      id: "getid",
      children: "getId"
    }), `
`, _jsx(_components.p, {
      children: "获取水印的唯一标识符。"
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getid__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getId"
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
      id: "api_watermarkbuffer_getid__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-5",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["用于从 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer",
        children: "WatermarkBuffer"
      }), " 或 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig",
        children: "WatermarkConfig"
      }), " 实例中获取水印的唯一标识符。"]
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getid__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回水印的唯一标识符。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer",
          children: "WatermarkBuffer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkconfig_getimageurl"
    }), `
`, _jsx(_components.h2, {
      id: "getimageurl",
      children: "getImageUrl"
    }), `
`, _jsx(_components.p, {
      children: "获取水印图像的 URL。"
    }), `
`, _jsx("a", {
      id: "api_watermarkconfig_getimageurl__prototype"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getImageUrl"
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
      id: "api_watermarkconfig_getimageurl__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-6",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkconfig_getimageurl__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-11",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回水印图像的 URL。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
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
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig",
          children: "WatermarkConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getpositioninlandscapemode"
    }), `
`, _jsx(_components.h2, {
      id: "getpositioninlandscapemode",
      children: "getPositionInLandscapeMode"
    }), `
`, _jsx(_components.p, {
      children: "获取横屏模式下水印的位置。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getpositioninlandscapemode__prototype"
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
              children: " int"
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
              children: "getPositionInLandscapeMode"
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
      id: "api_watermarkoptions_getpositioninlandscapemode__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-7",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getpositioninlandscapemode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-12",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回一个包含四个元素的整数数组，依次表示水印矩形的 x、y、宽度和高度。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-12",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
          children: "WatermarkOptions"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getpositioninportraitmode"
    }), `
`, _jsx(_components.h2, {
      id: "getpositioninportraitmode",
      children: "getPositionInPortraitMode"
    }), `
`, _jsx(_components.p, {
      children: "获取竖屏模式下水印的位置。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getpositioninportraitmode__prototype"
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
              children: " int"
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
              children: "getPositionInPortraitMode"
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
      id: "api_watermarkoptions_getpositioninportraitmode__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-8",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getpositioninportraitmode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-13",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回一个包含四个元素的整数数组，分别表示水印矩形的 x、y、宽度和高度。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-13",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
          children: "WatermarkOptions"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkconfig_gettype"
    }), `
`, _jsx(_components.h2, {
      id: "gettype",
      children: "getType"
    }), `
`, _jsx(_components.p, {
      children: "获取当前水印配置中的水印类型信息。"
    }), `
`, _jsx("a", {
      id: "api_watermarkconfig_gettype__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getType"
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
      id: "api_watermarkconfig_gettype__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-9",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkconfig_gettype__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-14",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回水印类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "WATERMARK_TYPE_IMAGE：图片水印。"
      }), `
`, _jsx(_components.li, {
        children: "WATERMARK_TYPE_BUFFER：Buffer 水印。"
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
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig",
          children: "WatermarkConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getwidth"
    }), `
`, _jsx(_components.h2, {
      id: "getwidth",
      children: "getWidth"
    }), `
`, _jsx(_components.p, {
      children: "获取水印图像的宽度。"
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getwidth__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getWidth"
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
      id: "api_watermarkbuffer_getwidth__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-10",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkbuffer_getwidth__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-15",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回水印图像的宽度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-15",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkbuffer",
          children: "WatermarkBuffer"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getzorder"
    }), `
`, _jsx(_components.h2, {
      id: "getzorder",
      children: "getzOrder"
    }), `
`, _jsx(_components.p, {
      children: "获取水印图像的 Z-order 索引。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getzorder__prototype"
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
              children: " int"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getzOrder"
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
      id: "api_watermarkoptions_getzorder__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-11",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_getzorder__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-16",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回水印图像的 Z-order 索引。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-16",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
          children: "WatermarkOptions"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_isvisibleinpreview"
    }), `
`, _jsx(_components.h2, {
      id: "isvisibleinpreview",
      children: "isVisibleInPreview"
    }), `
`, _jsx(_components.p, {
      children: "检查水印在本地视频预览中是否可见。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_isvisibleinpreview__prototype"
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
              children: " boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " isVisibleInPreview"
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
      id: "api_watermarkoptions_isvisibleinpreview__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-12",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_watermarkoptions_isvisibleinpreview__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-17",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：水印在本地视频预览中可见。"
      }), `
`, _jsx(_components.li, {
        children: "false：水印在本地视频预览中不可见。"
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
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
          children: "WatermarkOptions"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removevideowatermark"
    }), `
`, _jsx(_components.h2, {
      id: "removevideowatermark",
      children: "removeVideoWatermark"
    }), `
`, _jsx(_components.p, {
      children: "从本地视频中移除水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removevideowatermark__prototype"
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
              children: " removeVideoWatermark"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String id);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removevideowatermark__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-13",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "该方法使用指定的唯一 ID，从本地视频流中移除之前添加的水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removevideowatermark__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "id",
      children: _jsx(_components.code, {
        children: "id"
      })
    }), `
`, _jsx(_components.p, {
      children: "要移除的水印图像的 ID。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_removevideowatermark__return_values"
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
      id: "api_irtcengineex_removevideowatermarkex"
    }), `
`, _jsx(_components.h2, {
      id: "removevideowatermarkex",
      children: "removeVideoWatermarkEx"
    }), `
`, _jsx(_components.p, {
      children: "从本地或远端视频流中移除指定的水印图像。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_removevideowatermarkex__prototype"
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
              children: " removeVideoWatermarkEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String id, RtcConnection connection);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_removevideowatermarkex__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-14",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_removevideowatermarkex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_removevideowatermarkex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "id-1",
      children: _jsx(_components.code, {
        children: "id"
      })
    }), `
`, _jsx(_components.p, {
      children: "要移除的水印图像的 ID。"
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
      id: "api_irtcengineex_removevideowatermarkex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
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
