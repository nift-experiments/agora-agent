import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "ChannelMediaOptions",
  description: "配置频道中的媒体发布和订阅选项。"
};
export let _markdown = `

<a id="class_channelmediaoptions__prototype" />

\`\`\`java
public class ChannelMediaOptions {
  public Boolean publishCameraTrack;
  public Boolean publishSecondaryCameraTrack;
  public Boolean publishThirdCameraTrack;
  public Boolean publishFourthCameraTrack;
  public Boolean publishMicrophoneTrack;
  public Boolean publishScreenCaptureVideo;
  public Boolean publishScreenCaptureAudio;
  public Boolean publishCustomAudioTrack;
  public Integer publishCustomAudioTrackId;
  public Boolean publishCustomVideoTrack;
  public Boolean publishEncodedVideoTrack;
  public Boolean publishMediaPlayerAudioTrack;
  public Boolean publishMediaPlayerVideoTrack;
  public Boolean publishTranscodedVideoTrack;
  public Boolean publishMixedAudioTrack;
  public Boolean publishLipSyncTrack;
  public Boolean autoSubscribeAudio;
  public Boolean autoSubscribeVideo;
  public Boolean enableAudioRecordingOrPlayout;
  public Integer publishMediaPlayerId;
  public Integer clientRoleType;
  public Integer audienceLatencyLevel;
  public Integer defaultVideoStreamType;
  public Integer channelProfile;
  public Integer audioDelayMs;
  public Integer mediaPlayerAudioDelayMs;
  public String token;
  public Boolean enableBuiltInMediaEncryption;
  public Boolean publishRhythmPlayerTrack;
  public Boolean isInteractiveAudience;
  public Integer customVideoTrackId;
  public Boolean isAudioFilterable;
  public Boolean startPreview;
  public String parameters;
  public Boolean enableMultipath;
  public Integer uplinkMultipathMode;
  public Integer downlinkMultipathMode;
  public Integer preferMultipathType;
}
\`\`\`

<a id="class_channelmediaoptions__detailed_desc" />

支持在同一个 [RtcConnection](/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection) 中同时发布多个音频流和一个视频流。例如，可以同时启用 \`publishMicrophoneTrack\`、 \`publishCustomAudioTrack\` 和 \`publishMediaPlayerAudioTrack\`，但 \`publishCameraTrack\`、 \`publishScreenCaptureVideo\`、 \`publishCustomVideoTrack\` 和 \`publishEncodedVideoTrack\` 中只能有一个设置为 true。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    建议你根据业务场景自行设置各成员参数值，否则 SDK 会自动分配默认值。
  </CalloutDescription>
</CalloutContainer>

<a id="class_channelmediaoptions__parameters" />

## 属性 [#属性]

### \`publishCameraTrack\` [#publishcameratrack]

是否发布摄像头采集的视频：

* true：发布摄像头采集的视频。
* false：不发布摄像头采集的视频。

### \`publishSecondaryCameraTrack\` [#publishsecondarycameratrack]

是否发布第二路摄像头采集的视频轨道：

* true：发布第二路摄像头采集的视频轨道。
* false：（默认）不发布第二路摄像头采集的视频轨道。

### \`publishThirdCameraTrack\` [#publishthirdcameratrack]

是否发布第三路摄像头采集的视频：

* true：发布第三路摄像头采集的视频。
* false：不发布第三路摄像头采集的视频。

### \`publishFourthCameraTrack\` [#publishfourthcameratrack]

是否发布第四路摄像头采集的视频：

* true：发布第四路摄像头采集的视频。
* false：不发布第四路摄像头采集的视频。

### \`publishMicrophoneTrack\` [#publishmicrophonetrack]

是否发布麦克风采集的音频：

* true：发布麦克风采集的音频。
* false：不发布麦克风采集的音频。

### \`publishScreenCaptureVideo\` [#publishscreencapturevideo]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    从 v4.0.0 起，参数由 \`publishScreenTrack\` 重命名为 \`publishScreenCaptureVideo\`。
  </CalloutDescription>
</CalloutContainer>

是否发布屏幕采集的视频：

* true：发布屏幕采集的视频。
* false：不发布屏幕采集的视频。

### \`publishScreenCaptureAudio\` [#publishscreencaptureaudio]

是否发布屏幕采集的音频：

* true：发布屏幕采集的音频。
* false：不发布屏幕采集的音频。

### \`publishCustomAudioTrack\` [#publishcustomaudiotrack]

是否发布自定义音频源采集的音频：

* true：发布自定义音频源采集的音频。
* false：不发布自定义音频源采集的音频。

### \`publishCustomAudioTrackId\` [#publishcustomaudiotrackid]

要发布的自定义音频轨道的 ID。可通过 [createCustomAudioTrack](/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack) 方法获取该 ID。

### \`publishCustomVideoTrack\` [#publishcustomvideotrack]

是否发布自定义视频源采集的视频：

* true：发布自定义视频源采集的视频。
* false：不发布自定义视频源采集的视频。

### \`publishEncodedVideoTrack\` [#publishencodedvideotrack]

是否发布编码后的视频：

* true：发布编码后的视频。
* false：不发布编码后的视频。

### \`publishMediaPlayerAudioTrack\` [#publishmediaplayeraudiotrack]

是否发布媒体播放器的音频：

* true：发布媒体播放器的音频。
* false：不发布媒体播放器的音频。

### \`publishMediaPlayerVideoTrack\` [#publishmediaplayervideotrack]

是否发布媒体播放器的视频：

* true：发布媒体播放器的视频。
* false：不发布媒体播放器的视频。

### \`publishTranscodedVideoTrack\` [#publishtranscodedvideotrack]

是否发布本地转码后的视频轨道：

* true：发布本地转码后的视频轨道。
* false：（默认）不发布本地转码后的视频轨道。

### \`publishMixedAudioTrack\` [#publishmixedaudiotrack]

是否发布音频合流轨道：

* true：发布音频合流轨道。
* false：不发布音频合流轨道。

### \`publishLipSyncTrack\` [#publishlipsynctrack]

是否发布由语音驱动扩展处理后的视频轨道：

* true：发布由语音驱动扩展处理后的视频轨道。
* false：（默认）不发布由语音驱动扩展处理后的视频轨道。

### \`autoSubscribeAudio\` [#autosubscribeaudio]

用户加入频道时是否自动订阅所有远端音频流：

* true：订阅所有远端音频流。
* false：不自动订阅任何远端音频流。

### \`autoSubscribeVideo\` [#autosubscribevideo]

用户加入频道时是否自动订阅所有远端视频流：

* true：订阅所有远端视频流。
* false：不自动订阅任何远端视频流。

### \`enableAudioRecordingOrPlayout\` [#enableaudiorecordingorplayout]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果需要发布麦克风采集的音频流，请确保该参数设置为 \`true\`。
  </CalloutDescription>
</CalloutContainer>

是否开启音频采集或播放功能：

* true：开启音频采集或播放功能。
* false：不开启音频采集或播放功能。

### \`publishMediaPlayerId\` [#publishmediaplayerid]

要发布的媒体播放器的 ID。默认值为 0。

### \`clientRoleType\` [#clientroletype]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如果将用户角色设置为观众，则无法在频道中发布音视频流。若你希望在直播过程中发布媒体流，请确保将用户角色设置为主播。
  </CalloutDescription>
</CalloutContainer>

用户角色类型：

* CLIENT\\_ROLE\\_BROADCASTER (1)：主播。
* CLIENT\\_ROLE\\_AUDIENCE (2)：观众。

### \`audienceLatencyLevel\` [#audiencelatencylevel]

互动直播场景下观众的延迟等级：

* AUDIENCE\\_LATENCY\\_LEVEL\\_LOW\\_LATENCY (1)：低延迟。
* AUDIENCE\\_LATENCY\\_LEVEL\\_ULTRA\\_LOW\\_LATENCY (2)：超低延迟（默认）。

### \`defaultVideoStreamType\` [#defaultvideostreamtype]

默认的视频流类型：

* VIDEO\\_STREAM\\_HIGH (0)：视频大流，即高分辨率高码率的视频流。
* VIDEO\\_STREAM\\_LOW (1)：视频小流，即低分辨率低码率的视频流。

### \`channelProfile\` [#channelprofile]

频道场景：

* CHANNEL\\_PROFILE\\_COMMUNICATION (0)：通信场景。声网推荐使用直播场景以获得更佳的音视频体验。
* CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING (1)：直播场景（默认）。
* CHANNEL\\_PROFILE\\_GAME (2)：游戏场景。
* CHANNEL\\_PROFILE\\_CLOUD\\_GAMING (3)：互动场景。该场景对延迟进行了优化，适用于用户之间需要频繁互动的场景。

### \`audioDelayMs\` [#audiodelayms]

发送音频帧的延迟（单位：毫秒）。你可以使用该参数设置发送音频帧的延迟，以实现音视频同步。如需关闭延迟，设置该值为 0。

### \`mediaPlayerAudioDelayMs\` [#mediaplayeraudiodelayms]

发送媒体播放器音频帧的延迟（单位：毫秒），用于显式控制音视频同步。如需关闭延迟，设置该值为 0。

### \`token\` [#token]

（可选）由你的服务器生成的用于鉴权的 Token。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅在调用 updateChannelMediaOptions 或 updateChannelMediaOptionsEx 时生效。请确保用于生成 token 的 App ID、频道名和用户名称与调用 create 初始化 RTC 引擎，以及调用 joinChannel 和 joinChannelEx 加入频道时使用的值一致。
  </CalloutDescription>
</CalloutContainer>

### \`enableBuiltInMediaEncryption\` [#enablebuiltinmediaencryption]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    调用 updateChannelMediaOptions 方法时将忽略此设置。
  </CalloutDescription>
</CalloutContainer>

是否启用媒体包加密：

* true：启用媒体包加密。
* false：（默认）不启用媒体包加密。

### \`publishRhythmPlayerTrack\` [#publishrhythmplayertrack]

是否向远端用户发布节拍器的声音：

* true：发布处理后的音频帧，本地用户和远端用户都能听到节拍器。
* false：不发布节拍器的声音，只有本地用户能听到节拍器。

### \`isInteractiveAudience\` [#isinteractiveaudience]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    该参数仅适用于主播互通场景。联播主播需调用 joinChannelEx 方法以观众身份加入其他主播频道，并将 isInteractiveAudience 设置为 \`true\`。 该参数仅在用户角色为 CLIENT\\_ROLE\\_AUDIENCE 时生效。
  </CalloutDescription>
</CalloutContainer>

是否开启互动模式：

* true：开启互动模式。
* false：不开启互动模式。

### \`customVideoTrackId\` [#customvideotrackid]

通过调用 createCustomVideoTrack 方法返回的视频轨道 ID。默认值为 0。

### \`isAudioFilterable\` [#isaudiofilterable]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    如需启用该功能，请[联系技术支持](https://ticket.shengwang.cn/)
  </CalloutDescription>
</CalloutContainer>

发布的音频流是否根据音量算法进行过滤：

* true：音频流会被过滤。
* false：音频流不会被过滤。

### \`startPreview\` [#startpreview]

在已设置画布时，加入频道时是否启动预览：

* true：（默认）加入频道时启动预览。
* false：不启动预览。

### \`enableMultipath\` [#enablemultipath]

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    权限与系统要求：Android 7.0 或更高版本（API 等级 24 或更高），需要 \`ACCESS_NETWORK_STATE\` 和 \`CHANGE_NETWORK_STATE\` 权限。
  </CalloutDescription>
</CalloutContainer>

是否启用多传输路径：

* true：启用多传输路径。
* false：禁用多传输路径。

### \`preferMultipathType\` [#prefermultipathtype]

首选的传输路径类型。详见 [MultipathType](/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-multipathtype)。

<CalloutContainer type="info">
  <CalloutTitle>
    注
  </CalloutTitle>

  <CalloutDescription>
    使用该参数时，需确保 \`enableMultipath\` 设置为 true。
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "支持在同一个 RtcConnection 中同时发布多个音频流和一个视频流。例如，可以同时启用 `publishMicrophoneTrack`、 `publishCustomAudioTrack` 和 `publishMediaPlayerAudioTrack`，但 `publishCameraTrack`、 `publishScreenCaptureVideo`、 `publishCustomVideoTrack` 和 `publishEncodedVideoTrack` 中只能有一个设置为 true。"
  }, {
    heading: undefined,
    content: "建议你根据业务场景自行设置各成员参数值，否则 SDK 会自动分配默认值。"
  }, {
    heading: "publishcameratrack",
    content: "是否发布摄像头采集的视频："
  }, {
    heading: "publishcameratrack",
    content: "true：发布摄像头采集的视频。"
  }, {
    heading: "publishcameratrack",
    content: "false：不发布摄像头采集的视频。"
  }, {
    heading: "publishsecondarycameratrack",
    content: "是否发布第二路摄像头采集的视频轨道："
  }, {
    heading: "publishsecondarycameratrack",
    content: "true：发布第二路摄像头采集的视频轨道。"
  }, {
    heading: "publishsecondarycameratrack",
    content: "false：（默认）不发布第二路摄像头采集的视频轨道。"
  }, {
    heading: "publishthirdcameratrack",
    content: "是否发布第三路摄像头采集的视频："
  }, {
    heading: "publishthirdcameratrack",
    content: "true：发布第三路摄像头采集的视频。"
  }, {
    heading: "publishthirdcameratrack",
    content: "false：不发布第三路摄像头采集的视频。"
  }, {
    heading: "publishfourthcameratrack",
    content: "是否发布第四路摄像头采集的视频："
  }, {
    heading: "publishfourthcameratrack",
    content: "true：发布第四路摄像头采集的视频。"
  }, {
    heading: "publishfourthcameratrack",
    content: "false：不发布第四路摄像头采集的视频。"
  }, {
    heading: "publishmicrophonetrack",
    content: "是否发布麦克风采集的音频："
  }, {
    heading: "publishmicrophonetrack",
    content: "true：发布麦克风采集的音频。"
  }, {
    heading: "publishmicrophonetrack",
    content: "false：不发布麦克风采集的音频。"
  }, {
    heading: "publishscreencapturevideo",
    content: "从 v4.0.0 起，参数由 `publishScreenTrack` 重命名为 `publishScreenCaptureVideo`。"
  }, {
    heading: "publishscreencapturevideo",
    content: "是否发布屏幕采集的视频："
  }, {
    heading: "publishscreencapturevideo",
    content: "true：发布屏幕采集的视频。"
  }, {
    heading: "publishscreencapturevideo",
    content: "false：不发布屏幕采集的视频。"
  }, {
    heading: "publishscreencaptureaudio",
    content: "是否发布屏幕采集的音频："
  }, {
    heading: "publishscreencaptureaudio",
    content: "true：发布屏幕采集的音频。"
  }, {
    heading: "publishscreencaptureaudio",
    content: "false：不发布屏幕采集的音频。"
  }, {
    heading: "publishcustomaudiotrack",
    content: "是否发布自定义音频源采集的音频："
  }, {
    heading: "publishcustomaudiotrack",
    content: "true：发布自定义音频源采集的音频。"
  }, {
    heading: "publishcustomaudiotrack",
    content: "false：不发布自定义音频源采集的音频。"
  }, {
    heading: "publishcustomaudiotrackid",
    content: "要发布的自定义音频轨道的 ID。可通过 createCustomAudioTrack 方法获取该 ID。"
  }, {
    heading: "publishcustomvideotrack",
    content: "是否发布自定义视频源采集的视频："
  }, {
    heading: "publishcustomvideotrack",
    content: "true：发布自定义视频源采集的视频。"
  }, {
    heading: "publishcustomvideotrack",
    content: "false：不发布自定义视频源采集的视频。"
  }, {
    heading: "publishencodedvideotrack",
    content: "是否发布编码后的视频："
  }, {
    heading: "publishencodedvideotrack",
    content: "true：发布编码后的视频。"
  }, {
    heading: "publishencodedvideotrack",
    content: "false：不发布编码后的视频。"
  }, {
    heading: "publishmediaplayeraudiotrack",
    content: "是否发布媒体播放器的音频："
  }, {
    heading: "publishmediaplayeraudiotrack",
    content: "true：发布媒体播放器的音频。"
  }, {
    heading: "publishmediaplayeraudiotrack",
    content: "false：不发布媒体播放器的音频。"
  }, {
    heading: "publishmediaplayervideotrack",
    content: "是否发布媒体播放器的视频："
  }, {
    heading: "publishmediaplayervideotrack",
    content: "true：发布媒体播放器的视频。"
  }, {
    heading: "publishmediaplayervideotrack",
    content: "false：不发布媒体播放器的视频。"
  }, {
    heading: "publishtranscodedvideotrack",
    content: "是否发布本地转码后的视频轨道："
  }, {
    heading: "publishtranscodedvideotrack",
    content: "true：发布本地转码后的视频轨道。"
  }, {
    heading: "publishtranscodedvideotrack",
    content: "false：（默认）不发布本地转码后的视频轨道。"
  }, {
    heading: "publishmixedaudiotrack",
    content: "是否发布音频合流轨道："
  }, {
    heading: "publishmixedaudiotrack",
    content: "true：发布音频合流轨道。"
  }, {
    heading: "publishmixedaudiotrack",
    content: "false：不发布音频合流轨道。"
  }, {
    heading: "publishlipsynctrack",
    content: "是否发布由语音驱动扩展处理后的视频轨道："
  }, {
    heading: "publishlipsynctrack",
    content: "true：发布由语音驱动扩展处理后的视频轨道。"
  }, {
    heading: "publishlipsynctrack",
    content: "false：（默认）不发布由语音驱动扩展处理后的视频轨道。"
  }, {
    heading: "autosubscribeaudio",
    content: "用户加入频道时是否自动订阅所有远端音频流："
  }, {
    heading: "autosubscribeaudio",
    content: "true：订阅所有远端音频流。"
  }, {
    heading: "autosubscribeaudio",
    content: "false：不自动订阅任何远端音频流。"
  }, {
    heading: "autosubscribevideo",
    content: "用户加入频道时是否自动订阅所有远端视频流："
  }, {
    heading: "autosubscribevideo",
    content: "true：订阅所有远端视频流。"
  }, {
    heading: "autosubscribevideo",
    content: "false：不自动订阅任何远端视频流。"
  }, {
    heading: "enableaudiorecordingorplayout",
    content: "如果需要发布麦克风采集的音频流，请确保该参数设置为 `true`。"
  }, {
    heading: "enableaudiorecordingorplayout",
    content: "是否开启音频采集或播放功能："
  }, {
    heading: "enableaudiorecordingorplayout",
    content: "true：开启音频采集或播放功能。"
  }, {
    heading: "enableaudiorecordingorplayout",
    content: "false：不开启音频采集或播放功能。"
  }, {
    heading: "publishmediaplayerid",
    content: "要发布的媒体播放器的 ID。默认值为 0。"
  }, {
    heading: "clientroletype",
    content: "如果将用户角色设置为观众，则无法在频道中发布音视频流。若你希望在直播过程中发布媒体流，请确保将用户角色设置为主播。"
  }, {
    heading: "clientroletype",
    content: "用户角色类型："
  }, {
    heading: "clientroletype",
    content: "CLIENT\\_ROLE\\_BROADCASTER (1)：主播。"
  }, {
    heading: "clientroletype",
    content: "CLIENT\\_ROLE\\_AUDIENCE (2)：观众。"
  }, {
    heading: "audiencelatencylevel",
    content: "互动直播场景下观众的延迟等级："
  }, {
    heading: "audiencelatencylevel",
    content: "AUDIENCE\\_LATENCY\\_LEVEL\\_LOW\\_LATENCY (1)：低延迟。"
  }, {
    heading: "audiencelatencylevel",
    content: "AUDIENCE\\_LATENCY\\_LEVEL\\_ULTRA\\_LOW\\_LATENCY (2)：超低延迟（默认）。"
  }, {
    heading: "defaultvideostreamtype",
    content: "默认的视频流类型："
  }, {
    heading: "defaultvideostreamtype",
    content: "VIDEO\\_STREAM\\_HIGH (0)：视频大流，即高分辨率高码率的视频流。"
  }, {
    heading: "defaultvideostreamtype",
    content: "VIDEO\\_STREAM\\_LOW (1)：视频小流，即低分辨率低码率的视频流。"
  }, {
    heading: "channelprofile",
    content: "频道场景："
  }, {
    heading: "channelprofile",
    content: "CHANNEL\\_PROFILE\\_COMMUNICATION (0)：通信场景。声网推荐使用直播场景以获得更佳的音视频体验。"
  }, {
    heading: "channelprofile",
    content: "CHANNEL\\_PROFILE\\_LIVE\\_BROADCASTING (1)：直播场景（默认）。"
  }, {
    heading: "channelprofile",
    content: "CHANNEL\\_PROFILE\\_GAME (2)：游戏场景。"
  }, {
    heading: "channelprofile",
    content: "CHANNEL\\_PROFILE\\_CLOUD\\_GAMING (3)：互动场景。该场景对延迟进行了优化，适用于用户之间需要频繁互动的场景。"
  }, {
    heading: "audiodelayms",
    content: "发送音频帧的延迟（单位：毫秒）。你可以使用该参数设置发送音频帧的延迟，以实现音视频同步。如需关闭延迟，设置该值为 0。"
  }, {
    heading: "mediaplayeraudiodelayms",
    content: "发送媒体播放器音频帧的延迟（单位：毫秒），用于显式控制音视频同步。如需关闭延迟，设置该值为 0。"
  }, {
    heading: "token",
    content: "（可选）由你的服务器生成的用于鉴权的 Token。"
  }, {
    heading: "token",
    content: "该参数仅在调用 updateChannelMediaOptions 或 updateChannelMediaOptionsEx 时生效。请确保用于生成 token 的 App ID、频道名和用户名称与调用 create 初始化 RTC 引擎，以及调用 joinChannel 和 joinChannelEx 加入频道时使用的值一致。"
  }, {
    heading: "enablebuiltinmediaencryption",
    content: "调用 updateChannelMediaOptions 方法时将忽略此设置。"
  }, {
    heading: "enablebuiltinmediaencryption",
    content: "是否启用媒体包加密："
  }, {
    heading: "enablebuiltinmediaencryption",
    content: "true：启用媒体包加密。"
  }, {
    heading: "enablebuiltinmediaencryption",
    content: "false：（默认）不启用媒体包加密。"
  }, {
    heading: "publishrhythmplayertrack",
    content: "是否向远端用户发布节拍器的声音："
  }, {
    heading: "publishrhythmplayertrack",
    content: "true：发布处理后的音频帧，本地用户和远端用户都能听到节拍器。"
  }, {
    heading: "publishrhythmplayertrack",
    content: "false：不发布节拍器的声音，只有本地用户能听到节拍器。"
  }, {
    heading: "isinteractiveaudience",
    content: "该参数仅适用于主播互通场景。联播主播需调用 joinChannelEx 方法以观众身份加入其他主播频道，并将 isInteractiveAudience 设置为 `true`。 该参数仅在用户角色为 CLIENT\\_ROLE\\_AUDIENCE 时生效。"
  }, {
    heading: "isinteractiveaudience",
    content: "是否开启互动模式："
  }, {
    heading: "isinteractiveaudience",
    content: "true：开启互动模式。"
  }, {
    heading: "isinteractiveaudience",
    content: "false：不开启互动模式。"
  }, {
    heading: "customvideotrackid",
    content: "通过调用 createCustomVideoTrack 方法返回的视频轨道 ID。默认值为 0。"
  }, {
    heading: "isaudiofilterable",
    content: "如需启用该功能，请联系技术支持"
  }, {
    heading: "isaudiofilterable",
    content: "发布的音频流是否根据音量算法进行过滤："
  }, {
    heading: "isaudiofilterable",
    content: "true：音频流会被过滤。"
  }, {
    heading: "isaudiofilterable",
    content: "false：音频流不会被过滤。"
  }, {
    heading: "startpreview",
    content: "在已设置画布时，加入频道时是否启动预览："
  }, {
    heading: "startpreview",
    content: "true：（默认）加入频道时启动预览。"
  }, {
    heading: "startpreview",
    content: "false：不启动预览。"
  }, {
    heading: "enablemultipath",
    content: "权限与系统要求：Android 7.0 或更高版本（API 等级 24 或更高），需要 `ACCESS_NETWORK_STATE` 和 `CHANGE_NETWORK_STATE` 权限。"
  }, {
    heading: "enablemultipath",
    content: "是否启用多传输路径："
  }, {
    heading: "enablemultipath",
    content: "true：启用多传输路径。"
  }, {
    heading: "enablemultipath",
    content: "false：禁用多传输路径。"
  }, {
    heading: "prefermultipathtype",
    content: "首选的传输路径类型。详见 MultipathType。"
  }, {
    heading: "prefermultipathtype",
    content: "使用该参数时，需确保 `enableMultipath` 设置为 true。"
  }],
  headings: [{
    id: "属性",
    content: "属性"
  }, {
    id: "publishcameratrack",
    content: "`publishCameraTrack`"
  }, {
    id: "publishsecondarycameratrack",
    content: "`publishSecondaryCameraTrack`"
  }, {
    id: "publishthirdcameratrack",
    content: "`publishThirdCameraTrack`"
  }, {
    id: "publishfourthcameratrack",
    content: "`publishFourthCameraTrack`"
  }, {
    id: "publishmicrophonetrack",
    content: "`publishMicrophoneTrack`"
  }, {
    id: "publishscreencapturevideo",
    content: "`publishScreenCaptureVideo`"
  }, {
    id: "publishscreencaptureaudio",
    content: "`publishScreenCaptureAudio`"
  }, {
    id: "publishcustomaudiotrack",
    content: "`publishCustomAudioTrack`"
  }, {
    id: "publishcustomaudiotrackid",
    content: "`publishCustomAudioTrackId`"
  }, {
    id: "publishcustomvideotrack",
    content: "`publishCustomVideoTrack`"
  }, {
    id: "publishencodedvideotrack",
    content: "`publishEncodedVideoTrack`"
  }, {
    id: "publishmediaplayeraudiotrack",
    content: "`publishMediaPlayerAudioTrack`"
  }, {
    id: "publishmediaplayervideotrack",
    content: "`publishMediaPlayerVideoTrack`"
  }, {
    id: "publishtranscodedvideotrack",
    content: "`publishTranscodedVideoTrack`"
  }, {
    id: "publishmixedaudiotrack",
    content: "`publishMixedAudioTrack`"
  }, {
    id: "publishlipsynctrack",
    content: "`publishLipSyncTrack`"
  }, {
    id: "autosubscribeaudio",
    content: "`autoSubscribeAudio`"
  }, {
    id: "autosubscribevideo",
    content: "`autoSubscribeVideo`"
  }, {
    id: "enableaudiorecordingorplayout",
    content: "`enableAudioRecordingOrPlayout`"
  }, {
    id: "publishmediaplayerid",
    content: "`publishMediaPlayerId`"
  }, {
    id: "clientroletype",
    content: "`clientRoleType`"
  }, {
    id: "audiencelatencylevel",
    content: "`audienceLatencyLevel`"
  }, {
    id: "defaultvideostreamtype",
    content: "`defaultVideoStreamType`"
  }, {
    id: "channelprofile",
    content: "`channelProfile`"
  }, {
    id: "audiodelayms",
    content: "`audioDelayMs`"
  }, {
    id: "mediaplayeraudiodelayms",
    content: "`mediaPlayerAudioDelayMs`"
  }, {
    id: "token",
    content: "`token`"
  }, {
    id: "enablebuiltinmediaencryption",
    content: "`enableBuiltInMediaEncryption`"
  }, {
    id: "publishrhythmplayertrack",
    content: "`publishRhythmPlayerTrack`"
  }, {
    id: "isinteractiveaudience",
    content: "`isInteractiveAudience`"
  }, {
    id: "customvideotrackid",
    content: "`customVideoTrackId`"
  }, {
    id: "isaudiofilterable",
    content: "`isAudioFilterable`"
  }, {
    id: "startpreview",
    content: "`startPreview`"
  }, {
    id: "enablemultipath",
    content: "`enableMultipath`"
  }, {
    id: "prefermultipathtype",
    content: "`preferMultipathType`"
  }]
};
export let toc = [{
  depth: 2,
  url: "#属性",
  title: _jsx(_Fragment, {
    children: "属性"
  })
}, {
  depth: 3,
  url: "#publishcameratrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishCameraTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishsecondarycameratrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishSecondaryCameraTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishthirdcameratrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishThirdCameraTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishfourthcameratrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishFourthCameraTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishmicrophonetrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishMicrophoneTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishscreencapturevideo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishScreenCaptureVideo"
    })
  })
}, {
  depth: 3,
  url: "#publishscreencaptureaudio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishScreenCaptureAudio"
    })
  })
}, {
  depth: 3,
  url: "#publishcustomaudiotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishCustomAudioTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishcustomaudiotrackid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishCustomAudioTrackId"
    })
  })
}, {
  depth: 3,
  url: "#publishcustomvideotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishCustomVideoTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishencodedvideotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishEncodedVideoTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishmediaplayeraudiotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishMediaPlayerAudioTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishmediaplayervideotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishMediaPlayerVideoTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishtranscodedvideotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishTranscodedVideoTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishmixedaudiotrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishMixedAudioTrack"
    })
  })
}, {
  depth: 3,
  url: "#publishlipsynctrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishLipSyncTrack"
    })
  })
}, {
  depth: 3,
  url: "#autosubscribeaudio",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "autoSubscribeAudio"
    })
  })
}, {
  depth: 3,
  url: "#autosubscribevideo",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "autoSubscribeVideo"
    })
  })
}, {
  depth: 3,
  url: "#enableaudiorecordingorplayout",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableAudioRecordingOrPlayout"
    })
  })
}, {
  depth: 3,
  url: "#publishmediaplayerid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishMediaPlayerId"
    })
  })
}, {
  depth: 3,
  url: "#clientroletype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "clientRoleType"
    })
  })
}, {
  depth: 3,
  url: "#audiencelatencylevel",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audienceLatencyLevel"
    })
  })
}, {
  depth: 3,
  url: "#defaultvideostreamtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "defaultVideoStreamType"
    })
  })
}, {
  depth: 3,
  url: "#channelprofile",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "channelProfile"
    })
  })
}, {
  depth: 3,
  url: "#audiodelayms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "audioDelayMs"
    })
  })
}, {
  depth: 3,
  url: "#mediaplayeraudiodelayms",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "mediaPlayerAudioDelayMs"
    })
  })
}, {
  depth: 3,
  url: "#token",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "token"
    })
  })
}, {
  depth: 3,
  url: "#enablebuiltinmediaencryption",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableBuiltInMediaEncryption"
    })
  })
}, {
  depth: 3,
  url: "#publishrhythmplayertrack",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "publishRhythmPlayerTrack"
    })
  })
}, {
  depth: 3,
  url: "#isinteractiveaudience",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "isInteractiveAudience"
    })
  })
}, {
  depth: 3,
  url: "#customvideotrackid",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "customVideoTrackId"
    })
  })
}, {
  depth: 3,
  url: "#isaudiofilterable",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "isAudioFilterable"
    })
  })
}, {
  depth: 3,
  url: "#startpreview",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "startPreview"
    })
  })
}, {
  depth: 3,
  url: "#enablemultipath",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "enableMultipath"
    })
  })
}, {
  depth: 3,
  url: "#prefermultipathtype",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "preferMultipathType"
    })
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
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
      id: "class_channelmediaoptions__prototype"
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
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " class"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " ChannelMediaOptions"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishCameraTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishSecondaryCameraTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishThirdCameraTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishFourthCameraTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishMicrophoneTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishScreenCaptureVideo;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishScreenCaptureAudio;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishCustomAudioTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer publishCustomAudioTrackId;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishCustomVideoTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishEncodedVideoTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishMediaPlayerAudioTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishMediaPlayerVideoTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishTranscodedVideoTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishMixedAudioTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishLipSyncTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean autoSubscribeAudio;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean autoSubscribeVideo;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean enableAudioRecordingOrPlayout;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer publishMediaPlayerId;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer clientRoleType;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer audienceLatencyLevel;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer defaultVideoStreamType;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer channelProfile;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer audioDelayMs;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer mediaPlayerAudioDelayMs;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String token;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean enableBuiltInMediaEncryption;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean publishRhythmPlayerTrack;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean isInteractiveAudience;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer customVideoTrackId;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean isAudioFilterable;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean startPreview;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " String parameters;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Boolean enableMultipath;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer uplinkMultipathMode;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer downlinkMultipathMode;"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "  public"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " Integer preferMultipathType;"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx("a", {
      id: "class_channelmediaoptions__detailed_desc"
    }), `
