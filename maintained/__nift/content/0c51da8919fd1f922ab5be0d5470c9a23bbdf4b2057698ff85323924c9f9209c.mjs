import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Proctor SDK",
  description: "This page provides the API reference for the Agora Proctor SDK."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;web&#x22;,&#x22;electron&#x22;,&#x22;ios&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Agora Proctor SDK is currently not available for Android.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    This TypeScript API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios.

    ## AgoraProctorSDK [#agoraproctorsdk]

    \`AgoraProctorSDK\` is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios.

    ### config [#config]

    \`\`\`typescript
    static config(config: ConfigParams): void
    \`\`\`

    Configures the Agora Proctor SDK.

    **Parameters**

    | Parameter | Description                                                                                  |
    | :-------- | :------------------------------------------------------------------------------------------- |
    | \`config\`  | The configuration for the flexible classroom. See [ConfigParams](#configparams) for details. |

    ### launch [#launch]

    \`\`\`typescript
    static launch(dom: HTMLElement, option: LaunchOption): () => void
    \`\`\`

    Launches a flexible classroom in a proctoring scenario.

    **Parameters**

    | Parameter | Description                                                                                                             |
    | :-------- | :---------------------------------------------------------------------------------------------------------------------- |
    | \`dom\`     | The Document Object Model (DOM). See [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) for details. |
    | \`option\`  | The classroom launching configuration. See [LaunchOption](#launchoption) for details.                                   |

    **Return value**

    Returns a function used to destroy the scene and recycle resources.

    ## Type definitions [#type-definitions]

    ### ConfigParams [#configparams]

    The global SDK configuration, used in [AgoraProctorSDK.config](#config).

    \`\`\`typescript
    export type ConfigParams = {
      appId: string;
      region?: string;
    };
    \`\`\`

    | Property | Description                                                                                                                                                                                                                                                     |
    | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`appId\`  | The Agora App ID. See [Get the Agora App ID](/en/introduction/account#get-the-app-id-and-app-certificate).                                                                                                                                                      |
    | \`region\` | (Optional) The region where the classroom is. All clients must use the same region; otherwise, they may fail to communicate with each other. Supported regions are \`CN\` for Mainland China, \`NA\` for North America, \`EU\` for Europe, and \`AP\` for Asia Pacific. |

    ### LaunchOption [#launchoption]

    The classroom launching configuration used in [AgoraProctorSDK.launch](#launch).

    \`\`\`typescript
    export type LaunchOption = {
      userUuid: string;
      userName: string;
      roomUuid: string;
      roleType: EduRoleTypeEnum;
      roomType: EduRoomTypeEnum;
      roomName: string;
      listener: ListenerCallback;
      pretest: boolean;
      rtmToken: string;
      language: LanguageEnum;
      startTime?: number;
      duration: number;
      widgets?: { [key: string]: typeof AgoraWidgetBase };
      userFlexProperties?: { [key: string]: any };
      mediaOptions?: LaunchMediaOptions;
      latencyLevel?: 1 | 2;
      uiMode?: FcrMultiThemeMode;
      checkStudentScreenShareState?: boolean;
      rtcCloudProxyType?: AgoraCloudProxyType;
      rtmCloudProxyEnabled?: boolean;
    };
    \`\`\`

    | Property                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`userUuid\`                     | The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: \`"!"\`, \`"#"\`, \`"$"\`, \`"%"\`, \`"&"\`, \`"("\`, \`")"\`, \`"+"\`, \`"-"\`, \`":"\`, \`";"\`, \`"<"\`, \`"="\`, \`"."\`, \`">"\`, \`"?"\`, \`"@"\`, \`"["\`, \`"]"\`, \`"^"\`, \`"_"\`, \`"{"\`, \`"}"\`, \`"\\|"\`, \`"~"\`, and \`","\`. |
    | \`userName\`                     | The user name for display in the classroom. This value must be less than 64 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | \`roomUuid\`                     | The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed for \`userUuid\`.                                                                                                                                                                                                                                                                     |
    | \`roleType\`                     | The user's role in the classroom. See [EduRoleTypeEnum](#eduroletypeenum) for details.                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | \`roomType\`                     | The classroom type. See [EduRoomTypeEnum](#eduroomtypeenum) for details.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | \`roomName\`                     | The room name for display in the classroom. The string length must be less than 64 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`listener\`                     | The state of classroom launching: \`ready\` means the classroom is ready, and \`destroyed\` means the classroom has been destroyed.                                                                                                                                                                                                                                                                                                                                                                              |
    | \`pretest\`                      | Whether to enable the pre-class device test. If set to \`true\`, end users see a pop-up window to test their camera, microphone, and speaker before entering the classroom.                                                                                                                                                                                                                                                                                                                                    |
    | \`rtmToken\`                     | The Signaling token used for authentication. See [Secure authentication with tokens](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow).                                                                                                                                                                                                                                                                                                            |
    | \`language\`                     | The language on the classroom UI. See [LanguageEnum](#languageenum) for details.                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`startTime\`                    | (Optional) The start time (ms) of the class, determined by the first user joining the classroom.                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`duration\`                     | The duration (seconds) of the class, determined by the first user joining the classroom. The maximum value is 86,400. Agora recommends that you set this value to the actual class duration.                                                                                                                                                                                                                                                                                                                 |
    | \`widgets\`                      | (Optional) Extensive widgets that extend the classroom capabilities. See [Embed a custom plugin](/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/embed-custom-plugin).                                                                                                                                                                                                                                                                                                              |
    | \`userFlexProperties\`           | (Optional) User properties customized by the developer.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | \`mediaOptions\`                 | (Optional) Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. See [LaunchMediaOptions](#launchmediaoptions) for details.                                                                                                                                                                                                                                                                                       |
    | \`latencyLevel\`                 | (Optional) The latency level of an audience member. This property does not apply to cohosting users. \`1\` means low latency, where the latency from the sender to the receiver is between 1500 ms and 2000 ms. \`2\` means ultra-low latency, where the latency from the sender to the receiver is between 400 ms and 800 ms. The default value is \`2\`.                                                                                                                                                         |
    | \`uiMode\`                       | (Optional) The UI theme mode of the classroom. The default value is \`light\`, which means a light theme. See [FcrMultiThemeMode](#fcrmultithememode) for details.                                                                                                                                                                                                                                                                                                                                             |
    | \`checkStudentScreenShareState\` | (Optional) Whether to kick students out of the classroom immediately when they stop screen sharing.                                                                                                                                                                                                                                                                                                                                                                                                          |
    | \`rtcCloudProxyType\`            | (Optional) The cloud proxy type for the RTC service. See [AgoraCloudProxyType](#agoracloudproxytype).                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`rtmCloudProxyEnabled\`         | (Optional) Whether to enable cloud proxy for the Signaling service.                                                                                                                                                                                                                                                                                                                                                                                                                                          |

    ### LaunchMediaOptions [#launchmediaoptions]

    \`\`\`typescript
    export type LaunchMediaOptions = {
      cameraEncoderConfiguration?: EduVideoEncoderConfiguration;
      screenShareEncoderConfiguration?: EduVideoEncoderConfiguration;
      encryptionConfig?: MediaEncryptionConfig;
      channelProfile?: ChannelProfile;
      web?: {
        codec: SDK_CODEC;
        mode: SDK_MODE;
      };
    };
    \`\`\`

    Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. Set in [LaunchOption](#launchoption).

    | Property                          | Description                                                                                                                                                                                              |
    | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`cameraEncoderConfiguration\`      | (Optional) The encoding configuration of the video stream captured by the camera. See [EduVideoEncoderConfiguration](#eduvideoencoderconfiguration) for details.                                         |
    | \`screenShareEncoderConfiguration\` | (Optional) The encoding configuration of the screen sharing stream. See [EduVideoEncoderConfiguration](#eduvideoencoderconfiguration) for details.                                                       |
    | \`encryptionConfig\`                | (Optional) The media stream encryption configuration. See [MediaEncryptionConfig](#mediaencryptionconfig) for details.                                                                                   |
    | \`channelProfile\`                  | The channel profile configuration. See [ChannelProfile](#channelprofile) for details.                                                                                                                    |
    | \`web\`                             | The web configuration for browser codec format and channel mode. \`codec\` can be \`"vp9"\` for VP9 or \`"h264"\` for H.264. \`mode\` can be \`"rtc"\` for communication mode or \`"live"\` for live-streaming mode. |

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

    | Property    | Description                                                        |
    | :---------- | :----------------------------------------------------------------- |
    | \`width\`     | The width of the video frame in pixels. The default value is 320.  |
    | \`height\`    | The height of the video frame in pixels. The default value is 240. |
    | \`frameRate\` | The frame rate of the video in FPS. The default value is 15.       |
    | \`bitrate\`   | The bitrate of the video in Kbps. The default value is 200.        |

    ### MediaEncryptionConfig [#mediaencryptionconfig]

    \`\`\`typescript
    export declare interface MediaEncryptionConfig {
      mode: MediaEncryptionMode;
      key: string;
    }
    \`\`\`

    The media stream encryption configuration used in [LaunchMediaOptions](#launchmediaoptions).

    | Property | Description                                                                                                                                                  |
    | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`mode\`   | The encryption mode. See [MediaEncryptionMode](#mediaencryptionmode). Teachers and students in the same classroom must use the same encryption mode and key. |
    | \`key\`    | The encryption key.                                                                                                                                          |

    ### ChannelProfile [#channelprofile]

    \`\`\`typescript
    export enum ChannelProfile {
      Communication = 0,
      LiveBroadcasting = 1,
    }
    \`\`\`

    The channel profiles, used in [LaunchMediaOptions](#launchmediaoptions).

    | Value              | Description                                                                                   |
    | :----------------- | :-------------------------------------------------------------------------------------------- |
    | \`Communication\`    | Communication mode, commonly used for one-to-one or one-to-many classrooms.                   |
    | \`LiveBroadcasting\` | Live-streaming mode. This option costs less than communication mode and has a higher latency. |

    ### MediaEncryptionMode [#mediaencryptionmode]

    \`\`\`typescript
    export enum MediaEncryptionMode {
      AES_128_XTS = 1,
      AES_128_ECB = 2,
      AES_256_XTS = 3,
      AES_128_GCM = 5,
      AES_256_GCM = 6,
    }
    \`\`\`

    The media stream encryption mode, used in [MediaEncryptionConfig](#mediaencryptionconfig).

    | Value         | Description                            |
    | :------------ | :------------------------------------- |
    | \`AES_128_XTS\` | \`1\`: 128-bit AES encryption, XTS mode. |
    | \`AES_128_ECB\` | \`2\`: 128-bit AES encryption, ECB mode. |
    | \`AES_256_XTS\` | \`3\`: 256-bit AES encryption, XTS mode. |
    | \`AES_128_GCM\` | \`5\`: 128-bit AES encryption, GCM mode. |
    | \`AES_256_GCM\` | \`6\`: 256-bit AES encryption, GCM mode. |

    ### FcrMultiThemeMode [#fcrmultithememode]

    \`\`\`typescript
    export enum FcrMultiThemeMode {
      light = 'light',
      dark = 'dark',
    }
    \`\`\`

    The UI theme mode of the classroom, used in [LaunchOption](#launchoption).

    | Value   | Description  |
    | :------ | :----------- |
    | \`light\` | Light theme. |
    | \`dark\`  | Dark theme.  |

    ### EduRoleTypeEnum [#eduroletypeenum]

    \`\`\`typescript
    export enum EduRoleTypeEnum {
      teacher = 1,
      student = 2,
    }
    \`\`\`

    The role of the user in the classroom, used in [LaunchOption](#launchoption).

    | Value     | Description                 |
    | :-------- | :-------------------------- |
    | \`teacher\` | \`1\`: Teacher or proctor.    |
    | \`student\` | \`2\`: Student or exam taker. |

    ### EduRoomTypeEnum [#eduroomtypeenum]

    \`\`\`typescript
    export enum EduRoomTypeEnum {
      RoomProctor = 6,
    }
    \`\`\`

    The classroom type, used in [LaunchOption](#launchoption).

    | Value         | Description                                                                               |
    | :------------ | :---------------------------------------------------------------------------------------- |
    | \`RoomProctor\` | \`6\`: A proctored exam. In proctoring scenarios, \`roomType\` can only be set to this value. |

    ### LanguageEnum [#languageenum]

    \`\`\`typescript
    export type LanguageEnum = 'en' | 'zh';
    \`\`\`

    The language on the UI, used in [LaunchOption](#launchoption).

    | Value  | Description |
    | :----- | :---------- |
    | \`"en"\` | English.    |
    | \`"zh"\` | Chinese.    |

    ### DeviceTypeEnum [#devicetypeenum]

    \`\`\`typescript
    export enum DeviceTypeEnum {
      Main = 'main',
      Sub = 'sub',
    }
    \`\`\`

    Device types.

    For more about main devices and secondary devices, see [Proctor exams online](/en/realtime-media/flexible-classroom/build/enable-teaching-features/proctor-exams-online).

    | Value  | Description       |
    | :----- | :---------------- |
    | \`Main\` | Main device.      |
    | \`Sub\`  | Secondary device. |

    ### AgoraCloudProxyType [#agoracloudproxytype]

    The cloud proxy type. Set in [LaunchOption](#launchoption).

    | Value       | Description                                                                                                                                                                                                                                                                                       |
    | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`Automatic\` | \`0\`: Automatic mode. In this mode, the SDK first attempts to connect directly to Agora SDRTN. If the attempt fails, the SDK automatically falls back to sending media over TLS 443. If you are unsure whether the end user's network environment has a firewall, \`Automatic\` mode is recommended. |
    | \`UDP\`       | \`1\`: UDP.                                                                                                                                                                                                                                                                                         |
    | \`TCP\`       | \`2\`: TCP.                                                                                                                                                                                                                                                                                         |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    This TypeScript API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios.

    ## AgoraProctorSDK [#agoraproctorsdk-1]

    \`AgoraProctorSDK\` is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios.

    ### config [#config-1]

    \`\`\`typescript
    static config(config: ConfigParams): void
    \`\`\`

    Configures the Agora Proctor SDK.

    **Parameters**

    | Parameter | Description                                                                                  |
    | :-------- | :------------------------------------------------------------------------------------------- |
    | \`config\`  | The configuration for the flexible classroom. See [ConfigParams](#configparams) for details. |

    ### launch [#launch-1]

    \`\`\`typescript
    static launch(dom: HTMLElement, option: LaunchOption): () => void
    \`\`\`

    Launches a flexible classroom in a proctoring scenario.

    **Parameters**

    | Parameter | Description                                                                                                             |
    | :-------- | :---------------------------------------------------------------------------------------------------------------------- |
    | \`dom\`     | The Document Object Model (DOM). See [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) for details. |
    | \`option\`  | The classroom launching configuration. See [LaunchOption](#launchoption) for details.                                   |

    **Return value**

    Returns a function used to destroy the scene and recycle resources.

    ## Type definitions [#type-definitions-1]

    ### ConfigParams [#configparams-1]

    The global SDK configuration, used in [AgoraProctorSDK.config](#config).

    \`\`\`typescript
    export type ConfigParams = {
      appId: string;
      region?: string;
    };
    \`\`\`

    | Property | Description                                                                                                                                                                                                                                                     |
    | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`appId\`  | The Agora App ID. See [Get the Agora App ID](/en/introduction/account#get-the-app-id-and-app-certificate).                                                                                                                                                      |
    | \`region\` | (Optional) The region where the classroom is. All clients must use the same region; otherwise, they may fail to communicate with each other. Supported regions are \`CN\` for Mainland China, \`NA\` for North America, \`EU\` for Europe, and \`AP\` for Asia Pacific. |

    ### LaunchOption [#launchoption-1]

    The classroom launching configuration used in [AgoraProctorSDK.launch](#launch).

    \`\`\`typescript
    export type LaunchOption = {
      userUuid: string;
      userName: string;
      roomUuid: string;
      roleType: EduRoleTypeEnum;
      roomType: EduRoomTypeEnum;
      roomName: string;
      listener: ListenerCallback;
      pretest: boolean;
      rtmToken: string;
      language: LanguageEnum;
      startTime?: number;
      duration: number;
      widgets?: { [key: string]: typeof AgoraWidgetBase };
      userFlexProperties?: { [key: string]: any };
      mediaOptions?: LaunchMediaOptions;
      latencyLevel?: 1 | 2;
      uiMode?: FcrMultiThemeMode;
      checkStudentScreenShareState?: boolean;
      rtcCloudProxyType?: AgoraCloudProxyType;
      rtmCloudProxyEnabled?: boolean;
    };
    \`\`\`

    | Property                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`userUuid\`                     | The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: \`"!"\`, \`"#"\`, \`"$"\`, \`"%"\`, \`"&"\`, \`"("\`, \`")"\`, \`"+"\`, \`"-"\`, \`":"\`, \`";"\`, \`"<"\`, \`"="\`, \`"."\`, \`">"\`, \`"?"\`, \`"@"\`, \`"["\`, \`"]"\`, \`"^"\`, \`"_"\`, \`"{"\`, \`"}"\`, \`"\\|"\`, \`"~"\`, and \`","\`. |
    | \`userName\`                     | The user name for display in the classroom. This value must be less than 64 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | \`roomUuid\`                     | The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed for \`userUuid\`.                                                                                                                                                                                                                                                                     |
    | \`roleType\`                     | The user's role in the classroom. See [EduRoleTypeEnum](#eduroletypeenum) for details.                                                                                                                                                                                                                                                                                                                                                                                                                       |
    | \`roomType\`                     | The classroom type. See [EduRoomTypeEnum](#eduroomtypeenum) for details.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
    | \`roomName\`                     | The room name for display in the classroom. The string length must be less than 64 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | \`listener\`                     | The state of classroom launching: \`ready\` means the classroom is ready, and \`destroyed\` means the classroom has been destroyed.                                                                                                                                                                                                                                                                                                                                                                              |
    | \`pretest\`                      | Whether to enable the pre-class device test. If set to \`true\`, end users see a pop-up window to test their camera, microphone, and speaker before entering the classroom.                                                                                                                                                                                                                                                                                                                                    |
    | \`rtmToken\`                     | The Signaling token used for authentication. See [Secure authentication with tokens](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow).                                                                                                                                                                                                                                                                                                            |
    | \`language\`                     | The language on the classroom UI. See [LanguageEnum](#languageenum) for details.                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`startTime\`                    | (Optional) The start time (ms) of the class, determined by the first user joining the classroom.                                                                                                                                                                                                                                                                                                                                                                                                             |
    | \`duration\`                     | The duration (seconds) of the class, determined by the first user joining the classroom. The maximum value is 86,400. Agora recommends that you set this value to the actual class duration.                                                                                                                                                                                                                                                                                                                 |
    | \`widgets\`                      | (Optional) Extensive widgets that extend the classroom capabilities. See [Embed a custom plugin](/en/realtime-media/flexible-classroom/build/customize-the-ui-and-plugins/embed-custom-plugin).                                                                                                                                                                                                                                                                                                              |
    | \`userFlexProperties\`           | (Optional) User properties customized by the developer.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | \`mediaOptions\`                 | (Optional) Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. See [LaunchMediaOptions](#launchmediaoptions) for details.                                                                                                                                                                                                                                                                                       |
    | \`latencyLevel\`                 | (Optional) The latency level of an audience member. This property does not apply to cohosting users. \`1\` means low latency, where the latency from the sender to the receiver is between 1500 ms and 2000 ms. \`2\` means ultra-low latency, where the latency from the sender to the receiver is between 400 ms and 800 ms. The default value is \`2\`.                                                                                                                                                         |
    | \`uiMode\`                       | (Optional) The UI theme mode of the classroom. The default value is \`light\`, which means a light theme. See [FcrMultiThemeMode](#fcrmultithememode) for details.                                                                                                                                                                                                                                                                                                                                             |
    | \`checkStudentScreenShareState\` | (Optional) Whether to kick students out of the classroom immediately when they stop screen sharing.                                                                                                                                                                                                                                                                                                                                                                                                          |
    | \`rtcCloudProxyType\`            | (Optional) The cloud proxy type for the RTC service. See [AgoraCloudProxyType](#agoracloudproxytype).                                                                                                                                                                                                                                                                                                                                                                                                        |
    | \`rtmCloudProxyEnabled\`         | (Optional) Whether to enable cloud proxy for the Signaling service.                                                                                                                                                                                                                                                                                                                                                                                                                                          |

    ### LaunchMediaOptions [#launchmediaoptions-1]

    \`\`\`typescript
    export type LaunchMediaOptions = {
      cameraEncoderConfiguration?: EduVideoEncoderConfiguration;
      screenShareEncoderConfiguration?: EduVideoEncoderConfiguration;
      encryptionConfig?: MediaEncryptionConfig;
      channelProfile?: ChannelProfile;
      web?: {
        codec: SDK_CODEC;
        mode: SDK_MODE;
      };
    };
    \`\`\`

    Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. Set in [LaunchOption](#launchoption).

    | Property                          | Description                                                                                                                                                                                              |
    | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`cameraEncoderConfiguration\`      | (Optional) The encoding configuration of the video stream captured by the camera. See [EduVideoEncoderConfiguration](#eduvideoencoderconfiguration) for details.                                         |
    | \`screenShareEncoderConfiguration\` | (Optional) The encoding configuration of the screen sharing stream. See [EduVideoEncoderConfiguration](#eduvideoencoderconfiguration) for details.                                                       |
    | \`encryptionConfig\`                | (Optional) The media stream encryption configuration. See [MediaEncryptionConfig](#mediaencryptionconfig) for details.                                                                                   |
    | \`channelProfile\`                  | The channel profile configuration. See [ChannelProfile](#channelprofile) for details.                                                                                                                    |
    | \`web\`                             | The web configuration for browser codec format and channel mode. \`codec\` can be \`"vp9"\` for VP9 or \`"h264"\` for H.264. \`mode\` can be \`"rtc"\` for communication mode or \`"live"\` for live-streaming mode. |

    ### EduVideoEncoderConfiguration [#eduvideoencoderconfiguration-1]

    \`\`\`typescript
    export interface EduVideoEncoderConfiguration {
      width: number;
      height: number;
      frameRate: number;
      bitrate: number;
    }
    \`\`\`

    The video encoder configuration.

    | Property    | Description                                                        |
    | :---------- | :----------------------------------------------------------------- |
    | \`width\`     | The width of the video frame in pixels. The default value is 320.  |
    | \`height\`    | The height of the video frame in pixels. The default value is 240. |
    | \`frameRate\` | The frame rate of the video in FPS. The default value is 15.       |
    | \`bitrate\`   | The bitrate of the video in Kbps. The default value is 200.        |

    ### MediaEncryptionConfig [#mediaencryptionconfig-1]

    \`\`\`typescript
    export declare interface MediaEncryptionConfig {
      mode: MediaEncryptionMode;
      key: string;
    }
    \`\`\`

    The media stream encryption configuration used in [LaunchMediaOptions](#launchmediaoptions).

    | Property | Description                                                                                                                                                  |
    | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`mode\`   | The encryption mode. See [MediaEncryptionMode](#mediaencryptionmode). Teachers and students in the same classroom must use the same encryption mode and key. |
    | \`key\`    | The encryption key.                                                                                                                                          |

    ### ChannelProfile [#channelprofile-1]

    \`\`\`typescript
    export enum ChannelProfile {
      Communication = 0,
      LiveBroadcasting = 1,
    }
    \`\`\`

    The channel profiles, used in [LaunchMediaOptions](#launchmediaoptions).

    | Value              | Description                                                                                   |
    | :----------------- | :-------------------------------------------------------------------------------------------- |
    | \`Communication\`    | Communication mode, commonly used for one-to-one or one-to-many classrooms.                   |
    | \`LiveBroadcasting\` | Live-streaming mode. This option costs less than communication mode and has a higher latency. |

    ### MediaEncryptionMode [#mediaencryptionmode-1]

    \`\`\`typescript
    export enum MediaEncryptionMode {
      AES_128_XTS = 1,
      AES_128_ECB = 2,
      AES_256_XTS = 3,
      AES_128_GCM = 5,
      AES_256_GCM = 6,
    }
    \`\`\`

    The media stream encryption mode, used in [MediaEncryptionConfig](#mediaencryptionconfig).

    | Value         | Description                            |
    | :------------ | :------------------------------------- |
    | \`AES_128_XTS\` | \`1\`: 128-bit AES encryption, XTS mode. |
    | \`AES_128_ECB\` | \`2\`: 128-bit AES encryption, ECB mode. |
    | \`AES_256_XTS\` | \`3\`: 256-bit AES encryption, XTS mode. |
    | \`AES_128_GCM\` | \`5\`: 128-bit AES encryption, GCM mode. |
    | \`AES_256_GCM\` | \`6\`: 256-bit AES encryption, GCM mode. |

    ### FcrMultiThemeMode [#fcrmultithememode-1]

    \`\`\`typescript
    export enum FcrMultiThemeMode {
      light = 'light',
      dark = 'dark',
    }
    \`\`\`

    The UI theme mode of the classroom, used in [LaunchOption](#launchoption).

    | Value   | Description  |
    | :------ | :----------- |
    | \`light\` | Light theme. |
    | \`dark\`  | Dark theme.  |

    ### EduRoleTypeEnum [#eduroletypeenum-1]

    \`\`\`typescript
    export enum EduRoleTypeEnum {
      teacher = 1,
      student = 2,
    }
    \`\`\`

    The role of the user in the classroom, used in [LaunchOption](#launchoption).

    | Value     | Description                 |
    | :-------- | :-------------------------- |
    | \`teacher\` | \`1\`: Teacher or proctor.    |
    | \`student\` | \`2\`: Student or exam taker. |

    ### EduRoomTypeEnum [#eduroomtypeenum-1]

    \`\`\`typescript
    export enum EduRoomTypeEnum {
      RoomProctor = 6,
    }
    \`\`\`

    The classroom type, used in [LaunchOption](#launchoption).

    | Value         | Description                                                                               |
    | :------------ | :---------------------------------------------------------------------------------------- |
    | \`RoomProctor\` | \`6\`: A proctored exam. In proctoring scenarios, \`roomType\` can only be set to this value. |

    ### LanguageEnum [#languageenum-1]

    \`\`\`typescript
    export type LanguageEnum = 'en' | 'zh';
    \`\`\`

    The language on the UI, used in [LaunchOption](#launchoption).

    | Value  | Description |
    | :----- | :---------- |
    | \`"en"\` | English.    |
    | \`"zh"\` | Chinese.    |

    ### DeviceTypeEnum [#devicetypeenum-1]

    \`\`\`typescript
    export enum DeviceTypeEnum {
      Main = 'main',
      Sub = 'sub',
    }
    \`\`\`

    Device types.

    For more about main devices and secondary devices, see [Proctor exams online](/en/realtime-media/flexible-classroom/build/enable-teaching-features/proctor-exams-online).

    | Value  | Description       |
    | :----- | :---------------- |
    | \`Main\` | Main device.      |
    | \`Sub\`  | Secondary device. |

    ### AgoraCloudProxyType [#agoracloudproxytype-1]

    The cloud proxy type. Set in [LaunchOption](#launchoption).

    | Value       | Description                                                                                                                                                                                                                                                                                       |
    | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`Automatic\` | \`0\`: Automatic mode. In this mode, the SDK first attempts to connect directly to Agora SDRTN. If the attempt fails, the SDK automatically falls back to sending media over TLS 443. If you are unsure whether the end user's network environment has a firewall, \`Automatic\` mode is recommended. |
    | \`UDP\`       | \`1\`: UDP.                                                                                                                                                                                                                                                                                         |
    | \`TCP\`       | \`2\`: TCP.                                                                                                                                                                                                                                                                                         |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    This Swift API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios on iOS.

    ## AgoraProctorSDK [#agoraproctorsdk-2]

    \`AgoraProctorSDK\` is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios.

    ### init [#init]

    \`\`\`swift
    - (instancetype)init:(AgoraProctorLaunchConfig *)config
                delegate:(id<AgoraProctorSDKDelegate> _Nullable)delegate;
    \`\`\`

    Initializes the \`AgoraProctorSDK\` instance.

    **Parameters**

    | Parameter  | Description                                                                                                      |
    | :--------- | :--------------------------------------------------------------------------------------------------------------- |
    | \`config\`   | Configuration for a flexible classroom. See [AgoraProctorLaunchConfig](#agoraproctorlaunchconfig).               |
    | \`delegate\` | (Optional) The event handler for the Agora Proctor SDK. See [AgoraProctorSDKDelegate](#agoraproctorsdkdelegate). |

    ### launch [#launch-2]

    \`\`\`swift
    - (void)launch:(void (^)(void))success
           failure:(void (^)(NSError *))failure;
    \`\`\`

    Launches a flexible classroom in a proctoring scenario.

    **Parameters**

    | Parameter | Description                                                        |
    | :-------- | :----------------------------------------------------------------- |
    | \`success\` | The callback triggered by a successful launch.                     |
    | \`failure\` | The callback triggered by a failed launch, which returns an error. |

    ### version [#version]

    \`\`\`swift
    - (NSString *)version;
    \`\`\`

    Gets the SDK version.

    **Returns**

    The SDK version.

    ## AgoraProctorSDKDelegate [#agoraproctorsdkdelegate]

    \`AgoraProctorSDKDelegate\` reports events related to SDK status to your app.

    ### didExit [#didexit]

    \`\`\`swift
    - (void)proctorSDK:(AgoraProctorSDK *)proctor
               didExit:(AgoraProctorExitReason)reason;
    \`\`\`

    This callback is triggered when a user exits or is kicked from the room.

    | Parameter | Description                                                                     |
    | :-------- | :------------------------------------------------------------------------------ |
    | \`reason\`  | The reason for the exit. See [AgoraProctorExitReason](#agoraproctorexitreason). |

    ## Objects [#objects]

    ### AgoraProctorLaunchConfig [#agoraproctorlaunchconfig]

    \`\`\`swift
    @interface AgoraProctorLaunchConfig : NSObject

    @property (nonatomic, copy) NSString *userName;
    @property (nonatomic, copy) NSString *userUuid;
    @property (nonatomic, assign) AgoraProctorUserRole userRole;
    @property (nonatomic, copy) NSString *roomName;
    @property (nonatomic, copy) NSString *roomUuid;
    @property (nonatomic, copy) NSString *appId;
    @property (nonatomic, copy) NSString *token;
    @property (nonatomic, assign) AgoraProctorRegion region;
    @property (nonatomic, strong, nullable) AgoraProctorMediaOptions *mediaOptions;
    @property (nonatomic, copy, nullable) NSDictionary<NSString *, id> *userProperties;
    @property (nonatomic, strong) NSDictionary<NSString *, AgoraWidgetConfig *> *widgets;

    - (instancetype)initWithUserName:(NSString *)userName
                            userUuid:(NSString *)userUuid
                            userRole:(AgoraProctorUserRole)userRole
                            roomName:(NSString *)roomName
                            roomUuid:(NSString *)roomUuid
                               appId:(NSString *)appId
                               token:(NSString *)token;

    - (instancetype)initWithUserName:(NSString *)userName
                            userUuid:(NSString *)userUuid
                            userRole:(AgoraProctorUserRole)userRole
                            roomName:(NSString *)roomName
                            roomUuid:(NSString *)roomUuid
                               appId:(NSString *)appId
                               token:(NSString *)token
                              region:(AgoraProctorRegion)region
                        mediaOptions:(AgoraProctorMediaOptions * _Nullable)mediaOptions
                      userProperties:(NSDictionary * _Nullable)userProperties;
    \`\`\`

    The classroom launching configuration used in [launch](#launch).

    | Property         | Description                                                                                                                                                                                                                                                                                                                                             |
    | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | \`userName\`       | The user name for display in the classroom. This value must be less than 64 bytes.                                                                                                                                                                                                                                                                      |
    | \`userUuid\`       | The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. The string length must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed in the Web \`userUuid\` description. |
    | \`userRole\`       | The user's role in the classroom. See [AgoraProctorUserRole](#agoraproctoruserrole).                                                                                                                                                                                                                                                                    |
    | \`roomName\`       | The room name for display in the classroom. The string length must be less than 64 bytes.                                                                                                                                                                                                                                                               |
    | \`roomUuid\`       | The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed in the Web \`userUuid\` description.                                                                                             |
    | \`appId\`          | The Agora App ID. See [Get the Agora App ID](/en/introduction/account#get-the-app-id-and-app-certificate).                                                                                                                                                                                                                                              |
    | \`token\`          | The Signaling token used for authentication. See [Secure authentication with tokens](/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow).                                                                                                                                                       |
    | \`region\`         | The region where the classrooms are. All clients must use the same region to communicate with each other. Supported regions are \`CN\` for Mainland China, \`NA\` for North America, \`EU\` for Europe, and \`AP\` for Asia Pacific.                                                                                                                            |
    | \`mediaOptions\`   | Media options, including the media stream encryption configuration. See [AgoraProctorMediaOptions](#agoraproctormediaoptions).                                                                                                                                                                                                                          |
    | \`userProperties\` | User properties customized by the developer.                                                                                                                                                                                                                                                                                                            |
    | \`widgets\`        | Pass in \`widgetId\` and \`AgoraWidgetConfig\`.                                                                                                                                                                                                                                                                                                             |

    ### AgoraProctorMediaOptions [#agoraproctormediaoptions]

    \`\`\`swift
    @interface AgoraProctorMediaOptions : NSObject
    @property (nonatomic, strong, nullable) AgoraProctorMediaEncryptionConfig *encryptionConfig;
    @property (nonatomic, strong, nullable) AgoraProctorVideoEncoderConfig *videoEncoderConfig;
    @property (nonatomic, assign) AgoraProctorLatencyLevel latencyLevel;

    - (instancetype)initWithEncryptionConfig:(AgoraProctorMediaEncryptionConfig * _Nullable)encryptionConfig
                          videoEncoderConfig:(AgoraProctorVideoEncoderConfig * _Nullable)videoEncoderConfig
                                latencyLevel:(AgoraProctorLatencyLevel)latencyLevel;
    \`\`\`

    Media options. Set in [AgoraProctorLaunchConfig](#agoraproctorlaunchconfig).

    | Property             | Description                                                                                                                                                                                               |
    | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`encryptionConfig\`   | (Optional) The media stream encryption configuration. See [AgoraProctorMediaEncryptionConfig](#agoraproctormediaencryptionconfig).                                                                        |
    | \`videoEncoderConfig\` | (Optional) The video encoder configuration. See [AgoraProctorVideoEncoderConfig](#agoraproctorvideoencoderconfig).                                                                                        |
    | \`latencyLevel\`       | The latency level of an audience member. This property does not apply to cohosting users. The default value is \`low\`, which means low latency. See [AgoraProctorLatencyLevel](#agoraproctorlatencylevel). |

    ### AgoraProctorMediaEncryptionConfig [#agoraproctormediaencryptionconfig]

    \`\`\`swift
    @interface AgoraProctorMediaEncryptionConfig : NSObject
    @property (nonatomic, assign) AgoraProctorMediaEncryptionMode mode;
    @property (nonatomic, copy) NSString *key;

    - (instancetype)initWithMode:(AgoraProctorMediaEncryptionMode)mode
                             key:(NSString *)key;
    \`\`\`

    The media stream encryption configuration used in [AgoraProctorMediaOptions](#agoraproctormediaoptions).

    | Property | Description                                                                                   |
    | :------- | :-------------------------------------------------------------------------------------------- |
    | \`mode\`   | The encryption mode. See [AgoraProctorMediaEncryptionMode](#agoraproctormediaencryptionmode). |
    | \`key\`    | The encryption key.                                                                           |

    ### AgoraProctorVideoEncoderConfig [#agoraproctorvideoencoderconfig]

    \`\`\`swift
    @interface AgoraProctorVideoEncoderConfig : NSObject
    @property (nonatomic, assign) NSUInteger dimensionWidth;
    @property (nonatomic, assign) NSUInteger dimensionHeight;
    @property (nonatomic, assign) NSUInteger frameRate;
    @property (nonatomic, assign) NSUInteger bitRate;
    @property (nonatomic, assign) AgoraProctorMirrorMode mirrorMode;

    - (instancetype)initWithDimensionWidth:(NSUInteger)dimensionWidth
                           dimensionHeight:(NSUInteger)dimensionHeight
                                 frameRate:(NSUInteger)frameRate
                                   bitRate:(NSUInteger)bitRate
                                mirrorMode:(AgoraProctorMirrorMode)mirrorMode;
    \`\`\`

    The video encoder configuration used in [AgoraProctorMediaOptions](#agoraproctormediaoptions).

    | Property          | Description                                                                                                                                                                             |
    | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`dimensionWidth\`  | The width of the video frame in pixels. The default value is 320.                                                                                                                       |
    | \`dimensionHeight\` | The height of the video frame in pixels. The default value is 240.                                                                                                                      |
    | \`frameRate\`       | The frame rate of the video in FPS. The default value is 15.                                                                                                                            |
    | \`bitRate\`         | The bitrate of the video in Kbps. The default value is 200.                                                                                                                             |
    | \`mirrorMode\`      | Whether video mirror mode is enabled. The default value is \`AgoraProctorMirrorModeDisable\`, which means mirror mode is disabled. See [AgoraProctorMirrorMode](#agoraproctormirrormode). |

    ## Enums [#enums]

    ### AgoraProctorMirrorMode [#agoraproctormirrormode]

    Whether to enable mirror mode, used in [AgoraProctorVideoEncoderConfig](#agoraproctorvideoencoderconfig).

    | Value      | Description               |
    | :--------- | :------------------------ |
    | \`disabled\` | \`0\`: Disable mirror mode. |
    | \`enabled\`  | \`1\`: Enable mirror mode.  |

    ### AgoraProctorRegion [#agoraproctorregion]

    The region where classrooms are, used in [AgoraProctorLaunchConfig](#agoraproctorlaunchconfig).

    | Value | Description          |
    | :---- | :------------------- |
    | \`CN\`  | \`0\`: Mainland China. |
    | \`NA\`  | \`1\`: North America.  |
    | \`EU\`  | \`2\`: Europe.         |
    | \`AP\`  | \`3\`: Asia Pacific.   |

    ### AgoraProctorExitReason [#agoraproctorexitreason]

    The reason for exiting the Agora Proctor SDK, used in the [didExit](#didexit) callback.

    | Value     | Description                     |
    | :-------- | :------------------------------ |
    | \`normal\`  | User exits the room normally.   |
    | \`kickOut\` | User is kicked out of the room. |

    ### AgoraProctorLatencyLevel [#agoraproctorlatencylevel]

    The latency level of an audience member, used in [AgoraProctorLaunchConfig](#agoraproctorlaunchconfig).

    | Value      | Description                                                                                       |
    | :--------- | :------------------------------------------------------------------------------------------------ |
    | \`low\`      | \`1\`: Low latency. The latency from the sender to the receiver is between 1500 ms and 2000 ms.     |
    | \`ultraLow\` | \`2\`: Ultra-low latency. The latency from the sender to the receiver is between 400 ms and 800 ms. |

    ### AgoraProctorUserRole [#agoraproctoruserrole]

    The user role in the classroom, used in [AgoraProctorLaunchConfig](#agoraproctorlaunchconfig).

    | Value       | Description           |
    | :---------- | :-------------------- |
    | \`invalid\`   | \`0\`: Recording robot. |
    | \`teacher\`   | \`1\`: Teacher.         |
    | \`student\`   | \`2\`: Student.         |
    | \`assistant\` | \`3\`: Assistant.       |
    | \`observer\`  | \`4\`: Observer.        |

    ### AgoraProctorMediaEncryptionMode [#agoraproctormediaencryptionmode]

    The media stream encryption mode, used in [AgoraProctorMediaEncryptionConfig](#agoraproctormediaencryptionconfig).

    | Value        | Description                                                                                                                      |
    | :----------- | :------------------------------------------------------------------------------------------------------------------------------- |
    | \`None\`       | \`0\`: No encryption.                                                                                                              |
    | \`AES128XTS\`  | \`1\`: 128-bit AES encryption, XTS mode.                                                                                           |
    | \`AES128ECB\`  | \`2\`: 128-bit AES encryption, ECB mode.                                                                                           |
    | \`AES256XTS\`  | \`3\`: 256-bit AES encryption, XTS mode.                                                                                           |
    | \`SM4128ECB\`  | \`4\`: 128-bit SM4 encryption, ECB mode.                                                                                           |
    | \`AES128GCM\`  | \`5\`: 128-bit AES encryption, GCM mode.                                                                                           |
    | \`AES256GCM\`  | \`6\`: 256-bit AES encryption, GCM mode.                                                                                           |
    | \`AES128GCM2\` | \`7\`: Enhanced 128-bit AES encryption, GCM mode. Compared with \`AES128GCM\`, this mode is more secure and requires setting a salt. |
    | \`AES256GCM2\` | \`8\`: Enhanced 256-bit AES encryption, GCM mode. Compared with \`AES256GCM\`, this mode is more secure and requires setting a salt. |

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Proctor SDK is currently not available for Android."
  }, {
    heading: undefined,
    content: "This TypeScript API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios."
  }, {
    heading: "agoraproctorsdk",
    content: "`AgoraProctorSDK` is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios."
  }, {
    heading: "config",
    content: "Configures the Agora Proctor SDK."
  }, {
    heading: "config",
    content: "**Parameters**"
  }, {
    heading: "config",
    content: "Parameter"
  }, {
    heading: "config",
    content: "Description"
  }, {
    heading: "config",
    content: "`config`"
  }, {
    heading: "config",
    content: "The configuration for the flexible classroom. See ConfigParams for details."
  }, {
    heading: "launch",
    content: "Launches a flexible classroom in a proctoring scenario."
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
    content: "The Document Object Model (DOM). See Document for details."
  }, {
    heading: "launch",
    content: "`option`"
  }, {
    heading: "launch",
    content: "The classroom launching configuration. See LaunchOption for details."
  }, {
    heading: "launch",
    content: "**Return value**"
  }, {
    heading: "launch",
    content: "Returns a function used to destroy the scene and recycle resources."
  }, {
    heading: "configparams",
    content: "The global SDK configuration, used in AgoraProctorSDK.config."
  }, {
    heading: "configparams",
    content: "Property"
  }, {
    heading: "configparams",
    content: "Description"
  }, {
    heading: "configparams",
    content: "`appId`"
  }, {
    heading: "configparams",
    content: "The Agora App ID. See Get the Agora App ID."
  }, {
    heading: "configparams",
    content: "`region`"
  }, {
    heading: "configparams",
    content: "(Optional) The region where the classroom is. All clients must use the same region; otherwise, they may fail to communicate with each other. Supported regions are `CN` for Mainland China, `NA` for North America, `EU` for Europe, and `AP` for Asia Pacific."
  }, {
    heading: "launchoption",
    content: "The classroom launching configuration used in AgoraProctorSDK.launch."
  }, {
    heading: "launchoption",
    content: "Property"
  }, {
    heading: "launchoption",
    content: "Description"
  }, {
    heading: "launchoption",
    content: "`userUuid`"
  }, {
    heading: "launchoption",
    content: 'The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: `"!"`, `"#"`, `"$"`, `"%"`, `"&"`, `"("`, `")"`, `"+"`, `"-"`, `":"`, `";"`, `"<"`, `"="`, `"."`, `">"`, `"?"`, `"@"`, `"["`, `"]"`, `"^"`, `"_"`, `"{"`, `"}"`, `"\\|"`, `"~"`, and `","`.'
  }, {
    heading: "launchoption",
    content: "`userName`"
  }, {
    heading: "launchoption",
    content: "The user name for display in the classroom. This value must be less than 64 bytes."
  }, {
    heading: "launchoption",
    content: "`roomUuid`"
  }, {
    heading: "launchoption",
    content: "The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed for `userUuid`."
  }, {
    heading: "launchoption",
    content: "`roleType`"
  }, {
    heading: "launchoption",
    content: "The user's role in the classroom. See EduRoleTypeEnum for details."
  }, {
    heading: "launchoption",
    content: "`roomType`"
  }, {
    heading: "launchoption",
    content: "The classroom type. See EduRoomTypeEnum for details."
  }, {
    heading: "launchoption",
    content: "`roomName`"
  }, {
    heading: "launchoption",
    content: "The room name for display in the classroom. The string length must be less than 64 bytes."
  }, {
    heading: "launchoption",
    content: "`listener`"
  }, {
    heading: "launchoption",
    content: "The state of classroom launching: `ready` means the classroom is ready, and `destroyed` means the classroom has been destroyed."
  }, {
    heading: "launchoption",
    content: "`pretest`"
  }, {
    heading: "launchoption",
    content: "Whether to enable the pre-class device test. If set to `true`, end users see a pop-up window to test their camera, microphone, and speaker before entering the classroom."
  }, {
    heading: "launchoption",
    content: "`rtmToken`"
  }, {
    heading: "launchoption",
    content: "The Signaling token used for authentication. See Secure authentication with tokens."
  }, {
    heading: "launchoption",
    content: "`language`"
  }, {
    heading: "launchoption",
    content: "The language on the classroom UI. See LanguageEnum for details."
  }, {
    heading: "launchoption",
    content: "`startTime`"
  }, {
    heading: "launchoption",
    content: "(Optional) The start time (ms) of the class, determined by the first user joining the classroom."
  }, {
    heading: "launchoption",
    content: "`duration`"
  }, {
    heading: "launchoption",
    content: "The duration (seconds) of the class, determined by the first user joining the classroom. The maximum value is 86,400. Agora recommends that you set this value to the actual class duration."
  }, {
    heading: "launchoption",
    content: "`widgets`"
  }, {
    heading: "launchoption",
    content: "(Optional) Extensive widgets that extend the classroom capabilities. See Embed a custom plugin."
  }, {
    heading: "launchoption",
    content: "`userFlexProperties`"
  }, {
    heading: "launchoption",
    content: "(Optional) User properties customized by the developer."
  }, {
    heading: "launchoption",
    content: "`mediaOptions`"
  }, {
    heading: "launchoption",
    content: "(Optional) Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. See LaunchMediaOptions for details."
  }, {
    heading: "launchoption",
    content: "`latencyLevel`"
  }, {
    heading: "launchoption",
    content: "(Optional) The latency level of an audience member. This property does not apply to cohosting users. `1` means low latency, where the latency from the sender to the receiver is between 1500 ms and 2000 ms. `2` means ultra-low latency, where the latency from the sender to the receiver is between 400 ms and 800 ms. The default value is `2`."
  }, {
    heading: "launchoption",
    content: "`uiMode`"
  }, {
    heading: "launchoption",
    content: "(Optional) The UI theme mode of the classroom. The default value is `light`, which means a light theme. See FcrMultiThemeMode for details."
  }, {
    heading: "launchoption",
    content: "`checkStudentScreenShareState`"
  }, {
    heading: "launchoption",
    content: "(Optional) Whether to kick students out of the classroom immediately when they stop screen sharing."
  }, {
    heading: "launchoption",
    content: "`rtcCloudProxyType`"
  }, {
    heading: "launchoption",
    content: "(Optional) The cloud proxy type for the RTC service. See AgoraCloudProxyType."
  }, {
    heading: "launchoption",
    content: "`rtmCloudProxyEnabled`"
  }, {
    heading: "launchoption",
    content: "(Optional) Whether to enable cloud proxy for the Signaling service."
  }, {
    heading: "launchmediaoptions",
    content: "Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. Set in LaunchOption."
  }, {
    heading: "launchmediaoptions",
    content: "Property"
  }, {
    heading: "launchmediaoptions",
    content: "Description"
  }, {
    heading: "launchmediaoptions",
    content: "`cameraEncoderConfiguration`"
  }, {
    heading: "launchmediaoptions",
    content: "(Optional) The encoding configuration of the video stream captured by the camera. See EduVideoEncoderConfiguration for details."
  }, {
    heading: "launchmediaoptions",
    content: "`screenShareEncoderConfiguration`"
  }, {
    heading: "launchmediaoptions",
    content: "(Optional) The encoding configuration of the screen sharing stream. See EduVideoEncoderConfiguration for details."
  }, {
    heading: "launchmediaoptions",
    content: "`encryptionConfig`"
  }, {
    heading: "launchmediaoptions",
    content: "(Optional) The media stream encryption configuration. See MediaEncryptionConfig for details."
  }, {
    heading: "launchmediaoptions",
    content: "`channelProfile`"
  }, {
    heading: "launchmediaoptions",
    content: "The channel profile configuration. See ChannelProfile for details."
  }, {
    heading: "launchmediaoptions",
    content: "`web`"
  }, {
    heading: "launchmediaoptions",
    content: 'The web configuration for browser codec format and channel mode. `codec` can be `"vp9"` for VP9 or `"h264"` for H.264. `mode` can be `"rtc"` for communication mode or `"live"` for live-streaming mode.'
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "The video encoder configuration."
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "Property"
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
    content: "The frame rate of the video in FPS. The default value is 15."
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "`bitrate`"
  }, {
    heading: "eduvideoencoderconfiguration",
    content: "The bitrate of the video in Kbps. The default value is 200."
  }, {
    heading: "mediaencryptionconfig",
    content: "The media stream encryption configuration used in LaunchMediaOptions."
  }, {
    heading: "mediaencryptionconfig",
    content: "Property"
  }, {
    heading: "mediaencryptionconfig",
    content: "Description"
  }, {
    heading: "mediaencryptionconfig",
    content: "`mode`"
  }, {
    heading: "mediaencryptionconfig",
    content: "The encryption mode. See MediaEncryptionMode. Teachers and students in the same classroom must use the same encryption mode and key."
  }, {
    heading: "mediaencryptionconfig",
    content: "`key`"
  }, {
    heading: "mediaencryptionconfig",
    content: "The encryption key."
  }, {
    heading: "channelprofile",
    content: "The channel profiles, used in LaunchMediaOptions."
  }, {
    heading: "channelprofile",
    content: "Value"
  }, {
    heading: "channelprofile",
    content: "Description"
  }, {
    heading: "channelprofile",
    content: "`Communication`"
  }, {
    heading: "channelprofile",
    content: "Communication mode, commonly used for one-to-one or one-to-many classrooms."
  }, {
    heading: "channelprofile",
    content: "`LiveBroadcasting`"
  }, {
    heading: "channelprofile",
    content: "Live-streaming mode. This option costs less than communication mode and has a higher latency."
  }, {
    heading: "mediaencryptionmode",
    content: "The media stream encryption mode, used in MediaEncryptionConfig."
  }, {
    heading: "mediaencryptionmode",
    content: "Value"
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
    heading: "fcrmultithememode",
    content: "The UI theme mode of the classroom, used in LaunchOption."
  }, {
    heading: "fcrmultithememode",
    content: "Value"
  }, {
    heading: "fcrmultithememode",
    content: "Description"
  }, {
    heading: "fcrmultithememode",
    content: "`light`"
  }, {
    heading: "fcrmultithememode",
    content: "Light theme."
  }, {
    heading: "fcrmultithememode",
    content: "`dark`"
  }, {
    heading: "fcrmultithememode",
    content: "Dark theme."
  }, {
    heading: "eduroletypeenum",
    content: "The role of the user in the classroom, used in LaunchOption."
  }, {
    heading: "eduroletypeenum",
    content: "Value"
  }, {
    heading: "eduroletypeenum",
    content: "Description"
  }, {
    heading: "eduroletypeenum",
    content: "`teacher`"
  }, {
    heading: "eduroletypeenum",
    content: "`1`: Teacher or proctor."
  }, {
    heading: "eduroletypeenum",
    content: "`student`"
  }, {
    heading: "eduroletypeenum",
    content: "`2`: Student or exam taker."
  }, {
    heading: "eduroomtypeenum",
    content: "The classroom type, used in LaunchOption."
  }, {
    heading: "eduroomtypeenum",
    content: "Value"
  }, {
    heading: "eduroomtypeenum",
    content: "Description"
  }, {
    heading: "eduroomtypeenum",
    content: "`RoomProctor`"
  }, {
    heading: "eduroomtypeenum",
    content: "`6`: A proctored exam. In proctoring scenarios, `roomType` can only be set to this value."
  }, {
    heading: "languageenum",
    content: "The language on the UI, used in LaunchOption."
  }, {
    heading: "languageenum",
    content: "Value"
  }, {
    heading: "languageenum",
    content: "Description"
  }, {
    heading: "languageenum",
    content: '`"en"`'
  }, {
    heading: "languageenum",
    content: "English."
  }, {
    heading: "languageenum",
    content: '`"zh"`'
  }, {
    heading: "languageenum",
    content: "Chinese."
  }, {
    heading: "devicetypeenum",
    content: "Device types."
  }, {
    heading: "devicetypeenum",
    content: "For more about main devices and secondary devices, see Proctor exams online."
  }, {
    heading: "devicetypeenum",
    content: "Value"
  }, {
    heading: "devicetypeenum",
    content: "Description"
  }, {
    heading: "devicetypeenum",
    content: "`Main`"
  }, {
    heading: "devicetypeenum",
    content: "Main device."
  }, {
    heading: "devicetypeenum",
    content: "`Sub`"
  }, {
    heading: "devicetypeenum",
    content: "Secondary device."
  }, {
    heading: "agoracloudproxytype",
    content: "The cloud proxy type. Set in LaunchOption."
  }, {
    heading: "agoracloudproxytype",
    content: "Value"
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
  }, {
    heading: "agoracloudproxytype",
    content: "This TypeScript API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios."
  }, {
    heading: "agoraproctorsdk-1",
    content: "`AgoraProctorSDK` is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios."
  }, {
    heading: "config-1",
    content: "Configures the Agora Proctor SDK."
  }, {
    heading: "config-1",
    content: "**Parameters**"
  }, {
    heading: "config-1",
    content: "Parameter"
  }, {
    heading: "config-1",
    content: "Description"
  }, {
    heading: "config-1",
    content: "`config`"
  }, {
    heading: "config-1",
    content: "The configuration for the flexible classroom. See ConfigParams for details."
  }, {
    heading: "launch-1",
    content: "Launches a flexible classroom in a proctoring scenario."
  }, {
    heading: "launch-1",
    content: "**Parameters**"
  }, {
    heading: "launch-1",
    content: "Parameter"
  }, {
    heading: "launch-1",
    content: "Description"
  }, {
    heading: "launch-1",
    content: "`dom`"
  }, {
    heading: "launch-1",
    content: "The Document Object Model (DOM). See Document for details."
  }, {
    heading: "launch-1",
    content: "`option`"
  }, {
    heading: "launch-1",
    content: "The classroom launching configuration. See LaunchOption for details."
  }, {
    heading: "launch-1",
    content: "**Return value**"
  }, {
    heading: "launch-1",
    content: "Returns a function used to destroy the scene and recycle resources."
  }, {
    heading: "configparams-1",
    content: "The global SDK configuration, used in AgoraProctorSDK.config."
  }, {
    heading: "configparams-1",
    content: "Property"
  }, {
    heading: "configparams-1",
    content: "Description"
  }, {
    heading: "configparams-1",
    content: "`appId`"
  }, {
    heading: "configparams-1",
    content: "The Agora App ID. See Get the Agora App ID."
  }, {
    heading: "configparams-1",
    content: "`region`"
  }, {
    heading: "configparams-1",
    content: "(Optional) The region where the classroom is. All clients must use the same region; otherwise, they may fail to communicate with each other. Supported regions are `CN` for Mainland China, `NA` for North America, `EU` for Europe, and `AP` for Asia Pacific."
  }, {
    heading: "launchoption-1",
    content: "The classroom launching configuration used in AgoraProctorSDK.launch."
  }, {
    heading: "launchoption-1",
    content: "Property"
  }, {
    heading: "launchoption-1",
    content: "Description"
  }, {
    heading: "launchoption-1",
    content: "`userUuid`"
  }, {
    heading: "launchoption-1",
    content: 'The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: `"!"`, `"#"`, `"$"`, `"%"`, `"&"`, `"("`, `")"`, `"+"`, `"-"`, `":"`, `";"`, `"<"`, `"="`, `"."`, `">"`, `"?"`, `"@"`, `"["`, `"]"`, `"^"`, `"_"`, `"{"`, `"}"`, `"\\|"`, `"~"`, and `","`.'
  }, {
    heading: "launchoption-1",
    content: "`userName`"
  }, {
    heading: "launchoption-1",
    content: "The user name for display in the classroom. This value must be less than 64 bytes."
  }, {
    heading: "launchoption-1",
    content: "`roomUuid`"
  }, {
    heading: "launchoption-1",
    content: "The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed for `userUuid`."
  }, {
    heading: "launchoption-1",
    content: "`roleType`"
  }, {
    heading: "launchoption-1",
    content: "The user's role in the classroom. See EduRoleTypeEnum for details."
  }, {
    heading: "launchoption-1",
    content: "`roomType`"
  }, {
    heading: "launchoption-1",
    content: "The classroom type. See EduRoomTypeEnum for details."
  }, {
    heading: "launchoption-1",
    content: "`roomName`"
  }, {
    heading: "launchoption-1",
    content: "The room name for display in the classroom. The string length must be less than 64 bytes."
  }, {
    heading: "launchoption-1",
    content: "`listener`"
  }, {
    heading: "launchoption-1",
    content: "The state of classroom launching: `ready` means the classroom is ready, and `destroyed` means the classroom has been destroyed."
  }, {
    heading: "launchoption-1",
    content: "`pretest`"
  }, {
    heading: "launchoption-1",
    content: "Whether to enable the pre-class device test. If set to `true`, end users see a pop-up window to test their camera, microphone, and speaker before entering the classroom."
  }, {
    heading: "launchoption-1",
    content: "`rtmToken`"
  }, {
    heading: "launchoption-1",
    content: "The Signaling token used for authentication. See Secure authentication with tokens."
  }, {
    heading: "launchoption-1",
    content: "`language`"
  }, {
    heading: "launchoption-1",
    content: "The language on the classroom UI. See LanguageEnum for details."
  }, {
    heading: "launchoption-1",
    content: "`startTime`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) The start time (ms) of the class, determined by the first user joining the classroom."
  }, {
    heading: "launchoption-1",
    content: "`duration`"
  }, {
    heading: "launchoption-1",
    content: "The duration (seconds) of the class, determined by the first user joining the classroom. The maximum value is 86,400. Agora recommends that you set this value to the actual class duration."
  }, {
    heading: "launchoption-1",
    content: "`widgets`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) Extensive widgets that extend the classroom capabilities. See Embed a custom plugin."
  }, {
    heading: "launchoption-1",
    content: "`userFlexProperties`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) User properties customized by the developer."
  }, {
    heading: "launchoption-1",
    content: "`mediaOptions`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. See LaunchMediaOptions for details."
  }, {
    heading: "launchoption-1",
    content: "`latencyLevel`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) The latency level of an audience member. This property does not apply to cohosting users. `1` means low latency, where the latency from the sender to the receiver is between 1500 ms and 2000 ms. `2` means ultra-low latency, where the latency from the sender to the receiver is between 400 ms and 800 ms. The default value is `2`."
  }, {
    heading: "launchoption-1",
    content: "`uiMode`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) The UI theme mode of the classroom. The default value is `light`, which means a light theme. See FcrMultiThemeMode for details."
  }, {
    heading: "launchoption-1",
    content: "`checkStudentScreenShareState`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) Whether to kick students out of the classroom immediately when they stop screen sharing."
  }, {
    heading: "launchoption-1",
    content: "`rtcCloudProxyType`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) The cloud proxy type for the RTC service. See AgoraCloudProxyType."
  }, {
    heading: "launchoption-1",
    content: "`rtmCloudProxyEnabled`"
  }, {
    heading: "launchoption-1",
    content: "(Optional) Whether to enable cloud proxy for the Signaling service."
  }, {
    heading: "launchmediaoptions-1",
    content: "Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. Set in LaunchOption."
  }, {
    heading: "launchmediaoptions-1",
    content: "Property"
  }, {
    heading: "launchmediaoptions-1",
    content: "Description"
  }, {
    heading: "launchmediaoptions-1",
    content: "`cameraEncoderConfiguration`"
  }, {
    heading: "launchmediaoptions-1",
    content: "(Optional) The encoding configuration of the video stream captured by the camera. See EduVideoEncoderConfiguration for details."
  }, {
    heading: "launchmediaoptions-1",
    content: "`screenShareEncoderConfiguration`"
  }, {
    heading: "launchmediaoptions-1",
    content: "(Optional) The encoding configuration of the screen sharing stream. See EduVideoEncoderConfiguration for details."
  }, {
    heading: "launchmediaoptions-1",
    content: "`encryptionConfig`"
  }, {
    heading: "launchmediaoptions-1",
    content: "(Optional) The media stream encryption configuration. See MediaEncryptionConfig for details."
  }, {
    heading: "launchmediaoptions-1",
    content: "`channelProfile`"
  }, {
    heading: "launchmediaoptions-1",
    content: "The channel profile configuration. See ChannelProfile for details."
  }, {
    heading: "launchmediaoptions-1",
    content: "`web`"
  }, {
    heading: "launchmediaoptions-1",
    content: 'The web configuration for browser codec format and channel mode. `codec` can be `"vp9"` for VP9 or `"h264"` for H.264. `mode` can be `"rtc"` for communication mode or `"live"` for live-streaming mode.'
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "The video encoder configuration."
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "Property"
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "Description"
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "`width`"
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "The width of the video frame in pixels. The default value is 320."
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "`height`"
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "The height of the video frame in pixels. The default value is 240."
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "`frameRate`"
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "The frame rate of the video in FPS. The default value is 15."
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "`bitrate`"
  }, {
    heading: "eduvideoencoderconfiguration-1",
    content: "The bitrate of the video in Kbps. The default value is 200."
  }, {
    heading: "mediaencryptionconfig-1",
    content: "The media stream encryption configuration used in LaunchMediaOptions."
  }, {
    heading: "mediaencryptionconfig-1",
    content: "Property"
  }, {
    heading: "mediaencryptionconfig-1",
    content: "Description"
  }, {
    heading: "mediaencryptionconfig-1",
    content: "`mode`"
  }, {
    heading: "mediaencryptionconfig-1",
    content: "The encryption mode. See MediaEncryptionMode. Teachers and students in the same classroom must use the same encryption mode and key."
  }, {
    heading: "mediaencryptionconfig-1",
    content: "`key`"
  }, {
    heading: "mediaencryptionconfig-1",
    content: "The encryption key."
  }, {
    heading: "channelprofile-1",
    content: "The channel profiles, used in LaunchMediaOptions."
  }, {
    heading: "channelprofile-1",
    content: "Value"
  }, {
    heading: "channelprofile-1",
    content: "Description"
  }, {
    heading: "channelprofile-1",
    content: "`Communication`"
  }, {
    heading: "channelprofile-1",
    content: "Communication mode, commonly used for one-to-one or one-to-many classrooms."
  }, {
    heading: "channelprofile-1",
    content: "`LiveBroadcasting`"
  }, {
    heading: "channelprofile-1",
    content: "Live-streaming mode. This option costs less than communication mode and has a higher latency."
  }, {
    heading: "mediaencryptionmode-1",
    content: "The media stream encryption mode, used in MediaEncryptionConfig."
  }, {
    heading: "mediaencryptionmode-1",
    content: "Value"
  }, {
    heading: "mediaencryptionmode-1",
    content: "Description"
  }, {
    heading: "mediaencryptionmode-1",
    content: "`AES_128_XTS`"
  }, {
    heading: "mediaencryptionmode-1",
    content: "`1`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "mediaencryptionmode-1",
    content: "`AES_128_ECB`"
  }, {
    heading: "mediaencryptionmode-1",
    content: "`2`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "mediaencryptionmode-1",
    content: "`AES_256_XTS`"
  }, {
    heading: "mediaencryptionmode-1",
    content: "`3`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "mediaencryptionmode-1",
    content: "`AES_128_GCM`"
  }, {
    heading: "mediaencryptionmode-1",
    content: "`5`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "mediaencryptionmode-1",
    content: "`AES_256_GCM`"
  }, {
    heading: "mediaencryptionmode-1",
    content: "`6`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "fcrmultithememode-1",
    content: "The UI theme mode of the classroom, used in LaunchOption."
  }, {
    heading: "fcrmultithememode-1",
    content: "Value"
  }, {
    heading: "fcrmultithememode-1",
    content: "Description"
  }, {
    heading: "fcrmultithememode-1",
    content: "`light`"
  }, {
    heading: "fcrmultithememode-1",
    content: "Light theme."
  }, {
    heading: "fcrmultithememode-1",
    content: "`dark`"
  }, {
    heading: "fcrmultithememode-1",
    content: "Dark theme."
  }, {
    heading: "eduroletypeenum-1",
    content: "The role of the user in the classroom, used in LaunchOption."
  }, {
    heading: "eduroletypeenum-1",
    content: "Value"
  }, {
    heading: "eduroletypeenum-1",
    content: "Description"
  }, {
    heading: "eduroletypeenum-1",
    content: "`teacher`"
  }, {
    heading: "eduroletypeenum-1",
    content: "`1`: Teacher or proctor."
  }, {
    heading: "eduroletypeenum-1",
    content: "`student`"
  }, {
    heading: "eduroletypeenum-1",
    content: "`2`: Student or exam taker."
  }, {
    heading: "eduroomtypeenum-1",
    content: "The classroom type, used in LaunchOption."
  }, {
    heading: "eduroomtypeenum-1",
    content: "Value"
  }, {
    heading: "eduroomtypeenum-1",
    content: "Description"
  }, {
    heading: "eduroomtypeenum-1",
    content: "`RoomProctor`"
  }, {
    heading: "eduroomtypeenum-1",
    content: "`6`: A proctored exam. In proctoring scenarios, `roomType` can only be set to this value."
  }, {
    heading: "languageenum-1",
    content: "The language on the UI, used in LaunchOption."
  }, {
    heading: "languageenum-1",
    content: "Value"
  }, {
    heading: "languageenum-1",
    content: "Description"
  }, {
    heading: "languageenum-1",
    content: '`"en"`'
  }, {
    heading: "languageenum-1",
    content: "English."
  }, {
    heading: "languageenum-1",
    content: '`"zh"`'
  }, {
    heading: "languageenum-1",
    content: "Chinese."
  }, {
    heading: "devicetypeenum-1",
    content: "Device types."
  }, {
    heading: "devicetypeenum-1",
    content: "For more about main devices and secondary devices, see Proctor exams online."
  }, {
    heading: "devicetypeenum-1",
    content: "Value"
  }, {
    heading: "devicetypeenum-1",
    content: "Description"
  }, {
    heading: "devicetypeenum-1",
    content: "`Main`"
  }, {
    heading: "devicetypeenum-1",
    content: "Main device."
  }, {
    heading: "devicetypeenum-1",
    content: "`Sub`"
  }, {
    heading: "devicetypeenum-1",
    content: "Secondary device."
  }, {
    heading: "agoracloudproxytype-1",
    content: "The cloud proxy type. Set in LaunchOption."
  }, {
    heading: "agoracloudproxytype-1",
    content: "Value"
  }, {
    heading: "agoracloudproxytype-1",
    content: "Description"
  }, {
    heading: "agoracloudproxytype-1",
    content: "`Automatic`"
  }, {
    heading: "agoracloudproxytype-1",
    content: "`0`: Automatic mode. In this mode, the SDK first attempts to connect directly to Agora SDRTN. If the attempt fails, the SDK automatically falls back to sending media over TLS 443. If you are unsure whether the end user's network environment has a firewall, `Automatic` mode is recommended."
  }, {
    heading: "agoracloudproxytype-1",
    content: "`UDP`"
  }, {
    heading: "agoracloudproxytype-1",
    content: "`1`: UDP."
  }, {
    heading: "agoracloudproxytype-1",
    content: "`TCP`"
  }, {
    heading: "agoracloudproxytype-1",
    content: "`2`: TCP."
  }, {
    heading: "agoracloudproxytype-1",
    content: "This Swift API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios on iOS."
  }, {
    heading: "agoraproctorsdk-2",
    content: "`AgoraProctorSDK` is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios."
  }, {
    heading: "init",
    content: "Initializes the `AgoraProctorSDK` instance."
  }, {
    heading: "init",
    content: "**Parameters**"
  }, {
    heading: "init",
    content: "Parameter"
  }, {
    heading: "init",
    content: "Description"
  }, {
    heading: "init",
    content: "`config`"
  }, {
    heading: "init",
    content: "Configuration for a flexible classroom. See AgoraProctorLaunchConfig."
  }, {
    heading: "init",
    content: "`delegate`"
  }, {
    heading: "init",
    content: "(Optional) The event handler for the Agora Proctor SDK. See AgoraProctorSDKDelegate."
  }, {
    heading: "launch-2",
    content: "Launches a flexible classroom in a proctoring scenario."
  }, {
    heading: "launch-2",
    content: "**Parameters**"
  }, {
    heading: "launch-2",
    content: "Parameter"
  }, {
    heading: "launch-2",
    content: "Description"
  }, {
    heading: "launch-2",
    content: "`success`"
  }, {
    heading: "launch-2",
    content: "The callback triggered by a successful launch."
  }, {
    heading: "launch-2",
    content: "`failure`"
  }, {
    heading: "launch-2",
    content: "The callback triggered by a failed launch, which returns an error."
  }, {
    heading: "version",
    content: "Gets the SDK version."
  }, {
    heading: "version",
    content: "**Returns**"
  }, {
    heading: "version",
    content: "The SDK version."
  }, {
    heading: "agoraproctorsdkdelegate",
    content: "`AgoraProctorSDKDelegate` reports events related to SDK status to your app."
  }, {
    heading: "didexit",
    content: "This callback is triggered when a user exits or is kicked from the room."
  }, {
    heading: "didexit",
    content: "Parameter"
  }, {
    heading: "didexit",
    content: "Description"
  }, {
    heading: "didexit",
    content: "`reason`"
  }, {
    heading: "didexit",
    content: "The reason for the exit. See AgoraProctorExitReason."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The classroom launching configuration used in launch."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "Property"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "Description"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`userName`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The user name for display in the classroom. This value must be less than 64 bytes."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`userUuid`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. The string length must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed in the Web `userUuid` description."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`userRole`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The user's role in the classroom. See AgoraProctorUserRole."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`roomName`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The room name for display in the classroom. The string length must be less than 64 bytes."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`roomUuid`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed in the Web `userUuid` description."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`appId`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The Agora App ID. See Get the Agora App ID."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`token`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The Signaling token used for authentication. See Secure authentication with tokens."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`region`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "The region where the classrooms are. All clients must use the same region to communicate with each other. Supported regions are `CN` for Mainland China, `NA` for North America, `EU` for Europe, and `AP` for Asia Pacific."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`mediaOptions`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "Media options, including the media stream encryption configuration. See AgoraProctorMediaOptions."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`userProperties`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "User properties customized by the developer."
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "`widgets`"
  }, {
    heading: "agoraproctorlaunchconfig",
    content: "Pass in `widgetId` and `AgoraWidgetConfig`."
  }, {
    heading: "agoraproctormediaoptions",
    content: "Media options. Set in AgoraProctorLaunchConfig."
  }, {
    heading: "agoraproctormediaoptions",
    content: "Property"
  }, {
    heading: "agoraproctormediaoptions",
    content: "Description"
  }, {
    heading: "agoraproctormediaoptions",
    content: "`encryptionConfig`"
  }, {
    heading: "agoraproctormediaoptions",
    content: "(Optional) The media stream encryption configuration. See AgoraProctorMediaEncryptionConfig."
  }, {
    heading: "agoraproctormediaoptions",
    content: "`videoEncoderConfig`"
  }, {
    heading: "agoraproctormediaoptions",
    content: "(Optional) The video encoder configuration. See AgoraProctorVideoEncoderConfig."
  }, {
    heading: "agoraproctormediaoptions",
    content: "`latencyLevel`"
  }, {
    heading: "agoraproctormediaoptions",
    content: "The latency level of an audience member. This property does not apply to cohosting users. The default value is `low`, which means low latency. See AgoraProctorLatencyLevel."
  }, {
    heading: "agoraproctormediaencryptionconfig",
    content: "The media stream encryption configuration used in AgoraProctorMediaOptions."
  }, {
    heading: "agoraproctormediaencryptionconfig",
    content: "Property"
  }, {
    heading: "agoraproctormediaencryptionconfig",
    content: "Description"
  }, {
    heading: "agoraproctormediaencryptionconfig",
    content: "`mode`"
  }, {
    heading: "agoraproctormediaencryptionconfig",
    content: "The encryption mode. See AgoraProctorMediaEncryptionMode."
  }, {
    heading: "agoraproctormediaencryptionconfig",
    content: "`key`"
  }, {
    heading: "agoraproctormediaencryptionconfig",
    content: "The encryption key."
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "The video encoder configuration used in AgoraProctorMediaOptions."
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "Property"
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "Description"
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "`dimensionWidth`"
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "The width of the video frame in pixels. The default value is 320."
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "`dimensionHeight`"
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "The height of the video frame in pixels. The default value is 240."
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "`frameRate`"
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "The frame rate of the video in FPS. The default value is 15."
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "`bitRate`"
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "The bitrate of the video in Kbps. The default value is 200."
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "`mirrorMode`"
  }, {
    heading: "agoraproctorvideoencoderconfig",
    content: "Whether video mirror mode is enabled. The default value is `AgoraProctorMirrorModeDisable`, which means mirror mode is disabled. See AgoraProctorMirrorMode."
  }, {
    heading: "agoraproctormirrormode",
    content: "Whether to enable mirror mode, used in AgoraProctorVideoEncoderConfig."
  }, {
    heading: "agoraproctormirrormode",
    content: "Value"
  }, {
    heading: "agoraproctormirrormode",
    content: "Description"
  }, {
    heading: "agoraproctormirrormode",
    content: "`disabled`"
  }, {
    heading: "agoraproctormirrormode",
    content: "`0`: Disable mirror mode."
  }, {
    heading: "agoraproctormirrormode",
    content: "`enabled`"
  }, {
    heading: "agoraproctormirrormode",
    content: "`1`: Enable mirror mode."
  }, {
    heading: "agoraproctorregion",
    content: "The region where classrooms are, used in AgoraProctorLaunchConfig."
  }, {
    heading: "agoraproctorregion",
    content: "Value"
  }, {
    heading: "agoraproctorregion",
    content: "Description"
  }, {
    heading: "agoraproctorregion",
    content: "`CN`"
  }, {
    heading: "agoraproctorregion",
    content: "`0`: Mainland China."
  }, {
    heading: "agoraproctorregion",
    content: "`NA`"
  }, {
    heading: "agoraproctorregion",
    content: "`1`: North America."
  }, {
    heading: "agoraproctorregion",
    content: "`EU`"
  }, {
    heading: "agoraproctorregion",
    content: "`2`: Europe."
  }, {
    heading: "agoraproctorregion",
    content: "`AP`"
  }, {
    heading: "agoraproctorregion",
    content: "`3`: Asia Pacific."
  }, {
    heading: "agoraproctorexitreason",
    content: "The reason for exiting the Agora Proctor SDK, used in the didExit callback."
  }, {
    heading: "agoraproctorexitreason",
    content: "Value"
  }, {
    heading: "agoraproctorexitreason",
    content: "Description"
  }, {
    heading: "agoraproctorexitreason",
    content: "`normal`"
  }, {
    heading: "agoraproctorexitreason",
    content: "User exits the room normally."
  }, {
    heading: "agoraproctorexitreason",
    content: "`kickOut`"
  }, {
    heading: "agoraproctorexitreason",
    content: "User is kicked out of the room."
  }, {
    heading: "agoraproctorlatencylevel",
    content: "The latency level of an audience member, used in AgoraProctorLaunchConfig."
  }, {
    heading: "agoraproctorlatencylevel",
    content: "Value"
  }, {
    heading: "agoraproctorlatencylevel",
    content: "Description"
  }, {
    heading: "agoraproctorlatencylevel",
    content: "`low`"
  }, {
    heading: "agoraproctorlatencylevel",
    content: "`1`: Low latency. The latency from the sender to the receiver is between 1500 ms and 2000 ms."
  }, {
    heading: "agoraproctorlatencylevel",
    content: "`ultraLow`"
  }, {
    heading: "agoraproctorlatencylevel",
    content: "`2`: Ultra-low latency. The latency from the sender to the receiver is between 400 ms and 800 ms."
  }, {
    heading: "agoraproctoruserrole",
    content: "The user role in the classroom, used in AgoraProctorLaunchConfig."
  }, {
    heading: "agoraproctoruserrole",
    content: "Value"
  }, {
    heading: "agoraproctoruserrole",
    content: "Description"
  }, {
    heading: "agoraproctoruserrole",
    content: "`invalid`"
  }, {
    heading: "agoraproctoruserrole",
    content: "`0`: Recording robot."
  }, {
    heading: "agoraproctoruserrole",
    content: "`teacher`"
  }, {
    heading: "agoraproctoruserrole",
    content: "`1`: Teacher."
  }, {
    heading: "agoraproctoruserrole",
    content: "`student`"
  }, {
    heading: "agoraproctoruserrole",
    content: "`2`: Student."
  }, {
    heading: "agoraproctoruserrole",
    content: "`assistant`"
  }, {
    heading: "agoraproctoruserrole",
    content: "`3`: Assistant."
  }, {
    heading: "agoraproctoruserrole",
    content: "`observer`"
  }, {
    heading: "agoraproctoruserrole",
    content: "`4`: Observer."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "The media stream encryption mode, used in AgoraProctorMediaEncryptionConfig."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "Value"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "Description"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`None`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`0`: No encryption."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`AES128XTS`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`1`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`AES128ECB`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`2`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`AES256XTS`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`3`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`SM4128ECB`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`4`: 128-bit SM4 encryption, ECB mode."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`AES128GCM`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`5`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`AES256GCM`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`6`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`AES128GCM2`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`7`: Enhanced 128-bit AES encryption, GCM mode. Compared with `AES128GCM`, this mode is more secure and requires setting a salt."
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`AES256GCM2`"
  }, {
    heading: "agoraproctormediaencryptionmode",
    content: "`8`: Enhanced 256-bit AES encryption, GCM mode. Compared with `AES256GCM`, this mode is more secure and requires setting a salt."
  }],
  headings: [{
    id: "agoraproctorsdk",
    content: "AgoraProctorSDK"
  }, {
    id: "config",
    content: "config"
  }, {
    id: "launch",
    content: "launch"
  }, {
    id: "type-definitions",
    content: "Type definitions"
  }, {
    id: "configparams",
    content: "ConfigParams"
  }, {
    id: "launchoption",
    content: "LaunchOption"
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
    id: "channelprofile",
    content: "ChannelProfile"
  }, {
    id: "mediaencryptionmode",
    content: "MediaEncryptionMode"
  }, {
    id: "fcrmultithememode",
    content: "FcrMultiThemeMode"
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
    id: "devicetypeenum",
    content: "DeviceTypeEnum"
  }, {
    id: "agoracloudproxytype",
    content: "AgoraCloudProxyType"
  }, {
    id: "agoraproctorsdk-1",
    content: "AgoraProctorSDK"
  }, {
    id: "config-1",
    content: "config"
  }, {
    id: "launch-1",
    content: "launch"
  }, {
    id: "type-definitions-1",
    content: "Type definitions"
  }, {
    id: "configparams-1",
    content: "ConfigParams"
  }, {
    id: "launchoption-1",
    content: "LaunchOption"
  }, {
    id: "launchmediaoptions-1",
    content: "LaunchMediaOptions"
  }, {
    id: "eduvideoencoderconfiguration-1",
    content: "EduVideoEncoderConfiguration"
  }, {
    id: "mediaencryptionconfig-1",
    content: "MediaEncryptionConfig"
  }, {
    id: "channelprofile-1",
    content: "ChannelProfile"
  }, {
    id: "mediaencryptionmode-1",
    content: "MediaEncryptionMode"
  }, {
    id: "fcrmultithememode-1",
    content: "FcrMultiThemeMode"
  }, {
    id: "eduroletypeenum-1",
    content: "EduRoleTypeEnum"
  }, {
    id: "eduroomtypeenum-1",
    content: "EduRoomTypeEnum"
  }, {
    id: "languageenum-1",
    content: "LanguageEnum"
  }, {
    id: "devicetypeenum-1",
    content: "DeviceTypeEnum"
  }, {
    id: "agoracloudproxytype-1",
    content: "AgoraCloudProxyType"
  }, {
    id: "agoraproctorsdk-2",
    content: "AgoraProctorSDK"
  }, {
    id: "init",
    content: "init"
  }, {
    id: "launch-2",
    content: "launch"
  }, {
    id: "version",
    content: "version"
  }, {
    id: "agoraproctorsdkdelegate",
    content: "AgoraProctorSDKDelegate"
  }, {
    id: "didexit",
    content: "didExit"
  }, {
    id: "objects",
    content: "Objects"
  }, {
    id: "agoraproctorlaunchconfig",
    content: "AgoraProctorLaunchConfig"
  }, {
    id: "agoraproctormediaoptions",
    content: "AgoraProctorMediaOptions"
  }, {
    id: "agoraproctormediaencryptionconfig",
    content: "AgoraProctorMediaEncryptionConfig"
  }, {
    id: "agoraproctorvideoencoderconfig",
    content: "AgoraProctorVideoEncoderConfig"
  }, {
    id: "enums",
    content: "Enums"
  }, {
    id: "agoraproctormirrormode",
    content: "AgoraProctorMirrorMode"
  }, {
    id: "agoraproctorregion",
    content: "AgoraProctorRegion"
  }, {
    id: "agoraproctorexitreason",
    content: "AgoraProctorExitReason"
  }, {
    id: "agoraproctorlatencylevel",
    content: "AgoraProctorLatencyLevel"
  }, {
    id: "agoraproctoruserrole",
    content: "AgoraProctorUserRole"
  }, {
    id: "agoraproctormediaencryptionmode",
    content: "AgoraProctorMediaEncryptionMode"
  }]
};
export let toc = [{
  depth: 2,
  url: "#agoraproctorsdk",
  title: _jsx(_Fragment, {
    children: "AgoraProctorSDK"
  })
}, {
  depth: 3,
  url: "#config",
  title: _jsx(_Fragment, {
    children: "config"
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
  url: "#configparams",
  title: _jsx(_Fragment, {
    children: "ConfigParams"
  })
}, {
  depth: 3,
  url: "#launchoption",
  title: _jsx(_Fragment, {
    children: "LaunchOption"
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
  url: "#channelprofile",
  title: _jsx(_Fragment, {
    children: "ChannelProfile"
  })
}, {
  depth: 3,
  url: "#mediaencryptionmode",
  title: _jsx(_Fragment, {
    children: "MediaEncryptionMode"
  })
}, {
  depth: 3,
  url: "#fcrmultithememode",
  title: _jsx(_Fragment, {
    children: "FcrMultiThemeMode"
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
  url: "#devicetypeenum",
  title: _jsx(_Fragment, {
    children: "DeviceTypeEnum"
  })
}, {
  depth: 3,
  url: "#agoracloudproxytype",
  title: _jsx(_Fragment, {
    children: "AgoraCloudProxyType"
  })
}, {
  depth: 2,
  url: "#agoraproctorsdk-1",
  title: _jsx(_Fragment, {
    children: "AgoraProctorSDK"
  })
}, {
  depth: 3,
  url: "#config-1",
  title: _jsx(_Fragment, {
    children: "config"
  })
}, {
  depth: 3,
  url: "#launch-1",
  title: _jsx(_Fragment, {
    children: "launch"
  })
}, {
  depth: 2,
  url: "#type-definitions-1",
  title: _jsx(_Fragment, {
    children: "Type definitions"
  })
}, {
  depth: 3,
  url: "#configparams-1",
  title: _jsx(_Fragment, {
    children: "ConfigParams"
  })
}, {
  depth: 3,
  url: "#launchoption-1",
  title: _jsx(_Fragment, {
    children: "LaunchOption"
  })
}, {
  depth: 3,
  url: "#launchmediaoptions-1",
  title: _jsx(_Fragment, {
    children: "LaunchMediaOptions"
  })
}, {
  depth: 3,
  url: "#eduvideoencoderconfiguration-1",
  title: _jsx(_Fragment, {
    children: "EduVideoEncoderConfiguration"
  })
}, {
  depth: 3,
  url: "#mediaencryptionconfig-1",
  title: _jsx(_Fragment, {
    children: "MediaEncryptionConfig"
  })
}, {
  depth: 3,
  url: "#channelprofile-1",
  title: _jsx(_Fragment, {
    children: "ChannelProfile"
  })
}, {
  depth: 3,
  url: "#mediaencryptionmode-1",
  title: _jsx(_Fragment, {
    children: "MediaEncryptionMode"
  })
}, {
  depth: 3,
  url: "#fcrmultithememode-1",
  title: _jsx(_Fragment, {
    children: "FcrMultiThemeMode"
  })
}, {
  depth: 3,
  url: "#eduroletypeenum-1",
  title: _jsx(_Fragment, {
    children: "EduRoleTypeEnum"
  })
}, {
  depth: 3,
  url: "#eduroomtypeenum-1",
  title: _jsx(_Fragment, {
    children: "EduRoomTypeEnum"
  })
}, {
  depth: 3,
  url: "#languageenum-1",
  title: _jsx(_Fragment, {
    children: "LanguageEnum"
  })
}, {
  depth: 3,
  url: "#devicetypeenum-1",
  title: _jsx(_Fragment, {
    children: "DeviceTypeEnum"
  })
}, {
  depth: 3,
  url: "#agoracloudproxytype-1",
  title: _jsx(_Fragment, {
    children: "AgoraCloudProxyType"
  })
}, {
  depth: 2,
  url: "#agoraproctorsdk-2",
  title: _jsx(_Fragment, {
    children: "AgoraProctorSDK"
  })
}, {
  depth: 3,
  url: "#init",
  title: _jsx(_Fragment, {
    children: "init"
  })
}, {
  depth: 3,
  url: "#launch-2",
  title: _jsx(_Fragment, {
    children: "launch"
  })
}, {
  depth: 3,
  url: "#version",
  title: _jsx(_Fragment, {
    children: "version"
  })
}, {
  depth: 2,
  url: "#agoraproctorsdkdelegate",
  title: _jsx(_Fragment, {
    children: "AgoraProctorSDKDelegate"
  })
}, {
  depth: 3,
  url: "#didexit",
  title: _jsx(_Fragment, {
    children: "didExit"
  })
}, {
  depth: 2,
  url: "#objects",
  title: _jsx(_Fragment, {
    children: "Objects"
  })
}, {
  depth: 3,
  url: "#agoraproctorlaunchconfig",
  title: _jsx(_Fragment, {
    children: "AgoraProctorLaunchConfig"
  })
}, {
  depth: 3,
  url: "#agoraproctormediaoptions",
  title: _jsx(_Fragment, {
    children: "AgoraProctorMediaOptions"
  })
}, {
  depth: 3,
  url: "#agoraproctormediaencryptionconfig",
  title: _jsx(_Fragment, {
    children: "AgoraProctorMediaEncryptionConfig"
  })
}, {
  depth: 3,
  url: "#agoraproctorvideoencoderconfig",
  title: _jsx(_Fragment, {
    children: "AgoraProctorVideoEncoderConfig"
  })
}, {
  depth: 2,
  url: "#enums",
  title: _jsx(_Fragment, {
    children: "Enums"
  })
}, {
  depth: 3,
  url: "#agoraproctormirrormode",
  title: _jsx(_Fragment, {
    children: "AgoraProctorMirrorMode"
  })
}, {
  depth: 3,
  url: "#agoraproctorregion",
  title: _jsx(_Fragment, {
    children: "AgoraProctorRegion"
  })
}, {
  depth: 3,
  url: "#agoraproctorexitreason",
  title: _jsx(_Fragment, {
    children: "AgoraProctorExitReason"
  })
}, {
  depth: 3,
  url: "#agoraproctorlatencylevel",
  title: _jsx(_Fragment, {
    children: "AgoraProctorLatencyLevel"
  })
}, {
  depth: 3,
  url: "#agoraproctoruserrole",
  title: _jsx(_Fragment, {
    children: "AgoraProctorUserRole"
  })
}, {
  depth: 3,
  url: "#agoraproctormediaencryptionmode",
  title: _jsx(_Fragment, {
    children: "AgoraProctorMediaEncryptionMode"
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
    platforms: '["android","web","electron","ios"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "Agora Proctor SDK is currently not available for Android."
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "web",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "web"
      }), _jsxs(_Fragment, {
        children: [_jsx(_components.p, {
          children: "This TypeScript API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios."
        }), `
