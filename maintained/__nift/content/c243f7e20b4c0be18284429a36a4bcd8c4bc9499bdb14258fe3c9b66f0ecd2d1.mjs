import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Configure audio encoding",
  description: "Configure audio encoding properties and scenarios for Video Calling apps."
};
export let _markdown = `

Audio quality requirements vary with application use-case. For example, in professional use-cases such as radio stations and singing competitions, users are particularly sensitive to audio quality. In such cases, support for dual-channel and high-quality sound is required. High-quality sound means setting a high sampling rate and a high bitrate to achieve realistic audio. RTC SDK enables you to configure audio encoding properties to meet such requirements.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                             | Description                                                                                                                |
    | :------------------------------ | :------------------------------------------------------------------------------------------------------------------------- |
    | \`create(config.mAudioScenario)\` | While creating an \`RtcEngine\` instance, set the audio application scenario. The default value is \`AUDIO_SCENARIO_DEFAULT\`. |
    | \`setAudioProfile(profile)\`      | You can set audio encoding properties before or after joining a channel.                                                   |
    | \`setAudioScenario\`              | You can set an application scenario before or after joining a channel.                                                     |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.DEFAULT);
        engine = RtcEngine.create(config);

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_DEFAULT);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.DEFAULT)
        engine = RtcEngine.create(config)

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_DEFAULT)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Gaming voice chat [#gaming-voice-chat]

    This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.CHATROOM);
        engine = RtcEngine.create(config);

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_SPEECH_STANDARD);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.CHATROOM)
        engine = RtcEngine.create(config)

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_SPEECH_STANDARD)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Scripted role play [#scripted-role-play]

    This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.CHATROOM);
        engine = RtcEngine.create(config);

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_STANDARD);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.CHATROOM)
        engine = RtcEngine.create(config)

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_STANDARD)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### KTV [#ktv]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING);
        engine = RtcEngine.create(config);

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING)
        engine = RtcEngine.create(config)

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Voice radio [#voice-radio]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING);
        engine = RtcEngine.create(config);

        // Set the required audio encoding properties
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING)
        engine = RtcEngine.create(config)

        // Set the required audio encoding properties
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Music teaching [#music-teaching]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING);
        engine = RtcEngine.create(config);

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING)
        engine = RtcEngine.create(config)

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Dual-teacher classroom [#dual-teacher-classroom]

    This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:

    <CodeBlockTabs defaultValue="java">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="java">
          Java
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="kotlin">
          Kotlin
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="java">
        \`\`\`java
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.CHATROOM);
        engine = RtcEngine.create(config);

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine instance with a specific audio application scenario
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.CHATROOM)
        engine = RtcEngine.create(config)

        // Define the audio encoding settings
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### Sample projects [#sample-projects]

    Agora offers the following open-source sample project for setting audio encoding properties and application scenario for your reference.

    * [JoinChannelAudio](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/basic/JoinChannelAudio.java)

    ### API reference [#api-reference]

    * [\`create\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2)
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech-1]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-1]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-1]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                            | Description                                                                                                                                  |
    | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`sharedEngineWithConfig(config.audioScenario)\` | While creating an \`AgoraRtcEngineKit\` instance, set up the audio application scenario. The default value is \`AgoraAudioScenarioHighDefault\`. |
    | \`setAudioProfile(profile)\`                     | You can set audio encoding properties before or after joining a channel.                                                                     |
    | \`setAudioScenario\`                             | You can set an application scenario before or after joining a channel.                                                                       |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching-1]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .default
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .default
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Gaming voice chat [#gaming-voice-chat-1]

    This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .chatRoom
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .speechStandard
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Scripted role play [#scripted-role-play-1]

    This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .chatRoom
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicStandard
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### KTV [#ktv-1]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .gameStreaming
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicHighQuality
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Voice radio [#voice-radio-1]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .gameStreaming
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Set the required audio encoding properties
    var profile:AgoraAudioProfile = .musicHighQualityStereo
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Music teaching [#music-teaching-1]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .gameStreaming
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicStandardStereo
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Dual-teacher classroom [#dual-teacher-classroom-1]

    This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var audioScenario:AgoraAudioScenario = .chatRoom
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicStandardStereo
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario \`AudioScenarioGameStreaming(3)\`. In this scenario, the SDK switches to media volume to address the issue.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-1]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### Sample projects [#sample-projects-1]

    Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference.

    * [JoinChannelAudio](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Basic/JoinChannelAudio)

    ### API reference [#api-reference-1]

    * [\`sharedEngine(with: config, delegate)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))
    * [\`AgoraRtcEngineConfig\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcengineconfig)
    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\))
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech-2]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-2]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-2]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                            | Description                                                                                                                                  |
    | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`sharedEngineWithConfig(config.audioScenario)\` | While creating an \`AgoraRtcEngineKit\` instance, set up the audio application scenario. The default value is \`AgoraAudioScenarioHighDefault\`. |
    | \`setAudioProfile(profile)\`                     | You can set audio encoding properties before or after joining a channel.                                                                     |
    | \`setAudioScenario\`                             | You can set an application scenario before or after joining a channel.                                                                       |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching-2]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .default
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .default
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Gaming voice chat [#gaming-voice-chat-2]

    This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .chatRoom
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .speechStandard
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Scripted role play [#scripted-role-play-2]

    This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .chatRoom
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicStandard
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### KTV [#ktv-2]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .gameStreaming
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicHighQuality
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Voice radio [#voice-radio-2]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .gameStreaming
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Set the required audio encoding properties
    var profile:AgoraAudioProfile = .musicHighQualityStereo
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Music teaching [#music-teaching-2]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var scenario:AgoraAudioScenario = .gameStreaming
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicStandardStereo
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ### Dual-teacher classroom [#dual-teacher-classroom-2]

    This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:

    \`\`\`swift
    // Create the AgoraRtcEngineKit instance with a specific audio application scenario
    var audioScenario:AgoraAudioScenario = .chatRoom
    config.audioScenario = audioScenario
    agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)

    // Define the audio encoding settings
    var profile:AgoraAudioProfile = .musicStandardStereo
    agoraKit.setAudioProfile(audioProfile)
    \`\`\`

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-2]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### Sample projects [#sample-projects-2]

    Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference.

    * [JoinChannelAudio](https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Basic/JoinChannelAudio)

    ### API reference [#api-reference-2]

    * [\`sharedEngine(with: config, delegate)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/sharedengine\\(with\\:delegate:\\))
    * [\`AgoraRtcEngineConfig\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcengineconfig)
    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\))
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech-3]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-3]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-3]

    The Agora Web SDK offers the following three methods to create local audio tracks:

    * \`createMicrophoneAudioTrack\`
    * \`createBufferSourceAudioTrack\`
    * \`createCustomAudioTrack\`

    You can adjust the audio encoding configuration by modifying the \`encoderConfig\` parameter in these methods. \`encoderConfig\` supports the following two settings:

    * Use the audio encoding properties preset by the SDK.
    * A custom object with various audio encoding parameters.

    ### Using preset audio encoding properties [#using-preset-audio-encoding-properties]

    \`\`\`javascript
    AgoraRTC.createMicrophoneAudioTrack({
     encoderConfig: "high_quality_stereo",
    }).then(/**...**/);
    \`\`\`

    ### Customizing audio encoding properties [#customizing-audio-encoding-properties]

    \`\`\`javascript
    AgoraRTC.createMicrophoneAudioTrack({
     encoderConfig: {
      sampleRate: 48000,
      stereo: true,
      bitrate: 128,
     },
    }).then(/**...**/);
    \`\`\`

    ### Development considerations [#development-considerations]

    Set the audio encoding properties before calling the \`AgoraRTCClient.publish\` method to publish the audio track. Once the audio track is published, its audio encoding properties cannot be modified.

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-3]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### API reference [#api-reference-3]

    * [\`createMicrophoneAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack)
    * [\`createBufferSourceAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createbuffersourceaudiotrack)
    * [\`createCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcustomaudiotrack)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech-4]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-4]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-4]

    This section explains how to set audio encoding properties and application scenarios for common applications.

    | API                                 | Description                                                                                                                        |
    | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
    | \`initialize(context.audioScenario)\` | While initializing an \`IRtcEngine\` instance, set up the audio application scenario. The default value is \`AUDIO_SCENARIO_DEFAULT\`. |
    | \`setAudioProfile(profile)\`          | Audio encoding properties can be set before and after joining a channel.                                                           |
    | \`setAudioScenario\`                  | Audio application scenarios can be set before and after joining the channel.                                                       |

    You can add the following sample code to your project.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching-3]

    The 1-to-1 interactive teaching use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_DEFAULT;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_DEFAULT);
    \`\`\`

    ### KTV [#ktv-3]

    KTV mainly requires high sound quality and good expressiveness for music and singing. Add the following code to your project:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_GAME_STREAMING;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_MUSIC_HIGH_QUALITY);
    \`\`\`

    ### Voice radio [#voice-radio-3]

    Voice radio generally uses professional audio equipment, mainly requiring high sound quality and stereo. Add the following code to your project:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_GAME_STREAMING;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);
    \`\`\`

    ### Music teaching [#music-teaching-3]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_GAME_STREAMING;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_MUSIC_STANDARD_STEREO);
    \`\`\`

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-4]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### Sample projects [#sample-projects-3]

    Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference.

    * [AudioProfile](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioProfile)

    ### API reference [#api-reference-4]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2)
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech-5]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-5]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-5]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                    | Description                                                                                                                      |
    | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
    | \`initialize(RtcEngineContext context)\` | While initializing an \`IRtcEngine\` instance, set up the audio application scenario. The default value is \`AudioScenarioDefault\`. |
    | \`setAudioProfile(profile)\`             | You can set audio encoding properties before or after joining a channel.                                                         |
    | \`setAudioScenario(scenario)\`           | You can set an application scenario before or after joining a channel.                                                           |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching-4]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioDefault,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileDefault);
    \`\`\`

    ### KTV [#ktv-4]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioDefault,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileMusicHighQuality);
    \`\`\`

    ### Voice radio [#voice-radio-4]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioGameStreaming,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileMusicHighQualityStereo);
    \`\`\`

    ### Music teaching [#music-teaching-4]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioDefault,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileMusicStandardStereo);
    \`\`\`

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-5]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### Sample projects [#sample-projects-4]

    Agora offers the following open-source sample projects for setting audio encoding properties and application scenario functions for your reference.

    * [JoinChannelAudio](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx)

    ### API reference [#api-reference-5]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile)
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech-6]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-6]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-6]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                  | Description                                                                                                                     |
    | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
    | \`initialize(context.audioScenario)\`  | While initializing an \`RtcEngine\` instance, set up the audio application scenario. The default value is \`audioScenarioDefault\`. |
    | \`setAudioProfile(profile, scenario)\` | You can set audio encoding properties before or after joining a channel.                                                        |
    | \`setAudioScenario(scenario)\`         | You can set an application scenario before or after joining a channel.                                                          |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching-5]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`dart
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AudioScenarioType.audioScenarioDefault;
    await rtcEngine.initialize(context);

    // Define the audio encoding settings
    await rtcEngine.setAudioProfile(AudioProfileType.audioProfileDefault);
    \`\`\`

    ### KTV [#ktv-5]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    \`\`\`dart
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AudioScenarioType.audioScenarioGameStreaming;
    await rtcEngine.initialize(context);

    // Define the audio encoding settings
    await rtcEngine.setAudioProfile(AudioProfileType.audioScenarioGameStreaming);
    \`\`\`

    ### Voice radio [#voice-radio-5]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    \`\`\`dart
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AudioProfileType.audioScenarioChorus;
    await rtcEngine.initialize(context);

    // Define the audio encoding settings
    await rtcEngine.setAudioProfile(AudioProfileType.audioScenarioChorus);
    \`\`\`

    ### Music teaching [#music-teaching-5]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`dart
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AudioProfileType.audioScenarioMeeting;
    await rtcEngine.initialize(context);

    // Define the audio encoding settings
    await rtcEngine.setAudioProfile(AudioProfileType.audioScenarioMeeting);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario \`audioScenarioGameStreaming(3)\`. In this scenario, the SDK switches to media volume to address the issue.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-6]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### API reference [#api-reference-6]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile)
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app.

    ## Understand the tech [#understand-the-tech-7]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-7]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-7]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                    | Description                                                                                                                      |
    | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
    | \`initialize(RtcEngineContext context)\` | While initializing an \`IRtcEngine\` instance, set up the audio application scenario. The default value is \`AudioScenarioDefault\`. |
    | \`setAudioProfile(profile)\`             | You can set audio encoding properties before or after joining a channel.                                                         |
    | \`setAudioScenario(scenario)\`           | You can set an application scenario before or after joining a channel.                                                           |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching-6]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioDefault,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileDefault);
    \`\`\`

    ### KTV [#ktv-6]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioDefault,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileMusicHighQuality);
    \`\`\`

    ### Voice radio [#voice-radio-6]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioGameStreaming,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileMusicHighQualityStereo);
    \`\`\`

    ### Music teaching [#music-teaching-6]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`typescript
    // Initialize the IRtcEngine instance with a specific audio application scenario
    const engine = createAgoraRtcEngine();
    engine.initialize({
     appId,
     ...,
     audioScenario: AudioScenarioType.AudioScenarioDefault,
    });

    // Define the audio encoding settings
    engine.setAudioProfile(AudioProfileType.AudioProfileMusicStandardStereo);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario \`AudioScenarioGameStreaming(3)\`. In this scenario, the SDK switches to media volume to address the issue.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-7]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### API reference [#api-reference-7]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile)
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game.

    ## Understand the tech [#understand-the-tech-8]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-8]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-8]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                    | Description                                                                                                                        |
    | :------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
    | \`Initialize(RtcEngineContext context)\` | While initializing an \`IRtcEngine\` instance, set up the audio application scenario. The default value is \`AUDIO_SCENARIO_DEFAULT\`. |
    | \`SetAudioProfile(profile)\`             | You can set audio encoding properties before or after joining a channel.                                                           |
    | \`SetAudioScenario(scenario)\`           | You can set an application scenario before or after joining a channel.                                                             |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 interactive teaching [#1-on-1-interactive-teaching-7]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`csharp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context = new RtcEngineContext();
    context.audioScenario = AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT;
    RtcEngine.Initialize(context);

    // Define the audio encoding settings
    RtcEngine.SetAudioProfile(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_DEFAULT);
    \`\`\`

    ### KTV [#ktv-7]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    \`\`\`csharp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context = new RtcEngineContext();
    context.audioScenario = AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING;
    RtcEngine.Initialize(context);

    // Define the audio encoding settings
    RtcEngine.SetAudioProfile(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_HIGH_QUALITY);
    \`\`\`

    ### Voice radio [#voice-radio-7]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    \`\`\`csharp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context = new RtcEngineContext();
    context.audioScenario = AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING;
    RtcEngine.Initialize(context);

    // Define the audio encoding settings
    RtcEngine.SetAudioProfile(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);
    \`\`\`

    ### Music teaching [#music-teaching-7]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`csharp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context = new RtcEngineContext();
    context.audioScenario = AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING;
    RtcEngine.Initialize(context);

    // Define the audio encoding settings
    RtcEngine.SetAudioProfile(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_STANDARD_STEREO);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario \`AUDIO_SCENARIO_GAME_STREAMING(3)\`. In this scenario, the SDK switches to media volume to address the issue.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-8]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-8]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### API reference [#api-reference-8]

    * [\`Initialize\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`SetAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2)
    * [\`SetAudioScenario\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game.

    ## Understand the tech [#understand-the-tech-9]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-9]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-9]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                 | Description                                                                                                                        |
    | :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
    | \`initialize(context.audioScenario)\` | While initializing an \`IRtcEngine\` instance, set up the audio application scenario. The default value is \`AUDIO_SCENARIO_DEFAULT\`. |
    | \`setAudioProfile(profile)\`          | You can set audio encoding properties before or after joining a channel.                                                           |
    | \`setAudioScenario\`                  | You can set an application scenario before or after joining a channel.                                                             |

    Refer to the following examples to choose the most appropriate settings for your application.

    ### 1-on-1 Interactive teaching [#1-on-1-interactive-teaching-8]

    This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_DEFAULT;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_DEFAULT);
    \`\`\`

    ### KTV [#ktv-8]

    KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_GAME_STREAMING;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_MUSIC_HIGH_QUALITY);
    \`\`\`

    ### Voice radio [#voice-radio-8]

    Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_GAME_STREAMING;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);
    \`\`\`

    ### Music teaching [#music-teaching-8]

    This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:

    \`\`\`cpp
    // Initialize the IRtcEngine instance with a specific audio application scenario
    RtcEngineContext context;
    context.audioScenario = AUDIO_SCENARIO_GAME_STREAMING;
    m_rtcEngine->initialize(context);

    // Define the audio encoding settings
    m_rtcEngine->setAudioProfile(AUDIO_PROFILE_MUSIC_STANDARD_STEREO);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario \`AUDIO_SCENARIO_GAME_STREAMING(3)\`. In this scenario, the SDK switches to media volume to address the issue.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-9]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-9]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### Sample projects [#sample-projects-5]

    Agora offers an open-source sample project for your reference.

    * [GitHub](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example)

    ### API reference [#api-reference-9]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2)
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game.

    ## Understand the tech [#understand-the-tech-10]

    RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario.

    ## Prerequisites [#prerequisites-10]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-10]

    This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:

    | API                                  | Description                                                                                                                        |
    | :----------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
    | \`Initialize(context.audioScenario)\`  | While initializing an \`IRtcEngine\` instance, set up the audio application scenario. The default value is \`AUDIO_SCENARIO_DEFAULT\`. |
    | \`SetAudioProfile(profile, scenario)\` | You can set audio encoding properties before or after joining a channel.                                                           |
    | \`SetAudioScenario\`                   | You can set an application scenario before or after joining a channel.                                                             |

    ### Set audio encoding properties [#set-audio-encoding-properties]

    This subsection describes how to call \`SetAudioProfile\` to set audio encoding properties.

    1. Create UMG

    Create a **ComboBoxString** (dropdown list) widget, named **CBS\\_Audio\\_Profile**, where you can select the audio encoding properties as needed. The default option is **AUDIO\\_PROFILE\\_DEFAULT**, with other options detailed in [EAUDIO\\_PROFILE\\_TYPE](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/enum_audioscenariotype.html), as shown in the image below:

    ![ConfigureAudioEncodingBlueprint](https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-1.png)

    2. Bind UI event

    Create a **Bind Event to On Selection Changed node**, connecting the **CBS\\_Audio\\_Profile** widget and the **OnSetAudioProfile** callback. Selecting different audio encoding properties in the **CBS\\_Audio\\_Profile** dropdown list triggers the **OnSetAudioProfile** callback, as shown in the image below:

    ![ConfigureAudioEncodingBlueprint](https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-2.png)

    3. Implement callback function

    Create the **OnSetAudioProfile** callback function, configuring the following parameters:

    | Input parameter | Data type | Parameter description                                                                                                                          |
    | :-------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`SelectedItem\`  | String    | The selected audio encoding property option.                                                                                                   |
    | \`SelectionType\` | Enum      | The type of selection information, see [ESelectInfo](https://docs.unrealengine.com/4.26/en-US/API/Runtime/SlateCore/Types/ESelectInfo__Type/). |

    When this callback is triggered, the selected audio encoding property is passed into **SetAudioProfile** as a profile parameter, and the method is executed to complete the setting, as shown in the image below:

    ![ConfigureAudioEncodingBlueprint](https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-3.png)

    ### Set up audio application scenarios [#set-up-audio-application-scenarios]

    This subsection explains how to call **SetAudioScenario** to set audio application scenarios.

    1. Create UMG

    Create a **ComboBoxString** (dropdown list) widget, named **CBS\\_Audio\\_Scenario**, where you select the audio application scenarios as needed. The default option is **AUDIO\\_SCENARIO\\_DEFAULT**, with other options detailed in [EAUDIO\\_SCENARIO\\_TYPE](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/enum_audioscenariotype.html), as shown in the image below:

    ![ConfigureAudioEncodingBlueprint](https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-4.png)

    2. Bind UI Event

    Create a **Bind Event to On Selection Changed** node, connecting the **CBS\\_Audio\\_Scenario** widget and the **OnSetAudioScenario** callback. Selecting different audio application scenarios in the **CBS\\_Audio\\_Scenario** dropdown list triggers the **OnSetAudioScenario** callback, as shown in the image below:

    ![ConfigureAudioEncodingBlueprint](https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-5.png)

    3. Implement callback function

    Create the **OnSetAudioScenario** callback function, configuring the following parameters:

    | Input Parameter | Data Type | Parameter Description                                                                                                                          |
    | :-------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
    | \`SelectedItem\`  | String    | The selected audio encoding property option.                                                                                                   |
    | \`SelectionType\` | Enum      | The type of selection information, see [ESelectInfo](https://docs.unrealengine.com/4.26/en-US/API/Runtime/SlateCore/Types/ESelectInfo__Type/). |

    When this callback is triggered, the selected audio application scenario is passed to **SetAudioScenario** as scenario parameter, and the method is executed to complete the setting, as shown in the image below:

    ![ConfigureAudioEncodingBlueprint](https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-6.png)

    ### Recommended settings [#recommended-settings]

    The recommended settings for audio encoding properties and audio application scenarios for common applications are as follows:

    | Common applications                                                                                                                 | Audio encoding properties                 | Audio application scenario      |
    | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------- |
    | **1-on-1 interactive teaching**: Requires ensuring call quality and smooth transmission.                                            | \`AUDIO_PROFILE_DEFAULT\`                   | \`AUDIO_SCENARIO_DEFAULT\`        |
    | **KTV**: Requires high sound quality and good music and vocal performance.                                                          | \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\`        | \`AUDIO_SCENARIO_GAME_STREAMING\` |
    | **Voice radio**: Typically uses professional audio equipment. Requires high sound quality and stereo.                               | \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO\` | \`AUDIO_SCENARIO_GAME_STREAMING\` |
    | **Music teaching**: Requires high sound quality and support for the transmission of speaker-played sound effects to the remote end. | \`AUDIO_PROFILE_MUSIC_STANDARD_STEREO\`     | \`AUDIO_SCENARIO_GAME_STREAMING\` |

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario \`AUDIO_SCENARIO_GAME_STREAMING(3)\`. In this scenario, the SDK switches to media volume to address the issue.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-10]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    For more audio settings, see [Achieve high audio quality](/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality).

    ### Frequently asked questions [#frequently-asked-questions-10]

    * [What is the difference between the in-call volume and the media volume?](/en/api-reference/faq/integration/system_volume)

    ### Sample projects [#sample-projects-6]

    Agora offers the following open-source sample projects for setting audio encoding properties and application scenario functions for your reference.

    * [Agora-Unreal-SDK-Blueprint-Example](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example)
    * [JoinChannelAudio](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic/JoinChannelAudio)

    ### API reference [#api-reference-10]

    * [\`initialize\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_initialize)
    * [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2)
    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Audio quality requirements vary with application use-case. For example, in professional use-cases such as radio stations and singing competitions, users are particularly sensitive to audio quality. In such cases, support for dual-channel and high-quality sound is required. High-quality sound means setting a high sampling rate and a high bitrate to achieve realistic audio. RTC SDK enables you to configure audio encoding properties to meet such requirements."
  }, {
    heading: undefined,
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation",
    content: "API"
  }, {
    heading: "implementation",
    content: "Description"
  }, {
    heading: "implementation",
    content: "`create(config.mAudioScenario)`"
  }, {
    heading: "implementation",
    content: "While creating an `RtcEngine` instance, set the audio application scenario. The default value is `AUDIO_SCENARIO_DEFAULT`."
  }, {
    heading: "implementation",
    content: "`setAudioProfile(profile)`"
  }, {
    heading: "implementation",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation",
    content: "`setAudioScenario`"
  }, {
    heading: "implementation",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "gaming-voice-chat",
    content: "This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:"
  }, {
    heading: "scripted-role-play",
    content: "This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
  }, {
    heading: "ktv",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "dual-teacher-classroom",
    content: "This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "sample-projects",
    content: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario for your reference."
  }, {
    heading: "sample-projects",
    content: "JoinChannelAudio"
  }, {
    heading: "api-reference",
    content: "`create` \\[2/2]"
  }, {
    heading: "api-reference",
    content: "`setAudioProfile` \\[2/2]"
  }, {
    heading: "api-reference",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech-1",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-1",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-1",
    content: "API"
  }, {
    heading: "implementation-1",
    content: "Description"
  }, {
    heading: "implementation-1",
    content: "`sharedEngineWithConfig(config.audioScenario)`"
  }, {
    heading: "implementation-1",
    content: "While creating an `AgoraRtcEngineKit` instance, set up the audio application scenario. The default value is `AgoraAudioScenarioHighDefault`."
  }, {
    heading: "implementation-1",
    content: "`setAudioProfile(profile)`"
  }, {
    heading: "implementation-1",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-1",
    content: "`setAudioScenario`"
  }, {
    heading: "implementation-1",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation-1",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching-1",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "gaming-voice-chat-1",
    content: "This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:"
  }, {
    heading: "scripted-role-play-1",
    content: "This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
  }, {
    heading: "ktv-1",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio-1",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching-1",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "dual-teacher-classroom-1",
    content: "This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
  }, {
    heading: "dual-teacher-classroom-1",
    content: "Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario `AudioScenarioGameStreaming(3)`. In this scenario, the SDK switches to media volume to address the issue."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-1",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-1",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "sample-projects-1",
    content: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference."
  }, {
    heading: "sample-projects-1",
    content: "JoinChannelAudio"
  }, {
    heading: "api-reference-1",
    content: "`sharedEngine(with: config, delegate)`"
  }, {
    heading: "api-reference-1",
    content: "`AgoraRtcEngineConfig`"
  }, {
    heading: "api-reference-1",
    content: "`setAudioProfile`"
  }, {
    heading: "api-reference-1",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference-1",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech-2",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-2",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-2",
    content: "API"
  }, {
    heading: "implementation-2",
    content: "Description"
  }, {
    heading: "implementation-2",
    content: "`sharedEngineWithConfig(config.audioScenario)`"
  }, {
    heading: "implementation-2",
    content: "While creating an `AgoraRtcEngineKit` instance, set up the audio application scenario. The default value is `AgoraAudioScenarioHighDefault`."
  }, {
    heading: "implementation-2",
    content: "`setAudioProfile(profile)`"
  }, {
    heading: "implementation-2",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-2",
    content: "`setAudioScenario`"
  }, {
    heading: "implementation-2",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation-2",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching-2",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "gaming-voice-chat-2",
    content: "This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:"
  }, {
    heading: "scripted-role-play-2",
    content: "This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
  }, {
    heading: "ktv-2",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio-2",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching-2",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "dual-teacher-classroom-2",
    content: "This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-2",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-2",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "sample-projects-2",
    content: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference."
  }, {
    heading: "sample-projects-2",
    content: "JoinChannelAudio"
  }, {
    heading: "api-reference-2",
    content: "`sharedEngine(with: config, delegate)`"
  }, {
    heading: "api-reference-2",
    content: "`AgoraRtcEngineConfig`"
  }, {
    heading: "api-reference-2",
    content: "`setAudioProfile`"
  }, {
    heading: "api-reference-2",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference-2",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech-3",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-3",
    content: "The Agora Web SDK offers the following three methods to create local audio tracks:"
  }, {
    heading: "implementation-3",
    content: "`createMicrophoneAudioTrack`"
  }, {
    heading: "implementation-3",
    content: "`createBufferSourceAudioTrack`"
  }, {
    heading: "implementation-3",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "implementation-3",
    content: "You can adjust the audio encoding configuration by modifying the `encoderConfig` parameter in these methods. `encoderConfig` supports the following two settings:"
  }, {
    heading: "implementation-3",
    content: "Use the audio encoding properties preset by the SDK."
  }, {
    heading: "implementation-3",
    content: "A custom object with various audio encoding parameters."
  }, {
    heading: "development-considerations",
    content: "Set the audio encoding properties before calling the `AgoraRTCClient.publish` method to publish the audio track. Once the audio track is published, its audio encoding properties cannot be modified."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-3",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-3",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "api-reference-3",
    content: "`createMicrophoneAudioTrack`"
  }, {
    heading: "api-reference-3",
    content: "`createBufferSourceAudioTrack`"
  }, {
    heading: "api-reference-3",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "api-reference-3",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech-4",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-4",
    content: "This section explains how to set audio encoding properties and application scenarios for common applications."
  }, {
    heading: "implementation-4",
    content: "API"
  }, {
    heading: "implementation-4",
    content: "Description"
  }, {
    heading: "implementation-4",
    content: "`initialize(context.audioScenario)`"
  }, {
    heading: "implementation-4",
    content: "While initializing an `IRtcEngine` instance, set up the audio application scenario. The default value is `AUDIO_SCENARIO_DEFAULT`."
  }, {
    heading: "implementation-4",
    content: "`setAudioProfile(profile)`"
  }, {
    heading: "implementation-4",
    content: "Audio encoding properties can be set before and after joining a channel."
  }, {
    heading: "implementation-4",
    content: "`setAudioScenario`"
  }, {
    heading: "implementation-4",
    content: "Audio application scenarios can be set before and after joining the channel."
  }, {
    heading: "implementation-4",
    content: "You can add the following sample code to your project."
  }, {
    heading: "1-on-1-interactive-teaching-3",
    content: "The 1-to-1 interactive teaching use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "ktv-3",
    content: "KTV mainly requires high sound quality and good expressiveness for music and singing. Add the following code to your project:"
  }, {
    heading: "voice-radio-3",
    content: "Voice radio generally uses professional audio equipment, mainly requiring high sound quality and stereo. Add the following code to your project:"
  }, {
    heading: "music-teaching-3",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-4",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-4",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "sample-projects-3",
    content: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference."
  }, {
    heading: "sample-projects-3",
    content: "AudioProfile"
  }, {
    heading: "api-reference-4",
    content: "`initialize`"
  }, {
    heading: "api-reference-4",
    content: "`setAudioProfile` \\[2/2]"
  }, {
    heading: "api-reference-4",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference-4",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech-5",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-5",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-5",
    content: "API"
  }, {
    heading: "implementation-5",
    content: "Description"
  }, {
    heading: "implementation-5",
    content: "`initialize(RtcEngineContext context)`"
  }, {
    heading: "implementation-5",
    content: "While initializing an `IRtcEngine` instance, set up the audio application scenario. The default value is `AudioScenarioDefault`."
  }, {
    heading: "implementation-5",
    content: "`setAudioProfile(profile)`"
  }, {
    heading: "implementation-5",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-5",
    content: "`setAudioScenario(scenario)`"
  }, {
    heading: "implementation-5",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation-5",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching-4",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "ktv-4",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio-4",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching-4",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-5",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-5",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "sample-projects-4",
    content: "Agora offers the following open-source sample projects for setting audio encoding properties and application scenario functions for your reference."
  }, {
    heading: "sample-projects-4",
    content: "JoinChannelAudio"
  }, {
    heading: "api-reference-5",
    content: "`initialize`"
  }, {
    heading: "api-reference-5",
    content: "`setAudioProfile`"
  }, {
    heading: "api-reference-5",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference-5",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech-6",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-6",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-6",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-6",
    content: "API"
  }, {
    heading: "implementation-6",
    content: "Description"
  }, {
    heading: "implementation-6",
    content: "`initialize(context.audioScenario)`"
  }, {
    heading: "implementation-6",
    content: "While initializing an `RtcEngine` instance, set up the audio application scenario. The default value is `audioScenarioDefault`."
  }, {
    heading: "implementation-6",
    content: "`setAudioProfile(profile, scenario)`"
  }, {
    heading: "implementation-6",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-6",
    content: "`setAudioScenario(scenario)`"
  }, {
    heading: "implementation-6",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation-6",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching-5",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "ktv-5",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio-5",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching-5",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "music-teaching-5",
    content: "Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario `audioScenarioGameStreaming(3)`. In this scenario, the SDK switches to media volume to address the issue."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-6",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-6",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "api-reference-6",
    content: "`initialize`"
  }, {
    heading: "api-reference-6",
    content: "`setAudioProfile`"
  }, {
    heading: "api-reference-6",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference-6",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
  }, {
    heading: "understand-the-tech-7",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-7",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-7",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-7",
    content: "API"
  }, {
    heading: "implementation-7",
    content: "Description"
  }, {
    heading: "implementation-7",
    content: "`initialize(RtcEngineContext context)`"
  }, {
    heading: "implementation-7",
    content: "While initializing an `IRtcEngine` instance, set up the audio application scenario. The default value is `AudioScenarioDefault`."
  }, {
    heading: "implementation-7",
    content: "`setAudioProfile(profile)`"
  }, {
    heading: "implementation-7",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-7",
    content: "`setAudioScenario(scenario)`"
  }, {
    heading: "implementation-7",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation-7",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching-6",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "ktv-6",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio-6",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching-6",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "music-teaching-6",
    content: "Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario `AudioScenarioGameStreaming(3)`. In this scenario, the SDK switches to media volume to address the issue."
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-7",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-7",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "api-reference-7",
    content: "`initialize`"
  }, {
    heading: "api-reference-7",
    content: "`setAudioProfile`"
  }, {
    heading: "api-reference-7",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference-7",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game."
  }, {
    heading: "understand-the-tech-8",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-8",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-8",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-8",
    content: "API"
  }, {
    heading: "implementation-8",
    content: "Description"
  }, {
    heading: "implementation-8",
    content: "`Initialize(RtcEngineContext context)`"
  }, {
    heading: "implementation-8",
    content: "While initializing an `IRtcEngine` instance, set up the audio application scenario. The default value is `AUDIO_SCENARIO_DEFAULT`."
  }, {
    heading: "implementation-8",
    content: "`SetAudioProfile(profile)`"
  }, {
    heading: "implementation-8",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-8",
    content: "`SetAudioScenario(scenario)`"
  }, {
    heading: "implementation-8",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation-8",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching-7",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "ktv-7",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio-7",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching-7",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "music-teaching-7",
    content: "Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario `AUDIO_SCENARIO_GAME_STREAMING(3)`. In this scenario, the SDK switches to media volume to address the issue."
  }, {
    heading: "reference-8",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-8",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-8",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "api-reference-8",
    content: "`Initialize`"
  }, {
    heading: "api-reference-8",
    content: "`SetAudioProfile` \\[2/2]"
  }, {
    heading: "api-reference-8",
    content: "`SetAudioScenario`"
  }, {
    heading: "api-reference-8",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game."
  }, {
    heading: "understand-the-tech-9",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-9",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-9",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-9",
    content: "API"
  }, {
    heading: "implementation-9",
    content: "Description"
  }, {
    heading: "implementation-9",
    content: "`initialize(context.audioScenario)`"
  }, {
    heading: "implementation-9",
    content: "While initializing an `IRtcEngine` instance, set up the audio application scenario. The default value is `AUDIO_SCENARIO_DEFAULT`."
  }, {
    heading: "implementation-9",
    content: "`setAudioProfile(profile)`"
  }, {
    heading: "implementation-9",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-9",
    content: "`setAudioScenario`"
  }, {
    heading: "implementation-9",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "implementation-9",
    content: "Refer to the following examples to choose the most appropriate settings for your application."
  }, {
    heading: "1-on-1-interactive-teaching-8",
    content: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
  }, {
    heading: "ktv-8",
    content: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
  }, {
    heading: "voice-radio-8",
    content: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
  }, {
    heading: "music-teaching-8",
    content: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
  }, {
    heading: "music-teaching-8",
    content: "Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario `AUDIO_SCENARIO_GAME_STREAMING(3)`. In this scenario, the SDK switches to media volume to address the issue."
  }, {
    heading: "reference-9",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-9",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-9",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "sample-projects-5",
    content: "Agora offers an open-source sample project for your reference."
  }, {
    heading: "sample-projects-5",
    content: "GitHub"
  }, {
    heading: "api-reference-9",
    content: "`initialize`"
  }, {
    heading: "api-reference-9",
    content: "`setAudioProfile` \\[2/2]"
  }, {
    heading: "api-reference-9",
    content: "`setAudioScenario`"
  }, {
    heading: "api-reference-9",
    content: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game."
  }, {
    heading: "understand-the-tech-10",
    content: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
  }, {
    heading: "prerequisites-10",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-10",
    content: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
  }, {
    heading: "implementation-10",
    content: "API"
  }, {
    heading: "implementation-10",
    content: "Description"
  }, {
    heading: "implementation-10",
    content: "`Initialize(context.audioScenario)`"
  }, {
    heading: "implementation-10",
    content: "While initializing an `IRtcEngine` instance, set up the audio application scenario. The default value is `AUDIO_SCENARIO_DEFAULT`."
  }, {
    heading: "implementation-10",
    content: "`SetAudioProfile(profile, scenario)`"
  }, {
    heading: "implementation-10",
    content: "You can set audio encoding properties before or after joining a channel."
  }, {
    heading: "implementation-10",
    content: "`SetAudioScenario`"
  }, {
    heading: "implementation-10",
    content: "You can set an application scenario before or after joining a channel."
  }, {
    heading: "set-audio-encoding-properties",
    content: "This subsection describes how to call `SetAudioProfile` to set audio encoding properties."
  }, {
    heading: "set-audio-encoding-properties",
    content: "Create UMG"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Create a **ComboBoxString** (dropdown list) widget, named **CBS\\_Audio\\_Profile**, where you can select the audio encoding properties as needed. The default option is **AUDIO\\_PROFILE\\_DEFAULT**, with other options detailed in EAUDIO\\_PROFILE\\_TYPE, as shown in the image below:"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Bind UI event"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Create a **Bind Event to On Selection Changed node**, connecting the **CBS\\_Audio\\_Profile** widget and the **OnSetAudioProfile** callback. Selecting different audio encoding properties in the **CBS\\_Audio\\_Profile** dropdown list triggers the **OnSetAudioProfile** callback, as shown in the image below:"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Implement callback function"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Create the **OnSetAudioProfile** callback function, configuring the following parameters:"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Input parameter"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Data type"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Parameter description"
  }, {
    heading: "set-audio-encoding-properties",
    content: "`SelectedItem`"
  }, {
    heading: "set-audio-encoding-properties",
    content: "String"
  }, {
    heading: "set-audio-encoding-properties",
    content: "The selected audio encoding property option."
  }, {
    heading: "set-audio-encoding-properties",
    content: "`SelectionType`"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Enum"
  }, {
    heading: "set-audio-encoding-properties",
    content: "The type of selection information, see ESelectInfo."
  }, {
    heading: "set-audio-encoding-properties",
    content: "When this callback is triggered, the selected audio encoding property is passed into **SetAudioProfile** as a profile parameter, and the method is executed to complete the setting, as shown in the image below:"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "This subsection explains how to call **SetAudioScenario** to set audio application scenarios."
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Create UMG"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Create a **ComboBoxString** (dropdown list) widget, named **CBS\\_Audio\\_Scenario**, where you select the audio application scenarios as needed. The default option is **AUDIO\\_SCENARIO\\_DEFAULT**, with other options detailed in EAUDIO\\_SCENARIO\\_TYPE, as shown in the image below:"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Bind UI Event"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Create a **Bind Event to On Selection Changed** node, connecting the **CBS\\_Audio\\_Scenario** widget and the **OnSetAudioScenario** callback. Selecting different audio application scenarios in the **CBS\\_Audio\\_Scenario** dropdown list triggers the **OnSetAudioScenario** callback, as shown in the image below:"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Implement callback function"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Create the **OnSetAudioScenario** callback function, configuring the following parameters:"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Input Parameter"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Data Type"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Parameter Description"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "`SelectedItem`"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "String"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "The selected audio encoding property option."
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "`SelectionType`"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "Enum"
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "The type of selection information, see ESelectInfo."
  }, {
    heading: "set-up-audio-application-scenarios",
    content: "When this callback is triggered, the selected audio application scenario is passed to **SetAudioScenario** as scenario parameter, and the method is executed to complete the setting, as shown in the image below:"
  }, {
    heading: "recommended-settings",
    content: "The recommended settings for audio encoding properties and audio application scenarios for common applications are as follows:"
  }, {
    heading: "recommended-settings",
    content: "Common applications"
  }, {
    heading: "recommended-settings",
    content: "Audio encoding properties"
  }, {
    heading: "recommended-settings",
    content: "Audio application scenario"
  }, {
    heading: "recommended-settings",
    content: "**1-on-1 interactive teaching**: Requires ensuring call quality and smooth transmission."
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_PROFILE_DEFAULT`"
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_SCENARIO_DEFAULT`"
  }, {
    heading: "recommended-settings",
    content: "**KTV**: Requires high sound quality and good music and vocal performance."
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_PROFILE_MUSIC_HIGH_QUALITY`"
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_SCENARIO_GAME_STREAMING`"
  }, {
    heading: "recommended-settings",
    content: "**Voice radio**: Typically uses professional audio equipment. Requires high sound quality and stereo."
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO`"
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_SCENARIO_GAME_STREAMING`"
  }, {
    heading: "recommended-settings",
    content: "**Music teaching**: Requires high sound quality and support for the transmission of speaker-played sound effects to the remote end."
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_PROFILE_MUSIC_STANDARD_STEREO`"
  }, {
    heading: "recommended-settings",
    content: "`AUDIO_SCENARIO_GAME_STREAMING`"
  }, {
    heading: "recommended-settings",
    content: "Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario `AUDIO_SCENARIO_GAME_STREAMING(3)`. In this scenario, the SDK switches to media volume to address the issue."
  }, {
    heading: "reference-10",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "reference-10",
    content: "For more audio settings, see Achieve high audio quality."
  }, {
    heading: "frequently-asked-questions-10",
    content: "What is the difference between the in-call volume and the media volume?"
  }, {
    heading: "sample-projects-6",
    content: "Agora offers the following open-source sample projects for setting audio encoding properties and application scenario functions for your reference."
  }, {
    heading: "sample-projects-6",
    content: "Agora-Unreal-SDK-Blueprint-Example"
  }, {
    heading: "sample-projects-6",
    content: "JoinChannelAudio"
  }, {
    heading: "api-reference-10",
    content: "`initialize`"
  }, {
    heading: "api-reference-10",
    content: "`setAudioProfile` \\[2/2]"
  }, {
    heading: "api-reference-10",
    content: "`setAudioScenario`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching",
    content: "1-on-1 interactive teaching"
  }, {
    id: "gaming-voice-chat",
    content: "Gaming voice chat"
  }, {
    id: "scripted-role-play",
    content: "Scripted role play"
  }, {
    id: "ktv",
    content: "KTV"
  }, {
    id: "voice-radio",
    content: "Voice radio"
  }, {
    id: "music-teaching",
    content: "Music teaching"
  }, {
    id: "dual-teacher-classroom",
    content: "Dual-teacher classroom"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "frequently-asked-questions",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects",
    content: "Sample projects"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-1",
    content: "1-on-1 interactive teaching"
  }, {
    id: "gaming-voice-chat-1",
    content: "Gaming voice chat"
  }, {
    id: "scripted-role-play-1",
    content: "Scripted role play"
  }, {
    id: "ktv-1",
    content: "KTV"
  }, {
    id: "voice-radio-1",
    content: "Voice radio"
  }, {
    id: "music-teaching-1",
    content: "Music teaching"
  }, {
    id: "dual-teacher-classroom-1",
    content: "Dual-teacher classroom"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-1",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects-1",
    content: "Sample projects"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implementation-2",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-2",
    content: "1-on-1 interactive teaching"
  }, {
    id: "gaming-voice-chat-2",
    content: "Gaming voice chat"
  }, {
    id: "scripted-role-play-2",
    content: "Scripted role play"
  }, {
    id: "ktv-2",
    content: "KTV"
  }, {
    id: "voice-radio-2",
    content: "Voice radio"
  }, {
    id: "music-teaching-2",
    content: "Music teaching"
  }, {
    id: "dual-teacher-classroom-2",
    content: "Dual-teacher classroom"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-2",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects-2",
    content: "Sample projects"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implementation-3",
    content: "Implementation"
  }, {
    id: "using-preset-audio-encoding-properties",
    content: "Using preset audio encoding properties"
  }, {
    id: "customizing-audio-encoding-properties",
    content: "Customizing audio encoding properties"
  }, {
    id: "development-considerations",
    content: "Development considerations"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-3",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implementation-4",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-3",
    content: "1-on-1 interactive teaching"
  }, {
    id: "ktv-3",
    content: "KTV"
  }, {
    id: "voice-radio-3",
    content: "Voice radio"
  }, {
    id: "music-teaching-3",
    content: "Music teaching"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-4",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects-3",
    content: "Sample projects"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implementation-5",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-4",
    content: "1-on-1 interactive teaching"
  }, {
    id: "ktv-4",
    content: "KTV"
  }, {
    id: "voice-radio-4",
    content: "Voice radio"
  }, {
    id: "music-teaching-4",
    content: "Music teaching"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-5",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects-4",
    content: "Sample projects"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "implementation-6",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-5",
    content: "1-on-1 interactive teaching"
  }, {
    id: "ktv-5",
    content: "KTV"
  }, {
    id: "voice-radio-5",
    content: "Voice radio"
  }, {
    id: "music-teaching-5",
    content: "Music teaching"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-6",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "understand-the-tech-7",
    content: "Understand the tech"
  }, {
    id: "prerequisites-7",
    content: "Prerequisites"
  }, {
    id: "implementation-7",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-6",
    content: "1-on-1 interactive teaching"
  }, {
    id: "ktv-6",
    content: "KTV"
  }, {
    id: "voice-radio-6",
    content: "Voice radio"
  }, {
    id: "music-teaching-6",
    content: "Music teaching"
  }, {
    id: "reference-7",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-7",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "understand-the-tech-8",
    content: "Understand the tech"
  }, {
    id: "prerequisites-8",
    content: "Prerequisites"
  }, {
    id: "implementation-8",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-7",
    content: "1-on-1 interactive teaching"
  }, {
    id: "ktv-7",
    content: "KTV"
  }, {
    id: "voice-radio-7",
    content: "Voice radio"
  }, {
    id: "music-teaching-7",
    content: "Music teaching"
  }, {
    id: "reference-8",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-8",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }, {
    id: "understand-the-tech-9",
    content: "Understand the tech"
  }, {
    id: "prerequisites-9",
    content: "Prerequisites"
  }, {
    id: "implementation-9",
    content: "Implementation"
  }, {
    id: "1-on-1-interactive-teaching-8",
    content: "1-on-1 Interactive teaching"
  }, {
    id: "ktv-8",
    content: "KTV"
  }, {
    id: "voice-radio-8",
    content: "Voice radio"
  }, {
    id: "music-teaching-8",
    content: "Music teaching"
  }, {
    id: "reference-9",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-9",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects-5",
    content: "Sample projects"
  }, {
    id: "api-reference-9",
    content: "API reference"
  }, {
    id: "understand-the-tech-10",
    content: "Understand the tech"
  }, {
    id: "prerequisites-10",
    content: "Prerequisites"
  }, {
    id: "implementation-10",
    content: "Implementation"
  }, {
    id: "set-audio-encoding-properties",
    content: "Set audio encoding properties"
  }, {
    id: "set-up-audio-application-scenarios",
    content: "Set up audio application scenarios"
  }, {
    id: "recommended-settings",
    content: "Recommended settings"
  }, {
    id: "reference-10",
    content: "Reference"
  }, {
    id: "frequently-asked-questions-10",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects-6",
    content: "Sample projects"
  }, {
    id: "api-reference-10",
    content: "API reference"
  }]
};
export let toc = [{
  depth: 2,
  url: "#understand-the-tech",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#gaming-voice-chat",
  title: _jsx(_Fragment, {
    children: "Gaming voice chat"
  })
}, {
  depth: 3,
  url: "#scripted-role-play",
  title: _jsx(_Fragment, {
    children: "Scripted role play"
  })
}, {
  depth: 3,
  url: "#ktv",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 3,
  url: "#dual-teacher-classroom",
  title: _jsx(_Fragment, {
    children: "Dual-teacher classroom"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-1",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-1",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-1",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#gaming-voice-chat-1",
  title: _jsx(_Fragment, {
    children: "Gaming voice chat"
  })
}, {
  depth: 3,
  url: "#scripted-role-play-1",
  title: _jsx(_Fragment, {
    children: "Scripted role play"
  })
}, {
  depth: 3,
  url: "#ktv-1",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-1",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-1",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 3,
  url: "#dual-teacher-classroom-1",
  title: _jsx(_Fragment, {
    children: "Dual-teacher classroom"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-1",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects-1",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-2",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-2",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-2",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-2",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#gaming-voice-chat-2",
  title: _jsx(_Fragment, {
    children: "Gaming voice chat"
  })
}, {
  depth: 3,
  url: "#scripted-role-play-2",
  title: _jsx(_Fragment, {
    children: "Scripted role play"
  })
}, {
  depth: 3,
  url: "#ktv-2",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-2",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-2",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 3,
  url: "#dual-teacher-classroom-2",
  title: _jsx(_Fragment, {
    children: "Dual-teacher classroom"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-2",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects-2",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-3",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-3",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-3",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#using-preset-audio-encoding-properties",
  title: _jsx(_Fragment, {
    children: "Using preset audio encoding properties"
  })
}, {
  depth: 3,
  url: "#customizing-audio-encoding-properties",
  title: _jsx(_Fragment, {
    children: "Customizing audio encoding properties"
  })
}, {
  depth: 3,
  url: "#development-considerations",
  title: _jsx(_Fragment, {
    children: "Development considerations"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-3",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-4",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-4",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-4",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-3",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#ktv-3",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-3",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-3",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-4",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects-3",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-5",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-5",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-5",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-4",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#ktv-4",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-4",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-4",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-5",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects-4",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-6",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-6",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-6",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-5",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#ktv-5",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-5",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-5",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-6",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-7",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-7",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-7",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-6",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#ktv-6",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-6",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-6",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 2,
  url: "#reference-7",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-7",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-8",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-8",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-8",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-7",
  title: _jsx(_Fragment, {
    children: "1-on-1 interactive teaching"
  })
}, {
  depth: 3,
  url: "#ktv-7",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-7",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-7",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 2,
  url: "#reference-8",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-8",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-8",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-9",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-9",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-9",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#1-on-1-interactive-teaching-8",
  title: _jsx(_Fragment, {
    children: "1-on-1 Interactive teaching"
  })
}, {
  depth: 3,
  url: "#ktv-8",
  title: _jsx(_Fragment, {
    children: "KTV"
  })
}, {
  depth: 3,
  url: "#voice-radio-8",
  title: _jsx(_Fragment, {
    children: "Voice radio"
  })
}, {
  depth: 3,
  url: "#music-teaching-8",
  title: _jsx(_Fragment, {
    children: "Music teaching"
  })
}, {
  depth: 2,
  url: "#reference-9",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-9",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects-5",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-9",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 2,
  url: "#understand-the-tech-10",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 2,
  url: "#prerequisites-10",
  title: _jsx(_Fragment, {
    children: "Prerequisites"
  })
}, {
  depth: 2,
  url: "#implementation-10",
  title: _jsx(_Fragment, {
    children: "Implementation"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-up-audio-application-scenarios",
  title: _jsx(_Fragment, {
    children: "Set up audio application scenarios"
  })
}, {
  depth: 3,
  url: "#recommended-settings",
  title: _jsx(_Fragment, {
    children: "Recommended settings"
  })
}, {
  depth: 2,
  url: "#reference-10",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-10",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects-6",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-10",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
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
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Audio quality requirements vary with application use-case. For example, in professional use-cases such as radio stations and singing competitions, users are particularly sensitive to audio quality. In such cases, support for dual-channel and high-quality sound is required. High-quality sound means setting a high sampling rate and a high bitrate to achieve realistic audio. RTC SDK enables you to configure audio encoding properties to meet such requirements."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","electron","flutter","react-native","unity","unreal","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "create(config.mAudioScenario)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While creating an ", _jsx(_components.code, {
                  children: "RtcEngine"
                }), " instance, set the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_DEFAULT"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.DEFAULT);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_DEFAULT);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.DEFAULT)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_DEFAULT)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "gaming-voice-chat",
          children: "Gaming voice chat"
        }), _jsx(_components.p, {
          children: "This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:"
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.CHATROOM);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_SPEECH_STANDARD);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.CHATROOM)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_SPEECH_STANDARD)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "scripted-role-play",
          children: "Scripted role play"
        }), _jsx(_components.p, {
          children: "This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.CHATROOM);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_STANDARD);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.CHATROOM)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_STANDARD)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "ktv",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.GAME_STREAMING);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.GAME_STREAMING)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "voice-radio",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.GAME_STREAMING);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the required audio encoding properties"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.GAME_STREAMING)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the required audio encoding properties"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "music-teaching",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.GAME_STREAMING);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.GAME_STREAMING)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "dual-teacher-classroom",
          children: "Dual-teacher classroom"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "java",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(CodeBlockTab, {
            value: "java",
            children: _jsx(_Fragment, {
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
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.CHATROOM);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO);"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "kotlin",
            children: _jsx(_Fragment, {
              children: _jsx(_components.pre, {
                className: "shiki shiki-themes github-light github-dark",
                style: {
                  "--shiki-light": "#24292e",
                  "--shiki-dark": "#e1e4e8",
                  "--shiki-light-bg": "#fff",
                  "--shiki-dark-bg": "#24292e"
                },
                tabIndex: "0",
                icon: '<svg viewBox="0 0 24 24"><path d="M24 24H0V0h24L12 12Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create the RtcEngine instance with a specific audio application scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.mAudioScenario "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " Constants.AudioScenario."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getValue"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AudioScenario.CHATROOM)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "engine "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "="
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " RtcEngine."
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
                      children: "(config)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Define the audio encoding settings"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioProfile"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_PROFILE_MUSIC_STANDARD_STEREO)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/basic/JoinChannelAudio.java",
              children: "JoinChannelAudio"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: [_jsx(_components.code, {
                children: "create"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
              children: [_jsx(_components.code, {
                children: "setAudioProfile"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
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
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-1",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "sharedEngineWithConfig(config.audioScenario)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While creating an ", _jsx(_components.code, {
                  children: "AgoraRtcEngineKit"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AgoraAudioScenarioHighDefault"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-1",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .default"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .default"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "gaming-voice-chat-1",
          children: "Gaming voice chat"
        }), _jsx(_components.p, {
          children: "This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .chatRoom"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .speechStandard"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "scripted-role-play-1",
          children: "Scripted role play"
        }), _jsx(_components.p, {
          children: "This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .chatRoom"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicStandard"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-1",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .gameStreaming"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicHighQuality"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-1",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .gameStreaming"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the required audio encoding properties"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicHighQualityStereo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-1",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .gameStreaming"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicStandardStereo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "dual-teacher-classroom-1",
          children: "Dual-teacher classroom"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .chatRoom"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicStandardStereo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario ", _jsx(_components.code, {
                children: "AudioScenarioGameStreaming(3)"
              }), ". In this scenario, the SDK switches to media volume to address the issue."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-1",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-1",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Basic/JoinChannelAudio",
              children: "JoinChannelAudio"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/sharedengine(with:delegate:)",
              children: _jsx(_components.code, {
                children: "sharedEngine(with: config, delegate)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcengineconfig",
              children: _jsx(_components.code, {
                children: "AgoraRtcEngineConfig"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
              children: _jsx(_components.code, {
                children: "setAudioProfile"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "macos"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-2",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "sharedEngineWithConfig(config.audioScenario)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While creating an ", _jsx(_components.code, {
                  children: "AgoraRtcEngineKit"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AgoraAudioScenarioHighDefault"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-2",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .default"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .default"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "gaming-voice-chat-2",
          children: "Gaming voice chat"
        }), _jsx(_components.p, {
          children: "This use-case requires the transmission of clear human voice with minimal background noise and at a low bitrate. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .chatRoom"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .speechStandard"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "scripted-role-play-2",
          children: "Scripted role play"
        }), _jsx(_components.p, {
          children: "This use-case requires good sound expression, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .chatRoom"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicStandard"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-2",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .gameStreaming"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicHighQuality"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-2",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .gameStreaming"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the required audio encoding properties"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicHighQualityStereo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-2",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " scenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .gameStreaming"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicStandardStereo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "dual-teacher-classroom-2",
          children: "Dual-teacher classroom"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality with rich sound effects, and no volume or sound quality change when switching microphones. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create the AgoraRtcEngineKit instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario:AgoraAudioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .chatRoom"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " audioScenario"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AgoraRtcEngineKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "sharedEngine"
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
                  children: "with"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": config, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "delegate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "self"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " profile:AgoraAudioProfile "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " .musicStandardStereo"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioProfile)"
                })]
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-2",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-2",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Basic/JoinChannelAudio",
              children: "JoinChannelAudio"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/sharedengine(with:delegate:)",
              children: _jsx(_components.code, {
                children: "sharedEngine(with: config, delegate)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcengineconfig",
              children: _jsx(_components.code, {
                children: "AgoraRtcEngineConfig"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
              children: _jsx(_components.code, {
                children: "setAudioProfile"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
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
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-3",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-3",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "The Agora Web SDK offers the following three methods to create local audio tracks:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "createMicrophoneAudioTrack"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "createBufferSourceAudioTrack"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.code, {
              children: "createCustomAudioTrack"
            })
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["You can adjust the audio encoding configuration by modifying the ", _jsx(_components.code, {
            children: "encoderConfig"
          }), " parameter in these methods. ", _jsx(_components.code, {
            children: "encoderConfig"
          }), " supports the following two settings:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Use the audio encoding properties preset by the SDK."
          }), `
`, _jsx(_components.li, {
            children: "A custom object with various audio encoding parameters."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "using-preset-audio-encoding-properties",
          children: "Using preset audio encoding properties"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createMicrophoneAudioTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " encoderConfig: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"high_quality_stereo"'
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
                  children: "})."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "then"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/**...**/"
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
        }), _jsx(_components.h3, {
          id: "customizing-audio-encoding-properties",
          children: "Customizing audio encoding properties"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createMicrophoneAudioTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " encoderConfig: {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  sampleRate: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "48000"
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
                  children: "  stereo: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "true"
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
                  children: "  bitrate: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "128"
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
                  children: " },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "})."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "then"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "/**...**/"
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
        }), _jsx(_components.h3, {
          id: "development-considerations",
          children: "Development considerations"
        }), _jsxs(_components.p, {
          children: ["Set the audio encoding properties before calling the ", _jsx(_components.code, {
            children: "AgoraRTCClient.publish"
          }), " method to publish the audio track. Once the audio track is published, its audio encoding properties cannot be modified."]
        }), _jsx(_components.h2, {
          id: "reference-3",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-3",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack",
              children: _jsx(_components.code, {
                children: "createMicrophoneAudioTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createbuffersourceaudiotrack",
              children: _jsx(_components.code, {
                children: "createBufferSourceAudioTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcustomaudiotrack",
              children: _jsx(_components.code, {
                children: "createCustomAudioTrack"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-4",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-4",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section explains how to set audio encoding properties and application scenarios for common applications."
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "initialize(context.audioScenario)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While initializing an ", _jsx(_components.code, {
                  children: "IRtcEngine"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_DEFAULT"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audio encoding properties can be set before and after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Audio application scenarios can be set before and after joining the channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "You can add the following sample code to your project."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-3",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "The 1-to-1 interactive teaching use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_DEFAULT;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_DEFAULT);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-3",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV mainly requires high sound quality and good expressiveness for music and singing. Add the following code to your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_MUSIC_HIGH_QUALITY);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-3",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment, mainly requiring high sound quality and stereo. Add the following code to your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-3",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_MUSIC_STANDARD_STEREO);"
                })]
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-4",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-3",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for setting audio encoding properties and application scenario functions for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioProfile",
              children: "AudioProfile"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: _jsx(_components.code, {
                children: "initialize"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
              children: [_jsx(_components.code, {
                children: "setAudioProfile"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
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
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-5",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-5",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-5",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "initialize(RtcEngineContext context)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While initializing an ", _jsx(_components.code, {
                  children: "IRtcEngine"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AudioScenarioDefault"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario(scenario)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-4",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioDefault,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileDefault);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-4",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioDefault,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileMusicHighQuality);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-4",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioGameStreaming,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileMusicHighQualityStereo);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-4",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioDefault,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileMusicStandardStereo);"
                })]
              })]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-5",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-5",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-4",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample projects for setting audio encoding properties and application scenario functions for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx",
              children: "JoinChannelAudio"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: _jsx(_components.code, {
                children: "initialize"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
              children: _jsx(_components.code, {
                children: "setAudioProfile"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "flutter"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-6",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-6",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-6",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "initialize(context.audioScenario)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While initializing an ", _jsx(_components.code, {
                  children: "RtcEngine"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "audioScenarioDefault"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile, scenario)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario(scenario)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-5",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " context;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " AudioScenarioType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioScenarioDefault;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
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
                  children: "AudioProfileType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioProfileDefault);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-5",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " context;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " AudioScenarioType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioScenarioGameStreaming;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
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
                  children: "AudioProfileType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioScenarioGameStreaming);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-5",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " context;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " AudioProfileType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioScenarioChorus;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
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
                  children: "AudioProfileType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioScenarioChorus);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-5",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " context;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " AudioProfileType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioScenarioMeeting;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
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
                  children: "AudioProfileType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".audioScenarioMeeting);"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario ", _jsx(_components.code, {
                children: "audioScenarioGameStreaming(3)"
              }), ". In this scenario, the SDK switches to media volume to address the issue."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-6",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-6",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: _jsx(_components.code, {
                children: "initialize"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
              children: _jsx(_components.code, {
                children: "setAudioProfile"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-7",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-7",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-7",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "initialize(RtcEngineContext context)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While initializing an ", _jsx(_components.code, {
                  children: "IRtcEngine"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AudioScenarioDefault"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario(scenario)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-6",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioDefault,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileDefault);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-6",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioDefault,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileMusicHighQuality);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-6",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioGameStreaming,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileMusicHighQualityStereo);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-6",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " createAgoraRtcEngine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " appId,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ..."
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
                  children: " audioScenario: AudioScenarioType.AudioScenarioDefault,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "});"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioProfileType.AudioProfileMusicStandardStereo);"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario ", _jsx(_components.code, {
                children: "AudioScenarioGameStreaming(3)"
              }), ". In this scenario, the SDK switches to media volume to address the issue."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-7",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-7",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: _jsx(_components.code, {
                children: "initialize"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
              children: _jsx(_components.code, {
                children: "setAudioProfile"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unity"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-8",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-8",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-8",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "Initialize(RtcEngineContext context)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While initializing an ", _jsx(_components.code, {
                  children: "IRtcEngine"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_DEFAULT"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SetAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SetAudioScenario(scenario)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-7",
          children: "1-on-1 interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " context"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "SetAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_DEFAULT);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-7",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " context"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "SetAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_HIGH_QUALITY);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-7",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " context"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "SetAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-7",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " context"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " RtcEngineContext"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "SetAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_STANDARD_STEREO);"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario ", _jsx(_components.code, {
                children: "AUDIO_SCENARIO_GAME_STREAMING(3)"
              }), ". In this scenario, the SDK switches to media volume to address the issue."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-8",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-8",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-8",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: _jsx(_components.code, {
                children: "Initialize"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
              children: [_jsx(_components.code, {
                children: "SetAudioProfile"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "SetAudioScenario"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-9",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-9",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-9",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "initialize(context.audioScenario)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While initializing an ", _jsx(_components.code, {
                  children: "IRtcEngine"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_DEFAULT"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioProfile(profile)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.p, {
          children: "Refer to the following examples to choose the most appropriate settings for your application."
        }), _jsx(_components.h3, {
          id: "1-on-1-interactive-teaching-8",
          children: "1-on-1 Interactive teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires ensuring call quality and smooth transmission. Add the following code to your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_DEFAULT;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_DEFAULT);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "ktv-8",
          children: "KTV"
        }), _jsx(_components.p, {
          children: "KTV generally requires high sound quality and good expressiveness for music and singing. Use the following code in your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_MUSIC_HIGH_QUALITY);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-radio-8",
          children: "Voice radio"
        }), _jsx(_components.p, {
          children: "Voice radio generally uses professional audio equipment. It requires high sound quality and stereo. Use the following code in your project:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "music-teaching-8",
          children: "Music teaching"
        }), _jsx(_components.p, {
          children: "This use-case requires high sound quality, and support for the transmission of speaker-played sound effects. Agora recommends the following settings:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize the IRtcEngine instance with a specific audio application scenario"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngineContext context;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "context.audioScenario "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AUDIO_SCENARIO_GAME_STREAMING;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "initialize"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(context);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Define the audio encoding settings"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_PROFILE_MUSIC_STANDARD_STEREO);"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario ", _jsx(_components.code, {
                children: "AUDIO_SCENARIO_GAME_STREAMING(3)"
              }), ". In this scenario, the SDK switches to media volume to address the issue."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-9",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-9",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-5",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers an open-source sample project for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example",
              children: "GitHub"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-9",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: _jsx(_components.code, {
                children: "initialize"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
              children: [_jsx(_components.code, {
                children: "setAudioProfile"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsx(_components.p, {
          children: "This article shows you how to use RTC SDK to configure appropriate audio encoding properties and application scenarios in your game."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-10",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK uses default encoding parameters and a default audio scenario that are suitable for most common applications. If the default settings do not meet your needs, refer to the examples in the implementation section to set appropriate audio encoding properties and an application scenario."
        }), _jsx(_components.h2, {
          id: "prerequisites-10",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Ensure that you have implemented the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " in your project."]
        }), _jsx(_components.h2, {
          id: "implementation-10",
          children: "Implementation"
        }), _jsx(_components.p, {
          children: "This section shows you how to set audio encoding properties and application scenarios for common applications. You use the following APIs to configure audio encoding:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "API"
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
                  children: "Initialize(context.audioScenario)"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["While initializing an ", _jsx(_components.code, {
                  children: "IRtcEngine"
                }), " instance, set up the audio application scenario. The default value is ", _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_DEFAULT"
                }), "."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SetAudioProfile(profile, scenario)"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set audio encoding properties before or after joining a channel."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SetAudioScenario"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "You can set an application scenario before or after joining a channel."
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "set-audio-encoding-properties",
          children: "Set audio encoding properties"
        }), _jsxs(_components.p, {
          children: ["This subsection describes how to call ", _jsx(_components.code, {
            children: "SetAudioProfile"
          }), " to set audio encoding properties."]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "Create UMG"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Create a ", _jsx(_components.strong, {
            children: "ComboBoxString"
          }), " (dropdown list) widget, named ", _jsx(_components.strong, {
            children: "CBS_Audio_Profile"
          }), ", where you can select the audio encoding properties as needed. The default option is ", _jsx(_components.strong, {
            children: "AUDIO_PROFILE_DEFAULT"
          }), ", with other options detailed in ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/enum_audioscenariotype.html",
            children: "EAUDIO_PROFILE_TYPE"
          }), ", as shown in the image below:"]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-1.png",
            alt: "ConfigureAudioEncodingBlueprint"
          })
        }), _jsxs(_components.ol, {
          start: "2",
          children: [`
`, _jsx(_components.li, {
            children: "Bind UI event"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Create a ", _jsx(_components.strong, {
            children: "Bind Event to On Selection Changed node"
          }), ", connecting the ", _jsx(_components.strong, {
            children: "CBS_Audio_Profile"
          }), " widget and the ", _jsx(_components.strong, {
            children: "OnSetAudioProfile"
          }), " callback. Selecting different audio encoding properties in the ", _jsx(_components.strong, {
            children: "CBS_Audio_Profile"
          }), " dropdown list triggers the ", _jsx(_components.strong, {
            children: "OnSetAudioProfile"
          }), " callback, as shown in the image below:"]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-2.png",
            alt: "ConfigureAudioEncodingBlueprint"
          })
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsx(_components.li, {
            children: "Implement callback function"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Create the ", _jsx(_components.strong, {
            children: "OnSetAudioProfile"
          }), " callback function, configuring the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Input parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Data type"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Parameter description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SelectedItem"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The selected audio encoding property option."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SelectionType"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Enum"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The type of selection information, see ", _jsx(_components.a, {
                  href: "https://docs.unrealengine.com/4.26/en-US/API/Runtime/SlateCore/Types/ESelectInfo__Type/",
                  children: "ESelectInfo"
                }), "."]
              })]
            })]
          })]
        }), _jsxs(_components.p, {
          children: ["When this callback is triggered, the selected audio encoding property is passed into ", _jsx(_components.strong, {
            children: "SetAudioProfile"
          }), " as a profile parameter, and the method is executed to complete the setting, as shown in the image below:"]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-3.png",
            alt: "ConfigureAudioEncodingBlueprint"
          })
        }), _jsx(_components.h3, {
          id: "set-up-audio-application-scenarios",
          children: "Set up audio application scenarios"
        }), _jsxs(_components.p, {
          children: ["This subsection explains how to call ", _jsx(_components.strong, {
            children: "SetAudioScenario"
          }), " to set audio application scenarios."]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsx(_components.li, {
            children: "Create UMG"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Create a ", _jsx(_components.strong, {
            children: "ComboBoxString"
          }), " (dropdown list) widget, named ", _jsx(_components.strong, {
            children: "CBS_Audio_Scenario"
          }), ", where you select the audio application scenarios as needed. The default option is ", _jsx(_components.strong, {
            children: "AUDIO_SCENARIO_DEFAULT"
          }), ", with other options detailed in ", _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/enum_audioscenariotype.html",
            children: "EAUDIO_SCENARIO_TYPE"
          }), ", as shown in the image below:"]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-4.png",
            alt: "ConfigureAudioEncodingBlueprint"
          })
        }), _jsxs(_components.ol, {
          start: "2",
          children: [`
`, _jsx(_components.li, {
            children: "Bind UI Event"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Create a ", _jsx(_components.strong, {
            children: "Bind Event to On Selection Changed"
          }), " node, connecting the ", _jsx(_components.strong, {
            children: "CBS_Audio_Scenario"
          }), " widget and the ", _jsx(_components.strong, {
            children: "OnSetAudioScenario"
          }), " callback. Selecting different audio application scenarios in the ", _jsx(_components.strong, {
            children: "CBS_Audio_Scenario"
          }), " dropdown list triggers the ", _jsx(_components.strong, {
            children: "OnSetAudioScenario"
          }), " callback, as shown in the image below:"]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-5.png",
            alt: "ConfigureAudioEncodingBlueprint"
          })
        }), _jsxs(_components.ol, {
          start: "3",
          children: [`
`, _jsx(_components.li, {
            children: "Implement callback function"
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Create the ", _jsx(_components.strong, {
            children: "OnSetAudioScenario"
          }), " callback function, configuring the following parameters:"]
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Input Parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Data Type"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Parameter Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SelectedItem"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "String"
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "The selected audio encoding property option."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "SelectionType"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Enum"
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: ["The type of selection information, see ", _jsx(_components.a, {
                  href: "https://docs.unrealengine.com/4.26/en-US/API/Runtime/SlateCore/Types/ESelectInfo__Type/",
                  children: "ESelectInfo"
                }), "."]
              })]
            })]
          })]
        }), _jsxs(_components.p, {
          children: ["When this callback is triggered, the selected audio application scenario is passed to ", _jsx(_components.strong, {
            children: "SetAudioScenario"
          }), " as scenario parameter, and the method is executed to complete the setting, as shown in the image below:"]
        }), _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/configure_audio_encoding_implementation_blueprint-6.png",
            alt: "ConfigureAudioEncodingBlueprint"
          })
        }), _jsx(_components.h3, {
          id: "recommended-settings",
          children: "Recommended settings"
        }), _jsx(_components.p, {
          children: "The recommended settings for audio encoding properties and audio application scenarios for common applications are as follows:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Common applications"
              }), _jsx(_components.th, {
                children: "Audio encoding properties"
              }), _jsx(_components.th, {
                children: "Audio application scenario"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.strong, {
                  children: "1-on-1 interactive teaching"
                }), ": Requires ensuring call quality and smooth transmission."]
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_PROFILE_DEFAULT"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_DEFAULT"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.strong, {
                  children: "KTV"
                }), ": Requires high sound quality and good music and vocal performance."]
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_GAME_STREAMING"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.strong, {
                  children: "Voice radio"
                }), ": Typically uses professional audio equipment. Requires high sound quality and stereo."]
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_GAME_STREAMING"
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsxs(_components.td, {
                children: [_jsx(_components.strong, {
                  children: "Music teaching"
                }), ": Requires high sound quality and support for the transmission of speaker-played sound effects to the remote end."]
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_STANDARD_STEREO"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "AUDIO_SCENARIO_GAME_STREAMING"
                })
              })]
            })]
          })]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Due to iOS system limitations, some audio routes cannot be recognized in call volume mode. Therefore, if you need to use an external sound card, it is recommended to set the audio application scene to the high-quality scenario ", _jsx(_components.code, {
                children: "AUDIO_SCENARIO_GAME_STREAMING(3)"
              }), ". In this scenario, the SDK switches to media volume to address the issue."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-10",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsxs(_components.p, {
          children: ["For more audio settings, see ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/build/enhance-the-audio-experience/best-practices-sound-quality",
            children: "Achieve high audio quality"
          }), "."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-10",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/system_volume",
              children: "What is the difference between the in-call volume and the media volume?"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-6",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample projects for setting audio encoding properties and application scenario functions for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example",
              children: "Agora-Unreal-SDK-Blueprint-Example"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic/JoinChannelAudio",
              children: "JoinChannelAudio"
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-10",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_initialize",
              children: _jsx(_components.code, {
                children: "initialize"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
              children: [_jsx(_components.code, {
                children: "setAudioProfile"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
              children: _jsx(_components.code, {
                children: "setAudioScenario"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
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
