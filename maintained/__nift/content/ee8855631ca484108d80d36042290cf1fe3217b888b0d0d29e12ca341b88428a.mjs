import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Voice effects",
  description: ""
};
export let _markdown = `

RTC SDK makes it simple for you to publish audio captured through the microphone to subscribers in a channel. In some cases, users want to modify the captured audio to add voice effects, or change the voice quality before the audio is published. RTC SDK provides several options that enable you to apply voice effects. This page shows you how to implement these features in your channel.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    ## Understand the tech [#understand-the-tech]

    Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:

    * **Voice beautifiers**
      * Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition.
      * Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice.
      * Timbre shift: Fine-tune the timbre of a vocal in a specific direction.

    * **Sound effects**
      * Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible.
      * Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source.
      * Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect.

    * **Voice changer**
      * Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition.
      * Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc.

    * **Custom audio effects**
      If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.

    Try the [Online Demo](https://web-cdn.agora.io/marketing/audio_en_v3.html) to experience different voice effects.

    ## Prerequisites [#prerequisites]

    Before proceeding with the code examples on this page, make sure you have completed the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) guide.

    ## Implement voice effects [#implement-voice-effects]

    This section shows how to use different sound beautifiers to enhance your audio experience.

    Use the following methods to set the desired vocal effects:

    * Call the \`setVoiceBeautifierPreset\` method to apply effects such as chatting bel canto, singing bel canto, and timbre change.
    * Utilize the \`setAudioEffectPreset\` method to configure sound effects, genre sound effects, space shaping, and other effects.
    * Apply the \`setVoiceConversionPreset\` method to entirely transform the original voice.
      If the preset effects don't meet your requirements, customize vocal effects using methods such as \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\`.

    Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:

    ### Set audio scenario and audio profile [#set-audio-scenario-and-audio-profile]

    For optimal audio quality, take the following steps:

    * Call [setAudioScenario](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\`.
    * Call [setAudioProfile](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2) to set the audio encoding properties to high-quality encoding:

      * For mono transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\`.
      * For stereo transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO\`

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
        // Create the RtcEngine object
           mRtcEngine = RtcEngine.create(config);
           // Set the audio scenario
           mRtcEngine.setAudioScenario(Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING));
           // Set the audio encoding properties
           mRtcEngine.setAudioProfile(Constants.AudioProfile.getValue(Constants.AudioProfile.MUSIC_HIGH_QUALITY_STEREO));
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Create the RtcEngine object
           mRtcEngine = RtcEngine.create(config)
           // Set the audio scenario
           mRtcEngine.setAudioScenario(Constants.AudioScenario.getValue(Constants.AudioScenario.GAME_STREAMING))
           // Set the audio encoding properties
           mRtcEngine.setAudioProfile(Constants.AudioProfile.getValue(Constants.AudioProfile.MUSIC_HIGH_QUALITY_STEREO))
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Voice beautifiers [#voice-beautifiers]

    Call \`setVoiceBeautifierPreset\` to set music style, space shaping, electronic music, and other effects.

    * Chat voice beautifier

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
          // Set the vocal effect to magnetic (for male voices)
           mRtcEngine.setVoiceBeautifierPreset(Constants.CHAT_BEAUTIFIER_MAGNETIC);
           // Turn off the effect    
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Set the vocal effect to magnetic (for male voices)
           mRtcEngine.setVoiceBeautifierPreset(Constants.CHAT_BEAUTIFIER_MAGNETIC)
           // Turn off the effect    
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>
    * Singing voice beautifier

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
          // Example 1: Set male voice effect
           // Set the singing voice preset to beautify the male voice and add a small room reverberation effect
           mRtcEngine.setVoiceBeautifierPreset(Constants.SINGING_BEAUTIFIER);
           // Turn off the effect 
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF);

           // Example 2: Set female voice effect
           // Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect
           mRtcEngine.setVoiceBeautifierParameters(Constants.SINGING_BEAUTIFIER, 2, 3);
           // Turn off the effect
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Example 1: Set male voice effect
           // Set the singing voice preset to beautify the male voice and add a small room reverberation effect
           mRtcEngine.setVoiceBeautifierPreset(Constants.SINGING_BEAUTIFIER)
           // Turn off the effect 
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF)

           // Example 2: Set female voice effect
           // Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect
           mRtcEngine.setVoiceBeautifierParameters(Constants.SINGING_BEAUTIFIER, 2, 3)
           // Turn off the effect
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    - Tone change

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
          // Set the timbre to thick
           mRtcEngine.setVoiceBeautifierPreset(Constants.TIMBRE_TRANSFORMATION_VIGOROUS);
           // Turn off the effect
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Set the timbre to thick
           mRtcEngine.setVoiceBeautifierPreset(Constants.TIMBRE_TRANSFORMATION_VIGOROUS)
           // Turn off the effect
           mRtcEngine.setVoiceBeautifierPreset(Constants.VOICE_BEAUTIFIER_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    ### Sound effects [#sound-effects]

    Call \`setAudioEffectPreset\` to set music style, space shaping, electronic music and other effects.

    * Music Style

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
          // Set the style to pop
           mRtcEngine.setAudioEffectPreset(Constants.STYLE_TRANSFORMATION_POPULAR);
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Set the style to pop
           mRtcEngine.setAudioEffectPreset(Constants.STYLE_TRANSFORMATION_POPULAR)
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>
    * Space shaping

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
          // Set the space shaping effect to KTV
           mRtcEngine.setAudioEffectPreset(Constants.ROOM_ACOUSTICS_KTV);
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Set the space shaping effect to KTV
           mRtcEngine.setAudioEffectPreset(Constants.ROOM_ACOUSTICS_KTV)
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>
    * Electronic sound effects

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
          // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
           // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
           mRtcEngine.setAudioEffectPreset(Constants.PITCH_CORRECTION);
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF);

           // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect
           // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
           mRtcEngine.setAudioEffectParameters(Constants.PITCH_CORRECTION, 2, 6);
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
           // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
           mRtcEngine.setAudioEffectPreset(Constants.PITCH_CORRECTION)
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF)

           // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect
           // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
           mRtcEngine.setAudioEffectParameters(Constants.PITCH_CORRECTION, 2, 6)
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    ### Voice change effects [#voice-change-effects]

    To implement basic voice-changing effects, call the \`setAudioEffectPreset\` method. For advanced voice-changing effects, use the \`setVoiceConversionPreset\` method.

    * Basic voice changer

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
          // Set the voice change effect to a more neutral voice
           mRtcEngine.setVoiceConversionPreset(Constants.VOICE_CHANGER_NEUTRAL);
           // Turn off the effect
           mRtcEngine.setVoiceConversionPreset(Constants.VOICE_CONVERSION_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Set the voice change effect to a more neutral voice
           mRtcEngine.setVoiceConversionPreset(Constants.VOICE_CHANGER_NEUTRAL)
           // Turn off the effect
           mRtcEngine.setVoiceConversionPreset(Constants.VOICE_CONVERSION_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>
    * Advanced voice changer

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
          // Set the vocal effect to 'Hulk'
           mRtcEngine.setAudioEffectPreset(Constants.VOICE_CHANGER_EFFECT_HULK);
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF);
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="kotlin">
          \`\`\`kotlin
          // Set the vocal effect to 'Hulk'
           mRtcEngine.setAudioEffectPreset(Constants.VOICE_CHANGER_EFFECT_HULK)
           // Turn off the effect
           mRtcEngine.setAudioEffectPreset(Constants.AUDIO_EFFECT_OFF)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    ### Custom audio effects [#custom-audio-effects]

    Call \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:

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
        double pitch = 0.5;
        mRtcEngine.setLocalVoicePitch(pitch);

        // Set the center frequency of the local voice equalization band
        // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
        // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(0), -15);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(1), 3);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(2), -9);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(3), -8);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(4), -6);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(5), -4);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(6), -3);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(7), -2);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(8), -1);
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(9), 1);

        // Original voice intensity or dry signal, value range [-20,10], unit is dB
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(0), 10);

        // Early reflection signal intensity or wet signal, value range [-20,10], unit is dB
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(1), 7);

        // The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(2), 6);

        // Initial delay length of wet signal, value range: [0,200], unit: ms
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(3), 124);

        // The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(4), 78);
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="kotlin">
        \`\`\`kotlin
        // Set the pitch for the local voice
        val pitch = 0.5
        mRtcEngine.setLocalVoicePitch(pitch)

        // Set the center frequency of the local voice equalization band
        // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
        // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(0), -15)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(1), 3)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(2), -9)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(3), -8)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(4), -6)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(5), -4)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(6), -3)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(7), -2)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(8), -1)
        mRtcEngine.setLocalVoiceEqualization(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY.fromInt(9), 1)

        // Original voice intensity or dry signal, value range [-20,10], unit is dB
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(0), 10)

        // Early reflection signal intensity or wet signal, value range [-20,10], unit is dB
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(1), 7)

        // The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(2), 6)

        // Initial delay length of wet signal, value range: [0,200], unit: ms
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(3), 124)

        // The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
        mRtcEngine.setLocalVoiceReverb(Constants.AUDIO_REVERB_TYPE.fromInt(4), 78)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development considerations [#development-considerations]

    * Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one.

    * The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see [API reference](#api-reference).

    ### Sample project [#sample-project]

    Agora provides an open source [Voice effects project](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample-Audio/app/src/main/java/io/agora/api/example/examples/advanced/VoiceEffects.java) on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference]

    #### Audio scenario and audio profile [#audio-scenario-and-audio-profile]

    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2)

    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    #### Preset voice effects [#preset-voice-effects]

    * [\`setVoiceBeautifierPreset\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset)

    * [\`setAudioEffectPreset\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset)

    * [\`setVoiceConversionPreset\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset)

    * [\`setAudioEffectParameters\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters)

    * [\`setVoiceBeautifierParameters\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters)

    #### Custom voice effects [#custom-voice-effects]

    * [\`setLocalVoiceEqualization\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization)

    * [\`setLocalVoiceReverb\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb)

    * [\`setLocalVoicePitch\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    ## Understand the tech [#understand-the-tech-1]

    Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:

    * **Voice beautifiers**
      * Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition.
      * Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice.
      * Timbre shift: Fine-tune the timbre of a vocal in a specific direction.

    * **Sound effects**
      * Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible.
      * Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source.
      * Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect.

    * **Voice changer**
      * Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition.
      * Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc.

    * **Custom audio effects**
      If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.

    Try the [Online Demo](https://web-cdn.agora.io/marketing/audio_en_v3.html) to experience different voice effects.

    ## Prerequisites [#prerequisites-1]

    Before proceeding with the code examples on this page, make sure you have completed the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) guide.

    ## Implement voice effects [#implement-voice-effects-1]

    This section shows how to use different sound beautifiers to enhance your audio experience.

    Use the following methods to set the desired vocal effects:

    * Call the \`setVoiceBeautifierPreset\` method to apply effects such as chatting bel canto, singing bel canto, and timbre change.
    * Utilize the \`setAudioEffectPreset\` method to configure sound effects, genre sound effects, space shaping, and other effects.
    * Apply the \`setVoiceConversionPreset\` method to entirely transform the original voice.
      If the preset effects don't meet your requirements, customize vocal effects using methods such as \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\`.

    Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:

    ### Set audio scenario and audio profile [#set-audio-scenario-and-audio-profile-1]

    For optimal audio quality, take the following steps:

    * Call \`setAudioScenario\` to set the audio scenario to the high-quality scenario \`AgoraAudioScenarioGameStreaming\`.

    * Call \`setAudioProfile\` to set the audio encoding properties to high-quality encoding:

      * For mono transmission, set the profile to \`AgoraAudioProfileMusicHighQuality\`.
      * For stereo transmission, set the profile to \`AgoraAudioProfileMusicHighQualityStereo\`.

    \`\`\`swift
    // Create RtcEngine object
    let agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
    // Set audio scene
    agoraKit.setAudioScenario(.gameStreaming)
    // Set audio encoding properties
    agoraKit.setAudioProfile(.musicHighQaulityStereo)
    \`\`\`

    ### Voice beautifiers [#voice-beautifiers-1]

    Call \`setVoiceBeautifierPreset\` to set music style, space shaping, electronic music and other effects.

    * Chat voice beautifier

      \`\`\`swift
      // Set the voice effect to magnetic (for male voices)
      agoraKit.setVoiceBeautifierPreset(.chatBeautifierMagnetic)

      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)
      \`\`\`

    * Singing voice beautifier

      \`\`\`swift
      // Example 1: Set male voice effect
      // Set to singing beauty voice preset, which can beautify male voices and add small room reverberation effect
      agoraKit.setVoiceBeautifierPreset(.singingBeautifier)
      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)

      // Example 2: Set female voice effects
      // Call the setVoiceBeautifierParameters method to beautify female voices and add hall reverberation effect
      agoraKit.setVoiceBeautifierParameters(.singingBeautifier, 2, 3)
      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)
      \`\`\`

    - Tone change

      \`\`\`swift
      // Set the timbre to thick
      agoraKit.setVoiceBeautifierPreset(.timbreTransformationVigorous)
      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)
      \`\`\`

    ### Sound effects [#sound-effects-1]

    Call the \`setAudioEffectPreset\` method to set music style, space shaping, electronic music, and other effects.

    * Music Style

      \`\`\`swift
      // Set the style to pop
      agoraKit.setAudioEffectPreset(.styleTransformationPopular)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    * Space shaping

      \`\`\`swift
      // Set the space shaping effect to KTV
      agoraKit.setAudioEffectPreset(.roomAcousticKTV)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    * Electronic sound effects

      \`\`\`swift
      // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
      // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
      agoraKit.setAudioEffectPreset(.pitchCorrection)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)

      // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic sound effect
      // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
      agoraKit.setAudioEffectParameters(.pitchCorrection, 2, 6);
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    ### Voice changer effects [#voice-changer-effects]

    To implement basic voice-changing effects, call the \`setAudioEffectPreset\` method. For advanced voice-changing effects, use the \`setVoiceConversionPreset\` method.

    * Basic voice changer

      \`\`\`swift
      // The default voice change effect is a more neutral voice
      agoraKit.setVoiceConversionPreset(.voiceChangerNeutral)
      // Turn off the effect
      agoraKit.setVoiceConversionPreset(.voiceConversionOff)
      \`\`\`

    * Advanced voice changer

      \`\`\`swift
      // Set the voice changer effect to Hulk
      agoraKit.setAudioEffectPreset(.voiceChangerEffectHulk)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    ### Custom audio effects [#custom-audio-effects-1]

    Call \`setLocalVoicePitch\`, \`setLocalVoiceEqualizationOf\`, and \`setLocalVoiceReverbOf\` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:

    \`\`\`swift
    agoraKit.setLocalVoicePitch(1)

    // Set the center frequency of the local voice equalization band
    // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
    // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
    agoraKit.setLocalVoiceEqualizationOf(.band31, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band62, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band125, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band250, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band500, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band1K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band2K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band4K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band8K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band16K, withGain: 0)

    // Original voice intensity, or dry signal, value range [-20,10], unit is dB
    agoraKit.setLocalVoiceReverbOf(.dryLevel, withValue: -1)

    // Early reflection signal strength, or wet signal, value range [-20,10], unit is dB
    agoraKit.setLocalVoiceReverbOf(.wetLevel, withValue: -7)

    // The size of the room for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
    agoraKit.setLocalVoiceReverbOf(.roomSize, withValue: 57)

    // Initial delay length of wet signal, value range: [0,200], unit: ms
    agoraKit.setLocalVoiceReverbOf(.wetDelay, withValue: 135)

    // The strength of the reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
    agoraKit.setLocalVoiceReverbOf(.strength, withValue: 45)
    \`\`\`

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development considerations [#development-considerations-1]

    * Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one.

    * The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see [API reference](#api-reference).

    ### Sample project [#sample-project-1]

    Agora provides an open source [VoiceChanger](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/VoiceChanger) project on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-1]

    #### Audio scenario and audio profile [#audio-scenario-and-audio-profile-1]

    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\))

    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))

    #### Preset voice effects [#preset-voice-effects-1]

    The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details.

    * [\`setVoiceBeautifierPreset\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierpreset\\(_:\\))

    * [\`setVoiceConversionPreset\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvoiceconversionpreset\\(_:\\))

    * [\`setAudioEffectPreset\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectpreset\\(_:\\))

    * [\`setAudioEffectParameters\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectparameters\\(_\\:param1\\:param2:\\))

    * [\`setVoiceBeautifierParameters\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierparameters\\(_\\:param1\\:param2:\\))

    #### Custom voice effects [#custom-voice-effects-1]

    * [\`setLocalVoiceEqualizationOf\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoiceequalizationof\\(_\\:withgain:\\))

    * [\`setLocalVoiceReverbOf\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicereverbof\\(_\\:withvalue:\\))

    * [\`setLocalVoicePitch\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicepitch\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    ## Understand the tech [#understand-the-tech-2]

    Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:

    * **Voice beautifiers**
      * Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition.
      * Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice.
      * Timbre shift: Fine-tune the timbre of a vocal in a specific direction.

    * **Sound effects**
      * Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible.
      * Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source.
      * Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect.

    * **Voice changer**
      * Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition.
      * Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc.

    * **Custom audio effects**
      If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.

    Try the [Online Demo](https://web-cdn.agora.io/marketing/audio_en_v3.html) to experience different voice effects.

    ## Prerequisites [#prerequisites-2]

    Before proceeding with the code examples on this page, make sure you have completed the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) guide.

    ## Implement voice effects [#implement-voice-effects-2]

    This section shows how to use different sound beautifiers to enhance your audio experience.

    Use the following methods to set the desired vocal effects:

    * Call the \`setVoiceBeautifierPreset\` method to apply effects such as chatting bel canto, singing bel canto, and timbre change.
    * Utilize the \`setAudioEffectPreset\` method to configure sound effects, genre sound effects, space shaping, and other effects.
    * Apply the \`setVoiceConversionPreset\` method to entirely transform the original voice.
      If the preset effects don't meet your requirements, customize vocal effects using methods such as \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\`.

    Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:

    ### Set audio scenario and audio profile [#set-audio-scenario-and-audio-profile-2]

    For optimal audio quality, take the following steps:

    * Call \`setAudioScenario\` to set the audio scenario to the high-quality scenario \`AgoraAudioScenarioGameStreaming\`.

    * Call \`setAudioProfile\` to set the audio encoding properties to high-quality encoding:

      * For mono transmission, set the profile to \`AgoraAudioProfileMusicHighQuality\`.
      * For stereo transmission, set the profile to \`AgoraAudioProfileMusicHighQualityStereo\`.

    \`\`\`swift
    // Create RtcEngine object
    let agoraKit = AgoraRtcEngineKit.sharedEngine(with: config, delegate: self)
    // Set audio scene
    agoraKit.setAudioScenario(.gameStreaming)
    // Set audio encoding properties
    agoraKit.setAudioProfile(.musicHighQaulityStereo)
    \`\`\`

    ### Voice beautifiers [#voice-beautifiers-2]

    Call \`setVoiceBeautifierPreset\` to set music style, space shaping, electronic music and other effects.

    * Chat voice beautifier

      \`\`\`swift
      // Set the voice effect to magnetic (for male voices)
      agoraKit.setVoiceBeautifierPreset(.chatBeautifierMagnetic)

      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)
      \`\`\`

    * Singing voice beautifier

      \`\`\`swift
      // Example 1: Set male voice effect
      // Set to singing beauty voice preset, which can beautify male voices and add small room reverberation effect
      agoraKit.setVoiceBeautifierPreset(.singingBeautifier)
      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)

      // Example 2: Set female voice effects
      // Call the setVoiceBeautifierParameters method to beautify female voices and add hall reverberation effect
      agoraKit.setVoiceBeautifierParameters(.singingBeautifier, 2, 3)
      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)
      \`\`\`

    - Tone change

      \`\`\`swift
      // Set the timbre to thick
      agoraKit.setVoiceBeautifierPreset(.timbreTransformationVigorous)
      // Turn off the effect
      agoraKit.setVoiceBeautifierPreset(.voiceBeautifierOff)
      \`\`\`

    ### Sound effects [#sound-effects-2]

    Call the \`setAudioEffectPreset\` method to set music style, space shaping, electronic music, and other effects.

    * Music Style

      \`\`\`swift
      // Set the style to pop
      agoraKit.setAudioEffectPreset(.styleTransformationPopular)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    * Space shaping

      \`\`\`swift
      // Set the space shaping effect to KTV
      agoraKit.setAudioEffectPreset(.roomAcousticKTV)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    * Electronic sound effects

      \`\`\`swift
      // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
      // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
      agoraKit.setAudioEffectPreset(.pitchCorrection)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)

      // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic sound effect
      // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
      agoraKit.setAudioEffectParameters(.pitchCorrection, 2, 6);
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    ### Voice changer effects [#voice-changer-effects-1]

    To implement basic voice-changing effects, call the \`setAudioEffectPreset\` method. For advanced voice-changing effects, use the \`setVoiceConversionPreset\` method.

    * Basic voice changer

      \`\`\`swift
      // The default voice change effect is a more neutral voice
      agoraKit.setVoiceConversionPreset(.voiceChangerNeutral)
      // Turn off the effect
      agoraKit.setVoiceConversionPreset(.voiceConversionOff)
      \`\`\`

    * Advanced voice changer

      \`\`\`swift
      // Set the voice changer effect to Hulk
      agoraKit.setAudioEffectPreset(.voiceChangerEffectHulk)
      // Turn off the effect
      agoraKit.setAudioEffectPreset(.audioEffectOff)
      \`\`\`

    ### Custom audio effects [#custom-audio-effects-2]

    Call \`setLocalVoicePitch\`, \`setLocalVoiceEqualizationOf\`, and \`setLocalVoiceReverbOf\` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:

    \`\`\`swift
    agoraKit.setLocalVoicePitch(1)

    // Set the center frequency of the local voice equalization band
    // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
    // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
    agoraKit.setLocalVoiceEqualizationOf(.band31, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band62, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band125, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band250, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band500, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band1K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band2K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band4K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band8K, withGain: 0)
    agoraKit.setLocalVoiceEqualizationOf(.band16K, withGain: 0)

    // Original voice intensity, or dry signal, value range [-20,10], unit is dB
    agoraKit.setLocalVoiceReverbOf(.dryLevel, withValue: -1)

    // Early reflection signal strength, or wet signal, value range [-20,10], unit is dB
    agoraKit.setLocalVoiceReverbOf(.wetLevel, withValue: -7)

    // The size of the room for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
    agoraKit.setLocalVoiceReverbOf(.roomSize, withValue: 57)

    // Initial delay length of wet signal, value range: [0,200], unit: ms
    agoraKit.setLocalVoiceReverbOf(.wetDelay, withValue: 135)

    // The strength of the reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
    agoraKit.setLocalVoiceReverbOf(.strength, withValue: 45)
    \`\`\`

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development considerations [#development-considerations-2]

    * Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one.

    * The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see [API reference](#api-reference).

    ### Sample project [#sample-project-2]

    Agora provides an open source [VoiceChanger](https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/VoiceChanger) project on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-2]

    #### Audio scenario and audio profile [#audio-scenario-and-audio-profile-2]

    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile\\(_:\\))

    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario\\(_:\\))

    #### Preset voice effects [#preset-voice-effects-2]

    The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details.

    * [\`setVoiceBeautifierPreset\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierpreset\\(_:\\))

    * [\`setVoiceConversionPreset\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvoiceconversionpreset\\(_:\\))

    * [\`setAudioEffectPreset\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectpreset\\(_:\\))

    * [\`setAudioEffectParameters\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectparameters\\(_\\:param1\\:param2:\\))

    * [\`setVoiceBeautifierParameters\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierparameters\\(_\\:param1\\:param2:\\))

    #### Custom voice effects [#custom-voice-effects-2]

    * [\`setLocalVoiceEqualizationOf\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoiceequalizationof\\(_\\:withgain:\\))

    * [\`setLocalVoiceReverbOf\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicereverbof\\(_\\:withvalue:\\))

    * [\`setLocalVoicePitch\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicepitch\\(_:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="windows" />

    ## Understand the tech [#understand-the-tech-3]

    Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:

    * **Voice beautifiers**
      * Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition.
      * Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice.
      * Timbre shift: Fine-tune the timbre of a vocal in a specific direction.

    * **Sound effects**
      * Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible.
      * Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source.
      * Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect.

    * **Voice changer**
      * Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition.
      * Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc.

    * **Custom audio effects**
      If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.

    Try the [Online Demo](https://web-cdn.agora.io/marketing/audio_en_v3.html) to experience different voice effects.

    ## Prerequisites [#prerequisites-3]

    Before proceeding with the code examples on this page, make sure you have completed the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) guide.

    ## Implement voice effects [#implement-voice-effects-3]

    This section shows how to use different sound beautifiers to enhance your audio experience.

    Use the following methods to set the desired vocal effects:

    * Call the \`setVoiceBeautifierPreset\` method to apply effects such as chatting bel canto, singing bel canto, and timbre change.
    * Utilize the \`setAudioEffectPreset\` method to configure sound effects, genre sound effects, space shaping, and other effects.
    * Apply the \`setVoiceConversionPreset\` method to entirely transform the original voice.
      If the preset effects don't meet your requirements, customize vocal effects using methods such as \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\`.

    Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:

    ### Set audio scenario and audio profile [#set-audio-scenario-and-audio-profile-3]

    For optimal audio quality, take the following steps:

    * Call \`setAudioScenario\` to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\`.
    * Call \`setAudioProfile\` to set the audio encoding properties to high-quality encoding:

      * For mono transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\`.
      * For stereo transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO\`.

      \`\`\`cpp
      // Create RtcEngine object
      m_rtcEngine = createAgoraRtcEngine();
      // Set the audio scenario
      m_rtcEngine->setAudioScenario(AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);
      // Set audio encoding properties
      m_rtcEngine->setAudioProfile(AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);
      \`\`\`

    ### Voice beautifiers [#voice-beautifiers-3]

    Call \`setVoiceBeautifierPreset\` to set music style, space shaping, electronic music and other effects.

    * Chat voice beautifier

      \`\`\`cpp
      // Set the vocal effect to magnetic (for male voices)
      m_rtcEngine->setVoiceBeautifierPreset(CHAT_BEAUTIFIER_MAGNETIC);

      // Turn off the effect
      m_rtcEngine->setVoiceBeautifierPreset(VOICE_BEAUTIFIER_OFF);
      \`\`\`

    * Singing voice beautifier

      \`\`\`cpp
      // Example 1: Set male voice effect
      // Set the singing voice preset to beautify the male voice and add a small room reverberation effect
      m_rtcEngine->setVoiceBeautifierPreset(SINGING_BEAUTIFIER);
      // Turn off the effect
      m_rtcEngine->setVoiceBeautifierPreset(VOICE_BEAUTIFIER_OFF);

      // Example 2: Set female voice effect
      // Call the setVoiceBeautifierParameters method to beautify female voice and add hall reverberation effect
      m_rtcEngine->setVoiceBeautifierParameters(SINGING_BEAUTIFIER, 2, 3);
      // Turn off the effect
      m_rtcEngine->setVoiceBeautifierPreset(VOICE_BEAUTIFIER_OFF);
      \`\`\`

    - Tone change

      \`\`\`cpp
      // Set the timbre to thick
      m_rtcEngine->setVoiceBeautifierPreset(TIMBRE_TRANSFORMATION_VIGOROUS);
      // Turn off the effect
      m_rtcEngine->setVoiceBeautifierPreset(VOICE_BEAUTIFIER_OFF);
      \`\`\`

    ### Sound effects [#sound-effects-3]

    Call \`setAudioEffectPreset\` to set music style, space shaping, electronic music and other effects.

    * Music Style

      \`\`\`cpp
      // Set the music style to pop
      m_rtcEngine->setAudioEffectPreset(STYLE_TRANSFORMATION_POPULAR);
      // Turn off the effect
      m_rtcEngine->setAudioEffectPreset(AUDIO_EFFECT_OFF);
      \`\`\`

    * Space shaping

      \`\`\`cpp
      // Set the space shaping effect to the effect in KTV
      m_rtcEngine->setAudioEffectPreset(ROOM_ACOUSTICS_KTV);
      // Turn off the effect
      m_rtcEngine->setAudioEffectPreset(AUDIO_EFFECT_OFF);
      \`\`\`

    * Electronic sound effects

      \`\`\`cpp
      // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
      // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
      m_rtcEngine->setAudioEffectPreset(PITCH_CORRECTION);
      // Turn off the effect
      m_rtcEngine->setAudioEffectPreset(AUDIO_EFFECT_OFF);

      // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect
      // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
      m_rtcEngine->setAudioEffectParameters(PITCH_CORRECTION, 2, 6);
      // Turn off the effect
      m_rtcEngine->setAudioEffectPreset(AUDIO_EFFECT_OFF);
      \`\`\`

    ### Voice change effects [#voice-change-effects-1]

    To implement basic voice-changing effects, call the \`setAudioEffectPreset\` method. For advanced voice-changing effects, use the \`setVoiceConversionPreset\` method.

    * Basic voice changer

      \`\`\`cpp
      // Set the voice changer to a more neutral sound
      m_rtcEngine->setVoiceConversionPreset(VOICE_CHANGER_NEUTRAL);
      // Turn off the effect
      m_rtcEngine->setVoiceConversionPreset(VOICE_CONVERSION_OFF);
      \`\`\`

    * Advanced voice changer

      \`\`\`cpp
      // Set the vocal effect to 'Hulk'
      m_rtcEngine->setAudioEffectPreset(VOICE_CHANGER_EFFECT_HULK);
      // Turn off the effect
      m_rtcEngine->setAudioEffectPreset(AUDIO_EFFECT_OFF);
      \`\`\`

    ### Custom audio effects [#custom-audio-effects-3]

    Call \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:

    \`\`\`cpp
    m_rtcEngine->setLocalVoicePitch(0.5);

    // Set the center frequency of the local voice equalization band
    // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
    // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_31, -15);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_62, 3);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_125, -9);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_250, -8);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_500, -6);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_1K, -4);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_2K, -3);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_4K, -2);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_8K, -1);
    m_rtcEngine->setLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_16K, 1);

    // Original voice intensity, or dry signal, value range [-20,10], unit is dB
    m_rtcEngine->setLocalVoiceReverb(AUDIO_REVERB_DRY_LEVEL, 10);

    // Early reflection signal intensity, or wet signal, value range [-20,10], unit is dB
    m_rtcEngine->setLocalVoiceReverb(AUDIO_REVERB_WET_LEVEL, 7);

    // The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
    m_rtcEngine->setLocalVoiceReverb(AUDIO_REVERB_ROOM_SIZE, 6);

    // Initial delay length of wet signal, value range: [0,200], unit: ms
    m_rtcEngine->setLocalVoiceReverb(AUDIO_REVERB_WET_DELAY, 124);

    // The strength of the reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
    m_rtcEngine->setLocalVoiceReverb(AUDIO_REVERB_STRENGTH, 78);
    \`\`\`

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development considerations [#development-considerations-3]

    * Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one.

    * The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other voice methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details.

    ### Sample project [#sample-project-3]

    Agora provides an open source [BeautyAudio project](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/BeautyAudio) on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-3]

    #### Audio scenario and audio profile [#audio-scenario-and-audio-profile-3]

    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2)

    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    #### Preset voice effects [#preset-voice-effects-3]

    * [\`setVoiceBeautifierPreset\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset)

    * [\`setVoiceConversionPreset\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset)

    * [\`setAudioEffectPreset\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset)

    * [\`setAudioEffectParameters\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters)

    * [\`setVoiceBeautifierParameters\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters)

    #### Custom voice effects [#custom-voice-effects-3]

    * [\`setLocalVoiceEqualization\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization)

    * [\`setLocalVoiceReverb\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb)

    * [\`setLocalVoicePitch\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="electron" />

    ## Understand the tech [#understand-the-tech-4]

    Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:

    * **Voice beautifiers**
      * Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition.
      * Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice.
      * Timbre shift: Fine-tune the timbre of a vocal in a specific direction.

    * **Sound effects**
      * Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible.
      * Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source.
      * Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect.

    * **Voice changer**
      * Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition.
      * Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc.

    * **Custom audio effects**
      If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.

    Try the [Online Demo](https://web-cdn.agora.io/marketing/audio_en_v3.html) to experience different voice effects.

    ## Prerequisites [#prerequisites-4]

    Before proceeding with the code examples on this page, make sure you have completed the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) guide.

    ## Implement voice effects [#implement-voice-effects-4]

    This section shows how to use different sound beautifiers to enhance your audio experience.

    Use the following methods to set the desired vocal effects:

    * Call the \`setVoiceBeautifierPreset\` method to apply effects such as chatting bel canto, singing bel canto, and timbre change.
    * Utilize the \`setAudioEffectPreset\` method to configure sound effects, genre sound effects, space shaping, and other effects.
    * Apply the \`setVoiceConversionPreset\` method to entirely transform the original voice.
      If the preset effects don't meet your requirements, customize vocal effects using methods such as \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\`.

    Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:

    ### Set audio scenario and audio profile [#set-audio-scenario-and-audio-profile-4]

    For optimal audio quality, take the following steps:

    * Call [setAudioScenario](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AudioScenarioGameStreaming\`.
    * Call [setAudioProfile](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile) to set the audio encoding properties to high-quality encoding:

      * For mono transmission, set the profile to \`AudioProfileMusicHighQuality\`.
      * For stereo transmission, set the profile to \`AudioProfileMusicHighQualityStereo\`

    \`\`\`javascript
    // Create a RtcEngine object
    rtcEngine = createAgoraRtcEngine();
    // Set the audio scene audio scene settings
    rtcEngine.setAudioScenario(AudioScenarioType.AudioScenarioGameStreaming);
    // Set audio encoding properties
    rtcEngine.setAudioProfile(AudioProfileType.AudioProfileMusicHighQualityStereo);
    \`\`\`

    ### Voice beautifiers [#voice-beautifiers-4]

    Call \`setVoiceBeautifierPreset\` to set music style, space shaping, electronic music, and other effects.

    * Chat voice beautifier

      \`\`\`javascript
      // Set the vocal effect to magnetic (for male voices)
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.ChatBeautifierMagnetic);

      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);
      \`\`\`

    * Singing voice beautifier

      \`\`\`javascript
      // Example 1: Set male voice effect
      // Set the singing voice preset to beautify the male voice and add a small room reverberation effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.SingingBeautifier);
      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);

      // Example 2: Set female voice effect
      // Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect
      rtcEngine.setVoiceBeautifierParameters(VoiceBeautifierPreset.SingingBeautifier, 2, 3);
      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);
      \`\`\`

    - Tone change

      \`\`\`javascript
      // Set the timbre to be thick
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.TimbreTransformationVigorous);
      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);
      \`\`\`

    ### Sound Effects [#sound-effects-4]

    Call \`setAudioEffectPreset\` to set music style, space shaping, electronic music and other effects.

    * Music Style

      \`\`\`javascript
      // Set the style to pop
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.StyleTransformationPopular);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    * Space shaping

      \`\`\`javascript
      // Set the space shaping effect to KTV
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.RoomAcousticsKtv);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    * Electronic sound effects

      \`\`\`javascript
      // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
      // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.PitchCorrection);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);

      // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect
      // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
      rtcEngine.setAudioEffectParameters(AudioEffectPreset.PitchCorrection, 2, 6);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    ### Voice change effects [#voice-change-effects-2]

    To implement basic voice-changing effects, call the \`setAudioEffectPreset\` method. For advanced voice-changing effects, use the \`setVoiceConversionPreset\` method.

    * Basic voice changer

      \`\`\`javascript
      // Set the voice change effect to a more neutral voice
      rtcEngine.setVoiceConversionPreset(VoiceConversionPreset.VoiceChangerNeutral);
      // Turn off the effect
      rtcEngine.setVoiceConversionPreset(VoiceConversionPreset.VoiceConversionOff);
      \`\`\`

    * Advanced voice changer

      \`\`\`javascript
      // Set the vocal effect to 'Hulk'
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.VoiceChangerEffectHulk);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    ### Custom audio effects [#custom-audio-effects-4]

    Call \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:

    \`\`\`javascript
    rtcEngine.setLocalVoicePitch(0.5);

    // Set the center frequency of the local voice equalization band
    // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
    // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand31, -15);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand62, 3);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand125, -9);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand250, -8);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand500, -6);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand1k, -4);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand2k, -3);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand4k, -2);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand8k, -1);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand16k, 1);

    // Original voice intensity or dry signal, value range [-20,10], unit is dB
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbDryLevel, 10);

    // Early reflection signal intensity or wet signal, value range [-20,10], unit is dB
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbWetLevel, 7);

    // The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbRoomSize, 6);

    // Initial delay length of wet signal, value range: [0,200], unit: ms
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbWetDelay, 124);

    // The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbStrength, 78);
    \`\`\`

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development considerations [#development-considerations-4]

    * Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one.

    * The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see [API reference](#api-reference).

    ### Sample project [#sample-project-4]

    Agora provides an open source [Voice effects project](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/VoiceChanger/VoiceChanger.tsx) on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-4]

    #### Audio scenario and audio profile [#audio-scenario-and-audio-profile-4]

    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile)

    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    #### Preset voice effects [#preset-voice-effects-4]

    * [\`setVoiceBeautifierPreset\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset)

    * [\`setAudioEffectPreset\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset)

    * [\`setVoiceConversionPreset\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset)

    * [\`setAudioEffectParameters\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters)

    * [\`setVoiceBeautifierParameters\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters)

    #### Custom voice effects [#custom-voice-effects-4]

    * [\`setLocalVoiceEqualization\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization)

    * [\`setLocalVoiceReverb\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb)

    * [\`setLocalVoicePitch\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="react-native" />

    ## Understand the tech [#understand-the-tech-5]

    Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:

    * **Voice beautifiers**
      * Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition.
      * Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice.
      * Timbre shift: Fine-tune the timbre of a vocal in a specific direction.

    * **Sound effects**
      * Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible.
      * Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source.
      * Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect.

    * **Voice changer**
      * Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition.
      * Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc.

    * **Custom audio effects**
      If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.

    Try the [Online Demo](https://web-cdn.agora.io/marketing/audio_en_v3.html) to experience different voice effects.

    ## Prerequisites [#prerequisites-5]

    Before proceeding with the code examples on this page, make sure you have completed the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) guide.

    ## Implement voice effects [#implement-voice-effects-5]

    This section shows how to use different sound beautifiers to enhance your audio experience.

    Use the following methods to set the desired vocal effects:

    * Call the \`setVoiceBeautifierPreset\` method to apply effects such as chatting bel canto, singing bel canto, and timbre change.
    * Utilize the \`setAudioEffectPreset\` method to configure sound effects, genre sound effects, space shaping, and other effects.
    * Apply the \`setVoiceConversionPreset\` method to entirely transform the original voice.
      If the preset effects don't meet your requirements, customize vocal effects using methods such as \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\`.

    Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:

    ### Set audio scenario and audio profile [#set-audio-scenario-and-audio-profile-5]

    For optimal audio quality, take the following steps:

    * Call [setAudioScenario](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AudioScenarioGameStreaming\`.
    * Call [setAudioProfile](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile) to set the audio encoding properties to high-quality encoding:

      * For mono transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\`.
      * For stereo transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO\`

    \`\`\`javascript
    // Create a RtcEngine object
    rtcEngine = createAgoraRtcEngine();
    // Set the audio scenario
    rtcEngine.setAudioScenario(AudioScenarioType.AudioScenarioGameStreaming);
    // Set audio encoding properties
    rtcEngine.setAudioProfile(AudioProfileType.AudioProfileMusicHighQualityStereo);
    \`\`\`

    ### Voice beautifiers [#voice-beautifiers-5]

    Call \`setVoiceBeautifierPreset\` to set music style, space shaping, electronic music, and other effects.

    * Chat voice beautifier

      \`\`\`javascript
      // Set the vocal effect to magnetic (for male voices)
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.ChatBeautifierMagnetic);

      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);
      \`\`\`

    * Singing voice beautifier

      \`\`\`javascript
      // Example 1: Set male voice effect
      // Set the singing voice preset to beautify the male voice and add a small room reverberation effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.SingingBeautifier);
      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);

      // Example 2: Set female voice effect
      // Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect
      rtcEngine.setVoiceBeautifierParameters(VoiceBeautifierPreset.SingingBeautifier, 2, 3);
      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);
      \`\`\`

    - Tone change

      \`\`\`javascript
      // Set the timbre to thick
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.TimbreTransformationVigorous);
      // Turn off the effect
      rtcEngine.setVoiceBeautifierPreset(VoiceBeautifierPreset.VoiceBeautifierOff);
      \`\`\`

    ### Sound Effects [#sound-effects-5]

    Call \`setAudioEffectPreset\` to set music style, space shaping, electronic music and other effects.

    * Music Style

      \`\`\`javascript
      // Set the style to pop
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.StyleTransformationPopular);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    * Space shaping

      \`\`\`javascript
      // Set the space shaping effect to KTV
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.RoomAcousticsKtv);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    * Electronic sound effects

      \`\`\`javascript
      // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
      // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.PitchCorrection);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);

      // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect
      // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
      rtcEngine.setAudioEffectParameters(AudioEffectPreset.PitchCorrection, 2, 6);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    ### Voice change effects [#voice-change-effects-3]

    To implement basic voice-changing effects, call the \`setAudioEffectPreset\` method. For advanced voice-changing effects, use the \`setVoiceConversionPreset\` method.

    * Basic voice changer

      \`\`\`javascript
      // Set the voice changer to a more neutral voice
      rtcEngine.setVoiceConversionPreset(VoiceConversionPreset.VoiceChangerNeutral);
      // Turn off the effect
      rtcEngine.setVoiceConversionPreset(VoiceConversionPreset.VoiceConversionOff);
      \`\`\`

    * Advanced voice changer

      \`\`\`javascript
      // Set the vocal effect to 'Hulk'
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.VoiceChangerEffectHulk);
      // Turn off the effect
      rtcEngine.setAudioEffectPreset(AudioEffectPreset.AudioEffectOff);
      \`\`\`

    ### Custom audio effects [#custom-audio-effects-5]

    Call \`setLocalVoicePitch\`, \`setLocalVoiceEqualization\`, and \`setLocalVoiceReverb\` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:

    \`\`\`javascript
    rtcEngine.setLocalVoicePitch(0.5);

    // Set the center frequency of the local voice equalization band
    // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
    // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand31, -15);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand62, 3);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand125, -9);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand250, -8);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand500, -6);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand1k, -4);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand2k, -3);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand4k, -2);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand8k, -1);
    rtcEngine.setLocalVoiceEqualization(AudioEqualizationBandFrequency.AudioEqualizationBand16k, 1);

    // Original voice intensity or dry signal, value range [-20,10], unit is dB
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbDryLevel, 10);

    // Early reflection signal intensity or wet signal, value range [-20,10], unit is dB
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbWetLevel, 7);

    // The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbRoomSize, 6);

    // Initial delay length of wet signal, value range: [0,200], unit: ms
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbWetDelay, 124);

    // The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
    rtcEngine.setLocalVoiceReverb(AudioReverbType.AudioReverbStrength, 78);
    \`\`\`

    ## Reference [#reference-5]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development considerations [#development-considerations-5]

    * Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one.

    * The enumerations in \`setVoiceBeautifierPreset\`, \`setAudioEffectPreset\`, \`setVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see [API reference](#api-reference).

    ### Sample project [#sample-project-5]

    Agora provides an open source [Voice effects project](https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/VoiceChanger/VoiceChanger.tsx) on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-5]

    #### Audio scenario and audio profile [#audio-scenario-and-audio-profile-5]

    * [\`setAudioProfile\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile)

    * [\`setAudioScenario\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    #### Preset voice effects [#preset-voice-effects-5]

    * [\`setVoiceBeautifierPreset\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset)

    * [\`setVoiceConversionPreset\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset)

    * [\`setAudioEffectPreset\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset)

    * [\`setAudioEffectParameters\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters)

    * [\`setVoiceBeautifierParameters\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters)

    #### Custom voice effects [#custom-voice-effects-5]

    * [\`setLocalVoiceEqualization\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization)

    * [\`setLocalVoiceReverb\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb)

    * [\`setLocalVoicePitch\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="unity" />

    ## Understand the tech [#understand-the-tech-6]

    Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:

    * **Voice beautifiers**
      * Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition.
      * Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice.
      * Timbre shift: Fine-tune the timbre of a vocal in a specific direction.

    * **Sound effects**
      * Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible.
      * Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source.
      * Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect.

    * **Voice changer**
      * Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition.
      * Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc.

    * **Custom audio effects**
      If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.

    Try the [Online Demo](https://web-cdn.agora.io/marketing/audio_en_v3.html) to experience different voice effects.

    ## Prerequisites [#prerequisites-6]

    Before proceeding with the code examples on this page, make sure you have completed the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) guide.

    ## Implement voice effects [#implement-voice-effects-6]

    This section shows how to use different sound beautifiers to enhance your audio experience.

    Use the following methods to set the desired vocal effects:

    * Call the \`SetVoiceBeautifierPreset\` method to apply effects such as chatting bel canto, singing bel canto, and timbre change.
    * Utilize the \`SetAudioEffectPreset\` method to configure sound effects, genre sound effects, space shaping, and other effects.
    * Apply the \`SetVoiceConversionPreset\` method to entirely transform the original voice.
      If the preset effects don't meet your requirements, customize vocal effects using methods such as \`SetLocalVoicePitch\`, \`SetLocalVoiceEqualization\`, and \`SetLocalVoiceReverb\`.

    Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:

    ### Set audio scenario and audio profile [#set-audio-scenario-and-audio-profile-6]

    For optimal audio quality, take the following steps:

    * Call [SetAudioScenario](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to set the audio scenario to high-quality \`AUDIO_SCENARIO_GAME_STREAMING\`.
    * Call [SetAudioProfile](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile) to set the audio encoding properties to high-quality encoding:

      * For mono transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY\`.
      * For stereo transmission, set the profile to \`AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO\`

    <CalloutContainer type="info">
      <CalloutDescription>
        Set the audio scene and encoding properties after calling [CreateAgoraRtcEngine](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario) to create the \`IRtcEngine\` object.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`csharp
    // Set the audio scenario
    RtcEngine.SetAudioScenario(AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING);
    // Set the audio encoding properties
    RtcEngine.SetAudioProfile(AUDIO_PROFILE_TYPE.AUDIO_PROFILE_MUSIC_HIGH_QUALITY);

    \`\`\`

    ### Voice beautifiers [#voice-beautifiers-6]

    Call \`SetVoiceBeautifierPreset\` to set music style, space shaping, electronic music, and other effects.

    * Chat voice beautifier

      \`\`\`csharp
      // Set the vocal effect to magnetic (for male voices)
      RtcEngine.SetVoiceBeautifierPreset(VOICE_BEAUTIFIER_PRESET.CHAT_BEAUTIFIER_MAGNETIC);

      // Turn off the effect 
      RtcEngine.SetVoiceBeautifierPreset(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);

      \`\`\`

    * Singing voice beautifier

      \`\`\`csharp
      // Example 1: Set male voice effect
      // Set the singing voice preset to beautify the male voice and add a small room reverberation effect
      RtcEngine.SetVoiceBeautifierPreset(VOICE_BEAUTIFIER_PRESET.SINGING_BEAUTIFIER);
      // Turn off the effect
      RtcEngine.SetVoiceBeautifierPreset(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);

      // Example 2: Set female voice effect
      // Call the SetVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect
      RtcEngine.SetVoiceBeautifierParameters(VOICE_BEAUTIFIER_PRESET.SINGING_BEAUTIFIER, 2, 3);
      // Turn off the effect
      RtcEngine.SetVoiceBeautifierPreset(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);
      \`\`\`

    - Tone change

      \`\`\`csharp
      // Set the timbre to thick
      RtcEngine.SetVoiceBeautifierPreset(VOICE_BEAUTIFIER_PRESET.TIMBRE_TRANSFORMATION_VIGOROUS);
      // Turn off the effect
      RtcEngine.SetVoiceBeautifierPreset(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);
      \`\`\`

    ### Sound effects [#sound-effects-6]

    Call \`SetAudioEffectPreset\` to set music style, space shaping, electronic music and other effects.

    * Music Style

      \`\`\`csharp
      // Set the style to pop
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.STYLE_TRANSFORMATION_POPULAR);
      // Turn off the effect
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);
      \`\`\`

    * Space shaping

      \`\`\`csharp
      // Set the space shaping effect to KTV
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.ROOM_ACOUSTICS_KTV);
      // Turn off the effect
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);
      \`\`\`

    * Electronic sound effects

      \`\`\`csharp
      // Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect
      // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.PITCH_CORRECTION);
      // Turn off the effect
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);

      // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect
      // Call SetAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D
      RtcEngine.SetAudioEffectParameters(AUDIO_EFFECT_PRESET.PITCH_CORRECTION, 2, 6);
      // Turn off the effect
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);
      \`\`\`

    ### Voice change effects [#voice-change-effects-4]

    To implement basic voice-changing effects, call the \`SetAudioEffectPreset\` method. For advanced voice-changing effects, use the \`SetVoiceConversionPreset\` method.

    * Basic voice changer

      \`\`\`csharp
      // Set the voice changer to a more neutral voice
      RtcEngine.SetVoiceConversionPreset(VOICE_CONVERSION_PRESET.VOICE_CHANGER_NEUTRAL);
      // Turn off the effect
      RtcEngine.SetVoiceConversionPreset(VOICE_CONVERSION_PRESET.VOICE_CONVERSION_OFF);
      \`\`\`

    * Advanced voice changer

      \`\`\`csharp
      // Set the vocal effect to 'Hulk'
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.VOICE_CHANGER_EFFECT_HULK);
      // Turn off the effect
      RtcEngine.SetAudioEffectPreset(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);
      \`\`\`

    ### Custom audio effects [#custom-audio-effects-6]

    Call \`SetLocalVoicePitch\`, \`SetLocalVoiceEqualization\`, and \`SetLocalVoiceReverb\` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:

    \`\`\`csharp
    RtcEngine.SetLocalVoicePitch(0.5);

     // Set the center frequency of the local voice equalization band
      // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz
      // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_31, -15);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_62, 3);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_125, -9);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_250, -8);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_500, -6);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_1K, -4);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_2K, -3);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_4K, -2);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_8K, -1);
    RtcEngine.SetLocalVoiceEqualization(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_16K, 1);

    // Original voice intensity or dry signal, value range [-20,10], unit is dB
    RtcEngine.SetLocalVoiceReverb(AUDIO_REVERB_TYPE.AUDIO_REVERB_DRY_LEVEL, 10);

    // Early reflection signal intensity or wet signal, value range [-20,10], unit is dB
    RtcEngine.SetLocalVoiceReverb(AUDIO_REVERB_TYPE.AUDIO_REVERB_WET_LEVEL, 7);

    // The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]
    RtcEngine.SetLocalVoiceReverb(AUDIO_REVERB_TYPE.AUDIO_REVERB_ROOM_SIZE, 6);

    // Initial delay length of wet signal, value range: [0,200], unit: ms
    RtcEngine.SetLocalVoiceReverb(AUDIO_REVERB_TYPE.AUDIO_REVERB_WET_DELAY, 124);

    // The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect
    RtcEngine.SetLocalVoiceReverb(AUDIO_REVERB_TYPE.AUDIO_REVERB_STRENGTH, 78);
    \`\`\`

    ## Reference [#reference-6]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Development considerations [#development-considerations-6]

    * Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one.

    * The enumerations in \`SetVoiceBeautifierPreset\`, \`SetAudioEffectPreset\`, \`SetVoiceConversionPreset\`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see [API reference](#api-reference).

    ### Sample project [#sample-project-6]

    Agora provides an open source [Voice effects project](https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/VoiceChanger/VoiceChanger.cs) on GitHub for your reference. Download or view the source code for a more detailed example.

    ### API reference [#api-reference-6]

    #### Audio scenario and audio profile [#audio-scenario-and-audio-profile-6]

    * [\`SetAudioProfile\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile)

    * [\`SetAudioScenario\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario)

    #### Preset voice effects [#preset-voice-effects-6]

    * [\`SetVoiceBeautifierPreset\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset)

    * [\`SetVoiceConversionPreset\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset)

    * [\`SetAudioEffectPreset\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset)

    * [\`SetAudioEffectParameters\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters)

    * [\`SetVoiceBeautifierParameters\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters)

    #### Custom voice effects [#custom-voice-effects-6]

    * [\`SetLocalVoiceEqualization\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization)

    * [\`SetLocalVoiceReverb\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb)

    * [\`SetLocalVoicePitch\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "RTC SDK makes it simple for you to publish audio captured through the microphone to subscribers in a channel. In some cases, users want to modify the captured audio to add voice effects, or change the voice quality before the audio is published. RTC SDK provides several options that enable you to apply voice effects. This page shows you how to implement these features in your channel."
  }, {
    heading: "understand-the-tech",
    content: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
  }, {
    heading: "understand-the-tech",
    content: "**Voice beautifiers**"
  }, {
    heading: "understand-the-tech",
    content: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
  }, {
    heading: "understand-the-tech",
    content: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
  }, {
    heading: "understand-the-tech",
    content: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
  }, {
    heading: "understand-the-tech",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech",
    content: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
  }, {
    heading: "understand-the-tech",
    content: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
  }, {
    heading: "understand-the-tech",
    content: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
  }, {
    heading: "understand-the-tech",
    content: "**Voice changer**"
  }, {
    heading: "understand-the-tech",
    content: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
  }, {
    heading: "understand-the-tech",
    content: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
  }, {
    heading: "understand-the-tech",
    content: `**Custom audio effects**
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`
  }, {
    heading: "understand-the-tech",
    content: "Try the Online Demo to experience different voice effects."
  }, {
    heading: "prerequisites",
    content: "Before proceeding with the code examples on this page, make sure you have completed the SDK quickstart guide."
  }, {
    heading: "implement-voice-effects",
    content: "This section shows how to use different sound beautifiers to enhance your audio experience."
  }, {
    heading: "implement-voice-effects",
    content: "Use the following methods to set the desired vocal effects:"
  }, {
    heading: "implement-voice-effects",
    content: "Call the `setVoiceBeautifierPreset` method to apply effects such as chatting bel canto, singing bel canto, and timbre change."
  }, {
    heading: "implement-voice-effects",
    content: "Utilize the `setAudioEffectPreset` method to configure sound effects, genre sound effects, space shaping, and other effects."
  }, {
    heading: "implement-voice-effects",
    content: "Apply the `setVoiceConversionPreset` method to entirely transform the original voice.\nIf the preset effects don't meet your requirements, customize vocal effects using methods such as `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb`."
  }, {
    heading: "implement-voice-effects",
    content: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile",
    content: "For optimal audio quality, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile",
    content: "Call setAudioScenario to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING`."
  }, {
    heading: "set-audio-scenario-and-audio-profile",
    content: "Call setAudioProfile to set the audio encoding properties to high-quality encoding:"
  }, {
    heading: "set-audio-scenario-and-audio-profile",
    content: "For mono transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY`."
  }, {
    heading: "set-audio-scenario-and-audio-profile",
    content: "For stereo transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO`"
  }, {
    heading: "voice-beautifiers",
    content: "Call `setVoiceBeautifierPreset` to set music style, space shaping, electronic music, and other effects."
  }, {
    heading: "voice-beautifiers",
    content: "Chat voice beautifier"
  }, {
    heading: "voice-beautifiers",
    content: "Singing voice beautifier"
  }, {
    heading: "voice-beautifiers",
    content: "Tone change"
  }, {
    heading: "sound-effects",
    content: "Call `setAudioEffectPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "sound-effects",
    content: "Music Style"
  }, {
    heading: "sound-effects",
    content: "Space shaping"
  }, {
    heading: "sound-effects",
    content: "Electronic sound effects"
  }, {
    heading: "voice-change-effects",
    content: "To implement basic voice-changing effects, call the `setAudioEffectPreset` method. For advanced voice-changing effects, use the `setVoiceConversionPreset` method."
  }, {
    heading: "voice-change-effects",
    content: "Basic voice changer"
  }, {
    heading: "voice-change-effects",
    content: "Advanced voice changer"
  }, {
    heading: "custom-audio-effects",
    content: "Call `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-considerations",
    content: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
  }, {
    heading: "development-considerations",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see API reference."
  }, {
    heading: "sample-project",
    content: "Agora provides an open source Voice effects project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "audio-scenario-and-audio-profile",
    content: "`setAudioProfile`"
  }, {
    heading: "audio-scenario-and-audio-profile",
    content: "`setAudioScenario`"
  }, {
    heading: "preset-voice-effects",
    content: "`setVoiceBeautifierPreset`"
  }, {
    heading: "preset-voice-effects",
    content: "`setAudioEffectPreset`"
  }, {
    heading: "preset-voice-effects",
    content: "`setVoiceConversionPreset`"
  }, {
    heading: "preset-voice-effects",
    content: "`setAudioEffectParameters`"
  }, {
    heading: "preset-voice-effects",
    content: "`setVoiceBeautifierParameters`"
  }, {
    heading: "custom-voice-effects",
    content: "`setLocalVoiceEqualization`"
  }, {
    heading: "custom-voice-effects",
    content: "`setLocalVoiceReverb`"
  }, {
    heading: "custom-voice-effects",
    content: "`setLocalVoicePitch`"
  }, {
    heading: "understand-the-tech-1",
    content: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
  }, {
    heading: "understand-the-tech-1",
    content: "**Voice beautifiers**"
  }, {
    heading: "understand-the-tech-1",
    content: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
  }, {
    heading: "understand-the-tech-1",
    content: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
  }, {
    heading: "understand-the-tech-1",
    content: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
  }, {
    heading: "understand-the-tech-1",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-1",
    content: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
  }, {
    heading: "understand-the-tech-1",
    content: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
  }, {
    heading: "understand-the-tech-1",
    content: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
  }, {
    heading: "understand-the-tech-1",
    content: "**Voice changer**"
  }, {
    heading: "understand-the-tech-1",
    content: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
  }, {
    heading: "understand-the-tech-1",
    content: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
  }, {
    heading: "understand-the-tech-1",
    content: `**Custom audio effects**
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`
  }, {
    heading: "understand-the-tech-1",
    content: "Try the Online Demo to experience different voice effects."
  }, {
    heading: "prerequisites-1",
    content: "Before proceeding with the code examples on this page, make sure you have completed the SDK quickstart guide."
  }, {
    heading: "implement-voice-effects-1",
    content: "This section shows how to use different sound beautifiers to enhance your audio experience."
  }, {
    heading: "implement-voice-effects-1",
    content: "Use the following methods to set the desired vocal effects:"
  }, {
    heading: "implement-voice-effects-1",
    content: "Call the `setVoiceBeautifierPreset` method to apply effects such as chatting bel canto, singing bel canto, and timbre change."
  }, {
    heading: "implement-voice-effects-1",
    content: "Utilize the `setAudioEffectPreset` method to configure sound effects, genre sound effects, space shaping, and other effects."
  }, {
    heading: "implement-voice-effects-1",
    content: "Apply the `setVoiceConversionPreset` method to entirely transform the original voice.\nIf the preset effects don't meet your requirements, customize vocal effects using methods such as `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb`."
  }, {
    heading: "implement-voice-effects-1",
    content: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-1",
    content: "For optimal audio quality, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-1",
    content: "Call `setAudioScenario` to set the audio scenario to the high-quality scenario `AgoraAudioScenarioGameStreaming`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-1",
    content: "Call `setAudioProfile` to set the audio encoding properties to high-quality encoding:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-1",
    content: "For mono transmission, set the profile to `AgoraAudioProfileMusicHighQuality`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-1",
    content: "For stereo transmission, set the profile to `AgoraAudioProfileMusicHighQualityStereo`."
  }, {
    heading: "voice-beautifiers-1",
    content: "Call `setVoiceBeautifierPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "voice-beautifiers-1",
    content: "Chat voice beautifier"
  }, {
    heading: "voice-beautifiers-1",
    content: "Singing voice beautifier"
  }, {
    heading: "voice-beautifiers-1",
    content: "Tone change"
  }, {
    heading: "sound-effects-1",
    content: "Call the `setAudioEffectPreset` method to set music style, space shaping, electronic music, and other effects."
  }, {
    heading: "sound-effects-1",
    content: "Music Style"
  }, {
    heading: "sound-effects-1",
    content: "Space shaping"
  }, {
    heading: "sound-effects-1",
    content: "Electronic sound effects"
  }, {
    heading: "voice-changer-effects",
    content: "To implement basic voice-changing effects, call the `setAudioEffectPreset` method. For advanced voice-changing effects, use the `setVoiceConversionPreset` method."
  }, {
    heading: "voice-changer-effects",
    content: "Basic voice changer"
  }, {
    heading: "voice-changer-effects",
    content: "Advanced voice changer"
  }, {
    heading: "custom-audio-effects-1",
    content: "Call `setLocalVoicePitch`, `setLocalVoiceEqualizationOf`, and `setLocalVoiceReverbOf` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-considerations-1",
    content: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
  }, {
    heading: "development-considerations-1",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see API reference."
  }, {
    heading: "sample-project-1",
    content: "Agora provides an open source VoiceChanger project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "audio-scenario-and-audio-profile-1",
    content: "`setAudioProfile`"
  }, {
    heading: "audio-scenario-and-audio-profile-1",
    content: "`setAudioScenario`"
  }, {
    heading: "preset-voice-effects-1",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details."
  }, {
    heading: "preset-voice-effects-1",
    content: "`setVoiceBeautifierPreset`"
  }, {
    heading: "preset-voice-effects-1",
    content: "`setVoiceConversionPreset`"
  }, {
    heading: "preset-voice-effects-1",
    content: "`setAudioEffectPreset`"
  }, {
    heading: "preset-voice-effects-1",
    content: "`setAudioEffectParameters`"
  }, {
    heading: "preset-voice-effects-1",
    content: "`setVoiceBeautifierParameters`"
  }, {
    heading: "custom-voice-effects-1",
    content: "`setLocalVoiceEqualizationOf`"
  }, {
    heading: "custom-voice-effects-1",
    content: "`setLocalVoiceReverbOf`"
  }, {
    heading: "custom-voice-effects-1",
    content: "`setLocalVoicePitch`"
  }, {
    heading: "understand-the-tech-2",
    content: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
  }, {
    heading: "understand-the-tech-2",
    content: "**Voice beautifiers**"
  }, {
    heading: "understand-the-tech-2",
    content: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
  }, {
    heading: "understand-the-tech-2",
    content: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
  }, {
    heading: "understand-the-tech-2",
    content: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
  }, {
    heading: "understand-the-tech-2",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-2",
    content: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
  }, {
    heading: "understand-the-tech-2",
    content: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
  }, {
    heading: "understand-the-tech-2",
    content: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
  }, {
    heading: "understand-the-tech-2",
    content: "**Voice changer**"
  }, {
    heading: "understand-the-tech-2",
    content: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
  }, {
    heading: "understand-the-tech-2",
    content: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
  }, {
    heading: "understand-the-tech-2",
    content: `**Custom audio effects**
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`
  }, {
    heading: "understand-the-tech-2",
    content: "Try the Online Demo to experience different voice effects."
  }, {
    heading: "prerequisites-2",
    content: "Before proceeding with the code examples on this page, make sure you have completed the SDK quickstart guide."
  }, {
    heading: "implement-voice-effects-2",
    content: "This section shows how to use different sound beautifiers to enhance your audio experience."
  }, {
    heading: "implement-voice-effects-2",
    content: "Use the following methods to set the desired vocal effects:"
  }, {
    heading: "implement-voice-effects-2",
    content: "Call the `setVoiceBeautifierPreset` method to apply effects such as chatting bel canto, singing bel canto, and timbre change."
  }, {
    heading: "implement-voice-effects-2",
    content: "Utilize the `setAudioEffectPreset` method to configure sound effects, genre sound effects, space shaping, and other effects."
  }, {
    heading: "implement-voice-effects-2",
    content: "Apply the `setVoiceConversionPreset` method to entirely transform the original voice.\nIf the preset effects don't meet your requirements, customize vocal effects using methods such as `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb`."
  }, {
    heading: "implement-voice-effects-2",
    content: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-2",
    content: "For optimal audio quality, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-2",
    content: "Call `setAudioScenario` to set the audio scenario to the high-quality scenario `AgoraAudioScenarioGameStreaming`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-2",
    content: "Call `setAudioProfile` to set the audio encoding properties to high-quality encoding:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-2",
    content: "For mono transmission, set the profile to `AgoraAudioProfileMusicHighQuality`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-2",
    content: "For stereo transmission, set the profile to `AgoraAudioProfileMusicHighQualityStereo`."
  }, {
    heading: "voice-beautifiers-2",
    content: "Call `setVoiceBeautifierPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "voice-beautifiers-2",
    content: "Chat voice beautifier"
  }, {
    heading: "voice-beautifiers-2",
    content: "Singing voice beautifier"
  }, {
    heading: "voice-beautifiers-2",
    content: "Tone change"
  }, {
    heading: "sound-effects-2",
    content: "Call the `setAudioEffectPreset` method to set music style, space shaping, electronic music, and other effects."
  }, {
    heading: "sound-effects-2",
    content: "Music Style"
  }, {
    heading: "sound-effects-2",
    content: "Space shaping"
  }, {
    heading: "sound-effects-2",
    content: "Electronic sound effects"
  }, {
    heading: "voice-changer-effects-1",
    content: "To implement basic voice-changing effects, call the `setAudioEffectPreset` method. For advanced voice-changing effects, use the `setVoiceConversionPreset` method."
  }, {
    heading: "voice-changer-effects-1",
    content: "Basic voice changer"
  }, {
    heading: "voice-changer-effects-1",
    content: "Advanced voice changer"
  }, {
    heading: "custom-audio-effects-2",
    content: "Call `setLocalVoicePitch`, `setLocalVoiceEqualizationOf`, and `setLocalVoiceReverbOf` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-considerations-2",
    content: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
  }, {
    heading: "development-considerations-2",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see API reference."
  }, {
    heading: "sample-project-2",
    content: "Agora provides an open source VoiceChanger project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "audio-scenario-and-audio-profile-2",
    content: "`setAudioProfile`"
  }, {
    heading: "audio-scenario-and-audio-profile-2",
    content: "`setAudioScenario`"
  }, {
    heading: "preset-voice-effects-2",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details."
  }, {
    heading: "preset-voice-effects-2",
    content: "`setVoiceBeautifierPreset`"
  }, {
    heading: "preset-voice-effects-2",
    content: "`setVoiceConversionPreset`"
  }, {
    heading: "preset-voice-effects-2",
    content: "`setAudioEffectPreset`"
  }, {
    heading: "preset-voice-effects-2",
    content: "`setAudioEffectParameters`"
  }, {
    heading: "preset-voice-effects-2",
    content: "`setVoiceBeautifierParameters`"
  }, {
    heading: "custom-voice-effects-2",
    content: "`setLocalVoiceEqualizationOf`"
  }, {
    heading: "custom-voice-effects-2",
    content: "`setLocalVoiceReverbOf`"
  }, {
    heading: "custom-voice-effects-2",
    content: "`setLocalVoicePitch`"
  }, {
    heading: "understand-the-tech-3",
    content: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
  }, {
    heading: "understand-the-tech-3",
    content: "**Voice beautifiers**"
  }, {
    heading: "understand-the-tech-3",
    content: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
  }, {
    heading: "understand-the-tech-3",
    content: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
  }, {
    heading: "understand-the-tech-3",
    content: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
  }, {
    heading: "understand-the-tech-3",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-3",
    content: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
  }, {
    heading: "understand-the-tech-3",
    content: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
  }, {
    heading: "understand-the-tech-3",
    content: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
  }, {
    heading: "understand-the-tech-3",
    content: "**Voice changer**"
  }, {
    heading: "understand-the-tech-3",
    content: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
  }, {
    heading: "understand-the-tech-3",
    content: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
  }, {
    heading: "understand-the-tech-3",
    content: `**Custom audio effects**
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`
  }, {
    heading: "understand-the-tech-3",
    content: "Try the Online Demo to experience different voice effects."
  }, {
    heading: "prerequisites-3",
    content: "Before proceeding with the code examples on this page, make sure you have completed the SDK quickstart guide."
  }, {
    heading: "implement-voice-effects-3",
    content: "This section shows how to use different sound beautifiers to enhance your audio experience."
  }, {
    heading: "implement-voice-effects-3",
    content: "Use the following methods to set the desired vocal effects:"
  }, {
    heading: "implement-voice-effects-3",
    content: "Call the `setVoiceBeautifierPreset` method to apply effects such as chatting bel canto, singing bel canto, and timbre change."
  }, {
    heading: "implement-voice-effects-3",
    content: "Utilize the `setAudioEffectPreset` method to configure sound effects, genre sound effects, space shaping, and other effects."
  }, {
    heading: "implement-voice-effects-3",
    content: "Apply the `setVoiceConversionPreset` method to entirely transform the original voice.\nIf the preset effects don't meet your requirements, customize vocal effects using methods such as `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb`."
  }, {
    heading: "implement-voice-effects-3",
    content: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-3",
    content: "For optimal audio quality, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-3",
    content: "Call `setAudioScenario` to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-3",
    content: "Call `setAudioProfile` to set the audio encoding properties to high-quality encoding:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-3",
    content: "For mono transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-3",
    content: "For stereo transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO`."
  }, {
    heading: "voice-beautifiers-3",
    content: "Call `setVoiceBeautifierPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "voice-beautifiers-3",
    content: "Chat voice beautifier"
  }, {
    heading: "voice-beautifiers-3",
    content: "Singing voice beautifier"
  }, {
    heading: "voice-beautifiers-3",
    content: "Tone change"
  }, {
    heading: "sound-effects-3",
    content: "Call `setAudioEffectPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "sound-effects-3",
    content: "Music Style"
  }, {
    heading: "sound-effects-3",
    content: "Space shaping"
  }, {
    heading: "sound-effects-3",
    content: "Electronic sound effects"
  }, {
    heading: "voice-change-effects-1",
    content: "To implement basic voice-changing effects, call the `setAudioEffectPreset` method. For advanced voice-changing effects, use the `setVoiceConversionPreset` method."
  }, {
    heading: "voice-change-effects-1",
    content: "Basic voice changer"
  }, {
    heading: "voice-change-effects-1",
    content: "Advanced voice changer"
  }, {
    heading: "custom-audio-effects-3",
    content: "Call `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-considerations-3",
    content: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
  }, {
    heading: "development-considerations-3",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other voice methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details."
  }, {
    heading: "sample-project-3",
    content: "Agora provides an open source BeautyAudio project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "audio-scenario-and-audio-profile-3",
    content: "`setAudioProfile`"
  }, {
    heading: "audio-scenario-and-audio-profile-3",
    content: "`setAudioScenario`"
  }, {
    heading: "preset-voice-effects-3",
    content: "`setVoiceBeautifierPreset`"
  }, {
    heading: "preset-voice-effects-3",
    content: "`setVoiceConversionPreset`"
  }, {
    heading: "preset-voice-effects-3",
    content: "`setAudioEffectPreset`"
  }, {
    heading: "preset-voice-effects-3",
    content: "`setAudioEffectParameters`"
  }, {
    heading: "preset-voice-effects-3",
    content: "`setVoiceBeautifierParameters`"
  }, {
    heading: "custom-voice-effects-3",
    content: "`setLocalVoiceEqualization`"
  }, {
    heading: "custom-voice-effects-3",
    content: "`setLocalVoiceReverb`"
  }, {
    heading: "custom-voice-effects-3",
    content: "`setLocalVoicePitch`"
  }, {
    heading: "understand-the-tech-4",
    content: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
  }, {
    heading: "understand-the-tech-4",
    content: "**Voice beautifiers**"
  }, {
    heading: "understand-the-tech-4",
    content: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
  }, {
    heading: "understand-the-tech-4",
    content: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
  }, {
    heading: "understand-the-tech-4",
    content: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
  }, {
    heading: "understand-the-tech-4",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-4",
    content: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
  }, {
    heading: "understand-the-tech-4",
    content: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
  }, {
    heading: "understand-the-tech-4",
    content: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
  }, {
    heading: "understand-the-tech-4",
    content: "**Voice changer**"
  }, {
    heading: "understand-the-tech-4",
    content: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
  }, {
    heading: "understand-the-tech-4",
    content: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
  }, {
    heading: "understand-the-tech-4",
    content: `**Custom audio effects**
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`
  }, {
    heading: "understand-the-tech-4",
    content: "Try the Online Demo to experience different voice effects."
  }, {
    heading: "prerequisites-4",
    content: "Before proceeding with the code examples on this page, make sure you have completed the SDK quickstart guide."
  }, {
    heading: "implement-voice-effects-4",
    content: "This section shows how to use different sound beautifiers to enhance your audio experience."
  }, {
    heading: "implement-voice-effects-4",
    content: "Use the following methods to set the desired vocal effects:"
  }, {
    heading: "implement-voice-effects-4",
    content: "Call the `setVoiceBeautifierPreset` method to apply effects such as chatting bel canto, singing bel canto, and timbre change."
  }, {
    heading: "implement-voice-effects-4",
    content: "Utilize the `setAudioEffectPreset` method to configure sound effects, genre sound effects, space shaping, and other effects."
  }, {
    heading: "implement-voice-effects-4",
    content: "Apply the `setVoiceConversionPreset` method to entirely transform the original voice.\nIf the preset effects don't meet your requirements, customize vocal effects using methods such as `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb`."
  }, {
    heading: "implement-voice-effects-4",
    content: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-4",
    content: "For optimal audio quality, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-4",
    content: "Call setAudioScenario to set the audio scenario to high-quality `AudioScenarioGameStreaming`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-4",
    content: "Call setAudioProfile to set the audio encoding properties to high-quality encoding:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-4",
    content: "For mono transmission, set the profile to `AudioProfileMusicHighQuality`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-4",
    content: "For stereo transmission, set the profile to `AudioProfileMusicHighQualityStereo`"
  }, {
    heading: "voice-beautifiers-4",
    content: "Call `setVoiceBeautifierPreset` to set music style, space shaping, electronic music, and other effects."
  }, {
    heading: "voice-beautifiers-4",
    content: "Chat voice beautifier"
  }, {
    heading: "voice-beautifiers-4",
    content: "Singing voice beautifier"
  }, {
    heading: "voice-beautifiers-4",
    content: "Tone change"
  }, {
    heading: "sound-effects-4",
    content: "Call `setAudioEffectPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "sound-effects-4",
    content: "Music Style"
  }, {
    heading: "sound-effects-4",
    content: "Space shaping"
  }, {
    heading: "sound-effects-4",
    content: "Electronic sound effects"
  }, {
    heading: "voice-change-effects-2",
    content: "To implement basic voice-changing effects, call the `setAudioEffectPreset` method. For advanced voice-changing effects, use the `setVoiceConversionPreset` method."
  }, {
    heading: "voice-change-effects-2",
    content: "Basic voice changer"
  }, {
    heading: "voice-change-effects-2",
    content: "Advanced voice changer"
  }, {
    heading: "custom-audio-effects-4",
    content: "Call `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-considerations-4",
    content: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
  }, {
    heading: "development-considerations-4",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see API reference."
  }, {
    heading: "sample-project-4",
    content: "Agora provides an open source Voice effects project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "audio-scenario-and-audio-profile-4",
    content: "`setAudioProfile`"
  }, {
    heading: "audio-scenario-and-audio-profile-4",
    content: "`setAudioScenario`"
  }, {
    heading: "preset-voice-effects-4",
    content: "`setVoiceBeautifierPreset`"
  }, {
    heading: "preset-voice-effects-4",
    content: "`setAudioEffectPreset`"
  }, {
    heading: "preset-voice-effects-4",
    content: "`setVoiceConversionPreset`"
  }, {
    heading: "preset-voice-effects-4",
    content: "`setAudioEffectParameters`"
  }, {
    heading: "preset-voice-effects-4",
    content: "`setVoiceBeautifierParameters`"
  }, {
    heading: "custom-voice-effects-4",
    content: "`setLocalVoiceEqualization`"
  }, {
    heading: "custom-voice-effects-4",
    content: "`setLocalVoiceReverb`"
  }, {
    heading: "custom-voice-effects-4",
    content: "`setLocalVoicePitch`"
  }, {
    heading: "understand-the-tech-5",
    content: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
  }, {
    heading: "understand-the-tech-5",
    content: "**Voice beautifiers**"
  }, {
    heading: "understand-the-tech-5",
    content: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
  }, {
    heading: "understand-the-tech-5",
    content: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
  }, {
    heading: "understand-the-tech-5",
    content: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
  }, {
    heading: "understand-the-tech-5",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-5",
    content: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
  }, {
    heading: "understand-the-tech-5",
    content: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
  }, {
    heading: "understand-the-tech-5",
    content: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
  }, {
    heading: "understand-the-tech-5",
    content: "**Voice changer**"
  }, {
    heading: "understand-the-tech-5",
    content: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
  }, {
    heading: "understand-the-tech-5",
    content: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
  }, {
    heading: "understand-the-tech-5",
    content: `**Custom audio effects**
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`
  }, {
    heading: "understand-the-tech-5",
    content: "Try the Online Demo to experience different voice effects."
  }, {
    heading: "prerequisites-5",
    content: "Before proceeding with the code examples on this page, make sure you have completed the SDK quickstart guide."
  }, {
    heading: "implement-voice-effects-5",
    content: "This section shows how to use different sound beautifiers to enhance your audio experience."
  }, {
    heading: "implement-voice-effects-5",
    content: "Use the following methods to set the desired vocal effects:"
  }, {
    heading: "implement-voice-effects-5",
    content: "Call the `setVoiceBeautifierPreset` method to apply effects such as chatting bel canto, singing bel canto, and timbre change."
  }, {
    heading: "implement-voice-effects-5",
    content: "Utilize the `setAudioEffectPreset` method to configure sound effects, genre sound effects, space shaping, and other effects."
  }, {
    heading: "implement-voice-effects-5",
    content: "Apply the `setVoiceConversionPreset` method to entirely transform the original voice.\nIf the preset effects don't meet your requirements, customize vocal effects using methods such as `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb`."
  }, {
    heading: "implement-voice-effects-5",
    content: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-5",
    content: "For optimal audio quality, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-5",
    content: "Call setAudioScenario to set the audio scenario to high-quality `AudioScenarioGameStreaming`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-5",
    content: "Call setAudioProfile to set the audio encoding properties to high-quality encoding:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-5",
    content: "For mono transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-5",
    content: "For stereo transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO`"
  }, {
    heading: "voice-beautifiers-5",
    content: "Call `setVoiceBeautifierPreset` to set music style, space shaping, electronic music, and other effects."
  }, {
    heading: "voice-beautifiers-5",
    content: "Chat voice beautifier"
  }, {
    heading: "voice-beautifiers-5",
    content: "Singing voice beautifier"
  }, {
    heading: "voice-beautifiers-5",
    content: "Tone change"
  }, {
    heading: "sound-effects-5",
    content: "Call `setAudioEffectPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "sound-effects-5",
    content: "Music Style"
  }, {
    heading: "sound-effects-5",
    content: "Space shaping"
  }, {
    heading: "sound-effects-5",
    content: "Electronic sound effects"
  }, {
    heading: "voice-change-effects-3",
    content: "To implement basic voice-changing effects, call the `setAudioEffectPreset` method. For advanced voice-changing effects, use the `setVoiceConversionPreset` method."
  }, {
    heading: "voice-change-effects-3",
    content: "Basic voice changer"
  }, {
    heading: "voice-change-effects-3",
    content: "Advanced voice changer"
  }, {
    heading: "custom-audio-effects-5",
    content: "Call `setLocalVoicePitch`, `setLocalVoiceEqualization`, and `setLocalVoiceReverb` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"
  }, {
    heading: "reference-5",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-considerations-5",
    content: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
  }, {
    heading: "development-considerations-5",
    content: "The enumerations in `setVoiceBeautifierPreset`, `setAudioEffectPreset`, `setVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see API reference."
  }, {
    heading: "sample-project-5",
    content: "Agora provides an open source Voice effects project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "audio-scenario-and-audio-profile-5",
    content: "`setAudioProfile`"
  }, {
    heading: "audio-scenario-and-audio-profile-5",
    content: "`setAudioScenario`"
  }, {
    heading: "preset-voice-effects-5",
    content: "`setVoiceBeautifierPreset`"
  }, {
    heading: "preset-voice-effects-5",
    content: "`setVoiceConversionPreset`"
  }, {
    heading: "preset-voice-effects-5",
    content: "`setAudioEffectPreset`"
  }, {
    heading: "preset-voice-effects-5",
    content: "`setAudioEffectParameters`"
  }, {
    heading: "preset-voice-effects-5",
    content: "`setVoiceBeautifierParameters`"
  }, {
    heading: "custom-voice-effects-5",
    content: "`setLocalVoiceEqualization`"
  }, {
    heading: "custom-voice-effects-5",
    content: "`setLocalVoiceReverb`"
  }, {
    heading: "custom-voice-effects-5",
    content: "`setLocalVoicePitch`"
  }, {
    heading: "understand-the-tech-6",
    content: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
  }, {
    heading: "understand-the-tech-6",
    content: "**Voice beautifiers**"
  }, {
    heading: "understand-the-tech-6",
    content: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
  }, {
    heading: "understand-the-tech-6",
    content: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
  }, {
    heading: "understand-the-tech-6",
    content: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
  }, {
    heading: "understand-the-tech-6",
    content: "**Sound effects**"
  }, {
    heading: "understand-the-tech-6",
    content: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
  }, {
    heading: "understand-the-tech-6",
    content: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
  }, {
    heading: "understand-the-tech-6",
    content: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
  }, {
    heading: "understand-the-tech-6",
    content: "**Voice changer**"
  }, {
    heading: "understand-the-tech-6",
    content: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
  }, {
    heading: "understand-the-tech-6",
    content: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
  }, {
    heading: "understand-the-tech-6",
    content: `**Custom audio effects**
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`
  }, {
    heading: "understand-the-tech-6",
    content: "Try the Online Demo to experience different voice effects."
  }, {
    heading: "prerequisites-6",
    content: "Before proceeding with the code examples on this page, make sure you have completed the SDK quickstart guide."
  }, {
    heading: "implement-voice-effects-6",
    content: "This section shows how to use different sound beautifiers to enhance your audio experience."
  }, {
    heading: "implement-voice-effects-6",
    content: "Use the following methods to set the desired vocal effects:"
  }, {
    heading: "implement-voice-effects-6",
    content: "Call the `SetVoiceBeautifierPreset` method to apply effects such as chatting bel canto, singing bel canto, and timbre change."
  }, {
    heading: "implement-voice-effects-6",
    content: "Utilize the `SetAudioEffectPreset` method to configure sound effects, genre sound effects, space shaping, and other effects."
  }, {
    heading: "implement-voice-effects-6",
    content: "Apply the `SetVoiceConversionPreset` method to entirely transform the original voice.\nIf the preset effects don't meet your requirements, customize vocal effects using methods such as `SetLocalVoicePitch`, `SetLocalVoiceEqualization`, and `SetLocalVoiceReverb`."
  }, {
    heading: "implement-voice-effects-6",
    content: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-6",
    content: "For optimal audio quality, take the following steps:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-6",
    content: "Call SetAudioScenario to set the audio scenario to high-quality `AUDIO_SCENARIO_GAME_STREAMING`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-6",
    content: "Call SetAudioProfile to set the audio encoding properties to high-quality encoding:"
  }, {
    heading: "set-audio-scenario-and-audio-profile-6",
    content: "For mono transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY`."
  }, {
    heading: "set-audio-scenario-and-audio-profile-6",
    content: "For stereo transmission, set the profile to `AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO`"
  }, {
    heading: "set-audio-scenario-and-audio-profile-6",
    content: "Set the audio scene and encoding properties after calling CreateAgoraRtcEngine to create the `IRtcEngine` object."
  }, {
    heading: "voice-beautifiers-6",
    content: "Call `SetVoiceBeautifierPreset` to set music style, space shaping, electronic music, and other effects."
  }, {
    heading: "voice-beautifiers-6",
    content: "Chat voice beautifier"
  }, {
    heading: "voice-beautifiers-6",
    content: "Singing voice beautifier"
  }, {
    heading: "voice-beautifiers-6",
    content: "Tone change"
  }, {
    heading: "sound-effects-6",
    content: "Call `SetAudioEffectPreset` to set music style, space shaping, electronic music and other effects."
  }, {
    heading: "sound-effects-6",
    content: "Music Style"
  }, {
    heading: "sound-effects-6",
    content: "Space shaping"
  }, {
    heading: "sound-effects-6",
    content: "Electronic sound effects"
  }, {
    heading: "voice-change-effects-4",
    content: "To implement basic voice-changing effects, call the `SetAudioEffectPreset` method. For advanced voice-changing effects, use the `SetVoiceConversionPreset` method."
  }, {
    heading: "voice-change-effects-4",
    content: "Basic voice changer"
  }, {
    heading: "voice-change-effects-4",
    content: "Advanced voice changer"
  }, {
    heading: "custom-audio-effects-6",
    content: "Call `SetLocalVoicePitch`, `SetLocalVoiceEqualization`, and `SetLocalVoiceReverb` to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"
  }, {
    heading: "reference-6",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "development-considerations-6",
    content: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
  }, {
    heading: "development-considerations-6",
    content: "The enumerations in `SetVoiceBeautifierPreset`, `SetAudioEffectPreset`, `SetVoiceConversionPreset`, and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see API reference."
  }, {
    heading: "sample-project-6",
    content: "Agora provides an open source Voice effects project on GitHub for your reference. Download or view the source code for a more detailed example."
  }, {
    heading: "audio-scenario-and-audio-profile-6",
    content: "`SetAudioProfile`"
  }, {
    heading: "audio-scenario-and-audio-profile-6",
    content: "`SetAudioScenario`"
  }, {
    heading: "preset-voice-effects-6",
    content: "`SetVoiceBeautifierPreset`"
  }, {
    heading: "preset-voice-effects-6",
    content: "`SetVoiceConversionPreset`"
  }, {
    heading: "preset-voice-effects-6",
    content: "`SetAudioEffectPreset`"
  }, {
    heading: "preset-voice-effects-6",
    content: "`SetAudioEffectParameters`"
  }, {
    heading: "preset-voice-effects-6",
    content: "`SetVoiceBeautifierParameters`"
  }, {
    heading: "custom-voice-effects-6",
    content: "`SetLocalVoiceEqualization`"
  }, {
    heading: "custom-voice-effects-6",
    content: "`SetLocalVoiceReverb`"
  }, {
    heading: "custom-voice-effects-6",
    content: "`SetLocalVoicePitch`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-voice-effects",
    content: "Implement voice effects"
  }, {
    id: "set-audio-scenario-and-audio-profile",
    content: "Set audio scenario and audio profile"
  }, {
    id: "voice-beautifiers",
    content: "Voice beautifiers"
  }, {
    id: "sound-effects",
    content: "Sound effects"
  }, {
    id: "voice-change-effects",
    content: "Voice change effects"
  }, {
    id: "custom-audio-effects",
    content: "Custom audio effects"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "development-considerations",
    content: "Development considerations"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "audio-scenario-and-audio-profile",
    content: "Audio scenario and audio profile"
  }, {
    id: "preset-voice-effects",
    content: "Preset voice effects"
  }, {
    id: "custom-voice-effects",
    content: "Custom voice effects"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implement-voice-effects-1",
    content: "Implement voice effects"
  }, {
    id: "set-audio-scenario-and-audio-profile-1",
    content: "Set audio scenario and audio profile"
  }, {
    id: "voice-beautifiers-1",
    content: "Voice beautifiers"
  }, {
    id: "sound-effects-1",
    content: "Sound effects"
  }, {
    id: "voice-changer-effects",
    content: "Voice changer effects"
  }, {
    id: "custom-audio-effects-1",
    content: "Custom audio effects"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "development-considerations-1",
    content: "Development considerations"
  }, {
    id: "sample-project-1",
    content: "Sample project"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "audio-scenario-and-audio-profile-1",
    content: "Audio scenario and audio profile"
  }, {
    id: "preset-voice-effects-1",
    content: "Preset voice effects"
  }, {
    id: "custom-voice-effects-1",
    content: "Custom voice effects"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implement-voice-effects-2",
    content: "Implement voice effects"
  }, {
    id: "set-audio-scenario-and-audio-profile-2",
    content: "Set audio scenario and audio profile"
  }, {
    id: "voice-beautifiers-2",
    content: "Voice beautifiers"
  }, {
    id: "sound-effects-2",
    content: "Sound effects"
  }, {
    id: "voice-changer-effects-1",
    content: "Voice changer effects"
  }, {
    id: "custom-audio-effects-2",
    content: "Custom audio effects"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "development-considerations-2",
    content: "Development considerations"
  }, {
    id: "sample-project-2",
    content: "Sample project"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "audio-scenario-and-audio-profile-2",
    content: "Audio scenario and audio profile"
  }, {
    id: "preset-voice-effects-2",
    content: "Preset voice effects"
  }, {
    id: "custom-voice-effects-2",
    content: "Custom voice effects"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implement-voice-effects-3",
    content: "Implement voice effects"
  }, {
    id: "set-audio-scenario-and-audio-profile-3",
    content: "Set audio scenario and audio profile"
  }, {
    id: "voice-beautifiers-3",
    content: "Voice beautifiers"
  }, {
    id: "sound-effects-3",
    content: "Sound effects"
  }, {
    id: "voice-change-effects-1",
    content: "Voice change effects"
  }, {
    id: "custom-audio-effects-3",
    content: "Custom audio effects"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "development-considerations-3",
    content: "Development considerations"
  }, {
    id: "sample-project-3",
    content: "Sample project"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "audio-scenario-and-audio-profile-3",
    content: "Audio scenario and audio profile"
  }, {
    id: "preset-voice-effects-3",
    content: "Preset voice effects"
  }, {
    id: "custom-voice-effects-3",
    content: "Custom voice effects"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "prerequisites-4",
    content: "Prerequisites"
  }, {
    id: "implement-voice-effects-4",
    content: "Implement voice effects"
  }, {
    id: "set-audio-scenario-and-audio-profile-4",
    content: "Set audio scenario and audio profile"
  }, {
    id: "voice-beautifiers-4",
    content: "Voice beautifiers"
  }, {
    id: "sound-effects-4",
    content: "Sound Effects"
  }, {
    id: "voice-change-effects-2",
    content: "Voice change effects"
  }, {
    id: "custom-audio-effects-4",
    content: "Custom audio effects"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "development-considerations-4",
    content: "Development considerations"
  }, {
    id: "sample-project-4",
    content: "Sample project"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "audio-scenario-and-audio-profile-4",
    content: "Audio scenario and audio profile"
  }, {
    id: "preset-voice-effects-4",
    content: "Preset voice effects"
  }, {
    id: "custom-voice-effects-4",
    content: "Custom voice effects"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implement-voice-effects-5",
    content: "Implement voice effects"
  }, {
    id: "set-audio-scenario-and-audio-profile-5",
    content: "Set audio scenario and audio profile"
  }, {
    id: "voice-beautifiers-5",
    content: "Voice beautifiers"
  }, {
    id: "sound-effects-5",
    content: "Sound Effects"
  }, {
    id: "voice-change-effects-3",
    content: "Voice change effects"
  }, {
    id: "custom-audio-effects-5",
    content: "Custom audio effects"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "development-considerations-5",
    content: "Development considerations"
  }, {
    id: "sample-project-5",
    content: "Sample project"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "audio-scenario-and-audio-profile-5",
    content: "Audio scenario and audio profile"
  }, {
    id: "preset-voice-effects-5",
    content: "Preset voice effects"
  }, {
    id: "custom-voice-effects-5",
    content: "Custom voice effects"
  }, {
    id: "understand-the-tech-6",
    content: "Understand the tech"
  }, {
    id: "prerequisites-6",
    content: "Prerequisites"
  }, {
    id: "implement-voice-effects-6",
    content: "Implement voice effects"
  }, {
    id: "set-audio-scenario-and-audio-profile-6",
    content: "Set audio scenario and audio profile"
  }, {
    id: "voice-beautifiers-6",
    content: "Voice beautifiers"
  }, {
    id: "sound-effects-6",
    content: "Sound effects"
  }, {
    id: "voice-change-effects-4",
    content: "Voice change effects"
  }, {
    id: "custom-audio-effects-6",
    content: "Custom audio effects"
  }, {
    id: "reference-6",
    content: "Reference"
  }, {
    id: "development-considerations-6",
    content: "Development considerations"
  }, {
    id: "sample-project-6",
    content: "Sample project"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "audio-scenario-and-audio-profile-6",
    content: "Audio scenario and audio profile"
  }, {
    id: "preset-voice-effects-6",
    content: "Preset voice effects"
  }, {
    id: "custom-voice-effects-6",
    content: "Custom voice effects"
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
  url: "#implement-voice-effects",
  title: _jsx(_Fragment, {
    children: "Implement voice effects"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-and-audio-profile",
  title: _jsx(_Fragment, {
    children: "Set audio scenario and audio profile"
  })
}, {
  depth: 3,
  url: "#voice-beautifiers",
  title: _jsx(_Fragment, {
    children: "Voice beautifiers"
  })
}, {
  depth: 3,
  url: "#sound-effects",
  title: _jsx(_Fragment, {
    children: "Sound effects"
  })
}, {
  depth: 3,
  url: "#voice-change-effects",
  title: _jsx(_Fragment, {
    children: "Voice change effects"
  })
}, {
  depth: 3,
  url: "#custom-audio-effects",
  title: _jsx(_Fragment, {
    children: "Custom audio effects"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-considerations",
  title: _jsx(_Fragment, {
    children: "Development considerations"
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
  depth: 4,
  url: "#audio-scenario-and-audio-profile",
  title: _jsx(_Fragment, {
    children: "Audio scenario and audio profile"
  })
}, {
  depth: 4,
  url: "#preset-voice-effects",
  title: _jsx(_Fragment, {
    children: "Preset voice effects"
  })
}, {
  depth: 4,
  url: "#custom-voice-effects",
  title: _jsx(_Fragment, {
    children: "Custom voice effects"
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
  url: "#implement-voice-effects-1",
  title: _jsx(_Fragment, {
    children: "Implement voice effects"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-and-audio-profile-1",
  title: _jsx(_Fragment, {
    children: "Set audio scenario and audio profile"
  })
}, {
  depth: 3,
  url: "#voice-beautifiers-1",
  title: _jsx(_Fragment, {
    children: "Voice beautifiers"
  })
}, {
  depth: 3,
  url: "#sound-effects-1",
  title: _jsx(_Fragment, {
    children: "Sound effects"
  })
}, {
  depth: 3,
  url: "#voice-changer-effects",
  title: _jsx(_Fragment, {
    children: "Voice changer effects"
  })
}, {
  depth: 3,
  url: "#custom-audio-effects-1",
  title: _jsx(_Fragment, {
    children: "Custom audio effects"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-considerations-1",
  title: _jsx(_Fragment, {
    children: "Development considerations"
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
  depth: 4,
  url: "#audio-scenario-and-audio-profile-1",
  title: _jsx(_Fragment, {
    children: "Audio scenario and audio profile"
  })
}, {
  depth: 4,
  url: "#preset-voice-effects-1",
  title: _jsx(_Fragment, {
    children: "Preset voice effects"
  })
}, {
  depth: 4,
  url: "#custom-voice-effects-1",
  title: _jsx(_Fragment, {
    children: "Custom voice effects"
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
  url: "#implement-voice-effects-2",
  title: _jsx(_Fragment, {
    children: "Implement voice effects"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-and-audio-profile-2",
  title: _jsx(_Fragment, {
    children: "Set audio scenario and audio profile"
  })
}, {
  depth: 3,
  url: "#voice-beautifiers-2",
  title: _jsx(_Fragment, {
    children: "Voice beautifiers"
  })
}, {
  depth: 3,
  url: "#sound-effects-2",
  title: _jsx(_Fragment, {
    children: "Sound effects"
  })
}, {
  depth: 3,
  url: "#voice-changer-effects-1",
  title: _jsx(_Fragment, {
    children: "Voice changer effects"
  })
}, {
  depth: 3,
  url: "#custom-audio-effects-2",
  title: _jsx(_Fragment, {
    children: "Custom audio effects"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-considerations-2",
  title: _jsx(_Fragment, {
    children: "Development considerations"
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
  depth: 4,
  url: "#audio-scenario-and-audio-profile-2",
  title: _jsx(_Fragment, {
    children: "Audio scenario and audio profile"
  })
}, {
  depth: 4,
  url: "#preset-voice-effects-2",
  title: _jsx(_Fragment, {
    children: "Preset voice effects"
  })
}, {
  depth: 4,
  url: "#custom-voice-effects-2",
  title: _jsx(_Fragment, {
    children: "Custom voice effects"
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
  url: "#implement-voice-effects-3",
  title: _jsx(_Fragment, {
    children: "Implement voice effects"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-and-audio-profile-3",
  title: _jsx(_Fragment, {
    children: "Set audio scenario and audio profile"
  })
}, {
  depth: 3,
  url: "#voice-beautifiers-3",
  title: _jsx(_Fragment, {
    children: "Voice beautifiers"
  })
}, {
  depth: 3,
  url: "#sound-effects-3",
  title: _jsx(_Fragment, {
    children: "Sound effects"
  })
}, {
  depth: 3,
  url: "#voice-change-effects-1",
  title: _jsx(_Fragment, {
    children: "Voice change effects"
  })
}, {
  depth: 3,
  url: "#custom-audio-effects-3",
  title: _jsx(_Fragment, {
    children: "Custom audio effects"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-considerations-3",
  title: _jsx(_Fragment, {
    children: "Development considerations"
  })
}, {
  depth: 3,
  url: "#sample-project-3",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-3",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 4,
  url: "#audio-scenario-and-audio-profile-3",
  title: _jsx(_Fragment, {
    children: "Audio scenario and audio profile"
  })
}, {
  depth: 4,
  url: "#preset-voice-effects-3",
  title: _jsx(_Fragment, {
    children: "Preset voice effects"
  })
}, {
  depth: 4,
  url: "#custom-voice-effects-3",
  title: _jsx(_Fragment, {
    children: "Custom voice effects"
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
  url: "#implement-voice-effects-4",
  title: _jsx(_Fragment, {
    children: "Implement voice effects"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-and-audio-profile-4",
  title: _jsx(_Fragment, {
    children: "Set audio scenario and audio profile"
  })
}, {
  depth: 3,
  url: "#voice-beautifiers-4",
  title: _jsx(_Fragment, {
    children: "Voice beautifiers"
  })
}, {
  depth: 3,
  url: "#sound-effects-4",
  title: _jsx(_Fragment, {
    children: "Sound Effects"
  })
}, {
  depth: 3,
  url: "#voice-change-effects-2",
  title: _jsx(_Fragment, {
    children: "Voice change effects"
  })
}, {
  depth: 3,
  url: "#custom-audio-effects-4",
  title: _jsx(_Fragment, {
    children: "Custom audio effects"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-considerations-4",
  title: _jsx(_Fragment, {
    children: "Development considerations"
  })
}, {
  depth: 3,
  url: "#sample-project-4",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 4,
  url: "#audio-scenario-and-audio-profile-4",
  title: _jsx(_Fragment, {
    children: "Audio scenario and audio profile"
  })
}, {
  depth: 4,
  url: "#preset-voice-effects-4",
  title: _jsx(_Fragment, {
    children: "Preset voice effects"
  })
}, {
  depth: 4,
  url: "#custom-voice-effects-4",
  title: _jsx(_Fragment, {
    children: "Custom voice effects"
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
  url: "#implement-voice-effects-5",
  title: _jsx(_Fragment, {
    children: "Implement voice effects"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-and-audio-profile-5",
  title: _jsx(_Fragment, {
    children: "Set audio scenario and audio profile"
  })
}, {
  depth: 3,
  url: "#voice-beautifiers-5",
  title: _jsx(_Fragment, {
    children: "Voice beautifiers"
  })
}, {
  depth: 3,
  url: "#sound-effects-5",
  title: _jsx(_Fragment, {
    children: "Sound Effects"
  })
}, {
  depth: 3,
  url: "#voice-change-effects-3",
  title: _jsx(_Fragment, {
    children: "Voice change effects"
  })
}, {
  depth: 3,
  url: "#custom-audio-effects-5",
  title: _jsx(_Fragment, {
    children: "Custom audio effects"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-considerations-5",
  title: _jsx(_Fragment, {
    children: "Development considerations"
  })
}, {
  depth: 3,
  url: "#sample-project-5",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 4,
  url: "#audio-scenario-and-audio-profile-5",
  title: _jsx(_Fragment, {
    children: "Audio scenario and audio profile"
  })
}, {
  depth: 4,
  url: "#preset-voice-effects-5",
  title: _jsx(_Fragment, {
    children: "Preset voice effects"
  })
}, {
  depth: 4,
  url: "#custom-voice-effects-5",
  title: _jsx(_Fragment, {
    children: "Custom voice effects"
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
  url: "#implement-voice-effects-6",
  title: _jsx(_Fragment, {
    children: "Implement voice effects"
  })
}, {
  depth: 3,
  url: "#set-audio-scenario-and-audio-profile-6",
  title: _jsx(_Fragment, {
    children: "Set audio scenario and audio profile"
  })
}, {
  depth: 3,
  url: "#voice-beautifiers-6",
  title: _jsx(_Fragment, {
    children: "Voice beautifiers"
  })
}, {
  depth: 3,
  url: "#sound-effects-6",
  title: _jsx(_Fragment, {
    children: "Sound effects"
  })
}, {
  depth: 3,
  url: "#voice-change-effects-4",
  title: _jsx(_Fragment, {
    children: "Voice change effects"
  })
}, {
  depth: 3,
  url: "#custom-audio-effects-6",
  title: _jsx(_Fragment, {
    children: "Custom audio effects"
  })
}, {
  depth: 2,
  url: "#reference-6",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#development-considerations-6",
  title: _jsx(_Fragment, {
    children: "Development considerations"
  })
}, {
  depth: 3,
  url: "#sample-project-6",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 4,
  url: "#audio-scenario-and-audio-profile-6",
  title: _jsx(_Fragment, {
    children: "Audio scenario and audio profile"
  })
}, {
  depth: 4,
  url: "#preset-voice-effects-6",
  title: _jsx(_Fragment, {
    children: "Preset voice effects"
  })
}, {
  depth: 4,
  url: "#custom-voice-effects-6",
  title: _jsx(_Fragment, {
    children: "Custom voice effects"
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
    strong: "strong",
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
      children: "RTC SDK makes it simple for you to publish audio captured through the microphone to subscribers in a channel. In some cases, users want to modify the captured audio to add voice effects, or change the voice quality before the audio is published. RTC SDK provides several options that enable you to apply voice effects. This page shows you how to implement these features in your channel."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios","macos","windows","electron","react-native","unity"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.h2, {
          id: "understand-the-tech",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice beautifiers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
              }), `
`, _jsx(_components.li, {
                children: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
              }), `
`]
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
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
              }), `
`, _jsx(_components.li, {
                children: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
              }), `
`, _jsx(_components.li, {
                children: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice changer"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Custom audio effects"
              }), `
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Try the ", _jsx(_components.a, {
            href: "https://web-cdn.agora.io/marketing/audio_en_v3.html",
            children: "Online Demo"
          }), " to experience different voice effects."]
        }), _jsx(_components.h2, {
          id: "prerequisites",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Before proceeding with the code examples on this page, make sure you have completed the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " guide."]
        }), _jsx(_components.h2, {
          id: "implement-voice-effects",
          children: "Implement voice effects"
        }), _jsx(_components.p, {
          children: "This section shows how to use different sound beautifiers to enhance your audio experience."
        }), _jsx(_components.p, {
          children: "Use the following methods to set the desired vocal effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.code, {
              children: "setVoiceBeautifierPreset"
            }), " method to apply effects such as chatting bel canto, singing bel canto, and timbre change."]
          }), `
`, _jsxs(_components.li, {
            children: ["Utilize the ", _jsx(_components.code, {
              children: "setAudioEffectPreset"
            }), " method to configure sound effects, genre sound effects, space shaping, and other effects."]
          }), `
`, _jsxs(_components.li, {
            children: ["Apply the ", _jsx(_components.code, {
              children: "setVoiceConversionPreset"
            }), ` method to entirely transform the original voice.
If the preset effects don't meet your requirements, customize vocal effects using methods such as `, _jsx(_components.code, {
              children: "setLocalVoicePitch"
            }), ", ", _jsx(_components.code, {
              children: "setLocalVoiceEqualization"
            }), ", and ", _jsx(_components.code, {
              children: "setLocalVoiceReverb"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
        }), _jsx(_components.h3, {
          id: "set-audio-scenario-and-audio-profile",
          children: "Set audio scenario and audio profile"
        }), _jsx(_components.p, {
          children: "For optimal audio quality, take the following steps:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: "setAudioScenario"
              }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
                children: "AUDIO_SCENARIO_GAME_STREAMING"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
                children: "setAudioProfile"
              }), " to set the audio encoding properties to high-quality encoding:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For mono transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["For stereo transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO"
                })]
              }), `
`]
            }), `
`]
          }), `
`]
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
                      children: "// Create the RtcEngine object"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   mRtcEngine "
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   // Set the audio scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   mRtcEngine."
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
                      children: "(Constants.AudioScenario."
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
                      children: "(Constants.AudioScenario.GAME_STREAMING));"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   // Set the audio encoding properties"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   mRtcEngine."
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
                      children: "(Constants.AudioProfile."
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
                      children: "(Constants.AudioProfile.MUSIC_HIGH_QUALITY_STEREO));"
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
                      children: "// Create the RtcEngine object"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   mRtcEngine "
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   // Set the audio scenario"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   mRtcEngine."
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
                      children: "(Constants.AudioScenario."
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
                      children: "(Constants.AudioScenario.GAME_STREAMING))"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "   // Set the audio encoding properties"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "   mRtcEngine."
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
                      children: "(Constants.AudioProfile."
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
                      children: "(Constants.AudioProfile.MUSIC_HIGH_QUALITY_STEREO))"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "voice-beautifiers",
          children: "Voice beautifiers"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), " to set music style, space shaping, electronic music, and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Chat voice beautifier"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Set the vocal effect to magnetic (for male voices)"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.CHAT_BEAUTIFIER_MAGNETIC);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect    "
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF);"
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
                          children: "// Set the vocal effect to magnetic (for male voices)"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.CHAT_BEAUTIFIER_MAGNETIC)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect    "
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Singing voice beautifier"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Example 1: Set male voice effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Set the singing voice preset to beautify the male voice and add a small room reverberation effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.SINGING_BEAUTIFIER);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect "
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF);"
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
                          children: " // Example 2: Set female voice effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierParameters"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.SINGING_BEAUTIFIER, "
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "3"
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
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF);"
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
                          children: "// Example 1: Set male voice effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Set the singing voice preset to beautify the male voice and add a small room reverberation effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.SINGING_BEAUTIFIER)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect "
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF)"
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
                          children: " // Example 2: Set female voice effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierParameters"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.SINGING_BEAUTIFIER, "
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "3"
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
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Tone change"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Set the timbre to thick"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.TIMBRE_TRANSFORMATION_VIGOROUS);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF);"
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
                          children: "// Set the timbre to thick"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.TIMBRE_TRANSFORMATION_VIGOROUS)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceBeautifierPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_BEAUTIFIER_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sound-effects",
          children: "Sound effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Music Style"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Set the style to pop"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.STYLE_TRANSFORMATION_POPULAR);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF);"
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
                          children: "// Set the style to pop"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.STYLE_TRANSFORMATION_POPULAR)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Space shaping"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Set the space shaping effect to KTV"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.ROOM_ACOUSTICS_KTV);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF);"
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
                          children: "// Set the space shaping effect to KTV"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.ROOM_ACOUSTICS_KTV)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Electronic sound effects"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.PITCH_CORRECTION);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF);"
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
                          children: " // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectParameters"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.PITCH_CORRECTION, "
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "6"
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
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF);"
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
                          children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.PITCH_CORRECTION)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF)"
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
                          children: " // Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect"
                        })
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectParameters"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.PITCH_CORRECTION, "
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
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "6"
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
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-change-effects",
          children: "Voice change effects"
        }), _jsxs(_components.p, {
          children: ["To implement basic voice-changing effects, call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method. For advanced voice-changing effects, use the ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), " method."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic voice changer"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Set the voice change effect to a more neutral voice"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceConversionPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_CHANGER_NEUTRAL);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceConversionPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_CONVERSION_OFF);"
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
                          children: "// Set the voice change effect to a more neutral voice"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceConversionPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_CHANGER_NEUTRAL)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setVoiceConversionPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_CONVERSION_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Advanced voice changer"
            }), `
`, _jsxs(CodeBlockTabs, {
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
                          children: "// Set the vocal effect to 'Hulk'"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_CHANGER_EFFECT_HULK);"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF);"
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
                          children: "// Set the vocal effect to 'Hulk'"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.VOICE_CHANGER_EFFECT_HULK)"
                        })]
                      }), `
`, _jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: " // Turn off the effect"
                        })
                      }), `
`, _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
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
                          children: "setAudioEffectPreset"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(Constants.AUDIO_EFFECT_OFF)"
                        })]
                      })]
                    })
                  })
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-audio-effects",
          children: "Custom audio effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setLocalVoicePitch"
          }), ", ", _jsx(_components.code, {
            children: "setLocalVoiceEqualization"
          }), ", and ", _jsx(_components.code, {
            children: "setLocalVoiceReverb"
          }), " to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
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
                      children: " 0.5"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoicePitch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(pitch);"
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
                      children: "// Set the center frequency of the local voice equalization band"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "15"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
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
                      children: "9"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
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
                      children: "8"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "4"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "6"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "5"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "4"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "6"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "3"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "7"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "2"
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
                      children: "mRtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "8"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "9"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Original voice intensity or dry signal, value range [-20,10], unit is dB"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "10"
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
                      children: "// Early reflection signal intensity or wet signal, value range [-20,10], unit is dB"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "7"
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
                      children: "// The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "124"
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
                      children: "// The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "4"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "78"
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
                      children: "// Set the pitch for the local voice"
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
                      children: " 0.5"
                    })]
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
                      children: "setLocalVoicePitch"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(pitch)"
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
                      children: "// Set the center frequency of the local voice equalization band"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "15"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
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
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
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
                      children: "9"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
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
                      children: "8"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "4"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "6"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "5"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "4"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "6"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "3"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "7"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "2"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "8"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: ")"
                    })]
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
                      children: "setLocalVoiceEqualization"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_EQUALIZATION_BAND_FREQUENCY."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "9"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
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
                      children: "// Original voice intensity or dry signal, value range [-20,10], unit is dB"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "0"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "10"
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
                      children: "// Early reflection signal intensity or wet signal, value range [-20,10], unit is dB"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "7"
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
                      children: "// The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "124"
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
                      children: "// The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                      children: "setLocalVoiceReverb"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(Constants.AUDIO_REVERB_TYPE."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "fromInt"
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
                      children: "4"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "), "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "78"
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
        }), _jsx(_components.h2, {
          id: "reference",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-considerations",
          children: "Development considerations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The enumerations in ", _jsx(_components.code, {
                children: "setVoiceBeautifierPreset"
              }), ", ", _jsx(_components.code, {
                children: "setAudioEffectPreset"
              }), ", ", _jsx(_components.code, {
                children: "setVoiceConversionPreset"
              }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see ", _jsx(_components.a, {
                href: "#api-reference",
                children: "API reference"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample-Audio/app/src/main/java/io/agora/api/example/examples/advanced/VoiceEffects.java",
            children: "Voice effects project"
          }), " on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsx(_components.h4, {
          id: "audio-scenario-and-audio-profile",
          children: "Audio scenario and audio profile"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
                children: _jsx(_components.code, {
                  children: "setAudioProfile"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "preset-voice-effects",
          children: "Preset voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset",
                children: _jsx(_components.code, {
                  children: "setAudioEffectPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceConversionPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters",
                children: _jsx(_components.code, {
                  children: "setAudioEffectParameters"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierParameters"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "custom-voice-effects",
          children: "Custom voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceEqualization"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceReverb"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch",
                children: _jsx(_components.code, {
                  children: "setLocalVoicePitch"
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
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-1",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice beautifiers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
              }), `
`, _jsx(_components.li, {
                children: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
              }), `
`]
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
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
              }), `
`, _jsx(_components.li, {
                children: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
              }), `
`, _jsx(_components.li, {
                children: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice changer"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Custom audio effects"
              }), `
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Try the ", _jsx(_components.a, {
            href: "https://web-cdn.agora.io/marketing/audio_en_v3.html",
            children: "Online Demo"
          }), " to experience different voice effects."]
        }), _jsx(_components.h2, {
          id: "prerequisites-1",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Before proceeding with the code examples on this page, make sure you have completed the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " guide."]
        }), _jsx(_components.h2, {
          id: "implement-voice-effects-1",
          children: "Implement voice effects"
        }), _jsx(_components.p, {
          children: "This section shows how to use different sound beautifiers to enhance your audio experience."
        }), _jsx(_components.p, {
          children: "Use the following methods to set the desired vocal effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.code, {
              children: "setVoiceBeautifierPreset"
            }), " method to apply effects such as chatting bel canto, singing bel canto, and timbre change."]
          }), `
`, _jsxs(_components.li, {
            children: ["Utilize the ", _jsx(_components.code, {
              children: "setAudioEffectPreset"
            }), " method to configure sound effects, genre sound effects, space shaping, and other effects."]
          }), `
`, _jsxs(_components.li, {
            children: ["Apply the ", _jsx(_components.code, {
              children: "setVoiceConversionPreset"
            }), ` method to entirely transform the original voice.
If the preset effects don't meet your requirements, customize vocal effects using methods such as `, _jsx(_components.code, {
              children: "setLocalVoicePitch"
            }), ", ", _jsx(_components.code, {
              children: "setLocalVoiceEqualization"
            }), ", and ", _jsx(_components.code, {
              children: "setLocalVoiceReverb"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
        }), _jsx(_components.h3, {
          id: "set-audio-scenario-and-audio-profile-1",
          children: "Set audio scenario and audio profile"
        }), _jsx(_components.p, {
          children: "For optimal audio quality, take the following steps:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setAudioScenario"
              }), " to set the audio scenario to the high-quality scenario ", _jsx(_components.code, {
                children: "AgoraAudioScenarioGameStreaming"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setAudioProfile"
              }), " to set the audio encoding properties to high-quality encoding:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For mono transmission, set the profile to ", _jsx(_components.code, {
                  children: "AgoraAudioProfileMusicHighQuality"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["For stereo transmission, set the profile to ", _jsx(_components.code, {
                  children: "AgoraAudioProfileMusicHighQualityStereo"
                }), "."]
              }), `
`]
            }), `
`]
          }), `
`]
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
                  children: "// Create RtcEngine object"
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
                  children: " agoraKit "
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set audio scene"
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
                  children: "setAudioScenario"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.gameStreaming)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set audio encoding properties"
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
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.musicHighQaulityStereo)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-beautifiers-1",
          children: "Voice beautifiers"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Chat voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the voice effect to magnetic (for male voices)"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.chatBeautifierMagnetic)"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
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
              children: "Singing voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Set male voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set to singing beauty voice preset, which can beautify male voices and add small room reverberation effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.singingBeautifier)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
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
                      children: "// Example 2: Set female voice effects"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call the setVoiceBeautifierParameters method to beautify female voices and add hall reverberation effect"
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
                      children: "setVoiceBeautifierParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.singingBeautifier, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "3"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Tone change"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the timbre to thick"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.timbreTransformationVigorous)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sound-effects-1",
          children: "Sound effects"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method to set music style, space shaping, electronic music, and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Music Style"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the style to pop"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.styleTransformationPopular)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
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
              children: "Space shaping"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the space shaping effect to KTV"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.roomAcousticKTV)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
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
              children: "Electronic sound effects"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.pitchCorrection)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
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
                      children: "// Example 2: Adjust the basic mode and tonic pitch to achieve the electronic sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
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
                      children: "setAudioEffectParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.pitchCorrection, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-changer-effects",
          children: "Voice changer effects"
        }), _jsxs(_components.p, {
          children: ["To implement basic voice-changing effects, call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method. For advanced voice-changing effects, use the ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), " method."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The default voice change effect is a more neutral voice"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceChangerNeutral)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceConversionOff)"
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
              children: "Advanced voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the voice changer effect to Hulk"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceChangerEffectHulk)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-audio-effects-1",
          children: "Custom audio effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setLocalVoicePitch"
          }), ", ", _jsx(_components.code, {
            children: "setLocalVoiceEqualizationOf"
          }), ", and ", _jsx(_components.code, {
            children: "setLocalVoiceReverbOf"
          }), " to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"]
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setLocalVoicePitch"
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
                  children: "// Set the center frequency of the local voice equalization band"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band31, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band62, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band125, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band250, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band500, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band1K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band2K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band4K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band8K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band16K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
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
                  children: "// Original voice intensity, or dry signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.dryLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "-1"
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
                  children: "// Early reflection signal strength, or wet signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.wetLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "-7"
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
                  children: "// The size of the room for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.roomSize, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "57"
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
                  children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.wetDelay, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "135"
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
                  children: "// The strength of the reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.strength, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "45"
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
        }), _jsx(_components.h2, {
          id: "reference-1",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-considerations-1",
          children: "Development considerations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The enumerations in ", _jsx(_components.code, {
                children: "setVoiceBeautifierPreset"
              }), ", ", _jsx(_components.code, {
                children: "setAudioEffectPreset"
              }), ", ", _jsx(_components.code, {
                children: "setVoiceConversionPreset"
              }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see ", _jsx(_components.a, {
                href: "#api-reference",
                children: "API reference"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project-1",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/VoiceChanger",
            children: "VoiceChanger"
          }), " project on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsx(_components.h4, {
          id: "audio-scenario-and-audio-profile-1",
          children: "Audio scenario and audio profile"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioProfile"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "preset-voice-effects-1",
          children: "Preset voice effects"
        }), _jsxs(_components.p, {
          children: ["The enumerations in ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), ", ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), ", ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierpreset(_:)",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvoiceconversionpreset(_:)",
                children: _jsx(_components.code, {
                  children: "setVoiceConversionPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectpreset(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioEffectPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectparameters(_:param1:param2:)",
                children: _jsx(_components.code, {
                  children: "setAudioEffectParameters"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierparameters(_:param1:param2:)",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierParameters"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "custom-voice-effects-1",
          children: "Custom voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoiceequalizationof(_:withgain:)",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceEqualizationOf"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicereverbof(_:withvalue:)",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceReverbOf"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicepitch(_:)",
                children: _jsx(_components.code, {
                  children: "setLocalVoicePitch"
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
          canonicalPlatform: "android",
          platform: "macos"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-2",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice beautifiers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
              }), `
`, _jsx(_components.li, {
                children: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
              }), `
`]
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
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
              }), `
`, _jsx(_components.li, {
                children: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
              }), `
`, _jsx(_components.li, {
                children: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice changer"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Custom audio effects"
              }), `
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Try the ", _jsx(_components.a, {
            href: "https://web-cdn.agora.io/marketing/audio_en_v3.html",
            children: "Online Demo"
          }), " to experience different voice effects."]
        }), _jsx(_components.h2, {
          id: "prerequisites-2",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Before proceeding with the code examples on this page, make sure you have completed the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " guide."]
        }), _jsx(_components.h2, {
          id: "implement-voice-effects-2",
          children: "Implement voice effects"
        }), _jsx(_components.p, {
          children: "This section shows how to use different sound beautifiers to enhance your audio experience."
        }), _jsx(_components.p, {
          children: "Use the following methods to set the desired vocal effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.code, {
              children: "setVoiceBeautifierPreset"
            }), " method to apply effects such as chatting bel canto, singing bel canto, and timbre change."]
          }), `
`, _jsxs(_components.li, {
            children: ["Utilize the ", _jsx(_components.code, {
              children: "setAudioEffectPreset"
            }), " method to configure sound effects, genre sound effects, space shaping, and other effects."]
          }), `
`, _jsxs(_components.li, {
            children: ["Apply the ", _jsx(_components.code, {
              children: "setVoiceConversionPreset"
            }), ` method to entirely transform the original voice.
If the preset effects don't meet your requirements, customize vocal effects using methods such as `, _jsx(_components.code, {
              children: "setLocalVoicePitch"
            }), ", ", _jsx(_components.code, {
              children: "setLocalVoiceEqualization"
            }), ", and ", _jsx(_components.code, {
              children: "setLocalVoiceReverb"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
        }), _jsx(_components.h3, {
          id: "set-audio-scenario-and-audio-profile-2",
          children: "Set audio scenario and audio profile"
        }), _jsx(_components.p, {
          children: "For optimal audio quality, take the following steps:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setAudioScenario"
              }), " to set the audio scenario to the high-quality scenario ", _jsx(_components.code, {
                children: "AgoraAudioScenarioGameStreaming"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setAudioProfile"
              }), " to set the audio encoding properties to high-quality encoding:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For mono transmission, set the profile to ", _jsx(_components.code, {
                  children: "AgoraAudioProfileMusicHighQuality"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["For stereo transmission, set the profile to ", _jsx(_components.code, {
                  children: "AgoraAudioProfileMusicHighQualityStereo"
                }), "."]
              }), `
`]
            }), `
`]
          }), `
`]
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
                  children: "// Create RtcEngine object"
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
                  children: " agoraKit "
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set audio scene"
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
                  children: "setAudioScenario"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.gameStreaming)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set audio encoding properties"
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
                  children: "setAudioProfile"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.musicHighQaulityStereo)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-beautifiers-2",
          children: "Voice beautifiers"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Chat voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the voice effect to magnetic (for male voices)"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.chatBeautifierMagnetic)"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
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
              children: "Singing voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Set male voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set to singing beauty voice preset, which can beautify male voices and add small room reverberation effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.singingBeautifier)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
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
                      children: "// Example 2: Set female voice effects"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call the setVoiceBeautifierParameters method to beautify female voices and add hall reverberation effect"
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
                      children: "setVoiceBeautifierParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.singingBeautifier, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "3"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Tone change"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the timbre to thick"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.timbreTransformationVigorous)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceBeautifierOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sound-effects-2",
          children: "Sound effects"
        }), _jsxs(_components.p, {
          children: ["Call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method to set music style, space shaping, electronic music, and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Music Style"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the style to pop"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.styleTransformationPopular)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
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
              children: "Space shaping"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the space shaping effect to KTV"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.roomAcousticKTV)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
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
              children: "Electronic sound effects"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.pitchCorrection)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
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
                      children: "// Example 2: Adjust the basic mode and tonic pitch to achieve the electronic sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
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
                      children: "setAudioEffectParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.pitchCorrection, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-changer-effects-1",
          children: "Voice changer effects"
        }), _jsxs(_components.p, {
          children: ["To implement basic voice-changing effects, call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method. For advanced voice-changing effects, use the ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), " method."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The default voice change effect is a more neutral voice"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceChangerNeutral)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceConversionOff)"
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
              children: "Advanced voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the voice changer effect to Hulk"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.voiceChangerEffectHulk)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(.audioEffectOff)"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-audio-effects-2",
          children: "Custom audio effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setLocalVoicePitch"
          }), ", ", _jsx(_components.code, {
            children: "setLocalVoiceEqualizationOf"
          }), ", and ", _jsx(_components.code, {
            children: "setLocalVoiceReverbOf"
          }), " to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"]
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "setLocalVoicePitch"
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
                  children: "// Set the center frequency of the local voice equalization band"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band31, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band62, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band125, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band250, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band500, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band1K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band2K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band4K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band8K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                  children: "setLocalVoiceEqualizationOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.band16K, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withGain"
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
                  children: "0"
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
                  children: "// Original voice intensity, or dry signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.dryLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "-1"
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
                  children: "// Early reflection signal strength, or wet signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.wetLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "-7"
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
                  children: "// The size of the room for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.roomSize, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "57"
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
                  children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.wetDelay, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "135"
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
                  children: "// The strength of the reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                  children: "setLocalVoiceReverbOf"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(.strength, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "withValue"
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
                  children: "45"
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
        }), _jsx(_components.h2, {
          id: "reference-2",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-considerations-2",
          children: "Development considerations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The enumerations in ", _jsx(_components.code, {
                children: "setVoiceBeautifierPreset"
              }), ", ", _jsx(_components.code, {
                children: "setAudioEffectPreset"
              }), ", ", _jsx(_components.code, {
                children: "setVoiceConversionPreset"
              }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see ", _jsx(_components.a, {
                href: "#api-reference",
                children: "API reference"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project-2",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/VoiceChanger",
            children: "VoiceChanger"
          }), " project on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsx(_components.h4, {
          id: "audio-scenario-and-audio-profile-2",
          children: "Audio scenario and audio profile"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioprofile(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioProfile"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioscenario(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "preset-voice-effects-2",
          children: "Preset voice effects"
        }), _jsxs(_components.p, {
          children: ["The enumerations in ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), ", ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), ", ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierpreset(_:)",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvoiceconversionpreset(_:)",
                children: _jsx(_components.code, {
                  children: "setVoiceConversionPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectpreset(_:)",
                children: _jsx(_components.code, {
                  children: "setAudioEffectPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setaudioeffectparameters(_:param1:param2:)",
                children: _jsx(_components.code, {
                  children: "setAudioEffectParameters"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setvoicebeautifierparameters(_:param1:param2:)",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierParameters"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "custom-voice-effects-2",
          children: "Custom voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoiceequalizationof(_:withgain:)",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceEqualizationOf"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicereverbof(_:withvalue:)",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceReverbOf"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setlocalvoicepitch(_:)",
                children: _jsx(_components.code, {
                  children: "setLocalVoicePitch"
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
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "windows"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-3",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice beautifiers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
              }), `
`, _jsx(_components.li, {
                children: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
              }), `
`]
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
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
              }), `
`, _jsx(_components.li, {
                children: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
              }), `
`, _jsx(_components.li, {
                children: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice changer"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Custom audio effects"
              }), `
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Try the ", _jsx(_components.a, {
            href: "https://web-cdn.agora.io/marketing/audio_en_v3.html",
            children: "Online Demo"
          }), " to experience different voice effects."]
        }), _jsx(_components.h2, {
          id: "prerequisites-3",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Before proceeding with the code examples on this page, make sure you have completed the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " guide."]
        }), _jsx(_components.h2, {
          id: "implement-voice-effects-3",
          children: "Implement voice effects"
        }), _jsx(_components.p, {
          children: "This section shows how to use different sound beautifiers to enhance your audio experience."
        }), _jsx(_components.p, {
          children: "Use the following methods to set the desired vocal effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.code, {
              children: "setVoiceBeautifierPreset"
            }), " method to apply effects such as chatting bel canto, singing bel canto, and timbre change."]
          }), `
`, _jsxs(_components.li, {
            children: ["Utilize the ", _jsx(_components.code, {
              children: "setAudioEffectPreset"
            }), " method to configure sound effects, genre sound effects, space shaping, and other effects."]
          }), `
`, _jsxs(_components.li, {
            children: ["Apply the ", _jsx(_components.code, {
              children: "setVoiceConversionPreset"
            }), ` method to entirely transform the original voice.
If the preset effects don't meet your requirements, customize vocal effects using methods such as `, _jsx(_components.code, {
              children: "setLocalVoicePitch"
            }), ", ", _jsx(_components.code, {
              children: "setLocalVoiceEqualization"
            }), ", and ", _jsx(_components.code, {
              children: "setLocalVoiceReverb"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
        }), _jsx(_components.h3, {
          id: "set-audio-scenario-and-audio-profile-3",
          children: "Set audio scenario and audio profile"
        }), _jsx(_components.p, {
          children: "For optimal audio quality, take the following steps:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setAudioScenario"
              }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
                children: "AUDIO_SCENARIO_GAME_STREAMING"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "setAudioProfile"
              }), " to set the audio encoding properties to high-quality encoding:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For mono transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["For stereo transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO"
                }), "."]
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Create RtcEngine object"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "m_rtcEngine "
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
                      children: " createAgoraRtcEngine"
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
                      children: "// Set the audio scenario"
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
                      children: "setAudioScenario"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set audio encoding properties"
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
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-beautifiers-3",
          children: "Voice beautifiers"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Chat voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the vocal effect to magnetic (for male voices)"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(CHAT_BEAUTIFIER_MAGNETIC);"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_OFF);"
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
              children: "Singing voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Set male voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the singing voice preset to beautify the male voice and add a small room reverberation effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(SINGING_BEAUTIFIER);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_OFF);"
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
                      children: "// Example 2: Set female voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call the setVoiceBeautifierParameters method to beautify female voice and add hall reverberation effect"
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
                      children: "setVoiceBeautifierParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(SINGING_BEAUTIFIER, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "3"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Tone change"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the timbre to thick"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(TIMBRE_TRANSFORMATION_VIGOROUS);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sound-effects-3",
          children: "Sound effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Music Style"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the music style to pop"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(STYLE_TRANSFORMATION_POPULAR);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_OFF);"
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
              children: "Space shaping"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the space shaping effect to the effect in KTV"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(ROOM_ACOUSTICS_KTV);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_OFF);"
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
              children: "Electronic sound effects"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(PITCH_CORRECTION);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_OFF);"
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
                      children: "// Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
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
                      children: "setAudioEffectParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(PITCH_CORRECTION, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-change-effects-1",
          children: "Voice change effects"
        }), _jsxs(_components.p, {
          children: ["To implement basic voice-changing effects, call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method. For advanced voice-changing effects, use the ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), " method."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the voice changer to a more neutral sound"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_CHANGER_NEUTRAL);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_CONVERSION_OFF);"
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
              children: "Advanced voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the vocal effect to 'Hulk'"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_CHANGER_EFFECT_HULK);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-audio-effects-3",
          children: "Custom audio effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setLocalVoicePitch"
          }), ", ", _jsx(_components.code, {
            children: "setLocalVoiceEqualization"
          }), ", and ", _jsx(_components.code, {
            children: "setLocalVoiceReverb"
          }), " to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"]
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoicePitch"
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
                  children: "0.5"
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
                  children: "// Set the center frequency of the local voice equalization band"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_31, "
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
                  children: "15"
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_62, "
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_125, "
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
                  children: "9"
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_250, "
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
                  children: "8"
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_500, "
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
                  children: "6"
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_1K, "
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
                  children: "4"
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_2K, "
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
                  children: "3"
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_4K, "
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
                  children: "2"
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
                  children: "m_rtcEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_8K, "
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
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_16K, "
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Original voice intensity, or dry signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_DRY_LEVEL, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10"
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
                  children: "// Early reflection signal intensity, or wet signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_WET_LEVEL, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "7"
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
                  children: "// The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_ROOM_SIZE, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "6"
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
                  children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_WET_DELAY, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "124"
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
                  children: "// The strength of the reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_STRENGTH, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "78"
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
          id: "reference-3",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-considerations-3",
          children: "Development considerations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The enumerations in ", _jsx(_components.code, {
                children: "setVoiceBeautifierPreset"
              }), ", ", _jsx(_components.code, {
                children: "setAudioEffectPreset"
              }), ", ", _jsx(_components.code, {
                children: "setVoiceConversionPreset"
              }), ", and other voice methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. Refer to the API reference for details."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project-3",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/BeautyAudio",
            children: "BeautyAudio project"
          }), " on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsx(_components.h4, {
          id: "audio-scenario-and-audio-profile-3",
          children: "Audio scenario and audio profile"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile2",
                children: _jsx(_components.code, {
                  children: "setAudioProfile"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "preset-voice-effects-3",
          children: "Preset voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceConversionPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset",
                children: _jsx(_components.code, {
                  children: "setAudioEffectPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters",
                children: _jsx(_components.code, {
                  children: "setAudioEffectParameters"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierParameters"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "custom-voice-effects-3",
          children: "Custom voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceEqualization"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceReverb"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch",
                children: _jsx(_components.code, {
                  children: "setLocalVoicePitch"
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
          canonicalPlatform: "android",
          platform: "electron"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-4",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice beautifiers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
              }), `
`, _jsx(_components.li, {
                children: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
              }), `
`]
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
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
              }), `
`, _jsx(_components.li, {
                children: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
              }), `
`, _jsx(_components.li, {
                children: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice changer"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Custom audio effects"
              }), `
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Try the ", _jsx(_components.a, {
            href: "https://web-cdn.agora.io/marketing/audio_en_v3.html",
            children: "Online Demo"
          }), " to experience different voice effects."]
        }), _jsx(_components.h2, {
          id: "prerequisites-4",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Before proceeding with the code examples on this page, make sure you have completed the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " guide."]
        }), _jsx(_components.h2, {
          id: "implement-voice-effects-4",
          children: "Implement voice effects"
        }), _jsx(_components.p, {
          children: "This section shows how to use different sound beautifiers to enhance your audio experience."
        }), _jsx(_components.p, {
          children: "Use the following methods to set the desired vocal effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.code, {
              children: "setVoiceBeautifierPreset"
            }), " method to apply effects such as chatting bel canto, singing bel canto, and timbre change."]
          }), `
`, _jsxs(_components.li, {
            children: ["Utilize the ", _jsx(_components.code, {
              children: "setAudioEffectPreset"
            }), " method to configure sound effects, genre sound effects, space shaping, and other effects."]
          }), `
`, _jsxs(_components.li, {
            children: ["Apply the ", _jsx(_components.code, {
              children: "setVoiceConversionPreset"
            }), ` method to entirely transform the original voice.
If the preset effects don't meet your requirements, customize vocal effects using methods such as `, _jsx(_components.code, {
              children: "setLocalVoicePitch"
            }), ", ", _jsx(_components.code, {
              children: "setLocalVoiceEqualization"
            }), ", and ", _jsx(_components.code, {
              children: "setLocalVoiceReverb"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
        }), _jsx(_components.h3, {
          id: "set-audio-scenario-and-audio-profile-4",
          children: "Set audio scenario and audio profile"
        }), _jsx(_components.p, {
          children: "For optimal audio quality, take the following steps:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: "setAudioScenario"
              }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
                children: "AudioScenarioGameStreaming"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
                children: "setAudioProfile"
              }), " to set the audio encoding properties to high-quality encoding:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For mono transmission, set the profile to ", _jsx(_components.code, {
                  children: "AudioProfileMusicHighQuality"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["For stereo transmission, set the profile to ", _jsx(_components.code, {
                  children: "AudioProfileMusicHighQualityStereo"
                })]
              }), `
`]
            }), `
`]
          }), `
`]
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create a RtcEngine object"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine "
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
                  children: " createAgoraRtcEngine"
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
                  children: "// Set the audio scene audio scene settings"
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
                  children: "setAudioScenario"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioScenarioType.AudioScenarioGameStreaming);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set audio encoding properties"
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
          id: "voice-beautifiers-4",
          children: "Voice beautifiers"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), " to set music style, space shaping, electronic music, and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Chat voice beautifier"
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
                      children: "// Set the vocal effect to magnetic (for male voices)"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.ChatBeautifierMagnetic);"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
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
              children: "Singing voice beautifier"
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
                      children: "// Example 1: Set male voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the singing voice preset to beautify the male voice and add a small room reverberation effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.SingingBeautifier);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
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
                      children: "// Example 2: Set female voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect"
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
                      children: "setVoiceBeautifierParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.SingingBeautifier, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "3"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Tone change"
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
                      children: "// Set the timbre to be thick"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.TimbreTransformationVigorous);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sound-effects-4",
          children: "Sound Effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Music Style"
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
                      children: "// Set the style to pop"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.StyleTransformationPopular);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
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
              children: "Space shaping"
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
                      children: "// Set the space shaping effect to KTV"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.RoomAcousticsKtv);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
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
              children: "Electronic sound effects"
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
                      children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.PitchCorrection);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
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
                      children: "// Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
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
                      children: "setAudioEffectParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.PitchCorrection, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-change-effects-2",
          children: "Voice change effects"
        }), _jsxs(_components.p, {
          children: ["To implement basic voice-changing effects, call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method. For advanced voice-changing effects, use the ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), " method."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic voice changer"
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
                      children: "// Set the voice change effect to a more neutral voice"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceConversionPreset.VoiceChangerNeutral);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceConversionPreset.VoiceConversionOff);"
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
              children: "Advanced voice changer"
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
                      children: "// Set the vocal effect to 'Hulk'"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.VoiceChangerEffectHulk);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-audio-effects-4",
          children: "Custom audio effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setLocalVoicePitch"
          }), ", ", _jsx(_components.code, {
            children: "setLocalVoiceEqualization"
          }), ", and ", _jsx(_components.code, {
            children: "setLocalVoiceReverb"
          }), " to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"]
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoicePitch"
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
                  children: "0.5"
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
                  children: "// Set the center frequency of the local voice equalization band"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand31, "
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
                  children: "15"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand62, "
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand125, "
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
                  children: "9"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand250, "
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
                  children: "8"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand500, "
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
                  children: "6"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand1k, "
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
                  children: "4"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand2k, "
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
                  children: "3"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand4k, "
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
                  children: "2"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand8k, "
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
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand16k, "
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Original voice intensity or dry signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbDryLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10"
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
                  children: "// Early reflection signal intensity or wet signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbWetLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "7"
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
                  children: "// The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbRoomSize, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "6"
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
                  children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbWetDelay, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "124"
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
                  children: "// The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbStrength, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "78"
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
          id: "reference-4",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-considerations-4",
          children: "Development considerations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The enumerations in ", _jsx(_components.code, {
                children: "setVoiceBeautifierPreset"
              }), ", ", _jsx(_components.code, {
                children: "setAudioEffectPreset"
              }), ", ", _jsx(_components.code, {
                children: "setVoiceConversionPreset"
              }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see ", _jsx(_components.a, {
                href: "#api-reference",
                children: "API reference"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project-4",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/VoiceChanger/VoiceChanger.tsx",
            children: "Voice effects project"
          }), " on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsx(_components.h4, {
          id: "audio-scenario-and-audio-profile-4",
          children: "Audio scenario and audio profile"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
                children: _jsx(_components.code, {
                  children: "setAudioProfile"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "preset-voice-effects-4",
          children: "Preset voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset",
                children: _jsx(_components.code, {
                  children: "setAudioEffectPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceConversionPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters",
                children: _jsx(_components.code, {
                  children: "setAudioEffectParameters"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierParameters"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "custom-voice-effects-4",
          children: "Custom voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceEqualization"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceReverb"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch",
                children: _jsx(_components.code, {
                  children: "setLocalVoicePitch"
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
          canonicalPlatform: "android",
          platform: "react-native"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-5",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice beautifiers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
              }), `
`, _jsx(_components.li, {
                children: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
              }), `
`]
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
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
              }), `
`, _jsx(_components.li, {
                children: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
              }), `
`, _jsx(_components.li, {
                children: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice changer"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Custom audio effects"
              }), `
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Try the ", _jsx(_components.a, {
            href: "https://web-cdn.agora.io/marketing/audio_en_v3.html",
            children: "Online Demo"
          }), " to experience different voice effects."]
        }), _jsx(_components.h2, {
          id: "prerequisites-5",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Before proceeding with the code examples on this page, make sure you have completed the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " guide."]
        }), _jsx(_components.h2, {
          id: "implement-voice-effects-5",
          children: "Implement voice effects"
        }), _jsx(_components.p, {
          children: "This section shows how to use different sound beautifiers to enhance your audio experience."
        }), _jsx(_components.p, {
          children: "Use the following methods to set the desired vocal effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.code, {
              children: "setVoiceBeautifierPreset"
            }), " method to apply effects such as chatting bel canto, singing bel canto, and timbre change."]
          }), `
`, _jsxs(_components.li, {
            children: ["Utilize the ", _jsx(_components.code, {
              children: "setAudioEffectPreset"
            }), " method to configure sound effects, genre sound effects, space shaping, and other effects."]
          }), `
`, _jsxs(_components.li, {
            children: ["Apply the ", _jsx(_components.code, {
              children: "setVoiceConversionPreset"
            }), ` method to entirely transform the original voice.
If the preset effects don't meet your requirements, customize vocal effects using methods such as `, _jsx(_components.code, {
              children: "setLocalVoicePitch"
            }), ", ", _jsx(_components.code, {
              children: "setLocalVoiceEqualization"
            }), ", and ", _jsx(_components.code, {
              children: "setLocalVoiceReverb"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
        }), _jsx(_components.h3, {
          id: "set-audio-scenario-and-audio-profile-5",
          children: "Set audio scenario and audio profile"
        }), _jsx(_components.p, {
          children: "For optimal audio quality, take the following steps:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: "setAudioScenario"
              }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
                children: "AudioScenarioGameStreaming"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
                children: "setAudioProfile"
              }), " to set the audio encoding properties to high-quality encoding:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For mono transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["For stereo transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO"
                })]
              }), `
`]
            }), `
`]
          }), `
`]
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Create a RtcEngine object"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine "
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
                  children: " createAgoraRtcEngine"
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
                  children: "// Set the audio scenario"
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
                  children: "setAudioScenario"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioScenarioType.AudioScenarioGameStreaming);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set audio encoding properties"
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
          id: "voice-beautifiers-5",
          children: "Voice beautifiers"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setVoiceBeautifierPreset"
          }), " to set music style, space shaping, electronic music, and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Chat voice beautifier"
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
                      children: "// Set the vocal effect to magnetic (for male voices)"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.ChatBeautifierMagnetic);"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
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
              children: "Singing voice beautifier"
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
                      children: "// Example 1: Set male voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the singing voice preset to beautify the male voice and add a small room reverberation effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.SingingBeautifier);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
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
                      children: "// Example 2: Set female voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call the setVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect"
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
                      children: "setVoiceBeautifierParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.SingingBeautifier, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "3"
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
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Tone change"
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
                      children: "// Set the timbre to thick"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.TimbreTransformationVigorous);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceBeautifierPreset.VoiceBeautifierOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sound-effects-5",
          children: "Sound Effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Music Style"
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
                      children: "// Set the style to pop"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.StyleTransformationPopular);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
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
              children: "Space shaping"
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
                      children: "// Set the space shaping effect to KTV"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.RoomAcousticsKtv);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
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
              children: "Electronic sound effects"
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
                      children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.PitchCorrection);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
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
                      children: "// Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call setAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
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
                      children: "setAudioEffectParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.PitchCorrection, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-change-effects-3",
          children: "Voice change effects"
        }), _jsxs(_components.p, {
          children: ["To implement basic voice-changing effects, call the ", _jsx(_components.code, {
            children: "setAudioEffectPreset"
          }), " method. For advanced voice-changing effects, use the ", _jsx(_components.code, {
            children: "setVoiceConversionPreset"
          }), " method."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic voice changer"
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
                      children: "// Set the voice changer to a more neutral voice"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceConversionPreset.VoiceChangerNeutral);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VoiceConversionPreset.VoiceConversionOff);"
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
              children: "Advanced voice changer"
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
                      children: "// Set the vocal effect to 'Hulk'"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.VoiceChangerEffectHulk);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "setAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AudioEffectPreset.AudioEffectOff);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-audio-effects-5",
          children: "Custom audio effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "setLocalVoicePitch"
          }), ", ", _jsx(_components.code, {
            children: "setLocalVoiceEqualization"
          }), ", and ", _jsx(_components.code, {
            children: "setLocalVoiceReverb"
          }), " to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"]
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoicePitch"
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
                  children: "0.5"
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
                  children: "// Set the center frequency of the local voice equalization band"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand31, "
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
                  children: "15"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand62, "
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand125, "
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
                  children: "9"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand250, "
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
                  children: "8"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand500, "
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
                  children: "6"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand1k, "
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
                  children: "4"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand2k, "
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
                  children: "3"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand4k, "
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
                  children: "2"
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
                  children: "rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand8k, "
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
                  children: "setLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioEqualizationBandFrequency.AudioEqualizationBand16k, "
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Original voice intensity or dry signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbDryLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10"
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
                  children: "// Early reflection signal intensity or wet signal, value range [-20,10], unit is dB"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbWetLevel, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "7"
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
                  children: "// The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbRoomSize, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "6"
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
                  children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbWetDelay, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "124"
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
                  children: "// The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                  children: "setLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AudioReverbType.AudioReverbStrength, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "78"
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
          id: "reference-5",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-considerations-5",
          children: "Development considerations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The enumerations in ", _jsx(_components.code, {
                children: "setVoiceBeautifierPreset"
              }), ", ", _jsx(_components.code, {
                children: "setAudioEffectPreset"
              }), ", ", _jsx(_components.code, {
                children: "setVoiceConversionPreset"
              }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see ", _jsx(_components.a, {
                href: "#api-reference",
                children: "API reference"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project-5",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/VoiceChanger/VoiceChanger.tsx",
            children: "Voice effects project"
          }), " on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsx(_components.h4, {
          id: "audio-scenario-and-audio-profile-5",
          children: "Audio scenario and audio profile"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
                children: _jsx(_components.code, {
                  children: "setAudioProfile"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: _jsx(_components.code, {
                  children: "setAudioScenario"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "preset-voice-effects-5",
          children: "Preset voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset",
                children: _jsx(_components.code, {
                  children: "setVoiceConversionPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset",
                children: _jsx(_components.code, {
                  children: "setAudioEffectPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters",
                children: _jsx(_components.code, {
                  children: "setAudioEffectParameters"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters",
                children: _jsx(_components.code, {
                  children: "setVoiceBeautifierParameters"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "custom-voice-effects-5",
          children: "Custom voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceEqualization"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb",
                children: _jsx(_components.code, {
                  children: "setLocalVoiceReverb"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch",
                children: _jsx(_components.code, {
                  children: "setLocalVoicePitch"
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
          canonicalPlatform: "android",
          platform: "unity"
        }), _jsx(_components.h2, {
          id: "understand-the-tech-6",
          children: "Understand the tech"
        }), _jsx(_components.p, {
          children: "Voice effects are gaining popularity in social interaction and entertainment use-cases. To help you quickly integrate voice effects into your project, RTC SDK provides pre-configured effects. Choose from the following effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice beautifiers"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Voice beautifier for Chat: Beautify the voice in chat use-cases according to the characteristics of male and female voices without changing the original voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Singing beautifier: Beautify the singing voice according to male and female voice characteristics while retaining the original character of the singing voice."
              }), `
`, _jsx(_components.li, {
                children: "Timbre shift: Fine-tune the timbre of a vocal in a specific direction."
              }), `
`]
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
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Style sound effects: For songs of a specific style, make the singing and accompaniment more compatible."
              }), `
`, _jsx(_components.li, {
                children: "Spatial shaping: Create a spatial atmosphere through spatial reverberation effects. Make the vocals seem to come from a specific source."
              }), `
`, _jsx(_components.li, {
                children: "Electronic sound effects: Adjust the pitch of the vocals to perfectly match the key and pitch of the accompaniment for an electronic sound effect."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Voice changer"
              })
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Basic voice changing: Make the voice more neutral, sweet, or stable while retain a certain degree of voice recognition."
              }), `
`, _jsx(_components.li, {
                children: "Advanced voice changing: Dramatically change the human voice to realize voices of uncle, girl, Hulk, etc."
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Custom audio effects"
              }), `
If the preset effects don't meet your needs, manually adjust the voice pitch, equalization, and reverberation to achieve a customized effect.`]
            }), `
`]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["Try the ", _jsx(_components.a, {
            href: "https://web-cdn.agora.io/marketing/audio_en_v3.html",
            children: "Online Demo"
          }), " to experience different voice effects."]
        }), _jsx(_components.h2, {
          id: "prerequisites-6",
          children: "Prerequisites"
        }), _jsxs(_components.p, {
          children: ["Before proceeding with the code examples on this page, make sure you have completed the ", _jsx(_components.a, {
            href: "/en/realtime-media/rtc/get-started-sdk",
            children: "SDK quickstart"
          }), " guide."]
        }), _jsx(_components.h2, {
          id: "implement-voice-effects-6",
          children: "Implement voice effects"
        }), _jsx(_components.p, {
          children: "This section shows how to use different sound beautifiers to enhance your audio experience."
        }), _jsx(_components.p, {
          children: "Use the following methods to set the desired vocal effects:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Call the ", _jsx(_components.code, {
              children: "SetVoiceBeautifierPreset"
            }), " method to apply effects such as chatting bel canto, singing bel canto, and timbre change."]
          }), `
`, _jsxs(_components.li, {
            children: ["Utilize the ", _jsx(_components.code, {
              children: "SetAudioEffectPreset"
            }), " method to configure sound effects, genre sound effects, space shaping, and other effects."]
          }), `
`, _jsxs(_components.li, {
            children: ["Apply the ", _jsx(_components.code, {
              children: "SetVoiceConversionPreset"
            }), ` method to entirely transform the original voice.
If the preset effects don't meet your requirements, customize vocal effects using methods such as `, _jsx(_components.code, {
              children: "SetLocalVoicePitch"
            }), ", ", _jsx(_components.code, {
              children: "SetLocalVoiceEqualization"
            }), ", and ", _jsx(_components.code, {
              children: "SetLocalVoiceReverb"
            }), "."]
          }), `
`]
        }), _jsx(_components.p, {
          children: "Choose the one that best fits your requirements. To implement various voice effects in your project, take the following steps:"
        }), _jsx(_components.h3, {
          id: "set-audio-scenario-and-audio-profile-6",
          children: "Set audio scenario and audio profile"
        }), _jsx(_components.p, {
          children: "For optimal audio quality, take the following steps:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: "SetAudioScenario"
              }), " to set the audio scenario to high-quality ", _jsx(_components.code, {
                children: "AUDIO_SCENARIO_GAME_STREAMING"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
                children: "SetAudioProfile"
              }), " to set the audio encoding properties to high-quality encoding:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["For mono transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY"
                }), "."]
              }), `
`, _jsxs(_components.li, {
                children: ["For stereo transmission, set the profile to ", _jsx(_components.code, {
                  children: "AUDIO_PROFILE_MUSIC_HIGH_QUALITY_STEREO"
                })]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Set the audio scene and encoding properties after calling ", _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: "CreateAgoraRtcEngine"
              }), " to create the ", _jsx(_components.code, {
                children: "IRtcEngine"
              }), " object."]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the audio scenario"
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
                  children: "SetAudioScenario"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_GAME_STREAMING);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the audio encoding properties"
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
              }), `
`, _jsx(_components.span, {
                className: "line"
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "voice-beautifiers-6",
          children: "Voice beautifiers"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "SetVoiceBeautifierPreset"
          }), " to set music style, space shaping, electronic music, and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Chat voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the vocal effect to magnetic (for male voices)"
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
                      children: "SetVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.CHAT_BEAUTIFIER_MAGNETIC);"
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
                      children: "// Turn off the effect "
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
                      children: "SetVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line"
                  })]
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Singing voice beautifier"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Set male voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the singing voice preset to beautify the male voice and add a small room reverberation effect"
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
                      children: "SetVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.SINGING_BEAUTIFIER);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "SetVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);"
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
                      children: "// Example 2: Set female voice effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call the SetVoiceBeautifierParameters method to beautify the female voice and add hall reverberation effect"
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
                      children: "SetVoiceBeautifierParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.SINGING_BEAUTIFIER, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "3"
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
                      children: "// Turn off the effect"
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
                      children: "SetVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Tone change"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the timbre to thick"
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
                      children: "SetVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.TIMBRE_TRANSFORMATION_VIGOROUS);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "SetVoiceBeautifierPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_BEAUTIFIER_PRESET.VOICE_BEAUTIFIER_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sound-effects-6",
          children: "Sound effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "SetAudioEffectPreset"
          }), " to set music style, space shaping, electronic music and other effects."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Music Style"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the style to pop"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.STYLE_TRANSFORMATION_POPULAR);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);"
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
              children: "Space shaping"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the space shaping effect to KTV"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.ROOM_ACOUSTICS_KTV);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);"
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
              children: "Electronic sound effects"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Example 1: Use the preset pitch adjustment method to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// The preset is based on the natural major key with the tonic pitch of C, and corrects the actual pitch of the audio"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.PITCH_CORRECTION);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);"
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
                      children: "// Example 2: Adjust the basic mode and tonic pitch to achieve the electronic music sound effect"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Call SetAudioEffectParameters to adjust the basic mode of the tone to the natural minor key and the tonic pitch to D"
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
                      children: "SetAudioEffectParameters"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.PITCH_CORRECTION, "
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
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "6"
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
                      children: "// Turn off the effect"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "voice-change-effects-4",
          children: "Voice change effects"
        }), _jsxs(_components.p, {
          children: ["To implement basic voice-changing effects, call the ", _jsx(_components.code, {
            children: "SetAudioEffectPreset"
          }), " method. For advanced voice-changing effects, use the ", _jsx(_components.code, {
            children: "SetVoiceConversionPreset"
          }), " method."]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Basic voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the voice changer to a more neutral voice"
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
                      children: "SetVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_CONVERSION_PRESET.VOICE_CHANGER_NEUTRAL);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "SetVoiceConversionPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(VOICE_CONVERSION_PRESET.VOICE_CONVERSION_OFF);"
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
              children: "Advanced voice changer"
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
                icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the vocal effect to 'Hulk'"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.VOICE_CHANGER_EFFECT_HULK);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Turn off the effect"
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
                      children: "SetAudioEffectPreset"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(AUDIO_EFFECT_PRESET.AUDIO_EFFECT_OFF);"
                    })]
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "custom-audio-effects-6",
          children: "Custom audio effects"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "SetLocalVoicePitch"
          }), ", ", _jsx(_components.code, {
            children: "SetLocalVoiceEqualization"
          }), ", and ", _jsx(_components.code, {
            children: "SetLocalVoiceReverb"
          }), " to fine-tune vocal output parameters, including pitch, equalization, and reverberation effects. The following example shows you how to transform a human voice into the voice of the Hulk by manually setting parameter values:"]
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
                  children: "SetLocalVoicePitch"
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
                  children: "0.5"
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
                  children: " // Set the center frequency of the local voice equalization band"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // The first parameter is the spectrum sub-band index, the value range is [0,9], representing 10 frequency bands, and the corresponding center frequencies are [31,62,125,250,500,1000,2000,4000,8000,16000] Hz"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // The second parameter is the gain value of each frequency interval, the value range is [-15,15], the unit is dB, the default value is 0"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_31, "
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
                  children: "15"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_62, "
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_125, "
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
                  children: "9"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_250, "
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
                  children: "8"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_500, "
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
                  children: "6"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_1K, "
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
                  children: "4"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_2K, "
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
                  children: "3"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_4K, "
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
                  children: "2"
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_8K, "
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
                  children: "SetLocalVoiceEqualization"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_EQUALIZATION_BAND_FREQUENCY.AUDIO_EQUALIZATION_BAND_16K, "
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Original voice intensity or dry signal, value range [-20,10], unit is dB"
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
                  children: "SetLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_TYPE.AUDIO_REVERB_DRY_LEVEL, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "10"
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
                  children: "// Early reflection signal intensity or wet signal, value range [-20,10], unit is dB"
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
                  children: "SetLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_TYPE.AUDIO_REVERB_WET_LEVEL, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "7"
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
                  children: "// The room size for the required reverberation effect. Generally, the larger the room, the stronger the reverberation effect. Value range: [0,100]"
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
                  children: "SetLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_TYPE.AUDIO_REVERB_ROOM_SIZE, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "6"
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
                  children: "// Initial delay length of wet signal, value range: [0,200], unit: ms"
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
                  children: "SetLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_TYPE.AUDIO_REVERB_WET_DELAY, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "124"
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
                  children: "// The continuous strength of reverberation effect, value range: [0,100], the larger the value, the stronger the reverberation effect"
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
                  children: "SetLocalVoiceReverb"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(AUDIO_REVERB_TYPE.AUDIO_REVERB_STRENGTH, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "78"
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
          id: "reference-6",
          children: "Reference"
        }), _jsx(_components.p, {
          children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
        }), _jsx(_components.h3, {
          id: "development-considerations-6",
          children: "Development considerations"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Only one vocal effect can be set at a time. If multiple effects are set, the last one overwrites the previous one."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The enumerations in ", _jsx(_components.code, {
                children: "SetVoiceBeautifierPreset"
              }), ", ", _jsx(_components.code, {
                children: "SetAudioEffectPreset"
              }), ", ", _jsx(_components.code, {
                children: "SetVoiceConversionPreset"
              }), ", and other preset methods are optimized for different genders and should be used appropriately. Using these presets on vocals of the opposite gender may cause distortion. For more details, see ", _jsx(_components.a, {
                href: "#api-reference",
                children: "API reference"
              }), "."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project-6",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/VoiceChanger/VoiceChanger.cs",
            children: "Voice effects project"
          }), " on GitHub for your reference. Download or view the source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsx(_components.h4, {
          id: "audio-scenario-and-audio-profile-6",
          children: "Audio scenario and audio profile"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioprofile",
                children: _jsx(_components.code, {
                  children: "SetAudioProfile"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioscenario",
                children: _jsx(_components.code, {
                  children: "SetAudioScenario"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "preset-voice-effects-6",
          children: "Preset voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierpreset",
                children: _jsx(_components.code, {
                  children: "SetVoiceBeautifierPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setvoiceconversionpreset",
                children: _jsx(_components.code, {
                  children: "SetVoiceConversionPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectpreset",
                children: _jsx(_components.code, {
                  children: "SetAudioEffectPreset"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setaudioeffectparameters",
                children: _jsx(_components.code, {
                  children: "SetAudioEffectParameters"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setvoicebeautifierparameters",
                children: _jsx(_components.code, {
                  children: "SetVoiceBeautifierParameters"
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "custom-voice-effects-6",
          children: "Custom voice effects"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoiceequalization",
                children: _jsx(_components.code, {
                  children: "SetLocalVoiceEqualization"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicereverb",
                children: _jsx(_components.code, {
                  children: "SetLocalVoiceReverb"
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.a, {
                href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setlocalvoicepitch",
                children: _jsx(_components.code, {
                  children: "SetLocalVoicePitch"
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
