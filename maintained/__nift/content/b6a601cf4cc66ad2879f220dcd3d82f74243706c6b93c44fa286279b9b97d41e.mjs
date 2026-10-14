import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Custom audio source",
  description: "Integrate a custom video or audio capture into your client"
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;web&#x22;,&#x22;unreal&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules.

    RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:

    * Your app has its own audio module.
    * You need to process the captured audio with a pre-processing library for audio enhancement.
    * You need flexible device resource allocation to avoid conflicts with other services.

    This page shows you how to capture and render audio from custom sources.

    ## Understand the tech [#understand-the-tech]

    To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel.

    #### Capture custom audio [#capture-custom-audio]

    The following figure illustrates the process of custom audio capture.

    ![Audio data transmission](https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg)

    * You implement the capture module using external methods provided by the SDK.

    * You call \`pushExternalAudioFrame\` to send the captured audio frames to the SDK.

    #### Render custom audio [#render-custom-audio]

    The following figure illustrates the process of custom audio rendering.

    ![Audio Data Transmission](https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg)

    * You implement the rendering module using external methods provided by the SDK.

    * You call \`pullPlaybackAudioFrame\` to retrieve the audio data sent by remote users.

    ## Prerequisites [#prerequisites]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation]

    This section shows you how to implement custom audio capture and render audio from a custom source.

    ### Custom audio capture [#custom-audio-capture]

    Refer to the following call sequence diagram to implement custom audio capture in your app:

    **Custom audio capture process**

    ![Custom audio capture](https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg)

    Follow these steps to implement custom audio capture in your project:

    1. After initializing \`RtcEngine\`, call \`createCustomAudioTrack\` to create a custom audio track and obtain the audio track ID.

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
           AudioTrackConfig config = new AudioTrackConfig();
             config.enableLocalPlayback = false;
             customAudioTrack = engine.createCustomAudioTrack(Constants.AudioTrackType.AUDIO_TRACK_MIXABLE, config);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           val config = AudioTrackConfig().apply {
               enableLocalPlayback = false
             }
             customAudioTrack = engine.createCustomAudioTrack(Constants.AudioTrackType.AUDIO_TRACK_MIXABLE, config)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    2. Call \`joinChannel\` to join the channel. In \`ChannelMediaOptions\`, set \`publishCustomAudioTrackId\` to the audio track ID obtained in step 1, and set \`publishCustomAudioTrack\` to \`true\` to publish the custom audio track.

       <CalloutContainer type="info">
         <CalloutDescription>
           To use \`enableCustomAudioLocalPlayback\` for local playback of an external audio source, or to adjust the volume of a custom audio track with \`adjustCustomAudioPlayoutVolume\`, set \`enableAudioRecordingOrPlayout\` to \`true\` in \`ChannelMediaOptions\`.
         </CalloutDescription>
       </CalloutContainer>

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
           ChannelMediaOptions option = new ChannelMediaOptions();
             option.clientRoleType = Constants.CLIENT_ROLE_BROADCASTER;
             option.autoSubscribeAudio = true;
             option.autoSubscribeVideo = true;
             // In the audio self-collection use-case, the audio collected by the microphone is not published
             option.publishMicrophoneTrack = false;
             // Publish the custom audio track
             publishCustomAudioTrack = true
             // Set the custom audio track ID
             publishCustomAudioTrackId = customAudioTrack

             // Join the channel
             val res = engine.joinChannel(accessToken, channelId, 0, option)
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           val option = ChannelMediaOptions().apply {
               clientRoleType = Constants.CLIENT_ROLE_BROADCASTER
               autoSubscribeAudio = true
               autoSubscribeVideo = true
               // In the audio self-collection use-case, the audio collected by the microphone is not published
               publishMicrophoneTrack = false
               // Publish the custom audio track
               publishCustomAudioTrack = true
               // Set the custom audio track ID
               publishCustomAudioTrackId = customAudioTrack
             }

             // Join the channel
             val res = engine.joinChannel(accessToken, channelId, 0, option)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    3. Agora provides the [AudioFileReader.java](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/utils/AudioFileReader.java) sample to demonstrate how to read and publish PCM-format audio data from a local file. In a production environment, you create a custom audio acquisition module based on your business needs.

    4. Call \`pushExternalAudioFrame\` to send the captured audio frame to the SDK through the custom audio track. Ensure that the \`trackId\` matches the audio track ID you obtained by calling \`createCustomAudioTrack\`. Set \`sampleRate\`, \`channels\`, and \`bytesPerSample\` to define the sampling rate, number of channels, and bytes per sample of the external audio frame.

       <CalloutContainer type="info">
         <CalloutDescription>
           For audio and video synchronization, Agora recommends calling \`getCurrentMonotonicTimeInMs\` to get the system’s current monotonic time and setting the \`timestamp\` accordingly.
         </CalloutDescription>
       </CalloutContainer>

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
           audioPushingHelper = new AudioFileReader(requireContext(), (buffer, timestamp) -> {
               if (joined && engine != null && customAudioTrack != -1) {
                 // Push external audio frames to SDK
                 int ret = engine.pushExternalAudioFrame(buffer, timestamp,
                     AudioFileReader.SAMPLE_RATE,
                     AudioFileReader.SAMPLE_NUM_OF_CHANNEL,
                     Constants.BytesPerSample.TWO_BYTES_PER_SAMPLE,
                     customAudioTrack);
                 Log.i(TAG, "pushExternalAudioFrame times:" + (++\\pushTimes) + ", ret=" + ret);
               }
             });
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           audioPushingHelper = AudioFileReader(requireContext()) { buffer, timestamp ->
               if (joined && engine != null && customAudioTrack != -1) {
                 // Push external audio frames to SDK
                 val ret = engine.pushExternalAudioFrame(
                   buffer, timestamp,
                   AudioFileReader.SAMPLE_RATE,
                   AudioFileReader.SAMPLE_NUM_OF_CHANNEL,
                   Constants.BytesPerSample.TWO_BYTES_PER_SAMPLE,
                   customAudioTrack
                 )
                 Log.i(TAG, "pushExternalAudioFrame times: \\\${++pushTimes\\}, ret=$ret")
               }
             }
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    5. To stop publishing custom audio, call \`destroyCustomAudioTrack\` to destroy the custom audio track.

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
           // Destroy the custom audio track
             engine.destroyCustomAudioTrack(customAudioTrack);
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           // Destroy the custom audio track
             engine.destroyCustomAudioTrack(customAudioTrack)
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    ### Custom audio rendering [#custom-audio-rendering]

    This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your app:

    **Custom audio rendering workflow**

    ![Custom Audio Rendering Workflow](https://assets-docs.agora.io/images/video-sdk/custom-audio-render.svg)

    To implement custom audio rendering, use the following methods:

    1. Before calling \`joinChannel\`, use \`setExternalAudioSink\` to enable and configure custom audio rendering.

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
           rtcEngine.setExternalAudioSink(
               true,   // Enable custom audio rendering
               44100,   // Sampling rate (Hz). Set this value to 16000, 32000, 441000, or 48000
               1     // Number of channels for the custom audio source. Set this value to 1 or 2
             );
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           rtcEngine.setExternalAudioSink(
               true,   // Enable custom audio rendering
               44100,   // Sampling rate (Hz). Set this value to 16000, 32000, 441000, or 48000
               1     // Number of channels for the custom audio source. Set this value to 1 or 2
             )
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>
    2. After joining the channel, call \`pullPlaybackAudioFrame\` to get audio data sent by remote users. Use your own audio renderer to process the audio data and then play the rendered data.

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
           private class FileThread implements Runnable {

               @Override
               public void run() {
                 while (mPull) {
                   int lengthInByte = 48000 / 1000 * 2 * 1 * 10;
                   ByteBuffer frame = ByteBuffer.allocateDirect(lengthInByte);
                   int ret = engine.pullPlaybackAudioFrame(frame, lengthInByte);
                   byte[] data = new byte[frame.remaining()];
                   frame.get(data, 0, data.length);
                   // Write to a local file or render using a player
                   FileIOUtils.writeFileFromBytesByChannel("/sdcard/agora/pull_48k.pcm", data, true, true);
                   try {
                     Thread.sleep(10);
                   } catch (InterruptedException e) {
                     e.printStackTrace();
                   }
                 }
               }
             }
           \`\`\`
         </CodeBlockTab>

         <CodeBlockTab value="kotlin">
           \`\`\`kotlin
           private class FileThread : Runnable {

               override fun run() {
                 while (mPull) {
                   val lengthInByte = 48000 / 1000 * 2 * 1 * 10
                   val frame = ByteBuffer.allocateDirect(lengthInByte)
                   val ret = engine.pullPlaybackAudioFrame(frame, lengthInByte)
                   val data = ByteArray(frame.remaining())
                   frame.get(data, 0, data.size)
                   // Write to a local file or render using a player
                   FileIOUtils.writeFileFromBytesByChannel("/sdcard/agora/pull_48k.pcm", data, true, true)
                   try {
                     Thread.sleep(10)
                   } catch (e: InterruptedException) {
                     e.printStackTrace()
                   }
                 }
               }
             }
           \`\`\`
         </CodeBlockTab>
       </CodeBlockTabs>

    ### Using raw audio data callback [#using-raw-audio-data-callback]

    This section explains how to implement custom audio rendering.

    To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to [Raw audio processing](stream-raw-audio.mdx).

    Follow these steps to call the raw audio data API in your project for custom audio rendering:

    1. Retrieve audio data for playback using the \`onRecordAudioFrame\`, \`onPlaybackAudioFrame\`, \`onMixedAudioFrame\`, or \`onPlaybackAudioFrameBeforeMixing\` callback.

    2. Independently render and play the audio data.

    ## Reference [#reference]

    This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets.

    ### Sample projects [#sample-projects]

    Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:

    * [CustomAudioSource](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/customaudio/CustomAudioSource.java)
    * [CustomAudioRender](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/customaudio/CustomAudioRender.java)

    ### API reference [#api-reference]

    * [\`createCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaengine.html#api_imediaengine_createcustomaudiotrack)

    * [\`destroyCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaengine.html#api_imediaengine_destroycustomaudiotrack)

    * [\`pushExternalAudioFrame\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pushaudioframe2)

    * [\`setExternalAudioSink\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosink)

    * [\`pullPlaybackAudioFrame\` \\[1/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_imediaengine_pullaudioframe)

    * [\`pullPlaybackAudioFrame\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pullaudioframe2)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules.

    RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:

    * Your app has its own audio module.
    * You need to process the captured audio with a pre-processing library for audio enhancement.
    * You need flexible device resource allocation to avoid conflicts with other services.

    This page shows you how to capture and render audio from custom sources.

    ## Understand the tech [#understand-the-tech-1]

    To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel.

    #### Capture custom audio [#capture-custom-audio-1]

    The following figure illustrates the process of custom audio capture.

    ![Audio data transmission](https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg)

    * You implement the capture module using external methods provided by the SDK.

    * You call \`pushExternalAudioFrame\` to send the captured audio frames to the SDK.

    #### Render custom audio [#render-custom-audio-1]

    The following figure illustrates the process of custom audio rendering.

    ![Audio Data Transmission](https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg)

    * You implement the rendering module using external methods provided by the SDK.

    * You call \`pullPlaybackAudioFrame\` to retrieve the audio data sent by remote users.

    ## Prerequisites [#prerequisites-1]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-1]

    This section shows you how to implement custom audio capture and render audio from a custom source.

    ### Customize the audio source [#customize-the-audio-source]

    Refer to the following call sequence diagram to implement custom audio capture in your app:

    **Custom audio capture**

    ![Custom audio capture](https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg)

    Follow these steps to implement custom audio capture in your project:

    1. After initializing \`AgoraRtcEngineKit\`, call \`createCustomAudioTrack\` to create a custom audio track and retrieve the audio track ID.

       \`\`\`swift
       let audioTrack = AgoraAudioTrackConfig()
       audioTrack.enableLocalPlayback = true
       trackId = agoraKit.createCustomAudioTrack(.mixable, config: audioTrack)
       \`\`\`

    2. Use \`joinChannelByToken\` to join the channel. In \`AgoraRtcChannelMediaOptions\`, set the \`publishCustomAudioTrackId\` parameter to the audio track ID you obtained. Set \`publishCustomAudioTrack\` to \`YES\` to publish the custom audio track in the channel.

       <CalloutContainer type="warning">
         <CalloutDescription>
           To play an external audio source locally using \`enableCustomAudioLocalPlayback\`, or to adjust the local playback volume of a custom audio track using \`adjustCustomAudioPlayoutVolume\`, set \`enableAudioRecordingOrPlayout\` to \`YES\` in \`AgoraRtcChannelMediaOptions\`.
         </CalloutDescription>
       </CalloutContainer>

    \`\`\`swift
    let option = AgoraRtcChannelMediaOptions()
    // Disable microphone track
    option.publishMicrophoneTrack = false
    // Enable the custom audio track
    option.publishCustomAudioTrack = true
    // Set the custom audio track ID
    option.publishCustomAudioTrackId = Int(trackId)
    option.clientRoleType = GlobalSettings.shared.getUserRole()
    NetworkManager.shared.generateToken(channelName: channelName, success: { token in
      // Join the channel
      let result = self.agoraKit.joinChannel(byToken: token, channelId: channelName, uid: 0, mediaOptions: option)
      if result != 0 {
        self.showAlert(title: "Error", message: "Failed to join the channel: \\(result). Check your parameters.")
      }
    })
    \`\`\`

    3. Implement the custom audio acquisition module

       Agora provides a sample project [CustomAudioSource.swift](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomAudioSource) to demonstrate how to read PCM audio data from a local file. In production, create a custom audio acquisition module tailored to your business needs.

    4. Call \`pushExternalAudioFrameRawData\` to send captured audio frames to the SDK via the custom audio track. Ensure \`trackId\` matches the one used when joining the channel in step 2. Set \`sampleRate\`, \`channels\`, and \`samples\` to configure the external audio frame.

       <CalloutContainer type="info">
         <CalloutDescription>
           * For audio-video synchronization, Agora recommends using \`getCurrentMonotonicTimeInMs\` to obtain the system’s monotonic time and set the \`timestamp\`.
           * To push audio frames in \`CMSampleBuffer\` format, use \`pushExternalAudioFrameSampleBuffer\`.
         </CalloutDescription>
       </CalloutContainer>

    \`\`\`swift
    extension CustomAudioSource: AgoraPcmSourcePushDelegate {
      func onAudioFrame(data: UnsafeMutablePointer<UInt8>) {
        agoraKit.pushExternalAudioFrameRawData(data,
                          samples: samples,
                          sampleRate: Int(sampleRate),
                          channels: Int(audioChannel),
                          trackId: Int(trackId),
                          timestamp: 0)
      }
    }
    \`\`\`

    5. To stop publishing custom audio, call \`destroyCustomAudioTrack\` to remove the custom audio track.

       \`\`\`swift
       agoraKit.destroyCustomAudioTrack(Int(trackId))
       \`\`\`

    ### Custom audio rendering [#custom-audio-rendering-1]

    This section shows you how to implement custom audio rendering.

    To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to [Raw audio processing](stream-raw-audio.mdx).

    Follow these steps to call the raw audio data API in your project for custom audio rendering:

    1. Retrieve the audio data to be played from \`onRecordAudioFrame\`, \`onPlaybackAudioFrame\`, \`onMixedAudioFrame\`, or \`onPlaybackAudioFrameBeforeMixing\`.

    2. Independently render and play the audio data.

    ## Reference [#reference-1]

    This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets.

    ### Sample projects [#sample-projects-1]

    Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:

    * [CustomAudioSource](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomAudioSource)
    * [CustomAudioRender](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomAudioRender)

    ### API reference [#api-reference-1]

    * [\`createCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack\\(_\\:config:\\))
    * [\`destroyCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/destroycustomaudiotrack\\(_:\\))
    * [\`pushExternalAudioFrameSampleBuffer\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/play\\(\\))
    * [\`pushExternalAudioFrameRawData\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer\\(_:\\))
    * [\`enableExternalAudioSink\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableexternalaudiosink\\(_\\:samplerate\\:channels:\\))
    * [\`pullPlaybackAudioFrameRawData\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pullplaybackaudioframerawdata\\(_\\:lengthinbyte:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules.

    RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:

    * Your app has its own audio module.
    * You need to process the captured audio with a pre-processing library for audio enhancement.
    * You need flexible device resource allocation to avoid conflicts with other services.

    This page shows you how to capture and render audio from custom sources.

    ## Understand the tech [#understand-the-tech-2]

    To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel.

    #### Capture custom audio [#capture-custom-audio-2]

    The following figure illustrates the process of custom audio capture.

    ![Audio data transmission](https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg)

    * You implement the capture module using external methods provided by the SDK.

    * You call \`pushExternalAudioFrame\` to send the captured audio frames to the SDK.

    #### Render custom audio [#render-custom-audio-2]

    The following figure illustrates the process of custom audio rendering.

    ![Audio Data Transmission](https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg)

    * You implement the rendering module using external methods provided by the SDK.

    * You call \`pullPlaybackAudioFrame\` to retrieve the audio data sent by remote users.

    ## Prerequisites [#prerequisites-2]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-2]

    This section shows you how to implement custom audio capture and render audio from a custom source.

    ### Customize the audio source [#customize-the-audio-source-1]

    Refer to the following call sequence diagram to implement custom audio capture in your app:

    **Custom audio capture**

    ![Custom audio capture](https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg)

    Follow these steps to implement custom audio capture in your project:

    1. After initializing \`AgoraRtcEngineKit\`, call \`createCustomAudioTrack\` to create a custom audio track and retrieve the audio track ID.

       \`\`\`swift
       let audioTrack = AgoraAudioTrackConfig()
       audioTrack.enableLocalPlayback = true
       trackId = agoraKit.createCustomAudioTrack(.mixable, config: audioTrack)
       \`\`\`

    2. Use \`joinChannelByToken\` to join the channel. In \`AgoraRtcChannelMediaOptions\`, set the \`publishCustomAudioTrackId\` parameter to the audio track ID you obtained. Set \`publishCustomAudioTrack\` to \`YES\` to publish the custom audio track in the channel.

       <CalloutContainer type="warning">
         <CalloutDescription>
           To play an external audio source locally using \`enableCustomAudioLocalPlayback\`, or to adjust the local playback volume of a custom audio track using \`adjustCustomAudioPlayoutVolume\`, set \`enableAudioRecordingOrPlayout\` to \`YES\` in \`AgoraRtcChannelMediaOptions\`.
         </CalloutDescription>
       </CalloutContainer>

    \`\`\`swift
    let option = AgoraRtcChannelMediaOptions()
    // Disable microphone track
    option.publishMicrophoneTrack = false
    // Enable the custom audio track
    option.publishCustomAudioTrack = true
    // Set the custom audio track ID
    option.publishCustomAudioTrackId = Int(trackId)
    option.clientRoleType = GlobalSettings.shared.getUserRole()
    NetworkManager.shared.generateToken(channelName: channelName, success: { token in
      // Join the channel
      let result = self.agoraKit.joinChannel(byToken: token, channelId: channelName, uid: 0, mediaOptions: option)
      if result != 0 {
        self.showAlert(title: "Error", message: "Failed to join the channel: \\(result). Check your parameters.")
      }
    })
    \`\`\`

    3. Implement the custom audio acquisition module

       Agora provides a sample project [CustomAudioSource.swift](https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/CustomAudioSource) to demonstrate how to read PCM audio data from a local file. In production, create a custom audio acquisition module tailored to your business needs.

    4. Call \`pushExternalAudioFrameRawData\` to send captured audio frames to the SDK via the custom audio track. Ensure \`trackId\` matches the one used when joining the channel in step 2. Set \`sampleRate\`, \`channels\`, and \`samples\` to configure the external audio frame.

       <CalloutContainer type="info">
         <CalloutDescription>
           * For audio-video synchronization, Agora recommends using \`getCurrentMonotonicTimeInMs\` to obtain the system’s monotonic time and set the \`timestamp\`.
           * To push audio frames in \`CMSampleBuffer\` format, use \`pushExternalAudioFrameSampleBuffer\`.
         </CalloutDescription>
       </CalloutContainer>

    \`\`\`swift
    extension CustomAudioSource: AgoraPcmSourcePushDelegate {
      func onAudioFrame(data: UnsafeMutablePointer<UInt8>) {
        agoraKit.pushExternalAudioFrameRawData(data,
                          samples: samples,
                          sampleRate: Int(sampleRate),
                          channels: Int(audioChannel),
                          trackId: Int(trackId),
                          timestamp: 0)
      }
    }
    \`\`\`

    5. To stop publishing custom audio, call \`destroyCustomAudioTrack\` to remove the custom audio track.

       \`\`\`swift
       agoraKit.destroyCustomAudioTrack(Int(trackId))
       \`\`\`

    ### Custom audio rendering [#custom-audio-rendering-2]

    This section explains how to implement custom audio rendering.

    To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to [Raw audio processing](stream-raw-audio.mdx).

    Follow these steps to call the raw audio data API and implement custom audio rendering in your project:

    1. Retrieve the audio data to be played from \`onRecordAudioFrame\`, \`onPlaybackAudioFrame\`, \`onMixedAudioFrame\`, or \`onPlaybackAudioFrameBeforeMixing\`.

    2. Independently render and play the audio data.

    ## Reference [#reference-2]

    This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets.

    ### Sample projects [#sample-projects-2]

    Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:

    * [CustomAudioSource](https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/CustomAudioSource)
    * [CustomAudioRender](https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/CustomAudioRender)

    ### API reference [#api-reference-2]

    * [\`createCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack\\(_\\:config:\\))
    * [\`destroyCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/destroycustomaudiotrack\\(_:\\))
    * [\`pushExternalAudioFrameSampleBuffer\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/play\\(\\))
    * [\`pushExternalAudioFrameRawData\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer\\(_:\\))
    * [\`enableExternalAudioSink\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableexternalaudiosink\\(_\\:samplerate\\:channels:\\))
    * [\`pullPlaybackAudioFrameRawData\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pullplaybackaudioframerawdata\\(_\\:lengthinbyte:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules.

    RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:

    * Your app has its own audio module.
    * You need to process the captured audio with a pre-processing library for audio enhancement.
    * You need flexible device resource allocation to avoid conflicts with other services.

    This page shows you how to capture and render audio from custom sources.

    ## Understand the tech [#understand-the-tech-3]

    To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel.

    #### Capture custom audio [#capture-custom-audio-3]

    The following figure illustrates the process of custom audio capture.

    ![Audio data transmission](https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg)

    * You implement the capture module using external methods provided by the SDK.

    * You call \`pushExternalAudioFrame\` to send the captured audio frames to the SDK.

    #### Render custom audio [#render-custom-audio-3]

    The following figure illustrates the process of custom audio rendering.

    ![Audio Data Transmission](https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg)

    * You implement the rendering module using external methods provided by the SDK.

    * You call \`pullPlaybackAudioFrame\` to retrieve the audio data sent by remote users.

    ## Prerequisites [#prerequisites-3]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-3]

    ### Custom audio capture [#custom-audio-capture-1]

    Refer to the following call sequence diagram to implement custom audio capture in your app:

    **Custom audio capture**

    ![Custom audio capture](https://assets-docs.agora.io/images/video-sdk/custom-audio-capture.svg)

    Follow these steps to implement custom audio capture in your project:

    1. Enable and configure custom audio source.

       Before calling \`joinChannel\` to join the channel, call \`setExternalAudioSource\` to enable and configure custom audio capture.

       \`\`\`cpp
       // Specify the custom audio source
       m_rtcEngine->setExternalAudioSource(true, m_capAudioInfo.sampleRate, m_capAudioInfo.channels);

       // Local user joins the channel
       ChannelMediaOptions option;
       option.autoSubscribeAudio = true;
       option.autoSubscribeVideo = true;
       m_rtcEngine->joinChannel("Your token", szChannelId.c_str(), 0, option);
       \`\`\`

    2. Implement audio capture and processing.

       Use methods outside the SDK to implement audio capture and processing yourself.

    3. Send audio frames to SDK.

       Call \`pushAudioFrame\` to send the captured audio frames to the SDK for later use.

       \`\`\`cpp
       mediaEngine->pushAudioFrame(AUDIO_RECORDING_SOURCE, &m_audioFrame);
       \`\`\`

    ### Custom audio rendering [#custom-audio-rendering-3]

    This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your app:

    **Custom audio rendering workflow**

    ![Custom Audio Rendering Workflow](https://assets-docs.agora.io/images/video-sdk/custom-audio-render.svg)

    To implement custom audio rendering, use the following methods:

    1. Enable and configure custom audio sink.

       Before calling \`joinChannel\` to join the channel, call \`setExternalAudioSink\` to enable and configure custom audio rendering.

       \`\`\`cpp
       // Enable custom audio rendering
       // Sample rate (Hz) can be set to 16000, 32000, 44100 or 48000
       // Number of channels can be set to 1 or 2
       nRet = m_rtcEngine->setExternalAudioSink(m_renderAudioInfo.sampleRate, m_renderAudioInfo.channels);
       \`\`\`

    2. Pull and render remote audio data.

       * After joining the channel, call \`pullAudioFrame\` to get the audio data sent by the remote user.
       * Use your own audio renderer to process the audio data and then play the rendered data.

       \`\`\`cpp
       void CAgoraCaptureAduioDlg::PullAudioFrameThread(CAgoraCaptureAduioDlg * self)
       {
         int nRet = 0;
         agora::util::AutoPtr<agora::media::IMediaEngine> mediaEngine;
         mediaEngine.queryInterface(self->m_rtcEngine, AGORA_IID_MEDIA_ENGINE);
         IAudioFrameObserver::AudioFrame audioFrame;
         audioFrame.avsync_type = 0; // Reserved parameter 
         audioFrame.bytesPerSample = TWO_BYTES_PER_SAMPLE;
         audioFrame.type = agora::media::IAudioFrameObserver::FRAME_TYPE_PCM16;
         audioFrame.channels = self->m_renderAudioInfo.channels;
         audioFrame.samplesPerChannel = self->m_renderAudioInfo.sampleRate / 100 * self->m_renderAudioInfo.channels;
         audioFrame.samplesPerSec = self->m_renderAudioInfo.sampleRate;
         audioFrame.buffer = new BYTE[audioFrame.samplesPerChannel * audioFrame.bytesPerSample];
         while (self->m_extenalRenderAudio )
         {
           // Pull remote audio data
           nRet = mediaEngine->pullAudioFrame(&audioFrame);
           if (nRet != 0)
           {
             Sleep(10);
             continue;
           }
           SIZE_T nSize = audioFrame.samplesPerChannel * audioFrame.bytesPerSample;
           self->m_audioRender.Render((BYTE*)audioFrame.buffer, nSize);
         }
         delete audioFrame.buffer;
       }
       \`\`\`

    ### Using raw audio data callback [#using-raw-audio-data-callback-1]

    This section explains how to implement custom audio rendering.

    To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to [Raw audio processing](stream-raw-audio.mdx).

    Follow these steps to call the raw audio data API in your project for custom audio rendering:

    1. Retrieve audio data for playback using the \`onRecordAudioFrame\`, \`onPlaybackAudioFrame\`, \`onMixedAudioFrame\`, or \`onPlaybackAudioFrameBeforeMixing\` callback.

    2. Independently render and play the audio data.

    ## Reference [#reference-3]

    This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets.

    ### Sample projects [#sample-projects-3]

    Agora provides an open-source [CustomAudioCapture](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/CustomAudioCapture) project for your reference. Download the project or inspect the source code for a more detailed example.

    ### API reference [#api-reference-3]

    * [\`setExternalAudioSource\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosource2)

    * [\`pushAudioFrame\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_imediaengine.html#api_imediaengine_pushaudioframe0)

    * [\`setExternalAudioSink\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosink)

    * [\`pullAudioFrame\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_imediaengine.html#api_imediaengine_pullaudioframe)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules.

    RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:

    * Your app has its own audio module.
    * You need to process the captured audio with a pre-processing library for audio enhancement.
    * You need flexible device resource allocation to avoid conflicts with other services.

    This page shows you how to capture and render audio from custom sources.

    ## Understand the tech [#understand-the-tech-4]

    To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel.

    ## Prerequisites [#prerequisites-4]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-4]

    ### Custom audio capture [#custom-audio-capture-2]

    The SDK provides the \`createCustomAudioTrack\` method, which enables you to create a local audio track by passing in a browser-native \`MediaStreamTrack\` object. This method allows you to achieve custom audio capture. To use multiple audio sources, you can call the \`createCustomAudioTrack\` method multiple times to create separate local audio track objects.

    The following example uses \`getUserMedia\` to obtain a [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) object and passes it to \`createCustomAudioTrack\` to create a local audio track object for use with the SDK.

    \`\`\`javascript
    async function createAndPublishCustomAudioTrack(client) {
      try {
        // Get the audio media stream.
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: false,
          audio: true,
        });

        // Extract the audio track from the media stream.
        const audioMediaStreamTrack = mediaStream.getAudioTracks()[0];

        // Create a custom audio track.
        const customAudioTrack = await AgoraRTC.createCustomAudioTrack({
          mediaStreamTrack: audioMediaStreamTrack,
        });

        // Store the custom audio track for later use in a shared object.
        rtc.localAudioTrack = customAudioTrack;

        // Publish the custom audio track to the RTC channel.
        await rtc.client.publish([rtc.localAudioTrack]);

        console.log('Custom audio track published successfully!');
      } catch (error) {
        console.error('Failed to create or publish custom audio track:', error);
      }
    }
    \`\`\`

    To implement custom audio processing, use the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to obtain the \`MediaStreamTrack\`.

    ## Reference [#reference-4]

    This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets.

    ### API reference [#api-reference-4]

    * [\`createCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcustomaudiotrack)
    * [\`ILocalAudioTrack\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    The default audio module of RTC SDK meets the need of using basic audio functions in your game. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules.

    RTC SDK uses the basic audio module on the device your game runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your game, such as:

    * Your game has its own audio module.
    * You need to process the captured audio with a pre-processing library for audio enhancement.
    * You need flexible device resource allocation to avoid conflicts with other services.

    This page shows you how to capture and render audio from custom sources.

    ## Understand the tech [#understand-the-tech-5]

    To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel.

    #### Capture custom audio [#capture-custom-audio-4]

    The following figure illustrates the process of custom audio capture.

    ![Audio data transmission](https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg)

    * You implement the capture module using external methods provided by the SDK.

    * You call \`pushAudioFrame\` to send the captured audio frames to the SDK.

    #### Render custom audio [#render-custom-audio-4]

    The following figure illustrates the process of custom audio rendering.

    ![Audio Data Transmission](https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg)

    * You implement the rendering module using external methods provided by the SDK.

    * You call \`pullAudioFrame\` to retrieve the audio data sent by remote users.

    ## Prerequisites [#prerequisites-5]

    Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

    ## Implementation [#implementation-5]

    This section shows you how to implement custom audio capture and render audio from an external source using the SDK.

    ### Initialize MediaEngine [#initialize-mediaengine]

    Before implementing custom audio features, obtain the \`MediaEngine\` interface from the initialized \`RtcEngine\`:

    \`\`\`cpp
    void InitAgoraEngine(FString APP_ID, FString TOKEN, FString CHANNEL_NAME)
    {
      // Initialize RtcEngine context and event handler
      agora::rtc::RtcEngineContext RtcEngineContext;
      UserRtcEventHandler = MakeShared<FUserRtcEventHandler>(this);
      std::string StdStrAppId = TCHAR_TO_UTF8(*APP_ID);
      RtcEngineContext.appId = StdStrAppId.c_str();
      RtcEngineContext.eventHandler = UserRtcEventHandler.Get();
      RtcEngineContext.channelProfile = agora::CHANNEL_PROFILE_TYPE::CHANNEL_PROFILE_LIVE_BROADCASTING;

      // Initialize the RtcEngine
      int ret = AgoraUERtcEngine::Get()->initialize(RtcEngineContext);

      // Query for the MediaEngine interface
      AgoraUERtcEngine::Get()->queryInterface(AGORA_IID_MEDIA_ENGINE, (void**)&MediaEngine);
    }
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        The MediaEngine is not created directly. Instead, it's obtained as an interface from the initialized RtcEngine using the \`queryInterface\` method with \`AGORA_IID_MEDIA_ENGINE\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Custom audio capture [#custom-audio-capture-3]

    Refer to the following call sequence diagram to implement custom audio capture in your app:

    **Custom audio capture process**

    ![Custom audio capture](https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg)

    Follow these steps to implement custom audio capture in your project:

    1. **Enable and configure custom audio source**
       Before calling \`joinChannel\` to join the channel, call \`setExternalAudioSource\` to enable and configure custom audio capture.

       \`\`\`cpp
       void SetExternalAudioSource()
       {
         // Specify the custom audio source
         int ret = MediaEngine->setExternalAudioSource(true, SAMPLE_RATE, CHANNEL, 1);
         UBFL_Logger::Print(FString::Printf(TEXT("%s ret %d"), *FString(FUNCTION_MACRO), ret), LogMsgViewPtr);
       }

       void JoinChannel()
       {
         // Enable audio and set client role
         AgoraUERtcEngine::Get()->enableAudio();
         AgoraUERtcEngine::Get()->setClientRole(CLIENT_ROLE_BROADCASTER);

         // Join the channel
         int ret = AgoraUERtcEngine::Get()->joinChannel(TCHAR_TO_UTF8(*Token), TCHAR_TO_UTF8(*ChannelName), "", 0);
       }
       \`\`\`

    2. **Implement audio capture and processing**
       Use methods outside the SDK to implement audio capture and processing yourself.

    3. **Send audio frames to SDK**
       Call \`pushAudioFrame\` to send the captured audio frames to the SDK for later use.

       1. Load audio data from a file and start a thread to push the frames:

          \`\`\`cpp
          void StartPushAudio()
          {
            FString LoadDir = FPaths::ProjectContentDir() / TEXT("Audio/Agora.io-Interactions.wav");
            TArray<uint8> AudioData;
            FFileHelper::LoadFileToArray(AudioData, *LoadDir, 0);
            Runnable = new FAgoraCaptureRunnable(MediaEngine, AudioData.GetData(), AudioData.Num() * sizeof(uint8));
            FRunnableThread* RunnableThread = FRunnableThread::Create(Runnable, TEXT("AgoraUE-UserThread"));
          }
          \`\`\`

       2. This class reads audio data at 10ms intervals, converts it into \`AudioFrame\` format, and sends it to the Agora SDK using \`pushAudioFrame\`.

          \`\`\`cpp
          class FAgoraCaptureRunnable : public FRunnable
          {
          public:
            FAgoraCaptureRunnable(agora::media::IMediaEngine* MediaEngine, const uint8* audioData, int dataLength)
              : MediaEngine(MediaEngine), dataLength(dataLength)
            {
              this->audioData = new uint8[dataLength];
              FMemory::Memcpy(this->audioData, audioData, dataLength * sizeof(uint8));
            }

            virtual uint32 Run() override
            {
              auto tic = getTimeStamp();
              bStopThread = false;
              const uint8* Ptr = reinterpret_cast<const uint8*>(audioData);

              while (!bStopThread)
              {
                if (MediaEngine == nullptr) break;

                auto toc = getTimeStamp();
                if ((toc - tic) >= 10) // Push every 10ms
                {
                  if (dataLength <= 0) break;

                  if (sendByte == nullptr)
                  {
                    sendByte = FMemory::Malloc(SAMPLE_RATE / PUSH_FREQ_PER_SEC *
                                agora::rtc::BYTES_PER_SAMPLE::TWO_BYTES_PER_SAMPLE * CHANNEL);
                  }

                  FMemory::Memcpy(sendByte, Ptr, SAMPLE_RATE / PUSH_FREQ_PER_SEC *
                         agora::rtc::BYTES_PER_SAMPLE::TWO_BYTES_PER_SAMPLE * CHANNEL);

                  // Prepare audio frame
                  agora::media::IAudioFrameObserverBase::AudioFrame externalAudioFrame;
                  externalAudioFrame.bytesPerSample = agora::rtc::BYTES_PER_SAMPLE::TWO_BYTES_PER_SAMPLE;
                  externalAudioFrame.type = agora::media::IAudioFrameObserver::FRAME_TYPE_PCM16;
                  externalAudioFrame.samplesPerChannel = SAMPLE_RATE / PUSH_FREQ_PER_SEC;
                  externalAudioFrame.samplesPerSec = SAMPLE_RATE;
                  externalAudioFrame.channels = CHANNEL;
                  externalAudioFrame.buffer = sendByte;
                  externalAudioFrame.renderTimeMs = 10;

                  // Push audio frame to SDK
                  agora::rtc::track_id_t trackId = 0;
                  int ret = MediaEngine->pushAudioFrame(&externalAudioFrame, trackId);

                  Ptr += SAMPLE_RATE / PUSH_FREQ_PER_SEC * 2 * CHANNEL;
                  dataLength -= SAMPLE_RATE / PUSH_FREQ_PER_SEC * 2 * CHANNEL;
                  tic = toc;
                }
                FPlatformProcess::Sleep(0.001f);
              }
              return 0;
            }

          private:
            agora::media::IMediaEngine* MediaEngine = nullptr;
            uint8* audioData = nullptr;
            void* sendByte = nullptr;
            int dataLength = 0;
            bool bStopThread = false;

            // Audio configuration
            const int CHANNEL = 2;
            const int SAMPLE_RATE = 48000;
            const int PUSH_FREQ_PER_SEC = 100;
          };
          \`\`\`

    ### Custom audio rendering [#custom-audio-rendering-4]

    This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your game:

    **Custom audio rendering workflow**

    ![Custom Audio Rendering Workflow](https://assets-docs.agora.io/images/video-sdk/custom-audio-render.svg)

    To implement custom audio rendering, use the following methods:

    1. **Enable and configure custom audio sink**
       Before calling \`joinChannel\` to join the channel, call \`setExternalAudioSink\` to enable and configure custom audio rendering.

       \`\`\`cpp
       void SetExternalAudioSink()
       {
         // Enable custom audio rendering
         // Sample rate (Hz) can be set to 16000, 32000, 44100 or 48000
         // Number of channels can be set to 1 or 2
         int CHANNEL = 1;
         int SAMPLE_RATE = 44100;
         int ret = MediaEngine->setExternalAudioSink(true, SAMPLE_RATE, CHANNEL);
       }
       \`\`\`

    2. **Pull and render remote audio data**
       To pull audio frames for custom rendering, call \`pullAudioFrame\` in a dedicated thread. After pulling the frame, send the audio buffer to your custom sound player (such as a \`USoundWaveProcedural\` wrapper like \`AgoraSoundWaveProcedural\`).

       \`\`\`cpp
       class FAgoraRenderRunnable : public FRunnable
       {
       public:
         FAgoraRenderRunnable(agora::media::IMediaEngine* InMediaEngine, UAgoraSoundWaveProcedural* InAgoraSoundWaveProcedural)
           : MediaEngine(InMediaEngine), AgoraSoundWaveProcedural(InAgoraSoundWaveProcedural)
         {
         }

         virtual uint32 Run() override
         {
           constexpr int PUSH_FREQ_PER_SEC = 100;
           constexpr int SAMPLE_RATE = 44100;
           constexpr int CHANNEL = 1;

           auto tic = getTimeStamp();
           bStopThread = false;

           // Prepare the external audio frame
           agora::media::IAudioFrameObserverBase::AudioFrame externalAudioFrame;
           externalAudioFrame.avsync_type = 0; // Reserved parameter
           externalAudioFrame.bytesPerSample = agora::rtc::BYTES_PER_SAMPLE::TWO_BYTES_PER_SAMPLE;
           externalAudioFrame.type = agora::media::IAudioFrameObserver::FRAME_TYPE_PCM16;
           externalAudioFrame.samplesPerChannel = SAMPLE_RATE / PUSH_FREQ_PER_SEC;
           externalAudioFrame.samplesPerSec = SAMPLE_RATE;
           externalAudioFrame.channels = CHANNEL;
           externalAudioFrame.renderTimeMs = 10;
           externalAudioFrame.buffer = FMemory::Malloc(
             externalAudioFrame.samplesPerChannel *
             externalAudioFrame.bytesPerSample *
             externalAudioFrame.channels
           );

           while (!bStopThread)
           {
             if (MediaEngine == nullptr) break;

             auto toc = getTimeStamp();
             if ((toc - tic) >= 10) // Pull every 10 ms
             {
               tic = getTimeStamp();

               // Pull remote audio data
               int ret = MediaEngine->pullAudioFrame(&externalAudioFrame);
               if (ret == 0 && AgoraSoundWaveProcedural)
               {
                 // Send the frame to custom renderer (e.g., USoundWaveProcedural wrapper)
                 AgoraSoundWaveProcedural->AddToFrames(externalAudioFrame);
               }
               else if (ret != 0)
               {
                 FPlatformProcess::Sleep(0.01f); // Sleep 10ms if no data
                 continue;
               }
             }
             FPlatformProcess::Sleep(0.001f); // Yield to CPU
           }

           // Free audio buffer after loop
           FMemory::Free(externalAudioFrame.buffer);
           return 0;
         }

       private:
         agora::media::IMediaEngine* MediaEngine = nullptr;
         UAgoraSoundWaveProcedural* AgoraSoundWaveProcedural = nullptr;
         bool bStopThread = false;
       };
       \`\`\`

       * After joining the channel, call \`pullAudioFrame\` to get the audio data sent by the remote user.
       * Use your own audio renderer to process the audio data and then play the rendered data.

    ### Using raw audio data callback [#using-raw-audio-data-callback-2]

    This section explains how to implement custom audio rendering.

    To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to [Raw audio processing](stream-raw-audio.mdx).

    Follow these steps to call the raw audio data API in your project for custom audio rendering:

    1. Retrieve audio data for playback using the \`onRecordAudioFrame\`, \`onPlaybackAudioFrame\`, \`onMixedAudioFrame\`, or \`onPlaybackAudioFrameBeforeMixing\` callback.

    2. Independently render and play the audio data.

    ## Reference [#reference-5]

    This section explains how to implement different sound effects and audio mixing in your game, covering essential steps and code snippets.

    ### Sample projects [#sample-projects-4]

    Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:

    * [CustomCaptureAudio](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example/Source/AgoraExample/Examples/Advanced/CustomCaptureAudio)
    * [CustomRenderAudio](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/blob/main/Agora-Unreal-SDK-CPP-Example/Source/AgoraExample/Examples/Advanced/CustomRenderAudio/)

    ### API reference [#api-reference-5]

    * [\`setExternalAudioSource\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosource2)

    * [\`pushAudioFrame\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_pushaudioframe0)

    * [\`setExternalAudioSink\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosink)

    * [\`pullAudioFrame\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_pullaudioframe)

    * [\`createCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_createcustomaudiotrack)

    * [\`destroyCustomAudioTrack\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_destroycustomaudiotrack)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
  }, {
    heading: undefined,
    content: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
  }, {
    heading: undefined,
    content: "Your app has its own audio module."
  }, {
    heading: undefined,
    content: "You need to process the captured audio with a pre-processing library for audio enhancement."
  }, {
    heading: undefined,
    content: "You need flexible device resource allocation to avoid conflicts with other services."
  }, {
    heading: undefined,
    content: "This page shows you how to capture and render audio from custom sources."
  }, {
    heading: "understand-the-tech",
    content: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
  }, {
    heading: "capture-custom-audio",
    content: "The following figure illustrates the process of custom audio capture."
  }, {
    heading: "capture-custom-audio",
    content: "You implement the capture module using external methods provided by the SDK."
  }, {
    heading: "capture-custom-audio",
    content: "You call `pushExternalAudioFrame` to send the captured audio frames to the SDK."
  }, {
    heading: "render-custom-audio",
    content: "The following figure illustrates the process of custom audio rendering."
  }, {
    heading: "render-custom-audio",
    content: "You implement the rendering module using external methods provided by the SDK."
  }, {
    heading: "render-custom-audio",
    content: "You call `pullPlaybackAudioFrame` to retrieve the audio data sent by remote users."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation",
    content: "This section shows you how to implement custom audio capture and render audio from a custom source."
  }, {
    heading: "custom-audio-capture",
    content: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
  }, {
    heading: "custom-audio-capture",
    content: "**Custom audio capture process**"
  }, {
    heading: "custom-audio-capture",
    content: "Follow these steps to implement custom audio capture in your project:"
  }, {
    heading: "custom-audio-capture",
    content: "After initializing `RtcEngine`, call `createCustomAudioTrack` to create a custom audio track and obtain the audio track ID."
  }, {
    heading: "custom-audio-capture",
    content: "Call `joinChannel` to join the channel. In `ChannelMediaOptions`, set `publishCustomAudioTrackId` to the audio track ID obtained in step 1, and set `publishCustomAudioTrack` to `true` to publish the custom audio track."
  }, {
    heading: "custom-audio-capture",
    content: "To use `enableCustomAudioLocalPlayback` for local playback of an external audio source, or to adjust the volume of a custom audio track with `adjustCustomAudioPlayoutVolume`, set `enableAudioRecordingOrPlayout` to `true` in `ChannelMediaOptions`."
  }, {
    heading: "custom-audio-capture",
    content: "Agora provides the AudioFileReader.java sample to demonstrate how to read and publish PCM-format audio data from a local file. In a production environment, you create a custom audio acquisition module based on your business needs."
  }, {
    heading: "custom-audio-capture",
    content: "Call `pushExternalAudioFrame` to send the captured audio frame to the SDK through the custom audio track. Ensure that the `trackId` matches the audio track ID you obtained by calling `createCustomAudioTrack`. Set `sampleRate`, `channels`, and `bytesPerSample` to define the sampling rate, number of channels, and bytes per sample of the external audio frame."
  }, {
    heading: "custom-audio-capture",
    content: "For audio and video synchronization, Agora recommends calling `getCurrentMonotonicTimeInMs` to get the system’s current monotonic time and setting the `timestamp` accordingly."
  }, {
    heading: "custom-audio-capture",
    content: "To stop publishing custom audio, call `destroyCustomAudioTrack` to destroy the custom audio track."
  }, {
    heading: "custom-audio-rendering",
    content: "This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your app:"
  }, {
    heading: "custom-audio-rendering",
    content: "**Custom audio rendering workflow**"
  }, {
    heading: "custom-audio-rendering",
    content: "To implement custom audio rendering, use the following methods:"
  }, {
    heading: "custom-audio-rendering",
    content: "Before calling `joinChannel`, use `setExternalAudioSink` to enable and configure custom audio rendering."
  }, {
    heading: "custom-audio-rendering",
    content: "After joining the channel, call `pullPlaybackAudioFrame` to get audio data sent by remote users. Use your own audio renderer to process the audio data and then play the rendered data."
  }, {
    heading: "using-raw-audio-data-callback",
    content: "This section explains how to implement custom audio rendering."
  }, {
    heading: "using-raw-audio-data-callback",
    content: "To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to Raw audio processing."
  }, {
    heading: "using-raw-audio-data-callback",
    content: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
  }, {
    heading: "using-raw-audio-data-callback",
    content: "Retrieve audio data for playback using the `onRecordAudioFrame`, `onPlaybackAudioFrame`, `onMixedAudioFrame`, or `onPlaybackAudioFrameBeforeMixing` callback."
  }, {
    heading: "using-raw-audio-data-callback",
    content: "Independently render and play the audio data."
  }, {
    heading: "reference",
    content: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
  }, {
    heading: "sample-projects",
    content: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
  }, {
    heading: "sample-projects",
    content: "CustomAudioSource"
  }, {
    heading: "sample-projects",
    content: "CustomAudioRender"
  }, {
    heading: "api-reference",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "api-reference",
    content: "`destroyCustomAudioTrack`"
  }, {
    heading: "api-reference",
    content: "`pushExternalAudioFrame`"
  }, {
    heading: "api-reference",
    content: "`setExternalAudioSink`"
  }, {
    heading: "api-reference",
    content: "`pullPlaybackAudioFrame` \\[1/2]"
  }, {
    heading: "api-reference",
    content: "`pullPlaybackAudioFrame` \\[2/2]"
  }, {
    heading: "api-reference",
    content: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
  }, {
    heading: "api-reference",
    content: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
  }, {
    heading: "api-reference",
    content: "Your app has its own audio module."
  }, {
    heading: "api-reference",
    content: "You need to process the captured audio with a pre-processing library for audio enhancement."
  }, {
    heading: "api-reference",
    content: "You need flexible device resource allocation to avoid conflicts with other services."
  }, {
    heading: "api-reference",
    content: "This page shows you how to capture and render audio from custom sources."
  }, {
    heading: "understand-the-tech-1",
    content: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
  }, {
    heading: "capture-custom-audio-1",
    content: "The following figure illustrates the process of custom audio capture."
  }, {
    heading: "capture-custom-audio-1",
    content: "You implement the capture module using external methods provided by the SDK."
  }, {
    heading: "capture-custom-audio-1",
    content: "You call `pushExternalAudioFrame` to send the captured audio frames to the SDK."
  }, {
    heading: "render-custom-audio-1",
    content: "The following figure illustrates the process of custom audio rendering."
  }, {
    heading: "render-custom-audio-1",
    content: "You implement the rendering module using external methods provided by the SDK."
  }, {
    heading: "render-custom-audio-1",
    content: "You call `pullPlaybackAudioFrame` to retrieve the audio data sent by remote users."
  }, {
    heading: "prerequisites-1",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-1",
    content: "This section shows you how to implement custom audio capture and render audio from a custom source."
  }, {
    heading: "customize-the-audio-source",
    content: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
  }, {
    heading: "customize-the-audio-source",
    content: "**Custom audio capture**"
  }, {
    heading: "customize-the-audio-source",
    content: "Follow these steps to implement custom audio capture in your project:"
  }, {
    heading: "customize-the-audio-source",
    content: "After initializing `AgoraRtcEngineKit`, call `createCustomAudioTrack` to create a custom audio track and retrieve the audio track ID."
  }, {
    heading: "customize-the-audio-source",
    content: "Use `joinChannelByToken` to join the channel. In `AgoraRtcChannelMediaOptions`, set the `publishCustomAudioTrackId` parameter to the audio track ID you obtained. Set `publishCustomAudioTrack` to `YES` to publish the custom audio track in the channel."
  }, {
    heading: "customize-the-audio-source",
    content: "To play an external audio source locally using `enableCustomAudioLocalPlayback`, or to adjust the local playback volume of a custom audio track using `adjustCustomAudioPlayoutVolume`, set `enableAudioRecordingOrPlayout` to `YES` in `AgoraRtcChannelMediaOptions`."
  }, {
    heading: "customize-the-audio-source",
    content: "Implement the custom audio acquisition module"
  }, {
    heading: "customize-the-audio-source",
    content: "Agora provides a sample project CustomAudioSource.swift to demonstrate how to read PCM audio data from a local file. In production, create a custom audio acquisition module tailored to your business needs."
  }, {
    heading: "customize-the-audio-source",
    content: "Call `pushExternalAudioFrameRawData` to send captured audio frames to the SDK via the custom audio track. Ensure `trackId` matches the one used when joining the channel in step 2. Set `sampleRate`, `channels`, and `samples` to configure the external audio frame."
  }, {
    heading: "customize-the-audio-source",
    content: "For audio-video synchronization, Agora recommends using `getCurrentMonotonicTimeInMs` to obtain the system’s monotonic time and set the `timestamp`."
  }, {
    heading: "customize-the-audio-source",
    content: "To push audio frames in `CMSampleBuffer` format, use `pushExternalAudioFrameSampleBuffer`."
  }, {
    heading: "customize-the-audio-source",
    content: "To stop publishing custom audio, call `destroyCustomAudioTrack` to remove the custom audio track."
  }, {
    heading: "custom-audio-rendering-1",
    content: "This section shows you how to implement custom audio rendering."
  }, {
    heading: "custom-audio-rendering-1",
    content: "To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to Raw audio processing."
  }, {
    heading: "custom-audio-rendering-1",
    content: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
  }, {
    heading: "custom-audio-rendering-1",
    content: "Retrieve the audio data to be played from `onRecordAudioFrame`, `onPlaybackAudioFrame`, `onMixedAudioFrame`, or `onPlaybackAudioFrameBeforeMixing`."
  }, {
    heading: "custom-audio-rendering-1",
    content: "Independently render and play the audio data."
  }, {
    heading: "reference-1",
    content: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
  }, {
    heading: "sample-projects-1",
    content: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
  }, {
    heading: "sample-projects-1",
    content: "CustomAudioSource"
  }, {
    heading: "sample-projects-1",
    content: "CustomAudioRender"
  }, {
    heading: "api-reference-1",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "api-reference-1",
    content: "`destroyCustomAudioTrack`"
  }, {
    heading: "api-reference-1",
    content: "`pushExternalAudioFrameSampleBuffer`"
  }, {
    heading: "api-reference-1",
    content: "`pushExternalAudioFrameRawData`"
  }, {
    heading: "api-reference-1",
    content: "`enableExternalAudioSink`"
  }, {
    heading: "api-reference-1",
    content: "`pullPlaybackAudioFrameRawData`"
  }, {
    heading: "api-reference-1",
    content: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
  }, {
    heading: "api-reference-1",
    content: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
  }, {
    heading: "api-reference-1",
    content: "Your app has its own audio module."
  }, {
    heading: "api-reference-1",
    content: "You need to process the captured audio with a pre-processing library for audio enhancement."
  }, {
    heading: "api-reference-1",
    content: "You need flexible device resource allocation to avoid conflicts with other services."
  }, {
    heading: "api-reference-1",
    content: "This page shows you how to capture and render audio from custom sources."
  }, {
    heading: "understand-the-tech-2",
    content: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
  }, {
    heading: "capture-custom-audio-2",
    content: "The following figure illustrates the process of custom audio capture."
  }, {
    heading: "capture-custom-audio-2",
    content: "You implement the capture module using external methods provided by the SDK."
  }, {
    heading: "capture-custom-audio-2",
    content: "You call `pushExternalAudioFrame` to send the captured audio frames to the SDK."
  }, {
    heading: "render-custom-audio-2",
    content: "The following figure illustrates the process of custom audio rendering."
  }, {
    heading: "render-custom-audio-2",
    content: "You implement the rendering module using external methods provided by the SDK."
  }, {
    heading: "render-custom-audio-2",
    content: "You call `pullPlaybackAudioFrame` to retrieve the audio data sent by remote users."
  }, {
    heading: "prerequisites-2",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-2",
    content: "This section shows you how to implement custom audio capture and render audio from a custom source."
  }, {
    heading: "customize-the-audio-source-1",
    content: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
  }, {
    heading: "customize-the-audio-source-1",
    content: "**Custom audio capture**"
  }, {
    heading: "customize-the-audio-source-1",
    content: "Follow these steps to implement custom audio capture in your project:"
  }, {
    heading: "customize-the-audio-source-1",
    content: "After initializing `AgoraRtcEngineKit`, call `createCustomAudioTrack` to create a custom audio track and retrieve the audio track ID."
  }, {
    heading: "customize-the-audio-source-1",
    content: "Use `joinChannelByToken` to join the channel. In `AgoraRtcChannelMediaOptions`, set the `publishCustomAudioTrackId` parameter to the audio track ID you obtained. Set `publishCustomAudioTrack` to `YES` to publish the custom audio track in the channel."
  }, {
    heading: "customize-the-audio-source-1",
    content: "To play an external audio source locally using `enableCustomAudioLocalPlayback`, or to adjust the local playback volume of a custom audio track using `adjustCustomAudioPlayoutVolume`, set `enableAudioRecordingOrPlayout` to `YES` in `AgoraRtcChannelMediaOptions`."
  }, {
    heading: "customize-the-audio-source-1",
    content: "Implement the custom audio acquisition module"
  }, {
    heading: "customize-the-audio-source-1",
    content: "Agora provides a sample project CustomAudioSource.swift to demonstrate how to read PCM audio data from a local file. In production, create a custom audio acquisition module tailored to your business needs."
  }, {
    heading: "customize-the-audio-source-1",
    content: "Call `pushExternalAudioFrameRawData` to send captured audio frames to the SDK via the custom audio track. Ensure `trackId` matches the one used when joining the channel in step 2. Set `sampleRate`, `channels`, and `samples` to configure the external audio frame."
  }, {
    heading: "customize-the-audio-source-1",
    content: "For audio-video synchronization, Agora recommends using `getCurrentMonotonicTimeInMs` to obtain the system’s monotonic time and set the `timestamp`."
  }, {
    heading: "customize-the-audio-source-1",
    content: "To push audio frames in `CMSampleBuffer` format, use `pushExternalAudioFrameSampleBuffer`."
  }, {
    heading: "customize-the-audio-source-1",
    content: "To stop publishing custom audio, call `destroyCustomAudioTrack` to remove the custom audio track."
  }, {
    heading: "custom-audio-rendering-2",
    content: "This section explains how to implement custom audio rendering."
  }, {
    heading: "custom-audio-rendering-2",
    content: "To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to Raw audio processing."
  }, {
    heading: "custom-audio-rendering-2",
    content: "Follow these steps to call the raw audio data API and implement custom audio rendering in your project:"
  }, {
    heading: "custom-audio-rendering-2",
    content: "Retrieve the audio data to be played from `onRecordAudioFrame`, `onPlaybackAudioFrame`, `onMixedAudioFrame`, or `onPlaybackAudioFrameBeforeMixing`."
  }, {
    heading: "custom-audio-rendering-2",
    content: "Independently render and play the audio data."
  }, {
    heading: "reference-2",
    content: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
  }, {
    heading: "sample-projects-2",
    content: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
  }, {
    heading: "sample-projects-2",
    content: "CustomAudioSource"
  }, {
    heading: "sample-projects-2",
    content: "CustomAudioRender"
  }, {
    heading: "api-reference-2",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "api-reference-2",
    content: "`destroyCustomAudioTrack`"
  }, {
    heading: "api-reference-2",
    content: "`pushExternalAudioFrameSampleBuffer`"
  }, {
    heading: "api-reference-2",
    content: "`pushExternalAudioFrameRawData`"
  }, {
    heading: "api-reference-2",
    content: "`enableExternalAudioSink`"
  }, {
    heading: "api-reference-2",
    content: "`pullPlaybackAudioFrameRawData`"
  }, {
    heading: "api-reference-2",
    content: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
  }, {
    heading: "api-reference-2",
    content: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
  }, {
    heading: "api-reference-2",
    content: "Your app has its own audio module."
  }, {
    heading: "api-reference-2",
    content: "You need to process the captured audio with a pre-processing library for audio enhancement."
  }, {
    heading: "api-reference-2",
    content: "You need flexible device resource allocation to avoid conflicts with other services."
  }, {
    heading: "api-reference-2",
    content: "This page shows you how to capture and render audio from custom sources."
  }, {
    heading: "understand-the-tech-3",
    content: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
  }, {
    heading: "capture-custom-audio-3",
    content: "The following figure illustrates the process of custom audio capture."
  }, {
    heading: "capture-custom-audio-3",
    content: "You implement the capture module using external methods provided by the SDK."
  }, {
    heading: "capture-custom-audio-3",
    content: "You call `pushExternalAudioFrame` to send the captured audio frames to the SDK."
  }, {
    heading: "render-custom-audio-3",
    content: "The following figure illustrates the process of custom audio rendering."
  }, {
    heading: "render-custom-audio-3",
    content: "You implement the rendering module using external methods provided by the SDK."
  }, {
    heading: "render-custom-audio-3",
    content: "You call `pullPlaybackAudioFrame` to retrieve the audio data sent by remote users."
  }, {
    heading: "prerequisites-3",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "custom-audio-capture-1",
    content: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
  }, {
    heading: "custom-audio-capture-1",
    content: "**Custom audio capture**"
  }, {
    heading: "custom-audio-capture-1",
    content: "Follow these steps to implement custom audio capture in your project:"
  }, {
    heading: "custom-audio-capture-1",
    content: "Enable and configure custom audio source."
  }, {
    heading: "custom-audio-capture-1",
    content: "Before calling `joinChannel` to join the channel, call `setExternalAudioSource` to enable and configure custom audio capture."
  }, {
    heading: "custom-audio-capture-1",
    content: "Implement audio capture and processing."
  }, {
    heading: "custom-audio-capture-1",
    content: "Use methods outside the SDK to implement audio capture and processing yourself."
  }, {
    heading: "custom-audio-capture-1",
    content: "Send audio frames to SDK."
  }, {
    heading: "custom-audio-capture-1",
    content: "Call `pushAudioFrame` to send the captured audio frames to the SDK for later use."
  }, {
    heading: "custom-audio-rendering-3",
    content: "This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your app:"
  }, {
    heading: "custom-audio-rendering-3",
    content: "**Custom audio rendering workflow**"
  }, {
    heading: "custom-audio-rendering-3",
    content: "To implement custom audio rendering, use the following methods:"
  }, {
    heading: "custom-audio-rendering-3",
    content: "Enable and configure custom audio sink."
  }, {
    heading: "custom-audio-rendering-3",
    content: "Before calling `joinChannel` to join the channel, call `setExternalAudioSink` to enable and configure custom audio rendering."
  }, {
    heading: "custom-audio-rendering-3",
    content: "Pull and render remote audio data."
  }, {
    heading: "custom-audio-rendering-3",
    content: "After joining the channel, call `pullAudioFrame` to get the audio data sent by the remote user."
  }, {
    heading: "custom-audio-rendering-3",
    content: "Use your own audio renderer to process the audio data and then play the rendered data."
  }, {
    heading: "using-raw-audio-data-callback-1",
    content: "This section explains how to implement custom audio rendering."
  }, {
    heading: "using-raw-audio-data-callback-1",
    content: "To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to Raw audio processing."
  }, {
    heading: "using-raw-audio-data-callback-1",
    content: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
  }, {
    heading: "using-raw-audio-data-callback-1",
    content: "Retrieve audio data for playback using the `onRecordAudioFrame`, `onPlaybackAudioFrame`, `onMixedAudioFrame`, or `onPlaybackAudioFrameBeforeMixing` callback."
  }, {
    heading: "using-raw-audio-data-callback-1",
    content: "Independently render and play the audio data."
  }, {
    heading: "reference-3",
    content: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
  }, {
    heading: "sample-projects-3",
    content: "Agora provides an open-source CustomAudioCapture project for your reference. Download the project or inspect the source code for a more detailed example."
  }, {
    heading: "api-reference-3",
    content: "`setExternalAudioSource`"
  }, {
    heading: "api-reference-3",
    content: "`pushAudioFrame`"
  }, {
    heading: "api-reference-3",
    content: "`setExternalAudioSink`"
  }, {
    heading: "api-reference-3",
    content: "`pullAudioFrame`"
  }, {
    heading: "api-reference-3",
    content: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
  }, {
    heading: "api-reference-3",
    content: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
  }, {
    heading: "api-reference-3",
    content: "Your app has its own audio module."
  }, {
    heading: "api-reference-3",
    content: "You need to process the captured audio with a pre-processing library for audio enhancement."
  }, {
    heading: "api-reference-3",
    content: "You need flexible device resource allocation to avoid conflicts with other services."
  }, {
    heading: "api-reference-3",
    content: "This page shows you how to capture and render audio from custom sources."
  }, {
    heading: "understand-the-tech-4",
    content: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
  }, {
    heading: "prerequisites-4",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "custom-audio-capture-2",
    content: "The SDK provides the `createCustomAudioTrack` method, which enables you to create a local audio track by passing in a browser-native `MediaStreamTrack` object. This method allows you to achieve custom audio capture. To use multiple audio sources, you can call the `createCustomAudioTrack` method multiple times to create separate local audio track objects."
  }, {
    heading: "custom-audio-capture-2",
    content: "The following example uses `getUserMedia` to obtain a MediaStreamTrack object and passes it to `createCustomAudioTrack` to create a local audio track object for use with the SDK."
  }, {
    heading: "custom-audio-capture-2",
    content: "To implement custom audio processing, use the Web Audio API to obtain the `MediaStreamTrack`."
  }, {
    heading: "reference-4",
    content: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
  }, {
    heading: "api-reference-4",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "api-reference-4",
    content: "`ILocalAudioTrack`"
  }, {
    heading: "api-reference-4",
    content: "The default audio module of RTC SDK meets the need of using basic audio functions in your game. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
  }, {
    heading: "api-reference-4",
    content: "RTC SDK uses the basic audio module on the device your game runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your game, such as:"
  }, {
    heading: "api-reference-4",
    content: "Your game has its own audio module."
  }, {
    heading: "api-reference-4",
    content: "You need to process the captured audio with a pre-processing library for audio enhancement."
  }, {
    heading: "api-reference-4",
    content: "You need flexible device resource allocation to avoid conflicts with other services."
  }, {
    heading: "api-reference-4",
    content: "This page shows you how to capture and render audio from custom sources."
  }, {
    heading: "understand-the-tech-5",
    content: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
  }, {
    heading: "capture-custom-audio-4",
    content: "The following figure illustrates the process of custom audio capture."
  }, {
    heading: "capture-custom-audio-4",
    content: "You implement the capture module using external methods provided by the SDK."
  }, {
    heading: "capture-custom-audio-4",
    content: "You call `pushAudioFrame` to send the captured audio frames to the SDK."
  }, {
    heading: "render-custom-audio-4",
    content: "The following figure illustrates the process of custom audio rendering."
  }, {
    heading: "render-custom-audio-4",
    content: "You implement the rendering module using external methods provided by the SDK."
  }, {
    heading: "render-custom-audio-4",
    content: "You call `pullAudioFrame` to retrieve the audio data sent by remote users."
  }, {
    heading: "prerequisites-5",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implementation-5",
    content: "This section shows you how to implement custom audio capture and render audio from an external source using the SDK."
  }, {
    heading: "initialize-mediaengine",
    content: "Before implementing custom audio features, obtain the `MediaEngine` interface from the initialized `RtcEngine`:"
  }, {
    heading: "initialize-mediaengine",
    content: "The MediaEngine is not created directly. Instead, it's obtained as an interface from the initialized RtcEngine using the `queryInterface` method with `AGORA_IID_MEDIA_ENGINE`."
  }, {
    heading: "custom-audio-capture-3",
    content: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
  }, {
    heading: "custom-audio-capture-3",
    content: "**Custom audio capture process**"
  }, {
    heading: "custom-audio-capture-3",
    content: "Follow these steps to implement custom audio capture in your project:"
  }, {
    heading: "custom-audio-capture-3",
    content: "**Enable and configure custom audio source**\nBefore calling `joinChannel` to join the channel, call `setExternalAudioSource` to enable and configure custom audio capture."
  }, {
    heading: "custom-audio-capture-3",
    content: `**Implement audio capture and processing**
