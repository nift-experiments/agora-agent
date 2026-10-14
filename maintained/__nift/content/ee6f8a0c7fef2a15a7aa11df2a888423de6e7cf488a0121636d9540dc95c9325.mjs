import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "UI Scene SDK",
  description: "This page provides the API reference for the Flexible Classroom UI Scene SDK."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    The UI Scene SDK is currently not available for Android.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    The UI Scene SDK is currently not available for Electron.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    The UI Scene SDK is currently not available for iOS.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    This TypeScript API reference covers the UI Scene SDK APIs for building Cloud Classroom use cases.

    ## FcrUIScene [#fcruiscene]

    The \`FcrUIScene\` class is the basic class for Cloud Classroom and provides the core methods for building online class use cases.

    ### launch [#launch]

    \`\`\`typescript
    static launch(
      dom: HTMLElement,
      option: LaunchOptions,
      callbackSuccess?: () => void,
      callbackFailure?: (err: Error) => void,
      callbackDestroy?: (type: number) => void
    ): () => void
    \`\`\`

    Launches Cloud Classroom.

    **Parameters**

    | Parameter         | Description                                                                                                                                                                 |
    | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`dom\`             | See [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document).                                                                                                  |
    | \`option\`          | The launch configuration options. See [LaunchOptions](#launchoptions).                                                                                                      |
    | \`callbackSuccess\` | The callback function triggered when the scene is successfully launched.                                                                                                    |
    | \`callbackFailure\` | The callback function triggered when the scene fails to launch. \`err\` is the error object.                                                                                  |
    | \`callbackDestroy\` | The callback function triggered when the scene is destroyed. \`type\` indicates the reason: \`1\` means leaving the classroom, and \`2\` means being kicked out of the classroom. |

    **Return**

    Returns a function that destroys the scene.

    ## Type definitions [#type-definitions]

    ### LaunchOptions [#launchoptions]

    \`\`\`typescript
    export type LaunchOptions = {
      appId: string;
      region: EduRegion;
      language: Language;
      userUuid: string;
      userName: string;
      roleType: EduRoleTypeEnum;
      token: string;
      roomUuid: string;
      roomName: string;
      roomType: EduRoomTypeEnum;
      startTime?: number;
      duration: number;
      devicePretest: boolean;
      coursewareList?: CoursewareList;
      userFlexProperties?: { [key: string]: unknown };
      latencyLevel?: AgoraLatencyLevel;
      recordUrl?: string;
      recordRetryTimeout?: number;
      virtualBackgroundImages?: string[];
      webrtcExtensionBaseUrl?: string;
      mediaOptions?: LaunchMediaOptions;
      shareUrl?: string;
      widgets?: Record<string, typeof FcrUISceneWidget>;
      rtcCloudProxyType?: AgoraCloudProxyType;
      rtmCloudProxyEnabled?: boolean;
    };
    \`\`\`

    The launch configuration set in the [FcrUIScene.launch](#launch) method.

    | Parameter                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`appId\`                   | The App ID of your Agora project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | \`region\`                  | (Optional) The region. Agora recommends setting it to a region close to where your courseware or recording-file object storage service is located. Ensure that \`region\` is set to the same value on all app clients, or they cannot interoperate. You can set \`region\` to \`CN\` for Mainland China, \`AP\` for Asia Pacific, \`EU\` for Europe, or \`NA\` for North America.                                                                                                                                      |
    | \`language\`                | The language of the classroom UI. See [LanguageEnum](#languageenum).                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | \`userUuid\`                | The user ID, which is the unique identifier of the user. Ensure that this parameter is the same as the UID that you use to generate the Signaling token. The maximum data length is 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: \`"!"\`, \`"#"\`, \`"$"\`, \`"%"\`, \`"&"\`, \`"("\`, \`")"\`, \`"+"\`, \`"-"\`, \`":"\`, \`";"\`, \`"<"\`, \`"="\`, \`"."\`, \`">"\`, \`"?"\`, \`"@"\`, \`"["\`, \`"]"\`, \`"^"\`, \`"_"\`, \`"{"\`, \`"}"\`, \`"\\|"\`, \`"~"\`, and \`","\`. |
    | \`userName\`                | The user name, which is displayed in the classroom UI. The maximum data length is 64 bytes. Supported characters are the same as \`userUuid\`.                                                                                                                                                                                                                                                                                                                                                               |
    | \`roleType\`                | The role of the user in the classroom. See [EduRoleTypeEnum](#eduroletypeenum).                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`token\`                   | The Signaling token. See [Secure your classrooms](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow).                                                                                                                                                                                                                                                                                                                                             |
    | \`roomUuid\`                | The classroom ID, which is the unique identifier of the classroom. The maximum data length is 64 bytes. Supported characters are the same as \`userUuid\`.                                                                                                                                                                                                                                                                                                                                                   |
    | \`roomName\`                | The classroom name, which is displayed in the classroom UI. The maximum data length is 64 bytes. Supported characters are the same as \`userUuid\`.                                                                                                                                                                                                                                                                                                                                                          |
    | \`roomType\`                | The classroom type. See [EduRoomTypeEnum](#eduroomtypeenum).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | \`startTime\`               | (Optional) The time (ms) when the class begins. The SDK uses the \`startTime\` passed by the first user that joins the classroom.                                                                                                                                                                                                                                                                                                                                                                            |
    | \`duration\`                | The duration time (seconds) of the classroom. The SDK uses the \`duration\` passed by the first user that joins the classroom. The maximum value is 86,400. You can set it according to your actual use case.                                                                                                                                                                                                                                                                                                |
    | \`devicePretest\`           | Whether to enable the pre-class device test. If set to \`true\`, a device test tab appears when a user joins the classroom and starts testing whether the user's camera, microphone, and speaker are working properly.                                                                                                                                                                                                                                                                                       |
    | \`coursewareList\`          | (Optional) The courseware list specified by the education provider. Users cannot change the value from app clients. Once specified, the SDK downloads the specified courseware from cloud drive to the local device.                                                                                                                                                                                                                                                                                       |
    | \`userFlexProperties\`      | (Optional) User properties defined by the developer.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | \`latencyLevel\`            | (Optional) The latency level on the audience client. This parameter applies to audiences only. \`1\` means low latency, where the sender-receiver latency is 1500 ms to 2000 ms. \`2\` means ultra-low latency, where the sender-receiver latency is 400 ms to 800 ms. The default value is \`2\`.                                                                                                                                                                                                               |
    | \`recordUrl\`               | (Optional) The URL address for recording. You need to pass in the URL deployed by yourself for webpage recording, for example, \`https://cn.bing.com/recordUrl\`.                                                                                                                                                                                                                                                                                                                                            |
    | \`recordRetryTimeout\`      | (Optional) The timeout duration for recording page startup failure. The default value is 60. If the recording service fails to join the classroom within the specified time, recording restarts.                                                                                                                                                                                                                                                                                                           |
    | \`virtualBackgroundImages\` | (Optional) The URL of the virtual background image. The domain name of the resource should be the same as the domain name where you deployed Smart Classroom. PNG and JPG images are supported.                                                                                                                                                                                                                                                                                                            |
    | \`webrtcExtensionBaseUrl\`  | (Optional) The URL of the WebRTC extension. The default value is \`https://solutions-apaas.agora.io/static\`. If you want to use advanced features such as virtual background, AI noise suppression, and image enhancement, deploy the WebRTC extension and related resource files in the same domain as the Flexible Classroom SDK.                                                                                                                                                                         |
    | \`mediaOptions\`            | (Optional) Media stream options, including whether to encrypt the media stream, and the encoder configurations of the camera-captured video and the screen-captured video. See [LaunchMediaOptions](#launchmediaoptions).                                                                                                                                                                                                                                                                                  |
    | \`shareUrl\`                | (Optional) The URL for sharing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
    | \`widgets\`                 | (Optional) The widget list, which extends the capabilities of the classroom. See [Embed a custom plugin](/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/embed-custom-plugin).                                                                                                                                                                                                                                                                                                    |
    | \`rtcCloudProxyType\`       | (Optional) The cloud proxy type for the RTC service. See [AgoraCloudProxyType](#agoracloudproxytype).                                                                                                                                                                                                                                                                                                                                                                                                      |
    | \`rtmCloudProxyEnabled\`    | (Optional) Whether to enable cloud proxy for the Signaling service.                                                                                                                                                                                                                                                                                                                                                                                                                                        |

    ### LaunchMediaOptions [#launchmediaoptions]

    \`\`\`typescript
    export type LaunchMediaOptions = {
      cameraEncoderConfiguration?: EduVideoEncoderConfiguration;
      screenShareEncoderConfiguration?: EduVideoEncoderConfiguration;
      encryptionConfig?: MediaEncryptionConfig;
      web?: {
        codec: SDK_CODEC;
        mode: SDK_MODE;
      };
    };
    \`\`\`

    Media stream options.

    | Parameter                         | Description                                                                                                                                                                              |
    | :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`cameraEncoderConfiguration\`      | The encoder configuration of the camera-captured video. See [EduVideoEncoderConfiguration](#eduvideoencoderconfiguration).                                                               |
    | \`screenShareEncoderConfiguration\` | The encoder configuration of the screen-captured video. See [EduVideoEncoderConfiguration](#eduvideoencoderconfiguration).                                                               |
    | \`encryptionConfig\`                | The encryption configuration. See [MediaEncryptionConfig](#mediaencryptionconfig).                                                                                                       |
    | \`web\`                             | The codec of the browser and channel profile. \`codec\` can be \`"vp8"\` for VP8 or \`"h264"\` for H.264. \`mode\` can be \`"rtc"\` for communication mode or \`"live"\` for live-broadcasting mode. |

    ### EduVideoEncoderConfiguration [#eduvideoencoderconfiguration]

    \`\`\`typescript
    export interface EduVideoEncoderConfiguration {
      width: number;
      height: number;
      frameRate: number;
      bitrate: number;
    }
    \`\`\`

    The video encoder configuration.

    | Parameter   | Description                                                        |
    | :---------- | :----------------------------------------------------------------- |
    | \`width\`     | The width of the video frame in pixels. The default value is 320.  |
    | \`height\`    | The height of the video frame in pixels. The default value is 240. |
    | \`frameRate\` | The video frame rate in FPS. The default value is 15.              |
    | \`bitrate\`   | The video bitrate in Kbps. The default value is 200.               |

    ### MediaEncryptionConfig [#mediaencryptionconfig]

    \`\`\`typescript
    export declare interface MediaEncryptionConfig {
      mode: MediaEncryptionMode;
      key: string;
    }
    \`\`\`

    The media stream encryption configuration set in [LaunchMediaOptions](#launchmediaoptions).

    | Parameter | Description                                                                                                                                                                    |
    | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`mode\`    | The encryption mode. See [MediaEncryptionMode](#mediaencryptionmode). All teachers and students in the same classroom need to use the same encryption mode and encryption key. |
    | \`key\`     | The encryption key.                                                                                                                                                            |

    ### MediaEncryptionMode [#mediaencryptionmode]

    The media stream encryption mode set in [MediaEncryptionConfig](#mediaencryptionconfig).

    | Parameter     | Description                            |
    | :------------ | :------------------------------------- |
    | \`AES_128_XTS\` | \`1\`: 128-bit AES encryption, XTS mode. |
    | \`AES_128_ECB\` | \`2\`: 128-bit AES encryption, ECB mode. |
    | \`AES_256_XTS\` | \`3\`: 256-bit AES encryption, XTS mode. |
    | \`AES_128_GCM\` | \`5\`: 128-bit AES encryption, GCM mode. |
    | \`AES_256_GCM\` | \`6\`: 256-bit AES encryption, GCM mode. |

    ### EduRoleTypeEnum [#eduroletypeenum]

    The user role in the classroom set in [LaunchOptions](#launchoptions).

    | Parameter | Description       |
    | :-------- | :---------------- |
    | \`teacher\` | \`1\`: The teacher. |
    | \`student\` | \`2\`: The student. |

    ### EduRoomTypeEnum [#eduroomtypeenum]

    The classroom type set in [LaunchOptions](#launchoptions).

    | Parameter        | Description                                                                                                                                          |
    | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`RoomSmallClass\` | \`4\`: Cloud Classroom, where a teacher teaches online and multiple students watch and listen. The maximum number of students in a small class is 200. |

    ### LanguageEnum [#languageenum]

    The language on the classroom UI set in [LaunchOptions](#launchoptions).

    | Parameter | Description |
    | :-------- | :---------- |
    | \`en\`      | English.    |
    | \`zh\`      | Chinese.    |

    ### AgoraCloudProxyType [#agoracloudproxytype]

    The cloud proxy type. Set in [LaunchOptions](#launchoptions).

    | Parameter   | Description                                                                                                                                                                                                                                                                                       |
    | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`Automatic\` | \`0\`: Automatic mode. In this mode, the SDK first attempts to connect directly to Agora SDRTN. If the attempt fails, the SDK automatically falls back to sending media over TLS 443. If you are unsure whether the end user's network environment has a firewall, \`Automatic\` mode is recommended. |
    | \`UDP\`       | \`1\`: UDP.                                                                                                                                                                                                                                                                                         |
    | \`TCP\`       | \`2\`: TCP.                                                                                                                                                                                                                                                                                         |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The UI Scene SDK is currently not available for Android."
  }, {
    heading: undefined,
    content: "The UI Scene SDK is currently not available for Electron."
  }, {
    heading: undefined,
    content: "The UI Scene SDK is currently not available for iOS."
  }, {
    heading: undefined,
    content: "This TypeScript API reference covers the UI Scene SDK APIs for building Cloud Classroom use cases."
  }, {
    heading: "fcruiscene",
    content: "The `FcrUIScene` class is the basic class for Cloud Classroom and provides the core methods for building online class use cases."
  }, {
    heading: "launch",
    content: "Launches Cloud Classroom."
  }, {
    heading: "launch",
    content: "**Parameters**"
  }, {
    heading: "launch",
    content: "Parameter"
  }, {
    heading: "launch",
    content: "Description"
  }, {
    heading: "launch",
    content: "`dom`"
  }, {
    heading: "launch",
    content: "See Document."
  }, {
    heading: "launch",
    content: "`option`"
  }, {
    heading: "launch",
    content: "The launch configuration options. See LaunchOptions."
  }, {
    heading: "launch",
    content: "`callbackSuccess`"
  }, {
    heading: "launch",
    content: "The callback function triggered when the scene is successfully launched."
  }, {
    heading: "launch",
    content: "`callbackFailure`"
  }, {
    heading: "launch",
    content: "The callback function triggered when the scene fails to launch. `err` is the error object."
  }, {
    heading: "launch",
    content: "`callbackDestroy`"
  }, {
    heading: "launch",
    content: "The callback function triggered when the scene is destroyed. `type` indicates the reason: `1` means leaving the classroom, and `2` means being kicked out of the classroom."
  }, {
    heading: "launch",
    content: "**Return**"
  }, {
    heading: "launch",
    content: "Returns a function that destroys the scene."
  }, {
    heading: "launchoptions",
    content: "The launch configuration set in the FcrUIScene.launch method."
  }, {
    heading: "launchoptions",
    content: "Parameter"
  }, {
    heading: "launchoptions",
    content: "Description"
  }, {
    heading: "launchoptions",
    content: "`appId`"
  }, {
    heading: "launchoptions",
    content: "The App ID of your Agora project."
  }, {
    heading: "launchoptions",
    content: "`region`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The region. Agora recommends setting it to a region close to where your courseware or recording-file object storage service is located. Ensure that `region` is set to the same value on all app clients, or they cannot interoperate. You can set `region` to `CN` for Mainland China, `AP` for Asia Pacific, `EU` for Europe, or `NA` for North America."
  }, {
    heading: "launchoptions",
    content: "`language`"
  }, {
    heading: "launchoptions",
    content: "The language of the classroom UI. See LanguageEnum."
  }, {
    heading: "launchoptions",
    content: "`userUuid`"
  }, {
    heading: "launchoptions",
    content: 'The user ID, which is the unique identifier of the user. Ensure that this parameter is the same as the UID that you use to generate the Signaling token. The maximum data length is 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: `"!"`, `"#"`, `"$"`, `"%"`, `"&"`, `"("`, `")"`, `"+"`, `"-"`, `":"`, `";"`, `"<"`, `"="`, `"."`, `">"`, `"?"`, `"@"`, `"["`, `"]"`, `"^"`, `"_"`, `"{"`, `"}"`, `"\\|"`, `"~"`, and `","`.'
  }, {
    heading: "launchoptions",
    content: "`userName`"
  }, {
    heading: "launchoptions",
    content: "The user name, which is displayed in the classroom UI. The maximum data length is 64 bytes. Supported characters are the same as `userUuid`."
  }, {
    heading: "launchoptions",
    content: "`roleType`"
  }, {
    heading: "launchoptions",
    content: "The role of the user in the classroom. See EduRoleTypeEnum."
  }, {
    heading: "launchoptions",
    content: "`token`"
  }, {
    heading: "launchoptions",
    content: "The Signaling token. See Secure your classrooms."
  }, {
    heading: "launchoptions",
    content: "`roomUuid`"
  }, {
    heading: "launchoptions",
    content: "The classroom ID, which is the unique identifier of the classroom. The maximum data length is 64 bytes. Supported characters are the same as `userUuid`."
  }, {
    heading: "launchoptions",
    content: "`roomName`"
  }, {
    heading: "launchoptions",
    content: "The classroom name, which is displayed in the classroom UI. The maximum data length is 64 bytes. Supported characters are the same as `userUuid`."
  }, {
    heading: "launchoptions",
    content: "`roomType`"
  }, {
    heading: "launchoptions",
    content: "The classroom type. See EduRoomTypeEnum."
  }, {
    heading: "launchoptions",
    content: "`startTime`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The time (ms) when the class begins. The SDK uses the `startTime` passed by the first user that joins the classroom."
  }, {
    heading: "launchoptions",
    content: "`duration`"
  }, {
    heading: "launchoptions",
    content: "The duration time (seconds) of the classroom. The SDK uses the `duration` passed by the first user that joins the classroom. The maximum value is 86,400. You can set it according to your actual use case."
  }, {
    heading: "launchoptions",
    content: "`devicePretest`"
  }, {
    heading: "launchoptions",
    content: "Whether to enable the pre-class device test. If set to `true`, a device test tab appears when a user joins the classroom and starts testing whether the user's camera, microphone, and speaker are working properly."
  }, {
    heading: "launchoptions",
    content: "`coursewareList`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The courseware list specified by the education provider. Users cannot change the value from app clients. Once specified, the SDK downloads the specified courseware from cloud drive to the local device."
  }, {
    heading: "launchoptions",
    content: "`userFlexProperties`"
  }, {
    heading: "launchoptions",
    content: "(Optional) User properties defined by the developer."
  }, {
    heading: "launchoptions",
    content: "`latencyLevel`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The latency level on the audience client. This parameter applies to audiences only. `1` means low latency, where the sender-receiver latency is 1500 ms to 2000 ms. `2` means ultra-low latency, where the sender-receiver latency is 400 ms to 800 ms. The default value is `2`."
  }, {
    heading: "launchoptions",
    content: "`recordUrl`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The URL address for recording. You need to pass in the URL deployed by yourself for webpage recording, for example, `https://cn.bing.com/recordUrl`."
  }, {
    heading: "launchoptions",
    content: "`recordRetryTimeout`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The timeout duration for recording page startup failure. The default value is 60. If the recording service fails to join the classroom within the specified time, recording restarts."
  }, {
    heading: "launchoptions",
    content: "`virtualBackgroundImages`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The URL of the virtual background image. The domain name of the resource should be the same as the domain name where you deployed Smart Classroom. PNG and JPG images are supported."
  }, {
    heading: "launchoptions",
    content: "`webrtcExtensionBaseUrl`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The URL of the WebRTC extension. The default value is `https://solutions-apaas.agora.io/static`. If you want to use advanced features such as virtual background, AI noise suppression, and image enhancement, deploy the WebRTC extension and related resource files in the same domain as the Flexible Classroom SDK."
  }, {
    heading: "launchoptions",
    content: "`mediaOptions`"
  }, {
    heading: "launchoptions",
    content: "(Optional) Media stream options, including whether to encrypt the media stream, and the encoder configurations of the camera-captured video and the screen-captured video. See LaunchMediaOptions."
  }, {
    heading: "launchoptions",
    content: "`shareUrl`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The URL for sharing."
  }, {
    heading: "launchoptions",
    content: "`widgets`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The widget list, which extends the capabilities of the classroom. See Embed a custom plugin."
  }, {
    heading: "launchoptions",
    content: "`rtcCloudProxyType`"
  }, {
    heading: "launchoptions",
    content: "(Optional) The cloud proxy type for the RTC service. See AgoraCloudProxyType."
  }, {
    heading: "launchoptions",
    content: "`rtmCloudProxyEnabled`"
  }, {
    heading: "launchoptions",
    content: "(Optional) Whether to enable cloud proxy for the Signaling service."
  }, {
    heading: "launchmediaoptions",
    content: "Media stream options."
  }, {
    heading: "launchmediaoptions",
    content: "Parameter"
  }, {
    heading: "launchmediaoptions",
    content: "Description"
  }, {
    heading: "launchmediaoptions",
    content: "`cameraEncoderConfiguration`"
  }, {
    heading: "launchmediaoptions",
    content: "The encoder configuration of the camera-captured video. See EduVideoEncoderConfiguration."
  }, {
    heading: "launchmediaoptions",
    content: "`screenShareEncoderConfiguration`"
  }, {
    heading: "launchmediaoptions",
    content: "The encoder configuration of the screen-captured video. See EduVideoEncoderConfiguration."
  }, {
    heading: "launchmediaoptions",
    content: "`encryptionConfig`"
  }, {
    heading: "launchmediaoptions",
    content: "The encryption configuration. See MediaEncryptionConfig."
  }, {
    heading: "launchmediaoptions",
    content: "`web`"
  }, {
    heading: "launchmediaoptions",
    content: 'The codec of the browser and channel profile. `codec` can be `"vp8"` for VP8 or `"h264"` for H.264. `mode` can be `"rtc"` for communication mode or `"live"` for live-broadcasting mode.'
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "The video encoder configuration."
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "Parameter"
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "Description"
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "`width`"
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "The width of the video frame in pixels. The default value is 320."
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "`height`"
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "The height of the video frame in pixels. The default value is 240."
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "`frameRate`"
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "The video frame rate in FPS. The default value is 15."
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "`bitrate`"
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "The video bitrate in Kbps. The default value is 200."
  }, {
    heading: "mediaencryptionconfig",
    content: "The media stream encryption configuration set in LaunchMediaOptions."
  }, {
    heading: "mediaencryptionconfig",
    content: "Parameter"
  }, {
    heading: "mediaencryptionconfig",
    content: "Description"
  }, {
    heading: "mediaencryptionconfig",
    content: "`mode`"
  }, {
    heading: "mediaencryptionconfig",
    content: "The encryption mode. See MediaEncryptionMode. All teachers and students in the same classroom need to use the same encryption mode and encryption key."
  }, {
    heading: "mediaencryptionconfig",
    content: "`key`"
  }, {
    heading: "mediaencryptionconfig",
    content: "The encryption key."
  }, {
    heading: "mediaencryptionmode",
    content: "The media stream encryption mode set in MediaEncryptionConfig."
  }, {
    heading: "mediaencryptionmode",
    content: "Parameter"
  }, {
    heading: "mediaencryptionmode",
    content: "Description"
  }, {
    heading: "mediaencryptionmode",
    content: "`AES_128_XTS`"
  }, {
    heading: "mediaencryptionmode",
    content: "`1`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "mediaencryptionmode",
    content: "`AES_128_ECB`"
  }, {
    heading: "mediaencryptionmode",
    content: "`2`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "mediaencryptionmode",
    content: "`AES_256_XTS`"
  }, {
    heading: "mediaencryptionmode",
    content: "`3`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "mediaencryptionmode",
    content: "`AES_128_GCM`"
  }, {
    heading: "mediaencryptionmode",
    content: "`5`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "mediaencryptionmode",
    content: "`AES_256_GCM`"
  }, {
    heading: "mediaencryptionmode",
    content: "`6`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "eduroletypeenum",
    content: "The user role in the classroom set in LaunchOptions."
  }, {
    heading: "eduroletypeenum",
    content: "Parameter"
  }, {
    heading: "eduroletypeenum",
    content: "Description"
  }, {
    heading: "eduroletypeenum",
    content: "`teacher`"
  }, {
    heading: "eduroletypeenum",
    content: "`1`: The teacher."
  }, {
    heading: "eduroletypeenum",
    content: "`student`"
  }, {
    heading: "eduroletypeenum",
    content: "`2`: The student."
  }, {
    heading: "eduroomtypeenum",
    content: "The classroom type set in LaunchOptions."
  }, {
    heading: "eduroomtypeenum",
    content: "Parameter"
  }, {
    heading: "eduroomtypeenum",
    content: "Description"
  }, {
    heading: "eduroomtypeenum",
    content: "`RoomSmallClass`"
  }, {
    heading: "eduroomtypeenum",
    content: "`4`: Cloud Classroom, where a teacher teaches online and multiple students watch and listen. The maximum number of students in a small class is 200."
  }, {
    heading: "languageenum",
    content: "The language on the classroom UI set in LaunchOptions."
  }, {
    heading: "languageenum",
    content: "Parameter"
  }, {
    heading: "languageenum",
    content: "Description"
  }, {
    heading: "languageenum",
    content: "`en`"
  }, {
    heading: "languageenum",
    content: "English."
  }, {
    heading: "languageenum",
    content: "`zh`"
  }, {
    heading: "languageenum",
    content: "Chinese."
  }, {
    heading: "agoracloudproxytype",
    content: "The cloud proxy type. Set in LaunchOptions."
  }, {
    heading: "agoracloudproxytype",
    content: "Parameter"
  }, {
    heading: "agoracloudproxytype",
    content: "Description"
  }, {
    heading: "agoracloudproxytype",
    content: "`Automatic`"
  }, {
    heading: "agoracloudproxytype",
    content: "`0`: Automatic mode. In this mode, the SDK first attempts to connect directly to Agora SDRTN. If the attempt fails, the SDK automatically falls back to sending media over TLS 443. If you are unsure whether the end user's network environment has a firewall, `Automatic` mode is recommended."
  }, {
    heading: "agoracloudproxytype",
    content: "`UDP`"
  }, {
    heading: "agoracloudproxytype",
    content: "`1`: UDP."
  }, {
    heading: "agoracloudproxytype",
    content: "`TCP`"
  }, {
    heading: "agoracloudproxytype",
    content: "`2`: TCP."
  }],
  headings: [{
    id: "fcruiscene",
    content: "FcrUIScene"
  }, {
    id: "launch",
    content: "launch"
  }, {
    id: "type-definitions",
    content: "Type definitions"
  }, {
    id: "launchoptions",
    content: "LaunchOptions"
  }, {
    id: "launchmediaoptions",
    content: "LaunchMediaOptions"
  }, {
    id: "eduvideoencoderconfiguration",
    content: "EduVideoEncoderConfiguration"
  }, {
    id: "mediaencryptionconfig",
    content: "MediaEncryptionConfig"
  }, {
    id: "mediaencryptionmode",
    content: "MediaEncryptionMode"
  }, {
    id: "eduroletypeenum",
    content: "EduRoleTypeEnum"
  }, {
    id: "eduroomtypeenum",
    content: "EduRoomTypeEnum"
  }, {
    id: "languageenum",
    content: "LanguageEnum"
  }, {
    id: "agoracloudproxytype",
    content: "AgoraCloudProxyType"
  }]
};
export let toc = [{
  depth: 2,
  url: "#fcruiscene",
  title: _jsx(_Fragment, {
    children: "FcrUIScene"
  })
}, {
  depth: 3,
  url: "#launch",
  title: _jsx(_Fragment, {
    children: "launch"
  })
}, {
  depth: 2,
  url: "#type-definitions",
  title: _jsx(_Fragment, {
    children: "Type definitions"
  })
}, {
  depth: 3,
  url: "#launchoptions",
  title: _jsx(_Fragment, {
    children: "LaunchOptions"
  })
}, {
  depth: 3,
  url: "#launchmediaoptions",
  title: _jsx(_Fragment, {
    children: "LaunchMediaOptions"
  })
}, {
  depth: 3,
  url: "#eduvideoencoderconfiguration",
  title: _jsx(_Fragment, {
    children: "EduVideoEncoderConfiguration"
  })
}, {
  depth: 3,
  url: "#mediaencryptionconfig",
  title: _jsx(_Fragment, {
    children: "MediaEncryptionConfig"
  })
}, {
  depth: 3,
  url: "#mediaencryptionmode",
  title: _jsx(_Fragment, {
    children: "MediaEncryptionMode"
  })
}, {
  depth: 3,
  url: "#eduroletypeenum",
  title: _jsx(_Fragment, {
    children: "EduRoleTypeEnum"
  })
}, {
  depth: 3,
  url: "#eduroomtypeenum",
  title: _jsx(_Fragment, {
    children: "EduRoomTypeEnum"
  })
}, {
  depth: 3,
  url: "#languageenum",
  title: _jsx(_Fragment, {
    children: "LanguageEnum"
  })
}, {
  depth: 3,
  url: "#agoracloudproxytype",
  title: _jsx(_Fragment, {
    children: "AgoraCloudProxyType"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","electron","ios","web"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "The UI Scene SDK is currently not available for Android."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "electron",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "electron"
      }), _jsx(_components.p, {
        children: "The UI Scene SDK is currently not available for Electron."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "ios",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "ios"
      }), _jsx(_components.p, {
        children: "The UI Scene SDK is currently not available for iOS."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsx(_components.p, {
        children: "This TypeScript API reference covers the UI Scene SDK APIs for building Cloud Classroom use cases."
      }), _jsx(_components.h2, {
        id: "fcruiscene",
        children: "FcrUIScene"
      }), _jsxs(_components.p, {
        children: ["The ", _jsx(_components.code, {
          children: "FcrUIScene"
        }), " class is the basic class for Cloud Classroom and provides the core methods for building online class use cases."]
      }), _jsx(_components.h3, {
        id: "launch",
        children: "launch"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "static "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "launch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  dom: HTMLElement,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  option: LaunchOptions,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  callbackSuccess"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  callbackFailure"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "err"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Error"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ","
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  callbackDestroy"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "type"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "): () "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " void"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "Launches Cloud Classroom."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Parameters"
        })
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "dom"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["See ", _jsx(_components.a, {
                href: "https://developer.mozilla.org/en-US/docs/Web/API/Document",
                children: "Document"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "option"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The launch configuration options. See ", _jsx(_components.a, {
                href: "#launchoptions",
                children: "LaunchOptions"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "callbackSuccess"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The callback function triggered when the scene is successfully launched."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "callbackFailure"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The callback function triggered when the scene fails to launch. ", _jsx(_components.code, {
                children: "err"
              }), " is the error object."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "callbackDestroy"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The callback function triggered when the scene is destroyed. ", _jsx(_components.code, {
                children: "type"
              }), " indicates the reason: ", _jsx(_components.code, {
                children: "1"
              }), " means leaving the classroom, and ", _jsx(_components.code, {
                children: "2"
              }), " means being kicked out of the classroom."]
            })]
          })]
        })]
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Return"
        })
      }), _jsx(_components.p, {
        children: "Returns a function that destroys the scene."
      }), _jsx(_components.h2, {
        id: "type-definitions",
        children: "Type definitions"
      }), _jsx(_components.h3, {
        id: "launchoptions",
        children: "LaunchOptions"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "export"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " type"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " LaunchOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  appId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  region"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EduRegion"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  language"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Language"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  userUuid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  userName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  roleType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EduRoleTypeEnum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  token"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  roomUuid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  roomName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  roomType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EduRoomTypeEnum"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  startTime"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  duration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  devicePretest"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " boolean"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  coursewareList"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CoursewareList"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  userFlexProperties"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " { ["
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "]"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " unknown"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " };"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  latencyLevel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " AgoraLatencyLevel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  recordUrl"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  recordRetryTimeout"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  virtualBackgroundImages"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "[];"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  webrtcExtensionBaseUrl"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  mediaOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " LaunchMediaOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  shareUrl"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  widgets"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " Record"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "typeof"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " FcrUISceneWidget>;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  rtcCloudProxyType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " AgoraCloudProxyType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  rtmCloudProxyEnabled"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " boolean"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "};"
              })
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["The launch configuration set in the ", _jsx(_components.a, {
          href: "#launch",
          children: "FcrUIScene.launch"
        }), " method."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "appId"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The App ID of your Agora project."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "region"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The region. Agora recommends setting it to a region close to where your courseware or recording-file object storage service is located. Ensure that ", _jsx(_components.code, {
                children: "region"
              }), " is set to the same value on all app clients, or they cannot interoperate. You can set ", _jsx(_components.code, {
                children: "region"
              }), " to ", _jsx(_components.code, {
                children: "CN"
              }), " for Mainland China, ", _jsx(_components.code, {
                children: "AP"
              }), " for Asia Pacific, ", _jsx(_components.code, {
                children: "EU"
              }), " for Europe, or ", _jsx(_components.code, {
                children: "NA"
              }), " for North America."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "language"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The language of the classroom UI. See ", _jsx(_components.a, {
                href: "#languageenum",
                children: "LanguageEnum"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "userUuid"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user ID, which is the unique identifier of the user. Ensure that this parameter is the same as the UID that you use to generate the Signaling token. The maximum data length is 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: ", _jsx(_components.code, {
                children: '"!"'
              }), ", ", _jsx(_components.code, {
                children: '"#"'
              }), ", ", _jsx(_components.code, {
                children: '"$"'
              }), ", ", _jsx(_components.code, {
                children: '"%"'
              }), ", ", _jsx(_components.code, {
                children: '"&"'
              }), ", ", _jsx(_components.code, {
                children: '"("'
              }), ", ", _jsx(_components.code, {
                children: '")"'
              }), ", ", _jsx(_components.code, {
                children: '"+"'
              }), ", ", _jsx(_components.code, {
                children: '"-"'
              }), ", ", _jsx(_components.code, {
                children: '":"'
              }), ", ", _jsx(_components.code, {
                children: '";"'
              }), ", ", _jsx(_components.code, {
                children: '"<"'
              }), ", ", _jsx(_components.code, {
                children: '"="'
              }), ", ", _jsx(_components.code, {
                children: '"."'
              }), ", ", _jsx(_components.code, {
                children: '">"'
              }), ", ", _jsx(_components.code, {
                children: '"?"'
              }), ", ", _jsx(_components.code, {
                children: '"@"'
              }), ", ", _jsx(_components.code, {
                children: '"["'
              }), ", ", _jsx(_components.code, {
                children: '"]"'
              }), ", ", _jsx(_components.code, {
                children: '"^"'
              }), ", ", _jsx(_components.code, {
                children: '"_"'
              }), ", ", _jsx(_components.code, {
                children: '"{"'
              }), ", ", _jsx(_components.code, {
                children: '"}"'
              }), ", ", _jsx(_components.code, {
                children: '"|"'
              }), ", ", _jsx(_components.code, {
                children: '"~"'
              }), ", and ", _jsx(_components.code, {
                children: '","'
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "userName"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user name, which is displayed in the classroom UI. The maximum data length is 64 bytes. Supported characters are the same as ", _jsx(_components.code, {
                children: "userUuid"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "roleType"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The role of the user in the classroom. See ", _jsx(_components.a, {
                href: "#eduroletypeenum",
                children: "EduRoleTypeEnum"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "token"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The Signaling token. See ", _jsx(_components.a, {
                href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow",
                children: "Secure your classrooms"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "roomUuid"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The classroom ID, which is the unique identifier of the classroom. The maximum data length is 64 bytes. Supported characters are the same as ", _jsx(_components.code, {
                children: "userUuid"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "roomName"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The classroom name, which is displayed in the classroom UI. The maximum data length is 64 bytes. Supported characters are the same as ", _jsx(_components.code, {
                children: "userUuid"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "roomType"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The classroom type. See ", _jsx(_components.a, {
                href: "#eduroomtypeenum",
                children: "EduRoomTypeEnum"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "startTime"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The time (ms) when the class begins. The SDK uses the ", _jsx(_components.code, {
                children: "startTime"
              }), " passed by the first user that joins the classroom."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "duration"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The duration time (seconds) of the classroom. The SDK uses the ", _jsx(_components.code, {
                children: "duration"
              }), " passed by the first user that joins the classroom. The maximum value is 86,400. You can set it according to your actual use case."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "devicePretest"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Whether to enable the pre-class device test. If set to ", _jsx(_components.code, {
                children: "true"
              }), ", a device test tab appears when a user joins the classroom and starts testing whether the user's camera, microphone, and speaker are working properly."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "coursewareList"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "(Optional) The courseware list specified by the education provider. Users cannot change the value from app clients. Once specified, the SDK downloads the specified courseware from cloud drive to the local device."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "userFlexProperties"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "(Optional) User properties defined by the developer."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "latencyLevel"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The latency level on the audience client. This parameter applies to audiences only. ", _jsx(_components.code, {
                children: "1"
              }), " means low latency, where the sender-receiver latency is 1500 ms to 2000 ms. ", _jsx(_components.code, {
                children: "2"
              }), " means ultra-low latency, where the sender-receiver latency is 400 ms to 800 ms. The default value is ", _jsx(_components.code, {
                children: "2"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "recordUrl"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The URL address for recording. You need to pass in the URL deployed by yourself for webpage recording, for example, ", _jsx(_components.code, {
                children: "https://cn.bing.com/recordUrl"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "recordRetryTimeout"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "(Optional) The timeout duration for recording page startup failure. The default value is 60. If the recording service fails to join the classroom within the specified time, recording restarts."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "virtualBackgroundImages"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "(Optional) The URL of the virtual background image. The domain name of the resource should be the same as the domain name where you deployed Smart Classroom. PNG and JPG images are supported."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "webrtcExtensionBaseUrl"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The URL of the WebRTC extension. The default value is ", _jsx(_components.code, {
                children: "https://solutions-apaas.agora.io/static"
              }), ". If you want to use advanced features such as virtual background, AI noise suppression, and image enhancement, deploy the WebRTC extension and related resource files in the same domain as the Flexible Classroom SDK."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mediaOptions"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) Media stream options, including whether to encrypt the media stream, and the encoder configurations of the camera-captured video and the screen-captured video. See ", _jsx(_components.a, {
                href: "#launchmediaoptions",
                children: "LaunchMediaOptions"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "shareUrl"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "(Optional) The URL for sharing."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "widgets"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The widget list, which extends the capabilities of the classroom. See ", _jsx(_components.a, {
                href: "/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/embed-custom-plugin",
                children: "Embed a custom plugin"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "rtcCloudProxyType"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The cloud proxy type for the RTC service. See ", _jsx(_components.a, {
                href: "#agoracloudproxytype",
                children: "AgoraCloudProxyType"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "rtmCloudProxyEnabled"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "(Optional) Whether to enable cloud proxy for the Signaling service."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "launchmediaoptions",
        children: "LaunchMediaOptions"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "export"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " type"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " LaunchMediaOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ="
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  cameraEncoderConfiguration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EduVideoEncoderConfiguration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  screenShareEncoderConfiguration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EduVideoEncoderConfiguration"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  encryptionConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MediaEncryptionConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  web"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "?:"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "    codec"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " SDK_CODEC"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "    mode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " SDK_MODE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  };"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "};"
              })
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "Media stream options."
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "cameraEncoderConfiguration"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The encoder configuration of the camera-captured video. See ", _jsx(_components.a, {
                href: "#eduvideoencoderconfiguration",
                children: "EduVideoEncoderConfiguration"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "screenShareEncoderConfiguration"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The encoder configuration of the screen-captured video. See ", _jsx(_components.a, {
                href: "#eduvideoencoderconfiguration",
                children: "EduVideoEncoderConfiguration"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "encryptionConfig"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The encryption configuration. See ", _jsx(_components.a, {
                href: "#mediaencryptionconfig",
                children: "MediaEncryptionConfig"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "web"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The codec of the browser and channel profile. ", _jsx(_components.code, {
                children: "codec"
              }), " can be ", _jsx(_components.code, {
                children: '"vp8"'
              }), " for VP8 or ", _jsx(_components.code, {
                children: '"h264"'
              }), " for H.264. ", _jsx(_components.code, {
                children: "mode"
              }), " can be ", _jsx(_components.code, {
                children: '"rtc"'
              }), " for communication mode or ", _jsx(_components.code, {
                children: '"live"'
              }), " for live-broadcasting mode."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "eduvideoencoderconfiguration",
        children: "EduVideoEncoderConfiguration"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "export"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " interface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " EduVideoEncoderConfiguration"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  width"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  height"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  frameRate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  bitrate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " number"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
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
      }), _jsx(_components.p, {
        children: "The video encoder configuration."
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "width"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The width of the video frame in pixels. The default value is 320."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "height"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The height of the video frame in pixels. The default value is 240."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "frameRate"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The video frame rate in FPS. The default value is 15."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "bitrate"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The video bitrate in Kbps. The default value is 200."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "mediaencryptionconfig",
        children: "MediaEncryptionConfig"
      }), _jsx(_Fragment, {
        children: _jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark",
          style: {
            "--shiki-light": "#24292e",
            "--shiki-dark": "#e1e4e8",
            "--shiki-light-bg": "#fff",
            "--shiki-dark-bg": "#24292e"
          },
          tabIndex: "0",
          icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "export"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " declare"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " interface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MediaEncryptionConfig"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  mode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " MediaEncryptionMode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "  key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " string"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ";"
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
      }), _jsxs(_components.p, {
        children: ["The media stream encryption configuration set in ", _jsx(_components.a, {
          href: "#launchmediaoptions",
          children: "LaunchMediaOptions"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mode"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The encryption mode. See ", _jsx(_components.a, {
                href: "#mediaencryptionmode",
                children: "MediaEncryptionMode"
              }), ". All teachers and students in the same classroom need to use the same encryption mode and encryption key."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "key"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The encryption key."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "mediaencryptionmode",
        children: "MediaEncryptionMode"
      }), _jsxs(_components.p, {
        children: ["The media stream encryption mode set in ", _jsx(_components.a, {
          href: "#mediaencryptionconfig",
          children: "MediaEncryptionConfig"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES_128_XTS"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "1"
              }), ": 128-bit AES encryption, XTS mode."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES_128_ECB"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "2"
              }), ": 128-bit AES encryption, ECB mode."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES_256_XTS"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "3"
              }), ": 256-bit AES encryption, XTS mode."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES_128_GCM"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "5"
              }), ": 128-bit AES encryption, GCM mode."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES_256_GCM"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "6"
              }), ": 256-bit AES encryption, GCM mode."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "eduroletypeenum",
        children: "EduRoleTypeEnum"
      }), _jsxs(_components.p, {
        children: ["The user role in the classroom set in ", _jsx(_components.a, {
          href: "#launchoptions",
          children: "LaunchOptions"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "teacher"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "1"
              }), ": The teacher."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "student"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "2"
              }), ": The student."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "eduroomtypeenum",
        children: "EduRoomTypeEnum"
      }), _jsxs(_components.p, {
        children: ["The classroom type set in ", _jsx(_components.a, {
          href: "#launchoptions",
          children: "LaunchOptions"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsx(_components.tbody, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "RoomSmallClass"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "4"
              }), ": Cloud Classroom, where a teacher teaches online and multiple students watch and listen. The maximum number of students in a small class is 200."]
            })]
          })
        })]
      }), _jsx(_components.h3, {
        id: "languageenum",
        children: "LanguageEnum"
      }), _jsxs(_components.p, {
        children: ["The language on the classroom UI set in ", _jsx(_components.a, {
          href: "#launchoptions",
          children: "LaunchOptions"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "en"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "English."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "zh"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "Chinese."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoracloudproxytype",
        children: "AgoraCloudProxyType"
      }), _jsxs(_components.p, {
        children: ["The cloud proxy type. Set in ", _jsx(_components.a, {
          href: "#launchoptions",
          children: "LaunchOptions"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Parameter"
            }), _jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Description"
            })]
          })
        }), _jsxs(_components.tbody, {
          children: [_jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "Automatic"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "0"
              }), ": Automatic mode. In this mode, the SDK first attempts to connect directly to Agora SDRTN. If the attempt fails, the SDK automatically falls back to sending media over TLS 443. If you are unsure whether the end user's network environment has a firewall, ", _jsx(_components.code, {
                children: "Automatic"
              }), " mode is recommended."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "UDP"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "1"
              }), ": UDP."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "TCP"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "2"
              }), ": TCP."]
            })]
          })]
        })]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
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