`, _jsxs(_components.p, {
      children: ["支持在同一个 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/classes/class-rtcconnection",
        children: "RtcConnection"
      }), " 中同时发布多个音频流和一个视频流。例如，可以同时启用 ", _jsx(_components.code, {
        children: "publishMicrophoneTrack"
      }), "、 ", _jsx(_components.code, {
        children: "publishCustomAudioTrack"
      }), " 和 ", _jsx(_components.code, {
        children: "publishMediaPlayerAudioTrack"
      }), "，但 ", _jsx(_components.code, {
        children: "publishCameraTrack"
      }), "、 ", _jsx(_components.code, {
        children: "publishScreenCaptureVideo"
      }), "、 ", _jsx(_components.code, {
        children: "publishCustomVideoTrack"
      }), " 和 ", _jsx(_components.code, {
        children: "publishEncodedVideoTrack"
      }), " 中只能有一个设置为 true。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "建议你根据业务场景自行设置各成员参数值，否则 SDK 会自动分配默认值。"
        })
      })]
    }), `
`, _jsx("a", {
      id: "class_channelmediaoptions__parameters"
    }), `
`, _jsx(_components.h2, {
      id: "属性",
      children: "属性"
    }), `
`, _jsx(_components.h3, {
      id: "publishcameratrack",
      children: _jsx(_components.code, {
        children: "publishCameraTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布摄像头采集的视频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布摄像头采集的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布摄像头采集的视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishsecondarycameratrack",
      children: _jsx(_components.code, {
        children: "publishSecondaryCameraTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布第二路摄像头采集的视频轨道："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布第二路摄像头采集的视频轨道。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不发布第二路摄像头采集的视频轨道。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishthirdcameratrack",
      children: _jsx(_components.code, {
        children: "publishThirdCameraTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布第三路摄像头采集的视频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布第三路摄像头采集的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布第三路摄像头采集的视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishfourthcameratrack",
      children: _jsx(_components.code, {
        children: "publishFourthCameraTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布第四路摄像头采集的视频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布第四路摄像头采集的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布第四路摄像头采集的视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishmicrophonetrack",
      children: _jsx(_components.code, {
        children: "publishMicrophoneTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布麦克风采集的音频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布麦克风采集的音频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布麦克风采集的音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishscreencapturevideo",
      children: _jsx(_components.code, {
        children: "publishScreenCaptureVideo"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["从 v4.0.0 起，参数由 ", _jsx(_components.code, {
            children: "publishScreenTrack"
          }), " 重命名为 ", _jsx(_components.code, {
            children: "publishScreenCaptureVideo"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否发布屏幕采集的视频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布屏幕采集的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布屏幕采集的视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishscreencaptureaudio",
      children: _jsx(_components.code, {
        children: "publishScreenCaptureAudio"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布屏幕采集的音频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布屏幕采集的音频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布屏幕采集的音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishcustomaudiotrack",
      children: _jsx(_components.code, {
        children: "publishCustomAudioTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布自定义音频源采集的音频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布自定义音频源采集的音频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布自定义音频源采集的音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishcustomaudiotrackid",
      children: _jsx(_components.code, {
        children: "publishCustomAudioTrackId"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["要发布的自定义音频轨道的 ID。可通过 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/audio/audio-custom-capturenrendering#api_irtcengine_createcustomaudiotrack",
        children: "createCustomAudioTrack"
      }), " 方法获取该 ID。"]
    }), `