`, _jsx(_components.h2, {
          id: "agoraproctorsdk",
          children: "AgoraProctorSDK"
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "AgoraProctorSDK"
          }), " is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios."]
        }), `
`, _jsx(_components.h3, {
          id: "config",
          children: "config"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
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
                  children: "config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(config: ConfigParams): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                })]
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "Configures the Agora Proctor SDK."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Parameters"
          })
        }), `
`, _jsxs(_components.table, {
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
                  children: "config"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The configuration for the flexible classroom. See ", _jsx(_components.a, {
                  href: "#configparams",
                  children: "ConfigParams"
                }), " for details."]
              })]
            })
          })]
        }), `
`, _jsx(_components.h3, {
          id: "launch",
          children: "launch"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
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
                  children: "(dom: HTMLElement, option: LaunchOption): () "
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
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "Launches a flexible classroom in a proctoring scenario."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Parameters"
          })
        }), `
`, _jsxs(_components.table, {
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
                children: ["The Document Object Model (DOM). See ", _jsx(_components.a, {
                  href: "https://developer.mozilla.org/en-US/docs/Web/API/Document",
                  children: "Document"
                }), " for details."]
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
                children: ["The classroom launching configuration. See ", _jsx(_components.a, {
                  href: "#launchoption",
                  children: "LaunchOption"
                }), " for details."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Return value"
          })
        }), `