Use methods outside the SDK to implement audio capture and processing yourself.`
  }, {
    heading: "custom-audio-capture-3",
    content: "**Send audio frames to SDK**\nCall `pushAudioFrame` to send the captured audio frames to the SDK for later use."
  }, {
    heading: "custom-audio-capture-3",
    content: "Load audio data from a file and start a thread to push the frames:"
  }, {
    heading: "custom-audio-capture-3",
    content: "This class reads audio data at 10ms intervals, converts it into `AudioFrame` format, and sends it to the Agora SDK using `pushAudioFrame`."
  }, {
    heading: "custom-audio-rendering-4",
    content: "This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your game:"
  }, {
    heading: "custom-audio-rendering-4",
    content: "**Custom audio rendering workflow**"
  }, {
    heading: "custom-audio-rendering-4",
    content: "To implement custom audio rendering, use the following methods:"
  }, {
    heading: "custom-audio-rendering-4",
    content: "**Enable and configure custom audio sink**\nBefore calling `joinChannel` to join the channel, call `setExternalAudioSink` to enable and configure custom audio rendering."
  }, {
    heading: "custom-audio-rendering-4",
    content: "**Pull and render remote audio data**\nTo pull audio frames for custom rendering, call `pullAudioFrame` in a dedicated thread. After pulling the frame, send the audio buffer to your custom sound player (such as a `USoundWaveProcedural` wrapper like `AgoraSoundWaveProcedural`)."
  }, {
    heading: "custom-audio-rendering-4",
    content: "After joining the channel, call `pullAudioFrame` to get the audio data sent by the remote user."
  }, {
    heading: "custom-audio-rendering-4",
    content: "Use your own audio renderer to process the audio data and then play the rendered data."
  }, {
    heading: "using-raw-audio-data-callback-2",
    content: "This section explains how to implement custom audio rendering."
  }, {
    heading: "using-raw-audio-data-callback-2",
    content: "To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to Raw audio processing."
  }, {
    heading: "using-raw-audio-data-callback-2",
    content: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
  }, {
    heading: "using-raw-audio-data-callback-2",
    content: "Retrieve audio data for playback using the `onRecordAudioFrame`, `onPlaybackAudioFrame`, `onMixedAudioFrame`, or `onPlaybackAudioFrameBeforeMixing` callback."
  }, {
    heading: "using-raw-audio-data-callback-2",
    content: "Independently render and play the audio data."
  }, {
    heading: "reference-5",
    content: "This section explains how to implement different sound effects and audio mixing in your game, covering essential steps and code snippets."
  }, {
    heading: "sample-projects-4",
    content: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
  }, {
    heading: "sample-projects-4",
    content: "CustomCaptureAudio"
  }, {
    heading: "sample-projects-4",
    content: "CustomRenderAudio"
  }, {
    heading: "api-reference-5",
    content: "`setExternalAudioSource`"
  }, {
    heading: "api-reference-5",
    content: "`pushAudioFrame`"
  }, {
    heading: "api-reference-5",
    content: "`setExternalAudioSink`"
  }, {
    heading: "api-reference-5",
    content: "`pullAudioFrame`"
  }, {
    heading: "api-reference-5",
    content: "`createCustomAudioTrack`"
  }, {
    heading: "api-reference-5",
    content: "`destroyCustomAudioTrack`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "capture-custom-audio",
    content: "Capture custom audio"
  }, {
    id: "render-custom-audio",
    content: "Render custom audio"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implementation",
    content: "Implementation"
  }, {
    id: "custom-audio-capture",
    content: "Custom audio capture"
  }, {
    id: "custom-audio-rendering",
    content: "Custom audio rendering"
  }, {
    id: "using-raw-audio-data-callback",
    content: "Using raw audio data callback"
  }, {
    id: "reference",
    content: "Reference"
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
    id: "capture-custom-audio-1",
    content: "Capture custom audio"
  }, {
    id: "render-custom-audio-1",
    content: "Render custom audio"
  }, {
    id: "prerequisites-1",
    content: "Prerequisites"
  }, {
    id: "implementation-1",
    content: "Implementation"
  }, {
    id: "customize-the-audio-source",
    content: "Customize the audio source"
  }, {
    id: "custom-audio-rendering-1",
    content: "Custom audio rendering"
  }, {
    id: "reference-1",
    content: "Reference"
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
    id: "capture-custom-audio-2",
    content: "Capture custom audio"
  }, {
    id: "render-custom-audio-2",
    content: "Render custom audio"
  }, {
    id: "prerequisites-2",
    content: "Prerequisites"
  }, {
    id: "implementation-2",
    content: "Implementation"
  }, {
    id: "customize-the-audio-source-1",
    content: "Customize the audio source"
  }, {
    id: "custom-audio-rendering-2",
    content: "Custom audio rendering"
  }, {
    id: "reference-2",
    content: "Reference"
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
    id: "capture-custom-audio-3",
    content: "Capture custom audio"
  }, {
    id: "render-custom-audio-3",
    content: "Render custom audio"
  }, {
    id: "prerequisites-3",
    content: "Prerequisites"
  }, {
    id: "implementation-3",
    content: "Implementation"
  }, {
    id: "custom-audio-capture-1",
    content: "Custom audio capture"
  }, {
    id: "custom-audio-rendering-3",
    content: "Custom audio rendering"
  }, {
    id: "using-raw-audio-data-callback-1",
    content: "Using raw audio data callback"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "sample-projects-3",
    content: "Sample projects"
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
    id: "custom-audio-capture-2",
    content: "Custom audio capture"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "understand-the-tech-5",
    content: "Understand the tech"
  }, {
    id: "capture-custom-audio-4",
    content: "Capture custom audio"
  }, {
    id: "render-custom-audio-4",
    content: "Render custom audio"
  }, {
    id: "prerequisites-5",
    content: "Prerequisites"
  }, {
    id: "implementation-5",
    content: "Implementation"
  }, {
    id: "initialize-mediaengine",
    content: "Initialize MediaEngine"
  }, {
    id: "custom-audio-capture-3",
    content: "Custom audio capture"
  }, {
    id: "custom-audio-rendering-4",
    content: "Custom audio rendering"
  }, {
    id: "using-raw-audio-data-callback-2",
    content: "Using raw audio data callback"
  }, {
    id: "reference-5",
    content: "Reference"
  }, {
    id: "sample-projects-4",
    content: "Sample projects"
  }, {
    id: "api-reference-5",
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
  depth: 4,
  url: "#capture-custom-audio",
  title: _jsx(_Fragment, {
    children: "Capture custom audio"
  })
}, {
  depth: 4,
  url: "#render-custom-audio",
  title: _jsx(_Fragment, {
    children: "Render custom audio"
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
  url: "#custom-audio-capture",
  title: _jsx(_Fragment, {
    children: "Custom audio capture"
  })
}, {
  depth: 3,
  url: "#custom-audio-rendering",
  title: _jsx(_Fragment, {
    children: "Custom audio rendering"
  })
}, {
  depth: 3,
  url: "#using-raw-audio-data-callback",
  title: _jsx(_Fragment, {
    children: "Using raw audio data callback"
  })
}, {
  depth: 2,
  url: "#reference",
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
  depth: 4,
  url: "#capture-custom-audio-1",
  title: _jsx(_Fragment, {
    children: "Capture custom audio"
  })
}, {
  depth: 4,
  url: "#render-custom-audio-1",
  title: _jsx(_Fragment, {
    children: "Render custom audio"
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
  url: "#customize-the-audio-source",
  title: _jsx(_Fragment, {
    children: "Customize the audio source"
  })
}, {
  depth: 3,
  url: "#custom-audio-rendering-1",
  title: _jsx(_Fragment, {
    children: "Custom audio rendering"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  depth: 4,
  url: "#capture-custom-audio-2",
  title: _jsx(_Fragment, {
    children: "Capture custom audio"
  })
}, {
  depth: 4,
  url: "#render-custom-audio-2",
  title: _jsx(_Fragment, {
    children: "Render custom audio"
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
  url: "#customize-the-audio-source-1",
  title: _jsx(_Fragment, {
    children: "Customize the audio source"
  })
}, {
  depth: 3,
  url: "#custom-audio-rendering-2",
  title: _jsx(_Fragment, {
    children: "Custom audio rendering"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  depth: 4,
  url: "#capture-custom-audio-3",
  title: _jsx(_Fragment, {
    children: "Capture custom audio"
  })
}, {
  depth: 4,
  url: "#render-custom-audio-3",
  title: _jsx(_Fragment, {
    children: "Render custom audio"
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
  url: "#custom-audio-capture-1",
  title: _jsx(_Fragment, {
    children: "Custom audio capture"
  })
}, {
  depth: 3,
  url: "#custom-audio-rendering-3",
  title: _jsx(_Fragment, {
    children: "Custom audio rendering"
  })
}, {
  depth: 3,
  url: "#using-raw-audio-data-callback-1",
  title: _jsx(_Fragment, {
    children: "Using raw audio data callback"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-projects-3",
  title: _jsx(_Fragment, {
    children: "Sample projects"
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
  url: "#custom-audio-capture-2",
  title: _jsx(_Fragment, {
    children: "Custom audio capture"
  })
}, {
  depth: 2,
  url: "#reference-4",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  depth: 4,
  url: "#capture-custom-audio-4",
  title: _jsx(_Fragment, {
    children: "Capture custom audio"
  })
}, {
  depth: 4,
  url: "#render-custom-audio-4",
  title: _jsx(_Fragment, {
    children: "Render custom audio"
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
  url: "#initialize-mediaengine",
  title: _jsx(_Fragment, {
    children: "Initialize MediaEngine"
  })
}, {
  depth: 3,
  url: "#custom-audio-capture-3",
  title: _jsx(_Fragment, {
    children: "Custom audio capture"
  })
}, {
  depth: 3,
  url: "#custom-audio-rendering-4",
  title: _jsx(_Fragment, {
    children: "Custom audio rendering"
  })
}, {
  depth: 3,
  url: "#using-raw-audio-data-callback-2",
  title: _jsx(_Fragment, {
    children: "Using raw audio data callback"
  })
}, {
  depth: 2,
  url: "#reference-5",
  title: _jsx(_Fragment, {
    children: "Reference"
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
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
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","macos","windows","web","unreal"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
      }), _jsx(_components.p, {
        children: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Your app has its own audio module."
        }), `