`, _jsx(_components.h3, {
      id: "publishcustomvideotrack",
      children: _jsx(_components.code, {
        children: "publishCustomVideoTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布自定义视频源采集的视频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布自定义视频源采集的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布自定义视频源采集的视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishencodedvideotrack",
      children: _jsx(_components.code, {
        children: "publishEncodedVideoTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布编码后的视频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布编码后的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布编码后的视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishmediaplayeraudiotrack",
      children: _jsx(_components.code, {
        children: "publishMediaPlayerAudioTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布媒体播放器的音频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布媒体播放器的音频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布媒体播放器的音频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishmediaplayervideotrack",
      children: _jsx(_components.code, {
        children: "publishMediaPlayerVideoTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布媒体播放器的视频："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布媒体播放器的视频。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布媒体播放器的视频。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishtranscodedvideotrack",
      children: _jsx(_components.code, {
        children: "publishTranscodedVideoTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布本地转码后的视频轨道："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布本地转码后的视频轨道。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不发布本地转码后的视频轨道。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishmixedaudiotrack",
      children: _jsx(_components.code, {
        children: "publishMixedAudioTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布音频合流轨道："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布音频合流轨道。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布音频合流轨道。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishlipsynctrack",
      children: _jsx(_components.code, {
        children: "publishLipSyncTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否发布由语音驱动扩展处理后的视频轨道："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布由语音驱动扩展处理后的视频轨道。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不发布由语音驱动扩展处理后的视频轨道。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "autosubscribeaudio",
      children: _jsx(_components.code, {
        children: "autoSubscribeAudio"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户加入频道时是否自动订阅所有远端音频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：订阅所有远端音频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：不自动订阅任何远端音频流。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "autosubscribevideo",
      children: _jsx(_components.code, {
        children: "autoSubscribeVideo"
      })
    }), `