`, _jsx(_components.p, {
          children: "Returns a function used to destroy the scene and recycle resources."
        }), `
`, _jsx(_components.h2, {
          id: "type-definitions",
          children: "Type definitions"
        }), `
`, _jsx(_components.h3, {
          id: "configparams",
          children: "ConfigParams"
        }), `
`, _jsxs(_components.p, {
          children: ["The global SDK configuration, used in ", _jsx(_components.a, {
            href: "#config",
            children: "AgoraProctorSDK.config"
          }), "."]
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
                  children: " ConfigParams"
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
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The Agora App ID. See ", _jsx(_components.a, {
                  href: "/en/introduction/account#get-the-app-id-and-app-certificate",
                  children: "Get the Agora App ID"
                }), "."]
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
                children: ["(Optional) The region where the classroom is. All clients must use the same region; otherwise, they may fail to communicate with each other. Supported regions are ", _jsx(_components.code, {
                  children: "CN"
                }), " for Mainland China, ", _jsx(_components.code, {
                  children: "NA"
                }), " for North America, ", _jsx(_components.code, {
                  children: "EU"
                }), " for Europe, and ", _jsx(_components.code, {
                  children: "AP"
                }), " for Asia Pacific."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "launchoption",
          children: "LaunchOption"
        }), `
