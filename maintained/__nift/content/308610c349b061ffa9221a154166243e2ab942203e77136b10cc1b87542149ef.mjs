import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "音效文件播放",
  description: "RTC Android API 参考迁移页。"
};
export let _markdown = `

<a id="toc_audio_effect_file" />

<a id="api_irtcengine_geteffectcurrentposition" />

## getEffectCurrentPosition [#geteffectcurrentposition]

获取指定音效文件的播放位置。

<a id="api_irtcengine_geteffectcurrentposition__prototype" />

\`\`\`java
public abstract int getEffectCurrentPosition(int soundId);
\`\`\`

<a id="api_irtcengine_geteffectcurrentposition__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 \`playEffect\` 方法之后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_geteffectcurrentposition__parameters" />

### 参数 [#参数]

#### \`soundId\` [#soundid]

音效 ID。每个音效文件的 ID 是唯一的。

<a id="api_irtcengine_geteffectcurrentposition__return_values" />

### 返回值 [#返回值]

* 方法调用成功，返回指定音效文件的播放位置（毫秒）。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_geteffectduration" />

## getEffectDuration [#geteffectduration]

获取音效文件的时长。

<a id="api_irtcengine_geteffectduration__prototype" />

\`\`\`java
public abstract int getEffectDuration(String filePath);
\`\`\`

<a id="api_irtcengine_geteffectduration__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在加入频道后调用该方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_geteffectduration__parameters" />

### 参数 [#参数-1]

#### \`filePath\` [#filepath]

音效文件的路径：

* Android：路径需精确到文件名和后缀名。支持 URL 地址、绝对路径，或以 /assets/ 开头的文件路径。使用绝对路径访问本地文件可能会遇到权限问题，建议使用 URI 地址，例如：

\`content://com.android.providers.media.documents/document/audio%3A14441\`。

<a id="api_irtcengine_geteffectduration__return_values" />

### 返回值 [#返回值-1]

* 方法调用成功，返回指定音效文件的总时长（毫秒）。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-1]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_geteffectsvolume" />

## getEffectsVolume [#geteffectsvolume]

获取音效的音量。

<a id="api_irtcengine_geteffectsvolume__prototype" />

\`\`\`java
public abstract double getEffectsVolume();
\`\`\`

<a id="api_irtcengine_geteffectsvolume__detailed_desc" />

音量为整数，范围为 0 到 100。默认值为 100，表示原始音量。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 \`playEffect\` 方法后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_geteffectsvolume__return_values" />

### 返回值 [#返回值-2]

* 方法调用成功，返回音效的音量。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-2]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_getvolumeofeffect" />

## getVolumeOfEffect [#getvolumeofeffect]

获取指定音效文件的音量。

<a id="api_irtcengine_getvolumeofeffect__prototype" />

\`\`\`java
public abstract int getVolumeOfEffect(int soundId);
\`\`\`

<a id="api_irtcengine_getvolumeofeffect__detailed_desc" />

<a id="api_irtcengine_getvolumeofeffect__parameters" />

### 参数 [#参数-2]

#### \`soundId\` [#soundid-1]

音效文件的 ID。

<a id="api_irtcengine_getvolumeofeffect__return_values" />

### 返回值 [#返回值-3]

* 方法调用成功，返回指定音效的音量，取值范围为 0 到 100，100 表示原始音量。
* 方法调用失败，返回值小于 0。

### 所属接口类 [#所属接口类-3]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pausealleffects" />

## pauseAllEffects [#pausealleffects]

暂停所有音效。

<a id="api_irtcengine_pausealleffects__prototype" />

\`\`\`java
public abstract int pauseAllEffects();
\`\`\`

<a id="api_irtcengine_pausealleffects__detailed_desc" />

<a id="api_irtcengine_pausealleffects__return_values" />

### 返回值 [#返回值-4]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-4]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_pauseeffect" />

## pauseEffect [#pauseeffect]

暂停指定音效文件的播放。

<a id="api_irtcengine_pauseeffect__prototype" />

\`\`\`java
public abstract int pauseEffect(int soundId);
\`\`\`

<a id="api_irtcengine_pauseeffect__detailed_desc" />

<a id="api_irtcengine_pauseeffect__parameters" />

### 参数 [#参数-3]

#### \`soundId\` [#soundid-2]

音效 ID。每个音效文件的 ID 是唯一的。

<a id="api_irtcengine_pauseeffect__return_values" />

### 返回值 [#返回值-5]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-5]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_playalleffects" />

## playAllEffects [#playalleffects]

播放所有音效。

<a id="api_irtcengine_playalleffects__prototype" />

\`\`\`java
public abstract int playAllEffects(int loopCount, double pitch, double pan, double gain, boolean publish);
\`\`\`

<a id="api_irtcengine_playalleffects__detailed_desc" />

多次调用 \`preloadEffect\` 将多个音效预加载到内存后，可以调用该方法为频道内所有用户播放所有预加载的音效。

<a id="api_irtcengine_playalleffects__parameters" />

### 参数 [#参数-4]

#### \`loopCount\` [#loopcount]

音效的循环播放次数：

* -1：无限循环播放音效，直到调用 stopEffect 或 stopAllEffects。
* 0：播放一次音效。
* 1：播放两次音效。

#### \`pitch\` [#pitch]

音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。

#### \`pan\` [#pan]

音效的空间位置。取值范围为 -1.0 到 1.0：

* -1.0：音效从左侧播放。
* 0.0：音效从前方播放。
* 1.0：音效从右侧播放。

#### \`gain\` [#gain]

音效的音量。取值范围为 \\[0, 100]，默认值为 100（原始音量）。值越小，音量越低。

#### \`publish\` [#publish]

是否将音效发布给远端用户：

* true：将音效发布给远端用户，本地用户和远端用户都能听到音效。
* false：（默认）不发布音效，只有本地用户能听到。

<a id="api_irtcengine_playalleffects__return_values" />

### 返回值 [#返回值-6]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-6]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_playeffect2" />

## playEffect \\[1/2] [#playeffect-12]

播放指定的本地或在线音效文件。

<a id="api_irtcengine_playeffect2__prototype" />

\`\`\`java
public abstract int playEffect(int soundId, String filePath, int loopCount, double pitch, double pan, double gain, boolean publish);
\`\`\`

<a id="api_irtcengine_playeffect2__detailed_desc" />

该方法支持播放以 \`content://\` 开头的 URI 文件。关于支持的音频文件格式，详见[声网 RTC SDK 支持哪些格式的音频文件](https://doc.shengwang.cn/faq/general-product-inquiry/audio-format)。若本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会报告 \`AUDIO_MIXING_REASON_CAN_NOT_OPEN\`。要同时播放多个音效文件，请使用不同的 \`soundId\` 和 \`filePath\` 多次调用该方法。为获得最佳用户体验，声网建议不要同时播放超过三个音频文件。

注：

* 如果需要播放在线音效文件，建议先将其缓存到本地设备，调用 preloadEffect 将文件预加载到内存中，再调用该方法播放音效。否则可能因加载超时或失败导致播放失败或无声。
* 如果在调用 playEffectEx 前调用了 preloadEffectEx，则 playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时将从头开始播放。
* 如果未调用 preloadEffectEx 就直接调用 playEffectEx，则 playEffectEx 执行后会销毁资源。下次调用时将尝试重新打开文件并从头播放。

<a id="api_irtcengine_playeffect2__timing" />

### 调用时机 [#调用时机]

你可以在加入频道前或后调用该方法。

<a id="api_irtcengine_playeffect2__related" />

### 相关回调 [#相关回调]

音效文件播放完成后，SDK 会触发 [onAudioEffectFinished](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished) 回调。

<a id="api_irtcengine_playeffect2__parameters" />

### 参数 [#参数-5]

#### \`soundId\` [#soundid-3]

音效 ID。每个音效文件的 ID 必须唯一。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你已通过调用 \`preloadEffect\` 将音效预加载到内存中，请确保该参数的值与 \`preloadEffect\` 中的 \`soundId\` 相同。
  </CalloutDescription>
</CalloutContainer>

#### \`filePath\` [#filepath-1]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你已通过调用 \`preloadEffect\` 将音效预加载到内存中，请确保该参数的值与 \`preloadEffect\` 中的 \`filePath\` 相同。
  </CalloutDescription>
</CalloutContainer>

音效文件路径。支持以下格式：

* 以 content:// 开头的 URI 地址。
* 以 /assets/ 开头的路径。
* URL。
* 本地文件的绝对路径（需精确到文件名和扩展名）。

支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。

#### \`loopCount\` [#loopcount-1]

音效的循环播放次数：

* ≥ 0：播放的次数。例如，1 表示循环播放一次，即总共播放两次。
* -1：无限循环播放该音频文件。

#### \`pitch\` [#pitch-1]

音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0，表示原始音调。值越小，音调越低。

#### \`pan\` [#pan-1]

音效的空间位置。取值范围为 -1.0 到 1.0：

* -1.0：音效从用户左侧传来。
* 0.0：音效从用户正前方传来。
* 1.0：音效从用户右侧传来。

#### \`gain\` [#gain-1]

音效的音量。取值范围为 0.0 到 100.0，默认值为 100.0，表示原始音量。值越小，音量越低。

#### \`publish\` [#publish-1]

是否将音效发布给远端用户：

* true：将音效发布给远端用户，本地用户和远端用户都能听到音效。
* false：不将音效发布给远端用户，只有本地用户能听到音效。

<a id="api_irtcengine_playeffect2__return_values" />

### 返回值 [#返回值-7]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-7]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_playeffect3" />

## playEffect \\[2/2] [#playeffect-22]

播放指定的本地或在线音效文件。

<a id="api_irtcengine_playeffect3__prototype" />

\`\`\`java
public abstract int playEffect(int soundId, String filePath, int loopCount, double pitch, double pan, double gain, boolean publish, int startPos);
\`\`\`

<a id="api_irtcengine_playeffect3__detailed_desc" />

该方法支持播放以 \`content://\` 开头的 URI 文件。关于支持的音频文件格式，参见 \`What formats of audio files does the Agora RTC SDK support\`。如果本地音频文件不存在、SDK 不支持该文件格式，或无法访问音频文件的 URL，SDK 会报告 \`AUDIO_MIXING_REASON_CAN_NOT_OPEN\`。

注：

* 如果需要播放在线音效文件，建议先将其缓存到本地设备，调用 preloadEffect 将文件预加载到内存中，再调用此方法播放。否则可能因加载超时或失败导致播放失败或无声。
* 如果在调用 playEffect 前已调用 preloadEffect，则 playEffect 执行后不会关闭文件资源。下次调用 playEffect 时将从头开始播放。
* 如果未调用 preloadEffect 就执行 playEffect，则播放结束后资源将被销毁。下次调用 playEffect 时将尝试重新打开文件并从头播放。

<a id="api_irtcengine_playeffect3__timing" />

### 调用时机 [#调用时机-1]

你可以在加入频道前或加入频道后调用该方法。

<a id="api_irtcengine_playeffect3__related" />

### 相关回调 [#相关回调-1]

音效文件播放完成后，SDK 会触发 [onAudioEffectFinished](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished) 回调。

<a id="api_irtcengine_playeffect3__parameters" />

### 参数 [#参数-6]

#### \`soundId\` [#soundid-4]

音效 ID。每个音效文件的 ID 都是唯一的。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你已通过调用 \`preloadEffect\` 将音效预加载到内存中，请确保该参数的值与 \`preloadEffect\` 中的 \`soundId\` 相同。
  </CalloutDescription>
</CalloutContainer>

#### \`filePath\` [#filepath-2]

文件路径。支持以 \`content://\` 开头的 URI、以 \`/assets/\` 开头的路径、URL 以及本地文件的绝对路径。路径需精确到文件名及扩展名。支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果你已通过调用 \`preloadEffect\` 将音效预加载到内存中，请确保该参数的值与 \`preloadEffect\` 中的 \`filePath\` 相同。
  </CalloutDescription>
</CalloutContainer>

#### \`loopCount\` [#loopcount-2]

音效循环播放的次数：

* ≥ 0：播放的次数。例如，1 表示循环播放一次，即总共播放两次。
* -1：无限循环播放该音频文件。

#### \`pitch\` [#pitch-2]

音效的音调。取值范围为 0.5 到 2.0。默认值为 1.0，表示原始音调。值越小，音调越低。

#### \`pan\` [#pan-2]

音效的空间位置。取值范围为 -1.0 到 1.0：

* -1.0：音效从用户左侧播放。
* 0.0：音效从用户正前方播放。
* 1.0：音效从用户右侧播放。

#### \`gain\` [#gain-2]

音效的音量。取值范围为 0.0 到 100.0。默认值为 100.0，表示原始音量。值越小，音量越低。

#### \`publish\` [#publish-2]

是否将音效发布给远端用户：

* true：将音效发布给远端用户，本地用户和远端用户都能听到该音效。
* false：不将音效发布给远端用户，只有本地用户能听到该音效。

#### \`startPos\` [#startpos]

音效文件的播放起始位置（单位：毫秒）。

<a id="api_irtcengine_playeffect3__return_values" />

### 返回值 [#返回值-8]

0：方法调用成功。 \\< 0：方法调用失败。

### 所属接口类 [#所属接口类-8]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_playeffectex" />

## playEffectEx \\[1/2] [#playeffectex-12]

在频道中播放指定的音效。

<a id="api_irtcengineex_playeffectex__prototype" />

\`\`\`java
public abstract int playEffectEx(RtcConnection connection, int soundId, String filePath, int loopCount, double pitch, double pan, double gain, boolean publish, int startPos);
\`\`\`

<a id="api_irtcengineex_playeffectex__detailed_desc" />

#### \`自从\` [#自从]

自 v4.6.0 版本新增。

你可以调用该方法在频道中向所有用户播放指定的音效。每次调用该方法只能播放一个音效。若需同时播放多个音效，请多次调用该方法，并为每个音效设置不同的 \`soundId\` 和 \`filePath\` 参数。

注：

* 声网建议不要同时播放超过三个音效。
* 此方法中的音效 ID 和文件路径必须与 preloadEffectEx 方法中的一致。
* 如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。
* 如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。

<a id="api_irtcengineex_playeffectex__scenario" />

### 适用场景 [#适用场景]

该方法适用于多频道场景。

<a id="api_irtcengineex_playeffectex__parameters" />

### 参数 [#参数-7]

#### \`connection\` [#connection]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`soundId\` [#soundid-5]

音效 ID。

#### \`filePath\` [#filepath-3]

本地文件的绝对路径或在线文件的 URL。支持的音频格式包括 mp3、mp4、m4a、aac、3gp、mkv 和 wav。

#### \`loopCount\` [#loopcount-3]

音效的循环播放次数：

* -1：无限循环，直到调用 stopEffect 或 stopAllEffects。
* 0：播放一次。
* 1：播放两次。

#### \`pitch\` [#pitch-3]

音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。

#### \`pan\` [#pan-3]

音效的空间位置。取值范围为 -1.0 到 1.0：

* -1.0：音效从用户左侧播放。
* 0.0：音效从用户正前方播放。
* 1.0：音效从用户右侧播放。

#### \`gain\` [#gain-3]

音效的音量。取值范围为 0.0 到 100.0，默认值为 100（原始音量）。值越小，音量越低。

#### \`publish\` [#publish-3]

是否在频道中发布该音效：

* true：在频道中发布音效。
* false：不在频道中发布音效。

#### \`startPos\` [#startpos-1]

音效文件的播放起始位置（单位为毫秒）。

<a id="api_irtcengineex_playeffectex__return_values" />

### 返回值 [#返回值-9]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-9]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_playeffectex2" />

## playEffectEx \\[2/2] [#playeffectex-22]

在频道中播放指定音效。

<a id="api_irtcengineex_playeffectex2__prototype" />

\`\`\`java
public abstract int playEffectEx(RtcConnection connection, int soundId, String filePath, int loopCount, double pitch, double pan, double gain, boolean publish);
\`\`\`

<a id="api_irtcengineex_playeffectex2__detailed_desc" />

#### \`自从\` [#自从-1]

自 v4.6.0 版本新增。

调用 \`preloadEffectEx\` 预加载音效后，可以使用该方法将指定音效播放给频道中的所有用户。你可以多次调用该方法，并传入不同的 \`soundId\` 和 \`filePath\`，以同时播放多个音效文件。每次调用该方法只能播放一个音效。

注：

* 声网建议不要同时播放超过三个音效。
* 本方法中的音效 ID 和文件路径必须与 preloadEffectEx 方法中保持一致。
* 如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。
* 如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头播放。

<a id="api_irtcengineex_playeffectex2__scenario" />

### 适用场景 [#适用场景-1]

该方法适用于多频道场景。

<a id="api_irtcengineex_playeffectex2__parameters" />

### 参数 [#参数-8]

#### \`connection\` [#connection-1]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`soundId\` [#soundid-6]

音效 ID。

#### \`filePath\` [#filepath-4]

本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。

#### \`loopCount\` [#loopcount-4]

音效的循环播放次数：

* -1：无限循环，直到调用 stopEffect 或 stopAllEffects。
* 0：播放一次。
* 1：播放两次。

#### \`pitch\` [#pitch-4]

音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。

#### \`pan\` [#pan-4]

音效的空间位置。取值范围为 -1.0 到 1.0：

* -1.0：音效从用户左侧播放。
* 0.0：音效从用户正前方播放。
* 1.0：音效从用户右侧播放。

#### \`gain\` [#gain-4]

音效的音量。取值范围为 0.0 到 100.0，默认值为 100（原始音量）。值越小，音量越低。

#### \`publish\` [#publish-4]

是否在频道中发布音效：

* true：在频道中发布音效。
* false：不在频道中发布音效。

<a id="api_irtcengineex_playeffectex2__return_values" />

### 返回值 [#返回值-10]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-10]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_preloadeffect" />

## preloadEffect \\[1/2] [#preloadeffect-12]

预加载指定的音效文件。

<a id="api_irtcengine_preloadeffect__prototype" />

\`\`\`java
public abstract int preloadEffect(int soundId, String filePath, int startPos);
\`\`\`

<a id="api_irtcengine_preloadeffect__detailed_desc" />

该方法每次调用时仅将一个指定的音效文件预加载到内存中。若需预加载多个音效文件，请多次调用该方法。

注：

* 为确保通信流畅，请限制音效文件的大小。
* 声网建议在加入频道前调用此方法。
* 如果在调用 playEffect 之前调用了 preloadEffect，则 playEffect 执行后不会关闭文件资源。下次调用 playEffect 时将从头开始播放。
* 如果在调用 playEffect 之前未调用 preloadEffect，则 playEffect 执行后资源将被销毁。下次调用 playEffect 时将尝试重新打开文件并从头开始播放。

<a id="api_irtcengine_preloadeffect__parameters" />

### 参数 [#参数-9]

#### \`soundId\` [#soundid-7]

音效的 ID。

#### \`filePath\` [#filepath-5]

本地音效文件的绝对路径或在线音效文件的 URL。

#### \`startPos\` [#startpos-2]

在线音效文件的起始播放位置。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。

<a id="api_irtcengine_preloadeffect__return_values" />

### 返回值 [#返回值-11]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-11]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_preloadeffect2" />

## preloadEffect \\[2/2] [#preloadeffect-22]

将指定的音效文件预加载到内存中。

<a id="api_irtcengine_preloadeffect2__prototype" />

\`\`\`java
public abstract int preloadEffect(int soundId, String filePath);
\`\`\`

<a id="api_irtcengine_preloadeffect2__detailed_desc" />

确保所有预加载文件的总大小不超过限制。详见 \`声网 RTC SDK 支持哪些音频文件格式\`。

注：

* 如果在调用 playEffect 之前调用了 preloadEffect， playEffect 执行后不会关闭文件资源。下次调用 playEffect 时，将从头开始播放。
* 如果在调用 playEffect 之前未调用 preloadEffect， playEffect 执行后会销毁资源。下次调用 playEffect 时，将尝试重新打开文件并从头开始播放。

<a id="api_irtcengine_preloadeffect2__timing" />

### 调用时机 [#调用时机-2]

声网建议在加入频道前调用该方法。

<a id="api_irtcengine_preloadeffect2__parameters" />

### 参数 [#参数-10]

#### \`soundId\` [#soundid-8]

音效 ID。每个音效文件的 ID 必须唯一。

#### \`filePath\` [#filepath-6]

文件路径。支持以下格式：

* URL 地址。
* 绝对路径。
* 以 /assets/ 开头的文件路径。

路径需精确到文件名和后缀名。如果使用绝对路径访问本地文件，可能会遇到权限问题，建议使用 URI 地址，例如： \`content://com.android.providers.media.documents/document/audio%3A14441\`。

<a id="api_irtcengine_preloadeffect2__return_values" />

### 返回值 [#返回值-12]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-12]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengineex_preloadeffectex" />

## preloadEffectEx \\[1/2] [#preloadeffectex-12]

将指定音效预加载到频道中。

<a id="api_irtcengineex_preloadeffectex__prototype" />

\`\`\`java
public abstract int preloadEffectEx(RtcConnection connection, int soundId, String filePath, int startPos);
\`\`\`

<a id="api_irtcengineex_preloadeffectex__detailed_desc" />

#### \`自从\` [#自从-2]

自 v4.6.0 版本新增。

每次调用该方法时，只能将一个音效文件预加载到内存中。如果需要预加载多个音效文件，请多次调用该方法。预加载完成后，可以调用 \`playEffect\` 播放预加载的音效，或调用 [playAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects) 播放所有预加载的音效。

注：

* 为确保使用体验流畅，音效文件的大小不应超过限制。
* 声网建议在加入频道前调用该方法。
* 如果在调用 playEffectEx 前已调用 preloadEffectEx，则 playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时将从头开始播放。
* 如果在调用 playEffectEx 前未调用 preloadEffectEx，则 playEffectEx 执行后会销毁文件资源。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。

<a id="api_irtcengineex_preloadeffectex__scenario" />

### 适用场景 [#适用场景-2]

该方法适用于多频道场景。

<a id="api_irtcengineex_preloadeffectex__parameters" />

### 参数 [#参数-11]

#### \`connection\` [#connection-2]

连接信息，详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`soundId\` [#soundid-9]

音效 ID。

#### \`filePath\` [#filepath-7]

本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。

#### \`startPos\` [#startpos-3]

音效文件的播放起始位置（毫秒）。

<a id="api_irtcengineex_preloadeffectex__return_values" />

### 返回值 [#返回值-13]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-13]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengineex_preloadeffectex2" />

## preloadEffectEx \\[2/2] [#preloadeffectex-22]

将指定音效预加载到频道中。

<a id="api_irtcengineex_preloadeffectex2__prototype" />

\`\`\`java
public abstract int preloadEffectEx(RtcConnection connection, int soundId, String filePath);
\`\`\`

<a id="api_irtcengineex_preloadeffectex2__detailed_desc" />

#### \`自从\` [#自从-3]

自 v4.6.0 版本新增。

每次调用该方法时只能将一个音效文件预加载到内存中。如果需要预加载多个音效文件，请多次调用该方法。预加载完成后，可以调用 \`playEffect\` 播放预加载的音效，或调用 [playAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects) 播放所有预加载的音效。

注：

* 为确保使用体验流畅，音效文件的大小不应超过限制。
* 声网建议在加入频道前调用该方法。
* 如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。
* 如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。

<a id="api_irtcengineex_preloadeffectex2__scenario" />

### 适用场景 [#适用场景-3]

该方法适用于多频道场景。

<a id="api_irtcengineex_preloadeffectex2__parameters" />

### 参数 [#参数-12]

#### \`connection\` [#connection-3]

连接信息。详见 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection)。

#### \`soundId\` [#soundid-10]

音效 ID。

#### \`filePath\` [#filepath-8]

本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。

<a id="api_irtcengineex_preloadeffectex2__return_values" />

### 返回值 [#返回值-14]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-14]

* [RtcEngineEx](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex)

<a id="api_irtcengine_resumealleffects" />

## resumeAllEffects [#resumealleffects]

恢复播放所有音效文件。

<a id="api_irtcengine_resumealleffects__prototype" />

\`\`\`java
public abstract int resumeAllEffects();
\`\`\`

<a id="api_irtcengine_resumealleffects__detailed_desc" />

调用 [pauseAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects) 暂停播放后，可以调用该方法恢复播放。

<a id="api_irtcengine_resumealleffects__timing" />

### 调用时机 [#调用时机-3]

请在调用 [pauseAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects) 之后调用该方法。

<a id="api_irtcengine_resumealleffects__return_values" />

### 返回值 [#返回值-15]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-15]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_resumeeffect" />

## resumeEffect [#resumeeffect]

恢复播放指定音效。

<a id="api_irtcengine_resumeeffect__prototype" />

\`\`\`java
public abstract int resumeEffect(int soundId);
\`\`\`

<a id="api_irtcengine_resumeeffect__detailed_desc" />

<a id="api_irtcengine_resumeeffect__parameters" />

### 参数 [#参数-13]

#### \`soundId\` [#soundid-11]

音效 ID。每个音效文件的 ID 是唯一的。

<a id="api_irtcengine_resumeeffect__return_values" />

### 返回值 [#返回值-16]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-16]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_seteffectposition" />

## setEffectPosition [#seteffectposition]

设置音效文件的播放位置。

<a id="api_irtcengine_seteffectposition__prototype" />

\`\`\`java
public abstract int setEffectPosition(int soundId, int pos);
\`\`\`

<a id="api_irtcengine_seteffectposition__detailed_desc" />

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    请在调用 \`playEffect\` 方法之后调用此方法。
  </CalloutDescription>
</CalloutContainer>

<a id="api_irtcengine_seteffectposition__parameters" />

### 参数 [#参数-14]

#### \`soundId\` [#soundid-12]

音效 ID。每个音效文件的 ID 是唯一的。

#### \`pos\` [#pos]

音效文件的播放位置，单位为毫秒。

<a id="api_irtcengine_seteffectposition__return_values" />

### 返回值 [#返回值-17]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-17]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_seteffectsvolume" />

## setEffectsVolume [#seteffectsvolume]

设置音效的播放音量。

<a id="api_irtcengine_seteffectsvolume__prototype" />

\`\`\`java
public abstract int setEffectsVolume(double volume);
\`\`\`

<a id="api_irtcengine_seteffectsvolume__detailed_desc" />

该方法需要在调用 \`playEffect\` 方法之后调用。

<a id="api_irtcengine_seteffectsvolume__timing" />

### 调用时机 [#调用时机-4]

该方法需要在调用 \`playEffect\` 方法之后调用。

<a id="api_irtcengine_seteffectsvolume__parameters" />

### 参数 [#参数-15]

#### \`volume\` [#volume]

播放音量，取值范围为 \\[0, 100]。（默认值为 100，表示原始音量。）

<a id="api_irtcengine_seteffectsvolume__return_values" />

### 返回值 [#返回值-18]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-18]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_setvolumeofeffect" />

## setVolumeOfEffect [#setvolumeofeffect]

设置指定音效文件的播放音量。

<a id="api_irtcengine_setvolumeofeffect__prototype" />

\`\`\`java
public abstract int setVolumeOfEffect(int soundId, double volume);
\`\`\`

<a id="api_irtcengine_setvolumeofeffect__detailed_desc" />

在调用 \`playEffect\` 方法之后调用该方法。

<a id="api_irtcengine_setvolumeofeffect__timing" />

### 调用时机 [#调用时机-5]

在调用 \`playEffect\` 方法之后调用该方法。

<a id="api_irtcengine_setvolumeofeffect__parameters" />

### 参数 [#参数-16]

#### \`soundId\` [#soundid-13]

音效的 ID。每个音效文件具有唯一的 ID。

#### \`volume\` [#volume-1]

播放音量，取值范围为 \\[0, 100]。（默认值为 100）

<a id="api_irtcengine_setvolumeofeffect__return_values" />

### 返回值 [#返回值-19]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-19]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stopalleffects" />

## stopAllEffects [#stopalleffects]

停止播放所有音效。

<a id="api_irtcengine_stopalleffects__prototype" />

\`\`\`java
public abstract int stopAllEffects();
\`\`\`

<a id="api_irtcengine_stopalleffects__detailed_desc" />

如果你只需要暂停播放，请调用 [pauseAllEffects](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects) 方法。

<a id="api_irtcengine_stopalleffects__timing" />

### 调用时机 [#调用时机-6]

在调用 \`playEffect\` 方法之后调用。

<a id="api_irtcengine_stopalleffects__return_values" />

### 返回值 [#返回值-20]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-20]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_stopeffect" />

## stopEffect [#stopeffect]

停止播放指定音效。

<a id="api_irtcengine_stopeffect__prototype" />

\`\`\`java
public abstract int stopEffect(int soundId);
\`\`\`

<a id="api_irtcengine_stopeffect__detailed_desc" />

如果只需要暂停播放，请调用 [pauseEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pauseeffect) 方法。

<a id="api_irtcengine_stopeffect__timing" />

### 调用时机 [#调用时机-7]

在调用 \`playEffect\` 之后调用。

<a id="api_irtcengine_stopeffect__parameters" />

### 参数 [#参数-17]

#### \`soundId\` [#soundid-14]

音效的 ID。每个音效都有唯一的 ID。

<a id="api_irtcengine_stopeffect__return_values" />

### 返回值 [#返回值-21]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-21]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="api_irtcengine_unloadeffect" />

## unloadEffect [#unloadeffect]

释放指定的预加载音效文件。

<a id="api_irtcengine_unloadeffect__prototype" />

\`\`\`java
public abstract int unloadEffect(int soundId);
\`\`\`

<a id="api_irtcengine_unloadeffect__detailed_desc" />

调用 \`preloadEffect\` 将音效文件加载到内存后，如需释放该音效文件，可调用 [unloadEffect](/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_unloadeffect)。

<a id="api_irtcengine_unloadeffect__timing" />

### 调用时机 [#调用时机-8]

你可以在加入频道前或加入频道后调用此方法。

<a id="api_irtcengine_unloadeffect__parameters" />

### 参数 [#参数-18]

#### \`soundId\` [#soundid-15]

音效的 ID。每个音效都有唯一的 ID。

<a id="api_irtcengine_unloadeffect__return_values" />

### 返回值 [#返回值-22]

* 0：方法调用成功。
* \\< 0：方法调用失败。详见[错误码](https://doc.shengwang.cn/api-ref/rtc/android/error-code)了解详情和解决建议。

### 所属接口类 [#所属接口类-22]

* [RtcEngine](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine)

<a id="callback_irtcengineeventhandler_onaudioeffectfinished" />

## onAudioEffectFinished [#onaudioeffectfinished]

本地音效文件播放完成时的回调。

<a id="callback_irtcengineeventhandler_onaudioeffectfinished__prototype" />

\`\`\`java
public void onAudioEffectFinished(int soundId) {}
\`\`\`

<a id="callback_irtcengineeventhandler_onaudioeffectfinished__detailed_desc" />

<a id="callback_irtcengineeventhandler_onaudioeffectfinished__timing" />

### 触发时机 [#触发时机]

该回调在本地音效文件播放完成时被触发。

<a id="callback_irtcengineeventhandler_onaudioeffectfinished__parameters" />

### 参数 [#参数-19]

#### \`soundId\` [#soundid-16]

音效文件的唯一 ID。

### 所属接口类 [#所属接口类-23]

* [IRtcEngineEventHandler](/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineeventhandler)
`;
export let structuredData = {
  contents: [{
    heading: "geteffectcurrentposition",
    content: "获取指定音效文件的播放位置。"
  }, {
    heading: "geteffectcurrentposition",
    content: "请在调用 `playEffect` 方法之后调用此方法。"
  }, {
    heading: "soundid",
    content: "音效 ID。每个音效文件的 ID 是唯一的。"
  }, {
    heading: "返回值",
    content: "方法调用成功，返回指定音效文件的播放位置（毫秒）。"
  }, {
    heading: "返回值",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类",
    content: "RtcEngine"
  }, {
    heading: "geteffectduration",
    content: "获取音效文件的时长。"
  }, {
    heading: "geteffectduration",
    content: "请在加入频道后调用该方法。"
  }, {
    heading: "filepath",
    content: "音效文件的路径："
  }, {
    heading: "filepath",
    content: "Android：路径需精确到文件名和后缀名。支持 URL 地址、绝对路径，或以 /assets/ 开头的文件路径。使用绝对路径访问本地文件可能会遇到权限问题，建议使用 URI 地址，例如："
  }, {
    heading: "filepath",
    content: "`content://com.android.providers.media.documents/document/audio%3A14441`。"
  }, {
    heading: "返回值-1",
    content: "方法调用成功，返回指定音效文件的总时长（毫秒）。"
  }, {
    heading: "返回值-1",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-1",
    content: "RtcEngine"
  }, {
    heading: "geteffectsvolume",
    content: "获取音效的音量。"
  }, {
    heading: "geteffectsvolume",
    content: "音量为整数，范围为 0 到 100。默认值为 100，表示原始音量。"
  }, {
    heading: "geteffectsvolume",
    content: "请在调用 `playEffect` 方法后调用此方法。"
  }, {
    heading: "返回值-2",
    content: "方法调用成功，返回音效的音量。"
  }, {
    heading: "返回值-2",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-2",
    content: "RtcEngine"
  }, {
    heading: "getvolumeofeffect",
    content: "获取指定音效文件的音量。"
  }, {
    heading: "soundid-1",
    content: "音效文件的 ID。"
  }, {
    heading: "返回值-3",
    content: "方法调用成功，返回指定音效的音量，取值范围为 0 到 100，100 表示原始音量。"
  }, {
    heading: "返回值-3",
    content: "方法调用失败，返回值小于 0。"
  }, {
    heading: "所属接口类-3",
    content: "RtcEngine"
  }, {
    heading: "pausealleffects",
    content: "暂停所有音效。"
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
    heading: "pauseeffect",
    content: "暂停指定音效文件的播放。"
  }, {
    heading: "soundid-2",
    content: "音效 ID。每个音效文件的 ID 是唯一的。"
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
    heading: "playalleffects",
    content: "播放所有音效。"
  }, {
    heading: "playalleffects",
    content: "多次调用 `preloadEffect` 将多个音效预加载到内存后，可以调用该方法为频道内所有用户播放所有预加载的音效。"
  }, {
    heading: "loopcount",
    content: "音效的循环播放次数："
  }, {
    heading: "loopcount",
    content: "-1：无限循环播放音效，直到调用 stopEffect 或 stopAllEffects。"
  }, {
    heading: "loopcount",
    content: "0：播放一次音效。"
  }, {
    heading: "loopcount",
    content: "1：播放两次音效。"
  }, {
    heading: "pitch",
    content: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。"
  }, {
    heading: "pan",
    content: "音效的空间位置。取值范围为 -1.0 到 1.0："
  }, {
    heading: "pan",
    content: "-1.0：音效从左侧播放。"
  }, {
    heading: "pan",
    content: "0.0：音效从前方播放。"
  }, {
    heading: "pan",
    content: "1.0：音效从右侧播放。"
  }, {
    heading: "gain",
    content: "音效的音量。取值范围为 \\[0, 100]，默认值为 100（原始音量）。值越小，音量越低。"
  }, {
    heading: "publish",
    content: "是否将音效发布给远端用户："
  }, {
    heading: "publish",
    content: "true：将音效发布给远端用户，本地用户和远端用户都能听到音效。"
  }, {
    heading: "publish",
    content: "false：（默认）不发布音效，只有本地用户能听到。"
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
    heading: "playeffect-12",
    content: "播放指定的本地或在线音效文件。"
  }, {
    heading: "playeffect-12",
    content: "该方法支持播放以 `content://` 开头的 URI 文件。关于支持的音频文件格式，详见声网 RTC SDK 支持哪些格式的音频文件。若本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会报告 `AUDIO_MIXING_REASON_CAN_NOT_OPEN`。要同时播放多个音效文件，请使用不同的 `soundId` 和 `filePath` 多次调用该方法。为获得最佳用户体验，声网建议不要同时播放超过三个音频文件。"
  }, {
    heading: "playeffect-12",
    content: "注："
  }, {
    heading: "playeffect-12",
    content: "如果需要播放在线音效文件，建议先将其缓存到本地设备，调用 preloadEffect 将文件预加载到内存中，再调用该方法播放音效。否则可能因加载超时或失败导致播放失败或无声。"
  }, {
    heading: "playeffect-12",
    content: "如果在调用 playEffectEx 前调用了 preloadEffectEx，则 playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时将从头开始播放。"
  }, {
    heading: "playeffect-12",
    content: "如果未调用 preloadEffectEx 就直接调用 playEffectEx，则 playEffectEx 执行后会销毁资源。下次调用时将尝试重新打开文件并从头播放。"
  }, {
    heading: "调用时机",
    content: "你可以在加入频道前或后调用该方法。"
  }, {
    heading: "相关回调",
    content: "音效文件播放完成后，SDK 会触发 onAudioEffectFinished 回调。"
  }, {
    heading: "soundid-3",
    content: "音效 ID。每个音效文件的 ID 必须唯一。"
  }, {
    heading: "soundid-3",
    content: "如果你已通过调用 `preloadEffect` 将音效预加载到内存中，请确保该参数的值与 `preloadEffect` 中的 `soundId` 相同。"
  }, {
    heading: "filepath-1",
    content: "如果你已通过调用 `preloadEffect` 将音效预加载到内存中，请确保该参数的值与 `preloadEffect` 中的 `filePath` 相同。"
  }, {
    heading: "filepath-1",
    content: "音效文件路径。支持以下格式："
  }, {
    heading: "filepath-1",
    content: "以 content:// 开头的 URI 地址。"
  }, {
    heading: "filepath-1",
    content: "以 /assets/ 开头的路径。"
  }, {
    heading: "filepath-1",
    content: "URL。"
  }, {
    heading: "filepath-1",
    content: "本地文件的绝对路径（需精确到文件名和扩展名）。"
  }, {
    heading: "filepath-1",
    content: "支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。"
  }, {
    heading: "loopcount-1",
    content: "音效的循环播放次数："
  }, {
    heading: "loopcount-1",
    content: "≥ 0：播放的次数。例如，1 表示循环播放一次，即总共播放两次。"
  }, {
    heading: "loopcount-1",
    content: "-1：无限循环播放该音频文件。"
  }, {
    heading: "pitch-1",
    content: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0，表示原始音调。值越小，音调越低。"
  }, {
    heading: "pan-1",
    content: "音效的空间位置。取值范围为 -1.0 到 1.0："
  }, {
    heading: "pan-1",
    content: "-1.0：音效从用户左侧传来。"
  }, {
    heading: "pan-1",
    content: "0.0：音效从用户正前方传来。"
  }, {
    heading: "pan-1",
    content: "1.0：音效从用户右侧传来。"
  }, {
    heading: "gain-1",
    content: "音效的音量。取值范围为 0.0 到 100.0，默认值为 100.0，表示原始音量。值越小，音量越低。"
  }, {
    heading: "publish-1",
    content: "是否将音效发布给远端用户："
  }, {
    heading: "publish-1",
    content: "true：将音效发布给远端用户，本地用户和远端用户都能听到音效。"
  }, {
    heading: "publish-1",
    content: "false：不将音效发布给远端用户，只有本地用户能听到音效。"
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
    heading: "playeffect-22",
    content: "播放指定的本地或在线音效文件。"
  }, {
    heading: "playeffect-22",
    content: "该方法支持播放以 `content://` 开头的 URI 文件。关于支持的音频文件格式，参见 `What formats of audio files does the Agora RTC SDK support`。如果本地音频文件不存在、SDK 不支持该文件格式，或无法访问音频文件的 URL，SDK 会报告 `AUDIO_MIXING_REASON_CAN_NOT_OPEN`。"
  }, {
    heading: "playeffect-22",
    content: "注："
  }, {
    heading: "playeffect-22",
    content: "如果需要播放在线音效文件，建议先将其缓存到本地设备，调用 preloadEffect 将文件预加载到内存中，再调用此方法播放。否则可能因加载超时或失败导致播放失败或无声。"
  }, {
    heading: "playeffect-22",
    content: "如果在调用 playEffect 前已调用 preloadEffect，则 playEffect 执行后不会关闭文件资源。下次调用 playEffect 时将从头开始播放。"
  }, {
    heading: "playeffect-22",
    content: "如果未调用 preloadEffect 就执行 playEffect，则播放结束后资源将被销毁。下次调用 playEffect 时将尝试重新打开文件并从头播放。"
  }, {
    heading: "调用时机-1",
    content: "你可以在加入频道前或加入频道后调用该方法。"
  }, {
    heading: "相关回调-1",
    content: "音效文件播放完成后，SDK 会触发 onAudioEffectFinished 回调。"
  }, {
    heading: "soundid-4",
    content: "音效 ID。每个音效文件的 ID 都是唯一的。"
  }, {
    heading: "soundid-4",
    content: "如果你已通过调用 `preloadEffect` 将音效预加载到内存中，请确保该参数的值与 `preloadEffect` 中的 `soundId` 相同。"
  }, {
    heading: "filepath-2",
    content: "文件路径。支持以 `content://` 开头的 URI、以 `/assets/` 开头的路径、URL 以及本地文件的绝对路径。路径需精确到文件名及扩展名。支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。"
  }, {
    heading: "filepath-2",
    content: "如果你已通过调用 `preloadEffect` 将音效预加载到内存中，请确保该参数的值与 `preloadEffect` 中的 `filePath` 相同。"
  }, {
    heading: "loopcount-2",
    content: "音效循环播放的次数："
  }, {
    heading: "loopcount-2",
    content: "≥ 0：播放的次数。例如，1 表示循环播放一次，即总共播放两次。"
  }, {
    heading: "loopcount-2",
    content: "-1：无限循环播放该音频文件。"
  }, {
    heading: "pitch-2",
    content: "音效的音调。取值范围为 0.5 到 2.0。默认值为 1.0，表示原始音调。值越小，音调越低。"
  }, {
    heading: "pan-2",
    content: "音效的空间位置。取值范围为 -1.0 到 1.0："
  }, {
    heading: "pan-2",
    content: "-1.0：音效从用户左侧播放。"
  }, {
    heading: "pan-2",
    content: "0.0：音效从用户正前方播放。"
  }, {
    heading: "pan-2",
    content: "1.0：音效从用户右侧播放。"
  }, {
    heading: "gain-2",
    content: "音效的音量。取值范围为 0.0 到 100.0。默认值为 100.0，表示原始音量。值越小，音量越低。"
  }, {
    heading: "publish-2",
    content: "是否将音效发布给远端用户："
  }, {
    heading: "publish-2",
    content: "true：将音效发布给远端用户，本地用户和远端用户都能听到该音效。"
  }, {
    heading: "publish-2",
    content: "false：不将音效发布给远端用户，只有本地用户能听到该音效。"
  }, {
    heading: "startpos",
    content: "音效文件的播放起始位置（单位：毫秒）。"
  }, {
    heading: "返回值-8",
    content: "0：方法调用成功。 \\< 0：方法调用失败。"
  }, {
    heading: "所属接口类-8",
    content: "RtcEngine"
  }, {
    heading: "playeffectex-12",
    content: "在频道中播放指定的音效。"
  }, {
    heading: "自从",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从",
    content: "你可以调用该方法在频道中向所有用户播放指定的音效。每次调用该方法只能播放一个音效。若需同时播放多个音效，请多次调用该方法，并为每个音效设置不同的 `soundId` 和 `filePath` 参数。"
  }, {
    heading: "自从",
    content: "注："
  }, {
    heading: "自从",
    content: "声网建议不要同时播放超过三个音效。"
  }, {
    heading: "自从",
    content: "此方法中的音效 ID 和文件路径必须与 preloadEffectEx 方法中的一致。"
  }, {
    heading: "自从",
    content: "如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。"
  }, {
    heading: "自从",
    content: "如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。"
  }, {
    heading: "适用场景",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "connection",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "soundid-5",
    content: "音效 ID。"
  }, {
    heading: "filepath-3",
    content: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括 mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
  }, {
    heading: "loopcount-3",
    content: "音效的循环播放次数："
  }, {
    heading: "loopcount-3",
    content: "-1：无限循环，直到调用 stopEffect 或 stopAllEffects。"
  }, {
    heading: "loopcount-3",
    content: "0：播放一次。"
  }, {
    heading: "loopcount-3",
    content: "1：播放两次。"
  }, {
    heading: "pitch-3",
    content: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。"
  }, {
    heading: "pan-3",
    content: "音效的空间位置。取值范围为 -1.0 到 1.0："
  }, {
    heading: "pan-3",
    content: "-1.0：音效从用户左侧播放。"
  }, {
    heading: "pan-3",
    content: "0.0：音效从用户正前方播放。"
  }, {
    heading: "pan-3",
    content: "1.0：音效从用户右侧播放。"
  }, {
    heading: "gain-3",
    content: "音效的音量。取值范围为 0.0 到 100.0，默认值为 100（原始音量）。值越小，音量越低。"
  }, {
    heading: "publish-3",
    content: "是否在频道中发布该音效："
  }, {
    heading: "publish-3",
    content: "true：在频道中发布音效。"
  }, {
    heading: "publish-3",
    content: "false：不在频道中发布音效。"
  }, {
    heading: "startpos-1",
    content: "音效文件的播放起始位置（单位为毫秒）。"
  }, {
    heading: "返回值-9",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-9",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-9",
    content: "RtcEngineEx"
  }, {
    heading: "playeffectex-22",
    content: "在频道中播放指定音效。"
  }, {
    heading: "自从-1",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-1",
    content: "调用 `preloadEffectEx` 预加载音效后，可以使用该方法将指定音效播放给频道中的所有用户。你可以多次调用该方法，并传入不同的 `soundId` 和 `filePath`，以同时播放多个音效文件。每次调用该方法只能播放一个音效。"
  }, {
    heading: "自从-1",
    content: "注："
  }, {
    heading: "自从-1",
    content: "声网建议不要同时播放超过三个音效。"
  }, {
    heading: "自从-1",
    content: "本方法中的音效 ID 和文件路径必须与 preloadEffectEx 方法中保持一致。"
  }, {
    heading: "自从-1",
    content: "如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。"
  }, {
    heading: "自从-1",
    content: "如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头播放。"
  }, {
    heading: "适用场景-1",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "connection-1",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "soundid-6",
    content: "音效 ID。"
  }, {
    heading: "filepath-4",
    content: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
  }, {
    heading: "loopcount-4",
    content: "音效的循环播放次数："
  }, {
    heading: "loopcount-4",
    content: "-1：无限循环，直到调用 stopEffect 或 stopAllEffects。"
  }, {
    heading: "loopcount-4",
    content: "0：播放一次。"
  }, {
    heading: "loopcount-4",
    content: "1：播放两次。"
  }, {
    heading: "pitch-4",
    content: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。"
  }, {
    heading: "pan-4",
    content: "音效的空间位置。取值范围为 -1.0 到 1.0："
  }, {
    heading: "pan-4",
    content: "-1.0：音效从用户左侧播放。"
  }, {
    heading: "pan-4",
    content: "0.0：音效从用户正前方播放。"
  }, {
    heading: "pan-4",
    content: "1.0：音效从用户右侧播放。"
  }, {
    heading: "gain-4",
    content: "音效的音量。取值范围为 0.0 到 100.0，默认值为 100（原始音量）。值越小，音量越低。"
  }, {
    heading: "publish-4",
    content: "是否在频道中发布音效："
  }, {
    heading: "publish-4",
    content: "true：在频道中发布音效。"
  }, {
    heading: "publish-4",
    content: "false：不在频道中发布音效。"
  }, {
    heading: "返回值-10",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-10",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-10",
    content: "RtcEngineEx"
  }, {
    heading: "preloadeffect-12",
    content: "预加载指定的音效文件。"
  }, {
    heading: "preloadeffect-12",
    content: "该方法每次调用时仅将一个指定的音效文件预加载到内存中。若需预加载多个音效文件，请多次调用该方法。"
  }, {
    heading: "preloadeffect-12",
    content: "注："
  }, {
    heading: "preloadeffect-12",
    content: "为确保通信流畅，请限制音效文件的大小。"
  }, {
    heading: "preloadeffect-12",
    content: "声网建议在加入频道前调用此方法。"
  }, {
    heading: "preloadeffect-12",
    content: "如果在调用 playEffect 之前调用了 preloadEffect，则 playEffect 执行后不会关闭文件资源。下次调用 playEffect 时将从头开始播放。"
  }, {
    heading: "preloadeffect-12",
    content: "如果在调用 playEffect 之前未调用 preloadEffect，则 playEffect 执行后资源将被销毁。下次调用 playEffect 时将尝试重新打开文件并从头开始播放。"
  }, {
    heading: "soundid-7",
    content: "音效的 ID。"
  }, {
    heading: "filepath-5",
    content: "本地音效文件的绝对路径或在线音效文件的 URL。"
  }, {
    heading: "startpos-2",
    content: "在线音效文件的起始播放位置。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
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
    heading: "preloadeffect-22",
    content: "将指定的音效文件预加载到内存中。"
  }, {
    heading: "preloadeffect-22",
    content: "确保所有预加载文件的总大小不超过限制。详见 `声网 RTC SDK 支持哪些音频文件格式`。"
  }, {
    heading: "preloadeffect-22",
    content: "注："
  }, {
    heading: "preloadeffect-22",
    content: "如果在调用 playEffect 之前调用了 preloadEffect， playEffect 执行后不会关闭文件资源。下次调用 playEffect 时，将从头开始播放。"
  }, {
    heading: "preloadeffect-22",
    content: "如果在调用 playEffect 之前未调用 preloadEffect， playEffect 执行后会销毁资源。下次调用 playEffect 时，将尝试重新打开文件并从头开始播放。"
  }, {
    heading: "调用时机-2",
    content: "声网建议在加入频道前调用该方法。"
  }, {
    heading: "soundid-8",
    content: "音效 ID。每个音效文件的 ID 必须唯一。"
  }, {
    heading: "filepath-6",
    content: "文件路径。支持以下格式："
  }, {
    heading: "filepath-6",
    content: "URL 地址。"
  }, {
    heading: "filepath-6",
    content: "绝对路径。"
  }, {
    heading: "filepath-6",
    content: "以 /assets/ 开头的文件路径。"
  }, {
    heading: "filepath-6",
    content: "路径需精确到文件名和后缀名。如果使用绝对路径访问本地文件，可能会遇到权限问题，建议使用 URI 地址，例如： `content://com.android.providers.media.documents/document/audio%3A14441`。"
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
    heading: "preloadeffectex-12",
    content: "将指定音效预加载到频道中。"
  }, {
    heading: "自从-2",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-2",
    content: "每次调用该方法时，只能将一个音效文件预加载到内存中。如果需要预加载多个音效文件，请多次调用该方法。预加载完成后，可以调用 `playEffect` 播放预加载的音效，或调用 playAllEffects 播放所有预加载的音效。"
  }, {
    heading: "自从-2",
    content: "注："
  }, {
    heading: "自从-2",
    content: "为确保使用体验流畅，音效文件的大小不应超过限制。"
  }, {
    heading: "自从-2",
    content: "声网建议在加入频道前调用该方法。"
  }, {
    heading: "自从-2",
    content: "如果在调用 playEffectEx 前已调用 preloadEffectEx，则 playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时将从头开始播放。"
  }, {
    heading: "自从-2",
    content: "如果在调用 playEffectEx 前未调用 preloadEffectEx，则 playEffectEx 执行后会销毁文件资源。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。"
  }, {
    heading: "适用场景-2",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "connection-2",
    content: "连接信息，详见 RtcConnection。"
  }, {
    heading: "soundid-9",
    content: "音效 ID。"
  }, {
    heading: "filepath-7",
    content: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
  }, {
    heading: "startpos-3",
    content: "音效文件的播放起始位置（毫秒）。"
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
    heading: "preloadeffectex-22",
    content: "将指定音效预加载到频道中。"
  }, {
    heading: "自从-3",
    content: "自 v4.6.0 版本新增。"
  }, {
    heading: "自从-3",
    content: "每次调用该方法时只能将一个音效文件预加载到内存中。如果需要预加载多个音效文件，请多次调用该方法。预加载完成后，可以调用 `playEffect` 播放预加载的音效，或调用 playAllEffects 播放所有预加载的音效。"
  }, {
    heading: "自从-3",
    content: "注："
  }, {
    heading: "自从-3",
    content: "为确保使用体验流畅，音效文件的大小不应超过限制。"
  }, {
    heading: "自从-3",
    content: "声网建议在加入频道前调用该方法。"
  }, {
    heading: "自从-3",
    content: "如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。"
  }, {
    heading: "自从-3",
    content: "如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。"
  }, {
    heading: "适用场景-3",
    content: "该方法适用于多频道场景。"
  }, {
    heading: "connection-3",
    content: "连接信息。详见 RtcConnection。"
  }, {
    heading: "soundid-10",
    content: "音效 ID。"
  }, {
    heading: "filepath-8",
    content: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
  }, {
    heading: "返回值-14",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-14",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-14",
    content: "RtcEngineEx"
  }, {
    heading: "resumealleffects",
    content: "恢复播放所有音效文件。"
  }, {
    heading: "resumealleffects",
    content: "调用 pauseAllEffects 暂停播放后，可以调用该方法恢复播放。"
  }, {
    heading: "调用时机-3",
    content: "请在调用 pauseAllEffects 之后调用该方法。"
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
    heading: "resumeeffect",
    content: "恢复播放指定音效。"
  }, {
    heading: "soundid-11",
    content: "音效 ID。每个音效文件的 ID 是唯一的。"
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
    heading: "seteffectposition",
    content: "设置音效文件的播放位置。"
  }, {
    heading: "seteffectposition",
    content: "请在调用 `playEffect` 方法之后调用此方法。"
  }, {
    heading: "soundid-12",
    content: "音效 ID。每个音效文件的 ID 是唯一的。"
  }, {
    heading: "pos",
    content: "音效文件的播放位置，单位为毫秒。"
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
    heading: "seteffectsvolume",
    content: "设置音效的播放音量。"
  }, {
    heading: "seteffectsvolume",
    content: "该方法需要在调用 `playEffect` 方法之后调用。"
  }, {
    heading: "调用时机-4",
    content: "该方法需要在调用 `playEffect` 方法之后调用。"
  }, {
    heading: "volume",
    content: "播放音量，取值范围为 \\[0, 100]。（默认值为 100，表示原始音量。）"
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
    heading: "setvolumeofeffect",
    content: "设置指定音效文件的播放音量。"
  }, {
    heading: "setvolumeofeffect",
    content: "在调用 `playEffect` 方法之后调用该方法。"
  }, {
    heading: "调用时机-5",
    content: "在调用 `playEffect` 方法之后调用该方法。"
  }, {
    heading: "soundid-13",
    content: "音效的 ID。每个音效文件具有唯一的 ID。"
  }, {
    heading: "volume-1",
    content: "播放音量，取值范围为 \\[0, 100]。（默认值为 100）"
  }, {
    heading: "返回值-19",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-19",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-19",
    content: "RtcEngine"
  }, {
    heading: "stopalleffects",
    content: "停止播放所有音效。"
  }, {
    heading: "stopalleffects",
    content: "如果你只需要暂停播放，请调用 pauseAllEffects 方法。"
  }, {
    heading: "调用时机-6",
    content: "在调用 `playEffect` 方法之后调用。"
  }, {
    heading: "返回值-20",
    content: "0：方法调用成功。"
  }, {
    heading: "返回值-20",
    content: "\\< 0：方法调用失败。详见错误码了解详情和解决建议。"
  }, {
    heading: "所属接口类-20",
    content: "RtcEngine"
  }, {
    heading: "stopeffect",
    content: "停止播放指定音效。"
  }, {
    heading: "stopeffect",
    content: "如果只需要暂停播放，请调用 pauseEffect 方法。"
  }, {
    heading: "调用时机-7",
    content: "在调用 `playEffect` 之后调用。"
  }, {
    heading: "soundid-14",
    content: "音效的 ID。每个音效都有唯一的 ID。"
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
    heading: "unloadeffect",
    content: "释放指定的预加载音效文件。"
  }, {
    heading: "unloadeffect",
    content: "调用 `preloadEffect` 将音效文件加载到内存后，如需释放该音效文件，可调用 unloadEffect。"
  }, {
    heading: "调用时机-8",
    content: "你可以在加入频道前或加入频道后调用此方法。"
  }, {
    heading: "soundid-15",
    content: "音效的 ID。每个音效都有唯一的 ID。"
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
    heading: "onaudioeffectfinished",
    content: "本地音效文件播放完成时的回调。"
  }, {
    heading: "触发时机",
    content: "该回调在本地音效文件播放完成时被触发。"
  }, {
    heading: "soundid-16",
    content: "音效文件的唯一 ID。"
  }, {
    heading: "所属接口类-23",
    content: "IRtcEngineEventHandler"
  }],
  headings: [{
    id: "geteffectcurrentposition",
    content: "getEffectCurrentPosition"
  }, {
    id: "参数",
    content: "参数"
  }, {
    id: "soundid",
    content: "`soundId`"
  }, {
    id: "返回值",
    content: "返回值"
  }, {
    id: "所属接口类",
    content: "所属接口类"
  }, {
    id: "geteffectduration",
    content: "getEffectDuration"
  }, {
    id: "参数-1",
    content: "参数"
  }, {
    id: "filepath",
    content: "`filePath`"
  }, {
    id: "返回值-1",
    content: "返回值"
  }, {
    id: "所属接口类-1",
    content: "所属接口类"
  }, {
    id: "geteffectsvolume",
    content: "getEffectsVolume"
  }, {
    id: "返回值-2",
    content: "返回值"
  }, {
    id: "所属接口类-2",
    content: "所属接口类"
  }, {
    id: "getvolumeofeffect",
    content: "getVolumeOfEffect"
  }, {
    id: "参数-2",
    content: "参数"
  }, {
    id: "soundid-1",
    content: "`soundId`"
  }, {
    id: "返回值-3",
    content: "返回值"
  }, {
    id: "所属接口类-3",
    content: "所属接口类"
  }, {
    id: "pausealleffects",
    content: "pauseAllEffects"
  }, {
    id: "返回值-4",
    content: "返回值"
  }, {
    id: "所属接口类-4",
    content: "所属接口类"
  }, {
    id: "pauseeffect",
    content: "pauseEffect"
  }, {
    id: "参数-3",
    content: "参数"
  }, {
    id: "soundid-2",
    content: "`soundId`"
  }, {
    id: "返回值-5",
    content: "返回值"
  }, {
    id: "所属接口类-5",
    content: "所属接口类"
  }, {
    id: "playalleffects",
    content: "playAllEffects"
  }, {
    id: "参数-4",
    content: "参数"
  }, {
    id: "loopcount",
    content: "`loopCount`"
  }, {
    id: "pitch",
    content: "`pitch`"
  }, {
    id: "pan",
    content: "`pan`"
  }, {
    id: "gain",
    content: "`gain`"
  }, {
    id: "publish",
    content: "`publish`"
  }, {
    id: "返回值-6",
    content: "返回值"
  }, {
    id: "所属接口类-6",
    content: "所属接口类"
  }, {
    id: "playeffect-12",
    content: "playEffect [1/2]"
  }, {
    id: "调用时机",
    content: "调用时机"
  }, {
    id: "相关回调",
    content: "相关回调"
  }, {
    id: "参数-5",
    content: "参数"
  }, {
    id: "soundid-3",
    content: "`soundId`"
  }, {
    id: "filepath-1",
    content: "`filePath`"
  }, {
    id: "loopcount-1",
    content: "`loopCount`"
  }, {
    id: "pitch-1",
    content: "`pitch`"
  }, {
    id: "pan-1",
    content: "`pan`"
  }, {
    id: "gain-1",
    content: "`gain`"
  }, {
    id: "publish-1",
    content: "`publish`"
  }, {
    id: "返回值-7",
    content: "返回值"
  }, {
    id: "所属接口类-7",
    content: "所属接口类"
  }, {
    id: "playeffect-22",
    content: "playEffect [2/2]"
  }, {
    id: "调用时机-1",
    content: "调用时机"
  }, {
    id: "相关回调-1",
    content: "相关回调"
  }, {
    id: "参数-6",
    content: "参数"
  }, {
    id: "soundid-4",
    content: "`soundId`"
  }, {
    id: "filepath-2",
    content: "`filePath`"
  }, {
    id: "loopcount-2",
    content: "`loopCount`"
  }, {
    id: "pitch-2",
    content: "`pitch`"
  }, {
    id: "pan-2",
    content: "`pan`"
  }, {
    id: "gain-2",
    content: "`gain`"
  }, {
    id: "publish-2",
    content: "`publish`"
  }, {
    id: "startpos",
    content: "`startPos`"
  }, {
    id: "返回值-8",
    content: "返回值"
  }, {
    id: "所属接口类-8",
    content: "所属接口类"
  }, {
    id: "playeffectex-12",
    content: "playEffectEx [1/2]"
  }, {
    id: "自从",
    content: "`自从`"
  }, {
    id: "适用场景",
    content: "适用场景"
  }, {
    id: "参数-7",
    content: "参数"
  }, {
    id: "connection",
    content: "`connection`"
  }, {
    id: "soundid-5",
    content: "`soundId`"
  }, {
    id: "filepath-3",
    content: "`filePath`"
  }, {
    id: "loopcount-3",
    content: "`loopCount`"
  }, {
    id: "pitch-3",
    content: "`pitch`"
  }, {
    id: "pan-3",
    content: "`pan`"
  }, {
    id: "gain-3",
    content: "`gain`"
  }, {
    id: "publish-3",
    content: "`publish`"
  }, {
    id: "startpos-1",
    content: "`startPos`"
  }, {
    id: "返回值-9",
    content: "返回值"
  }, {
    id: "所属接口类-9",
    content: "所属接口类"
  }, {
    id: "playeffectex-22",
    content: "playEffectEx [2/2]"
  }, {
    id: "自从-1",
    content: "`自从`"
  }, {
    id: "适用场景-1",
    content: "适用场景"
  }, {
    id: "参数-8",
    content: "参数"
  }, {
    id: "connection-1",
    content: "`connection`"
  }, {
    id: "soundid-6",
    content: "`soundId`"
  }, {
    id: "filepath-4",
    content: "`filePath`"
  }, {
    id: "loopcount-4",
    content: "`loopCount`"
  }, {
    id: "pitch-4",
    content: "`pitch`"
  }, {
    id: "pan-4",
    content: "`pan`"
  }, {
    id: "gain-4",
    content: "`gain`"
  }, {
    id: "publish-4",
    content: "`publish`"
  }, {
    id: "返回值-10",
    content: "返回值"
  }, {
    id: "所属接口类-10",
    content: "所属接口类"
  }, {
    id: "preloadeffect-12",
    content: "preloadEffect [1/2]"
  }, {
    id: "参数-9",
    content: "参数"
  }, {
    id: "soundid-7",
    content: "`soundId`"
  }, {
    id: "filepath-5",
    content: "`filePath`"
  }, {
    id: "startpos-2",
    content: "`startPos`"
  }, {
    id: "返回值-11",
    content: "返回值"
  }, {
    id: "所属接口类-11",
    content: "所属接口类"
  }, {
    id: "preloadeffect-22",
    content: "preloadEffect [2/2]"
  }, {
    id: "调用时机-2",
    content: "调用时机"
  }, {
    id: "参数-10",
    content: "参数"
  }, {
    id: "soundid-8",
    content: "`soundId`"
  }, {
    id: "filepath-6",
    content: "`filePath`"
  }, {
    id: "返回值-12",
    content: "返回值"
  }, {
    id: "所属接口类-12",
    content: "所属接口类"
  }, {
    id: "preloadeffectex-12",
    content: "preloadEffectEx [1/2]"
  }, {
    id: "自从-2",
    content: "`自从`"
  }, {
    id: "适用场景-2",
    content: "适用场景"
  }, {
    id: "参数-11",
    content: "参数"
  }, {
    id: "connection-2",
    content: "`connection`"
  }, {
    id: "soundid-9",
    content: "`soundId`"
  }, {
    id: "filepath-7",
    content: "`filePath`"
  }, {
    id: "startpos-3",
    content: "`startPos`"
  }, {
    id: "返回值-13",
    content: "返回值"
  }, {
    id: "所属接口类-13",
    content: "所属接口类"
  }, {
    id: "preloadeffectex-22",
    content: "preloadEffectEx [2/2]"
  }, {
    id: "自从-3",
    content: "`自从`"
  }, {
    id: "适用场景-3",
    content: "适用场景"
  }, {
    id: "参数-12",
    content: "参数"
  }, {
    id: "connection-3",
    content: "`connection`"
  }, {
    id: "soundid-10",
    content: "`soundId`"
  }, {
    id: "filepath-8",
    content: "`filePath`"
  }, {
    id: "返回值-14",
    content: "返回值"
  }, {
    id: "所属接口类-14",
    content: "所属接口类"
  }, {
    id: "resumealleffects",
    content: "resumeAllEffects"
  }, {
    id: "调用时机-3",
    content: "调用时机"
  }, {
    id: "返回值-15",
    content: "返回值"
  }, {
    id: "所属接口类-15",
    content: "所属接口类"
  }, {
    id: "resumeeffect",
    content: "resumeEffect"
  }, {
    id: "参数-13",
    content: "参数"
  }, {
    id: "soundid-11",
    content: "`soundId`"
  }, {
    id: "返回值-16",
    content: "返回值"
  }, {
    id: "所属接口类-16",
    content: "所属接口类"
  }, {
    id: "seteffectposition",
    content: "setEffectPosition"
  }, {
    id: "参数-14",
    content: "参数"
  }, {
    id: "soundid-12",
    content: "`soundId`"
  }, {
    id: "pos",
    content: "`pos`"
  }, {
    id: "返回值-17",
    content: "返回值"
  }, {
    id: "所属接口类-17",
    content: "所属接口类"
  }, {
    id: "seteffectsvolume",
    content: "setEffectsVolume"
  }, {
    id: "调用时机-4",
    content: "调用时机"
  }, {
    id: "参数-15",
    content: "参数"
  }, {
    id: "volume",
    content: "`volume`"
  }, {
    id: "返回值-18",
    content: "返回值"
  }, {
    id: "所属接口类-18",
    content: "所属接口类"
  }, {
    id: "setvolumeofeffect",
    content: "setVolumeOfEffect"
  }, {
    id: "调用时机-5",
    content: "调用时机"
  }, {
    id: "参数-16",
    content: "参数"
  }, {
    id: "soundid-13",
    content: "`soundId`"
  }, {
    id: "volume-1",
    content: "`volume`"
  }, {
    id: "返回值-19",
    content: "返回值"
  }, {
    id: "所属接口类-19",
    content: "所属接口类"
  }, {
    id: "stopalleffects",
    content: "stopAllEffects"
  }, {
    id: "调用时机-6",
    content: "调用时机"
  }, {
    id: "返回值-20",
    content: "返回值"
  }, {
    id: "所属接口类-20",
    content: "所属接口类"
  }, {
    id: "stopeffect",
    content: "stopEffect"
  }, {
    id: "调用时机-7",
    content: "调用时机"
  }, {
    id: "参数-17",
    content: "参数"
  }, {
    id: "soundid-14",
    content: "`soundId`"
  }, {
    id: "返回值-21",
    content: "返回值"
  }, {
    id: "所属接口类-21",
    content: "所属接口类"
  }, {
    id: "unloadeffect",
    content: "unloadEffect"
  }, {
    id: "调用时机-8",
    content: "调用时机"
  }, {
    id: "参数-18",
    content: "参数"
  }, {
    id: "soundid-15",
    content: "`soundId`"
  }, {
    id: "返回值-22",
    content: "返回值"
  }, {
    id: "所属接口类-22",
    content: "所属接口类"
  }, {
    id: "onaudioeffectfinished",
    content: "onAudioEffectFinished"
  }, {
    id: "触发时机",
    content: "触发时机"
  }, {
    id: "参数-19",
    content: "参数"
  }, {
    id: "soundid-16",
    content: "`soundId`"
  }, {
    id: "所属接口类-23",
    content: "所属接口类"
  }]
};
export let toc = [{
  depth: 2,
  url: "#geteffectcurrentposition",
  title: _jsx(_Fragment, {
    children: "getEffectCurrentPosition"
  })
}, {
  depth: 3,
  url: "#参数",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
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
  url: "#geteffectduration",
  title: _jsx(_Fragment, {
    children: "getEffectDuration"
  })
}, {
  depth: 3,
  url: "#参数-1",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#filepath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
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
  url: "#geteffectsvolume",
  title: _jsx(_Fragment, {
    children: "getEffectsVolume"
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
  url: "#getvolumeofeffect",
  title: _jsx(_Fragment, {
    children: "getVolumeOfEffect"
  })
}, {
  depth: 3,
  url: "#参数-2",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
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
  url: "#pausealleffects",
  title: _jsx(_Fragment, {
    children: "pauseAllEffects"
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
  url: "#pauseeffect",
  title: _jsx(_Fragment, {
    children: "pauseEffect"
  })
}, {
  depth: 3,
  url: "#参数-3",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
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
  url: "#playalleffects",
  title: _jsx(_Fragment, {
    children: "playAllEffects"
  })
}, {
  depth: 3,
  url: "#参数-4",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#loopcount",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopCount"
    })
  })
}, {
  depth: 4,
  url: "#pitch",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
    })
  })
}, {
  depth: 4,
  url: "#pan",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pan"
    })
  })
}, {
  depth: 4,
  url: "#gain",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gain"
    })
  })
}, {
  depth: 4,
  url: "#publish",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publish"
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
  url: "#playeffect-12",
  title: _jsx(_Fragment, {
    children: "playEffect [1/2]"
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
  url: "#参数-5",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#loopcount-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopCount"
    })
  })
}, {
  depth: 4,
  url: "#pitch-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
    })
  })
}, {
  depth: 4,
  url: "#pan-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pan"
    })
  })
}, {
  depth: 4,
  url: "#gain-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gain"
    })
  })
}, {
  depth: 4,
  url: "#publish-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publish"
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
  url: "#playeffect-22",
  title: _jsx(_Fragment, {
    children: "playEffect [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-1",
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
  url: "#参数-6",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#loopcount-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopCount"
    })
  })
}, {
  depth: 4,
  url: "#pitch-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
    })
  })
}, {
  depth: 4,
  url: "#pan-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pan"
    })
  })
}, {
  depth: 4,
  url: "#gain-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gain"
    })
  })
}, {
  depth: 4,
  url: "#publish-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publish"
    })
  })
}, {
  depth: 4,
  url: "#startpos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
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
  url: "#playeffectex-12",
  title: _jsx(_Fragment, {
    children: "playEffectEx [1/2]"
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
  url: "#参数-7",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#soundid-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#loopcount-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopCount"
    })
  })
}, {
  depth: 4,
  url: "#pitch-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
    })
  })
}, {
  depth: 4,
  url: "#pan-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pan"
    })
  })
}, {
  depth: 4,
  url: "#gain-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gain"
    })
  })
}, {
  depth: 4,
  url: "#publish-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publish"
    })
  })
}, {
  depth: 4,
  url: "#startpos-1",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
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
  url: "#playeffectex-22",
  title: _jsx(_Fragment, {
    children: "playEffectEx [2/2]"
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
  url: "#参数-8",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#soundid-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#loopcount-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "loopCount"
    })
  })
}, {
  depth: 4,
  url: "#pitch-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pitch"
    })
  })
}, {
  depth: 4,
  url: "#pan-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pan"
    })
  })
}, {
  depth: 4,
  url: "#gain-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "gain"
    })
  })
}, {
  depth: 4,
  url: "#publish-4",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publish"
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
  url: "#preloadeffect-12",
  title: _jsx(_Fragment, {
    children: "preloadEffect [1/2]"
  })
}, {
  depth: 3,
  url: "#参数-9",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-5",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#startpos-2",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
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
  url: "#preloadeffect-22",
  title: _jsx(_Fragment, {
    children: "preloadEffect [2/2]"
  })
}, {
  depth: 3,
  url: "#调用时机-2",
  title: _jsx(_Fragment, {
    children: "调用时机"
  })
}, {
  depth: 3,
  url: "#参数-10",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-6",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
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
  url: "#preloadeffectex-12",
  title: _jsx(_Fragment, {
    children: "preloadEffectEx [1/2]"
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
  depth: 4,
  url: "#soundid-9",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-7",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
    })
  })
}, {
  depth: 4,
  url: "#startpos-3",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPos"
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
  url: "#preloadeffectex-22",
  title: _jsx(_Fragment, {
    children: "preloadEffectEx [2/2]"
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
  url: "#参数-12",
  title: _jsx(_Fragment, {
    children: "参数"
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
  depth: 4,
  url: "#soundid-10",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#filepath-8",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "filePath"
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
  url: "#resumealleffects",
  title: _jsx(_Fragment, {
    children: "resumeAllEffects"
  })
}, {
  depth: 3,
  url: "#调用时机-3",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#resumeeffect",
  title: _jsx(_Fragment, {
    children: "resumeEffect"
  })
}, {
  depth: 3,
  url: "#参数-13",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-11",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
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
  url: "#seteffectposition",
  title: _jsx(_Fragment, {
    children: "setEffectPosition"
  })
}, {
  depth: 3,
  url: "#参数-14",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-12",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 4,
  url: "#pos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "pos"
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
  url: "#seteffectsvolume",
  title: _jsx(_Fragment, {
    children: "setEffectsVolume"
  })
}, {
  depth: 3,
  url: "#调用时机-4",
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
  url: "#volume",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "volume"
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
  url: "#setvolumeofeffect",
  title: _jsx(_Fragment, {
    children: "setVolumeOfEffect"
  })
}, {
  depth: 3,
  url: "#调用时机-5",
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
  url: "#soundid-13",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
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
  url: "#stopalleffects",
  title: _jsx(_Fragment, {
    children: "stopAllEffects"
  })
}, {
  depth: 3,
  url: "#调用时机-6",
  title: _jsx(_Fragment, {
    children: "调用时机"
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
  url: "#stopeffect",
  title: _jsx(_Fragment, {
    children: "stopEffect"
  })
}, {
  depth: 3,
  url: "#调用时机-7",
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
  url: "#soundid-14",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
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
  url: "#unloadeffect",
  title: _jsx(_Fragment, {
    children: "unloadEffect"
  })
}, {
  depth: 3,
  url: "#调用时机-8",
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
  url: "#soundid-15",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
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
  url: "#onaudioeffectfinished",
  title: _jsx(_Fragment, {
    children: "onAudioEffectFinished"
  })
}, {
  depth: 3,
  url: "#触发时机",
  title: _jsx(_Fragment, {
    children: "触发时机"
  })
}, {
  depth: 3,
  url: "#参数-19",
  title: _jsx(_Fragment, {
    children: "参数"
  })
}, {
  depth: 4,
  url: "#soundid-16",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "soundId"
    })
  })
}, {
  depth: 3,
  url: "#所属接口类-23",
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
      id: "toc_audio_effect_file"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectcurrentposition"
    }), `
`, _jsx(_components.h2, {
      id: "geteffectcurrentposition",
      children: "getEffectCurrentPosition"
    }), `
`, _jsx(_components.p, {
      children: "获取指定音效文件的播放位置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectcurrentposition__prototype"
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
              children: " getEffectCurrentPosition"
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
              children: " soundId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectcurrentposition__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.code, {
            children: "playEffect"
          }), " 方法之后调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectcurrentposition__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。每个音效文件的 ID 是唯一的。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectcurrentposition__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回指定音效文件的播放位置（毫秒）。"
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
      id: "api_irtcengine_geteffectduration"
    }), `
`, _jsx(_components.h2, {
      id: "geteffectduration",
      children: "getEffectDuration"
    }), `
`, _jsx(_components.p, {
      children: "获取音效文件的时长。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectduration__prototype"
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
              children: " getEffectDuration"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(String filePath);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectduration__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "请在加入频道后调用该方法。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectduration__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-1",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "filepath",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效文件的路径："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android：路径需精确到文件名和后缀名。支持 URL 地址、绝对路径，或以 /assets/ 开头的文件路径。使用绝对路径访问本地文件可能会遇到权限问题，建议使用 URI 地址，例如："
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "content://com.android.providers.media.documents/document/audio%3A14441"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectduration__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-1",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回指定音效文件的总时长（毫秒）。"
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
      id: "api_irtcengine_geteffectsvolume"
    }), `
`, _jsx(_components.h2, {
      id: "geteffectsvolume",
      children: "getEffectsVolume"
    }), `
`, _jsx(_components.p, {
      children: "获取音效的音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectsvolume__prototype"
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
              children: " double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " getEffectsVolume"
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
      id: "api_irtcengine_geteffectsvolume__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "音量为整数，范围为 0 到 100。默认值为 100，表示原始音量。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.code, {
            children: "playEffect"
          }), " 方法后调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_geteffectsvolume__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-2",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回音效的音量。"
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
      id: "api_irtcengine_getvolumeofeffect"
    }), `
`, _jsx(_components.h2, {
      id: "getvolumeofeffect",
      children: "getVolumeOfEffect"
    }), `
`, _jsx(_components.p, {
      children: "获取指定音效文件的音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getvolumeofeffect__prototype"
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
              children: " getVolumeOfEffect"
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
              children: " soundId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getvolumeofeffect__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getvolumeofeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-2",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-1",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效文件的 ID。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_getvolumeofeffect__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-3",
      children: "返回值"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "方法调用成功，返回指定音效的音量，取值范围为 0 到 100，100 表示原始音量。"
      }), `
`, _jsx(_components.li, {
        children: "方法调用失败，返回值小于 0。"
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
      id: "api_irtcengine_pausealleffects"
    }), `
`, _jsx(_components.h2, {
      id: "pausealleffects",
      children: "pauseAllEffects"
    }), `
`, _jsx(_components.p, {
      children: "暂停所有音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pausealleffects__prototype"
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
              children: " pauseAllEffects"
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
      id: "api_irtcengine_pausealleffects__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pausealleffects__return_values"
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
      id: "api_irtcengine_pauseeffect"
    }), `
`, _jsx(_components.h2, {
      id: "pauseeffect",
      children: "pauseEffect"
    }), `
`, _jsx(_components.p, {
      children: "暂停指定音效文件的播放。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseeffect__prototype"
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
              children: " pauseEffect"
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
              children: " soundId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseeffect__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-3",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-2",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。每个音效文件的 ID 是唯一的。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_pauseeffect__return_values"
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
      id: "api_irtcengine_playalleffects"
    }), `
`, _jsx(_components.h2, {
      id: "playalleffects",
      children: "playAllEffects"
    }), `
`, _jsx(_components.p, {
      children: "播放所有音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playalleffects__prototype"
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
              children: " playAllEffects"
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
              children: " loopCount, "
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
              children: " pitch, "
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
              children: " pan, "
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
              children: " gain, "
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
              children: " publish);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playalleffects__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["多次调用 ", _jsx(_components.code, {
        children: "preloadEffect"
      }), " 将多个音效预加载到内存后，可以调用该方法为频道内所有用户播放所有预加载的音效。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playalleffects__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-4",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "loopcount",
      children: _jsx(_components.code, {
        children: "loopCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的循环播放次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1：无限循环播放音效，直到调用 stopEffect 或 stopAllEffects。"
      }), `
`, _jsx(_components.li, {
        children: "0：播放一次音效。"
      }), `
`, _jsx(_components.li, {
        children: "1：播放两次音效。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "pitch",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。"
    }), `
`, _jsx(_components.h4, {
      id: "pan",
      children: _jsx(_components.code, {
        children: "pan"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的空间位置。取值范围为 -1.0 到 1.0："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1.0：音效从左侧播放。"
      }), `
`, _jsx(_components.li, {
        children: "0.0：音效从前方播放。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：音效从右侧播放。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gain",
      children: _jsx(_components.code, {
        children: "gain"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音量。取值范围为 [0, 100]，默认值为 100（原始音量）。值越小，音量越低。"
    }), `
`, _jsx(_components.h4, {
      id: "publish",
      children: _jsx(_components.code, {
        children: "publish"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否将音效发布给远端用户："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：将音效发布给远端用户，本地用户和远端用户都能听到音效。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不发布音效，只有本地用户能听到。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playalleffects__return_values"
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
      id: "api_irtcengine_playeffect2"
    }), `
`, _jsx(_components.h2, {
      id: "playeffect-12",
      children: "playEffect [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "播放指定的本地或在线音效文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect2__prototype"
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
              children: " playEffect"
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
              children: " soundId, String filePath, "
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
              children: " loopCount, "
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
              children: " pitch, "
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
              children: " pan, "
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
              children: " gain, "
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
              children: " publish);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法支持播放以 ", _jsx(_components.code, {
        children: "content://"
      }), " 开头的 URI 文件。关于支持的音频文件格式，详见", _jsx(_components.a, {
        href: "https://doc.shengwang.cn/faq/general-product-inquiry/audio-format",
        children: "声网 RTC SDK 支持哪些格式的音频文件"
      }), "。若本地音乐文件不存在、SDK 不支持该文件格式，或无法访问音乐文件的 URL，SDK 会报告 ", _jsx(_components.code, {
        children: "AUDIO_MIXING_REASON_CAN_NOT_OPEN"
      }), "。要同时播放多个音效文件，请使用不同的 ", _jsx(_components.code, {
        children: "soundId"
      }), " 和 ", _jsx(_components.code, {
        children: "filePath"
      }), " 多次调用该方法。为获得最佳用户体验，声网建议不要同时播放超过三个音频文件。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果需要播放在线音效文件，建议先将其缓存到本地设备，调用 preloadEffect 将文件预加载到内存中，再调用该方法播放音效。否则可能因加载超时或失败导致播放失败或无声。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 前调用了 preloadEffectEx，则 playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果未调用 preloadEffectEx 就直接调用 playEffectEx，则 playEffectEx 执行后会销毁资源。下次调用时将尝试重新打开文件并从头播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect2__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["音效文件播放完成后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished",
        children: "onAudioEffectFinished"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-5",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-3",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。每个音效文件的 ID 必须唯一。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你已通过调用 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 将音效预加载到内存中，请确保该参数的值与 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 中的 ", _jsx(_components.code, {
            children: "soundId"
          }), " 相同。"]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "filepath-1",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你已通过调用 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 将音效预加载到内存中，请确保该参数的值与 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 中的 ", _jsx(_components.code, {
            children: "filePath"
          }), " 相同。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "音效文件路径。支持以下格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "以 content:// 开头的 URI 地址。"
      }), `
`, _jsx(_components.li, {
        children: "以 /assets/ 开头的路径。"
      }), `
`, _jsx(_components.li, {
        children: "URL。"
      }), `
`, _jsx(_components.li, {
        children: "本地文件的绝对路径（需精确到文件名和扩展名）。"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。"
    }), `
`, _jsx(_components.h4, {
      id: "loopcount-1",
      children: _jsx(_components.code, {
        children: "loopCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的循环播放次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "≥ 0：播放的次数。例如，1 表示循环播放一次，即总共播放两次。"
      }), `
`, _jsx(_components.li, {
        children: "-1：无限循环播放该音频文件。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "pitch-1",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0，表示原始音调。值越小，音调越低。"
    }), `
`, _jsx(_components.h4, {
      id: "pan-1",
      children: _jsx(_components.code, {
        children: "pan"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的空间位置。取值范围为 -1.0 到 1.0："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1.0：音效从用户左侧传来。"
      }), `
`, _jsx(_components.li, {
        children: "0.0：音效从用户正前方传来。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：音效从用户右侧传来。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gain-1",
      children: _jsx(_components.code, {
        children: "gain"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音量。取值范围为 0.0 到 100.0，默认值为 100.0，表示原始音量。值越小，音量越低。"
    }), `
`, _jsx(_components.h4, {
      id: "publish-1",
      children: _jsx(_components.code, {
        children: "publish"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否将音效发布给远端用户："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：将音效发布给远端用户，本地用户和远端用户都能听到音效。"
      }), `
`, _jsx(_components.li, {
        children: "false：不将音效发布给远端用户，只有本地用户能听到音效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect2__return_values"
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
      id: "api_irtcengine_playeffect3"
    }), `
`, _jsx(_components.h2, {
      id: "playeffect-22",
      children: "playEffect [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "播放指定的本地或在线音效文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect3__prototype"
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
              children: " playEffect"
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
              children: " soundId, String filePath, "
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
              children: " loopCount, "
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
              children: " pitch, "
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
              children: " pan, "
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
              children: " gain, "
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
              children: " publish, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect3__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法支持播放以 ", _jsx(_components.code, {
        children: "content://"
      }), " 开头的 URI 文件。关于支持的音频文件格式，参见 ", _jsx(_components.code, {
        children: "What formats of audio files does the Agora RTC SDK support"
      }), "。如果本地音频文件不存在、SDK 不支持该文件格式，或无法访问音频文件的 URL，SDK 会报告 ", _jsx(_components.code, {
        children: "AUDIO_MIXING_REASON_CAN_NOT_OPEN"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果需要播放在线音效文件，建议先将其缓存到本地设备，调用 preloadEffect 将文件预加载到内存中，再调用此方法播放。否则可能因加载超时或失败导致播放失败或无声。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffect 前已调用 preloadEffect，则 playEffect 执行后不会关闭文件资源。下次调用 playEffect 时将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果未调用 preloadEffect 就执行 playEffect，则播放结束后资源将被销毁。下次调用 playEffect 时将尝试重新打开文件并从头播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect3__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-1",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect3__related"
    }), `
`, _jsx(_components.h3, {
      id: "相关回调-1",
      children: "相关回调"
    }), `
`, _jsxs(_components.p, {
      children: ["音效文件播放完成后，SDK 会触发 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#callback_irtcengineeventhandler_onaudioeffectfinished",
        children: "onAudioEffectFinished"
      }), " 回调。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect3__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-6",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-4",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。每个音效文件的 ID 都是唯一的。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你已通过调用 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 将音效预加载到内存中，请确保该参数的值与 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 中的 ", _jsx(_components.code, {
            children: "soundId"
          }), " 相同。"]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "filepath-2",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["文件路径。支持以 ", _jsx(_components.code, {
        children: "content://"
      }), " 开头的 URI、以 ", _jsx(_components.code, {
        children: "/assets/"
      }), " 开头的路径、URL 以及本地文件的绝对路径。路径需精确到文件名及扩展名。支持的音频格式包括 MP3、AAC、M4A、MP4、WAV 和 3GP。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果你已通过调用 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 将音效预加载到内存中，请确保该参数的值与 ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " 中的 ", _jsx(_components.code, {
            children: "filePath"
          }), " 相同。"]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "loopcount-2",
      children: _jsx(_components.code, {
        children: "loopCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效循环播放的次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "≥ 0：播放的次数。例如，1 表示循环播放一次，即总共播放两次。"
      }), `
`, _jsx(_components.li, {
        children: "-1：无限循环播放该音频文件。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "pitch-2",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音调。取值范围为 0.5 到 2.0。默认值为 1.0，表示原始音调。值越小，音调越低。"
    }), `
`, _jsx(_components.h4, {
      id: "pan-2",
      children: _jsx(_components.code, {
        children: "pan"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的空间位置。取值范围为 -1.0 到 1.0："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1.0：音效从用户左侧播放。"
      }), `
`, _jsx(_components.li, {
        children: "0.0：音效从用户正前方播放。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：音效从用户右侧播放。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gain-2",
      children: _jsx(_components.code, {
        children: "gain"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音量。取值范围为 0.0 到 100.0。默认值为 100.0，表示原始音量。值越小，音量越低。"
    }), `
`, _jsx(_components.h4, {
      id: "publish-2",
      children: _jsx(_components.code, {
        children: "publish"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否将音效发布给远端用户："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：将音效发布给远端用户，本地用户和远端用户都能听到该音效。"
      }), `
`, _jsx(_components.li, {
        children: "false：不将音效发布给远端用户，只有本地用户能听到该音效。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "startpos",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效文件的播放起始位置（单位：毫秒）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_playeffect3__return_values"
    }), `
`, _jsx(_components.h3, {
      id: "返回值-8",
      children: "返回值"
    }), `
`, _jsx(_components.p, {
      children: "0：方法调用成功。 < 0：方法调用失败。"
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
      id: "api_irtcengineex_playeffectex"
    }), `
`, _jsx(_components.h2, {
      id: "playeffectex-12",
      children: "playEffectEx [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "在频道中播放指定的音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex__prototype"
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
              children: " playEffectEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection, "
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
              children: " soundId, String filePath, "
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
              children: " loopCount, "
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
              children: " pitch, "
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
              children: " pan, "
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
              children: " gain, "
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
              children: " publish, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex__detailed_desc"
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
      children: ["你可以调用该方法在频道中向所有用户播放指定的音效。每次调用该方法只能播放一个音效。若需同时播放多个音效，请多次调用该方法，并为每个音效设置不同的 ", _jsx(_components.code, {
        children: "soundId"
      }), " 和 ", _jsx(_components.code, {
        children: "filePath"
      }), " 参数。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "声网建议不要同时播放超过三个音效。"
      }), `
`, _jsx(_components.li, {
        children: "此方法中的音效 ID 和文件路径必须与 preloadEffectEx 方法中的一致。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-7",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "connection",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "soundid-5",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "filepath-3",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括 mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
    }), `
`, _jsx(_components.h4, {
      id: "loopcount-3",
      children: _jsx(_components.code, {
        children: "loopCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的循环播放次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1：无限循环，直到调用 stopEffect 或 stopAllEffects。"
      }), `
`, _jsx(_components.li, {
        children: "0：播放一次。"
      }), `
`, _jsx(_components.li, {
        children: "1：播放两次。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "pitch-3",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。"
    }), `
`, _jsx(_components.h4, {
      id: "pan-3",
      children: _jsx(_components.code, {
        children: "pan"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的空间位置。取值范围为 -1.0 到 1.0："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1.0：音效从用户左侧播放。"
      }), `
`, _jsx(_components.li, {
        children: "0.0：音效从用户正前方播放。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：音效从用户右侧播放。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gain-3",
      children: _jsx(_components.code, {
        children: "gain"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音量。取值范围为 0.0 到 100.0，默认值为 100（原始音量）。值越小，音量越低。"
    }), `
`, _jsx(_components.h4, {
      id: "publish-3",
      children: _jsx(_components.code, {
        children: "publish"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否在频道中发布该音效："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：在频道中发布音效。"
      }), `
`, _jsx(_components.li, {
        children: "false：不在频道中发布音效。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "startpos-1",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效文件的播放起始位置（单位为毫秒）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex2"
    }), `
`, _jsx(_components.h2, {
      id: "playeffectex-22",
      children: "playEffectEx [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "在频道中播放指定音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex2__prototype"
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
              children: " playEffectEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection, "
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
              children: " soundId, String filePath, "
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
              children: " loopCount, "
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
              children: " pitch, "
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
              children: " pan, "
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
              children: " gain, "
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
              children: " publish);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex2__detailed_desc"
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
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "preloadEffectEx"
      }), " 预加载音效后，可以使用该方法将指定音效播放给频道中的所有用户。你可以多次调用该方法，并传入不同的 ", _jsx(_components.code, {
        children: "soundId"
      }), " 和 ", _jsx(_components.code, {
        children: "filePath"
      }), "，以同时播放多个音效文件。每次调用该方法只能播放一个音效。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "声网建议不要同时播放超过三个音效。"
      }), `
`, _jsx(_components.li, {
        children: "本方法中的音效 ID 和文件路径必须与 preloadEffectEx 方法中保持一致。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-1",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-8",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "connection-1",
      children: _jsx(_components.code, {
        children: "connection"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "soundid-6",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "filepath-4",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
    }), `
`, _jsx(_components.h4, {
      id: "loopcount-4",
      children: _jsx(_components.code, {
        children: "loopCount"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的循环播放次数："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1：无限循环，直到调用 stopEffect 或 stopAllEffects。"
      }), `
`, _jsx(_components.li, {
        children: "0：播放一次。"
      }), `
`, _jsx(_components.li, {
        children: "1：播放两次。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "pitch-4",
      children: _jsx(_components.code, {
        children: "pitch"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音调。取值范围为 0.5 到 2.0，默认值为 1.0（原始音调）。值越小，音调越低。"
    }), `
`, _jsx(_components.h4, {
      id: "pan-4",
      children: _jsx(_components.code, {
        children: "pan"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的空间位置。取值范围为 -1.0 到 1.0："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "-1.0：音效从用户左侧播放。"
      }), `
`, _jsx(_components.li, {
        children: "0.0：音效从用户正前方播放。"
      }), `
`, _jsx(_components.li, {
        children: "1.0：音效从用户右侧播放。"
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "gain-4",
      children: _jsx(_components.code, {
        children: "gain"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的音量。取值范围为 0.0 到 100.0，默认值为 100（原始音量）。值越小，音量越低。"
    }), `
`, _jsx(_components.h4, {
      id: "publish-4",
      children: _jsx(_components.code, {
        children: "publish"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否在频道中发布音效："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：在频道中发布音效。"
      }), `
`, _jsx(_components.li, {
        children: "false：不在频道中发布音效。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_playeffectex2__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect"
    }), `
`, _jsx(_components.h2, {
      id: "preloadeffect-12",
      children: "preloadEffect [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "预加载指定的音效文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect__prototype"
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
              children: " preloadEffect"
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
              children: " soundId, String filePath, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect__detailed_desc"
    }), `
`, _jsx(_components.p, {
      children: "该方法每次调用时仅将一个指定的音效文件预加载到内存中。若需预加载多个音效文件，请多次调用该方法。"
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "为确保通信流畅，请限制音效文件的大小。"
      }), `
`, _jsx(_components.li, {
        children: "声网建议在加入频道前调用此方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffect 之前调用了 preloadEffect，则 playEffect 执行后不会关闭文件资源。下次调用 playEffect 时将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffect 之前未调用 preloadEffect，则 playEffect 执行后资源将被销毁。下次调用 playEffect 时将尝试重新打开文件并从头开始播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-9",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-7",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "filepath-5",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地音效文件的绝对路径或在线音效文件的 URL。"
    }), `
`, _jsx(_components.h4, {
      id: "startpos-2",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "在线音效文件的起始播放位置。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect__return_values"
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
      id: "api_irtcengine_preloadeffect2"
    }), `
`, _jsx(_components.h2, {
      id: "preloadeffect-22",
      children: "preloadEffect [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "将指定的音效文件预加载到内存中。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect2__prototype"
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
              children: " preloadEffect"
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
              children: " soundId, String filePath);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect2__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["确保所有预加载文件的总大小不超过限制。详见 ", _jsx(_components.code, {
        children: "声网 RTC SDK 支持哪些音频文件格式"
      }), "。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "如果在调用 playEffect 之前调用了 preloadEffect， playEffect 执行后不会关闭文件资源。下次调用 playEffect 时，将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffect 之前未调用 preloadEffect， playEffect 执行后会销毁资源。下次调用 playEffect 时，将尝试重新打开文件并从头开始播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect2__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-2",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "声网建议在加入频道前调用该方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-10",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-8",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。每个音效文件的 ID 必须唯一。"
    }), `
`, _jsx(_components.h4, {
      id: "filepath-6",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "文件路径。支持以下格式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "URL 地址。"
      }), `
`, _jsx(_components.li, {
        children: "绝对路径。"
      }), `
`, _jsx(_components.li, {
        children: "以 /assets/ 开头的文件路径。"
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["路径需精确到文件名和后缀名。如果使用绝对路径访问本地文件，可能会遇到权限问题，建议使用 URI 地址，例如： ", _jsx(_components.code, {
        children: "content://com.android.providers.media.documents/document/audio%3A14441"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_preloadeffect2__return_values"
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
      id: "api_irtcengineex_preloadeffectex"
    }), `
`, _jsx(_components.h2, {
      id: "preloadeffectex-12",
      children: "preloadEffectEx [1/2]"
    }), `
`, _jsx(_components.p, {
      children: "将指定音效预加载到频道中。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex__prototype"
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
              children: " preloadEffectEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection, "
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
              children: " soundId, String filePath, "
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
              children: " startPos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex__detailed_desc"
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
`, _jsxs(_components.p, {
      children: ["每次调用该方法时，只能将一个音效文件预加载到内存中。如果需要预加载多个音效文件，请多次调用该方法。预加载完成后，可以调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 播放预加载的音效，或调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects",
        children: "playAllEffects"
      }), " 播放所有预加载的音效。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "为确保使用体验流畅，音效文件的大小不应超过限制。"
      }), `
`, _jsx(_components.li, {
        children: "声网建议在加入频道前调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 前已调用 preloadEffectEx，则 playEffectEx 执行后不会关闭文件资源。下次调用 playEffectEx 时将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 前未调用 preloadEffectEx，则 playEffectEx 执行后会销毁文件资源。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-2",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex__parameters"
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
      children: ["连接信息，详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), "。"]
    }), `
`, _jsx(_components.h4, {
      id: "soundid-9",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "filepath-7",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
    }), `
`, _jsx(_components.h4, {
      id: "startpos-3",
      children: _jsx(_components.code, {
        children: "startPos"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效文件的播放起始位置（毫秒）。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex__return_values"
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
      id: "api_irtcengineex_preloadeffectex2"
    }), `
`, _jsx(_components.h2, {
      id: "preloadeffectex-22",
      children: "preloadEffectEx [2/2]"
    }), `
`, _jsx(_components.p, {
      children: "将指定音效预加载到频道中。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex2__prototype"
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
              children: " preloadEffectEx"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(RtcConnection connection, "
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
              children: " soundId, String filePath);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex2__detailed_desc"
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
`, _jsxs(_components.p, {
      children: ["每次调用该方法时只能将一个音效文件预加载到内存中。如果需要预加载多个音效文件，请多次调用该方法。预加载完成后，可以调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 播放预加载的音效，或调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_playalleffects",
        children: "playAllEffects"
      }), " 播放所有预加载的音效。"]
    }), `
`, _jsx(_components.p, {
      children: "注："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "为确保使用体验流畅，音效文件的大小不应超过限制。"
      }), `
`, _jsx(_components.li, {
        children: "声网建议在加入频道前调用该方法。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 之前调用了 preloadEffectEx，则在 playEffectEx 执行后文件资源不会被关闭。下次调用 playEffectEx 时将从头开始播放。"
      }), `
`, _jsx(_components.li, {
        children: "如果在调用 playEffectEx 之前未调用 preloadEffectEx，则在 playEffectEx 执行后资源将被销毁。下次调用 playEffectEx 时将尝试重新打开文件并从头开始播放。"
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex2__scenario"
    }), `
`, _jsx(_components.h3, {
      id: "适用场景-3",
      children: "适用场景"
    }), `
`, _jsx(_components.p, {
      children: "该方法适用于多频道场景。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex2__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-12",
      children: "参数"
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
`, _jsx(_components.h4, {
      id: "soundid-10",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "filepath-8",
      children: _jsx(_components.code, {
        children: "filePath"
      })
    }), `
`, _jsx(_components.p, {
      children: "本地文件的绝对路径或在线文件的 URL。支持的音频格式包括：mp3、mp4、m4a、aac、3gp、mkv 和 wav。"
    }), `
`, _jsx("a", {
      id: "api_irtcengineex_preloadeffectex2__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengineex",
          children: "RtcEngineEx"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumealleffects"
    }), `
`, _jsx(_components.h2, {
      id: "resumealleffects",
      children: "resumeAllEffects"
    }), `
`, _jsx(_components.p, {
      children: "恢复播放所有音效文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumealleffects__prototype"
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
              children: " resumeAllEffects"
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
      id: "api_irtcengine_resumealleffects__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects",
        children: "pauseAllEffects"
      }), " 暂停播放后，可以调用该方法恢复播放。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumealleffects__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-3",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["请在调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects",
        children: "pauseAllEffects"
      }), " 之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumealleffects__return_values"
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
      id: "api_irtcengine_resumeeffect"
    }), `
`, _jsx(_components.h2, {
      id: "resumeeffect",
      children: "resumeEffect"
    }), `
`, _jsx(_components.p, {
      children: "恢复播放指定音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeeffect__prototype"
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
              children: " resumeEffect"
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
              children: " soundId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeeffect__detailed_desc"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-13",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-11",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。每个音效文件的 ID 是唯一的。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_resumeeffect__return_values"
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
      id: "api_irtcengine_seteffectposition"
    }), `
`, _jsx(_components.h2, {
      id: "seteffectposition",
      children: "setEffectPosition"
    }), `
`, _jsx(_components.p, {
      children: "设置音效文件的播放位置。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectposition__prototype"
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
              children: " setEffectPosition"
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
              children: " soundId, "
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
              children: " pos);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectposition__detailed_desc"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["请在调用 ", _jsx(_components.code, {
            children: "playEffect"
          }), " 方法之后调用此方法。"]
        })
      })]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectposition__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-14",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-12",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效 ID。每个音效文件的 ID 是唯一的。"
    }), `
`, _jsx(_components.h4, {
      id: "pos",
      children: _jsx(_components.code, {
        children: "pos"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效文件的播放位置，单位为毫秒。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectposition__return_values"
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
      id: "api_irtcengine_seteffectsvolume"
    }), `
`, _jsx(_components.h2, {
      id: "seteffectsvolume",
      children: "setEffectsVolume"
    }), `
`, _jsx(_components.p, {
      children: "设置音效的播放音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectsvolume__prototype"
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
              children: " setEffectsVolume"
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
              children: "double"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " volume);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectsvolume__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需要在调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 方法之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectsvolume__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-4",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["该方法需要在调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 方法之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectsvolume__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-15",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "volume",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放音量，取值范围为 [0, 100]。（默认值为 100，表示原始音量。）"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_seteffectsvolume__return_values"
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
      id: "api_irtcengine_setvolumeofeffect"
    }), `
`, _jsx(_components.h2, {
      id: "setvolumeofeffect",
      children: "setVolumeOfEffect"
    }), `
`, _jsx(_components.p, {
      children: "设置指定音效文件的播放音量。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvolumeofeffect__prototype"
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
              children: " setVolumeOfEffect"
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
              children: " soundId, "
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
              children: " volume);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvolumeofeffect__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 方法之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvolumeofeffect__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-5",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 方法之后调用该方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvolumeofeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-16",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-13",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的 ID。每个音效文件具有唯一的 ID。"
    }), `
`, _jsx(_components.h4, {
      id: "volume-1",
      children: _jsx(_components.code, {
        children: "volume"
      })
    }), `
`, _jsx(_components.p, {
      children: "播放音量，取值范围为 [0, 100]。（默认值为 100）"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_setvolumeofeffect__return_values"
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
          href: "/zh-CN/api-reference/rtc/android/full-sdk-api-list#class_irtcengine",
          children: "RtcEngine"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopalleffects"
    }), `
`, _jsx(_components.h2, {
      id: "stopalleffects",
      children: "stopAllEffects"
    }), `
`, _jsx(_components.p, {
      children: "停止播放所有音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopalleffects__prototype"
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
              children: " stopAllEffects"
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
      id: "api_irtcengine_stopalleffects__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果你只需要暂停播放，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pausealleffects",
        children: "pauseAllEffects"
      }), " 方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopalleffects__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-6",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 方法之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopalleffects__return_values"
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
      id: "api_irtcengine_stopeffect"
    }), `
`, _jsx(_components.h2, {
      id: "stopeffect",
      children: "stopEffect"
    }), `
`, _jsx(_components.p, {
      children: "停止播放指定音效。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopeffect__prototype"
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
              children: " stopEffect"
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
              children: " soundId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopeffect__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["如果只需要暂停播放，请调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_pauseeffect",
        children: "pauseEffect"
      }), " 方法。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopeffect__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-7",
      children: "调用时机"
    }), `
`, _jsxs(_components.p, {
      children: ["在调用 ", _jsx(_components.code, {
        children: "playEffect"
      }), " 之后调用。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-17",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-14",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的 ID。每个音效都有唯一的 ID。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_stopeffect__return_values"
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
      id: "api_irtcengine_unloadeffect"
    }), `
`, _jsx(_components.h2, {
      id: "unloadeffect",
      children: "unloadEffect"
    }), `
`, _jsx(_components.p, {
      children: "释放指定的预加载音效文件。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unloadeffect__prototype"
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
              children: " unloadEffect"
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
              children: " soundId);"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unloadeffect__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["调用 ", _jsx(_components.code, {
        children: "preloadEffect"
      }), " 将音效文件加载到内存后，如需释放该音效文件，可调用 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/playback/audio-effect-file#api_irtcengine_unloadeffect",
        children: "unloadEffect"
      }), "。"]
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unloadeffect__timing"
    }), `
`, _jsx(_components.h3, {
      id: "调用时机-8",
      children: "调用时机"
    }), `
`, _jsx(_components.p, {
      children: "你可以在加入频道前或加入频道后调用此方法。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unloadeffect__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-18",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-15",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效的 ID。每个音效都有唯一的 ID。"
    }), `
`, _jsx("a", {
      id: "api_irtcengine_unloadeffect__return_values"
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
      id: "callback_irtcengineeventhandler_onaudioeffectfinished"
    }), `
`, _jsx(_components.h2, {
      id: "onaudioeffectfinished",
      children: "onAudioEffectFinished"
    }), `
`, _jsx(_components.p, {
      children: "本地音效文件播放完成时的回调。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioeffectfinished__prototype"
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
              children: " onAudioEffectFinished"
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
              children: " soundId) {}"
            })]
          })
        })
      })
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioeffectfinished__detailed_desc"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioeffectfinished__timing"
    }), `
`, _jsx(_components.h3, {
      id: "触发时机",
      children: "触发时机"
    }), `
`, _jsx(_components.p, {
      children: "该回调在本地音效文件播放完成时被触发。"
    }), `
`, _jsx("a", {
      id: "callback_irtcengineeventhandler_onaudioeffectfinished__parameters"
    }), `
`, _jsx(_components.h3, {
      id: "参数-19",
      children: "参数"
    }), `
`, _jsx(_components.h4, {
      id: "soundid-16",
      children: _jsx(_components.code, {
        children: "soundId"
      })
    }), `
`, _jsx(_components.p, {
      children: "音效文件的唯一 ID。"
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