`, _jsx(_components.p, {
      children: "用户加入频道时是否自动订阅所有远端视频流："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：订阅所有远端视频流。"
      }), `
`, _jsx(_components.li, {
        children: "false：不自动订阅任何远端视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enableaudiorecordingorplayout",
      children: _jsx(_components.code, {
        children: "enableAudioRecordingOrPlayout"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如果需要发布麦克风采集的音频流，请确保该参数设置为 ", _jsx(_components.code, {
            children: "true"
          }), "。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否开启音频采集或播放功能："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：开启音频采集或播放功能。"
      }), `
`, _jsx(_components.li, {
        children: "false：不开启音频采集或播放功能。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishmediaplayerid",
      children: _jsx(_components.code, {
        children: "publishMediaPlayerId"
      })
    }), `
`, _jsx(_components.p, {
      children: "要发布的媒体播放器的 ID。默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "clientroletype",
      children: _jsx(_components.code, {
        children: "clientRoleType"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "如果将用户角色设置为观众，则无法在频道中发布音视频流。若你希望在直播过程中发布媒体流，请确保将用户角色设置为主播。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "用户角色类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_BROADCASTER (1)：主播。"
      }), `
`, _jsx(_components.li, {
        children: "CLIENT_ROLE_AUDIENCE (2)：观众。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "audiencelatencylevel",
      children: _jsx(_components.code, {
        children: "audienceLatencyLevel"
      })
    }), `