`, _jsxs(_components.p, {
          children: ["The classroom launching configuration used in ", _jsx(_components.a, {
            href: "#launch",
            children: "AgoraProctorSDK.launch"
          }), "."]
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
                  children: " LaunchOption"
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
                  children: "  listener"
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
                  children: " ListenerCallback"
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
                  children: "  pretest"
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
                  children: "  rtmToken"
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
                  children: " LanguageEnum"
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
                  children: "  widgets"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " typeof"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraWidgetBase };"
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
                  children: " any"
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
                  children: "  latencyLevel"
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
                  children: " 1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
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
                  children: "  uiMode"
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
                  children: " FcrMultiThemeMode"
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
                  children: "  checkStudentScreenShareState"
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
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                  children: "userUuid"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: ", _jsx(_components.code, {
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
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The user name for display in the classroom. This value must be less than 64 bytes."
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
                children: ["The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed for ", _jsx(_components.code, {
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
                children: ["The user's role in the classroom. See ", _jsx(_components.a, {
                  href: "#eduroletypeenum",
                  children: "EduRoleTypeEnum"
                }), " for details."]
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
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "roomName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The room name for display in the classroom. The string length must be less than 64 bytes."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "listener"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The state of classroom launching: ", _jsx(_components.code, {
                  children: "ready"
                }), " means the classroom is ready, and ", _jsx(_components.code, {
                  children: "destroyed"
                }), " means the classroom has been destroyed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "pretest"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Whether to enable the pre-class device test. If set to ", _jsx(_components.code, {
                  children: "true"
                }), ", end users see a pop-up window to test their camera, microphone, and speaker before entering the classroom."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "rtmToken"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The Signaling token used for authentication. See ", _jsx(_components.a, {
                  href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow",
                  children: "Secure authentication with tokens"
                }), "."]
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
                children: ["The language on the classroom UI. See ", _jsx(_components.a, {
                  href: "#languageenum",
                  children: "LanguageEnum"
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "startTime"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "(Optional) The start time (ms) of the class, determined by the first user joining the classroom."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "duration"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The duration (seconds) of the class, determined by the first user joining the classroom. The maximum value is 86,400. Agora recommends that you set this value to the actual class duration."
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
                children: ["(Optional) Extensive widgets that extend the classroom capabilities. See ", _jsx(_components.a, {
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
                  children: "userFlexProperties"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "(Optional) User properties customized by the developer."
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
                children: ["(Optional) Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. See ", _jsx(_components.a, {
                  href: "#launchmediaoptions",
                  children: "LaunchMediaOptions"
                }), " for details."]
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
                children: ["(Optional) The latency level of an audience member. This property does not apply to cohosting users. ", _jsx(_components.code, {
                  children: "1"
                }), " means low latency, where the latency from the sender to the receiver is between 1500 ms and 2000 ms. ", _jsx(_components.code, {
                  children: "2"
                }), " means ultra-low latency, where the latency from the sender to the receiver is between 400 ms and 800 ms. The default value is ", _jsx(_components.code, {
                  children: "2"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "uiMode"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["(Optional) The UI theme mode of the classroom. The default value is ", _jsx(_components.code, {
                  children: "light"
                }), ", which means a light theme. See ", _jsx(_components.a, {
                  href: "#fcrmultithememode",
                  children: "FcrMultiThemeMode"
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checkStudentScreenShareState"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "(Optional) Whether to kick students out of the classroom immediately when they stop screen sharing."
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
        }), `
