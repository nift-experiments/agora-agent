import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Pre-call tests",
  description: "Run microphone, speaker, camera, and last-mile network checks before users join a Video Calling session."
};
export let _markdown = `

In video calling implementations that demand high communication quality, pre-call detection helps identify and troubleshoot issues beforehand, ensuring seamless real-time interaction.

This page shows you how to use RTC SDK to run pre-call tests to identify and troubleshoot communication quality issues in your app.

## Understand the tech [#understand-the-tech]

Pre-call testing typically covers two aspects:

* **Equipment quality test**

  To test whether the local microphone, speaker, and camera are working properly, you run an echo test. The basic process of conducting an echo test is as follows:

* **Network quality analysis**

  The quality of the last mile network affects the smoothness and clarity of the audio and video that the user sends and receives. Last mile refers to the last leg of communication network between the edge server of the Agora SDRTN® and the end-user devices. Network quality analysis enables you to get feedback on the available bandwidth, packet loss rate, network jitter, and round-trip delay of the upstream and downstream last-mile networks. The following figure shows the basic process of running a last-mile probe test.

<Accordions>
  <Accordion title="Pre-call echo test">
    ![Echo Test](https://assets-docs.agora.io/images/video-sdk/pre-call-echo-test.svg)
  </Accordion>

  <Accordion title="Pre-call last mile test">
    ![Last Mile Test](https://assets-docs.agora.io/images/video-sdk/pre-call-last-mile-test.svg)
  </Accordion>
</Accordions>

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;web&#x22;]" showTabs="false">
  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    * **Equipment quality test**

      Device quality testing involves testing whether the local microphone, speaker, and camera are working properly.

    * **Network quality analysis**

      The quality of the last mile network affects the smoothness and clarity of the audio and video that the user sends and receives. Last mile refers to the last leg of communication network between the edge server of the Agora SDRTN® and the end-user devices. Network quality analysis enables you to get feedback on the available bandwidth, packet loss rate, network jitter, and round-trip delay of the upstream and downstream last-mile networks. It enables you to examine if current network conditions are good enough to meet the requirements of the currently selected audio bitrate or the target video bitrate.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

<CalloutContainer type="info">
  <CalloutTitle>
    information
  </CalloutTitle>

  <CalloutDescription>
    Best practice is to run the device test first and then perform a network test.
  </CalloutDescription>
</CalloutContainer>

## Prerequisites [#prerequisites]

Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) project and that your app has obtained permissions to use the relevant devices.

## Implement pre-call testing [#implement-pre-call-testing]

This section shows you how to implement pre-call testing in your project.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ### Equipment quality test [#equipment-quality-test]

    The SDK provides the \`startEchoTest\` \\[3/3] method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`startEchoTest\` \\[3/3] with \`EchoTestConfiguration\`. Specify the channel name, whether to test audio or video, and the time interval for the echo.

    2. After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`stopEchoTest\`, and then call \`joinChannel\` to join a channel.

       <CalloutContainer type="warning">
         <CalloutTitle>
           Note
         </CalloutTitle>

         <CalloutDescription>
           Using \`startEchoTest\` \\[3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results.
         </CalloutDescription>
       </CalloutContainer>

    To implement running an echo test in your app, refer to the following code:

    <Tabs defaultValue="java">
      <TabsList>
        <TabsTrigger value="java">
          Java
        </TabsTrigger>

        <TabsTrigger value="kotlin">
          Kotlin
        </TabsTrigger>
      </TabsList>

      <TabsContent value="java">
        \`\`\`java
        // Test audio device
        private void testAudioDevice() {
            // Create an EchoTestConfiguration instance
            EchoTestConfiguration config = new EchoTestConfiguration();
            // Disable video device testing
            config.enableVideo = false;
            // Enable audio device testing
            config.enableAudio = true;
            // Set the interval for returning test results
            config.intervalInSeconds = MAX_COUNT_DOWN;
            // Identify each test by channel name
            config.channelId = "AudioEchoTest" + (new Random().nextInt(1000) + 10000);
            // Start the test
            engine.startEchoTest(config);
        }

        // Test video device
        private void testVideoDevice() {
            // Create an EchoTestConfiguration instance
            EchoTestConfiguration config = new EchoTestConfiguration();
            // Enable video device testing
            config.enableVideo = true;
            // Specify the view for rendering the local user's video
            config.view = requireView().findViewById(R.id.surfaceView);
            // Disable audio device testing
            config.enableAudio = false;
            // Set the expected delay for video rendering
            config.intervalInSeconds = MAX_COUNT_DOWN;
            // Identify each test by channel name
            config.channelId = "VideoEchoTest" + (new Random().nextInt(1000) + 10000);
            // Start the test
            engine.startEchoTest(config);
        }
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        // Test audio device
        private fun testAudioDevice() {
            // Create an EchoTestConfiguration instance
            val config = EchoTestConfiguration().apply {
                // Disable video device testing
                enableVideo = false
                // Enable audio device testing
                enableAudio = true
                // Set the interval for returning test results
                intervalInSeconds = MAX_COUNT_DOWN
                // Identify each test by channel name
                channelId = "AudioEchoTest" + (Random().nextInt(1000) + 10000)
            }
            // Start the test
            engine.startEchoTest(config)
        }

        // Test video device
        private fun testVideoDevice() {
            // Create an EchoTestConfiguration instance
            val config = EchoTestConfiguration().apply {
                // Enable video device testing
                enableVideo = true
                // Specify the view for rendering the local user's video
                view = requireView().findViewById(R.id.surfaceView)
                // Disable audio device testing
                enableAudio = false
                // Set the expected delay for video rendering
                intervalInSeconds = MAX_COUNT_DOWN
                // Identify each test by channel name
                channelId = "VideoEchoTest" + (Random().nextInt(1000) + 10000)
            }
            // Start the test
            engine.startEchoTest(config)
        }
        \`\`\`
      </TabsContent>
    </Tabs>

    ### Network quality analysis [#network-quality-analysis]

    The SDK provides the \`startLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`startLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`onLastmileQuality\`: This callback is triggered two seconds after \`startLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`onLastmileProbeResult\`: This callback is triggered 30 seconds after \`startLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    <Tabs defaultValue="java">
      <TabsList>
        <TabsTrigger value="java">
          Java
        </TabsTrigger>

        <TabsTrigger value="kotlin">
          Kotlin
        </TabsTrigger>
      </TabsList>

      <TabsContent value="java">
        \`\`\`java
        // Configure a LastmileProbeConfig instance
        LastmileProbeConfig config = new LastmileProbeConfig(){};
        // Probe uplink network quality
        config.probeUplink = true;
        // Probe downlink network quality
        config.probeDownlink = true;
        // User's expected maximum sending bitrate (bps). Range: [100000,5000000]
        config.expectedUplinkBitrate = 100000;
        // User's expected maximum receiving bitrate (bps). Range: [100000,5000000]
        config.expectedDownlinkBitrate = 100000;
        // Start the network quality probe
        engine.startLastmileProbeTest(config);

        // Register callbacks
        public void onLastmileQuality(int quality) {
            statisticsInfo.setLastMileQuality(quality);
            updateLastMileResult();
        }
        public void onLastmileProbeResult(LastmileProbeResult lastmileProbeResult) {
            statisticsInfo.setLastMileProbeResult(lastmileProbeResult);
            updateLastMileResult();
        }

        // Stop the network quality probe
        engine.stopLastmileProbeTest();
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        // Configure a LastmileProbeConfig instance
        val config = LastmileProbeConfig().apply {
            // Probe uplink network quality
            probeUplink = true
            // Probe downlink network quality
            probeDownlink = true
            // User's expected maximum sending bitrate (bps). Range: [100000, 5000000]
            expectedUplinkBitrate = 500000 // Adjust as needed
            // User's expected maximum receiving bitrate (bps). Range: [100000, 5000000]
            expectedDownlinkBitrate = 500000 // Adjust as needed
        }

        // Start the network quality probe
        engine.startLastmileProbeTest(config)

        // Register callbacks
        fun onLastmileQuality(quality: Int) {
            // Ensure statisticsInfo is initialized and updated
            statisticsInfo.lastMileQuality = quality
            updateLastMileResult() // Implement this function to handle the quality update
        }

        fun onLastmileProbeResult(lastmileProbeResult: LastmileProbeResult) {
            // Ensure statisticsInfo is initialized and updated
            statisticsInfo.lastMileProbeResult = lastmileProbeResult
            updateLastMileResult() // Implement this function to handle the probe result update
        }

        // Stop the network quality probe when done
        engine.stopLastmileProbeTest()
        \`\`\`
      </TabsContent>
    </Tabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ### Equipment quality test [#equipment-quality-test-1]

    The SDK provides the \`startEchoTest\` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`startEchoTest\`. Specify the \`intervalInSeconds\` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10.

    2. After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`stopEchoTest\`, and then call \`joinChannel\` to join a channel.

    To implement running an echo test in your app, refer to the following code:

    \`\`\`typescript
    this.engine.startEchoTest(10);
    this.engine.stopEchoTest();
    \`\`\`

    #### Audio recording device test [#audio-recording-device-test]

    To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps.

    1. Call \`startRecordingDeviceTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The SDK reports \`uid = 0\`, and the volume information of the device in the \`onAudioVolumeIndication\` callback.

    3. When you are done testing, call \`stopRecordingDeviceTest\` to stop the test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    To implement running a recording device test in your app, refer to the following code:

    \`\`\`typescript
    this.engine.getAudioDeviceManager().setRecordingDevice(deviceId);
    this.engine.registerEventHandler({
      onAudioVolumeIndication(
        connection: RtcConnection,
        speakers: AudioVolumeInfo[],
        speakerNumber: number,
        totalVolume: number
      ){},
    });
    this.engine.getAudioDeviceManager().startRecordingDeviceTest(1000);
    this.engine.getAudioDeviceManager().stopRecordingDeviceTest();
    \`\`\`

    #### Audio playback device test [#audio-playback-device-test]

    To test that the local audio playback device is working properly, refer to the following steps:

    1. Call \`startPlaybackDeviceTest\` and set the \`audioFileName\` parameter to the absolute path of the audio file to be played.

    2. If the user hears the audio, the playback device is working properly. The SDK triggers the \`onAudioVolumeIndication\` callback to report \`uid = 1\` and the volume information of the playback device.

    3. When you are done testing, call \`stopPlaybackDeviceTest\` to stop the test.

    To implement running a playback device test in your app, refer to the following code:

    \`\`\`typescript
    this.engine.getAudioDeviceManager().setPlaybackDevice(deviceId);
    this.engine.getAudioDeviceManager().startPlaybackDeviceTest(filePath);
    this.engine.getAudioDeviceManager().stopPlaybackDeviceTest();
    \`\`\`

    #### Audio device loopback test [#audio-device-loopback-test]

    To test if the local audio device loop is working properly, refer to the following steps:

    1. Call \`startAudioDeviceLoopbackTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two \`onAudioVolumeIndication\` callbacks to report the volume information of the audio capture device with \`uid= 0\`, and the audio playback device with \`uid= 1\`, respectively.

    3. When you are done testing, call \`stopAudioDeviceLoopbackTest\` to stop the recording device test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    To implement an audio loopback device test in your app, refer to the following code:

    \`\`\`typescript
    this.engine.registerEventHandler({
      onAudioVolumeIndication(
        connection: RtcConnection,
        speakers: AudioVolumeInfo[],
        speakerNumber: number,
        totalVolume: number
      ){},
    }); this.engine.getAudioDeviceManager().startAudioDeviceLoopbackTest(1000);
    this.engine.getAudioDeviceManager().stopAudioDeviceLoopbackTest();
    \`\`\`

    ### Network quality analysis [#network-quality-analysis-1]

    The SDK provides the \`startLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`startLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`onLastmileQuality\`: This callback is triggered two seconds after \`startLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`onLastmileProbeResult\`: This callback is triggered 30 seconds after \`startLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    \`\`\`typescript
    this.engine.registerEventHandler({
      onLastmileQuality(quality: QualityType) {},
      onLastmileProbeResult(result: LastmileProbeResult) {},
    });
    this.engine.startLastmileProbeTest({
      probeUplink: true,
      probeDownlink: true,
      expectedUplinkBitrate: 100000,
      expectedDownlinkBitrate: 100000,
    });
    this.engine.stopLastmileProbeTest();
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    ### Equipment quality test [#equipment-quality-test-2]

    The SDK provides the \`startEchoTest\` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`startEchoTest\`. Specify the \`intervalInSeconds\` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10.

    2. After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`stopEchoTest\`, and then call \`joinChannel\` to join a channel.

    To implement running an echo test in your app, refer to the following code:

    \`\`\`dart
    // Start the echo test
    // Only a host can call startEchoTest
    await _engine.startEchoTest();

    // Wait and check if you can hear voice playback

    // Stop the echo test
    // Call stopEchoTest to end the echo test. Until you call stopEchoTest, you cannot start another test or join a channel.
    await _engine.stopEchoTest();
    \`\`\`

    #### Audio recording device test [#audio-recording-device-test-1]

    To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps.

    1. Call \`startRecordingDeviceTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The SDK reports \`uid = 0\`, and the volume information of the device in the \`onAudioVolumeIndication\` callback.

    3. When you are done testing, call \`stopRecordingDeviceTest\` to stop the test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    To implement running a recording device test in your app, refer to the following code:

    \`\`\`dart
    // Select an audio capture device
    await _audioDeviceManager.setRecordingDevice(deviceId);

    // Implement the audio volume indication callback
    onAudioVolumeIndication: (RtcConnection connection,
        List<AudioVolumeInfo> speakers, int speakerNumber, int totalVolume) {
        logSink.log('[onAudioVolumeIndication] speakers: \${speakers.toString()}, speakerNumber: $speakerNumber, totalVolume: $totalVolume');
    },

    // Start audio capture device test
    await _audioDeviceManager.startRecordingDeviceTest(1000);

    // Stop audio capture device test
    await _audioDeviceManager.stopRecordingDeviceTest();
    \`\`\`

    #### Audio playback device test [#audio-playback-device-test-1]

    To test that the local audio playback device is working properly, refer to the following steps:

    1. Call \`startPlaybackDeviceTest\` and set the \`audioFileName\` parameter to the absolute path of the audio file to be played.

    2. If the user hears the audio, the playback device is working properly. The SDK triggers the \`onAudioVolumeIndication\` callback to report \`uid = 1\` and the volume information of the playback device.

    3. When you are done testing, call \`stopPlaybackDeviceTest\` to stop the test.

    To implement running a playback device test in your app, refer to the following code:

    \`\`\`dart
    // Select an audio playback device
    await _audioDeviceManager.setPlaybackDevice(_selectedPlaybackDeviceId);

    // Specify the absolute path of the audio file to start the playback device test
    await _audioDeviceManager.startPlaybackDeviceTest(filePath);

    // Stopping the audio playback device test
    await _audioDeviceManager.stopPlaybackDeviceTest();
    \`\`\`

    #### Audio device loopback test [#audio-device-loopback-test-1]

    To test if the local audio device loop is working properly, refer to the following steps:

    1. Call \`startAudioDeviceLoopbackTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two \`onAudioVolumeIndication\` callbacks to report the volume information of the audio capture device with \`uid= 0\`, and the audio playback device with \`uid= 1\`, respectively.

    3. When you are done testing, call \`stopAudioDeviceLoopbackTest\` to stop the recording device test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    To implement an audio loopback device test in your app, refer to the following code:

    \`\`\`dart
    await _audioDeviceManager.startAudioDeviceLoopbackTest(1000);

    await _audioDeviceManager.stopAudioDeviceLoopbackTest();
    \`\`\`

    ### Network quality analysis [#network-quality-analysis-2]

    The SDK provides the \`startLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`startLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`onLastmileQuality\`: This callback is triggered two seconds after \`startLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`onLastmileProbeResult\`: This callback is triggered 30 seconds after \`startLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    \`\`\`dart
    // Configure a LastmileProbeConfig instance
    LastmileProbeConfig config = const LastmileProbeConfig(
        probeUplink: true,  // Probe uplink network quality
        probeDownlink: true,  // Probe downlink network quality
        expectedUplinkBitrate: 100000,  // Desired maximum transmit bitrate in bps, in the range [100000,5000000].
        expectedDownlinkBitrate: 100000,  // Desired maximum receive bitrate in bps, in the range [100000,5000000].
    );

    // Start the probe test
    await _engine.startLastmileProbeTest(config);

    // Stop the probe test
    await _engine.stopLastmileProbeTest();
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ### Equipment quality test [#equipment-quality-test-3]

    The SDK provides the \`startEchoTest(withConfig:)\` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`startEchoTest(withConfig:)\` with \`AgoraEchoTestConfiguration\`. Specify the channel name, whether to test audio or video, and the time interval for the echo.

    2. After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`stopEchoTest\`, and then call \`joinChannel\` to join a channel.

       <CalloutContainer type="warning">
         <CalloutTitle>
           Note
         </CalloutTitle>

         <CalloutDescription>
           Using \`startEchoTest(withConfig:)\` \\[3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results.
         </CalloutDescription>
       </CalloutContainer>

    To implement running an echo test in your app, refer to the following code:

    \`\`\`swift
    // Test audio device
    @IBAction func doAudioTest(sender: UIButton) {
      let testConfig = AgoraEchoTestConfiguration()
      // Set the interval for returning test results
      testConfig.intervalInSeconds = 10
      // Enable audio device test
      testConfig.enableAudio = true
      // Disable video device test
      testConfig.enableVideo = false
      // Identify each test by channel name
      testConfig.channelId = "AudioEchoTest" + "\\(Int.random(in: 1...1000))"
      // Start the audio device test
      let ret = agoraKit.startEchoTest(withConfig: testConfig)
    }

    // Test video device
    @IBAction func doVideoTest(_ sender: UIButton) {
      let testConfig = AgoraEchoTestConfiguration()
      // Set the delay for video frame
      testConfig.intervalInSeconds = 2
      // Disable audio device test
      testConfig.enableAudio = false
      // Enable video device test
      testConfig.enableVideo = true
      // Identify each test by channel name
      testConfig.channelId = "VideoEchoTest" + "\\(Int.random(in: 1...1000))"
      // Set the view for rendering local user's video
      testConfig.view = videoCanvasView
      // Start the video device test
      let ret = agoraKit.startEchoTest(withConfig: testConfig)
    }
    \`\`\`

    ### Network quality analysis [#network-quality-analysis-3]

    The SDK provides the \`startLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`startLastmileProbeTest\` to start network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After calling this method, the SDK triggers the following callbacks:

       * \`onLastmileQuality\`: This callback is triggered two seconds after \`startLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`onLastmileProbeResult\`: This callback is triggered 30 seconds after \`startLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    \`\`\`swift
    // Create a network probe configuration object
    let config = AgoraLastmileProbeConfig()
    // Probe uplink network
    config.probeUplink = true;
    // Probe downlink network
    config.probeDownlink = true;
    // Expected uplink bitrate (bps). Value range is [100000,5000000]
    config.expectedUplinkBitrate = 100000;
    // Expected downlink bitrate (bps). Value range is [100000,5000000]
    config.expectedDownlinkBitrate = 100000;

    // Start the network quality probe
    agoraKit.startLastmileProbeTest(config)

    // Define callback functions to receive network quality statistics
    func rtcEngine(_ engine: AgoraRtcEngineKit, lastmileQuality quality: AgoraNetworkQuality) {
        lastmileResultLabel.text = "Quality: \\(quality.description())"
    }
    func rtcEngine(_ engine: AgoraRtcEngineKit, lastmileProbeTest result: AgoraLastmileProbeResult) {
      // Round-Trip Time (RTT)
      let rtt = "Rtt: \\(result.rtt)ms"
      // Downlink network bandwidth
      let downlinkBandWidth = "DownlinkAvailableBandwidth: \\(result.downlinkReport.availableBandwidth)Kbps"
      // Downlink jitter buffer
      let downlinkJitter = "DownlinkJitter: \\(result.downlinkReport.jitter)ms"
      // Downlink packet loss rate
      let downlinkLoss = "DownlinkLoss: \\(result.downlinkReport.packetLossRate)%"
      // Uplink network bandwidth
      let uplinkBandwidth = "UplinkAvailableBandwidth: \\(result.uplinkReport.availableBandwidth)Kbps"
      // Uplink jitter buffer
      let uplinkJitter = "UplinkJitter: \\(result.uplinkReport.jitter)ms"
      // Uplink packet loss rate
      let uplinkLoss = "UplinkLoss: \\(result.uplinkReport.packetLossRate)%"

      lastmileProbResultLabel.text = [rtt, downlinkBandWidth, downlinkJitter, downlinkLoss,uplinkBandwidth,uplinkJitter,uplinkLoss].joined(separator: "\\n")
    }

    // Stop the network quality probe
    agoraKit.stopLastmileProbeTest()
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    ### Equipment quality test [#equipment-quality-test-4]

    The SDK provides the \`startEchoTest\` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`startEchoTest\`. Specify the \`intervalInSeconds\` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10.

    2. After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`stopEchoTest\`, and then call \`joinChannelByToken\` to join a channel.

    To implement running an echo test in your app, refer to the following code:

    \`\`\`typescript
    this.engine.startEchoTest(10);
    this.engine.stopEchoTest();
    \`\`\`

    ### Network quality analysis [#network-quality-analysis-4]

    The SDK provides the \`startLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`startLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`onLastmileQuality\`: This callback is triggered two seconds after \`startLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`onLastmileProbeResult\`: This callback is triggered 30 seconds after \`startLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    \`\`\`typescript
    this.engine.registerEventHandler({
      onLastmileQuality(quality: QualityType) {},
      onLastmileProbeResult(result: LastmileProbeResult) {},
    });
    this.engine.startLastmileProbeTest({
      probeUplink: true,
      probeDownlink: true,
      expectedUplinkBitrate: 100000,
      expectedDownlinkBitrate: 100000,
    });
    this.engine.stopLastmileProbeTest();
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    ### Equipment quality test [#equipment-quality-test-5]

    The SDK provides the \`StartEchoTest\` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`StartEchoTest\`. Specify the \`intervalInSeconds\` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10.

    2. After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`StopEchoTest\`, and then call \`JoinChannel\` to join a channel.

    To implement running an echo test in your app, refer to the following code:

    \`\`\`csharp
    // Start Echo Test
    // Only a host can call StartEchoTest.
    RtcEngine.StartEchoTest(2);

    // Wait and check if you can hear voice playback

    // Stop the echo test
    // Call stopEchoTest to end the echo test. Until you call stopEchoTest, you cannot start another test or join a channel.
    RtcEngine.StopEchoTest();
    \`\`\`

    #### Audio recording device test [#audio-recording-device-test-2]

    To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps.

    1. Call \`StartRecordingDeviceTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The SDK reports \`uid = 0\`, and the volume information of the device in the \`OnAudioVolumeIndication\` callback.

    3. When you are done testing, call \`StopRecordingDeviceTest\` to stop the test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`OnAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    To implement running a recording device test in your app, refer to the following code:

    \`\`\`csharp
    // Create the IRtcEngine object
    RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
    UserEventHandler handler = new UserEventHandler(this);
    RtcEngineContext context = new RtcEngineContext(_appID, 0,
                            CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,
                            AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);
    // Initialize IRtcEngine
    RtcEngine.Initialize(context);
    // Set up listen callbacks
    RtcEngine.InitEventHandler(handler);
    // Get the IAudioDeviceManager object.
    IAudioDeviceManager audioDeviceManager = RtcEngine.GetAudioDeviceManager();
    // Enable local audio recording test
    audioDeviceManager.StartRecordingDeviceTest(100);

    class UserEventHandler : IRtcEngineEventHandler
    {
        // Implement the audio volume callback
        public override void OnAudioVolumeIndication(RtcConnection connection, AudioVolumeInfo[] speakers, uint speakerNumber, int totalVolume)
        {

        }
    }
    \`\`\`

    #### Audio playback device test [#audio-playback-device-test-2]

    To test that the local audio playback device is working properly, refer to the following steps:

    1. Call \`StartPlaybackDeviceTest\` and set the \`testAudioFilePath\` parameter to the absolute path of the audio file to be played.

    2. If the user hears the audio, the playback device is working properly. The SDK triggers the \`OnAudioVolumeIndication\` callback to report \`uid = 1\` and the volume information of the playback device.

    3. When you are done testing, call \`stopPlaybackDeviceTest\` to stop the test.
       \`\`\`csharp
       RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
       UserEventHandler handler = new UserEventHandler(this);
       RtcEngineContext context = new RtcEngineContext(_appID, 0,
                               CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,
                               AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);
       RtcEngine.Initialize(context);
       // Set up listen callbacks
       RtcEngine.InitEventHandler(handler);
       // Test the local audio playback device
       IAudioDeviceManager audioDeviceManager = RtcEngine.GetAudioDeviceManager();
       audioDeviceManager.StartPlaybackDeviceTest("/User/hello.mp3");

       class UserEventHandler : IRtcEngineEventHandler
       {
           // Implement the audio volume callback interface
           public override void OnAudioVolumeIndication(RtcConnection connection, AudioVolumeInfo[] speakers, uint speakerNumber, int totalVolume)
           {

           }
       }
       \`\`\`

    #### Audio equipment loop detection [#audio-equipment-loop-detection]

    #### Audio device loopback test [#audio-device-loopback-test-2]

    To test if the local audio device loop is working properly, refer to the following steps:

    1. Call \`StartAudioDeviceLoopbackTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two \`oOnAudioVolumeIndication\` callbacks to report the volume information of the audio capture device with \`uid= 0\`, and the audio playback device with \`uid= 1\`, respectively.

    3. When you are done testing, call \`StopAudioDeviceLoopbackTest\` to stop the recording device test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    To implement an audio loopback device test in your app, refer to the following code:

    \`\`\`csharp
    RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
    UserEventHandler handler = new UserEventHandler(this);
    RtcEngineContext context = new RtcEngineContext(_appID, 0,
                        CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,
                        AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);
    RtcEngine.Initialize(context);
    // Set up the callbacks
    RtcEngine.InitEventHandler(handler);
    // Test the local audio device loop
    IAudioDeviceManager audioDeviceManager = RtcEngine.GetAudioDeviceManager();
    audioDeviceManager.StartAudioDeviceLoopbackTest(100);

    // Call StopAudioDeviceLoopbackTest when you are done testing
    audioDeviceManager.StopAudioDeviceLoopbackTest();

    class UserEventHandler : IRtcEngineEventHandler
    {
        // Implement the audio volume callback interface
        public override void OnAudioVolumeIndication(RtcConnection connection, AudioVolumeInfo[] speakers, uint speakerNumber, int totalVolume)
        {

        }
    }
    \`\`\`

    ### Network quality analysis [#network-quality-analysis-5]

    The SDK provides the \`StartLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`StartLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`OnLastmileQuality\`: This callback is triggered two seconds after \`StartLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`OnLastmileProbeResult\`: This callback is triggered 30 seconds after \`StartLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    \`\`\`csharp
    RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
    UserEventHandler handler = new UserEventHandler(this);
    RtcEngineContext context = new RtcEngineContext(_appID, 0,
                            CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,
                            AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);
    RtcEngine.Initialize(context);
    // Set up callbacks
    RtcEngine.InitEventHandler(handler);
    // Start last-mile network inspection
    RtcEngine.StartLastmileProbeTest(new LastmileProbeConfig());

    // Stop the network test.
    // Agora recommends not calling any other APIs until the test is over
    RtcEngine.StopLastmileProbeTest();

    class UserEventHandler : IRtcEngineEventHandler
    {
        // This callback occurs approximately 2 seconds after the Last-mile network test starts
        public override void OnLastmileQuality(int quality)
        {

        }

        // This callback occurs approximately 30 seconds after the Last-mile network test starts
        public override void OnLastmileProbeResult(LastmileProbeResult result)
        {

        }
    }
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    ### Equipment quality test [#equipment-quality-test-6]

    The SDK provides the \`startEchoTest\` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`startEchoTest\`. Specify the \`intervalInSeconds\` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10.

    2. After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`stopEchoTest\`, and then call \`joinChannelByToken\` to join a channel.

    To implement running an echo test in your app, refer to the following code:

    \`\`\`cpp
    // Start the echo test
    // Only the host can call startEchoTest
    rtcEngine.startEchoTest(10);

    // Wait and check if you can hear your own voice played back

    // Stop the echo test
    // You must call stopEchoTest to end the echo test. Otherwise, you will not be able to do another echo test or join the channel
    rtcEngine.stopEchoTest
    \`\`\`

    #### Audio recording device test [#audio-recording-device-test-3]

    To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps.

    1. Call \`startRecordingDeviceTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The SDK reports \`uid = 0\`, and the volume information of the device in the \`onAudioVolumeIndication\` callback.

    3. When you are done testing, call \`stopRecordingDeviceTest\` to stop the test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    To implement running a recording device test in your app, refer to the following code:

    \`\`\`cpp
    // Select an audio capture device
    lpDeviceManager->setRecordingDevice(strDeviceID);

    // Implement the audio volume callback
    virtual void onAudioVolumeIndication(const AudioVolumeInfo* speakers,
                                         unsigned int speakerNumber,
                                         int totalVolume) {
       (void)speakers;
       (void)speakerNumber;
       (void)totalVolume;
    }

    // Start audio capture device test
    (*lpDeviceManager)->startRecordingDeviceTest(1000);

    // Stop the audio capture device test
    (*lpDeviceManager)->stopRecordingDeviceTest();
    \`\`\`

    #### Audio playback device test [#audio-playback-device-test-3]

    To test that the local audio playback device is working properly, refer to the following steps:

    1. Call \`startPlaybackDeviceTest\` and set the \`audioFileName\` parameter to the absolute path of the audio file to be played.

    2. If the user hears the audio, the playback device is working properly. The SDK triggers the \`onAudioVolumeIndication\` callback to report \`uid = 1\` and the volume information of the playback device.

    3. When you are done testing, call \`stopPlaybackDeviceTest\` to stop the test.

    To implement running a playback device test in your app, refer to the following code:

    \`\`\`cpp
    // Select an audio playback device
    lpDeviceManager->setPlaybackDevice(strDeviceID);

    // Specify the absolute path of the audio file to start the playback device test
    (*lpDeviceManager)->startPlaybackDeviceTest(filePath);

    // Stop the audio playback device test
    (*lpDeviceManager)->stopPlaybackDeviceTest();
    \`\`\`

    #### Audio device loopback test [#audio-device-loopback-test-3]

    To test if the local audio device loop is working properly, refer to the following steps:

    1. Call \`startAudioDeviceLoopbackTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two \`onAudioVolumeIndication\` callbacks to report the volume information of the audio capture device with \`uid= 0\`, and the audio playback device with \`uid= 1\`, respectively.

    3. When you are done testing, call \`stopAudioDeviceLoopbackTest\` to stop the recording device test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    ### Network quality analysis [#network-quality-analysis-6]

    The SDK provides the \`startLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`startLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`onLastmileQuality\`: This callback is triggered two seconds after \`startLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`onLastmileProbeResult\`: This callback is triggered 30 seconds after \`startLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    \`\`\`cpp
    // Register the callback interface
    // This callback occurs approximately 2 seconds after starting Last-mile network probe test
    void onLastmileQuality(int quality) {
    }

    // This callback occurs approximately 30 seconds after starting Last-mile network probe test
    void onLastmileProbeResult(LastmileProbeResult) {
        // (1) Optionally, you can end the test inside the callback. Agora recommends not calling other API methods until the testing is completed
        lpAgoraEngine->stopLastmileProbeTest();
    }

    // Configure a LastmileProbeConfig instance
    LastmileProbeConfig config;
    // Enable detection of uplink network quality
    config.probeUplink = true;
    // Enable detection of downlink network quality
    config.probeDownlink = true;
    // Desired maximum transmit bitrate in bps, range [100000,5000000].
    config.expectedUplinkBitrate = 100000;
    // Desired maximum receive bitrate in bps, range [100000,5000000].
    config.expectedDownlinkBitrate = 100000;
    // Start last-mile network probing before joining a channel.
    lpAgoraEngine->startLastmileProbeTest(config);

    // (2) You can also choose to end the test at another time. Agora does not recommend calling any other API methods until testing is complete.
    lpAgoraEngine->stopLastmileProbeTest();
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### Equipment quality test [#equipment-quality-test-7]

    You test the recording and playback devices separately.

    #### Recording equipment testing [#recording-equipment-testing]

    Refer to the following steps to test the local microphone and camera:

    1. Call \`AgoraRTC.getDevices\` to get the available devices and their IDs.

    2. When calling \`AgoraRTC.createCameraVideoTrack\` and \`AgoraRTC.createMicrophoneAudioTrack\` to create local audio and video track objects, pass in \`cameraId\` and \`microphoneId\` to specify the devices you want to test.

    3. After creating the local audio or video track object, call \`CameraVideoTrack.play\` to play the local video track:

       1. If you are testing the microphone, call \`MicrophoneAudioTrack.getVolumeLevel\` to get the volume level. If the volume is greater than \`0\`, it means that the microphone is working normally.

       2. When testing the camera, if you see the picture after playing the video track, it means that the camera is working normally.

    To implement recording equipment tests in your app, refer to the following code:

    \`\`\`javascript
    // Get all audio and video devices
    AgoraRTC.getDevices()
      .then(devices => {
        const audioDevices = devices.filter(function(device){
            return device.kind === "audioinput";
        });
        const videoDevices = devices.filter(function(device){
            return device.kind === "videoinput";
        });

        var selectedMicrophoneId = audioDevices[0].deviceId;
        var selectedCameraId = videoDevices[0].deviceId;
        return Promise.all([
          AgoraRTC.createCameraVideoTrack({ cameraId: selectedCameraId }),
          AgoraRTC.createMicrophoneAudioTrack({ microphoneId: selectedMicrophoneId }),
        ]);
      })
      .then([videoTrack, audioTrack] => {
        videoTrack.play("<ELEMENT_ID_IN_DOM>");
        setInterval(() => {
          const level = audioTrack.getVolumeLevel();
          console.log("local stream audio level", level);
        }, 1000);
      });
    \`\`\`

    <CalloutContainer type="info">
      <CalloutTitle>
        Information
      </CalloutTitle>

      <CalloutDescription>
        * Best practice is to draw the volume change and camera screen on the UI so that users can judge if the device is working properly.
        * Device IDs are randomly generated, and in some cases the ID of the same device may change. Best practice is to call \`AgoraRTC.getDevices\` to get the device ID every time you test the device.
      </CalloutDescription>
    </CalloutContainer>

    #### Playback device testing [#playback-device-testing]

    The Agora SDK for Web does not provide an API for testing audio playback devices. Use the following methods to test the audio playback devices:

    * Create an audio player on the page using the HTML5 \`<audio>\` element. Prompt the user to play the audio file and confirm that the sound is audible.

    * After capturing the microphone audio, call \`MicrophoneAudioTrack.play\` to play the microphone sound and prompt the user to subjectively verify that the playback is audible.

    ### Network quality analysis [#network-quality-analysis-7]

    Refer to the following steps to perform a network quality test before a call or live broadcast:

    1. Call \`createClient\` twice, to create two clients:
       * \`uplinkClient\`: To test the connection status of the uplink network.
       * \`downlinkClient\`: To test the connection status of the downlink network.

    2. Both clients call \`join\` to enter a channel for testing.

    3. Call \`createMicrophoneAndCameraTracks\` to create audio and video tracks.

    4. Call \`publish\` on \`uplinkClient\` to publish audio and video tracks and \`subscribe\` on \`downlinkClient\` to subscribe to audio and video tracks.

    5. Listen to the \`uplinkClient.on("network-quality")\` event to get the uplink network status between the local device and Agora server.

    6. Listen to \`downlinkClient.on("network-quality")\` event to get the downlink network status between the local device and the Agora server. The SDK triggers the \`client.on("network-quality")\` callback every two seconds.

    7. To get specific statistics about the sent or received media tracks, such as send/receive bitrate, end-to-end latency, call \`getLocalAudioStats\` and \`getLocalVideoStats\` on \`uplinkClient\` to get the uplink statistics, and \`getRemoteAudioStats\` and \`getRemoteVideoStats\` on \`downlinkClient\` to get the downlink statistics.

    The following figure summarizes the calling sequence of network quality tests:

    <Accordions>
      <Accordion title="Pre-call last mile test">
        ![Network quality analysis](https://assets-docs.agora.io/images/video-sdk/pre-call-network-quality-web.svg)
      </Accordion>
    </Accordions>

    To implement network quality testing in your app, refer to the following code:

    \`\`\`typescript
    // Get uplink network quality
    uplinkClient.on("network-quality", (quality) => {
      console.log("uplink network quality", quality.uplinkNetworkQuality);
    });

    // Get downlink network quality
    downlinkClient.on("network-quality", (quality) => {
      console.log("downlink network quality", quality.downlinkNetworkQuality);
    });

    // Get uplink statistics
    uplinkVideoStats = uplinkClient.getLocalVideoStats();
    // Get downlink statistics
    downlinkVideoStats = downlinkClient.getRemoteVideoStats()[<UPLINKCLIENT_UID>];

    console.log("uplink video stats", uplinkVideoStats);
    console.log("downlink video stats", downlinkVideoStats);
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ### Equipment quality test [#equipment-quality-test-8]

    The SDK provides the \`startEchoTest\` \\[3/3] method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    1. Before joining a channel, call \`startEchoTest\` \\[3/3] with \`EchoTestConfiguration\`. Specify the channel name, whether to test audio or video, and the time interval for the echo.

    2. After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally.

    3. To stop the test, call \`stopEchoTest\`, and then call \`joinChannel\` to join a channel.

       <CalloutContainer type="warning">
         <CalloutTitle>
           Note
         </CalloutTitle>

         <CalloutDescription>
           Using \`startEchoTest\` \\[3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results.
         </CalloutDescription>
       </CalloutContainer>

    To implement running an echo test in your app, refer to the following code:

    \`\`\`cpp
    // Test audio device
    void testAudioDevice() {
        EchoTestConfiguration config;
        // Enable audio device test
        config.enableAudio = true;
        // Disable video device test
        config.enableVideo = false;
        // Set the interval for returning test results
        config.intervalInSeconds = m_audioEchoInterval;
        // Identify the test channel
        config.channelId = "AudioEchoTestChannel";
        // Start the test
        m_rtcEngine->startEchoTest(config);
    }

    // Test video device
    void testVideoDevice() {
        EchoTestConfiguration config;
        // Disable audio device test
        config.enableAudio = false;
        // Enable video device test
        config.enableVideo = true;
        // Specify the view for rendering local user video
        config.view = m_VideoTest.GetVideoSafeHwnd();
        // Set the expected delay for video frames
        config.intervalInSeconds = m_videoEchoInterval;
        // Identify the test channel
        config.channelId = "VideoEchoTestChannel";
        // Start the test
        m_rtcEngine->startEchoTest(config);
    }
    \`\`\`

    ### Network quality analysis [#network-quality-analysis-8]

    RTC SDK provides the \`startLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`startLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`onLastmileQuality\`: This callback is triggered two seconds after \`startLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`onLastmileProbeResult\`: This callback is triggered 30 seconds after \`startLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`stopLastmileProbeTest\` to stop last-mile network testing.

    To implement network quality testing in your app, refer to the following code:

    \`\`\`cpp
    // Callback registration
    void onLastmileQuality(int quality) {
    }

    void onLastmileProbeResult(LastmileProbeResult result) {
    }

    // Configure a LastmileProbeConfig instance
    LastmileProbeConfig config;
    // Confirm probing uplink network quality
    config.probeUplink = true;
    // Confirm probing downlink network quality
    config.probeDownlink = true;
    // Expected maximum sending bitrate, in bps, range [100000,5000000]
    config.expectedUplinkBitrate = 100000;
    // Expected maximum receiving bitrate, in bps, range [100000,5000000]
    config.expectedDownlinkBitrate = 100000;
    // Start network quality probing
    m_rtcEngine->startLastmileProbeTest(config);

    // Stop network quality probing
    m_rtcEngine->stopLastmileProbeTest();
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    ### Equipment quality test [#equipment-quality-test-9]

    The SDK provides the \`startEchoTest\` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:

    #### Start the echo test [#start-the-echo-test]

    1. Create the UMG

       Create a button control named **Btn\\_StartEchoTest** that you click to start the voice call loop test.

       ![Create UMG](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-startechotest-umg.png)

    2. Bind UI events

       Create a **Bind Event to On Clicked** node that connects the **Btn\\_StartEchoTest** control and the \`OnStartEchoTestClicked\` callback. When you press the button to start the voice call test, the \`OnStartEchoTestClicked\` callback is triggered. This is shown in the following figure:

       ![Bind UI Events](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-startechotest-bind-ui-events.png)

    3. Implement the UI event

       Create the \`OnStartEchoTestClicked\` callback function. When this callback is triggered, the **Start Echo Test** method is called to start the test. When the echo test starts, the user speaks into the microphone. If the recording is played back after the set time interval, it means that the audio device and network connection are working normally. In this example, configure the \`Config\` parameter of **Start Echo Test** as follows:

       * **Enable Audio** is checked by default, which means audio device detection is enabled.
       * Uncheck **Enable Video** to disable video device testing.
       * Input **Token** and **Channel Id** (channel name).
       * **Interval In Seconds** is set to **2** by default. This is the time interval between when you start the call and when the recording plays back.

       ![Implement UI Events](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-startechotest-impl-ui-events.png)

    ##### Stop voice call detection [#stop-voice-call-detection]

    1. Create UMG

       Create a button control named **Btn\\_StopEchoTest**. You click the button to stop the echo test. As shown in the following figure:

       ![Create UMG](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-stopechotest-umg.png)

    2. Bind UI events

       Create a **Bind Event to On Clicked** node that connects the **Btn\\_StopEchoTest** control and the \`OnStopEchoTestClicked\` callback. The \`OnStopEchoTestClicked\` callback is triggered when you press the button to stop the voice call test. This is shown in the following figure:

       ![Bind UI Events](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-stopechotest-bind-ui-events.png)

    3. Implement the UI event

       Create \`OnStoptEchoTestClicked\` callback function. After getting the test result, you press the stop button to trigger this callback and call the **Stop Echo Test** method to stop the test.

       ![Implement UI Events](https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-stopechotest-impl-ui-events.png)

    #### Audio recording device detection [#audio-recording-device-detection]

    To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps.

    1. Call \`StartRecordingDeviceTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The SDK reports \`uid = 0\`, and the volume information of the device in the \`FOnAudioVolumeIndication\` callback.

    3. When you are done testing, call \`StopRecordingDeviceTest\` to stop the test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`FOnAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    #### Audio playback device test [#audio-playback-device-test-4]

    To test that the local audio playback device is working properly, refer to the following steps:

    1. Call \`StartPlaybackDeviceTest\` and set the \`testAudioFilePath\` parameter to the absolute path of the audio file to be played.

    2. If the user hears the audio, the playback device is working properly. The SDK triggers the \`FOnAudioVolumeIndication\` callback to report \`uid = 1\` and the volume information of the playback device.

    3. When you are done testing, call \`StopPlaybackDeviceTest\` to stop the test.

    #### Audio device loopback test [#audio-device-loopback-test-4]

    To test if the local audio device loop is working properly, refer to the following steps:

    1. Call \`StartAudioDeviceLoopbackTest\` and set the \`indicationInterval\` parameter to the time interval after which the callback is triggered.

    2. After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two \`FOnAudioVolumeIndication\` callbacks to report the volume information of the audio capture device with \`uid= 0\`, and the audio playback device with \`uid= 1\`, respectively.

    3. When you are done testing, call \`StopAudioDeviceLoopbackTest\` to stop the recording device test.

       <CalloutContainer type="info">
         <CalloutTitle>
           Information
         </CalloutTitle>

         <CalloutDescription>
           Best practice is to set the \`indicationInterval\` parameter to more than \`200\` milliseconds and not less than \`10\` milliseconds, otherwise the \`onAudioVolumeIndication\` callback may not be received.
         </CalloutDescription>
       </CalloutContainer>

    ### Network quality analysis [#network-quality-analysis-9]

    The SDK provides the \`StartLastmileProbeTest\` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:

    1. Before joining a channel or switching user roles, call \`StartLastmileProbeTest\` to start the network test. Set the probe configuration and the expected maximum bitrate in \`LastmileProbeConfig\`.

    2. After you start the test, the SDK triggers the following callbacks:

       * \`FOnLastmileQuality\`: This callback is triggered two seconds after \`StartLastmileProbeTest\` is called. It provides feedback on the upstream and downstream network quality through a subjective \`quality\` score.

       * \`FOnLastmileProbeResult\`: This callback is triggered 30 seconds after \`StartLastmileProbeTest\` is called. It returns objective real-time network statistics, including \`packetLossRate\`, network \`jitter\`, and \`availableBandwidth\`.

    3. Call \`StopLastmileProbeTest\` to stop last-mile network testing.

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### Troubleshooting device and network issues [#troubleshooting-device-and-network-issues]

If you encounter problems while running pre-call tests, first ensure that you have implemented the API calls properly. To troubleshoot device and network issues, refer to the following table:

| Problem                                                                           | Solution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can't hear sound when testing audio devices.                                      | - Check that the recording device and the playback device are working properly, and are not occupied by other programs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Cannot see the screen when testing video devices.                                 | - Check that the video device is working properly and not occupied by other programs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Poor uplink network quality detected (packet loss > 5%; network jitter > 100ms)   | - Check that the local network is working properly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Poor downlink network quality detected (packet loss > 5%; network jitter > 100ms) | * Check that the local network is working properly.
* Ensure that the total bandwidth of the local subscription does not exceed the available downstream bandwidth by:
  * Reducing the number of subscribed audio and video streams on the receiving end or reducing the bitrate of published audio and video streams on the sending end.
  * Enabling dual-stream mode on the sending side and requesting to receive small streams on the receiving side to reduce bandwidth consumption.
  * Enabling the video stream fallback function or the multiple streams by priority fallback function at the receiving end. |

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    ### Sample project [#sample-project]

    Agora provides an open-source [PreCallTest](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample-Audio/app/src/main/java/io/agora/api/example/examples/advanced/PreCallTest.java) sample project for your reference. Download and explore this project for a more detailed example.

    ### API reference [#api-reference]

    * [\`startEchoTest\` \\[3/3\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startechotest3)
    * [\`stopEchoTest\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest)
    * [\`startLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`stopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`onLastmileQuality\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality)
    * [\`onLastmileProbeResult\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="electron" />

    ### API reference [#api-reference-1]

    * [\`startLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`stopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`onLastmileQuality\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality)
    * [\`onLastmileProbeResult\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="flutter" />

    ### API reference [#api-reference-2]

    * [\`startRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest)
    * [\`stopRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest)
    * [\`startPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest)
    * [\`stopPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest)
    * [\`startAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest)
    * [\`stopAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest)
    * [\`startEchoTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_startechotest3)
    * [\`stopEchoTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_stopechotest)
    * [\`startLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`stopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`onLastmileQuality\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality)
    * [\`onLastmileProbeResult\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    ### Sample project [#sample-project-1]

    Agora provides an open-source [PreCallTest](https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/PrecallTest/PrecallTest.swift) sample project for your reference. Download and explore this project for a more detailed example.

    ### API reference [#api-reference-3]

    * [\`startEchoTest(withConfig:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startechotest\\(withconfig:\\))
    * [\`stopEchoTest()\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopechotest\\(\\))
    * [\`startLastmileProbeTest(_:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startlastmileprobetest\\(_:\\))
    * [\`stopLastmileProbeTest()\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stoplastmileprobetest\\(\\))
    * [\`rtcEngine(_:lastmileQuality:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:lastmilequality:\\))
    * [\`rtcEngine(_:lastmileProbeTest:)\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:lastmileprobetest:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    ### Sample project [#sample-project-2]

    Agora provides an open-source [PreCallTest](https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/PrecallTest/PrecallTest.swift) sample project for your reference. Download and explore this project for a more detailed example.

    ### API reference [#api-reference-4]

    * [\`startEchoTest(withConfig:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startechotest\\(withconfig:\\))
    * [\`stopEchoTest()\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stopechotest\\(\\))
    * [\`startLastmileProbeTest(_:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startlastmileprobetest\\(_:\\))
    * [\`stopLastmileProbeTest()\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stoplastmileprobetest\\(\\))
    * [\`rtcEngine(_:lastmileQuality:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:lastmilequality:\\))
    * [\`rtcEngine(_:lastmileProbeTest:)\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:lastmileprobetest:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

This feature guide is not available yet for JavaScript.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    ### Sample projects [#sample-projects]

    Agora provides an open-source Web [JoinChannelAudio](https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx) sample project for your reference. Download and explore this project for a more detailed example.

    During the process of adjusting call volume, refer to the [AudioMixing](https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/AudioMixing/AudioMixing.tsx) project to adjust the playback volume of a mix or sound file.

    ### API reference [#api-reference-5]

    * [\`startEchoTest\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startechotest3)
    * [\`stopEchoTest\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest)
    * [\`startLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`stopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    ### API reference [#api-reference-6]

    * [\`StartRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest)
    * [\`StopRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest)
    * [\`StartPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest)
    * [\`StopPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest)
    * [\`StartAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest)
    * [\`StopAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest)
    * [\`StartEchoTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startechotest2)
    * [\`StopEchoTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest)
    * [\`StartLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`StopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`OnlastmileQuality\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality)
    * [\`OnlastmileProbeResult\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    ### Sample project [#sample-project-3]

    Agora provides an open-source Web [sample project](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example) for your reference. Download and explore this project for a more detailed example.

    ### API reference [#api-reference-7]

    * [\`startRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest)
    * [\`stopRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest)
    * [\`startPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest)
    * [\`stopPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest)
    * [\`startAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest)
    * [\`stopAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest)
    * [\`startEchoTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_startechotest)
    * [\`stopEchoTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest)
    * [\`startLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`stopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`onlastmileQuality\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality)
    * [\`onlastmileProbeResult\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### Sample project [#sample-project-4]

    Agora provides the following open-source projects for your reference:

    * [JoinChannelAudio](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx)

    Download or view the code for more detailed examples.

    ### API reference [#api-reference-8]

    * Equipment testing :
      * [getDevices](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#getdevices)
      * [getCameras](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#getcameras)
      * [getMicrophones](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#getmicrophones)
      * [createMicrophoneAudioTrack](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack)
      * [createCameraVideoTrack](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcameravideotrack)

    * Network analysis:
      * [network-quality](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_network_quality)
      * [getLocalAudioStats](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getlocalaudiostats)
      * [getLocalVideoStats](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getlocalvideostats)
      * [getRemoteAudioStats](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getremoteaudiostats)
      * [getRemoteVideoStats](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getremotevideostats)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ### Sample project [#sample-project-5]

    Agora provides an open-source [PreCallTest](https://github.com/AgoraIO/API-Examples/tree/4.0.0-GA/windows/APIExample/APIExample/Advanced/PreCallTest) sample project for your reference. Download and explore this project for a more detailed example.

    ### API reference [#api-reference-9]

    * [\`startEchoTest\` \\[3/3\\]](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startechotest3)
    * [\`stopEchoTest\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest)
    * [\`startLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`stopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`onLastmileQuality\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality)
    * [\`onLastmileProbeResult\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    ### Sample project [#sample-project-6]

    Agora provides an open-source [JoinChannelAudio](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic/JoinChannelAudio) sample project for your reference. Download and explore the project for a more detailed example.

    ### API reference [#api-reference-10]

    * [\`StartEchoTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_startechotest)
    * [\`StopEchoTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest)
    * [\`StartEchoTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_startechotest)
    * [\`StartRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest)
    * [\`StopRecordingDeviceTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest)
    * [\`StartPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest)
    * [\`StopPlaybackDeviceTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest)
    * [\`StartAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest)
    * [\`StopAudioDeviceLoopbackTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest)
    * [\`StartLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest)
    * [\`StopLastmileProbeTest\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest)
    * [\`FOnLastmileQuality\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality)
    * [\`FOnLastmileProbeResult\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "In video calling implementations that demand high communication quality, pre-call detection helps identify and troubleshoot issues beforehand, ensuring seamless real-time interaction."
  }, {
    heading: undefined,
    content: "This page shows you how to use RTC SDK to run pre-call tests to identify and troubleshoot communication quality issues in your app."
  }, {
    heading: "understand-the-tech",
    content: "Pre-call testing typically covers two aspects:"
  }, {
    heading: "understand-the-tech",
    content: "**Equipment quality test**"
  }, {
    heading: "understand-the-tech",
    content: "To test whether the local microphone, speaker, and camera are working properly, you run an echo test. The basic process of conducting an echo test is as follows:"
  }, {
    heading: "understand-the-tech",
    content: "**Network quality analysis**"
  }, {
    heading: "understand-the-tech",
    content: "The quality of the last mile network affects the smoothness and clarity of the audio and video that the user sends and receives. Last mile refers to the last leg of communication network between the edge server of the Agora SDRTN® and the end-user devices. Network quality analysis enables you to get feedback on the available bandwidth, packet loss rate, network jitter, and round-trip delay of the upstream and downstream last-mile networks. The following figure shows the basic process of running a last-mile probe test."
  }, {
    heading: "understand-the-tech",
    content: "**Equipment quality test**"
  }, {
    heading: "understand-the-tech",
    content: "Device quality testing involves testing whether the local microphone, speaker, and camera are working properly."
  }, {
    heading: "understand-the-tech",
    content: "**Network quality analysis**"
  }, {
    heading: "understand-the-tech",
    content: "The quality of the last mile network affects the smoothness and clarity of the audio and video that the user sends and receives. Last mile refers to the last leg of communication network between the edge server of the Agora SDRTN® and the end-user devices. Network quality analysis enables you to get feedback on the available bandwidth, packet loss rate, network jitter, and round-trip delay of the upstream and downstream last-mile networks. It enables you to examine if current network conditions are good enough to meet the requirements of the currently selected audio bitrate or the target video bitrate."
  }, {
    heading: "understand-the-tech",
    content: "Best practice is to run the device test first and then perform a network test."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart project and that your app has obtained permissions to use the relevant devices."
  }, {
    heading: "implement-pre-call-testing",
    content: "This section shows you how to implement pre-call testing in your project."
  }, {
    heading: "equipment-quality-test",
    content: "The SDK provides the `startEchoTest` \\[3/3] method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test",
    content: "Before joining a channel, call `startEchoTest` \\[3/3] with `EchoTestConfiguration`. Specify the channel name, whether to test audio or video, and the time interval for the echo."
  }, {
    heading: "equipment-quality-test",
    content: "After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test",
    content: "To stop the test, call `stopEchoTest`, and then call `joinChannel` to join a channel."
  }, {
    heading: "equipment-quality-test",
    content: "Using `startEchoTest` \\[3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results."
  }, {
    heading: "equipment-quality-test",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "network-quality-analysis",
    content: "The SDK provides the `startLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis",
    content: "Before joining a channel or switching user roles, call `startLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis",
    content: "`onLastmileQuality`: This callback is triggered two seconds after `startLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis",
    content: "`onLastmileProbeResult`: This callback is triggered 30 seconds after `startLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-1",
    content: "The SDK provides the `startEchoTest` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test-1",
    content: "Before joining a channel, call `startEchoTest`. Specify the `intervalInSeconds` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."
  }, {
    heading: "equipment-quality-test-1",
    content: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test-1",
    content: "To stop the test, call `stopEchoTest`, and then call `joinChannel` to join a channel."
  }, {
    heading: "equipment-quality-test-1",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "audio-recording-device-test",
    content: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
  }, {
    heading: "audio-recording-device-test",
    content: "Call `startRecordingDeviceTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-recording-device-test",
    content: "After starting the test, speak into the microphone. The SDK reports `uid = 0`, and the volume information of the device in the `onAudioVolumeIndication` callback."
  }, {
    heading: "audio-recording-device-test",
    content: "When you are done testing, call `stopRecordingDeviceTest` to stop the test."
  }, {
    heading: "audio-recording-device-test",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-recording-device-test",
    content: "To implement running a recording device test in your app, refer to the following code:"
  }, {
    heading: "audio-playback-device-test",
    content: "To test that the local audio playback device is working properly, refer to the following steps:"
  }, {
    heading: "audio-playback-device-test",
    content: "Call `startPlaybackDeviceTest` and set the `audioFileName` parameter to the absolute path of the audio file to be played."
  }, {
    heading: "audio-playback-device-test",
    content: "If the user hears the audio, the playback device is working properly. The SDK triggers the `onAudioVolumeIndication` callback to report `uid = 1` and the volume information of the playback device."
  }, {
    heading: "audio-playback-device-test",
    content: "When you are done testing, call `stopPlaybackDeviceTest` to stop the test."
  }, {
    heading: "audio-playback-device-test",
    content: "To implement running a playback device test in your app, refer to the following code:"
  }, {
    heading: "audio-device-loopback-test",
    content: "To test if the local audio device loop is working properly, refer to the following steps:"
  }, {
    heading: "audio-device-loopback-test",
    content: "Call `startAudioDeviceLoopbackTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-device-loopback-test",
    content: "After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two `onAudioVolumeIndication` callbacks to report the volume information of the audio capture device with `uid= 0`, and the audio playback device with `uid= 1`, respectively."
  }, {
    heading: "audio-device-loopback-test",
    content: "When you are done testing, call `stopAudioDeviceLoopbackTest` to stop the recording device test."
  }, {
    heading: "audio-device-loopback-test",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-device-loopback-test",
    content: "To implement an audio loopback device test in your app, refer to the following code:"
  }, {
    heading: "network-quality-analysis-1",
    content: "The SDK provides the `startLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-1",
    content: "Before joining a channel or switching user roles, call `startLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-1",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-1",
    content: "`onLastmileQuality`: This callback is triggered two seconds after `startLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-1",
    content: "`onLastmileProbeResult`: This callback is triggered 30 seconds after `startLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-1",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis-1",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-2",
    content: "The SDK provides the `startEchoTest` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test-2",
    content: "Before joining a channel, call `startEchoTest`. Specify the `intervalInSeconds` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."
  }, {
    heading: "equipment-quality-test-2",
    content: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test-2",
    content: "To stop the test, call `stopEchoTest`, and then call `joinChannel` to join a channel."
  }, {
    heading: "equipment-quality-test-2",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "audio-recording-device-test-1",
    content: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
  }, {
    heading: "audio-recording-device-test-1",
    content: "Call `startRecordingDeviceTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-recording-device-test-1",
    content: "After starting the test, speak into the microphone. The SDK reports `uid = 0`, and the volume information of the device in the `onAudioVolumeIndication` callback."
  }, {
    heading: "audio-recording-device-test-1",
    content: "When you are done testing, call `stopRecordingDeviceTest` to stop the test."
  }, {
    heading: "audio-recording-device-test-1",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-recording-device-test-1",
    content: "To implement running a recording device test in your app, refer to the following code:"
  }, {
    heading: "audio-playback-device-test-1",
    content: "To test that the local audio playback device is working properly, refer to the following steps:"
  }, {
    heading: "audio-playback-device-test-1",
    content: "Call `startPlaybackDeviceTest` and set the `audioFileName` parameter to the absolute path of the audio file to be played."
  }, {
    heading: "audio-playback-device-test-1",
    content: "If the user hears the audio, the playback device is working properly. The SDK triggers the `onAudioVolumeIndication` callback to report `uid = 1` and the volume information of the playback device."
  }, {
    heading: "audio-playback-device-test-1",
    content: "When you are done testing, call `stopPlaybackDeviceTest` to stop the test."
  }, {
    heading: "audio-playback-device-test-1",
    content: "To implement running a playback device test in your app, refer to the following code:"
  }, {
    heading: "audio-device-loopback-test-1",
    content: "To test if the local audio device loop is working properly, refer to the following steps:"
  }, {
    heading: "audio-device-loopback-test-1",
    content: "Call `startAudioDeviceLoopbackTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-device-loopback-test-1",
    content: "After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two `onAudioVolumeIndication` callbacks to report the volume information of the audio capture device with `uid= 0`, and the audio playback device with `uid= 1`, respectively."
  }, {
    heading: "audio-device-loopback-test-1",
    content: "When you are done testing, call `stopAudioDeviceLoopbackTest` to stop the recording device test."
  }, {
    heading: "audio-device-loopback-test-1",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-device-loopback-test-1",
    content: "To implement an audio loopback device test in your app, refer to the following code:"
  }, {
    heading: "network-quality-analysis-2",
    content: "The SDK provides the `startLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-2",
    content: "Before joining a channel or switching user roles, call `startLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-2",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-2",
    content: "`onLastmileQuality`: This callback is triggered two seconds after `startLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-2",
    content: "`onLastmileProbeResult`: This callback is triggered 30 seconds after `startLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-2",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis-2",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-3",
    content: "The SDK provides the `startEchoTest(withConfig:)` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test-3",
    content: "Before joining a channel, call `startEchoTest(withConfig:)` with `AgoraEchoTestConfiguration`. Specify the channel name, whether to test audio or video, and the time interval for the echo."
  }, {
    heading: "equipment-quality-test-3",
    content: "After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test-3",
    content: "To stop the test, call `stopEchoTest`, and then call `joinChannel` to join a channel."
  }, {
    heading: "equipment-quality-test-3",
    content: "Using `startEchoTest(withConfig:)` \\[3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results."
  }, {
    heading: "equipment-quality-test-3",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "network-quality-analysis-3",
    content: "The SDK provides the `startLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-3",
    content: "Before joining a channel or switching user roles, call `startLastmileProbeTest` to start network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-3",
    content: "After calling this method, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-3",
    content: "`onLastmileQuality`: This callback is triggered two seconds after `startLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-3",
    content: "`onLastmileProbeResult`: This callback is triggered 30 seconds after `startLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-3",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis-3",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-4",
    content: "The SDK provides the `startEchoTest` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test-4",
    content: "Before joining a channel, call `startEchoTest`. Specify the `intervalInSeconds` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."
  }, {
    heading: "equipment-quality-test-4",
    content: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test-4",
    content: "To stop the test, call `stopEchoTest`, and then call `joinChannelByToken` to join a channel."
  }, {
    heading: "equipment-quality-test-4",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "network-quality-analysis-4",
    content: "The SDK provides the `startLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-4",
    content: "Before joining a channel or switching user roles, call `startLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-4",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-4",
    content: "`onLastmileQuality`: This callback is triggered two seconds after `startLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-4",
    content: "`onLastmileProbeResult`: This callback is triggered 30 seconds after `startLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-4",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis-4",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-5",
    content: "The SDK provides the `StartEchoTest` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test-5",
    content: "Before joining a channel, call `StartEchoTest`. Specify the `intervalInSeconds` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."
  }, {
    heading: "equipment-quality-test-5",
    content: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test-5",
    content: "To stop the test, call `StopEchoTest`, and then call `JoinChannel` to join a channel."
  }, {
    heading: "equipment-quality-test-5",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "audio-recording-device-test-2",
    content: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
  }, {
    heading: "audio-recording-device-test-2",
    content: "Call `StartRecordingDeviceTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-recording-device-test-2",
    content: "After starting the test, speak into the microphone. The SDK reports `uid = 0`, and the volume information of the device in the `OnAudioVolumeIndication` callback."
  }, {
    heading: "audio-recording-device-test-2",
    content: "When you are done testing, call `StopRecordingDeviceTest` to stop the test."
  }, {
    heading: "audio-recording-device-test-2",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `OnAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-recording-device-test-2",
    content: "To implement running a recording device test in your app, refer to the following code:"
  }, {
    heading: "audio-playback-device-test-2",
    content: "To test that the local audio playback device is working properly, refer to the following steps:"
  }, {
    heading: "audio-playback-device-test-2",
    content: "Call `StartPlaybackDeviceTest` and set the `testAudioFilePath` parameter to the absolute path of the audio file to be played."
  }, {
    heading: "audio-playback-device-test-2",
    content: "If the user hears the audio, the playback device is working properly. The SDK triggers the `OnAudioVolumeIndication` callback to report `uid = 1` and the volume information of the playback device."
  }, {
    heading: "audio-playback-device-test-2",
    content: "When you are done testing, call `stopPlaybackDeviceTest` to stop the test."
  }, {
    heading: "audio-device-loopback-test-2",
    content: "To test if the local audio device loop is working properly, refer to the following steps:"
  }, {
    heading: "audio-device-loopback-test-2",
    content: "Call `StartAudioDeviceLoopbackTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-device-loopback-test-2",
    content: "After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two `oOnAudioVolumeIndication` callbacks to report the volume information of the audio capture device with `uid= 0`, and the audio playback device with `uid= 1`, respectively."
  }, {
    heading: "audio-device-loopback-test-2",
    content: "When you are done testing, call `StopAudioDeviceLoopbackTest` to stop the recording device test."
  }, {
    heading: "audio-device-loopback-test-2",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-device-loopback-test-2",
    content: "To implement an audio loopback device test in your app, refer to the following code:"
  }, {
    heading: "network-quality-analysis-5",
    content: "The SDK provides the `StartLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-5",
    content: "Before joining a channel or switching user roles, call `StartLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-5",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-5",
    content: "`OnLastmileQuality`: This callback is triggered two seconds after `StartLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-5",
    content: "`OnLastmileProbeResult`: This callback is triggered 30 seconds after `StartLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-5",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis-5",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-6",
    content: "The SDK provides the `startEchoTest` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test-6",
    content: "Before joining a channel, call `startEchoTest`. Specify the `intervalInSeconds` parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."
  }, {
    heading: "equipment-quality-test-6",
    content: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test-6",
    content: "To stop the test, call `stopEchoTest`, and then call `joinChannelByToken` to join a channel."
  }, {
    heading: "equipment-quality-test-6",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "audio-recording-device-test-3",
    content: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
  }, {
    heading: "audio-recording-device-test-3",
    content: "Call `startRecordingDeviceTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-recording-device-test-3",
    content: "After starting the test, speak into the microphone. The SDK reports `uid = 0`, and the volume information of the device in the `onAudioVolumeIndication` callback."
  }, {
    heading: "audio-recording-device-test-3",
    content: "When you are done testing, call `stopRecordingDeviceTest` to stop the test."
  }, {
    heading: "audio-recording-device-test-3",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-recording-device-test-3",
    content: "To implement running a recording device test in your app, refer to the following code:"
  }, {
    heading: "audio-playback-device-test-3",
    content: "To test that the local audio playback device is working properly, refer to the following steps:"
  }, {
    heading: "audio-playback-device-test-3",
    content: "Call `startPlaybackDeviceTest` and set the `audioFileName` parameter to the absolute path of the audio file to be played."
  }, {
    heading: "audio-playback-device-test-3",
    content: "If the user hears the audio, the playback device is working properly. The SDK triggers the `onAudioVolumeIndication` callback to report `uid = 1` and the volume information of the playback device."
  }, {
    heading: "audio-playback-device-test-3",
    content: "When you are done testing, call `stopPlaybackDeviceTest` to stop the test."
  }, {
    heading: "audio-playback-device-test-3",
    content: "To implement running a playback device test in your app, refer to the following code:"
  }, {
    heading: "audio-device-loopback-test-3",
    content: "To test if the local audio device loop is working properly, refer to the following steps:"
  }, {
    heading: "audio-device-loopback-test-3",
    content: "Call `startAudioDeviceLoopbackTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-device-loopback-test-3",
    content: "After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two `onAudioVolumeIndication` callbacks to report the volume information of the audio capture device with `uid= 0`, and the audio playback device with `uid= 1`, respectively."
  }, {
    heading: "audio-device-loopback-test-3",
    content: "When you are done testing, call `stopAudioDeviceLoopbackTest` to stop the recording device test."
  }, {
    heading: "audio-device-loopback-test-3",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "network-quality-analysis-6",
    content: "The SDK provides the `startLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-6",
    content: "Before joining a channel or switching user roles, call `startLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-6",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-6",
    content: "`onLastmileQuality`: This callback is triggered two seconds after `startLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-6",
    content: "`onLastmileProbeResult`: This callback is triggered 30 seconds after `startLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-6",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis-6",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-7",
    content: "You test the recording and playback devices separately."
  }, {
    heading: "recording-equipment-testing",
    content: "Refer to the following steps to test the local microphone and camera:"
  }, {
    heading: "recording-equipment-testing",
    content: "Call `AgoraRTC.getDevices` to get the available devices and their IDs."
  }, {
    heading: "recording-equipment-testing",
    content: "When calling `AgoraRTC.createCameraVideoTrack` and `AgoraRTC.createMicrophoneAudioTrack` to create local audio and video track objects, pass in `cameraId` and `microphoneId` to specify the devices you want to test."
  }, {
    heading: "recording-equipment-testing",
    content: "After creating the local audio or video track object, call `CameraVideoTrack.play` to play the local video track:"
  }, {
    heading: "recording-equipment-testing",
    content: "If you are testing the microphone, call `MicrophoneAudioTrack.getVolumeLevel` to get the volume level. If the volume is greater than `0`, it means that the microphone is working normally."
  }, {
    heading: "recording-equipment-testing",
    content: "When testing the camera, if you see the picture after playing the video track, it means that the camera is working normally."
  }, {
    heading: "recording-equipment-testing",
    content: "To implement recording equipment tests in your app, refer to the following code:"
  }, {
    heading: "recording-equipment-testing",
    content: "Best practice is to draw the volume change and camera screen on the UI so that users can judge if the device is working properly."
  }, {
    heading: "recording-equipment-testing",
    content: "Device IDs are randomly generated, and in some cases the ID of the same device may change. Best practice is to call `AgoraRTC.getDevices` to get the device ID every time you test the device."
  }, {
    heading: "playback-device-testing",
    content: "The Agora SDK for Web does not provide an API for testing audio playback devices. Use the following methods to test the audio playback devices:"
  }, {
    heading: "playback-device-testing",
    content: "Create an audio player on the page using the HTML5 `<audio>` element. Prompt the user to play the audio file and confirm that the sound is audible."
  }, {
    heading: "playback-device-testing",
    content: "After capturing the microphone audio, call `MicrophoneAudioTrack.play` to play the microphone sound and prompt the user to subjectively verify that the playback is audible."
  }, {
    heading: "network-quality-analysis-7",
    content: "Refer to the following steps to perform a network quality test before a call or live broadcast:"
  }, {
    heading: "network-quality-analysis-7",
    content: "Call `createClient` twice, to create two clients:"
  }, {
    heading: "network-quality-analysis-7",
    content: "`uplinkClient`: To test the connection status of the uplink network."
  }, {
    heading: "network-quality-analysis-7",
    content: "`downlinkClient`: To test the connection status of the downlink network."
  }, {
    heading: "network-quality-analysis-7",
    content: "Both clients call `join` to enter a channel for testing."
  }, {
    heading: "network-quality-analysis-7",
    content: "Call `createMicrophoneAndCameraTracks` to create audio and video tracks."
  }, {
    heading: "network-quality-analysis-7",
    content: "Call `publish` on `uplinkClient` to publish audio and video tracks and `subscribe` on `downlinkClient` to subscribe to audio and video tracks."
  }, {
    heading: "network-quality-analysis-7",
    content: 'Listen to the `uplinkClient.on("network-quality")` event to get the uplink network status between the local device and Agora server.'
  }, {
    heading: "network-quality-analysis-7",
    content: 'Listen to `downlinkClient.on("network-quality")` event to get the downlink network status between the local device and the Agora server. The SDK triggers the `client.on("network-quality")` callback every two seconds.'
  }, {
    heading: "network-quality-analysis-7",
    content: "To get specific statistics about the sent or received media tracks, such as send/receive bitrate, end-to-end latency, call `getLocalAudioStats` and `getLocalVideoStats` on `uplinkClient` to get the uplink statistics, and `getRemoteAudioStats` and `getRemoteVideoStats` on `downlinkClient` to get the downlink statistics."
  }, {
    heading: "network-quality-analysis-7",
    content: "The following figure summarizes the calling sequence of network quality tests:"
  }, {
    heading: "network-quality-analysis-7",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-8",
    content: "The SDK provides the `startEchoTest` \\[3/3] method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "equipment-quality-test-8",
    content: "Before joining a channel, call `startEchoTest` \\[3/3] with `EchoTestConfiguration`. Specify the channel name, whether to test audio or video, and the time interval for the echo."
  }, {
    heading: "equipment-quality-test-8",
    content: "After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
  }, {
    heading: "equipment-quality-test-8",
    content: "To stop the test, call `stopEchoTest`, and then call `joinChannel` to join a channel."
  }, {
    heading: "equipment-quality-test-8",
    content: "Using `startEchoTest` \\[3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results."
  }, {
    heading: "equipment-quality-test-8",
    content: "To implement running an echo test in your app, refer to the following code:"
  }, {
    heading: "network-quality-analysis-8",
    content: "RTC SDK provides the `startLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-8",
    content: "Before joining a channel or switching user roles, call `startLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-8",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-8",
    content: "`onLastmileQuality`: This callback is triggered two seconds after `startLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-8",
    content: "`onLastmileProbeResult`: This callback is triggered 30 seconds after `startLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-8",
    content: "Call `stopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "network-quality-analysis-8",
    content: "To implement network quality testing in your app, refer to the following code:"
  }, {
    heading: "equipment-quality-test-9",
    content: "The SDK provides the `startEchoTest` method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"
  }, {
    heading: "start-the-echo-test",
    content: "Create the UMG"
  }, {
    heading: "start-the-echo-test",
    content: "Create a button control named **Btn\\_StartEchoTest** that you click to start the voice call loop test."
  }, {
    heading: "start-the-echo-test",
    content: "Bind UI events"
  }, {
    heading: "start-the-echo-test",
    content: "Create a **Bind Event to On Clicked** node that connects the **Btn\\_StartEchoTest** control and the `OnStartEchoTestClicked` callback. When you press the button to start the voice call test, the `OnStartEchoTestClicked` callback is triggered. This is shown in the following figure:"
  }, {
    heading: "start-the-echo-test",
    content: "Implement the UI event"
  }, {
    heading: "start-the-echo-test",
    content: "Create the `OnStartEchoTestClicked` callback function. When this callback is triggered, the **Start Echo Test** method is called to start the test. When the echo test starts, the user speaks into the microphone. If the recording is played back after the set time interval, it means that the audio device and network connection are working normally. In this example, configure the `Config` parameter of **Start Echo Test** as follows:"
  }, {
    heading: "start-the-echo-test",
    content: "**Enable Audio** is checked by default, which means audio device detection is enabled."
  }, {
    heading: "start-the-echo-test",
    content: "Uncheck **Enable Video** to disable video device testing."
  }, {
    heading: "start-the-echo-test",
    content: "Input **Token** and **Channel Id** (channel name)."
  }, {
    heading: "start-the-echo-test",
    content: "**Interval In Seconds** is set to **2** by default. This is the time interval between when you start the call and when the recording plays back."
  }, {
    heading: "stop-voice-call-detection",
    content: "Create UMG"
  }, {
    heading: "stop-voice-call-detection",
    content: "Create a button control named **Btn\\_StopEchoTest**. You click the button to stop the echo test. As shown in the following figure:"
  }, {
    heading: "stop-voice-call-detection",
    content: "Bind UI events"
  }, {
    heading: "stop-voice-call-detection",
    content: "Create a **Bind Event to On Clicked** node that connects the **Btn\\_StopEchoTest** control and the `OnStopEchoTestClicked` callback. The `OnStopEchoTestClicked` callback is triggered when you press the button to stop the voice call test. This is shown in the following figure:"
  }, {
    heading: "stop-voice-call-detection",
    content: "Implement the UI event"
  }, {
    heading: "stop-voice-call-detection",
    content: "Create `OnStoptEchoTestClicked` callback function. After getting the test result, you press the stop button to trigger this callback and call the **Stop Echo Test** method to stop the test."
  }, {
    heading: "audio-recording-device-detection",
    content: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
  }, {
    heading: "audio-recording-device-detection",
    content: "Call `StartRecordingDeviceTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-recording-device-detection",
    content: "After starting the test, speak into the microphone. The SDK reports `uid = 0`, and the volume information of the device in the `FOnAudioVolumeIndication` callback."
  }, {
    heading: "audio-recording-device-detection",
    content: "When you are done testing, call `StopRecordingDeviceTest` to stop the test."
  }, {
    heading: "audio-recording-device-detection",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `FOnAudioVolumeIndication` callback may not be received."
  }, {
    heading: "audio-playback-device-test-4",
    content: "To test that the local audio playback device is working properly, refer to the following steps:"
  }, {
    heading: "audio-playback-device-test-4",
    content: "Call `StartPlaybackDeviceTest` and set the `testAudioFilePath` parameter to the absolute path of the audio file to be played."
  }, {
    heading: "audio-playback-device-test-4",
    content: "If the user hears the audio, the playback device is working properly. The SDK triggers the `FOnAudioVolumeIndication` callback to report `uid = 1` and the volume information of the playback device."
  }, {
    heading: "audio-playback-device-test-4",
    content: "When you are done testing, call `StopPlaybackDeviceTest` to stop the test."
  }, {
    heading: "audio-device-loopback-test-4",
    content: "To test if the local audio device loop is working properly, refer to the following steps:"
  }, {
    heading: "audio-device-loopback-test-4",
    content: "Call `StartAudioDeviceLoopbackTest` and set the `indicationInterval` parameter to the time interval after which the callback is triggered."
  }, {
    heading: "audio-device-loopback-test-4",
    content: "After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two `FOnAudioVolumeIndication` callbacks to report the volume information of the audio capture device with `uid= 0`, and the audio playback device with `uid= 1`, respectively."
  }, {
    heading: "audio-device-loopback-test-4",
    content: "When you are done testing, call `StopAudioDeviceLoopbackTest` to stop the recording device test."
  }, {
    heading: "audio-device-loopback-test-4",
    content: "Best practice is to set the `indicationInterval` parameter to more than `200` milliseconds and not less than `10` milliseconds, otherwise the `onAudioVolumeIndication` callback may not be received."
  }, {
    heading: "network-quality-analysis-9",
    content: "The SDK provides the `StartLastmileProbeTest` method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"
  }, {
    heading: "network-quality-analysis-9",
    content: "Before joining a channel or switching user roles, call `StartLastmileProbeTest` to start the network test. Set the probe configuration and the expected maximum bitrate in `LastmileProbeConfig`."
  }, {
    heading: "network-quality-analysis-9",
    content: "After you start the test, the SDK triggers the following callbacks:"
  }, {
    heading: "network-quality-analysis-9",
    content: "`FOnLastmileQuality`: This callback is triggered two seconds after `StartLastmileProbeTest` is called. It provides feedback on the upstream and downstream network quality through a subjective `quality` score."
  }, {
    heading: "network-quality-analysis-9",
    content: "`FOnLastmileProbeResult`: This callback is triggered 30 seconds after `StartLastmileProbeTest` is called. It returns objective real-time network statistics, including `packetLossRate`, network `jitter`, and `availableBandwidth`."
  }, {
    heading: "network-quality-analysis-9",
    content: "Call `StopLastmileProbeTest` to stop last-mile network testing."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "If you encounter problems while running pre-call tests, first ensure that you have implemented the API calls properly. To troubleshoot device and network issues, refer to the following table:"
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "Problem"
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "Solution"
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "Can't hear sound when testing audio devices."
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "- Check that the recording device and the playback device are working properly, and are not occupied by other programs."
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "Cannot see the screen when testing video devices."
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "- Check that the video device is working properly and not occupied by other programs."
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "Poor uplink network quality detected (packet loss > 5%; network jitter > 100ms)"
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "- Check that the local network is working properly."
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: "Poor downlink network quality detected (packet loss > 5%; network jitter > 100ms)"
  }, {
    heading: "troubleshooting-device-and-network-issues",
    content: `* Check that the local network is working properly.
* Ensure that the total bandwidth of the local subscription does not exceed the available downstream bandwidth by:
  * Reducing the number of subscribed audio and video streams on the receiving end or reducing the bitrate of published audio and video streams on the sending end.
  * Enabling dual-stream mode on the sending side and requesting to receive small streams on the receiving side to reduce bandwidth consumption.
  * Enabling the video stream fallback function or the multiple streams by priority fallback function at the receiving end.`
  }, {
    heading: "sample-project",
    content: "Agora provides an open-source PreCallTest sample project for your reference. Download and explore this project for a more detailed example."
  }, {
    heading: "api-reference",
    content: "`startEchoTest` \\[3/3]"
  }, {
    heading: "api-reference",
    content: "`stopEchoTest`"
  }, {
    heading: "api-reference",
    content: "`startLastmileProbeTest`"
  }, {
    heading: "api-reference",
    content: "`stopLastmileProbeTest`"
  }, {
    heading: "api-reference",
    content: "`onLastmileQuality`"
  }, {
    heading: "api-reference",
    content: "`onLastmileProbeResult`"
  }, {
    heading: "api-reference-1",
    content: "`startLastmileProbeTest`"
  }, {
    heading: "api-reference-1",
    content: "`stopLastmileProbeTest`"
  }, {
    heading: "api-reference-1",
    content: "`onLastmileQuality`"
  }, {
    heading: "api-reference-1",
    content: "`onLastmileProbeResult`"
  }, {
    heading: "api-reference-1",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-2",
    content: "`startRecordingDeviceTest`"
  }, {
    heading: "api-reference-2",
    content: "`stopRecordingDeviceTest`"
  }, {
    heading: "api-reference-2",
    content: "`startPlaybackDeviceTest`"
  }, {
    heading: "api-reference-2",
    content: "`stopPlaybackDeviceTest`"
  }, {
    heading: "api-reference-2",
    content: "`startAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-2",
    content: "`stopAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-2",
    content: "`startEchoTest`"
  }, {
    heading: "api-reference-2",
    content: "`stopEchoTest`"
  }, {
    heading: "api-reference-2",
    content: "`startLastmileProbeTest`"
  }, {
    heading: "api-reference-2",
    content: "`stopLastmileProbeTest`"
  }, {
    heading: "api-reference-2",
    content: "`onLastmileQuality`"
  }, {
    heading: "api-reference-2",
    content: "`onLastmileProbeResult`"
  }, {
    heading: "sample-project-1",
    content: "Agora provides an open-source PreCallTest sample project for your reference. Download and explore this project for a more detailed example."
  }, {
    heading: "api-reference-3",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "api-reference-3",
    content: "`stopEchoTest()`"
  }, {
    heading: "api-reference-3",
    content: "`startLastmileProbeTest(_:)`"
  }, {
    heading: "api-reference-3",
    content: "`stopLastmileProbeTest()`"
  }, {
    heading: "api-reference-3",
    content: "`rtcEngine(_:lastmileQuality:)`"
  }, {
    heading: "api-reference-3",
    content: "`rtcEngine(_:lastmileProbeTest:)`"
  }, {
    heading: "sample-project-2",
    content: "Agora provides an open-source PreCallTest sample project for your reference. Download and explore this project for a more detailed example."
  }, {
    heading: "api-reference-4",
    content: "`startEchoTest(withConfig:)`"
  }, {
    heading: "api-reference-4",
    content: "`stopEchoTest()`"
  }, {
    heading: "api-reference-4",
    content: "`startLastmileProbeTest(_:)`"
  }, {
    heading: "api-reference-4",
    content: "`stopLastmileProbeTest()`"
  }, {
    heading: "api-reference-4",
    content: "`rtcEngine(_:lastmileQuality:)`"
  }, {
    heading: "api-reference-4",
    content: "`rtcEngine(_:lastmileProbeTest:)`"
  }, {
    heading: "api-reference-4",
    content: "This feature guide is not available yet for JavaScript."
  }, {
    heading: "sample-projects",
    content: "Agora provides an open-source Web JoinChannelAudio sample project for your reference. Download and explore this project for a more detailed example."
  }, {
    heading: "sample-projects",
    content: "During the process of adjusting call volume, refer to the AudioMixing project to adjust the playback volume of a mix or sound file."
  }, {
    heading: "api-reference-5",
    content: "`startEchoTest`"
  }, {
    heading: "api-reference-5",
    content: "`stopEchoTest`"
  }, {
    heading: "api-reference-5",
    content: "`startLastmileProbeTest`"
  }, {
    heading: "api-reference-5",
    content: "`stopLastmileProbeTest`"
  }, {
    heading: "api-reference-5",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-5",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-5",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-5",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-5",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-6",
    content: "`StartRecordingDeviceTest`"
  }, {
    heading: "api-reference-6",
    content: "`StopRecordingDeviceTest`"
  }, {
    heading: "api-reference-6",
    content: "`StartPlaybackDeviceTest`"
  }, {
    heading: "api-reference-6",
    content: "`StopPlaybackDeviceTest`"
  }, {
    heading: "api-reference-6",
    content: "`StartAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-6",
    content: "`StopAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-6",
    content: "`StartEchoTest`"
  }, {
    heading: "api-reference-6",
    content: "`StopEchoTest`"
  }, {
    heading: "api-reference-6",
    content: "`StartLastmileProbeTest`"
  }, {
    heading: "api-reference-6",
    content: "`StopLastmileProbeTest`"
  }, {
    heading: "api-reference-6",
    content: "`OnlastmileQuality`"
  }, {
    heading: "api-reference-6",
    content: "`OnlastmileProbeResult`"
  }, {
    heading: "sample-project-3",
    content: "Agora provides an open-source Web sample project for your reference. Download and explore this project for a more detailed example."
  }, {
    heading: "api-reference-7",
    content: "`startRecordingDeviceTest`"
  }, {
    heading: "api-reference-7",
    content: "`stopRecordingDeviceTest`"
  }, {
    heading: "api-reference-7",
    content: "`startPlaybackDeviceTest`"
  }, {
    heading: "api-reference-7",
    content: "`stopPlaybackDeviceTest`"
  }, {
    heading: "api-reference-7",
    content: "`startAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-7",
    content: "`stopAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-7",
    content: "`startEchoTest`"
  }, {
    heading: "api-reference-7",
    content: "`stopEchoTest`"
  }, {
    heading: "api-reference-7",
    content: "`startLastmileProbeTest`"
  }, {
    heading: "api-reference-7",
    content: "`stopLastmileProbeTest`"
  }, {
    heading: "api-reference-7",
    content: "`onlastmileQuality`"
  }, {
    heading: "api-reference-7",
    content: "`onlastmileProbeResult`"
  }, {
    heading: "sample-project-4",
    content: "Agora provides the following open-source projects for your reference:"
  }, {
    heading: "sample-project-4",
    content: "JoinChannelAudio"
  }, {
    heading: "sample-project-4",
    content: "Download or view the code for more detailed examples."
  }, {
    heading: "api-reference-8",
    content: "Equipment testing :"
  }, {
    heading: "api-reference-8",
    content: "getDevices"
  }, {
    heading: "api-reference-8",
    content: "getCameras"
  }, {
    heading: "api-reference-8",
    content: "getMicrophones"
  }, {
    heading: "api-reference-8",
    content: "createMicrophoneAudioTrack"
  }, {
    heading: "api-reference-8",
    content: "createCameraVideoTrack"
  }, {
    heading: "api-reference-8",
    content: "Network analysis:"
  }, {
    heading: "api-reference-8",
    content: "network-quality"
  }, {
    heading: "api-reference-8",
    content: "getLocalAudioStats"
  }, {
    heading: "api-reference-8",
    content: "getLocalVideoStats"
  }, {
    heading: "api-reference-8",
    content: "getRemoteAudioStats"
  }, {
    heading: "api-reference-8",
    content: "getRemoteVideoStats"
  }, {
    heading: "sample-project-5",
    content: "Agora provides an open-source PreCallTest sample project for your reference. Download and explore this project for a more detailed example."
  }, {
    heading: "api-reference-9",
    content: "`startEchoTest` \\[3/3]"
  }, {
    heading: "api-reference-9",
    content: "`stopEchoTest`"
  }, {
    heading: "api-reference-9",
    content: "`startLastmileProbeTest`"
  }, {
    heading: "api-reference-9",
    content: "`stopLastmileProbeTest`"
  }, {
    heading: "api-reference-9",
    content: "`onLastmileQuality`"
  }, {
    heading: "api-reference-9",
    content: "`onLastmileProbeResult`"
  }, {
    heading: "sample-project-6",
    content: "Agora provides an open-source JoinChannelAudio sample project for your reference. Download and explore the project for a more detailed example."
  }, {
    heading: "api-reference-10",
    content: "`StartEchoTest`"
  }, {
    heading: "api-reference-10",
    content: "`StopEchoTest`"
  }, {
    heading: "api-reference-10",
    content: "`StartEchoTest`"
  }, {
    heading: "api-reference-10",
    content: "`StartRecordingDeviceTest`"
  }, {
    heading: "api-reference-10",
    content: "`StopRecordingDeviceTest`"
  }, {
    heading: "api-reference-10",
    content: "`StartPlaybackDeviceTest`"
  }, {
    heading: "api-reference-10",
    content: "`StopPlaybackDeviceTest`"
  }, {
    heading: "api-reference-10",
    content: "`StartAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-10",
    content: "`StopAudioDeviceLoopbackTest`"
  }, {
    heading: "api-reference-10",
    content: "`StartLastmileProbeTest`"
  }, {
    heading: "api-reference-10",
    content: "`StopLastmileProbeTest`"
  }, {
    heading: "api-reference-10",
    content: "`FOnLastmileQuality`"
  }, {
    heading: "api-reference-10",
    content: "`FOnLastmileProbeResult`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-pre-call-testing",
    content: "Implement pre-call testing"
  }, {
    id: "equipment-quality-test",
    content: "Equipment quality test"
  }, {
    id: "network-quality-analysis",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-1",
    content: "Equipment quality test"
  }, {
    id: "audio-recording-device-test",
    content: "Audio recording device test"
  }, {
    id: "audio-playback-device-test",
    content: "Audio playback device test"
  }, {
    id: "audio-device-loopback-test",
    content: "Audio device loopback test"
  }, {
    id: "network-quality-analysis-1",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-2",
    content: "Equipment quality test"
  }, {
    id: "audio-recording-device-test-1",
    content: "Audio recording device test"
  }, {
    id: "audio-playback-device-test-1",
    content: "Audio playback device test"
  }, {
    id: "audio-device-loopback-test-1",
    content: "Audio device loopback test"
  }, {
    id: "network-quality-analysis-2",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-3",
    content: "Equipment quality test"
  }, {
    id: "network-quality-analysis-3",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-4",
    content: "Equipment quality test"
  }, {
    id: "network-quality-analysis-4",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-5",
    content: "Equipment quality test"
  }, {
    id: "audio-recording-device-test-2",
    content: "Audio recording device test"
  }, {
    id: "audio-playback-device-test-2",
    content: "Audio playback device test"
  }, {
    id: "audio-equipment-loop-detection",
    content: "Audio equipment loop detection"
  }, {
    id: "audio-device-loopback-test-2",
    content: "Audio device loopback test"
  }, {
    id: "network-quality-analysis-5",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-6",
    content: "Equipment quality test"
  }, {
    id: "audio-recording-device-test-3",
    content: "Audio recording device test"
  }, {
    id: "audio-playback-device-test-3",
    content: "Audio playback device test"
  }, {
    id: "audio-device-loopback-test-3",
    content: "Audio device loopback test"
  }, {
    id: "network-quality-analysis-6",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-7",
    content: "Equipment quality test"
  }, {
    id: "recording-equipment-testing",
    content: "Recording equipment testing"
  }, {
    id: "playback-device-testing",
    content: "Playback device testing"
  }, {
    id: "network-quality-analysis-7",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-8",
    content: "Equipment quality test"
  }, {
    id: "network-quality-analysis-8",
    content: "Network quality analysis"
  }, {
    id: "equipment-quality-test-9",
    content: "Equipment quality test"
  }, {
    id: "start-the-echo-test",
    content: "Start the echo test"
  }, {
    id: "stop-voice-call-detection",
    content: "Stop voice call detection"
  }, {
    id: "audio-recording-device-detection",
    content: "Audio recording device detection"
  }, {
    id: "audio-playback-device-test-4",
    content: "Audio playback device test"
  }, {
    id: "audio-device-loopback-test-4",
    content: "Audio device loopback test"
  }, {
    id: "network-quality-analysis-9",
    content: "Network quality analysis"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "troubleshooting-device-and-network-issues",
    content: "Troubleshooting device and network issues"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "sample-project-1",
    content: "Sample project"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "sample-project-2",
    content: "Sample project"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "sample-projects",
    content: "Sample projects"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "sample-project-3",
    content: "Sample project"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "sample-project-4",
    content: "Sample project"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }, {
    id: "sample-project-5",
    content: "Sample project"
  }, {
    id: "api-reference-9",
    content: "API reference"
  }, {
    id: "sample-project-6",
    content: "Sample project"
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
  url: "#implement-pre-call-testing",
  title: _jsx(_Fragment, {
    children: "Implement pre-call testing"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-1",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 4,
  url: "#audio-recording-device-test",
  title: _jsx(_Fragment, {
    children: "Audio recording device test"
  })
}, {
  depth: 4,
  url: "#audio-playback-device-test",
  title: _jsx(_Fragment, {
    children: "Audio playback device test"
  })
}, {
  depth: 4,
  url: "#audio-device-loopback-test",
  title: _jsx(_Fragment, {
    children: "Audio device loopback test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-1",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-2",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 4,
  url: "#audio-recording-device-test-1",
  title: _jsx(_Fragment, {
    children: "Audio recording device test"
  })
}, {
  depth: 4,
  url: "#audio-playback-device-test-1",
  title: _jsx(_Fragment, {
    children: "Audio playback device test"
  })
}, {
  depth: 4,
  url: "#audio-device-loopback-test-1",
  title: _jsx(_Fragment, {
    children: "Audio device loopback test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-2",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-3",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-3",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-4",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-4",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-5",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 4,
  url: "#audio-recording-device-test-2",
  title: _jsx(_Fragment, {
    children: "Audio recording device test"
  })
}, {
  depth: 4,
  url: "#audio-playback-device-test-2",
  title: _jsx(_Fragment, {
    children: "Audio playback device test"
  })
}, {
  depth: 4,
  url: "#audio-equipment-loop-detection",
  title: _jsx(_Fragment, {
    children: "Audio equipment loop detection"
  })
}, {
  depth: 4,
  url: "#audio-device-loopback-test-2",
  title: _jsx(_Fragment, {
    children: "Audio device loopback test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-5",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-6",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 4,
  url: "#audio-recording-device-test-3",
  title: _jsx(_Fragment, {
    children: "Audio recording device test"
  })
}, {
  depth: 4,
  url: "#audio-playback-device-test-3",
  title: _jsx(_Fragment, {
    children: "Audio playback device test"
  })
}, {
  depth: 4,
  url: "#audio-device-loopback-test-3",
  title: _jsx(_Fragment, {
    children: "Audio device loopback test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-6",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-7",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 4,
  url: "#recording-equipment-testing",
  title: _jsx(_Fragment, {
    children: "Recording equipment testing"
  })
}, {
  depth: 4,
  url: "#playback-device-testing",
  title: _jsx(_Fragment, {
    children: "Playback device testing"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-7",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-8",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-8",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 3,
  url: "#equipment-quality-test-9",
  title: _jsx(_Fragment, {
    children: "Equipment quality test"
  })
}, {
  depth: 4,
  url: "#start-the-echo-test",
  title: _jsx(_Fragment, {
    children: "Start the echo test"
  })
}, {
  depth: 5,
  url: "#stop-voice-call-detection",
  title: _jsx(_Fragment, {
    children: "Stop voice call detection"
  })
}, {
  depth: 4,
  url: "#audio-recording-device-detection",
  title: _jsx(_Fragment, {
    children: "Audio recording device detection"
  })
}, {
  depth: 4,
  url: "#audio-playback-device-test-4",
  title: _jsx(_Fragment, {
    children: "Audio playback device test"
  })
}, {
  depth: 4,
  url: "#audio-device-loopback-test-4",
  title: _jsx(_Fragment, {
    children: "Audio device loopback test"
  })
}, {
  depth: 3,
  url: "#network-quality-analysis-9",
  title: _jsx(_Fragment, {
    children: "Network quality analysis"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#troubleshooting-device-and-network-issues",
  title: _jsx(_Fragment, {
    children: "Troubleshooting device and network issues"
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
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-project-1",
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
  depth: 3,
  url: "#sample-project-2",
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
  depth: 3,
  url: "#sample-projects",
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
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
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
}, {
  depth: 3,
  url: "#sample-project-4",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-8",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-project-5",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#api-reference-9",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-project-6",
  title: _jsx(_Fragment, {
    children: "Sample project"
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
    h4: "h4",
    h5: "h5",
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
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle, Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In video calling implementations that demand high communication quality, pre-call detection helps identify and troubleshoot issues beforehand, ensuring seamless real-time interaction."
    }), `
`, _jsx(_components.p, {
      children: "This page shows you how to use RTC SDK to run pre-call tests to identify and troubleshoot communication quality issues in your app."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Pre-call testing typically covers two aspects:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Equipment quality test"
          })
        }), `
`, _jsx(_components.p, {
          children: "To test whether the local microphone, speaker, and camera are working properly, you run an echo test. The basic process of conducting an echo test is as follows:"
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Network quality analysis"
          })
        }), `
`, _jsx(_components.p, {
          children: "The quality of the last mile network affects the smoothness and clarity of the audio and video that the user sends and receives. Last mile refers to the last leg of communication network between the edge server of the Agora SDRTN® and the end-user devices. Network quality analysis enables you to get feedback on the available bandwidth, packet loss rate, network jitter, and round-trip delay of the upstream and downstream last-mile networks. The following figure shows the basic process of running a last-mile probe test."
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(Accordions, {
      children: [_jsx(Accordion, {
        title: "Pre-call echo test",
        children: _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/pre-call-echo-test.svg",
            alt: "Echo Test"
          })
        })
      }), _jsx(Accordion, {
        title: "Pre-call last mile test",
        children: _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/video-sdk/pre-call-last-mile-test.svg",
            alt: "Last Mile Test"
          })
        })
      })]
    }), `
`, _jsx(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["web"]',
      showTabs: "false",
      children: _jsxs(_PlatformPanel, {
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Equipment quality test"
              })
            }), `
`, _jsx(_components.p, {
              children: "Device quality testing involves testing whether the local microphone, speaker, and camera are working properly."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Network quality analysis"
              })
            }), `
`, _jsx(_components.p, {
              children: "The quality of the last mile network affects the smoothness and clarity of the audio and video that the user sends and receives. Last mile refers to the last leg of communication network between the edge server of the Agora SDRTN® and the end-user devices. Network quality analysis enables you to get feedback on the available bandwidth, packet loss rate, network jitter, and round-trip delay of the upstream and downstream last-mile networks. It enables you to examine if current network conditions are good enough to meet the requirements of the currently selected audio bitrate or the target video bitrate."
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "info",
      children: [_jsx(CalloutTitle, {
        children: "information"
      }), _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Best practice is to run the device test first and then perform a network test."
        })
      })]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsxs(_components.p, {
      children: ["Ensure that you have implemented the ", _jsx(_components.a, {
        href: "/en/realtime-media/rtc/get-started-sdk",
        children: "SDK quickstart"
      }), " project and that your app has obtained permissions to use the relevant devices."]
    }), `
`, _jsx(_components.h2, {
      id: "implement-pre-call-testing",
      children: "Implement pre-call testing"
    }), `
`, _jsx(_components.p, {
      children: "This section shows you how to implement pre-call testing in your project."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","electron","flutter","ios","react-native","unity","unreal","web","windows","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h3, {
          id: "equipment-quality-test",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest"
          }), " [3/3] method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "startEchoTest"
              }), " [3/3] with ", _jsx(_components.code, {
                children: "EchoTestConfiguration"
              }), ". Specify the channel name, whether to test audio or video, and the time interval for the echo."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "stopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " to join a channel."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "warning",
              children: [_jsx(CalloutTitle, {
                children: "Note"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Using ", _jsx(_components.code, {
                    children: "startEchoTest"
                  }), " [3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
        }), _jsxs(Tabs, {
          defaultValue: "java",
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(TabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(TabsContent, {
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
                      children: "// Test audio device"
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
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " testAudioDevice"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Create an EchoTestConfiguration instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EchoTestConfiguration config "
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
                      children: " EchoTestConfiguration"
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
                      children: "    // Disable video device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.enableVideo "
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
                      children: "    // Enable audio device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.enableAudio "
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
                      children: "    // Set the interval for returning test results"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.intervalInSeconds "
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
                      children: " MAX_COUNT_DOWN;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Identify each test by channel name"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.channelId "
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
                      children: ' "AudioEchoTest"'
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
                      children: "new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " Random"
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
                      children: "nextInt"
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
                      children: "1000"
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
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 10000"
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
                      children: "    // Start the test"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startEchoTest"
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
                      children: "// Test video device"
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
                      children: " void"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " testVideoDevice"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Create an EchoTestConfiguration instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    EchoTestConfiguration config "
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
                      children: " EchoTestConfiguration"
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
                      children: "    // Enable video device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.enableVideo "
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
                      children: "    // Specify the view for rendering the local user's video"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.view "
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
                      children: " requireView"
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
                      children: "findViewById"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(R.id.surfaceView);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Disable audio device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.enableAudio "
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
                      children: "    // Set the expected delay for video rendering"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.intervalInSeconds "
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
                      children: " MAX_COUNT_DOWN;"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Identify each test by channel name"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    config.channelId "
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
                      children: ' "VideoEchoTest"'
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
                      children: "new"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " Random"
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
                      children: "nextInt"
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
                      children: "1000"
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
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 10000"
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
                      children: "    // Start the test"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startEchoTest"
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
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "}"
                    })
                  })]
                })
              })
            })
          }), _jsx(TabsContent, {
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
                      children: "// Test audio device"
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
                      children: " fun"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " testAudioDevice"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Create an EchoTestConfiguration instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    val"
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
                      children: " EchoTestConfiguration"
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Disable video device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        enableVideo "
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
                      children: "        // Enable audio device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        enableAudio "
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
                      children: "        // Set the interval for returning test results"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        intervalInSeconds "
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
                      children: " MAX_COUNT_DOWN"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Identify each test by channel name"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        channelId "
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
                      children: ' "AudioEchoTest"'
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Random"
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
                      children: "nextInt"
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
                      children: "1000"
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
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 10000"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Start the test"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startEchoTest"
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
                      children: "// Test video device"
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
                      children: " fun"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " testVideoDevice"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() {"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Create an EchoTestConfiguration instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "    val"
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
                      children: " EchoTestConfiguration"
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Enable video device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        enableVideo "
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
                      children: "        // Specify the view for rendering the local user's video"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        view "
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
                      children: " requireView"
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
                      children: "findViewById"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(R.id.surfaceView)"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Disable audio device testing"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        enableAudio "
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
                      children: "        // Set the expected delay for video rendering"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        intervalInSeconds "
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
                      children: " MAX_COUNT_DOWN"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "        // Identify each test by channel name"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "        channelId "
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
                      children: ' "VideoEchoTest"'
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Random"
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
                      children: "nextInt"
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
                      children: "1000"
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
                      children: "+"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 10000"
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
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Start the test"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    engine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "startEchoTest"
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
          id: "network-quality-analysis",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "startLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
        }), _jsxs(Tabs, {
          defaultValue: "java",
          children: [_jsxs(TabsList, {
            children: [_jsx(TabsTrigger, {
              value: "java",
              children: "Java"
            }), _jsx(TabsTrigger, {
              value: "kotlin",
              children: "Kotlin"
            })]
          }), _jsx(TabsContent, {
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
                      children: "// Configure a LastmileProbeConfig instance"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "LastmileProbeConfig config "
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
                      children: " LastmileProbeConfig"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(){};"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Probe uplink network quality"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.probeUplink "
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
                      children: "// Probe downlink network quality"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.probeDownlink "
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
                      children: "// User's expected maximum sending bitrate (bps). Range: [100000,5000000]"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.expectedUplinkBitrate "
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
                      children: " 100000"
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
                      children: "// User's expected maximum receiving bitrate (bps). Range: [100000,5000000]"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "config.expectedDownlinkBitrate "
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
                      children: " 100000"
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
                      children: "// Start the network quality probe"
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
                      children: "startLastmileProbeTest"
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
                      children: "// Register callbacks"
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
                      children: " onLastmileQuality"
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
                      children: " quality) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    statisticsInfo."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLastMileQuality"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(quality);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    updateLastMileResult"
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
                      children: "}"
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
                      children: " onLastmileProbeResult"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(LastmileProbeResult lastmileProbeResult) {"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    statisticsInfo."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "setLastMileProbeResult"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(lastmileProbeResult);"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    updateLastMileResult"
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
                      children: "// Stop the network quality probe"
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
                      children: "stopLastmileProbeTest"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "();"
                    })]
                  })]
                })
              })
            })
          }), _jsx(TabsContent, {
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
                      children: "// Configure a LastmileProbeConfig instance"
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
                      children: " LastmileProbeConfig"
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Probe uplink network quality"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    probeUplink "
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
                      children: "    // Probe downlink network quality"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    probeDownlink "
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
                      children: "    // User's expected maximum sending bitrate (bps). Range: [100000, 5000000]"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    expectedUplinkBitrate "
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
                      children: " 500000"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: " // Adjust as needed"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // User's expected maximum receiving bitrate (bps). Range: [100000, 5000000]"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    expectedDownlinkBitrate "
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
                      children: " 500000"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: " // Adjust as needed"
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
                      children: "// Start the network quality probe"
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
                      children: "startLastmileProbeTest"
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
                      children: "// Register callbacks"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: "fun"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " onLastmileQuality"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(quality: "
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // Ensure statisticsInfo is initialized and updated"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    statisticsInfo.lastMileQuality "
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
                      children: " quality"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    updateLastMileResult"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Implement this function to handle the quality update"
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
                      children: "fun"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " onLastmileProbeResult"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(lastmileProbeResult: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "LastmileProbeResult"
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
                      children: "    // Ensure statisticsInfo is initialized and updated"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "    statisticsInfo.lastMileProbeResult "
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
                      children: " lastmileProbeResult"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    updateLastMileResult"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "() "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Implement this function to handle the probe result update"
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
                      children: "// Stop the network quality probe when done"
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
                      children: "stopLastmileProbeTest"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "()"
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
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "electron"
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-1",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest"
          }), " method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "startEchoTest"
              }), ". Specify the ", _jsx(_components.code, {
                children: "intervalInSeconds"
              }), " parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "stopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " to join a channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startEchoTest"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopEchoTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-recording-device-test",
          children: "Audio recording device test"
        }), _jsx(_components.p, {
          children: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startRecordingDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The SDK reports ", _jsx(_components.code, {
                children: "uid = 0"
              }), ", and the volume information of the device in the ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopRecordingDeviceTest"
              }), " to stop the test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running a recording device test in your app, refer to the following code:"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "setRecordingDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(deviceId);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: ".engine."
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
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onAudioVolumeIndication"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    connection"
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
                  children: " RtcConnection"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    speakers"
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
                  children: " AudioVolumeInfo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    speakerNumber"
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    totalVolume"
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ){},"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "startRecordingDeviceTest"
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
                  children: "1000"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "stopRecordingDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-playback-device-test",
          children: "Audio playback device test"
        }), _jsx(_components.p, {
          children: "To test that the local audio playback device is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startPlaybackDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "audioFileName"
              }), " parameter to the absolute path of the audio file to be played."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the user hears the audio, the playback device is working properly. The SDK triggers the ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callback to report ", _jsx(_components.code, {
                children: "uid = 1"
              }), " and the volume information of the playback device."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopPlaybackDeviceTest"
              }), " to stop the test."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running a playback device test in your app, refer to the following code:"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "setPlaybackDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(deviceId);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "startPlaybackDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(filePath);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "stopPlaybackDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-device-loopback-test",
          children: "Audio device loopback test"
        }), _jsx(_components.p, {
          children: "To test if the local audio device loop is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startAudioDeviceLoopbackTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callbacks to report the volume information of the audio capture device with ", _jsx(_components.code, {
                children: "uid= 0"
              }), ", and the audio playback device with ", _jsx(_components.code, {
                children: "uid= 1"
              }), ", respectively."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopAudioDeviceLoopbackTest"
              }), " to stop the recording device test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement an audio loopback device test in your app, refer to the following code:"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
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
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onAudioVolumeIndication"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    connection"
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
                  children: " RtcConnection"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    speakers"
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
                  children: " AudioVolumeInfo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[],"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    speakerNumber"
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
                  children: ","
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "    totalVolume"
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ){},"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}); "
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
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "startAudioDeviceLoopbackTest"
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
                  children: "1000"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getAudioDeviceManager"
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
                  children: "stopAudioDeviceLoopbackTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-1",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "startLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
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
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onLastmileQuality"
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
                  children: "quality"
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
                  children: " QualityType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onLastmileProbeResult"
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
                  children: "result"
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
                  children: " LastmileProbeResult"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {},"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startLastmileProbeTest"
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
                  children: "  probeUplink: "
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
                  children: "  probeDownlink: "
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
                  children: "  expectedUplinkBitrate: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "100000"
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
                  children: "  expectedDownlinkBitrate: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "100000"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopLastmileProbeTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
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
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-2",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest"
          }), " method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "startEchoTest"
              }), ". Specify the ", _jsx(_components.code, {
                children: "intervalInSeconds"
              }), " parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "stopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " to join a channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
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
                  children: "// Start the echo test"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Only a host can call startEchoTest"
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
                  children: " _engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startEchoTest"
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
                  children: "// Wait and check if you can hear voice playback"
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
                  children: "// Stop the echo test"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Call stopEchoTest to end the echo test. Until you call stopEchoTest, you cannot start another test or join a channel."
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
                  children: " _engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopEchoTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-recording-device-test-1",
          children: "Audio recording device test"
        }), _jsx(_components.p, {
          children: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startRecordingDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The SDK reports ", _jsx(_components.code, {
                children: "uid = 0"
              }), ", and the volume information of the device in the ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopRecordingDeviceTest"
              }), " to stop the test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running a recording device test in your app, refer to the following code:"
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
                  children: "// Select an audio capture device"
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
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setRecordingDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(deviceId);"
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
                  children: "// Implement the audio volume indication callback"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "onAudioVolumeIndication"
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
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "RtcConnection"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " connection,"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    List"
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
                  children: "AudioVolumeInfo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "> speakers, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " speakerNumber, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " totalVolume) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    logSink."
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
                  children: "'[onAudioVolumeIndication] speakers: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "${"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "speakers"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "toString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "()}"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", speakerNumber: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "$"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "speakerNumber"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ", totalVolume: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "$"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "totalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'"
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
                  children: "},"
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
                  children: "// Start audio capture device test"
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
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startRecordingDeviceTest"
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
                  children: "1000"
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
                  children: "// Stop audio capture device test"
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
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopRecordingDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-playback-device-test-1",
          children: "Audio playback device test"
        }), _jsx(_components.p, {
          children: "To test that the local audio playback device is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startPlaybackDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "audioFileName"
              }), " parameter to the absolute path of the audio file to be played."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the user hears the audio, the playback device is working properly. The SDK triggers the ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callback to report ", _jsx(_components.code, {
                children: "uid = 1"
              }), " and the volume information of the playback device."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopPlaybackDeviceTest"
              }), " to stop the test."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running a playback device test in your app, refer to the following code:"
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
                  children: "// Select an audio playback device"
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
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setPlaybackDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(_selectedPlaybackDeviceId);"
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
                  children: "// Specify the absolute path of the audio file to start the playback device test"
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
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startPlaybackDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(filePath);"
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
                  children: "// Stopping the audio playback device test"
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
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopPlaybackDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-device-loopback-test-1",
          children: "Audio device loopback test"
        }), _jsx(_components.p, {
          children: "To test if the local audio device loop is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startAudioDeviceLoopbackTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callbacks to report the volume information of the audio capture device with ", _jsx(_components.code, {
                children: "uid= 0"
              }), ", and the audio playback device with ", _jsx(_components.code, {
                children: "uid= 1"
              }), ", respectively."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopAudioDeviceLoopbackTest"
              }), " to stop the recording device test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement an audio loopback device test in your app, refer to the following code:"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startAudioDeviceLoopbackTest"
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
                  children: "1000"
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
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " _audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopAudioDeviceLoopbackTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-2",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "startLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                  children: "// Configure a LastmileProbeConfig instance"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "LastmileProbeConfig"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " LastmileProbeConfig"
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
                  children: "    probeUplink"
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
                  children: " true"
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
                  children: "// Probe uplink network quality"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    probeDownlink"
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
                  children: " true"
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
                  children: "// Probe downlink network quality"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    expectedUplinkBitrate"
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
                  children: " 100000"
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
                  children: "// Desired maximum transmit bitrate in bps, in the range [100000,5000000]."
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    expectedDownlinkBitrate"
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
                  children: " 100000"
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
                  children: "// Desired maximum receive bitrate in bps, in the range [100000,5000000]."
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
                  children: "// Start the probe test"
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
                  children: " _engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startLastmileProbeTest"
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
                  children: "// Stop the probe test"
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
                  children: " _engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopLastmileProbeTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "ios"
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-3",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest(withConfig:)"
          }), " method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "startEchoTest(withConfig:)"
              }), " with ", _jsx(_components.code, {
                children: "AgoraEchoTestConfiguration"
              }), ". Specify the channel name, whether to test audio or video, and the time interval for the echo."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "stopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " to join a channel."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "warning",
              children: [_jsx(CalloutTitle, {
                children: "Note"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Using ", _jsx(_components.code, {
                    children: "startEchoTest(withConfig:)"
                  }), " [3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
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
                  children: "// Test audio device"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "@IBAction"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " doAudioTest"
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
                  children: "sender"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": UIButton) {"
                })]
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
                  children: " testConfig "
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
                  children: " AgoraEchoTestConfiguration"
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
                  children: "  // Set the interval for returning test results"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.intervalInSeconds "
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
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Enable audio device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.enableAudio "
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
                  children: "  // Disable video device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.enableVideo "
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
                  children: "  // Identify each test by channel name"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.channelId "
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
                  children: ' "AudioEchoTest"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " +"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "random"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "in"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "..."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "))"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Start the audio device test"
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
                  children: " agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "startEchoTest"
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
                  children: "withConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": testConfig)"
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
                  children: "// Test video device"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "@IBAction"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " doVideoTest"
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
                  children: " sender: UIButton) {"
                })]
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
                  children: " testConfig "
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
                  children: " AgoraEchoTestConfiguration"
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
                  children: "  // Set the delay for video frame"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.intervalInSeconds "
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Disable audio device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.enableAudio "
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
                  children: "  // Enable video device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.enableVideo "
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
                  children: "  // Identify each test by channel name"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig.channelId "
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
                  children: ' "VideoEchoTest"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " +"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "Int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "random"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "in"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "..."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "))"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Set the view for rendering local user's video"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  testConfig."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "view"
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
                  children: " videoCanvasView"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Start the video device test"
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
                  children: " agoraKit."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "startEchoTest"
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
                  children: "withConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": testConfig)"
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
          id: "network-quality-analysis-3",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "startLastmileProbeTest"
              }), " to start network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After calling this method, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                  children: "// Create a network probe configuration object"
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
                  children: " config "
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
                  children: " AgoraLastmileProbeConfig"
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
                  children: "// Probe uplink network"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.probeUplink "
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
                  children: "// Probe downlink network"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.probeDownlink "
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
                  children: "// Expected uplink bitrate (bps). Value range is [100000,5000000]"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.expectedUplinkBitrate "
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
                  children: " 100000"
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
                  children: "// Expected downlink bitrate (bps). Value range is [100000,5000000]"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.expectedDownlinkBitrate "
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
                  children: " 100000"
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
                  children: "// Start the network quality probe"
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
                  children: "startLastmileProbeTest"
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
                  children: "// Define callback functions to receive network quality statistics"
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
                  children: " engine: AgoraRtcEngineKit, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "lastmileQuality"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " quality: AgoraNetworkQuality) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    lastmileResultLabel."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "text"
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
                  children: ' "Quality: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(quality."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "description"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "())"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
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
                  children: " engine: AgoraRtcEngineKit, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "lastmileProbeTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " result: AgoraLastmileProbeResult) {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Round-Trip Time (RTT)"
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
                  children: " rtt "
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
                  children: ' "Rtt: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(result."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtt"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ")"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'ms"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Downlink network bandwidth"
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
                  children: " downlinkBandWidth "
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
                  children: ' "DownlinkAvailableBandwidth: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(result."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "downlinkReport"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "availableBandwidth"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ")"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'Kbps"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Downlink jitter buffer"
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
                  children: " downlinkJitter "
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
                  children: ' "DownlinkJitter: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(result."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "downlinkReport"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "jitter"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ")"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'ms"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Downlink packet loss rate"
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
                  children: " downlinkLoss "
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
                  children: ' "DownlinkLoss: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(result."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "downlinkReport"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "packetLossRate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ")"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '%"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Uplink network bandwidth"
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
                  children: " uplinkBandwidth "
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
                  children: ' "UplinkAvailableBandwidth: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(result."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "uplinkReport"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "availableBandwidth"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ")"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'Kbps"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Uplink jitter buffer"
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
                  children: " uplinkJitter "
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
                  children: ' "UplinkJitter: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(result."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "uplinkReport"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "jitter"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ")"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'ms"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Uplink packet loss rate"
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
                  children: " uplinkLoss "
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
                  children: ' "UplinkLoss: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "\\(result."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "uplinkReport"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "packetLossRate"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ")"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '%"'
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
                  children: "  lastmileProbResultLabel."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "text"
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
                  children: " [rtt, downlinkBandWidth, downlinkJitter, downlinkLoss,uplinkBandwidth,uplinkJitter,uplinkLoss]."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "joined"
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
                  children: "separator"
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
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\n"
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
                  children: "// Stop the network quality probe"
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
                  children: "stopLastmileProbeTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              })]
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
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-4",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest"
          }), " method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "startEchoTest"
              }), ". Specify the ", _jsx(_components.code, {
                children: "intervalInSeconds"
              }), " parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "stopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "joinChannelByToken"
              }), " to join a channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startEchoTest"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopEchoTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-4",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "startLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
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
                  children: "({"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onLastmileQuality"
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
                  children: "quality"
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
                  children: " QualityType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {},"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  onLastmileProbeResult"
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
                  children: "result"
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
                  children: " LastmileProbeResult"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ") {},"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startLastmileProbeTest"
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
                  children: "  probeUplink: "
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
                  children: "  probeDownlink: "
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
                  children: "  expectedUplinkBitrate: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "100000"
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
                  children: "  expectedDownlinkBitrate: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "100000"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "this"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ".engine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopLastmileProbeTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
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
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-5",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "StartEchoTest"
          }), " method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "StartEchoTest"
              }), ". Specify the ", _jsx(_components.code, {
                children: "intervalInSeconds"
              }), " parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "StopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "JoinChannel"
              }), " to join a channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
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
                  children: "// Start Echo Test"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Only a host can call StartEchoTest."
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
                  children: "StartEchoTest"
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
                  children: "// Wait and check if you can hear voice playback"
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
                  children: "// Stop the echo test"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Call stopEchoTest to end the echo test. Until you call stopEchoTest, you cannot start another test or join a channel."
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
                  children: "StopEchoTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-recording-device-test-2",
          children: "Audio recording device test"
        }), _jsx(_components.p, {
          children: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "StartRecordingDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The SDK reports ", _jsx(_components.code, {
                children: "uid = 0"
              }), ", and the volume information of the device in the ", _jsx(_components.code, {
                children: "OnAudioVolumeIndication"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "StopRecordingDeviceTest"
              }), " to stop the test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "OnAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running a recording device test in your app, refer to the following code:"
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
                  children: "// Create the IRtcEngine object"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "RtcEngine "
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
                  children: " Agora.Rtc.RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "CreateAgoraRtcEngine"
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
                  children: "UserEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " handler"
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
                  children: " UserEventHandler"
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
                  children: "(_appID, "
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
                  children: "                        CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                        AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Initialize IRtcEngine"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set up listen callbacks"
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
                  children: "InitEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(handler);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Get the IAudioDeviceManager object."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "IAudioDeviceManager"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " audioDeviceManager"
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
                  children: " RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetAudioDeviceManager"
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
                  children: "// Enable local audio recording test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "StartRecordingDeviceTest"
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
                  children: "100"
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
                  children: "class"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " UserEventHandler"
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
                  children: "IRtcEngineEventHandler"
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
                  children: "    // Implement the audio volume callback"
                })
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
                  children: " OnAudioVolumeIndication"
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
                  children: "RtcConnection"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " connection"
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
                  children: "AudioVolumeInfo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "speakers"
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
                  children: "uint"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " speakerNumber"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " totalVolume"
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-playback-device-test-2",
          children: "Audio playback device test"
        }), _jsx(_components.p, {
          children: "To test that the local audio playback device is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "StartPlaybackDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "testAudioFilePath"
              }), " parameter to the absolute path of the audio file to be played."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the user hears the audio, the playback device is working properly. The SDK triggers the ", _jsx(_components.code, {
                children: "OnAudioVolumeIndication"
              }), " callback to report ", _jsx(_components.code, {
                children: "uid = 1"
              }), " and the volume information of the playback device."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopPlaybackDeviceTest"
              }), " to stop the test."]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "RtcEngine "
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
                      children: " Agora.Rtc.RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "CreateAgoraRtcEngine"
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
                      children: "UserEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " handler"
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
                      children: " UserEventHandler"
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
                      children: "(_appID, "
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
                      children: "                        CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "                        AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);"
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set up listen callbacks"
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
                      children: "InitEventHandler"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(handler);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Test the local audio playback device"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "IAudioDeviceManager"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " audioDeviceManager"
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
                      children: " RtcEngine."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "GetAudioDeviceManager"
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
                      children: "audioDeviceManager."
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "StartPlaybackDeviceTest"
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
                      children: '"/User/hello.mp3"'
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
                      children: "class"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " UserEventHandler"
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
                      children: "IRtcEngineEventHandler"
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
                      children: "    // Implement the audio volume callback interface"
                    })
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
                      children: " OnAudioVolumeIndication"
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
                      children: "RtcConnection"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " connection"
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
                      children: "AudioVolumeInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "speakers"
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
                      children: "uint"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " speakerNumber"
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
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: " totalVolume"
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
                      children: "}"
                    })
                  })]
                })
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "audio-equipment-loop-detection",
          children: "Audio equipment loop detection"
        }), _jsx(_components.h4, {
          id: "audio-device-loopback-test-2",
          children: "Audio device loopback test"
        }), _jsx(_components.p, {
          children: "To test if the local audio device loop is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "StartAudioDeviceLoopbackTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two ", _jsx(_components.code, {
                children: "oOnAudioVolumeIndication"
              }), " callbacks to report the volume information of the audio capture device with ", _jsx(_components.code, {
                children: "uid= 0"
              }), ", and the audio playback device with ", _jsx(_components.code, {
                children: "uid= 1"
              }), ", respectively."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "StopAudioDeviceLoopbackTest"
              }), " to stop the recording device test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement an audio loopback device test in your app, refer to the following code:"
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
                  children: "RtcEngine "
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
                  children: " Agora.Rtc.RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "CreateAgoraRtcEngine"
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
                  children: "UserEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " handler"
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
                  children: " UserEventHandler"
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
                  children: "(_appID, "
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
                  children: "                    CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set up the callbacks"
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
                  children: "InitEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(handler);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Test the local audio device loop"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "IAudioDeviceManager"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " audioDeviceManager"
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
                  children: " RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetAudioDeviceManager"
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
                  children: "audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "StartAudioDeviceLoopbackTest"
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
                  children: "100"
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
                  children: "// Call StopAudioDeviceLoopbackTest when you are done testing"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "audioDeviceManager."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "StopAudioDeviceLoopbackTest"
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
`, _jsxs(_components.span, {
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
                  children: " UserEventHandler"
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
                  children: "IRtcEngineEventHandler"
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
                  children: "    // Implement the audio volume callback interface"
                })
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
                  children: " OnAudioVolumeIndication"
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
                  children: "RtcConnection"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " connection"
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
                  children: "AudioVolumeInfo"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "[] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "speakers"
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
                  children: "uint"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " speakerNumber"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " totalVolume"
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-5",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "StartLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "StartLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "OnLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "StartLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "OnLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "StartLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                  children: "RtcEngine "
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
                  children: " Agora.Rtc.RtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "CreateAgoraRtcEngine"
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
                  children: "UserEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " handler"
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
                  children: " UserEventHandler"
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
                  children: "(_appID, "
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
                  children: "                        CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                        AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT);"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set up callbacks"
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
                  children: "InitEventHandler"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(handler);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Start last-mile network inspection"
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
                  children: "StartLastmileProbeTest"
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
                  children: "new"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " LastmileProbeConfig"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "());"
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
                  children: "// Stop the network test."
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Agora recommends not calling any other APIs until the test is over"
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
                  children: "StopLastmileProbeTest"
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
`, _jsxs(_components.span, {
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
                  children: " UserEventHandler"
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
                  children: "IRtcEngineEventHandler"
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
                  children: "    // This callback occurs approximately 2 seconds after the Last-mile network test starts"
                })
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
                  children: " OnLastmileQuality"
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
                  children: " quality"
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
                  children: "    // This callback occurs approximately 30 seconds after the Last-mile network test starts"
                })
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
                  children: " OnLastmileProbeResult"
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
                  children: "LastmileProbeResult"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " result"
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
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "unreal"
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-6",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest"
          }), " method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "startEchoTest"
              }), ". Specify the ", _jsx(_components.code, {
                children: "intervalInSeconds"
              }), " parameter to set the delay time for the echo test. The value range is 2-10 seconds and the default value is 10."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, speak into the microphone. The user's audio is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "stopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "joinChannelByToken"
              }), " to join a channel."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
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
                  children: "// Start the echo test"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Only the host can call startEchoTest"
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
                  children: "startEchoTest"
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
                  children: "// Wait and check if you can hear your own voice played back"
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
                  children: "// Stop the echo test"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// You must call stopEchoTest to end the echo test. Otherwise, you will not be able to do another echo test or join the channel"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "rtcEngine.stopEchoTest"
                })
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-recording-device-test-3",
          children: "Audio recording device test"
        }), _jsx(_components.p, {
          children: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startRecordingDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The SDK reports ", _jsx(_components.code, {
                children: "uid = 0"
              }), ", and the volume information of the device in the ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopRecordingDeviceTest"
              }), " to stop the test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running a recording device test in your app, refer to the following code:"
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
                  children: "// Select an audio capture device"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpDeviceManager->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setRecordingDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strDeviceID);"
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
                  children: "// Implement the audio volume callback"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " onAudioVolumeIndication"
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
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AudioVolumeInfo"
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
                  children: " speakers"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                                     unsigned"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " speakerNumber"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "                                     int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " totalVolume"
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
                  children: "   ("
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
                  children: ")speakers;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "   ("
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
                  children: ")speakerNumber;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "   ("
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
                  children: ")totalVolume;"
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
                  children: "// Start audio capture device test"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpDeviceManager)->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startRecordingDeviceTest"
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
                  children: "1000"
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
                  children: "// Stop the audio capture device test"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpDeviceManager)->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopRecordingDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-playback-device-test-3",
          children: "Audio playback device test"
        }), _jsx(_components.p, {
          children: "To test that the local audio playback device is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startPlaybackDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "audioFileName"
              }), " parameter to the absolute path of the audio file to be played."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the user hears the audio, the playback device is working properly. The SDK triggers the ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callback to report ", _jsx(_components.code, {
                children: "uid = 1"
              }), " and the volume information of the playback device."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopPlaybackDeviceTest"
              }), " to stop the test."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running a playback device test in your app, refer to the following code:"
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
                  children: "// Select an audio playback device"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpDeviceManager->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setPlaybackDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(strDeviceID);"
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
                  children: "// Specify the absolute path of the audio file to start the playback device test"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpDeviceManager)->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startPlaybackDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(filePath);"
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
                  children: "// Stop the audio playback device test"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpDeviceManager)->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopPlaybackDeviceTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_components.h4, {
          id: "audio-device-loopback-test-3",
          children: "Audio device loopback test"
        }), _jsx(_components.p, {
          children: "To test if the local audio device loop is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "startAudioDeviceLoopbackTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two ", _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              }), " callbacks to report the volume information of the audio capture device with ", _jsx(_components.code, {
                children: "uid= 0"
              }), ", and the audio playback device with ", _jsx(_components.code, {
                children: "uid= 1"
              }), ", respectively."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "stopAudioDeviceLoopbackTest"
              }), " to stop the recording device test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-6",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "startLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                  children: "// Register the callback interface"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// This callback occurs approximately 2 seconds after starting Last-mile network probe test"
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
                  children: " onLastmileQuality"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " quality"
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
                  children: "// This callback occurs approximately 30 seconds after starting Last-mile network probe test"
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
                  children: " onLastmileProbeResult"
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
                  children: "LastmileProbeResult"
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
                  children: "    // (1) Optionally, you can end the test inside the callback. Agora recommends not calling other API methods until the testing is completed"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    lpAgoraEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopLastmileProbeTest"
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
                  children: "// Configure a LastmileProbeConfig instance"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "LastmileProbeConfig config;"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Enable detection of uplink network quality"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.probeUplink "
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
                  children: "// Enable detection of downlink network quality"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.probeDownlink "
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
                  children: "// Desired maximum transmit bitrate in bps, range [100000,5000000]."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.expectedUplinkBitrate "
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
                  children: " 100000"
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
                  children: "// Desired maximum receive bitrate in bps, range [100000,5000000]."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.expectedDownlinkBitrate "
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
                  children: " 100000"
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
                  children: "// Start last-mile network probing before joining a channel."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpAgoraEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "startLastmileProbeTest"
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
                  children: "// (2) You can also choose to end the test at another time. Agora does not recommend calling any other API methods until testing is complete."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "lpAgoraEngine->"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "stopLastmileProbeTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
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
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-7",
          children: "Equipment quality test"
        }), _jsx(_components.p, {
          children: "You test the recording and playback devices separately."
        }), _jsx(_components.h4, {
          id: "recording-equipment-testing",
          children: "Recording equipment testing"
        }), _jsx(_components.p, {
          children: "Refer to the following steps to test the local microphone and camera:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "AgoraRTC.getDevices"
              }), " to get the available devices and their IDs."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When calling ", _jsx(_components.code, {
                children: "AgoraRTC.createCameraVideoTrack"
              }), " and ", _jsx(_components.code, {
                children: "AgoraRTC.createMicrophoneAudioTrack"
              }), " to create local audio and video track objects, pass in ", _jsx(_components.code, {
                children: "cameraId"
              }), " and ", _jsx(_components.code, {
                children: "microphoneId"
              }), " to specify the devices you want to test."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After creating the local audio or video track object, call ", _jsx(_components.code, {
                children: "CameraVideoTrack.play"
              }), " to play the local video track:"]
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["If you are testing the microphone, call ", _jsx(_components.code, {
                    children: "MicrophoneAudioTrack.getVolumeLevel"
                  }), " to get the volume level. If the volume is greater than ", _jsx(_components.code, {
                    children: "0"
                  }), ", it means that the microphone is working normally."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "When testing the camera, if you see the picture after playing the video track, it means that the camera is working normally."
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement recording equipment tests in your app, refer to the following code:"
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
                  children: "// Get all audio and video devices"
                })
              }), `
`, _jsxs(_components.span, {
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
                  children: "getDevices"
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
                  children: "  ."
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "devices"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " =>"
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
                  children: "    const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " audioDevices"
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
                  children: " devices."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "filter"
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
                  children: "function"
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
                  children: "device"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "){"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " device.kind "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "==="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "audioinput"'
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
                  children: "    });"
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
                  children: " videoDevices"
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
                  children: " devices."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "filter"
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
                  children: "function"
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
                  children: "device"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "){"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " device.kind "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "==="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "videoinput"'
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
                  children: "    });"
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
                  children: "    var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " selectedMicrophoneId "
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
                  children: " audioDevices["
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
                  children: "].deviceId;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    var"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " selectedCameraId "
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
                  children: " videoDevices["
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
                  children: "].deviceId;"
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
                  children: " Promise"
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
                  children: "all"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(["
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      AgoraRTC."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "createCameraVideoTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "({ cameraId: selectedCameraId }),"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      AgoraRTC."
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
                  children: "({ microphoneId: selectedMicrophoneId }),"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ]);"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  })"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ."
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
                  children: "([videoTrack, audioTrack] "
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
                  children: "    videoTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "play"
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
                  children: '"<ELEMENT_ID_IN_DOM>"'
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
                  children: "    setInterval"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(() "
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "      const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " level"
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
                  children: " audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getVolumeLevel"
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
                  children: "      console."
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
                  children: '"local stream audio level"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", level);"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    }, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "1000"
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
                  children: "  });"
                })
              })]
            })
          })
        }), _jsxs(CalloutContainer, {
          type: "info",
          children: [_jsx(CalloutTitle, {
            children: "Information"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Best practice is to draw the volume change and camera screen on the UI so that users can judge if the device is working properly."
              }), `
`, _jsxs(_components.li, {
                children: ["Device IDs are randomly generated, and in some cases the ID of the same device may change. Best practice is to call ", _jsx(_components.code, {
                  children: "AgoraRTC.getDevices"
                }), " to get the device ID every time you test the device."]
              }), `
`]
            })
          })]
        }), _jsx(_components.h4, {
          id: "playback-device-testing",
          children: "Playback device testing"
        }), _jsx(_components.p, {
          children: "The Agora SDK for Web does not provide an API for testing audio playback devices. Use the following methods to test the audio playback devices:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Create an audio player on the page using the HTML5 ", _jsx(_components.code, {
                children: "<audio>"
              }), " element. Prompt the user to play the audio file and confirm that the sound is audible."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After capturing the microphone audio, call ", _jsx(_components.code, {
                children: "MicrophoneAudioTrack.play"
              }), " to play the microphone sound and prompt the user to subjectively verify that the playback is audible."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-7",
          children: "Network quality analysis"
        }), _jsx(_components.p, {
          children: "Refer to the following steps to perform a network quality test before a call or live broadcast:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "createClient"
              }), " twice, to create two clients:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "uplinkClient"
                }), ": To test the connection status of the uplink network."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "downlinkClient"
                }), ": To test the connection status of the downlink network."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Both clients call ", _jsx(_components.code, {
                children: "join"
              }), " to enter a channel for testing."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "createMicrophoneAndCameraTracks"
              }), " to create audio and video tracks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "publish"
              }), " on ", _jsx(_components.code, {
                children: "uplinkClient"
              }), " to publish audio and video tracks and ", _jsx(_components.code, {
                children: "subscribe"
              }), " on ", _jsx(_components.code, {
                children: "downlinkClient"
              }), " to subscribe to audio and video tracks."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Listen to the ", _jsx(_components.code, {
                children: 'uplinkClient.on("network-quality")'
              }), " event to get the uplink network status between the local device and Agora server."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Listen to ", _jsx(_components.code, {
                children: 'downlinkClient.on("network-quality")'
              }), " event to get the downlink network status between the local device and the Agora server. The SDK triggers the ", _jsx(_components.code, {
                children: 'client.on("network-quality")'
              }), " callback every two seconds."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To get specific statistics about the sent or received media tracks, such as send/receive bitrate, end-to-end latency, call ", _jsx(_components.code, {
                children: "getLocalAudioStats"
              }), " and ", _jsx(_components.code, {
                children: "getLocalVideoStats"
              }), " on ", _jsx(_components.code, {
                children: "uplinkClient"
              }), " to get the uplink statistics, and ", _jsx(_components.code, {
                children: "getRemoteAudioStats"
              }), " and ", _jsx(_components.code, {
                children: "getRemoteVideoStats"
              }), " on ", _jsx(_components.code, {
                children: "downlinkClient"
              }), " to get the downlink statistics."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "The following figure summarizes the calling sequence of network quality tests:"
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Pre-call last mile test",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/pre-call-network-quality-web.svg",
                alt: "Network quality analysis"
              })
            })
          })
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                  children: "// Get uplink network quality"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "uplinkClient."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: '"network-quality"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "quality"
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
                  children: "  console."
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
                  children: '"uplink network quality"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", quality.uplinkNetworkQuality);"
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
                  children: "// Get downlink network quality"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "downlinkClient."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "on"
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
                  children: '"network-quality"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "quality"
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
                  children: "  console."
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
                  children: '"downlink network quality"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", quality.downlinkNetworkQuality);"
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
                  children: "// Get uplink statistics"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "uplinkVideoStats "
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
                  children: " uplinkClient."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getLocalVideoStats"
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
                  children: "// Get downlink statistics"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "downlinkVideoStats "
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
                  children: " downlinkClient."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "getRemoteVideoStats"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()["
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
                  children: "UPLINKCLIENT_UID"
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
                  children: "];"
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
                  children: '"uplink video stats"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", uplinkVideoStats);"
                })]
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
                  children: '"downlink video stats"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", downlinkVideoStats);"
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
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-8",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest"
          }), " [3/3] method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "startEchoTest"
              }), " [3/3] with ", _jsx(_components.code, {
                children: "EchoTestConfiguration"
              }), ". Specify the channel name, whether to test audio or video, and the time interval for the echo."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After starting the test, face the camera and speak into the microphone. The user's audio or video is played back after a short delay. If the playback is normal, it means that the user's devices and upstream and downstream network are working normally."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To stop the test, call ", _jsx(_components.code, {
                children: "stopEchoTest"
              }), ", and then call ", _jsx(_components.code, {
                children: "joinChannel"
              }), " to join a channel."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "warning",
              children: [_jsx(CalloutTitle, {
                children: "Note"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Using ", _jsx(_components.code, {
                    children: "startEchoTest"
                  }), " [3/3] to test an audio device and a video device at the same time may result in a brief audio-video desynchronization of the test results."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement running an echo test in your app, refer to the following code:"
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
                  children: "// Test audio device"
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
                  children: " testAudioDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    EchoTestConfiguration config;"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Enable audio device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.enableAudio "
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
                  children: "    // Disable video device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.enableVideo "
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
                  children: "    // Set the interval for returning test results"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.intervalInSeconds "
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
                  children: " m_audioEchoInterval;"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Identify the test channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.channelId "
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
                  children: ' "AudioEchoTestChannel"'
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
                  children: "    // Start the test"
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
                  children: "startEchoTest"
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
                  children: "// Test video device"
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
                  children: " testVideoDevice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "() {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    EchoTestConfiguration config;"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Disable audio device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.enableAudio "
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
                  children: "    // Enable video device test"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.enableVideo "
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
                  children: "    // Specify the view for rendering local user video"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.view "
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
                  children: " m_VideoTest."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "GetVideoSafeHwnd"
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
                  children: "    // Set the expected delay for video frames"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.intervalInSeconds "
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
                  children: " m_videoEchoInterval;"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // Identify the test channel"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    config.channelId "
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
                  children: ' "VideoEchoTestChannel"'
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
                  children: "    // Start the test"
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
                  children: "startEchoTest"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}"
                })
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-8",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["RTC SDK provides the ", _jsx(_components.code, {
            children: "startLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "startLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "onLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "startLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.p, {
          children: "To implement network quality testing in your app, refer to the following code:"
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
                  children: "// Callback registration"
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
                  children: " onLastmileQuality"
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
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " quality"
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
                  children: " onLastmileProbeResult"
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
                  children: "LastmileProbeResult"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: " result"
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
                  children: "// Configure a LastmileProbeConfig instance"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "LastmileProbeConfig config;"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Confirm probing uplink network quality"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.probeUplink "
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
                  children: "// Confirm probing downlink network quality"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.probeDownlink "
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
                  children: "// Expected maximum sending bitrate, in bps, range [100000,5000000]"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.expectedUplinkBitrate "
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
                  children: " 100000"
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
                  children: "// Expected maximum receiving bitrate, in bps, range [100000,5000000]"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "config.expectedDownlinkBitrate "
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
                  children: " 100000"
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
                  children: "// Start network quality probing"
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
                  children: "startLastmileProbeTest"
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
                  children: "// Stop network quality probing"
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
                  children: "stopLastmileProbeTest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "();"
                })]
              })]
            })
          })
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "blueprint"
        }), _jsx(_components.h3, {
          id: "equipment-quality-test-9",
          children: "Equipment quality test"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "startEchoTest"
          }), " method to test the network connection and whether the audio and video devices are working properly. Refer to the following steps to implement the device quality test:"]
        }), _jsx(_components.h4, {
          id: "start-the-echo-test",
          children: "Start the echo test"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create the UMG"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a button control named ", _jsx(_components.strong, {
                children: "Btn_StartEchoTest"
              }), " that you click to start the voice call loop test."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-startechotest-umg.png",
                alt: "Create UMG"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Bind UI events"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Bind Event to On Clicked"
              }), " node that connects the ", _jsx(_components.strong, {
                children: "Btn_StartEchoTest"
              }), " control and the ", _jsx(_components.code, {
                children: "OnStartEchoTestClicked"
              }), " callback. When you press the button to start the voice call test, the ", _jsx(_components.code, {
                children: "OnStartEchoTestClicked"
              }), " callback is triggered. This is shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-startechotest-bind-ui-events.png",
                alt: "Bind UI Events"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Implement the UI event"
            }), `
`, _jsxs(_components.p, {
              children: ["Create the ", _jsx(_components.code, {
                children: "OnStartEchoTestClicked"
              }), " callback function. When this callback is triggered, the ", _jsx(_components.strong, {
                children: "Start Echo Test"
              }), " method is called to start the test. When the echo test starts, the user speaks into the microphone. If the recording is played back after the set time interval, it means that the audio device and network connection are working normally. In this example, configure the ", _jsx(_components.code, {
                children: "Config"
              }), " parameter of ", _jsx(_components.strong, {
                children: "Start Echo Test"
              }), " as follows:"]
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Enable Audio"
                }), " is checked by default, which means audio device detection is enabled."]
              }), `
`, _jsxs(_components.li, {
                children: ["Uncheck ", _jsx(_components.strong, {
                  children: "Enable Video"
                }), " to disable video device testing."]
              }), `
`, _jsxs(_components.li, {
                children: ["Input ", _jsx(_components.strong, {
                  children: "Token"
                }), " and ", _jsx(_components.strong, {
                  children: "Channel Id"
                }), " (channel name)."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.strong, {
                  children: "Interval In Seconds"
                }), " is set to ", _jsx(_components.strong, {
                  children: "2"
                }), " by default. This is the time interval between when you start the call and when the recording plays back."]
              }), `
`]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-startechotest-impl-ui-events.png",
                alt: "Implement UI Events"
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h5, {
          id: "stop-voice-call-detection",
          children: "Stop voice call detection"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create UMG"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a button control named ", _jsx(_components.strong, {
                children: "Btn_StopEchoTest"
              }), ". You click the button to stop the echo test. As shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-stopechotest-umg.png",
                alt: "Create UMG"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Bind UI events"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Bind Event to On Clicked"
              }), " node that connects the ", _jsx(_components.strong, {
                children: "Btn_StopEchoTest"
              }), " control and the ", _jsx(_components.code, {
                children: "OnStopEchoTestClicked"
              }), " callback. The ", _jsx(_components.code, {
                children: "OnStopEchoTestClicked"
              }), " callback is triggered when you press the button to stop the voice call test. This is shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-stopechotest-bind-ui-events.png",
                alt: "Bind UI Events"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Implement the UI event"
            }), `
`, _jsxs(_components.p, {
              children: ["Create ", _jsx(_components.code, {
                children: "OnStoptEchoTestClicked"
              }), " callback function. After getting the test result, you press the stop button to trigger this callback and call the ", _jsx(_components.strong, {
                children: "Stop Echo Test"
              }), " method to stop the test."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/connection-status-mng-blueprint-lastmile-quality-stopechotest-impl-ui-events.png",
                alt: "Implement UI Events"
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "audio-recording-device-detection",
          children: "Audio recording device detection"
        }), _jsx(_components.p, {
          children: "To test whether a local audio recording device, such as a microphone, is working properly, refer to the following steps."
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "StartRecordingDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The SDK reports ", _jsx(_components.code, {
                children: "uid = 0"
              }), ", and the volume information of the device in the ", _jsx(_components.code, {
                children: "FOnAudioVolumeIndication"
              }), " callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "StopRecordingDeviceTest"
              }), " to stop the test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "FOnAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "audio-playback-device-test-4",
          children: "Audio playback device test"
        }), _jsx(_components.p, {
          children: "To test that the local audio playback device is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "StartPlaybackDeviceTest"
              }), " and set the ", _jsx(_components.code, {
                children: "testAudioFilePath"
              }), " parameter to the absolute path of the audio file to be played."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["If the user hears the audio, the playback device is working properly. The SDK triggers the ", _jsx(_components.code, {
                children: "FOnAudioVolumeIndication"
              }), " callback to report ", _jsx(_components.code, {
                children: "uid = 1"
              }), " and the volume information of the playback device."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "StopPlaybackDeviceTest"
              }), " to stop the test."]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "audio-device-loopback-test-4",
          children: "Audio device loopback test"
        }), _jsx(_components.p, {
          children: "To test if the local audio device loop is working properly, refer to the following steps:"
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "StartAudioDeviceLoopbackTest"
              }), " and set the ", _jsx(_components.code, {
                children: "indicationInterval"
              }), " parameter to the time interval after which the callback is triggered."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After starting the test, speak into the microphone. The microphone captures the sound and then plays it on the playback device. The SDK returns two ", _jsx(_components.code, {
                children: "FOnAudioVolumeIndication"
              }), " callbacks to report the volume information of the audio capture device with ", _jsx(_components.code, {
                children: "uid= 0"
              }), ", and the audio playback device with ", _jsx(_components.code, {
                children: "uid= 1"
              }), ", respectively."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["When you are done testing, call ", _jsx(_components.code, {
                children: "StopAudioDeviceLoopbackTest"
              }), " to stop the recording device test."]
            }), `
`, _jsxs(CalloutContainer, {
              type: "info",
              children: [_jsx(CalloutTitle, {
                children: "Information"
              }), _jsx(CalloutDescription, {
                children: _jsxs(_components.p, {
                  children: ["Best practice is to set the ", _jsx(_components.code, {
                    children: "indicationInterval"
                  }), " parameter to more than ", _jsx(_components.code, {
                    children: "200"
                  }), " milliseconds and not less than ", _jsx(_components.code, {
                    children: "10"
                  }), " milliseconds, otherwise the ", _jsx(_components.code, {
                    children: "onAudioVolumeIndication"
                  }), " callback may not be received."]
                })
              })]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "network-quality-analysis-9",
          children: "Network quality analysis"
        }), _jsxs(_components.p, {
          children: ["The SDK provides the ", _jsx(_components.code, {
            children: "StartLastmileProbeTest"
          }), " method to probe the last-mile network quality before joining a channel. The method returns information about the network quality score and network statistics. Take the following steps to run a last-mile network quality probe test:"]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Before joining a channel or switching user roles, call ", _jsx(_components.code, {
                children: "StartLastmileProbeTest"
              }), " to start the network test. Set the probe configuration and the expected maximum bitrate in ", _jsx(_components.code, {
                children: "LastmileProbeConfig"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "After you start the test, the SDK triggers the following callbacks:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "FOnLastmileQuality"
                  }), ": This callback is triggered two seconds after ", _jsx(_components.code, {
                    children: "StartLastmileProbeTest"
                  }), " is called. It provides feedback on the upstream and downstream network quality through a subjective ", _jsx(_components.code, {
                    children: "quality"
                  }), " score."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: [_jsx(_components.code, {
                    children: "FOnLastmileProbeResult"
                  }), ": This callback is triggered 30 seconds after ", _jsx(_components.code, {
                    children: "StartLastmileProbeTest"
                  }), " is called. It returns objective real-time network statistics, including ", _jsx(_components.code, {
                    children: "packetLossRate"
                  }), ", network ", _jsx(_components.code, {
                    children: "jitter"
                  }), ", and ", _jsx(_components.code, {
                    children: "availableBandwidth"
                  }), "."]
                }), `
`]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "StopLastmileProbeTest"
              }), " to stop last-mile network testing."]
            }), `
`]
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
    }), `
`, _jsx(_components.h3, {
      id: "troubleshooting-device-and-network-issues",
      children: "Troubleshooting device and network issues"
    }), `
`, _jsx(_components.p, {
      children: "If you encounter problems while running pre-call tests, first ensure that you have implemented the API calls properly. To troubleshoot device and network issues, refer to the following table:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Problem"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Solution"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Can't hear sound when testing audio devices."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "- Check that the recording device and the playback device are working properly, and are not occupied by other programs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cannot see the screen when testing video devices."
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "- Check that the video device is working properly and not occupied by other programs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Poor uplink network quality detected (packet loss > 5%; network jitter > 100ms)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "- Check that the local network is working properly."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Poor downlink network quality detected (packet loss > 5%; network jitter > 100ms)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "Check that the local network is working properly."
              }), `
`, _jsxs(_components.li, {
                children: ["Ensure that the total bandwidth of the local subscription does not exceed the available downstream bandwidth by:", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "Reducing the number of subscribed audio and video streams on the receiving end or reducing the bitrate of published audio and video streams on the sending end."
                  }), `
`, _jsx(_components.li, {
                    children: "Enabling dual-stream mode on the sending side and requesting to receive small streams on the receiving side to reduce bandwidth consumption."
                  }), `
`, _jsx(_components.li, {
                    children: "Enabling the video stream fallback function or the multiple streams by priority fallback function at the receiving end."
                  }), `
`]
                }), `
`]
              }), `
`]
            })
          })]
        })]
      })]
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","electron","flutter","ios","macos"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample-Audio/app/src/main/java/io/agora/api/example/examples/advanced/PreCallTest.java",
            children: "PreCallTest"
          }), " sample project for your reference. Download and explore this project for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startechotest3",
              children: [_jsx(_components.code, {
                children: "startEchoTest"
              }), " [3/3]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest",
              children: _jsx(_components.code, {
                children: "stopEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality",
              children: _jsx(_components.code, {
                children: "onLastmileQuality"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult",
              children: _jsx(_components.code, {
                children: "onLastmileProbeResult"
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
          canonicalPlatform: "android",
          platform: "electron"
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality",
              children: _jsx(_components.code, {
                children: "onLastmileQuality"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult",
              children: _jsx(_components.code, {
                children: "onLastmileProbeResult"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
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
          canonicalPlatform: "android",
          platform: "flutter"
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest",
              children: _jsx(_components.code, {
                children: "startRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest",
              children: _jsx(_components.code, {
                children: "stopRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "startPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "stopPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "startAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "stopAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_startechotest3",
              children: _jsx(_components.code, {
                children: "startEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_stopechotest",
              children: _jsx(_components.code, {
                children: "stopEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality",
              children: _jsx(_components.code, {
                children: "onLastmileQuality"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult",
              children: _jsx(_components.code, {
                children: "onLastmileProbeResult"
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
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsx(_components.h3, {
          id: "sample-project-1",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/iOS/APIExample/APIExample/Examples/Advanced/PrecallTest/PrecallTest.swift",
            children: "PreCallTest"
          }), " sample project for your reference. Download and explore this project for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startechotest(withconfig:)",
              children: _jsx(_components.code, {
                children: "startEchoTest(withConfig:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stopechotest()",
              children: _jsx(_components.code, {
                children: "stopEchoTest()"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/startlastmileprobetest(_:)",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest(_:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/stoplastmileprobetest()",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest()"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:lastmilequality:)",
              children: _jsx(_components.code, {
                children: "rtcEngine(_:lastmileQuality:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:lastmileprobetest:)",
              children: _jsx(_components.code, {
                children: "rtcEngine(_:lastmileProbeTest:)"
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
          canonicalPlatform: "android",
          platform: "macos"
        }), _jsx(_components.h3, {
          id: "sample-project-2",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Advanced/PrecallTest/PrecallTest.swift",
            children: "PreCallTest"
          }), " sample project for your reference. Download and explore this project for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startechotest(withconfig:)",
              children: _jsx(_components.code, {
                children: "startEchoTest(withConfig:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stopechotest()",
              children: _jsx(_components.code, {
                children: "stopEchoTest()"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/startlastmileprobetest(_:)",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest(_:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/stoplastmileprobetest()",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest()"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:lastmilequality:)",
              children: _jsx(_components.code, {
                children: "rtcEngine(_:lastmileQuality:)"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:lastmileprobetest:)",
              children: _jsx(_components.code, {
                children: "rtcEngine(_:lastmileProbeTest:)"
              })
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "This feature guide is not available yet for JavaScript."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["react-native","unity","unreal","web","windows","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "react-native"
        }), _jsx(_components.h3, {
          id: "sample-projects",
          children: "Sample projects"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source Web ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx",
            children: "JoinChannelAudio"
          }), " sample project for your reference. Download and explore this project for a more detailed example."]
        }), _jsxs(_components.p, {
          children: ["During the process of adjusting call volume, refer to the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/AudioMixing/AudioMixing.tsx",
            children: "AudioMixing"
          }), " project to adjust the playback volume of a mix or sound file."]
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startechotest3",
              children: _jsx(_components.code, {
                children: "startEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest",
              children: _jsx(_components.code, {
                children: "stopEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
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
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest",
              children: _jsx(_components.code, {
                children: "StartRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest",
              children: _jsx(_components.code, {
                children: "StopRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "StartPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "StopPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "StartAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "StopAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startechotest2",
              children: _jsx(_components.code, {
                children: "StartEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest",
              children: _jsx(_components.code, {
                children: "StopEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "StartLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "StopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality",
              children: _jsx(_components.code, {
                children: "OnlastmileQuality"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult",
              children: _jsx(_components.code, {
                children: "OnlastmileProbeResult"
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
        }), _jsx(_components.h3, {
          id: "sample-project-3",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source Web ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example",
            children: "sample project"
          }), " for your reference. Download and explore this project for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest",
              children: _jsx(_components.code, {
                children: "startRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest",
              children: _jsx(_components.code, {
                children: "stopRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "startPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "stopPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "startAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "stopAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_startechotest",
              children: _jsx(_components.code, {
                children: "startEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest",
              children: _jsx(_components.code, {
                children: "stopEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality",
              children: _jsx(_components.code, {
                children: "onlastmileQuality"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult",
              children: _jsx(_components.code, {
                children: "onlastmileProbeResult"
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
        }), _jsx(_components.h3, {
          id: "sample-project-4",
          children: "Sample project"
        }), _jsx(_components.p, {
          children: "Agora provides the following open-source projects for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx",
              children: "JoinChannelAudio"
            })
          }), `
`]
        }), _jsx(_components.p, {
          children: "Download or view the code for more detailed examples."
        }), _jsx(_components.h3, {
          id: "api-reference-8",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Equipment testing :"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#getdevices",
                  children: "getDevices"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#getcameras",
                  children: "getCameras"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#getmicrophones",
                  children: "getMicrophones"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createmicrophoneaudiotrack",
                  children: "createMicrophoneAudioTrack"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#createcameravideotrack",
                  children: "createCameraVideoTrack"
                })
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Network analysis:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#event_network_quality",
                  children: "network-quality"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getlocalaudiostats",
                  children: "getLocalAudioStats"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getlocalvideostats",
                  children: "getLocalVideoStats"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getremoteaudiostats",
                  children: "getRemoteAudioStats"
                })
              }), `
`, _jsx(_components.li, {
                children: _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html#getremotevideostats",
                  children: "getRemoteVideoStats"
                })
              }), `
`]
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
          canonicalPlatform: "web",
          platform: "windows"
        }), _jsx(_components.h3, {
          id: "sample-project-5",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO/API-Examples/tree/4.0.0-GA/windows/APIExample/APIExample/Advanced/PreCallTest",
            children: "PreCallTest"
          }), " sample project for your reference. Download and explore this project for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-9",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startechotest3",
              children: [_jsx(_components.code, {
                children: "startEchoTest"
              }), " [3/3]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest",
              children: _jsx(_components.code, {
                children: "stopEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "startLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "stopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality",
              children: _jsx(_components.code, {
                children: "onLastmileQuality"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult",
              children: _jsx(_components.code, {
                children: "onLastmileProbeResult"
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
        }), _jsx(_components.h3, {
          id: "sample-project-6",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic/JoinChannelAudio",
            children: "JoinChannelAudio"
          }), " sample project for your reference. Download and explore the project for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "api-reference-10",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_startechotest",
              children: _jsx(_components.code, {
                children: "StartEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_stopechotest",
              children: _jsx(_components.code, {
                children: "StopEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_startechotest",
              children: _jsx(_components.code, {
                children: "StartEchoTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startrecordingdevicetest",
              children: _jsx(_components.code, {
                children: "StartRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stoprecordingdevicetest",
              children: _jsx(_components.code, {
                children: "StopRecordingDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "StartPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopplaybackdevicetest",
              children: _jsx(_components.code, {
                children: "StopPlaybackDeviceTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_startaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "StartAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_iaudiodevicemanager.html#api_iaudiodevicemanager_stopaudiodeviceloopbacktest",
              children: _jsx(_components.code, {
                children: "StopAudioDeviceLoopbackTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_startlastmileprobetest",
              children: _jsx(_components.code, {
                children: "StartLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_stoplastmileprobetest",
              children: _jsx(_components.code, {
                children: "StopLastmileProbeTest"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmilequality",
              children: _jsx(_components.code, {
                children: "FOnLastmileQuality"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onlastmileproberesult",
              children: _jsx(_components.code, {
                children: "FOnLastmileProbeResult"
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