`, _jsx(_components.p, {
      children: "互动直播场景下观众的延迟等级："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "AUDIENCE_LATENCY_LEVEL_LOW_LATENCY (1)：低延迟。"
      }), `
`, _jsx(_components.li, {
        children: "AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY (2)：超低延迟（默认）。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "defaultvideostreamtype",
      children: _jsx(_components.code, {
        children: "defaultVideoStreamType"
      })
    }), `
`, _jsx(_components.p, {
      children: "默认的视频流类型："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "VIDEO_STREAM_HIGH (0)：视频大流，即高分辨率高码率的视频流。"
      }), `
`, _jsx(_components.li, {
        children: "VIDEO_STREAM_LOW (1)：视频小流，即低分辨率低码率的视频流。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "channelprofile",
      children: _jsx(_components.code, {
        children: "channelProfile"
      })
    }), `
`, _jsx(_components.p, {
      children: "频道场景："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_COMMUNICATION (0)：通信场景。声网推荐使用直播场景以获得更佳的音视频体验。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_LIVE_BROADCASTING (1)：直播场景（默认）。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_GAME (2)：游戏场景。"
      }), `
`, _jsx(_components.li, {
        children: "CHANNEL_PROFILE_CLOUD_GAMING (3)：互动场景。该场景对延迟进行了优化，适用于用户之间需要频繁互动的场景。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "audiodelayms",
      children: _jsx(_components.code, {
        children: "audioDelayMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送音频帧的延迟（单位：毫秒）。你可以使用该参数设置发送音频帧的延迟，以实现音视频同步。如需关闭延迟，设置该值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "mediaplayeraudiodelayms",
      children: _jsx(_components.code, {
        children: "mediaPlayerAudioDelayMs"
      })
    }), `