`, _jsx(_components.h3, {
          id: "launchmediaoptions",
          children: "LaunchMediaOptions"
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
                  children: "  channelProfile"
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
                  children: " ChannelProfile"
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
        }), `
`, _jsxs(_components.p, {
          children: ["Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. Set in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                children: ["(Optional) The encoding configuration of the video stream captured by the camera. See ", _jsx(_components.a, {
                  href: "#eduvideoencoderconfiguration",
                  children: "EduVideoEncoderConfiguration"
                }), " for details."]
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
                children: ["(Optional) The encoding configuration of the screen sharing stream. See ", _jsx(_components.a, {
                  href: "#eduvideoencoderconfiguration",
                  children: "EduVideoEncoderConfiguration"
                }), " for details."]
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
                children: ["(Optional) The media stream encryption configuration. See ", _jsx(_components.a, {
                  href: "#mediaencryptionconfig",
                  children: "MediaEncryptionConfig"
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelProfile"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The channel profile configuration. See ", _jsx(_components.a, {
                  href: "#channelprofile",
                  children: "ChannelProfile"
                }), " for details."]
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
                children: ["The web configuration for browser codec format and channel mode. ", _jsx(_components.code, {
                  children: "codec"
                }), " can be ", _jsx(_components.code, {
                  children: '"vp9"'
                }), " for VP9 or ", _jsx(_components.code, {
                  children: '"h264"'
                }), " for H.264. ", _jsx(_components.code, {
                  children: "mode"
                }), " can be ", _jsx(_components.code, {
                  children: '"rtc"'
                }), " for communication mode or ", _jsx(_components.code, {
                  children: '"live"'
                }), " for live-streaming mode."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "eduvideoencoderconfiguration",
          children: "EduVideoEncoderConfiguration"
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
        }), `