`, _jsx(_components.li, {
          children: "You need to process the captured audio with a pre-processing library for audio enhancement."
        }), `
`, _jsx(_components.li, {
          children: "You need flexible device resource allocation to avoid conflicts with other services."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to capture and render audio from custom sources."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
      }), _jsx(_components.h4, {
        id: "capture-custom-audio",
        children: "Capture custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio capture."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg",
          alt: "Audio data transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the capture module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pushExternalAudioFrame"
            }), " to send the captured audio frames to the SDK."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "render-custom-audio",
        children: "Render custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio rendering."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg",
          alt: "Audio Data Transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the rendering module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pullPlaybackAudioFrame"
            }), " to retrieve the audio data sent by remote users."]
          }), `
`]
        }), `
`]
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
        children: "This section shows you how to implement custom audio capture and render audio from a custom source."
      }), _jsx(_components.h3, {
        id: "custom-audio-capture",
        children: "Custom audio capture"
      }), _jsx(_components.p, {
        children: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio capture process"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg",
          alt: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: "Follow these steps to implement custom audio capture in your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["After initializing ", _jsx(_components.code, {
              children: "RtcEngine"
            }), ", call ", _jsx(_components.code, {
              children: "createCustomAudioTrack"
            }), " to create a custom audio track and obtain the audio track ID."]
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
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "AudioTrackConfig config "
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
                        children: " AudioTrackConfig"
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
                        children: "  config.enableLocalPlayback "
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
                        children: "  customAudioTrack "
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "createCustomAudioTrack"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(Constants.AudioTrackType.AUDIO_TRACK_MIXABLE, config);"
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
                    children: [_jsxs(_components.span, {
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
                        children: " config "
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
                        children: " AudioTrackConfig"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "()."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "apply"
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
                        children: "    enableLocalPlayback "
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
                        children: "  customAudioTrack "
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "createCustomAudioTrack"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(Constants.AudioTrackType.AUDIO_TRACK_MIXABLE, config)"
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
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "joinChannel"
            }), " to join the channel. In ", _jsx(_components.code, {
              children: "ChannelMediaOptions"
            }), ", set ", _jsx(_components.code, {
              children: "publishCustomAudioTrackId"
            }), " to the audio track ID obtained in step 1, and set ", _jsx(_components.code, {
              children: "publishCustomAudioTrack"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), " to publish the custom audio track."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["To use ", _jsx(_components.code, {
                  children: "enableCustomAudioLocalPlayback"
                }), " for local playback of an external audio source, or to adjust the volume of a custom audio track with ", _jsx(_components.code, {
                  children: "adjustCustomAudioPlayoutVolume"
                }), ", set ", _jsx(_components.code, {
                  children: "enableAudioRecordingOrPlayout"
                }), " to ", _jsx(_components.code, {
                  children: "true"
                }), " in ", _jsx(_components.code, {
                  children: "ChannelMediaOptions"
                }), "."]
              })
            })
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
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "ChannelMediaOptions option "
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
                        children: " ChannelMediaOptions"
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
                        children: "  option.clientRoleType "
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
                        children: " Constants.CLIENT_ROLE_BROADCASTER;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  option.autoSubscribeAudio "
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
                        children: "  option.autoSubscribeVideo "
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
                        children: "  // In the audio self-collection use-case, the audio collected by the microphone is not published"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  option.publishMicrophoneTrack "
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
                        children: "  // Publish the custom audio track"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  publishCustomAudioTrack "
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
                        children: "  // Set the custom audio track ID"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  publishCustomAudioTrackId "
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
                        children: " customAudioTrack"
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
                        children: "  // Join the channel"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  val res "
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "joinChannel"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(accessToken, channelId, "
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
                        children: ", option)"
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
                    children: [_jsxs(_components.span, {
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
                        children: " option "
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
                        children: " ChannelMediaOptions"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "()."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "apply"
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
                        children: "    clientRoleType "
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
                        children: " Constants.CLIENT_ROLE_BROADCASTER"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    autoSubscribeAudio "
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
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    autoSubscribeVideo "
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
                        children: "    // In the audio self-collection use-case, the audio collected by the microphone is not published"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    publishMicrophoneTrack "
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
                        children: "    // Publish the custom audio track"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    publishCustomAudioTrack "
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
                        children: "    // Set the custom audio track ID"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    publishCustomAudioTrackId "
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
                        children: " customAudioTrack"
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
                      className: "line"
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "  // Join the channel"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  val"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " res "
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "joinChannel"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(accessToken, channelId, "
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
                        children: ", option)"
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
`, _jsxs(_components.p, {
            children: ["Agora provides the ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/utils/AudioFileReader.java",
              children: "AudioFileReader.java"
            }), " sample to demonstrate how to read and publish PCM-format audio data from a local file. In a production environment, you create a custom audio acquisition module based on your business needs."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "pushExternalAudioFrame"
            }), " to send the captured audio frame to the SDK through the custom audio track. Ensure that the ", _jsx(_components.code, {
              children: "trackId"
            }), " matches the audio track ID you obtained by calling ", _jsx(_components.code, {
              children: "createCustomAudioTrack"
            }), ". Set ", _jsx(_components.code, {
              children: "sampleRate"
            }), ", ", _jsx(_components.code, {
              children: "channels"
            }), ", and ", _jsx(_components.code, {
              children: "bytesPerSample"
            }), " to define the sampling rate, number of channels, and bytes per sample of the external audio frame."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["For audio and video synchronization, Agora recommends calling ", _jsx(_components.code, {
                  children: "getCurrentMonotonicTimeInMs"
                }), " to get the system’s current monotonic time and setting the ", _jsx(_components.code, {
                  children: "timestamp"
                }), " accordingly."]
              })
            })
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
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "audioPushingHelper "
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
                        children: " AudioFileReader"
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
                        children: "requireContext"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(), (buffer, timestamp) "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "->"
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
                        children: "    if"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (joined "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "&&"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " engine "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "!="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " null"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " &&"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " customAudioTrack "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "!="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " -"
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
                        children: ") {"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "      // Push external audio frames to SDK"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "      int"
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "pushExternalAudioFrame"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(buffer, timestamp,"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "          AudioFileReader.SAMPLE_RATE,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "          AudioFileReader.SAMPLE_NUM_OF_CHANNEL,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "          Constants.BytesPerSample.TWO_BYTES_PER_SAMPLE,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "          customAudioTrack);"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      Log."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "i"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(TAG, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: '"pushExternalAudioFrame times:"'
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
                        children: " ("
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
                        children: "\\pushTimes) "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "+"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: ' ", ret="'
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
                        children: " ret);"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    }"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  });"
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
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "audioPushingHelper "
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
                        children: " AudioFileReader"
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
                        children: "requireContext"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "()) { buffer, timestamp "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "->"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "    if"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (joined "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "&&"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " engine "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "!="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " null"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " &&"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " customAudioTrack "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "!="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " -"
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
                        children: ") {"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "      // Push external audio frames to SDK"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "      val"
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "pushExternalAudioFrame"
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
                        children: "        buffer, timestamp,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        AudioFileReader.SAMPLE_RATE,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        AudioFileReader.SAMPLE_NUM_OF_CHANNEL,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        Constants.BytesPerSample.TWO_BYTES_PER_SAMPLE,"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        customAudioTrack"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      )"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      Log."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "i"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(TAG, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: '"pushExternalAudioFrame times: '
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "\\$"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: "{++pushTimes"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "\\}"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#032F62",
                          "--shiki-dark": "#9ECBFF"
                        },
                        children: ", ret="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "$ret"
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
                        children: "    }"
                      })
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
`, _jsxs(_components.p, {
            children: ["To stop publishing custom audio, call ", _jsx(_components.code, {
              children: "destroyCustomAudioTrack"
            }), " to destroy the custom audio track."]
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
                        children: "// Destroy the custom audio track"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "destroyCustomAudioTrack"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(customAudioTrack);"
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
                        children: "// Destroy the custom audio track"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "destroyCustomAudioTrack"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(customAudioTrack)"
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
        id: "custom-audio-rendering",
        children: "Custom audio rendering"
      }), _jsx(_components.p, {
        children: "This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your app:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio rendering workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-render.svg",
          alt: "Custom Audio Rendering Workflow"
        })
      }), _jsx(_components.p, {
        children: "To implement custom audio rendering, use the following methods:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Before calling ", _jsx(_components.code, {
              children: "joinChannel"
            }), ", use ", _jsx(_components.code, {
              children: "setExternalAudioSink"
            }), " to enable and configure custom audio rendering."]
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
                        children: "setExternalAudioSink"
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
                        children: "    true"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ",   "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Enable custom audio rendering"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "    44100"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ",   "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Sampling rate (Hz). Set this value to 16000, 32000, 441000, or 48000"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "    1"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "     // Number of channels for the custom audio source. Set this value to 1 or 2"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  );"
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
                        children: "setExternalAudioSink"
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
                        children: "    true"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ",   "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Enable custom audio rendering"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "    44100"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ",   "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "// Sampling rate (Hz). Set this value to 16000, 32000, 441000, or 48000"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "    1"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "     // Number of channels for the custom audio source. Set this value to 1 or 2"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  )"
                      })
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
`, _jsxs(_components.p, {
            children: ["After joining the channel, call ", _jsx(_components.code, {
              children: "pullPlaybackAudioFrame"
            }), " to get audio data sent by remote users. Use your own audio renderer to process the audio data and then play the rendered data."]
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
                    children: [_jsxs(_components.span, {
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
                        children: " class"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " FileThread"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " implements"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " Runnable"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " {"
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
                        children: "    @"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "Override"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "    public"
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
                        children: " run"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "() {"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "      while"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (mPull) {"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " lengthInByte "
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
                        children: " 48000"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " /"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 1000"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " *"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 2"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " *"
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
                        children: " *"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 10"
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
                        children: "        ByteBuffer frame "
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
                        children: " ByteBuffer."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "allocateDirect"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(lengthInByte);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        int"
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "pullPlaybackAudioFrame"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(frame, lengthInByte);"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        byte"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "[] data "
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " byte"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "[frame."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "remaining"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "()];"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        frame."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "get"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(data, "
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
                        children: ", data.length);"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "        // Write to a local file or render using a player"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        FileIOUtils."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "writeFileFromBytesByChannel"
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
                        children: '"/sdcard/agora/pull_48k.pcm"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ", data, "
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
                        children: "true"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        try"
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
                        children: "          Thread."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "sleep"
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
                        children: "10"
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
                        children: "        } "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "catch"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (InterruptedException "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: "e"
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
                        children: "          e."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "printStackTrace"
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
                        children: "        }"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      }"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    }"
                      })
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
                    children: [_jsxs(_components.span, {
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
                        children: " class"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " FileThread"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " : "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "Runnable"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " {"
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
                        children: "    override"
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
                        children: " run"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "() {"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "      while"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (mPull) {"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        val"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " lengthInByte "
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
                        children: " 48000"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " /"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 1000"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " *"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 2"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " *"
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
                        children: " *"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 10"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        val"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " frame "
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
                        children: " ByteBuffer."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "allocateDirect"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(lengthInByte)"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        val"
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
                        children: " engine."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "pullPlaybackAudioFrame"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(frame, lengthInByte)"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        val"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " data"
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
                        children: " ByteArray"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(frame."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "remaining"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "())"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        frame."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "get"
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
                        children: "data"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "data"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ".size)"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6A737D",
                          "--shiki-dark": "#6A737D"
                        },
                        children: "        // Write to a local file or render using a player"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        FileIOUtils."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "writeFileFromBytesByChannel"
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
                        children: '"/sdcard/agora/pull_48k.pcm"'
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
                        children: "data"
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
                        children: "true"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        try"
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
                        children: "          Thread."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "sleep"
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
                        children: "10"
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
                        children: "        } "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "catch"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (e: "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "InterruptedException"
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
                        children: "          e."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "printStackTrace"
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
                        children: "        }"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      }"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    }"
                      })
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
        id: "using-raw-audio-data-callback",
        children: "Using raw audio data callback"
      }), _jsx(_components.p, {
        children: "This section explains how to implement custom audio rendering."
      }), _jsxs(_components.p, {
        children: ["To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to ", _jsx(_components.a, {
          href: "stream-raw-audio.mdx",
          children: "Raw audio processing"
        }), "."]
      }), _jsx(_components.p, {
        children: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Retrieve audio data for playback using the ", _jsx(_components.code, {
              children: "onRecordAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onPlaybackAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onMixedAudioFrame"
            }), ", or ", _jsx(_components.code, {
              children: "onPlaybackAudioFrameBeforeMixing"
            }), " callback."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Independently render and play the audio data."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
      }), _jsx(_components.h3, {
        id: "sample-projects",
        children: "Sample projects"
      }), _jsx(_components.p, {
        children: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/customaudio/CustomAudioSource.java",
            children: "CustomAudioSource"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/advanced/customaudio/CustomAudioRender.java",
            children: "CustomAudioRender"
          })
        }), `
`]
      }), _jsx(_components.h3, {
        id: "api-reference",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaengine.html#api_imediaengine_createcustomaudiotrack",
              children: _jsx(_components.code, {
                children: "createCustomAudioTrack"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_imediaengine.html#api_imediaengine_destroycustomaudiotrack",
              children: _jsx(_components.code, {
                children: "destroyCustomAudioTrack"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pushaudioframe2",
              children: _jsx(_components.code, {
                children: "pushExternalAudioFrame"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosink",
              children: _jsx(_components.code, {
                children: "setExternalAudioSink"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_imediaengine_pullaudioframe",
              children: [_jsx(_components.code, {
                children: "pullPlaybackAudioFrame"
              }), " [1/2]"]
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_pullaudioframe2",
              children: [_jsx(_components.code, {
                children: "pullPlaybackAudioFrame"
              }), " [2/2]"]
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
        children: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
      }), _jsx(_components.p, {
        children: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Your app has its own audio module."
        }), `
`, _jsx(_components.li, {
          children: "You need to process the captured audio with a pre-processing library for audio enhancement."
        }), `
`, _jsx(_components.li, {
          children: "You need flexible device resource allocation to avoid conflicts with other services."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to capture and render audio from custom sources."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
      }), _jsx(_components.h4, {
        id: "capture-custom-audio-1",
        children: "Capture custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio capture."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg",
          alt: "Audio data transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the capture module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pushExternalAudioFrame"
            }), " to send the captured audio frames to the SDK."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "render-custom-audio-1",
        children: "Render custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio rendering."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg",
          alt: "Audio Data Transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the rendering module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pullPlaybackAudioFrame"
            }), " to retrieve the audio data sent by remote users."]
          }), `
`]
        }), `
`]
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
        children: "This section shows you how to implement custom audio capture and render audio from a custom source."
      }), _jsx(_components.h3, {
        id: "customize-the-audio-source",
        children: "Customize the audio source"
      }), _jsx(_components.p, {
        children: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg",
          alt: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: "Follow these steps to implement custom audio capture in your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["After initializing ", _jsx(_components.code, {
              children: "AgoraRtcEngineKit"
            }), ", call ", _jsx(_components.code, {
              children: "createCustomAudioTrack"
            }), " to create a custom audio track and retrieve the audio track ID."]
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
                children: [_jsxs(_components.span, {
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
                    children: " audioTrack "
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
                    children: " AgoraAudioTrackConfig"
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
                    children: "audioTrack.enableLocalPlayback "
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "trackId "
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
                    children: " agoraKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "createCustomAudioTrack"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(.mixable, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "config"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": audioTrack)"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.code, {
              children: "joinChannelByToken"
            }), " to join the channel. In ", _jsx(_components.code, {
              children: "AgoraRtcChannelMediaOptions"
            }), ", set the ", _jsx(_components.code, {
              children: "publishCustomAudioTrackId"
            }), " parameter to the audio track ID you obtained. Set ", _jsx(_components.code, {
              children: "publishCustomAudioTrack"
            }), " to ", _jsx(_components.code, {
              children: "YES"
            }), " to publish the custom audio track in the channel."]
          }), `
`, _jsx(CalloutContainer, {
            type: "warning",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["To play an external audio source locally using ", _jsx(_components.code, {
                  children: "enableCustomAudioLocalPlayback"
                }), ", or to adjust the local playback volume of a custom audio track using ", _jsx(_components.code, {
                  children: "adjustCustomAudioPlayoutVolume"
                }), ", set ", _jsx(_components.code, {
                  children: "enableAudioRecordingOrPlayout"
                }), " to ", _jsx(_components.code, {
                  children: "YES"
                }), " in ", _jsx(_components.code, {
                  children: "AgoraRtcChannelMediaOptions"
                }), "."]
              })
            })
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
            children: [_jsxs(_components.span, {
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
                children: " option "
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
                children: " AgoraRtcChannelMediaOptions"
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
                children: "// Disable microphone track"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.publishMicrophoneTrack "
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
                children: "// Enable the custom audio track"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.publishCustomAudioTrack "
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
                children: "// Set the custom audio track ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.publishCustomAudioTrackId "
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
                children: " Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(trackId)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.clientRoleType "
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
                children: " GlobalSettings.shared."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getUserRole"
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
                children: "NetworkManager.shared."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "generateToken"
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
                children: "channelName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": channelName, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "success"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": { token "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "in"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Join the channel"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  let"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " result "
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
                children: " self"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".agoraKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "joinChannel"
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
                children: "byToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": token, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "channelId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": channelName, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "uid"
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "mediaOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": option)"
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
                children: " result "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "!="
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
                children: "    self"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "showAlert"
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
                children: "title"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Error"'
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
                children: "message"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Failed to join the channel: '
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\\(result)"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '. Check your parameters."'
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
                children: "})"
              })
            })]
          })
        })
      }), _jsxs(_components.ol, {
        start: "3",
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Implement the custom audio acquisition module"
          }), `
`, _jsxs(_components.p, {
            children: ["Agora provides a sample project ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomAudioSource",
              children: "CustomAudioSource.swift"
            }), " to demonstrate how to read PCM audio data from a local file. In production, create a custom audio acquisition module tailored to your business needs."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "pushExternalAudioFrameRawData"
            }), " to send captured audio frames to the SDK via the custom audio track. Ensure ", _jsx(_components.code, {
              children: "trackId"
            }), " matches the one used when joining the channel in step 2. Set ", _jsx(_components.code, {
              children: "sampleRate"
            }), ", ", _jsx(_components.code, {
              children: "channels"
            }), ", and ", _jsx(_components.code, {
              children: "samples"
            }), " to configure the external audio frame."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["For audio-video synchronization, Agora recommends using ", _jsx(_components.code, {
                    children: "getCurrentMonotonicTimeInMs"
                  }), " to obtain the system’s monotonic time and set the ", _jsx(_components.code, {
                    children: "timestamp"
                  }), "."]
                }), `
`, _jsxs(_components.li, {
                  children: ["To push audio frames in ", _jsx(_components.code, {
                    children: "CMSampleBuffer"
                  }), " format, use ", _jsx(_components.code, {
                    children: "pushExternalAudioFrameSampleBuffer"
                  }), "."]
                }), `
`]
              })
            })
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "extension"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CustomAudioSource"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AgoraPcmSourcePushDelegate "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "{"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onAudioFrame"
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
                children: "data"
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
                children: "UnsafeMutablePointer"
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
                children: "UInt8"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    agoraKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "pushExternalAudioFrameRawData"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(data,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      samples"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": samples,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      sampleRate"
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
                children: "Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(sampleRate),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      channels"
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
                children: "Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(audioChannel),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      trackId"
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
                children: "Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(trackId),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      timestamp"
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
            })]
          })
        })
      }), _jsxs(_components.ol, {
        start: "5",
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["To stop publishing custom audio, call ", _jsx(_components.code, {
              children: "destroyCustomAudioTrack"
            }), " to remove the custom audio track."]
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
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
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
                    children: "destroyCustomAudioTrack"
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
                    children: "Int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(trackId))"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "custom-audio-rendering-1",
        children: "Custom audio rendering"
      }), _jsx(_components.p, {
        children: "This section shows you how to implement custom audio rendering."
      }), _jsxs(_components.p, {
        children: ["To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to ", _jsx(_components.a, {
          href: "stream-raw-audio.mdx",
          children: "Raw audio processing"
        }), "."]
      }), _jsx(_components.p, {
        children: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Retrieve the audio data to be played from ", _jsx(_components.code, {
              children: "onRecordAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onPlaybackAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onMixedAudioFrame"
            }), ", or ", _jsx(_components.code, {
              children: "onPlaybackAudioFrameBeforeMixing"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Independently render and play the audio data."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
      }), _jsx(_components.h3, {
        id: "sample-projects-1",
        children: "Sample projects"
      }), _jsx(_components.p, {
        children: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomAudioSource",
            children: "CustomAudioSource"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/CustomAudioRender",
            children: "CustomAudioRender"
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
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack(_:config:)",
            children: _jsx(_components.code, {
              children: "createCustomAudioTrack"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/destroycustomaudiotrack(_:)",
            children: _jsx(_components.code, {
              children: "destroyCustomAudioTrack"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/play()",
            children: _jsx(_components.code, {
              children: "pushExternalAudioFrameSampleBuffer"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer(_:)",
            children: _jsx(_components.code, {
              children: "pushExternalAudioFrameRawData"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableexternalaudiosink(_:samplerate:channels:)",
            children: _jsx(_components.code, {
              children: "enableExternalAudioSink"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/pullplaybackaudioframerawdata(_:lengthinbyte:)",
            children: _jsx(_components.code, {
              children: "pullPlaybackAudioFrameRawData"
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
        children: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
      }), _jsx(_components.p, {
        children: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Your app has its own audio module."
        }), `
`, _jsx(_components.li, {
          children: "You need to process the captured audio with a pre-processing library for audio enhancement."
        }), `
`, _jsx(_components.li, {
          children: "You need flexible device resource allocation to avoid conflicts with other services."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to capture and render audio from custom sources."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
      }), _jsx(_components.h4, {
        id: "capture-custom-audio-2",
        children: "Capture custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio capture."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg",
          alt: "Audio data transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the capture module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pushExternalAudioFrame"
            }), " to send the captured audio frames to the SDK."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "render-custom-audio-2",
        children: "Render custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio rendering."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg",
          alt: "Audio Data Transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the rendering module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pullPlaybackAudioFrame"
            }), " to retrieve the audio data sent by remote users."]
          }), `
`]
        }), `
`]
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
        children: "This section shows you how to implement custom audio capture and render audio from a custom source."
      }), _jsx(_components.h3, {
        id: "customize-the-audio-source-1",
        children: "Customize the audio source"
      }), _jsx(_components.p, {
        children: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg",
          alt: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: "Follow these steps to implement custom audio capture in your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["After initializing ", _jsx(_components.code, {
              children: "AgoraRtcEngineKit"
            }), ", call ", _jsx(_components.code, {
              children: "createCustomAudioTrack"
            }), " to create a custom audio track and retrieve the audio track ID."]
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
                children: [_jsxs(_components.span, {
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
                    children: " audioTrack "
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
                    children: " AgoraAudioTrackConfig"
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
                    children: "audioTrack.enableLocalPlayback "
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "trackId "
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
                    children: " agoraKit."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "createCustomAudioTrack"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(.mixable, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: "config"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ": audioTrack)"
                  })]
                })]
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Use ", _jsx(_components.code, {
              children: "joinChannelByToken"
            }), " to join the channel. In ", _jsx(_components.code, {
              children: "AgoraRtcChannelMediaOptions"
            }), ", set the ", _jsx(_components.code, {
              children: "publishCustomAudioTrackId"
            }), " parameter to the audio track ID you obtained. Set ", _jsx(_components.code, {
              children: "publishCustomAudioTrack"
            }), " to ", _jsx(_components.code, {
              children: "YES"
            }), " to publish the custom audio track in the channel."]
          }), `
`, _jsx(CalloutContainer, {
            type: "warning",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["To play an external audio source locally using ", _jsx(_components.code, {
                  children: "enableCustomAudioLocalPlayback"
                }), ", or to adjust the local playback volume of a custom audio track using ", _jsx(_components.code, {
                  children: "adjustCustomAudioPlayoutVolume"
                }), ", set ", _jsx(_components.code, {
                  children: "enableAudioRecordingOrPlayout"
                }), " to ", _jsx(_components.code, {
                  children: "YES"
                }), " in ", _jsx(_components.code, {
                  children: "AgoraRtcChannelMediaOptions"
                }), "."]
              })
            })
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
            children: [_jsxs(_components.span, {
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
                children: " option "
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
                children: " AgoraRtcChannelMediaOptions"
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
                children: "// Disable microphone track"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.publishMicrophoneTrack "
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
                children: "// Enable the custom audio track"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.publishCustomAudioTrack "
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
                children: "// Set the custom audio track ID"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.publishCustomAudioTrackId "
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
                children: " Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(trackId)"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "option.clientRoleType "
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
                children: " GlobalSettings.shared."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "getUserRole"
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
                children: "NetworkManager.shared."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "generateToken"
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
                children: "channelName"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": channelName, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "success"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": { token "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "in"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Join the channel"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  let"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " result "
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
                children: " self"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ".agoraKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "joinChannel"
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
                children: "byToken"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": token, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "channelId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": channelName, "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "uid"
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
                children: ", "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "mediaOptions"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": option)"
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
                children: " result "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "!="
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
                children: "    self"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "showAlert"
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
                children: "title"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Error"'
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
                children: "message"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '"Failed to join the channel: '
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "\\(result)"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: '. Check your parameters."'
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
                children: "})"
              })
            })]
          })
        })
      }), _jsxs(_components.ol, {
        start: "3",
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Implement the custom audio acquisition module"
          }), `
`, _jsxs(_components.p, {
            children: ["Agora provides a sample project ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/CustomAudioSource",
              children: "CustomAudioSource.swift"
            }), " to demonstrate how to read PCM audio data from a local file. In production, create a custom audio acquisition module tailored to your business needs."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "pushExternalAudioFrameRawData"
            }), " to send captured audio frames to the SDK via the custom audio track. Ensure ", _jsx(_components.code, {
              children: "trackId"
            }), " matches the one used when joining the channel in step 2. Set ", _jsx(_components.code, {
              children: "sampleRate"
            }), ", ", _jsx(_components.code, {
              children: "channels"
            }), ", and ", _jsx(_components.code, {
              children: "samples"
            }), " to configure the external audio frame."]
          }), `
`, _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["For audio-video synchronization, Agora recommends using ", _jsx(_components.code, {
                    children: "getCurrentMonotonicTimeInMs"
                  }), " to obtain the system’s monotonic time and set the ", _jsx(_components.code, {
                    children: "timestamp"
                  }), "."]
                }), `
`, _jsxs(_components.li, {
                  children: ["To push audio frames in ", _jsx(_components.code, {
                    children: "CMSampleBuffer"
                  }), " format, use ", _jsx(_components.code, {
                    children: "pushExternalAudioFrameSampleBuffer"
                  }), "."]
                }), `
`]
              })
            })
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
            children: [_jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "extension"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " CustomAudioSource"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "AgoraPcmSourcePushDelegate "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "{"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  func"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " onAudioFrame"
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
                children: "data"
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
                children: "UnsafeMutablePointer"
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
                children: "UInt8"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">) {"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    agoraKit."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "pushExternalAudioFrameRawData"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(data,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      samples"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ": samples,"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      sampleRate"
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
                children: "Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(sampleRate),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      channels"
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
                children: "Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(audioChannel),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      trackId"
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
                children: "Int"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(trackId),"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "                      timestamp"
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
            })]
          })
        })
      }), _jsxs(_components.ol, {
        start: "5",
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["To stop publishing custom audio, call ", _jsx(_components.code, {
              children: "destroyCustomAudioTrack"
            }), " to remove the custom audio track."]
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
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
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
                    children: "destroyCustomAudioTrack"
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
                    children: "Int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(trackId))"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "custom-audio-rendering-2",
        children: "Custom audio rendering"
      }), _jsx(_components.p, {
        children: "This section explains how to implement custom audio rendering."
      }), _jsxs(_components.p, {
        children: ["To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to ", _jsx(_components.a, {
          href: "stream-raw-audio.mdx",
          children: "Raw audio processing"
        }), "."]
      }), _jsx(_components.p, {
        children: "Follow these steps to call the raw audio data API and implement custom audio rendering in your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Retrieve the audio data to be played from ", _jsx(_components.code, {
              children: "onRecordAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onPlaybackAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onMixedAudioFrame"
            }), ", or ", _jsx(_components.code, {
              children: "onPlaybackAudioFrameBeforeMixing"
            }), "."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Independently render and play the audio data."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
      }), _jsx(_components.h3, {
        id: "sample-projects-2",
        children: "Sample projects"
      }), _jsx(_components.p, {
        children: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/CustomAudioSource",
            children: "CustomAudioSource"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/CustomAudioRender",
            children: "CustomAudioRender"
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
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/createcustomaudiotrack(_:config:)",
            children: _jsx(_components.code, {
              children: "createCustomAudioTrack"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/destroycustomaudiotrack(_:)",
            children: _jsx(_components.code, {
              children: "destroyCustomAudioTrack"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcmediaplayerprotocol/play()",
            children: _jsx(_components.code, {
              children: "pushExternalAudioFrameSampleBuffer"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pushexternalaudioframesamplebuffer(_:)",
            children: _jsx(_components.code, {
              children: "pushExternalAudioFrameRawData"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableexternalaudiosink(_:samplerate:channels:)",
            children: _jsx(_components.code, {
              children: "enableExternalAudioSink"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/pullplaybackaudioframerawdata(_:lengthinbyte:)",
            children: _jsx(_components.code, {
              children: "pullPlaybackAudioFrameRawData"
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
        children: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
      }), _jsx(_components.p, {
        children: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Your app has its own audio module."
        }), `
`, _jsx(_components.li, {
          children: "You need to process the captured audio with a pre-processing library for audio enhancement."
        }), `
`, _jsx(_components.li, {
          children: "You need flexible device resource allocation to avoid conflicts with other services."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to capture and render audio from custom sources."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
      }), _jsx(_components.h4, {
        id: "capture-custom-audio-3",
        children: "Capture custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio capture."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg",
          alt: "Audio data transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the capture module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pushExternalAudioFrame"
            }), " to send the captured audio frames to the SDK."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "render-custom-audio-3",
        children: "Render custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio rendering."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg",
          alt: "Audio Data Transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the rendering module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pullPlaybackAudioFrame"
            }), " to retrieve the audio data sent by remote users."]
          }), `
`]
        }), `
`]
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
      }), _jsx(_components.h3, {
        id: "custom-audio-capture-1",
        children: "Custom audio capture"
      }), _jsx(_components.p, {
        children: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-capture.svg",
          alt: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: "Follow these steps to implement custom audio capture in your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable and configure custom audio source."
          }), `
`, _jsxs(_components.p, {
            children: ["Before calling ", _jsx(_components.code, {
              children: "joinChannel"
            }), " to join the channel, call ", _jsx(_components.code, {
              children: "setExternalAudioSource"
            }), " to enable and configure custom audio capture."]
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
                    children: "// Specify the custom audio source"
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
                    children: "setExternalAudioSource"
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
                    children: "true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", m_capAudioInfo.sampleRate, m_capAudioInfo.channels);"
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
                    children: "// Local user joins the channel"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "ChannelMediaOptions option;"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "option.autoSubscribeAudio "
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
                    children: "option.autoSubscribeVideo "
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
                    children: "m_rtcEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "joinChannel"
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
                    children: '"Your token"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", szChannelId."
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
                    children: "0"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", option);"
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
            children: "Implement audio capture and processing."
          }), `
`, _jsx(_components.p, {
            children: "Use methods outside the SDK to implement audio capture and processing yourself."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Send audio frames to SDK."
          }), `
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "pushAudioFrame"
            }), " to send the captured audio frames to the SDK for later use."]
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
              children: _jsx(_components.code, {
                children: _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "mediaEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "pushAudioFrame"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(AUDIO_RECORDING_SOURCE, "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "m_audioFrame);"
                  })]
                })
              })
            })
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "custom-audio-rendering-3",
        children: "Custom audio rendering"
      }), _jsx(_components.p, {
        children: "This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your app:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio rendering workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-render.svg",
          alt: "Custom Audio Rendering Workflow"
        })
      }), _jsx(_components.p, {
        children: "To implement custom audio rendering, use the following methods:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Enable and configure custom audio sink."
          }), `