`, _jsx(_components.p, {
      children: "发送媒体播放器音频帧的延迟（单位：毫秒），用于显式控制音视频同步。如需关闭延迟，设置该值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "token",
      children: _jsx(_components.code, {
        children: "token"
      })
    }), `
`, _jsx(_components.p, {
      children: "（可选）由你的服务器生成的用于鉴权的 Token。"
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "该参数仅在调用 updateChannelMediaOptions 或 updateChannelMediaOptionsEx 时生效。请确保用于生成 token 的 App ID、频道名和用户名称与调用 create 初始化 RTC 引擎，以及调用 joinChannel 和 joinChannelEx 加入频道时使用的值一致。"
        })
      })]
    }), `
`, _jsx(_components.h3, {
      id: "enablebuiltinmediaencryption",
      children: _jsx(_components.code, {
        children: "enableBuiltInMediaEncryption"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "调用 updateChannelMediaOptions 方法时将忽略此设置。"
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否启用媒体包加密："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用媒体包加密。"
      }), `
`, _jsx(_components.li, {
        children: "false：（默认）不启用媒体包加密。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "publishrhythmplayertrack",
      children: _jsx(_components.code, {
        children: "publishRhythmPlayerTrack"
      })
    }), `
`, _jsx(_components.p, {
      children: "是否向远端用户发布节拍器的声音："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：发布处理后的音频帧，本地用户和远端用户都能听到节拍器。"
      }), `
