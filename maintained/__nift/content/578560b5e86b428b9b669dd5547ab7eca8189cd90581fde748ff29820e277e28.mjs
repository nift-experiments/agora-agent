import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Audio mixing and sound effects",
  description: "Play audio files and add sound effects to enhance the audio experience."
};
export let _markdown = `

RTC SDK makes it simple for you to publish audio captured through the microphone to subscribers in a channel. In some real-time audio and video use-cases, such as games or karaoke, you need to play sound effects or mix in music files to enhance the atmosphere and add interest. RTC SDK enables you to add sound effects and mix in pre-recorded audio.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    This page shows you how to implement audio mixing and playing sound effects in your app.

    ## Understand the tech [#understand-the-tech]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    * Audio files in one of the [supported formats](https://developer.android.com/media/platform/supported-formats).

    * Added the required permission to your project

      If your project's \`targetSdkVersion\` is greater than 20, add the following code to the \`AndroidManifest.xml\` file:

      \`\`\`xml
      <application>
        <!-- Other application settings -->
        android:usesCleartextTraffic="true"
        android:requestLegacyExternalStorage="true"
      </application>
      \`\`\`

    ## Play sound effects and music [#play-sound-effects-and-music]

    This section shows you how to implement playing sound effects and add audio mixing in your app.

    To manage audio mixing and sound effects, RTC SDK provides the following APIs:

    | Function                                    | Sound effect                                                                                                                     | Audio mixing                                                                                                                                                                                                         |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Play or stop playing a specific audio file  | \`preloadEffect\`<br /> \`unloadEffect\`<br /> \`playEffect\`<br /> \`stopEffect\`<br /> \`stopAllEffects\`                                | \`startAudioMixing\`<br /> \`stopAudioMixing\`                                                                                                                                                                           |
    | Pause or resume playing an audio file       | \`pauseEffect\`<br /> \`pauseAllEffects\`<br /> \`resumeEffect\`<br /> \`resumeAllEffects\`                                              | \`pauseAudioMixing\`<br /> \`resumeAudioMixing\`                                                                                                                                                                         |
    | Get and adjust playback position and volume | \`setEffectPosition\`<br /> \`getEffectCurrentPosition\`<br /> \`getEffectsVolume\`<br /> \`setEffectsVolume\`<br /> \`setVolumeOfEffect\` | \`getAudioMixingCurrentPosition\`<br /> \`setAudioMixingPosition\`<br /> \`getAudioMixingPublishVolume\`<br /> \`adjustAudioMixingPublishVolume\`<br /> \`getAudioMixingPlayoutVolume\`<br /> \`adjustAudioMixingPlayoutVolume\` |
    | Report playback status of audio files       | \`onAudioEffectFinished\`                                                                                                          | \`onAudioMixingStateChanged\`                                                                                                                                                                                          |

    ### Set up file access permissions [#set-up-file-access-permissions]

    For Android projects with \`targetSdkVersion\` greater than or equal to 20, add the following to the project's \`AndroidManifest.xml\` file:

    \`\`\`xml
    <application>
      android:usesCleartextTraffic="true"
      android:requestLegacyExternalStorage="true"
    </application>
    \`\`\`

    ### Play sound effects [#play-sound-effects]

    To play sound effects, refer to the following code example:

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
        //Import the IAudioEffectManger class
        import io.agora.rtc.IAudioEffectManager;

        // Call getAudioEffectManager to get the IAudioEffectManager class
        private IAudioEffectManager audioEffectManager;
        audioEffectManager = mRtcEngine.getAudioEffectManager();

        // Set the sound effect ID as a unique identifier for identifying sound effect files
        int id = 0;
        // If you want to play the sound effect repeatedly, you can preload the file into memory
        // If the file is large, do not preload it
        // You can only preload local sound effect files
        audioEffectManager.preloadEffect(id++, "Your file path");

        // Call playEffect to play the specified sound effect file
        // Call playEffect multiple times, set multiple sound effect IDs, and play multiple sound effect files at the same time
        audioEffectManager.playEffect(
          0,  // Set the sound effect ID
          "Your file path",  // Set the sound effect file path
          -1,  // Set the number of times the sound effect loops. -1 means infinite loop
          1,  // Set the tone of the sound effect. 1 represents the original pitch
          0.0, // Set the spatial position of the sound effect. 0.0 means the sound effect appears directly in front
          100, // Set the sound effect volume. 100 represents the original volume
          true, // Set whether to publish sound effects to the remote end
          0   // Set the playback position of the sound effect file (in ms). 0 means start at the beginning
        );

        // Pause or resume playing the specified sound effect file
        audioEffectManager.pauseEffect(id);
        audioEffectManager.resumeEffect(id);

        // Set the playback position of the specified local sound effect file
        audioEffectManager.setEffectPosition(id, 500);

        // Set the playback volume of all sound effect files
        audioEffectManager.setEffectsVolume(50.0);

        // Set the playback volume of the specified sound effect file
        audioEffectManager.setVolumeOfEffect(id, 50.0);

        // Release the preloaded sound effect file
        audioEffectManager.unloadEffect(id);

        // Stop playing all sound effect files
        audioEffectManager.stopAllEffects;

        @Override
        // This callback is triggered when the sound effect file ends playing
        public void onAudioEffectFinished(int soundId) {
          super.onAudioEffectFinished(soundId);
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Import the IAudioEffectManager class
        import io.agora.rtc.IAudioEffectManager

        // Call getAudioEffectManager to get the IAudioEffectManager class
        private lateinit var audioEffectManager: IAudioEffectManager

        audioEffectManager = mRtcEngine.getAudioEffectManager()

        // Set the sound effect ID as a unique identifier for identifying sound effect files
        var id = 0
        // If you want to play the sound effect repeatedly, you can preload the file into memory
        // If the file is large, do not preload it
        // You can only preload local sound effect files
        audioEffectManager.preloadEffect(id++, "Your file path")

        // Call playEffect to play the specified sound effect file
        // Call playEffect multiple times, set multiple sound effect IDs, and play multiple sound effect files at the same time
        audioEffectManager.playEffect(
          0,  // Set the sound effect ID
          "Your file path",  // Set the sound effect file path
          -1,  // Set the number of times the sound effect loops. -1 means infinite loop
          1,  // Set the tone of the sound effect. 1 represents the original pitch
          0.0, // Set the spatial position of the sound effect. 0.0 means the sound effect appears directly in front
          100, // Set the sound effect volume. 100 represents the original volume
          true, // Set whether to publish sound effects to the remote end
          0   // Set the playback position of the sound effect file (in ms). 0 means start at the beginning
        )

        // Pause or resume playing the specified sound effect file
        audioEffectManager.pauseEffect(id)
        audioEffectManager.resumeEffect(id)

        // Set the playback position of the specified local sound effect file
        audioEffectManager.setEffectPosition(id, 500)

        // Set the playback volume of all sound effect files
        audioEffectManager.setEffectsVolume(50.0)

        // Set the playback volume of the specified sound effect file
        audioEffectManager.setVolumeOfEffect(id, 50.0)

        // Release the preloaded sound effect file
        audioEffectManager.unloadEffect(id)

        // Stop playing all sound effect files
        audioEffectManager.stopAllEffects()

        // This callback is triggered when the sound effect file ends playing
        override fun onAudioEffectFinished(soundId: Int) {
          super.onAudioEffectFinished(soundId)
        }
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Incorporate audio mixing [#incorporate-audio-mixing]

    Before or after joining a channel, call \`startAudioMixing\` to play the audio file. When the audio mixing status changes, the SDK triggers the \`onAudioMixingStateChanged\` callback and reports the reason for the change.

    To mix in an audio file, refer to the following code example:

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
        // Start playing a music file
        mRtcEngine.startAudioMixing(
          "Your file path", // Specify the path of the local or online music file
          false,       // Set whether to play the music file only locally. false means both local and remote users can hear the music
          -1,       // Set the number of times the music file should be played. -1 indicates infinite loop
          0         // Set the starting playback position of a music file
        );

        @Override
        // Triggered when the playback state of the music file changes
        // After receiving the onAudioMixingStateChanged callback, call other mixing APIs, such as pauseAudioMixing or getAudioMixingDuration
        public void onAudioMixingStateChanged(int state, int errorCode) {
          super.onAudioMixingStateChanged(state, errorCode);
        }

        // Pause or resume playing the music file
        rtcEngine.pauseAudioMixing();
        rtcEngine.resumeAudioMixing();

        // Get the total duration of the current music file
        rtcEngine.getAudioMixingDuration();

        // Set the playback position of the current music file. 500 indicates starting playback from the 500th ms of the music file
        rtcEngine.setAudioMixingPosition(500);

        // Adjust the playback volume of the current music file for remote users
        rtcEngine.adjustAudioMixingPublishVolume(50);

        // Adjust the playback volume of the current music file locally
        rtcEngine.adjustAudioMixingPlayoutVolume(50);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Start playing a music file
        mRtcEngine.startAudioMixing(
          "Your file path", // Specify the path of the local or online music file
          false,       // Set whether to play the music file only locally. false means both local and remote users can hear the music
          -1,        // Set the number of times the music file should be played. -1 indicates infinite loop
          0         // Set the starting playback position of a music file
        )

        // Override callback for audio mixing state changes
        override fun onAudioMixingStateChanged(state: Int, errorCode: Int) {
          super.onAudioMixingStateChanged(state, errorCode)
        }

        // Pause or resume playing the music file
        rtcEngine.pauseAudioMixing()
        rtcEngine.resumeAudioMixing()

        // Get the total duration of the current music file
        rtcEngine.getAudioMixingDuration()

        // Set the playback position of the current music file (e.g., 500 ms)
        rtcEngine.setAudioMixingPosition(500)

        // Adjust the playback volume of the current music file for remote users
        rtcEngine.adjustAudioMixingPublishVolume(50)

        // Adjust the playback volume of the current music file locally
        rtcEngine.adjustAudioMixingPlayoutVolume(50)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    Control playback using the following methods:

    * \`pauseAudioMixing\`: Pause playback.
    * \`resumeAudioMixing\`: Resume playback.
    * \`stopAudioMixing\`: Stop playing.
    * \`setAudioMixingPosition\`: Set the playing position of the current audio file.
    * \`adjustAudioMixingPlayoutVolume\`: Adjust the volume of the current audio file played locally.
    * \`adjustAudioMixingPublishVolume\`: Adjust the volume of the current audio file played at the remote end.

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`startAudioMixing\`, or a long music file using \`playEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### FAQs [#faqs]

    * [Why can't I play the audio file using \`startAudioMixing\` or \`playEffect\` on Android 9?](/en/api-reference/faq/integration/android_startaudiomixing_permission)

    ### Sample project [#sample-project]

    Agora provides an open source [Play Audio Files](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample-Audio/app/src/main/java/io/agora/api/example/examples/advanced/PlayAudioFiles.java) project on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference]

    * [\`preloadEffect\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_iaudioeffectmanager.html#api_irtcengine_preloadeffect)

    * [\`playEffect\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_iaudioeffectmanager.html#api_irtcengine_playeffect3)

    * [\`onAudioEffectFinished\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished)

    * [\`startAudioMixing\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing)

    * [\`onAudioMixingStateChanged\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged)

    * [\`pauseAudioMixing\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pauseaudiomixing)

    * [\`resumeAudioMixing\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_resumeaudiomixing)

    * [\`stopAudioMixing\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stopaudiomixing)

    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)

    * [\`adjustAudioMixingPublishVolume\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingpublishvolume)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    This page shows you how to implement audio mixing and playing sound effects in your app.

    ## Understand the tech [#understand-the-tech-1]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites-1]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    * Audio files in one of the [supported formats](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28).

    ## Play sound effects and music [#play-sound-effects-and-music-1]

    This section shows you how to implement playing sound effects and add audio mixing in your app.

    To manage audio mixing and sound effects, RTC SDK provides the following APIs:

    | Function                                    | Sound effect                                                                                                                     | Audio mixing                                                                                                                                                                                                         |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Play or stop playing a specific audio file  | \`preloadEffect\`<br /> \`unloadEffect\`<br /> \`playEffect\`<br /> \`stopEffect\`<br /> \`stopAllEffects\`                                | \`startAudioMixing\`<br /> \`stopAudioMixing\`                                                                                                                                                                           |
    | Pause or resume playing an audio file       | \`pauseEffect\`<br /> \`pauseAllEffects\`<br /> \`resumeEffect\`<br /> \`resumeAllEffects\`                                              | \`pauseAudioMixing\`<br /> \`resumeAudioMixing\`                                                                                                                                                                         |
    | Get and adjust playback position and volume | \`setEffectPosition\`<br /> \`getEffectCurrentPosition\`<br /> \`getEffectsVolume\`<br /> \`setEffectsVolume\`<br /> \`setVolumeOfEffect\` | \`getAudioMixingCurrentPosition\`<br /> \`setAudioMixingPosition\`<br /> \`getAudioMixingPublishVolume\`<br /> \`adjustAudioMixingPublishVolume\`<br /> \`getAudioMixingPlayoutVolume\`<br /> \`adjustAudioMixingPlayoutVolume\` |
    | Report playback status of audio files       | \`rtcEngineDidAudioEffectFinish\`                                                                                                  | \`audioMixingStateChanged\`                                                                                                                                                                                            |

    ### Play sound effects [#play-sound-effects-1]

    Before joining a channel, call \`preloadEffect\`to preload the sound effect file. After joining the channel, call \`playEffect\` to play the specified sound effect. Call \`playEffect\` multiple times to set multiple sound effect IDs and play multiple files simultaneously. After the sound effect has finished playing, the SDK triggers the \`rtcEngineDidAudioEffectFinish\` callback.

    \`\`\`swift
    // Set the effect ID as a unique identifier for the audio effect file
    let EFFECT_ID:Int32 = 1
    // Specify the path to the audio effect file
    let filePath = "your filepath"
    // If you want to play the effect repeatedly, you need to preload the audio effect file into memory. Do not preload if the file size is large
    // You can only preload local audio effect files
    agoraKit.preloadEffect(EFFECT_ID, filePath: filePath)

    // Set the number of times the effect will loop. -1 means infinite loop
    int loopCount = -1;
    // Set the pitch of the effect. 1 means the original pitch
    let pitch = 1
    // Set the spatial position of the effect. 0.0 means the effect is in front
    let pan = 1
    // Set the volume of the effect. 100 means the original volume
    let gain = 100.0
    // Set whether to publish the effect to the remote end
    let publish = true
    // Call playEffect to play the specified audio effect file
    // Multiple calls to playEffect can set multiple effect IDs to play multiple audio effect files simultaneously
    agoraKit.playEffect(EFFECT_ID, filePath: filePath, loopCount: Int32(loopCount), pitch: pitch, pan: pan, gain: gain, publish: publish)

    // Pause or resume playing the audio effect file
    agoraKit.pauseEffect(EFFECT_ID)
    agoraKit.resumeEffect(EFFECT_ID)

    // Set the playback position of the specified local audio effect file
    agoraKit.setEffectPosition(EFFECT_ID, pos: 500)

    // Set the playback volume for all audio effect files
    agoraKit.setEffectsVolume(volume: 50.0)
    // Set the playback volume for the specified audio effect file
    agoraKit.setVolumeOfEffect(EFFECT_ID, volume: 50.0)

    // Unload the preloaded audio effect file
    agoraKit.unloadEffect(EFFECT_ID)
    // Pause playing all audio effect files
    agoraKit.stopAllEffects()

    // Trigger this callback when the audio effect file finishes playing
    func rtcEngineDidAudioEffectFinish(_engine: AgoraRtcEngineKit soundId: soundId)
    \`\`\`

    ### Incorporate audio mixing [#incorporate-audio-mixing-1]

    Before or after joining a channel, call \`startAudioMixing\` to play the audio file. When the audio mixing status changes, the SDK triggers the \`audioMixingStateChanged\` callback and reports the reason for the change.

    To mix in an audio file, refer to the following code example:

    \`\`\`swift
    // Specify the path to the local or online music file
    let filePath = "your file path"
    // Set whether to play the music file only locally. false means both local and remote users can hear the music file
    let loopback = false
    // The number of times the music file will loop. 1 means play only once
    let cycle = 1
    // Set the starting position of the music file playback
    let startPos = 0
    // Call the startAudioMixing method to play the music file
    agoraKit.startAudioMixing(filePath, loopback: loopback, cycle: cycle, startPos: startPos)

    // This callback is triggered when the music file playback status changes
    // After receiving the localAudioMixingStateDidChanged callback, Agora recommends calling other music mixing APIs, such as pauseAudioMixing or getAudioMixingDuration
    func rtcEngine(_ engine: AgoraRtcEngineKit,
            audioMixingStateChanged state: AgoraAudioMixingStateType,
            reasonCode: AgoraAudioMixingReasonCode) {
    }

    // Pause or resume playback of the music file
    agoraKit.pauseAudioMixing()
    agoraKit.resumeAudioMixing()

    // Get the total duration of the current music file
    agoraKit.getAudioMixingDuration()
    // Set the playback position of the current music file. 500 means start playing from 500 ms into the music file
    agoraKit.setAudioMixingPosition(pos: 500)

    // Adjust the playback volume of the current music file on the remote end
    agoraKit.adjustAudioMixingPublishVolume(volume: 50)
    // Adjust the playback volume of the current music file locally
    agoraKit.adjustAudioMixingPlayoutVolume(volume: 50)
    \`\`\`

    Control playback using the following methods:

    * \`pauseAudioMixing\`: Pause playback.
    * \`resumeAudioMixing\`: Resume playback.
    * \`stopAudioMixing\`: Stop playing.
    * \`setAudioMixingPosition\`: Set the playing position of the current audio file.
    * \`adjustAudioMixingPlayoutVolume\`: Adjust the volume of the current audio file played locally.
    * \`adjustAudioMixingPublishVolume\`: Adjust the volume of the current audio file played at the remote end.

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`startAudioMixing\`, or a long music file using \`playEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Sample project [#sample-project-1]

    Agora provides an open source [AudioMixing](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/AudioMixing) project on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-1]

    * [\`preloadEffect\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/preloadeffect\\(_\\:filepath:\\))

    * [\`playEffect\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/playeffect\\(_\\:filepath\\:loopcount\\:pitch\\:pan\\:gain\\:publish\\:startpos:\\))

    * [\`rtcEngineDidAudioEffectFinish\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcenginedidaudioeffectfinish\\(_\\:soundid:\\))

    * [\`startAudioMixing\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startaudiomixing\\(_\\:loopback\\:cycle:\\))

    * [\`audioMixingStateChanged\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:audiomixingstatechanged\\:reasoncode:\\))

    * [\`pauseAudioMixing\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pauseaudiomixing\\(\\))

    * [\`resumeAudioMixing\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/resumeaudiomixing\\(\\))

    * [\`stopAudioMixing\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopaudiomixing\\(\\))

    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume\\(_:\\))

    * [\`adjustAudioMixingPublishVolume\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingpublishvolume\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    This page shows you how to implement audio mixing and playing sound effects in your app.

    ## Understand the tech [#understand-the-tech-2]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites-2]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    * Audio files in one of the [supported formats](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28).

    ## Play sound effects and music [#play-sound-effects-and-music-2]

    This section shows you how to implement playing sound effects and add audio mixing in your app.

    To manage audio mixing and sound effects, RTC SDK provides the following APIs:

    | Function                                    | Sound effect                                                                                                                     | Audio mixing                                                                                                                                                                                                         |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Play or stop playing a specific audio file  | \`preloadEffect\`<br /> \`unloadEffect\`<br /> \`playEffect\`<br /> \`stopEffect\`<br /> \`stopAllEffects\`                                | \`startAudioMixing\`<br /> \`stopAudioMixing\`                                                                                                                                                                           |
    | Pause or resume playing an audio file       | \`pauseEffect\`<br /> \`pauseAllEffects\`<br /> \`resumeEffect\`<br /> \`resumeAllEffects\`                                              | \`pauseAudioMixing\`<br /> \`resumeAudioMixing\`                                                                                                                                                                         |
    | Get and adjust playback position and volume | \`setEffectPosition\`<br /> \`getEffectCurrentPosition\`<br /> \`getEffectsVolume\`<br /> \`setEffectsVolume\`<br /> \`setVolumeOfEffect\` | \`getAudioMixingCurrentPosition\`<br /> \`setAudioMixingPosition\`<br /> \`getAudioMixingPublishVolume\`<br /> \`adjustAudioMixingPublishVolume\`<br /> \`getAudioMixingPlayoutVolume\`<br /> \`adjustAudioMixingPlayoutVolume\` |
    | Report playback status of audio files       | \`rtcEngineDidAudioEffectFinish\`                                                                                                  | \`audioMixingStateChanged\`                                                                                                                                                                                            |

    ### Play sound effects [#play-sound-effects-2]

    Before joining a channel, call \`preloadEffect\`to preload the sound effect file. After joining the channel, call \`playEffect\` to play the specified sound effect. Call \`playEffect\` multiple times to set multiple sound effect IDs and play multiple files simultaneously. After the sound effect has finished playing, the SDK triggers the \`rtcEngineDidAudioEffectFinish\` callback.

    \`\`\`swift
    // Set the effect ID as a unique identifier for the audio effect file
    let EFFECT_ID:Int32 = 1
    // Specify the path to the audio effect file
    let filePath = "your filepath"
    // If you want to play the effect repeatedly, you need to preload the audio effect file into memory. Do not preload if the file size is large
    // You can only preload local audio effect files
    agoraKit.preloadEffect(EFFECT_ID, filePath: filePath)

    // Set the number of times the effect will loop. -1 means infinite loop
    int loopCount = -1;
    // Set the pitch of the effect. 1 means the original pitch
    let pitch = 1
    // Set the spatial position of the effect. 0.0 means the effect is in front
    let pan = 1
    // Set the volume of the effect. 100 means the original volume
    let gain = 100.0
    // Set whether to publish the effect to the remote end
    let publish = true
    // Call playEffect to play the specified audio effect file
    // Multiple calls to playEffect can set multiple effect IDs to play multiple audio effect files simultaneously
    agoraKit.playEffect(EFFECT_ID, filePath: filePath, loopCount: Int32(loopCount), pitch: pitch, pan: pan, gain: gain, publish: publish)

    // Pause or resume playing the audio effect file
    agoraKit.pauseEffect(EFFECT_ID)
    agoraKit.resumeEffect(EFFECT_ID)

    // Set the playback position of the specified local audio effect file
    agoraKit.setEffectPosition(EFFECT_ID, pos: 500)

    // Set the playback volume for all audio effect files
    agoraKit.setEffectsVolume(volume: 50.0)
    // Set the playback volume for the specified audio effect file
    agoraKit.setVolumeOfEffect(EFFECT_ID, volume: 50.0)

    // Unload the preloaded audio effect file
    agoraKit.unloadEffect(EFFECT_ID)
    // Pause playing all audio effect files
    agoraKit.stopAllEffects()

    // Trigger this callback when the audio effect file finishes playing
    func rtcEngineDidAudioEffectFinish(_engine: AgoraRtcEngineKit soundId: soundId)
    \`\`\`

    ### Incorporate audio mixing [#incorporate-audio-mixing-2]

    Before or after joining a channel, call \`startAudioMixing\` to play the audio file. When the audio mixing status changes, the SDK triggers the \`audioMixingStateChanged\` callback and reports the reason for the change.

    To mix in an audio file, refer to the following code example:

    \`\`\`swift
    // Specify the path to the local or online music file
    let filePath = "your file path"
    // Set whether to play the music file only locally. false means both local and remote users can hear the music file
    let loopback = false
    // The number of times the music file will loop. 1 means play only once
    let cycle = 1
    // Set the starting position of the music file playback
    let startPos = 0
    // Call the startAudioMixing method to play the music file
    agoraKit.startAudioMixing(filePath, loopback: loopback, cycle: cycle, startPos: startPos)

    // This callback is triggered when the music file playback status changes
    // After receiving the localAudioMixingStateDidChanged callback, Agora recommends calling other music mixing APIs, such as pauseAudioMixing or getAudioMixingDuration
    func rtcEngine(_ engine: AgoraRtcEngineKit,
            audioMixingStateChanged state: AgoraAudioMixingStateType,
            reasonCode: AgoraAudioMixingReasonCode) {
    }

    // Pause or resume playback of the music file
    agoraKit.pauseAudioMixing()
    agoraKit.resumeAudioMixing()

    // Get the total duration of the current music file
    agoraKit.getAudioMixingDuration()
    // Set the playback position of the current music file. 500 means start playing from 500 ms into the music file
    agoraKit.setAudioMixingPosition(pos: 500)

    // Adjust the playback volume of the current music file on the remote end
    agoraKit.adjustAudioMixingPublishVolume(volume: 50)
    // Adjust the playback volume of the current music file locally
    agoraKit.adjustAudioMixingPlayoutVolume(volume: 50)
    \`\`\`

    Control playback using the following methods:

    * \`pauseAudioMixing\`: Pause playback.
    * \`resumeAudioMixing\`: Resume playback.
    * \`stopAudioMixing\`: Stop playing.
    * \`setAudioMixingPosition\`: Set the playing position of the current audio file.
    * \`adjustAudioMixingPlayoutVolume\`: Adjust the volume of the current audio file played locally.
    * \`adjustAudioMixingPublishVolume\`: Adjust the volume of the current audio file played at the remote end.

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`startAudioMixing\`, or a long music file using \`playEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Sample project [#sample-project-2]

    Agora provides an open source [AudioMixing](https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/AudioMixing) project on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-2]

    * [\`preloadEffect\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/preloadeffect\\(_\\:filepath:\\))

    * [\`playEffect\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/playeffect\\(_\\:filepath\\:loopcount\\:pitch\\:pan\\:gain\\:publish\\:startpos:\\))

    * [\`rtcEngineDidAudioEffectFinish\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcenginedidaudioeffectfinish\\(_\\:soundid:\\))

    * [\`startAudioMixing\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startaudiomixing\\(_\\:loopback\\:cycle:\\))

    * [\`audioMixingStateChanged\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:audiomixingstatechanged\\:reasoncode:\\))

    * [\`pauseAudioMixing\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pauseaudiomixing\\(\\))

    * [\`resumeAudioMixing\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/resumeaudiomixing\\(\\))

    * [\`stopAudioMixing\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stopaudiomixing\\(\\))

    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume\\(_:\\))

    * [\`adjustAudioMixingPublishVolume\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingpublishvolume\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    In Agora Web SDK, if you publish multiple local audio tracks, the SDK automatically mixes these audios. To achieve the effect of mixing audio files with voice, create and publish multiple local audio tracks.

    Try out the [online demo](https://webdemo-global.agora.io/index.html) for [Audio effects and music files](https://webdemo-global.agora.io/example/advanced/audioMixingAndAudioEffect/index.html).

    This page shows you how to implement audio mixing and playing sound effects in your app.

    ## Understand the tech [#understand-the-tech-3]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites-3]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implement audio mixing [#implement-audio-mixing]

    To implement audio mixing in your project, take the following steps:

    1. **Create a buffer source track**

       RTC SDK offers the \`createBufferSourceAudioTrack\` method that enables you to read a local or online audio file, and create a corresponding local audio track object \`BufferSourceAudioTrack\`:

       \`\`\`javascript
       // Create an audio track using online music
       const audioFileTrack = await AgoraRTC.createBufferSourceAudioTrack({
         source: "https://web-demos-static.agora.io/agora/smlt.flac",
       });
       console.log("create audio file track success");
       \`\`\`

       Audio tracks created from audio files follow a different audio data processing flow than microphone audio tracks. After creating a track using an audio file, if you directly call \`audioFileTrack.play\` or \`client.publish([audioFileTrack])\`, you do not hear the music either locally or remotely.

       You can publish the following audio tracks in the channel.

       1. **MicrophoneAudioTrack**

          For microphone audio tracks, the SDK continuously collects the latest audio data (\`AudioBuffer\`) from the target microphone device.

          ![MicrophoneAudioTrack](https://assets-docs.agora.io/images/video-sdk/microphone-audio-track-web.svg)

          * After you call the \`play\` method, the audio data is sent to the \`LocalPlayback\` component, allowing the local user to hear it.

          * When the \`publish\` method is called, the audio data is transmitted to Agora SDRTN® and eventually heard by the remote user.
            The microphone audio track continues to acquire audio data until the \`close\` method is invoked, at which point the audio track becomes unavailable.

       2. **BufferSourceAudioTrack**

          For audio files, the RTC SDK does not collect audio data; instead, it achieves a similar effect by reading files, shown in the following figure.

          ![BufferSourceAudioTrack](https://assets-docs.agora.io/images/video-sdk/buffer-source-audio-track-web.svg)

          The key distinctions between collecting audio data and reading files are as follows:

          1. **Continuous vs. controlled reading:**
             * Collection of audio data is continuous and cannot be paused, focusing on capturing the latest audio data.
             * File reading provides more flexibility. You can pause, jump to specific positions, or loop playback. These operations are core functions of \`BufferSourceAudioTrack\`.

          2. **Initiating file reading:**
             * After creating an audio track from an audio file, the SDK does not automatically read the file. You need to use \`BufferSourceAudioTrack\`'s \`startProcessAudioBuffer\` method to initiate the reading and audio data processing. You then call the \`play\` and \`publish\` methods to make the audio file audible locally and remotely.

    2. **Enable audio mixing**

       RTC SDK supports publishing multiple audio tracks. You can mix audio by publishing \`BufferSourceAudioTrack\` together with the audio tracks created through the microphone. To enable audio mixing, refer to the following code:

       \`\`\`javascript
       // Create a microphone audio track
       const microphoneTrack = await AgoraRTC.createMicrophoneAudioTrack();

       // Start processing audio data from the audio file
       audioFileTrack.startProcessAudioBuffer();

       // Publish both the audio file track and the microphone track to begin mixing
       await client.publish([microphoneTrack, audioFileTrack]);

       // To stop mixing, either stop processing audio data from the file
       audioFileTrack.stopProcessAudioBuffer();

       // Or directly unpublish the audio file track
       await client.unpublish([audioFileTrack]);
       \`\`\`

    3. **Manage audio mixing**

       To handle audio mixing, refer to the following code:

       \`\`\`javascript
       // Pause processing audio data
       audioFileTrack.pauseProcessAudioBuffer();
       // Resume processing audio data
       audioFileTrack.resumeProcessAudioBuffer();
       // Stop processing audio data
       audioFileTrack.stopProcessAudioBuffer();
       // Start processing audio data in the loop mode
       audioFileTrack.startProcessAudioBuffer({ loop: true });

       // Get the current playback progress (seconds)
       audioFileTrack.getCurrentTime();
       // Total duration of the current audio file (seconds)
       audioFileTrack.duration;
       // Jump to the position at 50 seconds
       audioFileTrack.seekAudioBuffer(50);
       \`\`\`

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`startAudioMixing\`, or a long music file using \`playEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development notes [#development-notes]

    Consider the following when developing your app:

    * To play online audio files, you also need to configure CORS.
    * Supported audio formats are MP3, AAC, and other audio formats supported by the browser.
    * Local files only support the browser's native [File object](https://developer.mozilla.org/en-US/docs/Web/API/File).
    * Safari versions below 12 do not support mixing, so publishing multiple audio tracks is not possible.
    * Irrespective of the number of audio tracks published locally, the SDK automatically mixes them into one audio track, so the remote user only receives one \`RemoteAudioTrack\`.

    ### API reference [#api-reference-3]

    * [\`createBufferSourceAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createbuffersourceaudiotrack)
    * [\`BufferSourceAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ibuffersourceaudiotrack.html)
    * [\`publish\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#publish)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    This page shows you how to implement audio mixing and playing sound effects in your app.

    ## Understand the tech [#understand-the-tech-4]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites-4]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    * Audio files in one of the [supported formats](https://learn.microsoft.com/zh-cn/windows/win32/medfound/supported-media-formats-in-media-foundation).

    ## Play sound effects and music [#play-sound-effects-and-music-3]

    This section shows you how to implement playing sound effects and add audio mixing in your app.

    To manage audio mixing and voice effects, RTC SDK provides the following APIs:

    | Function                                    | Sound effect                                                                                                                     | Audio mixing                                                                                                                                                                                                         |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Play or stop playing a specific audio file  | \`preloadEffect\`<br /> \`unloadEffect\`<br /> \`playEffect\`<br /> \`stopEffect\`<br /> \`stopAllEffects\`                                | \`startAudioMixing\`<br /> \`stopAudioMixing\`                                                                                                                                                                           |
    | Pause or resume playing an audio file       | \`pauseEffect\`<br /> \`pauseAllEffects\`<br /> \`resumeEffect\`<br /> \`resumeAllEffects\`                                              | \`pauseAudioMixing\`<br /> \`resumeAudioMixing\`                                                                                                                                                                         |
    | Get and adjust playback position and volume | \`setEffectPosition\`<br /> \`getEffectCurrentPosition\`<br /> \`getEffectsVolume\`<br /> \`setEffectsVolume\`<br /> \`setVolumeOfEffect\` | \`getAudioMixingCurrentPosition\`<br /> \`setAudioMixingPosition\`<br /> \`getAudioMixingPublishVolume\`<br /> \`adjustAudioMixingPublishVolume\`<br /> \`getAudioMixingPlayoutVolume\`<br /> \`adjustAudioMixingPlayoutVolume\` |
    | Report playback status of audio files       | \`onAudioEffectFinished\`                                                                                                          | \`onAudioMixingStateChanged\`                                                                                                                                                                                          |

    ### Play sound effects [#play-sound-effects-3]

    Before joining a channel, call \`preloadEffect\` to preload the sound effect file. After joining the channel, call \`playEffect\` to play the specified sound effect file. To play multiple sound effect files simultaneously, set multiple sound effect IDs and call \`playEffect\` multiple times. After a sound effect is played, the RTC SDK triggers the \`onAudioEffectFinished\` callback.

    To implement this logic, refer to the following sample code:

    \`\`\`cpp
    void CAgoraEffectDlg::OnBnClickedButtonPreload()
    {
      if (m_cmbEffect.GetCurSel() < 0)
      {
        return;
      }
      CString strEffect;
      m_cmbEffect.GetWindowText(strEffect);
      std::string strPath = cs2utf8(strEffect);
      // Preload the sound effect file
      m_rtcEngine->preloadEffect(m_mapEffect[strEffect], strPath.c_str());
      CString strInfo;
      strInfo.Format(_T("preload effect: path:%s"), strEffect);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraEffectDlg::OnBnClickedButtonUnloadEffect()
    {
      if (m_cmbEffect.GetCurSel() < 0)
      {
        return;
      }
      CString strEffect;
      m_cmbEffect.GetWindowText(strEffect);
      // Unload the preloaded sound effect file
      m_rtcEngine->unloadEffect(m_mapEffect[strEffect]);
      CString strInfo;
      strInfo.Format(_T("unload effect: path:%s"), strEffect);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraEffectDlg::OnBnClickedButtonPauseEffect()
    {
      if (m_cmbEffect.GetCurSel() < 0)
      {
        return;
      }
      CString strEffect;
      m_cmbEffect.GetWindowText(strEffect);
      // Pause playing the specified sound effect file
      m_rtcEngine->pauseEffect(m_mapEffect[strEffect]);

      CString strInfo;
      strInfo.Format(_T("pause effect: path:%s"), strEffect);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraEffectDlg::OnBnClickedButtonResumeEffect()
    {
      if (m_cmbEffect.GetCurSel() < 0)
      {
        return;
      }
      CString strEffect;
      m_cmbEffect.GetWindowText(strEffect);
      // Resume playing the specified sound effect file
      int ret = m_rtcEngine->resumeEffect(m_mapEffect[strEffect]);

      CString strInfo;
      strInfo.Format(_T("resume effect ret:%d : path:%s"), ret, strEffect);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraEffectDlg::OnBnClickedButtonPlayEffect()
    {
      if (m_cmbEffect.GetCurSel() < 0)
      {
        return;
      }
      CString strEffect;
      m_cmbEffect.GetWindowText(strEffect);
      std::string strFile = cs2utf8(strEffect);
      CString strLoops;
      m_edtLoops.GetWindowText(strLoops);
      int loops = _ttol(strLoops);
      if (loops == 0) {
        m_edtLoops.SetWindowText(_T("1"));
        loops = 1;
      }
      CString strPitch;
      m_edtPitch.GetWindowText(strPitch);
      double pitch = _ttof(strPitch);

      CString strGain;
      m_edtGain.GetWindowText(strGain);
      int gain = _ttol(strGain);

      CString strPan;
      m_cmbPan.GetWindowText(strPan);
      double pan = _ttof(strPan);

      BOOL publish = m_chkPublish.GetCheck();
      // Play the sound effect file
      int ret = m_rtcEngine->playEffect(m_mapEffect[strEffect], strFile.c_str(), loops, pitch, pan, gain, publish);

      CString strInfo;
      strInfo.Format(_T("play effect: path:%s, ret:%d"), strEffect, ret);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
      strInfo.Format(_T("loops:%d, pitch:%.1f, pan:%.0f, gain:%d, publish:%d"),
        loops, pitch, pan, gain, publish);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraEffectDlg::OnBnClickedButtonStopEffect()
    {
      if (m_cmbEffect.GetCurSel() < 0)
      {
        return;
      }
      CString strEffect;
      m_cmbEffect.GetWindowText(strEffect);
      // Stop playing the specified sound effect file
      m_rtcEngine->stopEffect(m_mapEffect[strEffect]);

      CString strInfo;
      strInfo.Format(_T("stop effect: path:%s"), strEffect);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraEffectDlg::OnBnClickedButtonPauseAllEffect()
    {
      if (!m_pauseAll)
      {
        // Pause playing all sound effect files
        m_rtcEngine->pauseAllEffects();
        CString strInfo;
        strInfo.Format(_T("pause All Effects"));
        m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
        m_btnPauseAll.SetWindowText(AudioEffectCtrlResumeEffect);
      }
      else {
        // Resume playing all sound effect files
        m_rtcEngine->resumeAllEffects();
        CString strInfo;
        strInfo.Format(_T("resume All Effects"));
        m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
        m_btnPauseAll.SetWindowText(AudioEffectCtrlPauseAllEffect);
      }
      m_pauseAll = !m_pauseAll;
    }

    void CAgoraEffectDlg::OnBnClickedButtonStopAllEffect2()
    {
      // Stop playing all sound effect files
      m_rtcEngine->stopAllEffects();
      CString strInfo;
      strInfo.Format(_T("stop All Effects"));
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }
    \`\`\`

    ### Incorporate audio mixing [#incorporate-audio-mixing-3]

    To play a music file, call \`startAudioMixing\` before or after joining a channel. After you successfully call this method, RTC SDK triggers the \`onAudioMixingStateChanged\` callback when the mixing status changes. This callback also reports the reason for the state change.

    To implement this logic, refer to the following code:

    \`\`\`cpp
    void CAgoraAudioMixingDlg::OnBnClickedButtonMixingStart()
    {
      CString audioUrl = GetExePath() + _T("\\\\ID_MUSIC_01.m4a");
      // Start playing the music file
      int ret = m_rtcEngine->startAudioMixing(cs2utf8(audioUrl).c_str(), false, -1);

      CString strInfo;
      strInfo.Format(_T("startAudioMixing path:%s, ret:%d"), audioUrl.AllocSysString(), ret);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    // Listen for the onAudioMixingStateChanged callback
    void CAudioMixingEventHandler::onAudioMixingStateChanged(AUDIO_MIXING_STATE_TYPE state, AUDIO_MIXING_REASON_TYPE reason)
    {
      if (m_hMsgHanlder) {
        PAudioMixingState stateChanged = new AudioMixingState;
        stateChanged->error = reason;
        stateChanged->state = state;
        ::PostMessage(m_hMsgHanlder, WM_MSGID(EID_REMOTE_AUDIO_MIXING_STATE_CHANED), (WPARAM)stateChanged, 0);
      }
    }

    void CAgoraAudioMixingDlg::OnBnClickedButtonMixingPause()
    {  // Pause playback
      int ret = m_rtcEngine->pauseAudioMixing();

      CString strInfo;
      strInfo.Format(_T("pauseAudioMixing ret:%d"), ret);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraAudioMixingDlg::OnBnClickedButtonMixingResume()
    {  // Resume playback
      int ret = m_rtcEngine->resumeAudioMixing();

      CString strInfo;
      strInfo.Format(_T("resumeAudioMixing ret:%d"), ret);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraAudioMixingDlg::OnBnClickedButtonMixingStop()
    {  // Stop playback
      int ret = m_rtcEngine->stopAudioMixing();

      CString strInfo;
      strInfo.Format(_T("stopAudioMixing ret:%d"), ret);
      m_lstInfo.InsertString(m_lstInfo.GetCount(), strInfo);
    }

    void CAgoraAudioMixingDlg::OnNMCustomdrawSliderMixingPlayoutVolume(NMHDR* pNMHDR, LRESULT* pResult)
    {
      LPNMCUSTOMDRAW pNMCD = reinterpret_cast<LPNMCUSTOMDRAW>(pNMHDR);
      int pos = m_sldMixingPlayoutVolume.GetPos();
      // Adjust the playback volume of the current music file locally
      int ret = m_rtcEngine->adjustAudioMixingPlayoutVolume(pos);
      *pResult = 0;
    }

    void CAgoraAudioMixingDlg::OnNMCustomdrawSliderMixingPublishVolume(NMHDR* pNMHDR, LRESULT* pResult)
    {
      LPNMCUSTOMDRAW pNMCD = reinterpret_cast<LPNMCUSTOMDRAW>(pNMHDR);
      int pos = m_sldMixingPublishVolume.GetPos();
      // Adjust the playback volume of the current music file on the remote end
      int ret = m_rtcEngine->adjustAudioMixingPublishVolume(pos);
      *pResult = 0;
    }
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`startAudioMixing\`, or a long music file using \`playEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Sample projects [#sample-projects]

    Agora provides the following open source sample projects on GitHub for your reference.

    * [AudioEffect](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioEffect)
    * [AudioMixing](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioMixing)

    Download or view the source code for more detailed examples.

    ### API reference [#api-reference-4]

    * [\`preloadEffect\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_preloadeffect)

    * [\`playEffect\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3)

    * [\`onAudioEffectFinished\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished)

    * [\`startAudioMixing\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing)

    * [\`onAudioMixingStateChanged\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged)

    * [\`pauseAudioMixing\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_pauseaudiomixing)

    * [\`resumeAudioMixing\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_resumeaudiomixing)

    * [\`stopAudioMixing\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stopaudiomixing)

    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)

    * [\`adjustAudioMixingPublishVolume\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingpublishvolume)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    This page shows you how to implement audio mixing and playing sound effects in your app.

    ## Understand the tech [#understand-the-tech-5]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites-5]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    * Audio files in one of the formats supported by the target development platform:
      * [macOS](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28)
      * [Windows](https://learn.microsoft.com/zh-cn/windows/win32/medfound/supported-media-formats-in-media-foundation)

    ## Play sound effects and music [#play-sound-effects-and-music-4]

    This section shows you how to implement playing sound effects and add audio mixing in your app.

    To manage audio mixing and sound effects, RTC SDK provides the following APIs:

    | Function                                    | Sound effect                                                                                                                     | Audio mixing                                                                                                                                                                                                         |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Play or stop playing a specific audio file  | \`preloadEffect\`<br /> \`unloadEffect\`<br /> \`playEffect\`<br /> \`stopEffect\`<br /> \`stopAllEffects\`                                | \`startAudioMixing\`<br /> \`stopAudioMixing\`                                                                                                                                                                           |
    | Pause or resume playing an audio file       | \`pauseEffect\`<br /> \`pauseAllEffects\`<br /> \`resumeEffect\`<br /> \`resumeAllEffects\`                                              | \`pauseAudioMixing\`<br /> \`resumeAudioMixing\`                                                                                                                                                                         |
    | Get and adjust playback position and volume | \`setEffectPosition\`<br /> \`getEffectCurrentPosition\`<br /> \`getEffectsVolume\`<br /> \`setEffectsVolume\`<br /> \`setVolumeOfEffect\` | \`getAudioMixingCurrentPosition\`<br /> \`setAudioMixingPosition\`<br /> \`getAudioMixingPublishVolume\`<br /> \`adjustAudioMixingPublishVolume\`<br /> \`getAudioMixingPlayoutVolume\`<br /> \`adjustAudioMixingPlayoutVolume\` |
    | Report playback status of audio files       | \`onAudioEffectFinished\`                                                                                                          | \`onAudioMixingStateChanged\`                                                                                                                                                                                          |

    ### Play sound effects [#play-sound-effects-4]

    After joining a channel, call \`playEffect\` to play the specified sound effect file. Call \`playEffect\` multiple times to set multiple sound effect IDs and play multiple files simultaneously. When the playback is finished, the SDK triggers the \`onAudioEffectFinished\` callback.

    Refer to the following code example:

    \`\`\`typescript
    // Register the sound effect playback completion callback
    const EventHandler = {
      onAudioEffectFinished: (soundId) => {
        console.log(\`soundId:\${soundId}\`);
      }
    }
    rtcEngine.registerEventHandler(EventHandler);

    // Playing sound files
    rtcEngine.playEffect(
      soundId: 0, // Sets the sound ID
      filePath: 'your file path',
      loopCount: 1, // Sets the number of times the sound effect is looped. 1 means looped once.
      pitch: 1.0, // Sets the pitch of the sound effect. 1.0 indicates the original pitch.
      pan: 0, // Sets the spatial position of the sound effect. 0.0 means the sound effect appears directly in front
      gain: 100, // Sets the sound volume. 100 indicates the original volume.
      publish: false, // Sets whether or not to publish the sound to the remote users
      startPos: 0, // Sets the playback position of the sound effect file in ms. 0 means playback starts at the beginning.
    );
    \`\`\`

    ### Incorporate audio mixing [#incorporate-audio-mixing-4]

    Call the \`startAudioMixing\` method to play a music file. When the music mixing state changes after a successful call to this method, the SDK triggers the \`onAudioMixingStateChanged\` callback to report the changed music file playback status and the reason for the change.

    Refer to the following code example:

    \`\`\`typescript
    // Register the music file's playback state has changed callback
    const EventHandler = {
      onAudioMixingStateChanged: (state, reason) => {
        console.log(\`state:\${state}, reason:\${reason}\`);
      }
    }
    rtcEngine.registerEventHandler(EventHandler);

    // Playing Music Files
    rtcEngine.startAudioMixing(
      filePath: 'your file path', // Sets the music file path
      loopback: false, // Sets whether music files are only played locally. 'false' indicates that files are published to the remote end, and both local and remote users can hear the music
      cycle: -1, // Sets the number of times the music file is played. -1 means infinite loop playback
      startPos: 0, // Sets the playback position of the music file in ms. 0 means playback starts st the beginning.
    );
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`startAudioMixing\`, or a long music file using \`playEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-5]

    * [\`playEffect\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3)

    * [\`onAudioEffectFinished\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished)

    * [\`startAudioMixing\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing2)

    * [\`onAudioMixingStateChanged\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    This page shows you how to implement audio mixing and playing sound effects in your app.

    ## Understand the tech [#understand-the-tech-6]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites-6]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    * Audio files in one of the formats supported by the target development platform:
      * [Android](https://developer.android.com/media/platform/supported-formats)
      * [iOS](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28)

    ## Play sound effects and music [#play-sound-effects-and-music-5]

    This section shows you how to implement playing sound effects and add audio mixing in your app.

    To manage audio mixing and sound effects, RTC SDK provides the following APIs:

    | Function                                    | Sound effect                                                                                                                     | Audio mixing                                                                                                                                                                                                         |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Play or stop playing a specific audio file  | \`preloadEffect\`<br /> \`unloadEffect\`<br /> \`playEffect\`<br /> \`stopEffect\`<br /> \`stopAllEffects\`                                | \`startAudioMixing\`<br /> \`stopAudioMixing\`                                                                                                                                                                           |
    | Pause or resume playing an audio file       | \`pauseEffect\`<br /> \`pauseAllEffects\`<br /> \`resumeEffect\`<br /> \`resumeAllEffects\`                                              | \`pauseAudioMixing\`<br /> \`resumeAudioMixing\`                                                                                                                                                                         |
    | Get and adjust playback position and volume | \`setEffectPosition\`<br /> \`getEffectCurrentPosition\`<br /> \`getEffectsVolume\`<br /> \`setEffectsVolume\`<br /> \`setVolumeOfEffect\` | \`getAudioMixingCurrentPosition\`<br /> \`setAudioMixingPosition\`<br /> \`getAudioMixingPublishVolume\`<br /> \`adjustAudioMixingPublishVolume\`<br /> \`getAudioMixingPlayoutVolume\`<br /> \`adjustAudioMixingPlayoutVolume\` |
    | Report playback status of audio files       | \`onAudioEffectFinished\`                                                                                                          | \`onAudioMixingStateChanged\`                                                                                                                                                                                          |

    ### Play sound effects [#play-sound-effects-5]

    After joining a channel, call \`playEffect\` to play the specified sound effect file. Call \`playEffect\` multiple times to set multiple sound effect IDs and play multiple files simultaneously. When the playback is finished, the SDK triggers the \`onAudioEffectFinished\` callback.

    Refer to the following code example:

    \`\`\`typescript
    // Register the sound effect playback completion callback
    const EventHandler = {
      onAudioEffectFinished: (soundId) => {
        console.log(\`soundId:\${soundId}\`);
      }
    }
    rtcEngine.registerEventHandler(EventHandler);

    // Playing sound files
    rtcEngine.playEffect(
      soundId: 0, // Setting the Sound ID
      filePath: 'your file path', // Setting the sound file path
      loopCount: 1, // Sets the number of times the sound effect is looped. 1 means looped once.
      pitch: 1.0, // Sets the pitch of the sound effect. 1.0 indicates the original pitch.
      pan: 0, // Sets the spatial position of the sound effect. 0.0 means the sound effect appears directly in front
      gain: 100, // Sets the sound volume. 100 indicates the original volume.
      publish: false, // Sets whether or not to publish the sound to the remote end
      startPos: 0, // Sets the playback position of the sound effect file. 0 means playback starts from the 0th ms of the sound effect file.
    );
    \`\`\`

    ### Incorporate audio mixing [#incorporate-audio-mixing-5]

    Call the \`startAudioMixing\` method to play a music file. When the music mixing state changes after a successful call to this method, the SDK triggers the \`onAudioMixingStateChanged\` callback to report the changed music file playback status and the reason for the change.

    Refer to the following code example:

    \`\`\`typescript
    // Register the music file's playback state has changed callback
    const EventHandler = {
      onAudioMixingStateChanged: (state, reason) => {
        console.log(\`state:\${state}, reason:\${reason}\`);
      }
    }
    rtcEngine.registerEventHandler(EventHandler);

    // Playing Music Files
    rtcEngine.startAudioMixing(
      filePath: 'your file path', // Setting the music file path
      loopback: false, // Sets whether music files are only played locally. false Indicates that locally played music files are published to the remote end, and both local and remote users can hear the music
      cycle: -1, // Sets the number of times the music file is played. -1 means infinite loop playback
      startPos: 0, // Sets the playback position of the music file. 0 means playback starts from the 0th ms of the sound file.
    );
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`startAudioMixing\`, or a long music file using \`playEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-6]

    * [\`playEffect\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3)

    * [\`onAudioEffectFinished\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished)

    * [\`startAudioMixing\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing2)

    * [\`onAudioMixingStateChanged\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    This page shows you how to implement audio mixing and playing sound effects in your game.

    ## Understand the tech [#understand-the-tech-7]

    RTC SDK provides APIs that enable you to implement:

    * **Audio mixing**

      Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time.

    * **Sound effects**

      Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time.

    ## Prerequisites [#prerequisites-7]

    Ensure that you have:

    * Implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    * Set a valid path to the music or sound effect file to be played.

    ## Play sound effects and music [#play-sound-effects-and-music-6]

    This section shows you how to implement playing sound effects and add audio mixing in your game.

    To manage audio mixing and sound effects, RTC SDK provides the following APIs:

    | Function                                    | Sound effect                                                                                                                     | Audio mixing                                                                                                                                                                                                         |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Play or stop playing a specific audio file  | \`PreloadEffect\`<br /> \`UnloadEffect\`<br /> \`PlayEffect\`<br /> \`StopEffect\`<br /> \`StopAllEffects\`                                | \`StartAudioMixing\`<br /> \`StopAudioMixing\`                                                                                                                                                                           |
    | Pause or resume playing an audio file       | \`PauseEffect\`<br /> \`PauseAllEffects\`<br /> \`ResumeEffect\`<br /> \`ResumeAllEffects\`                                              | \`PauseAudioMixing\`<br /> \`ResumeAudioMixing\`                                                                                                                                                                         |
    | Get and adjust playback position and volume | \`SetEffectPosition\`<br /> \`GetEffectCurrentPosition\`<br /> \`GetEffectsVolume\`<br /> \`SetEffectsVolume\`<br /> \`SetVolumeOfEffect\` | \`GetAudioMixingCurrentPosition\`<br /> \`SetAudioMixingPosition\`<br /> \`GetAudioMixingPublishVolume\`<br /> \`AdjustAudioMixingPublishVolume\`<br /> \`GetAudioMixingPlayoutVolume\`<br /> \`AdjustAudioMixingPlayoutVolume\` |
    | Report playback status of audio files       | \`OnAudioEffectFinished\`                                                                                                          | \`OnAudioMixingStateChanged\`                                                                                                                                                                                          |

    ### Play sound effects [#play-sound-effects-6]

    Before joining a channel, call \`PreloadEffect\` to preload the sound effect file. After joining the channel, call \`PlayEffect\` to play the specified sound effect file. To play multiple sound effect files simultaneously, set multiple sound effect IDs and call \`PlayEffect\` multiple times. After a sound effect is played, the RTC SDK triggers the \`OnAudioEffectFinished\` callback.

    To implement this logic, refer to the following sample code:

    \`\`\`csharp
    // Preload sound files before joining a channel
    RtcEngine.PreloadEffect(1, "File Path 1", 0);
    RtcEngine.PreloadEffect(2, "File Path 2", 0);
    RtcEngine.PreloadEffect(3, "File Path 3", 0);

    // Play preloaded sound files after joining a channel
    RtcEngine.PlayEffect(1, "File Path 1", 1, 0, 0, 0, true, 0);
    RtcEngine.PlayEffect(2, "File Path 2", 1, 0, 0, 0, true, 0);
    RtcEngine.PlayEffect(3, "File Path 3", 1, 0, 0, 0, true, 0);

    // Triggered when local sound file playback ends
    public override void OnAudioEffectFinished(int soundId)
    {
      Debug.Log("effect play finish :" + soundId);
    }
    \`\`\`

    ### Incorporate audio mixing [#incorporate-audio-mixing-6]

    To play a music file, call \`StartAudioMixing\` before or after joining a channel. After you successfully call this method, RTC SDK triggers the \`OnAudioMixingStateChanged\` callback when the mixing status changes. This callback also reports the reason for the state change.

    To implement this logic, refer to the following code:

    \`\`\`csharp
    RtcEngine.StartAudioMixing("File Path", false, -1);

    public override void OnAudioMixingStateChanged(
      AUDIO_MIXING_STATE_TYPE state,
      AUDIO_MIXING_REASON_TYPE errorCode)
    {
      Debug.Log(string.Format(
        "AUDIO_MIXING_STATE_TYPE: {0}, AUDIO_MIXING_REASON_TYPE: {1}",
        state, errorCode));
    }
    \`\`\`

    Control playback using the following methods:

    * \`PauseAudioMixing\`: Pause playback.
    * \`ResumeAudioMixing\`: Resume playback.
    * \`StopAudioMixing\`: Stop playing.
    * \`SetAudioMixingPosition\`: Set the playing position of the current audio file.
    * \`AdjustAudioMixingPlayoutVolume\`: Adjust the volume of the current audio file played locally.
    * \`AdjustAudioMixingPublishVolume\`: Adjust the volume of the current audio file played at the remote end.

    <CalloutContainer type="warning">
      <CalloutDescription>
        If you play a short sound effect file using \`StartAudioMixing\`, or a long music file using \`PlayEffect\`, the playback may fail.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-7]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Sample project [#sample-project-3]

    Agora provides an open source [AudioMixing](https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/AudioMixing/AudioMixing.cs) project on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-7]

    * [\`PreloadEffect\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_preloadeffect)

    * [\`PlayEffect\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3)

    * [\`OnAudioEffectFinished\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished)

    * [\`StartAudioMixing\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing)

    * [\`OnAudioMixingStateChanged\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged)

    * [\`PauseAudioMixing\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_pauseaudiomixing)

    * [\`ResumeAudioMixing\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_resumeaudiomixing)

    * [\`StopAudioMixing\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stopaudiomixing)

    * [\`AdjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)

    * [\`AdjustAudioMixingPublishVolume\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingpublishvolume)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "RTC SDK makes it simple for you to publish audio captured through the microphone to subscribers in a channel. In some real-time audio and video use-cases, such as games or karaoke, you need to play sound effects or mix in music files to enhance the atmosphere and add interest. RTC SDK enables you to add sound effects and mix in pre-recorded audio."
  }, {
    heading: undefined,
    content: "This page shows you how to implement audio mixing and playing sound effects in your app."
  }, {
    heading: "understand-the-tech",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites",
    content: "Audio files in one of the supported formats."
  }, {
    heading: "prerequisites",
    content: "Added the required permission to your project"
  }, {
    heading: "prerequisites",
    content: "If your project's `targetSdkVersion` is greater than 20, add the following code to the `AndroidManifest.xml` file:"
  }, {
    heading: "play-sound-effects-and-music",
    content: "This section shows you how to implement playing sound effects and add audio mixing in your app."
  }, {
    heading: "play-sound-effects-and-music",
    content: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
  }, {
    heading: "play-sound-effects-and-music",
    content: "Function"
  }, {
    heading: "play-sound-effects-and-music",
    content: "Sound effect"
  }, {
    heading: "play-sound-effects-and-music",
    content: "Audio mixing"
  }, {
    heading: "play-sound-effects-and-music",
    content: "Play or stop playing a specific audio file"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`preloadEffect` `unloadEffect` `playEffect` `stopEffect` `stopAllEffects`"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`startAudioMixing` `stopAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music",
    content: "Pause or resume playing an audio file"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`pauseEffect` `pauseAllEffects` `resumeEffect` `resumeAllEffects`"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`pauseAudioMixing` `resumeAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music",
    content: "Get and adjust playback position and volume"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`setEffectPosition` `getEffectCurrentPosition` `getEffectsVolume` `setEffectsVolume` `setVolumeOfEffect`"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`getAudioMixingCurrentPosition` `setAudioMixingPosition` `getAudioMixingPublishVolume` `adjustAudioMixingPublishVolume` `getAudioMixingPlayoutVolume` `adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "play-sound-effects-and-music",
    content: "Report playback status of audio files"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "play-sound-effects-and-music",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "set-up-file-access-permissions",
    content: "For Android projects with `targetSdkVersion` greater than or equal to 20, add the following to the project's `AndroidManifest.xml` file:"
  }, {
    heading: "play-sound-effects",
    content: "To play sound effects, refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing",
    content: "Before or after joining a channel, call `startAudioMixing` to play the audio file. When the audio mixing status changes, the SDK triggers the `onAudioMixingStateChanged` callback and reports the reason for the change."
  }, {
    heading: "incorporate-audio-mixing",
    content: "To mix in an audio file, refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing",
    content: "Control playback using the following methods:"
  }, {
    heading: "incorporate-audio-mixing",
    content: "`pauseAudioMixing`: Pause playback."
  }, {
    heading: "incorporate-audio-mixing",
    content: "`resumeAudioMixing`: Resume playback."
  }, {
    heading: "incorporate-audio-mixing",
    content: "`stopAudioMixing`: Stop playing."
  }, {
    heading: "incorporate-audio-mixing",
    content: "`setAudioMixingPosition`: Set the playing position of the current audio file."
  }, {
    heading: "incorporate-audio-mixing",
    content: "`adjustAudioMixingPlayoutVolume`: Adjust the volume of the current audio file played locally."
  }, {
    heading: "incorporate-audio-mixing",
    content: "`adjustAudioMixingPublishVolume`: Adjust the volume of the current audio file played at the remote end."
  }, {
    heading: "incorporate-audio-mixing",
    content: "If you play a short sound effect file using `startAudioMixing`, or a long music file using `playEffect`, the playback may fail."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "faqs",
    content: "Why can't I play the audio file using `startAudioMixing` or `playEffect` on Android 9?"
  }, {
    heading: "sample-project",
    content: "Agora provides an open source Play Audio Files project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "api-reference",
    content: "`preloadEffect`"
  }, {
    heading: "api-reference",
    content: "`playEffect`"
  }, {
    heading: "api-reference",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "api-reference",
    content: "`startAudioMixing`"
  }, {
    heading: "api-reference",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "api-reference",
    content: "`pauseAudioMixing`"
  }, {
    heading: "api-reference",
    content: "`resumeAudioMixing`"
  }, {
    heading: "api-reference",
    content: "`stopAudioMixing`"
  }, {
    heading: "api-reference",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference",
    content: "`adjustAudioMixingPublishVolume`"
  }, {
    heading: "api-reference",
    content: "This page shows you how to implement audio mixing and playing sound effects in your app."
  }, {
    heading: "understand-the-tech-1",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech-1",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech-1",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech-1",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-1",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites-1",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-1",
    content: "Audio files in one of the supported formats."
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "This section shows you how to implement playing sound effects and add audio mixing in your app."
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "Function"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "Sound effect"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "Audio mixing"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "Play or stop playing a specific audio file"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`preloadEffect` `unloadEffect` `playEffect` `stopEffect` `stopAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`startAudioMixing` `stopAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "Pause or resume playing an audio file"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`pauseEffect` `pauseAllEffects` `resumeEffect` `resumeAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`pauseAudioMixing` `resumeAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "Get and adjust playback position and volume"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`setEffectPosition` `getEffectCurrentPosition` `getEffectsVolume` `setEffectsVolume` `setVolumeOfEffect`"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`getAudioMixingCurrentPosition` `setAudioMixingPosition` `getAudioMixingPublishVolume` `adjustAudioMixingPublishVolume` `getAudioMixingPlayoutVolume` `adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "Report playback status of audio files"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`rtcEngineDidAudioEffectFinish`"
  }, {
    heading: "play-sound-effects-and-music-1",
    content: "`audioMixingStateChanged`"
  }, {
    heading: "play-sound-effects-1",
    content: "Before joining a channel, call `preloadEffect`to preload the sound effect file. After joining the channel, call `playEffect` to play the specified sound effect. Call `playEffect` multiple times to set multiple sound effect IDs and play multiple files simultaneously. After the sound effect has finished playing, the SDK triggers the `rtcEngineDidAudioEffectFinish` callback."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "Before or after joining a channel, call `startAudioMixing` to play the audio file. When the audio mixing status changes, the SDK triggers the `audioMixingStateChanged` callback and reports the reason for the change."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "To mix in an audio file, refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "Control playback using the following methods:"
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "`pauseAudioMixing`: Pause playback."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "`resumeAudioMixing`: Resume playback."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "`stopAudioMixing`: Stop playing."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "`setAudioMixingPosition`: Set the playing position of the current audio file."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "`adjustAudioMixingPlayoutVolume`: Adjust the volume of the current audio file played locally."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "`adjustAudioMixingPublishVolume`: Adjust the volume of the current audio file played at the remote end."
  }, {
    heading: "incorporate-audio-mixing-1",
    content: "If you play a short sound effect file using `startAudioMixing`, or a long music file using `playEffect`, the playback may fail."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-project-1",
    content: "Agora provides an open source AudioMixing project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "api-reference-1",
    content: "`preloadEffect`"
  }, {
    heading: "api-reference-1",
    content: "`playEffect`"
  }, {
    heading: "api-reference-1",
    content: "`rtcEngineDidAudioEffectFinish`"
  }, {
    heading: "api-reference-1",
    content: "`startAudioMixing`"
  }, {
    heading: "api-reference-1",
    content: "`audioMixingStateChanged`"
  }, {
    heading: "api-reference-1",
    content: "`pauseAudioMixing`"
  }, {
    heading: "api-reference-1",
    content: "`resumeAudioMixing`"
  }, {
    heading: "api-reference-1",
    content: "`stopAudioMixing`"
  }, {
    heading: "api-reference-1",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-1",
    content: "`adjustAudioMixingPublishVolume`"
  }, {
    heading: "api-reference-1",
    content: "This page shows you how to implement audio mixing and playing sound effects in your app."
  }, {
    heading: "understand-the-tech-2",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech-2",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech-2",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech-2",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-2",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites-2",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-2",
    content: "Audio files in one of the supported formats."
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "This section shows you how to implement playing sound effects and add audio mixing in your app."
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "Function"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "Sound effect"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "Audio mixing"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "Play or stop playing a specific audio file"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`preloadEffect` `unloadEffect` `playEffect` `stopEffect` `stopAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`startAudioMixing` `stopAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "Pause or resume playing an audio file"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`pauseEffect` `pauseAllEffects` `resumeEffect` `resumeAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`pauseAudioMixing` `resumeAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "Get and adjust playback position and volume"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`setEffectPosition` `getEffectCurrentPosition` `getEffectsVolume` `setEffectsVolume` `setVolumeOfEffect`"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`getAudioMixingCurrentPosition` `setAudioMixingPosition` `getAudioMixingPublishVolume` `adjustAudioMixingPublishVolume` `getAudioMixingPlayoutVolume` `adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "Report playback status of audio files"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`rtcEngineDidAudioEffectFinish`"
  }, {
    heading: "play-sound-effects-and-music-2",
    content: "`audioMixingStateChanged`"
  }, {
    heading: "play-sound-effects-2",
    content: "Before joining a channel, call `preloadEffect`to preload the sound effect file. After joining the channel, call `playEffect` to play the specified sound effect. Call `playEffect` multiple times to set multiple sound effect IDs and play multiple files simultaneously. After the sound effect has finished playing, the SDK triggers the `rtcEngineDidAudioEffectFinish` callback."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "Before or after joining a channel, call `startAudioMixing` to play the audio file. When the audio mixing status changes, the SDK triggers the `audioMixingStateChanged` callback and reports the reason for the change."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "To mix in an audio file, refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "Control playback using the following methods:"
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "`pauseAudioMixing`: Pause playback."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "`resumeAudioMixing`: Resume playback."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "`stopAudioMixing`: Stop playing."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "`setAudioMixingPosition`: Set the playing position of the current audio file."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "`adjustAudioMixingPlayoutVolume`: Adjust the volume of the current audio file played locally."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "`adjustAudioMixingPublishVolume`: Adjust the volume of the current audio file played at the remote end."
  }, {
    heading: "incorporate-audio-mixing-2",
    content: "If you play a short sound effect file using `startAudioMixing`, or a long music file using `playEffect`, the playback may fail."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-project-2",
    content: "Agora provides an open source AudioMixing project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "api-reference-2",
    content: "`preloadEffect`"
  }, {
    heading: "api-reference-2",
    content: "`playEffect`"
  }, {
    heading: "api-reference-2",
    content: "`rtcEngineDidAudioEffectFinish`"
  }, {
    heading: "api-reference-2",
    content: "`startAudioMixing`"
  }, {
    heading: "api-reference-2",
    content: "`audioMixingStateChanged`"
  }, {
    heading: "api-reference-2",
    content: "`pauseAudioMixing`"
  }, {
    heading: "api-reference-2",
    content: "`resumeAudioMixing`"
  }, {
    heading: "api-reference-2",
    content: "`stopAudioMixing`"
  }, {
    heading: "api-reference-2",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-2",
    content: "`adjustAudioMixingPublishVolume`"
  }, {
    heading: "api-reference-2",
    content: "In Agora Web SDK, if you publish multiple local audio tracks, the SDK automatically mixes these audios. To achieve the effect of mixing audio files with voice, create and publish multiple local audio tracks."
  }, {
    heading: "api-reference-2",
    content: "Try out the online demo for Audio effects and music files."
  }, {
    heading: "api-reference-2",
    content: "This page shows you how to implement audio mixing and playing sound effects in your app."
  }, {
    heading: "understand-the-tech-3",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech-3",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech-3",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech-3",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-3",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites-3",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "implement-audio-mixing",
    content: "To implement audio mixing in your project, take the following steps:"
  }, {
    heading: "implement-audio-mixing",
    content: "**Create a buffer source track**"
  }, {
    heading: "implement-audio-mixing",
    content: "RTC SDK offers the `createBufferSourceAudioTrack` method that enables you to read a local or online audio file, and create a corresponding local audio track object `BufferSourceAudioTrack`:"
  }, {
    heading: "implement-audio-mixing",
    content: "Audio tracks created from audio files follow a different audio data processing flow than microphone audio tracks. After creating a track using an audio file, if you directly call `audioFileTrack.play` or `client.publish([audioFileTrack])`, you do not hear the music either locally or remotely."
  }, {
    heading: "implement-audio-mixing",
    content: "You can publish the following audio tracks in the channel."
  }, {
    heading: "implement-audio-mixing",
    content: "**MicrophoneAudioTrack**"
  }, {
    heading: "implement-audio-mixing",
    content: "For microphone audio tracks, the SDK continuously collects the latest audio data (`AudioBuffer`) from the target microphone device."
  }, {
    heading: "implement-audio-mixing",
    content: "After you call the `play` method, the audio data is sent to the `LocalPlayback` component, allowing the local user to hear it."
  }, {
    heading: "implement-audio-mixing",
    content: "When the `publish` method is called, the audio data is transmitted to Agora SDRTN® and eventually heard by the remote user.\nThe microphone audio track continues to acquire audio data until the `close` method is invoked, at which point the audio track becomes unavailable."
  }, {
    heading: "implement-audio-mixing",
    content: "**BufferSourceAudioTrack**"
  }, {
    heading: "implement-audio-mixing",
    content: "For audio files, the RTC SDK does not collect audio data; instead, it achieves a similar effect by reading files, shown in the following figure."
  }, {
    heading: "implement-audio-mixing",
    content: "The key distinctions between collecting audio data and reading files are as follows:"
  }, {
    heading: "implement-audio-mixing",
    content: "**Continuous vs. controlled reading:**"
  }, {
    heading: "implement-audio-mixing",
    content: "Collection of audio data is continuous and cannot be paused, focusing on capturing the latest audio data."
  }, {
    heading: "implement-audio-mixing",
    content: "File reading provides more flexibility. You can pause, jump to specific positions, or loop playback. These operations are core functions of `BufferSourceAudioTrack`."
  }, {
    heading: "implement-audio-mixing",
    content: "**Initiating file reading:**"
  }, {
    heading: "implement-audio-mixing",
    content: "After creating an audio track from an audio file, the SDK does not automatically read the file. You need to use `BufferSourceAudioTrack`'s `startProcessAudioBuffer` method to initiate the reading and audio data processing. You then call the `play` and `publish` methods to make the audio file audible locally and remotely."
  }, {
    heading: "implement-audio-mixing",
    content: "**Enable audio mixing**"
  }, {
    heading: "implement-audio-mixing",
    content: "RTC SDK supports publishing multiple audio tracks. You can mix audio by publishing `BufferSourceAudioTrack` together with the audio tracks created through the microphone. To enable audio mixing, refer to the following code:"
  }, {
    heading: "implement-audio-mixing",
    content: "**Manage audio mixing**"
  }, {
    heading: "implement-audio-mixing",
    content: "To handle audio mixing, refer to the following code:"
  }, {
    heading: "implement-audio-mixing",
    content: "If you play a short sound effect file using `startAudioMixing`, or a long music file using `playEffect`, the playback may fail."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-notes",
    content: "Consider the following when developing your app:"
  }, {
    heading: "development-notes",
    content: "To play online audio files, you also need to configure CORS."
  }, {
    heading: "development-notes",
    content: "Supported audio formats are MP3, AAC, and other audio formats supported by the browser."
  }, {
    heading: "development-notes",
    content: "Local files only support the browser's native File object."
  }, {
    heading: "development-notes",
    content: "Safari versions below 12 do not support mixing, so publishing multiple audio tracks is not possible."
  }, {
    heading: "development-notes",
    content: "Irrespective of the number of audio tracks published locally, the SDK automatically mixes them into one audio track, so the remote user only receives one `RemoteAudioTrack`."
  }, {
    heading: "api-reference-3",
    content: "`createBufferSourceAudioTrack`"
  }, {
    heading: "api-reference-3",
    content: "`BufferSourceAudioTrack`"
  }, {
    heading: "api-reference-3",
    content: "`publish`"
  }, {
    heading: "api-reference-3",
    content: "This page shows you how to implement audio mixing and playing sound effects in your app."
  }, {
    heading: "understand-the-tech-4",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech-4",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech-4",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech-4",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-4",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites-4",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-4",
    content: "Audio files in one of the supported formats."
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "This section shows you how to implement playing sound effects and add audio mixing in your app."
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "To manage audio mixing and voice effects, RTC SDK provides the following APIs:"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "Function"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "Sound effect"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "Audio mixing"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "Play or stop playing a specific audio file"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`preloadEffect` `unloadEffect` `playEffect` `stopEffect` `stopAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`startAudioMixing` `stopAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "Pause or resume playing an audio file"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`pauseEffect` `pauseAllEffects` `resumeEffect` `resumeAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`pauseAudioMixing` `resumeAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "Get and adjust playback position and volume"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`setEffectPosition` `getEffectCurrentPosition` `getEffectsVolume` `setEffectsVolume` `setVolumeOfEffect`"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`getAudioMixingCurrentPosition` `setAudioMixingPosition` `getAudioMixingPublishVolume` `adjustAudioMixingPublishVolume` `getAudioMixingPlayoutVolume` `adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "Report playback status of audio files"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "play-sound-effects-and-music-3",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "play-sound-effects-3",
    content: "Before joining a channel, call `preloadEffect` to preload the sound effect file. After joining the channel, call `playEffect` to play the specified sound effect file. To play multiple sound effect files simultaneously, set multiple sound effect IDs and call `playEffect` multiple times. After a sound effect is played, the RTC SDK triggers the `onAudioEffectFinished` callback."
  }, {
    heading: "play-sound-effects-3",
    content: "To implement this logic, refer to the following sample code:"
  }, {
    heading: "incorporate-audio-mixing-3",
    content: "To play a music file, call `startAudioMixing` before or after joining a channel. After you successfully call this method, RTC SDK triggers the `onAudioMixingStateChanged` callback when the mixing status changes. This callback also reports the reason for the state change."
  }, {
    heading: "incorporate-audio-mixing-3",
    content: "To implement this logic, refer to the following code:"
  }, {
    heading: "incorporate-audio-mixing-3",
    content: "If you play a short sound effect file using `startAudioMixing`, or a long music file using `playEffect`, the playback may fail."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-projects",
    content: "Agora provides the following open source sample projects on GitHub for your reference."
  }, {
    heading: "sample-projects",
    content: "AudioEffect"
  }, {
    heading: "sample-projects",
    content: "AudioMixing"
  }, {
    heading: "sample-projects",
    content: "Download or view the source code for more detailed examples."
  }, {
    heading: "api-reference-4",
    content: "`preloadEffect`"
  }, {
    heading: "api-reference-4",
    content: "`playEffect`"
  }, {
    heading: "api-reference-4",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "api-reference-4",
    content: "`startAudioMixing`"
  }, {
    heading: "api-reference-4",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "api-reference-4",
    content: "`pauseAudioMixing`"
  }, {
    heading: "api-reference-4",
    content: "`resumeAudioMixing`"
  }, {
    heading: "api-reference-4",
    content: "`stopAudioMixing`"
  }, {
    heading: "api-reference-4",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-4",
    content: "`adjustAudioMixingPublishVolume`"
  }, {
    heading: "api-reference-4",
    content: "This page shows you how to implement audio mixing and playing sound effects in your app."
  }, {
    heading: "understand-the-tech-5",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech-5",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech-5",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech-5",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-5",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites-5",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-5",
    content: "Audio files in one of the formats supported by the target development platform:"
  }, {
    heading: "prerequisites-5",
    content: "macOS"
  }, {
    heading: "prerequisites-5",
    content: "Windows"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "This section shows you how to implement playing sound effects and add audio mixing in your app."
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "Function"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "Sound effect"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "Audio mixing"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "Play or stop playing a specific audio file"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`preloadEffect` `unloadEffect` `playEffect` `stopEffect` `stopAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`startAudioMixing` `stopAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "Pause or resume playing an audio file"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`pauseEffect` `pauseAllEffects` `resumeEffect` `resumeAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`pauseAudioMixing` `resumeAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "Get and adjust playback position and volume"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`setEffectPosition` `getEffectCurrentPosition` `getEffectsVolume` `setEffectsVolume` `setVolumeOfEffect`"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`getAudioMixingCurrentPosition` `setAudioMixingPosition` `getAudioMixingPublishVolume` `adjustAudioMixingPublishVolume` `getAudioMixingPlayoutVolume` `adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "Report playback status of audio files"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "play-sound-effects-and-music-4",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "play-sound-effects-4",
    content: "After joining a channel, call `playEffect` to play the specified sound effect file. Call `playEffect` multiple times to set multiple sound effect IDs and play multiple files simultaneously. When the playback is finished, the SDK triggers the `onAudioEffectFinished` callback."
  }, {
    heading: "play-sound-effects-4",
    content: "Refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing-4",
    content: "Call the `startAudioMixing` method to play a music file. When the music mixing state changes after a successful call to this method, the SDK triggers the `onAudioMixingStateChanged` callback to report the changed music file playback status and the reason for the change."
  }, {
    heading: "incorporate-audio-mixing-4",
    content: "Refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing-4",
    content: "If you play a short sound effect file using `startAudioMixing`, or a long music file using `playEffect`, the playback may fail."
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-5",
    content: "`playEffect`"
  }, {
    heading: "api-reference-5",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "api-reference-5",
    content: "`startAudioMixing`"
  }, {
    heading: "api-reference-5",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "api-reference-5",
    content: "This page shows you how to implement audio mixing and playing sound effects in your app."
  }, {
    heading: "understand-the-tech-6",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech-6",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech-6",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech-6",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-6",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites-6",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites-6",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-6",
    content: "Audio files in one of the formats supported by the target development platform:"
  }, {
    heading: "prerequisites-6",
    content: "Android"
  }, {
    heading: "prerequisites-6",
    content: "iOS"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "This section shows you how to implement playing sound effects and add audio mixing in your app."
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "Function"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "Sound effect"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "Audio mixing"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "Play or stop playing a specific audio file"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`preloadEffect` `unloadEffect` `playEffect` `stopEffect` `stopAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`startAudioMixing` `stopAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "Pause or resume playing an audio file"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`pauseEffect` `pauseAllEffects` `resumeEffect` `resumeAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`pauseAudioMixing` `resumeAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "Get and adjust playback position and volume"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`setEffectPosition` `getEffectCurrentPosition` `getEffectsVolume` `setEffectsVolume` `setVolumeOfEffect`"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`getAudioMixingCurrentPosition` `setAudioMixingPosition` `getAudioMixingPublishVolume` `adjustAudioMixingPublishVolume` `getAudioMixingPlayoutVolume` `adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "Report playback status of audio files"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "play-sound-effects-and-music-5",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "play-sound-effects-5",
    content: "After joining a channel, call `playEffect` to play the specified sound effect file. Call `playEffect` multiple times to set multiple sound effect IDs and play multiple files simultaneously. When the playback is finished, the SDK triggers the `onAudioEffectFinished` callback."
  }, {
    heading: "play-sound-effects-5",
    content: "Refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing-5",
    content: "Call the `startAudioMixing` method to play a music file. When the music mixing state changes after a successful call to this method, the SDK triggers the `onAudioMixingStateChanged` callback to report the changed music file playback status and the reason for the change."
  }, {
    heading: "incorporate-audio-mixing-5",
    content: "Refer to the following code example:"
  }, {
    heading: "incorporate-audio-mixing-5",
    content: "If you play a short sound effect file using `startAudioMixing`, or a long music file using `playEffect`, the playback may fail."
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-6",
    content: "`playEffect`"
  }, {
    heading: "api-reference-6",
    content: "`onAudioEffectFinished`"
  }, {
    heading: "api-reference-6",
    content: "`startAudioMixing`"
  }, {
    heading: "api-reference-6",
    content: "`onAudioMixingStateChanged`"
  }, {
    heading: "api-reference-6",
    content: "This page shows you how to implement audio mixing and playing sound effects in your game."
  }, {
    heading: "understand-the-tech-7",
    content: "RTC SDK provides APIs that enable you to implement:"
  }, {
    heading: "understand-the-tech-7",
    content: "**Audio mixing**"
  }, {
    heading: "understand-the-tech-7",
    content: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
  }, {
    heading: "understand-the-tech-7",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-7",
    content: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
  }, {
    heading: "prerequisites-7",
    content: "Ensure that you have:"
  }, {
    heading: "prerequisites-7",
    content: "Implemented the SDK quickstart in your project."
  }, {
    heading: "prerequisites-7",
    content: "Set a valid path to the music or sound effect file to be played."
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "This section shows you how to implement playing sound effects and add audio mixing in your game."
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "Function"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "Sound effect"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "Audio mixing"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "Play or stop playing a specific audio file"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`PreloadEffect` `UnloadEffect` `PlayEffect` `StopEffect` `StopAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`StartAudioMixing` `StopAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "Pause or resume playing an audio file"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`PauseEffect` `PauseAllEffects` `ResumeEffect` `ResumeAllEffects`"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`PauseAudioMixing` `ResumeAudioMixing`"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "Get and adjust playback position and volume"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`SetEffectPosition` `GetEffectCurrentPosition` `GetEffectsVolume` `SetEffectsVolume` `SetVolumeOfEffect`"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`GetAudioMixingCurrentPosition` `SetAudioMixingPosition` `GetAudioMixingPublishVolume` `AdjustAudioMixingPublishVolume` `GetAudioMixingPlayoutVolume` `AdjustAudioMixingPlayoutVolume`"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "Report playback status of audio files"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`OnAudioEffectFinished`"
  }, {
    heading: "play-sound-effects-and-music-6",
    content: "`OnAudioMixingStateChanged`"
  }, {
    heading: "play-sound-effects-6",
    content: "Before joining a channel, call `PreloadEffect` to preload the sound effect file. After joining the channel, call `PlayEffect` to play the specified sound effect file. To play multiple sound effect files simultaneously, set multiple sound effect IDs and call `PlayEffect` multiple times. After a sound effect is played, the RTC SDK triggers the `OnAudioEffectFinished` callback."
  }, {
    heading: "play-sound-effects-6",
    content: "To implement this logic, refer to the following sample code:"
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "To play a music file, call `StartAudioMixing` before or after joining a channel. After you successfully call this method, RTC SDK triggers the `OnAudioMixingStateChanged` callback when the mixing status changes. This callback also reports the reason for the state change."
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "To implement this logic, refer to the following code:"
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "Control playback using the following methods:"
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "`PauseAudioMixing`: Pause playback."
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "`ResumeAudioMixing`: Resume playback."
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "`StopAudioMixing`: Stop playing."
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "`SetAudioMixingPosition`: Set the playing position of the current audio file."
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "`AdjustAudioMixingPlayoutVolume`: Adjust the volume of the current audio file played locally."
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "`AdjustAudioMixingPublishVolume`: Adjust the volume of the current audio file played at the remote end."
  }, {
    heading: "incorporate-audio-mixing-6",
    content: "If you play a short sound effect file using `StartAudioMixing`, or a long music file using `PlayEffect`, the playback may fail."
  }, {
    heading: "reference-7",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-project-3",
    content: "Agora provides an open source AudioMixing project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "api-reference-7",
    content: "`PreloadEffect`"
  }, {
    heading: "api-reference-7",
    content: "`PlayEffect`"
  }, {
    heading: "api-reference-7",
    content: "`OnAudioEffectFinished`"
  }, {
    heading: "api-reference-7",
    content: "`StartAudioMixing`"
  }, {
    heading: "api-reference-7",
    content: "`OnAudioMixingStateChanged`"
  }, {
    heading: "api-reference-7",
    content: "`PauseAudioMixing`"
  }, {
    heading: "api-reference-7",
    content: "`ResumeAudioMixing`"
  }, {
    heading: "api-reference-7",
    content: "`StopAudioMixing`"
  }, {
    heading: "api-reference-7",
    content: "`AdjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-7",
    content: "`AdjustAudioMixingPublishVolume`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "play-sound-effects-and-music",
    content: "Play sound effects and music"
  }, {
    id: "set-up-file-access-permissions",
    content: "Set up file access permissions"
  }, {
    id: "play-sound-effects",
    content: "Play sound effects"
  }, {
    id: "incorporate-audio-mixing",
    content: "Incorporate audio mixing"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "faqs",
    content: "FAQs"
  }, {
    id: "sample-project",
    content: "Sample project"
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
    id: "play-sound-effects-and-music-1",
    content: "Play sound effects and music"
  }, {
    id: "play-sound-effects-1",
    content: "Play sound effects"
  }, {
    id: "incorporate-audio-mixing-1",
    content: "Incorporate audio mixing"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "sample-project-1",
    content: "Sample project"
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
    id: "play-sound-effects-and-music-2",
    content: "Play sound effects and music"
  }, {
    id: "play-sound-effects-2",
    content: "Play sound effects"
  }, {
    id: "incorporate-audio-mixing-2",
    content: "Incorporate audio mixing"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "sample-project-2",
    content: "Sample project"
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
    id: "implement-audio-mixing",
    content: "Implement audio mixing"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "development-notes",
    content: "Development notes"
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
    id: "play-sound-effects-and-music-3",
    content: "Play sound effects and music"
  }, {
    id: "play-sound-effects-3",
    content: "Play sound effects"
  }, {
    id: "incorporate-audio-mixing-3",
    content: "Incorporate audio mixing"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "sample-projects",
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
    id: "play-sound-effects-and-music-4",
    content: "Play sound effects and music"
  }, {
    id: "play-sound-effects-4",
    content: "Play sound effects"
  }, {
    id: "incorporate-audio-mixing-4",
    content: "Incorporate audio mixing"
  }, {
    id: "reference-5",
    content: "Reference"
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
    id: "play-sound-effects-and-music-5",
    content: "Play sound effects and music"
  }, {
    id: "play-sound-effects-5",
    content: "Play sound effects"
  }, {
    id: "incorporate-audio-mixing-5",
    content: "Incorporate audio mixing"
  }, {
    id: "reference-6",
    content: "Reference"
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
    id: "play-sound-effects-and-music-6",
    content: "Play sound effects and music"
  }, {
    id: "play-sound-effects-6",
    content: "Play sound effects"
  }, {
    id: "incorporate-audio-mixing-6",
    content: "Incorporate audio mixing"
  }, {
    id: "reference-7",
    content: "Reference"
  }, {
    id: "sample-project-3",
    content: "Sample project"
  }, {
    id: "api-reference-7",
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
  url: "#play-sound-effects-and-music",
  title: _jsx(_Fragment, {
    children: "Play sound effects and music"
  })
}, {
  depth: 3,
  url: "#set-up-file-access-permissions",
  title: _jsx(_Fragment, {
    children: "Set up file access permissions"
  })
}, {
  depth: 3,
  url: "#play-sound-effects",
  title: _jsx(_Fragment, {
    children: "Play sound effects"
  })
}, {
  depth: 3,
  url: "#incorporate-audio-mixing",
  title: _jsx(_Fragment, {
    children: "Incorporate audio mixing"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#faqs",
  title: _jsx(_Fragment, {
    children: "FAQs"
  })
}, {
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
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
  url: "#play-sound-effects-and-music-1",
  title: _jsx(_Fragment, {
    children: "Play sound effects and music"
  })
}, {
  depth: 3,
  url: "#play-sound-effects-1",
  title: _jsx(_Fragment, {
    children: "Play sound effects"
  })
}, {
  depth: 3,
  url: "#incorporate-audio-mixing-1",
  title: _jsx(_Fragment, {
    children: "Incorporate audio mixing"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-project-1",
  title: _jsx(_Fragment, {
    children: "Sample project"
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
  url: "#play-sound-effects-and-music-2",
  title: _jsx(_Fragment, {
    children: "Play sound effects and music"
  })
}, {
  depth: 3,
  url: "#play-sound-effects-2",
  title: _jsx(_Fragment, {
    children: "Play sound effects"
  })
}, {
  depth: 3,
  url: "#incorporate-audio-mixing-2",
  title: _jsx(_Fragment, {
    children: "Incorporate audio mixing"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-project-2",
  title: _jsx(_Fragment, {
    children: "Sample project"
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
  url: "#implement-audio-mixing",
  title: _jsx(_Fragment, {
    children: "Implement audio mixing"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-notes",
  title: _jsx(_Fragment, {
    children: "Development notes"
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
  url: "#play-sound-effects-and-music-3",
  title: _jsx(_Fragment, {
    children: "Play sound effects and music"
  })
}, {
  depth: 3,
  url: "#play-sound-effects-3",
  title: _jsx(_Fragment, {
    children: "Play sound effects"
  })
}, {
  depth: 3,
  url: "#incorporate-audio-mixing-3",
  title: _jsx(_Fragment, {
    children: "Incorporate audio mixing"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-projects",
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
  url: "#play-sound-effects-and-music-4",
  title: _jsx(_Fragment, {
    children: "Play sound effects and music"
  })
}, {
  depth: 3,
  url: "#play-sound-effects-4",
  title: _jsx(_Fragment, {
    children: "Play sound effects"
  })
}, {
  depth: 3,
  url: "#incorporate-audio-mixing-4",
  title: _jsx(_Fragment, {
    children: "Incorporate audio mixing"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#play-sound-effects-and-music-5",
  title: _jsx(_Fragment, {
    children: "Play sound effects and music"
  })
}, {
  depth: 3,
  url: "#play-sound-effects-5",
  title: _jsx(_Fragment, {
    children: "Play sound effects"
  })
}, {
  depth: 3,
  url: "#incorporate-audio-mixing-5",
  title: _jsx(_Fragment, {
    children: "Incorporate audio mixing"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#play-sound-effects-and-music-6",
  title: _jsx(_Fragment, {
    children: "Play sound effects and music"
  })
}, {
  depth: 3,
  url: "#play-sound-effects-6",
  title: _jsx(_Fragment, {
    children: "Play sound effects"
  })
}, {
  depth: 3,
  url: "#incorporate-audio-mixing-6",
  title: _jsx(_Fragment, {
    children: "Incorporate audio mixing"
  })
}, {
  depth: 2,
  url: "#reference-7",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-project-3",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-7",
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
      children: "RTC SDK makes it simple for you to publish audio captured through the microphone to subscribers in a channel. In some real-time audio and video use-cases, such as games or karaoke, you need to play sound effects or mix in music files to enhance the atmosphere and add interest. RTC SDK enables you to add sound effects and mix in pre-recorded audio."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","ios","macos","web","windows","electron","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.p, {
          children: "This page shows you how to implement audio mixing and playing sound effects in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implemented the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " in your project."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Audio files in one of the ", _jsx(_components.a, {
                href: "https://developer.android.com/media/platform/supported-formats",
                children: "supported formats"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Added the required permission to your project"
            }), `
`, _jsxs(_components.p, {
              children: ["If your project's ", _jsx(_components.code, {
                children: "targetSdkVersion"
              }), " is greater than 20, add the following code to the ", _jsx(_components.code, {
                children: "AndroidManifest.xml"
              }), " file:"]
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "<"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "application"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "  <!-- Other application settings -->"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: '  android:usesCleartextTraffic="true"'
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: '  android:requestLegacyExternalStorage="true"'
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "</"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#22863A",
                        "--shiki-dark": "#85E89D"
                      },
                      children: "application"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "play-sound-effects-and-music",
          children: "Play sound effects and music"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement playing sound effects and add audio mixing in your app."
        }), _jsx(_components.p, {
          children: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Function"
              }), _jsx(_components.th, {
                children: "Sound effect"
              }), _jsx(_components.th, {
                children: "Audio mixing"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Play or stop playing a specific audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "preloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "unloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "playEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "startAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Pause or resume playing an audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "pauseAllEffects"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Get and adjust playback position and volume"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "setEffectPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setVolumeOfEffect"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "getAudioMixingCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setAudioMixingPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPlayoutVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Report playback status of audio files"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "set-up-file-access-permissions",
          children: "Set up file access permissions"
        }), _jsxs(_components.p, {
          children: ["For Android projects with ", _jsx(_components.code, {
            children: "targetSdkVersion"
          }), " greater than or equal to 20, add the following to the project's ", _jsx(_components.code, {
            children: "AndroidManifest.xml"
          }), " file:"]
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "application"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: '  android:usesCleartextTraffic="true"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: '  android:requestLegacyExternalStorage="true"'
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "</"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#22863A",
                    "--shiki-dark": "#85E89D"
                  },
                  children: "application"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "play-sound-effects",
          children: "Play sound effects"
        }), _jsx(_components.p, {
          children: "To play sound effects, refer to the following code example:"
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
                      children: "//Import the IAudioEffectManger class"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " io.agora.rtc.IAudioEffectManager;"
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
                      children: "// Call getAudioEffectManager to get the IAudioEffectManager class"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " IAudioEffectManager audioEffectManager;"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager "
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
                      children: " mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getAudioEffectManager"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
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
                      children: "// Set the sound effect ID as a unique identifier for identifying sound effect files"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " id "
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
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// If you want to play the sound effect repeatedly, you can preload the file into memory"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// If the file is large, do not preload it"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// You can only preload local sound effect files"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "preloadEffect"
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
                      children: "++"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"Your file path"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "// Call playEffect to play the specified sound effect file"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call playEffect multiple times, set multiple sound effect IDs, and play multiple sound effect files at the same time"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "playEffect"
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the sound effect ID"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '  "Your file path"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the sound effect file path"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  -"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the number of times the sound effect loops. -1 means infinite loop"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the tone of the sound effect. 1 represents the original pitch"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0.0"
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
                      children: "// Set the spatial position of the sound effect. 0.0 means the sound effect appears directly in front"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  100"
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
                      children: "// Set the sound effect volume. 100 represents the original volume"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  true"
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
                      children: "// Set whether to publish sound effects to the remote end"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   // Set the playback position of the sound effect file (in ms). 0 means start at the beginning"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "// Pause or resume playing the specified sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id);"
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
                      children: "// Set the playback position of the specified local sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEffectPosition"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "500"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "// Set the playback volume of all sound effect files"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEffectsVolume"
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
                      children: "50.0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "// Set the playback volume of the specified sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setVolumeOfEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "50.0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "// Release the preloaded sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "unloadEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id);"
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
                      children: "// Stop playing all sound effect files"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager.stopAllEffects;"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
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
                      children: "Override"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// This callback is triggered when the sound effect file ends playing"
                    })
                  }), `
`, _jsxs(_components.span, {
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
                      children: " soundId) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  super"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onAudioEffectFinished"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(soundId);"
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
                      children: "// Import the IAudioEffectManager class"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "import"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " io.agora.rtc.IAudioEffectManager"
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
                      children: "// Call getAudioEffectManager to get the IAudioEffectManager class"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "private"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " lateinit"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " var"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " audioEffectManager: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "IAudioEffectManager"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager "
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
                      children: " mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getAudioEffectManager"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
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
                      children: "// Set the sound effect ID as a unique identifier for identifying sound effect files"
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
                      children: " id "
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
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// If you want to play the sound effect repeatedly, you can preload the file into memory"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// If the file is large, do not preload it"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// You can only preload local sound effect files"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "preloadEffect"
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
                      children: "++"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"Your file path"'
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
                      children: "// Call playEffect to play the specified sound effect file"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call playEffect multiple times, set multiple sound effect IDs, and play multiple sound effect files at the same time"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "playEffect"
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the sound effect ID"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '  "Your file path"'
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the sound effect file path"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  -"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the number of times the sound effect loops. -1 means infinite loop"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",  "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the tone of the sound effect. 1 represents the original pitch"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0.0"
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
                      children: "// Set the spatial position of the sound effect. 0.0 means the sound effect appears directly in front"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  100"
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
                      children: "// Set the sound effect volume. 100 represents the original volume"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  true"
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
                      children: "// Set whether to publish sound effects to the remote end"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   // Set the playback position of the sound effect file (in ms). 0 means start at the beginning"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
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
                      children: "// Pause or resume playing the specified sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id)"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id)"
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
                      children: "// Set the playback position of the specified local sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEffectPosition"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "500"
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
                      children: "// Set the playback volume of all sound effect files"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setEffectsVolume"
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
                      children: "50.0"
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
                      children: "// Set the playback volume of the specified sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setVolumeOfEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "50.0"
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
                      children: "// Release the preloaded sound effect file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "unloadEffect"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(id)"
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
                      children: "// Stop playing all sound effect files"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioEffectManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopAllEffects"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
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
                      children: "// This callback is triggered when the sound effect file ends playing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "override"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " fun"
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
                      children: "(soundId: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  super"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onAudioEffectFinished"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(soundId)"
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
            })
          })]
        }), _jsx(_components.h3, {
          id: "incorporate-audio-mixing",
          children: "Incorporate audio mixing"
        }), _jsxs(_components.p, {
          children: ["Before or after joining a channel, call ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " to play the audio file. When the audio mixing status changes, the SDK triggers the ", _jsx(_components.code, {
            children: "onAudioMixingStateChanged"
          }), " callback and reports the reason for the change."]
        }), _jsx(_components.p, {
          children: "To mix in an audio file, refer to the following code example:"
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
                      children: "// Start playing a music file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startAudioMixing"
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
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '  "Your file path"'
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
                      children: "// Specify the path of the local or online music file"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",       "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set whether to play the music file only locally. false means both local and remote users can hear the music"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  -"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",       "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the number of times the music file should be played. -1 indicates infinite loop"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "         // Set the starting playback position of a music file"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  }), `
`, _jsxs(_components.span, {
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
                      children: "Override"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Triggered when the playback state of the music file changes"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// After receiving the onAudioMixingStateChanged callback, call other mixing APIs, such as pauseAudioMixing or getAudioMixingDuration"
                    })
                  }), `
`, _jsxs(_components.span, {
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
                      children: " onAudioMixingStateChanged"
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
                      children: " state, "
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
                      children: " errorCode) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  super"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onAudioMixingStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(state, errorCode);"
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
                      children: "// Pause or resume playing the music file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseAudioMixing"
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
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeAudioMixing"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
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
                      children: "// Get the total duration of the current music file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getAudioMixingDuration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
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
                      children: "// Set the playback position of the current music file. 500 indicates starting playback from the 500th ms of the music file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioMixingPosition"
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
                      children: "500"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "// Adjust the playback volume of the current music file for remote users"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "adjustAudioMixingPublishVolume"
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
                      children: "50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ");"
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
                      children: "// Adjust the playback volume of the current music file locally"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "adjustAudioMixingPlayoutVolume"
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
                      children: "50"
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
                      children: "// Start playing a music file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startAudioMixing"
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
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '  "Your file path"'
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
                      children: "// Specify the path of the local or online music file"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  false"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",       "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set whether to play the music file only locally. false means both local and remote users can hear the music"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "  -"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ",        "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the number of times the music file should be played. -1 indicates infinite loop"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "         // Set the starting playback position of a music file"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
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
                      children: "// Override callback for audio mixing state changes"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "override"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " fun"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " onAudioMixingStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(state: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", errorCode: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "  super"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "onAudioMixingStateChanged"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(state, errorCode)"
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
                      children: "// Pause or resume playing the music file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseAudioMixing"
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
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeAudioMixing"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
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
                      children: "// Get the total duration of the current music file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getAudioMixingDuration"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
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
                      children: "// Set the playback position of the current music file (e.g., 500 ms)"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setAudioMixingPosition"
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
                      children: "500"
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
                      children: "// Adjust the playback volume of the current music file for remote users"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "adjustAudioMixingPublishVolume"
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
                      children: "50"
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
                      children: "// Adjust the playback volume of the current music file locally"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "rtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "adjustAudioMixingPlayoutVolume"
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
                      children: "50"
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
        }), _jsx(_components.p, {
          children: "Control playback using the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pauseAudioMixing"
            }), ": Pause playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "resumeAudioMixing"
            }), ": Resume playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "stopAudioMixing"
            }), ": Stop playing."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "setAudioMixingPosition"
            }), ": Set the playing position of the current audio file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "adjustAudioMixingPlayoutVolume"
            }), ": Adjust the volume of the current audio file played locally."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "adjustAudioMixingPublishVolume"
            }), ": Adjust the volume of the current audio file played at the remote end."]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "playEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "faqs",
          children: "FAQs"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "/en/api-reference/faq/integration/android_startaudiomixing_permission",
              children: ["Why can't I play the audio file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), " or ", _jsx(_components.code, {
                children: "playEffect"
              }), " on Android 9?"]
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample-Audio/app/src/main/java/io/agora/api/example/examples/advanced/PlayAudioFiles.java",
            children: "Play Audio Files"
          }), " project on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_iaudioeffectmanager.html#api_irtcengine_preloadeffect",
                children: _jsx(_components.code, {
                  children: "preloadEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_iaudioeffectmanager.html#api_irtcengine_playeffect3",
                children: _jsx(_components.code, {
                  children: "playEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished",
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing",
                children: _jsx(_components.code, {
                  children: "startAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged",
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pauseaudiomixing",
                children: _jsx(_components.code, {
                  children: "pauseAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_resumeaudiomixing",
                children: _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stopaudiomixing",
                children: _jsx(_components.code, {
                  children: "stopAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingpublishvolume",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                })
              })
            }), `
`]
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
          children: "This page shows you how to implement audio mixing and playing sound effects in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implemented the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " in your project."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Audio files in one of the ", _jsx(_components.a, {
                href: "https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28",
                children: "supported formats"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "play-sound-effects-and-music-1",
          children: "Play sound effects and music"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement playing sound effects and add audio mixing in your app."
        }), _jsx(_components.p, {
          children: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Function"
              }), _jsx(_components.th, {
                children: "Sound effect"
              }), _jsx(_components.th, {
                children: "Audio mixing"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Play or stop playing a specific audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "preloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "unloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "playEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "startAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Pause or resume playing an audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "pauseAllEffects"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Get and adjust playback position and volume"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "setEffectPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setVolumeOfEffect"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "getAudioMixingCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setAudioMixingPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPlayoutVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Report playback status of audio files"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "rtcEngineDidAudioEffectFinish"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "audioMixingStateChanged"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "play-sound-effects-1",
          children: "Play sound effects"
        }), _jsxs(_components.p, {
          children: ["Before joining a channel, call ", _jsx(_components.code, {
            children: "preloadEffect"
          }), "to preload the sound effect file. After joining the channel, call ", _jsx(_components.code, {
            children: "playEffect"
          }), " to play the specified sound effect. Call ", _jsx(_components.code, {
            children: "playEffect"
          }), " multiple times to set multiple sound effect IDs and play multiple files simultaneously. After the sound effect has finished playing, the SDK triggers the ", _jsx(_components.code, {
            children: "rtcEngineDidAudioEffectFinish"
          }), " callback."]
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
                  children: "// Set the effect ID as a unique identifier for the audio effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " EFFECT_ID:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Int32"
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Specify the path to the audio effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " filePath "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "your filepath"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// If you want to play the effect repeatedly, you need to preload the audio effect file into memory. Do not preload if the file size is large"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// You can only preload local audio effect files"
                })
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
                  children: "preloadEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "filePath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": filePath)"
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
                  children: "// Set the number of times the effect will loop. -1 means infinite loop"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "int loopCount "
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
                  children: " -1"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the pitch of the effect. 1 means the original pitch"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pitch "
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
                  children: " 1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the spatial position of the effect. 0.0 means the effect is in front"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pan "
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
                  children: " 1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the volume of the effect. 100 means the original volume"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " gain "
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
                  children: " 100.0"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set whether to publish the effect to the remote end"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " publish "
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
                  children: " true"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Call playEffect to play the specified audio effect file"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Multiple calls to playEffect can set multiple effect IDs to play multiple audio effect files simultaneously"
                })
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
                  children: "playEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "filePath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": filePath, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "loopCount"
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
                  children: "Int32"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(loopCount), "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "pitch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": pitch, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "pan"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": pan, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "gain"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": gain, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "publish"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": publish)"
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
                  children: "// Pause or resume playing the audio effect file"
                })
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
                  children: "pauseEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID)"
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
                  children: "resumeEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID)"
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
                  children: "// Set the playback position of the specified local audio effect file"
                })
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
                  children: "setEffectPosition"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "pos"
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
                  children: "500"
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
                  children: "// Set the playback volume for all audio effect files"
                })
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
                  children: "setEffectsVolume"
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
                  children: "volume"
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
                  children: "50.0"
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
                  children: "// Set the playback volume for the specified audio effect file"
                })
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
                  children: "setVolumeOfEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "volume"
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
                  children: "50.0"
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
                  children: "// Unload the preloaded audio effect file"
                })
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
                  children: "unloadEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Pause playing all audio effect files"
                })
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
                  children: "stopAllEffects"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                  children: "// Trigger this callback when the audio effect file finishes playing"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " rtcEngineDidAudioEffectFinish"
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
                  children: "_engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": AgoraRtcEngineKit soundId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " soundId)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "incorporate-audio-mixing-1",
          children: "Incorporate audio mixing"
        }), _jsxs(_components.p, {
          children: ["Before or after joining a channel, call ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " to play the audio file. When the audio mixing status changes, the SDK triggers the ", _jsx(_components.code, {
            children: "audioMixingStateChanged"
          }), " callback and reports the reason for the change."]
        }), _jsx(_components.p, {
          children: "To mix in an audio file, refer to the following code example:"
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
                  children: "// Specify the path to the local or online music file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " filePath "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "your file path"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set whether to play the music file only locally. false means both local and remote users can hear the music file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " loopback "
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
                  children: " false"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The number of times the music file will loop. 1 means play only once"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " cycle "
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
                  children: " 1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the starting position of the music file playback"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " startPos "
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Call the startAudioMixing method to play the music file"
                })
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
                  children: "startAudioMixing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(filePath, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "loopback"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": loopback, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cycle"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": cycle, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "startPos"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": startPos)"
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
                  children: "// This callback is triggered when the music file playback status changes"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// After receiving the localAudioMixingStateDidChanged callback, Agora recommends calling other music mixing APIs, such as pauseAudioMixing or getAudioMixingDuration"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " rtcEngine"
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
                  children: "_"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " engine: AgoraRtcEngineKit,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "        audioMixingStateChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " state: AgoraAudioMixingStateType,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "        reasonCode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": AgoraAudioMixingReasonCode) {"
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
                  children: "// Pause or resume playback of the music file"
                })
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
                  children: "pauseAudioMixing"
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
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "resumeAudioMixing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                  children: "// Get the total duration of the current music file"
                })
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
                  children: "getAudioMixingDuration"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the playback position of the current music file. 500 means start playing from 500 ms into the music file"
                })
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
                  children: "setAudioMixingPosition"
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
                  children: "pos"
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
                  children: "500"
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
                  children: "// Adjust the playback volume of the current music file on the remote end"
                })
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
                  children: "adjustAudioMixingPublishVolume"
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
                  children: "volume"
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
                  children: "50"
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
                  children: "// Adjust the playback volume of the current music file locally"
                })
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
                  children: "adjustAudioMixingPlayoutVolume"
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
                  children: "volume"
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
                  children: "50"
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
        }), _jsx(_components.p, {
          children: "Control playback using the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pauseAudioMixing"
            }), ": Pause playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "resumeAudioMixing"
            }), ": Resume playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "stopAudioMixing"
            }), ": Stop playing."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "setAudioMixingPosition"
            }), ": Set the playing position of the current audio file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "adjustAudioMixingPlayoutVolume"
            }), ": Adjust the volume of the current audio file played locally."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "adjustAudioMixingPublishVolume"
            }), ": Adjust the volume of the current audio file played at the remote end."]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "playEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "sample-project-1",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/AudioMixing",
            children: "AudioMixing"
          }), " project on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/preloadeffect(_:filepath:)",
                children: _jsx(_components.code, {
                  children: "preloadEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/playeffect(_:filepath:loopcount:pitch:pan:gain:publish:startpos:)",
                children: _jsx(_components.code, {
                  children: "playEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcenginedidaudioeffectfinish(_:soundid:)",
                children: _jsx(_components.code, {
                  children: "rtcEngineDidAudioEffectFinish"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startaudiomixing(_:loopback:cycle:)",
                children: _jsx(_components.code, {
                  children: "startAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:audiomixingstatechanged:reasoncode:)",
                children: _jsx(_components.code, {
                  children: "audioMixingStateChanged"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pauseaudiomixing()",
                children: _jsx(_components.code, {
                  children: "pauseAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/resumeaudiomixing()",
                children: _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopaudiomixing()",
                children: _jsx(_components.code, {
                  children: "stopAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume(_:)",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingpublishvolume(_:)",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                })
              })
            }), `
`]
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
          children: "This page shows you how to implement audio mixing and playing sound effects in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implemented the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " in your project."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Audio files in one of the ", _jsx(_components.a, {
                href: "https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28",
                children: "supported formats"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "play-sound-effects-and-music-2",
          children: "Play sound effects and music"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement playing sound effects and add audio mixing in your app."
        }), _jsx(_components.p, {
          children: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Function"
              }), _jsx(_components.th, {
                children: "Sound effect"
              }), _jsx(_components.th, {
                children: "Audio mixing"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Play or stop playing a specific audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "preloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "unloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "playEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "startAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Pause or resume playing an audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "pauseAllEffects"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Get and adjust playback position and volume"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "setEffectPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setVolumeOfEffect"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "getAudioMixingCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setAudioMixingPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPlayoutVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Report playback status of audio files"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "rtcEngineDidAudioEffectFinish"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "audioMixingStateChanged"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "play-sound-effects-2",
          children: "Play sound effects"
        }), _jsxs(_components.p, {
          children: ["Before joining a channel, call ", _jsx(_components.code, {
            children: "preloadEffect"
          }), "to preload the sound effect file. After joining the channel, call ", _jsx(_components.code, {
            children: "playEffect"
          }), " to play the specified sound effect. Call ", _jsx(_components.code, {
            children: "playEffect"
          }), " multiple times to set multiple sound effect IDs and play multiple files simultaneously. After the sound effect has finished playing, the SDK triggers the ", _jsx(_components.code, {
            children: "rtcEngineDidAudioEffectFinish"
          }), " callback."]
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
                  children: "// Set the effect ID as a unique identifier for the audio effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " EFFECT_ID:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Int32"
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Specify the path to the audio effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " filePath "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "your filepath"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// If you want to play the effect repeatedly, you need to preload the audio effect file into memory. Do not preload if the file size is large"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// You can only preload local audio effect files"
                })
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
                  children: "preloadEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "filePath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": filePath)"
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
                  children: "// Set the number of times the effect will loop. -1 means infinite loop"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "int loopCount "
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
                  children: " -1"
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the pitch of the effect. 1 means the original pitch"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pitch "
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
                  children: " 1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the spatial position of the effect. 0.0 means the effect is in front"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pan "
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
                  children: " 1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the volume of the effect. 100 means the original volume"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " gain "
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
                  children: " 100.0"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set whether to publish the effect to the remote end"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " publish "
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
                  children: " true"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Call playEffect to play the specified audio effect file"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Multiple calls to playEffect can set multiple effect IDs to play multiple audio effect files simultaneously"
                })
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
                  children: "playEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "filePath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": filePath, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "loopCount"
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
                  children: "Int32"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(loopCount), "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "pitch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": pitch, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "pan"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": pan, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "gain"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": gain, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "publish"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": publish)"
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
                  children: "// Pause or resume playing the audio effect file"
                })
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
                  children: "pauseEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID)"
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
                  children: "resumeEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID)"
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
                  children: "// Set the playback position of the specified local audio effect file"
                })
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
                  children: "setEffectPosition"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "pos"
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
                  children: "500"
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
                  children: "// Set the playback volume for all audio effect files"
                })
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
                  children: "setEffectsVolume"
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
                  children: "volume"
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
                  children: "50.0"
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
                  children: "// Set the playback volume for the specified audio effect file"
                })
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
                  children: "setVolumeOfEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "volume"
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
                  children: "50.0"
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
                  children: "// Unload the preloaded audio effect file"
                })
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
                  children: "unloadEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EFFECT_ID)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Pause playing all audio effect files"
                })
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
                  children: "stopAllEffects"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                  children: "// Trigger this callback when the audio effect file finishes playing"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " rtcEngineDidAudioEffectFinish"
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
                  children: "_engine"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": AgoraRtcEngineKit soundId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: ":"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " soundId)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "incorporate-audio-mixing-2",
          children: "Incorporate audio mixing"
        }), _jsxs(_components.p, {
          children: ["Before or after joining a channel, call ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " to play the audio file. When the audio mixing status changes, the SDK triggers the ", _jsx(_components.code, {
            children: "audioMixingStateChanged"
          }), " callback and reports the reason for the change."]
        }), _jsx(_components.p, {
          children: "To mix in an audio file, refer to the following code example:"
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
                  children: "// Specify the path to the local or online music file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " filePath "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "your file path"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set whether to play the music file only locally. false means both local and remote users can hear the music file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " loopback "
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
                  children: " false"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The number of times the music file will loop. 1 means play only once"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " cycle "
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
                  children: " 1"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the starting position of the music file playback"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "let"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " startPos "
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Call the startAudioMixing method to play the music file"
                })
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
                  children: "startAudioMixing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(filePath, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "loopback"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": loopback, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cycle"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": cycle, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "startPos"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": startPos)"
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
                  children: "// This callback is triggered when the music file playback status changes"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// After receiving the localAudioMixingStateDidChanged callback, Agora recommends calling other music mixing APIs, such as pauseAudioMixing or getAudioMixingDuration"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " rtcEngine"
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
                  children: "_"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " engine: AgoraRtcEngineKit,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "        audioMixingStateChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " state: AgoraAudioMixingStateType,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "        reasonCode"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": AgoraAudioMixingReasonCode) {"
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
                  children: "// Pause or resume playback of the music file"
                })
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
                  children: "pauseAudioMixing"
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
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "resumeAudioMixing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                  children: "// Get the total duration of the current music file"
                })
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
                  children: "getAudioMixingDuration"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the playback position of the current music file. 500 means start playing from 500 ms into the music file"
                })
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
                  children: "setAudioMixingPosition"
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
                  children: "pos"
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
                  children: "500"
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
                  children: "// Adjust the playback volume of the current music file on the remote end"
                })
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
                  children: "adjustAudioMixingPublishVolume"
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
                  children: "volume"
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
                  children: "50"
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
                  children: "// Adjust the playback volume of the current music file locally"
                })
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
                  children: "adjustAudioMixingPlayoutVolume"
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
                  children: "volume"
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
                  children: "50"
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
        }), _jsx(_components.p, {
          children: "Control playback using the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "pauseAudioMixing"
            }), ": Pause playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "resumeAudioMixing"
            }), ": Resume playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "stopAudioMixing"
            }), ": Stop playing."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "setAudioMixingPosition"
            }), ": Set the playing position of the current audio file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "adjustAudioMixingPlayoutVolume"
            }), ": Adjust the volume of the current audio file played locally."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "adjustAudioMixingPublishVolume"
            }), ": Adjust the volume of the current audio file played at the remote end."]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "playEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "sample-project-2",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/AudioMixing",
            children: "AudioMixing"
          }), " project on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/preloadeffect(_:filepath:)",
                children: _jsx(_components.code, {
                  children: "preloadEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/playeffect(_:filepath:loopcount:pitch:pan:gain:publish:startpos:)",
                children: _jsx(_components.code, {
                  children: "playEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcenginedidaudioeffectfinish(_:soundid:)",
                children: _jsx(_components.code, {
                  children: "rtcEngineDidAudioEffectFinish"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startaudiomixing(_:loopback:cycle:)",
                children: _jsx(_components.code, {
                  children: "startAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:audiomixingstatechanged:reasoncode:)",
                children: _jsx(_components.code, {
                  children: "audioMixingStateChanged"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pauseaudiomixing()",
                children: _jsx(_components.code, {
                  children: "pauseAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/resumeaudiomixing()",
                children: _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stopaudiomixing()",
                children: _jsx(_components.code, {
                  children: "stopAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume(_:)",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingpublishvolume(_:)",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                })
              })
            }), `
`]
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
          children: "In Agora Web SDK, if you publish multiple local audio tracks, the SDK automatically mixes these audios. To achieve the effect of mixing audio files with voice, create and publish multiple local audio tracks."
        }), _jsxs(_components.p, {
          children: ["Try out the ", _jsx(_components.a, {
            href: "https://webdemo-global.agora.io/index.html",
            children: "online demo"
          }), " for ", _jsx(_components.a, {
            href: "https://webdemo-global.agora.io/example/advanced/audioMixingAndAudioEffect/index.html",
            children: "Audio effects and music files"
          }), "."]
        }), _jsx(_components.p, {
          children: "This page shows you how to implement audio mixing and playing sound effects in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-3",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Implemented the ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/get-started-sdk",
              children: "SDK quickstart"
            }), " in your project."]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "implement-audio-mixing",
          children: "Implement audio mixing"
        }), _jsx(_components.p, {
          children: "To implement audio mixing in your project, take the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Create a buffer source track"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["RTC SDK offers the ", _jsx(_components.code, {
                children: "createBufferSourceAudioTrack"
              }), " method that enables you to read a local or online audio file, and create a corresponding local audio track object ", _jsx(_components.code, {
                children: "BufferSourceAudioTrack"
              }), ":"]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create an audio track using online music"
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
                      children: " audioFileTrack"
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
                      children: " await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraRTC."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "createBufferSourceAudioTrack"
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
                      children: "  source: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: '"https://web-demos-static.agora.io/agora/smlt.flac"'
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
                      children: "});"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "console."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "log"
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
                      children: '"create audio file track success"'
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
`, _jsxs(_components.p, {
              children: ["Audio tracks created from audio files follow a different audio data processing flow than microphone audio tracks. After creating a track using an audio file, if you directly call ", _jsx(_components.code, {
                children: "audioFileTrack.play"
              }), " or ", _jsx(_components.code, {
                children: "client.publish([audioFileTrack])"
              }), ", you do not hear the music either locally or remotely."]
            }), `
`, _jsx(_components.p, {
              children: "You can publish the following audio tracks in the channel."
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "MicrophoneAudioTrack"
                  })
                }), `
`, _jsxs(_components.p, {
                  children: ["For microphone audio tracks, the SDK continuously collects the latest audio data (", _jsx(_components.code, {
                    children: "AudioBuffer"
                  }), ") from the target microphone device."]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/microphone-audio-track-web.svg",
                    alt: "MicrophoneAudioTrack"
                  })
                }), `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.p, {
                      children: ["After you call the ", _jsx(_components.code, {
                        children: "play"
                      }), " method, the audio data is sent to the ", _jsx(_components.code, {
                        children: "LocalPlayback"
                      }), " component, allowing the local user to hear it."]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsxs(_components.p, {
                      children: ["When the ", _jsx(_components.code, {
                        children: "publish"
                      }), ` method is called, the audio data is transmitted to Agora SDRTN® and eventually heard by the remote user.
The microphone audio track continues to acquire audio data until the `, _jsx(_components.code, {
                        children: "close"
                      }), " method is invoked, at which point the audio track becomes unavailable."]
                    }), `
`]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: _jsx(_components.strong, {
                    children: "BufferSourceAudioTrack"
                  })
                }), `
`, _jsx(_components.p, {
                  children: "For audio files, the RTC SDK does not collect audio data; instead, it achieves a similar effect by reading files, shown in the following figure."
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/buffer-source-audio-track-web.svg",
                    alt: "BufferSourceAudioTrack"
                  })
                }), `
`, _jsx(_components.p, {
                  children: "The key distinctions between collecting audio data and reading files are as follows:"
                }), `
`, _jsxs(_components.ol, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Continuous vs. controlled reading:"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsx(_components.li, {
                        children: "Collection of audio data is continuous and cannot be paused, focusing on capturing the latest audio data."
                      }), `
`, _jsxs(_components.li, {
                        children: ["File reading provides more flexibility. You can pause, jump to specific positions, or loop playback. These operations are core functions of ", _jsx(_components.code, {
                          children: "BufferSourceAudioTrack"
                        }), "."]
                      }), `
`]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [`
`, _jsx(_components.p, {
                      children: _jsx(_components.strong, {
                        children: "Initiating file reading:"
                      })
                    }), `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["After creating an audio track from an audio file, the SDK does not automatically read the file. You need to use ", _jsx(_components.code, {
                          children: "BufferSourceAudioTrack"
                        }), "'s ", _jsx(_components.code, {
                          children: "startProcessAudioBuffer"
                        }), " method to initiate the reading and audio data processing. You then call the ", _jsx(_components.code, {
                          children: "play"
                        }), " and ", _jsx(_components.code, {
                          children: "publish"
                        }), " methods to make the audio file audible locally and remotely."]
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Enable audio mixing"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["RTC SDK supports publishing multiple audio tracks. You can mix audio by publishing ", _jsx(_components.code, {
                children: "BufferSourceAudioTrack"
              }), " together with the audio tracks created through the microphone. To enable audio mixing, refer to the following code:"]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create a microphone audio track"
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
                      children: " microphoneTrack"
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
                      children: " await"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " AgoraRTC."
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
                      children: "();"
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
                      children: "// Start processing audio data from the audio file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startProcessAudioBuffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
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
                      children: "// Publish both the audio file track and the microphone track to begin mixing"
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
                      children: " client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "publish"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "([microphoneTrack, audioFileTrack]);"
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
                      children: "// To stop mixing, either stop processing audio data from the file"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopProcessAudioBuffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
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
                      children: "// Or directly unpublish the audio file track"
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
                      children: " client."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "unpublish"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "([audioFileTrack]);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Manage audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "To handle audio mixing, refer to the following code:"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Pause processing audio data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "pauseProcessAudioBuffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Resume processing audio data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "resumeProcessAudioBuffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Stop processing audio data"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "stopProcessAudioBuffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Start processing audio data in the loop mode"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startProcessAudioBuffer"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "({ loop: "
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
                      children: " });"
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
                      children: "// Get the current playback progress (seconds)"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "getCurrentTime"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Total duration of the current audio file (seconds)"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack.duration;"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Jump to the position at 50 seconds"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "audioFileTrack."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "seekAudioBuffer"
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
                      children: "50"
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
`]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "playEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-3",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-notes",
          children: "Development notes"
        }), _jsx(_components.p, {
          children: "Consider the following when developing your app:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "To play online audio files, you also need to configure CORS."
          }), `
`, _jsx(_components.li, {
            children: "Supported audio formats are MP3, AAC, and other audio formats supported by the browser."
          }), `
`, _jsxs(_components.li, {
            children: ["Local files only support the browser's native ", _jsx(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/API/File",
              children: "File object"
            }), "."]
          }), `
`, _jsx(_components.li, {
            children: "Safari versions below 12 do not support mixing, so publishing multiple audio tracks is not possible."
          }), `
`, _jsxs(_components.li, {
            children: ["Irrespective of the number of audio tracks published locally, the SDK automatically mixes them into one audio track, so the remote user only receives one ", _jsx(_components.code, {
              children: "RemoteAudioTrack"
            }), "."]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
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
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ibuffersourceaudiotrack.html",
              children: _jsx(_components.code, {
                children: "BufferSourceAudioTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#publish",
              children: _jsx(_components.code, {
                children: "publish"
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
          children: "This page shows you how to implement audio mixing and playing sound effects in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-4",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implemented the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " in your project."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Audio files in one of the ", _jsx(_components.a, {
                href: "https://learn.microsoft.com/zh-cn/windows/win32/medfound/supported-media-formats-in-media-foundation",
                children: "supported formats"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "play-sound-effects-and-music-3",
          children: "Play sound effects and music"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement playing sound effects and add audio mixing in your app."
        }), _jsx(_components.p, {
          children: "To manage audio mixing and voice effects, RTC SDK provides the following APIs:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Function"
              }), _jsx(_components.th, {
                children: "Sound effect"
              }), _jsx(_components.th, {
                children: "Audio mixing"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Play or stop playing a specific audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "preloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "unloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "playEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "startAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Pause or resume playing an audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "pauseAllEffects"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Get and adjust playback position and volume"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "setEffectPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setVolumeOfEffect"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "getAudioMixingCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setAudioMixingPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPlayoutVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Report playback status of audio files"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "play-sound-effects-3",
          children: "Play sound effects"
        }), _jsxs(_components.p, {
          children: ["Before joining a channel, call ", _jsx(_components.code, {
            children: "preloadEffect"
          }), " to preload the sound effect file. After joining the channel, call ", _jsx(_components.code, {
            children: "playEffect"
          }), " to play the specified sound effect file. To play multiple sound effect files simultaneously, set multiple sound effect IDs and call ", _jsx(_components.code, {
            children: "playEffect"
          }), " multiple times. After a sound effect is played, the RTC SDK triggers the ", _jsx(_components.code, {
            children: "onAudioEffectFinished"
          }), " callback."]
        }), _jsx(_components.p, {
          children: "To implement this logic, refer to the following sample code:"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonPreload"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCurSel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
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
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strEffect;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  std"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::string strPath "
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
                  children: " cs2utf8"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Preload the sound effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "preloadEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_mapEffect[strEffect], strPath."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"preload effect: path:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), strEffect);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonUnloadEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCurSel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
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
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strEffect;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Unload the preloaded sound effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unloadEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_mapEffect[strEffect]);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"unload effect: path:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), strEffect);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonPauseEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCurSel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
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
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strEffect;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Pause playing the specified sound effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pauseEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_mapEffect[strEffect]);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"pause effect: path:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), strEffect);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonResumeEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCurSel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
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
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strEffect;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Resume playing the specified sound effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "resumeEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_mapEffect[strEffect]);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"resume effect ret:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " : path:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), ret, strEffect);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonPlayEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCurSel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
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
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strEffect;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  std"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "::string strFile "
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
                  children: " cs2utf8"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strLoops;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_edtLoops."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strLoops);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " loops "
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
                  children: " _ttol"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strLoops);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (loops "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=="
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
                  children: ") {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    m_edtLoops."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "SetWindowText"
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
                  children: "_T"
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
                  children: '"1"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "));"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    loops "
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
                  children: " 1"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strPitch;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_edtPitch."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strPitch);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  double"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pitch "
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
                  children: " _ttof"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strPitch);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strGain;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_edtGain."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strGain);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " gain "
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
                  children: " _ttol"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strGain);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strPan;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_cmbPan."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strPan);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  double"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pan "
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
                  children: " _ttof"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strPan);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  BOOL publish "
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
                  children: " m_chkPublish."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCheck"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Play the sound effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "playEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_mapEffect[strEffect], strFile."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), loops, pitch, pan, gain, publish);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"play effect: path:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", ret:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), strEffect, ret);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"loops:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", pitch:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%.1f"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", pan:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%.0f"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", gain:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", publish:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    loops, pitch, pan, gain, publish);"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonStopEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCurSel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "<"
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
                  children: ")"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strEffect;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_cmbEffect."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Stop playing the specified sound effect file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_mapEffect[strEffect]);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"stop effect: path:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), strEffect);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonPauseAllEffect"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
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
                  children: "!"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_pauseAll)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  {"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Pause playing all sound effect files"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pauseAllEffects"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"pause All Effects"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "));"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    m_btnPauseAll."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "SetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEffectCtrlResumeEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  else"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Resume playing all sound effect files"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "resumeAllEffects"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"resume All Effects"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "));"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    m_btnPauseAll."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "SetWindowText"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEffectCtrlPauseAllEffect);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_pauseAll "
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
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_pauseAll;"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraEffectDlg"
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
                  children: "OnBnClickedButtonStopAllEffect2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Stop playing all sound effect files"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopAllEffects"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"stop All Effects"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "));"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
        }), _jsx(_components.h3, {
          id: "incorporate-audio-mixing-3",
          children: "Incorporate audio mixing"
        }), _jsxs(_components.p, {
          children: ["To play a music file, call ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " before or after joining a channel. After you successfully call this method, RTC SDK triggers the ", _jsx(_components.code, {
            children: "onAudioMixingStateChanged"
          }), " callback when the mixing status changes. This callback also reports the reason for the state change."]
        }), _jsx(_components.p, {
          children: "To implement this logic, refer to the following code:"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraAudioMixingDlg"
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
                  children: "OnBnClickedButtonMixingStart"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString audioUrl "
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
                  children: " GetExePath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "+"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " _T"
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
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'ID_MUSIC_01.m4a"'
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
                  children: "  // Start playing the music file"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startAudioMixing"
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
                  children: "cs2utf8"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioUrl)."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "c_str"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), "
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "-"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"startAudioMixing path:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", ret:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), audioUrl."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "AllocSysString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), ret);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "// Listen for the onAudioMixingStateChanged callback"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAudioMixingEventHandler"
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
                  children: "onAudioMixingStateChanged"
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
                  children: "AUDIO_MIXING_STATE_TYPE"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " state"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "AUDIO_MIXING_REASON_TYPE"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " reason"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " (m_hMsgHanlder) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    PAudioMixingState stateChanged "
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " AudioMixingState;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    stateChanged->error "
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
                  children: " reason;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    stateChanged->state "
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
                  children: " state;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ::"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "PostMessage"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_hMsgHanlder, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WM_MSGID"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EID_REMOTE_AUDIO_MIXING_STATE_CHANED), (WPARAM)stateChanged, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraAudioMixingDlg"
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
                  children: "OnBnClickedButtonMixingPause"
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
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Pause playback"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "pauseAudioMixing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"pauseAudioMixing ret:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), ret);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraAudioMixingDlg"
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
                  children: "OnBnClickedButtonMixingResume"
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
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Resume playback"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "resumeAudioMixing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"resumeAudioMixing ret:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), ret);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraAudioMixingDlg"
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
                  children: "OnBnClickedButtonMixingStop"
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
                  children: "{"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Stop playback"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopAudioMixing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  CString strInfo;"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  strInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                  children: "_T"
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
                  children: '"stopAudioMixing ret:'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "), ret);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "InsertString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(m_lstInfo."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetCount"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(), strInfo);"
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraAudioMixingDlg"
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
                  children: "OnNMCustomdrawSliderMixingPlayoutVolume"
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
                  children: "NMHDR"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " pNMHDR"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LRESULT"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " pResult"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  LPNMCUSTOMDRAW pNMCD "
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
                  children: " reinterpret_cast<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "LPNMCUSTOMDRAW"
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
                  children: "(pNMHDR);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pos "
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
                  children: " m_sldMixingPlayoutVolume."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetPos"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Adjust the playback volume of the current music file locally"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "adjustAudioMixingPlayoutVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(pos);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "pResult "
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
                  children: "void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " CAgoraAudioMixingDlg"
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
                  children: "OnNMCustomdrawSliderMixingPublishVolume"
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
                  children: "NMHDR"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " pNMHDR"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "LRESULT"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " pResult"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  LPNMCUSTOMDRAW pNMCD "
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
                  children: " reinterpret_cast<"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "LPNMCUSTOMDRAW"
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
                  children: "(pNMHDR);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " pos "
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
                  children: " m_sldMixingPublishVolume."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetPos"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Adjust the playback volume of the current music file on the remote end"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ret "
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
                  children: " m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "adjustAudioMixingPublishVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(pos);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "pResult "
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
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "playEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "sample-projects",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora provides the following open source sample projects on GitHub for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioEffect",
              children: "AudioEffect"
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioMixing",
              children: "AudioMixing"
            })
          }), `
`]
        }), _jsx(_components.p, {
          children: "Download or view the source code for more detailed examples."
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_preloadeffect",
                children: _jsx(_components.code, {
                  children: "preloadEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3",
                children: _jsx(_components.code, {
                  children: "playEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished",
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing",
                children: _jsx(_components.code, {
                  children: "startAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged",
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_pauseaudiomixing",
                children: _jsx(_components.code, {
                  children: "pauseAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_resumeaudiomixing",
                children: _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stopaudiomixing",
                children: _jsx(_components.code, {
                  children: "stopAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingpublishvolume",
                children: _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                })
              })
            }), `
`]
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
          children: "This page shows you how to implement audio mixing and playing sound effects in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-5",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites-5",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implemented the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " in your project."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Audio files in one of the formats supported by the target development platform:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28",
                  children: "macOS"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://learn.microsoft.com/zh-cn/windows/win32/medfound/supported-media-formats-in-media-foundation",
                  children: "Windows"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "play-sound-effects-and-music-4",
          children: "Play sound effects and music"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement playing sound effects and add audio mixing in your app."
        }), _jsx(_components.p, {
          children: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Function"
              }), _jsx(_components.th, {
                children: "Sound effect"
              }), _jsx(_components.th, {
                children: "Audio mixing"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Play or stop playing a specific audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "preloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "unloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "playEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "startAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Pause or resume playing an audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "pauseAllEffects"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Get and adjust playback position and volume"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "setEffectPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setVolumeOfEffect"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "getAudioMixingCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setAudioMixingPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPlayoutVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Report playback status of audio files"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "play-sound-effects-4",
          children: "Play sound effects"
        }), _jsxs(_components.p, {
          children: ["After joining a channel, call ", _jsx(_components.code, {
            children: "playEffect"
          }), " to play the specified sound effect file. Call ", _jsx(_components.code, {
            children: "playEffect"
          }), " multiple times to set multiple sound effect IDs and play multiple files simultaneously. When the playback is finished, the SDK triggers the ", _jsx(_components.code, {
            children: "onAudioEffectFinished"
          }), " callback."]
        }), _jsx(_components.p, {
          children: "Refer to the following code example:"
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
                  children: "// Register the sound effect playback completion callback"
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
                  children: " EventHandler"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onAudioEffectFinished"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "soundId"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
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
                  children: "`soundId:${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "soundId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}`"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EventHandler);"
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
                  children: "// Playing sound files"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "playEffect"
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
                  children: "  soundId: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Sets the sound ID"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  filePath: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your file path'"
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
                  children: "  loopCount: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
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
                  children: "// Sets the number of times the sound effect is looped. 1 means looped once."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  pitch: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1.0"
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
                  children: "// Sets the pitch of the sound effect. 1.0 indicates the original pitch."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  pan: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Sets the spatial position of the sound effect. 0.0 means the sound effect appears directly in front"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  gain: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "100"
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
                  children: "// Sets the sound volume. 100 indicates the original volume."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  publish: "
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
                  children: "// Sets whether or not to publish the sound to the remote users"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  startPos: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Sets the playback position of the sound effect file in ms. 0 means playback starts at the beginning."
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "incorporate-audio-mixing-4",
          children: "Incorporate audio mixing"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " method to play a music file. When the music mixing state changes after a successful call to this method, the SDK triggers the ", _jsx(_components.code, {
            children: "onAudioMixingStateChanged"
          }), " callback to report the changed music file playback status and the reason for the change."]
        }), _jsx(_components.p, {
          children: "Refer to the following code example:"
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
                  children: "// Register the music file's playback state has changed callback"
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
                  children: " EventHandler"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onAudioMixingStateChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "state"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "reason"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
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
                  children: "`state:${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "state"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}, reason:${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "reason"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}`"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EventHandler);"
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
                  children: "// Playing Music Files"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startAudioMixing"
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
                  children: "  filePath: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your file path'"
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
                  children: "// Sets the music file path"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  loopback: "
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
                  children: "// Sets whether music files are only played locally. 'false' indicates that files are published to the remote end, and both local and remote users can hear the music"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  cycle: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "-"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
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
                  children: "// Sets the number of times the music file is played. -1 means infinite loop playback"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  startPos: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Sets the playback position of the music file in ms. 0 means playback starts st the beginning."
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "playEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-5",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3",
                children: _jsx(_components.code, {
                  children: "playEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished",
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing2",
                children: _jsx(_components.code, {
                  children: "startAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged",
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })
            }), `
`]
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
          children: "This page shows you how to implement audio mixing and playing sound effects in your app."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-6",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites-6",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implemented the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " in your project."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Audio files in one of the formats supported by the target development platform:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://developer.android.com/media/platform/supported-formats",
                  children: "Android"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/MultimediaPG/UsingAudio/UsingAudio.html#/apple_ref/doc/uid/TP40009767-CH2-SW28",
                  children: "iOS"
                })
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "play-sound-effects-and-music-5",
          children: "Play sound effects and music"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement playing sound effects and add audio mixing in your app."
        }), _jsx(_components.p, {
          children: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Function"
              }), _jsx(_components.th, {
                children: "Sound effect"
              }), _jsx(_components.th, {
                children: "Audio mixing"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Play or stop playing a specific audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "preloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "unloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "playEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "startAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "stopAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Pause or resume playing an audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "pauseAllEffects"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "pauseAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "resumeAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Get and adjust playback position and volume"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "setEffectPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setVolumeOfEffect"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "getAudioMixingCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "setAudioMixingPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "getAudioMixingPlayoutVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "adjustAudioMixingPlayoutVolume"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Report playback status of audio files"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "play-sound-effects-5",
          children: "Play sound effects"
        }), _jsxs(_components.p, {
          children: ["After joining a channel, call ", _jsx(_components.code, {
            children: "playEffect"
          }), " to play the specified sound effect file. Call ", _jsx(_components.code, {
            children: "playEffect"
          }), " multiple times to set multiple sound effect IDs and play multiple files simultaneously. When the playback is finished, the SDK triggers the ", _jsx(_components.code, {
            children: "onAudioEffectFinished"
          }), " callback."]
        }), _jsx(_components.p, {
          children: "Refer to the following code example:"
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
                  children: "// Register the sound effect playback completion callback"
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
                  children: " EventHandler"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onAudioEffectFinished"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "soundId"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
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
                  children: "`soundId:${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "soundId"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}`"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EventHandler);"
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
                  children: "// Playing sound files"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "playEffect"
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
                  children: "  soundId: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Setting the Sound ID"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  filePath: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your file path'"
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
                  children: "// Setting the sound file path"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  loopCount: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
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
                  children: "// Sets the number of times the sound effect is looped. 1 means looped once."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  pitch: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1.0"
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
                  children: "// Sets the pitch of the sound effect. 1.0 indicates the original pitch."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  pan: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Sets the spatial position of the sound effect. 0.0 means the sound effect appears directly in front"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  gain: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "100"
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
                  children: "// Sets the sound volume. 100 indicates the original volume."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  publish: "
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
                  children: "// Sets whether or not to publish the sound to the remote end"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  startPos: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Sets the playback position of the sound effect file. 0 means playback starts from the 0th ms of the sound effect file."
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "incorporate-audio-mixing-5",
          children: "Incorporate audio mixing"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "startAudioMixing"
          }), " method to play a music file. When the music mixing state changes after a successful call to this method, the SDK triggers the ", _jsx(_components.code, {
            children: "onAudioMixingStateChanged"
          }), " callback to report the changed music file playback status and the reason for the change."]
        }), _jsx(_components.p, {
          children: "Refer to the following code example:"
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
                  children: "// Register the music file's playback state has changed callback"
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
                  children: " EventHandler"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onAudioMixingStateChanged"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "state"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "reason"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    console."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
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
                  children: "`state:${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "state"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}, reason:${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "reason"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}`"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  }"
                })
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
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "registerEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(EventHandler);"
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
                  children: "// Playing Music Files"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startAudioMixing"
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
                  children: "  filePath: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your file path'"
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
                  children: "// Setting the music file path"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  loopback: "
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
                  children: "// Sets whether music files are only played locally. false Indicates that locally played music files are published to the remote end, and both local and remote users can hear the music"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  cycle: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "-"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
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
                  children: "// Sets the number of times the music file is played. -1 means infinite loop playback"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  startPos: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
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
                  children: "// Sets the playback position of the music file. 0 means playback starts from the 0th ms of the sound file."
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
                })
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "startAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "playEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-6",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3",
                children: _jsx(_components.code, {
                  children: "playEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished",
                children: _jsx(_components.code, {
                  children: "onAudioEffectFinished"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing2",
                children: _jsx(_components.code, {
                  children: "startAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged",
                children: _jsx(_components.code, {
                  children: "onAudioMixingStateChanged"
                })
              })
            }), `
`]
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
          children: "This page shows you how to implement audio mixing and playing sound effects in your game."
        }), _jsx(_components.h2, {
          id: "understand-the-tech-7",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "RTC SDK provides APIs that enable you to implement:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Audio mixing"
              })
            }), `
`, _jsx(_components.p, {
              children: "Mix in music file such as background music with microphone audio. Using this feature, you can play only one file at a time."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Sound effects"
              })
            }), `
`, _jsx(_components.p, {
              children: "Play audios with a short duration. For example, applause, cheers, or gunshots. You can play multiple sound effects at the same time."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "prerequisites-7",
          children: "Prerequisites"
        }), _jsx(_components.p, {
          children: "Ensure that you have:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Implemented the ", _jsx(_components.a, {
                href: "/en/realtime-media/rtc/get-started-sdk",
                children: "SDK quickstart"
              }), " in your project."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Set a valid path to the music or sound effect file to be played."
            }), `
`]
          }), `
`]
        }), _jsx(_components.h2, {
          id: "play-sound-effects-and-music-6",
          children: "Play sound effects and music"
        }), _jsx(_components.p, {
          children: "This section shows you how to implement playing sound effects and add audio mixing in your game."
        }), _jsx(_components.p, {
          children: "To manage audio mixing and sound effects, RTC SDK provides the following APIs:"
        }), _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Function"
              }), _jsx(_components.th, {
                children: "Sound effect"
              }), _jsx(_components.th, {
                children: "Audio mixing"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Play or stop playing a specific audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "PreloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "UnloadEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "PlayEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "StopEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "StopAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "StartAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "StopAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Pause or resume playing an audio file"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "PauseEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "PauseAllEffects"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "ResumeEffect"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "ResumeAllEffects"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "PauseAudioMixing"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "ResumeAudioMixing"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Get and adjust playback position and volume"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "SetEffectPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "GetEffectCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "GetEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "SetEffectsVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "SetVolumeOfEffect"
                })]
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "GetAudioMixingCurrentPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "SetAudioMixingPosition"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "GetAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "AdjustAudioMixingPublishVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "GetAudioMixingPlayoutVolume"
                }), _jsx("br", {}), " ", _jsx(_components.code, {
                  children: "AdjustAudioMixingPlayoutVolume"
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Report playback status of audio files"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "OnAudioEffectFinished"
                })
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "OnAudioMixingStateChanged"
                })
              })]
            })]
          })]
        }), _jsx(_components.h3, {
          id: "play-sound-effects-6",
          children: "Play sound effects"
        }), _jsxs(_components.p, {
          children: ["Before joining a channel, call ", _jsx(_components.code, {
            children: "PreloadEffect"
          }), " to preload the sound effect file. After joining the channel, call ", _jsx(_components.code, {
            children: "PlayEffect"
          }), " to play the specified sound effect file. To play multiple sound effect files simultaneously, set multiple sound effect IDs and call ", _jsx(_components.code, {
            children: "PlayEffect"
          }), " multiple times. After a sound effect is played, the RTC SDK triggers the ", _jsx(_components.code, {
            children: "OnAudioEffectFinished"
          }), " callback."]
        }), _jsx(_components.p, {
          children: "To implement this logic, refer to the following sample code:"
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
                  children: "// Preload sound files before joining a channel"
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
                  children: "PreloadEffect"
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
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"File Path 1"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "PreloadEffect"
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
                  children: "2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"File Path 2"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "PreloadEffect"
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
                  children: "3"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"File Path 3"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "// Play preloaded sound files after joining a channel"
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
                  children: "PlayEffect"
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
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"File Path 1"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "PlayEffect"
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
                  children: "2"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"File Path 2"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "PlayEffect"
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
                  children: "3"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"File Path 3"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "// Triggered when local sound file playback ends"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: " override"
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
                  children: " OnAudioEffectFinished"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " soundId"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  Debug."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Log"
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
                  children: '"effect play finish :"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " +"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " soundId);"
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
        }), _jsx(_components.h3, {
          id: "incorporate-audio-mixing-6",
          children: "Incorporate audio mixing"
        }), _jsxs(_components.p, {
          children: ["To play a music file, call ", _jsx(_components.code, {
            children: "StartAudioMixing"
          }), " before or after joining a channel. After you successfully call this method, RTC SDK triggers the ", _jsx(_components.code, {
            children: "OnAudioMixingStateChanged"
          }), " callback when the mixing status changes. This callback also reports the reason for the state change."]
        }), _jsx(_components.p, {
          children: "To implement this logic, refer to the following code:"
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
              children: [_jsxs(_components.span, {
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
                  children: "StartAudioMixing"
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
                  children: '"File Path"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "-"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ");"
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
                  children: "public"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " override"
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
                  children: " OnAudioMixingStateChanged"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  AUDIO_MIXING_STATE_TYPE"
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  AUDIO_MIXING_REASON_TYPE"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " errorCode"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  Debug."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Log"
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
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Format"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "AUDIO_MIXING_STATE_TYPE: {0}, AUDIO_MIXING_REASON_TYPE: {1}"'
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
                  children: "    state, errorCode));"
                })
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
          children: "Control playback using the following methods:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "PauseAudioMixing"
            }), ": Pause playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ResumeAudioMixing"
            }), ": Resume playback."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "StopAudioMixing"
            }), ": Stop playing."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "SetAudioMixingPosition"
            }), ": Set the playing position of the current audio file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AdjustAudioMixingPlayoutVolume"
            }), ": Adjust the volume of the current audio file played locally."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AdjustAudioMixingPublishVolume"
            }), ": Adjust the volume of the current audio file played at the remote end."]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["If you play a short sound effect file using ", _jsx(_components.code, {
                children: "StartAudioMixing"
              }), ", or a long music file using ", _jsx(_components.code, {
                children: "PlayEffect"
              }), ", the playback may fail."]
            })
          })
        }), _jsx(_components.h2, {
          id: "reference-7",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "sample-project-3",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/AudioMixing/AudioMixing.cs",
            children: "AudioMixing"
          }), " project on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_preloadeffect",
                children: _jsx(_components.code, {
                  children: "PreloadEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_playeffect3",
                children: _jsx(_components.code, {
                  children: "PlayEffect"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioeffectfinished",
                children: _jsx(_components.code, {
                  children: "OnAudioEffectFinished"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startaudiomixing",
                children: _jsx(_components.code, {
                  children: "StartAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiomixingstatechanged",
                children: _jsx(_components.code, {
                  children: "OnAudioMixingStateChanged"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_pauseaudiomixing",
                children: _jsx(_components.code, {
                  children: "PauseAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_resumeaudiomixing",
                children: _jsx(_components.code, {
                  children: "ResumeAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stopaudiomixing",
                children: _jsx(_components.code, {
                  children: "StopAudioMixing"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
                children: _jsx(_components.code, {
                  children: "AdjustAudioMixingPlayoutVolume"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingpublishvolume",
                children: _jsx(_components.code, {
                  children: "AdjustAudioMixingPublishVolume"
                })
              })
            }), `
`]
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
