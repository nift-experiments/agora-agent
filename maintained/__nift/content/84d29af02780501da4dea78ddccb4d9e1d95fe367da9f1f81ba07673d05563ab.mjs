import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "空间音频",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_spatial_audio" />

<a id="api_ibasespatialaudioengine_clearremotepositions" />

## clearRemotePositions [#clearremotepositions]

移除所有远端用户的空间位置。

<a id="api_ibasespatialaudioengine_clearremotepositions__prototype" />

\`\`\`java
public abstract int clearRemotePositions();
\`\`\`

<a id="api_ibasespatialaudioengine_clearremotepositions__detailed_desc" />

调用该方法后，本地用户将无法再听到任何远端用户的声音。你也可以在离开频道后调用该方法以释放资源。

<a id="api_ibasespatialaudioengine_clearremotepositions__return_values" />

### 返回值 [#返回值]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ilocalspatialaudioengine_create_ilocalspatialaudioengine" />

## create [#create]

创建一个 ILocalSpatialAudioEngine 实例。

<a id="api_ilocalspatialaudioengine_create_ilocalspatialaudioengine__prototype" />

\`\`\`java
public static synchronized ILocalSpatialAudioEngine create()
\`\`\`

<a id="api_ilocalspatialaudioengine_create_ilocalspatialaudioengine__detailed_desc" />

在调用 [initialize](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine) 之前调用该方法。

<a id="api_ilocalspatialaudioengine_create_ilocalspatialaudioengine__return_values" />

### 返回值 [#返回值-1]

方法调用成功，返回 [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine) 实例。

### 所属接口类 [#所属接口类-1]

* [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine)

<a id="api_irtcengine_enablespatialaudio" />

## enableSpatialAudio [#enablespatialaudio]

启用或关闭空间音效。

<a id="api_irtcengine_enablespatialaudio__prototype" />

\`\`\`java
public abstract int enableSpatialAudio(boolean enabled);
\`\`\`

<a id="api_irtcengine_enablespatialaudio__detailed_desc" />

你可以调用 [setRemoteUserSpatialAudioParams](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setremoteuserspatialaudioparams) 设置远端用户的空间音效参数。

注：

* 你可以在加入频道前或加入频道后调用此方法。
* 此方法依赖空间音效动态库 libagora\\_spatial\\_audio\\_extension.so。如果该动态库被删除，则无法正常启用该功能。

<a id="api_irtcengine_enablespatialaudio__parameters" />

### 参数 [#参数]

#### \`enabled\` [#enabled]

是否启用空间音效：

* true：启用空间音效。
* false：关闭空间音效。

<a id="api_irtcengine_enablespatialaudio__return_values" />

### 返回值 [#返回值-2]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine" />

## initialize [#initialize]

初始化 ILocalSpatialAudioEngine。

<a id="api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__prototype" />

\`\`\`java
public abstract int initialize(LocalSpatialAudioConfig config);
\`\`\`

<a id="api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__detailed_desc" />

注：

* 请在调用 create 方法后调用此方法。
* 在调用 ILocalSpatialAudioEngine 的其他方法前，必须先调用 initialize 初始化 ILocalSpatialAudioEngine。
* 每个 App 仅支持创建一个 ILocalSpatialAudioEngine 实例。

<a id="api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__parameters" />

### 参数 [#参数-1]

#### \`config\` [#config]

[ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine) 的配置。详见 [LocalSpatialAudioConfig](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localspatialaudioconfig)。

<a id="api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__return_values" />

### 返回值 [#返回值-3]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-3]

* [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine)

<a id="api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine" />

## muteAllRemoteAudioStreams [#muteallremoteaudiostreams]

停止或恢复订阅所有远端用户的音频流。

<a id="api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__prototype" />

\`\`\`java
public abstract int muteAllRemoteAudioStreams(boolean mute);
\`\`\`

<a id="api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__detailed_desc" />

调用该方法后，本地用户将停止或恢复订阅所有远端用户的音频流，包括后续加入频道的用户。

注：

* 请在调用 joinChannel 方法后调用本方法。
* 使用空间音效时，如需设置是否停止订阅所有远端用户的音频流，声网推荐使用本方法，而非 RtcEngine 下的同名方法。
* 调用本方法后，需要调用 updateSelfPosition 和 updateRemotePosition 方法更新本地用户和远端用户的空间位置，否则本方法的设置不会生效。

<a id="api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__parameters" />

### 参数 [#参数-2]

#### \`mute\` [#mute]

是否停止订阅所有远端用户的音频流：

* true：停止订阅所有远端用户的音频流。
* false：订阅所有远端用户的音频流。

<a id="api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine" />

## muteLocalAudioStream [#mutelocalaudiostream]

停止或恢复发布本地音频流。

<a id="api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__prototype" />

\`\`\`java
public abstract int muteLocalAudioStream(boolean mute);
\`\`\`

<a id="api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    [muteLocalAudioStream](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine) 方法不会影响任何正在进行的音频录制，因为它不会禁用音频采集设备。 请在调用 \`joinChannel\` 方法之后调用该方法。 使用空间音效时，如果需要设置是否停止发布本地音频流，声网推荐调用该方法，而不是 [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine) 下的同名方法。 该方法成功调用后会在远端客户端触发 [onUserMuteAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio) 和 [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged) 回调。
  </CalloutDescription>
</CalloutContainer>

<a id="api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__related" />

### 相关回调 [#相关回调]

该方法成功调用后会在远端客户端触发 [onUserMuteAudio](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio) 和 [onRemoteAudioStateChanged](/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged) 回调。

<a id="api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__parameters" />

### 参数 [#参数-3]

#### \`mute\` [#mute-1]

是否停止发布本地音频流：

* true：停止发布本地音频流。
* false：发布本地音频流。

<a id="api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine" />

## muteRemoteAudioStream [#muteremoteaudiostream]

停止或恢复订阅指定远端用户的音频流。

<a id="api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__prototype" />

\`\`\`java
public abstract int muteRemoteAudioStream(int uid, boolean mute);
\`\`\`

<a id="api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__detailed_desc" />

注：

* 请在调用 joinChannel 方法后调用此方法。
* 使用空间音效时，如需设置是否停止订阅指定用户的音频流，声网推荐调用此方法，而非 muteRemoteAudioStream 方法。

<a id="api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__parameters" />

### 参数 [#参数-4]

#### \`uid\` [#uid]

远端用户 ID。该参数必须与用户加入频道时传入的用户 ID 相同。

#### \`mute\` [#mute-2]

是否订阅指定远端用户的音频流：

* true：停止订阅指定用户的音频流。
* false：（默认）订阅指定用户的音频流。SDK 会根据本地用户与远端用户之间的距离决定是否订阅。

<a id="api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ilocalspatialaudioengine_release_ilocalspatialaudioengine" />

## destroy [#destroy]

销毁 ILocalSpatialAudioEngine 实例。

<a id="api_ilocalspatialaudioengine_release_ilocalspatialaudioengine__prototype" />

\`\`\`java
public static synchronized void destroy()
\`\`\`

<a id="api_ilocalspatialaudioengine_release_ilocalspatialaudioengine__detailed_desc" />

调用该方法后，将无法再使用 [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine) 下的任何 API。如需再次使用空间音效功能，需等待 [destroy](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine) 方法执行完成后，再调用 [initialize](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine) 创建新的 [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine) 实例。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 [destroy](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine) 方法之前调用此方法。
  </CalloutDescription>
</CalloutContainer>

### 所属接口类 [#所属接口类-7]

* [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine)

<a id="api_ilocalspatialaudioengine_removeremoteposition" />

## removeRemotePosition [#removeremoteposition]

移除指定远端用户的空间位置信息。

<a id="api_ilocalspatialaudioengine_removeremoteposition__prototype" />

\`\`\`java
public abstract int removeRemotePosition(int uid);
\`\`\`

<a id="api_ilocalspatialaudioengine_removeremoteposition__detailed_desc" />

调用该方法成功后，你将不再听到指定远端用户的声音。离开频道后，为避免浪费计算资源，建议调用该方法移除指定远端用户的空间位置信息。否则，该用户的空间位置信息将持续保留。当远端用户数量超过通过 [setMaxAudioRecvCount](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setmaxaudiorecvcount) 设置的可接收音频流数量时，系统会根据相对距离自动取消订阅距离最远用户的音频流。

<a id="api_ilocalspatialaudioengine_removeremoteposition__parameters" />

### 参数 [#参数-5]

#### \`uid\` [#uid-1]

\`uid\`。该参数必须与用户加入频道时传入的用户 ID 相同。

<a id="api_ilocalspatialaudioengine_removeremoteposition__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-8]

* [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine)

<a id="api_ibasespatialaudioengine_setaudiorecvrange" />

## setAudioRecvRange [#setaudiorecvrange]

设置本地用户的音频接收范围。

<a id="api_ibasespatialaudioengine_setaudiorecvrange__prototype" />

\`\`\`java
public abstract int setAudioRecvRange(float range);
\`\`\`

<a id="api_ibasespatialaudioengine_setaudiorecvrange__detailed_desc" />

你可以在任意时间调用该方法以更新音频接收范围。设置成功后，本地用户只能接收设定范围内或同一队伍中远端用户的音频。

<a id="api_ibasespatialaudioengine_setaudiorecvrange__parameters" />

### 参数 [#参数-6]

#### \`range\` [#range]

最大音频接收范围，单位为米。该参数必须大于 0。（默认值为 20）

<a id="api_ibasespatialaudioengine_setaudiorecvrange__return_values" />

### 返回值 [#返回值-8]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ibasespatialaudioengine_setdistanceunit" />

## setDistanceUnit [#setdistanceunit]

设置游戏引擎中每个单位距离对应的米数。

<a id="api_ibasespatialaudioengine_setdistanceunit__prototype" />

\`\`\`java
public abstract int setDistanceUnit(float unit);
\`\`\`

<a id="api_ibasespatialaudioengine_setdistanceunit__detailed_desc" />

在声网的空间音效算法中，距离以米为单位进行计算。SDK 默认将游戏引擎中的每个单位距离转换为 1 米。你可以调用该方法将游戏引擎中的每个单位距离转换为指定的米数。

<a id="api_ibasespatialaudioengine_setdistanceunit__parameters" />

### 参数 [#参数-7]

#### \`unit\` [#unit]

游戏引擎中每个单位距离对应的米数。该参数必须大于 0.00，默认值为 1.00。例如，将该参数设置为 2.00 表示游戏引擎中每个单位距离等于 2 米。该值越大，当远端用户远离本地用户时，本地用户听到的声音衰减得越快。

<a id="api_ibasespatialaudioengine_setdistanceunit__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_irtcengine_setheadphoneeqparameters" />

## setHeadphoneEQParameters [#setheadphoneeqparameters]

设置耳机均衡器的低频和高频参数。

<a id="api_irtcengine_setheadphoneeqparameters__prototype" />

\`\`\`java
public abstract int setHeadphoneEQParameters(int lowGain, int highGain);
\`\`\`

<a id="api_irtcengine_setheadphoneeqparameters__detailed_desc" />

如果调用 [setHeadphoneEQPreset](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqpreset) 后未达到预期效果，可以调用 [setHeadphoneEQParameters](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqparameters) 进一步调整耳机均衡器的低频和高频参数。

<a id="api_irtcengine_setheadphoneeqparameters__parameters" />

### 参数 [#参数-8]

#### \`lowGain\` [#lowgain]

耳机均衡器的低频参数，取值范围为 \\[-10, 10]。值越大，声音越深沉。

#### \`highGain\` [#highgain]

耳机均衡器的高频参数，取值范围为 \\[-10, 10]。值越大，声音越清晰。

<a id="api_irtcengine_setheadphoneeqparameters__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setheadphoneeqpreset" />

## setHeadphoneEQPreset [#setheadphoneeqpreset]

设置预设的耳机均衡器效果。

<a id="api_irtcengine_setheadphoneeqpreset__prototype" />

\`\`\`java
public abstract int setHeadphoneEQPreset(int preset);
\`\`\`

<a id="api_irtcengine_setheadphoneeqpreset__detailed_desc" />

该方法主要用于空间音效场景中。你可以选择预设的耳机均衡器来聆听音频，以实现预期的音频体验。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你使用的耳机本身已经具有良好的均衡效果，调用该方法可能不会带来显著提升，甚至可能降低体验。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_setheadphoneeqpreset__parameters" />

### 参数 [#参数-9]

#### \`preset\` [#preset]

预设的耳机均衡器效果：

* HEADPHONE\\_EQUALIZER\\_OFF：关闭耳机均衡器，听到原始音频。
* HEADPHONE\\_EQUALIZER\\_OVEREAR：为头戴式耳机使用均衡器。
* HEADPHONE\\_EQUALIZER\\_INEAR：为入耳式耳机使用均衡器。

<a id="api_irtcengine_setheadphoneeqpreset__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。
  * -1：发生通用错误（无具体原因）。

### 所属接口类 [#所属接口类-12]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_ibasespatialaudioengine_setmaxaudiorecvcount" />

## setMaxAudioRecvCount [#setmaxaudiorecvcount]

设置你在指定音频接收范围内可接收的最大音频流数量。

<a id="api_ibasespatialaudioengine_setmaxaudiorecvcount__prototype" />

\`\`\`java
public abstract int setMaxAudioRecvCount(int maxCount);
\`\`\`

<a id="api_ibasespatialaudioengine_setmaxaudiorecvcount__detailed_desc" />

如果可接收的音频流数量超过该设置值，本地用户将接收距离其最近的 \`maxCount\` 条音频流。

<a id="api_ibasespatialaudioengine_setmaxaudiorecvcount__parameters" />

### 参数 [#参数-10]

#### \`maxCount\` [#maxcount]

你在指定音频接收范围内可接收的最大音频流数量。该参数的取值应小于或等于 16。（默认值为 10）

<a id="api_ibasespatialaudioengine_setmaxaudiorecvcount__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ibasespatialaudioengine_setplayerattenuation" />

## setPlayerAttenuation [#setplayerattenuation]

设置媒体播放器的声音衰减属性。

<a id="api_ibasespatialaudioengine_setplayerattenuation__prototype" />

\`\`\`java
public abstract int setPlayerAttenuation(int playerId, double attenuation, boolean forceSet);
\`\`\`

<a id="api_ibasespatialaudioengine_setplayerattenuation__detailed_desc" />

<a id="api_ibasespatialaudioengine_setplayerattenuation__parameters" />

### 参数 [#参数-11]

#### \`playerId\` [#playerid]

媒体播放器的 ID。你可以通过调用 [getMediaPlayerId](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid) 获取该 ID。

#### \`attenuation\` [#attenuation]

远端用户或媒体播放器的声音衰减系数，取值范围为 \\[0,1]。具体说明如下：

* 0：广播模式，音量和音色不随距离衰减，本地用户听到的音量和音色不会因距离变化而变化。
* (0, 0.5)：弱衰减模式，音量和音色在传播过程中仅有轻微衰减，声音传播距离比真实环境更远。
* 0.5：（默认）模拟真实环境中的音量衰减效果，等效于未设置 speaker\\_attenuation 参数。
* (0.5, 1]：强衰减模式，音量和音色在传播过程中迅速衰减。

#### \`forceSet\` [#forceset]

是否强制设置媒体播放器的声音衰减效果：

* true：强制使用 attenuation 设置媒体播放器的衰减效果，此时 SpatialAudioZone 中 audioAttenuation 设置的隔音区衰减系数对媒体播放器无效。
* false：不强制使用 attenuation 设置媒体播放器的声音衰减效果，具体如下：
  * 如果声源和听众分别位于隔音区内外，声音衰减效果由 SpatialAudioZone 中的 audioAttenuation 决定。
  * 如果声源和听众位于同一隔音区内或同一隔音区外，声音衰减效果由本方法中的 attenuation 参数决定。

<a id="api_ibasespatialaudioengine_setplayerattenuation__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-14]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ilocalspatialaudioengine_setremoteaudioattenuation" />

## setRemoteAudioAttenuation [#setremoteaudioattenuation]

设置指定用户的声音衰减效果。

<a id="api_ilocalspatialaudioengine_setremoteaudioattenuation__prototype" />

\`\`\`java
public abstract int setRemoteAudioAttenuation(int uid, double attenuation, boolean forceSet);
\`\`\`

<a id="api_ilocalspatialaudioengine_setremoteaudioattenuation__detailed_desc" />

<a id="api_ilocalspatialaudioengine_setremoteaudioattenuation__parameters" />

### 参数 [#参数-12]

#### \`uid\` [#uid-2]

用户 ID。该参数必须与用户加入频道时传入的用户 ID 相同。

#### \`attenuation\` [#attenuation-1]

用户的声音衰减系数，取值范围为 \\[0, 1]。具体取值说明如下：

* 0：广播模式，音量和音色不会随距离衰减，本地用户听到的音量和音色不会因距离变化。
* (0, 0.5)：弱衰减模式，音量和音色在传播过程中仅有轻微衰减，声音传播距离大于真实环境。
* 0.5：（默认）模拟真实环境中的音量衰减效果，等效于未设置 speaker\\_attenuation 参数。
* (0.5, 1]：强衰减模式，音量和音色在传播过程中快速衰减。

#### \`forceSet\` [#forceset-1]

是否强制设置用户的声音衰减效果：

* true：强制使用 attenuation 设置用户的声音衰减效果，此时 SpatialAudioZone 中 audioAttenuation 设置的隔音区衰减系数对该用户无效。
* false：不强制使用 attenuation 设置用户的声音衰减效果，具体如下：
  * 若声源和接收者分别位于隔音区内外，衰减效果由 SpatialAudioZone 中的 audioAttenuation 决定；
  * 若声源和接收者位于同一隔音区或同一隔音区外，衰减效果由本方法中的 attenuation 决定。

<a id="api_ilocalspatialaudioengine_setremoteaudioattenuation__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine)

<a id="api_irtcengine_setremoteuserspatialaudioparams" />

## setRemoteUserSpatialAudioParams [#setremoteuserspatialaudioparams]

设置远端用户的空间音效参数。

<a id="api_irtcengine_setremoteuserspatialaudioparams__prototype" />

\`\`\`java
public abstract int setRemoteUserSpatialAudioParams(int uid, SpatialAudioParams params);
\`\`\`

<a id="api_irtcengine_setremoteuserspatialaudioparams__detailed_desc" />

在调用 [enableSpatialAudio](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_enablespatialaudio) 后调用此方法。设置成功后，你可以听到具有空间感的远端用户的声音。

<a id="api_irtcengine_setremoteuserspatialaudioparams__parameters" />

### 参数 [#参数-13]

#### \`uid\` [#uid-3]

用户 ID，必须与该用户加入频道时使用的 ID 相同。

#### \`params\` [#params]

空间音效参数。详见 [SpatialAudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-spatialaudioparams)。

<a id="api_irtcengine_setremoteuserspatialaudioparams__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_imediaplayer_setspatialaudioparams" />

## setSpatialAudioParams [#setspatialaudioparams]

启用或关闭媒体播放器的空间音效。

<a id="api_imediaplayer_setspatialaudioparams__prototype" />

\`\`\`java
int setSpatialAudioParams(SpatialAudioParams params);
\`\`\`

<a id="api_imediaplayer_setspatialaudioparams__detailed_desc" />

若需关闭空间音效，请将 \`params\` 参数设置为 \`null\`。

<a id="api_imediaplayer_setspatialaudioparams__parameters" />

### 参数 [#参数-14]

#### \`params\` [#params-1]

媒体播放器的空间音效参数，详见 [SpatialAudioParams](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-spatialaudioparams)。

<a id="api_imediaplayer_setspatialaudioparams__return_values" />

### 返回值 [#返回值-16]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-17]

* [IMediaPlayer](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_imediaplayer)

<a id="api_ibasespatialaudioengine_setzones" />

## setZones [#setzones]

设置隔音区域。

<a id="api_ibasespatialaudioengine_setzones__prototype" />

\`\`\`java
public abstract int setZones(SpatialAudioZone[] zones);
\`\`\`

<a id="api_ibasespatialaudioengine_setzones__detailed_desc" />

在虚拟互动场景中，你可以使用该方法设置隔音区域及声音衰减系数。当声源（可以是用户或媒体播放器）和接收者分别处于隔音区域的内外时，可以体验到类似真实环境中声音遇到建筑隔断时的衰减效果：

* 当声源和接收者分别处于隔音区域的内外时，声音的衰减效果由 SpatialAudioZone 中的声音衰减系数决定。
* 如果用户或媒体播放器处于同一个隔音区域内，则声音衰减效果由 setPlayerAttenuation 或 setRemoteAudioAttenuation 中的 attenuation 参数决定。如果你未调用 setPlayerAttenuation 或 setRemoteAudioAttenuation，SDK 默认的声音衰减系数为 0.5，用于模拟真实环境中的声音衰减。
* 如果声源和接收者分别处于两个不同的隔音区域，接收者将无法听到声源。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果多次调用该方法，以最后一次设置的隔音区域为准。
  </CalloutDescription>
</CalloutContainer>

<a id="api_ibasespatialaudioengine_setzones__parameters" />

### 参数 [#参数-15]

#### \`zones\` [#zones]

隔音区域设置。当该参数设置为 \`null\` 时，表示清除所有隔音区域。详见 [SpatialAudioZone](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-spatialaudiozone)。

<a id="api_ibasespatialaudioengine_setzones__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ibasespatialaudioengine_updateplayerpositioninfo" />

## updatePlayerPositionInfo [#updateplayerpositioninfo]

更新媒体播放器的空间位置。

<a id="api_ibasespatialaudioengine_updateplayerpositioninfo__prototype" />

\`\`\`java
public abstract int updatePlayerPositionInfo(int playerId, RemoteVoicePositionInfo positionInfo);
\`\`\`

<a id="api_ibasespatialaudioengine_updateplayerpositioninfo__detailed_desc" />

调用该方法后，本地用户可以听到媒体播放器空间位置的变化。

<a id="api_ibasespatialaudioengine_updateplayerpositioninfo__timing" />

### 调用时机 [#调用时机]

该方法可以在加入频道前或加入频道后调用。

<a id="api_ibasespatialaudioengine_updateplayerpositioninfo__parameters" />

### 参数 [#参数-16]

#### \`playerId\` [#playerid-1]

媒体播放器的 ID。你可以通过调用 [getMediaPlayerId](/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid) 获取该 ID。

#### \`positionInfo\` [#positioninfo]

媒体播放器的空间位置，详见 [RemoteVoicePositionInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remotevoicepositioninfo)。

<a id="api_ibasespatialaudioengine_updateplayerpositioninfo__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-19]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)

<a id="api_ilocalspatialaudioengine_updateremoteposition" />

## updateRemotePosition [#updateremoteposition]

更新指定远端用户的空间位置。

<a id="api_ilocalspatialaudioengine_updateremoteposition__prototype" />

\`\`\`java
public abstract int updateRemotePosition(int uid, RemoteVoicePositionInfo posInfo);
\`\`\`

<a id="api_ilocalspatialaudioengine_updateremoteposition__detailed_desc" />

调用该方法后，SDK 会根据本地用户与远端用户之间的相对位置计算空间音效参数。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 \`joinChannel\` 方法后再调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_ilocalspatialaudioengine_updateremoteposition__parameters" />

### 参数 [#参数-17]

#### \`uid\` [#uid-4]

用户 ID，必须与该用户加入频道时传入的用户 ID 相同。

#### \`posInfo\` [#posinfo]

远端用户的空间位置。详见 [RemoteVoicePositionInfo](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remotevoicepositioninfo)。

<a id="api_ilocalspatialaudioengine_updateremoteposition__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-20]

* [ILocalSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine)

<a id="api_ibasespatialaudioengine_updateselfposition" />

## updateSelfPosition [#updateselfposition]

更新本地用户的空间位置。

<a id="api_ibasespatialaudioengine_updateselfposition__prototype" />

\`\`\`java
public abstract int updateSelfPosition(float[] position, float[] axisForward, float[] axisRight, float[] axisUp);
\`\`\`

<a id="api_ibasespatialaudioengine_updateselfposition__detailed_desc" />

[updateSelfPosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateselfposition) 需要与 [updateRemotePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition) 搭配使用。SDK 会根据该方法和 [updateRemotePosition](/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition) 中的参数设置，计算本地用户与远端用户之间的相对位置，并据此计算空间音效参数。

<a id="api_ibasespatialaudioengine_updateselfposition__parameters" />

### 参数 [#参数-18]

#### \`position\` [#position]

世界坐标系中的坐标。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。

#### \`axisForward\` [#axisforward]

坐标系中 x 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。

#### \`axisRight\` [#axisright]

坐标系中 y 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。

#### \`axisUp\` [#axisup]

坐标系中 z 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。

<a id="api_ibasespatialaudioengine_updateselfposition__return_values" />

### 返回值 [#返回值-20]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-21]

* [IBaseSpatialAudioEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine)
`;
export let structuredData = {
  contents: [{
    heading: "clearremotepositions",
    content: "移除所有远端用户的空间位置。"
  }, {
    heading: "clearremotepositions",
    content: "调用该方法后，本地用户将无法再听到任何远端用户的声音。你也可以在离开频道后调用该方法以释放资源。"
  }, {
    heading: "返回值",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "create",
    content: "创建一个 ILocalSpatialAudioEngine 实例。"
  }, {
    heading: "create",
    content: "在调用 initialize 之前调用该方法。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回 ILocalSpatialAudioEngine 实例。"
  }, {
    heading: "所属接口类-1",
    content: "ILocalSpatialAudioEngine"
  }, {
    heading: "enablespatialaudio",
    content: "启用或关闭空间音效。"
  }, {
    heading: "enablespatialaudio",
    content: "你可以调用 setRemoteUserSpatialAudioParams 设置远端用户的空间音效参数。"
  }, {
    heading: "enablespatialaudio",
    content: "注："
  }, {
    heading: "enablespatialaudio",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "enablespatialaudio",
    content: "此方法依赖空间音效动态库 libagora\\_spatial\\_audio\\_extension.so。如果该动态库被删除，则无法正常启用该功能。"
  }, {
    heading: "enabled",
    content: "是否启用空间音效："
  }, {
    heading: "enabled",
    content: "true：启用空间音效。"
  }, {
    heading: "enabled",
    content: "false：关闭空间音效。"
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
    heading: "initialize",
    content: "初始化 ILocalSpatialAudioEngine。"
  }, {
    heading: "initialize",
    content: "注："
  }, {
    heading: "initialize",
    content: "请在调用 create 方法后调用此方法。"
  }, {
    heading: "initialize",
    content: "在调用 ILocalSpatialAudioEngine 的其他方法前，必须先调用 initialize 初始化 ILocalSpatialAudioEngine。"
  }, {
    heading: "initialize",
    content: "每个 App 仅支持创建一个 ILocalSpatialAudioEngine 实例。"
  }, {
    heading: "config",
    content: "ILocalSpatialAudioEngine 的配置。详见 LocalSpatialAudioConfig。"
  }, {
    heading: "返回值-3",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-3",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-3",
    content: "ILocalSpatialAudioEngine"
  }, {
    heading: "muteallremoteaudiostreams",
    content: "停止或恢复订阅所有远端用户的音频流。"
  }, {
    heading: "muteallremoteaudiostreams",
    content: "调用该方法后，本地用户将停止或恢复订阅所有远端用户的音频流，包括后续加入频道的用户。"
  }, {
    heading: "muteallremoteaudiostreams",
    content: "注："
  }, {
    heading: "muteallremoteaudiostreams",
    content: "请在调用 joinChannel 方法后调用本方法。"
  }, {
    heading: "muteallremoteaudiostreams",
    content: "使用空间音效时，如需设置是否停止订阅所有远端用户的音频流，声网推荐使用本方法，而非 RtcEngine 下的同名方法。"
  }, {
    heading: "muteallremoteaudiostreams",
    content: "调用本方法后，需要调用 updateSelfPosition 和 updateRemotePosition 方法更新本地用户和远端用户的空间位置，否则本方法的设置不会生效。"
  }, {
    heading: "mute",
    content: "是否停止订阅所有远端用户的音频流："
  }, {
    heading: "mute",
    content: "true：停止订阅所有远端用户的音频流。"
  }, {
    heading: "mute",
    content: "false：订阅所有远端用户的音频流。"
  }, {
    heading: "返回值-4",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-4",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-4",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "mutelocalaudiostream",
    content: "停止或恢复发布本地音频流。"
  }, {
    heading: "mutelocalaudiostream",
    content: "muteLocalAudioStream 方法不会影响任何正在进行的音频录制，因为它不会禁用音频采集设备。 请在调用 `joinChannel` 方法之后调用该方法。 使用空间音效时，如果需要设置是否停止发布本地音频流，声网推荐调用该方法，而不是 RtcEngine 下的同名方法。 该方法成功调用后会在远端客户端触发 onUserMuteAudio 和 onRemoteAudioStateChanged 回调。"
  }, {
    heading: "相关回调",
    content: "该方法成功调用后会在远端客户端触发 onUserMuteAudio 和 onRemoteAudioStateChanged 回调。"
  }, {
    heading: "mute-1",
    content: "是否停止发布本地音频流："
  }, {
    heading: "mute-1",
    content: "true：停止发布本地音频流。"
  }, {
    heading: "mute-1",
    content: "false：发布本地音频流。"
  }, {
    heading: "返回值-5",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-5",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-5",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "muteremoteaudiostream",
    content: "停止或恢复订阅指定远端用户的音频流。"
  }, {
    heading: "muteremoteaudiostream",
    content: "注："
  }, {
    heading: "muteremoteaudiostream",
    content: "请在调用 joinChannel 方法后调用此方法。"
  }, {
    heading: "muteremoteaudiostream",
    content: "使用空间音效时，如需设置是否停止订阅指定用户的音频流，声网推荐调用此方法，而非 muteRemoteAudioStream 方法。"
  }, {
    heading: "uid",
    content: "远端用户 ID。该参数必须与用户加入频道时传入的用户 ID 相同。"
  }, {
    heading: "mute-2",
    content: "是否订阅指定远端用户的音频流："
  }, {
    heading: "mute-2",
    content: "true：停止订阅指定用户的音频流。"
  }, {
    heading: "mute-2",
    content: "false：（默认）订阅指定用户的音频流。SDK 会根据本地用户与远端用户之间的距离决定是否订阅。"
  }, {
    heading: "返回值-6",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-6",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-6",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "destroy",
    content: "销毁 ILocalSpatialAudioEngine 实例。"
  }, {
    heading: "destroy",
    content: "调用该方法后，将无法再使用 ILocalSpatialAudioEngine 下的任何 API。如需再次使用空间音效功能，需等待 destroy 方法执行完成后，再调用 initialize 创建新的 ILocalSpatialAudioEngine 实例。"
  }, {
    heading: "destroy",
    content: "请在调用 destroy 方法之前调用此方法。"
  }, {
    heading: "所属接口类-7",
    content: "ILocalSpatialAudioEngine"
  }, {
    heading: "removeremoteposition",
    content: "移除指定远端用户的空间位置信息。"
  }, {
    heading: "removeremoteposition",
    content: "调用该方法成功后，你将不再听到指定远端用户的声音。离开频道后，为避免浪费计算资源，建议调用该方法移除指定远端用户的空间位置信息。否则，该用户的空间位置信息将持续保留。当远端用户数量超过通过 setMaxAudioRecvCount 设置的可接收音频流数量时，系统会根据相对距离自动取消订阅距离最远用户的音频流。"
  }, {
    heading: "uid-1",
    content: "`uid`。该参数必须与用户加入频道时传入的用户 ID 相同。"
  }, {
    heading: "返回值-7",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-7",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-8",
    content: "ILocalSpatialAudioEngine"
  }, {
    heading: "setaudiorecvrange",
    content: "设置本地用户的音频接收范围。"
  }, {
    heading: "setaudiorecvrange",
    content: "你可以在任意时间调用该方法以更新音频接收范围。设置成功后，本地用户只能接收设定范围内或同一队伍中远端用户的音频。"
  }, {
    heading: "range",
    content: "最大音频接收范围，单位为米。该参数必须大于 0。（默认值为 20）"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-8",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-9",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "setdistanceunit",
    content: "设置游戏引擎中每个单位距离对应的米数。"
  }, {
    heading: "setdistanceunit",
    content: "在声网的空间音效算法中，距离以米为单位进行计算。SDK 默认将游戏引擎中的每个单位距离转换为 1 米。你可以调用该方法将游戏引擎中的每个单位距离转换为指定的米数。"
  }, {
    heading: "unit",
    content: "游戏引擎中每个单位距离对应的米数。该参数必须大于 0.00，默认值为 1.00。例如，将该参数设置为 2.00 表示游戏引擎中每个单位距离等于 2 米。该值越大，当远端用户远离本地用户时，本地用户听到的声音衰减得越快。"
  }, {
    heading: "返回值-9",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-9",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-10",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "setheadphoneeqparameters",
    content: "设置耳机均衡器的低频和高频参数。"
  }, {
    heading: "setheadphoneeqparameters",
    content: "如果调用 setHeadphoneEQPreset 后未达到预期效果，可以调用 setHeadphoneEQParameters 进一步调整耳机均衡器的低频和高频参数。"
  }, {
    heading: "lowgain",
    content: "耳机均衡器的低频参数，取值范围为 \\[-10, 10]。值越大，声音越深沉。"
  }, {
    heading: "highgain",
    content: "耳机均衡器的高频参数，取值范围为 \\[-10, 10]。值越大，声音越清晰。"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-10",
    content: "-1：发生通用错误。"
  }, {
    heading: "所属接口类-11",
    content: "RtcEngine"
  }, {
    heading: "setheadphoneeqpreset",
    content: "设置预设的耳机均衡器效果。"
  }, {
    heading: "setheadphoneeqpreset",
    content: "该方法主要用于空间音效场景中。你可以选择预设的耳机均衡器来聆听音频，以实现预期的音频体验。"
  }, {
    heading: "setheadphoneeqpreset",
    content: "如果你使用的耳机本身已经具有良好的均衡效果，调用该方法可能不会带来显著提升，甚至可能降低体验。"
  }, {
    heading: "preset",
    content: "预设的耳机均衡器效果："
  }, {
    heading: "preset",
    content: "HEADPHONE\\_EQUALIZER\\_OFF：关闭耳机均衡器，听到原始音频。"
  }, {
    heading: "preset",
    content: "HEADPHONE\\_EQUALIZER\\_OVEREAR：为头戴式耳机使用均衡器。"
  }, {
    heading: "preset",
    content: "HEADPHONE\\_EQUALIZER\\_INEAR：为入耳式耳机使用均衡器。"
  }, {
    heading: "返回值-11",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-11",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "返回值-11",
    content: "-1：发生通用错误（无具体原因）。"
  }, {
    heading: "所属接口类-12",
    content: "RtcEngine"
  }, {
    heading: "setmaxaudiorecvcount",
    content: "设置你在指定音频接收范围内可接收的最大音频流数量。"
  }, {
    heading: "setmaxaudiorecvcount",
    content: "如果可接收的音频流数量超过该设置值，本地用户将接收距离其最近的 `maxCount` 条音频流。"
  }, {
    heading: "maxcount",
    content: "你在指定音频接收范围内可接收的最大音频流数量。该参数的取值应小于或等于 16。（默认值为 10）"
  }, {
    heading: "返回值-12",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-12",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-13",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "setplayerattenuation",
    content: "设置媒体播放器的声音衰减属性。"
  }, {
    heading: "playerid",
    content: "媒体播放器的 ID。你可以通过调用 getMediaPlayerId 获取该 ID。"
  }, {
    heading: "attenuation",
    content: "远端用户或媒体播放器的声音衰减系数，取值范围为 \\[0,1]。具体说明如下："
  }, {
    heading: "attenuation",
    content: "0：广播模式，音量和音色不随距离衰减，本地用户听到的音量和音色不会因距离变化而变化。"
  }, {
    heading: "attenuation",
    content: "(0, 0.5)：弱衰减模式，音量和音色在传播过程中仅有轻微衰减，声音传播距离比真实环境更远。"
  }, {
    heading: "attenuation",
    content: "0.5：（默认）模拟真实环境中的音量衰减效果，等效于未设置 speaker\\_attenuation 参数。"
  }, {
    heading: "attenuation",
    content: "(0.5, 1]：强衰减模式，音量和音色在传播过程中迅速衰减。"
  }, {
    heading: "forceset",
    content: "是否强制设置媒体播放器的声音衰减效果："
  }, {
    heading: "forceset",
    content: "true：强制使用 attenuation 设置媒体播放器的衰减效果，此时 SpatialAudioZone 中 audioAttenuation 设置的隔音区衰减系数对媒体播放器无效。"
  }, {
    heading: "forceset",
    content: "false：不强制使用 attenuation 设置媒体播放器的声音衰减效果，具体如下："
  }, {
    heading: "forceset",
    content: "如果声源和听众分别位于隔音区内外，声音衰减效果由 SpatialAudioZone 中的 audioAttenuation 决定。"
  }, {
    heading: "forceset",
    content: "如果声源和听众位于同一隔音区内或同一隔音区外，声音衰减效果由本方法中的 attenuation 参数决定。"
  }, {
    heading: "返回值-13",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-13",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-14",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "setremoteaudioattenuation",
    content: "设置指定用户的声音衰减效果。"
  }, {
    heading: "uid-2",
    content: "用户 ID。该参数必须与用户加入频道时传入的用户 ID 相同。"
  }, {
    heading: "attenuation-1",
    content: "用户的声音衰减系数，取值范围为 \\[0, 1]。具体取值说明如下："
  }, {
    heading: "attenuation-1",
    content: "0：广播模式，音量和音色不会随距离衰减，本地用户听到的音量和音色不会因距离变化。"
  }, {
    heading: "attenuation-1",
    content: "(0, 0.5)：弱衰减模式，音量和音色在传播过程中仅有轻微衰减，声音传播距离大于真实环境。"
  }, {
    heading: "attenuation-1",
    content: "0.5：（默认）模拟真实环境中的音量衰减效果，等效于未设置 speaker\\_attenuation 参数。"
  }, {
    heading: "attenuation-1",
    content: "(0.5, 1]：强衰减模式，音量和音色在传播过程中快速衰减。"
  }, {
    heading: "forceset-1",
    content: "是否强制设置用户的声音衰减效果："
  }, {
    heading: "forceset-1",
    content: "true：强制使用 attenuation 设置用户的声音衰减效果，此时 SpatialAudioZone 中 audioAttenuation 设置的隔音区衰减系数对该用户无效。"
  }, {
    heading: "forceset-1",
    content: "false：不强制使用 attenuation 设置用户的声音衰减效果，具体如下："
  }, {
    heading: "forceset-1",
    content: "若声源和接收者分别位于隔音区内外，衰减效果由 SpatialAudioZone 中的 audioAttenuation 决定；"
  }, {
    heading: "forceset-1",
    content: "若声源和接收者位于同一隔音区或同一隔音区外，衰减效果由本方法中的 attenuation 决定。"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-15",
    content: "ILocalSpatialAudioEngine"
  }, {
    heading: "setremoteuserspatialaudioparams",
    content: "设置远端用户的空间音效参数。"
  }, {
    heading: "setremoteuserspatialaudioparams",
    content: "在调用 enableSpatialAudio 后调用此方法。设置成功后，你可以听到具有空间感的远端用户的声音。"
  }, {
    heading: "uid-3",
    content: "用户 ID，必须与该用户加入频道时使用的 ID 相同。"
  }, {
    heading: "params",
    content: "空间音效参数。详见 SpatialAudioParams。"
  }, {
    heading: "返回值-15",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-15",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-16",
    content: "RtcEngine"
  }, {
    heading: "setspatialaudioparams",
    content: "启用或关闭媒体播放器的空间音效。"
  }, {
    heading: "setspatialaudioparams",
    content: "若需关闭空间音效，请将 `params` 参数设置为 `null`。"
  }, {
    heading: "params-1",
    content: "媒体播放器的空间音效参数，详见 SpatialAudioParams。"
  }, {
    heading: "返回值-16",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-16",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-17",
    content: "IMediaPlayer"
  }, {
    heading: "setzones",
    content: "设置隔音区域。"
  }, {
    heading: "setzones",
    content: "在虚拟互动场景中，你可以使用该方法设置隔音区域及声音衰减系数。当声源（可以是用户或媒体播放器）和接收者分别处于隔音区域的内外时，可以体验到类似真实环境中声音遇到建筑隔断时的衰减效果："
  }, {
    heading: "setzones",
    content: "当声源和接收者分别处于隔音区域的内外时，声音的衰减效果由 SpatialAudioZone 中的声音衰减系数决定。"
  }, {
    heading: "setzones",
    content: "如果用户或媒体播放器处于同一个隔音区域内，则声音衰减效果由 setPlayerAttenuation 或 setRemoteAudioAttenuation 中的 attenuation 参数决定。如果你未调用 setPlayerAttenuation 或 setRemoteAudioAttenuation，SDK 默认的声音衰减系数为 0.5，用于模拟真实环境中的声音衰减。"
  }, {
    heading: "setzones",
    content: "如果声源和接收者分别处于两个不同的隔音区域，接收者将无法听到声源。"
  }, {
    heading: "setzones",
    content: "如果多次调用该方法，以最后一次设置的隔音区域为准。"
  }, {
    heading: "zones",
    content: "隔音区域设置。当该参数设置为 `null` 时，表示清除所有隔音区域。详见 SpatialAudioZone。"
  }, {
    heading: "返回值-17",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-17",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-18",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "updateplayerpositioninfo",
    content: "更新媒体播放器的空间位置。"
  }, {
    heading: "updateplayerpositioninfo",
    content: "调用该方法后，本地用户可以听到媒体播放器空间位置的变化。"
  }, {
    heading: "调用时机",
    content: "该方法可以在加入频道前或加入频道后调用。"
  }, {
    heading: "playerid-1",
    content: "媒体播放器的 ID。你可以通过调用 getMediaPlayerId 获取该 ID。"
  }, {
    heading: "positioninfo",
    content: "媒体播放器的空间位置，详见 RemoteVoicePositionInfo。"
  }, {
    heading: "返回值-18",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-18",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-19",
    content: "IBaseSpatialAudioEngine"
  }, {
    heading: "updateremoteposition",
    content: "更新指定远端用户的空间位置。"
  }, {
    heading: "updateremoteposition",
    content: "调用该方法后，SDK 会根据本地用户与远端用户之间的相对位置计算空间音效参数。"
  }, {
    heading: "updateremoteposition",
    content: "请在调用 `joinChannel` 方法后再调用此方法。"
  }, {
    heading: "uid-4",
    content: "用户 ID，必须与该用户加入频道时传入的用户 ID 相同。"
  }, {
    heading: "posinfo",
    content: "远端用户的空间位置。详见 RemoteVoicePositionInfo。"
  }, {
    heading: "返回值-19",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-19",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-20",
    content: "ILocalSpatialAudioEngine"
  }, {
    heading: "updateselfposition",
    content: "更新本地用户的空间位置。"
  }, {
    heading: "updateselfposition",
    content: "updateSelfPosition 需要与 updateRemotePosition 搭配使用。SDK 会根据该方法和 updateRemotePosition 中的参数设置，计算本地用户与远端用户之间的相对位置，并据此计算空间音效参数。"
  }, {
    heading: "position",
    content: "世界坐标系中的坐标。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
  }, {
    heading: "axisforward",
    content: "坐标系中 x 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
  }, {
    heading: "axisright",
    content: "坐标系中 y 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
  }, {
    heading: "axisup",
    content: "坐标系中 z 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
  }, {
    heading: "返回值-20",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-20",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-21",
    content: "IBaseSpatialAudioEngine"
  }],
  headings: [{
    id: "clearremotepositions",
    content: "clearRemotePositions"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "create",
    content: "create"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "enablespatialaudio",
    content: "enableSpatialAudio"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "enabled",
    content: "`enabled`"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "initialize",
    content: "initialize"
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
    id: "muteallremoteaudiostreams",
    content: "muteAllRemoteAudioStreams"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "mute",
    content: "`mute`"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "mutelocalaudiostream",
    content: "muteLocalAudioStream"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "mute-1",
    content: "`mute`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "muteremoteaudiostream",
    content: "muteRemoteAudioStream"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "uid",
    content: "`uid`"
  }, {
    id: "mute-2",
    content: "`mute`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "destroy",
    content: "destroy"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "removeremoteposition",
    content: "removeRemotePosition"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "uid-1",
    content: "`uid`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "setaudiorecvrange",
    content: "setAudioRecvRange"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "range",
    content: "`range`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "setdistanceunit",
    content: "setDistanceUnit"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "unit",
    content: "`unit`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "setheadphoneeqparameters",
    content: "setHeadphoneEQParameters"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "lowgain",
    content: "`lowGain`"
  }, {
    id: "highgain",
    content: "`highGain`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "setheadphoneeqpreset",
    content: "setHeadphoneEQPreset"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "preset",
    content: "`preset`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "setmaxaudiorecvcount",
    content: "setMaxAudioRecvCount"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "maxcount",
    content: "`maxCount`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "setplayerattenuation",
    content: "setPlayerAttenuation"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "playerid",
    content: "`playerId`"
  }, {
    id: "attenuation",
    content: "`attenuation`"
  }, {
    id: "forceset",
    content: "`forceSet`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "setremoteaudioattenuation",
    content: "setRemoteAudioAttenuation"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "uid-2",
    content: "`uid`"
  }, {
    id: "attenuation-1",
    content: "`attenuation`"
  }, {
    id: "forceset-1",
    content: "`forceSet`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "setremoteuserspatialaudioparams",
    content: "setRemoteUserSpatialAudioParams"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "uid-3",
    content: "`uid`"
  }, {
    id: "params",
    content: "`params`"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "setspatialaudioparams",
    content: "setSpatialAudioParams"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "params-1",
    content: "`params`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "setzones",
    content: "setZones"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "zones",
    content: "`zones`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "updateplayerpositioninfo",
    content: "updatePlayerPositionInfo"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "playerid-1",
    content: "`playerId`"
  }, {
    id: "positioninfo",
    content: "`positionInfo`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "updateremoteposition",
    content: "updateRemotePosition"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "uid-4",
    content: "`uid`"
  }, {
    id: "posinfo",
    content: "`posInfo`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "updateselfposition",
    content: "updateSelfPosition"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "position",
    content: "`position`"
  }, {
    id: "axisforward",
    content: "`axisForward`"
  }, {
    id: "axisright",
    content: "`axisRight`"
  }, {
    id: "axisup",
    content: "`axisUp`"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#clearremotepositions",
  title: _jsx(_Fragment, {
    children: "clearRemotePositions"
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
  url: "#create",
  title: _jsx(_Fragment, {
    children: "create"
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
  url: "#enablespatialaudio",
  title: _jsx(_Fragment, {
    children: "enableSpatialAudio"
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
  url: "#initialize",
  title: _jsx(_Fragment, {
    children: "initialize"
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
  url: "#muteallremoteaudiostreams",
  title: _jsx(_Fragment, {
    children: "muteAllRemoteAudioStreams"
  })
}, {
  depth: 3,
  url: "#参数-2",
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
  url: "#mutelocalaudiostream",
  title: _jsx(_Fragment, {
    children: "muteLocalAudioStream"
  })
}, {
  depth: 3,
  url: "#相关回调",
  title: _jsx(_Fragment, {
    children: "相关回调"
  })
}, {
  depth: 3,
  url: "#参数-3",
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
  url: "#muteremoteaudiostream",
  title: _jsx(_Fragment, {
    children: "muteRemoteAudioStream"
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
  url: "#mute-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mute"
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
  url: "#destroy",
  title: _jsx(_Fragment, {
    children: "destroy"
  })
}, {
  depth: 3,
  url: "#所属接口类-7",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#removeremoteposition",
  title: _jsx(_Fragment, {
    children: "removeRemotePosition"
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
  depth: 3,
  url: "#返回值-7",
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
  url: "#setaudiorecvrange",
  title: _jsx(_Fragment, {
    children: "setAudioRecvRange"
  })
}, {
  depth: 3,
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#range",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "range"
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
  url: "#所属接口类-9",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setdistanceunit",
  title: _jsx(_Fragment, {
    children: "setDistanceUnit"
  })
}, {
  depth: 3,
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#unit",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "unit"
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
  url: "#所属接口类-10",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setheadphoneeqparameters",
  title: _jsx(_Fragment, {
    children: "setHeadphoneEQParameters"
  })
}, {
  depth: 3,
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#lowgain",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "lowGain"
    })
  })
}, {
  depth: 4,
  url: "#highgain",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "highGain"
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
  url: "#所属接口类-11",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setheadphoneeqpreset",
  title: _jsx(_Fragment, {
    children: "setHeadphoneEQPreset"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#preset",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "preset"
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
  url: "#所属接口类-12",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setmaxaudiorecvcount",
  title: _jsx(_Fragment, {
    children: "setMaxAudioRecvCount"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#maxcount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "maxCount"
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
  url: "#所属接口类-13",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setplayerattenuation",
  title: _jsx(_Fragment, {
    children: "setPlayerAttenuation"
  })
}, {
  depth: 3,
  url: "#参数-11",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#playerid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "playerId"
    })
  })
}, {
  depth: 4,
  url: "#attenuation",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "attenuation"
    })
  })
}, {
  depth: 4,
  url: "#forceset",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "forceSet"
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
  url: "#所属接口类-14",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremoteaudioattenuation",
  title: _jsx(_Fragment, {
    children: "setRemoteAudioAttenuation"
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
  url: "#attenuation-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "attenuation"
    })
  })
}, {
  depth: 4,
  url: "#forceset-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "forceSet"
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
  url: "#所属接口类-15",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setremoteuserspatialaudioparams",
  title: _jsx(_Fragment, {
    children: "setRemoteUserSpatialAudioParams"
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
  url: "#params",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "params"
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
  url: "#所属接口类-16",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setspatialaudioparams",
  title: _jsx(_Fragment, {
    children: "setSpatialAudioParams"
  })
}, {
  depth: 3,
  url: "#参数-14",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#params-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "params"
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
  url: "#所属接口类-17",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#setzones",
  title: _jsx(_Fragment, {
    children: "setZones"
  })
}, {
  depth: 3,
  url: "#参数-15",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#zones",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "zones"
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
  url: "#所属接口类-18",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#updateplayerpositioninfo",
  title: _jsx(_Fragment, {
    children: "updatePlayerPositionInfo"
  })
}, {
  depth: 3,
  url: "#调用时机",
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
  url: "#playerid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "playerId"
    })
  })
}, {
  depth: 4,
  url: "#positioninfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "positionInfo"
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
  url: "#所属接口类-19",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#updateremoteposition",
  title: _jsx(_Fragment, {
    children: "updateRemotePosition"
  })
}, {
  depth: 3,
  url: "#参数-17",
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
  url: "#posinfo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "posInfo"
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
  url: "#所属接口类-20",
  title: _jsx(_Fragment, {
    children: "所属接口类"
  })
}, {
  depth: 2,
  url: "#updateselfposition",
  title: _jsx(_Fragment, {
    children: "updateSelfPosition"
  })
}, {
  depth: 3,
  url: "#参数-18",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#position",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "position"
    })
  })
}, {
  depth: 4,
  url: "#axisforward",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "axisForward"
    })
  })
}, {
  depth: 4,
  url: "#axisright",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "axisRight"
    })
  })
}, {
  depth: 4,
  url: "#axisup",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "axisUp"
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
      id: "toc_spatial_audio"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_clearremotepositions"
    }), `
`, _jsx(_components.h2, {
      id: "clearremotepositions",
      children: "clearRemotePositions"
    }), `
`, _jsx(_components.p, {
      children: "移除所有远端用户的空间位置。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_clearremotepositions__prototype"
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
              children: " clearRemotePositions"
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
      id: "api_ibasespatialaudioengine_clearremotepositions__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，本地用户将无法再听到任何远端用户的声音。你也可以在离开频道后调用该方法以释放资源。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_clearremotepositions__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_create_ilocalspatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "create",
      children: "create"
    }), `
`, _jsx(_components.p, {
      children: "创建一个 ILocalSpatialAudioEngine 实例。"
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_create_ilocalspatialaudioengine__prototype"
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
              children: " ILocalSpatialAudioEngine "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "create"
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
      id: "api_ilocalspatialaudioengine_create_ilocalspatialaudioengine__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine",
        children: "initialize"
      }), " 之前调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_create_ilocalspatialaudioengine__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.p, {
      children: ["方法调用成功，返回 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
        children: "ILocalSpatialAudioEngine"
      }), " 实例。"]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-1",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
          children: "ILocalSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablespatialaudio"
    }), `
`, _jsx(_components.h2, {
      id: "enablespatialaudio",
      children: "enableSpatialAudio"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭空间音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablespatialaudio__prototype"
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
              children: " enableSpatialAudio"
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
      id: "api_irtcengine_enablespatialaudio__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["你可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setremoteuserspatialaudioparams",
        children: "setRemoteUserSpatialAudioParams"
      }), " 设置远端用户的空间音效参数。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "你可以在加入频道前或加入频道后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "此方法依赖空间音效动态库 libagora_spatial_audio_extension.so。如果该动态库被删除，则无法正常启用该功能。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablespatialaudio__parameters"
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
      children: "是否启用空间音效："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用空间音效。"
      }), `
`, _jsx(_components.li, {
        children: "false：关闭空间音效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_enablespatialaudio__return_values"
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
      id: "api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "initialize",
      children: "initialize"
    }), `
`, _jsx(_components.p, {
      children: "初始化 ILocalSpatialAudioEngine。"
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__prototype"
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
              children: " initialize"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(LocalSpatialAudioConfig config);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在调用 create 方法后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "在调用 ILocalSpatialAudioEngine 的其他方法前，必须先调用 initialize 初始化 ILocalSpatialAudioEngine。"
      }), `
`, _jsx(_components.li, {
        children: "每个 App 仅支持创建一个 ILocalSpatialAudioEngine 实例。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__parameters"
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
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
        children: "ILocalSpatialAudioEngine"
      }), " 的配置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-localspatialaudioconfig",
        children: "LocalSpatialAudioConfig"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
          children: "ILocalSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "muteallremoteaudiostreams",
      children: "muteAllRemoteAudioStreams"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅所有远端用户的音频流。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__prototype"
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
              children: " muteAllRemoteAudioStreams"
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
              children: " mute);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，本地用户将停止或恢复订阅所有远端用户的音频流，包括后续加入频道的用户。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在调用 joinChannel 方法后调用本方法。"
      }), `
`, _jsx(_components.li, {
        children: "使用空间音效时，如需设置是否停止订阅所有远端用户的音频流，声网推荐使用本方法，而非 RtcEngine 下的同名方法。"
      }), `
`, _jsx(_components.li, {
        children: "调用本方法后，需要调用 updateSelfPosition 和 updateRemotePosition 方法更新本地用户和远端用户的空间位置，否则本方法的设置不会生效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mute",
      children: _jsx(_components.code, {
        children: "mute"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止订阅所有远端用户的音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅所有远端用户的音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：订阅所有远端用户的音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteallremoteaudiostreams_ibasespatialaudioengine__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "mutelocalaudiostream",
      children: "muteLocalAudioStream"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复发布本地音频流。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__prototype"
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
              children: " muteLocalAudioStream"
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
              children: " mute);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: [_jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine",
            children: "muteLocalAudioStream"
          }), " 方法不会影响任何正在进行的音频录制，因为它不会禁用音频采集设备。 请在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 方法之后调用该方法。 使用空间音效时，如果需要设置是否停止发布本地音频流，声网推荐调用该方法，而不是 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
            children: "RtcEngine"
          }), " 下的同名方法。 该方法成功调用后会在远端客户端触发 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio",
            children: "onUserMuteAudio"
          }), " 和 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
            children: "onRemoteAudioStateChanged"
          }), " 回调。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法成功调用后会在远端客户端触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onusermuteaudio",
        children: "onUserMuteAudio"
      }), " 和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-basic#callback_irtcengineeventhandler_onremoteaudiostatechanged",
        children: "onRemoteAudioStateChanged"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "mute-1",
      children: _jsx(_components.code, {
        children: "mute"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否停止发布本地音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止发布本地音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：发布本地音频流。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_mutelocalaudiostream_ibasespatialaudioengine__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "muteremoteaudiostream",
      children: "muteRemoteAudioStream"
    }), `
`, _jsx(_components.p, {
      children: "停止或恢复订阅指定远端用户的音频流。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__prototype"
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
              children: " muteRemoteAudioStream"
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
              children: " mute);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "请在调用 joinChannel 方法后调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "使用空间音效时，如需设置是否停止订阅指定用户的音频流，声网推荐调用此方法，而非 muteRemoteAudioStream 方法。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__parameters"
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
      children: "远端用户 ID。该参数必须与用户加入频道时传入的用户 ID 相同。"
    }), `
`, _jsx(_components.h4, {
      id: "mute-2",
      children: _jsx(_components.code, {
        children: "mute"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否订阅指定远端用户的音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：停止订阅指定用户的音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）订阅指定用户的音频流。SDK 会根据本地用户与远端用户之间的距离决定是否订阅。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_muteremoteaudiostream_ibasespatialaudioengine__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_release_ilocalspatialaudioengine"
    }), `
`, _jsx(_components.h2, {
      id: "destroy",
      children: "destroy"
    }), `
`, _jsx(_components.p, {
      children: "销毁 ILocalSpatialAudioEngine 实例。"
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_release_ilocalspatialaudioengine__prototype"
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
              children: "()"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_release_ilocalspatialaudioengine__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法后，将无法再使用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
        children: "ILocalSpatialAudioEngine"
      }), " 下的任何 API。如需再次使用空间音效功能，需等待 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine",
        children: "destroy"
      }), " 方法执行完成后，再调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_initialize_ilocalspatialaudioengine",
        children: "initialize"
      }), " 创建新的 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
        children: "ILocalSpatialAudioEngine"
      }), " 实例。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.a, {
            href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_release_ilocalspatialaudioengine",
            children: "destroy"
          }), " 方法之前调用此方法。"]
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "所属接口类-7",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
          children: "ILocalSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_removeremoteposition"
    }), `
`, _jsx(_components.h2, {
      id: "removeremoteposition",
      children: "removeRemotePosition"
    }), `
`, _jsx(_components.p, {
      children: "移除指定远端用户的空间位置信息。"
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_removeremoteposition__prototype"
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
              children: " removeRemotePosition"
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
              children: " uid);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_removeremoteposition__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用该方法成功后，你将不再听到指定远端用户的声音。离开频道后，为避免浪费计算资源，建议调用该方法移除指定远端用户的空间位置信息。否则，该用户的空间位置信息将持续保留。当远端用户数量超过通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_setmaxaudiorecvcount",
        children: "setMaxAudioRecvCount"
      }), " 设置的可接收音频流数量时，系统会根据相对距离自动取消订阅距离最远用户的音频流。"]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_removeremoteposition__parameters"
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
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "uid"
      }), "。该参数必须与用户加入频道时传入的用户 ID 相同。"]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_removeremoteposition__return_values"
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
      id: "所属接口类-8",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
          children: "ILocalSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setaudiorecvrange"
    }), `
`, _jsx(_components.h2, {
      id: "setaudiorecvrange",
      children: "setAudioRecvRange"
    }), `
`, _jsx(_components.p, {
      children: "设置本地用户的音频接收范围。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setaudiorecvrange__prototype"
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
              children: " setAudioRecvRange"
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
              children: " range);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setaudiorecvrange__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "你可以在任意时间调用该方法以更新音频接收范围。设置成功后，本地用户只能接收设定范围内或同一队伍中远端用户的音频。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setaudiorecvrange__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "range",
      children: _jsx(_components.code, {
        children: "range"
      })
    }), `
`, _jsx(_components.p, {
      children: "最大音频接收范围，单位为米。该参数必须大于 0。（默认值为 20）"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setaudiorecvrange__return_values"
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
      id: "所属接口类-9",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setdistanceunit"
    }), `
`, _jsx(_components.h2, {
      id: "setdistanceunit",
      children: "setDistanceUnit"
    }), `
`, _jsx(_components.p, {
      children: "设置游戏引擎中每个单位距离对应的米数。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setdistanceunit__prototype"
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
              children: " setDistanceUnit"
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
              children: " unit);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setdistanceunit__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在声网的空间音效算法中，距离以米为单位进行计算。SDK 默认将游戏引擎中的每个单位距离转换为 1 米。你可以调用该方法将游戏引擎中的每个单位距离转换为指定的米数。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setdistanceunit__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "unit",
      children: _jsx(_components.code, {
        children: "unit"
      })
    }), `
`, _jsx(_components.p, {
      children: "游戏引擎中每个单位距离对应的米数。该参数必须大于 0.00，默认值为 1.00。例如，将该参数设置为 2.00 表示游戏引擎中每个单位距离等于 2 米。该值越大，当远端用户远离本地用户时，本地用户听到的声音衰减得越快。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setdistanceunit__return_values"
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
      id: "所属接口类-10",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqparameters"
    }), `
`, _jsx(_components.h2, {
      id: "setheadphoneeqparameters",
      children: "setHeadphoneEQParameters"
    }), `
`, _jsx(_components.p, {
      children: "设置耳机均衡器的低频和高频参数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqparameters__prototype"
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
              children: " setHeadphoneEQParameters"
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
              children: " lowGain, "
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
              children: " highGain);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqparameters__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqpreset",
        children: "setHeadphoneEQPreset"
      }), " 后未达到预期效果，可以调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_setheadphoneeqparameters",
        children: "setHeadphoneEQParameters"
      }), " 进一步调整耳机均衡器的低频和高频参数。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqparameters__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "lowgain",
      children: _jsx(_components.code, {
        children: "lowGain"
      })
    }), `
`, _jsx(_components.p, {
      children: "耳机均衡器的低频参数，取值范围为 [-10, 10]。值越大，声音越深沉。"
    }), `
`, _jsx(_components.h4, {
      id: "highgain",
      children: _jsx(_components.code, {
        children: "highGain"
      })
    }), `
`, _jsx(_components.p, {
      children: "耳机均衡器的高频参数，取值范围为 [-10, 10]。值越大，声音越清晰。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqparameters__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：发生通用错误。"
          }), `
`]
        }), `
`]
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
      id: "api_irtcengine_setheadphoneeqpreset"
    }), `
`, _jsx(_components.h2, {
      id: "setheadphoneeqpreset",
      children: "setHeadphoneEQPreset"
    }), `
`, _jsx(_components.p, {
      children: "设置预设的耳机均衡器效果。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqpreset__prototype"
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
              children: " setHeadphoneEQPreset"
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
              children: " preset);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqpreset__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法主要用于空间音效场景中。你可以选择预设的耳机均衡器来聆听音频，以实现预期的音频体验。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果你使用的耳机本身已经具有良好的均衡效果，调用该方法可能不会带来显著提升，甚至可能降低体验。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqpreset__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "preset",
      children: _jsx(_components.code, {
        children: "preset"
      })
    }), `
`, _jsx(_components.p, {
      children: "预设的耳机均衡器效果："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "HEADPHONE_EQUALIZER_OFF：关闭耳机均衡器，听到原始音频。"
      }), `
`, _jsx(_components.li, {
        children: "HEADPHONE_EQUALIZER_OVEREAR：为头戴式耳机使用均衡器。"
      }), `
`, _jsx(_components.li, {
        children: "HEADPHONE_EQUALIZER_INEAR：为入耳式耳机使用均衡器。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setheadphoneeqpreset__return_values"
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
        }), "了解详情和解决建议。", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "-1：发生通用错误（无具体原因）。"
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
      id: "api_ibasespatialaudioengine_setmaxaudiorecvcount"
    }), `
`, _jsx(_components.h2, {
      id: "setmaxaudiorecvcount",
      children: "setMaxAudioRecvCount"
    }), `
`, _jsx(_components.p, {
      children: "设置你在指定音频接收范围内可接收的最大音频流数量。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setmaxaudiorecvcount__prototype"
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
              children: " setMaxAudioRecvCount"
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
              children: " maxCount);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setmaxaudiorecvcount__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果可接收的音频流数量超过该设置值，本地用户将接收距离其最近的 ", _jsx(_components.code, {
        children: "maxCount"
      }), " 条音频流。"]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setmaxaudiorecvcount__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "maxcount",
      children: _jsx(_components.code, {
        children: "maxCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "你在指定音频接收范围内可接收的最大音频流数量。该参数的取值应小于或等于 16。（默认值为 10）"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setmaxaudiorecvcount__return_values"
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
      id: "所属接口类-13",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setplayerattenuation"
    }), `
`, _jsx(_components.h2, {
      id: "setplayerattenuation",
      children: "setPlayerAttenuation"
    }), `
`, _jsx(_components.p, {
      children: "设置媒体播放器的声音衰减属性。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setplayerattenuation__prototype"
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
              children: " setPlayerAttenuation"
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
              children: " playerId, "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " attenuation, "
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
              children: " forceSet);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setplayerattenuation__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setplayerattenuation__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-11",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "playerid",
      children: _jsx(_components.code, {
        children: "playerId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体播放器的 ID。你可以通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid",
        children: "getMediaPlayerId"
      }), " 获取该 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "attenuation",
      children: _jsx(_components.code, {
        children: "attenuation"
      })
    }), `
`, _jsx(_components.p, {
      children: "远端用户或媒体播放器的声音衰减系数，取值范围为 [0,1]。具体说明如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：广播模式，音量和音色不随距离衰减，本地用户听到的音量和音色不会因距离变化而变化。"
      }), `
`, _jsx(_components.li, {
        children: "(0, 0.5)：弱衰减模式，音量和音色在传播过程中仅有轻微衰减，声音传播距离比真实环境更远。"
      }), `
`, _jsx(_components.li, {
        children: "0.5：（默认）模拟真实环境中的音量衰减效果，等效于未设置 speaker_attenuation 参数。"
      }), `
`, _jsx(_components.li, {
        children: "(0.5, 1]：强衰减模式，音量和音色在传播过程中迅速衰减。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "forceset",
      children: _jsx(_components.code, {
        children: "forceSet"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否强制设置媒体播放器的声音衰减效果："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：强制使用 attenuation 设置媒体播放器的衰减效果，此时 SpatialAudioZone 中 audioAttenuation 设置的隔音区衰减系数对媒体播放器无效。"
      }), `
`, _jsxs(_components.li, {
        children: ["false：不强制使用 attenuation 设置媒体播放器的声音衰减效果，具体如下：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "如果声源和听众分别位于隔音区内外，声音衰减效果由 SpatialAudioZone 中的 audioAttenuation 决定。"
          }), `
`, _jsx(_components.li, {
            children: "如果声源和听众位于同一隔音区内或同一隔音区外，声音衰减效果由本方法中的 attenuation 参数决定。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setplayerattenuation__return_values"
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
      id: "所属接口类-14",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_setremoteaudioattenuation"
    }), `
`, _jsx(_components.h2, {
      id: "setremoteaudioattenuation",
      children: "setRemoteAudioAttenuation"
    }), `
`, _jsx(_components.p, {
      children: "设置指定用户的声音衰减效果。"
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_setremoteaudioattenuation__prototype"
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
              children: " setRemoteAudioAttenuation"
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
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " attenuation, "
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
              children: " forceSet);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_setremoteaudioattenuation__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_setremoteaudioattenuation__parameters"
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
      children: "用户 ID。该参数必须与用户加入频道时传入的用户 ID 相同。"
    }), `
`, _jsx(_components.h4, {
      id: "attenuation-1",
      children: _jsx(_components.code, {
        children: "attenuation"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户的声音衰减系数，取值范围为 [0, 1]。具体取值说明如下："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "0：广播模式，音量和音色不会随距离衰减，本地用户听到的音量和音色不会因距离变化。"
      }), `
`, _jsx(_components.li, {
        children: "(0, 0.5)：弱衰减模式，音量和音色在传播过程中仅有轻微衰减，声音传播距离大于真实环境。"
      }), `
`, _jsx(_components.li, {
        children: "0.5：（默认）模拟真实环境中的音量衰减效果，等效于未设置 speaker_attenuation 参数。"
      }), `
`, _jsx(_components.li, {
        children: "(0.5, 1]：强衰减模式，音量和音色在传播过程中快速衰减。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "forceset-1",
      children: _jsx(_components.code, {
        children: "forceSet"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否强制设置用户的声音衰减效果："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：强制使用 attenuation 设置用户的声音衰减效果，此时 SpatialAudioZone 中 audioAttenuation 设置的隔音区衰减系数对该用户无效。"
      }), `
`, _jsxs(_components.li, {
        children: ["false：不强制使用 attenuation 设置用户的声音衰减效果，具体如下：", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "若声源和接收者分别位于隔音区内外，衰减效果由 SpatialAudioZone 中的 audioAttenuation 决定；"
          }), `
`, _jsx(_components.li, {
            children: "若声源和接收者位于同一隔音区或同一隔音区外，衰减效果由本方法中的 attenuation 决定。"
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_setremoteaudioattenuation__return_values"
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
      id: "所属接口类-15",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
          children: "ILocalSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoteuserspatialaudioparams"
    }), `
`, _jsx(_components.h2, {
      id: "setremoteuserspatialaudioparams",
      children: "setRemoteUserSpatialAudioParams"
    }), `
`, _jsx(_components.p, {
      children: "设置远端用户的空间音效参数。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoteuserspatialaudioparams__prototype"
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
              children: " setRemoteUserSpatialAudioParams"
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
              children: " uid, SpatialAudioParams params);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoteuserspatialaudioparams__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_irtcengine_enablespatialaudio",
        children: "enableSpatialAudio"
      }), " 后调用此方法。设置成功后，你可以听到具有空间感的远端用户的声音。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoteuserspatialaudioparams__parameters"
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
      children: "用户 ID，必须与该用户加入频道时使用的 ID 相同。"
    }), `
`, _jsx(_components.h4, {
      id: "params",
      children: _jsx(_components.code, {
        children: "params"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["空间音效参数。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-spatialaudioparams",
        children: "SpatialAudioParams"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setremoteuserspatialaudioparams__return_values"
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
      id: "api_imediaplayer_setspatialaudioparams"
    }), `
`, _jsx(_components.h2, {
      id: "setspatialaudioparams",
      children: "setSpatialAudioParams"
    }), `
`, _jsx(_components.p, {
      children: "启用或关闭媒体播放器的空间音效。"
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setspatialaudioparams__prototype"
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
              children: " setSpatialAudioParams"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(SpatialAudioParams params);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setspatialaudioparams__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["若需关闭空间音效，请将 ", _jsx(_components.code, {
        children: "params"
      }), " 参数设置为 ", _jsx(_components.code, {
        children: "null"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setspatialaudioparams__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "params-1",
      children: _jsx(_components.code, {
        children: "params"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体播放器的空间音效参数，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-spatialaudioparams",
        children: "SpatialAudioParams"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_imediaplayer_setspatialaudioparams__return_values"
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
      id: "所属接口类-17",
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
      id: "api_ibasespatialaudioengine_setzones"
    }), `
`, _jsx(_components.h2, {
      id: "setzones",
      children: "setZones"
    }), `
`, _jsx(_components.p, {
      children: "设置隔音区域。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setzones__prototype"
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
              children: " setZones"
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
              children: "SpatialAudioZone"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[] zones);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setzones__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "在虚拟互动场景中，你可以使用该方法设置隔音区域及声音衰减系数。当声源（可以是用户或媒体播放器）和接收者分别处于隔音区域的内外时，可以体验到类似真实环境中声音遇到建筑隔断时的衰减效果："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "当声源和接收者分别处于隔音区域的内外时，声音的衰减效果由 SpatialAudioZone 中的声音衰减系数决定。"
      }), `
`, _jsx(_components.li, {
        children: "如果用户或媒体播放器处于同一个隔音区域内，则声音衰减效果由 setPlayerAttenuation 或 setRemoteAudioAttenuation 中的 attenuation 参数决定。如果你未调用 setPlayerAttenuation 或 setRemoteAudioAttenuation，SDK 默认的声音衰减系数为 0.5，用于模拟真实环境中的声音衰减。"
      }), `
`, _jsx(_components.li, {
        children: "如果声源和接收者分别处于两个不同的隔音区域，接收者将无法听到声源。"
      }), `
`]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果多次调用该方法，以最后一次设置的隔音区域为准。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setzones__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "zones",
      children: _jsx(_components.code, {
        children: "zones"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["隔音区域设置。当该参数设置为 ", _jsx(_components.code, {
        children: "null"
      }), " 时，表示清除所有隔音区域。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-spatialaudiozone",
        children: "SpatialAudioZone"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_setzones__return_values"
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
      id: "所属接口类-18",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateplayerpositioninfo"
    }), `
`, _jsx(_components.h2, {
      id: "updateplayerpositioninfo",
      children: "updatePlayerPositionInfo"
    }), `
`, _jsx(_components.p, {
      children: "更新媒体播放器的空间位置。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateplayerpositioninfo__prototype"
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
              children: " updatePlayerPositionInfo"
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
              children: " playerId, RemoteVoicePositionInfo positionInfo);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateplayerpositioninfo__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，本地用户可以听到媒体播放器空间位置的变化。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateplayerpositioninfo__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "该方法可以在加入频道前或加入频道后调用。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateplayerpositioninfo__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "playerid-1",
      children: _jsx(_components.code, {
        children: "playerId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体播放器的 ID。你可以通过调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/media-player/mediaplayer-info#api_imediaplayer_getmediaplayerid",
        children: "getMediaPlayerId"
      }), " 获取该 ID。"]
    }), `
`, _jsx(_components.h4, {
      id: "positioninfo",
      children: _jsx(_components.code, {
        children: "positionInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["媒体播放器的空间位置，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remotevoicepositioninfo",
        children: "RemoteVoicePositionInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateplayerpositioninfo__return_values"
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
      id: "所属接口类-19",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_updateremoteposition"
    }), `
`, _jsx(_components.h2, {
      id: "updateremoteposition",
      children: "updateRemotePosition"
    }), `
`, _jsx(_components.p, {
      children: "更新指定远端用户的空间位置。"
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_updateremoteposition__prototype"
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
              children: " updateRemotePosition"
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
              children: " uid, RemoteVoicePositionInfo posInfo);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_updateremoteposition__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "调用该方法后，SDK 会根据本地用户与远端用户之间的相对位置计算空间音效参数。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.code, {
            children: "joinChannel"
          }), " 方法后再调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_updateremoteposition__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "uid-4",
      children: _jsx(_components.code, {
        children: "uid"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户 ID，必须与该用户加入频道时传入的用户 ID 相同。"
    }), `
`, _jsx(_components.h4, {
      id: "posinfo",
      children: _jsx(_components.code, {
        children: "posInfo"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["远端用户的空间位置。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-remotevoicepositioninfo",
        children: "RemoteVoicePositionInfo"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_ilocalspatialaudioengine_updateremoteposition__return_values"
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
      id: "所属接口类-20",
      children: "所属接口类"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ilocalspatialaudioengine",
          children: "ILocalSpatialAudioEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateselfposition"
    }), `
`, _jsx(_components.h2, {
      id: "updateselfposition",
      children: "updateSelfPosition"
    }), `
`, _jsx(_components.p, {
      children: "更新本地用户的空间位置。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateselfposition__prototype"
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
              children: " updateSelfPosition"
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
              children: "[] position, "
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
              children: "[] axisForward, "
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
              children: "[] axisRight, "
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
              children: "[] axisUp);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateselfposition__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ibasespatialaudioengine_updateselfposition",
        children: "updateSelfPosition"
      }), " 需要与 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition",
        children: "updateRemotePosition"
      }), " 搭配使用。SDK 会根据该方法和 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/pre-and-post-processing/spatial-audio#api_ilocalspatialaudioengine_updateremoteposition",
        children: "updateRemotePosition"
      }), " 中的参数设置，计算本地用户与远端用户之间的相对位置，并据此计算空间音效参数。"]
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateselfposition__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "position",
      children: _jsx(_components.code, {
        children: "position"
      })
    }), `
`, _jsx(_components.p, {
      children: "世界坐标系中的坐标。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
    }), `
`, _jsx(_components.h4, {
      id: "axisforward",
      children: _jsx(_components.code, {
        children: "axisForward"
      })
    }), `
`, _jsx(_components.p, {
      children: "坐标系中 x 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
    }), `
`, _jsx(_components.h4, {
      id: "axisright",
      children: _jsx(_components.code, {
        children: "axisRight"
      })
    }), `
`, _jsx(_components.p, {
      children: "坐标系中 y 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
    }), `
`, _jsx(_components.h4, {
      id: "axisup",
      children: _jsx(_components.code, {
        children: "axisUp"
      })
    }), `
`, _jsx(_components.p, {
      children: "坐标系中 z 轴的单位向量。该参数为长度为 3 的数组，三个值依次表示前、右、上的坐标。"
    }), `
`, _jsx("a", {
      id: "api_ibasespatialaudioengine_updateselfposition__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_ibasespatialaudioengine",
          children: "IBaseSpatialAudioEngine"
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