`, _jsx(_components.li, {
        children: "false：不发布节拍器的声音，只有本地用户能听到节拍器。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "isinteractiveaudience",
      children: _jsx(_components.code, {
        children: "isInteractiveAudience"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["该参数仅适用于主播互通场景。联播主播需调用 joinChannelEx 方法以观众身份加入其他主播频道，并将 isInteractiveAudience 设置为 ", _jsx(_components.code, {
            children: "true"
          }), "。 该参数仅在用户角色为 CLIENT_ROLE_AUDIENCE 时生效。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否开启互动模式："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：开启互动模式。"
      }), `
`, _jsx(_components.li, {
        children: "false：不开启互动模式。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "customvideotrackid",
      children: _jsx(_components.code, {
        children: "customVideoTrackId"
      })
    }), `
`, _jsx(_components.p, {
      children: "通过调用 createCustomVideoTrack 方法返回的视频轨道 ID。默认值为 0。"
    }), `
`, _jsx(_components.h3, {
      id: "isaudiofilterable",
      children: _jsx(_components.code, {
        children: "isAudioFilterable"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["如需启用该功能，请", _jsx(_components.a, {
            href: "https://ticket.shengwang.cn/",
            children: "联系技术支持"
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "发布的音频流是否根据音量算法进行过滤："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：音频流会被过滤。"
      }), `