`, _jsx(_components.p, {
          children: "The video encoder configuration."
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                children: "The frame rate of the video in FPS. The default value is 15."
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
                children: "The bitrate of the video in Kbps. The default value is 200."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "mediaencryptionconfig",
          children: "MediaEncryptionConfig"
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
        }), `
`, _jsxs(_components.p, {
          children: ["The media stream encryption configuration used in ", _jsx(_components.a, {
            href: "#launchmediaoptions",
            children: "LaunchMediaOptions"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                }), ". Teachers and students in the same classroom must use the same encryption mode and key."]
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
        }), `
`, _jsx(_components.h3, {
          id: "channelprofile",
          children: "ChannelProfile"
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " ChannelProfile"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  Communication"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  LiveBroadcasting"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The channel profiles, used in ", _jsx(_components.a, {
            href: "#launchmediaoptions",
            children: "LaunchMediaOptions"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "Communication"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Communication mode, commonly used for one-to-one or one-to-many classrooms."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "LiveBroadcasting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Live-streaming mode. This option costs less than communication mode and has a higher latency."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "mediaencryptionmode",
          children: "MediaEncryptionMode"
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
                  children: " enum"
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
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_128_XTS"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_128_ECB"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_256_XTS"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 3"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_128_GCM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 5"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_256_GCM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 6"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The media stream encryption mode, used in ", _jsx(_components.a, {
            href: "#mediaencryptionconfig",
            children: "MediaEncryptionConfig"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
        }), `