`, _jsxs(_components.p, {
            children: ["Before calling ", _jsx(_components.code, {
              children: "joinChannel"
            }), " to join the channel, call ", _jsx(_components.code, {
              children: "setExternalAudioSink"
            }), " to enable and configure custom audio rendering."]
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
                    children: "// Enable custom audio rendering"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Sample rate (Hz) can be set to 16000, 32000, 44100 or 48000"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "// Number of channels can be set to 1 or 2"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "nRet "
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
                    children: "setExternalAudioSink"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(m_renderAudioInfo.sampleRate, m_renderAudioInfo.channels);"
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
            children: "Pull and render remote audio data."
          }), `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["After joining the channel, call ", _jsx(_components.code, {
                children: "pullAudioFrame"
              }), " to get the audio data sent by the remote user."]
            }), `
`, _jsx(_components.li, {
              children: "Use your own audio renderer to process the audio data and then play the rendered data."
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
                    children: " CAgoraCaptureAduioDlg"
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
                    children: "PullAudioFrameThread"
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
                    children: "CAgoraCaptureAduioDlg"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " *"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#E36209",
                      "--shiki-dark": "#FFAB70"
                    },
                    children: " self"
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
                    children: "  int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " nRet "
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
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  agora"
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
                    children: "util"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::AutoPtr"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "agora"
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
                    children: "media"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::IMediaEngine"
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
                    children: " mediaEngine;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  mediaEngine."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "queryInterface"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(self->m_rtcEngine, AGORA_IID_MEDIA_ENGINE);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  IAudioFrameObserver"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::AudioFrame audioFrame;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  audioFrame.avsync_type "
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
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Reserved parameter "
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  audioFrame.bytesPerSample "
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
                    children: " TWO_BYTES_PER_SAMPLE;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  audioFrame.type "
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
                    children: " agora"
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
                    children: "IAudioFrameObserver"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::FRAME_TYPE_PCM16;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  audioFrame.channels "
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
                    children: " self->m_renderAudioInfo.channels;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  audioFrame.samplesPerChannel "
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
                    children: " self->m_renderAudioInfo.sampleRate "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "/"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 100"
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
                    children: " self->m_renderAudioInfo.channels;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  audioFrame.samplesPerSec "
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
                    children: " self->m_renderAudioInfo.sampleRate;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  audioFrame.buffer "
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
                    children: " BYTE[audioFrame.samplesPerChannel "
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
                    children: " audioFrame.bytesPerSample];"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  while"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (self->m_extenalRenderAudio )"
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
                    children: "    // Pull remote audio data"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    nRet "
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
                    children: " mediaEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "pullAudioFrame"
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
                    children: "&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "audioFrame);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (nRet "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
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
                    children: "    {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "      Sleep"
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
                    children: "10"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      continue"
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
                    children: "    }"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    SIZE_T nSize "
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
                    children: " audioFrame.samplesPerChannel "
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
                    children: " audioFrame.bytesPerSample;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    self->m_audioRender."
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "Render"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "((BYTE"
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
                    children: ")audioFrame.buffer, nSize);"
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
                    children: "  delete"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " audioFrame.buffer;"
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
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "using-raw-audio-data-callback-1",
        children: "Using raw audio data callback"
      }), _jsx(_components.p, {
        children: "This section explains how to implement custom audio rendering."
      }), _jsxs(_components.p, {
        children: ["To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to ", _jsx(_components.a, {
          href: "stream-raw-audio.mdx",
          children: "Raw audio processing"
        }), "."]
      }), _jsx(_components.p, {
        children: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Retrieve audio data for playback using the ", _jsx(_components.code, {
              children: "onRecordAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onPlaybackAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onMixedAudioFrame"
            }), ", or ", _jsx(_components.code, {
              children: "onPlaybackAudioFrameBeforeMixing"
            }), " callback."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Independently render and play the audio data."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-3",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
      }), _jsx(_components.h3, {
        id: "sample-projects-3",
        children: "Sample projects"
      }), _jsxs(_components.p, {
        children: ["Agora provides an open-source ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/CustomAudioCapture",
          children: "CustomAudioCapture"
        }), " project for your reference. Download the project or inspect the source code for a more detailed example."]
      }), _jsx(_components.h3, {
        id: "api-reference-3",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosource2",
              children: _jsx(_components.code, {
                children: "setExternalAudioSource"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_imediaengine.html#api_imediaengine_pushaudioframe0",
              children: _jsx(_components.code, {
                children: "pushAudioFrame"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosink",
              children: _jsx(_components.code, {
                children: "setExternalAudioSink"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_imediaengine.html#api_imediaengine_pullaudioframe",
              children: _jsx(_components.code, {
                children: "pullAudioFrame"
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
        children: "The default audio module of RTC SDK meets the need of using basic audio functions in your app. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
      }), _jsx(_components.p, {
        children: "RTC SDK uses the basic audio module on the device your app runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your app, such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Your app has its own audio module."
        }), `
`, _jsx(_components.li, {
          children: "You need to process the captured audio with a pre-processing library for audio enhancement."
        }), `
`, _jsx(_components.li, {
          children: "You need flexible device resource allocation to avoid conflicts with other services."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to capture and render audio from custom sources."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
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
      }), _jsx(_components.h3, {
        id: "custom-audio-capture-2",
        children: "Custom audio capture"
      }), _jsxs(_components.p, {
        children: ["The SDK provides the ", _jsx(_components.code, {
          children: "createCustomAudioTrack"
        }), " method, which enables you to create a local audio track by passing in a browser-native ", _jsx(_components.code, {
          children: "MediaStreamTrack"
        }), " object. This method allows you to achieve custom audio capture. To use multiple audio sources, you can call the ", _jsx(_components.code, {
          children: "createCustomAudioTrack"
        }), " method multiple times to create separate local audio track objects."]
      }), _jsxs(_components.p, {
        children: ["The following example uses ", _jsx(_components.code, {
          children: "getUserMedia"
        }), " to obtain a ", _jsx(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack",
          children: "MediaStreamTrack"
        }), " object and passes it to ", _jsx(_components.code, {
          children: "createCustomAudioTrack"
        }), " to create a local audio track object for use with the SDK."]
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "async"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " function"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " createAndPublishCustomAudioTrack"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "client"
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "  try"
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
                children: "    // Get the audio media stream."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " mediaStream"
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
                children: " navigator.mediaDevices."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getUserMedia"
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
                children: "      video: "
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
                children: "      audio: "
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    });"
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
                children: "    // Extract the audio track from the media stream."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " audioMediaStreamTrack"
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
                children: " mediaStream."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getAudioTracks"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()["
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
                children: "];"
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
                children: "    // Create a custom audio track."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " customAudioTrack"
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
                children: "createCustomAudioTrack"
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
                children: "      mediaStreamTrack: audioMediaStreamTrack,"
              })
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    });"
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
                children: "    // Store the custom audio track for later use in a shared object."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    rtc.localAudioTrack "
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
                children: " customAudioTrack;"
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
                children: "    // Publish the custom audio track to the RTC channel."
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " rtc.client."
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
                children: "([rtc.localAudioTrack]);"
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
                children: "'Custom audio track published successfully!'"
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
                children: "  } "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "catch"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " (error) {"
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
                children: "error"
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
                children: "'Failed to create or publish custom audio track:'"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ", error);"
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
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["To implement custom audio processing, use the ", _jsx(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
          children: "Web Audio API"
        }), " to obtain the ", _jsx(_components.code, {
          children: "MediaStreamTrack"
        }), "."]
      }), _jsx(_components.h2, {
        id: "reference-4",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section explains how to implement different sound effects and audio mixing in your app, covering essential steps and code snippets."
      }), _jsx(_components.h3, {
        id: "api-reference-4",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcustomaudiotrack",
            children: _jsx(_components.code, {
              children: "createCustomAudioTrack"
            })
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html",
            children: _jsx(_components.code, {
              children: "ILocalAudioTrack"
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
        children: "The default audio module of RTC SDK meets the need of using basic audio functions in your game. For adding advanced audio functions, RTC SDK supports using custom audio sources and custom audio rendering modules."
      }), _jsx(_components.p, {
        children: "RTC SDK uses the basic audio module on the device your game runs on by default. However, there are certain use-cases where you want to integrate a custom audio source into your game, such as:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Your game has its own audio module."
        }), `
`, _jsx(_components.li, {
          children: "You need to process the captured audio with a pre-processing library for audio enhancement."
        }), `
`, _jsx(_components.li, {
          children: "You need flexible device resource allocation to avoid conflicts with other services."
        }), `
`]
      }), _jsx(_components.p, {
        children: "This page shows you how to capture and render audio from custom sources."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-5",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "To set an external audio source, you configure the Agora Engine before joining a channel. To manage the capture and processing of audio frames, you use methods from outside the RTC SDK that are specific to your custom source. RTC SDK enables you to push processed audio data to the subscribers in a channel."
      }), _jsx(_components.h4, {
        id: "capture-custom-audio-4",
        children: "Capture custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio capture."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/audio-data-transmission.svg",
          alt: "Audio data transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the capture module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pushAudioFrame"
            }), " to send the captured audio frames to the SDK."]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h4, {
        id: "render-custom-audio-4",
        children: "Render custom audio"
      }), _jsx(_components.p, {
        children: "The following figure illustrates the process of custom audio rendering."
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-rendering-sdk.svg",
          alt: "Audio Data Transmission"
        })
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "You implement the rendering module using external methods provided by the SDK."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["You call ", _jsx(_components.code, {
              children: "pullAudioFrame"
            }), " to retrieve the audio data sent by remote users."]
          }), `
`]
        }), `
`]
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
        children: "This section shows you how to implement custom audio capture and render audio from an external source using the SDK."
      }), _jsx(_components.h3, {
        id: "initialize-mediaengine",
        children: "Initialize MediaEngine"
      }), _jsxs(_components.p, {
        children: ["Before implementing custom audio features, obtain the ", _jsx(_components.code, {
          children: "MediaEngine"
        }), " interface from the initialized ", _jsx(_components.code, {
          children: "RtcEngine"
        }), ":"]
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
                children: " InitAgoraEngine"
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
                children: "FString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " APP_ID"
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
                children: "FString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " TOKEN"
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
                children: "FString"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: " CHANNEL_NAME"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Initialize RtcEngine context and event handler"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  agora"
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
                children: "rtc"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::RtcEngineContext RtcEngineContext;"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  UserRtcEventHandler "
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
                children: " MakeShared"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "<"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "FUserRtcEventHandler"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ">("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "this"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  std"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::string StdStrAppId "
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
                children: " TCHAR_TO_UTF8"
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
                children: "*"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "APP_ID);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "  RtcEngineContext.appId "
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
                children: " StdStrAppId."
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
                children: "  RtcEngineContext.eventHandler "
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
                children: " UserRtcEventHandler."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "Get"
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
                children: "  RtcEngineContext.channelProfile "
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
                children: " agora"
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
                children: "CHANNEL_PROFILE_TYPE"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "::CHANNEL_PROFILE_LIVE_BROADCASTING;"
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
                children: "  // Initialize the RtcEngine"
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
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " AgoraUERtcEngine"
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
                children: "Get"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()->"
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
                children: "(RtcEngineContext);"
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
                children: "  // Query for the MediaEngine interface"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "  AgoraUERtcEngine"
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
                children: "Get"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()->"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "queryInterface"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(AGORA_IID_MEDIA_ENGINE, ("
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "void**"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: ")"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "&"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "MediaEngine);"
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
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["The MediaEngine is not created directly. Instead, it's obtained as an interface from the initialized RtcEngine using the ", _jsx(_components.code, {
              children: "queryInterface"
            }), " method with ", _jsx(_components.code, {
              children: "AGORA_IID_MEDIA_ENGINE"
            }), "."]
          })
        })
      }), _jsx(_components.h3, {
        id: "custom-audio-capture-3",
        children: "Custom audio capture"
      }), _jsx(_components.p, {
        children: "Refer to the following call sequence diagram to implement custom audio capture in your app:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio capture process"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-capture-with-custom-track.svg",
          alt: "Custom audio capture"
        })
      }), _jsx(_components.p, {
        children: "Follow these steps to implement custom audio capture in your project:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable and configure custom audio source"
            }), `
Before calling `, _jsx(_components.code, {
              children: "joinChannel"
            }), " to join the channel, call ", _jsx(_components.code, {
              children: "setExternalAudioSource"
            }), " to enable and configure custom audio capture."]
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
                    children: " SetExternalAudioSource"
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
                    children: "  // Specify the custom audio source"
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
                    children: " MediaEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setExternalAudioSource"
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
                    children: "true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", SAMPLE_RATE, CHANNEL, "
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  UBFL_Logger"
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
                    children: "Print"
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
                    children: "FString"
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
                    children: "Printf"
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
                    children: "TEXT"
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
                    children: "%s"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: " ret "
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
                    children: "), "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "*"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "FString"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(FUNCTION_MACRO), ret), LogMsgViewPtr);"
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
                    children: " JoinChannel"
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
                    children: "  // Enable audio and set client role"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  AgoraUERtcEngine"
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
                    children: "Get"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "enableAudio"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  AgoraUERtcEngine"
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
                    children: "Get"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setClientRole"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(CLIENT_ROLE_BROADCASTER);"
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
                    children: "  // Join the channel"
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
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " AgoraUERtcEngine"
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
                    children: "Get"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "()->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "joinChannel"
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
                    children: "TCHAR_TO_UTF8"
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
                    children: "*"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "Token), "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "TCHAR_TO_UTF8"
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
                    children: "*"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "ChannelName), "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '""'
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
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Implement audio capture and processing"
            }), `
Use methods outside the SDK to implement audio capture and processing yourself.`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Send audio frames to SDK"
            }), `
Call `, _jsx(_components.code, {
              children: "pushAudioFrame"
            }), " to send the captured audio frames to the SDK for later use."]
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Load audio data from a file and start a thread to push the frames:"
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
                        children: " StartPushAudio"
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
                        children: "  FString LoadDir "
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
                        children: " FPaths"
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
                        children: "ProjectContentDir"
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
                        children: "/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " TEXT"
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
                        children: '"Audio/Agora.io-Interactions.wav"'
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
                        children: "  TArray"
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
                        children: "uint8"
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
                        children: " AudioData;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  FFileHelper"
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
                        children: "LoadFileToArray"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(AudioData, "
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
                        children: "LoadDir, "
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
                        children: "  Runnable "
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
                        children: " FAgoraCaptureRunnable"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(MediaEngine, AudioData."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "GetData"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(), AudioData."
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "Num"
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
                        children: "*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " sizeof"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(uint8));"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "  FRunnableThread"
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
                        children: " RunnableThread "
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
                        children: " FRunnableThread"
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
                        children: "Create"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(Runnable, "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "TEXT"
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
                        children: '"AgoraUE-UserThread"'
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "));"
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
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["This class reads audio data at 10ms intervals, converts it into ", _jsx(_components.code, {
                  children: "AudioFrame"
                }), " format, and sends it to the Agora SDK using ", _jsx(_components.code, {
                  children: "pushAudioFrame"
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
                  icon: '<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>',
                  children: _jsxs(_components.code, {
                    children: [_jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "class"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " FAgoraCaptureRunnable"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " : "
                      }), _jsx(_components.span, {
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
                        children: " FRunnable"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "public:"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  FAgoraCaptureRunnable"
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
                        children: "agora"
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
                        children: "IMediaEngine"
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
                        children: " MediaEngine"
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
                        children: "const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " uint8"
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
                        children: " audioData"
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
                        children: "int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#E36209",
                          "--shiki-dark": "#FFAB70"
                        },
                        children: " dataLength"
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
                        children: "    : "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "MediaEngine"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(MediaEngine), "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "dataLength"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(dataLength)"
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
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "    this"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "->audioData "
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
                        children: " uint8[dataLength];"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "    FMemory"
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
                        children: "Memcpy"
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
                        children: "this"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "->audioData, audioData, dataLength "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " sizeof"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(uint8));"
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
                      className: "line"
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  virtual"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " uint32"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: " Run"
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
                        children: "override"
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
                        children: "    auto"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " tic "
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
                        children: " getTimeStamp"
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
                        children: "    bStopThread "
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "    const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " uint8"
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
                        children: " Ptr "
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
                        children: " reinterpret_cast<const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " uint8"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*>"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(audioData);"
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
                        children: "    while"
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
                        children: "bStopThread)"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "    {"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "      if"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (MediaEngine "
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
                        children: " nullptr"
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
                        children: "break"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ";"
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
                        children: "      auto"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " toc "
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
                        children: " getTimeStamp"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "      if"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " ((toc "
                      }), _jsx(_components.span, {
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
                        children: " tic) "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: ">="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 10"
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
                        children: " // Push every 10ms"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      {"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        if"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (dataLength "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "<="
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
                        children: ") "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "break"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ";"
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
                        children: "        if"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " (sendByte "
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
                        children: " nullptr"
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
                        children: "        {"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "          sendByte "
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
                        children: " FMemory"
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
                        children: "Malloc"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(SAMPLE_RATE "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " PUSH_FREQ_PER_SEC "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "                      agora"
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
                        children: "rtc"
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
                        children: "BYTES_PER_SAMPLE"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "::TWO_BYTES_PER_SAMPLE "
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
                        children: " CHANNEL);"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        }"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line"
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "        FMemory"
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
                        children: "Memcpy"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "(sendByte, Ptr, SAMPLE_RATE "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " PUSH_FREQ_PER_SEC "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "               agora"
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
                        children: "rtc"
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
                        children: "BYTES_PER_SAMPLE"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "::TWO_BYTES_PER_SAMPLE "
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
                        children: " CHANNEL);"
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
                        children: "        // Prepare audio frame"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "        agora"
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
                        children: "IAudioFrameObserverBase"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "::AudioFrame externalAudioFrame;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        externalAudioFrame.bytesPerSample "
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
                        children: " agora"
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
                        children: "rtc"
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
                        children: "BYTES_PER_SAMPLE"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "::TWO_BYTES_PER_SAMPLE;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        externalAudioFrame.type "
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
                        children: " agora"
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
                        children: "IAudioFrameObserver"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "::FRAME_TYPE_PCM16;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        externalAudioFrame.samplesPerChannel "
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
                        children: " SAMPLE_RATE "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " PUSH_FREQ_PER_SEC;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        externalAudioFrame.samplesPerSec "
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
                        children: " SAMPLE_RATE;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        externalAudioFrame.channels "
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
                        children: " CHANNEL;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        externalAudioFrame.buffer "
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
                        children: " sendByte;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        externalAudioFrame.renderTimeMs "
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
                        children: " 10"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ";"
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
                        children: "        // Push audio frame to SDK"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "        agora"
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
                        children: "rtc"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "::"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: "track_id_t"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " trackId "
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
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "        int"
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
                        children: " MediaEngine->"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "pushAudioFrame"
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
                        children: "&"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "externalAudioFrame, trackId);"
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
                        children: "        Ptr "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "+="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " SAMPLE_RATE "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " PUSH_FREQ_PER_SEC "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 2"
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
                        children: " CHANNEL;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        dataLength "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "-="
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " SAMPLE_RATE "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "/"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " PUSH_FREQ_PER_SEC "
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#005CC5",
                          "--shiki-dark": "#79B8FF"
                        },
                        children: " 2"
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
                        children: " CHANNEL;"
                      })]
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "        tic "
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
                        children: " toc;"
                      })]
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "      }"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "      FPlatformProcess"
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
                        children: "Sleep"
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
                        children: "0.001"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "f"
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
                        children: "    }"
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
                        children: "  }"
                      })
                    }), `
`, _jsx(_components.span, {
                      className: "line"
                    }), `
`, _jsx(_components.span, {
                      className: "line",
                      children: _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "private:"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#6F42C1",
                          "--shiki-dark": "#B392F0"
                        },
                        children: "  agora"
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
                        children: "media"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: "::IMediaEngine"
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
                        children: " MediaEngine "
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
                        children: " nullptr"
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
                        children: "  uint8"
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
                        children: " audioData "
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
                        children: " nullptr"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  void*"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " sendByte "
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
                        children: " nullptr"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " dataLength "
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
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  bool"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " bStopThread "
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
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: ";"
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
                        children: "  // Audio configuration"
                      })
                    }), `
`, _jsxs(_components.span, {
                      className: "line",
                      children: [_jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " CHANNEL "
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " SAMPLE_RATE "
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
                        children: " 48000"
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
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: "  const"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#D73A49",
                          "--shiki-dark": "#F97583"
                        },
                        children: " int"
                      }), _jsx(_components.span, {
                        style: {
                          "--shiki-light": "#24292E",
                          "--shiki-dark": "#E1E4E8"
                        },
                        children: " PUSH_FREQ_PER_SEC "
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
                        children: " 100"
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
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "custom-audio-rendering-4",
        children: "Custom audio rendering"
      }), _jsx(_components.p, {
        children: "This section shows you how to implement custom audio rendering. Refer to the following call sequence diagram to implement custom audio rendering in your game:"
      }), _jsx(_components.p, {
        children: _jsx(_components.strong, {
          children: "Custom audio rendering workflow"
        })
      }), _jsx(_components.p, {
        children: _jsx(_components.img, {
          src: "https://assets-docs.agora.io/images/video-sdk/custom-audio-render.svg",
          alt: "Custom Audio Rendering Workflow"
        })
      }), _jsx(_components.p, {
        children: "To implement custom audio rendering, use the following methods:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Enable and configure custom audio sink"
            }), `
Before calling `, _jsx(_components.code, {
              children: "joinChannel"
            }), " to join the channel, call ", _jsx(_components.code, {
              children: "setExternalAudioSink"
            }), " to enable and configure custom audio rendering."]
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
                    children: " SetExternalAudioSink"
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
                    children: "  // Enable custom audio rendering"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  // Sample rate (Hz) can be set to 16000, 32000, 44100 or 48000"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "  // Number of channels can be set to 1 or 2"
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
                    children: " CHANNEL "
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
                    children: " SAMPLE_RATE "
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
                    children: " 44100"
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
                    children: " MediaEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "setExternalAudioSink"
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
                    children: "true"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ", SAMPLE_RATE, CHANNEL);"
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
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "Pull and render remote audio data"
            }), `
To pull audio frames for custom rendering, call `, _jsx(_components.code, {
              children: "pullAudioFrame"
            }), " in a dedicated thread. After pulling the frame, send the audio buffer to your custom sound player (such as a ", _jsx(_components.code, {
              children: "USoundWaveProcedural"
            }), " wrapper like ", _jsx(_components.code, {
              children: "AgoraSoundWaveProcedural"
            }), ")."]
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
                children: [_jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "class"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " FAgoraRenderRunnable"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " : "
                  }), _jsx(_components.span, {
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
                    children: " FRunnable"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "public:"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  FAgoraRenderRunnable"
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
                    children: "agora"
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
                    children: "IMediaEngine"
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
                    children: " InMediaEngine"
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
                    children: "UAgoraSoundWaveProcedural"
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
                    children: " InAgoraSoundWaveProcedural"
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
                    children: "    : "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "MediaEngine"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(InMediaEngine), "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AgoraSoundWaveProcedural"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(InAgoraSoundWaveProcedural)"
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
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "  }"
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
                    children: "  virtual"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " uint32"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " Run"
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
                    children: "override"
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
                    children: "    constexpr"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " PUSH_FREQ_PER_SEC "
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
                    children: " 100"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    constexpr"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " SAMPLE_RATE "
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
                    children: " 44100"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    constexpr"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " int"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " CHANNEL "
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
                  className: "line"
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "    auto"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " tic "
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
                    children: " getTimeStamp"
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
                    children: "    bStopThread "
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
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ";"
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
                    children: "    // Prepare the external audio frame"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    agora"
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
                    children: "IAudioFrameObserverBase"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::AudioFrame externalAudioFrame;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    externalAudioFrame.avsync_type "
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
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Reserved parameter"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    externalAudioFrame.bytesPerSample "
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
                    children: " agora"
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
                    children: "rtc"
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
                    children: "BYTES_PER_SAMPLE"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::TWO_BYTES_PER_SAMPLE;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    externalAudioFrame.type "
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
                    children: " agora"
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
                    children: "IAudioFrameObserver"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::FRAME_TYPE_PCM16;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    externalAudioFrame.samplesPerChannel "
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
                    children: " SAMPLE_RATE "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "/"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " PUSH_FREQ_PER_SEC;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    externalAudioFrame.samplesPerSec "
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
                    children: " SAMPLE_RATE;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    externalAudioFrame.channels "
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
                    children: " CHANNEL;"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    externalAudioFrame.renderTimeMs "
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
                    children: " 10"
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
                    children: "    externalAudioFrame.buffer "
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
                    children: " FMemory"
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
                    children: "Malloc"
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
                    children: "      externalAudioFrame.samplesPerChannel "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "*"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      externalAudioFrame.bytesPerSample "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "*"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      externalAudioFrame.channels"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    );"
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
                    children: "    while"
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
                    children: "bStopThread)"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (MediaEngine "
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
                    children: " nullptr"
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
                    children: "break"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ";"
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
                    children: "      auto"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " toc "
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
                    children: " getTimeStamp"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "      if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " ((toc "
                  }), _jsx(_components.span, {
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
                    children: " tic) "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: ">="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#005CC5",
                      "--shiki-dark": "#79B8FF"
                    },
                    children: " 10"
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
                    children: " // Pull every 10 ms"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        tic "
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
                    children: " getTimeStamp"
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
                    children: "        // Pull remote audio data"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        int"
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
                    children: " MediaEngine->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "pullAudioFrame"
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
                    children: "&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "externalAudioFrame);"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (ret "
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " &&"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " AgoraSoundWaveProcedural)"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        {"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: "          // Send the frame to custom renderer (e.g., USoundWaveProcedural wrapper)"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "          AgoraSoundWaveProcedural->"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "AddToFrames"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(externalAudioFrame);"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "        }"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "        else"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: " if"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " (ret "
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "!="
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
                    children: "        {"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "          FPlatformProcess"
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
                    children: "Sleep"
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
                    children: "0.01"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "f"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Sleep 10ms if no data"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "          continue"
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
                    children: "        }"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "      }"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "      FPlatformProcess"
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
                    children: "Sleep"
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
                    children: "0.001"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "f"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ");"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6A737D",
                      "--shiki-dark": "#6A737D"
                    },
                    children: " // Yield to CPU"
                  })]
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "    }"
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
                    children: "    // Free audio buffer after loop"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    FMemory"
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
                    children: "Free"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "(externalAudioFrame.buffer);"
                  })]
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
                    children: "  }"
                  })
                }), `
`, _jsx(_components.span, {
                  className: "line"
                }), `
`, _jsx(_components.span, {
                  className: "line",
                  children: _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "private:"
                  })
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "  agora"
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
                    children: "media"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "::IMediaEngine"
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
                    children: " MediaEngine "
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
                    children: " nullptr"
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
                    children: "  UAgoraSoundWaveProcedural"
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
                    children: " AgoraSoundWaveProcedural "
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
                    children: " nullptr"
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
                      "--shiki-light": "#D73A49",
                      "--shiki-dark": "#F97583"
                    },
                    children: "  bool"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: " bStopThread "
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
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["After joining the channel, call ", _jsx(_components.code, {
                children: "pullAudioFrame"
              }), " to get the audio data sent by the remote user."]
            }), `
`, _jsx(_components.li, {
              children: "Use your own audio renderer to process the audio data and then play the rendered data."
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "using-raw-audio-data-callback-2",
        children: "Using raw audio data callback"
      }), _jsx(_components.p, {
        children: "This section explains how to implement custom audio rendering."
      }), _jsxs(_components.p, {
        children: ["To retrieve audio data for playback, implement collection and processing of raw audio data. Refer to ", _jsx(_components.a, {
          href: "stream-raw-audio.mdx",
          children: "Raw audio processing"
        }), "."]
      }), _jsx(_components.p, {
        children: "Follow these steps to call the raw audio data API in your project for custom audio rendering:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Retrieve audio data for playback using the ", _jsx(_components.code, {
              children: "onRecordAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onPlaybackAudioFrame"
            }), ", ", _jsx(_components.code, {
              children: "onMixedAudioFrame"
            }), ", or ", _jsx(_components.code, {
              children: "onPlaybackAudioFrameBeforeMixing"
            }), " callback."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Independently render and play the audio data."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "reference-5",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section explains how to implement different sound effects and audio mixing in your game, covering essential steps and code snippets."
      }), _jsx(_components.h3, {
        id: "sample-projects-4",
        children: "Sample projects"
      }), _jsx(_components.p, {
        children: "Agora provides the following open-source sample projects for audio self-capture and audio self-rendering for your reference:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example/Source/AgoraExample/Examples/Advanced/CustomCaptureAudio",
            children: "CustomCaptureAudio"
          })
        }), `
`, _jsx(_components.li, {
          children: _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/blob/main/Agora-Unreal-SDK-CPP-Example/Source/AgoraExample/Examples/Advanced/CustomRenderAudio/",
            children: "CustomRenderAudio"
          })
        }), `
`]
      }), _jsx(_components.h3, {
        id: "api-reference-5",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosource2",
              children: _jsx(_components.code, {
                children: "setExternalAudioSource"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_pushaudioframe0",
              children: _jsx(_components.code, {
                children: "pushAudioFrame"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_imediaengine_setexternalaudiosink",
              children: _jsx(_components.code, {
                children: "setExternalAudioSink"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_pullaudioframe",
              children: _jsx(_components.code, {
                children: "pullAudioFrame"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_createcustomaudiotrack",
              children: _jsx(_components.code, {
                children: "createCustomAudioTrack"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_imediaengine.html#api_imediaengine_destroycustomaudiotrack",
              children: _jsx(_components.code, {
                children: "destroyCustomAudioTrack"
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