`, _jsx(_components.li, {
        children: "false：音频流不会被过滤。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "startpreview",
      children: _jsx(_components.code, {
        children: "startPreview"
      })
    }), `
`, _jsx(_components.p, {
      children: "在已设置画布时，加入频道时是否启动预览："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：（默认）加入频道时启动预览。"
      }), `
`, _jsx(_components.li, {
        children: "false：不启动预览。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "enablemultipath",
      children: _jsx(_components.code, {
        children: "enableMultipath"
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["权限与系统要求：Android 7.0 或更高版本（API 等级 24 或更高），需要 ", _jsx(_components.code, {
            children: "ACCESS_NETWORK_STATE"
          }), " 和 ", _jsx(_components.code, {
            children: "CHANGE_NETWORK_STATE"
          }), " 权限。"]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: "是否启用多传输路径："
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "true：启用多传输路径。"
      }), `
`, _jsx(_components.li, {
        children: "false：禁用多传输路径。"
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "prefermultipathtype",
      children: _jsx(_components.code, {
        children: "preferMultipathType"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["首选的传输路径类型。详见 ", _jsx(_components.a, {
        href: "/zh-CN/api-reference/rtc/android/class-and-enum/enums/enum-multipathtype",
        children: "MultipathType"
      }), "。"]
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "注"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["使用该参数时，需确保 ", _jsx(_components.code, {
            children: "enableMultipath"
          }), " 设置为 true。"]
        })
      })]
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
