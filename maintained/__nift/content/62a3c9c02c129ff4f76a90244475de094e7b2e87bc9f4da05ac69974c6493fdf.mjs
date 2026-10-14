import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "URL 拉流播放",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_rte_player" />

<a id="api_rteplayerinfo_abrsubscriptionlayer" />

## abrSubscriptionLayer [#abrsubscriptionlayer]

获取当前订阅的视频层级。

<a id="api_rteplayerinfo_abrsubscriptionlayer__prototype" />

\`\`\`java
public Constants.AbrSubscriptionLayer abrSubscriptionLayer()
\`\`\`

<a id="api_rteplayerinfo_abrsubscriptionlayer__detailed_desc" />

该方法仅在打开 RTE URL 时有效。

<a id="api_rteplayerinfo_abrsubscriptionlayer__return_values" />

### 返回值 [#返回值]

方法调用成功，返回 [AbrSubscriptionLayer](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrsubscriptionlayer) 对象。

### 所属接口类 [#所属接口类]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_canvas_addview" />

## addView [#addview]

添加一个渲染视图。

<a id="api_canvas_addview__prototype" />

\`\`\`java
public void addView(View view, ViewConfig viewConfig) throws RteException
\`\`\`

<a id="api_canvas_addview__detailed_desc" />

#### \`自从\` [#自从]

自 v4.4.0 版本新增。

当你需要使用播放器播放视频时，可以调用该方法将视图添加到视频渲染器中，以显示视频内容。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    当前仅支持一个视图。
  </CalloutDescription>
</CalloutContainer>

<a id="api_canvas_addview__scenario" />

### 适用场景 [#适用场景]

当你需要使用播放器播放视频时，可以调用此方法将视图添加到视频渲染器中，以显示视频内容。

<a id="api_canvas_addview__timing" />

### 调用时机 [#调用时机]

必须在调用 [setCanvas](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_setcanvas) 之前调用该方法。

<a id="api_canvas_addview__parameters" />

### 参数 [#参数]

#### \`view\` [#view]

\`SurfaceView\` 对象。

#### \`viewConfig\` [#viewconfig]

视图的相关设置。

<a id="api_canvas_addview__exception" />

### 异常 [#异常]

添加渲染视图失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-1]

* [Canvas](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas)

<a id="api_rteplayerinfo_audiobitspersample" />

## audioBitsPerSample [#audiobitspersample]

获取每个音频采样点的位数。

<a id="api_rteplayerinfo_audiobitspersample__prototype" />

\`\`\`java
public int audioBitsPerSample()
\`\`\`

<a id="api_rteplayerinfo_audiobitspersample__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.5.1 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [audioBitsPerSample](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiobitspersample) 仅在打开非 RTM URL 时有效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_rteplayerinfo_audiobitspersample__return_values" />

### 返回值 [#返回值-1]

方法调用成功，返回每个音频采样点的位数，单位为 bit。

### 所属接口类 [#所属接口类-2]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rteplayerinfo_audiochannels" />

## audioChannels [#audiochannels]

获取音频通道数。

<a id="api_rteplayerinfo_audiochannels__prototype" />

\`\`\`java
public int audioChannels()
\`\`\`

<a id="api_rteplayerinfo_audiochannels__detailed_desc" />

<a id="api_rteplayerinfo_audiochannels__return_values" />

### 返回值 [#返回值-2]

方法调用成功，返回音频通道数。

### 所属接口类 [#所属接口类-3]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rteplayerinfo_audiosamplerate" />

## audioSampleRate [#audiosamplerate]

获取音频采样率。

<a id="api_rteplayerinfo_audiosamplerate__prototype" />

\`\`\`java
public int audioSampleRate()
\`\`\`

<a id="api_rteplayerinfo_audiosamplerate__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.5.1 版本新增。

<a id="api_rteplayerinfo_audiosamplerate__return_values" />

### 返回值 [#返回值-3]

方法调用成功，返回音频采样率，单位为 Hz。

### 所属接口类 [#所属接口类-4]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_canvas_canvas_canvas" />

## Canvas [#canvas]

构造一个 Canvas 对象。

<a id="api_canvas_canvas_canvas__prototype" />

\`\`\`java
public Canvas(Rte rte, CanvasInitialConfig config)
\`\`\`

<a id="api_canvas_canvas_canvas__detailed_desc" />

#### \`自从\` [#自从-3]

自 v4.4.0 版本新增。

<a id="api_canvas_canvas_canvas__parameters" />

### 参数 [#参数-1]

#### \`rte\` [#rte]

用于构造 [Canvas](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas) 的 [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte) 对象，详见 [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)。

#### \`config\` [#config]

初始化配置对象。你可以传入 \`null\`。

### 所属接口类 [#所属接口类-5]

* [Canvas](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas)

<a id="api_error_code" />

## code [#code]

获取 API 调用失败时返回的错误码。

<a id="api_error_code__prototype" />

\`\`\`java
public Constants.ErrorCode code()
\`\`\`

<a id="api_error_code__detailed_desc" />

#### \`自从\` [#自从-4]

自 v4.4.0 版本新增。

<a id="api_error_code__timing" />

### 调用时机 [#调用时机-1]

你可以在 API 调用失败时调用此方法获取错误码。

<a id="api_error_code__return_values" />

### 返回值 [#返回值-4]

* 方法调用失败时，返回错误码。详见 ErrorCode。

### 所属接口类 [#所属接口类-6]

* [Error](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error)

<a id="api_rteplayerinfo_currenturl" />

## currentUrl [#currenturl]

获取当前正在播放的 URL。

<a id="api_rteplayerinfo_currenturl__prototype" />

\`\`\`java
public String currentUrl()
\`\`\`

<a id="api_rteplayerinfo_currenturl__detailed_desc" />

<a id="api_rteplayerinfo_currenturl__return_values" />

### 返回值 [#返回值-5]

方法调用成功时，返回当前正在播放的 URL。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-7]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rte_destroy_rte" />

## destroy [#destroy]

销毁 RTE 对象，释放相关资源。

<a id="api_rte_destroy_rte__prototype" />

\`\`\`java
public synchronized void destroy() throws RteException
\`\`\`

<a id="api_rte_destroy_rte__detailed_desc" />

#### \`自从\` [#自从-5]

自 v4.4.0 版本新增。

<a id="api_rte_destroy_rte__exception" />

### 异常 [#异常-1]

销毁失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-8]

* [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)

<a id="api_rteplayerinfo_duration" />

## duration [#duration]

获取当前媒体资源的时长。

<a id="api_rteplayerinfo_duration__prototype" />

\`\`\`java
public long duration()
\`\`\`

<a id="api_rteplayerinfo_duration__detailed_desc" />

#### \`自从\` [#自从-6]

自 v4.5.1 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅在播放本地媒体文件或输入在线媒体流时有效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_rteplayerinfo_duration__return_values" />

### 返回值 [#返回值-6]

方法调用成功，返回当前媒体资源的时长，单位为毫秒。

### 所属接口类 [#所属接口类-9]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rteexception_errorcode_rteexception" />

## errorCode [#errorcode]

获取 RteException 中携带的错误码。

<a id="api_rteexception_errorcode_rteexception__prototype" />

\`\`\`java
public Constants.ErrorCode errorCode()
\`\`\`

<a id="api_rteexception_errorcode_rteexception__detailed_desc" />

<a id="api_rteexception_errorcode_rteexception__return_values" />

### 返回值 [#返回值-7]

方法调用成功，返回 [ErrorCode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteerrorcode) 对象。

### 所属接口类 [#所属接口类-10]

* [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception)

<a id="api_playerconfig_getabrfallbacklayer" />

## getAbrFallbackLayer [#getabrfallbacklayer]

获取已配置的视频流回退选项。

<a id="api_playerconfig_getabrfallbacklayer__prototype" />

\`\`\`java
public Constants.AbrFallbackLayer getAbrFallbackLayer() throws RteException
\`\`\`

<a id="api_playerconfig_getabrfallbacklayer__detailed_desc" />

#### \`自从\` [#自从-7]

自 v4.4.0 版本新增。

<a id="api_playerconfig_getabrfallbacklayer__timing" />

### 调用时机 [#调用时机-2]

你必须在调用 \`getConfigs\` 之后调用此方法。

<a id="api_playerconfig_getabrfallbacklayer__exception" />

### 异常 [#异常-2]

如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

<a id="api_playerconfig_getabrfallbacklayer__return_values" />

### 返回值 [#返回值-8]

方法调用成功，返回已配置的视频流回退选项。详见 [AbrFallbackLayer](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrfallbacklayer)。

### 所属接口类 [#所属接口类-11]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_playerconfig_getabrsubscriptionlayer" />

## getAbrSubscriptionLayer [#getabrsubscriptionlayer]

获取已订阅视频流的质量层级。

<a id="api_playerconfig_getabrsubscriptionlayer__prototype" />

\`\`\`java
public Constants.AbrSubscriptionLayer getAbrSubscriptionLayer() throws RteException
\`\`\`

<a id="api_playerconfig_getabrsubscriptionlayer__detailed_desc" />

#### \`自从\` [#自从-8]

自 v4.4.0 版本新增。

<a id="api_playerconfig_getabrsubscriptionlayer__timing" />

### 调用时机 [#调用时机-3]

你需要在调用 \`getConfigs\` 方法之后调用此方法。

<a id="api_playerconfig_getabrsubscriptionlayer__exception" />

### 异常 [#异常-3]

如果方法调用失败，SDK 会抛出包含相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常。你需要捕获并处理该异常。

<a id="api_playerconfig_getabrsubscriptionlayer__return_values" />

### 返回值 [#返回值-9]

方法调用成功，返回当前设置的视频质量层级。详见 [AbrSubscriptionLayer](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrsubscriptionlayer)。

### 所属接口类 [#所属接口类-12]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_config_getappid" />

## getAppId [#getappid]

获取已设置的 App ID。

<a id="api_config_getappid__prototype" />

\`\`\`java
public String getAppId() throws RteException
\`\`\`

<a id="api_config_getappid__detailed_desc" />

#### \`自从\` [#自从-9]

自 v4.4.0 版本新增。

<a id="api_config_getappid__return_values" />

### 返回值 [#返回值-10]

方法调用成功时，返回已设置的 App ID。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-13]

* [Config](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config)

<a id="api_playerconfig_getautoplay" />

## getAutoPlay [#getautoplay]

获取媒体播放器的自动播放设置。

<a id="api_playerconfig_getautoplay__prototype" />

\`\`\`java
public boolean getAutoPlay() throws RteException
\`\`\`

<a id="api_playerconfig_getautoplay__detailed_desc" />

#### \`自从\` [#自从-10]

自 v4.4.0 版本新增。

<a id="api_playerconfig_getautoplay__timing" />

### 调用时机 [#调用时机-4]

此方法必须在调用 \`getConfigs\` 之后调用。

<a id="api_playerconfig_getautoplay__exception" />

### 异常 [#异常-4]

获取自动播放设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

<a id="api_playerconfig_getautoplay__return_values" />

### 返回值 [#返回值-11]

* true：获取成功。
* false：获取失败。

### 所属接口类 [#所属接口类-14]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_canvas_getconfigs_canvas" />

## getConfigs \\[3/3] [#getconfigs-33]

获取播放器当前的视频渲染配置。

<a id="api_canvas_getconfigs_canvas__prototype" />

\`\`\`java
public void getConfigs(CanvasConfig config) throws RteException
\`\`\`

<a id="api_canvas_getconfigs_canvas__detailed_desc" />

#### \`自从\` [#自从-11]

自 v4.4.0 版本新增。

<a id="api_canvas_getconfigs_canvas__timing" />

### 调用时机 [#调用时机-5]

你必须在调用 [Canvas](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas) 之后调用此方法。

<a id="api_canvas_getconfigs_canvas__parameters" />

### 参数 [#参数-2]

#### \`config\` [#config-1]

[Canvas](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas) 对象的设置，详见 [CanvasConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig)。

<a id="api_canvas_getconfigs_canvas__exception" />

### 异常 [#异常-5]

如果方法调用失败，SDK 会抛出包含相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception)。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-15]

* [Canvas](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas)

<a id="api_player_getconfigs_player" />

## getConfigs \\[2/3] [#getconfigs-23]

获取当前媒体播放器的配置选项。

<a id="api_player_getconfigs_player__prototype" />

\`\`\`java
public void getConfigs(PlayerConfig config) throws RteException
\`\`\`

<a id="api_player_getconfigs_player__detailed_desc" />

#### \`自从\` [#自从-12]

自 v4.4.0 版本新增。

<a id="api_player_getconfigs_player__timing" />

### 调用时机 [#调用时机-6]

该方法必须在调用 [Player](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player) 之后使用。

<a id="api_player_getconfigs_player__parameters" />

### 参数 [#参数-3]

#### \`config\` [#config-2]

媒体播放器配置对象，详见 [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)。

<a id="api_player_getconfigs_player__exception" />

### 异常 [#异常-6]

如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-16]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_rte_getconfigs_rte" />

## getConfigs \\[1/3] [#getconfigs-13]

获取 Rte 对象的配置信息。

<a id="api_rte_getconfigs_rte__prototype" />

\`\`\`java
public void getConfigs(Config config) throws RteException
\`\`\`

<a id="api_rte_getconfigs_rte__detailed_desc" />

#### \`自从\` [#自从-13]

自 v4.4.0 版本新增。

<a id="api_rte_getconfigs_rte__timing" />

### 调用时机 [#调用时机-7]

该方法必须在调用 [Rte](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_rte_rte) 之后使用。

<a id="api_rte_getconfigs_rte__parameters" />

### 参数 [#参数-4]

#### \`config\` [#config-3]

详见 [Config](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config)。

<a id="api_rte_getconfigs_rte__exception" />

### 异常 [#异常-7]

如果方法调用失败，SDK 会抛出 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 并返回相应的错误信息。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-17]

* [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)

<a id="api_rte_getfrombridge" />

## getFromBridge [#getfrombridge]

从 RtcEngine 中桥接一个 RTE 对象。

<a id="api_rte_getfrombridge__prototype" />

\`\`\`java
public static synchronized Rte getFromBridge() throws RteException
\`\`\`

<a id="api_rte_getfrombridge__detailed_desc" />

#### \`自从\` [#自从-14]

自 v4.4.0 版本新增。

通过该方法创建的 \`RTE\` 对象无需通过 [initMediaEngine](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine) 进行初始化。如果你尚未创建并初始化 \`RTC\` 引擎，可以先调用 \`RTE\` 创建一个 \`RTE\` 对象，再调用 [initMediaEngine](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine) 进行初始化。

<a id="api_rte_getfrombridge__timing" />

### 调用时机 [#调用时机-8]

调用此方法前，请确保已调用 [create \\[2/2\\]](/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize) 初始化 \`RTC\` 引擎。

<a id="api_rte_getfrombridge__exception" />

### 异常 [#异常-8]

如果方法调用失败，SDK 会抛出 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 并返回相应的错误信息。你需要捕获并处理该异常。

<a id="api_rte_getfrombridge__return_values" />

### 返回值 [#返回值-12]

方法调用成功，返回 \`RTE\` 对象。

### 所属接口类 [#所属接口类-18]

* [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)

<a id="api_player_getinfo" />

## getInfo [#getinfo]

检索与播放器和媒体流相关的信息。

<a id="api_player_getinfo__prototype" />

\`\`\`java
public void getInfo(PlayerInfo info) throws RteException
\`\`\`

<a id="api_player_getinfo__detailed_desc" />

#### \`自从\` [#自从-15]

自 v4.4.0 版本新增。

<a id="api_player_getinfo__timing" />

### 调用时机 [#调用时机-9]

该方法必须在调用 [Player](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player) 之后使用。

<a id="api_player_getinfo__parameters" />

### 参数 [#参数-5]

#### \`info\` [#info]

与播放器和媒体流相关的信息，详见 [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)。

<a id="api_player_getinfo__exception" />

### 异常 [#异常-9]

如果该方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-19]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_config_getjsonparameter_config" />

## getJsonParameter [#getjsonparameter]

获取当前设置的 JSON 格式的私有参数集。

<a id="api_config_getjsonparameter_config__prototype" />

\`\`\`java
public String getJsonParameter() throws RteException
\`\`\`

<a id="api_config_getjsonparameter_config__detailed_desc" />

#### \`自从\` [#自从-16]

自 v4.4.0 版本新增。

<a id="api_config_getjsonparameter_config__exception" />

### 异常 [#异常-10]

调用失败，SDK 会抛出 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常，你需要捕获异常并进行处理。

<a id="api_config_getjsonparameter_config__return_values" />

### 返回值 [#返回值-13]

方法调用成功时，返回已设置的 JSON 格式的参数集。 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-20]

* [Config](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config)

<a id="api_playerconfig_getloopcount" />

## getLoopCount [#getloopcount]

获取媒体文件的循环播放次数。

<a id="api_playerconfig_getloopcount__prototype" />

\`\`\`java
public int getLoopCount() throws RteException
\`\`\`

<a id="api_playerconfig_getloopcount__detailed_desc" />

#### \`自从\` [#自从-17]

自 v4.5.1 版本新增。

<a id="api_playerconfig_getloopcount__exception" />

### 异常 [#异常-11]

获取失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

<a id="api_playerconfig_getloopcount__return_values" />

### 返回值 [#返回值-14]

方法调用成功，返回媒体文件的循环播放次数。

### 所属接口类 [#所属接口类-21]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_canvasconfig_getmirrormode" />

## getVideoMirrorMode [#getvideomirrormode]

获取视频镜像模式。

<a id="api_canvasconfig_getmirrormode__prototype" />

\`\`\`java
public Constants.VideoMirrorMode getVideoMirrorMode() throws RteException
\`\`\`

<a id="api_canvasconfig_getmirrormode__detailed_desc" />

#### \`自从\` [#自从-18]

自 v4.4.0 版本新增。

<a id="api_canvasconfig_getmirrormode__exception" />

### 异常 [#异常-12]

获取视频镜像模式失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

<a id="api_canvasconfig_getmirrormode__return_values" />

### 返回值 [#返回值-15]

方法调用成功，返回视频镜像模式，详见 [VideoMirrorMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideomirrormode)。

### 所属接口类 [#所属接口类-22]

* [CanvasConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig)

<a id="api_playerconfig_getplaybackspeed" />

## getPlaybackSpeed [#getplaybackspeed]

获取播放速度参数。

<a id="api_playerconfig_getplaybackspeed__prototype" />

\`\`\`java
public int getPlaybackSpeed() throws RteException
\`\`\`

<a id="api_playerconfig_getplaybackspeed__detailed_desc" />

#### \`自从\` [#自从-19]

自 v4.5.1 版本新增。

<a id="api_playerconfig_getplaybackspeed__exception" />

### 异常 [#异常-13]

获取播放速度失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

<a id="api_playerconfig_getplaybackspeed__return_values" />

### 返回值 [#返回值-16]

方法调用成功，返回播放速度的值。

### 所属接口类 [#所属接口类-23]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_playerconfig_getplayoutvolume" />

## getPlayoutVolume [#getplayoutvolume]

获取媒体播放器的播放音量。

<a id="api_playerconfig_getplayoutvolume__prototype" />

\`\`\`java
public int getPlayoutVolume() throws RteException
\`\`\`

<a id="api_playerconfig_getplayoutvolume__detailed_desc" />

#### \`自从\` [#自从-20]

自 v4.5.1 版本新增。

<a id="api_playerconfig_getplayoutvolume__return_values" />

### 返回值 [#返回值-17]

方法调用成功，返回媒体播放器的播放音量级别。

### 所属接口类 [#所属接口类-24]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_player_getposition" />

## getPosition [#getposition]

获取当前的播放位置。

<a id="api_player_getposition__prototype" />

\`\`\`java
public long getPosition() throws RteException
\`\`\`

<a id="api_player_getposition__detailed_desc" />

#### \`自从\` [#自从-21]

自 v4.5.1 版本新增。

<a id="api_player_getposition__exception" />

### 异常 [#异常-14]

如果方法调用失败，SDK 会抛出一个 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常，并返回相应的错误信息。你需要捕获异常并进行处理。

<a id="api_player_getposition__return_values" />

### 返回值 [#返回值-18]

方法调用成功，返回当前的播放位置，单位为毫秒。

### 所属接口类 [#所属接口类-25]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_canvasconfig_getrendermode" />

## getVideoRenderMode [#getvideorendermode]

获取当前设置的视频镜像模式。

<a id="api_canvasconfig_getrendermode__prototype" />

\`\`\`java
public Constants.VideoRenderMode getVideoRenderMode() throws RteException
\`\`\`

<a id="api_canvasconfig_getrendermode__detailed_desc" />

#### \`自从\` [#自从-22]

自 v4.4.0 版本新增。

<a id="api_canvasconfig_getrendermode__timing" />

### 调用时机 [#调用时机-10]

你需要在调用 \`getConfigs\` 之后调用此方法。

<a id="api_canvasconfig_getrendermode__exception" />

### 异常 [#异常-15]

如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

<a id="api_canvasconfig_getrendermode__return_values" />

### 返回值 [#返回值-19]

方法调用成功，返回当前设置的视频镜像模式。详见 [VideoMirrorMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideomirrormode)。

### 所属接口类 [#所属接口类-26]

* [CanvasConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig)

<a id="api_player_getstats" />

## getStats [#getstats]

获取播放器当前播放媒体资源的统计信息。

<a id="api_player_getstats__prototype" />

\`\`\`java
public void getStats(PlayerGetStatsCallback callback)
\`\`\`

<a id="api_player_getstats__detailed_desc" />

#### \`自从\` [#自从-23]

自 v4.4.0 版本新增。

该方法通过回调异步返回播放器的统计信息。

<a id="api_player_getstats__timing" />

### 调用时机 [#调用时机-11]

该方法必须在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 之后调用。

<a id="api_player_getstats__parameters" />

### 参数 [#参数-6]

#### \`callback\` [#callback]

用于异步接收统计信息和错误信息的回调接口。详见 [PlayerGetStatsCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playergetstatscallback)。

### 所属接口类 [#所属接口类-27]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_rteplayerinfo_hasaudio" />

## hasAudio [#hasaudio]

判断媒体资源是否包含音频流。

<a id="api_rteplayerinfo_hasaudio__prototype" />

\`\`\`java
public boolean hasAudio()
\`\`\`

<a id="api_rteplayerinfo_hasaudio__detailed_desc" />

<a id="api_rteplayerinfo_hasaudio__return_values" />

### 返回值 [#返回值-20]

* true：媒体资源中包含音频流。
* false：媒体资源中不包含音频流。

### 所属接口类 [#所属接口类-28]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rteplayerinfo_hasvideo" />

## hasVideo [#hasvideo]

判断是否包含视频流。

<a id="api_rteplayerinfo_hasvideo__prototype" />

\`\`\`java
public boolean hasVideo()
\`\`\`

<a id="api_rteplayerinfo_hasvideo__detailed_desc" />

<a id="api_rteplayerinfo_hasvideo__return_values" />

### 返回值 [#返回值-21]

true：URL 源包含视频流。 false：URL 源不包含视频流。

### 所属接口类 [#所属接口类-29]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rte_initmediaengine" />

## initMediaEngine [#initmediaengine]

初始化 RTE 引擎。

<a id="api_rte_initmediaengine__prototype" />

\`\`\`java
public void initMediaEngine(AsyncCallback callBack) throws RteException
\`\`\`

<a id="api_rte_initmediaengine__detailed_desc" />

#### \`自从\` [#自从-24]

自 v4.4.0 版本新增。

该方法为异步方法，通过回调函数返回初始化结果。你需要在创建 \`RTE\` 对象并设置 App ID 后调用该方法。

<a id="api_rte_initmediaengine__parameters" />

### 参数 [#参数-7]

#### \`callBack\` [#callback-1]

异步返回引擎初始化结果的回调。详见 [AsyncCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_asynccallback)。

<a id="api_rte_initmediaengine__exception" />

### 异常 [#异常-16]

初始化失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-30]

* [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)

<a id="api_rteplayerinfo_isaudiomuted" />

## isAudioMuted [#isaudiomuted]

判断播放器是否停止接收远端音频流。

<a id="api_rteplayerinfo_isaudiomuted__prototype" />

\`\`\`java
public boolean isAudioMuted()
\`\`\`

<a id="api_rteplayerinfo_isaudiomuted__detailed_desc" />

#### \`自从\` [#自从-25]

自 v4.4.0 版本新增。

<a id="api_rteplayerinfo_isaudiomuted__return_values" />

### 返回值 [#返回值-22]

* true：播放器已停止接收远端音频流。
* false：播放器仍在接收远端音频流。

### 所属接口类 [#所属接口类-31]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rteplayerinfo_isvideomuted" />

## isVideoMuted [#isvideomuted]

判断播放器是否停止接收远端视频流。

<a id="api_rteplayerinfo_isvideomuted__prototype" />

\`\`\`java
public boolean isVideoMuted()
\`\`\`

<a id="api_rteplayerinfo_isvideomuted__detailed_desc" />

#### \`自从\` [#自从-26]

自 v4.4.0 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [isVideoMuted](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_isvideomuted) 接口仅在打开 RTE URL 时有效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_rteplayerinfo_isvideomuted__return_values" />

### 返回值 [#返回值-23]

* true：播放器已停止接收远端视频流。
* false：播放器仍在接收远端视频流。

### 所属接口类 [#所属接口类-32]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_error_message" />

## message [#message]

获取详细的错误信息。

<a id="api_error_message__prototype" />

\`\`\`java
public String message()
\`\`\`

<a id="api_error_message__detailed_desc" />

#### \`自从\` [#自从-27]

自 v4.4.0 版本新增。

<a id="api_error_message__timing" />

### 调用时机 [#调用时机-12]

当 API 调用失败时，可以调用该方法获取错误信息，以帮助排查问题。

<a id="api_error_message__return_values" />

### 返回值 [#返回值-24]

* 方法调用成功时，返回错误信息字符串。
* 方法调用失败，返回空字符串。

### 所属接口类 [#所属接口类-33]

* [Error](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error)

<a id="api_player_muteaudio" />

## muteAudio [#muteaudio]

开始或停止接收音频流。

<a id="api_player_muteaudio__prototype" />

\`\`\`java
public void muteAudio(boolean mute) throws RteException
\`\`\`

<a id="api_player_muteaudio__detailed_desc" />

#### \`自从\` [#自从-28]

自 v4.4.0 版本新增。

<a id="api_player_muteaudio__timing" />

### 调用时机 [#调用时机-13]

该方法需要在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 方法之后调用。

<a id="api_player_muteaudio__related" />

### 相关回调 [#相关回调]

调用该方法成功后，会触发 [onPlayerInfoUpdated](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated) 回调，上报最新的播放器和媒体拉流信息。

<a id="api_player_muteaudio__parameters" />

### 参数 [#参数-8]

#### \`mute\` [#mute]

是否接收音频流：

* true：不接收音频流。
* false：接收音频流。

<a id="api_player_muteaudio__exception" />

### 异常 [#异常-17]

方法调用失败时，SDK 会抛出包含错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-34]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_mutevideo" />

## muteVideo [#mutevideo]

开始或停止接收远端视频流。

<a id="api_player_mutevideo__prototype" />

\`\`\`java
public void muteVideo(boolean mute) throws RteException
\`\`\`

<a id="api_player_mutevideo__detailed_desc" />

#### \`自从\` [#自从-29]

自 v4.4.0 版本新增。

<a id="api_player_mutevideo__timing" />

### 调用时机 [#调用时机-14]

你必须在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 之后调用该方法。

<a id="api_player_mutevideo__related" />

### 相关回调 [#相关回调-1]

该方法调用成功后，会触发 [onPlayerInfoUpdated](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated) 回调，用于上报最新的播放器和媒体流信息。

<a id="api_player_mutevideo__parameters" />

### 参数 [#参数-9]

#### \`mute\` [#mute-1]

是否接收远端视频流：

* true：不接收远端视频流。
* false：接收远端视频流。

<a id="api_player_mutevideo__exception" />

### 异常 [#异常-18]

如果方法调用失败，SDK 会抛出带有相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-35]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_openwithurl" />

## openWithUrl [#openwithurl]

打开一个 URL 资源。

<a id="api_player_openwithurl__prototype" />

\`\`\`java
public void openWithUrl(String url, long startTime, AsyncCallback callback)
\`\`\`

<a id="api_player_openwithurl__detailed_desc" />

#### \`自从\` [#自从-30]

自 v4.4.0 版本新增。

该方法支持通过 URL 打开实时流媒体资源。如果你希望加快打开速度，可以在调用该方法前使用 [preloadWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_preloadwithurl) 预加载资源。 如果资源打开失败，你会收到 [onStateChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged) 回调，播放器状态为 \`FAILED\`。此时需要先调用 [stop](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player)，然后再次调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 重新打开资源。 如果你关闭了自动播放功能，可以在资源打开后调用 [play](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player) 开始播放。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法目前仅支持以 \`rte://\` 开头的 URL、CDN 推流 URL 和本地媒体文件。
  </CalloutDescription>
</CalloutContainer>

<a id="api_player_openwithurl__timing" />

### 调用时机 [#调用时机-15]

该方法必须在 [Player](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player) 之后调用。

<a id="api_player_openwithurl__related" />

### 相关回调 [#相关回调-2]

调用该方法后会触发 [onStateChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged) 回调，播放器状态为 \`OPENING\`，表示正在打开 URL。成功打开后，播放器状态为 \`OPEN_COMPLETED\`。

<a id="api_player_openwithurl__parameters" />

### 参数 [#参数-10]

#### \`url\` [#url]

要打开的 URL，可以是 CDN 推流 URL、本地媒体文件，或以 \`rte://\` 为前缀的 URL。

#### \`startTime\` [#starttime]

播放的起始位置，单位为毫秒。

#### \`callback\` [#callback-2]

异步通知打开 URL 资源结果的回调。你可以通过该回调的 [onResult](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_asynccallback_onresult_asynccallback) 方法获取错误信息。

### 所属接口类 [#所属接口类-36]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_pause_player" />

## pause [#pause]

暂停播放。

<a id="api_player_pause_player__prototype" />

\`\`\`java
public void pause() throws RteException
\`\`\`

<a id="api_player_pause_player__detailed_desc" />

#### \`自从\` [#自从-31]

自 v4.4.0 版本新增。

调用 [play](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player) 播放 URL 资源后，如需暂停播放，可以调用该方法。如需停止播放，请调用 [stop](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player)。

<a id="api_player_pause_player__timing" />

### 调用时机 [#调用时机-16]

该方法必须在调用 [play](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player) 之后调用。

<a id="api_player_pause_player__related" />

### 相关回调 [#相关回调-3]

成功调用该方法后，会触发 [onStateChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged) 回调，报告播放器状态为 \`PAUSED\`。

<a id="api_player_pause_player__exception" />

### 异常 [#异常-19]

如果该方法调用失败，SDK 会抛出带有相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-37]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_play_player" />

## play [#play]

播放一个 URL 资源。

<a id="api_player_play_player__prototype" />

\`\`\`java
public void play() throws RteException
\`\`\`

<a id="api_player_play_player__detailed_desc" />

#### \`自从\` [#自从-32]

自 v4.4.0 版本新增。

如果你已关闭自动播放，在使用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 成功打开一个在线媒体流后，可以调用该方法开始播放。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法当前仅支持以 \`rte://\` 为前缀的 URL。
  </CalloutDescription>
</CalloutContainer>

<a id="api_player_play_player__timing" />

### 调用时机 [#调用时机-17]

仅在收到状态为 \`OPEN_COMPLETED\` 的 [onStateChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged) 回调后调用该方法。

<a id="api_player_play_player__related" />

### 相关回调 [#相关回调-4]

调用该方法成功后，会触发 [onStateChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged) 回调以上报播放器状态。

<a id="api_player_play_player__exception" />

### 异常 [#异常-20]

如果方法调用失败，SDK 会抛出包含相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-38]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_player_player" />

## Player [#player]

构造一个 Player 播放器对象。

<a id="api_player_player_player__prototype" />

\`\`\`java
public Player(Rte rte, PlayerInitialConfig initialConfig)
\`\`\`

<a id="api_player_player_player__detailed_desc" />

#### \`自从\` [#自从-33]

自 v4.4.0 版本新增。

<a id="api_player_player_player__timing" />

### 调用时机 [#调用时机-18]

该方法必须在调用 [initMediaEngine](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine) 之后调用。

<a id="api_player_player_player__parameters" />

### 参数 [#参数-11]

#### \`rte\` [#rte-1]

一个 [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte) 对象。详见 [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)。

#### \`initialConfig\` [#initialconfig]

播放器对象的初始化设置。你可以传入 \`null\`。

### 所属接口类 [#所属接口类-39]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_preloadwithurl" />

## preloadWithUrl [#preloadwithurl]

预加载 URL 资源。

<a id="api_player_preloadwithurl__prototype" />

\`\`\`java
public static void preloadWithUrl(String url) throws RteException
\`\`\`

<a id="api_player_preloadwithurl__detailed_desc" />

#### \`自从\` [#自从-34]

自 v4.4.0 版本新增。

成功预加载资源可以加快使用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 打开 URL 资源的速度，从而减少等待时间。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法目前仅适用于以 \`rte://\` 为前缀的 URL。最多可预加载 20 个 URL，若超过限制，新预加载的 URL 会替换最早的 URL。
  </CalloutDescription>
</CalloutContainer>

<a id="api_player_preloadwithurl__scenario" />

### 适用场景 [#适用场景-1]

在打开媒体资源前预加载，可以减少用户等待时间，提供更流畅的视听体验。

<a id="api_player_preloadwithurl__timing" />

### 调用时机 [#调用时机-19]

必须在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 之前调用该方法。

<a id="api_player_preloadwithurl__parameters" />

### 参数 [#参数-12]

#### \`url\` [#url-1]

以 \`rte://\` 为前缀的 URL。各字段的详细信息参见观众端的“输入在线媒体流”。

<a id="api_player_preloadwithurl__exception" />

### 异常 [#异常-21]

如果方法调用失败，SDK 会抛出包含相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception)。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-40]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_registerobserver_player" />

## registerObserver [#registerobserver]

注册播放器的观察者对象。

<a id="api_player_registerobserver_player__prototype" />

\`\`\`java
public void registerObserver(PlayerObserver observer) throws RteException
\`\`\`

<a id="api_player_registerobserver_player__detailed_desc" />

#### \`自从\` [#自从-35]

自 v4.4.0 版本新增。

在调用此方法之前，你需要实现一个继承自 [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver) 的接口类。

<a id="api_player_registerobserver_player__timing" />

### 调用时机 [#调用时机-20]

该方法必须在调用 [Player](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player) 之后执行。

<a id="api_player_registerobserver_player__parameters" />

### 参数 [#参数-13]

#### \`observer\` [#observer]

详见 [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)。

<a id="api_player_registerobserver_player__exception" />

### 异常 [#异常-22]

如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-41]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_canvas_removeview" />

## removeView [#removeview]

移除一个渲染视图。

<a id="api_canvas_removeview__prototype" />

\`\`\`java
public void removeView(View view, ViewConfig viewConfig) throws RteException
\`\`\`

<a id="api_canvas_removeview__detailed_desc" />

#### \`自从\` [#自从-36]

自 v4.4.0 版本新增。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    每次只能移除一个视图。
  </CalloutDescription>
</CalloutContainer>

<a id="api_canvas_removeview__timing" />

### 调用时机 [#调用时机-21]

该方法必须在调用 [addView](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_addview) 之后调用。

<a id="api_canvas_removeview__parameters" />

### 参数 [#参数-14]

#### \`view\` [#view-1]

要移除的视图对象。

#### \`viewConfig\` [#viewconfig-1]

\`view\` 对象的设置。

<a id="api_canvas_removeview__return_values" />

### 返回值 [#返回值-25]

调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-42]

* [Canvas](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas)

<a id="api_rte_rte_rte" />

## Rte [#rte-2]

构造一个 Rte 对象。

<a id="api_rte_rte_rte__prototype" />

\`\`\`java
public Rte(InitialConfig initialConfig)
\`\`\`

<a id="api_rte_rte_rte__detailed_desc" />

#### \`自从\` [#自从-37]

自 v4.4.0 版本新增。

<a id="api_rte_rte_rte__timing" />

### 调用时机 [#调用时机-22]

你必须在调用 [initMediaEngine](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine) 之前调用此方法。

<a id="api_rte_rte_rte__parameters" />

### 参数 [#参数-15]

#### \`initialConfig\` [#initialconfig-1]

初始化设置。你可以传入 \`null\`。

### 所属接口类 [#所属接口类-43]

* [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)

<a id="api_player_seek" />

## seek [#seek]

跳转到指定的播放位置。

<a id="api_player_seek__prototype" />

\`\`\`java
public void seek(long newTime) throws RteException
\`\`\`

<a id="api_player_seek__detailed_desc" />

#### \`自从\` [#自从-38]

自 v4.5.1 版本新增。

<a id="api_player_seek__parameters" />

### 参数 [#参数-16]

#### \`newTime\` [#newtime]

要跳转到的播放位置，单位为毫秒。

<a id="api_player_seek__exception" />

### 异常 [#异常-23]

如果方法调用失败，SDK 会抛出一个 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-44]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_playerconfig_setabrfallbacklayer" />

## setAbrFallbackLayer [#setabrfallbacklayer]

设置已订阅远端视频流的回退选项。

<a id="api_playerconfig_setabrfallbacklayer__prototype" />

\`\`\`java
public void setAbrFallbackLayer(Constants.AbrFallbackLayer fallbackLayer) throws RteException
\`\`\`

<a id="api_playerconfig_setabrfallbacklayer__detailed_desc" />

#### \`自从\` [#自从-39]

自 v4.4.0 版本新增。

在网络状况不佳时，SDK 会将已订阅远端视频流的分辨率降级到指定的视频质量层。每个质量层对应特定的分辨率和码率。网络恢复后，SDK 会将视频流恢复至原始质量层。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果未开启 ABR 功能，视频流的回退质量层只能设置为 \`LOW\` 或 \`AUDIO_ONLY\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_playerconfig_setabrfallbacklayer__scenario" />

### 适用场景 [#适用场景-2]

一般场景下，可调用该方法并将回退质量层设置为 \`kRteAbrFallbackLow\` 或 \`kRteAbrFallbackAudioOnly\`。当网络较差时，SDK 会回退为视频小流或仅接收音频流。 如果对回退视频流的分辨率有更高要求，可[联系技术支持](https://ticket.shengwang.cn/)开启 ABR 功能。开启后，可自定义每一层的分辨率。SDK 会以你指定的最低质量层的分辨率为下限，并根据网络状况在该范围内动态调整分辨率。

<a id="api_playerconfig_setabrfallbacklayer__timing" />

### 调用时机 [#调用时机-23]

必须在调用 \`setConfigs\` 之前调用该方法。

<a id="api_playerconfig_setabrfallbacklayer__parameters" />

### 参数 [#参数-17]

#### \`fallbackLayer\` [#fallbacklayer]

视频流的回退质量层，详见 [AbrFallbackLayer](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrfallbacklayer)。

注： 自定义分辨率时，请确保视频质量层按从高到低的分辨率排序；若分辨率相同，则按帧率从高到低排序。

| 视频质量层    | 分辨率        |
| -------- | ---------- |
| \`LAYER1\` | 2160p (4K) |
| \`LAYER2\` | 1440p (2K) |
| \`LAYER3\` | 1080p (HD) |
| \`LAYER4\` | 720p (HD)  |
| \`LAYER5\` | 540p (SD)  |
| \`LAYER6\` | 480p (SD)  |

<a id="api_playerconfig_setabrfallbacklayer__exception" />

### 异常 [#异常-24]

调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-45]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_playerconfig_setabrsubscriptionlayer" />

## setAbrSubscriptionLayer [#setabrsubscriptionlayer]

设置订阅媒体流的视频质量等级。

<a id="api_playerconfig_setabrsubscriptionlayer__prototype" />

\`\`\`java
public void setAbrSubscriptionLayer(Constants.AbrSubscriptionLayer subscriptionLayer) throws RteException
\`\`\`

<a id="api_playerconfig_setabrsubscriptionlayer__detailed_desc" />

#### \`自从\` [#自从-40]

自 v4.4.0 版本新增。

你可以根据实际网络状况，在所订阅的视频流中切换不同的视频质量等级。如果你需要更高级的视频分辨率切换控制，可以[联系技术支持](https://ticket.shengwang.cn/)开启 ABR（自适应码率）功能。开启后，你可以为每个视频质量等级自定义分辨率，使观众可以根据需要在多质量层级视频流的所有等级之间切换。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果未开启 ABR 功能，你只能订阅 \`HIGH\` 或 \`LOW\` 视频质量等级。
  </CalloutDescription>
</CalloutContainer>

<a id="api_playerconfig_setabrsubscriptionlayer__scenario" />

### 适用场景 [#适用场景-3]

在网络环境不稳定的场景中，订阅端可根据实际网络状况选择合适的视频质量层级，以保障流畅的观看体验。

<a id="api_playerconfig_setabrsubscriptionlayer__timing" />

### 调用时机 [#调用时机-24]

该方法必须在调用 \`setConfigs\` 之前调用。

<a id="api_playerconfig_setabrsubscriptionlayer__parameters" />

### 参数 [#参数-18]

#### \`subscriptionLayer\` [#subscriptionlayer]

要订阅的视频质量等级，详见 [AbrSubscriptionLayer](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrsubscriptionlayer)。在自定义 \`LAYER1\` 到 \`LAYER6\` 的分辨率时，你可以参考下表，或根据实际需求进行配置： 注意：自定义分辨率时，必须按分辨率从高到低排序各视频质量等级（Layer），若分辨率相同，则按帧率从高到低排序。

| 视频质量等级   | 分辨率        |
| -------- | ---------- |
| \`LAYER1\` | 2160p (4K) |
| \`LAYER2\` | 1440p (2K) |
| \`LAYER3\` | 1080p (HD) |
| \`LAYER4\` | 720p (HD)  |
| \`LAYER5\` | 540p (SD)  |
| \`LAYER6\` | 480p (SD)  |

<a id="api_playerconfig_setabrsubscriptionlayer__exception" />

### 异常 [#异常-25]

如果方法调用失败，SDK 会抛出包含相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 异常。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-46]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_config_setappid" />

## setAppId [#setappid]

设置项目的声网 App ID。

<a id="api_config_setappid__prototype" />

\`\`\`java
public void setAppId(String appId) throws RteException
\`\`\`

<a id="api_config_setappid__detailed_desc" />

#### \`自从\` [#自从-41]

自 v4.4.0 版本新增。

<a id="api_config_setappid__timing" />

### 调用时机 [#调用时机-25]

你必须在调用 [initMediaEngine](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine) 之前调用此方法。

<a id="api_config_setappid__parameters" />

### 参数 [#参数-19]

#### \`appId\` [#appid]

声网 App ID，可从控制台获取。

<a id="api_config_setappid__exception" />

### 异常 [#异常-26]

调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-47]

* [Config](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config)

<a id="api_playerconfig_setautoplay" />

## setAutoPlay [#setautoplay]

设置是否启用自动播放。

<a id="api_playerconfig_setautoplay__prototype" />

\`\`\`java
public void setAutoPlay(boolean autoPlay) throws RteException
\`\`\`

<a id="api_playerconfig_setautoplay__detailed_desc" />

#### \`自从\` [#自从-42]

自 v4.4.0 版本新增。

你可以在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 之前调用此方法设置是否启用自动播放。如果未设置，默认启用自动播放。

<a id="api_playerconfig_setautoplay__timing" />

### 调用时机 [#调用时机-26]

此方法必须在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 之前调用。

<a id="api_playerconfig_setautoplay__parameters" />

### 参数 [#参数-20]

#### \`autoPlay\` [#autoplay]

是否启用自动播放：

* true：（默认）启用自动播放。
* false：关闭自动播放。

<a id="api_playerconfig_setautoplay__exception" />

### 异常 [#异常-27]

设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-48]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_player_setcanvas" />

## setCanvas [#setcanvas]

设置用于显示视频的视图窗口。

<a id="api_player_setcanvas__prototype" />

\`\`\`java
public void setCanvas(Canvas canvas) throws RteException
\`\`\`

<a id="api_player_setcanvas__detailed_desc" />

#### \`自从\` [#自从-43]

自 v4.4.0 版本新增。

该方法用于设置用于显示视频的 [Canvas](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas) 对象。

<a id="api_player_setcanvas__timing" />

### 调用时机 [#调用时机-27]

该方法必须在调用 [Player](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player) 之后调用。

<a id="api_player_setcanvas__parameters" />

### 参数 [#参数-21]

#### \`canvas\` [#canvas-1]

用于渲染视频帧的对象，详见 [Canvas](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas)。

<a id="api_player_setcanvas__exception" />

### 异常 [#异常-28]

如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-49]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_canvas_setconfigs_canvas" />

## setConfigs \\[3/3] [#setconfigs-33]

设置播放器的视频渲染配置。

<a id="api_canvas_setconfigs_canvas__prototype" />

\`\`\`java
public void setConfigs(CanvasConfig config) throws RteException
\`\`\`

<a id="api_canvas_setconfigs_canvas__detailed_desc" />

#### \`自从\` [#自从-44]

自 v4.4.0 版本新增。

<a id="api_canvas_setconfigs_canvas__timing" />

### 调用时机 [#调用时机-28]

该方法需要在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 之前调用。

<a id="api_canvas_setconfigs_canvas__parameters" />

### 参数 [#参数-22]

#### \`config\` [#config-4]

用于设置 [Canvas](/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas) 对象的配置，详见 [CanvasConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig)。

<a id="api_canvas_setconfigs_canvas__exception" />

### 异常 [#异常-29]

调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-50]

* [Canvas](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas)

<a id="api_player_setconfigs_player" />

## setConfigs \\[2/3] [#setconfigs-23]

设置播放器配置。

<a id="api_player_setconfigs_player__prototype" />

\`\`\`java
public void setConfigs(PlayerConfig config) throws RteException
\`\`\`

<a id="api_player_setconfigs_player__detailed_desc" />

#### \`自从\` [#自从-45]

自 v4.4.0 版本新增。

你可以调用此方法配置播放器，例如启用自动播放、订阅不同分辨率和码率的视频流。

<a id="api_player_setconfigs_player__timing" />

### 调用时机 [#调用时机-29]

此方法必须在调用 [Player](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player) 之后调用。

<a id="api_player_setconfigs_player__parameters" />

### 参数 [#参数-23]

#### \`config\` [#config-5]

播放器配置对象，详见 [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)。

<a id="api_player_setconfigs_player__exception" />

### 异常 [#异常-30]

如果方法调用失败，SDK 会抛出包含相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception)。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-51]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_rte_setconfigs_rte" />

## setConfigs \\[1/3] [#setconfigs-13]

配置 RTE 对象的信息。

<a id="api_rte_setconfigs_rte__prototype" />

\`\`\`java
public void setConfigs(Config config) throws RteException
\`\`\`

<a id="api_rte_setconfigs_rte__detailed_desc" />

#### \`自从\` [#自从-46]

自 v4.4.0 版本新增。

<a id="api_rte_setconfigs_rte__timing" />

### 调用时机 [#调用时机-30]

该方法必须在调用 [Rte](/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_rte_rte) 之后调用。

<a id="api_rte_setconfigs_rte__parameters" />

### 参数 [#参数-24]

#### \`config\` [#config-6]

用于设置 \`RTE\` 对象的配置信息，详见 [Config](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config)。

<a id="api_rte_setconfigs_rte__exception" />

### 异常 [#异常-31]

如果方法调用失败，SDK 会抛出 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception) 并返回相应的错误信息。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-52]

* [Rte](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte)

<a id="api_config_setjsonparameter_config" />

## setJsonParameter [#setjsonparameter]

通过 JSON 配置 SDK 的技术预览或定制化功能。

<a id="api_config_setjsonparameter_config__prototype" />

\`\`\`java
public void setJsonParameter(String jsonParameter) throws RteException
\`\`\`

<a id="api_config_setjsonparameter_config__detailed_desc" />

#### \`自从\` [#自从-47]

自 v4.4.0 版本新增。

<a id="api_config_setjsonparameter_config__scenario" />

### 适用场景 [#适用场景-4]

当你需要设置私有参数或使用定制化功能时，可以调用此方法。

<a id="api_config_setjsonparameter_config__timing" />

### 调用时机 [#调用时机-31]

此方法必须在调用 \`setConfigs\` 之前调用。

<a id="api_config_setjsonparameter_config__parameters" />

### 参数 [#参数-25]

#### \`jsonParameter\` [#jsonparameter]

JSON 字符串格式的参数。

<a id="api_config_setjsonparameter_config__exception" />

### 异常 [#异常-32]

如果方法调用失败，SDK 会抛出包含相应错误信息的 [RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception)。你需要捕获并处理该异常。

### 所属接口类 [#所属接口类-53]

* [Config](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config)

<a id="api_playerconfig_setloopcount" />

## setLoopCount [#setloopcount]

设置媒体文件在播放期间循环播放的次数。

<a id="api_playerconfig_setloopcount__prototype" />

\`\`\`java
public void setLoopCount(int count) throws RteException
\`\`\`

<a id="api_playerconfig_setloopcount__detailed_desc" />

#### \`自从\` [#自从-48]

自 v4.5.1 版本新增。

<a id="api_playerconfig_setloopcount__parameters" />

### 参数 [#参数-26]

#### \`count\` [#count]

媒体文件循环播放的次数：

* 1：播放一次。
* 2：播放两次。
* -1：无限循环播放，直到调用 stop 停止播放。

<a id="api_playerconfig_setloopcount__exception" />

### 异常 [#异常-33]

设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-54]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_canvasconfig_setmirrormode" />

## setVideoMirrorMode [#setvideomirrormode]

设置视频镜像模式。

<a id="api_canvasconfig_setmirrormode__prototype" />

\`\`\`java
public void setVideoMirrorMode(Constants.VideoMirrorMode mode) throws RteException
\`\`\`

<a id="api_canvasconfig_setmirrormode__detailed_desc" />

#### \`自从\` [#自从-49]

自 v4.4.0 版本新增。

你必须在调用 \`setConfigs\` 方法之前调用此方法。

<a id="api_canvasconfig_setmirrormode__timing" />

### 调用时机 [#调用时机-32]

你必须在调用 \`setConfigs\` 之前调用此方法。

<a id="api_canvasconfig_setmirrormode__parameters" />

### 参数 [#参数-27]

#### \`mode\` [#mode]

镜像模式，详见 [VideoMirrorMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideomirrormode)。默认值为 \`AUTO\`，由 SDK 自动决定镜像模式。

<a id="api_canvasconfig_setmirrormode__exception" />

### 异常 [#异常-34]

方法调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-55]

* [CanvasConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig)

<a id="api_playerconfig_setplaybackspeed" />

## setPlaybackSpeed [#setplaybackspeed]

设置播放速度参数。

<a id="api_playerconfig_setplaybackspeed__prototype" />

\`\`\`java
public void setPlaybackSpeed(int speed) throws RteException
\`\`\`

<a id="api_playerconfig_setplaybackspeed__detailed_desc" />

#### \`自从\` [#自从-50]

自 v4.5.1 版本新增。

你可以在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 后调用该方法。

<a id="api_playerconfig_setplaybackspeed__parameters" />

### 参数 [#参数-28]

#### \`speed\` [#speed]

播放速度。有效范围为 \\[50, 400]。

<a id="api_playerconfig_setplaybackspeed__exception" />

### 异常 [#异常-35]

设置播放速度失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-56]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_playerconfig_setplayoutvolume" />

## setPlayoutVolume [#setplayoutvolume]

设置播放音量参数。

<a id="api_playerconfig_setplayoutvolume__prototype" />

\`\`\`java
public void setPlayoutVolume(int volume) throws RteException
\`\`\`

<a id="api_playerconfig_setplayoutvolume__detailed_desc" />

#### \`自从\` [#自从-51]

自 v4.5.1 版本新增。

<a id="api_playerconfig_setplayoutvolume__parameters" />

### 参数 [#参数-29]

#### \`volume\` [#volume]

播放器的音量值。有效范围为 \\[0, 400]。

<a id="api_playerconfig_setplayoutvolume__exception" />

### 异常 [#异常-36]

设置播放音量失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-57]

* [PlayerConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig)

<a id="api_canvasconfig_setrendermode_canvasconfig" />

## setVideoRenderMode [#setvideorendermode]

设置视频渲染模式。

<a id="api_canvasconfig_setrendermode_canvasconfig__prototype" />

\`\`\`java
public void setVideoRenderMode(Constants.VideoRenderMode mode) throws RteException
\`\`\`

<a id="api_canvasconfig_setrendermode_canvasconfig__detailed_desc" />

#### \`自从\` [#自从-52]

自 v4.4.0 版本新增。

<a id="api_canvasconfig_setrendermode_canvasconfig__parameters" />

### 参数 [#参数-30]

#### \`mode\` [#mode-1]

要设置的视频渲染模式，详见 [VideoRenderMode](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideorendermode)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    默认值为 \`VideoRenderMode.HIDDEN\`。
  </CalloutDescription>
</CalloutContainer>

<a id="api_canvasconfig_setrendermode_canvasconfig__exception" />

### 异常 [#异常-37]

[RteException](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception)： \`RteException.errorCode()\` 可能返回以下错误码：

* ErrorCode.INVALID\\_ARGUMENT： mode 参数设置为非法值。

### 所属接口类 [#所属接口类-58]

* [CanvasConfig](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig)

<a id="api_rteplayerinfo_state" />

## state [#state]

获取当前播放器状态。

<a id="api_rteplayerinfo_state__prototype" />

\`\`\`java
public int state()
\`\`\`

<a id="api_rteplayerinfo_state__detailed_desc" />

<a id="api_rteplayerinfo_state__return_values" />

### 返回值 [#返回值-26]

方法调用成功，返回当前播放器的状态。

### 所属接口类 [#所属接口类-59]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_player_stop_player" />

## stop [#stop]

停止播放媒体资源。

<a id="api_player_stop_player__prototype" />

\`\`\`java
public void stop() throws RteException
\`\`\`

<a id="api_player_stop_player__detailed_desc" />

#### \`自从\` [#自从-53]

自 v4.4.0 版本新增。

如果使用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 打开 URL 流失败，你需要先调用该方法，然后再调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 重新打开 URL。

<a id="api_player_stop_player__timing" />

### 调用时机 [#调用时机-33]

该方法必须在调用 [openWithUrl](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl) 之后调用。

<a id="api_player_stop_player__related" />

### 相关回调 [#相关回调-5]

调用成功后，该方法会触发 [onStateChanged](/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged) 回调，并上报播放器状态为 \`STOPPED\`。

<a id="api_player_stop_player__exception" />

### 异常 [#异常-38]

如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-60]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_rteplayerinfo_streamcount" />

## streamCount [#streamcount]

获取当前播放源中的流的数量。

<a id="api_rteplayerinfo_streamcount__prototype" />

\`\`\`java
public int streamCount()
\`\`\`

<a id="api_rteplayerinfo_streamcount__detailed_desc" />

该方法仅在打开非 RTE URL 时有效。

<a id="api_rteplayerinfo_streamcount__return_values" />

### 返回值 [#返回值-27]

方法调用成功，返回流的数量。

### 所属接口类 [#所属接口类-61]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_player_switchwithurl" />

## switchWithUrl [#switchwithurl]

在播放过程中切换到新的 URL。

<a id="api_player_switchwithurl__prototype" />

\`\`\`java
public void switchWithUrl(String url, boolean syncPts, AsyncCallback callback)
\`\`\`

<a id="api_player_switchwithurl__detailed_desc" />

#### \`自从\` [#自从-54]

自 v4.5.1 版本新增。

当 SDK 返回播放器状态为 \`OPEN_COMPLETED\` 时，必须调用该方法。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该方法仅在播放器打开非 RTE URL 时有效。
  </CalloutDescription>
</CalloutContainer>

<a id="api_player_switchwithurl__parameters" />

### 参数 [#参数-31]

#### \`url\` [#url-2]

要切换的 URL 资源。

#### \`syncPts\` [#syncpts]

* true：同步播放位置。
* false：（默认）不同步播放位置。

#### \`callback\` [#callback-3]

异步通知切换操作结果的回调。你可以通过该回调的 \`err\` 参数得知操作的结果或错误码信息，详见 [AsyncCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_asynccallback)。

### 所属接口类 [#所属接口类-62]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_player_unregisterobserver_player" />

## unregisterObserver [#unregisterobserver]

取消注册媒体播放器事件观察者对象。

<a id="api_player_unregisterobserver_player__prototype" />

\`\`\`java
public void unregisterObserver(PlayerObserver observer) throws RteException
\`\`\`

<a id="api_player_unregisterobserver_player__detailed_desc" />

#### \`自从\` [#自从-55]

自 v4.4.0 版本新增。

调用 [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player) 注册媒体播放器事件观察者对象后，如需取消注册，请调用该方法。

<a id="api_player_unregisterobserver_player__timing" />

### 调用时机 [#调用时机-34]

该方法必须在调用 [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player) 之后调用。

<a id="api_player_unregisterobserver_player__parameters" />

### 参数 [#参数-32]

#### \`observer\` [#observer-1]

详见 [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)。

<a id="api_player_unregisterobserver_player__exception" />

### 异常 [#异常-39]

如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。

### 所属接口类 [#所属接口类-63]

* [Player](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player)

<a id="api_rteplayerinfo_videoheight" />

## videoHeight [#videoheight]

获取视频分辨率的高度。

<a id="api_rteplayerinfo_videoheight__prototype" />

\`\`\`java
public int videoHeight()
\`\`\`

<a id="api_rteplayerinfo_videoheight__detailed_desc" />

#### \`自从\` [#自从-56]

自 v4.5.1 版本新增。

<a id="api_rteplayerinfo_videoheight__return_values" />

### 返回值 [#返回值-28]

方法调用成功，返回视频分辨率的高度，单位为像素。

### 所属接口类 [#所属接口类-64]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="api_rteplayerinfo_videowidth" />

## videoWidth [#videowidth]

获取视频分辨率的宽度。

<a id="api_rteplayerinfo_videowidth__prototype" />

\`\`\`java
public int videoWidth()
\`\`\`

<a id="api_rteplayerinfo_videowidth__detailed_desc" />

#### \`自从\` [#自从-57]

自 v4.5.1 版本新增。

<a id="api_rteplayerinfo_videowidth__return_values" />

### 返回值 [#返回值-29]

方法调用成功，返回视频分辨率的宽度，单位为像素。

### 所属接口类 [#所属接口类-65]

* [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)

<a id="callback_playerobserver_onaudiovolumeindication_playerobserver" />

## onAudioVolumeIndication [#onaudiovolumeindication]

播放器音量变化回调。

<a id="callback_playerobserver_onaudiovolumeindication_playerobserver__prototype" />

\`\`\`java
public void onAudioVolumeIndication(int volume)
\`\`\`

<a id="callback_playerobserver_onaudiovolumeindication_playerobserver__detailed_desc" />

#### \`自从\` [#自从-58]

自 v4.4.0 版本新增。

<a id="callback_playerobserver_onaudiovolumeindication_playerobserver__timing" />

### 触发时机 [#触发时机]

该回调在播放器音量发生变化时被触发。

<a id="callback_playerobserver_onaudiovolumeindication_playerobserver__parameters" />

### 参数 [#参数-33]

#### \`volume\` [#volume-1]

播放器当前的音量，取值范围为 \\[0, 225]。

### 所属接口类 [#所属接口类-66]

* [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)

<a id="callback_playerobserver_onevent" />

## onEvent [#onevent]

播放器事件回调。

<a id="callback_playerobserver_onevent__prototype" />

\`\`\`java
public void onEvent(int event)
\`\`\`

<a id="callback_playerobserver_onevent__detailed_desc" />

#### \`自从\` [#自从-59]

自 v4.4.0 版本新增。

如果你需要监听播放器事件，必须先调用 [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player) 注册播放器观察者对象。

<a id="callback_playerobserver_onevent__timing" />

### 触发时机 [#触发时机-1]

该回调在播放器事件发生变化时被触发。

<a id="callback_playerobserver_onevent__parameters" />

### 参数 [#参数-34]

#### \`event\` [#event]

播放器事件。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    详见 [PlayerEvent](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteplayerevent)。
  </CalloutDescription>
</CalloutContainer>

### 所属接口类 [#所属接口类-67]

* [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)

<a id="callback_playerobserver_onmetadata_playerobserver" />

## onMetadata \\[2/2] [#onmetadata-22]

接收媒体流附加信息的回调。

<a id="callback_playerobserver_onmetadata_playerobserver__prototype" />

\`\`\`java
public void onMetadata(int type, byte[] data)
\`\`\`

<a id="callback_playerobserver_onmetadata_playerobserver__detailed_desc" />

#### \`自从\` [#自从-60]

自 v4.4.0 版本新增。

调用 [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player) 注册播放器观察者对象后，才能接收媒体流中的附加信息。

<a id="callback_playerobserver_onmetadata_playerobserver__timing" />

### 触发时机 [#触发时机-2]

该回调在 SDK 解析播放器正在播放的媒体流中的附加信息后触发，报告数据类型及其具体内容。

<a id="callback_playerobserver_onmetadata_playerobserver__parameters" />

### 参数 [#参数-35]

#### \`type\` [#type]

附加信息的类型：

* 0：SEI（Supplemental Enhancement Information）类型。

#### \`data\` [#data]

解析后的附加信息。

### 所属接口类 [#所属接口类-68]

* [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)

<a id="callback_playerobserver_onplayerinfoupdated_playerobserver" />

## onPlayerInfoUpdated \\[2/2] [#onplayerinfoupdated-22]

播放器和媒体流信息发生变化回调。

<a id="callback_playerobserver_onplayerinfoupdated_playerobserver__prototype" />

\`\`\`java
public void onPlayerInfoUpdated(PlayerInfo info)
\`\`\`

<a id="callback_playerobserver_onplayerinfoupdated_playerobserver__detailed_desc" />

#### \`自从\` [#自从-61]

自 v4.4.0 版本新增。

你可以调用 [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player) 注册播放器观察者对象来获取播放器和媒体流的信息，也可以直接调用 [getInfo](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getinfo) 方法获取信息。

<a id="callback_playerobserver_onplayerinfoupdated_playerobserver__timing" />

### 触发时机 [#触发时机-3]

该回调在播放器和媒体流信息发生变化时被触发。

<a id="callback_playerobserver_onplayerinfoupdated_playerobserver__parameters" />

### 参数 [#参数-36]

#### \`info\` [#info-1]

播放器及媒体流的相关信息，详见 [PlayerInfo](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo)。

### 所属接口类 [#所属接口类-69]

* [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)

<a id="callback_playerobserver_onpositionchanged_playerobserver" />

## onPositionChanged [#onpositionchanged]

播放进度变化回调。

<a id="callback_playerobserver_onpositionchanged_playerobserver__prototype" />

\`\`\`java
public void onPositionChanged(long curr_time, long utc_time)
\`\`\`

<a id="callback_playerobserver_onpositionchanged_playerobserver__detailed_desc" />

#### \`自从\` [#自从-62]

自 v4.4.0 版本新增。

<a id="callback_playerobserver_onpositionchanged_playerobserver__timing" />

### 触发时机 [#触发时机-4]

该回调在媒体资源播放过程中每秒触发一次。

<a id="callback_playerobserver_onpositionchanged_playerobserver__parameters" />

### 参数 [#参数-37]

#### \`curr_time\` [#curr_time]

当前播放进度，单位为毫秒。

#### \`utc_time\` [#utc_time]

当前 NTP（网络时间协议）时间，单位为毫秒。

### 所属接口类 [#所属接口类-70]

* [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)

<a id="callback_playerobserver_onresolutionchanged" />

## onResolutionChanged [#onresolutionchanged]

视频分辨率变化的回调。

<a id="callback_playerobserver_onresolutionchanged__prototype" />

\`\`\`java
public void onResolutionChanged(int width, int height)
\`\`\`

<a id="callback_playerobserver_onresolutionchanged__detailed_desc" />

#### \`自从\` [#自从-63]

自 v4.4.0 版本新增。

你必须先调用 [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player) 注册一个播放器观察者对象，才能监听视频流分辨率的变化。

<a id="callback_playerobserver_onresolutionchanged__timing" />

### 触发时机 [#触发时机-5]

该回调在视频流的分辨率发生变化时被触发，报告当前视频的宽度和高度。

<a id="callback_playerobserver_onresolutionchanged__parameters" />

### 参数 [#参数-38]

#### \`width\` [#width]

视频帧的宽度，单位为 px。

#### \`height\` [#height]

视频帧的高度，单位为 px。

### 所属接口类 [#所属接口类-71]

* [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)

<a id="callback_asynccallback_onresult_asynccallback" />

## onResult [#onresult]

onResult 回调，用于报告异步操作的结果。

<a id="callback_asynccallback_onresult_asynccallback__prototype" />

\`\`\`java
@CalledByNative void onResult(Error error);
\`\`\`

<a id="callback_asynccallback_onresult_asynccallback__detailed_desc" />

#### \`自从\` [#自从-64]

自 v4.4.0 版本新增。

<a id="callback_asynccallback_onresult_asynccallback__timing" />

### 触发时机 [#触发时机-6]

该回调在异步操作完成时被触发，用于报告操作结果。

<a id="callback_asynccallback_onresult_asynccallback__parameters" />

### 参数 [#参数-39]

#### \`error\` [#error]

状态码或错误码。详见 [Error](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error)。

### 所属接口类 [#所属接口类-72]

* [AsyncCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_asynccallback)

<a id="callback_playergetstatscallback_onresult_playergetstatscallback" />

## onResult [#onresult-1]

异步获取媒体资源统计信息操作完成时触发的回调。

<a id="callback_playergetstatscallback_onresult_playergetstatscallback__prototype" />

\`\`\`java
@CalledByNative void onResult(PlayerStats playerStats, Error error);
\`\`\`

<a id="callback_playergetstatscallback_onresult_playergetstatscallback__detailed_desc" />

<a id="callback_playergetstatscallback_onresult_playergetstatscallback__timing" />

### 触发时机 [#触发时机-7]

该回调在异步获取媒体资源信息的操作完成时被触发。

<a id="callback_playergetstatscallback_onresult_playergetstatscallback__parameters" />

### 参数 [#参数-40]

#### \`playerStats\` [#playerstats]

媒体资源的统计信息。详见 [PlayerStats](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteplayerstats)。

#### \`error\` [#error-1]

状态和错误信息。详见 [Error](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error)。

### 所属接口类 [#所属接口类-73]

* [PlayerGetStatsCallback](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playergetstatscallback)

<a id="callback_playerobserver_onstatechanged" />

## onStateChanged [#onstatechanged]

播放器状态变化的回调。

<a id="callback_playerobserver_onstatechanged__prototype" />

\`\`\`java
public void onStateChanged(int old_state, int new_state, Error error)
\`\`\`

<a id="callback_playerobserver_onstatechanged__detailed_desc" />

#### \`自从\` [#自从-65]

自 v4.4.0 版本新增。

如果你需要监听播放器状态的变化，必须先调用 [registerObserver](/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player) 注册播放器观察者对象。

<a id="callback_playerobserver_onstatechanged__timing" />

### 触发时机 [#触发时机-8]

该回调在播放器状态发生变化时被触发。

<a id="callback_playerobserver_onstatechanged__parameters" />

### 参数 [#参数-41]

#### \`old_state\` [#old_state]

变更前的播放器状态。详见 [PlayerState](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteplayerstate)。

#### \`new_state\` [#new_state]

当前的播放器状态。详见 [PlayerState](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteplayerstate)。如果当前状态为 \`FAILED\`，你可以通过 \`error\` 参数获取详细的错误信息。

#### \`error\` [#error-2]

状态或错误信息。详见 [Error](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error)。

### 所属接口类 [#所属接口类-74]

* [PlayerObserver](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver)
`;
export let structuredData = {
  contents: [{
    heading: "abrsubscriptionlayer",
    content: "获取当前订阅的视频层级。"
  }, {
    heading: "abrsubscriptionlayer",
    content: "该方法仅在打开 RTE URL 时有效。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回 AbrSubscriptionLayer 对象。"
  }, {
    heading: "所属接口类",
    content: "PlayerInfo"
  }, {
    heading: "addview",
    content: "添加一个渲染视图。"
  }, {
    heading: "自从",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从",
    content: "当你需要使用播放器播放视频时，可以调用该方法将视图添加到视频渲染器中，以显示视频内容。"
  }, {
    heading: "自从",
    content: "当前仅支持一个视图。"
  }, {
    heading: "适用场景",
    content: "当你需要使用播放器播放视频时，可以调用此方法将视图添加到视频渲染器中，以显示视频内容。"
  }, {
    heading: "调用时机",
    content: "必须在调用 setCanvas 之前调用该方法。"
  }, {
    heading: "view",
    content: "`SurfaceView` 对象。"
  }, {
    heading: "viewconfig",
    content: "视图的相关设置。"
  }, {
    heading: "异常",
    content: "添加渲染视图失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-1",
    content: "Canvas"
  }, {
    heading: "audiobitspersample",
    content: "获取每个音频采样点的位数。"
  }, {
    heading: "自从-1",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "自从-1",
    content: "audioBitsPerSample 仅在打开非 RTM URL 时有效。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回每个音频采样点的位数，单位为 bit。"
  }, {
    heading: "所属接口类-2",
    content: "PlayerInfo"
  }, {
    heading: "audiochannels",
    content: "获取音频通道数。"
  }, {
    heading: "返回值-2",
    content: "方法调用成功，返回音频通道数。"
  }, {
    heading: "所属接口类-3",
    content: "PlayerInfo"
  }, {
    heading: "audiosamplerate",
    content: "获取音频采样率。"
  }, {
    heading: "自从-2",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功，返回音频采样率，单位为 Hz。"
  }, {
    heading: "所属接口类-4",
    content: "PlayerInfo"
  }, {
    heading: "canvas",
    content: "构造一个 Canvas 对象。"
  }, {
    heading: "自从-3",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "rte",
    content: "用于构造 Canvas 的 Rte 对象，详见 Rte。"
  }, {
    heading: "config",
    content: "初始化配置对象。你可以传入 `null`。"
  }, {
    heading: "所属接口类-5",
    content: "Canvas"
  }, {
    heading: "code",
    content: "获取 API 调用失败时返回的错误码。"
  }, {
    heading: "自从-4",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-1",
    content: "你可以在 API 调用失败时调用此方法获取错误码。"
  }, {
    heading: "返回值-4",
    content: "方法调用失败时，返回错误码。详见 ErrorCode。"
  }, {
    heading: "所属接口类-6",
    content: "Error"
  }, {
    heading: "currenturl",
    content: "获取当前正在播放的 URL。"
  }, {
    heading: "返回值-5",
    content: "方法调用成功时，返回当前正在播放的 URL。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-7",
    content: "PlayerInfo"
  }, {
    heading: "destroy",
    content: "销毁 RTE 对象，释放相关资源。"
  }, {
    heading: "自从-5",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "异常-1",
    content: "销毁失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-8",
    content: "Rte"
  }, {
    heading: "duration",
    content: "获取当前媒体资源的时长。"
  }, {
    heading: "自从-6",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "自从-6",
    content: "该方法仅在播放本地媒体文件或输入在线媒体流时有效。"
  }, {
    heading: "返回值-6",
    content: "方法调用成功，返回当前媒体资源的时长，单位为毫秒。"
  }, {
    heading: "所属接口类-9",
    content: "PlayerInfo"
  }, {
    heading: "errorcode",
    content: "获取 RteException 中携带的错误码。"
  }, {
    heading: "返回值-7",
    content: "方法调用成功，返回 ErrorCode 对象。"
  }, {
    heading: "所属接口类-10",
    content: "RteException"
  }, {
    heading: "getabrfallbacklayer",
    content: "获取已配置的视频流回退选项。"
  }, {
    heading: "自从-7",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-2",
    content: "你必须在调用 `getConfigs` 之后调用此方法。"
  }, {
    heading: "异常-2",
    content: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-8",
    content: "方法调用成功，返回已配置的视频流回退选项。详见 AbrFallbackLayer。"
  }, {
    heading: "所属接口类-11",
    content: "PlayerConfig"
  }, {
    heading: "getabrsubscriptionlayer",
    content: "获取已订阅视频流的质量层级。"
  }, {
    heading: "自从-8",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-3",
    content: "你需要在调用 `getConfigs` 方法之后调用此方法。"
  }, {
    heading: "异常-3",
    content: "如果方法调用失败，SDK 会抛出包含相应错误信息的 RteException 异常。你需要捕获并处理该异常。"
  }, {
    heading: "返回值-9",
    content: "方法调用成功，返回当前设置的视频质量层级。详见 AbrSubscriptionLayer。"
  }, {
    heading: "所属接口类-12",
    content: "PlayerConfig"
  }, {
    heading: "getappid",
    content: "获取已设置的 App ID。"
  }, {
    heading: "自从-9",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "返回值-10",
    content: "方法调用成功时，返回已设置的 App ID。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-13",
    content: "Config"
  }, {
    heading: "getautoplay",
    content: "获取媒体播放器的自动播放设置。"
  }, {
    heading: "自从-10",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-4",
    content: "此方法必须在调用 `getConfigs` 之后调用。"
  }, {
    heading: "异常-4",
    content: "获取自动播放设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-11",
    content: "true：获取成功。"
  }, {
    heading: "返回值-11",
    content: "false：获取失败。"
  }, {
    heading: "所属接口类-14",
    content: "PlayerConfig"
  }, {
    heading: "getconfigs-33",
    content: "获取播放器当前的视频渲染配置。"
  }, {
    heading: "自从-11",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-5",
    content: "你必须在调用 Canvas 之后调用此方法。"
  }, {
    heading: "config-1",
    content: "Canvas 对象的设置，详见 CanvasConfig。"
  }, {
    heading: "异常-5",
    content: "如果方法调用失败，SDK 会抛出包含相应错误信息的 RteException。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-15",
    content: "Canvas"
  }, {
    heading: "getconfigs-23",
    content: "获取当前媒体播放器的配置选项。"
  }, {
    heading: "自从-12",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-6",
    content: "该方法必须在调用 Player 之后使用。"
  }, {
    heading: "config-2",
    content: "媒体播放器配置对象，详见 PlayerConfig。"
  }, {
    heading: "异常-6",
    content: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-16",
    content: "Player"
  }, {
    heading: "getconfigs-13",
    content: "获取 Rte 对象的配置信息。"
  }, {
    heading: "自从-13",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-7",
    content: "该方法必须在调用 Rte 之后使用。"
  }, {
    heading: "config-3",
    content: "详见 Config。"
  }, {
    heading: "异常-7",
    content: "如果方法调用失败，SDK 会抛出 RteException 并返回相应的错误信息。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-17",
    content: "Rte"
  }, {
    heading: "getfrombridge",
    content: "从 RtcEngine 中桥接一个 RTE 对象。"
  }, {
    heading: "自从-14",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-14",
    content: "通过该方法创建的 `RTE` 对象无需通过 initMediaEngine 进行初始化。如果你尚未创建并初始化 `RTC` 引擎，可以先调用 `RTE` 创建一个 `RTE` 对象，再调用 initMediaEngine 进行初始化。"
  }, {
    heading: "调用时机-8",
    content: "调用此方法前，请确保已调用 create \\[2/2] 初始化 `RTC` 引擎。"
  }, {
    heading: "异常-8",
    content: "如果方法调用失败，SDK 会抛出 RteException 并返回相应的错误信息。你需要捕获并处理该异常。"
  }, {
    heading: "返回值-12",
    content: "方法调用成功，返回 `RTE` 对象。"
  }, {
    heading: "所属接口类-18",
    content: "Rte"
  }, {
    heading: "getinfo",
    content: "检索与播放器和媒体流相关的信息。"
  }, {
    heading: "自从-15",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-9",
    content: "该方法必须在调用 Player 之后使用。"
  }, {
    heading: "info",
    content: "与播放器和媒体流相关的信息，详见 PlayerInfo。"
  }, {
    heading: "异常-9",
    content: "如果该方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-19",
    content: "Player"
  }, {
    heading: "getjsonparameter",
    content: "获取当前设置的 JSON 格式的私有参数集。"
  }, {
    heading: "自从-16",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "异常-10",
    content: "调用失败，SDK 会抛出 RteException 异常，你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-13",
    content: "方法调用成功时，返回已设置的 JSON 格式的参数集。 方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-20",
    content: "Config"
  }, {
    heading: "getloopcount",
    content: "获取媒体文件的循环播放次数。"
  }, {
    heading: "自从-17",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "异常-11",
    content: "获取失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-14",
    content: "方法调用成功，返回媒体文件的循环播放次数。"
  }, {
    heading: "所属接口类-21",
    content: "PlayerConfig"
  }, {
    heading: "getvideomirrormode",
    content: "获取视频镜像模式。"
  }, {
    heading: "自从-18",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "异常-12",
    content: "获取视频镜像模式失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-15",
    content: "方法调用成功，返回视频镜像模式，详见 VideoMirrorMode。"
  }, {
    heading: "所属接口类-22",
    content: "CanvasConfig"
  }, {
    heading: "getplaybackspeed",
    content: "获取播放速度参数。"
  }, {
    heading: "自从-19",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "异常-13",
    content: "获取播放速度失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-16",
    content: "方法调用成功，返回播放速度的值。"
  }, {
    heading: "所属接口类-23",
    content: "PlayerConfig"
  }, {
    heading: "getplayoutvolume",
    content: "获取媒体播放器的播放音量。"
  }, {
    heading: "自从-20",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "返回值-17",
    content: "方法调用成功，返回媒体播放器的播放音量级别。"
  }, {
    heading: "所属接口类-24",
    content: "PlayerConfig"
  }, {
    heading: "getposition",
    content: "获取当前的播放位置。"
  }, {
    heading: "自从-21",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "异常-14",
    content: "如果方法调用失败，SDK 会抛出一个 RteException 异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-18",
    content: "方法调用成功，返回当前的播放位置，单位为毫秒。"
  }, {
    heading: "所属接口类-25",
    content: "Player"
  }, {
    heading: "getvideorendermode",
    content: "获取当前设置的视频镜像模式。"
  }, {
    heading: "自从-22",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-10",
    content: "你需要在调用 `getConfigs` 之后调用此方法。"
  }, {
    heading: "异常-15",
    content: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "返回值-19",
    content: "方法调用成功，返回当前设置的视频镜像模式。详见 VideoMirrorMode。"
  }, {
    heading: "所属接口类-26",
    content: "CanvasConfig"
  }, {
    heading: "getstats",
    content: "获取播放器当前播放媒体资源的统计信息。"
  }, {
    heading: "自从-23",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-23",
    content: "该方法通过回调异步返回播放器的统计信息。"
  }, {
    heading: "调用时机-11",
    content: "该方法必须在调用 openWithUrl 之后调用。"
  }, {
    heading: "callback",
    content: "用于异步接收统计信息和错误信息的回调接口。详见 PlayerGetStatsCallback。"
  }, {
    heading: "所属接口类-27",
    content: "Player"
  }, {
    heading: "hasaudio",
    content: "判断媒体资源是否包含音频流。"
  }, {
    heading: "返回值-20",
    content: "true：媒体资源中包含音频流。"
  }, {
    heading: "返回值-20",
    content: "false：媒体资源中不包含音频流。"
  }, {
    heading: "所属接口类-28",
    content: "PlayerInfo"
  }, {
    heading: "hasvideo",
    content: "判断是否包含视频流。"
  }, {
    heading: "返回值-21",
    content: "true：URL 源包含视频流。 false：URL 源不包含视频流。"
  }, {
    heading: "所属接口类-29",
    content: "PlayerInfo"
  }, {
    heading: "initmediaengine",
    content: "初始化 RTE 引擎。"
  }, {
    heading: "自从-24",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-24",
    content: "该方法为异步方法，通过回调函数返回初始化结果。你需要在创建 `RTE` 对象并设置 App ID 后调用该方法。"
  }, {
    heading: "callback-1",
    content: "异步返回引擎初始化结果的回调。详见 AsyncCallback。"
  }, {
    heading: "异常-16",
    content: "初始化失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-30",
    content: "Rte"
  }, {
    heading: "isaudiomuted",
    content: "判断播放器是否停止接收远端音频流。"
  }, {
    heading: "自从-25",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "返回值-22",
    content: "true：播放器已停止接收远端音频流。"
  }, {
    heading: "返回值-22",
    content: "false：播放器仍在接收远端音频流。"
  }, {
    heading: "所属接口类-31",
    content: "PlayerInfo"
  }, {
    heading: "isvideomuted",
    content: "判断播放器是否停止接收远端视频流。"
  }, {
    heading: "自从-26",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-26",
    content: "isVideoMuted 接口仅在打开 RTE URL 时有效。"
  }, {
    heading: "返回值-23",
    content: "true：播放器已停止接收远端视频流。"
  }, {
    heading: "返回值-23",
    content: "false：播放器仍在接收远端视频流。"
  }, {
    heading: "所属接口类-32",
    content: "PlayerInfo"
  }, {
    heading: "message",
    content: "获取详细的错误信息。"
  }, {
    heading: "自从-27",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-12",
    content: "当 API 调用失败时，可以调用该方法获取错误信息，以帮助排查问题。"
  }, {
    heading: "返回值-24",
    content: "方法调用成功时，返回错误信息字符串。"
  }, {
    heading: "返回值-24",
    content: "方法调用失败，返回空字符串。"
  }, {
    heading: "所属接口类-33",
    content: "Error"
  }, {
    heading: "muteaudio",
    content: "开始或停止接收音频流。"
  }, {
    heading: "自从-28",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-13",
    content: "该方法需要在调用 openWithUrl 方法之后调用。"
  }, {
    heading: "相关回调",
    content: "调用该方法成功后，会触发 onPlayerInfoUpdated 回调，上报最新的播放器和媒体拉流信息。"
  }, {
    heading: "mute",
    content: "是否接收音频流："
  }, {
    heading: "mute",
    content: "true：不接收音频流。"
  }, {
    heading: "mute",
    content: "false：接收音频流。"
  }, {
    heading: "异常-17",
    content: "方法调用失败时，SDK 会抛出包含错误信息的 RteException 异常。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-34",
    content: "Player"
  }, {
    heading: "mutevideo",
    content: "开始或停止接收远端视频流。"
  }, {
    heading: "自从-29",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-14",
    content: "你必须在调用 openWithUrl 之后调用该方法。"
  }, {
    heading: "相关回调-1",
    content: "该方法调用成功后，会触发 onPlayerInfoUpdated 回调，用于上报最新的播放器和媒体流信息。"
  }, {
    heading: "mute-1",
    content: "是否接收远端视频流："
  }, {
    heading: "mute-1",
    content: "true：不接收远端视频流。"
  }, {
    heading: "mute-1",
    content: "false：接收远端视频流。"
  }, {
    heading: "异常-18",
    content: "如果方法调用失败，SDK 会抛出带有相应错误信息的 RteException 异常。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-35",
    content: "Player"
  }, {
    heading: "openwithurl",
    content: "打开一个 URL 资源。"
  }, {
    heading: "自从-30",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-30",
    content: "该方法支持通过 URL 打开实时流媒体资源。如果你希望加快打开速度，可以在调用该方法前使用 preloadWithUrl 预加载资源。 如果资源打开失败，你会收到 onStateChanged 回调，播放器状态为 `FAILED`。此时需要先调用 stop，然后再次调用 openWithUrl 重新打开资源。 如果你关闭了自动播放功能，可以在资源打开后调用 play 开始播放。"
  }, {
    heading: "自从-30",
    content: "该方法目前仅支持以 `rte://` 开头的 URL、CDN 推流 URL 和本地媒体文件。"
  }, {
    heading: "调用时机-15",
    content: "该方法必须在 Player 之后调用。"
  }, {
    heading: "相关回调-2",
    content: "调用该方法后会触发 onStateChanged 回调，播放器状态为 `OPENING`，表示正在打开 URL。成功打开后，播放器状态为 `OPEN_COMPLETED`。"
  }, {
    heading: "url",
    content: "要打开的 URL，可以是 CDN 推流 URL、本地媒体文件，或以 `rte://` 为前缀的 URL。"
  }, {
    heading: "starttime",
    content: "播放的起始位置，单位为毫秒。"
  }, {
    heading: "callback-2",
    content: "异步通知打开 URL 资源结果的回调。你可以通过该回调的 onResult 方法获取错误信息。"
  }, {
    heading: "所属接口类-36",
    content: "Player"
  }, {
    heading: "pause",
    content: "暂停播放。"
  }, {
    heading: "自从-31",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-31",
    content: "调用 play 播放 URL 资源后，如需暂停播放，可以调用该方法。如需停止播放，请调用 stop。"
  }, {
    heading: "调用时机-16",
    content: "该方法必须在调用 play 之后调用。"
  }, {
    heading: "相关回调-3",
    content: "成功调用该方法后，会触发 onStateChanged 回调，报告播放器状态为 `PAUSED`。"
  }, {
    heading: "异常-19",
    content: "如果该方法调用失败，SDK 会抛出带有相应错误信息的 RteException 异常。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-37",
    content: "Player"
  }, {
    heading: "play",
    content: "播放一个 URL 资源。"
  }, {
    heading: "自从-32",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-32",
    content: "如果你已关闭自动播放，在使用 openWithUrl 成功打开一个在线媒体流后，可以调用该方法开始播放。"
  }, {
    heading: "自从-32",
    content: "该方法当前仅支持以 `rte://` 为前缀的 URL。"
  }, {
    heading: "调用时机-17",
    content: "仅在收到状态为 `OPEN_COMPLETED` 的 onStateChanged 回调后调用该方法。"
  }, {
    heading: "相关回调-4",
    content: "调用该方法成功后，会触发 onStateChanged 回调以上报播放器状态。"
  }, {
    heading: "异常-20",
    content: "如果方法调用失败，SDK 会抛出包含相应错误信息的 RteException 异常。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-38",
    content: "Player"
  }, {
    heading: "player",
    content: "构造一个 Player 播放器对象。"
  }, {
    heading: "自从-33",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-18",
    content: "该方法必须在调用 initMediaEngine 之后调用。"
  }, {
    heading: "rte-1",
    content: "一个 Rte 对象。详见 Rte。"
  }, {
    heading: "initialconfig",
    content: "播放器对象的初始化设置。你可以传入 `null`。"
  }, {
    heading: "所属接口类-39",
    content: "Player"
  }, {
    heading: "preloadwithurl",
    content: "预加载 URL 资源。"
  }, {
    heading: "自从-34",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-34",
    content: "成功预加载资源可以加快使用 openWithUrl 打开 URL 资源的速度，从而减少等待时间。"
  }, {
    heading: "自从-34",
    content: "该方法目前仅适用于以 `rte://` 为前缀的 URL。最多可预加载 20 个 URL，若超过限制，新预加载的 URL 会替换最早的 URL。"
  }, {
    heading: "适用场景-1",
    content: "在打开媒体资源前预加载，可以减少用户等待时间，提供更流畅的视听体验。"
  }, {
    heading: "调用时机-19",
    content: "必须在调用 openWithUrl 之前调用该方法。"
  }, {
    heading: "url-1",
    content: "以 `rte://` 为前缀的 URL。各字段的详细信息参见观众端的“输入在线媒体流”。"
  }, {
    heading: "异常-21",
    content: "如果方法调用失败，SDK 会抛出包含相应错误信息的 RteException。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-40",
    content: "Player"
  }, {
    heading: "registerobserver",
    content: "注册播放器的观察者对象。"
  }, {
    heading: "自从-35",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-35",
    content: "在调用此方法之前，你需要实现一个继承自 PlayerObserver 的接口类。"
  }, {
    heading: "调用时机-20",
    content: "该方法必须在调用 Player 之后执行。"
  }, {
    heading: "observer",
    content: "详见 PlayerObserver。"
  }, {
    heading: "异常-22",
    content: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-41",
    content: "Player"
  }, {
    heading: "removeview",
    content: "移除一个渲染视图。"
  }, {
    heading: "自从-36",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-36",
    content: "每次只能移除一个视图。"
  }, {
    heading: "调用时机-21",
    content: "该方法必须在调用 addView 之后调用。"
  }, {
    heading: "view-1",
    content: "要移除的视图对象。"
  }, {
    heading: "viewconfig-1",
    content: "`view` 对象的设置。"
  }, {
    heading: "返回值-25",
    content: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-42",
    content: "Canvas"
  }, {
    heading: "rte-2",
    content: "构造一个 Rte 对象。"
  }, {
    heading: "自从-37",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-22",
    content: "你必须在调用 initMediaEngine 之前调用此方法。"
  }, {
    heading: "initialconfig-1",
    content: "初始化设置。你可以传入 `null`。"
  }, {
    heading: "所属接口类-43",
    content: "Rte"
  }, {
    heading: "seek",
    content: "跳转到指定的播放位置。"
  }, {
    heading: "自从-38",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "newtime",
    content: "要跳转到的播放位置，单位为毫秒。"
  }, {
    heading: "异常-23",
    content: "如果方法调用失败，SDK 会抛出一个 RteException 异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-44",
    content: "Player"
  }, {
    heading: "setabrfallbacklayer",
    content: "设置已订阅远端视频流的回退选项。"
  }, {
    heading: "自从-39",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-39",
    content: "在网络状况不佳时，SDK 会将已订阅远端视频流的分辨率降级到指定的视频质量层。每个质量层对应特定的分辨率和码率。网络恢复后，SDK 会将视频流恢复至原始质量层。"
  }, {
    heading: "自从-39",
    content: "如果未开启 ABR 功能，视频流的回退质量层只能设置为 `LOW` 或 `AUDIO_ONLY`。"
  }, {
    heading: "适用场景-2",
    content: "一般场景下，可调用该方法并将回退质量层设置为 `kRteAbrFallbackLow` 或 `kRteAbrFallbackAudioOnly`。当网络较差时，SDK 会回退为视频小流或仅接收音频流。 如果对回退视频流的分辨率有更高要求，可联系技术支持开启 ABR 功能。开启后，可自定义每一层的分辨率。SDK 会以你指定的最低质量层的分辨率为下限，并根据网络状况在该范围内动态调整分辨率。"
  }, {
    heading: "调用时机-23",
    content: "必须在调用 `setConfigs` 之前调用该方法。"
  }, {
    heading: "fallbacklayer",
    content: "视频流的回退质量层，详见 AbrFallbackLayer。"
  }, {
    heading: "fallbacklayer",
    content: "注： 自定义分辨率时，请确保视频质量层按从高到低的分辨率排序；若分辨率相同，则按帧率从高到低排序。"
  }, {
    heading: "fallbacklayer",
    content: "视频质量层"
  }, {
    heading: "fallbacklayer",
    content: "分辨率"
  }, {
    heading: "fallbacklayer",
    content: "`LAYER1`"
  }, {
    heading: "fallbacklayer",
    content: "2160p (4K)"
  }, {
    heading: "fallbacklayer",
    content: "`LAYER2`"
  }, {
    heading: "fallbacklayer",
    content: "1440p (2K)"
  }, {
    heading: "fallbacklayer",
    content: "`LAYER3`"
  }, {
    heading: "fallbacklayer",
    content: "1080p (HD)"
  }, {
    heading: "fallbacklayer",
    content: "`LAYER4`"
  }, {
    heading: "fallbacklayer",
    content: "720p (HD)"
  }, {
    heading: "fallbacklayer",
    content: "`LAYER5`"
  }, {
    heading: "fallbacklayer",
    content: "540p (SD)"
  }, {
    heading: "fallbacklayer",
    content: "`LAYER6`"
  }, {
    heading: "fallbacklayer",
    content: "480p (SD)"
  }, {
    heading: "异常-24",
    content: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-45",
    content: "PlayerConfig"
  }, {
    heading: "setabrsubscriptionlayer",
    content: "设置订阅媒体流的视频质量等级。"
  }, {
    heading: "自从-40",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-40",
    content: "你可以根据实际网络状况，在所订阅的视频流中切换不同的视频质量等级。如果你需要更高级的视频分辨率切换控制，可以联系技术支持开启 ABR（自适应码率）功能。开启后，你可以为每个视频质量等级自定义分辨率，使观众可以根据需要在多质量层级视频流的所有等级之间切换。"
  }, {
    heading: "自从-40",
    content: "如果未开启 ABR 功能，你只能订阅 `HIGH` 或 `LOW` 视频质量等级。"
  }, {
    heading: "适用场景-3",
    content: "在网络环境不稳定的场景中，订阅端可根据实际网络状况选择合适的视频质量层级，以保障流畅的观看体验。"
  }, {
    heading: "调用时机-24",
    content: "该方法必须在调用 `setConfigs` 之前调用。"
  }, {
    heading: "subscriptionlayer",
    content: "要订阅的视频质量等级，详见 AbrSubscriptionLayer。在自定义 `LAYER1` 到 `LAYER6` 的分辨率时，你可以参考下表，或根据实际需求进行配置： 注意：自定义分辨率时，必须按分辨率从高到低排序各视频质量等级（Layer），若分辨率相同，则按帧率从高到低排序。"
  }, {
    heading: "subscriptionlayer",
    content: "视频质量等级"
  }, {
    heading: "subscriptionlayer",
    content: "分辨率"
  }, {
    heading: "subscriptionlayer",
    content: "`LAYER1`"
  }, {
    heading: "subscriptionlayer",
    content: "2160p (4K)"
  }, {
    heading: "subscriptionlayer",
    content: "`LAYER2`"
  }, {
    heading: "subscriptionlayer",
    content: "1440p (2K)"
  }, {
    heading: "subscriptionlayer",
    content: "`LAYER3`"
  }, {
    heading: "subscriptionlayer",
    content: "1080p (HD)"
  }, {
    heading: "subscriptionlayer",
    content: "`LAYER4`"
  }, {
    heading: "subscriptionlayer",
    content: "720p (HD)"
  }, {
    heading: "subscriptionlayer",
    content: "`LAYER5`"
  }, {
    heading: "subscriptionlayer",
    content: "540p (SD)"
  }, {
    heading: "subscriptionlayer",
    content: "`LAYER6`"
  }, {
    heading: "subscriptionlayer",
    content: "480p (SD)"
  }, {
    heading: "异常-25",
    content: "如果方法调用失败，SDK 会抛出包含相应错误信息的 RteException 异常。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-46",
    content: "PlayerConfig"
  }, {
    heading: "setappid",
    content: "设置项目的声网 App ID。"
  }, {
    heading: "自从-41",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-25",
    content: "你必须在调用 initMediaEngine 之前调用此方法。"
  }, {
    heading: "appid",
    content: "声网 App ID，可从控制台获取。"
  }, {
    heading: "异常-26",
    content: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-47",
    content: "Config"
  }, {
    heading: "setautoplay",
    content: "设置是否启用自动播放。"
  }, {
    heading: "自从-42",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-42",
    content: "你可以在调用 openWithUrl 之前调用此方法设置是否启用自动播放。如果未设置，默认启用自动播放。"
  }, {
    heading: "调用时机-26",
    content: "此方法必须在调用 openWithUrl 之前调用。"
  }, {
    heading: "autoplay",
    content: "是否启用自动播放："
  }, {
    heading: "autoplay",
    content: "true：（默认）启用自动播放。"
  }, {
    heading: "autoplay",
    content: "false：关闭自动播放。"
  }, {
    heading: "异常-27",
    content: "设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-48",
    content: "PlayerConfig"
  }, {
    heading: "setcanvas",
    content: "设置用于显示视频的视图窗口。"
  }, {
    heading: "自从-43",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-43",
    content: "该方法用于设置用于显示视频的 Canvas 对象。"
  }, {
    heading: "调用时机-27",
    content: "该方法必须在调用 Player 之后调用。"
  }, {
    heading: "canvas-1",
    content: "用于渲染视频帧的对象，详见 Canvas。"
  }, {
    heading: "异常-28",
    content: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-49",
    content: "Player"
  }, {
    heading: "setconfigs-33",
    content: "设置播放器的视频渲染配置。"
  }, {
    heading: "自从-44",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-28",
    content: "该方法需要在调用 openWithUrl 之前调用。"
  }, {
    heading: "config-4",
    content: "用于设置 Canvas 对象的配置，详见 CanvasConfig。"
  }, {
    heading: "异常-29",
    content: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-50",
    content: "Canvas"
  }, {
    heading: "setconfigs-23",
    content: "设置播放器配置。"
  }, {
    heading: "自从-45",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-45",
    content: "你可以调用此方法配置播放器，例如启用自动播放、订阅不同分辨率和码率的视频流。"
  }, {
    heading: "调用时机-29",
    content: "此方法必须在调用 Player 之后调用。"
  }, {
    heading: "config-5",
    content: "播放器配置对象，详见 PlayerConfig。"
  }, {
    heading: "异常-30",
    content: "如果方法调用失败，SDK 会抛出包含相应错误信息的 RteException。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-51",
    content: "Player"
  }, {
    heading: "setconfigs-13",
    content: "配置 RTE 对象的信息。"
  }, {
    heading: "自从-46",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "调用时机-30",
    content: "该方法必须在调用 Rte 之后调用。"
  }, {
    heading: "config-6",
    content: "用于设置 `RTE` 对象的配置信息，详见 Config。"
  }, {
    heading: "异常-31",
    content: "如果方法调用失败，SDK 会抛出 RteException 并返回相应的错误信息。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-52",
    content: "Rte"
  }, {
    heading: "setjsonparameter",
    content: "通过 JSON 配置 SDK 的技术预览或定制化功能。"
  }, {
    heading: "自从-47",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "适用场景-4",
    content: "当你需要设置私有参数或使用定制化功能时，可以调用此方法。"
  }, {
    heading: "调用时机-31",
    content: "此方法必须在调用 `setConfigs` 之前调用。"
  }, {
    heading: "jsonparameter",
    content: "JSON 字符串格式的参数。"
  }, {
    heading: "异常-32",
    content: "如果方法调用失败，SDK 会抛出包含相应错误信息的 RteException。你需要捕获并处理该异常。"
  }, {
    heading: "所属接口类-53",
    content: "Config"
  }, {
    heading: "setloopcount",
    content: "设置媒体文件在播放期间循环播放的次数。"
  }, {
    heading: "自从-48",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "count",
    content: "媒体文件循环播放的次数："
  }, {
    heading: "count",
    content: "1：播放一次。"
  }, {
    heading: "count",
    content: "2：播放两次。"
  }, {
    heading: "count",
    content: "-1：无限循环播放，直到调用 stop 停止播放。"
  }, {
    heading: "异常-33",
    content: "设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-54",
    content: "PlayerConfig"
  }, {
    heading: "setvideomirrormode",
    content: "设置视频镜像模式。"
  }, {
    heading: "自从-49",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-49",
    content: "你必须在调用 `setConfigs` 方法之前调用此方法。"
  }, {
    heading: "调用时机-32",
    content: "你必须在调用 `setConfigs` 之前调用此方法。"
  }, {
    heading: "mode",
    content: "镜像模式，详见 VideoMirrorMode。默认值为 `AUTO`，由 SDK 自动决定镜像模式。"
  }, {
    heading: "异常-34",
    content: "方法调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-55",
    content: "CanvasConfig"
  }, {
    heading: "setplaybackspeed",
    content: "设置播放速度参数。"
  }, {
    heading: "自从-50",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "自从-50",
    content: "你可以在调用 openWithUrl 后调用该方法。"
  }, {
    heading: "speed",
    content: "播放速度。有效范围为 \\[50, 400]。"
  }, {
    heading: "异常-35",
    content: "设置播放速度失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-56",
    content: "PlayerConfig"
  }, {
    heading: "setplayoutvolume",
    content: "设置播放音量参数。"
  }, {
    heading: "自从-51",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "volume",
    content: "播放器的音量值。有效范围为 \\[0, 400]。"
  }, {
    heading: "异常-36",
    content: "设置播放音量失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-57",
    content: "PlayerConfig"
  }, {
    heading: "setvideorendermode",
    content: "设置视频渲染模式。"
  }, {
    heading: "自从-52",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "mode-1",
    content: "要设置的视频渲染模式，详见 VideoRenderMode。"
  }, {
    heading: "mode-1",
    content: "默认值为 `VideoRenderMode.HIDDEN`。"
  }, {
    heading: "异常-37",
    content: "RteException： `RteException.errorCode()` 可能返回以下错误码："
  }, {
    heading: "异常-37",
    content: "ErrorCode.INVALID\\_ARGUMENT： mode 参数设置为非法值。"
  }, {
    heading: "所属接口类-58",
    content: "CanvasConfig"
  }, {
    heading: "state",
    content: "获取当前播放器状态。"
  }, {
    heading: "返回值-26",
    content: "方法调用成功，返回当前播放器的状态。"
  }, {
    heading: "所属接口类-59",
    content: "PlayerInfo"
  }, {
    heading: "stop",
    content: "停止播放媒体资源。"
  }, {
    heading: "自从-53",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-53",
    content: "如果使用 openWithUrl 打开 URL 流失败，你需要先调用该方法，然后再调用 openWithUrl 重新打开 URL。"
  }, {
    heading: "调用时机-33",
    content: "该方法必须在调用 openWithUrl 之后调用。"
  }, {
    heading: "相关回调-5",
    content: "调用成功后，该方法会触发 onStateChanged 回调，并上报播放器状态为 `STOPPED`。"
  }, {
    heading: "异常-38",
    content: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-60",
    content: "Player"
  }, {
    heading: "streamcount",
    content: "获取当前播放源中的流的数量。"
  }, {
    heading: "streamcount",
    content: "该方法仅在打开非 RTE URL 时有效。"
  }, {
    heading: "返回值-27",
    content: "方法调用成功，返回流的数量。"
  }, {
    heading: "所属接口类-61",
    content: "PlayerInfo"
  }, {
    heading: "switchwithurl",
    content: "在播放过程中切换到新的 URL。"
  }, {
    heading: "自从-54",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "自从-54",
    content: "当 SDK 返回播放器状态为 `OPEN_COMPLETED` 时，必须调用该方法。"
  }, {
    heading: "自从-54",
    content: "该方法仅在播放器打开非 RTE URL 时有效。"
  }, {
    heading: "url-2",
    content: "要切换的 URL 资源。"
  }, {
    heading: "syncpts",
    content: "true：同步播放位置。"
  }, {
    heading: "syncpts",
    content: "false：（默认）不同步播放位置。"
  }, {
    heading: "callback-3",
    content: "异步通知切换操作结果的回调。你可以通过该回调的 `err` 参数得知操作的结果或错误码信息，详见 AsyncCallback。"
  }, {
    heading: "所属接口类-62",
    content: "Player"
  }, {
    heading: "unregisterobserver",
    content: "取消注册媒体播放器事件观察者对象。"
  }, {
    heading: "自从-55",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-55",
    content: "调用 registerObserver 注册媒体播放器事件观察者对象后，如需取消注册，请调用该方法。"
  }, {
    heading: "调用时机-34",
    content: "该方法必须在调用 registerObserver 之后调用。"
  }, {
    heading: "observer-1",
    content: "详见 PlayerObserver。"
  }, {
    heading: "异常-39",
    content: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
  }, {
    heading: "所属接口类-63",
    content: "Player"
  }, {
    heading: "videoheight",
    content: "获取视频分辨率的高度。"
  }, {
    heading: "自从-56",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "返回值-28",
    content: "方法调用成功，返回视频分辨率的高度，单位为像素。"
  }, {
    heading: "所属接口类-64",
    content: "PlayerInfo"
  }, {
    heading: "videowidth",
    content: "获取视频分辨率的宽度。"
  }, {
    heading: "自从-57",
    content: "自 v4.5.1 版本新增。"
  }, {
    heading: "返回值-29",
    content: "方法调用成功，返回视频分辨率的宽度，单位为像素。"
  }, {
    heading: "所属接口类-65",
    content: "PlayerInfo"
  }, {
    heading: "onaudiovolumeindication",
    content: "播放器音量变化回调。"
  }, {
    heading: "自从-58",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "触发时机",
    content: "该回调在播放器音量发生变化时被触发。"
  }, {
    heading: "volume-1",
    content: "播放器当前的音量，取值范围为 \\[0, 225]。"
  }, {
    heading: "所属接口类-66",
    content: "PlayerObserver"
  }, {
    heading: "onevent",
    content: "播放器事件回调。"
  }, {
    heading: "自从-59",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-59",
    content: "如果你需要监听播放器事件，必须先调用 registerObserver 注册播放器观察者对象。"
  }, {
    heading: "触发时机-1",
    content: "该回调在播放器事件发生变化时被触发。"
  }, {
    heading: "event",
    content: "播放器事件。"
  }, {
    heading: "event",
    content: "详见 PlayerEvent。"
  }, {
    heading: "所属接口类-67",
    content: "PlayerObserver"
  }, {
    heading: "onmetadata-22",
    content: "接收媒体流附加信息的回调。"
  }, {
    heading: "自从-60",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-60",
    content: "调用 registerObserver 注册播放器观察者对象后，才能接收媒体流中的附加信息。"
  }, {
    heading: "触发时机-2",
    content: "该回调在 SDK 解析播放器正在播放的媒体流中的附加信息后触发，报告数据类型及其具体内容。"
  }, {
    heading: "type",
    content: "附加信息的类型："
  }, {
    heading: "type",
    content: "0：SEI（Supplemental Enhancement Information）类型。"
  }, {
    heading: "data",
    content: "解析后的附加信息。"
  }, {
    heading: "所属接口类-68",
    content: "PlayerObserver"
  }, {
    heading: "onplayerinfoupdated-22",
    content: "播放器和媒体流信息发生变化回调。"
  }, {
    heading: "自从-61",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-61",
    content: "你可以调用 registerObserver 注册播放器观察者对象来获取播放器和媒体流的信息，也可以直接调用 getInfo 方法获取信息。"
  }, {
    heading: "触发时机-3",
    content: "该回调在播放器和媒体流信息发生变化时被触发。"
  }, {
    heading: "info-1",
    content: "播放器及媒体流的相关信息，详见 PlayerInfo。"
  }, {
    heading: "所属接口类-69",
    content: "PlayerObserver"
  }, {
    heading: "onpositionchanged",
    content: "播放进度变化回调。"
  }, {
    heading: "自从-62",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "触发时机-4",
    content: "该回调在媒体资源播放过程中每秒触发一次。"
  }, {
    heading: "curr_time",
    content: "当前播放进度，单位为毫秒。"
  }, {
    heading: "utc_time",
    content: "当前 NTP（网络时间协议）时间，单位为毫秒。"
  }, {
    heading: "所属接口类-70",
    content: "PlayerObserver"
  }, {
    heading: "onresolutionchanged",
    content: "视频分辨率变化的回调。"
  }, {
    heading: "自从-63",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-63",
    content: "你必须先调用 registerObserver 注册一个播放器观察者对象，才能监听视频流分辨率的变化。"
  }, {
    heading: "触发时机-5",
    content: "该回调在视频流的分辨率发生变化时被触发，报告当前视频的宽度和高度。"
  }, {
    heading: "width",
    content: "视频帧的宽度，单位为 px。"
  }, {
    heading: "height",
    content: "视频帧的高度，单位为 px。"
  }, {
    heading: "所属接口类-71",
    content: "PlayerObserver"
  }, {
    heading: "onresult",
    content: "onResult 回调，用于报告异步操作的结果。"
  }, {
    heading: "自从-64",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "触发时机-6",
    content: "该回调在异步操作完成时被触发，用于报告操作结果。"
  }, {
    heading: "error",
    content: "状态码或错误码。详见 Error。"
  }, {
    heading: "所属接口类-72",
    content: "AsyncCallback"
  }, {
    heading: "onresult-1",
    content: "异步获取媒体资源统计信息操作完成时触发的回调。"
  }, {
    heading: "触发时机-7",
    content: "该回调在异步获取媒体资源信息的操作完成时被触发。"
  }, {
    heading: "playerstats",
    content: "媒体资源的统计信息。详见 PlayerStats。"
  }, {
    heading: "error-1",
    content: "状态和错误信息。详见 Error。"
  }, {
    heading: "所属接口类-73",
    content: "PlayerGetStatsCallback"
  }, {
    heading: "onstatechanged",
    content: "播放器状态变化的回调。"
  }, {
    heading: "自从-65",
    content: "自 v4.4.0 版本新增。"
  }, {
    heading: "自从-65",
    content: "如果你需要监听播放器状态的变化，必须先调用 registerObserver 注册播放器观察者对象。"
  }, {
    heading: "触发时机-8",
    content: "该回调在播放器状态发生变化时被触发。"
  }, {
    heading: "old_state",
    content: "变更前的播放器状态。详见 PlayerState。"
  }, {
    heading: "new_state",
    content: "当前的播放器状态。详见 PlayerState。如果当前状态为 `FAILED`，你可以通过 `error` 参数获取详细的错误信息。"
  }, {
    heading: "error-2",
    content: "状态或错误信息。详见 Error。"
  }, {
    heading: "所属接口类-74",
    content: "PlayerObserver"
  }],
  headings: [{
    id: "abrsubscriptionlayer",
    content: "abrSubscriptionLayer"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "addview",
    content: "addView"
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
    id: "参数",
    content: "参数"
  }, {
    id: "view",
    content: "`view`"
  }, {
    id: "viewconfig",
    content: "`viewConfig`"
  }, {
    id: "异常",
    content: "异常"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "audiobitspersample",
    content: "audioBitsPerSample"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "audiochannels",
    content: "audioChannels"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "audiosamplerate",
    content: "audioSampleRate"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "canvas",
    content: "Canvas"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "rte",
    content: "`rte`"
  }, {
    id: "config",
    content: "`config`"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "code",
    content: "code"
  }, {
    id: "自从-4",
    content: "`自从`"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "currenturl",
    content: "currentUrl"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "destroy",
    content: "destroy"
  }, {
    id: "自从-5",
    content: "`自从`"
  }, {
    id: "异常-1",
    content: "异常"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "duration",
    content: "duration"
  }, {
    id: "自从-6",
    content: "`自从`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "errorcode",
    content: "errorCode"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "getabrfallbacklayer",
    content: "getAbrFallbackLayer"
  }, {
    id: "自从-7",
    content: "`自从`"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "异常-2",
    content: "异常"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "getabrsubscriptionlayer",
    content: "getAbrSubscriptionLayer"
  }, {
    id: "自从-8",
    content: "`自从`"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "异常-3",
    content: "异常"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "getappid",
    content: "getAppId"
  }, {
    id: "自从-9",
    content: "`自从`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "getautoplay",
    content: "getAutoPlay"
  }, {
    id: "自从-10",
    content: "`自从`"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "异常-4",
    content: "异常"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "getconfigs-33",
    content: "getConfigs [3/3]"
  }, {
    id: "自从-11",
    content: "`自从`"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "config-1",
    content: "`config`"
  }, {
    id: "异常-5",
    content: "异常"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "getconfigs-23",
    content: "getConfigs [2/3]"
  }, {
    id: "自从-12",
    content: "`自从`"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "config-2",
    content: "`config`"
  }, {
    id: "异常-6",
    content: "异常"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "getconfigs-13",
    content: "getConfigs [1/3]"
  }, {
    id: "自从-13",
    content: "`自从`"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "config-3",
    content: "`config`"
  }, {
    id: "异常-7",
    content: "异常"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "getfrombridge",
    content: "getFromBridge"
  }, {
    id: "自从-14",
    content: "`自从`"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "异常-8",
    content: "异常"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "getinfo",
    content: "getInfo"
  }, {
    id: "自从-15",
    content: "`自从`"
  }, {
    id: "调用时机-9",
    content: "调用时机"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "info",
    content: "`info`"
  }, {
    id: "异常-9",
    content: "异常"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "getjsonparameter",
    content: "getJsonParameter"
  }, {
    id: "自从-16",
    content: "`自从`"
  }, {
    id: "异常-10",
    content: "异常"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "getloopcount",
    content: "getLoopCount"
  }, {
    id: "自从-17",
    content: "`自从`"
  }, {
    id: "异常-11",
    content: "异常"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "getvideomirrormode",
    content: "getVideoMirrorMode"
  }, {
    id: "自从-18",
    content: "`自从`"
  }, {
    id: "异常-12",
    content: "异常"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "getplaybackspeed",
    content: "getPlaybackSpeed"
  }, {
    id: "自从-19",
    content: "`自从`"
  }, {
    id: "异常-13",
    content: "异常"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-23",
    content: "所属接口类"
  }, {
    id: "getplayoutvolume",
    content: "getPlayoutVolume"
  }, {
    id: "自从-20",
    content: "`自从`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-24",
    content: "所属接口类"
  }, {
    id: "getposition",
    content: "getPosition"
  }, {
    id: "自从-21",
    content: "`自从`"
  }, {
    id: "异常-14",
    content: "异常"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-25",
    content: "所属接口类"
  }, {
    id: "getvideorendermode",
    content: "getVideoRenderMode"
  }, {
    id: "自从-22",
    content: "`自从`"
  }, {
    id: "调用时机-10",
    content: "调用时机"
  }, {
    id: "异常-15",
    content: "异常"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-26",
    content: "所属接口类"
  }, {
    id: "getstats",
    content: "getStats"
  }, {
    id: "自从-23",
    content: "`自从`"
  }, {
    id: "调用时机-11",
    content: "调用时机"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "callback",
    content: "`callback`"
  }, {
    id: "所属接口类-27",
    content: "所属接口类"
  }, {
    id: "hasaudio",
    content: "hasAudio"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-28",
    content: "所属接口类"
  }, {
    id: "hasvideo",
    content: "hasVideo"
  }, {
    id: "返回值-21",
    content: "返回值"
  }, {
    id: "所属接口类-29",
    content: "所属接口类"
  }, {
    id: "initmediaengine",
    content: "initMediaEngine"
  }, {
    id: "自从-24",
    content: "`自从`"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "callback-1",
    content: "`callBack`"
  }, {
    id: "异常-16",
    content: "异常"
  }, {
    id: "所属接口类-30",
    content: "所属接口类"
  }, {
    id: "isaudiomuted",
    content: "isAudioMuted"
  }, {
    id: "自从-25",
    content: "`自从`"
  }, {
    id: "返回值-22",
    content: "返回值"
  }, {
    id: "所属接口类-31",
    content: "所属接口类"
  }, {
    id: "isvideomuted",
    content: "isVideoMuted"
  }, {
    id: "自从-26",
    content: "`自从`"
  }, {
    id: "返回值-23",
    content: "返回值"
  }, {
    id: "所属接口类-32",
    content: "所属接口类"
  }, {
    id: "message",
    content: "message"
  }, {
    id: "自从-27",
    content: "`自从`"
  }, {
    id: "调用时机-12",
    content: "调用时机"
  }, {
    id: "返回值-24",
    content: "返回值"
  }, {
    id: "所属接口类-33",
    content: "所属接口类"
  }, {
    id: "muteaudio",
    content: "muteAudio"
  }, {
    id: "自从-28",
    content: "`自从`"
  }, {
    id: "调用时机-13",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "mute",
    content: "`mute`"
  }, {
    id: "异常-17",
    content: "异常"
  }, {
    id: "所属接口类-34",
    content: "所属接口类"
  }, {
    id: "mutevideo",
    content: "muteVideo"
  }, {
    id: "自从-29",
    content: "`自从`"
  }, {
    id: "调用时机-14",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "mute-1",
    content: "`mute`"
  }, {
    id: "异常-18",
    content: "异常"
  }, {
    id: "所属接口类-35",
    content: "所属接口类"
  }, {
    id: "openwithurl",
    content: "openWithUrl"
  }, {
    id: "自从-30",
    content: "`自从`"
  }, {
    id: "调用时机-15",
    content: "调用时机"
  }, {
    id: "相关回调-2",
    content: "相关回调"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "url",
    content: "`url`"
  }, {
    id: "starttime",
    content: "`startTime`"
  }, {
    id: "callback-2",
    content: "`callback`"
  }, {
    id: "所属接口类-36",
    content: "所属接口类"
  }, {
    id: "pause",
    content: "pause"
  }, {
    id: "自从-31",
    content: "`自从`"
  }, {
    id: "调用时机-16",
    content: "调用时机"
  }, {
    id: "相关回调-3",
    content: "相关回调"
  }, {
    id: "异常-19",
    content: "异常"
  }, {
    id: "所属接口类-37",
    content: "所属接口类"
  }, {
    id: "play",
    content: "play"
  }, {
    id: "自从-32",
    content: "`自从`"
  }, {
    id: "调用时机-17",
    content: "调用时机"
  }, {
    id: "相关回调-4",
    content: "相关回调"
  }, {
    id: "异常-20",
    content: "异常"
  }, {
    id: "所属接口类-38",
    content: "所属接口类"
  }, {
    id: "player",
    content: "Player"
  }, {
    id: "自从-33",
    content: "`自从`"
  }, {
    id: "调用时机-18",
    content: "调用时机"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "rte-1",
    content: "`rte`"
  }, {
    id: "initialconfig",
    content: "`initialConfig`"
  }, {
    id: "所属接口类-39",
    content: "所属接口类"
  }, {
    id: "preloadwithurl",
    content: "preloadWithUrl"
  }, {
    id: "自从-34",
    content: "`自从`"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "调用时机-19",
    content: "调用时机"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "url-1",
    content: "`url`"
  }, {
    id: "异常-21",
    content: "异常"
  }, {
    id: "所属接口类-40",
    content: "所属接口类"
  }, {
    id: "registerobserver",
    content: "registerObserver"
  }, {
    id: "自从-35",
    content: "`自从`"
  }, {
    id: "调用时机-20",
    content: "调用时机"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "observer",
    content: "`observer`"
  }, {
    id: "异常-22",
    content: "异常"
  }, {
    id: "所属接口类-41",
    content: "所属接口类"
  }, {
    id: "removeview",
    content: "removeView"
  }, {
    id: "自从-36",
    content: "`自从`"
  }, {
    id: "调用时机-21",
    content: "调用时机"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "view-1",
    content: "`view`"
  }, {
    id: "viewconfig-1",
    content: "`viewConfig`"
  }, {
    id: "返回值-25",
    content: "返回值"
  }, {
    id: "所属接口类-42",
    content: "所属接口类"
  }, {
    id: "rte-2",
    content: "Rte"
  }, {
    id: "自从-37",
    content: "`自从`"
  }, {
    id: "调用时机-22",
    content: "调用时机"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "initialconfig-1",
    content: "`initialConfig`"
  }, {
    id: "所属接口类-43",
    content: "所属接口类"
  }, {
    id: "seek",
    content: "seek"
  }, {
    id: "自从-38",
    content: "`自从`"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "newtime",
    content: "`newTime`"
  }, {
    id: "异常-23",
    content: "异常"
  }, {
    id: "所属接口类-44",
    content: "所属接口类"
  }, {
    id: "setabrfallbacklayer",
    content: "setAbrFallbackLayer"
  }, {
    id: "自从-39",
    content: "`自从`"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "调用时机-23",
    content: "调用时机"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "fallbacklayer",
    content: "`fallbackLayer`"
  }, {
    id: "异常-24",
    content: "异常"
  }, {
    id: "所属接口类-45",
    content: "所属接口类"
  }, {
    id: "setabrsubscriptionlayer",
    content: "setAbrSubscriptionLayer"
  }, {
    id: "自从-40",
    content: "`自从`"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "调用时机-24",
    content: "调用时机"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "subscriptionlayer",
    content: "`subscriptionLayer`"
  }, {
    id: "异常-25",
    content: "异常"
  }, {
    id: "所属接口类-46",
    content: "所属接口类"
  }, {
    id: "setappid",
    content: "setAppId"
  }, {
    id: "自从-41",
    content: "`自从`"
  }, {
    id: "调用时机-25",
    content: "调用时机"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "appid",
    content: "`appId`"
  }, {
    id: "异常-26",
    content: "异常"
  }, {
    id: "所属接口类-47",
    content: "所属接口类"
  }, {
    id: "setautoplay",
    content: "setAutoPlay"
  }, {
    id: "自从-42",
    content: "`自从`"
  }, {
    id: "调用时机-26",
    content: "调用时机"
  }, {
    id: "参数-20",
    content: "参数"
  }, {
    id: "autoplay",
    content: "`autoPlay`"
  }, {
    id: "异常-27",
    content: "异常"
  }, {
    id: "所属接口类-48",
    content: "所属接口类"
  }, {
    id: "setcanvas",
    content: "setCanvas"
  }, {
    id: "自从-43",
    content: "`自从`"
  }, {
    id: "调用时机-27",
    content: "调用时机"
  }, {
    id: "参数-21",
    content: "参数"
  }, {
    id: "canvas-1",
    content: "`canvas`"
  }, {
    id: "异常-28",
    content: "异常"
  }, {
    id: "所属接口类-49",
    content: "所属接口类"
  }, {
    id: "setconfigs-33",
    content: "setConfigs [3/3]"
  }, {
    id: "自从-44",
    content: "`自从`"
  }, {
    id: "调用时机-28",
    content: "调用时机"
  }, {
    id: "参数-22",
    content: "参数"
  }, {
    id: "config-4",
    content: "`config`"
  }, {
    id: "异常-29",
    content: "异常"
  }, {
    id: "所属接口类-50",
    content: "所属接口类"
  }, {
    id: "setconfigs-23",
    content: "setConfigs [2/3]"
  }, {
    id: "自从-45",
    content: "`自从`"
  }, {
    id: "调用时机-29",
    content: "调用时机"
  }, {
    id: "参数-23",
    content: "参数"
  }, {
    id: "config-5",
    content: "`config`"
  }, {
    id: "异常-30",
    content: "异常"
  }, {
    id: "所属接口类-51",
    content: "所属接口类"
  }, {
    id: "setconfigs-13",
    content: "setConfigs [1/3]"
  }, {
    id: "自从-46",
    content: "`自从`"
  }, {
    id: "调用时机-30",
    content: "调用时机"
  }, {
    id: "参数-24",
    content: "参数"
  }, {
    id: "config-6",
    content: "`config`"
  }, {
    id: "异常-31",
    content: "异常"
  }, {
    id: "所属接口类-52",
    content: "所属接口类"
  }, {
    id: "setjsonparameter",
    content: "setJsonParameter"
  }, {
    id: "自从-47",
    content: "`自从`"
  }, {
    id: "适用场景-4",
    content: "适用场景"
  }, {
    id: "调用时机-31",
    content: "调用时机"
  }, {
    id: "参数-25",
    content: "参数"
  }, {
    id: "jsonparameter",
    content: "`jsonParameter`"
  }, {
    id: "异常-32",
    content: "异常"
  }, {
    id: "所属接口类-53",
    content: "所属接口类"
  }, {
    id: "setloopcount",
    content: "setLoopCount"
  }, {
    id: "自从-48",
    content: "`自从`"
  }, {
    id: "参数-26",
    content: "参数"
  }, {
    id: "count",
    content: "`count`"
  }, {
    id: "异常-33",
    content: "异常"
  }, {
    id: "所属接口类-54",
    content: "所属接口类"
  }, {
    id: "setvideomirrormode",
    content: "setVideoMirrorMode"
  }, {
    id: "自从-49",
    content: "`自从`"
  }, {
    id: "调用时机-32",
    content: "调用时机"
  }, {
    id: "参数-27",
    content: "参数"
  }, {
    id: "mode",
    content: "`mode`"
  }, {
    id: "异常-34",
    content: "异常"
  }, {
    id: "所属接口类-55",
    content: "所属接口类"
  }, {
    id: "setplaybackspeed",
    content: "setPlaybackSpeed"
  }, {
    id: "自从-50",
    content: "`自从`"
  }, {
    id: "参数-28",
    content: "参数"
  }, {
    id: "speed",
    content: "`speed`"
  }, {
    id: "异常-35",
    content: "异常"
  }, {
    id: "所属接口类-56",
    content: "所属接口类"
  }, {
    id: "setplayoutvolume",
    content: "setPlayoutVolume"
  }, {
    id: "自从-51",
    content: "`自从`"
  }, {
    id: "参数-29",
    content: "参数"
  }, {
    id: "volume",
    content: "`volume`"
  }, {
    id: "异常-36",
    content: "异常"
  }, {
    id: "所属接口类-57",
    content: "所属接口类"
  }, {
    id: "setvideorendermode",
    content: "setVideoRenderMode"
  }, {
    id: "自从-52",
    content: "`自从`"
  }, {
    id: "参数-30",
    content: "参数"
  }, {
    id: "mode-1",
    content: "`mode`"
  }, {
    id: "异常-37",
    content: "异常"
  }, {
    id: "所属接口类-58",
    content: "所属接口类"
  }, {
    id: "state",
    content: "state"
  }, {
    id: "返回值-26",
    content: "返回值"
  }, {
    id: "所属接口类-59",
    content: "所属接口类"
  }, {
    id: "stop",
    content: "stop"
  }, {
    id: "自从-53",
    content: "`自从`"
  }, {
    id: "调用时机-33",
    content: "调用时机"
  }, {
    id: "相关回调-5",
    content: "相关回调"
  }, {
    id: "异常-38",
    content: "异常"
  }, {
    id: "所属接口类-60",
    content: "所属接口类"
  }, {
    id: "streamcount",
    content: "streamCount"
  }, {
    id: "返回值-27",
    content: "返回值"
  }, {
    id: "所属接口类-61",
    content: "所属接口类"
  }, {
    id: "switchwithurl",
    content: "switchWithUrl"
  }, {
    id: "自从-54",
    content: "`自从`"
  }, {
    id: "参数-31",
    content: "参数"
  }, {
    id: "url-2",
    content: "`url`"
  }, {
    id: "syncpts",
    content: "`syncPts`"
  }, {
    id: "callback-3",
    content: "`callback`"
  }, {
    id: "所属接口类-62",
    content: "所属接口类"
  }, {
    id: "unregisterobserver",
    content: "unregisterObserver"
  }, {
    id: "自从-55",
    content: "`自从`"
  }, {
    id: "调用时机-34",
    content: "调用时机"
  }, {
    id: "参数-32",
    content: "参数"
  }, {
    id: "observer-1",
    content: "`observer`"
  }, {
    id: "异常-39",
    content: "异常"
  }, {
    id: "所属接口类-63",
    content: "所属接口类"
  }, {
    id: "videoheight",
    content: "videoHeight"
  }, {
    id: "自从-56",
    content: "`自从`"
  }, {
    id: "返回值-28",
    content: "返回值"
  }, {
    id: "所属接口类-64",
    content: "所属接口类"
  }, {
    id: "videowidth",
    content: "videoWidth"
  }, {
    id: "自从-57",
    content: "`自从`"
  }, {
    id: "返回值-29",
    content: "返回值"
  }, {
    id: "所属接口类-65",
    content: "所属接口类"
  }, {
    id: "onaudiovolumeindication",
    content: "onAudioVolumeIndication"
  }, {
    id: "自从-58",
    content: "`自从`"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-33",
    content: "参数"
  }, {
    id: "volume-1",
    content: "`volume`"
  }, {
    id: "所属接口类-66",
    content: "所属接口类"
  }, {
    id: "onevent",
    content: "onEvent"
  }, {
    id: "自从-59",
    content: "`自从`"
  }, {
    id: "触发时机-1",
    content: "触发时机"
  }, {
    id: "参数-34",
    content: "参数"
  }, {
    id: "event",
    content: "`event`"
  }, {
    id: "所属接口类-67",
    content: "所属接口类"
  }, {
    id: "onmetadata-22",
    content: "onMetadata [2/2]"
  }, {
    id: "自从-60",
    content: "`自从`"
  }, {
    id: "触发时机-2",
    content: "触发时机"
  }, {
    id: "参数-35",
    content: "参数"
  }, {
    id: "type",
    content: "`type`"
  }, {
    id: "data",
    content: "`data`"
  }, {
    id: "所属接口类-68",
    content: "所属接口类"
  }, {
    id: "onplayerinfoupdated-22",
    content: "onPlayerInfoUpdated [2/2]"
  }, {
    id: "自从-61",
    content: "`自从`"
  }, {
    id: "触发时机-3",
    content: "触发时机"
  }, {
    id: "参数-36",
    content: "参数"
  }, {
    id: "info-1",
    content: "`info`"
  }, {
    id: "所属接口类-69",
    content: "所属接口类"
  }, {
    id: "onpositionchanged",
    content: "onPositionChanged"
  }, {
    id: "自从-62",
    content: "`自从`"
  }, {
    id: "触发时机-4",
    content: "触发时机"
  }, {
    id: "参数-37",
    content: "参数"
  }, {
    id: "curr_time",
    content: "`curr_time`"
  }, {
    id: "utc_time",
    content: "`utc_time`"
  }, {
    id: "所属接口类-70",
    content: "所属接口类"
  }, {
    id: "onresolutionchanged",
    content: "onResolutionChanged"
  }, {
    id: "自从-63",
    content: "`自从`"
  }, {
    id: "触发时机-5",
    content: "触发时机"
  }, {
    id: "参数-38",
    content: "参数"
  }, {
    id: "width",
    content: "`width`"
  }, {
    id: "height",
    content: "`height`"
  }, {
    id: "所属接口类-71",
    content: "所属接口类"
  }, {
    id: "onresult",
    content: "onResult"
  }, {
    id: "自从-64",
    content: "`自从`"
  }, {
    id: "触发时机-6",
    content: "触发时机"
  }, {
    id: "参数-39",
    content: "参数"
  }, {
    id: "error",
    content: "`error`"
  }, {
    id: "所属接口类-72",
    content: "所属接口类"
  }, {
    id: "onresult-1",
    content: "onResult"
  }, {
    id: "触发时机-7",
    content: "触发时机"
  }, {
    id: "参数-40",
    content: "参数"
  }, {
    id: "playerstats",
    content: "`playerStats`"
  }, {
    id: "error-1",
    content: "`error`"
  }, {
    id: "所属接口类-73",
    content: "所属接口类"
  }, {
    id: "onstatechanged",
    content: "onStateChanged"
  }, {
    id: "自从-65",
    content: "`自从`"
  }, {
    id: "触发时机-8",
    content: "触发时机"
  }, {
    id: "参数-41",
    content: "参数"
  }, {
    id: "old_state",
    content: "`old_state`"
  }, {
    id: "new_state",
    content: "`new_state`"
  }, {
    id: "error-2",
    content: "`error`"
  }, {
    id: "所属接口类-74",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#abrsubscriptionlayer",
  title: _jsx(_Fragment, {
    children: "abrSubscriptionLayer"
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
  url: "#addview",
  title: _jsx(_Fragment, {
    children: "addView"
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
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#view",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "view"
    })
  })
}, {
  depth: 4,
  url: "#viewconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "viewConfig"
    })
  })
}, {
  depth: 3,
  url: "#异常",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-1",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#audiobitspersample",
  title: _jsx(_Fragment, {
    children: "audioBitsPerSample"
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
  url: "#返回值-1",
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
  url: "#audiochannels",
  title: _jsx(_Fragment, {
    children: "audioChannels"
  })
}, {
  depth: 3,
  url: "#返回值-2",
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
  url: "#audiosamplerate",
  title: _jsx(_Fragment, {
    children: "audioSampleRate"
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
  url: "#返回值-3",
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
  url: "#canvas",
  title: _jsx(_Fragment, {
    children: "Canvas"
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
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#rte",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rte"
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
  url: "#所属接口类-5",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#code",
  title: _jsx(_Fragment, {
    children: "code"
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
  url: "#调用时机-1",
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
  url: "#所属接口类-6",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#currenturl",
  title: _jsx(_Fragment, {
    children: "currentUrl"
  })
}, {
  depth: 3,
  url: "#返回值-5",
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
  url: "#destroy",
  title: _jsx(_Fragment, {
    children: "destroy"
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
  url: "#异常-1",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-8",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#duration",
  title: _jsx(_Fragment, {
    children: "duration"
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
  url: "#返回值-6",
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
  url: "#errorcode",
  title: _jsx(_Fragment, {
    children: "errorCode"
  })
}, {
  depth: 3,
  url: "#返回值-7",
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
  url: "#getabrfallbacklayer",
  title: _jsx(_Fragment, {
    children: "getAbrFallbackLayer"
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
  url: "#调用时机-2",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#异常-2",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-8",
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
  url: "#getabrsubscriptionlayer",
  title: _jsx(_Fragment, {
    children: "getAbrSubscriptionLayer"
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
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#异常-3",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-9",
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
  url: "#getappid",
  title: _jsx(_Fragment, {
    children: "getAppId"
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
  url: "#返回值-10",
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
  url: "#getautoplay",
  title: _jsx(_Fragment, {
    children: "getAutoPlay"
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
  url: "#调用时机-4",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#异常-4",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-11",
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
  url: "#getconfigs-33",
  title: _jsx(_Fragment, {
    children: "getConfigs [3/3]"
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
  url: "#调用时机-5",
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
  depth: 3,
  url: "#异常-5",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-15",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getconfigs-23",
  title: _jsx(_Fragment, {
    children: "getConfigs [2/3]"
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
  url: "#调用时机-6",
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
  url: "#config-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
    })
  })
}, {
  depth: 3,
  url: "#异常-6",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-16",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getconfigs-13",
  title: _jsx(_Fragment, {
    children: "getConfigs [1/3]"
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
  url: "#调用时机-7",
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
  url: "#config-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
    })
  })
}, {
  depth: 3,
  url: "#异常-7",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-17",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getfrombridge",
  title: _jsx(_Fragment, {
    children: "getFromBridge"
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
  url: "#调用时机-8",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#异常-8",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-12",
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
  url: "#getinfo",
  title: _jsx(_Fragment, {
    children: "getInfo"
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
  url: "#调用时机-9",
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
  url: "#info",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "info"
    })
  })
}, {
  depth: 3,
  url: "#异常-9",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-19",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#getjsonparameter",
  title: _jsx(_Fragment, {
    children: "getJsonParameter"
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
  url: "#异常-10",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-13",
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
  url: "#getloopcount",
  title: _jsx(_Fragment, {
    children: "getLoopCount"
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
  url: "#异常-11",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-14",
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
  url: "#getvideomirrormode",
  title: _jsx(_Fragment, {
    children: "getVideoMirrorMode"
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
  url: "#异常-12",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-15",
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
  url: "#getplaybackspeed",
  title: _jsx(_Fragment, {
    children: "getPlaybackSpeed"
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
  url: "#异常-13",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-16",
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
  url: "#getplayoutvolume",
  title: _jsx(_Fragment, {
    children: "getPlayoutVolume"
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
  url: "#返回值-17",
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
  url: "#getposition",
  title: _jsx(_Fragment, {
    children: "getPosition"
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
  url: "#异常-14",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-18",
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
  url: "#getvideorendermode",
  title: _jsx(_Fragment, {
    children: "getVideoRenderMode"
  })
}, {
  depth: 4,
  url: "#自从-22",
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
  url: "#异常-15",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#返回值-19",
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
  url: "#getstats",
  title: _jsx(_Fragment, {
    children: "getStats"
  })
}, {
  depth: 4,
  url: "#自从-23",
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
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#callback",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callback"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-27",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#hasaudio",
  title: _jsx(_Fragment, {
    children: "hasAudio"
  })
}, {
  depth: 3,
  url: "#返回值-20",
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
  url: "#hasvideo",
  title: _jsx(_Fragment, {
    children: "hasVideo"
  })
}, {
  depth: 3,
  url: "#返回值-21",
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
  url: "#initmediaengine",
  title: _jsx(_Fragment, {
    children: "initMediaEngine"
  })
}, {
  depth: 4,
  url: "#自从-24",
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
  url: "#callback-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callBack"
    })
  })
}, {
  depth: 3,
  url: "#异常-16",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-30",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#isaudiomuted",
  title: _jsx(_Fragment, {
    children: "isAudioMuted"
  })
}, {
  depth: 4,
  url: "#自从-25",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#所属接口类-31",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#isvideomuted",
  title: _jsx(_Fragment, {
    children: "isVideoMuted"
  })
}, {
  depth: 4,
  url: "#自从-26",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#所属接口类-32",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#message",
  title: _jsx(_Fragment, {
    children: "message"
  })
}, {
  depth: 4,
  url: "#自从-27",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-12",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#返回值-24",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-33",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#muteaudio",
  title: _jsx(_Fragment, {
    children: "muteAudio"
  })
}, {
  depth: 4,
  url: "#自从-28",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-13",
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
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#mute",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mute"
    })
  })
}, {
  depth: 3,
  url: "#异常-17",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-34",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#mutevideo",
  title: _jsx(_Fragment, {
    children: "muteVideo"
  })
}, {
  depth: 4,
  url: "#自从-29",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-14",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-1",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#mute-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mute"
    })
  })
}, {
  depth: 3,
  url: "#异常-18",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-35",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#openwithurl",
  title: _jsx(_Fragment, {
    children: "openWithUrl"
  })
}, {
  depth: 4,
  url: "#自从-30",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-15",
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
  url: "#参数-10",
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
  depth: 4,
  url: "#starttime",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startTime"
    })
  })
}, {
  depth: 4,
  url: "#callback-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callback"
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
  url: "#pause",
  title: _jsx(_Fragment, {
    children: "pause"
  })
}, {
  depth: 4,
  url: "#自从-31",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-16",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-3",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#异常-19",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-37",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#play",
  title: _jsx(_Fragment, {
    children: "play"
  })
}, {
  depth: 4,
  url: "#自从-32",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-17",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-4",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#异常-20",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-38",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#player",
  title: _jsx(_Fragment, {
    children: "Player"
  })
}, {
  depth: 4,
  url: "#自从-33",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-18",
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
  url: "#rte-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "rte"
    })
  })
}, {
  depth: 4,
  url: "#initialconfig",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "initialConfig"
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
  url: "#preloadwithurl",
  title: _jsx(_Fragment, {
    children: "preloadWithUrl"
  })
}, {
  depth: 4,
  url: "#自从-34",
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
  url: "#调用时机-19",
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
  url: "#url-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "url"
    })
  })
}, {
  depth: 3,
  url: "#异常-21",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-40",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#registerobserver",
  title: _jsx(_Fragment, {
    children: "registerObserver"
  })
}, {
  depth: 4,
  url: "#自从-35",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-20",
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
  url: "#observer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "observer"
    })
  })
}, {
  depth: 3,
  url: "#异常-22",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-41",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#removeview",
  title: _jsx(_Fragment, {
    children: "removeView"
  })
}, {
  depth: 4,
  url: "#自从-36",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-21",
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
  url: "#view-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "view"
    })
  })
}, {
  depth: 4,
  url: "#viewconfig-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "viewConfig"
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
  url: "#所属接口类-42",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#rte-2",
  title: _jsx(_Fragment, {
    children: "Rte"
  })
}, {
  depth: 4,
  url: "#自从-37",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-22",
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
  url: "#initialconfig-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "initialConfig"
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
  url: "#seek",
  title: _jsx(_Fragment, {
    children: "seek"
  })
}, {
  depth: 4,
  url: "#自从-38",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#newtime",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "newTime"
    })
  })
}, {
  depth: 3,
  url: "#异常-23",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-44",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setabrfallbacklayer",
  title: _jsx(_Fragment, {
    children: "setAbrFallbackLayer"
  })
}, {
  depth: 4,
  url: "#自从-39",
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
  url: "#调用时机-23",
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
  url: "#fallbacklayer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "fallbackLayer"
    })
  })
}, {
  depth: 3,
  url: "#异常-24",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-45",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setabrsubscriptionlayer",
  title: _jsx(_Fragment, {
    children: "setAbrSubscriptionLayer"
  })
}, {
  depth: 4,
  url: "#自从-40",
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
  url: "#调用时机-24",
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
  url: "#subscriptionlayer",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "subscriptionLayer"
    })
  })
}, {
  depth: 3,
  url: "#异常-25",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-46",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setappid",
  title: _jsx(_Fragment, {
    children: "setAppId"
  })
}, {
  depth: 4,
  url: "#自从-41",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-25",
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
  url: "#appid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "appId"
    })
  })
}, {
  depth: 3,
  url: "#异常-26",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-47",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setautoplay",
  title: _jsx(_Fragment, {
    children: "setAutoPlay"
  })
}, {
  depth: 4,
  url: "#自从-42",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-26",
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
  url: "#autoplay",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "autoPlay"
    })
  })
}, {
  depth: 3,
  url: "#异常-27",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-48",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setcanvas",
  title: _jsx(_Fragment, {
    children: "setCanvas"
  })
}, {
  depth: 4,
  url: "#自从-43",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-27",
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
  url: "#canvas-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "canvas"
    })
  })
}, {
  depth: 3,
  url: "#异常-28",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-49",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setconfigs-33",
  title: _jsx(_Fragment, {
    children: "setConfigs [3/3]"
  })
}, {
  depth: 4,
  url: "#自从-44",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-28",
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
  url: "#config-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
    })
  })
}, {
  depth: 3,
  url: "#异常-29",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-50",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setconfigs-23",
  title: _jsx(_Fragment, {
    children: "setConfigs [2/3]"
  })
}, {
  depth: 4,
  url: "#自从-45",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-29",
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
  url: "#config-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
    })
  })
}, {
  depth: 3,
  url: "#异常-30",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-51",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setconfigs-13",
  title: _jsx(_Fragment, {
    children: "setConfigs [1/3]"
  })
}, {
  depth: 4,
  url: "#自从-46",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-30",
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
  url: "#config-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "config"
    })
  })
}, {
  depth: 3,
  url: "#异常-31",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-52",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setjsonparameter",
  title: _jsx(_Fragment, {
    children: "setJsonParameter"
  })
}, {
  depth: 4,
  url: "#自从-47",
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
  url: "#调用时机-31",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-25",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#jsonparameter",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "jsonParameter"
    })
  })
}, {
  depth: 3,
  url: "#异常-32",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-53",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setloopcount",
  title: _jsx(_Fragment, {
    children: "setLoopCount"
  })
}, {
  depth: 4,
  url: "#自从-48",
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
  url: "#count",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "count"
    })
  })
}, {
  depth: 3,
  url: "#异常-33",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-54",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setvideomirrormode",
  title: _jsx(_Fragment, {
    children: "setVideoMirrorMode"
  })
}, {
  depth: 4,
  url: "#自从-49",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-32",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-27",
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
  url: "#异常-34",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-55",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setplaybackspeed",
  title: _jsx(_Fragment, {
    children: "setPlaybackSpeed"
  })
}, {
  depth: 4,
  url: "#自从-50",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-28",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#speed",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "speed"
    })
  })
}, {
  depth: 3,
  url: "#异常-35",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-56",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setplayoutvolume",
  title: _jsx(_Fragment, {
    children: "setPlayoutVolume"
  })
}, {
  depth: 4,
  url: "#自从-51",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-29",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#volume",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
    })
  })
}, {
  depth: 3,
  url: "#异常-36",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-57",
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
  depth: 4,
  url: "#自从-52",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-30",
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
  url: "#异常-37",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-58",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#state",
  title: _jsx(_Fragment, {
    children: "state"
  })
}, {
  depth: 3,
  url: "#返回值-26",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-59",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#stop",
  title: _jsx(_Fragment, {
    children: "stop"
  })
}, {
  depth: 4,
  url: "#自从-53",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-33",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#相关回调-5",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#异常-38",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-60",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#streamcount",
  title: _jsx(_Fragment, {
    children: "streamCount"
  })
}, {
  depth: 3,
  url: "#返回值-27",
  title: _jsx(_Fragment, {
    children: "返回值"
  })
}, {
  depth: 3,
  url: "#所属接口类-61",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#switchwithurl",
  title: _jsx(_Fragment, {
    children: "switchWithUrl"
  })
}, {
  depth: 4,
  url: "#自从-54",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#参数-31",
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
  url: "#syncpts",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "syncPts"
    })
  })
}, {
  depth: 4,
  url: "#callback-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "callback"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-62",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#unregisterobserver",
  title: _jsx(_Fragment, {
    children: "unregisterObserver"
  })
}, {
  depth: 4,
  url: "#自从-55",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#调用时机-34",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-32",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#observer-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "observer"
    })
  })
}, {
  depth: 3,
  url: "#异常-39",
  title: _jsx(_Fragment, {
    children: "异常"
  })
}, {
  depth: 3,
  url: "#所属接口类-63",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#videoheight",
  title: _jsx(_Fragment, {
    children: "videoHeight"
  })
}, {
  depth: 4,
  url: "#自从-56",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#所属接口类-64",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#videowidth",
  title: _jsx(_Fragment, {
    children: "videoWidth"
  })
}, {
  depth: 4,
  url: "#自从-57",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#所属接口类-65",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onaudiovolumeindication",
  title: _jsx(_Fragment, {
    children: "onAudioVolumeIndication"
  })
}, {
  depth: 4,
  url: "#自从-58",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#参数-33",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#volume-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-66",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onevent",
  title: _jsx(_Fragment, {
    children: "onEvent"
  })
}, {
  depth: 4,
  url: "#自从-59",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#参数-34",
  title: _jsx(_Fragment, {
    children: "参数"
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
  url: "#所属接口类-67",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onmetadata-22",
  title: _jsx(_Fragment, {
    children: "onMetadata [2/2]"
  })
}, {
  depth: 4,
  url: "#自从-60",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#触发时机-2",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-35",
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
  depth: 4,
  url: "#data",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "data"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-68",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onplayerinfoupdated-22",
  title: _jsx(_Fragment, {
    children: "onPlayerInfoUpdated [2/2]"
  })
}, {
  depth: 4,
  url: "#自从-61",
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
  url: "#参数-36",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#info-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "info"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-69",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onpositionchanged",
  title: _jsx(_Fragment, {
    children: "onPositionChanged"
  })
}, {
  depth: 4,
  url: "#自从-62",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#触发时机-4",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-37",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#curr_time",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "curr_time"
    })
  })
}, {
  depth: 4,
  url: "#utc_time",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "utc_time"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-70",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onresolutionchanged",
  title: _jsx(_Fragment, {
    children: "onResolutionChanged"
  })
}, {
  depth: 4,
  url: "#自从-63",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#触发时机-5",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-38",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 3,
  url: "#所属接口类-71",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onresult",
  title: _jsx(_Fragment, {
    children: "onResult"
  })
}, {
  depth: 4,
  url: "#自从-64",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
    })
  })
}, {
  depth: 3,
  url: "#触发时机-6",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-39",
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
  url: "#所属接口类-72",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onresult-1",
  title: _jsx(_Fragment, {
    children: "onResult"
  })
}, {
  depth: 3,
  url: "#触发时机-7",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-40",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#playerstats",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "playerStats"
    })
  })
}, {
  depth: 4,
  url: "#error-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "error"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-73",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#onstatechanged",
  title: _jsx(_Fragment, {
    children: "onStateChanged"
  })
}, {
  depth: 4,
  url: "#自从-65",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "自从"
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
  url: "#参数-41",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#old_state",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "old_state"
    })
  })
}, {
  depth: 4,
  url: "#new_state",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "new_state"
    })
  })
}, {
  depth: 4,
  url: "#error-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "error"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-74",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      id: "toc_rte_player"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_abrsubscriptionlayer"
    }), `
`, _jsx(_components.h2, {
      id: "abrsubscriptionlayer",
      children: "abrSubscriptionLayer"
    }), `
`, _jsx(_components.p, {
      children: "获取当前订阅的视频层级。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_abrsubscriptionlayer__prototype"
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
              children: " Constants.AbrSubscriptionLayer "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "abrSubscriptionLayer"
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
      id: "api_rteplayerinfo_abrsubscriptionlayer__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法仅在打开 RTE URL 时有效。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_abrsubscriptionlayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrsubscriptionlayer",
        children: "AbrSubscriptionLayer"
      }), " 对象。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvas_addview"
    }), `
`, _jsx(_components.h2, {
      id: "addview",
      children: "addView"
    }), `
`, _jsx(_components.p, {
      children: "添加一个渲染视图。"
    }), `
`, _jsx("a", {
      id: "api_canvas_addview__prototype"
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
              children: " addView"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(View view, ViewConfig viewConfig) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvas_addview__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "当你需要使用播放器播放视频时，可以调用该方法将视图添加到视频渲染器中，以显示视频内容。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "当前仅支持一个视图。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_canvas_addview__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "当你需要使用播放器播放视频时，可以调用此方法将视图添加到视频渲染器中，以显示视频内容。"
    }), `
`, _jsx("a", {
      id: "api_canvas_addview__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_setcanvas",
        children: "setCanvas"
      }), " 之前调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_canvas_addview__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "view",
      children: _jsx(_components.code, {
        children: "view"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "SurfaceView"
      }), " 对象。"]
    }), `
`, _jsx(_components.h4, {
      id: "viewconfig",
      children: _jsx(_components.code, {
        children: "viewConfig"
      })
    }), `
`, _jsx(_components.p, {
      children: "视图的相关设置。"
    }), `
`, _jsx("a", {
      id: "api_canvas_addview__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "添加渲染视图失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas",
          children: "Canvas"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiobitspersample"
    }), `
`, _jsx(_components.h2, {
      id: "audiobitspersample",
      children: "audioBitsPerSample"
    }), `
`, _jsx(_components.p, {
      children: "获取每个音频采样点的位数。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiobitspersample__prototype"
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
              children: " audioBitsPerSample"
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
      id: "api_rteplayerinfo_audiobitspersample__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-1",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_audiobitspersample",
            children: "audioBitsPerSample"
          }), " 仅在打开非 RTM URL 时有效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiobitspersample__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回每个音频采样点的位数，单位为 bit。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-2",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiochannels"
    }), `
`, _jsx(_components.h2, {
      id: "audiochannels",
      children: "audioChannels"
    }), `
`, _jsx(_components.p, {
      children: "获取音频通道数。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiochannels__prototype"
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
              children: " audioChannels"
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
      id: "api_rteplayerinfo_audiochannels__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiochannels__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回音频通道数。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-3",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiosamplerate"
    }), `
`, _jsx(_components.h2, {
      id: "audiosamplerate",
      children: "audioSampleRate"
    }), `
`, _jsx(_components.p, {
      children: "获取音频采样率。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiosamplerate__prototype"
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
              children: " audioSampleRate"
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
      id: "api_rteplayerinfo_audiosamplerate__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-2",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_audiosamplerate__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回音频采样率，单位为 Hz。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-4",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvas_canvas_canvas"
    }), `
`, _jsx(_components.h2, {
      id: "canvas",
      children: "Canvas"
    }), `
`, _jsx(_components.p, {
      children: "构造一个 Canvas 对象。"
    }), `
`, _jsx("a", {
      id: "api_canvas_canvas_canvas__prototype"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Canvas"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Rte rte, CanvasInitialConfig config)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvas_canvas_canvas__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-3",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_canvas_canvas_canvas__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "rte",
      children: _jsx(_components.code, {
        children: "rte"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于构造 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas",
        children: "Canvas"
      }), " 的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
        children: "Rte"
      }), " 对象，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
        children: "Rte"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "config",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["初始化配置对象。你可以传入 ", _jsx(_components.code, {
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas",
          children: "Canvas"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_error_code"
    }), `
`, _jsx(_components.h2, {
      id: "code",
      children: "code"
    }), `
`, _jsx(_components.p, {
      children: "获取 API 调用失败时返回的错误码。"
    }), `
`, _jsx("a", {
      id: "api_error_code__prototype"
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
              children: " Constants.ErrorCode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "code"
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
      id: "api_error_code__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-4",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_error_code__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在 API 调用失败时调用此方法获取错误码。"
    }), `
`, _jsx("a", {
      id: "api_error_code__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-4",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用失败时，返回错误码。详见 ErrorCode。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error",
          children: "Error"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_currenturl"
    }), `
`, _jsx(_components.h2, {
      id: "currenturl",
      children: "currentUrl"
    }), `
`, _jsx(_components.p, {
      children: "获取当前正在播放的 URL。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_currenturl__prototype"
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
              children: "currentUrl"
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
      id: "api_rteplayerinfo_currenturl__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_currenturl__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-5",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回当前正在播放的 URL。 方法调用失败，返回空字符串。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-7",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rte_destroy_rte"
    }), `
`, _jsx(_components.h2, {
      id: "destroy",
      children: "destroy"
    }), `
`, _jsx(_components.p, {
      children: "销毁 RTE 对象，释放相关资源。"
    }), `
`, _jsx("a", {
      id: "api_rte_destroy_rte__prototype"
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
              children: " synchronized"
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
              children: " destroy"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_rte_destroy_rte__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-5",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rte_destroy_rte__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-1",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "销毁失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-8",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
          children: "Rte"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_duration"
    }), `
`, _jsx(_components.h2, {
      id: "duration",
      children: "duration"
    }), `
`, _jsx(_components.p, {
      children: "获取当前媒体资源的时长。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_duration__prototype"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " duration"
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
      id: "api_rteplayerinfo_duration__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-6",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法仅在播放本地媒体文件或输入在线媒体流时有效。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_duration__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-6",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回当前媒体资源的时长，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-9",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteexception_errorcode_rteexception"
    }), `
`, _jsx(_components.h2, {
      id: "errorcode",
      children: "errorCode"
    }), `
`, _jsx(_components.p, {
      children: "获取 RteException 中携带的错误码。"
    }), `
`, _jsx("a", {
      id: "api_rteexception_errorcode_rteexception__prototype"
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
              children: " Constants.ErrorCode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "errorCode"
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
      id: "api_rteexception_errorcode_rteexception__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_rteexception_errorcode_rteexception__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-7",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteerrorcode",
        children: "ErrorCode"
      }), " 对象。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-10",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
          children: "RteException"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrfallbacklayer"
    }), `
`, _jsx(_components.h2, {
      id: "getabrfallbacklayer",
      children: "getAbrFallbackLayer"
    }), `
`, _jsx(_components.p, {
      children: "获取已配置的视频流回退选项。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrfallbacklayer__prototype"
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
              children: " Constants.AbrFallbackLayer "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getAbrFallbackLayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrfallbacklayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-7",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrfallbacklayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.code, {
        children: "getConfigs"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrfallbacklayer__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-2",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrfallbacklayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回已配置的视频流回退选项。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrfallbacklayer",
        children: "AbrFallbackLayer"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-11",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrsubscriptionlayer"
    }), `
`, _jsx(_components.h2, {
      id: "getabrsubscriptionlayer",
      children: "getAbrSubscriptionLayer"
    }), `
`, _jsx(_components.p, {
      children: "获取已订阅视频流的质量层级。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrsubscriptionlayer__prototype"
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
              children: " Constants.AbrSubscriptionLayer "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getAbrSubscriptionLayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrsubscriptionlayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-8",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrsubscriptionlayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.code, {
        children: "getConfigs"
      }), " 方法之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrsubscriptionlayer__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-3",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出包含相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常。你需要捕获并处理该异常。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getabrsubscriptionlayer__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-9",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回当前设置的视频质量层级。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrsubscriptionlayer",
        children: "AbrSubscriptionLayer"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-12",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_config_getappid"
    }), `
`, _jsx(_components.h2, {
      id: "getappid",
      children: "getAppId"
    }), `
`, _jsx(_components.p, {
      children: "获取已设置的 App ID。"
    }), `
`, _jsx("a", {
      id: "api_config_getappid__prototype"
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
              children: "getAppId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_config_getappid__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-9",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_config_getappid__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-10",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回已设置的 App ID。 方法调用失败，返回空字符串。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-13",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config",
          children: "Config"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getautoplay"
    }), `
`, _jsx(_components.h2, {
      id: "getautoplay",
      children: "getAutoPlay"
    }), `
`, _jsx(_components.p, {
      children: "获取媒体播放器的自动播放设置。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getautoplay__prototype"
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
              children: " getAutoPlay"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getautoplay__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-10",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getautoplay__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["此方法必须在调用 ", _jsx(_components.code, {
        children: "getConfigs"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getautoplay__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-4",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "获取自动播放设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getautoplay__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-11",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：获取成功。"
      }), `
`, _jsx(_components.li, {
        children: "false：获取失败。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvas_getconfigs_canvas"
    }), `
`, _jsx(_components.h2, {
      id: "getconfigs-33",
      children: "getConfigs [3/3]"
    }), `
`, _jsx(_components.p, {
      children: "获取播放器当前的视频渲染配置。"
    }), `
`, _jsx("a", {
      id: "api_canvas_getconfigs_canvas__prototype"
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
              children: " getConfigs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(CanvasConfig config) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvas_getconfigs_canvas__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-11",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_canvas_getconfigs_canvas__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas",
        children: "Canvas"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_canvas_getconfigs_canvas__parameters"
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
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas",
        children: "Canvas"
      }), " 对象的设置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig",
        children: "CanvasConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_canvas_getconfigs_canvas__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-5",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出包含相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), "。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-15",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas",
          children: "Canvas"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_getconfigs_player"
    }), `
`, _jsx(_components.h2, {
      id: "getconfigs-23",
      children: "getConfigs [2/3]"
    }), `
`, _jsx(_components.p, {
      children: "获取当前媒体播放器的配置选项。"
    }), `
`, _jsx("a", {
      id: "api_player_getconfigs_player__prototype"
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
              children: " getConfigs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerConfig config) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_getconfigs_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-12",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_player_getconfigs_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player",
        children: "Player"
      }), " 之后使用。"]
    }), `
`, _jsx("a", {
      id: "api_player_getconfigs_player__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-2",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体播放器配置对象，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
        children: "PlayerConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_getconfigs_player__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-6",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-16",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rte_getconfigs_rte"
    }), `
`, _jsx(_components.h2, {
      id: "getconfigs-13",
      children: "getConfigs [1/3]"
    }), `
`, _jsx(_components.p, {
      children: "获取 Rte 对象的配置信息。"
    }), `
`, _jsx("a", {
      id: "api_rte_getconfigs_rte__prototype"
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
              children: " getConfigs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Config config) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_rte_getconfigs_rte__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-13",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rte_getconfigs_rte__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_rte_rte",
        children: "Rte"
      }), " 之后使用。"]
    }), `
`, _jsx("a", {
      id: "api_rte_getconfigs_rte__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-3",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config",
        children: "Config"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_rte_getconfigs_rte__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-7",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 并返回相应的错误信息。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-17",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
          children: "Rte"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rte_getfrombridge"
    }), `
`, _jsx(_components.h2, {
      id: "getfrombridge",
      children: "getFromBridge"
    }), `
`, _jsx(_components.p, {
      children: "从 RtcEngine 中桥接一个 RTE 对象。"
    }), `
`, _jsx("a", {
      id: "api_rte_getfrombridge__prototype"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " synchronized"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Rte "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getFromBridge"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_rte_getfrombridge__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-14",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["通过该方法创建的 ", _jsx(_components.code, {
        children: "RTE"
      }), " 对象无需通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine",
        children: "initMediaEngine"
      }), " 进行初始化。如果你尚未创建并初始化 ", _jsx(_components.code, {
        children: "RTC"
      }), " 引擎，可以先调用 ", _jsx(_components.code, {
        children: "RTE"
      }), " 创建一个 ", _jsx(_components.code, {
        children: "RTE"
      }), " 对象，再调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine",
        children: "initMediaEngine"
      }), " 进行初始化。"]
    }), `
`, _jsx("a", {
      id: "api_rte_getfrombridge__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["调用此方法前，请确保已调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/initialize#api_irtcengine_initialize",
        children: "create [2/2]"
      }), " 初始化 ", _jsx(_components.code, {
        children: "RTC"
      }), " 引擎。"]
    }), `
`, _jsx("a", {
      id: "api_rte_getfrombridge__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-8",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 并返回相应的错误信息。你需要捕获并处理该异常。"]
    }), `
`, _jsx("a", {
      id: "api_rte_getfrombridge__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-12",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.code, {
        children: "RTE"
      }), " 对象。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-18",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
          children: "Rte"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_getinfo"
    }), `
`, _jsx(_components.h2, {
      id: "getinfo",
      children: "getInfo"
    }), `
`, _jsx(_components.p, {
      children: "检索与播放器和媒体流相关的信息。"
    }), `
`, _jsx("a", {
      id: "api_player_getinfo__prototype"
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
              children: " getInfo"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerInfo info) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_getinfo__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-15",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_player_getinfo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-9",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player",
        children: "Player"
      }), " 之后使用。"]
    }), `
`, _jsx("a", {
      id: "api_player_getinfo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "info",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["与播放器和媒体流相关的信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
        children: "PlayerInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_getinfo__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-9",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果该方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-19",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_config_getjsonparameter_config"
    }), `
`, _jsx(_components.h2, {
      id: "getjsonparameter",
      children: "getJsonParameter"
    }), `
`, _jsx(_components.p, {
      children: "获取当前设置的 JSON 格式的私有参数集。"
    }), `
`, _jsx("a", {
      id: "api_config_getjsonparameter_config__prototype"
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
              children: "getJsonParameter"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_config_getjsonparameter_config__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-16",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_config_getjsonparameter_config__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-10",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["调用失败，SDK 会抛出 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常，你需要捕获异常并进行处理。"]
    }), `
`, _jsx("a", {
      id: "api_config_getjsonparameter_config__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-13",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功时，返回已设置的 JSON 格式的参数集。 方法调用失败，返回空字符串。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-20",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config",
          children: "Config"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getloopcount"
    }), `
`, _jsx(_components.h2, {
      id: "getloopcount",
      children: "getLoopCount"
    }), `
`, _jsx(_components.p, {
      children: "获取媒体文件的循环播放次数。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getloopcount__prototype"
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
              children: " getLoopCount"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getloopcount__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-17",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getloopcount__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-11",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "获取失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getloopcount__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-14",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回媒体文件的循环播放次数。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-21",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getmirrormode"
    }), `
`, _jsx(_components.h2, {
      id: "getvideomirrormode",
      children: "getVideoMirrorMode"
    }), `
`, _jsx(_components.p, {
      children: "获取视频镜像模式。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getmirrormode__prototype"
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
              children: " Constants.VideoMirrorMode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getVideoMirrorMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getmirrormode__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-18",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getmirrormode__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-12",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "获取视频镜像模式失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getmirrormode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-15",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回视频镜像模式，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideomirrormode",
        children: "VideoMirrorMode"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-22",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig",
          children: "CanvasConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplaybackspeed"
    }), `
`, _jsx(_components.h2, {
      id: "getplaybackspeed",
      children: "getPlaybackSpeed"
    }), `
`, _jsx(_components.p, {
      children: "获取播放速度参数。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplaybackspeed__prototype"
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
              children: " getPlaybackSpeed"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplaybackspeed__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-19",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplaybackspeed__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-13",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "获取播放速度失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplaybackspeed__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-16",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回播放速度的值。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-23",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplayoutvolume"
    }), `
`, _jsx(_components.h2, {
      id: "getplayoutvolume",
      children: "getPlayoutVolume"
    }), `
`, _jsx(_components.p, {
      children: "获取媒体播放器的播放音量。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplayoutvolume__prototype"
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
              children: " getPlayoutVolume"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplayoutvolume__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-20",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_getplayoutvolume__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-17",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回媒体播放器的播放音量级别。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-24",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_getposition"
    }), `
`, _jsx(_components.h2, {
      id: "getposition",
      children: "getPosition"
    }), `
`, _jsx(_components.p, {
      children: "获取当前的播放位置。"
    }), `
`, _jsx("a", {
      id: "api_player_getposition__prototype"
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
              children: " long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getPosition"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_getposition__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-21",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_player_getposition__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-14",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常，并返回相应的错误信息。你需要捕获异常并进行处理。"]
    }), `
`, _jsx("a", {
      id: "api_player_getposition__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-18",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回当前的播放位置，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-25",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getrendermode"
    }), `
`, _jsx(_components.h2, {
      id: "getvideorendermode",
      children: "getVideoRenderMode"
    }), `
`, _jsx(_components.p, {
      children: "获取当前设置的视频镜像模式。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getrendermode__prototype"
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
              children: " Constants.VideoRenderMode "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "getVideoRenderMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getrendermode__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-22",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getrendermode__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-10",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你需要在调用 ", _jsx(_components.code, {
        children: "getConfigs"
      }), " 之后调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getrendermode__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-15",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_getrendermode__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-19",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回当前设置的视频镜像模式。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideomirrormode",
        children: "VideoMirrorMode"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-26",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig",
          children: "CanvasConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_getstats"
    }), `
`, _jsx(_components.h2, {
      id: "getstats",
      children: "getStats"
    }), `
`, _jsx(_components.p, {
      children: "获取播放器当前播放媒体资源的统计信息。"
    }), `
`, _jsx("a", {
      id: "api_player_getstats__prototype"
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
              children: " getStats"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerGetStatsCallback callback)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_getstats__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-23",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "该方法通过回调异步返回播放器的统计信息。"
    }), `
`, _jsx("a", {
      id: "api_player_getstats__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-11",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_getstats__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "callback",
      children: _jsx(_components.code, {
        children: "callback"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于异步接收统计信息和错误信息的回调接口。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playergetstatscallback",
        children: "PlayerGetStatsCallback"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-27",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_hasaudio"
    }), `
`, _jsx(_components.h2, {
      id: "hasaudio",
      children: "hasAudio"
    }), `
`, _jsx(_components.p, {
      children: "判断媒体资源是否包含音频流。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_hasaudio__prototype"
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
              children: " hasAudio"
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
      id: "api_rteplayerinfo_hasaudio__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_hasaudio__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-20",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：媒体资源中包含音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：媒体资源中不包含音频流。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_hasvideo"
    }), `
`, _jsx(_components.h2, {
      id: "hasvideo",
      children: "hasVideo"
    }), `
`, _jsx(_components.p, {
      children: "判断是否包含视频流。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_hasvideo__prototype"
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
              children: " hasVideo"
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
      id: "api_rteplayerinfo_hasvideo__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_hasvideo__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-21",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "true：URL 源包含视频流。 false：URL 源不包含视频流。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-29",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rte_initmediaengine"
    }), `
`, _jsx(_components.h2, {
      id: "initmediaengine",
      children: "initMediaEngine"
    }), `
`, _jsx(_components.p, {
      children: "初始化 RTE 引擎。"
    }), `
`, _jsx("a", {
      id: "api_rte_initmediaengine__prototype"
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
              children: " initMediaEngine"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(AsyncCallback callBack) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_rte_initmediaengine__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-24",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法为异步方法，通过回调函数返回初始化结果。你需要在创建 ", _jsx(_components.code, {
        children: "RTE"
      }), " 对象并设置 App ID 后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_rte_initmediaengine__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "callback-1",
      children: _jsx(_components.code, {
        children: "callBack"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["异步返回引擎初始化结果的回调。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_asynccallback",
        children: "AsyncCallback"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_rte_initmediaengine__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-16",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "初始化失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-30",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
          children: "Rte"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_isaudiomuted"
    }), `
`, _jsx(_components.h2, {
      id: "isaudiomuted",
      children: "isAudioMuted"
    }), `
`, _jsx(_components.p, {
      children: "判断播放器是否停止接收远端音频流。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_isaudiomuted__prototype"
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
              children: " isAudioMuted"
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
      id: "api_rteplayerinfo_isaudiomuted__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-25",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_isaudiomuted__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-22",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：播放器已停止接收远端音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：播放器仍在接收远端音频流。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_isvideomuted"
    }), `
`, _jsx(_components.h2, {
      id: "isvideomuted",
      children: "isVideoMuted"
    }), `
`, _jsx(_components.p, {
      children: "判断播放器是否停止接收远端视频流。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_isvideomuted__prototype"
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
              children: " isVideoMuted"
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
      id: "api_rteplayerinfo_isvideomuted__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-26",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rteplayerinfo_isvideomuted",
            children: "isVideoMuted"
          }), " 接口仅在打开 RTE URL 时有效。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_isvideomuted__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-23",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：播放器已停止接收远端视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：播放器仍在接收远端视频流。"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_error_message"
    }), `
`, _jsx(_components.h2, {
      id: "message",
      children: "message"
    }), `
`, _jsx(_components.p, {
      children: "获取详细的错误信息。"
    }), `
`, _jsx("a", {
      id: "api_error_message__prototype"
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
              children: "message"
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
      id: "api_error_message__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-27",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_error_message__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-12",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "当 API 调用失败时，可以调用该方法获取错误信息，以帮助排查问题。"
    }), `
`, _jsx("a", {
      id: "api_error_message__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-24",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功时，返回错误信息字符串。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回空字符串。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-33",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error",
          children: "Error"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_muteaudio"
    }), `
`, _jsx(_components.h2, {
      id: "muteaudio",
      children: "muteAudio"
    }), `
`, _jsx(_components.p, {
      children: "开始或停止接收音频流。"
    }), `
`, _jsx("a", {
      id: "api_player_muteaudio__prototype"
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
              children: " muteAudio"
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
              children: " mute) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_muteaudio__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-28",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_player_muteaudio__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-13",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需要在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 方法之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_muteaudio__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated",
        children: "onPlayerInfoUpdated"
      }), " 回调，上报最新的播放器和媒体拉流信息。"]
    }), `
`, _jsx("a", {
      id: "api_player_muteaudio__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mute",
      children: _jsx(_components.code, {
        children: "mute"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否接收音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：不接收音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：接收音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_muteaudio__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-17",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用失败时，SDK 会抛出包含错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-34",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_mutevideo"
    }), `
`, _jsx(_components.h2, {
      id: "mutevideo",
      children: "muteVideo"
    }), `
`, _jsx(_components.p, {
      children: "开始或停止接收远端视频流。"
    }), `
`, _jsx("a", {
      id: "api_player_mutevideo__prototype"
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
              children: " muteVideo"
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
              children: " mute) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_mutevideo__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-29",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_player_mutevideo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-14",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_player_mutevideo__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法调用成功后，会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-observer#callback_imediaplayersourceobserver_onplayerinfoupdated",
        children: "onPlayerInfoUpdated"
      }), " 回调，用于上报最新的播放器和媒体流信息。"]
    }), `
`, _jsx("a", {
      id: "api_player_mutevideo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mute-1",
      children: _jsx(_components.code, {
        children: "mute"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否接收远端视频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：不接收远端视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：接收远端视频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_mutevideo__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-18",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出带有相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-35",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_openwithurl"
    }), `
`, _jsx(_components.h2, {
      id: "openwithurl",
      children: "openWithUrl"
    }), `
`, _jsx(_components.p, {
      children: "打开一个 URL 资源。"
    }), `
`, _jsx("a", {
      id: "api_player_openwithurl__prototype"
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
              children: " openWithUrl"
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
              children: "long"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " startTime, AsyncCallback callback)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_openwithurl__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-30",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法支持通过 URL 打开实时流媒体资源。如果你希望加快打开速度，可以在调用该方法前使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_preloadwithurl",
        children: "preloadWithUrl"
      }), " 预加载资源。 如果资源打开失败，你会收到 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged",
        children: "onStateChanged"
      }), " 回调，播放器状态为 ", _jsx(_components.code, {
        children: "FAILED"
      }), "。此时需要先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player",
        children: "stop"
      }), "，然后再次调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 重新打开资源。 如果你关闭了自动播放功能，可以在资源打开后调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player",
        children: "play"
      }), " 开始播放。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法目前仅支持以 ", _jsx(_components.code, {
            children: "rte://"
          }), " 开头的 URL、CDN 推流 URL 和本地媒体文件。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_player_openwithurl__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-15",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player",
        children: "Player"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_openwithurl__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-2",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged",
        children: "onStateChanged"
      }), " 回调，播放器状态为 ", _jsx(_components.code, {
        children: "OPENING"
      }), "，表示正在打开 URL。成功打开后，播放器状态为 ", _jsx(_components.code, {
        children: "OPEN_COMPLETED"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_openwithurl__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要打开的 URL，可以是 CDN 推流 URL、本地媒体文件，或以 ", _jsx(_components.code, {
        children: "rte://"
      }), " 为前缀的 URL。"]
    }), `
`, _jsx(_components.h4, {
      id: "starttime",
      children: _jsx(_components.code, {
        children: "startTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放的起始位置，单位为毫秒。"
    }), `
`, _jsx(_components.h4, {
      id: "callback-2",
      children: _jsx(_components.code, {
        children: "callback"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["异步通知打开 URL 资源结果的回调。你可以通过该回调的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_asynccallback_onresult_asynccallback",
        children: "onResult"
      }), " 方法获取错误信息。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-36",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_pause_player"
    }), `
`, _jsx(_components.h2, {
      id: "pause",
      children: "pause"
    }), `
`, _jsx(_components.p, {
      children: "暂停播放。"
    }), `
`, _jsx("a", {
      id: "api_player_pause_player__prototype"
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
              children: " pause"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_pause_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-31",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player",
        children: "play"
      }), " 播放 URL 资源后，如需暂停播放，可以调用该方法。如需停止播放，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_stop_player",
        children: "stop"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_pause_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-16",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_play_player",
        children: "play"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_pause_player__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-3",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["成功调用该方法后，会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged",
        children: "onStateChanged"
      }), " 回调，报告播放器状态为 ", _jsx(_components.code, {
        children: "PAUSED"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_pause_player__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-19",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果该方法调用失败，SDK 会抛出带有相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-37",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_play_player"
    }), `
`, _jsx(_components.h2, {
      id: "play",
      children: "play"
    }), `
`, _jsx(_components.p, {
      children: "播放一个 URL 资源。"
    }), `
`, _jsx("a", {
      id: "api_player_play_player__prototype"
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
              children: " play"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_play_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-32",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你已关闭自动播放，在使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 成功打开一个在线媒体流后，可以调用该方法开始播放。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法当前仅支持以 ", _jsx(_components.code, {
            children: "rte://"
          }), " 为前缀的 URL。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_player_play_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-17",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["仅在收到状态为 ", _jsx(_components.code, {
        children: "OPEN_COMPLETED"
      }), " 的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged",
        children: "onStateChanged"
      }), " 回调后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_player_play_player__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-4",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged",
        children: "onStateChanged"
      }), " 回调以上报播放器状态。"]
    }), `
`, _jsx("a", {
      id: "api_player_play_player__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-20",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出包含相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-38",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_player_player"
    }), `
`, _jsx(_components.h2, {
      id: "player",
      children: "Player"
    }), `
`, _jsx(_components.p, {
      children: "构造一个 Player 播放器对象。"
    }), `
`, _jsx("a", {
      id: "api_player_player_player__prototype"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Player"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Rte rte, PlayerInitialConfig initialConfig)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_player_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-33",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_player_player_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-18",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine",
        children: "initMediaEngine"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_player_player__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "rte-1",
      children: _jsx(_components.code, {
        children: "rte"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
        children: "Rte"
      }), " 对象。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
        children: "Rte"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "initialconfig",
      children: _jsx(_components.code, {
        children: "initialConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放器对象的初始化设置。你可以传入 ", _jsx(_components.code, {
        children: "null"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-39",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_preloadwithurl"
    }), `
`, _jsx(_components.h2, {
      id: "preloadwithurl",
      children: "preloadWithUrl"
    }), `
`, _jsx(_components.p, {
      children: "预加载 URL 资源。"
    }), `
`, _jsx("a", {
      id: "api_player_preloadwithurl__prototype"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " preloadWithUrl"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String url) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_preloadwithurl__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-34",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["成功预加载资源可以加快使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 打开 URL 资源的速度，从而减少等待时间。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该方法目前仅适用于以 ", _jsx(_components.code, {
            children: "rte://"
          }), " 为前缀的 URL。最多可预加载 20 个 URL，若超过限制，新预加载的 URL 会替换最早的 URL。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_player_preloadwithurl__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在打开媒体资源前预加载，可以减少用户等待时间，提供更流畅的视听体验。"
    }), `
`, _jsx("a", {
      id: "api_player_preloadwithurl__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-19",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 之前调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_player_preloadwithurl__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-1",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["以 ", _jsx(_components.code, {
        children: "rte://"
      }), " 为前缀的 URL。各字段的详细信息参见观众端的“输入在线媒体流”。"]
    }), `
`, _jsx("a", {
      id: "api_player_preloadwithurl__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-21",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出包含相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), "。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-40",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_registerobserver_player"
    }), `
`, _jsx(_components.h2, {
      id: "registerobserver",
      children: "registerObserver"
    }), `
`, _jsx(_components.p, {
      children: "注册播放器的观察者对象。"
    }), `
`, _jsx("a", {
      id: "api_player_registerobserver_player__prototype"
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
              children: " registerObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerObserver observer) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_registerobserver_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-35",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用此方法之前，你需要实现一个继承自 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
        children: "PlayerObserver"
      }), " 的接口类。"]
    }), `
`, _jsx("a", {
      id: "api_player_registerobserver_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-20",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player",
        children: "Player"
      }), " 之后执行。"]
    }), `
`, _jsx("a", {
      id: "api_player_registerobserver_player__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
        children: "PlayerObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_registerobserver_player__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-22",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-41",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvas_removeview"
    }), `
`, _jsx(_components.h2, {
      id: "removeview",
      children: "removeView"
    }), `
`, _jsx(_components.p, {
      children: "移除一个渲染视图。"
    }), `
`, _jsx("a", {
      id: "api_canvas_removeview__prototype"
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
              children: " removeView"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(View view, ViewConfig viewConfig) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvas_removeview__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-36",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "每次只能移除一个视图。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_canvas_removeview__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-21",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_addview",
        children: "addView"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_canvas_removeview__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "view-1",
      children: _jsx(_components.code, {
        children: "view"
      })
    }), `
`, _jsx(_components.p, {
      children: "要移除的视图对象。"
    }), `
`, _jsx(_components.h4, {
      id: "viewconfig-1",
      children: _jsx(_components.code, {
        children: "viewConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "view"
      }), " 对象的设置。"]
    }), `
`, _jsx("a", {
      id: "api_canvas_removeview__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-25",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-42",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas",
          children: "Canvas"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rte_rte_rte"
    }), `
`, _jsx(_components.h2, {
      id: "rte-2",
      children: "Rte"
    }), `
`, _jsx(_components.p, {
      children: "构造一个 Rte 对象。"
    }), `
`, _jsx("a", {
      id: "api_rte_rte_rte__prototype"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Rte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(InitialConfig initialConfig)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_rte_rte_rte__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-37",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rte_rte_rte__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-22",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine",
        children: "initMediaEngine"
      }), " 之前调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_rte_rte_rte__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "initialconfig-1",
      children: _jsx(_components.code, {
        children: "initialConfig"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["初始化设置。你可以传入 ", _jsx(_components.code, {
        children: "null"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-43",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
          children: "Rte"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_seek"
    }), `
`, _jsx(_components.h2, {
      id: "seek",
      children: "seek"
    }), `
`, _jsx(_components.p, {
      children: "跳转到指定的播放位置。"
    }), `
`, _jsx("a", {
      id: "api_player_seek__prototype"
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
              children: " seek"
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
              children: " newTime) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_seek__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-38",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_player_seek__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "newtime",
      children: _jsx(_components.code, {
        children: "newTime"
      })
    }), `
`, _jsx(_components.p, {
      children: "要跳转到的播放位置，单位为毫秒。"
    }), `
`, _jsx("a", {
      id: "api_player_seek__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-23",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常，并返回相应的错误信息。你需要捕获异常并进行处理。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-44",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrfallbacklayer"
    }), `
`, _jsx(_components.h2, {
      id: "setabrfallbacklayer",
      children: "setAbrFallbackLayer"
    }), `
`, _jsx(_components.p, {
      children: "设置已订阅远端视频流的回退选项。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrfallbacklayer__prototype"
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
              children: " setAbrFallbackLayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.AbrFallbackLayer fallbackLayer) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrfallbacklayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-39",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "在网络状况不佳时，SDK 会将已订阅远端视频流的分辨率降级到指定的视频质量层。每个质量层对应特定的分辨率和码率。网络恢复后，SDK 会将视频流恢复至原始质量层。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果未开启 ABR 功能，视频流的回退质量层只能设置为 ", _jsx(_components.code, {
            children: "LOW"
          }), " 或 ", _jsx(_components.code, {
            children: "AUDIO_ONLY"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrfallbacklayer__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsxs(_components.p, {
      children: ["一般场景下，可调用该方法并将回退质量层设置为 ", _jsx(_components.code, {
        children: "kRteAbrFallbackLow"
      }), " 或 ", _jsx(_components.code, {
        children: "kRteAbrFallbackAudioOnly"
      }), "。当网络较差时，SDK 会回退为视频小流或仅接收音频流。 如果对回退视频流的分辨率有更高要求，可", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "开启 ABR 功能。开启后，可自定义每一层的分辨率。SDK 会以你指定的最低质量层的分辨率为下限，并根据网络状况在该范围内动态调整分辨率。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrfallbacklayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-23",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["必须在调用 ", _jsx(_components.code, {
        children: "setConfigs"
      }), " 之前调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrfallbacklayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "fallbacklayer",
      children: _jsx(_components.code, {
        children: "fallbackLayer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["视频流的回退质量层，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrfallbacklayer",
        children: "AbrFallbackLayer"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注： 自定义分辨率时，请确保视频质量层按从高到低的分辨率排序；若分辨率相同，则按帧率从高到低排序。"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "视频质量层"
          }), _jsx(_components.th, {
            children: "分辨率"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER1"
            })
          }), _jsx(_components.td, {
            children: "2160p (4K)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER2"
            })
          }), _jsx(_components.td, {
            children: "1440p (2K)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER3"
            })
          }), _jsx(_components.td, {
            children: "1080p (HD)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER4"
            })
          }), _jsx(_components.td, {
            children: "720p (HD)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER5"
            })
          }), _jsx(_components.td, {
            children: "540p (SD)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER6"
            })
          }), _jsx(_components.td, {
            children: "480p (SD)"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrfallbacklayer__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-24",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-45",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrsubscriptionlayer"
    }), `
`, _jsx(_components.h2, {
      id: "setabrsubscriptionlayer",
      children: "setAbrSubscriptionLayer"
    }), `
`, _jsx(_components.p, {
      children: "设置订阅媒体流的视频质量等级。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrsubscriptionlayer__prototype"
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
              children: " setAbrSubscriptionLayer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.AbrSubscriptionLayer subscriptionLayer) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrsubscriptionlayer__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-40",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以根据实际网络状况，在所订阅的视频流中切换不同的视频质量等级。如果你需要更高级的视频分辨率切换控制，可以", _jsx(_components.a, {
        href: "https://ticket.shengwang.cn/",
        children: "联系技术支持"
      }), "开启 ABR（自适应码率）功能。开启后，你可以为每个视频质量等级自定义分辨率，使观众可以根据需要在多质量层级视频流的所有等级之间切换。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果未开启 ABR 功能，你只能订阅 ", _jsx(_components.code, {
            children: "HIGH"
          }), " 或 ", _jsx(_components.code, {
            children: "LOW"
          }), " 视频质量等级。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrsubscriptionlayer__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "在网络环境不稳定的场景中，订阅端可根据实际网络状况选择合适的视频质量层级，以保障流畅的观看体验。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrsubscriptionlayer__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-24",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.code, {
        children: "setConfigs"
      }), " 之前调用。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrsubscriptionlayer__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "subscriptionlayer",
      children: _jsx(_components.code, {
        children: "subscriptionLayer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要订阅的视频质量等级，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteabrsubscriptionlayer",
        children: "AbrSubscriptionLayer"
      }), "。在自定义 ", _jsx(_components.code, {
        children: "LAYER1"
      }), " 到 ", _jsx(_components.code, {
        children: "LAYER6"
      }), " 的分辨率时，你可以参考下表，或根据实际需求进行配置： 注意：自定义分辨率时，必须按分辨率从高到低排序各视频质量等级（Layer），若分辨率相同，则按帧率从高到低排序。"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "视频质量等级"
          }), _jsx(_components.th, {
            children: "分辨率"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER1"
            })
          }), _jsx(_components.td, {
            children: "2160p (4K)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER2"
            })
          }), _jsx(_components.td, {
            children: "1440p (2K)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER3"
            })
          }), _jsx(_components.td, {
            children: "1080p (HD)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER4"
            })
          }), _jsx(_components.td, {
            children: "720p (HD)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER5"
            })
          }), _jsx(_components.td, {
            children: "540p (SD)"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LAYER6"
            })
          }), _jsx(_components.td, {
            children: "480p (SD)"
          })]
        })]
      })]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setabrsubscriptionlayer__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-25",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出包含相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 异常。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-46",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_config_setappid"
    }), `
`, _jsx(_components.h2, {
      id: "setappid",
      children: "setAppId"
    }), `
`, _jsx(_components.p, {
      children: "设置项目的声网 App ID。"
    }), `
`, _jsx("a", {
      id: "api_config_setappid__prototype"
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
              children: " setAppId"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String appId) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_config_setappid__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-41",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_config_setappid__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-25",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_initmediaengine",
        children: "initMediaEngine"
      }), " 之前调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_config_setappid__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "appid",
      children: _jsx(_components.code, {
        children: "appId"
      })
    }), `
`, _jsx(_components.p, {
      children: "声网 App ID，可从控制台获取。"
    }), `
`, _jsx("a", {
      id: "api_config_setappid__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-26",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-47",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config",
          children: "Config"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setautoplay"
    }), `
`, _jsx(_components.h2, {
      id: "setautoplay",
      children: "setAutoPlay"
    }), `
`, _jsx(_components.p, {
      children: "设置是否启用自动播放。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setautoplay__prototype"
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
              children: " setAutoPlay"
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
              children: " autoPlay) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setautoplay__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-42",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 之前调用此方法设置是否启用自动播放。如果未设置，默认启用自动播放。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setautoplay__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-26",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["此方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 之前调用。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setautoplay__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-20",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "autoplay",
      children: _jsx(_components.code, {
        children: "autoPlay"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否启用自动播放："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）启用自动播放。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭自动播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setautoplay__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-27",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-48",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_setcanvas"
    }), `
`, _jsx(_components.h2, {
      id: "setcanvas",
      children: "setCanvas"
    }), `
`, _jsx(_components.p, {
      children: "设置用于显示视频的视图窗口。"
    }), `
`, _jsx("a", {
      id: "api_player_setcanvas__prototype"
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
              children: " setCanvas"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Canvas canvas) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_setcanvas__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-43",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法用于设置用于显示视频的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas",
        children: "Canvas"
      }), " 对象。"]
    }), `
`, _jsx("a", {
      id: "api_player_setcanvas__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-27",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player",
        children: "Player"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_setcanvas__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-21",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "canvas-1",
      children: _jsx(_components.code, {
        children: "canvas"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于渲染视频帧的对象，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas",
        children: "Canvas"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_setcanvas__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-28",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-49",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvas_setconfigs_canvas"
    }), `
`, _jsx(_components.h2, {
      id: "setconfigs-33",
      children: "setConfigs [3/3]"
    }), `
`, _jsx(_components.p, {
      children: "设置播放器的视频渲染配置。"
    }), `
`, _jsx("a", {
      id: "api_canvas_setconfigs_canvas__prototype"
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
              children: " setConfigs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(CanvasConfig config) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvas_setconfigs_canvas__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-44",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_canvas_setconfigs_canvas__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-28",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需要在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 之前调用。"]
    }), `
`, _jsx("a", {
      id: "api_canvas_setconfigs_canvas__parameters"
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
      children: ["用于设置 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_canvas_canvas_canvas",
        children: "Canvas"
      }), " 对象的配置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig",
        children: "CanvasConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_canvas_setconfigs_canvas__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-29",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-50",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvas",
          children: "Canvas"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_setconfigs_player"
    }), `
`, _jsx(_components.h2, {
      id: "setconfigs-23",
      children: "setConfigs [2/3]"
    }), `
`, _jsx(_components.p, {
      children: "设置播放器配置。"
    }), `
`, _jsx("a", {
      id: "api_player_setconfigs_player__prototype"
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
              children: " setConfigs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerConfig config) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_setconfigs_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-45",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx(_components.p, {
      children: "你可以调用此方法配置播放器，例如启用自动播放、订阅不同分辨率和码率的视频流。"
    }), `
`, _jsx("a", {
      id: "api_player_setconfigs_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-29",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["此方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_player_player",
        children: "Player"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_setconfigs_player__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-23",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-5",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放器配置对象，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
        children: "PlayerConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_setconfigs_player__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-30",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出包含相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), "。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-51",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rte_setconfigs_rte"
    }), `
`, _jsx(_components.h2, {
      id: "setconfigs-13",
      children: "setConfigs [1/3]"
    }), `
`, _jsx(_components.p, {
      children: "配置 RTE 对象的信息。"
    }), `
`, _jsx("a", {
      id: "api_rte_setconfigs_rte__prototype"
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
              children: " setConfigs"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Config config) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_rte_setconfigs_rte__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-46",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rte_setconfigs_rte__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-30",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_rte_rte_rte",
        children: "Rte"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_rte_setconfigs_rte__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-24",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "config-6",
      children: _jsx(_components.code, {
        children: "config"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["用于设置 ", _jsx(_components.code, {
        children: "RTE"
      }), " 对象的配置信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config",
        children: "Config"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_rte_setconfigs_rte__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-31",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), " 并返回相应的错误信息。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-52",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rte",
          children: "Rte"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_config_setjsonparameter_config"
    }), `
`, _jsx(_components.h2, {
      id: "setjsonparameter",
      children: "setJsonParameter"
    }), `
`, _jsx(_components.p, {
      children: "通过 JSON 配置 SDK 的技术预览或定制化功能。"
    }), `
`, _jsx("a", {
      id: "api_config_setjsonparameter_config__prototype"
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
              children: " setJsonParameter"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String jsonParameter) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_config_setjsonparameter_config__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-47",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_config_setjsonparameter_config__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-4",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "当你需要设置私有参数或使用定制化功能时，可以调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_config_setjsonparameter_config__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-31",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["此方法必须在调用 ", _jsx(_components.code, {
        children: "setConfigs"
      }), " 之前调用。"]
    }), `
`, _jsx("a", {
      id: "api_config_setjsonparameter_config__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-25",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "jsonparameter",
      children: _jsx(_components.code, {
        children: "jsonParameter"
      })
    }), `
`, _jsx(_components.p, {
      children: "JSON 字符串格式的参数。"
    }), `
`, _jsx("a", {
      id: "api_config_setjsonparameter_config__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-32",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: ["如果方法调用失败，SDK 会抛出包含相应错误信息的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), "。你需要捕获并处理该异常。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-53",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-config",
          children: "Config"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setloopcount"
    }), `
`, _jsx(_components.h2, {
      id: "setloopcount",
      children: "setLoopCount"
    }), `
`, _jsx(_components.p, {
      children: "设置媒体文件在播放期间循环播放的次数。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setloopcount__prototype"
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
              children: " setLoopCount"
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
              children: " count) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setloopcount__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-48",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setloopcount__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-26",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "count",
      children: _jsx(_components.code, {
        children: "count"
      })
    }), `
`, _jsx(_components.p, {
      children: "媒体文件循环播放的次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "1：播放一次。"
      }), `
`, _jsx(_components.li, {
        children: "2：播放两次。"
      }), `
`, _jsx(_components.li, {
        children: "-1：无限循环播放，直到调用 stop 停止播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setloopcount__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-33",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "设置失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-54",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setmirrormode"
    }), `
`, _jsx(_components.h2, {
      id: "setvideomirrormode",
      children: "setVideoMirrorMode"
    }), `
`, _jsx(_components.p, {
      children: "设置视频镜像模式。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setmirrormode__prototype"
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
              children: " setVideoMirrorMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoMirrorMode mode) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setmirrormode__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-49",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.code, {
        children: "setConfigs"
      }), " 方法之前调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setmirrormode__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-32",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须在调用 ", _jsx(_components.code, {
        children: "setConfigs"
      }), " 之前调用此方法。"]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setmirrormode__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-27",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["镜像模式，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideomirrormode",
        children: "VideoMirrorMode"
      }), "。默认值为 ", _jsx(_components.code, {
        children: "AUTO"
      }), "，由 SDK 自动决定镜像模式。"]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setmirrormode__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-34",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "方法调用失败时，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-55",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig",
          children: "CanvasConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplaybackspeed"
    }), `
`, _jsx(_components.h2, {
      id: "setplaybackspeed",
      children: "setPlaybackSpeed"
    }), `
`, _jsx(_components.p, {
      children: "设置播放速度参数。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplaybackspeed__prototype"
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
              children: " setPlaybackSpeed"
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
              children: " speed) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplaybackspeed__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-50",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplaybackspeed__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-28",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "speed",
      children: _jsx(_components.code, {
        children: "speed"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放速度。有效范围为 [50, 400]。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplaybackspeed__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-35",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "设置播放速度失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-56",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplayoutvolume"
    }), `
`, _jsx(_components.h2, {
      id: "setplayoutvolume",
      children: "setPlayoutVolume"
    }), `
`, _jsx(_components.p, {
      children: "设置播放音量参数。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplayoutvolume__prototype"
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
              children: " setPlayoutVolume"
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
              children: " volume) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplayoutvolume__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-51",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplayoutvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-29",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放器的音量值。有效范围为 [0, 400]。"
    }), `
`, _jsx("a", {
      id: "api_playerconfig_setplayoutvolume__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-36",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "设置播放音量失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-57",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerconfig",
          children: "PlayerConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setrendermode_canvasconfig"
    }), `
`, _jsx(_components.h2, {
      id: "setvideorendermode",
      children: "setVideoRenderMode"
    }), `
`, _jsx(_components.p, {
      children: "设置视频渲染模式。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setrendermode_canvasconfig__prototype"
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
              children: " setVideoRenderMode"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Constants.VideoRenderMode mode) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setrendermode_canvasconfig__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-52",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setrendermode_canvasconfig__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-30",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mode-1",
      children: _jsx(_components.code, {
        children: "mode"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要设置的视频渲染模式，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rtevideorendermode",
        children: "VideoRenderMode"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["默认值为 ", _jsx(_components.code, {
            children: "VideoRenderMode.HIDDEN"
          }), "。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_canvasconfig_setrendermode_canvasconfig__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-37",
      children: "异常"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteexception",
        children: "RteException"
      }), "： ", _jsx(_components.code, {
        children: "RteException.errorCode()"
      }), " 可能返回以下错误码："]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "ErrorCode.INVALID_ARGUMENT： mode 参数设置为非法值。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-58",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_canvasconfig",
          children: "CanvasConfig"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_state"
    }), `
`, _jsx(_components.h2, {
      id: "state",
      children: "state"
    }), `
`, _jsx(_components.p, {
      children: "获取当前播放器状态。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_state__prototype"
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
              children: " state"
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
      id: "api_rteplayerinfo_state__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_state__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-26",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回当前播放器的状态。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-59",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_stop_player"
    }), `
`, _jsx(_components.h2, {
      id: "stop",
      children: "stop"
    }), `
`, _jsx(_components.p, {
      children: "停止播放媒体资源。"
    }), `
`, _jsx("a", {
      id: "api_player_stop_player__prototype"
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
              children: " stop"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "() throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_stop_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-53",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["如果使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 打开 URL 流失败，你需要先调用该方法，然后再调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 重新打开 URL。"]
    }), `
`, _jsx("a", {
      id: "api_player_stop_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-33",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_openwithurl",
        children: "openWithUrl"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_stop_player__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-5",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["调用成功后，该方法会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#callback_playerobserver_onstatechanged",
        children: "onStateChanged"
      }), " 回调，并上报播放器状态为 ", _jsx(_components.code, {
        children: "STOPPED"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_stop_player__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-38",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-60",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_streamcount"
    }), `
`, _jsx(_components.h2, {
      id: "streamcount",
      children: "streamCount"
    }), `
`, _jsx(_components.p, {
      children: "获取当前播放源中的流的数量。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_streamcount__prototype"
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
              children: " streamCount"
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
      id: "api_rteplayerinfo_streamcount__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法仅在打开非 RTE URL 时有效。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_streamcount__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-27",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回流的数量。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-61",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_switchwithurl"
    }), `
`, _jsx(_components.h2, {
      id: "switchwithurl",
      children: "switchWithUrl"
    }), `
`, _jsx(_components.p, {
      children: "在播放过程中切换到新的 URL。"
    }), `
`, _jsx("a", {
      id: "api_player_switchwithurl__prototype"
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
              children: " switchWithUrl"
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
              children: "boolean"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " syncPts, AsyncCallback callback)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_switchwithurl__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-54",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["当 SDK 返回播放器状态为 ", _jsx(_components.code, {
        children: "OPEN_COMPLETED"
      }), " 时，必须调用该方法。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该方法仅在播放器打开非 RTE URL 时有效。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_player_switchwithurl__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-31",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "url-2",
      children: _jsx(_components.code, {
        children: "url"
      })
    }), `
`, _jsx(_components.p, {
      children: "要切换的 URL 资源。"
    }), `
`, _jsx(_components.h4, {
      id: "syncpts",
      children: _jsx(_components.code, {
        children: "syncPts"
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：同步播放位置。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不同步播放位置。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "callback-3",
      children: _jsx(_components.code, {
        children: "callback"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["异步通知切换操作结果的回调。你可以通过该回调的 ", _jsx(_components.code, {
        children: "err"
      }), " 参数得知操作的结果或错误码信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_asynccallback",
        children: "AsyncCallback"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-62",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_player_unregisterobserver_player"
    }), `
`, _jsx(_components.h2, {
      id: "unregisterobserver",
      children: "unregisterObserver"
    }), `
`, _jsx(_components.p, {
      children: "取消注册媒体播放器事件观察者对象。"
    }), `
`, _jsx("a", {
      id: "api_player_unregisterobserver_player__prototype"
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
              children: " unregisterObserver"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerObserver observer) throws RteException"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_player_unregisterobserver_player__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-55",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
        children: "registerObserver"
      }), " 注册媒体播放器事件观察者对象后，如需取消注册，请调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_player_unregisterobserver_player__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-34",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法必须在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
        children: "registerObserver"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_player_unregisterobserver_player__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-32",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "observer-1",
      children: _jsx(_components.code, {
        children: "observer"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
        children: "PlayerObserver"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_player_unregisterobserver_player__exception"
    }), `
`, _jsx(_components.h3, {
      id: "异常-39",
      children: "异常"
    }), `
`, _jsx(_components.p, {
      children: "如果方法调用失败，SDK 会抛出异常，并返回相应的错误信息。你需要捕获异常并进行处理。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-63",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_player",
          children: "Player"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_videoheight"
    }), `
`, _jsx(_components.h2, {
      id: "videoheight",
      children: "videoHeight"
    }), `
`, _jsx(_components.p, {
      children: "获取视频分辨率的高度。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_videoheight__prototype"
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
              children: " videoHeight"
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
      id: "api_rteplayerinfo_videoheight__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-56",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_videoheight__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-28",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回视频分辨率的高度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-64",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_videowidth"
    }), `
`, _jsx(_components.h2, {
      id: "videowidth",
      children: "videoWidth"
    }), `
`, _jsx(_components.p, {
      children: "获取视频分辨率的宽度。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_videowidth__prototype"
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
              children: " videoWidth"
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
      id: "api_rteplayerinfo_videowidth__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-57",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.5.1 版本新增。"
    }), `
`, _jsx("a", {
      id: "api_rteplayerinfo_videowidth__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-29",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "方法调用成功，返回视频分辨率的宽度，单位为像素。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-65",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
          children: "PlayerInfo"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onaudiovolumeindication_playerobserver"
    }), `
`, _jsx(_components.h2, {
      id: "onaudiovolumeindication",
      children: "onAudioVolumeIndication"
    }), `
`, _jsx(_components.p, {
      children: "播放器音量变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onaudiovolumeindication_playerobserver__prototype"
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
              children: " onAudioVolumeIndication"
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
              children: " volume)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onaudiovolumeindication_playerobserver__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-58",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onaudiovolumeindication_playerobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器音量发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onaudiovolumeindication_playerobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-33",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume-1",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放器当前的音量，取值范围为 [0, 225]。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-66",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
          children: "PlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onevent"
    }), `
`, _jsx(_components.h2, {
      id: "onevent",
      children: "onEvent"
    }), `
`, _jsx(_components.p, {
      children: "播放器事件回调。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onevent__prototype"
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
              children: " onEvent"
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
              children: " event)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onevent__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-59",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你需要监听播放器事件，必须先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
        children: "registerObserver"
      }), " 注册播放器观察者对象。"]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onevent__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-1",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器事件发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onevent__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-34",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "event",
      children: _jsx(_components.code, {
        children: "event"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放器事件。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["详见 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteplayerevent",
            children: "PlayerEvent"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-67",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
          children: "PlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onmetadata_playerobserver"
    }), `
`, _jsx(_components.h2, {
      id: "onmetadata-22",
      children: "onMetadata [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "接收媒体流附加信息的回调。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onmetadata_playerobserver__prototype"
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
              children: " onMetadata"
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
              children: " type, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "byte"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] data)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onmetadata_playerobserver__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-60",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
        children: "registerObserver"
      }), " 注册播放器观察者对象后，才能接收媒体流中的附加信息。"]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onmetadata_playerobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-2",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在 SDK 解析播放器正在播放的媒体流中的附加信息后触发，报告数据类型及其具体内容。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onmetadata_playerobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-35",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "type",
      children: _jsx(_components.code, {
        children: "type"
      })
    }), `
`, _jsx(_components.p, {
      children: "附加信息的类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：SEI（Supplemental Enhancement Information）类型。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "data",
      children: _jsx(_components.code, {
        children: "data"
      })
    }), `
`, _jsx(_components.p, {
      children: "解析后的附加信息。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-68",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
          children: "PlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onplayerinfoupdated_playerobserver"
    }), `
`, _jsx(_components.h2, {
      id: "onplayerinfoupdated-22",
      children: "onPlayerInfoUpdated [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "播放器和媒体流信息发生变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onplayerinfoupdated_playerobserver__prototype"
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
              children: " onPlayerInfoUpdated"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerInfo info)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onplayerinfoupdated_playerobserver__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-61",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
        children: "registerObserver"
      }), " 注册播放器观察者对象来获取播放器和媒体流的信息，也可以直接调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_getinfo",
        children: "getInfo"
      }), " 方法获取信息。"]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onplayerinfoupdated_playerobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-3",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器和媒体流信息发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onplayerinfoupdated_playerobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-36",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "info-1",
      children: _jsx(_components.code, {
        children: "info"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["播放器及媒体流的相关信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_rteplayerinfo",
        children: "PlayerInfo"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-69",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
          children: "PlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onpositionchanged_playerobserver"
    }), `
`, _jsx(_components.h2, {
      id: "onpositionchanged",
      children: "onPositionChanged"
    }), `
`, _jsx(_components.p, {
      children: "播放进度变化回调。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onpositionchanged_playerobserver__prototype"
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
              children: " onPositionChanged"
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
              children: " curr_time, "
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
              children: " utc_time)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onpositionchanged_playerobserver__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-62",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onpositionchanged_playerobserver__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-4",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在媒体资源播放过程中每秒触发一次。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onpositionchanged_playerobserver__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-37",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "curr_time",
      children: _jsx(_components.code, {
        children: "curr_time"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前播放进度，单位为毫秒。"
    }), `
`, _jsx(_components.h4, {
      id: "utc_time",
      children: _jsx(_components.code, {
        children: "utc_time"
      })
    }), `
`, _jsx(_components.p, {
      children: "当前 NTP（网络时间协议）时间，单位为毫秒。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-70",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
          children: "PlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onresolutionchanged"
    }), `
`, _jsx(_components.h2, {
      id: "onresolutionchanged",
      children: "onResolutionChanged"
    }), `
`, _jsx(_components.p, {
      children: "视频分辨率变化的回调。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onresolutionchanged__prototype"
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
              children: " onResolutionChanged"
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
              children: " height)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onresolutionchanged__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-63",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["你必须先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
        children: "registerObserver"
      }), " 注册一个播放器观察者对象，才能监听视频流分辨率的变化。"]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onresolutionchanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-5",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在视频流的分辨率发生变化时被触发，报告当前视频的宽度和高度。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onresolutionchanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-38",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "width",
      children: _jsx(_components.code, {
        children: "width"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的宽度，单位为 px。"
    }), `
`, _jsx(_components.h4, {
      id: "height",
      children: _jsx(_components.code, {
        children: "height"
      })
    }), `
`, _jsx(_components.p, {
      children: "视频帧的高度，单位为 px。"
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-71",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
          children: "PlayerObserver"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_asynccallback_onresult_asynccallback"
    }), `
`, _jsx(_components.h2, {
      id: "onresult",
      children: "onResult"
    }), `
`, _jsx(_components.p, {
      children: "onResult 回调，用于报告异步操作的结果。"
    }), `
`, _jsx("a", {
      id: "callback_asynccallback_onresult_asynccallback__prototype"
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
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(Error error);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_asynccallback_onresult_asynccallback__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-64",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsx("a", {
      id: "callback_asynccallback_onresult_asynccallback__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-6",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在异步操作完成时被触发，用于报告操作结果。"
    }), `
`, _jsx("a", {
      id: "callback_asynccallback_onresult_asynccallback__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-39",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "error",
      children: _jsx(_components.code, {
        children: "error"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["状态码或错误码。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error",
        children: "Error"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-72",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_asynccallback",
          children: "AsyncCallback"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playergetstatscallback_onresult_playergetstatscallback"
    }), `
`, _jsx(_components.h2, {
      id: "onresult-1",
      children: "onResult"
    }), `
`, _jsx(_components.p, {
      children: "异步获取媒体资源统计信息操作完成时触发的回调。"
    }), `
`, _jsx("a", {
      id: "callback_playergetstatscallback_onresult_playergetstatscallback__prototype"
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
              children: " void"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " onResult"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(PlayerStats playerStats, Error error);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playergetstatscallback_onresult_playergetstatscallback__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_playergetstatscallback_onresult_playergetstatscallback__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-7",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在异步获取媒体资源信息的操作完成时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_playergetstatscallback_onresult_playergetstatscallback__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-40",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "playerstats",
      children: _jsx(_components.code, {
        children: "playerStats"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体资源的统计信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rteplayerstats",
        children: "PlayerStats"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "error-1",
      children: _jsx(_components.code, {
        children: "error"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["状态和错误信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error",
        children: "Error"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-73",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playergetstatscallback",
          children: "PlayerGetStatsCallback"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onstatechanged"
    }), `
`, _jsx(_components.h2, {
      id: "onstatechanged",
      children: "onStateChanged"
    }), `
`, _jsx(_components.p, {
      children: "播放器状态变化的回调。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onstatechanged__prototype"
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
              children: " onStateChanged"
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
              children: " old_state, "
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
              children: " new_state, Error error)"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onstatechanged__detailed_desc"
    }), `
`, _jsx(_components.h4, {
      id: "自从-65",
      children: _jsx(_components.code, {
        children: "自从"
      })
    }), `
`, _jsx(_components.p, {
      children: "自 v4.4.0 版本新增。"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你需要监听播放器状态的变化，必须先调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/rte-player#api_player_registerobserver_player",
        children: "registerObserver"
      }), " 注册播放器观察者对象。"]
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onstatechanged__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机-8",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在播放器状态发生变化时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_playerobserver_onstatechanged__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-41",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "old_state",
      children: _jsx(_components.code, {
        children: "old_state"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["变更前的播放器状态。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteplayerstate",
        children: "PlayerState"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "new_state",
      children: _jsx(_components.code, {
        children: "new_state"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["当前的播放器状态。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-rteplayerstate",
        children: "PlayerState"
      }), "。如果当前状态为 ", _jsx(_components.code, {
        children: "FAILED"
      }), "，你可以通过 ", _jsx(_components.code, {
        children: "error"
      }), " 参数获取详细的错误信息。"]
    }), `
`, _jsx(_components.h4, {
      id: "error-2",
      children: _jsx(_components.code, {
        children: "error"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["状态或错误信息。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_error",
        children: "Error"
      }), "。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-74",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_playerobserver",
          children: "PlayerObserver"
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