`, _jsx(_components.h3, {
          id: "fcrmultithememode",
          children: "FcrMultiThemeMode"
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " FcrMultiThemeMode"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  light"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'light'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  dark"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'dark'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The UI theme mode of the classroom, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "light"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Light theme."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "dark"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Dark theme."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "eduroletypeenum",
          children: "EduRoleTypeEnum"
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
                  children: " enum"
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
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  teacher"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  student"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The role of the user in the classroom, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                }), ": Teacher or proctor."]
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
                }), ": Student or exam taker."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "eduroomtypeenum",
          children: "EduRoomTypeEnum"
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
                  children: " enum"
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
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  RoomProctor"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 6"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The classroom type, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "RoomProctor"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": A proctored exam. In proctoring scenarios, ", _jsx(_components.code, {
                  children: "roomType"
                }), " can only be set to this value."]
              })]
            })
          })]
        }), `
`, _jsx(_components.h3, {
          id: "languageenum",
          children: "LanguageEnum"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
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
                  children: " LanguageEnum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'en'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'zh'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["The language on the UI, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: '"en"'
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
                  children: '"zh"'
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Chinese."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "devicetypeenum",
          children: "DeviceTypeEnum"
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " DeviceTypeEnum"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  Main"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'main'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  Sub"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'sub'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsx(_components.p, {
          children: "Device types."
        }), `
`, _jsxs(_components.p, {
          children: ["For more about main devices and secondary devices, see ", _jsx(_components.a, {
            href: "/en/realtime-media/flexible-classroom/build/enable-teaching-features/proctor-exams-online",
            children: "Proctor exams online"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "Main"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Main device."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Sub"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Secondary device."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "agoracloudproxytype",
          children: "AgoraCloudProxyType"
        }), `
`, _jsxs(_components.p, {
          children: ["The cloud proxy type. Set in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
        })]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "electron",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "electron"
      }), _jsxs(_Fragment, {
        children: [_jsx(_components.p, {
          children: "This TypeScript API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios."
        }), `
