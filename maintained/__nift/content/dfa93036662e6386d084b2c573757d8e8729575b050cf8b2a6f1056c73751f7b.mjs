import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Achieve high audio quality",
  description: "Best practices for optimal audio quality."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties]

    Call [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2) to set the profile to \`MUSIC_HIGH_QUALITY_STEREO\` (5). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

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
        // Set the audio profile to MUSIC_HIGH_QUALITY_STEREO
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Set the audio profile to MUSIC_HIGH_QUALITY_STEREO
        RtcEngine.setAudioProfile(Constants.AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Set audio use-case [#set-audio-use-case]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\` (3).

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
        // Set the audio scenario to GAME_STREAMING
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING);
        engine = RtcEngine.create(config);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Set the audio scenario to GAME_STREAMING
        config.mAudioScenario = Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING)
        engine = RtcEngine.create(config)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Sound card settings [#sound-card-settings]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`setParameters\`](https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setparameters).

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
        // Turn off echo cancellation
        engine.setParameters("{\\"che.audio.aec.enable\\":false}");
        // Turn off noise reduction
        engine.setParameters("{\\"che.audio.ans.enable\\":false}");
        // Turn off gain control
        engine.setParameters("{\\"che.audio.agc.enable\\":false}");
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Turn off echo cancellation
        engine.setParameters("{\\"che.audio.aec.enable\\":false}")
        // Turn off noise reduction
        engine.setParameters("{\\"che.audio.ans.enable\\":false}")
        // Turn off gain control
        engine.setParameters("{\\"che.audio.agc.enable\\":false}")
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Turn on stereo capture [#turn-on-stereo-capture]

    Call [\`setAdvancedAudioOptions\`](https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions) to set the number of audio pre-processing channels to \`AGORA_AUDIO_STEREO_PROCESSING\` (2), that is, use two channels to collect and send stereo sound.

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
        // Set advanced audio options for 2 audio processing channels
        AdvancedAudioOptions options = new AdvancedAudioOptions();
        options.audioProcessingChannels = 2;
        m_lpAgoraEngine.setAdvancedAudioOptions(options);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Set advanced audio options for 2 audio processing channels
        val options = AdvancedAudioOptions()
        options.audioProcessingChannels = 2
        m_lpAgoraEngine.setAdvancedAudioOptions(options)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings-1]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties-1]

    Call [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\)) to set the audio profile to \`AgoraAudioProfileMusicHighQuality\` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`objc
    (int) setAudioProfile : (AgoraAudioProfile) profile;
    \`\`\`

    ### Set audio scenario [#set-audio-scenario]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\)) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\` (3).

    \`\`\`java
    (int) setAudioScenario : (AgoraAudioScenario) scenario;
    \`\`\`

    ## Sound card settings [#sound-card-settings-1]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-1]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setparameters\\(_:\\)).

    \`\`\`objc
    setParameters("{\\"che.audio.aec.enable\\":false}") // Turn off echo cancellation
    setParameters("{\\"che.audio.ans.enable\\":false}") // Turn off noise reduction
    setParameters("{\\"che.audio.agc.enable\\":false}") // Turn off gain control
    \`\`\`

    ### Turn on stereo capture [#turn-on-stereo-capture-1]

    Call [\`setAdvancedAudioOptions\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setadvancedaudiooptions\\(_:\\)) to set the number of audio pre-processing channels to \`AGORA_AUDIO_STEREO_PROCESSING\` (2), that is, use two channels to collect and send stereo sound.

    \`\`\`objc
    (int) setAdvancedAudioOptions : (AgoraAdvancedAudioOptions * _Nonnull) options;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings-2]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties-2]

    Call [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\)) to set the audio profile to \`AgoraAudioProfileMusicHighQuality(4)\`. It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`objc
    (int) setAudioProfile : (AgoraAudioProfile) profile;
    \`\`\`

    ### Set audio scenario [#set-audio-scenario-1]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\)) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING(3)\`.

    \`\`\`java
    (int) setAudioScenario : (AgoraAudioScenario) scenario;
    \`\`\`

    ## Sound card settings [#sound-card-settings-2]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-2]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setparameters\\(_:\\)).

    \`\`\`objc
    setParameters("{\\"che.audio.aec.enable\\":false}") // Turn off echo cancellation
    setParameters("{\\"che.audio.ans.enable\\":false}") // Turn off noise reduction
    setParameters("{\\"che.audio.agc.enable\\":false}") // Turn off gain control
    \`\`\`

    ### Turn on stereo capture [#turn-on-stereo-capture-2]

    Call [setAdvancedAudioOptions](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setadvancedaudiooptions\\(_:\\)) to set the number of audio pre-processing channels to \`AGORA_AUDIO_STEREO_PROCESSING(2)\`, that is, use two channels to collect and send stereo sound.

    \`\`\`objc
    (int) setAdvancedAudioOptions : (AgoraAdvancedAudioOptions * _Nonnull) options;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings-3]

    To improve the audio quality experience, consider the following:

    ### Using default audio encoding [#using-default-audio-encoding]

    Call [\`createMicrophoneAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack) and in \`encoderConfig\` pass \`"high_quality_stereo"\`, RTC SDK's built-in audio encoding configuration. It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`javascript
    AgoraRTC.createMicrophoneAudioTrack({
     encoderConfig: "high_quality_stereo"
    }).then(/**...**/);
    \`\`\`

    ### Custom audio encoding [#custom-audio-encoding]

    Use the following code example to customize audio encoding properties. This example sets a 48 kHz sampling rate, music encoding, two-channel usage, and a maximum encoding rate of 128 Kbps.

    \`\`\`javascript
    AgoraRTC.createMicrophoneAudioTrack({
     encoderConfig: {
      sampleRate: 48000,
      stereo: true,
      bitrate: 128,
     },
    }).then(/**...**/);
    \`\`\`

    ## Sound card settings [#sound-card-settings-3]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-3]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable 3A by calling [\`createMicrophoneAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack).

    \`\`\`javascript
    AgoraRTC.createMicrophoneAudioTrack({
     AEC: false, // Turn off echo cancellation
     AGC: false, // Turn off gain control
     ANS: false, // Turn off noise reduction
    }).then(/**...**/);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings-4]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties-3]

    Call [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2) to set the audio profile to \`AudioProfileMusicHighQuality\` (4) and scenario to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`cpp
    virtual int setAudioProfile(AUDIO_PROFILE_TYPE profile) = 0;
    \`\`\`

    ### Set audio scenario [#set-audio-scenario-2]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\` (3).

    \`\`\`cpp
    virtual int setAudioScenario(AUDIO_SCENARIO_TYPE scenario) = 0;
    \`\`\`

    ## Sound card settings [#sound-card-settings-4]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-4]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setparameters).

    \`\`\`cpp
    setParameters("{\\"che.audio.aec.enable\\":false}") // Turn off echo cancellation
    setParameters("{\\"che.audio.ans.enable\\":false}") // Turn off noise reduction
    setParameters("{\\"che.audio.agc.enable\\":false}") // Turn off gain control
    \`\`\`

    ### Turn on stereo capture [#turn-on-stereo-capture-3]

    Call [\`setAdvancedAudioOptions\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions) to set the number of audio pre-processing channels to \`AudioProcessingStereo\` (2), that is, use two channels to collect and send stereo sound.

    <CalloutContainer type="info">
      <CalloutDescription>
        Call this method before calling \`joinChannel\`, \`enableAudio\`, and \`enableLocalAudio\`.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`cpp
    virtual int setAdvancedAudioOptions(media::base::AdvancedAudioOptions &options) = 0;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings-5]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties-4]

    Call [\`setAudioProfile\`](https://api-ref.agora.io/en/voice-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile) to set the profile to \`AudioProfileMusicHighQuality\` (4) and scenario to \`AudioScenarioGameStreaming\` (3). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`typescript
    abstract setAudioProfile(
      profile: AudioProfileType,
      scenario?: AudioScenarioType
     ): number;
    \`\`\`

    ### Set audio scenario [#set-audio-scenario-3]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/voice-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\` (3).

    \`\`\`typescript
    abstract setAudioScenario(scenario: AudioScenarioType): number;
    \`\`\`

    ## Sound card settings [#sound-card-settings-5]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-5]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setparameters).

    \`\`\`typescript
    setParameters("{\\"che.audio.aec.enable\\":false}") // Turn off echo cancellation
    setParameters("{\\"che.audio.ans.enable\\":false}") // Turn off noise reduction
    setParameters("{\\"che.audio.agc.enable\\":false}") // Turn off gain control
    \`\`\`

    ### Turn on stereo capture [#turn-on-stereo-capture-4]

    Call [\`setAdvancedAudioOptions\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions) to set the number of audio pre-processing channels to \`AudioProcessingStereo\` (2), that is, use two channels to collect and send stereo sound.

    \`\`\`typescript
    abstract setAdvancedAudioOptions(options: AdvancedAudioOptions): number;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings-6]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties-5]

    Call [\`setAudioProfile\`](https://api-ref.agora.io/en/voice-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile) to set the audio profile to \`audioProfileMusicHighQuality\` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`dart
    Future<void> setAudioProfile(
      {required AudioProfileType profile,
      AudioScenarioType scenario = AudioScenarioType.audioScenarioDefault});
    \`\`\`

    ### Set audio scenario [#set-audio-scenario-4]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/voice-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`audioScenarioGameStreaming\` (3).

    \`\`\`dart
    Future<void> setAudioScenario(AudioScenarioType scenario);
    \`\`\`

    ## Sound card settings [#sound-card-settings-6]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-6]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setparameters).

    \`\`\`dart
    setParameters("{\\"che.audio.aec.enable\\":false}") // Turn off echo cancellation
    setParameters("{\\"che.audio.ans.enable\\":false}") // Turn off noise reduction
    setParameters("{\\"che.audio.agc.enable\\":false}") // Turn off gain control
    \`\`\`

    ### Turn on stereo capture [#turn-on-stereo-capture-5]

    Call [\`setAdvancedAudioOptions\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions) to set the number of audio pre-processing channels to \`AGORA_AUDIO_STEREO_PROCESSING\` (2), that is, use two channels to collect and send stereo sound.

    <CalloutContainer type="info">
      <CalloutDescription>
        Call this method before calling \`joinChannel\`, \`enableAudio\`, and \`enableLocalAudio\`.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`dart
    Future<void> setAdvancedAudioOptions(AdvancedAudioOptions options);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app.

    ## General settings [#general-settings-7]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties-6]

    Call [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile) to set the audio profile to \`AudioProfileMusicHighQuality\` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`typescript
    abstract setAudioProfile(
      profile: AudioProfileType,
      scenario?: AudioScenarioType
     ): number;
    \`\`\`

    ### Set audio scenario [#set-audio-scenario-5]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AudioScenarioGameStreaming\` (3).

    \`\`\`typescript
    abstract setAudioScenario(scenario: AudioScenarioType): number;
    \`\`\`

    ## Sound card settings [#sound-card-settings-7]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-7]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`setParameters\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setparameters).

    \`\`\`typescript
    setParameters("{\\"che.audio.aec.enable\\":false}") // Turn off echo cancellation
    setParameters("{\\"che.audio.ans.enable\\":false}") // Turn off noise reduction
    setParameters("{\\"che.audio.agc.enable\\":false}") // Turn off gain control
    \`\`\`

    ### Turn on stereo capture [#turn-on-stereo-capture-6]

    Call [\`setAdvancedAudioOptions\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions) to set the number of audio pre-processing channels to \`AGORA_AUDIO_STEREO_PROCESSING\` (2), that is, use two channels to collect and send stereo sound.

    \`\`\`typescript
    abstract setAdvancedAudioOptions(options: AdvancedAudioOptions): number;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your game.

    ## General settings [#general-settings-8]

    To improve the audio quality experience, consider the following:

    ### Set audio encoding properties [#set-audio-encoding-properties-7]

    Call [\`setAudioProfile\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2) to set the audio profile to \`MUSIC_HIGH_QUALITY_STEREO\` (5). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.

    \`\`\`csharp
    public abstract int SetAudioProfile(AUDIO_PROFILE_TYPE profile);
    \`\`\`

    ### Set audio scenario [#set-audio-scenario-6]

    Call [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\` (3).

    \`\`\`csharp
    public abstract int SetAudioScenario(AUDIO_SCENARIO_TYPE scenario);
    \`\`\`

    ## Sound card settings [#sound-card-settings-8]

    This section only applies to users using sound cards.

    ### Disable 3A [#disable-3a-8]

    RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling [\`SetParameters\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setparameters).

    \`\`\`cpp
    SetParameters("{\\"che.audio.aec.enable\\":false}") // Turn off echo cancellation
    SetParameters("{\\"che.audio.ans.enable\\":false}") // Turn off noise reduction
    SetParameters("{\\"che.audio.agc.enable\\":false}") // Turn off gain control
    \`\`\`

    ### Turn on stereo capture [#turn-on-stereo-capture-7]

    Call [\`SetAdvancedAudioOptions\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions) to set the number of audio pre-processing channels to \`AGORA_AUDIO_STEREO_PROCESSING\` (2), that is, use two channels to collect and send stereo sound.

    \`\`\`csharp
    public abstract int SetAdvancedAudioOptions(AdvancedAudioOptions options);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties",
    content: "Call `setAudioProfile` \\[2/2] to set the profile to `MUSIC_HIGH_QUALITY_STEREO` (5). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-use-case",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING` (3)."
  }, {
    heading: "sound-card-settings",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `setParameters`."
  }, {
    heading: "turn-on-stereo-capture",
    content: "Call `setAdvancedAudioOptions` to set the number of audio pre-processing channels to `AGORA_AUDIO_STEREO_PROCESSING` (2), that is, use two channels to collect and send stereo sound."
  }, {
    heading: "turn-on-stereo-capture",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings-1",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties-1",
    content: "Call `setAudioProfile` \\[2/2] to set the audio profile to `AgoraAudioProfileMusicHighQuality` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-scenario",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING` (3)."
  }, {
    heading: "sound-card-settings-1",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-1",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `setParameters`."
  }, {
    heading: "turn-on-stereo-capture-1",
    content: "Call `setAdvancedAudioOptions` to set the number of audio pre-processing channels to `AGORA_AUDIO_STEREO_PROCESSING` (2), that is, use two channels to collect and send stereo sound."
  }, {
    heading: "turn-on-stereo-capture-1",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings-2",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties-2",
    content: "Call `setAudioProfile` \\[2/2] to set the audio profile to `AgoraAudioProfileMusicHighQuality(4)`. It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-scenario-1",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING(3)`."
  }, {
    heading: "sound-card-settings-2",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-2",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `setParameters`."
  }, {
    heading: "turn-on-stereo-capture-2",
    content: "Call setAdvancedAudioOptions to set the number of audio pre-processing channels to `AGORA_AUDIO_STEREO_PROCESSING(2)`, that is, use two channels to collect and send stereo sound."
  }, {
    heading: "turn-on-stereo-capture-2",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings-3",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "using-default-audio-encoding",
    content: 'Call `createMicrophoneAudioTrack` and in `encoderConfig` pass `"high_quality_stereo"`, RTC SDK\'s built-in audio encoding configuration. It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps.'
  }, {
    heading: "custom-audio-encoding",
    content: "Use the following code example to customize audio encoding properties. This example sets a 48 kHz sampling rate, music encoding, two-channel usage, and a maximum encoding rate of 128 Kbps."
  }, {
    heading: "sound-card-settings-3",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-3",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable 3A by calling `createMicrophoneAudioTrack`."
  }, {
    heading: "disable-3a-3",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings-4",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties-3",
    content: "Call `setAudioProfile` \\[2/2] to set the audio profile to `AudioProfileMusicHighQuality` (4) and scenario to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-scenario-2",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING` (3)."
  }, {
    heading: "sound-card-settings-4",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-4",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `setParameters`."
  }, {
    heading: "turn-on-stereo-capture-3",
    content: "Call `setAdvancedAudioOptions` to set the number of audio pre-processing channels to `AudioProcessingStereo` (2), that is, use two channels to collect and send stereo sound."
  }, {
    heading: "turn-on-stereo-capture-3",
    content: "Call this method before calling `joinChannel`, `enableAudio`, and `enableLocalAudio`."
  }, {
    heading: "turn-on-stereo-capture-3",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings-5",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties-4",
    content: "Call `setAudioProfile` to set the profile to `AudioProfileMusicHighQuality` (4) and scenario to `AudioScenarioGameStreaming` (3). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-scenario-3",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING` (3)."
  }, {
    heading: "sound-card-settings-5",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-5",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `setParameters`."
  }, {
    heading: "turn-on-stereo-capture-4",
    content: "Call `setAdvancedAudioOptions` to set the number of audio pre-processing channels to `AudioProcessingStereo` (2), that is, use two channels to collect and send stereo sound."
  }, {
    heading: "turn-on-stereo-capture-4",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings-6",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties-5",
    content: "Call `setAudioProfile` to set the audio profile to `audioProfileMusicHighQuality` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-scenario-4",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `audioScenarioGameStreaming` (3)."
  }, {
    heading: "sound-card-settings-6",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-6",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `setParameters`."
  }, {
    heading: "turn-on-stereo-capture-5",
    content: "Call `setAdvancedAudioOptions` to set the number of audio pre-processing channels to `AGORA_AUDIO_STEREO_PROCESSING` (2), that is, use two channels to collect and send stereo sound."
  }, {
    heading: "turn-on-stereo-capture-5",
    content: "Call this method before calling `joinChannel`, `enableAudio`, and `enableLocalAudio`."
  }, {
    heading: "turn-on-stereo-capture-5",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
  }, {
    heading: "general-settings-7",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties-6",
    content: "Call `setAudioProfile` to set the audio profile to `AudioProfileMusicHighQuality` (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-scenario-5",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AudioScenarioGameStreaming` (3)."
  }, {
    heading: "sound-card-settings-7",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-7",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `setParameters`."
  }, {
    heading: "turn-on-stereo-capture-6",
    content: "Call `setAdvancedAudioOptions` to set the number of audio pre-processing channels to `AGORA_AUDIO_STEREO_PROCESSING` (2), that is, use two channels to collect and send stereo sound."
  }, {
    heading: "turn-on-stereo-capture-6",
    content: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your game."
  }, {
    heading: "general-settings-8",
    content: "To improve the audio quality experience, consider the following:"
  }, {
    heading: "set-audio-encoding-properties-7",
    content: "Call `setAudioProfile` \\[2/2] to set the audio profile to `MUSIC_HIGH_QUALITY_STEREO` (5). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."
  }, {
    heading: "set-audio-scenario-6",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING` (3)."
  }, {
    heading: "sound-card-settings-8",
    content: "This section only applies to users using sound cards."
  }, {
    heading: "disable-3a-8",
    content: "RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling `SetParameters`."
  }, {
    heading: "turn-on-stereo-capture-7",
    content: "Call `SetAdvancedAudioOptions` to set the number of audio pre-processing channels to `AGORA_AUDIO_STEREO_PROCESSING` (2), that is, use two channels to collect and send stereo sound."
  }],
  headings: [{
    id: "general-settings",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-use-case",
    content: "Set audio use-case"
  }, {
    id: "sound-card-settings",
    content: "Sound card settings"
  }, {
    id: "disable-3a",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture",
    content: "Turn on stereo capture"
  }, {
    id: "general-settings-1",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties-1",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-scenario",
    content: "Set audio scenario"
  }, {
    id: "sound-card-settings-1",
    content: "Sound card settings"
  }, {
    id: "disable-3a-1",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture-1",
    content: "Turn on stereo capture"
  }, {
    id: "general-settings-2",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties-2",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-scenario-1",
    content: "Set audio scenario"
  }, {
    id: "sound-card-settings-2",
    content: "Sound card settings"
  }, {
    id: "disable-3a-2",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture-2",
    content: "Turn on stereo capture"
  }, {
    id: "general-settings-3",
    content: "General settings"
  }, {
    id: "using-default-audio-encoding",
    content: "Using default audio encoding"
  }, {
    id: "custom-audio-encoding",
    content: "Custom audio encoding"
  }, {
    id: "sound-card-settings-3",
    content: "Sound card settings"
  }, {
    id: "disable-3a-3",
    content: "Disable 3A"
  }, {
    id: "general-settings-4",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties-3",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-scenario-2",
    content: "Set audio scenario"
  }, {
    id: "sound-card-settings-4",
    content: "Sound card settings"
  }, {
    id: "disable-3a-4",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture-3",
    content: "Turn on stereo capture"
  }, {
    id: "general-settings-5",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties-4",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-scenario-3",
    content: "Set audio scenario"
  }, {
    id: "sound-card-settings-5",
    content: "Sound card settings"
  }, {
    id: "disable-3a-5",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture-4",
    content: "Turn on stereo capture"
  }, {
    id: "general-settings-6",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties-5",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-scenario-4",
    content: "Set audio scenario"
  }, {
    id: "sound-card-settings-6",
    content: "Sound card settings"
  }, {
    id: "disable-3a-6",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture-5",
    content: "Turn on stereo capture"
  }, {
    id: "general-settings-7",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties-6",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-scenario-5",
    content: "Set audio scenario"
  }, {
    id: "sound-card-settings-7",
    content: "Sound card settings"
  }, {
    id: "disable-3a-7",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture-6",
    content: "Turn on stereo capture"
  }, {
    id: "general-settings-8",
    content: "General settings"
  }, {
    id: "set-audio-encoding-properties-7",
    content: "Set audio encoding properties"
  }, {
    id: "set-audio-scenario-6",
    content: "Set audio scenario"
  }, {
    id: "sound-card-settings-8",
    content: "Sound card settings"
  }, {
    id: "disable-3a-8",
    content: "Disable 3A"
  }, {
    id: "turn-on-stereo-capture-7",
    content: "Turn on stereo capture"
  }]
};
export let toc = [{
  depth: 2,
  url: "#general-settings",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-use-case",
  title: _jsx(_Fragment, {
    children: "Set audio use-case"
  })
}, {
  depth: 2,
  url: "#sound-card-settings",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
  })
}, {
  depth: 2,
  url: "#general-settings-1",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties-1",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario",
  title: _jsx(_Fragment, {
    children: "Set audio scenario"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-1",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-1",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture-1",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
  })
}, {
  depth: 2,
  url: "#general-settings-2",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties-2",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-1",
  title: _jsx(_Fragment, {
    children: "Set audio scenario"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-2",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-2",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture-2",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
  })
}, {
  depth: 2,
  url: "#general-settings-3",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#using-default-audio-encoding",
  title: _jsx(_Fragment, {
    children: "Using default audio encoding"
  })
}, {
  depth: 3,
  url: "#custom-audio-encoding",
  title: _jsx(_Fragment, {
    children: "Custom audio encoding"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-3",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-3",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 2,
  url: "#general-settings-4",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties-3",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-2",
  title: _jsx(_Fragment, {
    children: "Set audio scenario"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-4",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-4",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture-3",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
  })
}, {
  depth: 2,
  url: "#general-settings-5",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties-4",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-3",
  title: _jsx(_Fragment, {
    children: "Set audio scenario"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-5",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-5",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture-4",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
  })
}, {
  depth: 2,
  url: "#general-settings-6",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties-5",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-4",
  title: _jsx(_Fragment, {
    children: "Set audio scenario"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-6",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-6",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture-5",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
  })
}, {
  depth: 2,
  url: "#general-settings-7",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties-6",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-5",
  title: _jsx(_Fragment, {
    children: "Set audio scenario"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-7",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-7",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture-6",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
  })
}, {
  depth: 2,
  url: "#general-settings-8",
  title: _jsx(_Fragment, {
    children: "General settings"
  })
}, {
  depth: 3,
  url: "#set-audio-encoding-properties-7",
  title: _jsx(_Fragment, {
    children: "Set audio encoding properties"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-6",
  title: _jsx(_Fragment, {
    children: "Set audio scenario"
  })
}, {
  depth: 2,
  url: "#sound-card-settings-8",
  title: _jsx(_Fragment, {
    children: "Sound card settings"
  })
}, {
  depth: 3,
  url: "#disable-3a-8",
  title: _jsx(_Fragment, {
    children: "Disable 3A"
  })
}, {
  depth: 3,
  url: "#turn-on-stereo-capture-7",
  title: _jsx(_Fragment, {
    children: "Turn on stereo capture"
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
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","macos","web","windows","electron","flutter","react-native","unity"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsxs(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
          children: [_jsx(_components.code, {
            children: "setAudioProfile"
          }), " [2/2]"]
        }), " to set the profile to ", _jsx(_components.code, {
          children: "MUSIC_HIGH_QUALITY_STEREO"
        }), " (5). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
                    children: "// Set the audio profile to MUSIC_HIGH_QUALITY_STEREO"
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
                    children: "// Set the audio profile to MUSIC_HIGH_QUALITY_STEREO"
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
        id: "set-audio-use-case",
        children: "Set audio use-case"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "AUDIO_SCENARIO_GAME_STREAMING"
        }), " (3)."]
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
                    children: "// Set the audio scenario to GAME_STREAMING"
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
                    children: "// Set the audio scenario to GAME_STREAMING"
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
                })]
              })
            })
          })
        })]
      }), _jsx(_components.h2, {
        id: "sound-card-settings",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
          children: _jsx(_components.code, {
            children: "setParameters"
          })
        }), "."]
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
                    children: "// Turn off echo cancellation"
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
                    children: "setParameters"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"{'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "che.audio.aec.enable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ':false}"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Turn off noise reduction"
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
                    children: "setParameters"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"{'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "che.audio.ans.enable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ':false}"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Turn off gain control"
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
                    children: "setParameters"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"{'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "che.audio.agc.enable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ':false}"'
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
                    children: "// Turn off echo cancellation"
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
                    children: "setParameters"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"{'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "che.audio.aec.enable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ':false}"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Turn off noise reduction"
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
                    children: "setParameters"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"{'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "che.audio.ans.enable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ':false}"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Turn off gain control"
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
                    children: "setParameters"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "("
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"{'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: "che.audio.agc.enable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "\\\""
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: ':false}"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ")"
                  })]
                })]
              })
            })
          })
        })]
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions",
          children: _jsx(_components.code, {
            children: "setAdvancedAudioOptions"
          })
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AGORA_AUDIO_STEREO_PROCESSING"
        }), " (2), that is, use two channels to collect and send stereo sound."]
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
                    children: "// Set advanced audio options for 2 audio processing channels"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "AdvancedAudioOptions options "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
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
                    children: " AdvancedAudioOptions"
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
                    children: "options.audioProcessingChannels "
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "m_lpAgoraEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setAdvancedAudioOptions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(options);"
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
                    children: "// Set advanced audio options for 2 audio processing channels"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "val"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " options "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " AdvancedAudioOptions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "options.audioProcessingChannels "
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
                    children: " 2"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "m_lpAgoraEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setAdvancedAudioOptions"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(options)"
                  })]
                })]
              })
            })
          })
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings-1",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties-1",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsxs(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
          children: [_jsx(_components.code, {
            children: "setAudioProfile"
          }), " [2/2]"]
        }), " to set the audio profile to ", _jsx(_components.code, {
          children: "AgoraAudioProfileMusicHighQuality"
        }), " (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: ") setAudioProfile : (AgoraAudioProfile) profile;"
              })]
            })
          })
        })
      }), _jsx(_components.h3, {
        id: "set-audio-scenario",
        children: "Set audio scenario"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "AUDIO_SCENARIO_GAME_STREAMING"
        }), " (3)."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: ") setAudioScenario "
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
                children: " (AgoraAudioScenario) scenario;"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "sound-card-settings-1",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-1",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setparameters(_:)",
          children: _jsx(_components.code, {
            children: "setParameters"
          })
        }), "."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.aec.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.ans.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off noise reduction"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.agc.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off gain control"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture-1",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setadvancedaudiooptions(_:)",
          children: _jsx(_components.code, {
            children: "setAdvancedAudioOptions"
          })
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AGORA_AUDIO_STEREO_PROCESSING"
        }), " (2), that is, use two channels to collect and send stereo sound."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: ") setAdvancedAudioOptions : (AgoraAdvancedAudioOptions "
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
                children: " _Nonnull) options;"
              })]
            })
          })
        })
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings-2",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties-2",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsxs(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
          children: [_jsx(_components.code, {
            children: "setAudioProfile"
          }), " [2/2]"]
        }), " to set the audio profile to ", _jsx(_components.code, {
          children: "AgoraAudioProfileMusicHighQuality(4)"
        }), ". It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: ") setAudioProfile : (AgoraAudioProfile) profile;"
              })]
            })
          })
        })
      }), _jsx(_components.h3, {
        id: "set-audio-scenario-1",
        children: "Set audio scenario"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "AUDIO_SCENARIO_GAME_STREAMING(3)"
        }), "."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: ") setAudioScenario "
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
                children: " (AgoraAudioScenario) scenario;"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "sound-card-settings-2",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-2",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setparameters(_:)",
          children: _jsx(_components.code, {
            children: "setParameters"
          })
        }), "."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.aec.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.ans.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off noise reduction"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.agc.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off gain control"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture-2",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setadvancedaudiooptions(_:)",
          children: "setAdvancedAudioOptions"
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AGORA_AUDIO_STEREO_PROCESSING(2)"
        }), ", that is, use two channels to collect and send stereo sound."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: ") setAdvancedAudioOptions : (AgoraAdvancedAudioOptions "
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
                children: " _Nonnull) options;"
              })]
            })
          })
        })
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings-3",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "using-default-audio-encoding",
        children: "Using default audio encoding"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack",
          children: _jsx(_components.code, {
            children: "createMicrophoneAudioTrack"
          })
        }), " and in ", _jsx(_components.code, {
          children: "encoderConfig"
        }), " pass ", _jsx(_components.code, {
          children: '"high_quality_stereo"'
        }), ", RTC SDK's built-in audio encoding configuration. It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
        id: "custom-audio-encoding",
        children: "Custom audio encoding"
      }), _jsx(_components.p, {
        children: "Use the following code example to customize audio encoding properties. This example sets a 48 kHz sampling rate, music encoding, two-channel usage, and a maximum encoding rate of 128 Kbps."
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
      }), _jsx(_components.h2, {
        id: "sound-card-settings-3",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-3",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable 3A by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack",
          children: _jsx(_components.code, {
            children: "createMicrophoneAudioTrack"
          })
        }), "."]
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
                children: " AEC: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "false"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " AGC: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "false"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off gain control"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ANS: "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "false"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off noise reduction"
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings-4",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties-3",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsxs(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
          children: [_jsx(_components.code, {
            children: "setAudioProfile"
          }), " [2/2]"]
        }), " to set the audio profile to ", _jsx(_components.code, {
          children: "AudioProfileMusicHighQuality"
        }), " (4) and scenario to ", _jsx(_components.code, {
          children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
        }), " (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "virtual"
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
                children: " setAudioProfile"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AUDIO_PROFILE_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " profile"
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
                children: "="
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
                children: ";"
              })]
            })
          })
        })
      }), _jsx(_components.h3, {
        id: "set-audio-scenario-2",
        children: "Set audio scenario"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "AUDIO_SCENARIO_GAME_STREAMING"
        }), " (3)."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "virtual"
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
                children: " setAudioScenario"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AUDIO_SCENARIO_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " scenario"
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
                children: "="
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
                children: ";"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "sound-card-settings-4",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-4",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
          children: _jsx(_components.code, {
            children: "setParameters"
          })
        }), "."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.aec.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.ans.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // Turn off noise reduction"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.agc.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // Turn off gain control"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture-3",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions",
          children: _jsx(_components.code, {
            children: "setAdvancedAudioOptions"
          })
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AudioProcessingStereo"
        }), " (2), that is, use two channels to collect and send stereo sound."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Call this method before calling ", _jsx(_components.code, {
              children: "joinChannel"
            }), ", ", _jsx(_components.code, {
              children: "enableAudio"
            }), ", and ", _jsx(_components.code, {
              children: "enableLocalAudio"
            }), "."]
          })
        })
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "virtual"
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
                children: " setAdvancedAudioOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "media"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "base"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AdvancedAudioOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " &"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "options"
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
                children: "="
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
                children: ";"
              })]
            })
          })
        })
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings-5",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties-4",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
          children: _jsx(_components.code, {
            children: "setAudioProfile"
          })
        }), " to set the profile to ", _jsx(_components.code, {
          children: "AudioProfileMusicHighQuality"
        }), " (4) and scenario to ", _jsx(_components.code, {
          children: "AudioScenarioGameStreaming"
        }), " (3). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
                children: "abstract "
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
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  profile: AudioProfileType,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  scenario"
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
                children: " AudioScenarioType"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ): number;"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "set-audio-scenario-3",
        children: "Set audio scenario"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "AUDIO_SCENARIO_GAME_STREAMING"
        }), " (3)."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "abstract "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAudioScenario"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(scenario: AudioScenarioType): number;"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "sound-card-settings-5",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-5",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
          children: _jsx(_components.code, {
            children: "setParameters"
          })
        }), "."]
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.aec.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.ans.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off noise reduction"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.agc.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off gain control"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture-4",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions",
          children: _jsx(_components.code, {
            children: "setAdvancedAudioOptions"
          })
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AudioProcessingStereo"
        }), " (2), that is, use two channels to collect and send stereo sound."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "abstract "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAdvancedAudioOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options: AdvancedAudioOptions): number;"
              })]
            })
          })
        })
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings-6",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties-5",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
          children: _jsx(_components.code, {
            children: "setAudioProfile"
          })
        }), " to set the audio profile to ", _jsx(_components.code, {
          children: "audioProfileMusicHighQuality"
        }), " (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "Future"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
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
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  {"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "required"
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
                children: " profile,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "  AudioScenarioType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " scenario "
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
                children: ".audioScenarioDefault});"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "set-audio-scenario-4",
        children: "Set audio scenario"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/voice-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "audioScenarioGameStreaming"
        }), " (3)."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "Future"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAudioScenario"
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
                children: "AudioScenarioType"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " scenario);"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "sound-card-settings-6",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-6",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setparameters",
          children: _jsx(_components.code, {
            children: "setParameters"
          })
        }), "."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.aec.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.ans.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off noise reduction"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.agc.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off gain control"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture-5",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions",
          children: _jsx(_components.code, {
            children: "setAdvancedAudioOptions"
          })
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AGORA_AUDIO_STEREO_PROCESSING"
        }), " (2), that is, use two channels to collect and send stereo sound."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Call this method before calling ", _jsx(_components.code, {
              children: "joinChannel"
            }), ", ", _jsx(_components.code, {
              children: "enableAudio"
            }), ", and ", _jsx(_components.code, {
              children: "enableLocalAudio"
            }), "."]
          })
        })
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "Future"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "void"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "> "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAdvancedAudioOptions"
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
                children: "AdvancedAudioOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " options);"
              })]
            })
          })
        })
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your app."
      }), _jsx(_components.h2, {
        id: "general-settings-7",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties-6",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
          children: _jsx(_components.code, {
            children: "setAudioProfile"
          })
        }), " to set the audio profile to ", _jsx(_components.code, {
          children: "AudioProfileMusicHighQuality"
        }), " (4). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
                children: "abstract "
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
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  profile: AudioProfileType,"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  scenario"
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
                children: " AudioScenarioType"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " ): number;"
              })
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "set-audio-scenario-5",
        children: "Set audio scenario"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "AudioScenarioGameStreaming"
        }), " (3)."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "abstract "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAudioScenario"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(scenario: AudioScenarioType): number;"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "sound-card-settings-7",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-7",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
          children: _jsx(_components.code, {
            children: "setParameters"
          })
        }), "."]
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.aec.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.ans.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off noise reduction"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.agc.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ") "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Turn off gain control"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture-6",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions",
          children: _jsx(_components.code, {
            children: "setAdvancedAudioOptions"
          })
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AGORA_AUDIO_STEREO_PROCESSING"
        }), " (2), that is, use two channels to collect and send stereo sound."]
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
          children: _jsx(_components.code, {
            children: _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "abstract "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setAdvancedAudioOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(options: AdvancedAudioOptions): number;"
              })]
            })
          })
        })
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
        children: "Some use-cases, such as karaoke sessions, podcasts, and performance-based chats, require a high-quality audio experience. This page shows you how to achieve clear high-definition audio, without noise or interference in your game."
      }), _jsx(_components.h2, {
        id: "general-settings-8",
        children: "General settings"
      }), _jsx(_components.p, {
        children: "To improve the audio quality experience, consider the following:"
      }), _jsx(_components.h3, {
        id: "set-audio-encoding-properties-7",
        children: "Set audio encoding properties"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsxs(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
          children: [_jsx(_components.code, {
            children: "setAudioProfile"
          }), " [2/2]"]
        }), " to set the audio profile to ", _jsx(_components.code, {
          children: "MUSIC_HIGH_QUALITY_STEREO"
        }), " (5). It uses a 48 kHz sampling rate, music encoding, two channels, and the maximum encoding rate is 128 Kbps."]
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
                children: " SetAudioProfile"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AUDIO_PROFILE_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " profile"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            })
          })
        })
      }), _jsx(_components.h3, {
        id: "set-audio-scenario-6",
        children: "Set audio scenario"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
          children: _jsx(_components.code, {
            children: "setAudioScenario"
          })
        }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
          children: "AUDIO_SCENARIO_GAME_STREAMING"
        }), " (3)."]
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
                children: " SetAudioScenario"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AUDIO_SCENARIO_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " scenario"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            })
          })
        })
      }), _jsx(_components.h2, {
        id: "sound-card-settings-8",
        children: "Sound card settings"
      }), _jsx(_components.p, {
        children: "This section only applies to users using sound cards."
      }), _jsx(_components.h3, {
        id: "disable-3a-8",
        children: "Disable 3A"
      }), _jsxs(_components.p, {
        children: ["RTC SDK turns on 3A by default. In audio processing, 3A stands for Acoustic Echo Cancellation (AEC), Active Noise Suppression (ANS), and Automatic Gain Control (AGC). Sound card devices usually provide some built-in audio processing, such as echo and noise cancellation. Currently, if 3A is enabled in the application layer, it may cause over-processing of the audio signal and interference between different algorithms may impact sound quality. Best practice is that users with sound cards disable the 3A function by calling ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setparameters",
          children: _jsx(_components.code, {
            children: "SetParameters"
          })
        }), "."]
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "SetParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.aec.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // Turn off echo cancellation"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "SetParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.ans.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // Turn off noise reduction"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "SetParameters"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"{'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "che.audio.agc.enable"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "\\\""
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ':false}"'
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // Turn off gain control"
              })]
            })]
          })
        })
      }), _jsx(_components.h3, {
        id: "turn-on-stereo-capture-7",
        children: "Turn on stereo capture"
      }), _jsxs(_components.p, {
        children: ["Call ", _jsx(_components.a, {
          href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setadvancedaudiooptions",
          children: _jsx(_components.code, {
            children: "SetAdvancedAudioOptions"
          })
        }), " to set the number of audio pre-processing channels to ", _jsx(_components.code, {
          children: "AGORA_AUDIO_STEREO_PROCESSING"
        }), " (2), that is, use two channels to collect and send stereo sound."]
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
                children: " SetAdvancedAudioOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AdvancedAudioOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " options"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ");"
              })]
            })
          })
        })
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
