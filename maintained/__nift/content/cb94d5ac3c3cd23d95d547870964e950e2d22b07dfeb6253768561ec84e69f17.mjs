import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "视频增强",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_video_enhance_option" />

<a id="api_ivideoeffectobject_addorupdatevideoeffect" />

## addOrUpdateVideoEffect [#addorupdatevideoeffect]

为指定的视频特效节点 ID 和模板添加或更新视频特效。

<a id="api_ivideoeffectobject_addorupdatevideoeffect__prototype" />

\`\`\`java
int addOrUpdateVideoEffect(int nodeId, String templateName);
\`\`\`

<a id="api_ivideoeffectobject_addorupdatevideoeffect__detailed_desc" />

#### \`自从\` [#自从]

自 v4.6.0 版本新增。

注： 优先级规则：

* 风格妆 (STYLE\\_MAKEUP) 节点优先于滤镜特效 (FILTER) 节点。
* 若要应用滤镜特效，必须先移除风格妆特效节点：

\`\`\`java
removeVideoEffect(VIDEO_EFFECT_NODE_ID.STYLE_MAKEUP);
addOrUpdateVideoEffect(VIDEO_EFFECT_NODE_ID.FILTER, "template name");
\`\`\`

<a id="api_ivideoeffectobject_addorupdatevideoeffect__parameters" />

### 参数 [#参数]

#### \`nodeId\` [#nodeid]

视频特效节点的唯一标识符或标识符组合。详见 [VIDEO\\_EFFECT\\_NODE\\_ID](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videoeffectnodeid)。例如：

* 单个特效： VIDEO\\_EFFECT\\_NODE\\_ID.BEAUTY。
* 组合特效： VIDEO\\_EFFECT\\_NODE\\_ID.BEAUTY | VIDEO\\_EFFECT\\_NODE\\_ID.STYLE\\_MAKEUP。

#### \`templateName\` [#templatename]

特效模板名称。如果设置为 \`null\` 或空字符串，SDK 会从资源包中加载默认参数配置。

<a id="api_ivideoeffectobject_addorupdatevideoeffect__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_irtcengine_createvideoeffectobject" />

## createVideoEffectObject [#createvideoeffectobject]

创建一个 IVideoEffectObject 视频特效对象。

<a id="api_irtcengine_createvideoeffectobject__prototype" />

\`\`\`java
public abstract IVideoEffectObject createVideoEffectObject(String bundlePath, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_createvideoeffectobject__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.6.0 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    你必须先调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法再调用此方法。该方法适用于 Android 4.4 及以上版本。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_createvideoeffectobject__parameters" />

### 参数 [#参数-1]

#### \`bundlePath\` [#bundlepath]

视频特效资源包的路径。

#### \`sourceType\` [#sourcetype]

媒体源类型，例如 \`PRIMARY_CAMERA_SOURCE\`。详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

<a id="api_irtcengine_createvideoeffectobject__return_values" />

### 返回值 [#返回值-1]

方法调用成功，返回 [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject) 对象。 方法调用失败，返回 \`null\`。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_destroyvideoeffectobject" />

## destroyVideoEffectObject [#destroyvideoeffectobject]

销毁一个视频特效对象。

<a id="api_irtcengine_destroyvideoeffectobject__prototype" />

\`\`\`java
public abstract int destroyVideoEffectObject(IVideoEffectObject videoEffectObject);
\`\`\`

<a id="api_irtcengine_destroyvideoeffectobject__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.6.0 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    在调用该方法前必须先调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法。该方法适用于 Android 4.4 及以上版本。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_destroyvideoeffectobject__parameters" />

### 参数 [#参数-2]

#### \`videoEffectObject\` [#videoeffectobject]

要销毁的视频特效对象。详见 [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)。

<a id="api_irtcengine_destroyvideoeffectobject__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getfaceshapeareaoptions" />

## getFaceShapeAreaOptions \\[1/2] [#getfaceshapeareaoptions-12]

获取美颜区域的当前设置。

<a id="api_irtcengine_getfaceshapeareaoptions__prototype" />

\`\`\`java
public abstract FaceShapeAreaOptions getFaceShapeAreaOptions(int shapeArea, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_getfaceshapeareaoptions__detailed_desc" />

<a id="api_irtcengine_getfaceshapeareaoptions__scenario" />

### 适用场景 [#适用场景]

当用户在应用中打开美型区域和塑形强度菜单时，可以调用该方法获取当前的美颜特效选项，然后根据结果刷新用户界面中的菜单并更新 UI。

<a id="api_irtcengine_getfaceshapeareaoptions__timing" />

### 调用时机 [#调用时机]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之后调用此方法。

<a id="api_irtcengine_getfaceshapeareaoptions__parameters" />

### 参数 [#参数-3]

#### \`shapeArea\` [#shapearea]

美颜增强区域。

* FACE\\_SHAPE\\_AREA\\_NONE （-1）：（默认）无效区域，不应用美颜效果。
* FACE\\_SHAPE\\_AREA\\_HEADSCALE （100）：头部，用于实现小头效果。调整范围为 \\[0, 100]，值越大头部越小，默认值为 100。
* FACE\\_SHAPE\\_AREA\\_FOREHEAD （101）：额头，用于调整发际线高度。调整范围为 \\[-100, 100]，正值抬高发际线，负值降低发际线，绝对值越大效果越明显，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_FACECONTOUR （102）：脸部轮廓，用于实现瘦脸效果。调整范围为 \\[0, 100]，值越大瘦脸效果越明显，默认值为 10。
* FACE\\_SHAPE\\_AREA\\_FACELENGTH （103）：脸长，用于拉长或缩短脸部。调整范围为 \\[-100, 100]，正值拉长脸部，负值缩短脸部，绝对值越大效果越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_FACEWIDTH （104）：脸宽，用于实现窄脸效果。调整范围为 \\[0, 100]，值越大脸部越窄，默认值为 10。
* FACE\\_SHAPE\\_AREA\\_CHEEKBONE （105）：颧骨，用于调整颧骨宽度。调整范围为 \\[0, 100]，值越大颧骨越窄，默认值为 43。
* FACE\\_SHAPE\\_AREA\\_CHEEK （106）：面颊，用于调整面颊宽度。调整范围为 \\[0, 100]，值越大面颊越窄，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_CHIN （108）：下巴，用于调整下巴长度。调整范围为 \\[-100, 100]，正值拉长下巴，负值缩短下巴，绝对值越大效果越明显，默认值为 -20。
* FACE\\_SHAPE\\_AREA\\_EYESCALE （200）：眼睛，用于实现大眼效果。调整范围为 \\[0, 100]，值越大眼睛越大，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_EYEDISTANCE （201）：眼距调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
* FACE\\_SHAPE\\_AREA\\_EYEPOSITION （202）：眼睛位置调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
* FACE\\_SHAPE\\_AREA\\_LOWEREYELID （203）：下眼睑调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_EYEPUPILS （204）：瞳孔大小调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_EYEINNERCORNER （205）：内眼角调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_EYEOUTERCORNER （206）：外眼角调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_NOSELENGTH （300）：鼻子长度，用于拉长或缩短鼻子。调整范围为 \\[-100, 100]，正值拉长鼻子，负值缩短鼻子，绝对值越大效果越明显，默认值为 -10。
* FACE\\_SHAPE\\_AREA\\_NOSEWIDTH （301）：鼻子宽度，用于实现瘦鼻效果。调整范围为 \\[-100, 100]，正值加宽鼻子，负值缩窄鼻子，绝对值越大效果越明显，默认值为 72。
* FACE\\_SHAPE\\_AREA\\_NOSEWING （302）：鼻翼调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_NOSEROOT （303）：鼻根调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_NOSEBRIDGE （304）：鼻梁调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_NOSETIP （305）：鼻尖调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_NOSEGENERAL （306）：整体鼻子调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_MOUTHSCALE （400）：嘴巴，用于实现大嘴效果。调整范围为 \\[0, 100]，值越大嘴巴越大，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_MOUTHPOSITION （401）：嘴巴位置调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
* FACE\\_SHAPE\\_AREA\\_MOUTHSMILE （402）：嘴角微笑调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_MOUTHLIP （403）：唇形调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。
* FACE\\_SHAPE\\_AREA\\_EYEBROWPOSITION （500）：眉毛位置调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。
* FACE\\_SHAPE\\_AREA\\_EYEBROWTHICKNESS （501）：眉毛粗细调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。

#### \`sourceType\` [#sourcetype-1]

媒体源类型，详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 该参数仅支持以下两种设置：

* 使用摄像头采集本地视频时，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。
* 使用自定义视频源时，设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_getfaceshapeareaoptions__return_values" />

### 返回值 [#返回值-3]

* 方法调用成功，返回 FaceShapeAreaOptions 实例。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getfaceshapeareaoptions2" />

## getFaceShapeAreaOptions \\[2/2] [#getfaceshapeareaoptions-22]

获取当前美颜效果区域的设置选项。

<a id="api_irtcengine_getfaceshapeareaoptions2__prototype" />

\`\`\`java
public abstract FaceShapeAreaOptions getFaceShapeAreaOptions(int shapeArea);
\`\`\`

<a id="api_irtcengine_getfaceshapeareaoptions2__detailed_desc" />

你可以调用该方法获取当前美颜效果的设置选项，并根据返回结果刷新界面菜单，更新 UI。

<a id="api_irtcengine_getfaceshapeareaoptions2__scenario" />

### 适用场景 [#适用场景-1]

当用户在应用中打开美颜区域和塑形强度菜单时，可调用此方法获取当前美颜效果选项，然后根据结果刷新用户界面中的菜单并更新 UI。

<a id="api_irtcengine_getfaceshapeareaoptions2__timing" />

### 调用时机 [#调用时机-1]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法之后调用此方法。

<a id="api_irtcengine_getfaceshapeareaoptions2__parameters" />

### 参数 [#参数-4]

#### \`shapeArea\` [#shapearea-1]

美颜增强区域。

* FACE\\_SHAPE\\_AREA\\_NONE （-1）：（默认）无效区域，不应用美颜效果。
* FACE\\_SHAPE\\_AREA\\_HEADSCALE （100）：头部，用于实现小头效果。调整范围为 \\[0, 100]，值越大头部越小，默认值为 100。
* FACE\\_SHAPE\\_AREA\\_FOREHEAD （101）：额头，用于调整发际线高度。调整范围为 \\[-100, 100]，正值抬高发际线，负值降低发际线，绝对值越大效果越明显，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_FACECONTOUR （102）：脸型轮廓，用于实现瘦脸效果。调整范围为 \\[0, 100]，值越大瘦脸效果越明显，默认值为 10。
* FACE\\_SHAPE\\_AREA\\_FACELENGTH （103）：脸长，用于实现拉长脸部效果。调整范围为 \\[-100, 100]，正值拉长脸部，负值缩短脸部，绝对值越大效果越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_FACEWIDTH （104）：脸宽，用于实现窄脸效果。调整范围为 \\[0, 100]，值越大脸部越窄，默认值为 10。
* FACE\\_SHAPE\\_AREA\\_CHEEKBONE （105）：颧骨，用于调整颧骨宽度。调整范围为 \\[0, 100]，值越大颧骨越窄，默认值为 43。
* FACE\\_SHAPE\\_AREA\\_CHEEK （106）：面颊，用于调整面颊宽度。调整范围为 \\[0, 100]，值越大面颊越窄，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_CHIN （108）：下巴，用于调整下巴长度。调整范围为 \\[-100, 100]，正值拉长下巴，负值缩短下巴，绝对值越大效果越明显，默认值为 -20。
* FACE\\_SHAPE\\_AREA\\_EYESCALE （200）：眼睛，用于实现大眼效果。调整范围为 \\[0, 100]，值越大眼睛越大，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_EYEDISTANCE （201）：眼距调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_EYEPOSITION （202）：眼睛位置调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_LOWEREYELID （203）：下眼睑调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_EYEPUPILS （204）：瞳孔大小调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_EYEINNERCORNER （205）：内眼角调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_EYEOUTERCORNER （206）：外眼角调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_NOSELENGTH （300）：鼻子长度，用于实现拉长鼻子效果。调整范围为 \\[-100, 100]，正值拉长鼻子，负值缩短鼻子，绝对值越大效果越明显，默认值为 -10。
* FACE\\_SHAPE\\_AREA\\_NOSEWIDTH （301）：鼻子宽度，用于实现瘦鼻效果。调整范围为 \\[-100, 100]，正值加宽鼻子，负值缩窄鼻子，绝对值越大效果越明显，默认值为 72。
* FACE\\_SHAPE\\_AREA\\_NOSEWING （302）：鼻翼调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_NOSEROOT （303）：鼻根调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_NOSEBRIDGE （304）：鼻梁调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_NOSETIP （305）：鼻尖调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_NOSEGENERAL （306）：整体鼻子调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_MOUTHSCALE （400）：嘴巴，用于实现大嘴效果。调整范围为 \\[0, 100]，值越大嘴巴越大，默认值为 50。
* FACE\\_SHAPE\\_AREA\\_MOUTHPOSITION （401）：嘴巴位置调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_MOUTHSMILE （402）：嘴角微笑调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_MOUTHLIP （403）：唇形调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_EYEBROWPOSITION （500）：眉毛位置调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。
* FACE\\_SHAPE\\_AREA\\_EYEBROWTHICKNESS （501）：眉毛粗细调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。

<a id="api_irtcengine_getfaceshapeareaoptions2__return_values" />

### 返回值 [#返回值-4]

* 方法调用成功，返回 FaceShapeAreaOptions 实例。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getfaceshapebeautyoptions" />

## getFaceShapeBeautyOptions \\[1/2] [#getfaceshapebeautyoptions-12]

获取当前的美颜特效设置。

<a id="api_irtcengine_getfaceshapebeautyoptions__prototype" />

\`\`\`java
public abstract FaceShapeBeautyOptions getFaceShapeBeautyOptions(Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_getfaceshapebeautyoptions__detailed_desc" />

当用户在应用中打开美颜风格和风格强度菜单时，可以调用此方法，并根据返回结果刷新菜单和更新 UI。

<a id="api_irtcengine_getfaceshapebeautyoptions__scenario" />

### 适用场景 [#适用场景-2]

当用户在应用中打开美型风格和风格强度菜单时，可以调用该方法获取当前的美型选项，然后根据结果刷新用户界面中的菜单，并更新 UI。

<a id="api_irtcengine_getfaceshapebeautyoptions__timing" />

### 调用时机 [#调用时机-2]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之后调用此方法。

<a id="api_irtcengine_getfaceshapebeautyoptions__parameters" />

### 参数 [#参数-5]

#### \`sourceType\` [#sourcetype-2]

媒体源类型，详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 该参数仅支持以下两种设置：

* 如果使用摄像头采集本地视频，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。
* 如果使用自定义视频源，设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_getfaceshapebeautyoptions__return_values" />

### 返回值 [#返回值-5]

方法调用成功，返回 [FaceShapeBeautyOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapebeautyoptions) 实例。 方法调用失败，返回 \`null\`。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getfaceshapebeautyoptions2" />

## getFaceShapeBeautyOptions \\[2/2] [#getfaceshapebeautyoptions-22]

获取当前的美颜特效设置。

<a id="api_irtcengine_getfaceshapebeautyoptions2__prototype" />

\`\`\`java
public abstract FaceShapeBeautyOptions getFaceShapeBeautyOptions();
\`\`\`

<a id="api_irtcengine_getfaceshapebeautyoptions2__detailed_desc" />

<a id="api_irtcengine_getfaceshapebeautyoptions2__scenario" />

### 适用场景 [#适用场景-3]

当用户在应用中打开美型和风格强度菜单时，可以调用此方法获取当前的美颜特效设置，然后根据结果刷新用户界面中的菜单，并更新 UI。

<a id="api_irtcengine_getfaceshapebeautyoptions2__timing" />

### 调用时机 [#调用时机-3]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之后调用此方法。

<a id="api_irtcengine_getfaceshapebeautyoptions2__return_values" />

### 返回值 [#返回值-6]

* 方法调用成功，返回 FaceShapeBeautyOptions 实例。
* 方法调用失败，返回 null。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_watermarkconfig_getoptions" />

## getOptions [#getoptions]

获取当前配置的水印显示选项。

<a id="api_watermarkconfig_getoptions__prototype" />

\`\`\`java
public WatermarkOptions getOptions()
\`\`\`

<a id="api_watermarkconfig_getoptions__detailed_desc" />

#### \`自从\` [#自从-3]

自 v4.6.0 版本新增。

<a id="api_watermarkconfig_getoptions__return_values" />

### 返回值 [#返回值-7]

方法调用成功，返回 [WatermarkOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions) 对象。

### 所属接口类 [#所属接口类-7]

* [WatermarkConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig)

<a id="api_ivideoeffectobject_getvideoeffectboolparam" />

## getVideoEffectBoolParam [#getvideoeffectboolparam]

获取视频特效中的布尔类型参数。

<a id="api_ivideoeffectobject_getvideoeffectboolparam__prototype" />

\`\`\`java
boolean getVideoEffectBoolParam(String option, String key);
\`\`\`

<a id="api_ivideoeffectobject_getvideoeffectboolparam__detailed_desc" />

#### \`自从\` [#自从-4]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_getvideoeffectboolparam__parameters" />

### 参数 [#参数-6]

#### \`option\` [#option]

参数类别的标识符。

#### \`key\` [#key]

参数的键名。

<a id="api_ivideoeffectobject_getvideoeffectboolparam__return_values" />

### 返回值 [#返回值-8]

* true：参数已启用。
* false：参数未启用或不存在。

### 所属接口类 [#所属接口类-8]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_ivideoeffectobject_getvideoeffectfloatparam" />

## getVideoEffectFloatParam [#getvideoeffectfloatparam]

获取视频特效中指定参数的 float 类型值。

<a id="api_ivideoeffectobject_getvideoeffectfloatparam__prototype" />

\`\`\`java
float getVideoEffectFloatParam(String option, String key);
\`\`\`

<a id="api_ivideoeffectobject_getvideoeffectfloatparam__detailed_desc" />

#### \`自从\` [#自从-5]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_getvideoeffectfloatparam__parameters" />

### 参数 [#参数-7]

#### \`option\` [#option-1]

参数类别的标识符。

#### \`key\` [#key-1]

参数的键名。

<a id="api_ivideoeffectobject_getvideoeffectfloatparam__return_values" />

### 返回值 [#返回值-9]

* 方法调用成功，返回当前的 float 值。
* 方法调用失败，返回 0.0f。

### 所属接口类 [#所属接口类-9]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_ivideoeffectobject_getvideoeffectintparam" />

## getVideoEffectIntParam [#getvideoeffectintparam]

获取视频特效中的整数类型参数。

<a id="api_ivideoeffectobject_getvideoeffectintparam__prototype" />

\`\`\`java
int getVideoEffectIntParam(String option, String key);
\`\`\`

<a id="api_ivideoeffectobject_getvideoeffectintparam__detailed_desc" />

#### \`自从\` [#自从-6]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_getvideoeffectintparam__parameters" />

### 参数 [#参数-8]

#### \`option\` [#option-2]

参数类别的标识符。

#### \`key\` [#key-2]

参数的键名。

<a id="api_ivideoeffectobject_getvideoeffectintparam__return_values" />

### 返回值 [#返回值-10]

* 方法调用成功，返回当前参数值。
* 方法调用失败，返回 0。

### 所属接口类 [#所属接口类-10]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_ivideoeffectobject_performvideoeffectaction" />

## performVideoEffectAction [#performvideoeffectaction]

对指定的视频特效节点执行操作。

<a id="api_ivideoeffectobject_performvideoeffectaction__prototype" />

\`\`\`java
int performVideoEffectAction(int nodeId, VIDEO_EFFECT_ACTION actionId);
\`\`\`

<a id="api_ivideoeffectobject_performvideoeffectaction__detailed_desc" />

#### \`自从\` [#自从-7]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_performvideoeffectaction__parameters" />

### 参数 [#参数-9]

#### \`nodeId\` [#nodeid-1]

视频特效节点的唯一标识符。

#### \`actionId\` [#actionid]

要在视频特效节点上执行的操作，详见 [VIDEO\\_EFFECT\\_ACTION](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videoeffectaction)。

<a id="api_ivideoeffectobject_performvideoeffectaction__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_ivideoeffectobject_removevideoeffect" />

## removeVideoEffect [#removevideoeffect]

移除指定节点 ID 的视频特效节点。

<a id="api_ivideoeffectobject_removevideoeffect__prototype" />

\`\`\`java
int removeVideoEffect(int nodeId);
\`\`\`

<a id="api_ivideoeffectobject_removevideoeffect__detailed_desc" />

#### \`自从\` [#自从-8]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_removevideoeffect__parameters" />

### 参数 [#参数-10]

#### \`nodeId\` [#nodeid-2]

要移除的视频特效节点的唯一标识符。

<a id="api_ivideoeffectobject_removevideoeffect__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_irtcengine_setbeautyeffectoptions" />

## setBeautyEffectOptions \\[1/2] [#setbeautyeffectoptions-12]

设置美颜特效功能及其参数。

<a id="api_irtcengine_setbeautyeffectoptions__prototype" />

\`\`\`java
public abstract int setBeautyEffectOptions(boolean enabled, BeautyOptions options);
\`\`\`

<a id="api_irtcengine_setbeautyeffectoptions__detailed_desc" />

#### \`自从\` [#自从-9]

自 v2.4.0 版本新增。

注：

* 此方法仅适用于 Android 5.0 或更高版本。
* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。
* 此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。

<a id="api_irtcengine_setbeautyeffectoptions__timing" />

### 调用时机 [#调用时机-4]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 或 \`startPreview\` 之后调用此方法。

<a id="api_irtcengine_setbeautyeffectoptions__parameters" />

### 参数 [#参数-11]

#### \`enabled\` [#enabled]

是否启用美颜特效功能：

* true：启用美颜特效功能。
* false：（默认）禁用美颜特效功能。

#### \`options\` [#options]

美颜特效参数。详见 [BeautyOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-beautyoptions)。

<a id="api_irtcengine_setbeautyeffectoptions__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：当前设备不支持该功能。可能的原因包括：
    * 当前设备能力不满足美颜特效的要求。声网建议更换为高性能设备。
    * 当前设备版本低于 Android 5.0，不支持该功能。声网建议更换设备或升级操作系统。

### 所属接口类 [#所属接口类-13]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setbeautyeffectoptions2" />

## setBeautyEffectOptions \\[2/2] [#setbeautyeffectoptions-22]

设置美颜特效选项并指定媒体源。

<a id="api_irtcengine_setbeautyeffectoptions2__prototype" />

\`\`\`java
public abstract int setBeautyEffectOptions(boolean enabled, BeautyOptions options, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setbeautyeffectoptions2__detailed_desc" />

#### \`自从\` [#自从-10]

自 v2.4.0 版本新增。

该方法用于启用或禁用美颜特效功能，并设置相关选项。与 [setBeautyEffectOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions) 方法类似，但该方法允许你指定应用美颜特效的媒体源类型。

<a id="api_irtcengine_setbeautyeffectoptions2__timing" />

### 调用时机 [#调用时机-5]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 或 \`startPreview\` 之后调用该方法。

<a id="api_irtcengine_setbeautyeffectoptions2__parameters" />

### 参数 [#参数-12]

#### \`enabled\` [#enabled-1]

是否启用美颜特效功能：

* true：启用美颜特效功能。
* false：（默认）禁用美颜特效功能。

#### \`options\` [#options-1]

美颜特效选项。详见 [BeautyOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-beautyoptions)。

#### \`sourceType\` [#sourcetype-3]

应用美颜特效效果的媒体源类型。详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 该参数仅支持以下两种设置：

* 默认值为 PRIMARY\\_CAMERA\\_SOURCE。
* 如果使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_setbeautyeffectoptions2__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：当前设备不支持该功能。可能原因包括：
    * 当前设备的性能不满足美颜特效的要求，建议更换为高性能设备。
    * 当前设备的系统版本低于 Android 5.0，不支持该功能，建议更换设备或升级操作系统。

### 所属接口类 [#所属接口类-14]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcolorenhanceoptions" />

## setColorEnhanceOptions \\[1/2] [#setcolorenhanceoptions-12]

设置色彩增强功能。

<a id="api_irtcengine_setcolorenhanceoptions__prototype" />

\`\`\`java
public abstract int setColorEnhanceOptions(boolean enabled, ColorEnhanceOptions options);
\`\`\`

<a id="api_irtcengine_setcolorenhanceoptions__detailed_desc" />

#### \`自从\` [#自从-11]

自 v3.6.2 版本新增。

摄像头采集的视频图像可能存在色彩失真。该功能可智能调整视频的饱和度和对比度等参数，从而提升视频的色彩丰富度和还原度，使画面更加生动。

注：

* 请在调用 enableVideo 方法之后调用此方法。
* 色彩增强功能对设备性能有一定要求。开启该功能后，如果设备出现严重发热问题，声网建议你降低色彩增强等级以减少性能消耗，或关闭该功能。
* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，将无法正常启用该功能。

<a id="api_irtcengine_setcolorenhanceoptions__parameters" />

### 参数 [#参数-13]

#### \`enabled\` [#enabled-2]

是否启用色彩增强功能：

* true：启用色彩增强。
* false：（默认）关闭色彩增强。

#### \`options\` [#options-2]

色彩增强选项。详见 [ColorEnhanceOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-colorenhanceoptions)。

<a id="api_irtcengine_setcolorenhanceoptions__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setcolorenhanceoptions2" />

## setColorEnhanceOptions \\[2/2] [#setcolorenhanceoptions-22]

设置色彩增强选项并指定媒体源。

<a id="api_irtcengine_setcolorenhanceoptions2__prototype" />

\`\`\`java
public abstract int setColorEnhanceOptions(boolean enabled, ColorEnhanceOptions options, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setcolorenhanceoptions2__detailed_desc" />

#### \`自从\` [#自从-12]

自 v3.6.2 版本新增。

摄像头采集的视频图像可能存在色彩失真。色彩增强功能可智能调整视频的饱和度和对比度等参数，从而提升视频的色彩丰富度和还原度，使画面更加生动。该方法与 [setColorEnhanceOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions) 功能相同，但允许你指定应用色彩增强的媒体源类型。

注：

* 请在调用 enableVideo 后调用此方法。
* 色彩增强功能对设备性能有一定要求。开启该功能后，如设备出现严重发热，声网建议你降低色彩增强等级以减少性能消耗，或关闭该功能。
* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。若该动态库被删除，则无法正常启用该功能。

<a id="api_irtcengine_setcolorenhanceoptions2__parameters" />

### 参数 [#参数-14]

#### \`enabled\` [#enabled-3]

是否启用色彩增强：

* true：启用色彩增强。
* false：（默认）关闭色彩增强。

#### \`options\` [#options-3]

色彩增强选项。详见 [ColorEnhanceOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-colorenhanceoptions)。

#### \`sourceType\` [#sourcetype-4]

媒体源类型。详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 该参数仅支持以下两种设置：

* 默认值为 PRIMARY\\_CAMERA\\_SOURCE。
* 如果使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_setcolorenhanceoptions2__return_values" />

### 返回值 [#返回值-16]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setfaceshapeareaoptions" />

## setFaceShapeAreaOptions \\[1/2] [#setfaceshapeareaoptions-12]

设置面部区域的美颜特效选项并指定媒体源。

<a id="api_irtcengine_setfaceshapeareaoptions__prototype" />

\`\`\`java
public abstract int setFaceShapeAreaOptions(FaceShapeAreaOptions options, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setfaceshapeareaoptions__detailed_desc" />

如果通过 \`setFaceShapeBeautyOptions\` 方法实现的预设美颜特效无法满足预期，你可以使用此方法设置美颜区域选项，单独微调面部的每个部分，从而实现更精细的美颜效果。该方法与 [setFaceShapeAreaOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions2) 类似，区别在于该方法支持指定应用美颜特效的媒体源。

注：

* 此方法仅适用于 Android 4.4 或更高版本。
* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。
* 此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。

<a id="api_irtcengine_setfaceshapeareaoptions__timing" />

### 调用时机 [#调用时机-6]

在调用 \`setFaceShapeBeautyOptions\` 后调用此方法。

<a id="api_irtcengine_setfaceshapeareaoptions__parameters" />

### 参数 [#参数-15]

#### \`options\` [#options-4]

面部增强区域，详见 [FaceShapeAreaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapeareaoptions)。

#### \`sourceType\` [#sourcetype-5]

媒体源类型，详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 在此方法中，该参数仅支持以下两种设置：

* 如果使用摄像头采集本地视频，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。
* 如果使用自定义视频源，将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_setfaceshapeareaoptions__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：当前设备不支持此功能。可能原因包括：
    * 当前设备能力不满足美颜特效的要求。建议更换为高性能设备。
    * 当前设备版本低于 Android 4.4，不支持此功能。建议更换设备或升级操作系统。

### 所属接口类 [#所属接口类-17]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setfaceshapeareaoptions2" />

## setFaceShapeAreaOptions \\[2/2] [#setfaceshapeareaoptions-22]

设置美颜增强的面部区域选项。

<a id="api_irtcengine_setfaceshapeareaoptions2__prototype" />

\`\`\`java
public abstract int setFaceShapeAreaOptions(FaceShapeAreaOptions options);
\`\`\`

<a id="api_irtcengine_setfaceshapeareaoptions2__detailed_desc" />

你可以调用该方法设置面部区域选项，单独微调面部的每个部分，从而实现更精细的美颜效果。

注：

* 此方法仅适用于 Android 4.4 或更高版本。
* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。
* 此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。

<a id="api_irtcengine_setfaceshapeareaoptions2__timing" />

### 调用时机 [#调用时机-7]

请在调用 \`setFaceShapeBeautyOptions\` 方法之后调用此方法。

<a id="api_irtcengine_setfaceshapeareaoptions2__parameters" />

### 参数 [#参数-16]

#### \`options\` [#options-5]

面部增强区域选项，详见 [FaceShapeAreaOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapeareaoptions)。

<a id="api_irtcengine_setfaceshapeareaoptions2__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：当前设备不支持此功能。可能原因包括：
    * 当前设备的能力不满足美颜特效的要求，建议你更换为高性能设备。
    * 当前设备版本低于 Android 4.4，不支持此功能，建议你更换设备或升级操作系统。

### 所属接口类 [#所属接口类-18]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setfaceshapebeautyoptions" />

## setFaceShapeBeautyOptions \\[1/2] [#setfaceshapebeautyoptions-12]

设置美型效果并指定应用的媒体源。

<a id="api_irtcengine_setfaceshapebeautyoptions__prototype" />

\`\`\`java
public abstract int setFaceShapeBeautyOptions(boolean enabled, FaceShapeBeautyOptions options, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setfaceshapebeautyoptions__detailed_desc" />

该方法可通过预设参数一次性调整面部多个部位，实现瘦脸、放大眼睛、瘦鼻等轻度美型效果，并支持整体调节美型强度。该方法与 [setFaceShapeBeautyOptions \\[2/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions2) 功能类似，区别在于该方法支持指定应用美型特效的媒体源。

注：

* 此方法仅适用于 Android 4.4 或更高版本。
* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。若该动态库被删除，则无法正常启用该功能。
* 此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。

<a id="api_irtcengine_setfaceshapebeautyoptions__timing" />

### 调用时机 [#调用时机-8]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 后调用此方法。

<a id="api_irtcengine_setfaceshapebeautyoptions__parameters" />

### 参数 [#参数-17]

#### \`enabled\` [#enabled-4]

是否启用美型特效：

* true：启用美型特效。
* false：（默认）关闭美型特效。

#### \`options\` [#options-6]

美型风格选项，详见 [FaceShapeBeautyOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapebeautyoptions)。

#### \`sourceType\` [#sourcetype-6]

应用美型特效的媒体源类型，详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 该参数仅支持以下两种设置：

* 使用摄像头采集本地视频时，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。
* 使用自定义视频源时，设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_setfaceshapebeautyoptions__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：当前设备不支持该功能。可能原因包括：
    * 当前设备能力不满足美颜特效要求，建议更换为高性能设备。
    * 当前设备系统版本低于 Android 4.4，建议更换设备或升级操作系统。

### 所属接口类 [#所属接口类-19]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setfaceshapebeautyoptions2" />

## setFaceShapeBeautyOptions \\[2/2] [#setfaceshapebeautyoptions-22]

设置美型选项。

<a id="api_irtcengine_setfaceshapebeautyoptions2__prototype" />

\`\`\`java
public abstract int setFaceShapeBeautyOptions(boolean enabled, FaceShapeBeautyOptions options);
\`\`\`

<a id="api_irtcengine_setfaceshapebeautyoptions2__detailed_desc" />

注：

* 此方法仅适用于 Android 4.4 或更高版本。
* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。
* 此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。

<a id="api_irtcengine_setfaceshapebeautyoptions2__timing" />

### 调用时机 [#调用时机-9]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法之后调用此方法。

<a id="api_irtcengine_setfaceshapebeautyoptions2__parameters" />

### 参数 [#参数-18]

#### \`enabled\` [#enabled-5]

是否启用美型效果：

* true：启用美型效果。
* false：（默认）关闭美型效果。

#### \`options\` [#options-7]

美型风格选项，详见 [FaceShapeBeautyOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapebeautyoptions)。

<a id="api_irtcengine_setfaceshapebeautyoptions2__return_values" />

### 返回值 [#返回值-20]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -4：当前设备不支持该功能。可能的原因包括：
    * 当前设备的能力不满足美颜特效的要求。建议更换为高性能设备。
    * 当前设备版本低于 Android 4.4，不支持该功能。建议更换设备或升级操作系统。

### 所属接口类 [#所属接口类-20]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setfiltereffectoptions" />

## setFilterEffectOptions \\[1/2] [#setfiltereffectoptions-12]

设置滤镜特效参数并指定媒体源。

<a id="api_irtcengine_setfiltereffectoptions__prototype" />

\`\`\`java
public abstract int setFilterEffectOptions(boolean enabled, FilterEffectOptions options, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setfiltereffectoptions__detailed_desc" />

#### \`自从\` [#自从-13]

自 v4.4.1 版本新增。

该方法允许你设置滤镜特效参数，并指定滤镜特效应用的媒体源。

注：

* 该方法仅适用于 Android 5.0 或更高版本。
* 该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，该功能将无法正常启用。
* 该功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的能力。

<a id="api_irtcengine_setfiltereffectoptions__timing" />

### 调用时机 [#调用时机-10]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 之后调用该方法。

<a id="api_irtcengine_setfiltereffectoptions__parameters" />

### 参数 [#参数-19]

#### \`enabled\` [#enabled-6]

是否启用滤镜特效：

* true：启用。
* false：（默认）不启用。

#### \`options\` [#options-8]

滤镜特效参数。详见 [FilterEffectOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-filtereffectoptions)。

#### \`sourceType\` [#sourcetype-7]

滤镜特效应用的媒体源类型。详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 该参数仅支持以下两种设置：

* 如果使用摄像头采集本地视频，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。
* 如果使用自定义视频源，设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_setfiltereffectoptions__return_values" />

### 返回值 [#返回值-21]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-21]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setfiltereffectoptions2" />

## setFilterEffectOptions \\[2/2] [#setfiltereffectoptions-22]

设置滤镜特效选项。

<a id="api_irtcengine_setfiltereffectoptions2__prototype" />

\`\`\`java
public abstract int setFilterEffectOptions(boolean enabled, FilterEffectOptions options);
\`\`\`

<a id="api_irtcengine_setfiltereffectoptions2__detailed_desc" />

#### \`自从\` [#自从-14]

自 v4.4.1 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅适用于 Android 5.0 或更高版本。该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。该功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的能力。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setfiltereffectoptions2__timing" />

### 调用时机 [#调用时机-11]

在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法之后调用该方法。

<a id="api_irtcengine_setfiltereffectoptions2__parameters" />

### 参数 [#参数-20]

#### \`enabled\` [#enabled-7]

是否启用滤镜特效：

* true：启用。
* false：（默认）不启用。

#### \`options\` [#options-9]

滤镜特效选项。详见 [FilterEffectOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-filtereffectoptions)。

<a id="api_irtcengine_setfiltereffectoptions2__return_values" />

### 返回值 [#返回值-22]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-22]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlowlightenhanceoptions" />

## setLowlightEnhanceOptions \\[1/2] [#setlowlightenhanceoptions-12]

设置暗光增强功能。

<a id="api_irtcengine_setlowlightenhanceoptions__prototype" />

\`\`\`java
public abstract int setLowlightEnhanceOptions(boolean enabled, LowLightEnhanceOptions options);
\`\`\`

<a id="api_irtcengine_setlowlightenhanceoptions__detailed_desc" />

#### \`自从\` [#自从-15]

自 v3.6.2 版本新增。

注：

* 该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，将无法正常启用该功能。
* 暗光增强功能对设备性能有一定要求。如果启用后设备出现过热，声网建议将暗光增强选项设置为较低的性能消耗等级，或关闭该功能。
* 如果你希望在使用暗光增强功能时优先保证画质（LOW\\_LIGHT\\_ENHANCE\\_LEVEL\\_HIGH\\_QUALITY ），需要先调用 setVideoDenoiserOptions 实现视频降噪，具体对应关系如下：
  * 当暗光增强设置为自动模式（LOW\\_LIGHT\\_ENHANCE\\_AUTO ）时，视频降噪需设置为优先保证画质（VIDEO\\_DENOISER\\_LEVEL\\_HIGH\\_QUALITY ）和自动模式（VIDEO\\_DENOISER\\_AUTO ）。
  * 当暗光增强设置为手动模式（LOW\\_LIGHT\\_ENHANCE\\_MANUAL ）时，视频降噪需设置为优先保证画质（VIDEO\\_DENOISER\\_LEVEL\\_HIGH\\_QUALITY ）和手动模式（VIDEO\\_DENOISER\\_MANUAL ）。

<a id="api_irtcengine_setlowlightenhanceoptions__scenario" />

### 适用场景 [#适用场景-4]

暗光增强功能可自适应调整在背光、多云或黑暗等低光或光线不均的场景中采集的视频亮度值，恢复或突出图像细节，提升视频整体视觉效果。

<a id="api_irtcengine_setlowlightenhanceoptions__timing" />

### 调用时机 [#调用时机-12]

请在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 后调用此方法。

<a id="api_irtcengine_setlowlightenhanceoptions__parameters" />

### 参数 [#参数-21]

#### \`enabled\` [#enabled-8]

是否启用暗光增强功能：

* true：启用暗光增强。
* false：（默认）关闭暗光增强。

#### \`options\` [#options-10]

暗光增强选项。详见 [LowLightEnhanceOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lowlightenhanceoptions)。

<a id="api_irtcengine_setlowlightenhanceoptions__return_values" />

### 返回值 [#返回值-23]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-23]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setlowlightenhanceoptions2" />

## setLowlightEnhanceOptions \\[2/2] [#setlowlightenhanceoptions-22]

设置低光增强选项并指定媒体源。

<a id="api_irtcengine_setlowlightenhanceoptions2__prototype" />

\`\`\`java
public abstract int setLowlightEnhanceOptions(boolean enabled, LowLightEnhanceOptions options, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setlowlightenhanceoptions2__detailed_desc" />

#### \`自从\` [#自从-16]

自 v3.6.2 版本新增。

该方法用于设置低光增强选项，并允许你指定应用低光增强的媒体源类型。

注：

* 该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。
* 视频降噪对设备性能有一定要求。如果你在启用视频降噪后设备出现过热，声网建议你将视频降噪选项设置为较低的性能消耗等级，或完全关闭视频降噪。

<a id="api_irtcengine_setlowlightenhanceoptions2__scenario" />

### 适用场景 [#适用场景-5]

适用于黑暗环境或低端视频采集设备导致图像噪点较多的场景。在实时互动中，图像噪点会占用码流资源，降低编码效率。

<a id="api_irtcengine_setlowlightenhanceoptions2__timing" />

### 调用时机 [#调用时机-13]

请在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法之后调用该方法。

<a id="api_irtcengine_setlowlightenhanceoptions2__parameters" />

### 参数 [#参数-22]

#### \`enabled\` [#enabled-9]

是否启用低光增强：

* true：启用低光增强。
* false：（默认）关闭低光增强。

#### \`options\` [#options-11]

低光增强选项。详见 [LowLightEnhanceOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lowlightenhanceoptions)。

#### \`sourceType\` [#sourcetype-8]

媒体源类型。详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 该参数仅支持以下两种设置：

* 默认值为 PRIMARY\\_CAMERA\\_SOURCE。
* 如果你使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_setlowlightenhanceoptions2__return_values" />

### 返回值 [#返回值-24]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-24]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setvideodenoiseroptions" />

## setVideoDenoiserOptions \\[1/2] [#setvideodenoiseroptions-12]

设置视频降噪功能及其选项。

<a id="api_irtcengine_setvideodenoiseroptions__prototype" />

\`\`\`java
public abstract int setVideoDenoiserOptions(boolean enabled, VideoDenoiserOptions options);
\`\`\`

<a id="api_irtcengine_setvideodenoiseroptions__detailed_desc" />

#### \`自从\` [#自从-17]

自 v3.6.2 版本新增。

你可以调用该方法设置视频降噪效果的相关选项。

注：

* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，将无法正常启用该功能。
* 视频降噪对设备性能有一定要求。如果启用后设备出现过热，声网建议你将降噪选项调整为较低性能消耗的等级，或关闭视频降噪功能。
* 如果该方法实现的降噪效果无法满足你的需求，声网建议你调用 setBeautyEffectOptions 方法启用美颜和磨皮功能，以获得更好的降噪效果。推荐用于强降噪效果的 BeautyOptions 设置如下：
  * lighteningContrastLevel: LIGHTENING\\_CONTRAST\\_NORMAL
  * lighteningLevel: 0.0
  * smoothnessLevel: 0.5
  * rednessLevel: 0.0
  * sharpnessLevel: 0.1

<a id="api_irtcengine_setvideodenoiseroptions__scenario" />

### 适用场景 [#适用场景-6]

在光线较暗的环境中或使用低端视频采集设备时，视频图像可能会出现明显噪点，影响视频质量。在实时互动场景中，视频噪点还会占用码流资源，降低编码效率。该方法适用于多频道场景。

<a id="api_irtcengine_setvideodenoiseroptions__timing" />

### 调用时机 [#调用时机-14]

调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法后调用此方法。

<a id="api_irtcengine_setvideodenoiseroptions__parameters" />

### 参数 [#参数-23]

#### \`enabled\` [#enabled-10]

是否启用视频降噪功能：

* true：启用视频降噪。
* false：（默认）关闭视频降噪。

#### \`options\` [#options-12]

视频降噪选项。详见 [VideoDenoiserOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videodenoiseroptions)。

<a id="api_irtcengine_setvideodenoiseroptions__return_values" />

### 返回值 [#返回值-25]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-25]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setvideodenoiseroptions2" />

## setVideoDenoiserOptions \\[2/2] [#setvideodenoiseroptions-22]

设置视频降噪并指定媒体源。

<a id="api_irtcengine_setvideodenoiseroptions2__prototype" />

\`\`\`java
public abstract int setVideoDenoiserOptions(boolean enabled, VideoDenoiserOptions options, Constants.MediaSourceType sourceType);
\`\`\`

<a id="api_irtcengine_setvideodenoiseroptions2__detailed_desc" />

#### \`自从\` [#自从-18]

自 v3.6.2 版本新增。

你可以调用此方法启用视频降噪功能并设置视频降噪效果的选项。该方法与 [setVideoDenoiserOptions \\[1/2\\]](/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions) 类似，但支持你指定应用降噪的媒体源类型。

注：

* 此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。
* 视频降噪对设备性能有一定要求。如果启用视频降噪后设备出现过热，声网建议你将视频降噪选项设置为较低的性能消耗等级，或完全关闭视频降噪功能。
* 如果该方法实现的视频降噪效果无法满足你的需求，声网建议你调用 setBeautyEffectOptions 方法启用美颜和磨皮功能，以获得更好的视频降噪效果。推荐用于强降噪效果的 BeautyOptions 设置如下：
  * lighteningContrastLevel: LIGHTENING\\_CONTRAST\\_NORMAL。
  * lighteningLevel: 0.0。
  * smoothnessLevel: 0.5。
  * rednessLevel: 0.0。
  * sharpnessLevel: 0.1。

<a id="api_irtcengine_setvideodenoiseroptions2__scenario" />

### 适用场景 [#适用场景-7]

光线较暗的环境和低端视频采集设备可能导致视频图像中出现明显噪点，影响视频质量。在实时互动场景中，视频噪点还会占用码流资源，降低编码效率。

<a id="api_irtcengine_setvideodenoiseroptions2__timing" />

### 调用时机 [#调用时机-15]

请在调用 [enableVideo](/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo) 方法之后调用此方法。

<a id="api_irtcengine_setvideodenoiseroptions2__parameters" />

### 参数 [#参数-24]

#### \`enabled\` [#enabled-11]

是否启用视频降噪功能：

* true：启用视频降噪。
* false：（默认）关闭视频降噪。

#### \`options\` [#options-13]

视频降噪选项，详见 [VideoDenoiserOptions](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videodenoiseroptions)。

#### \`sourceType\` [#sourcetype-9]

媒体源类型，详见 [MediaSourceType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype)。

注： 在此方法中，该参数仅支持以下两种设置：

* 默认值为 PRIMARY\\_CAMERA\\_SOURCE。
* 如果你使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。

<a id="api_irtcengine_setvideodenoiseroptions2__return_values" />

### 返回值 [#返回值-26]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-26]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_ivideoeffectobject_setvideoeffectboolparam" />

## setVideoEffectBoolParam [#setvideoeffectboolparam]

设置视频特效的布尔参数。

<a id="api_ivideoeffectobject_setvideoeffectboolparam__prototype" />

\`\`\`java
int setVideoEffectBoolParam(String option, String key, boolean value);
\`\`\`

<a id="api_ivideoeffectobject_setvideoeffectboolparam__detailed_desc" />

#### \`自从\` [#自从-19]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_setvideoeffectboolparam__parameters" />

### 参数 [#参数-25]

#### \`option\` [#option-3]

参数类别的标识符。

#### \`key\` [#key-3]

参数的键名。

#### \`value\` [#value]

要设置的布尔值：

* true：设置为启用。
* false：设置为禁用。

<a id="api_ivideoeffectobject_setvideoeffectboolparam__return_values" />

### 返回值 [#返回值-27]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-27]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_ivideoeffectobject_setvideoeffectfloatparam" />

## setVideoEffectFloatParam [#setvideoeffectfloatparam]

设置视频特效的浮点参数。

<a id="api_ivideoeffectobject_setvideoeffectfloatparam__prototype" />

\`\`\`java
int setVideoEffectFloatParam(String option, String key, float value);
\`\`\`

<a id="api_ivideoeffectobject_setvideoeffectfloatparam__detailed_desc" />

#### \`自从\` [#自从-20]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_setvideoeffectfloatparam__parameters" />

### 参数 [#参数-26]

#### \`option\` [#option-4]

参数类别标识符。

#### \`key\` [#key-4]

参数键名。

#### \`value\` [#value-1]

要设置的浮点型参数值。

<a id="api_ivideoeffectobject_setvideoeffectfloatparam__return_values" />

### 返回值 [#返回值-28]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-28]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)

<a id="api_ivideoeffectobject_setvideoeffectintparam" />

## setVideoEffectIntParam [#setvideoeffectintparam]

设置视频特效的整数参数。

<a id="api_ivideoeffectobject_setvideoeffectintparam__prototype" />

\`\`\`java
int setVideoEffectIntParam(String option, String key, int value);
\`\`\`

<a id="api_ivideoeffectobject_setvideoeffectintparam__detailed_desc" />

#### \`自从\` [#自从-21]

自 v4.6.0 版本新增。

<a id="api_ivideoeffectobject_setvideoeffectintparam__parameters" />

### 参数 [#参数-27]

#### \`option\` [#option-5]

参数类别的标识符。

#### \`key\` [#key-5]

参数的键名。

#### \`value\` [#value-2]

要设置的整数值。

<a id="api_ivideoeffectobject_setvideoeffectintparam__return_values" />

### 返回值 [#返回值-29]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-29]

* [IVideoEffectObject](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject)
`;
export let structuredData = {
  contents: [{
    heading: "addorupdatevideoeffect",
    content: "为指定的视频特效节点 ID 和模板添加或更新视频特效。"
  }, {
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从",
    content: "注： 优先级规则："
  }, {
    heading: "自从",
    content: "风格妆 (STYLE\\_MAKEUP) 节点优先于滤镜特效 (FILTER) 节点。"
  }, {
    heading: "自从",
    content: "若要应用滤镜特效，必须先移除风格妆特效节点："
  }, {
    heading: "nodeid",
    content: "视频特效节点的唯一标识符或标识符组合。详见 VIDEO\\_EFFECT\\_NODE\\_ID。例如："
  }, {
    heading: "nodeid",
    content: "单个特效： VIDEO\\_EFFECT\\_NODE\\_ID.BEAUTY。"
  }, {
    heading: "nodeid",
    content: "组合特效： VIDEO\\_EFFECT\\_NODE\\_ID.BEAUTY | VIDEO\\_EFFECT\\_NODE\\_ID.STYLE\\_MAKEUP。"
  }, {
    heading: "templatename",
    content: "特效模板名称。如果设置为 `null` 或空字符串，SDK 会从资源包中加载默认参数配置。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "IVideoEffectObject"
  }, {
    heading: "createvideoeffectobject",
    content: "创建一个 IVideoEffectObject 视频特效对象。"
  }, {
    heading: "自从-1",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-1",
    content: "你必须先调用 enableVideo 方法再调用此方法。该方法适用于 Android 4.4 及以上版本。"
  }, {
    heading: "bundlepath",
    content: "视频特效资源包的路径。"
  }, {
    heading: "sourcetype",
    content: "媒体源类型，例如 `PRIMARY_CAMERA_SOURCE`。详见 MediaSourceType。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回 IVideoEffectObject 对象。 方法调用失败，返回 `null`。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "destroyvideoeffectobject",
    content: "销毁一个视频特效对象。"
  }, {
    heading: "自从-2",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-2",
    content: "在调用该方法前必须先调用 enableVideo 方法。该方法适用于 Android 4.4 及以上版本。"
  }, {
    heading: "videoeffectobject",
    content: "要销毁的视频特效对象。详见 IVideoEffectObject。"
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
    heading: "getfaceshapeareaoptions-12",
    content: "获取美颜区域的当前设置。"
  }, {
    heading: "适用场景",
    content: "当用户在应用中打开美型区域和塑形强度菜单时，可以调用该方法获取当前的美颜特效选项，然后根据结果刷新用户界面中的菜单并更新 UI。"
  }, {
    heading: "调用时机",
    content: "在调用 enableVideo 之后调用此方法。"
  }, {
    heading: "shapearea",
    content: "美颜增强区域。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NONE （-1）：（默认）无效区域，不应用美颜效果。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_HEADSCALE （100）：头部，用于实现小头效果。调整范围为 \\[0, 100]，值越大头部越小，默认值为 100。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_FOREHEAD （101）：额头，用于调整发际线高度。调整范围为 \\[-100, 100]，正值抬高发际线，负值降低发际线，绝对值越大效果越明显，默认值为 50。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_FACECONTOUR （102）：脸部轮廓，用于实现瘦脸效果。调整范围为 \\[0, 100]，值越大瘦脸效果越明显，默认值为 10。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_FACELENGTH （103）：脸长，用于拉长或缩短脸部。调整范围为 \\[-100, 100]，正值拉长脸部，负值缩短脸部，绝对值越大效果越明显，默认值为 0。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_FACEWIDTH （104）：脸宽，用于实现窄脸效果。调整范围为 \\[0, 100]，值越大脸部越窄，默认值为 10。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_CHEEKBONE （105）：颧骨，用于调整颧骨宽度。调整范围为 \\[0, 100]，值越大颧骨越窄，默认值为 43。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_CHEEK （106）：面颊，用于调整面颊宽度。调整范围为 \\[0, 100]，值越大面颊越窄，默认值为 50。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_CHIN （108）：下巴，用于调整下巴长度。调整范围为 \\[-100, 100]，正值拉长下巴，负值缩短下巴，绝对值越大效果越明显，默认值为 -20。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYESCALE （200）：眼睛，用于实现大眼效果。调整范围为 \\[0, 100]，值越大眼睛越大，默认值为 50。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYEDISTANCE （201）：眼距调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYEPOSITION （202）：眼睛位置调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_LOWEREYELID （203）：下眼睑调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYEPUPILS （204）：瞳孔大小调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYEINNERCORNER （205）：内眼角调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYEOUTERCORNER （206）：外眼角调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NOSELENGTH （300）：鼻子长度，用于拉长或缩短鼻子。调整范围为 \\[-100, 100]，正值拉长鼻子，负值缩短鼻子，绝对值越大效果越明显，默认值为 -10。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEWIDTH （301）：鼻子宽度，用于实现瘦鼻效果。调整范围为 \\[-100, 100]，正值加宽鼻子，负值缩窄鼻子，绝对值越大效果越明显，默认值为 72。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEWING （302）：鼻翼调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEROOT （303）：鼻根调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEBRIDGE （304）：鼻梁调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NOSETIP （305）：鼻尖调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEGENERAL （306）：整体鼻子调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHSCALE （400）：嘴巴，用于实现大嘴效果。调整范围为 \\[0, 100]，值越大嘴巴越大，默认值为 50。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHPOSITION （401）：嘴巴位置调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHSMILE （402）：嘴角微笑调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHLIP （403）：唇形调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYEBROWPOSITION （500）：眉毛位置调整。范围为 \\[-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
  }, {
    heading: "shapearea",
    content: "FACE\\_SHAPE\\_AREA\\_EYEBROWTHICKNESS （501）：眉毛粗细调整。范围为 \\[0, 100]，默认值为 0。值越大，调整越明显。"
  }, {
    heading: "sourcetype-1",
    content: "媒体源类型，详见 MediaSourceType。"
  }, {
    heading: "sourcetype-1",
    content: "注： 该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-1",
    content: "使用摄像头采集本地视频时，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-1",
    content: "使用自定义视频源时，设置为 CUSTOM\\_VIDEO\\_SOURCE。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功，返回 FaceShapeAreaOptions 实例。"
  }, {
    heading: "返回值-3",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "getfaceshapeareaoptions-22",
    content: "获取当前美颜效果区域的设置选项。"
  }, {
    heading: "getfaceshapeareaoptions-22",
    content: "你可以调用该方法获取当前美颜效果的设置选项，并根据返回结果刷新界面菜单，更新 UI。"
  }, {
    heading: "适用场景-1",
    content: "当用户在应用中打开美颜区域和塑形强度菜单时，可调用此方法获取当前美颜效果选项，然后根据结果刷新用户界面中的菜单并更新 UI。"
  }, {
    heading: "调用时机-1",
    content: "在调用 enableVideo 方法之后调用此方法。"
  }, {
    heading: "shapearea-1",
    content: "美颜增强区域。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NONE （-1）：（默认）无效区域，不应用美颜效果。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_HEADSCALE （100）：头部，用于实现小头效果。调整范围为 \\[0, 100]，值越大头部越小，默认值为 100。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_FOREHEAD （101）：额头，用于调整发际线高度。调整范围为 \\[-100, 100]，正值抬高发际线，负值降低发际线，绝对值越大效果越明显，默认值为 50。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_FACECONTOUR （102）：脸型轮廓，用于实现瘦脸效果。调整范围为 \\[0, 100]，值越大瘦脸效果越明显，默认值为 10。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_FACELENGTH （103）：脸长，用于实现拉长脸部效果。调整范围为 \\[-100, 100]，正值拉长脸部，负值缩短脸部，绝对值越大效果越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_FACEWIDTH （104）：脸宽，用于实现窄脸效果。调整范围为 \\[0, 100]，值越大脸部越窄，默认值为 10。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_CHEEKBONE （105）：颧骨，用于调整颧骨宽度。调整范围为 \\[0, 100]，值越大颧骨越窄，默认值为 43。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_CHEEK （106）：面颊，用于调整面颊宽度。调整范围为 \\[0, 100]，值越大面颊越窄，默认值为 50。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_CHIN （108）：下巴，用于调整下巴长度。调整范围为 \\[-100, 100]，正值拉长下巴，负值缩短下巴，绝对值越大效果越明显，默认值为 -20。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYESCALE （200）：眼睛，用于实现大眼效果。调整范围为 \\[0, 100]，值越大眼睛越大，默认值为 50。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYEDISTANCE （201）：眼距调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYEPOSITION （202）：眼睛位置调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_LOWEREYELID （203）：下眼睑调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYEPUPILS （204）：瞳孔大小调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYEINNERCORNER （205）：内眼角调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYEOUTERCORNER （206）：外眼角调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NOSELENGTH （300）：鼻子长度，用于实现拉长鼻子效果。调整范围为 \\[-100, 100]，正值拉长鼻子，负值缩短鼻子，绝对值越大效果越明显，默认值为 -10。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEWIDTH （301）：鼻子宽度，用于实现瘦鼻效果。调整范围为 \\[-100, 100]，正值加宽鼻子，负值缩窄鼻子，绝对值越大效果越明显，默认值为 72。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEWING （302）：鼻翼调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEROOT （303）：鼻根调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEBRIDGE （304）：鼻梁调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NOSETIP （305）：鼻尖调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_NOSEGENERAL （306）：整体鼻子调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHSCALE （400）：嘴巴，用于实现大嘴效果。调整范围为 \\[0, 100]，值越大嘴巴越大，默认值为 50。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHPOSITION （401）：嘴巴位置调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHSMILE （402）：嘴角微笑调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_MOUTHLIP （403）：唇形调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYEBROWPOSITION （500）：眉毛位置调整。调整范围为 \\[-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
  }, {
    heading: "shapearea-1",
    content: "FACE\\_SHAPE\\_AREA\\_EYEBROWTHICKNESS （501）：眉毛粗细调整。调整范围为 \\[0, 100]，值越大调整越明显，默认值为 0。"
  }, {
    heading: "返回值-4",
    content: "方法调用成功，返回 FaceShapeAreaOptions 实例。"
  }, {
    heading: "返回值-4",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类-4",
    content: "RtcEngine"
  }, {
    heading: "getfaceshapebeautyoptions-12",
    content: "获取当前的美颜特效设置。"
  }, {
    heading: "getfaceshapebeautyoptions-12",
    content: "当用户在应用中打开美颜风格和风格强度菜单时，可以调用此方法，并根据返回结果刷新菜单和更新 UI。"
  }, {
    heading: "适用场景-2",
    content: "当用户在应用中打开美型风格和风格强度菜单时，可以调用该方法获取当前的美型选项，然后根据结果刷新用户界面中的菜单，并更新 UI。"
  }, {
    heading: "调用时机-2",
    content: "在调用 enableVideo 之后调用此方法。"
  }, {
    heading: "sourcetype-2",
    content: "媒体源类型，详见 MediaSourceType。"
  }, {
    heading: "sourcetype-2",
    content: "注： 该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-2",
    content: "如果使用摄像头采集本地视频，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-2",
    content: "如果使用自定义视频源，设置为 CUSTOM\\_VIDEO\\_SOURCE。"
  }, {
    heading: "返回值-5",
    content: "方法调用成功，返回 FaceShapeBeautyOptions 实例。 方法调用失败，返回 `null`。"
  }, {
    heading: "所属接口类-5",
    content: "RtcEngine"
  }, {
    heading: "getfaceshapebeautyoptions-22",
    content: "获取当前的美颜特效设置。"
  }, {
    heading: "适用场景-3",
    content: "当用户在应用中打开美型和风格强度菜单时，可以调用此方法获取当前的美颜特效设置，然后根据结果刷新用户界面中的菜单，并更新 UI。"
  }, {
    heading: "调用时机-3",
    content: "在调用 enableVideo 之后调用此方法。"
  }, {
    heading: "返回值-6",
    content: "方法调用成功，返回 FaceShapeBeautyOptions 实例。"
  }, {
    heading: "返回值-6",
    content: "方法调用失败，返回 null。"
  }, {
    heading: "所属接口类-6",
    content: "RtcEngine"
  }, {
    heading: "getoptions",
    content: "获取当前配置的水印显示选项。"
  }, {
    heading: "自从-3",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "返回值-7",
    content: "方法调用成功，返回 WatermarkOptions 对象。"
  }, {
    heading: "所属接口类-7",
    content: "WatermarkConfig"
  }, {
    heading: "getvideoeffectboolparam",
    content: "获取视频特效中的布尔类型参数。"
  }, {
    heading: "自从-4",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "option",
    content: "参数类别的标识符。"
  }, {
    heading: "key",
    content: "参数的键名。"
  }, {
    heading: "返回值-8",
    content: "true：参数已启用。"
  }, {
    heading: "返回值-8",
    content: "false：参数未启用或不存在。"
  }, {
    heading: "所属接口类-8",
    content: "IVideoEffectObject"
  }, {
    heading: "getvideoeffectfloatparam",
    content: "获取视频特效中指定参数的 float 类型值。"
  }, {
    heading: "自从-5",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "option-1",
    content: "参数类别的标识符。"
  }, {
    heading: "key-1",
    content: "参数的键名。"
  }, {
    heading: "返回值-9",
    content: "方法调用成功，返回当前的 float 值。"
  }, {
    heading: "返回值-9",
    content: "方法调用失败，返回 0.0f。"
  }, {
    heading: "所属接口类-9",
    content: "IVideoEffectObject"
  }, {
    heading: "getvideoeffectintparam",
    content: "获取视频特效中的整数类型参数。"
  }, {
    heading: "自从-6",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "option-2",
    content: "参数类别的标识符。"
  }, {
    heading: "key-2",
    content: "参数的键名。"
  }, {
    heading: "返回值-10",
    content: "方法调用成功，返回当前参数值。"
  }, {
    heading: "返回值-10",
    content: "方法调用失败，返回 0。"
  }, {
    heading: "所属接口类-10",
    content: "IVideoEffectObject"
  }, {
    heading: "performvideoeffectaction",
    content: "对指定的视频特效节点执行操作。"
  }, {
    heading: "自从-7",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "nodeid-1",
    content: "视频特效节点的唯一标识符。"
  }, {
    heading: "actionid",
    content: "要在视频特效节点上执行的操作，详见 VIDEO\\_EFFECT\\_ACTION。"
  }, {
    heading: "返回值-11",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-11",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-11",
    content: "IVideoEffectObject"
  }, {
    heading: "removevideoeffect",
    content: "移除指定节点 ID 的视频特效节点。"
  }, {
    heading: "自从-8",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "nodeid-2",
    content: "要移除的视频特效节点的唯一标识符。"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-12",
    content: "IVideoEffectObject"
  }, {
    heading: "setbeautyeffectoptions-12",
    content: "设置美颜特效功能及其参数。"
  }, {
    heading: "自从-9",
    content: "自 v2.4.0 版本新增。"
  }, {
    heading: "自从-9",
    content: "注："
  }, {
    heading: "自从-9",
    content: "此方法仅适用于 Android 5.0 或更高版本。"
  }, {
    heading: "自从-9",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "自从-9",
    content: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
  }, {
    heading: "调用时机-4",
    content: "在调用 enableVideo 或 `startPreview` 之后调用此方法。"
  }, {
    heading: "enabled",
    content: "是否启用美颜特效功能："
  }, {
    heading: "enabled",
    content: "true：启用美颜特效功能。"
  }, {
    heading: "enabled",
    content: "false：（默认）禁用美颜特效功能。"
  }, {
    heading: "options",
    content: "美颜特效参数。详见 BeautyOptions。"
  }, {
    heading: "返回值-13",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-13",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-13",
    content: "-4：当前设备不支持该功能。可能的原因包括："
  }, {
    heading: "返回值-13",
    content: "当前设备能力不满足美颜特效的要求。声网建议更换为高性能设备。"
  }, {
    heading: "返回值-13",
    content: "当前设备版本低于 Android 5.0，不支持该功能。声网建议更换设备或升级操作系统。"
  }, {
    heading: "所属接口类-13",
    content: "RtcEngine"
  }, {
    heading: "setbeautyeffectoptions-22",
    content: "设置美颜特效选项并指定媒体源。"
  }, {
    heading: "自从-10",
    content: "自 v2.4.0 版本新增。"
  }, {
    heading: "自从-10",
    content: "该方法用于启用或禁用美颜特效功能，并设置相关选项。与 setBeautyEffectOptions \\[1/2] 方法类似，但该方法允许你指定应用美颜特效的媒体源类型。"
  }, {
    heading: "调用时机-5",
    content: "在调用 enableVideo 或 `startPreview` 之后调用该方法。"
  }, {
    heading: "enabled-1",
    content: "是否启用美颜特效功能："
  }, {
    heading: "enabled-1",
    content: "true：启用美颜特效功能。"
  }, {
    heading: "enabled-1",
    content: "false：（默认）禁用美颜特效功能。"
  }, {
    heading: "options-1",
    content: "美颜特效选项。详见 BeautyOptions。"
  }, {
    heading: "sourcetype-3",
    content: "应用美颜特效效果的媒体源类型。详见 MediaSourceType。"
  }, {
    heading: "sourcetype-3",
    content: "注： 该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-3",
    content: "默认值为 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-3",
    content: "如果使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-14",
    content: "-4：当前设备不支持该功能。可能原因包括："
  }, {
    heading: "返回值-14",
    content: "当前设备的性能不满足美颜特效的要求，建议更换为高性能设备。"
  }, {
    heading: "返回值-14",
    content: "当前设备的系统版本低于 Android 5.0，不支持该功能，建议更换设备或升级操作系统。"
  }, {
    heading: "所属接口类-14",
    content: "RtcEngine"
  }, {
    heading: "setcolorenhanceoptions-12",
    content: "设置色彩增强功能。"
  }, {
    heading: "自从-11",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "自从-11",
    content: "摄像头采集的视频图像可能存在色彩失真。该功能可智能调整视频的饱和度和对比度等参数，从而提升视频的色彩丰富度和还原度，使画面更加生动。"
  }, {
    heading: "自从-11",
    content: "注："
  }, {
    heading: "自从-11",
    content: "请在调用 enableVideo 方法之后调用此方法。"
  }, {
    heading: "自从-11",
    content: "色彩增强功能对设备性能有一定要求。开启该功能后，如果设备出现严重发热问题，声网建议你降低色彩增强等级以减少性能消耗，或关闭该功能。"
  }, {
    heading: "自从-11",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，将无法正常启用该功能。"
  }, {
    heading: "enabled-2",
    content: "是否启用色彩增强功能："
  }, {
    heading: "enabled-2",
    content: "true：启用色彩增强。"
  }, {
    heading: "enabled-2",
    content: "false：（默认）关闭色彩增强。"
  }, {
    heading: "options-2",
    content: "色彩增强选项。详见 ColorEnhanceOptions。"
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
    heading: "setcolorenhanceoptions-22",
    content: "设置色彩增强选项并指定媒体源。"
  }, {
    heading: "自从-12",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "自从-12",
    content: "摄像头采集的视频图像可能存在色彩失真。色彩增强功能可智能调整视频的饱和度和对比度等参数，从而提升视频的色彩丰富度和还原度，使画面更加生动。该方法与 setColorEnhanceOptions \\[1/2] 功能相同，但允许你指定应用色彩增强的媒体源类型。"
  }, {
    heading: "自从-12",
    content: "注："
  }, {
    heading: "自从-12",
    content: "请在调用 enableVideo 后调用此方法。"
  }, {
    heading: "自从-12",
    content: "色彩增强功能对设备性能有一定要求。开启该功能后，如设备出现严重发热，声网建议你降低色彩增强等级以减少性能消耗，或关闭该功能。"
  }, {
    heading: "自从-12",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。若该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "enabled-3",
    content: "是否启用色彩增强："
  }, {
    heading: "enabled-3",
    content: "true：启用色彩增强。"
  }, {
    heading: "enabled-3",
    content: "false：（默认）关闭色彩增强。"
  }, {
    heading: "options-3",
    content: "色彩增强选项。详见 ColorEnhanceOptions。"
  }, {
    heading: "sourcetype-4",
    content: "媒体源类型。详见 MediaSourceType。"
  }, {
    heading: "sourcetype-4",
    content: "注： 该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-4",
    content: "默认值为 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-4",
    content: "如果使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。"
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
    heading: "setfaceshapeareaoptions-12",
    content: "设置面部区域的美颜特效选项并指定媒体源。"
  }, {
    heading: "setfaceshapeareaoptions-12",
    content: "如果通过 `setFaceShapeBeautyOptions` 方法实现的预设美颜特效无法满足预期，你可以使用此方法设置美颜区域选项，单独微调面部的每个部分，从而实现更精细的美颜效果。该方法与 setFaceShapeAreaOptions \\[2/2] 类似，区别在于该方法支持指定应用美颜特效的媒体源。"
  }, {
    heading: "setfaceshapeareaoptions-12",
    content: "注："
  }, {
    heading: "setfaceshapeareaoptions-12",
    content: "此方法仅适用于 Android 4.4 或更高版本。"
  }, {
    heading: "setfaceshapeareaoptions-12",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "setfaceshapeareaoptions-12",
    content: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
  }, {
    heading: "调用时机-6",
    content: "在调用 `setFaceShapeBeautyOptions` 后调用此方法。"
  }, {
    heading: "options-4",
    content: "面部增强区域，详见 FaceShapeAreaOptions。"
  }, {
    heading: "sourcetype-5",
    content: "媒体源类型，详见 MediaSourceType。"
  }, {
    heading: "sourcetype-5",
    content: "注： 在此方法中，该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-5",
    content: "如果使用摄像头采集本地视频，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-5",
    content: "如果使用自定义视频源，将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。"
  }, {
    heading: "返回值-17",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-17",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-17",
    content: "-4：当前设备不支持此功能。可能原因包括："
  }, {
    heading: "返回值-17",
    content: "当前设备能力不满足美颜特效的要求。建议更换为高性能设备。"
  }, {
    heading: "返回值-17",
    content: "当前设备版本低于 Android 4.4，不支持此功能。建议更换设备或升级操作系统。"
  }, {
    heading: "所属接口类-17",
    content: "RtcEngine"
  }, {
    heading: "setfaceshapeareaoptions-22",
    content: "设置美颜增强的面部区域选项。"
  }, {
    heading: "setfaceshapeareaoptions-22",
    content: "你可以调用该方法设置面部区域选项，单独微调面部的每个部分，从而实现更精细的美颜效果。"
  }, {
    heading: "setfaceshapeareaoptions-22",
    content: "注："
  }, {
    heading: "setfaceshapeareaoptions-22",
    content: "此方法仅适用于 Android 4.4 或更高版本。"
  }, {
    heading: "setfaceshapeareaoptions-22",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "setfaceshapeareaoptions-22",
    content: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
  }, {
    heading: "调用时机-7",
    content: "请在调用 `setFaceShapeBeautyOptions` 方法之后调用此方法。"
  }, {
    heading: "options-5",
    content: "面部增强区域选项，详见 FaceShapeAreaOptions。"
  }, {
    heading: "返回值-18",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-18",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-18",
    content: "-4：当前设备不支持此功能。可能原因包括："
  }, {
    heading: "返回值-18",
    content: "当前设备的能力不满足美颜特效的要求，建议你更换为高性能设备。"
  }, {
    heading: "返回值-18",
    content: "当前设备版本低于 Android 4.4，不支持此功能，建议你更换设备或升级操作系统。"
  }, {
    heading: "所属接口类-18",
    content: "RtcEngine"
  }, {
    heading: "setfaceshapebeautyoptions-12",
    content: "设置美型效果并指定应用的媒体源。"
  }, {
    heading: "setfaceshapebeautyoptions-12",
    content: "该方法可通过预设参数一次性调整面部多个部位，实现瘦脸、放大眼睛、瘦鼻等轻度美型效果，并支持整体调节美型强度。该方法与 setFaceShapeBeautyOptions \\[2/2] 功能类似，区别在于该方法支持指定应用美型特效的媒体源。"
  }, {
    heading: "setfaceshapebeautyoptions-12",
    content: "注："
  }, {
    heading: "setfaceshapebeautyoptions-12",
    content: "此方法仅适用于 Android 4.4 或更高版本。"
  }, {
    heading: "setfaceshapebeautyoptions-12",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。若该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "setfaceshapebeautyoptions-12",
    content: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
  }, {
    heading: "调用时机-8",
    content: "在调用 enableVideo 后调用此方法。"
  }, {
    heading: "enabled-4",
    content: "是否启用美型特效："
  }, {
    heading: "enabled-4",
    content: "true：启用美型特效。"
  }, {
    heading: "enabled-4",
    content: "false：（默认）关闭美型特效。"
  }, {
    heading: "options-6",
    content: "美型风格选项，详见 FaceShapeBeautyOptions。"
  }, {
    heading: "sourcetype-6",
    content: "应用美型特效的媒体源类型，详见 MediaSourceType。"
  }, {
    heading: "sourcetype-6",
    content: "注： 该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-6",
    content: "使用摄像头采集本地视频时，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-6",
    content: "使用自定义视频源时，设置为 CUSTOM\\_VIDEO\\_SOURCE。"
  }, {
    heading: "返回值-19",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-19",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-19",
    content: "-4：当前设备不支持该功能。可能原因包括："
  }, {
    heading: "返回值-19",
    content: "当前设备能力不满足美颜特效要求，建议更换为高性能设备。"
  }, {
    heading: "返回值-19",
    content: "当前设备系统版本低于 Android 4.4，建议更换设备或升级操作系统。"
  }, {
    heading: "所属接口类-19",
    content: "RtcEngine"
  }, {
    heading: "setfaceshapebeautyoptions-22",
    content: "设置美型选项。"
  }, {
    heading: "setfaceshapebeautyoptions-22",
    content: "注："
  }, {
    heading: "setfaceshapebeautyoptions-22",
    content: "此方法仅适用于 Android 4.4 或更高版本。"
  }, {
    heading: "setfaceshapebeautyoptions-22",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "setfaceshapebeautyoptions-22",
    content: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
  }, {
    heading: "调用时机-9",
    content: "在调用 enableVideo 方法之后调用此方法。"
  }, {
    heading: "enabled-5",
    content: "是否启用美型效果："
  }, {
    heading: "enabled-5",
    content: "true：启用美型效果。"
  }, {
    heading: "enabled-5",
    content: "false：（默认）关闭美型效果。"
  }, {
    heading: "options-7",
    content: "美型风格选项，详见 FaceShapeBeautyOptions。"
  }, {
    heading: "返回值-20",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-20",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-20",
    content: "-4：当前设备不支持该功能。可能的原因包括："
  }, {
    heading: "返回值-20",
    content: "当前设备的能力不满足美颜特效的要求。建议更换为高性能设备。"
  }, {
    heading: "返回值-20",
    content: "当前设备版本低于 Android 4.4，不支持该功能。建议更换设备或升级操作系统。"
  }, {
    heading: "所属接口类-20",
    content: "RtcEngine"
  }, {
    heading: "setfiltereffectoptions-12",
    content: "设置滤镜特效参数并指定媒体源。"
  }, {
    heading: "自从-13",
    content: "自 v4.4.1 版本新增。"
  }, {
    heading: "自从-13",
    content: "该方法允许你设置滤镜特效参数，并指定滤镜特效应用的媒体源。"
  }, {
    heading: "自从-13",
    content: "注："
  }, {
    heading: "自从-13",
    content: "该方法仅适用于 Android 5.0 或更高版本。"
  }, {
    heading: "自从-13",
    content: "该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，该功能将无法正常启用。"
  }, {
    heading: "自从-13",
    content: "该功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的能力。"
  }, {
    heading: "调用时机-10",
    content: "在调用 enableVideo 之后调用该方法。"
  }, {
    heading: "enabled-6",
    content: "是否启用滤镜特效："
  }, {
    heading: "enabled-6",
    content: "true：启用。"
  }, {
    heading: "enabled-6",
    content: "false：（默认）不启用。"
  }, {
    heading: "options-8",
    content: "滤镜特效参数。详见 FilterEffectOptions。"
  }, {
    heading: "sourcetype-7",
    content: "滤镜特效应用的媒体源类型。详见 MediaSourceType。"
  }, {
    heading: "sourcetype-7",
    content: "注： 该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-7",
    content: "如果使用摄像头采集本地视频，使用默认值 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-7",
    content: "如果使用自定义视频源，设置为 CUSTOM\\_VIDEO\\_SOURCE。"
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
    heading: "setfiltereffectoptions-22",
    content: "设置滤镜特效选项。"
  }, {
    heading: "自从-14",
    content: "自 v4.4.1 版本新增。"
  }, {
    heading: "自从-14",
    content: "该方法仅适用于 Android 5.0 或更高版本。该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。该功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的能力。"
  }, {
    heading: "调用时机-11",
    content: "在调用 enableVideo 方法之后调用该方法。"
  }, {
    heading: "enabled-7",
    content: "是否启用滤镜特效："
  }, {
    heading: "enabled-7",
    content: "true：启用。"
  }, {
    heading: "enabled-7",
    content: "false：（默认）不启用。"
  }, {
    heading: "options-9",
    content: "滤镜特效选项。详见 FilterEffectOptions。"
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
    heading: "setlowlightenhanceoptions-12",
    content: "设置暗光增强功能。"
  }, {
    heading: "自从-15",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "自从-15",
    content: "注："
  }, {
    heading: "自从-15",
    content: "该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，将无法正常启用该功能。"
  }, {
    heading: "自从-15",
    content: "暗光增强功能对设备性能有一定要求。如果启用后设备出现过热，声网建议将暗光增强选项设置为较低的性能消耗等级，或关闭该功能。"
  }, {
    heading: "自从-15",
    content: "如果你希望在使用暗光增强功能时优先保证画质（LOW\\_LIGHT\\_ENHANCE\\_LEVEL\\_HIGH\\_QUALITY ），需要先调用 setVideoDenoiserOptions 实现视频降噪，具体对应关系如下："
  }, {
    heading: "自从-15",
    content: "当暗光增强设置为自动模式（LOW\\_LIGHT\\_ENHANCE\\_AUTO ）时，视频降噪需设置为优先保证画质（VIDEO\\_DENOISER\\_LEVEL\\_HIGH\\_QUALITY ）和自动模式（VIDEO\\_DENOISER\\_AUTO ）。"
  }, {
    heading: "自从-15",
    content: "当暗光增强设置为手动模式（LOW\\_LIGHT\\_ENHANCE\\_MANUAL ）时，视频降噪需设置为优先保证画质（VIDEO\\_DENOISER\\_LEVEL\\_HIGH\\_QUALITY ）和手动模式（VIDEO\\_DENOISER\\_MANUAL ）。"
  }, {
    heading: "适用场景-4",
    content: "暗光增强功能可自适应调整在背光、多云或黑暗等低光或光线不均的场景中采集的视频亮度值，恢复或突出图像细节，提升视频整体视觉效果。"
  }, {
    heading: "调用时机-12",
    content: "请在调用 enableVideo 后调用此方法。"
  }, {
    heading: "enabled-8",
    content: "是否启用暗光增强功能："
  }, {
    heading: "enabled-8",
    content: "true：启用暗光增强。"
  }, {
    heading: "enabled-8",
    content: "false：（默认）关闭暗光增强。"
  }, {
    heading: "options-10",
    content: "暗光增强选项。详见 LowLightEnhanceOptions。"
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
    heading: "setlowlightenhanceoptions-22",
    content: "设置低光增强选项并指定媒体源。"
  }, {
    heading: "自从-16",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "自从-16",
    content: "该方法用于设置低光增强选项，并允许你指定应用低光增强的媒体源类型。"
  }, {
    heading: "自从-16",
    content: "注："
  }, {
    heading: "自从-16",
    content: "该方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "自从-16",
    content: "视频降噪对设备性能有一定要求。如果你在启用视频降噪后设备出现过热，声网建议你将视频降噪选项设置为较低的性能消耗等级，或完全关闭视频降噪。"
  }, {
    heading: "适用场景-5",
    content: "适用于黑暗环境或低端视频采集设备导致图像噪点较多的场景。在实时互动中，图像噪点会占用码流资源，降低编码效率。"
  }, {
    heading: "调用时机-13",
    content: "请在调用 enableVideo 方法之后调用该方法。"
  }, {
    heading: "enabled-9",
    content: "是否启用低光增强："
  }, {
    heading: "enabled-9",
    content: "true：启用低光增强。"
  }, {
    heading: "enabled-9",
    content: "false：（默认）关闭低光增强。"
  }, {
    heading: "options-11",
    content: "低光增强选项。详见 LowLightEnhanceOptions。"
  }, {
    heading: "sourcetype-8",
    content: "媒体源类型。详见 MediaSourceType。"
  }, {
    heading: "sourcetype-8",
    content: "注： 该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-8",
    content: "默认值为 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-8",
    content: "如果你使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。"
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
    heading: "setvideodenoiseroptions-12",
    content: "设置视频降噪功能及其选项。"
  }, {
    heading: "自从-17",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "自从-17",
    content: "你可以调用该方法设置视频降噪效果的相关选项。"
  }, {
    heading: "自从-17",
    content: "注："
  }, {
    heading: "自从-17",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，将无法正常启用该功能。"
  }, {
    heading: "自从-17",
    content: "视频降噪对设备性能有一定要求。如果启用后设备出现过热，声网建议你将降噪选项调整为较低性能消耗的等级，或关闭视频降噪功能。"
  }, {
    heading: "自从-17",
    content: "如果该方法实现的降噪效果无法满足你的需求，声网建议你调用 setBeautyEffectOptions 方法启用美颜和磨皮功能，以获得更好的降噪效果。推荐用于强降噪效果的 BeautyOptions 设置如下："
  }, {
    heading: "自从-17",
    content: "lighteningContrastLevel: LIGHTENING\\_CONTRAST\\_NORMAL"
  }, {
    heading: "自从-17",
    content: "lighteningLevel: 0.0"
  }, {
    heading: "自从-17",
    content: "smoothnessLevel: 0.5"
  }, {
    heading: "自从-17",
    content: "rednessLevel: 0.0"
  }, {
    heading: "自从-17",
    content: "sharpnessLevel: 0.1"
  }, {
    heading: "适用场景-6",
    content: "在光线较暗的环境中或使用低端视频采集设备时，视频图像可能会出现明显噪点，影响视频质量。在实时互动场景中，视频噪点还会占用码流资源，降低编码效率。该方法适用于多频道场景。"
  }, {
    heading: "调用时机-14",
    content: "调用 enableVideo 方法后调用此方法。"
  }, {
    heading: "enabled-10",
    content: "是否启用视频降噪功能："
  }, {
    heading: "enabled-10",
    content: "true：启用视频降噪。"
  }, {
    heading: "enabled-10",
    content: "false：（默认）关闭视频降噪。"
  }, {
    heading: "options-12",
    content: "视频降噪选项。详见 VideoDenoiserOptions。"
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
    heading: "setvideodenoiseroptions-22",
    content: "设置视频降噪并指定媒体源。"
  }, {
    heading: "自从-18",
    content: "自 v3.6.2 版本新增。"
  }, {
    heading: "自从-18",
    content: "你可以调用此方法启用视频降噪功能并设置视频降噪效果的选项。该方法与 setVideoDenoiserOptions \\[1/2] 类似，但支持你指定应用降噪的媒体源类型。"
  }, {
    heading: "自从-18",
    content: "注："
  }, {
    heading: "自从-18",
    content: "此方法依赖美颜特效动态库 libagora\\_clear\\_vision\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "自从-18",
    content: "视频降噪对设备性能有一定要求。如果启用视频降噪后设备出现过热，声网建议你将视频降噪选项设置为较低的性能消耗等级，或完全关闭视频降噪功能。"
  }, {
    heading: "自从-18",
    content: "如果该方法实现的视频降噪效果无法满足你的需求，声网建议你调用 setBeautyEffectOptions 方法启用美颜和磨皮功能，以获得更好的视频降噪效果。推荐用于强降噪效果的 BeautyOptions 设置如下："
  }, {
    heading: "自从-18",
    content: "lighteningContrastLevel: LIGHTENING\\_CONTRAST\\_NORMAL。"
  }, {
    heading: "自从-18",
    content: "lighteningLevel: 0.0。"
  }, {
    heading: "自从-18",
    content: "smoothnessLevel: 0.5。"
  }, {
    heading: "自从-18",
    content: "rednessLevel: 0.0。"
  }, {
    heading: "自从-18",
    content: "sharpnessLevel: 0.1。"
  }, {
    heading: "适用场景-7",
    content: "光线较暗的环境和低端视频采集设备可能导致视频图像中出现明显噪点，影响视频质量。在实时互动场景中，视频噪点还会占用码流资源，降低编码效率。"
  }, {
    heading: "调用时机-15",
    content: "请在调用 enableVideo 方法之后调用此方法。"
  }, {
    heading: "enabled-11",
    content: "是否启用视频降噪功能："
  }, {
    heading: "enabled-11",
    content: "true：启用视频降噪。"
  }, {
    heading: "enabled-11",
    content: "false：（默认）关闭视频降噪。"
  }, {
    heading: "options-13",
    content: "视频降噪选项，详见 VideoDenoiserOptions。"
  }, {
    heading: "sourcetype-9",
    content: "媒体源类型，详见 MediaSourceType。"
  }, {
    heading: "sourcetype-9",
    content: "注： 在此方法中，该参数仅支持以下两种设置："
  }, {
    heading: "sourcetype-9",
    content: "默认值为 PRIMARY\\_CAMERA\\_SOURCE。"
  }, {
    heading: "sourcetype-9",
    content: "如果你使用自定义视频源，请将该参数设置为 CUSTOM\\_VIDEO\\_SOURCE。"
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
    heading: "setvideoeffectboolparam",
    content: "设置视频特效的布尔参数。"
  }, {
    heading: "自从-19",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "option-3",
    content: "参数类别的标识符。"
  }, {
    heading: "key-3",
    content: "参数的键名。"
  }, {
    heading: "value",
    content: "要设置的布尔值："
  }, {
    heading: "value",
    content: "true：设置为启用。"
  }, {
    heading: "value",
    content: "false：设置为禁用。"
  }, {
    heading: "返回值-27",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-27",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-27",
    content: "IVideoEffectObject"
  }, {
    heading: "setvideoeffectfloatparam",
    content: "设置视频特效的浮点参数。"
  }, {
    heading: "自从-20",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "option-4",
    content: "参数类别标识符。"
  }, {
    heading: "key-4",
    content: "参数键名。"
  }, {
    heading: "value-1",
    content: "要设置的浮点型参数值。"
  }, {
    heading: "返回值-28",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-28",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-28",
    content: "IVideoEffectObject"
  }, {
    heading: "setvideoeffectintparam",
    content: "设置视频特效的整数参数。"
  }, {
    heading: "自从-21",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "option-5",
    content: "参数类别的标识符。"
  }, {
    heading: "key-5",
    content: "参数的键名。"
  }, {
    heading: "value-2",
    content: "要设置的整数值。"
  }, {
    heading: "返回值-29",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-29",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-29",
    content: "IVideoEffectObject"
  }],
  headings: [{
    id: "addorupdatevideoeffect",
    content: "addOrUpdateVideoEffect"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "nodeid",
    content: "`nodeId`"
  }, {
    id: "templatename",
    content: "`templateName`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "createvideoeffectobject",
    content: "createVideoEffectObject"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "bundlepath",
    content: "`bundlePath`"
  }, {
    id: "sourcetype",
    content: "`sourceType`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "destroyvideoeffectobject",
    content: "destroyVideoEffectObject"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "videoeffectobject",
    content: "`videoEffectObject`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getfaceshapeareaoptions-12",
    content: "getFaceShapeAreaOptions [1/2]"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "shapearea",
    content: "`shapeArea`"
  }, {
    id: "sourcetype-1",
    content: "`sourceType`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "getfaceshapeareaoptions-22",
    content: "getFaceShapeAreaOptions [2/2]"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "shapearea-1",
    content: "`shapeArea`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "getfaceshapebeautyoptions-12",
    content: "getFaceShapeBeautyOptions [1/2]"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "sourcetype-2",
    content: "`sourceType`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "getfaceshapebeautyoptions-22",
    content: "getFaceShapeBeautyOptions [2/2]"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "getoptions",
    content: "getOptions"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "getvideoeffectboolparam",
    content: "getVideoEffectBoolParam"
  }, {
    id: "自从-4",
    content: "`自从`"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "option",
    content: "`option`"
  }, {
    id: "key",
    content: "`key`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "getvideoeffectfloatparam",
    content: "getVideoEffectFloatParam"
  }, {
    id: "自从-5",
    content: "`自从`"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "option-1",
    content: "`option`"
  }, {
    id: "key-1",
    content: "`key`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "getvideoeffectintparam",
    content: "getVideoEffectIntParam"
  }, {
    id: "自从-6",
    content: "`自从`"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "option-2",
    content: "`option`"
  }, {
    id: "key-2",
    content: "`key`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "performvideoeffectaction",
    content: "performVideoEffectAction"
  }, {
    id: "自从-7",
    content: "`自从`"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "nodeid-1",
    content: "`nodeId`"
  }, {
    id: "actionid",
    content: "`actionId`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "removevideoeffect",
    content: "removeVideoEffect"
  }, {
    id: "自从-8",
    content: "`自从`"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "nodeid-2",
    content: "`nodeId`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "setbeautyeffectoptions-12",
    content: "setBeautyEffectOptions [1/2]"
  }, {
    id: "自从-9",
    content: "`自从`"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "options",
    content: "`options`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "setbeautyeffectoptions-22",
    content: "setBeautyEffectOptions [2/2]"
  }, {
    id: "自从-10",
    content: "`自从`"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "enabled-1",
    content: "`enabled`"
  }, {
    id: "options-1",
    content: "`options`"
  }, {
    id: "sourcetype-3",
    content: "`sourceType`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "setcolorenhanceoptions-12",
    content: "setColorEnhanceOptions [1/2]"
  }, {
    id: "自从-11",
    content: "`自从`"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "enabled-2",
    content: "`enabled`"
  }, {
    id: "options-2",
    content: "`options`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "setcolorenhanceoptions-22",
    content: "setColorEnhanceOptions [2/2]"
  }, {
    id: "自从-12",
    content: "`自从`"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "enabled-3",
    content: "`enabled`"
  }, {
    id: "options-3",
    content: "`options`"
  }, {
    id: "sourcetype-4",
    content: "`sourceType`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "setfaceshapeareaoptions-12",
    content: "setFaceShapeAreaOptions [1/2]"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "options-4",
    content: "`options`"
  }, {
    id: "sourcetype-5",
    content: "`sourceType`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "setfaceshapeareaoptions-22",
    content: "setFaceShapeAreaOptions [2/2]"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "options-5",
    content: "`options`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "setfaceshapebeautyoptions-12",
    content: "setFaceShapeBeautyOptions [1/2]"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "enabled-4",
    content: "`enabled`"
  }, {
    id: "options-6",
    content: "`options`"
  }, {
    id: "sourcetype-6",
    content: "`sourceType`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "setfaceshapebeautyoptions-22",
    content: "setFaceShapeBeautyOptions [2/2]"
  }, {
    id: "调用时机-9",
    content: "调用时机"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "enabled-5",
    content: "`enabled`"
  }, {
    id: "options-7",
    content: "`options`"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "setfiltereffectoptions-12",
    content: "setFilterEffectOptions [1/2]"
  }, {
    id: "自从-13",
    content: "`自从`"
  }, {
    id: "调用时机-10",
    content: "调用时机"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "enabled-6",
    content: "`enabled`"
  }, {
    id: "options-8",
    content: "`options`"
  }, {
    id: "sourcetype-7",
    content: "`sourceType`"
  }, {
    id: "返回值-21",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "setfiltereffectoptions-22",
    content: "setFilterEffectOptions [2/2]"
  }, {
    id: "自从-14",
    content: "`自从`"
  }, {
    id: "调用时机-11",
    content: "调用时机"
  }, {
    id: "参数-20",
    content: "参数"
  }, {
    id: "enabled-7",
    content: "`enabled`"
  }, {
    id: "options-9",
    content: "`options`"
  }, {
    id: "返回值-22",
    content: "返回值"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "setlowlightenhanceoptions-12",
    content: "setLowlightEnhanceOptions [1/2]"
  }, {
    id: "自从-15",
    content: "`自从`"
  }, {
    id: "适用场景-4",
    content: "适用场景"
  }, {
    id: "调用时机-12",
    content: "调用时机"
  }, {
    id: "参数-21",
    content: "参数"
  }, {
    id: "enabled-8",
    content: "`enabled`"
  }, {
    id: "options-10",
    content: "`options`"
  }, {
    id: "返回值-23",
    content: "返回值"
  }, {
    id: "所属接口类-23",
    content: "所属接口类"
  }, {
    id: "setlowlightenhanceoptions-22",
    content: "setLowlightEnhanceOptions [2/2]"
  }, {
    id: "自从-16",
    content: "`自从`"
  }, {
    id: "适用场景-5",
    content: "适用场景"
  }, {
    id: "调用时机-13",
    content: "调用时机"
  }, {
    id: "参数-22",
    content: "参数"
  }, {
    id: "enabled-9",
    content: "`enabled`"
  }, {
    id: "options-11",
    content: "`options`"
  }, {
    id: "sourcetype-8",
    content: "`sourceType`"
  }, {
    id: "返回值-24",
    content: "返回值"
  }, {
    id: "所属接口类-24",
    content: "所属接口类"
  }, {
    id: "setvideodenoiseroptions-12",
    content: "setVideoDenoiserOptions [1/2]"
  }, {
    id: "自从-17",
    content: "`自从`"
  }, {
    id: "适用场景-6",
    content: "适用场景"
  }, {
    id: "调用时机-14",
    content: "调用时机"
  }, {
    id: "参数-23",
    content: "参数"
  }, {
    id: "enabled-10",
    content: "`enabled`"
  }, {
    id: "options-12",
    content: "`options`"
  }, {
    id: "返回值-25",
    content: "返回值"
  }, {
    id: "所属接口类-25",
    content: "所属接口类"
  }, {
    id: "setvideodenoiseroptions-22",
    content: "setVideoDenoiserOptions [2/2]"
  }, {
    id: "自从-18",
    content: "`自从`"
  }, {
    id: "适用场景-7",
    content: "适用场景"
  }, {
    id: "调用时机-15",
    content: "调用时机"
  }, {
    id: "参数-24",
    content: "参数"
  }, {
    id: "enabled-11",
    content: "`enabled`"
  }, {
    id: "options-13",
    content: "`options`"
  }, {
    id: "sourcetype-9",
    content: "`sourceType`"
  }, {
    id: "返回值-26",
    content: "返回值"
  }, {
    id: "所属接口类-26",
    content: "所属接口类"
  }, {
    id: "setvideoeffectboolparam",
    content: "setVideoEffectBoolParam"
  }, {
    id: "自从-19",
    content: "`自从`"
  }, {
    id: "参数-25",
    content: "参数"
  }, {
    id: "option-3",
    content: "`option`"
  }, {
    id: "key-3",
    content: "`key`"
  }, {
    id: "value",
    content: "`value`"
  }, {
    id: "返回值-27",
    content: "返回值"
  }, {
    id: "所属接口类-27",
    content: "所属接口类"
  }, {
    id: "setvideoeffectfloatparam",
    content: "setVideoEffectFloatParam"
  }, {
    id: "自从-20",
    content: "`自从`"
  }, {
    id: "参数-26",
    content: "参数"
  }, {
    id: "option-4",
    content: "`option`"
  }, {
    id: "key-4",
    content: "`key`"
  }, {
    id: "value-1",
    content: "`value`"
  }, {
    id: "返回值-28",
    content: "返回值"
  }, {
    id: "所属接口类-28",
    content: "所属接口类"
  }, {
    id: "setvideoeffectintparam",
    content: "setVideoEffectIntParam"
  }, {
    id: "自从-21",
    content: "`自从`"
  }, {
    id: "参数-27",
    content: "参数"
  }, {
    id: "option-5",
    content: "`option`"
  }, {
    id: "key-5",
    content: "`key`"
  }, {
    id: "value-2",
    content: "`value`"
  }, {
    id: "返回值-29",
    content: "返回值"
  }, {
    id: "所属接口类-29",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#addorupdatevideoeffect",
  title: _jsx(_Fragment, {
    children: "addOrUpdateVideoEffect"
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
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#nodeid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "nodeId"
    })
  })
}, {
  depth: 4,
  url: "#templatename",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "templateName"
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
  url: "#createvideoeffectobject",
  title: _jsx(_Fragment, {
    children: "createVideoEffectObject"
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
  url: "#bundlepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "bundlePath"
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
  url: "#destroyvideoeffectobject",
  title: _jsx(_Fragment, {
    children: "destroyVideoEffectObject"
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
  url: "#videoeffectobject",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "videoEffectObject"
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
  url: "#getfaceshapeareaoptions-12",
  title: _jsx(_Fragment, {
    children: "getFaceShapeAreaOptions [1/2]"
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
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#shapearea",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "shapeArea"
    })
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
  url: "#getfaceshapeareaoptions-22",
  title: _jsx(_Fragment, {
    children: "getFaceShapeAreaOptions [2/2]"
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
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#shapearea-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "shapeArea"
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
  url: "#getfaceshapebeautyoptions-12",
  title: _jsx(_Fragment, {
    children: "getFaceShapeBeautyOptions [1/2]"
  })
}, {
  depth: 3,
  url: "#适用场景-2",
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
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#sourcetype-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#getfaceshapebeautyoptions-22",
  title: _jsx(_Fragment, {
    children: "getFaceShapeBeautyOptions [2/2]"
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
  url: "#getoptions",
  title: _jsx(_Fragment, {
    children: "getOptions"
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
  url: "#getvideoeffectboolparam",
  title: _jsx(_Fragment, {
    children: "getVideoEffectBoolParam"
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
  url: "#参数-6",
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
  depth: 4,
  url: "#key",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
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
  url: "#getvideoeffectfloatparam",
  title: _jsx(_Fragment, {
    children: "getVideoEffectFloatParam"
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
  url: "#参数-7",
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
  depth: 4,
  url: "#key-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
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
  url: "#getvideoeffectintparam",
  title: _jsx(_Fragment, {
    children: "getVideoEffectIntParam"
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
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#option-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "option"
    })
  })
}, {
  depth: 4,
  url: "#key-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
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
  url: "#performvideoeffectaction",
  title: _jsx(_Fragment, {
    children: "performVideoEffectAction"
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
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#nodeid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "nodeId"
    })
  })
}, {
  depth: 4,
  url: "#actionid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "actionId"
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
  url: "#removevideoeffect",
  title: _jsx(_Fragment, {
    children: "removeVideoEffect"
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
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#nodeid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "nodeId"
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
  url: "#setbeautyeffectoptions-12",
  title: _jsx(_Fragment, {
    children: "setBeautyEffectOptions [1/2]"
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
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-11",
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
  url: "#options",
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
  url: "#setbeautyeffectoptions-22",
  title: _jsx(_Fragment, {
    children: "setBeautyEffectOptions [2/2]"
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
  url: "#调用时机-5",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-12",
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
  url: "#options-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}, {
  depth: 4,
  url: "#sourcetype-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#setcolorenhanceoptions-12",
  title: _jsx(_Fragment, {
    children: "setColorEnhanceOptions [1/2]"
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
  url: "#参数-13",
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
  depth: 4,
  url: "#options-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#setcolorenhanceoptions-22",
  title: _jsx(_Fragment, {
    children: "setColorEnhanceOptions [2/2]"
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
  url: "#参数-14",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  url: "#sourcetype-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#setfaceshapeareaoptions-12",
  title: _jsx(_Fragment, {
    children: "setFaceShapeAreaOptions [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-6",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-15",
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
  depth: 4,
  url: "#sourcetype-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#setfaceshapeareaoptions-22",
  title: _jsx(_Fragment, {
    children: "setFaceShapeAreaOptions [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-7",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-16",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#setfaceshapebeautyoptions-12",
  title: _jsx(_Fragment, {
    children: "setFaceShapeBeautyOptions [1/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-8",
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
  url: "#enabled-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
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
  depth: 4,
  url: "#sourcetype-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#setfaceshapebeautyoptions-22",
  title: _jsx(_Fragment, {
    children: "setFaceShapeBeautyOptions [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-9",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-18",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
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
  url: "#setfiltereffectoptions-12",
  title: _jsx(_Fragment, {
    children: "setFilterEffectOptions [1/2]"
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
  url: "#调用时机-10",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
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
  url: "#sourcetype-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#setfiltereffectoptions-22",
  title: _jsx(_Fragment, {
    children: "setFilterEffectOptions [2/2]"
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
  url: "#调用时机-11",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-20",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#options-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#setlowlightenhanceoptions-12",
  title: _jsx(_Fragment, {
    children: "setLowlightEnhanceOptions [1/2]"
  })
}, {
  depth: 4,
  url: "#自从-15",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#适用场景-4",
  title: _jsx(_Fragment, {
    children: "适用场景"
  })
}, {
  depth: 3,
  url: "#调用时机-12",
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
  url: "#enabled-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#options-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#setlowlightenhanceoptions-22",
  title: _jsx(_Fragment, {
    children: "setLowlightEnhanceOptions [2/2]"
  })
}, {
  depth: 4,
  url: "#自从-16",
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
  url: "#调用时机-13",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-22",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#options-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}, {
  depth: 4,
  url: "#sourcetype-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#setvideodenoiseroptions-12",
  title: _jsx(_Fragment, {
    children: "setVideoDenoiserOptions [1/2]"
  })
}, {
  depth: 4,
  url: "#自从-17",
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
  url: "#调用时机-14",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-23",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#options-12",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
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
  url: "#setvideodenoiseroptions-22",
  title: _jsx(_Fragment, {
    children: "setVideoDenoiserOptions [2/2]"
  })
}, {
  depth: 4,
  url: "#自从-18",
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
  url: "#调用时机-15",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-24",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#enabled-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enabled"
    })
  })
}, {
  depth: 4,
  url: "#options-13",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "options"
    })
  })
}, {
  depth: 4,
  url: "#sourcetype-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "sourceType"
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
  url: "#setvideoeffectboolparam",
  title: _jsx(_Fragment, {
    children: "setVideoEffectBoolParam"
  })
}, {
  depth: 4,
  url: "#自从-19",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-25",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#option-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "option"
    })
  })
}, {
  depth: 4,
  url: "#key-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
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
  url: "#setvideoeffectfloatparam",
  title: _jsx(_Fragment, {
    children: "setVideoEffectFloatParam"
  })
}, {
  depth: 4,
  url: "#自从-20",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-26",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#option-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "option"
    })
  })
}, {
  depth: 4,
  url: "#key-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
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
  url: "#setvideoeffectintparam",
  title: _jsx(_Fragment, {
    children: "setVideoEffectIntParam"
  })
}, {
  depth: 4,
  url: "#自从-21",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-27",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#option-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "option"
    })
  })
}, {
  depth: 4,
  url: "#key-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "key"
    })
  })
}, {
  depth: 4,
  url: "#value-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "value"
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
      id: "toc_video_enhance_option"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_addorupdatevideoeffect"
    }), `
`, _jsx(_components.h2, {
      id: "addorupdatevideoeffect",
      children: "addOrUpdateVideoEffect"
    }), `
`, _jsx(_components.p, {
      children: "为指定的视频特效节点 ID 和模板添加或更新视频特效。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_addorupdatevideoeffect__prototype"
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
              children: " addOrUpdateVideoEffect"
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
              children: " nodeId, String templateName);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_addorupdatevideoeffect__detailed_desc"
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
`, _jsx(_components.p, {
      children: "注： 优先级规则："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "风格妆 (STYLE_MAKEUP) 节点优先于滤镜特效 (FILTER) 节点。"
      }), `
`, _jsx(_components.li, {
        children: "若要应用滤镜特效，必须先移除风格妆特效节点："
      }), `
`]
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
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "removeVideoEffect"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VIDEO_EFFECT_NODE_ID.STYLE_MAKEUP);"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "addOrUpdateVideoEffect"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(VIDEO_EFFECT_NODE_ID.FILTER, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"template name"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_addorupdatevideoeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "nodeid",
      children: _jsx(_components.code, {
        children: "nodeId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频特效节点的唯一标识符或标识符组合。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videoeffectnodeid",
        children: "VIDEO_EFFECT_NODE_ID"
      }), "。例如："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "单个特效： VIDEO_EFFECT_NODE_ID.BEAUTY。"
      }), `
`, _jsx(_components.li, {
        children: "组合特效： VIDEO_EFFECT_NODE_ID.BEAUTY | VIDEO_EFFECT_NODE_ID.STYLE_MAKEUP。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "templatename",
      children: _jsx(_components.code, {
        children: "templateName"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["特效模板名称。如果设置为 ", _jsx(_components.code, {
        children: "null"
      }), " 或空字符串，SDK 会从资源包中加载默认参数配置。"]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_addorupdatevideoeffect__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createvideoeffectobject"
    }), `
`, _jsx(_components.h2, {
      id: "createvideoeffectobject",
      children: "createVideoEffectObject"
    }), `
`, _jsx(_components.p, {
      children: "创建一个 IVideoEffectObject 视频特效对象。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createvideoeffectobject__prototype"
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
              children: " IVideoEffectObject "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "createVideoEffectObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String bundlePath, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createvideoeffectobject__detailed_desc"
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
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["你必须先调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
            children: "enableVideo"
          }), " 方法再调用此方法。该方法适用于 Android 4.4 及以上版本。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createvideoeffectobject__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "bundlepath",
      children: _jsx(_components.code, {
        children: "bundlePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频特效资源包的路径。"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型，例如 ", _jsx(_components.code, {
        children: "PRIMARY_CAMERA_SOURCE"
      }), "。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_createvideoeffectobject__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
        children: "IVideoEffectObject"
      }), " 对象。 方法调用失败，返回 ", _jsx(_components.code, {
        children: "null"
      }), "。"]
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
      id: "api_irtcengine_destroyvideoeffectobject"
    }), `
`, _jsx(_components.h2, {
      id: "destroyvideoeffectobject",
      children: "destroyVideoEffectObject"
    }), `
`, _jsx(_components.p, {
      children: "销毁一个视频特效对象。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroyvideoeffectobject__prototype"
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
              children: " destroyVideoEffectObject"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(IVideoEffectObject videoEffectObject);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroyvideoeffectobject__detailed_desc"
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
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["在调用该方法前必须先调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
            children: "enableVideo"
          }), " 方法。该方法适用于 Android 4.4 及以上版本。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroyvideoeffectobject__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "videoeffectobject",
      children: _jsx(_components.code, {
        children: "videoEffectObject"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要销毁的视频特效对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
        children: "IVideoEffectObject"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_destroyvideoeffectobject__return_values"
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
      id: "api_irtcengine_getfaceshapeareaoptions"
    }), `
`, _jsx(_components.h2, {
      id: "getfaceshapeareaoptions-12",
      children: "getFaceShapeAreaOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取美颜区域的当前设置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions__prototype"
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
              children: " FaceShapeAreaOptions "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getFaceShapeAreaOptions"
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
              children: " shapeArea, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "当用户在应用中打开美型区域和塑形强度菜单时，可以调用该方法获取当前的美颜特效选项，然后根据结果刷新用户界面中的菜单并更新 UI。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "shapearea",
      children: _jsx(_components.code, {
        children: "shapeArea"
      })
    }), `
`, _jsx(_components.p, {
      children: "美颜增强区域。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NONE （-1）：（默认）无效区域，不应用美颜效果。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_HEADSCALE （100）：头部，用于实现小头效果。调整范围为 [0, 100]，值越大头部越小，默认值为 100。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FOREHEAD （101）：额头，用于调整发际线高度。调整范围为 [-100, 100]，正值抬高发际线，负值降低发际线，绝对值越大效果越明显，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FACECONTOUR （102）：脸部轮廓，用于实现瘦脸效果。调整范围为 [0, 100]，值越大瘦脸效果越明显，默认值为 10。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FACELENGTH （103）：脸长，用于拉长或缩短脸部。调整范围为 [-100, 100]，正值拉长脸部，负值缩短脸部，绝对值越大效果越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FACEWIDTH （104）：脸宽，用于实现窄脸效果。调整范围为 [0, 100]，值越大脸部越窄，默认值为 10。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_CHEEKBONE （105）：颧骨，用于调整颧骨宽度。调整范围为 [0, 100]，值越大颧骨越窄，默认值为 43。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_CHEEK （106）：面颊，用于调整面颊宽度。调整范围为 [0, 100]，值越大面颊越窄，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_CHIN （108）：下巴，用于调整下巴长度。调整范围为 [-100, 100]，正值拉长下巴，负值缩短下巴，绝对值越大效果越明显，默认值为 -20。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYESCALE （200）：眼睛，用于实现大眼效果。调整范围为 [0, 100]，值越大眼睛越大，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEDISTANCE （201）：眼距调整。范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEPOSITION （202）：眼睛位置调整。范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_LOWEREYELID （203）：下眼睑调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEPUPILS （204）：瞳孔大小调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEINNERCORNER （205）：内眼角调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEOUTERCORNER （206）：外眼角调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSELENGTH （300）：鼻子长度，用于拉长或缩短鼻子。调整范围为 [-100, 100]，正值拉长鼻子，负值缩短鼻子，绝对值越大效果越明显，默认值为 -10。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEWIDTH （301）：鼻子宽度，用于实现瘦鼻效果。调整范围为 [-100, 100]，正值加宽鼻子，负值缩窄鼻子，绝对值越大效果越明显，默认值为 72。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEWING （302）：鼻翼调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEROOT （303）：鼻根调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEBRIDGE （304）：鼻梁调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSETIP （305）：鼻尖调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEGENERAL （306）：整体鼻子调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHSCALE （400）：嘴巴，用于实现大嘴效果。调整范围为 [0, 100]，值越大嘴巴越大，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHPOSITION （401）：嘴巴位置调整。范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHSMILE （402）：嘴角微笑调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHLIP （403）：唇形调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEBROWPOSITION （500）：眉毛位置调整。范围为 [-100, 100]，默认值为 0。绝对值越大，调整越明显，负值表示相反方向。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEBROWTHICKNESS （501）：眉毛粗细调整。范围为 [0, 100]，默认值为 0。值越大，调整越明显。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-1",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "使用摄像头采集本地视频时，使用默认值 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "使用自定义视频源时，设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 FaceShapeAreaOptions 实例。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
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
      id: "api_irtcengine_getfaceshapeareaoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "getfaceshapeareaoptions-22",
      children: "getFaceShapeAreaOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取当前美颜效果区域的设置选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions2__prototype"
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
              children: " FaceShapeAreaOptions "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getFaceShapeAreaOptions"
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
              children: " shapeArea);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法获取当前美颜效果的设置选项，并根据返回结果刷新界面菜单，更新 UI。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "当用户在应用中打开美颜区域和塑形强度菜单时，可调用此方法获取当前美颜效果选项，然后根据结果刷新用户界面中的菜单并更新 UI。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 方法之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "shapearea-1",
      children: _jsx(_components.code, {
        children: "shapeArea"
      })
    }), `
`, _jsx(_components.p, {
      children: "美颜增强区域。"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NONE （-1）：（默认）无效区域，不应用美颜效果。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_HEADSCALE （100）：头部，用于实现小头效果。调整范围为 [0, 100]，值越大头部越小，默认值为 100。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FOREHEAD （101）：额头，用于调整发际线高度。调整范围为 [-100, 100]，正值抬高发际线，负值降低发际线，绝对值越大效果越明显，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FACECONTOUR （102）：脸型轮廓，用于实现瘦脸效果。调整范围为 [0, 100]，值越大瘦脸效果越明显，默认值为 10。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FACELENGTH （103）：脸长，用于实现拉长脸部效果。调整范围为 [-100, 100]，正值拉长脸部，负值缩短脸部，绝对值越大效果越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_FACEWIDTH （104）：脸宽，用于实现窄脸效果。调整范围为 [0, 100]，值越大脸部越窄，默认值为 10。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_CHEEKBONE （105）：颧骨，用于调整颧骨宽度。调整范围为 [0, 100]，值越大颧骨越窄，默认值为 43。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_CHEEK （106）：面颊，用于调整面颊宽度。调整范围为 [0, 100]，值越大面颊越窄，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_CHIN （108）：下巴，用于调整下巴长度。调整范围为 [-100, 100]，正值拉长下巴，负值缩短下巴，绝对值越大效果越明显，默认值为 -20。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYESCALE （200）：眼睛，用于实现大眼效果。调整范围为 [0, 100]，值越大眼睛越大，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEDISTANCE （201）：眼距调整。调整范围为 [-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEPOSITION （202）：眼睛位置调整。调整范围为 [-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_LOWEREYELID （203）：下眼睑调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEPUPILS （204）：瞳孔大小调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEINNERCORNER （205）：内眼角调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEOUTERCORNER （206）：外眼角调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSELENGTH （300）：鼻子长度，用于实现拉长鼻子效果。调整范围为 [-100, 100]，正值拉长鼻子，负值缩短鼻子，绝对值越大效果越明显，默认值为 -10。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEWIDTH （301）：鼻子宽度，用于实现瘦鼻效果。调整范围为 [-100, 100]，正值加宽鼻子，负值缩窄鼻子，绝对值越大效果越明显，默认值为 72。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEWING （302）：鼻翼调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEROOT （303）：鼻根调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEBRIDGE （304）：鼻梁调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSETIP （305）：鼻尖调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_NOSEGENERAL （306）：整体鼻子调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHSCALE （400）：嘴巴，用于实现大嘴效果。调整范围为 [0, 100]，值越大嘴巴越大，默认值为 50。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHPOSITION （401）：嘴巴位置调整。调整范围为 [-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHSMILE （402）：嘴角微笑调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_MOUTHLIP （403）：唇形调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEBROWPOSITION （500）：眉毛位置调整。调整范围为 [-100, 100]，负值表示相反方向，绝对值越大调整越明显，默认值为 0。"
      }), `
`, _jsx(_components.li, {
        children: "FACE_SHAPE_AREA_EYEBROWTHICKNESS （501）：眉毛粗细调整。调整范围为 [0, 100]，值越大调整越明显，默认值为 0。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapeareaoptions2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 FaceShapeAreaOptions 实例。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
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
      id: "api_irtcengine_getfaceshapebeautyoptions"
    }), `
`, _jsx(_components.h2, {
      id: "getfaceshapebeautyoptions-12",
      children: "getFaceShapeBeautyOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取当前的美颜特效设置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions__prototype"
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
              children: " FaceShapeBeautyOptions "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getFaceShapeBeautyOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "当用户在应用中打开美颜风格和风格强度菜单时，可以调用此方法，并根据返回结果刷新菜单和更新 UI。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "当用户在应用中打开美型风格和风格强度菜单时，可以调用该方法获取当前的美型选项，然后根据结果刷新用户界面中的菜单，并更新 UI。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-2",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果使用摄像头采集本地视频，使用默认值 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "如果使用自定义视频源，设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapebeautyoptions",
        children: "FaceShapeBeautyOptions"
      }), " 实例。 方法调用失败，返回 ", _jsx(_components.code, {
        children: "null"
      }), "。"]
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
      id: "api_irtcengine_getfaceshapebeautyoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "getfaceshapebeautyoptions-22",
      children: "getFaceShapeBeautyOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "获取当前的美颜特效设置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions2__prototype"
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
              children: " FaceShapeBeautyOptions "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getFaceShapeBeautyOptions"
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
      id: "api_irtcengine_getfaceshapebeautyoptions2__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "当用户在应用中打开美型和风格强度菜单时，可以调用此方法获取当前的美颜特效设置，然后根据结果刷新用户界面中的菜单，并更新 UI。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getfaceshapebeautyoptions2__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回 FaceShapeBeautyOptions 实例。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 null。"
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
      id: "api_watermarkconfig_getoptions"
    }), `
`, _jsx(_components.h2, {
      id: "getoptions",
      children: "getOptions"
    }), `
`, _jsx(_components.p, {
      children: "获取当前配置的水印显示选项。"
    }), `
`, _jsx("a", {
      id: "api_watermarkconfig_getoptions__prototype"
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
              children: " WatermarkOptions "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getOptions"
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
      id: "api_watermarkconfig_getoptions__detailed_desc"
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
      id: "api_watermarkconfig_getoptions__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkoptions",
        children: "WatermarkOptions"
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
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-watermarkconfig",
          children: "WatermarkConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectboolparam"
    }), `
`, _jsx(_components.h2, {
      id: "getvideoeffectboolparam",
      children: "getVideoEffectBoolParam"
    }), `
`, _jsx(_components.p, {
      children: "获取视频特效中的布尔类型参数。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectboolparam__prototype"
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
              children: " getVideoEffectBoolParam"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String option, String key);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectboolparam__detailed_desc"
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
      id: "api_ivideoeffectobject_getvideoeffectboolparam__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数类别的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "key",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数的键名。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectboolparam__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：参数已启用。"
      }), `
`, _jsx(_components.li, {
        children: "false：参数未启用或不存在。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectfloatparam"
    }), `
`, _jsx(_components.h2, {
      id: "getvideoeffectfloatparam",
      children: "getVideoEffectFloatParam"
    }), `
`, _jsx(_components.p, {
      children: "获取视频特效中指定参数的 float 类型值。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectfloatparam__prototype"
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
              children: "float"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getVideoEffectFloatParam"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String option, String key);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectfloatparam__detailed_desc"
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
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectfloatparam__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option-1",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数类别的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "key-1",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数的键名。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectfloatparam__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回当前的 float 值。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 0.0f。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectintparam"
    }), `
`, _jsx(_components.h2, {
      id: "getvideoeffectintparam",
      children: "getVideoEffectIntParam"
    }), `
`, _jsx(_components.p, {
      children: "获取视频特效中的整数类型参数。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectintparam__prototype"
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
              children: " getVideoEffectIntParam"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String option, String key);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectintparam__detailed_desc"
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
      id: "api_ivideoeffectobject_getvideoeffectintparam__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option-2",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数类别的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "key-2",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数的键名。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_getvideoeffectintparam__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回当前参数值。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回 0。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_performvideoeffectaction"
    }), `
`, _jsx(_components.h2, {
      id: "performvideoeffectaction",
      children: "performVideoEffectAction"
    }), `
`, _jsx(_components.p, {
      children: "对指定的视频特效节点执行操作。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_performvideoeffectaction__prototype"
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
              children: " performVideoEffectAction"
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
              children: " nodeId, VIDEO_EFFECT_ACTION actionId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_performvideoeffectaction__detailed_desc"
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
      id: "api_ivideoeffectobject_performvideoeffectaction__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "nodeid-1",
      children: _jsx(_components.code, {
        children: "nodeId"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频特效节点的唯一标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "actionid",
      children: _jsx(_components.code, {
        children: "actionId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要在视频特效节点上执行的操作，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-videoeffectaction",
        children: "VIDEO_EFFECT_ACTION"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_performvideoeffectaction__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_removevideoeffect"
    }), `
`, _jsx(_components.h2, {
      id: "removevideoeffect",
      children: "removeVideoEffect"
    }), `
`, _jsx(_components.p, {
      children: "移除指定节点 ID 的视频特效节点。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_removevideoeffect__prototype"
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
              children: " removeVideoEffect"
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
              children: " nodeId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_removevideoeffect__detailed_desc"
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
      id: "api_ivideoeffectobject_removevideoeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "nodeid-2",
      children: _jsx(_components.code, {
        children: "nodeId"
      })
    }), `
`, _jsx(_components.p, {
      children: "要移除的视频特效节点的唯一标识符。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_removevideoeffect__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions"
    }), `
`, _jsx(_components.h2, {
      id: "setbeautyeffectoptions-12",
      children: "setBeautyEffectOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置美颜特效功能及其参数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions__prototype"
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
              children: " setBeautyEffectOptions"
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
              children: " enabled, BeautyOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-9",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v2.4.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法仅适用于 Android 5.0 或更高版本。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 或 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用美颜特效功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用美颜特效功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）禁用美颜特效功能。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["美颜特效参数。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-beautyoptions",
        children: "BeautyOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["-4：当前设备不支持该功能。可能的原因包括：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "当前设备能力不满足美颜特效的要求。声网建议更换为高性能设备。"
              }), `
`, _jsx(_components.li, {
                children: "当前设备版本低于 Android 5.0，不支持该功能。声网建议更换设备或升级操作系统。"
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
      id: "api_irtcengine_setbeautyeffectoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "setbeautyeffectoptions-22",
      children: "setBeautyEffectOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置美颜特效选项并指定媒体源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions2__prototype"
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
              children: " setBeautyEffectOptions"
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
              children: " enabled, BeautyOptions options, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-10",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v2.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法用于启用或禁用美颜特效功能，并设置相关选项。与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setbeautyeffectoptions",
        children: "setBeautyEffectOptions [1/2]"
      }), " 方法类似，但该方法允许你指定应用美颜特效的媒体源类型。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 或 ", _jsx(_components.code, {
        children: "startPreview"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-1",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用美颜特效功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用美颜特效功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）禁用美颜特效功能。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-1",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["美颜特效选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-beautyoptions",
        children: "BeautyOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-3",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["应用美颜特效效果的媒体源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "默认值为 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "如果使用自定义视频源，请将该参数设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setbeautyeffectoptions2__return_values"
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
`, _jsxs(_components.li, {
            children: ["-4：当前设备不支持该功能。可能原因包括：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "当前设备的性能不满足美颜特效的要求，建议更换为高性能设备。"
              }), `
`, _jsx(_components.li, {
                children: "当前设备的系统版本低于 Android 5.0，不支持该功能，建议更换设备或升级操作系统。"
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
      id: "api_irtcengine_setcolorenhanceoptions"
    }), `
`, _jsx(_components.h2, {
      id: "setcolorenhanceoptions-12",
      children: "setColorEnhanceOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置色彩增强功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions__prototype"
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
              children: " setColorEnhanceOptions"
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
              children: " enabled, ColorEnhanceOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-11",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "摄像头采集的视频图像可能存在色彩失真。该功能可智能调整视频的饱和度和对比度等参数，从而提升视频的色彩丰富度和还原度，使画面更加生动。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在调用 enableVideo 方法之后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "色彩增强功能对设备性能有一定要求。开启该功能后，如果设备出现严重发热问题，声网建议你降低色彩增强等级以减少性能消耗，或关闭该功能。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，将无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-2",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用色彩增强功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用色彩增强。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭色彩增强。"
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
      children: ["色彩增强选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-colorenhanceoptions",
        children: "ColorEnhanceOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions__return_values"
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
      id: "api_irtcengine_setcolorenhanceoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "setcolorenhanceoptions-22",
      children: "setColorEnhanceOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置色彩增强选项并指定媒体源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions2__prototype"
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
              children: " setColorEnhanceOptions"
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
              children: " enabled, ColorEnhanceOptions options, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-12",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["摄像头采集的视频图像可能存在色彩失真。色彩增强功能可智能调整视频的饱和度和对比度等参数，从而提升视频的色彩丰富度和还原度，使画面更加生动。该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setcolorenhanceoptions",
        children: "setColorEnhanceOptions [1/2]"
      }), " 功能相同，但允许你指定应用色彩增强的媒体源类型。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在调用 enableVideo 后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "色彩增强功能对设备性能有一定要求。开启该功能后，如设备出现严重发热，声网建议你降低色彩增强等级以减少性能消耗，或关闭该功能。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。若该动态库被删除，则无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-3",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用色彩增强："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用色彩增强。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭色彩增强。"
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
      children: ["色彩增强选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-colorenhanceoptions",
        children: "ColorEnhanceOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-4",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "默认值为 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "如果使用自定义视频源，请将该参数设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setcolorenhanceoptions2__return_values"
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
      id: "api_irtcengine_setfaceshapeareaoptions"
    }), `
`, _jsx(_components.h2, {
      id: "setfaceshapeareaoptions-12",
      children: "setFaceShapeAreaOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置面部区域的美颜特效选项并指定媒体源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions__prototype"
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
              children: " setFaceShapeAreaOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(FaceShapeAreaOptions options, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果通过 ", _jsx(_components.code, {
        children: "setFaceShapeBeautyOptions"
      }), " 方法实现的预设美颜特效无法满足预期，你可以使用此方法设置美颜区域选项，单独微调面部的每个部分，从而实现更精细的美颜效果。该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapeareaoptions2",
        children: "setFaceShapeAreaOptions [2/2]"
      }), " 类似，区别在于该方法支持指定应用美颜特效的媒体源。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法仅适用于 Android 4.4 或更高版本。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "setFaceShapeBeautyOptions"
      }), " 后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "options-4",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["面部增强区域，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapeareaoptions",
        children: "FaceShapeAreaOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-5",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 在此方法中，该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果使用摄像头采集本地视频，使用默认值 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "如果使用自定义视频源，将该参数设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions__return_values"
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
`, _jsxs(_components.li, {
            children: ["-4：当前设备不支持此功能。可能原因包括：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "当前设备能力不满足美颜特效的要求。建议更换为高性能设备。"
              }), `
`, _jsx(_components.li, {
                children: "当前设备版本低于 Android 4.4，不支持此功能。建议更换设备或升级操作系统。"
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
      id: "api_irtcengine_setfaceshapeareaoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "setfaceshapeareaoptions-22",
      children: "setFaceShapeAreaOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置美颜增强的面部区域选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions2__prototype"
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
              children: " setFaceShapeAreaOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(FaceShapeAreaOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法设置面部区域选项，单独微调面部的每个部分，从而实现更精细的美颜效果。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法仅适用于 Android 4.4 或更高版本。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.code, {
        children: "setFaceShapeBeautyOptions"
      }), " 方法之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "options-5",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["面部增强区域选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapeareaoptions",
        children: "FaceShapeAreaOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapeareaoptions2__return_values"
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
`, _jsxs(_components.li, {
            children: ["-4：当前设备不支持此功能。可能原因包括：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "当前设备的能力不满足美颜特效的要求，建议你更换为高性能设备。"
              }), `
`, _jsx(_components.li, {
                children: "当前设备版本低于 Android 4.4，不支持此功能，建议你更换设备或升级操作系统。"
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
      id: "api_irtcengine_setfaceshapebeautyoptions"
    }), `
`, _jsx(_components.h2, {
      id: "setfaceshapebeautyoptions-12",
      children: "setFaceShapeBeautyOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置美型效果并指定应用的媒体源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions__prototype"
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
              children: " setFaceShapeBeautyOptions"
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
              children: " enabled, FaceShapeBeautyOptions options, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法可通过预设参数一次性调整面部多个部位，实现瘦脸、放大眼睛、瘦鼻等轻度美型效果，并支持整体调节美型强度。该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setfaceshapebeautyoptions2",
        children: "setFaceShapeBeautyOptions [2/2]"
      }), " 功能类似，区别在于该方法支持指定应用美型特效的媒体源。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法仅适用于 Android 4.4 或更高版本。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。若该动态库被删除，则无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-4",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用美型特效："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用美型特效。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭美型特效。"
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
      children: ["美型风格选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapebeautyoptions",
        children: "FaceShapeBeautyOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-6",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["应用美型特效的媒体源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "使用摄像头采集本地视频时，使用默认值 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "使用自定义视频源时，设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions__return_values"
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
`, _jsxs(_components.li, {
            children: ["-4：当前设备不支持该功能。可能原因包括：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "当前设备能力不满足美颜特效要求，建议更换为高性能设备。"
              }), `
`, _jsx(_components.li, {
                children: "当前设备系统版本低于 Android 4.4，建议更换设备或升级操作系统。"
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
      id: "api_irtcengine_setfaceshapebeautyoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "setfaceshapebeautyoptions-22",
      children: "setFaceShapeBeautyOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置美型选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions2__prototype"
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
              children: " setFaceShapeBeautyOptions"
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
              children: " enabled, FaceShapeBeautyOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions2__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法仅适用于 Android 4.4 或更高版本。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "此功能对设备性能要求较高。调用此方法时，SDK 会自动检测当前设备的能力。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-9",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 方法之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-5",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用美型效果："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用美型效果。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭美型效果。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-7",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["美型风格选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-faceshapebeautyoptions",
        children: "FaceShapeBeautyOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfaceshapebeautyoptions2__return_values"
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
`, _jsxs(_components.li, {
            children: ["-4：当前设备不支持该功能。可能的原因包括：", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "当前设备的能力不满足美颜特效的要求。建议更换为高性能设备。"
              }), `
`, _jsx(_components.li, {
                children: "当前设备版本低于 Android 4.4，不支持该功能。建议更换设备或升级操作系统。"
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
      id: "api_irtcengine_setfiltereffectoptions"
    }), `
`, _jsx(_components.h2, {
      id: "setfiltereffectoptions-12",
      children: "setFilterEffectOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置滤镜特效参数并指定媒体源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions__prototype"
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
              children: " setFilterEffectOptions"
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
              children: " enabled, FilterEffectOptions options, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-13",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.1 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "该方法允许你设置滤镜特效参数，并指定滤镜特效应用的媒体源。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法仅适用于 Android 5.0 或更高版本。"
      }), `
`, _jsx(_components.li, {
        children: "该方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，该功能将无法正常启用。"
      }), `
`, _jsx(_components.li, {
        children: "该功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的能力。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-10",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-6",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用滤镜特效："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不启用。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-8",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["滤镜特效参数。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-filtereffectoptions",
        children: "FilterEffectOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-7",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["滤镜特效应用的媒体源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果使用摄像头采集本地视频，使用默认值 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "如果使用自定义视频源，设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions__return_values"
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
      id: "api_irtcengine_setfiltereffectoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "setfiltereffectoptions-22",
      children: "setFilterEffectOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置滤镜特效选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions2__prototype"
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
              children: " setFilterEffectOptions"
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
              children: " enabled, FilterEffectOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-14",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.1 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法仅适用于 Android 5.0 或更高版本。该方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，则无法正常启用该功能。该功能对设备性能要求较高。调用该方法时，SDK 会自动检测当前设备的能力。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-11",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 方法之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-20",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-7",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用滤镜特效："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不启用。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-9",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["滤镜特效选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-filtereffectoptions",
        children: "FilterEffectOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setfiltereffectoptions2__return_values"
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
      id: "api_irtcengine_setlowlightenhanceoptions"
    }), `
`, _jsx(_components.h2, {
      id: "setlowlightenhanceoptions-12",
      children: "setLowlightEnhanceOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置暗光增强功能。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions__prototype"
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
              children: " setLowlightEnhanceOptions"
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
              children: " enabled, LowLightEnhanceOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-15",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，将无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "暗光增强功能对设备性能有一定要求。如果启用后设备出现过热，声网建议将暗光增强选项设置为较低的性能消耗等级，或关闭该功能。"
      }), `
`, _jsxs(_components.li, {
        children: ["如果你希望在使用暗光增强功能时优先保证画质（LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY ），需要先调用 setVideoDenoiserOptions 实现视频降噪，具体对应关系如下：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "当暗光增强设置为自动模式（LOW_LIGHT_ENHANCE_AUTO ）时，视频降噪需设置为优先保证画质（VIDEO_DENOISER_LEVEL_HIGH_QUALITY ）和自动模式（VIDEO_DENOISER_AUTO ）。"
          }), `
`, _jsx(_components.li, {
            children: "当暗光增强设置为手动模式（LOW_LIGHT_ENHANCE_MANUAL ）时，视频降噪需设置为优先保证画质（VIDEO_DENOISER_LEVEL_HIGH_QUALITY ）和手动模式（VIDEO_DENOISER_MANUAL ）。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-4",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "暗光增强功能可自适应调整在背光、多云或黑暗等低光或光线不均的场景中采集的视频亮度值，恢复或突出图像细节，提升视频整体视觉效果。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-12",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-21",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-8",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用暗光增强功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用暗光增强。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭暗光增强。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-10",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["暗光增强选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lowlightenhanceoptions",
        children: "LowLightEnhanceOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions__return_values"
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
      id: "api_irtcengine_setlowlightenhanceoptions2"
    }), `
`, _jsx(_components.h2, {
      id: "setlowlightenhanceoptions-22",
      children: "setLowlightEnhanceOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置低光增强选项并指定媒体源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions2__prototype"
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
              children: " setLowlightEnhanceOptions"
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
              children: " enabled, LowLightEnhanceOptions options, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-16",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "该方法用于设置低光增强选项，并允许你指定应用低光增强的媒体源类型。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "该方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "视频降噪对设备性能有一定要求。如果你在启用视频降噪后设备出现过热，声网建议你将视频降噪选项设置为较低的性能消耗等级，或完全关闭视频降噪。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-5",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "适用于黑暗环境或低端视频采集设备导致图像噪点较多的场景。在实时互动中，图像噪点会占用码流资源，降低编码效率。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-13",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 方法之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-22",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-9",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用低光增强："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用低光增强。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭低光增强。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-11",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["低光增强选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-lowlightenhanceoptions",
        children: "LowLightEnhanceOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-8",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "默认值为 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "如果你使用自定义视频源，请将该参数设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setlowlightenhanceoptions2__return_values"
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
      id: "api_irtcengine_setvideodenoiseroptions"
    }), `
`, _jsx(_components.h2, {
      id: "setvideodenoiseroptions-12",
      children: "setVideoDenoiserOptions [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置视频降噪功能及其选项。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions__prototype"
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
              children: " setVideoDenoiserOptions"
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
              children: " enabled, VideoDenoiserOptions options);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-17",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用该方法设置视频降噪效果的相关选项。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，将无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "视频降噪对设备性能有一定要求。如果启用后设备出现过热，声网建议你将降噪选项调整为较低性能消耗的等级，或关闭视频降噪功能。"
      }), `
`, _jsxs(_components.li, {
        children: ["如果该方法实现的降噪效果无法满足你的需求，声网建议你调用 setBeautyEffectOptions 方法启用美颜和磨皮功能，以获得更好的降噪效果。推荐用于强降噪效果的 BeautyOptions 设置如下：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "lighteningContrastLevel: LIGHTENING_CONTRAST_NORMAL"
          }), `
`, _jsx(_components.li, {
            children: "lighteningLevel: 0.0"
          }), `
`, _jsx(_components.li, {
            children: "smoothnessLevel: 0.5"
          }), `
`, _jsx(_components.li, {
            children: "rednessLevel: 0.0"
          }), `
`, _jsx(_components.li, {
            children: "sharpnessLevel: 0.1"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-6",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在光线较暗的环境中或使用低端视频采集设备时，视频图像可能会出现明显噪点，影响视频质量。在实时互动场景中，视频噪点还会占用码流资源，降低编码效率。该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-14",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 方法后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-23",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-10",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用视频降噪功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用视频降噪。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭视频降噪。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-12",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频降噪选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videodenoiseroptions",
        children: "VideoDenoiserOptions"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions__return_values"
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
      id: "api_irtcengine_setvideodenoiseroptions2"
    }), `
`, _jsx(_components.h2, {
      id: "setvideodenoiseroptions-22",
      children: "setVideoDenoiserOptions [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "设置视频降噪并指定媒体源。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions2__prototype"
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
              children: " setVideoDenoiserOptions"
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
              children: " enabled, VideoDenoiserOptions options, Constants.MediaSourceType sourceType);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions2__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-18",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v3.6.2 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用此方法启用视频降噪功能并设置视频降噪效果的选项。该方法与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/pre-and-post-processing/video-enhance-option#api_irtcengine_setvideodenoiseroptions",
        children: "setVideoDenoiserOptions [1/2]"
      }), " 类似，但支持你指定应用降噪的媒体源类型。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "此方法依赖美颜特效动态库 libagora_clear_vision_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`, _jsx(_components.li, {
        children: "视频降噪对设备性能有一定要求。如果启用视频降噪后设备出现过热，声网建议你将视频降噪选项设置为较低的性能消耗等级，或完全关闭视频降噪功能。"
      }), `
`, _jsxs(_components.li, {
        children: ["如果该方法实现的视频降噪效果无法满足你的需求，声网建议你调用 setBeautyEffectOptions 方法启用美颜和磨皮功能，以获得更好的视频降噪效果。推荐用于强降噪效果的 BeautyOptions 设置如下：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "lighteningContrastLevel: LIGHTENING_CONTRAST_NORMAL。"
          }), `
`, _jsx(_components.li, {
            children: "lighteningLevel: 0.0。"
          }), `
`, _jsx(_components.li, {
            children: "smoothnessLevel: 0.5。"
          }), `
`, _jsx(_components.li, {
            children: "rednessLevel: 0.0。"
          }), `
`, _jsx(_components.li, {
            children: "sharpnessLevel: 0.1。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-7",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "光线较暗的环境和低端视频采集设备可能导致视频图像中出现明显噪点，影响视频质量。在实时互动场景中，视频噪点还会占用码流资源，降低编码效率。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-15",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/video/video-basic#api_irtcengine_enablevideo",
        children: "enableVideo"
      }), " 方法之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-24",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "enabled-11",
      children: _jsx(_components.code, {
        children: "enabled"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用视频降噪功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用视频降噪。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）关闭视频降噪。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "options-13",
      children: _jsx(_components.code, {
        children: "options"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频降噪选项，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-videodenoiseroptions",
        children: "VideoDenoiserOptions"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "sourcetype-9",
      children: _jsx(_components.code, {
        children: "sourceType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体源类型，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-mediasourcetype",
        children: "MediaSourceType"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 在此方法中，该参数仅支持以下两种设置："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "默认值为 PRIMARY_CAMERA_SOURCE。"
      }), `
`, _jsx(_components.li, {
        children: "如果你使用自定义视频源，请将该参数设置为 CUSTOM_VIDEO_SOURCE。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvideodenoiseroptions2__return_values"
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
      id: "api_ivideoeffectobject_setvideoeffectboolparam"
    }), `
`, _jsx(_components.h2, {
      id: "setvideoeffectboolparam",
      children: "setVideoEffectBoolParam"
    }), `
`, _jsx(_components.p, {
      children: "设置视频特效的布尔参数。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectboolparam__prototype"
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
              children: " setVideoEffectBoolParam"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String option, String key, "
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
              children: " value);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectboolparam__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-19",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectboolparam__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-25",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option-3",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数类别的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "key-3",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数的键名。"
    }), `
`, _jsx(_components.h4, {
      id: "value",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "要设置的布尔值："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：设置为启用。"
      }), `
`, _jsx(_components.li, {
        children: "false：设置为禁用。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectboolparam__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectfloatparam"
    }), `
`, _jsx(_components.h2, {
      id: "setvideoeffectfloatparam",
      children: "setVideoEffectFloatParam"
    }), `
`, _jsx(_components.p, {
      children: "设置视频特效的浮点参数。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectfloatparam__prototype"
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
              children: " setVideoEffectFloatParam"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String option, String key, "
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
              children: " value);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectfloatparam__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-20",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectfloatparam__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-26",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option-4",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数类别标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "key-4",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数键名。"
    }), `
`, _jsx(_components.h4, {
      id: "value-1",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "要设置的浮点型参数值。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectfloatparam__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectintparam"
    }), `
`, _jsx(_components.h2, {
      id: "setvideoeffectintparam",
      children: "setVideoEffectIntParam"
    }), `
`, _jsx(_components.p, {
      children: "设置视频特效的整数参数。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectintparam__prototype"
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
              children: " setVideoEffectIntParam"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String option, String key, "
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
      id: "api_ivideoeffectobject_setvideoeffectintparam__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-21",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.6.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectintparam__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-27",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "option-5",
      children: _jsx(_components.code, {
        children: "option"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数类别的标识符。"
    }), `
`, _jsx(_components.h4, {
      id: "key-5",
      children: _jsx(_components.code, {
        children: "key"
      })
    }), `
`, _jsx(_components.p, {
      children: "参数的键名。"
    }), `
`, _jsx(_components.h4, {
      id: "value-2",
      children: _jsx(_components.code, {
        children: "value"
      })
    }), `
`, _jsx(_components.p, {
      children: "要设置的整数值。"
    }), `
`, _jsx("a", {
      id: "api_ivideoeffectobject_setvideoeffectintparam__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ivideoeffectobject",
          children: "IVideoEffectObject"
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