`, _jsx(_components.h2, {
          id: "agoraproctorsdk-1",
          children: "AgoraProctorSDK"
        }), `
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "AgoraProctorSDK"
          }), " is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios."]
        }), `
`, _jsx(_components.h3, {
          id: "config-1",
          children: "config"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
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
                  children: "config"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(config: ConfigParams): "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                })]
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "Configures the Agora Proctor SDK."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Parameters"
          })
        }), `
`, _jsxs(_components.table, {
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
                  children: "config"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The configuration for the flexible classroom. See ", _jsx(_components.a, {
                  href: "#configparams",
                  children: "ConfigParams"
                }), " for details."]
              })]
            })
          })]
        }), `
`, _jsx(_components.h3, {
          id: "launch-1",
          children: "launch"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
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
                  children: "(dom: HTMLElement, option: LaunchOption): () "
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
              })
            })
          })
        }), `
`, _jsx(_components.p, {
          children: "Launches a flexible classroom in a proctoring scenario."
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Parameters"
          })
        }), `
`, _jsxs(_components.table, {
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
                children: ["The Document Object Model (DOM). See ", _jsx(_components.a, {
                  href: "https://developer.mozilla.org/en-US/docs/Web/API/Document",
                  children: "Document"
                }), " for details."]
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
                children: ["The classroom launching configuration. See ", _jsx(_components.a, {
                  href: "#launchoption",
                  children: "LaunchOption"
                }), " for details."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Return value"
          })
        }), `
`, _jsx(_components.p, {
          children: "Returns a function used to destroy the scene and recycle resources."
        }), `
`, _jsx(_components.h2, {
          id: "type-definitions-1",
          children: "Type definitions"
        }), `
`, _jsx(_components.h3, {
          id: "configparams-1",
          children: "ConfigParams"
        }), `
`, _jsxs(_components.p, {
          children: ["The global SDK configuration, used in ", _jsx(_components.a, {
            href: "#config",
            children: "AgoraProctorSDK.config"
          }), "."]
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
                  children: " ConfigParams"
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
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The Agora App ID. See ", _jsx(_components.a, {
                  href: "/en/introduction/account#get-the-app-id-and-app-certificate",
                  children: "Get the Agora App ID"
                }), "."]
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
                children: ["(Optional) The region where the classroom is. All clients must use the same region; otherwise, they may fail to communicate with each other. Supported regions are ", _jsx(_components.code, {
                  children: "CN"
                }), " for Mainland China, ", _jsx(_components.code, {
                  children: "NA"
                }), " for North America, ", _jsx(_components.code, {
                  children: "EU"
                }), " for Europe, and ", _jsx(_components.code, {
                  children: "AP"
                }), " for Asia Pacific."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "launchoption-1",
          children: "LaunchOption"
        }), `
`, _jsxs(_components.p, {
          children: ["The classroom launching configuration used in ", _jsx(_components.a, {
            href: "#launch",
            children: "AgoraProctorSDK.launch"
          }), "."]
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
                  children: " LaunchOption"
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
                  children: "  listener"
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
                  children: " ListenerCallback"
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
                  children: "  pretest"
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
                  children: "  rtmToken"
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
                  children: " LanguageEnum"
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
                  children: "  widgets"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " typeof"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraWidgetBase };"
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
                  children: " any"
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
                  children: "  latencyLevel"
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
                  children: " 1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
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
                  children: "  uiMode"
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
                  children: " FcrMultiThemeMode"
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
                  children: "  checkStudentScreenShareState"
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
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                  children: "userUuid"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the following symbols: ", _jsx(_components.code, {
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
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The user name for display in the classroom. This value must be less than 64 bytes."
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
                children: ["The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed for ", _jsx(_components.code, {
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
                children: ["The user's role in the classroom. See ", _jsx(_components.a, {
                  href: "#eduroletypeenum",
                  children: "EduRoleTypeEnum"
                }), " for details."]
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
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "roomName"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The room name for display in the classroom. The string length must be less than 64 bytes."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "listener"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The state of classroom launching: ", _jsx(_components.code, {
                  children: "ready"
                }), " means the classroom is ready, and ", _jsx(_components.code, {
                  children: "destroyed"
                }), " means the classroom has been destroyed."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "pretest"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["Whether to enable the pre-class device test. If set to ", _jsx(_components.code, {
                  children: "true"
                }), ", end users see a pop-up window to test their camera, microphone, and speaker before entering the classroom."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "rtmToken"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The Signaling token used for authentication. See ", _jsx(_components.a, {
                  href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow",
                  children: "Secure authentication with tokens"
                }), "."]
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
                children: ["The language on the classroom UI. See ", _jsx(_components.a, {
                  href: "#languageenum",
                  children: "LanguageEnum"
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "startTime"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "(Optional) The start time (ms) of the class, determined by the first user joining the classroom."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "duration"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The duration (seconds) of the class, determined by the first user joining the classroom. The maximum value is 86,400. Agora recommends that you set this value to the actual class duration."
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
                children: ["(Optional) Extensive widgets that extend the classroom capabilities. See ", _jsx(_components.a, {
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
                  children: "userFlexProperties"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "(Optional) User properties customized by the developer."
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
                children: ["(Optional) Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. See ", _jsx(_components.a, {
                  href: "#launchmediaoptions",
                  children: "LaunchMediaOptions"
                }), " for details."]
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
                children: ["(Optional) The latency level of an audience member. This property does not apply to cohosting users. ", _jsx(_components.code, {
                  children: "1"
                }), " means low latency, where the latency from the sender to the receiver is between 1500 ms and 2000 ms. ", _jsx(_components.code, {
                  children: "2"
                }), " means ultra-low latency, where the latency from the sender to the receiver is between 400 ms and 800 ms. The default value is ", _jsx(_components.code, {
                  children: "2"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "uiMode"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["(Optional) The UI theme mode of the classroom. The default value is ", _jsx(_components.code, {
                  children: "light"
                }), ", which means a light theme. See ", _jsx(_components.a, {
                  href: "#fcrmultithememode",
                  children: "FcrMultiThemeMode"
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "checkStudentScreenShareState"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "(Optional) Whether to kick students out of the classroom immediately when they stop screen sharing."
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
        }), `
`, _jsx(_components.h3, {
          id: "launchmediaoptions-1",
          children: "LaunchMediaOptions"
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
                  children: "  channelProfile"
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
                  children: " ChannelProfile"
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
        }), `
`, _jsxs(_components.p, {
          children: ["Media options, including the media encryption configuration, camera video encoder configuration, and screen sharing video encoder configuration. Set in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                children: ["(Optional) The encoding configuration of the video stream captured by the camera. See ", _jsx(_components.a, {
                  href: "#eduvideoencoderconfiguration",
                  children: "EduVideoEncoderConfiguration"
                }), " for details."]
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
                children: ["(Optional) The encoding configuration of the screen sharing stream. See ", _jsx(_components.a, {
                  href: "#eduvideoencoderconfiguration",
                  children: "EduVideoEncoderConfiguration"
                }), " for details."]
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
                children: ["(Optional) The media stream encryption configuration. See ", _jsx(_components.a, {
                  href: "#mediaencryptionconfig",
                  children: "MediaEncryptionConfig"
                }), " for details."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "channelProfile"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The channel profile configuration. See ", _jsx(_components.a, {
                  href: "#channelprofile",
                  children: "ChannelProfile"
                }), " for details."]
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
                children: ["The web configuration for browser codec format and channel mode. ", _jsx(_components.code, {
                  children: "codec"
                }), " can be ", _jsx(_components.code, {
                  children: '"vp9"'
                }), " for VP9 or ", _jsx(_components.code, {
                  children: '"h264"'
                }), " for H.264. ", _jsx(_components.code, {
                  children: "mode"
                }), " can be ", _jsx(_components.code, {
                  children: '"rtc"'
                }), " for communication mode or ", _jsx(_components.code, {
                  children: '"live"'
                }), " for live-streaming mode."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "eduvideoencoderconfiguration-1",
          children: "EduVideoEncoderConfiguration"
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
        }), `
`, _jsx(_components.p, {
          children: "The video encoder configuration."
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                children: "The frame rate of the video in FPS. The default value is 15."
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
                children: "The bitrate of the video in Kbps. The default value is 200."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "mediaencryptionconfig-1",
          children: "MediaEncryptionConfig"
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
        }), `
`, _jsxs(_components.p, {
          children: ["The media stream encryption configuration used in ", _jsx(_components.a, {
            href: "#launchmediaoptions",
            children: "LaunchMediaOptions"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Property"
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
                }), ". Teachers and students in the same classroom must use the same encryption mode and key."]
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
        }), `
`, _jsx(_components.h3, {
          id: "channelprofile-1",
          children: "ChannelProfile"
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " ChannelProfile"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  Communication"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  LiveBroadcasting"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The channel profiles, used in ", _jsx(_components.a, {
            href: "#launchmediaoptions",
            children: "LaunchMediaOptions"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "Communication"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Communication mode, commonly used for one-to-one or one-to-many classrooms."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "LiveBroadcasting"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Live-streaming mode. This option costs less than communication mode and has a higher latency."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "mediaencryptionmode-1",
          children: "MediaEncryptionMode"
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
                  children: " enum"
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
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_128_XTS"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_128_ECB"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_256_XTS"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 3"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_128_GCM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 5"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  AES_256_GCM"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 6"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The media stream encryption mode, used in ", _jsx(_components.a, {
            href: "#mediaencryptionconfig",
            children: "MediaEncryptionConfig"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
        }), `
`, _jsx(_components.h3, {
          id: "fcrmultithememode-1",
          children: "FcrMultiThemeMode"
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " FcrMultiThemeMode"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  light"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'light'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  dark"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'dark'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The UI theme mode of the classroom, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "light"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Light theme."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "dark"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Dark theme."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "eduroletypeenum-1",
          children: "EduRoleTypeEnum"
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
                  children: " enum"
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
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  teacher"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  student"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The role of the user in the classroom, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                }), ": Teacher or proctor."]
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
                }), ": Student or exam taker."]
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "eduroomtypeenum-1",
          children: "EduRoomTypeEnum"
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
                  children: " enum"
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
                  children: " {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  RoomProctor"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 6"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsxs(_components.p, {
          children: ["The classroom type, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "RoomProctor"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": A proctored exam. In proctoring scenarios, ", _jsx(_components.code, {
                  children: "roomType"
                }), " can only be set to this value."]
              })]
            })
          })]
        }), `
`, _jsx(_components.h3, {
          id: "languageenum-1",
          children: "LanguageEnum"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
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
                  children: " LanguageEnum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'en'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " |"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'zh'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
                })]
              })
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["The language on the UI, used in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: '"en"'
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
                  children: '"zh"'
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Chinese."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "devicetypeenum-1",
          children: "DeviceTypeEnum"
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
                  children: " enum"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " DeviceTypeEnum"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  Main"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'main'"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  Sub"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " 'sub'"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ","
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
`, _jsx(_components.p, {
          children: "Device types."
        }), `
`, _jsxs(_components.p, {
          children: ["For more about main devices and secondary devices, see ", _jsx(_components.a, {
            href: "/en/realtime-media/flexible-classroom/build/enable-teaching-features/proctor-exams-online",
            children: "Proctor exams online"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
                  children: "Main"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Main device."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "Sub"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Secondary device."
              })]
            })]
          })]
        }), `
`, _jsx(_components.h3, {
          id: "agoracloudproxytype-1",
          children: "AgoraCloudProxyType"
        }), `
`, _jsxs(_components.p, {
          children: ["The cloud proxy type. Set in ", _jsx(_components.a, {
            href: "#launchoption",
            children: "LaunchOption"
          }), "."]
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Value"
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
        })]
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
        children: "This Swift API reference covers the Agora Proctor SDK APIs for launching and managing Flexible Classroom proctoring scenarios on iOS."
      }), _jsx(_components.h2, {
        id: "agoraproctorsdk-2",
        children: "AgoraProctorSDK"
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "AgoraProctorSDK"
        }), " is the basic interface of the Agora Proctor SDK and provides the main methods for a flexible classroom in proctoring scenarios."]
      }), _jsx(_components.h3, {
        id: "init",
        children: "init"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (instancetype)"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "init:"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorLaunchConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")config"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "            delegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(id"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "AgoraProctorSDKDelegate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable)delegate;"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Initializes the ", _jsx(_components.code, {
          children: "AgoraProctorSDK"
        }), " instance."]
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
                children: "config"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Configuration for a flexible classroom. See ", _jsx(_components.a, {
                href: "#agoraproctorlaunchconfig",
                children: "AgoraProctorLaunchConfig"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "delegate"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The event handler for the Agora Proctor SDK. See ", _jsx(_components.a, {
                href: "#agoraproctorsdkdelegate",
                children: "AgoraProctorSDKDelegate"
              }), "."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "launch-2",
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (void)launch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")(void))success"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "       failure"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "^"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")(NSError "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "))failure;"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "Launches a flexible classroom in a proctoring scenario."
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
                children: "success"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The callback triggered by a successful launch."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "failure"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The callback triggered by a failed launch, which returns an error."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "version",
        children: "version"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")version;"
              })]
            })
          })
        })
      }), _jsx(_components.p, {
        children: "Gets the SDK version."
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Returns"
        })
      }), _jsx(_components.p, {
        children: "The SDK version."
      }), _jsx(_components.h2, {
        id: "agoraproctorsdkdelegate",
        children: "AgoraProctorSDKDelegate"
      }), _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "AgoraProctorSDKDelegate"
        }), " reports events related to SDK status to your app."]
      }), _jsx(_components.h3, {
        id: "didexit",
        children: "didExit"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (void)proctorSDK"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorSDK "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")proctor"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "           didExit"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorExitReason)reason;"
              })]
            })]
          })
        })
      }), _jsx(_components.p, {
        children: "This callback is triggered when a user exits or is kicked from the room."
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
                children: "reason"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The reason for the exit. See ", _jsx(_components.a, {
                href: "#agoraproctorexitreason",
                children: "AgoraProctorExitReason"
              }), "."]
            })]
          })
        })]
      }), _jsx(_components.h2, {
        id: "objects",
        children: "Objects"
      }), _jsx(_components.h3, {
        id: "agoraproctorlaunchconfig",
        children: "AgoraProctorLaunchConfig"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@interface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraProctorLaunchConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " NSObject"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy) NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userName;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy) NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userUuid;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) AgoraProctorUserRole userRole;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy) NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "roomName;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy) NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "roomUuid;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy) NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "appId;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy) NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "token;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) AgoraProctorRegion region;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, strong, nullable) AgoraProctorMediaOptions "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "mediaOptions;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy, nullable) NSDictionary"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", id"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ">"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "userProperties;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, strong) NSDictionary"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", AgoraWidgetConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*>"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " *"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "widgets;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (instancetype)initWithUserName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")userName"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        userUuid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")userUuid"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        userRole"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorUserRole)userRole"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        roomName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")roomName"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        roomUuid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")roomUuid"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                           appId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")appId"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                           token"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")token;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (instancetype)initWithUserName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")userName"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        userUuid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")userUuid"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        userRole"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorUserRole)userRole"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        roomName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")roomName"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                        roomUuid"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")roomUuid"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                           appId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")appId"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                           token"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")token"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                          region"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorRegion)region"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                    mediaOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorMediaOptions "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable)mediaOptions"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                  userProperties"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSDictionary "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable)userProperties;"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["The classroom launching configuration used in ", _jsx(_components.a, {
          href: "#launch",
          children: "launch"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Property"
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
                children: "userName"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The user name for display in the classroom. This value must be less than 64 bytes."
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
              children: ["The user ID. This is the globally unique identifier of a user. This value must be the same as the User ID that you use for generating a Signaling token. The string length must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed in the Web ", _jsx(_components.code, {
                children: "userUuid"
              }), " description."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "userRole"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The user's role in the classroom. See ", _jsx(_components.a, {
                href: "#agoraproctoruserrole",
                children: "AgoraProctorUserRole"
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
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The room name for display in the classroom. The string length must be less than 64 bytes."
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
              children: ["The room ID. This is the globally unique identifier of a classroom. This value must be less than 64 bytes. Supported characters include lowercase and uppercase English letters, numbers, spaces, and the symbols listed in the Web ", _jsx(_components.code, {
                children: "userUuid"
              }), " description."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "appId"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["The Agora App ID. See ", _jsx(_components.a, {
                href: "/en/introduction/account#get-the-app-id-and-app-certificate",
                children: "Get the Agora App ID"
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
              children: ["The Signaling token used for authentication. See ", _jsx(_components.a, {
                href: "/en/realtime-media/flexible-classroom/build/set-up-your-account-and-authentication/authentication-workflow",
                children: "Secure authentication with tokens"
              }), "."]
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
              children: ["The region where the classrooms are. All clients must use the same region to communicate with each other. Supported regions are ", _jsx(_components.code, {
                children: "CN"
              }), " for Mainland China, ", _jsx(_components.code, {
                children: "NA"
              }), " for North America, ", _jsx(_components.code, {
                children: "EU"
              }), " for Europe, and ", _jsx(_components.code, {
                children: "AP"
              }), " for Asia Pacific."]
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
              children: ["Media options, including the media stream encryption configuration. See ", _jsx(_components.a, {
                href: "#agoraproctormediaoptions",
                children: "AgoraProctorMediaOptions"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "userProperties"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User properties customized by the developer."
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
              children: ["Pass in ", _jsx(_components.code, {
                children: "widgetId"
              }), " and ", _jsx(_components.code, {
                children: "AgoraWidgetConfig"
              }), "."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoraproctormediaoptions",
        children: "AgoraProctorMediaOptions"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@interface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraProctorMediaOptions "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " NSObject"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, strong, nullable) AgoraProctorMediaEncryptionConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "encryptionConfig;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, strong, nullable) AgoraProctorVideoEncoderConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "videoEncoderConfig;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) AgoraProctorLatencyLevel latencyLevel;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (instancetype)initWithEncryptionConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorMediaEncryptionConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable)encryptionConfig"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                      videoEncoderConfig"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorVideoEncoderConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " _Nullable)videoEncoderConfig"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                            latencyLevel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorLatencyLevel)latencyLevel;"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Media options. Set in ", _jsx(_components.a, {
          href: "#agoraproctorlaunchconfig",
          children: "AgoraProctorLaunchConfig"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Property"
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
                children: "encryptionConfig"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The media stream encryption configuration. See ", _jsx(_components.a, {
                href: "#agoraproctormediaencryptionconfig",
                children: "AgoraProctorMediaEncryptionConfig"
              }), "."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "videoEncoderConfig"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["(Optional) The video encoder configuration. See ", _jsx(_components.a, {
                href: "#agoraproctorvideoencoderconfig",
                children: "AgoraProctorVideoEncoderConfig"
              }), "."]
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
              children: ["The latency level of an audience member. This property does not apply to cohosting users. The default value is ", _jsx(_components.code, {
                children: "low"
              }), ", which means low latency. See ", _jsx(_components.a, {
                href: "#agoraproctorlatencylevel",
                children: "AgoraProctorLatencyLevel"
              }), "."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoraproctormediaencryptionconfig",
        children: "AgoraProctorMediaEncryptionConfig"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@interface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraProctorMediaEncryptionConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " NSObject"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) AgoraProctorMediaEncryptionMode mode;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, copy) NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "key;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (instancetype)initWithMode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorMediaEncryptionMode)mode"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                         key"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSString "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")key;"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["The media stream encryption configuration used in ", _jsx(_components.a, {
          href: "#agoraproctormediaoptions",
          children: "AgoraProctorMediaOptions"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Property"
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
                href: "#agoraproctormediaencryptionmode",
                children: "AgoraProctorMediaEncryptionMode"
              }), "."]
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
        id: "agoraproctorvideoencoderconfig",
        children: "AgoraProctorVideoEncoderConfig"
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
          icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
          children: _jsxs(_components.code, {
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@interface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AgoraProctorVideoEncoderConfig "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " NSObject"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) NSUInteger dimensionWidth;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) NSUInteger dimensionHeight;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) NSUInteger frameRate;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) NSUInteger bitRate;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "@property"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (nonatomic, assign) AgoraProctorMirrorMode mirrorMode;"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line"
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "-"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (instancetype)initWithDimensionWidth"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSUInteger)dimensionWidth"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                       dimensionHeight"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSUInteger)dimensionHeight"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                             frameRate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSUInteger)frameRate"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                               bitRate"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(NSUInteger)bitRate"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "                            mirrorMode"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: ":"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AgoraProctorMirrorMode)mirrorMode;"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["The video encoder configuration used in ", _jsx(_components.a, {
          href: "#agoraproctormediaoptions",
          children: "AgoraProctorMediaOptions"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Property"
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
                children: "dimensionWidth"
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
                children: "dimensionHeight"
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
              children: "The frame rate of the video in FPS. The default value is 15."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "bitRate"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "The bitrate of the video in Kbps. The default value is 200."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "mirrorMode"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: ["Whether video mirror mode is enabled. The default value is ", _jsx(_components.code, {
                children: "AgoraProctorMirrorModeDisable"
              }), ", which means mirror mode is disabled. See ", _jsx(_components.a, {
                href: "#agoraproctormirrormode",
                children: "AgoraProctorMirrorMode"
              }), "."]
            })]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "enums",
        children: "Enums"
      }), _jsx(_components.h3, {
        id: "agoraproctormirrormode",
        children: "AgoraProctorMirrorMode"
      }), _jsxs(_components.p, {
        children: ["Whether to enable mirror mode, used in ", _jsx(_components.a, {
          href: "#agoraproctorvideoencoderconfig",
          children: "AgoraProctorVideoEncoderConfig"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Value"
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
                children: "disabled"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "0"
              }), ": Disable mirror mode."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "enabled"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "1"
              }), ": Enable mirror mode."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoraproctorregion",
        children: "AgoraProctorRegion"
      }), _jsxs(_components.p, {
        children: ["The region where classrooms are, used in ", _jsx(_components.a, {
          href: "#agoraproctorlaunchconfig",
          children: "AgoraProctorLaunchConfig"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Value"
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
                children: "CN"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "0"
              }), ": Mainland China."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "NA"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "1"
              }), ": North America."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "EU"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "2"
              }), ": Europe."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AP"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "3"
              }), ": Asia Pacific."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoraproctorexitreason",
        children: "AgoraProctorExitReason"
      }), _jsxs(_components.p, {
        children: ["The reason for exiting the Agora Proctor SDK, used in the ", _jsx(_components.a, {
          href: "#didexit",
          children: "didExit"
        }), " callback."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Value"
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
                children: "normal"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User exits the room normally."
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "kickOut"
              })
            }), _jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: "User is kicked out of the room."
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoraproctorlatencylevel",
        children: "AgoraProctorLatencyLevel"
      }), _jsxs(_components.p, {
        children: ["The latency level of an audience member, used in ", _jsx(_components.a, {
          href: "#agoraproctorlaunchconfig",
          children: "AgoraProctorLaunchConfig"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Value"
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
                children: "low"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "1"
              }), ": Low latency. The latency from the sender to the receiver is between 1500 ms and 2000 ms."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "ultraLow"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "2"
              }), ": Ultra-low latency. The latency from the sender to the receiver is between 400 ms and 800 ms."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoraproctoruserrole",
        children: "AgoraProctorUserRole"
      }), _jsxs(_components.p, {
        children: ["The user role in the classroom, used in ", _jsx(_components.a, {
          href: "#agoraproctorlaunchconfig",
          children: "AgoraProctorLaunchConfig"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Value"
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
                children: "invalid"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "0"
              }), ": Recording robot."]
            })]
          }), _jsxs(_components.tr, {
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
              }), ": Teacher."]
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
              }), ": Student."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "assistant"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "3"
              }), ": Assistant."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "observer"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "4"
              }), ": Observer."]
            })]
          })]
        })]
      }), _jsx(_components.h3, {
        id: "agoraproctormediaencryptionmode",
        children: "AgoraProctorMediaEncryptionMode"
      }), _jsxs(_components.p, {
        children: ["The media stream encryption mode, used in ", _jsx(_components.a, {
          href: "#agoraproctormediaencryptionconfig",
          children: "AgoraProctorMediaEncryptionConfig"
        }), "."]
      }), _jsxs(_components.table, {
        children: [_jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              style: {
                textAlign: "left"
              },
              children: "Value"
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
                children: "None"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "0"
              }), ": No encryption."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES128XTS"
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
                children: "AES128ECB"
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
                children: "AES256XTS"
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
                children: "SM4128ECB"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "4"
              }), ": 128-bit SM4 encryption, ECB mode."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES128GCM"
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
                children: "AES256GCM"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "6"
              }), ": 256-bit AES encryption, GCM mode."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES128GCM2"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "7"
              }), ": Enhanced 128-bit AES encryption, GCM mode. Compared with ", _jsx(_components.code, {
                children: "AES128GCM"
              }), ", this mode is more secure and requires setting a salt."]
            })]
          }), _jsxs(_components.tr, {
            children: [_jsx(_components.td, {
              style: {
                textAlign: "left"
              },
              children: _jsx(_components.code, {
                children: "AES256GCM2"
              })
            }), _jsxs(_components.td, {
              style: {
                textAlign: "left"
              },
              children: [_jsx(_components.code, {
                children: "8"
              }), ": Enhanced 256-bit AES encryption, GCM mode. Compared with ", _jsx(_components.code, {
                children: "AES256GCM"
              }), ", this mode is more secure and requires setting a salt."]
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
