import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage media and devices",
  description: "Implement key workflow steps required to develop a fully functional video calling app"
};
export let _markdown = `

This page shows you how to configure volume settings for audio recording, audio playback, and for the playback of music files.

## Understand the tech [#understand-the-tech]

Agora RTC SDK supports adjusting the audio volume for both recording and playback to meet practical application use-cases. For example, during a two-person call, you can mute a remote user by adjusting the playback volume setting to 0.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="android" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;windows&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="android" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **In-ear monitoring** refers to the process of playing audio captured by a device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="ios" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **In-ear monitoring** refers to the process of playing audio captured by a device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="macos" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="windows" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="electron" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="flutter" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="react-native" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="unity" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="unreal" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="android" platform="blueprint" />

    The figure below shows the workflow of adjusting the volume.

    <Accordions>
      <Accordion title="Volume adjust workflow">
        ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg)
      </Accordion>
    </Accordions>

    **Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device.

    **Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Prerequisites [#prerequisites]

Ensure that you have implemented the [SDK quickstart](/en/realtime-media/rtc/get-started-sdk) in your project.

## Implement volume control [#implement-volume-control]

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;javascript&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users]

    To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

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
        // Stop publishing the local audio stream
        mRtcEngine.muteLocalAudioStream(true);

        // Resume publishing the local audio stream
        mRtcEngine.muteLocalAudioStream(false);
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        // Stop publishing the local audio stream
        mRtcEngine.muteLocalAudioStream(true)

        // Resume publishing the local audio stream
        mRtcEngine.muteLocalAudioStream(false)
        \`\`\`
      </TabsContent>
    </Tabs>

    To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

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
        // Stop subscribing to the audio stream of the remote user
        mRtcEngine.muteRemoteAudioStream(remoteUid, true);

        // Resume subscribing to the audio stream of the remote user
        mRtcEngine.muteRemoteAudioStream(remoteUid, false);
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        // Stop subscribing to the audio stream of the remote user
        mRtcEngine.muteRemoteAudioStream(remoteUid, true)

        // Resume subscribing to the audio stream of the remote user
        mRtcEngine.muteRemoteAudioStream(remoteUid, false)
        \`\`\`
      </TabsContent>
    </Tabs>

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

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
        int volume = 50;
        int uid = 123456;
        // Set the local playback volume for all remote users
        mRtcEngine.adjustPlaybackSignalVolume(volume);
        // Set the local playback volume for a specific remote user. For example, a user with uid=123
        mRtcEngine.adjustUserPlaybackSignalVolume(uid, volume);
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        val volume = 50
        val uid = 123456

        // Set the local playback volume for all remote users
        mRtcEngine.adjustPlaybackSignalVolume(volume)

        // Set the local playback volume for a specific remote user (e.g., user with uid=123)
        mRtcEngine.adjustUserPlaybackSignalVolume(uid, volume)
        \`\`\`
      </TabsContent>
    </Tabs>

    ### Adjust the in-ear monitoring volume [#adjust-the-in-ear-monitoring-volume]

    During the process of audio capture, mixing, and playback, Agora enables you to adjust the in-ear monitoring volume. Enable and set the volume using \`enableInEarMonitoring\` and \`setInEarMonitoringVolume\`.

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
        // Enable in-ear monitoring
        mRtcEngine.enableInEarMonitoring(true);
        int volume = 50;
        // Adjust in-ear monitoring volume
        mRtcEngine.setInEarMonitoringVolume(volume);
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        // Enable in-ear monitoring
        mRtcEngine.enableInEarMonitoring(true)

        val volume = 50
        // Adjust in-ear monitoring volume
        mRtcEngine.setInEarMonitoringVolume(volume)
        \`\`\`
      </TabsContent>
    </Tabs>

    ### Adjust the recording volume [#adjust-the-recording-volume]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

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
        ChannelMediaOptions options = new ChannelMediaOptions();
        options.clientRoleType = Constants.CLIENT_ROLE_BROADCASTER;
        mRtcEngine.joinChannel(token, channelName, 1234, options);
        // Adjust the recording signal volume to 50
        int vol = 50;
        mRtcEngine.adjustRecordingSignalVolume(vol);
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        // Create ChannelMediaOptions and set client role
        val options = ChannelMediaOptions().apply {
            clientRoleType = Constants.CLIENT_ROLE_BROADCASTER
        }

        // Join channel
        mRtcEngine.joinChannel(token, channelName, 1234, options)

        // Adjust the recording signal volume to 50
        val vol = 50
        mRtcEngine.adjustRecordingSignalVolume(vol)
        \`\`\`
      </TabsContent>
    </Tabs>

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the \`onAudioVolumeIndication\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

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
        private final IRtcEngineEventHandler mRtcEventHandler = new IRtcEngineEventHandler()
        {
              // ...
              // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
              // their respective volumes, and determine whether the local user is speaking.
              @Override
              public void onAudioVolumeIndication(AudioVolumeInfo[] speakers, int totalVolume) {
              }
        };
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        private val mRtcEventHandler = object : IRtcEngineEventHandler() {
            // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
            // their respective volumes, and determine whether the local user is speaking.
            override fun onAudioVolumeIndication(speakers: Array<AudioVolumeInfo>?, totalVolume: Int) {
                // Your implementation here
            }
        }
        \`\`\`
      </TabsContent>
    </Tabs>

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

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
        // Enable the onAudioVolumeIndication callback
         mRtcEngine.enableAudioVolumeIndication(1000, 3, true);
        \`\`\`
      </TabsContent>

      <TabsContent value="kotlin">
        \`\`\`kotlin
        // Enable the onAudioVolumeIndication callback
        mRtcEngine.enableAudioVolumeIndication(1000, 3, true)
        \`\`\`
      </TabsContent>
    </Tabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-1]

    To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

    \`\`\`typescript
    // Stop publishing the local audio stream
    engine.muteLocalAudioStream(true);

    // Resume publishing the local audio stream
    engine.muteLocalAudioStream(true);
    \`\`\`

    To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

    \`\`\`typescript
    // Stop subscribing to the audio stream of the remote user
    engine.muteRemoteAudioStream(remoteUid, true);

    // Resume subscribing to the audio stream of the remote user
    engine.muteRemoteAudioStream(remoteUid, false);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-1]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    \`\`\`typescript
    // Set the local playback volume to 50 for all remote users
    engine.adjustPlaybackSignalVolume(50);
    // Set the local playback volume for a specific remote user. For example, user with uid 12
    engine.adjustUserPlaybackSignalVolume(12, 50);
    \`\`\`

    ### Adjust the recording volume [#adjust-the-recording-volume-1]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    \`\`\`typescript
    // Adjust the recording signal volume to 50
    engine.adjustRecordingSignalVolume(50);
    \`\`\`

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-1]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the \`onAudioVolumeIndication\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`typescript
    // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
    // their respective volumes, and determine whether the local user is speaking.
    onAudioVolumeIndication?(
        connection: RtcConnection,
        speakers: AudioVolumeInfo[],
        speakerNumber: number,
        totalVolume: number
      ): void;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-2]

    To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

    \`\`\`dart
    // Stop publishing the local audio stream
    _rtcEngine.muteLocalAudioStream(true);

    // Resume publishing the local audio stream
    _rtcEngine.muteLocalAudioStream(false);
    \`\`\`

    To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

    \`\`\`dart
    // Stop subscribing to the audio stream of the remote user
    _rtcEngine.muteRemoteAudioStream(remoteUid, true);

    // Resume subscribing to the audio stream of the remote user
    _rtcEngine.muteRemoteAudioStream(remoteUid, false);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-2]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    \`\`\`dart
    const int volume = 50;
    // Set the local playback volume to 50 for all remote users
    await _rtcEngine.adjustPlaybackSignalVolume(volume);
    // Set the local playback volume for a specific remote user. For example, user with uid 1000
    await _rtcEngine.adjustUserPlaybackSignalVolume(uid: 1000, volume: volume);
    \`\`\`

    ### Adjust the recording volume [#adjust-the-recording-volume-2]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    \`\`\`dart
    // Adjust the recording signal volume to 50
    int vol = 50;
    await _rtcEngine.adjustRecordingSignalVolume(vol);
    \`\`\`

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-2]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the \`onAudioVolumeIndication\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`dart
    // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
    // their respective volumes, and determine whether the local user is speaking.
    _rtcEngine.registerEventHandler(RtcEngineEventHandler(
      onAudioVolumeIndication: (RtcConnection connection,
          List<AudioVolumeInfo> speakers, int speakerNumber, int totalVolume) {
        logSink.log(
          '[onAudioVolumeIndication] speakers: \${speakers.toString()}, speakerNumber: $speakerNumber, totalVolume: $totalVolume');
        }
    ));
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-3]

    * To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

      <CodeBlockTabs defaultValue="objc">
        <CodeBlockTabsList>
          <CodeBlockTabsTrigger value="objc">
            Objective-C
          </CodeBlockTabsTrigger>

          <CodeBlockTabsTrigger value="swift">
            Swift
          </CodeBlockTabsTrigger>
        </CodeBlockTabsList>

        <CodeBlockTab value="objc">
          \`\`\`objc
          [agoraKit muteLocalAudioStream:YES];
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="swift">
          \`\`\`swift
          // Stop publishing the local audio stream
          agoraKit.muteLocalAudioStream(true)

          // Resume publishing the local audio stream
          agoraKit.muteLocalAudioStream(false)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    * To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

      <CodeBlockTabs defaultValue="objc">
        <CodeBlockTabsList>
          <CodeBlockTabsTrigger value="objc">
            Objective-C
          </CodeBlockTabsTrigger>

          <CodeBlockTabsTrigger value="swift">
            Swift
          </CodeBlockTabsTrigger>
        </CodeBlockTabsList>

        <CodeBlockTab value="objc">
          \`\`\`objc
          [agoraKit muteRemoteAudioStream:remoteUid mute:YES];
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="swift">
          \`\`\`swift
          // Stop subscribing to the audio stream of the remote user
          agoraKit.muteRemoteAudioStream(remoteUid, mute: true)

          // Resume subscribing to the audio stream of the remote user
          agoraKit.muteRemoteAudioStream(remoteUid, mute: false)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-3]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Set the volume of all remote users played locally
        [agoraKit adjustPlaybackSignalVolume: 50];
        // Set the local playback volume for a specific remote user.
        [agoraKit adjustUserPlaybackSignalVolume: uid, volume: 50];
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Set the volume of all remote users played locally
        agoraKit.adjustPlaybackSignalVolume(50)
        // Set the local playback volume for a specific remote user
        agoraKit.adjustUserPlaybackSignalVolume(uid, volume: 50)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Adjust the in-ear monitoring volume [#adjust-the-in-ear-monitoring-volume-1]

    During the process of audio capture, mixing, and playback, Agora enables you to adjust the volume of in-ear monitoring. Enable and set the in-ear monitoring through \`enableInEarMonitoring\` and \`setInEarMonitoringVolume\`.

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Enable in-ear monitoring
        [agoraKit enableInEarMonitoring:true];
        // Adjust in-ear monitoring volume
        [agoraKit setInEarMonitoringVolume:50];
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Enable in-ear monitoring
        agoraKit.enableInEarMonitoring(true)
        // Adjust in-ear monitoring volume
        agoraKit.setInEarMonitoringVolume(50)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Adjust the recording volume [#adjust-the-recording-volume-3]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Adjust the recording signal volume
        [agoraKit adjustRecordingSignalVolume: 50];
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Adjust the recording signal volume
        agoraKit.adjustRecordingSignalVolume(50)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-3]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use \`reportAudioVolumeIndicationOfSpeakers\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
        // their respective volumes, and determine whether the local user is speaking.
        - (void)rtcEngine:(AgoraRtcEngineKit *_Nonnull)engine
        reportAudioVolumeIndicationOfSpeakers:(NSArray<AgoraRtcAudioVolumeInfo *> *_Nonnull)speakers
                                      totalVolume:(NSInteger)totalVolume {
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
        // their respective volumes, and determine whether the local user is speaking.
        func rtcEngine(
            _ engine: AgoraRtcEngineKit,
            reportAudioVolumeIndicationOfSpeakers speakers: [AgoraRtcAudioVolumeInfo],
            totalVolume: Int
        ) {
        }

        // Enable the reportAudioVolumeIndicationOfSpeakers callback
        agoraKit.enableAudioVolumeIndication(200, smooth: 3, reportVad: true)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-4]

    * To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

      <CodeBlockTabs defaultValue="objc">
        <CodeBlockTabsList>
          <CodeBlockTabsTrigger value="objc">
            Objective-C
          </CodeBlockTabsTrigger>

          <CodeBlockTabsTrigger value="swift">
            Swift
          </CodeBlockTabsTrigger>
        </CodeBlockTabsList>

        <CodeBlockTab value="objc">
          \`\`\`objc
          [agoraKit muteLocalAudioStream:YES];
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="swift">
          \`\`\`swift
          // Stop publishing the local audio stream
          agoraKit.muteLocalAudioStream(true)

          // Resume publishing the local audio stream
          agoraKit.muteLocalAudioStream(false)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    * To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

      <CodeBlockTabs defaultValue="objc">
        <CodeBlockTabsList>
          <CodeBlockTabsTrigger value="objc">
            Objective-C
          </CodeBlockTabsTrigger>

          <CodeBlockTabsTrigger value="swift">
            Swift
          </CodeBlockTabsTrigger>
        </CodeBlockTabsList>

        <CodeBlockTab value="objc">
          \`\`\`objc
          [agoraKit muteRemoteAudioStream:remoteUid mute:YES];
          \`\`\`
        </CodeBlockTab>

        <CodeBlockTab value="swift">
          \`\`\`swift
          // Stop subscribing to the audio stream of the remote user
          agoraKit.muteRemoteAudioStream(remoteUid, mute: true)

          // Resume subscribing to the audio stream of the remote user
          agoraKit.muteRemoteAudioStream(remoteUid, mute: false)
          \`\`\`
        </CodeBlockTab>
      </CodeBlockTabs>

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-4]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Set the volume of all remote users played locally
        [agoraKit adjustPlaybackSignalVolume: 50];
        // Set the local playback volume for a specific remote user.
        [agoraKit adjustUserPlaybackSignalVolume: uid, volume: 50];
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Set the volume of all remote users played locally
        agoraKit.adjustPlaybackSignalVolume(50)
        // Set the local playback volume for a specific remote user
        agoraKit.adjustUserPlaybackSignalVolume(uid, volume: 50)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Adjust the in-ear monitoring volume [#adjust-the-in-ear-monitoring-volume-2]

    During the process of audio capture, mixing, and playback, Agora enables you to adjust the volume of in-ear monitoring. Enable and set the in-ear monitoring through \`enableInEarMonitoring\` and \`setInEarMonitoringVolume\`.

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Enable in-ear monitoring
        [agoraKit enableInEarMonitoring:true];
        // Adjust in-ear monitoring volume
        [agoraKit setInEarMonitoringVolume:50];
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Enable in-ear monitoring
        agoraKit.enableInEarMonitoring(true)
        // Adjust in-ear monitoring volume
        agoraKit.setInEarMonitoringVolume(50)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    ### Adjust the recording volume [#adjust-the-recording-volume-4]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Adjust the recording signal volume
        [agoraKit adjustRecordingSignalVolume: 50];
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Adjust the recording signal volume
        agoraKit.adjustRecordingSignalVolume(50)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-4]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use \`reportAudioVolumeIndicationOfSpeakers\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    <CodeBlockTabs defaultValue="objc">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="objc">
          Objective-C
        </CodeBlockTabsTrigger>

        <CodeBlockTabsTrigger value="swift">
          Swift
        </CodeBlockTabsTrigger>
      </CodeBlockTabsList>

      <CodeBlockTab value="objc">
        \`\`\`objc
        // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
        // their respective volumes, and determine whether the local user is speaking.
        - (void)rtcEngine:(AgoraRtcEngineKit *_Nonnull)engine
        reportAudioVolumeIndicationOfSpeakers:(NSArray<AgoraRtcAudioVolumeInfo *> *_Nonnull)speakers
                                      totalVolume:(NSInteger)totalVolume {
        }
        \`\`\`
      </CodeBlockTab>

      <CodeBlockTab value="swift">
        \`\`\`swift
        // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
        // their respective volumes, and determine whether the local user is speaking.
        func rtcEngine(
            _ engine: AgoraRtcEngineKit,
            reportAudioVolumeIndicationOfSpeakers speakers: [AgoraRtcAudioVolumeInfo],
            totalVolume: Int
        ) {
        }

        // Enable the reportAudioVolumeIndicationOfSpeakers callback
        agoraKit.enableAudioVolumeIndication(200, smooth: 3, reportVad: true)
        \`\`\`
      </CodeBlockTab>
    </CodeBlockTabs>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Adjust the capture volume of remote audio [#adjust-the-capture-volume-of-remote-audio]

    To set the volume, mute, or unmute a remote user, call \`setVolume\` on the remote audio track:

    \`\`\`typescript
    // Mute remote audio
    const muteRemoteAudio = (audioTrack: IRemoteAudioTrack | null) => {
      if (!audioTrack) return;
      audioTrack.setVolume(0);
    };

    // Unmute remote audio
    const unmuteRemoteAudio = (audioTrack: IRemoteAudioTrack | null) => {
      if (!audioTrack) return;
      audioTrack.setVolume(100);  // Set to a reasonable volume level
    };
    \`\`\`

    ### Adjust the capture volume of local audio [#adjust-the-capture-volume-of-local-audio]

    To set the capture volume, mute, or unmute the local user, call \`setVolume\` on the local audio track:

    \`\`\`typescript
    // Mute local audio
    const muteLocalAudio = (audioTrack: IMicrophoneAudioTrack | null) => {
      if (!audioTrack) return;
      audioTrack.setVolume(0);
    };

    // Unmute local audio
    const unmuteLocalAudio = (audioTrack: IMicrophoneAudioTrack | null) => {
      if (!audioTrack) return;
      audioTrack.setVolume(100);  // Set the volume to a reasonable volume level
    };
    \`\`\`

    The following example demonstrates how to mute and unmute local and remote users using \`useLocalMicrophoneTrack\` and \`useRemoteUsers\`.

    \`\`\`typescript
    const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
    const remoteUsers = useRemoteUsers();

    return (
        <>
            <div>
                <button
                    onClick={() => muteLocalAudio(localMicrophoneTrack)}
                >
                    Mute local user
                </button>
                <button
                    onClick={() => unmuteLocalAudio(localMicrophoneTrack)}
                >
                    Unmute local user
                </button>
                <button
                    onClick={() => muteRemoteAudio(remoteUsers[0].audioTrack || null)}
                >
                    Mute remote user
                </button>
                <button
                    onClick={() => unmuteRemoteAudio(remoteUsers[0].audioTrack || null)}
                >
                    Unmute remote user
                </button>
            </div>
        </>
    );
    \`\`\`

    ### Get volume information of users [#get-volume-information-of-users-5]

    The RTC SDK provides the ability to monitor the volume level of users using the \`useVolumeLevel\` hook. To get the audio volume level, pass the respective audio track (local or remote) to the hook:

    \`\`\`typescript
    // Component to track and display the local user's audio volume level
    const AudioVolumeTracker = ({ audioTrack }: { audioTrack?: IMicrophoneAudioTrack }) => {
      const volumeLevel = useVolumeLevel(audioTrack);

      return (
        <div>
          <label>Current Volume Level: {volumeLevel}</label>
        </div>
      );
    };

    // Component to track and display the remote user's audio volume level
    const RemoteAudioVolumeTracker = ({ audioTrack }: { audioTrack?: IRemoteAudioTrack }) => {
      const volumeLevel = useVolumeLevel(audioTrack);

      return (
        <div>
          <label>Remote User's Volume Level: {volumeLevel}</label>
        </div>
      );
    };
    \`\`\`

    How to use:

    \`\`\`typescript
    const { localMicrophoneTrack } = useLocalMicrophoneTrack();

    // Display the volume level of the local user
    <AudioVolumeTracker audioTrack={localMicrophoneTrack} />;

    const remoteUsers = useRemoteUsers();

    // Display the volume level of the first remote user
    <RemoteAudioVolumeTracker audioTrack={remoteUsers[0]?.audioTrack} />;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-5]

    To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

    \`\`\`typescript
    // Stop publishing the local audio stream
    engine.muteLocalAudioStream(true);

    // Resume publishing the local audio stream
    engine.muteLocalAudioStream(false);
    \`\`\`

    To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

    \`\`\`typescript
    // Stop subscribing to the audio stream of the remote user
    engine.muteRemoteAudioStream(remoteUid, true);

    // Resume subscribing to the audio stream of the remote user
    engine.muteRemoteAudioStream(remoteUid, false);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-5]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    \`\`\`typescript
    // Set the local playback volume to 50 for all remote users
    engine.adjustPlaybackSignalVolume(50);
    // Set the local playback volume for a specific remote user. For example, user with uid 12
    engine.adjustUserPlaybackSignalVolume(12, 50);
    \`\`\`

    ### Adjust the recording volume [#adjust-the-recording-volume-5]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    \`\`\`typescript
    // Adjust the recording signal volume to 50
    engine.adjustRecordingSignalVolume(50);
    \`\`\`

    When configuring audio settings, it's essential to understand the default behavior and options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-6]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the \`onAudioVolumeIndication\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`typescript
    // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
    // their respective volumes, and determine whether the local user is speaking.
    onAudioVolumeIndication?(
        connection: RtcConnection,
        speakers: AudioVolumeInfo[],
        speakerNumber: number,
        totalVolume: number
      ): void;
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-6]

    To mute or unmute the local audio stream, call \`MuteLocalAudioStream\`:

    \`\`\`csharp
    // Stop publishing the local audio stream
    RtcEngine.MuteLocalAudioStream(true);

    // Resume publishing the local audio stream
    RtcEngine.MuteLocalAudioStream(false);
    \`\`\`

    To mute or unmute a remote user, call \`MuteRemoteAudioStream\` with the \`uid\` of the remote user:

    \`\`\`csharp
    // Stop subscribing to the audio stream of the remote user
    RtcEngine.MuteRemoteAudioStream(remoteUid, true);

    // Resume subscribing to the audio stream of the remote user
    RtcEngine.MuteRemoteAudioStream(remoteUid, false);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-6]

    Call \`AdjustPlaybackSignalVolume\` or \`AdjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    \`\`\`csharp
    // Set the volume for all remote users' playback locally to 50
    RtcEngine.AdjustPlaybackSignalVolume(50);

    // Set the playback volume for the remote user with the uid of 12 locally to 50
    RtcEngine.AdjustUserPlaybackSignalVolume(12, 50);
    \`\`\`

    ### Adjust the recording volume [#adjust-the-recording-volume-6]

    Call \`AdjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    \`\`\`csharp
    // Adjust the recording signal volume to 50
    RtcEngine.AdjustRecordingSignalVolume(50);
    \`\`\`

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-7]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the \`OnAudioVolumeIndication\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`EnableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    \`\`\`csharp
    RtcEngine = Agora.Rtc.RtcEngine.CreateAgoraRtcEngine();
    UserEventHandler handler = new UserEventHandler(this);
    RtcEngineContext context = new RtcEngineContext(
        _appID,
        0,
        CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,
        AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT
    );
    RtcEngine.Initialize(context);

    // Set up listener callback
    RtcEngine.InitEventHandler(handler);

    // Enable volume indication
    RtcEngine.EnableAudioVolumeIndication(1, 1, true);

    class UserEventHandler : IRtcEngineEventHandler
    {
        // This callback is triggered at the interval set in EnableAudioVolumeIndication and reports the three users with the highest instant volume in the channel
        public override void OnAudioVolumeIndication(
            RtcConnection connection,
            AudioVolumeInfo[] speakers,
            uint speakerNumber,
            int totalVolume
        ) { }
    }
    \`\`\`

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-7]

    To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

    \`\`\`cpp
    // Stop publishing the local audio stream
    m_rtcEngine->muteLocalAudioStream(true);

    // Resume publishing the local audio stream
    m_rtcEngine->muteLocalAudioStream(false);
    \`\`\`

    To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

    \`\`\`cpp
    // Stop subscribing to the audio stream of the remote user
    m_rtcEngine->muteRemoteAudioStream(remoteUid, true);

    // Resume subscribing to the audio stream of the remote user
    m_rtcEngine->muteRemoteAudioStream(remoteUid, false);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-7]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    \`\`\`cpp
    int volume = 50;
    int uid = 123456;
    // Set the local playback volume for all remote users
    m_rtcEngine->adjustPlaybackSignalVolume(volume);
    // Set the local playback volume for a specific remote user. For example, user 123456
    m_rtcEngine->adjustUserPlaybackSignalVolume(uid, volume)
    \`\`\`

    ### Adjust the recording volume [#adjust-the-recording-volume-7]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    \`\`\`cpp
    // Adjust the recording signal volume to 50
    int vol = 50;
    m_rtcEngine->adjustRecordingSignalVolume(vol);
    \`\`\`

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-8]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the \`onAudioVolumeIndication\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    \`\`\`cpp
    // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
    // their respective volumes, and determine whether the local user is speaking.
    void CAudioVolumeEventHandler::onAudioVolumeIndication(const AudioVolumeInfo* speakers, unsigned int speakerNumber, int totalVolume){
    }

    // Enable the onAudioVolumeIndication callback
    m_rtcEngine->enableAudioVolumeIndication(1000, 0, true);
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    ### Adjust playback volume [#adjust-playback-volume]

    This section shows you how to adjust the audio playback signal volume using \`AdjustPlaybackSignalVolume\`.

    1. Create UMG

       Create a **Slider** widget named **Slider\\_PlaybackSignalVolume** for users to drag the volume bar to adjust the playback volume. In this example, set the minimum value to \`0\` (mute) and the maximum value to \`100\` (original volume), as shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-1.png)

    2. Bind UI Events

       Create a **Bind Event to On Value Changed node** and connect it to the **Slider\\_PlaybackSignalVolume** widget and the **OnPlaybackSignalVolumeValChanged** callback. When users drag the volume bar to adjust the audio playback signal, the **OnPlaybackSignalVolumeValChanged** callback is triggered, as shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-2.png)

    3. Implement Callback Function

       Create **OnPlaybackSignalVolumeValChanged** callback function with the following parameters:

       | Input parameter | Data type | Parameter description |
       | --------------- | --------- | --------------------- |
       | \`value\`         | Float     | Playback Volume       |

       When this callback is triggered, the specified playback volume is obtained and assigned to the Volume parameter of **Adjust Playback Signal Volume**. The **AdjustPlaybackSignalVolume** method is called to adjust the playback volume, as shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-3.png)

    ### Adjust recording volume [#adjust-recording-volume]

    This section shows you how to adjust the audio recording signal volume using \`AdjustRecordingSignalVolume\`.

    1. Create UMG

       Create a **Slider** widget named **Slider\\_RecordingSignalVolume** to enable users to adjust the recording volume. For this example, set the minimum value to \`0\` (mute) and the maximum value to \`100\` (original volume), as shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-4.png)

    2. Bind UI Events

       Create a **Bind Event to On Value Changed node** and connect it to the **Slider\\_RecordingSignalVolume** widget and the **OnRecordingSignalVolumeValChanged** callback. When users drag the volume bar to adjust the audio recording signal, the **OnRecordingSignalVolumeValChanged** callback is triggered, as shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-5.png)

    3. Implement UI Events

       Create the **OnRecordingSignalVolumeValChanged** callback function with the following parameters:

       | Input parameter | Data type | Parameter description |
       | --------------- | --------- | --------------------- |
       | \`value\`         | Float     | Recording Volume      |

       When the callback is triggered, the specified recording volume is obtained and assigned to the Volume parameter of **Adjust Recording Signal Volume**. The **AdjustRecordingSignalVolume** method is called to adjust the recording volume, as shown in the following figure:
       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-6.png)

       When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

       * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
       * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
       * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
       * The volume of the recording device directly influences the global volume of the device.
       * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-9]

    Throughout the process of audio recording, mixing, and playback, you can obtain the user IDs and volumes of the three users with the highest instant volumes in the channel using the \`FOnAudioVolumeIndication\` callback. A returned \`uid\` of \`0\` represents the local user. You need to call the \`EnableAudioVolumeIndication\` method to activate the voice detection function to receive this callback.

    1. Create UMG

       Create a **Button** widget named **Btn\\_EnableAudioIndication** for users to control whether to enable the volume indication. As shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-7.png)

    2. Bind UI Events

       Create a **Bind Event to On Clicked node** and connect it to the **Btn\\_EnableAudioIndication** widget and the **OnVolumeIndicationClick** callback. When users press the button to enable the volume indication, the **OnVolumeIndicationClick** callback is triggered, as shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-8.png)

    3. Implement UI Events

       Create the **OnVolumeIndicationClick** callback function. When this callback is triggered, the **Enable Audio Volume Indication** method is called to enable volume indication. In this example, set the volume indication **Interval** to 200 milliseconds, the smoothing factor **Smooth** to 3, and check **Report Vad** to activate the voice detection function, as shown in the following figure:

       ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-9.png)

    4. Add Callback Event

       1. Create the **OnAudioVolumeIndication** callback function with the following parameters:

          | Input parameter | Data type | Parameter description                                                                                                                                                                                                         |
          | --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
          | \`speaker\`       | Float     | Structure Volume information of users, see [FAudioVolumeInfo](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication) for details. |
          | \`totalVolume\`   | Integer   | The total volume after mixing                                                                                                                                                                                                 |

       2. Enable listening to the **OnAudioVolumeIndication** callback, as shown in the following figure:

          ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-10.png)

       3. When the **OnAudioVolumeIndication** callback is triggered, print the received user volume information, as shown in the following figure:

          ![VolumeControlMute](https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-11.png)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    Use one or more of the following volume control methods to adjust volume settings.

    The Agora SDK provides a \`setVolume\` method for both local and remote audio track objects to adjust the volume of local audio capture and remote audio playback.

    ### Mute the local audio stream [#mute-the-local-audio-stream]

    To mute or unmute the local audio track, call \`setMuted\` or \`setEnabled\`:

    \`\`\`js
    // Mute the local audio stream
    localAudioTrack.setMuted(true);

    // Unmute the local audio stream
    localAudioTrack.setMuted(false);
    \`\`\`

    ### Adjust the playback volume of remote audio [#adjust-the-playback-volume-of-remote-audio]

    In this example, \`remoteUser\` refers to a subscribed remote user object.

    \`\`\`javascript
    // Reduce the volume by half
    remoteUser.audioTrack.setVolume(50);
    // Use the original volume
    remoteUser.audioTrack.setVolume(100);
    // To mute remote users without unsubscribing, set the remote volume to 0
    remoteUser.audioTrack.setVolume(0);
    \`\`\`

    ### Adjust the capture volume of local audio [#adjust-the-capture-volume-of-local-audio-1]

    In this example, \`localAudioTrack\` is the local audio track object you created.

    \`\`\`javascript
    AgoraRTC.createMicrophoneAudioTrack().then(localAudioTrack => {
      // Reduce microphone volume by half
      localAudioTrack.setVolume(50);
      // Double the microphone volume
      localAudioTrack.setVolume(200);
      // Set the microphone volume to 0
      localAudioTrack.setVolume(0);
    });
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Caution
      </CalloutTitle>

      <CalloutDescription>
        If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    Use one or more of the following volume control methods to adjust volume settings.

    ### Mute and unmute users [#mute-and-unmute-users-8]

    To mute or unmute the local audio stream, call \`muteLocalAudioStream\`:

    \`\`\`cpp
    // Stop publishing the local audio stream
    m_rtcEngine->muteLocalAudioStream(true);

    // Resume publishing the local audio stream
    m_rtcEngine->muteLocalAudioStream(false);
    \`\`\`

    To mute or unmute a remote user, call \`muteRemoteAudioStream\` with the \`uid\` of the remote user:

    \`\`\`cpp
    // Stop subscribing to the audio stream of the remote user
    m_rtcEngine->muteRemoteAudioStream(remoteUid, true);

    // Resume subscribing to the audio stream of the remote user
    m_rtcEngine->muteRemoteAudioStream(remoteUid, false);
    \`\`\`

    <CalloutContainer type="info">
      <CalloutDescription>
        To mute remote users without unsubscribing, set their [playback volume](#adjust-the-playback-volume) to \`0\`.
      </CalloutDescription>
    </CalloutContainer>

    ### Adjust the playback volume [#adjust-the-playback-volume-8]

    Call \`adjustPlaybackSignalVolume\` or \`adjustUserPlaybackSignalVolume\` to adjust the volume of the audio playback signal.

    \`\`\`cpp
    int volume = 50;
    int uid = 123456;
    // Set the local playback volume for all remote users
    m_rtcEngine->adjustPlaybackSignalVolume(volume);
    // Set the local playback volume for a specific remote user. For example, user 123456
    m_rtcEngine->adjustUserPlaybackSignalVolume(uid, volume)
    \`\`\`

    ### Adjust the recording volume [#adjust-the-recording-volume-8]

    Call \`adjustRecordingSignalVolume\` to adjust the volume of the audio recording signal.

    \`\`\`cpp
    // Adjust the recording signal volume to 50
    int vol = 50;
    m_rtcEngine->adjustRecordingSignalVolume(vol);
    \`\`\`

    When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:

    * The SDK defaults to a device volume of \`85\` when using the recording device to capture audio signals.
    * A volume of \`0\` means mute, and a volume of \`255\` represents the maximum volume of the device.
    * If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device.
    * The volume of the recording device directly influences the global volume of the device.
    * If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card.

    ### Get volume information of users [#get-volume-information-of-users-10]

    RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the \`onAudioVolumeIndication\` callback to obtain this information. A returned \`uid\` of \`0\` in the callback indicates the local user.

    \`\`\`cpp
    // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,
    // their respective volumes, and determine whether the local user is speaking.
    void CAudioVolumeEventHandler::onAudioVolumeIndication(const AudioVolumeInfo* speakers, unsigned int speakerNumber, int totalVolume){
    }

    // Enable the onAudioVolumeIndication callback
    m_rtcEngine->enableAudioVolumeIndication(1000, 0, true);
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutTitle>
        Note
      </CalloutTitle>

      <CalloutDescription>
        Call \`enableAudioVolumeIndication\` to enable reporting of the users' volume in the callback.
      </CalloutDescription>
    </CalloutContainer>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;electron&#x22;,&#x22;flutter&#x22;,&#x22;ios&#x22;,&#x22;macos&#x22;,&#x22;javascript&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;,&#x22;unreal&#x22;,&#x22;blueprint&#x22;,&#x22;web&#x22;,&#x22;windows&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    ### API reference [#api-reference]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`enableInEarMonitoring\` \\[2/2\\]](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableinearmonitoring2)
    * [\`setInEarMonitoringVolume\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setinearmonitoringvolume)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    ### Sample projects [#sample-projects]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference.

    * GitHub: [JoinChannelAudio](https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/basic/JoinChannelAudio.java)

    ### Frequently asked questions [#frequently-asked-questions]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="electron">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="electron" />

    ### API reference [#api-reference-1]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    ### Sample projects [#sample-projects-1]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:

    * GitHub: [JoinChannelAudio](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx)

    For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:

    * GitHub: [AudioMixing](https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/AudioMixing/AudioMixing.tsx)

    ### Frequently asked questions [#frequently-asked-questions-1]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="flutter">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="flutter" />

    ### API reference [#api-reference-2]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    ### Sample projects [#sample-projects-2]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:

    * GitHub: [join\\_channel\\_audio.dart](https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK/blob/main/example/lib/examples/basic/join_channel_audio/join_channel_audio.dart)

    For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:

    * GitHub: [audio\\_mixing.dart](https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK/blob/main/example/lib/examples/advanced/audio_mixing/audio_mixing.dart)

    ### Frequently asked questions [#frequently-asked-questions-2]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    ### API reference [#api-reference-3]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustrecordingsignalvolume\\(_:\\))
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustplaybacksignalvolume\\(_:\\))
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustuserplaybacksignalvolumeex\\(_\\:volume\\:connection:\\))
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume\\(_:\\))
    * [\`enableInEarMonitoring\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enable\\(inearmonitoring\\:includeaudiofilters:\\))
    * [\`setInEarMonitoringVolume\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setinearmonitoringvolume\\(_:\\))
    * [\`enableaudiovolumeindication\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication\\(_\\:smooth\\:reportvad:\\))
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoraspatialaudiokitbase/mutelocalaudiostream\\(_:\\))
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostream\\(_\\:mute:\\))

    ### Sample projects [#sample-projects-3]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:

    * GitHub: [JoinChannelAudio](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Basic/JoinChannelAudio)

    For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:

    * GitHub: [AudioMixing](https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/AudioMixing)

    ### Frequently asked questions [#frequently-asked-questions-3]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="macos">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="macos" />

    ### API reference [#api-reference-4]

    * [\`setdevicevolume\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdevicevolume\\(_\\:volume:\\))
    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustrecordingsignalvolume\\(_:\\))
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustplaybacksignalvolume\\(_:\\))
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustuserplaybacksignalvolumeex\\(_\\:volume\\:connection:\\))
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume\\(_:\\))
    * [\`enableaudiovolumeindication\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication\\(_\\:smooth\\:reportvad:\\))
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoraspatialaudiokitbase/mutelocalaudiostream\\(_:\\))
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostream\\(_\\:mute:\\))

    ### Sample projects [#sample-projects-4]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:

    * GitHub: [JoinChannelAudio](https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Basic/JoinChannelAudio/JoinChannelAudio.swift)

    For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:

    * GitHub: [AudioMixing](https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/AudioMixing)

    ### Frequently asked questions [#frequently-asked-questions-4]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="javascript">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="javascript" />

    ### API reference [#api-reference-5]

    * [\`IMicrophoneAudioTrack\`](https://api-ref.agora.io/en/video-sdk/reactjs/2.x/interfaces/IMicrophoneAudioTrack.html)
    * [\`IRemoteAudioTrack\`](https://api-ref.agora.io/en/video-sdk/reactjs/2.x/interfaces/IRemoteAudioTrack.html)
    * [\`setVolume\`](https://api-ref.agora.io/en/video-sdk/reactjs/2.x/interfaces/IMicrophoneAudioTrack.html#setVolume.setVolume-1)
    * [\`useVolumeLevel\`](https://api-ref.agora.io/en/video-sdk/reactjs/2.x/functions/useVolumeLevel.html)

    ### Sample projects [#sample-projects-5]

    Agora offers the following open-source sample project for monitoring audio volume for your reference.

    * GitHub: [useVolumeLevel](https://github.com/AgoraIO-Extensions/agora-rtc-react/blob/main/packages/agora-rtc-react/test/hook/useVolumeLevel.test.ts)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    ### API reference [#api-reference-6]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    ### Sample projects [#sample-projects-6]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:

    * GitHub: [JoinChannelAudio](https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx)

    For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:

    * GitHub: [AudioMixing](https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/AudioMixing/AudioMixing.tsx)

    ### Frequently asked questions [#frequently-asked-questions-5]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    ### API reference [#api-reference-7]

    * [\`AdjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`AdjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`AdjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`AdjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`OnAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`MuteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream)
    * [\`MuteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    ### Sample projects [#sample-projects-7]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:

    * GitHub: [AudioMixing](https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/tree/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/AudioMixing)

    ### Frequently asked questions [#frequently-asked-questions-6]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unreal">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unreal" />

    ### API reference [#api-reference-8]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    ### Sample project [#sample-project]

    Agora provides an open source sample project for your reference. Download or view the [SDK API-Example](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example) source code for a more detailed example.

    ### Frequently asked questions [#frequently-asked-questions-7]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="blueprint">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="blueprint" />

    ### Sample projects [#sample-projects-8]

    Agora provides an open-source [Blueprint sample project](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example) on GitHub for your reference.
    To learn how to implement call volume adjustment, refer to [JoinChannelAudio](https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic/JoinChannelAudio) in the sample project.

    ### Frequently asked questions [#frequently-asked-questions-8]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    ### API reference [#api-reference-9]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`FOnAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    ### API reference [#api-reference-10]

    * [\`ILocalAudioTrack.setVolume\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html#setvolume)
    * [\`IRemoteAudioTrack.setVolume\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iremoteaudiotrack.html#setvolume)
    * [\`ILocalAudioTrack.setMuted\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html#setmuted)
    * [\`ILocalAudioTrack.setEnabled\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html#setenabled)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="windows">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="windows" />

    ### API reference [#api-reference-11]

    * [\`adjustRecordingSignalVolume\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume)
    * [\`adjustPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume)
    * [\`adjustUserPlaybackSignalVolume\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume)
    * [\`adjustAudioMixingPlayoutVolume\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume)
    * [\`onAudioVolumeIndication\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication)
    * [\`muteLocalAudioStream\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream)
    * [\`muteRemoteAudioStream\`](https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream)

    ### Sample projects [#sample-projects-9]

    Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:

    * GitHub: [AudioVolume](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioVolume)

    For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:

    * GitHub: [AudioMixing](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioMixing) or [AudioEffect](https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioEffect)

    ### Frequently asked questions [#frequently-asked-questions-9]

    * [How can I solve the problem of low volume?](/en/api-reference/faq/quality/audio_low)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>

### See also [#see-also]

* [Custom audio source](/en/realtime-media/rtc/build/customize-audio-processing/custom-audio)
* [Custom video source](/en/realtime-media/rtc/build/capture-and-render-video/custom-video)
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This page shows you how to configure volume settings for audio recording, audio playback, and for the playback of music files."
  }, {
    heading: "understand-the-tech",
    content: "Agora RTC SDK supports adjusting the audio volume for both recording and playback to meet practical application use-cases. For example, during a two-person call, you can mute a remote user by adjusting the playback volume setting to 0."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**In-ear monitoring** refers to the process of playing audio captured by a device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**In-ear monitoring** refers to the process of playing audio captured by a device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "understand-the-tech",
    content: "The figure below shows the workflow of adjusting the volume."
  }, {
    heading: "understand-the-tech",
    content: "**Playback** refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."
  }, {
    heading: "understand-the-tech",
    content: "**Recording** refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."
  }, {
    heading: "understand-the-tech",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "prerequisites",
    content: "Ensure that you have implemented the SDK quickstart in your project."
  }, {
    heading: "implement-volume-control",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-in-ear-monitoring-volume",
    content: "During the process of audio capture, mixing, and playback, Agora enables you to adjust the in-ear monitoring volume. Enable and set the volume using `enableInEarMonitoring` and `setInEarMonitoringVolume`."
  }, {
    heading: "adjust-the-recording-volume",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the `onAudioVolumeIndication` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "get-volume-information-of-users",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-1",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-1",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-1",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-1",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-recording-volume-1",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-1",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-1",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-1",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-1",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-1",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-1",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-1",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the `onAudioVolumeIndication` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-1",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "get-volume-information-of-users-1",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-2",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-2",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-2",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-2",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-recording-volume-2",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-2",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-2",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-2",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-2",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-2",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-2",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-2",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the `onAudioVolumeIndication` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-2",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "get-volume-information-of-users-2",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-3",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-3",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-3",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-3",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-in-ear-monitoring-volume-1",
    content: "During the process of audio capture, mixing, and playback, Agora enables you to adjust the volume of in-ear monitoring. Enable and set the in-ear monitoring through `enableInEarMonitoring` and `setInEarMonitoringVolume`."
  }, {
    heading: "adjust-the-recording-volume-3",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-3",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-3",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-3",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-3",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-3",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-3",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-3",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use `reportAudioVolumeIndicationOfSpeakers` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-3",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "get-volume-information-of-users-3",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-4",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-4",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-4",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-4",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-in-ear-monitoring-volume-2",
    content: "During the process of audio capture, mixing, and playback, Agora enables you to adjust the volume of in-ear monitoring. Enable and set the in-ear monitoring through `enableInEarMonitoring` and `setInEarMonitoringVolume`."
  }, {
    heading: "adjust-the-recording-volume-4",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-4",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-4",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-4",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-4",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-4",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-4",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-4",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use `reportAudioVolumeIndicationOfSpeakers` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-4",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "get-volume-information-of-users-4",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "adjust-the-capture-volume-of-remote-audio",
    content: "To set the volume, mute, or unmute a remote user, call `setVolume` on the remote audio track:"
  }, {
    heading: "adjust-the-capture-volume-of-local-audio",
    content: "To set the capture volume, mute, or unmute the local user, call `setVolume` on the local audio track:"
  }, {
    heading: "adjust-the-capture-volume-of-local-audio",
    content: "The following example demonstrates how to mute and unmute local and remote users using `useLocalMicrophoneTrack` and `useRemoteUsers`."
  }, {
    heading: "get-volume-information-of-users-5",
    content: "The RTC SDK provides the ability to monitor the volume level of users using the `useVolumeLevel` hook. To get the audio volume level, pass the respective audio track (local or remote) to the hook:"
  }, {
    heading: "get-volume-information-of-users-5",
    content: "How to use:"
  }, {
    heading: "get-volume-information-of-users-5",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-5",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-5",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-5",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-5",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-recording-volume-5",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-5",
    content: "When configuring audio settings, it's essential to understand the default behavior and options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-5",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-5",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-5",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-5",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-5",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-6",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the `onAudioVolumeIndication` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-6",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "get-volume-information-of-users-6",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-6",
    content: "To mute or unmute the local audio stream, call `MuteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-6",
    content: "To mute or unmute a remote user, call `MuteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-6",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-6",
    content: "Call `AdjustPlaybackSignalVolume` or `AdjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-recording-volume-6",
    content: "Call `AdjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-6",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-6",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-6",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-6",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-6",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-6",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-7",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the `OnAudioVolumeIndication` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-7",
    content: "Call `EnableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "get-volume-information-of-users-7",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-7",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-7",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-7",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-7",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-recording-volume-7",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-7",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-7",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-7",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-7",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-7",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-7",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-8",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the `onAudioVolumeIndication` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-8",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "adjust-playback-volume",
    content: "This section shows you how to adjust the audio playback signal volume using `AdjustPlaybackSignalVolume`."
  }, {
    heading: "adjust-playback-volume",
    content: "Create UMG"
  }, {
    heading: "adjust-playback-volume",
    content: "Create a **Slider** widget named **Slider\\_PlaybackSignalVolume** for users to drag the volume bar to adjust the playback volume. In this example, set the minimum value to `0` (mute) and the maximum value to `100` (original volume), as shown in the following figure:"
  }, {
    heading: "adjust-playback-volume",
    content: "Bind UI Events"
  }, {
    heading: "adjust-playback-volume",
    content: "Create a **Bind Event to On Value Changed node** and connect it to the **Slider\\_PlaybackSignalVolume** widget and the **OnPlaybackSignalVolumeValChanged** callback. When users drag the volume bar to adjust the audio playback signal, the **OnPlaybackSignalVolumeValChanged** callback is triggered, as shown in the following figure:"
  }, {
    heading: "adjust-playback-volume",
    content: "Implement Callback Function"
  }, {
    heading: "adjust-playback-volume",
    content: "Create **OnPlaybackSignalVolumeValChanged** callback function with the following parameters:"
  }, {
    heading: "adjust-playback-volume",
    content: "Input parameter"
  }, {
    heading: "adjust-playback-volume",
    content: "Data type"
  }, {
    heading: "adjust-playback-volume",
    content: "Parameter description"
  }, {
    heading: "adjust-playback-volume",
    content: "`value`"
  }, {
    heading: "adjust-playback-volume",
    content: "Float"
  }, {
    heading: "adjust-playback-volume",
    content: "Playback Volume"
  }, {
    heading: "adjust-playback-volume",
    content: "When this callback is triggered, the specified playback volume is obtained and assigned to the Volume parameter of **Adjust Playback Signal Volume**. The **AdjustPlaybackSignalVolume** method is called to adjust the playback volume, as shown in the following figure:"
  }, {
    heading: "adjust-recording-volume",
    content: "This section shows you how to adjust the audio recording signal volume using `AdjustRecordingSignalVolume`."
  }, {
    heading: "adjust-recording-volume",
    content: "Create UMG"
  }, {
    heading: "adjust-recording-volume",
    content: "Create a **Slider** widget named **Slider\\_RecordingSignalVolume** to enable users to adjust the recording volume. For this example, set the minimum value to `0` (mute) and the maximum value to `100` (original volume), as shown in the following figure:"
  }, {
    heading: "adjust-recording-volume",
    content: "Bind UI Events"
  }, {
    heading: "adjust-recording-volume",
    content: "Create a **Bind Event to On Value Changed node** and connect it to the **Slider\\_RecordingSignalVolume** widget and the **OnRecordingSignalVolumeValChanged** callback. When users drag the volume bar to adjust the audio recording signal, the **OnRecordingSignalVolumeValChanged** callback is triggered, as shown in the following figure:"
  }, {
    heading: "adjust-recording-volume",
    content: "Implement UI Events"
  }, {
    heading: "adjust-recording-volume",
    content: "Create the **OnRecordingSignalVolumeValChanged** callback function with the following parameters:"
  }, {
    heading: "adjust-recording-volume",
    content: "Input parameter"
  }, {
    heading: "adjust-recording-volume",
    content: "Data type"
  }, {
    heading: "adjust-recording-volume",
    content: "Parameter description"
  }, {
    heading: "adjust-recording-volume",
    content: "`value`"
  }, {
    heading: "adjust-recording-volume",
    content: "Float"
  }, {
    heading: "adjust-recording-volume",
    content: "Recording Volume"
  }, {
    heading: "adjust-recording-volume",
    content: "When the callback is triggered, the specified recording volume is obtained and assigned to the Volume parameter of **Adjust Recording Signal Volume**. The **AdjustRecordingSignalVolume** method is called to adjust the recording volume, as shown in the following figure:"
  }, {
    heading: "adjust-recording-volume",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-recording-volume",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-recording-volume",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-recording-volume",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-recording-volume",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-recording-volume",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Throughout the process of audio recording, mixing, and playback, you can obtain the user IDs and volumes of the three users with the highest instant volumes in the channel using the `FOnAudioVolumeIndication` callback. A returned `uid` of `0` represents the local user. You need to call the `EnableAudioVolumeIndication` method to activate the voice detection function to receive this callback."
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Create UMG"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Create a **Button** widget named **Btn\\_EnableAudioIndication** for users to control whether to enable the volume indication. As shown in the following figure:"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Bind UI Events"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Create a **Bind Event to On Clicked node** and connect it to the **Btn\\_EnableAudioIndication** widget and the **OnVolumeIndicationClick** callback. When users press the button to enable the volume indication, the **OnVolumeIndicationClick** callback is triggered, as shown in the following figure:"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Implement UI Events"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Create the **OnVolumeIndicationClick** callback function. When this callback is triggered, the **Enable Audio Volume Indication** method is called to enable volume indication. In this example, set the volume indication **Interval** to 200 milliseconds, the smoothing factor **Smooth** to 3, and check **Report Vad** to activate the voice detection function, as shown in the following figure:"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Add Callback Event"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Create the **OnAudioVolumeIndication** callback function with the following parameters:"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Input parameter"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Data type"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Parameter description"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "`speaker`"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Float"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Structure Volume information of users, see FAudioVolumeInfo for details."
  }, {
    heading: "get-volume-information-of-users-9",
    content: "`totalVolume`"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Integer"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "The total volume after mixing"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Enable listening to the **OnAudioVolumeIndication** callback, as shown in the following figure:"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "When the **OnAudioVolumeIndication** callback is triggered, print the received user volume information, as shown in the following figure:"
  }, {
    heading: "get-volume-information-of-users-9",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "get-volume-information-of-users-9",
    content: "The Agora SDK provides a `setVolume` method for both local and remote audio track objects to adjust the volume of local audio capture and remote audio playback."
  }, {
    heading: "mute-the-local-audio-stream",
    content: "To mute or unmute the local audio track, call `setMuted` or `setEnabled`:"
  }, {
    heading: "adjust-the-playback-volume-of-remote-audio",
    content: "In this example, `remoteUser` refers to a subscribed remote user object."
  }, {
    heading: "adjust-the-capture-volume-of-local-audio-1",
    content: "In this example, `localAudioTrack` is the local audio track object you created."
  }, {
    heading: "adjust-the-capture-volume-of-local-audio-1",
    content: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
  }, {
    heading: "adjust-the-capture-volume-of-local-audio-1",
    content: "Use one or more of the following volume control methods to adjust volume settings."
  }, {
    heading: "mute-and-unmute-users-8",
    content: "To mute or unmute the local audio stream, call `muteLocalAudioStream`:"
  }, {
    heading: "mute-and-unmute-users-8",
    content: "To mute or unmute a remote user, call `muteRemoteAudioStream` with the `uid` of the remote user:"
  }, {
    heading: "mute-and-unmute-users-8",
    content: "To mute remote users without unsubscribing, set their playback volume to `0`."
  }, {
    heading: "adjust-the-playback-volume-8",
    content: "Call `adjustPlaybackSignalVolume` or `adjustUserPlaybackSignalVolume` to adjust the volume of the audio playback signal."
  }, {
    heading: "adjust-the-recording-volume-8",
    content: "Call `adjustRecordingSignalVolume` to adjust the volume of the audio recording signal."
  }, {
    heading: "adjust-the-recording-volume-8",
    content: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
  }, {
    heading: "adjust-the-recording-volume-8",
    content: "The SDK defaults to a device volume of `85` when using the recording device to capture audio signals."
  }, {
    heading: "adjust-the-recording-volume-8",
    content: "A volume of `0` means mute, and a volume of `255` represents the maximum volume of the device."
  }, {
    heading: "adjust-the-recording-volume-8",
    content: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
  }, {
    heading: "adjust-the-recording-volume-8",
    content: "The volume of the recording device directly influences the global volume of the device."
  }, {
    heading: "adjust-the-recording-volume-8",
    content: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
  }, {
    heading: "get-volume-information-of-users-10",
    content: "RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the `onAudioVolumeIndication` callback to obtain this information. A returned `uid` of `0` in the callback indicates the local user."
  }, {
    heading: "get-volume-information-of-users-10",
    content: "Call `enableAudioVolumeIndication` to enable reporting of the users' volume in the callback."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference",
    content: "`enableInEarMonitoring` \\[2/2]"
  }, {
    heading: "api-reference",
    content: "`setInEarMonitoringVolume`"
  }, {
    heading: "api-reference",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-projects",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference."
  }, {
    heading: "sample-projects",
    content: "GitHub: JoinChannelAudio"
  }, {
    heading: "frequently-asked-questions",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-1",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-1",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-1",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-1",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-1",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-1",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference-1",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-projects-1",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
  }, {
    heading: "sample-projects-1",
    content: "GitHub: JoinChannelAudio"
  }, {
    heading: "sample-projects-1",
    content: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
  }, {
    heading: "sample-projects-1",
    content: "GitHub: AudioMixing"
  }, {
    heading: "frequently-asked-questions-1",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-2",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-2",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-2",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-2",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-2",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-2",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference-2",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-projects-2",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
  }, {
    heading: "sample-projects-2",
    content: "GitHub: join\\_channel\\_audio.dart"
  }, {
    heading: "sample-projects-2",
    content: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
  }, {
    heading: "sample-projects-2",
    content: "GitHub: audio\\_mixing.dart"
  }, {
    heading: "frequently-asked-questions-2",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-3",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-3",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-3",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-3",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-3",
    content: "`enableInEarMonitoring`"
  }, {
    heading: "api-reference-3",
    content: "`setInEarMonitoringVolume`"
  }, {
    heading: "api-reference-3",
    content: "`enableaudiovolumeindication`"
  }, {
    heading: "api-reference-3",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference-3",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-projects-3",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
  }, {
    heading: "sample-projects-3",
    content: "GitHub: JoinChannelAudio"
  }, {
    heading: "sample-projects-3",
    content: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
  }, {
    heading: "sample-projects-3",
    content: "GitHub: AudioMixing"
  }, {
    heading: "frequently-asked-questions-3",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-4",
    content: "`setdevicevolume`"
  }, {
    heading: "api-reference-4",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-4",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-4",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-4",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-4",
    content: "`enableaudiovolumeindication`"
  }, {
    heading: "api-reference-4",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference-4",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-projects-4",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
  }, {
    heading: "sample-projects-4",
    content: "GitHub: JoinChannelAudio"
  }, {
    heading: "sample-projects-4",
    content: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
  }, {
    heading: "sample-projects-4",
    content: "GitHub: AudioMixing"
  }, {
    heading: "frequently-asked-questions-4",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-5",
    content: "`IMicrophoneAudioTrack`"
  }, {
    heading: "api-reference-5",
    content: "`IRemoteAudioTrack`"
  }, {
    heading: "api-reference-5",
    content: "`setVolume`"
  }, {
    heading: "api-reference-5",
    content: "`useVolumeLevel`"
  }, {
    heading: "sample-projects-5",
    content: "Agora offers the following open-source sample project for monitoring audio volume for your reference."
  }, {
    heading: "sample-projects-5",
    content: "GitHub: useVolumeLevel"
  }, {
    heading: "api-reference-6",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-6",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-6",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-6",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-6",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-6",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference-6",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-projects-6",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
  }, {
    heading: "sample-projects-6",
    content: "GitHub: JoinChannelAudio"
  }, {
    heading: "sample-projects-6",
    content: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
  }, {
    heading: "sample-projects-6",
    content: "GitHub: AudioMixing"
  }, {
    heading: "frequently-asked-questions-5",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-7",
    content: "`AdjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-7",
    content: "`AdjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-7",
    content: "`AdjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-7",
    content: "`AdjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-7",
    content: "`OnAudioVolumeIndication`"
  }, {
    heading: "api-reference-7",
    content: "`MuteLocalAudioStream`"
  }, {
    heading: "api-reference-7",
    content: "`MuteRemoteAudioStream`"
  }, {
    heading: "sample-projects-7",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
  }, {
    heading: "sample-projects-7",
    content: "GitHub: AudioMixing"
  }, {
    heading: "frequently-asked-questions-6",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-8",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-8",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-8",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-8",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-8",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-8",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference-8",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-project",
    content: "Agora provides an open source sample project for your reference. Download or view the SDK API-Example source code for a more detailed example."
  }, {
    heading: "frequently-asked-questions-7",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "sample-projects-8",
    content: `Agora provides an open-source Blueprint sample project on GitHub for your reference.
To learn how to implement call volume adjustment, refer to JoinChannelAudio in the sample project.`
  }, {
    heading: "frequently-asked-questions-8",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "api-reference-9",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-9",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-9",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-9",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-9",
    content: "`FOnAudioVolumeIndication`"
  }, {
    heading: "api-reference-10",
    content: "`ILocalAudioTrack.setVolume`"
  }, {
    heading: "api-reference-10",
    content: "`IRemoteAudioTrack.setVolume`"
  }, {
    heading: "api-reference-10",
    content: "`ILocalAudioTrack.setMuted`"
  }, {
    heading: "api-reference-10",
    content: "`ILocalAudioTrack.setEnabled`"
  }, {
    heading: "api-reference-11",
    content: "`adjustRecordingSignalVolume`"
  }, {
    heading: "api-reference-11",
    content: "`adjustPlaybackSignalVolume`"
  }, {
    heading: "api-reference-11",
    content: "`adjustUserPlaybackSignalVolume`"
  }, {
    heading: "api-reference-11",
    content: "`adjustAudioMixingPlayoutVolume`"
  }, {
    heading: "api-reference-11",
    content: "`onAudioVolumeIndication`"
  }, {
    heading: "api-reference-11",
    content: "`muteLocalAudioStream`"
  }, {
    heading: "api-reference-11",
    content: "`muteRemoteAudioStream`"
  }, {
    heading: "sample-projects-9",
    content: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
  }, {
    heading: "sample-projects-9",
    content: "GitHub: AudioVolume"
  }, {
    heading: "sample-projects-9",
    content: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
  }, {
    heading: "sample-projects-9",
    content: "GitHub: AudioMixing or AudioEffect"
  }, {
    heading: "frequently-asked-questions-9",
    content: "How can I solve the problem of low volume?"
  }, {
    heading: "see-also",
    content: "Custom audio source"
  }, {
    heading: "see-also",
    content: "Custom video source"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "implement-volume-control",
    content: "Implement volume control"
  }, {
    id: "mute-and-unmute-users",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-in-ear-monitoring-volume",
    content: "Adjust the in-ear monitoring volume"
  }, {
    id: "adjust-the-recording-volume",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users",
    content: "Get volume information of users"
  }, {
    id: "mute-and-unmute-users-1",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-1",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-recording-volume-1",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-1",
    content: "Get volume information of users"
  }, {
    id: "mute-and-unmute-users-2",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-2",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-recording-volume-2",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-2",
    content: "Get volume information of users"
  }, {
    id: "mute-and-unmute-users-3",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-3",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-in-ear-monitoring-volume-1",
    content: "Adjust the in-ear monitoring volume"
  }, {
    id: "adjust-the-recording-volume-3",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-3",
    content: "Get volume information of users"
  }, {
    id: "mute-and-unmute-users-4",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-4",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-in-ear-monitoring-volume-2",
    content: "Adjust the in-ear monitoring volume"
  }, {
    id: "adjust-the-recording-volume-4",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-4",
    content: "Get volume information of users"
  }, {
    id: "adjust-the-capture-volume-of-remote-audio",
    content: "Adjust the capture volume of remote audio"
  }, {
    id: "adjust-the-capture-volume-of-local-audio",
    content: "Adjust the capture volume of local audio"
  }, {
    id: "get-volume-information-of-users-5",
    content: "Get volume information of users"
  }, {
    id: "mute-and-unmute-users-5",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-5",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-recording-volume-5",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-6",
    content: "Get volume information of users"
  }, {
    id: "mute-and-unmute-users-6",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-6",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-recording-volume-6",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-7",
    content: "Get volume information of users"
  }, {
    id: "mute-and-unmute-users-7",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-7",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-recording-volume-7",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-8",
    content: "Get volume information of users"
  }, {
    id: "adjust-playback-volume",
    content: "Adjust playback volume"
  }, {
    id: "adjust-recording-volume",
    content: "Adjust recording volume"
  }, {
    id: "get-volume-information-of-users-9",
    content: "Get volume information of users"
  }, {
    id: "mute-the-local-audio-stream",
    content: "Mute the local audio stream"
  }, {
    id: "adjust-the-playback-volume-of-remote-audio",
    content: "Adjust the playback volume of remote audio"
  }, {
    id: "adjust-the-capture-volume-of-local-audio-1",
    content: "Adjust the capture volume of local audio"
  }, {
    id: "mute-and-unmute-users-8",
    content: "Mute and unmute users"
  }, {
    id: "adjust-the-playback-volume-8",
    content: "Adjust the playback volume"
  }, {
    id: "adjust-the-recording-volume-8",
    content: "Adjust the recording volume"
  }, {
    id: "get-volume-information-of-users-10",
    content: "Get volume information of users"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "sample-projects",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "sample-projects-1",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-1",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "sample-projects-2",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-2",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "sample-projects-3",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-3",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-4",
    content: "API reference"
  }, {
    id: "sample-projects-4",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-4",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-5",
    content: "API reference"
  }, {
    id: "sample-projects-5",
    content: "Sample projects"
  }, {
    id: "api-reference-6",
    content: "API reference"
  }, {
    id: "sample-projects-6",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-5",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-7",
    content: "API reference"
  }, {
    id: "sample-projects-7",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-6",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-8",
    content: "API reference"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "frequently-asked-questions-7",
    content: "Frequently asked questions"
  }, {
    id: "sample-projects-8",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-8",
    content: "Frequently asked questions"
  }, {
    id: "api-reference-9",
    content: "API reference"
  }, {
    id: "api-reference-10",
    content: "API reference"
  }, {
    id: "api-reference-11",
    content: "API reference"
  }, {
    id: "sample-projects-9",
    content: "Sample projects"
  }, {
    id: "frequently-asked-questions-9",
    content: "Frequently asked questions"
  }, {
    id: "see-also",
    content: "See also"
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
  url: "#implement-volume-control",
  title: _jsx(_Fragment, {
    children: "Implement volume control"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-in-ear-monitoring-volume",
  title: _jsx(_Fragment, {
    children: "Adjust the in-ear monitoring volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-1",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-1",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-1",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-1",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-2",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-2",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-2",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-2",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-3",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-3",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-in-ear-monitoring-volume-1",
  title: _jsx(_Fragment, {
    children: "Adjust the in-ear monitoring volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-3",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-3",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-4",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-4",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-in-ear-monitoring-volume-2",
  title: _jsx(_Fragment, {
    children: "Adjust the in-ear monitoring volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-4",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-4",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#adjust-the-capture-volume-of-remote-audio",
  title: _jsx(_Fragment, {
    children: "Adjust the capture volume of remote audio"
  })
}, {
  depth: 3,
  url: "#adjust-the-capture-volume-of-local-audio",
  title: _jsx(_Fragment, {
    children: "Adjust the capture volume of local audio"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-5",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-5",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-5",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-5",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-6",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-6",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-6",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-6",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-7",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-7",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-7",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-7",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-8",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#adjust-playback-volume",
  title: _jsx(_Fragment, {
    children: "Adjust playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-recording-volume",
  title: _jsx(_Fragment, {
    children: "Adjust recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-9",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 3,
  url: "#mute-the-local-audio-stream",
  title: _jsx(_Fragment, {
    children: "Mute the local audio stream"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-of-remote-audio",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume of remote audio"
  })
}, {
  depth: 3,
  url: "#adjust-the-capture-volume-of-local-audio-1",
  title: _jsx(_Fragment, {
    children: "Adjust the capture volume of local audio"
  })
}, {
  depth: 3,
  url: "#mute-and-unmute-users-8",
  title: _jsx(_Fragment, {
    children: "Mute and unmute users"
  })
}, {
  depth: 3,
  url: "#adjust-the-playback-volume-8",
  title: _jsx(_Fragment, {
    children: "Adjust the playback volume"
  })
}, {
  depth: 3,
  url: "#adjust-the-recording-volume-8",
  title: _jsx(_Fragment, {
    children: "Adjust the recording volume"
  })
}, {
  depth: 3,
  url: "#get-volume-information-of-users-10",
  title: _jsx(_Fragment, {
    children: "Get volume information of users"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#api-reference",
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
  url: "#frequently-asked-questions",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-1",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-projects-1",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-1",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-2",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-projects-2",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-2",
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
  depth: 3,
  url: "#sample-projects-3",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-3",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-4",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-projects-4",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-4",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-5",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-projects-5",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#api-reference-6",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-projects-6",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-5",
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
  depth: 3,
  url: "#sample-projects-7",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-6",
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
  depth: 3,
  url: "#sample-project",
  title: _jsx(_Fragment, {
    children: "Sample project"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-7",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#sample-projects-8",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-8",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#api-reference-9",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-10",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#api-reference-11",
  title: _jsx(_Fragment, {
    children: "API reference"
  })
}, {
  depth: 3,
  url: "#sample-projects-9",
  title: _jsx(_Fragment, {
    children: "Sample projects"
  })
}, {
  depth: 3,
  url: "#frequently-asked-questions-9",
  title: _jsx(_Fragment, {
    children: "Frequently asked questions"
  })
}, {
  depth: 3,
  url: "#see-also",
  title: _jsx(_Fragment, {
    children: "See also"
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
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, CalloutTitle, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Tabs, TabsContent, TabsList, TabsTrigger, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
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
  if (!CodeBlockTab)
    _missingMdxReference("CodeBlockTab", true);
  if (!CodeBlockTabs)
    _missingMdxReference("CodeBlockTabs", true);
  if (!CodeBlockTabsList)
    _missingMdxReference("CodeBlockTabsList", true);
  if (!CodeBlockTabsTrigger)
    _missingMdxReference("CodeBlockTabsTrigger", true);
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
      children: "This page shows you how to configure volume settings for audio recording, audio playback, and for the playback of music files."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: "Agora RTC SDK supports adjusting the audio volume for both recording and playback to meet practical application use-cases. For example, during a two-person call, you can mute a remote user by adjusting the playback volume setting to 0."
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "android",
      platforms: '["android","ios","macos","windows","electron","flutter","react-native","unity","unreal","blueprint"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "android"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "In-ear monitoring"
          }), " refers to the process of playing audio captured by a device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "ios",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "ios"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "In-ear monitoring"
          }), " refers to the process of playing audio captured by a device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "macos",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "macos"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "windows",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "windows"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "electron",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "electron"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "flutter",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "flutter"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "react-native",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "react-native"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unity",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "unity"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "unreal",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "unreal"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "blueprint",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "android",
          platform: "blueprint"
        }), _jsx(_components.p, {
          children: "The figure below shows the workflow of adjusting the volume."
        }), _jsx(Accordions, {
          children: _jsx(Accordion, {
            title: "Volume adjust workflow",
            children: _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-adjustVolume.svg",
                alt: "VolumeControlMute"
              })
            })
          })
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Playback"
          }), " refers to transmitting an audio signal from a sender to a recipient, where it is played back through a playback device."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Recording"
          }), " refers to the process in which audio signals are captured by a recording device and then sent to the transmitter."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
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
      }), " in your project."]
    }), `
`, _jsx(_components.h2, {
      id: "implement-volume-control",
      children: "Implement volume control"
    }), `
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","electron","flutter","ios","macos","javascript","react-native","unity","unreal","blueprint","web","windows"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users",
          children: "Mute and unmute users"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
            children: "muteLocalAudioStream"
          }), ":"]
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
                      children: "// Stop publishing the local audio stream"
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
                      children: "muteLocalAudioStream"
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
                      children: "// Resume publishing the local audio stream"
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
                      children: "muteLocalAudioStream"
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
                      children: "false"
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
                      children: "// Stop publishing the local audio stream"
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
                      children: "muteLocalAudioStream"
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
                      children: "// Resume publishing the local audio stream"
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
                      children: "muteLocalAudioStream"
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
                      children: "false"
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
        }), _jsxs(_components.p, {
          children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
            children: "muteRemoteAudioStream"
          }), " with the ", _jsx(_components.code, {
            children: "uid"
          }), " of the remote user:"]
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
                      children: "// Stop subscribing to the audio stream of the remote user"
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
                      children: "muteRemoteAudioStream"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(remoteUid, "
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
                      children: "// Resume subscribing to the audio stream of the remote user"
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
                      children: "muteRemoteAudioStream"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(remoteUid, "
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
                      children: ");"
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
                      children: "// Stop subscribing to the audio stream of the remote user"
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
                      children: "muteRemoteAudioStream"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(remoteUid, "
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
                      children: "// Resume subscribing to the audio stream of the remote user"
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
                      children: "muteRemoteAudioStream"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(remoteUid, "
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
                      children: ")"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
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
                  children: [_jsxs(_components.span, {
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
                      children: " volume "
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
                      children: " 50"
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
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " uid "
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
                      children: " 123456"
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
                      children: "// Set the local playback volume for all remote users"
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
                      children: "adjustPlaybackSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(volume);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the local playback volume for a specific remote user. For example, a user with uid=123"
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
                      children: "adjustUserPlaybackSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(uid, volume);"
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
                      children: " volume "
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
                      children: " 50"
                    })]
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
                      children: " uid "
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
                      children: " 123456"
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
                      children: "// Set the local playback volume for all remote users"
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
                      children: "adjustPlaybackSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(volume)"
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
                      children: "// Set the local playback volume for a specific remote user (e.g., user with uid=123)"
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
                      children: "adjustUserPlaybackSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(uid, volume)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "adjust-the-in-ear-monitoring-volume",
          children: "Adjust the in-ear monitoring volume"
        }), _jsxs(_components.p, {
          children: ["During the process of audio capture, mixing, and playback, Agora enables you to adjust the in-ear monitoring volume. Enable and set the volume using ", _jsx(_components.code, {
            children: "enableInEarMonitoring"
          }), " and ", _jsx(_components.code, {
            children: "setInEarMonitoringVolume"
          }), "."]
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
                      children: "// Enable in-ear monitoring"
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
                      children: "enableInEarMonitoring"
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
                      children: "int"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " volume "
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
                      children: " 50"
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
                      children: "// Adjust in-ear monitoring volume"
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
                      children: "setInEarMonitoringVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(volume);"
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
                      children: "// Enable in-ear monitoring"
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
                      children: "enableInEarMonitoring"
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
                      children: ")"
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
                      children: "val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " volume "
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
                      children: " 50"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Adjust in-ear monitoring volume"
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
                      children: "setInEarMonitoringVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(volume)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
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
                  children: [_jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "ChannelMediaOptions options "
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
                      children: "options.clientRoleType "
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
                      children: "mRtcEngine."
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
                      children: "(token, channelName, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1234"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", options);"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Adjust the recording signal volume to 50"
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
                      children: " vol "
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
                      children: " 50"
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
                      children: "adjustRecordingSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(vol);"
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
                      children: "// Create ChannelMediaOptions and set client role"
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
                      children: "// Join channel"
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
                      children: "joinChannel"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(token, channelName, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "1234"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ", options)"
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
                      children: "// Adjust the recording signal volume to 50"
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
                      children: " vol "
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
                      children: " 50"
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
                      children: "adjustRecordingSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(vol)"
                    })]
                  })]
                })
              })
            })
          })]
        }), _jsx(_components.p, {
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the ", _jsx(_components.code, {
            children: "onAudioVolumeIndication"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
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
                      children: " final"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " IRtcEngineEventHandler mRtcEventHandler "
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
                      children: " IRtcEngineEventHandler"
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
                      children: "      // ..."
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "      // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "      // their respective volumes, and determine whether the local user is speaking."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "      @"
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
                      children: "      public"
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
                      children: "AudioVolumeInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[] "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#E36209",
                        "--shiki-dark": "#FFAB70"
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
                      children: "int"
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
                      children: "};"
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
                      children: " val"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " mRtcEventHandler "
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
                      children: " object"
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
                      children: "    // Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "    // their respective volumes, and determine whether the local user is speaking."
                    })
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
                      children: " onAudioVolumeIndication"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(speakers: "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "Array"
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
                      children: "AudioVolumeInfo"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ">?, totalVolume: "
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
                      children: "        // Your implementation here"
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
                      children: "}"
                    })
                  })]
                })
              })
            })
          })]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
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
                      children: "// Enable the onAudioVolumeIndication callback"
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
                      children: "enableAudioVolumeIndication"
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
                      children: "// Enable the onAudioVolumeIndication callback"
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
                      children: "enableAudioVolumeIndication"
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
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-1",
          children: "Mute and unmute users"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
            children: "muteLocalAudioStream"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: "// Resume publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsxs(_components.p, {
          children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
            children: "muteRemoteAudioStream"
          }), " with the ", _jsx(_components.code, {
            children: "uid"
          }), " of the remote user:"]
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
                  children: "// Stop subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: "// Resume subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-1",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
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
                  children: "// Set the local playback volume to 50 for all remote users"
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
                  children: "adjustPlaybackSignalVolume"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the local playback volume for a specific remote user. For example, user with uid 12"
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
                  children: "adjustUserPlaybackSignalVolume"
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
                  children: "12"
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
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-1",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
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
                  children: "// Adjust the recording signal volume to 50"
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
                  children: "adjustRecordingSignalVolume"
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
        }), _jsx(_components.p, {
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-1",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the ", _jsx(_components.code, {
            children: "onAudioVolumeIndication"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
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
                  children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// their respective volumes, and determine whether the local user is speaking."
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
                  children: "?"
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
                  children: "    connection: RtcConnection,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    speakers: AudioVolumeInfo[],"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    speakerNumber: number,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    totalVolume: number"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  )"
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
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
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
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-2",
          children: "Mute and unmute users"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
            children: "muteLocalAudioStream"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop publishing the local audio stream"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "_rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "muteLocalAudioStream"
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
                  children: "// Resume publishing the local audio stream"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "_rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "muteLocalAudioStream"
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
                  children: "false"
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
        }), _jsxs(_components.p, {
          children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
            children: "muteRemoteAudioStream"
          }), " with the ", _jsx(_components.code, {
            children: "uid"
          }), " of the remote user:"]
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
                  children: "// Stop subscribing to the audio stream of the remote user"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "_rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: "// Resume subscribing to the audio stream of the remote user"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "_rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-2",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
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
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " volume "
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
                  children: " 50"
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
                  children: "// Set the local playback volume to 50 for all remote users"
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
                  children: " _rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "adjustPlaybackSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(volume);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the local playback volume for a specific remote user. For example, user with uid 1000"
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
                  children: " _rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "adjustUserPlaybackSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(uid"
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
                  children: " 1000"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", volume"
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
                  children: " volume);"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-2",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
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
                  children: "// Adjust the recording signal volume to 50"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: " vol "
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
                  children: " 50"
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
                  children: "await"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " _rtcEngine."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "adjustRecordingSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(vol);"
                })]
              })]
            })
          })
        }), _jsx(_components.p, {
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-2",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the ", _jsx(_components.code, {
            children: "onAudioVolumeIndication"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
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
                  children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// their respective volumes, and determine whether the local user is speaking."
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "_rtcEngine."
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "RtcEngineEventHandler"
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
                  children: "  onAudioVolumeIndication"
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
                  children: "      List"
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
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "      '[onAudioVolumeIndication] speakers: "
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
                  children: "));"
                })
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
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-3",
          children: "Mute and unmute users"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
                children: "muteLocalAudioStream"
              }), ":"]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "objc",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "objc",
                  children: "Objective-C"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "swift",
                  children: "Swift"
                })]
              }), _jsx(CodeBlockTab, {
                value: "objc",
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "[agoraKit "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "muteLocalAudioStream:YES"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "];"
                        })]
                      })
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "swift",
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Stop publishing the local audio stream"
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
                          children: "muteLocalAudioStream"
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
                          children: "// Resume publishing the local audio stream"
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
                          children: "muteLocalAudioStream"
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
                          children: "false"
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
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              }), " with the ", _jsx(_components.code, {
                children: "uid"
              }), " of the remote user:"]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "objc",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "objc",
                  children: "Objective-C"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "swift",
                  children: "Swift"
                })]
              }), _jsx(CodeBlockTab, {
                value: "objc",
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "[agoraKit "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "muteRemoteAudioStream:"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "remoteUid "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "mute:YES"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "];"
                        })]
                      })
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "swift",
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Stop subscribing to the audio stream of the remote user"
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
                          children: "muteRemoteAudioStream"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remoteUid, "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "mute"
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
                          children: "true"
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
                          children: "// Resume subscribing to the audio stream of the remote user"
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
                          children: "muteRemoteAudioStream"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remoteUid, "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "mute"
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
                          children: "false"
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
            }), `
`]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-3",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Set the volume of all remote users played locally"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "adjustPlaybackSignalVolume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the local playback volume for a specific remote user."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "adjustUserPlaybackSignalVolume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " uid, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "volume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the volume of all remote users played locally"
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
                      children: "adjustPlaybackSignalVolume"
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the local playback volume for a specific remote user"
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
                      children: "adjustUserPlaybackSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(uid, "
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
            })
          })]
        }), _jsx(_components.h3, {
          id: "adjust-the-in-ear-monitoring-volume-1",
          children: "Adjust the in-ear monitoring volume"
        }), _jsxs(_components.p, {
          children: ["During the process of audio capture, mixing, and playback, Agora enables you to adjust the volume of in-ear monitoring. Enable and set the in-ear monitoring through ", _jsx(_components.code, {
            children: "enableInEarMonitoring"
          }), " and ", _jsx(_components.code, {
            children: "setInEarMonitoringVolume"
          }), "."]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Enable in-ear monitoring"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "enableInEarMonitoring:true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Adjust in-ear monitoring volume"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setInEarMonitoringVolume:50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Enable in-ear monitoring"
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
                      children: "enableInEarMonitoring"
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
                      children: "// Adjust in-ear monitoring volume"
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
                      children: "setInEarMonitoringVolume"
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
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-3",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Adjust the recording signal volume"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "adjustRecordingSignalVolume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Adjust the recording signal volume"
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
                      children: "adjustRecordingSignalVolume"
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
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-3",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use ", _jsx(_components.code, {
            children: "reportAudioVolumeIndicationOfSpeakers"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// their respective volumes, and determine whether the local user is speaking."
                    })
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
                      children: " ("
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
                      children: ")rtcEngine:(AgoraRtcEngineKit "
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
                      children: "_Nonnull)engine"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "reportAudioVolumeIndicationOfSpeakers:("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSArray"
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
                      children: "AgoraRtcAudioVolumeInfo "
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
                      children: "_Nonnull)speakers"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "                              totalVolume:("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSInteger"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")totalVolume {"
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
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// their respective volumes, and determine whether the local user is speaking."
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
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    _"
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
                      children: "    reportAudioVolumeIndicationOfSpeakers"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " speakers: [AgoraRtcAudioVolumeInfo],"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    totalVolume"
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
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Enable the reportAudioVolumeIndicationOfSpeakers callback"
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
                      children: "enableAudioVolumeIndication"
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
                      children: "200"
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
                      children: "smooth"
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
                      children: "3"
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
                      children: "reportVad"
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
                      children: "true"
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
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-4",
          children: "Mute and unmute users"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
                children: "muteLocalAudioStream"
              }), ":"]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "objc",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "objc",
                  children: "Objective-C"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "swift",
                  children: "Swift"
                })]
              }), _jsx(CodeBlockTab, {
                value: "objc",
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "[agoraKit "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "muteLocalAudioStream:YES"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "];"
                        })]
                      })
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "swift",
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Stop publishing the local audio stream"
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
                          children: "muteLocalAudioStream"
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
                          children: "// Resume publishing the local audio stream"
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
                          children: "muteLocalAudioStream"
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
                          children: "false"
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
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              }), " with the ", _jsx(_components.code, {
                children: "uid"
              }), " of the remote user:"]
            }), `
`, _jsxs(CodeBlockTabs, {
              defaultValue: "objc",
              children: [_jsxs(CodeBlockTabsList, {
                children: [_jsx(CodeBlockTabsTrigger, {
                  value: "objc",
                  children: "Objective-C"
                }), _jsx(CodeBlockTabsTrigger, {
                  value: "swift",
                  children: "Swift"
                })]
              }), _jsx(CodeBlockTab, {
                value: "objc",
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
                    children: _jsx(_components.code, {
                      children: _jsxs(_components.span, {
                        className: "line",
                        children: [_jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "[agoraKit "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "muteRemoteAudioStream:"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "remoteUid "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "mute:YES"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "];"
                        })]
                      })
                    })
                  })
                })
              }), _jsx(CodeBlockTab, {
                value: "swift",
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
                    icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                    children: _jsxs(_components.code, {
                      children: [_jsx(_components.span, {
                        className: "line",
                        children: _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#6A737D",
                            "--shiki-dark": "#6A737D"
                          },
                          children: "// Stop subscribing to the audio stream of the remote user"
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
                          children: "muteRemoteAudioStream"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remoteUid, "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "mute"
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
                          children: "true"
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
                          children: "// Resume subscribing to the audio stream of the remote user"
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
                          children: "muteRemoteAudioStream"
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#24292E",
                            "--shiki-dark": "#E1E4E8"
                          },
                          children: "(remoteUid, "
                        }), _jsx(_components.span, {
                          style: {
                            "--shiki-light": "#005CC5",
                            "--shiki-dark": "#79B8FF"
                          },
                          children: "mute"
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
                          children: "false"
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
            }), `
`]
          }), `
`]
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-4",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Set the volume of all remote users played locally"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "adjustPlaybackSignalVolume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the local playback volume for a specific remote user."
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "adjustUserPlaybackSignalVolume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " uid, "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "volume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the volume of all remote users played locally"
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
                      children: "adjustPlaybackSignalVolume"
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
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Set the local playback volume for a specific remote user"
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
                      children: "adjustUserPlaybackSignalVolume"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "(uid, "
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
            })
          })]
        }), _jsx(_components.h3, {
          id: "adjust-the-in-ear-monitoring-volume-2",
          children: "Adjust the in-ear monitoring volume"
        }), _jsxs(_components.p, {
          children: ["During the process of audio capture, mixing, and playback, Agora enables you to adjust the volume of in-ear monitoring. Enable and set the in-ear monitoring through ", _jsx(_components.code, {
            children: "enableInEarMonitoring"
          }), " and ", _jsx(_components.code, {
            children: "setInEarMonitoringVolume"
          }), "."]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Enable in-ear monitoring"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "enableInEarMonitoring:true"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Adjust in-ear monitoring volume"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "setInEarMonitoringVolume:50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Enable in-ear monitoring"
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
                      children: "enableInEarMonitoring"
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
                      children: "// Adjust in-ear monitoring volume"
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
                      children: "setInEarMonitoringVolume"
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
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-4",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Adjust the recording signal volume"
                    })
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "[agoraKit "
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "adjustRecordingSignalVolume:"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: " 50"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "];"
                    })]
                  })]
                })
              })
            })
          }), _jsx(CodeBlockTab, {
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Adjust the recording signal volume"
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
                      children: "adjustRecordingSignalVolume"
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
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-4",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use ", _jsx(_components.code, {
            children: "reportAudioVolumeIndicationOfSpeakers"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
        }), _jsxs(CodeBlockTabs, {
          defaultValue: "objc",
          children: [_jsxs(CodeBlockTabsList, {
            children: [_jsx(CodeBlockTabsTrigger, {
              value: "objc",
              children: "Objective-C"
            }), _jsx(CodeBlockTabsTrigger, {
              value: "swift",
              children: "Swift"
            })]
          }), _jsx(CodeBlockTab, {
            value: "objc",
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
                      children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// their respective volumes, and determine whether the local user is speaking."
                    })
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
                      children: " ("
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
                      children: ")rtcEngine:(AgoraRtcEngineKit "
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
                      children: "_Nonnull)engine"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "reportAudioVolumeIndicationOfSpeakers:("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSArray"
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
                      children: "AgoraRtcAudioVolumeInfo "
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
                      children: "_Nonnull)speakers"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "                              totalVolume:("
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#005CC5",
                        "--shiki-dark": "#79B8FF"
                      },
                      children: "NSInteger"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ")totalVolume {"
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
            value: "swift",
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
                icon: '<svg viewBox="0 0 24 24"><path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z" fill="currentColor" /></svg>',
                children: _jsxs(_components.code, {
                  children: [_jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                    })
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// their respective volumes, and determine whether the local user is speaking."
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
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    _"
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
                      children: "    reportAudioVolumeIndicationOfSpeakers"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: " speakers: [AgoraRtcAudioVolumeInfo],"
                    })]
                  }), `
`, _jsxs(_components.span, {
                    className: "line",
                    children: [_jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6F42C1",
                        "--shiki-dark": "#B392F0"
                      },
                      children: "    totalVolume"
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
                    })]
                  }), `
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: ") {"
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
`, _jsx(_components.span, {
                    className: "line",
                    children: _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#6A737D",
                        "--shiki-dark": "#6A737D"
                      },
                      children: "// Enable the reportAudioVolumeIndicationOfSpeakers callback"
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
                      children: "enableAudioVolumeIndication"
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
                      children: "200"
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
                      children: "smooth"
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
                      children: "3"
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
                      children: "reportVad"
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
                      children: "true"
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
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "javascript",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "javascript"
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "adjust-the-capture-volume-of-remote-audio",
          children: "Adjust the capture volume of remote audio"
        }), _jsxs(_components.p, {
          children: ["To set the volume, mute, or unmute a remote user, call ", _jsx(_components.code, {
            children: "setVolume"
          }), " on the remote audio track:"]
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
                  children: "// Mute remote audio"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " muteRemoteAudio"
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
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
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
                  children: " IRemoteAudioTrack"
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
                  children: " null"
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
                  children: "audioTrack) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "return"
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
                  children: "  audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                  children: "};"
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
                  children: "// Unmute remote audio"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " unmuteRemoteAudio"
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
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
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
                  children: " IRemoteAudioTrack"
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
                  children: " null"
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
                  children: "audioTrack) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "return"
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
                  children: "  audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                  children: ");  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set to a reasonable volume level"
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
        }), _jsx(_components.h3, {
          id: "adjust-the-capture-volume-of-local-audio",
          children: "Adjust the capture volume of local audio"
        }), _jsxs(_components.p, {
          children: ["To set the capture volume, mute, or unmute the local user, call ", _jsx(_components.code, {
            children: "setVolume"
          }), " on the local audio track:"]
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
                  children: "// Mute local audio"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " muteLocalAudio"
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
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
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
                  children: " IMicrophoneAudioTrack"
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
                  children: " null"
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
                  children: "audioTrack) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "return"
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
                  children: "  audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                  children: "};"
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
                  children: "// Unmute local audio"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " unmuteLocalAudio"
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
                  children: " ("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
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
                  children: " IMicrophoneAudioTrack"
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
                  children: " null"
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
                  children: "audioTrack) "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "return"
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
                  children: "  audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                  children: ");  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the volume to a reasonable volume level"
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
          children: ["The following example demonstrates how to mute and unmute local and remote users using ", _jsx(_components.code, {
            children: "useLocalMicrophoneTrack"
          }), " and ", _jsx(_components.code, {
            children: "useRemoteUsers"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " { "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "localMicrophoneTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " } "
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
                  children: " useLocalMicrophoneTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(micOn);"
                })]
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
                  children: " remoteUsers"
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
                  children: " useRemoteUsers"
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
                  children: "return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    <>"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "        <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "button"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                onClick"
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
                  children: "{() => "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "muteLocalAudio"
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
                  children: "localMicrophoneTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")}"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            >"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                Mute local "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "user"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            </"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "button"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                onClick"
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
                  children: "{() => "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unmuteLocalAudio"
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
                  children: "localMicrophoneTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")}"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            >"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                Unmute local "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "user"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            </"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "button"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                onClick"
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
                  children: "{() => "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "muteRemoteAudio"
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
                  children: "remoteUsers"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
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
                  children: "].audioTrack || "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "null"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")}"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            >"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                Mute remote "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "user"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            </"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "button"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                onClick"
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
                  children: "{() => "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "unmuteRemoteAudio"
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
                  children: "remoteUsers"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
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
                  children: "].audioTrack || "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "null"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")}"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            >"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                Unmute remote "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "user"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "            </"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "button"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        </"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    </>"
                })
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
          id: "get-volume-information-of-users-5",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["The RTC SDK provides the ability to monitor the volume level of users using the ", _jsx(_components.code, {
            children: "useVolumeLevel"
          }), " hook. To get the audio volume level, pass the respective audio track (local or remote) to the hook:"]
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
                  children: "// Component to track and display the local user's audio volume level"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " AudioVolumeTracker"
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
                  children: " ({ "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " }"
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
                  children: " { "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
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
                  children: " IMicrophoneAudioTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " }) "
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " volumeLevel"
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
                  children: " useVolumeLevel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioTrack);"
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
                  children: "  return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "label"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">Current Volume "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "Level"
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
                  children: " {"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "volumeLevel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "}</"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "label"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    </"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
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
                  children: "  );"
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
                  children: "// Component to track and display the remote user's audio volume level"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " RemoteAudioVolumeTracker"
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
                  children: " ({ "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " }"
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
                  children: " { "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "audioTrack"
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
                  children: " IRemoteAudioTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " }) "
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
                  children: "  const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " volumeLevel"
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
                  children: " useVolumeLevel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(audioTrack);"
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
                  children: "  return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " ("
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "label"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ">Remote User"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'s Volume Level: {volumeLevel}</label"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: ">"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    </"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "div"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
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
                  children: "  );"
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
          children: "How to use:"
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
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " { "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "localMicrophoneTrack"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " } "
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
                  children: " useLocalMicrophoneTrack"
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
                  children: "// Display the volume level of the local user"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: "AudioVolumeTracker audioTrack"
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
                  children: "{localMicrophoneTrack} "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "/>"
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
                  children: "const"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " remoteUsers"
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
                  children: " useRemoteUsers"
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
                  children: "// Display the volume level of the first remote user"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
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
                  children: "RemoteAudioVolumeTracker audioTrack"
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
                  children: "{remoteUsers["
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
                  children: "]?.audioTrack} />;"
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
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-5",
          children: "Mute and unmute users"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
            children: "muteLocalAudioStream"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: "// Resume publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: "false"
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
        }), _jsxs(_components.p, {
          children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
            children: "muteRemoteAudioStream"
          }), " with the ", _jsx(_components.code, {
            children: "uid"
          }), " of the remote user:"]
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
                  children: "// Stop subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: "// Resume subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-5",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
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
                  children: "// Set the local playback volume to 50 for all remote users"
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
                  children: "adjustPlaybackSignalVolume"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the local playback volume for a specific remote user. For example, user with uid 12"
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
                  children: "adjustUserPlaybackSignalVolume"
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
                  children: "12"
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
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-5",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
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
                  children: "// Adjust the recording signal volume to 50"
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
                  children: "adjustRecordingSignalVolume"
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
        }), _jsx(_components.p, {
          children: "When configuring audio settings, it's essential to understand the default behavior and options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-6",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the ", _jsx(_components.code, {
            children: "onAudioVolumeIndication"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
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
                  children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// their respective volumes, and determine whether the local user is speaking."
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
                  children: "?"
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
                  children: "    connection: RtcConnection,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    speakers: AudioVolumeInfo[],"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    speakerNumber: number,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    totalVolume: number"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  )"
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
                  children: " void"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ";"
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
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-6",
          children: "Mute and unmute users"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
            children: "MuteLocalAudioStream"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop publishing the local audio stream"
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
                  children: "MuteLocalAudioStream"
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
                  children: "// Resume publishing the local audio stream"
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
                  children: "MuteLocalAudioStream"
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
                  children: "false"
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
        }), _jsxs(_components.p, {
          children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
            children: "MuteRemoteAudioStream"
          }), " with the ", _jsx(_components.code, {
            children: "uid"
          }), " of the remote user:"]
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
                  children: "// Stop subscribing to the audio stream of the remote user"
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
                  children: "MuteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: "// Resume subscribing to the audio stream of the remote user"
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
                  children: "MuteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-6",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "AdjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "AdjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
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
                  children: "// Set the volume for all remote users' playback locally to 50"
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
                  children: "AdjustPlaybackSignalVolume"
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
                  children: "// Set the playback volume for the remote user with the uid of 12 locally to 50"
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
                  children: "AdjustUserPlaybackSignalVolume"
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
                  children: "12"
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
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-6",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "AdjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
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
                  children: "// Adjust the recording signal volume to 50"
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
                  children: "AdjustRecordingSignalVolume"
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
        }), _jsx(_components.p, {
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-7",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the ", _jsx(_components.code, {
            children: "OnAudioVolumeIndication"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "EnableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
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
                  children: "    _appID,"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "    0"
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
                  children: "    CHANNEL_PROFILE_TYPE.CHANNEL_PROFILE_LIVE_BROADCASTING,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    AUDIO_SCENARIO_TYPE.AUDIO_SCENARIO_DEFAULT"
                })
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
                  children: "// Set up listener callback"
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
                className: "line"
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Enable volume indication"
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
                  children: "EnableAudioVolumeIndication"
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
                  children: "true"
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
                  children: "    // This callback is triggered at the interval set in EnableAudioVolumeIndication and reports the three users with the highest instant volume in the channel"
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
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "        RtcConnection"
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
                  children: "        AudioVolumeInfo"
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
                  children: "        uint"
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
                  children: "        int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " totalVolume"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ) { }"
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
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-7",
          children: "Mute and unmute users"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
            children: "muteLocalAudioStream"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: "// Resume publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: "false"
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
        }), _jsxs(_components.p, {
          children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
            children: "muteRemoteAudioStream"
          }), " with the ", _jsx(_components.code, {
            children: "uid"
          }), " of the remote user:"]
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
                  children: "// Stop subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: "// Resume subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-7",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
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
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " volume "
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
                  children: " 50"
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
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " uid "
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
                  children: " 123456"
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
                  children: "// Set the local playback volume for all remote users"
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
                  children: "adjustPlaybackSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(volume);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the local playback volume for a specific remote user. For example, user 123456"
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
                  children: "adjustUserPlaybackSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(uid, volume)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-7",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
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
                  children: "// Adjust the recording signal volume to 50"
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
                  children: " vol "
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
                  children: " 50"
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
                  children: "adjustRecordingSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(vol);"
                })]
              })]
            })
          })
        }), _jsx(_components.p, {
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-8",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the ", _jsx(_components.code, {
            children: "onAudioVolumeIndication"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
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
                  children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// their respective volumes, and determine whether the local user is speaking."
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
                  children: " CAudioVolumeEventHandler"
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
                  children: "onAudioVolumeIndication"
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "unsigned"
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
                  children: " totalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "){"
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
                  children: "// Enable the onAudioVolumeIndication callback"
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
                  children: "enableAudioVolumeIndication"
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
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
          id: "adjust-playback-volume",
          children: "Adjust playback volume"
        }), _jsxs(_components.p, {
          children: ["This section shows you how to adjust the audio playback signal volume using ", _jsx(_components.code, {
            children: "AdjustPlaybackSignalVolume"
          }), "."]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create UMG"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Slider"
              }), " widget named ", _jsx(_components.strong, {
                children: "Slider_PlaybackSignalVolume"
              }), " for users to drag the volume bar to adjust the playback volume. In this example, set the minimum value to ", _jsx(_components.code, {
                children: "0"
              }), " (mute) and the maximum value to ", _jsx(_components.code, {
                children: "100"
              }), " (original volume), as shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-1.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Bind UI Events"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Bind Event to On Value Changed node"
              }), " and connect it to the ", _jsx(_components.strong, {
                children: "Slider_PlaybackSignalVolume"
              }), " widget and the ", _jsx(_components.strong, {
                children: "OnPlaybackSignalVolumeValChanged"
              }), " callback. When users drag the volume bar to adjust the audio playback signal, the ", _jsx(_components.strong, {
                children: "OnPlaybackSignalVolumeValChanged"
              }), " callback is triggered, as shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-2.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Implement Callback Function"
            }), `
`, _jsxs(_components.p, {
              children: ["Create ", _jsx(_components.strong, {
                children: "OnPlaybackSignalVolumeValChanged"
              }), " callback function with the following parameters:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Input parameter"
                  }), _jsx(_components.th, {
                    children: "Data type"
                  }), _jsx(_components.th, {
                    children: "Parameter description"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "value"
                    })
                  }), _jsx(_components.td, {
                    children: "Float"
                  }), _jsx(_components.td, {
                    children: "Playback Volume"
                  })]
                })
              })]
            }), `
`, _jsxs(_components.p, {
              children: ["When this callback is triggered, the specified playback volume is obtained and assigned to the Volume parameter of ", _jsx(_components.strong, {
                children: "Adjust Playback Signal Volume"
              }), ". The ", _jsx(_components.strong, {
                children: "AdjustPlaybackSignalVolume"
              }), " method is called to adjust the playback volume, as shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-3.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "adjust-recording-volume",
          children: "Adjust recording volume"
        }), _jsxs(_components.p, {
          children: ["This section shows you how to adjust the audio recording signal volume using ", _jsx(_components.code, {
            children: "AdjustRecordingSignalVolume"
          }), "."]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create UMG"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Slider"
              }), " widget named ", _jsx(_components.strong, {
                children: "Slider_RecordingSignalVolume"
              }), " to enable users to adjust the recording volume. For this example, set the minimum value to ", _jsx(_components.code, {
                children: "0"
              }), " (mute) and the maximum value to ", _jsx(_components.code, {
                children: "100"
              }), " (original volume), as shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-4.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Bind UI Events"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Bind Event to On Value Changed node"
              }), " and connect it to the ", _jsx(_components.strong, {
                children: "Slider_RecordingSignalVolume"
              }), " widget and the ", _jsx(_components.strong, {
                children: "OnRecordingSignalVolumeValChanged"
              }), " callback. When users drag the volume bar to adjust the audio recording signal, the ", _jsx(_components.strong, {
                children: "OnRecordingSignalVolumeValChanged"
              }), " callback is triggered, as shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-5.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Implement UI Events"
            }), `
`, _jsxs(_components.p, {
              children: ["Create the ", _jsx(_components.strong, {
                children: "OnRecordingSignalVolumeValChanged"
              }), " callback function with the following parameters:"]
            }), `
`, _jsxs(_components.table, {
              children: [_jsx(_components.thead, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.th, {
                    children: "Input parameter"
                  }), _jsx(_components.th, {
                    children: "Data type"
                  }), _jsx(_components.th, {
                    children: "Parameter description"
                  })]
                })
              }), _jsx(_components.tbody, {
                children: _jsxs(_components.tr, {
                  children: [_jsx(_components.td, {
                    children: _jsx(_components.code, {
                      children: "value"
                    })
                  }), _jsx(_components.td, {
                    children: "Float"
                  }), _jsx(_components.td, {
                    children: "Recording Volume"
                  })]
                })
              })]
            }), `
`, _jsxs(_components.p, {
              children: ["When the callback is triggered, the specified recording volume is obtained and assigned to the Volume parameter of ", _jsx(_components.strong, {
                children: "Adjust Recording Signal Volume"
              }), ". The ", _jsx(_components.strong, {
                children: "AdjustRecordingSignalVolume"
              }), ` method is called to adjust the recording volume, as shown in the following figure:
`, _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-6.png",
                alt: "VolumeControlMute"
              })]
            }), `
`, _jsx(_components.p, {
              children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
                  children: "85"
                }), " when using the recording device to capture audio signals."]
              }), `
`, _jsxs(_components.li, {
                children: ["A volume of ", _jsx(_components.code, {
                  children: "0"
                }), " means mute, and a volume of ", _jsx(_components.code, {
                  children: "255"
                }), " represents the maximum volume of the device."]
              }), `
`, _jsx(_components.li, {
                children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
              }), `
`, _jsx(_components.li, {
                children: "The volume of the recording device directly influences the global volume of the device."
              }), `
`, _jsx(_components.li, {
                children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
              }), `
`]
            }), `
`]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-9",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["Throughout the process of audio recording, mixing, and playback, you can obtain the user IDs and volumes of the three users with the highest instant volumes in the channel using the ", _jsx(_components.code, {
            children: "FOnAudioVolumeIndication"
          }), " callback. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " represents the local user. You need to call the ", _jsx(_components.code, {
            children: "EnableAudioVolumeIndication"
          }), " method to activate the voice detection function to receive this callback."]
        }), _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Create UMG"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Button"
              }), " widget named ", _jsx(_components.strong, {
                children: "Btn_EnableAudioIndication"
              }), " for users to control whether to enable the volume indication. As shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-7.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Bind UI Events"
            }), `
`, _jsxs(_components.p, {
              children: ["Create a ", _jsx(_components.strong, {
                children: "Bind Event to On Clicked node"
              }), " and connect it to the ", _jsx(_components.strong, {
                children: "Btn_EnableAudioIndication"
              }), " widget and the ", _jsx(_components.strong, {
                children: "OnVolumeIndicationClick"
              }), " callback. When users press the button to enable the volume indication, the ", _jsx(_components.strong, {
                children: "OnVolumeIndicationClick"
              }), " callback is triggered, as shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-8.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Implement UI Events"
            }), `
`, _jsxs(_components.p, {
              children: ["Create the ", _jsx(_components.strong, {
                children: "OnVolumeIndicationClick"
              }), " callback function. When this callback is triggered, the ", _jsx(_components.strong, {
                children: "Enable Audio Volume Indication"
              }), " method is called to enable volume indication. In this example, set the volume indication ", _jsx(_components.strong, {
                children: "Interval"
              }), " to 200 milliseconds, the smoothing factor ", _jsx(_components.strong, {
                children: "Smooth"
              }), " to 3, and check ", _jsx(_components.strong, {
                children: "Report Vad"
              }), " to activate the voice detection function, as shown in the following figure:"]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-9.png",
                alt: "VolumeControlMute"
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Add Callback Event"
            }), `
`, _jsxs(_components.ol, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Create the ", _jsx(_components.strong, {
                    children: "OnAudioVolumeIndication"
                  }), " callback function with the following parameters:"]
                }), `
`, _jsxs(_components.table, {
                  children: [_jsx(_components.thead, {
                    children: _jsxs(_components.tr, {
                      children: [_jsx(_components.th, {
                        children: "Input parameter"
                      }), _jsx(_components.th, {
                        children: "Data type"
                      }), _jsx(_components.th, {
                        children: "Parameter description"
                      })]
                    })
                  }), _jsxs(_components.tbody, {
                    children: [_jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        children: _jsx(_components.code, {
                          children: "speaker"
                        })
                      }), _jsx(_components.td, {
                        children: "Float"
                      }), _jsxs(_components.td, {
                        children: ["Structure Volume information of users, see ", _jsx(_components.a, {
                          href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
                          children: "FAudioVolumeInfo"
                        }), " for details."]
                      })]
                    }), _jsxs(_components.tr, {
                      children: [_jsx(_components.td, {
                        children: _jsx(_components.code, {
                          children: "totalVolume"
                        })
                      }), _jsx(_components.td, {
                        children: "Integer"
                      }), _jsx(_components.td, {
                        children: "The total volume after mixing"
                      })]
                    })]
                  })]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["Enable listening to the ", _jsx(_components.strong, {
                    children: "OnAudioVolumeIndication"
                  }), " callback, as shown in the following figure:"]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-10.png",
                    alt: "VolumeControlMute"
                  })
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["When the ", _jsx(_components.strong, {
                    children: "OnAudioVolumeIndication"
                  }), " callback is triggered, print the received user volume information, as shown in the following figure:"]
                }), `
`, _jsx(_components.p, {
                  children: _jsx(_components.img, {
                    src: "https://assets-docs.agora.io/images/video-sdk/volume-control-mute-implementation-blueprint-11.png",
                    alt: "VolumeControlMute"
                  })
                }), `
`]
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
        platform: "web",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "web"
        }), _jsx(_components.p, {
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsxs(_components.p, {
          children: ["The Agora SDK provides a ", _jsx(_components.code, {
            children: "setVolume"
          }), " method for both local and remote audio track objects to adjust the volume of local audio capture and remote audio playback."]
        }), _jsx(_components.h3, {
          id: "mute-the-local-audio-stream",
          children: "Mute the local audio stream"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio track, call ", _jsx(_components.code, {
            children: "setMuted"
          }), " or ", _jsx(_components.code, {
            children: "setEnabled"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Mute the local audio stream"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "localAudioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setMuted"
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
                  children: "// Unmute the local audio stream"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "localAudioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setMuted"
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
                  children: "false"
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
          id: "adjust-the-playback-volume-of-remote-audio",
          children: "Adjust the playback volume of remote audio"
        }), _jsxs(_components.p, {
          children: ["In this example, ", _jsx(_components.code, {
            children: "remoteUser"
          }), " refers to a subscribed remote user object."]
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
                  children: "// Reduce the volume by half"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "remoteUser.audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Use the original volume"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "remoteUser.audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// To mute remote users without unsubscribing, set the remote volume to 0"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "remoteUser.audioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-capture-volume-of-local-audio-1",
          children: "Adjust the capture volume of local audio"
        }), _jsxs(_components.p, {
          children: ["In this example, ", _jsx(_components.code, {
            children: "localAudioTrack"
          }), " is the local audio track object you created."]
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
                  children: "()."
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
                  children: "localAudioTrack"
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
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Reduce microphone volume by half"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  localAudioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  // Double the microphone volume"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  localAudioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                  children: "200"
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
                  children: "  // Set the microphone volume to 0"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  localAudioTrack."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "setVolume"
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
                  children: "});"
                })
              })]
            })
          })
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Caution"
          }), _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you set the volume too high using the signal volume adjustment methods, it may lead to audio distortion on some devices."
            })
          })]
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
          children: "Use one or more of the following volume control methods to adjust volume settings."
        }), _jsx(_components.h3, {
          id: "mute-and-unmute-users-8",
          children: "Mute and unmute users"
        }), _jsxs(_components.p, {
          children: ["To mute or unmute the local audio stream, call ", _jsx(_components.code, {
            children: "muteLocalAudioStream"
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
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Stop publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: "// Resume publishing the local audio stream"
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
                  children: "muteLocalAudioStream"
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
                  children: "false"
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
        }), _jsxs(_components.p, {
          children: ["To mute or unmute a remote user, call ", _jsx(_components.code, {
            children: "muteRemoteAudioStream"
          }), " with the ", _jsx(_components.code, {
            children: "uid"
          }), " of the remote user:"]
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
                  children: "// Stop subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: "// Resume subscribing to the audio stream of the remote user"
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
                  children: "muteRemoteAudioStream"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(remoteUid, "
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["To mute remote users without unsubscribing, set their ", _jsx(_components.a, {
                href: "#adjust-the-playback-volume",
                children: "playback volume"
              }), " to ", _jsx(_components.code, {
                children: "0"
              }), "."]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-playback-volume-8",
          children: "Adjust the playback volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustPlaybackSignalVolume"
          }), " or ", _jsx(_components.code, {
            children: "adjustUserPlaybackSignalVolume"
          }), " to adjust the volume of the audio playback signal."]
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
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " volume "
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
                  children: " 50"
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
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " uid "
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
                  children: " 123456"
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
                  children: "// Set the local playback volume for all remote users"
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
                  children: "adjustPlaybackSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(volume);"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Set the local playback volume for a specific remote user. For example, user 123456"
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
                  children: "adjustUserPlaybackSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(uid, volume)"
                })]
              })]
            })
          })
        }), _jsx(_components.h3, {
          id: "adjust-the-recording-volume-8",
          children: "Adjust the recording volume"
        }), _jsxs(_components.p, {
          children: ["Call ", _jsx(_components.code, {
            children: "adjustRecordingSignalVolume"
          }), " to adjust the volume of the audio recording signal."]
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
                  children: "// Adjust the recording signal volume to 50"
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
                  children: " vol "
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
                  children: " 50"
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
                  children: "adjustRecordingSignalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(vol);"
                })]
              })]
            })
          })
        }), _jsx(_components.p, {
          children: "When configuring audio settings, it's essential to understand the default behavior and the options available. Here are the key points to keep in mind:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The SDK defaults to a device volume of ", _jsx(_components.code, {
              children: "85"
            }), " when using the recording device to capture audio signals."]
          }), `
`, _jsxs(_components.li, {
            children: ["A volume of ", _jsx(_components.code, {
              children: "0"
            }), " means mute, and a volume of ", _jsx(_components.code, {
              children: "255"
            }), " represents the maximum volume of the device."]
          }), `
`, _jsx(_components.li, {
            children: "If the SDK detects that the recording volume is too low in the current environment, it automatically increases the volume of the recording device."
          }), `
`, _jsx(_components.li, {
            children: "The volume of the recording device directly influences the global volume of the device."
          }), `
`, _jsx(_components.li, {
            children: "If the default recording device volume does not meet your requirements, adjust it by regulating the signal amplitude captured by the microphone or sound card."
          }), `
`]
        }), _jsx(_components.h3, {
          id: "get-volume-information-of-users-10",
          children: "Get volume information of users"
        }), _jsxs(_components.p, {
          children: ["RTC SDK enables you to obtain the user IDs and corresponding volumes of the three users with the highest instantaneous volumes in a channel during the process of audio recording, mixing, and playback. You use the ", _jsx(_components.code, {
            children: "onAudioVolumeIndication"
          }), " callback to obtain this information. A returned ", _jsx(_components.code, {
            children: "uid"
          }), " of ", _jsx(_components.code, {
            children: "0"
          }), " in the callback indicates the local user."]
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
                  children: "// Retrieve the user IDs of the three users with the highest instantaneous speaking volume,"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// their respective volumes, and determine whether the local user is speaking."
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
                  children: " CAudioVolumeEventHandler"
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
                  children: "onAudioVolumeIndication"
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "unsigned"
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
                  children: " totalVolume"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "){"
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
                  children: "// Enable the onAudioVolumeIndication callback"
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
                  children: "enableAudioVolumeIndication"
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
                  children: ");"
                })]
              })]
            })
          })
        }), _jsxs(CalloutContainer, {
          type: "warning",
          children: [_jsx(CalloutTitle, {
            children: "Note"
          }), _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Call ", _jsx(_components.code, {
                children: "enableAudioVolumeIndication"
              }), " to enable reporting of the users' volume in the callback."]
            })
          })]
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
`, _jsxs(_PlatformTabsGroup, {
      groupMode: "structured",
      canonicalPlatform: "web",
      platforms: '["android","electron","flutter","ios","macos","javascript","react-native","unity","unreal","blueprint","web","windows"]',
      showTabs: "true",
      children: [_jsxs(_PlatformPanel, {
        platform: "android",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "android"
        }), _jsx(_components.h3, {
          id: "api-reference",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsxs(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_enableinearmonitoring2",
              children: [_jsx(_components.code, {
                children: "enableInEarMonitoring"
              }), " [2/2]"]
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setinearmonitoringvolume",
              children: _jsx(_components.code, {
                children: "setInEarMonitoringVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/Android/APIExample/app/src/main/java/io/agora/api/example/examples/basic/JoinChannelAudio.java",
              children: "JoinChannelAudio"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
        }), _jsx(_components.h3, {
          id: "api-reference-1",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
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
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/electron/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-1",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx",
              children: "JoinChannelAudio"
            })]
          }), `
`]
        }), _jsx(_components.p, {
          children: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Electron-SDK/blob/main/example/src/renderer/examples/advanced/AudioMixing/AudioMixing.tsx",
              children: "AudioMixing"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-1",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
        }), _jsx(_components.h3, {
          id: "api-reference-2",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/flutter/6.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-2",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK/blob/main/example/lib/examples/basic/join_channel_audio/join_channel_audio.dart",
              children: "join_channel_audio.dart"
            })]
          }), `
`]
        }), _jsx(_components.p, {
          children: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Agora-Flutter-SDK/blob/main/example/lib/examples/advanced/audio_mixing/audio_mixing.dart",
              children: "audio_mixing.dart"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-2",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
        }), _jsx(_components.h3, {
          id: "api-reference-3",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustrecordingsignalvolume(_:)",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustplaybacksignalvolume(_:)",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustuserplaybacksignalvolumeex(_:volume:connection:)",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume(_:)",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enable(inearmonitoring:includeaudiofilters:)",
              children: _jsx(_components.code, {
                children: "enableInEarMonitoring"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setinearmonitoringvolume(_:)",
              children: _jsx(_components.code, {
                children: "setInEarMonitoringVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication(_:smooth:reportvad:)",
              children: _jsx(_components.code, {
                children: "enableaudiovolumeindication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agoraspatialaudiokitbase/mutelocalaudiostream(_:)",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostream(_:mute:)",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-3",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Basic/JoinChannelAudio",
              children: "JoinChannelAudio"
            })]
          }), `
`]
        }), _jsx(_components.p, {
          children: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/iOS/APIExample/APIExample/Examples/Advanced/AudioMixing",
              children: "AudioMixing"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-3",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
        }), _jsx(_components.h3, {
          id: "api-reference-4",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/setdevicevolume(_:volume:)",
              children: _jsx(_components.code, {
                children: "setdevicevolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustrecordingsignalvolume(_:)",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustplaybacksignalvolume(_:)",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustuserplaybacksignalvolumeex(_:volume:connection:)",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/adjustaudiomixingplayoutvolume(_:)",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/enableaudiovolumeindication(_:smooth:reportvad:)",
              children: _jsx(_components.code, {
                children: "enableaudiovolumeindication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agoraspatialaudiokitbase/mutelocalaudiostream(_:)",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/macos/4.x/documentation/agorartckit/agorartcenginekit/muteremoteaudiostream(_:mute:)",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-4",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/blob/main/macOS/APIExample/Examples/Basic/JoinChannelAudio/JoinChannelAudio.swift",
              children: "JoinChannelAudio"
            })]
          }), `
`]
        }), _jsx(_components.p, {
          children: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/macOS/APIExample/Examples/Advanced/AudioMixing",
              children: "AudioMixing"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-4",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      }), _jsxs(_PlatformPanel, {
        platform: "javascript",
        children: [_jsx(_PlatformProcessedMarker, {
          groupMode: "structured",
          canonicalPlatform: "web",
          platform: "javascript"
        }), _jsx(_components.h3, {
          id: "api-reference-5",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/reactjs/2.x/interfaces/IMicrophoneAudioTrack.html",
              children: _jsx(_components.code, {
                children: "IMicrophoneAudioTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/reactjs/2.x/interfaces/IRemoteAudioTrack.html",
              children: _jsx(_components.code, {
                children: "IRemoteAudioTrack"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/reactjs/2.x/interfaces/IMicrophoneAudioTrack.html#setVolume.setVolume-1",
              children: _jsx(_components.code, {
                children: "setVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/reactjs/2.x/functions/useVolumeLevel.html",
              children: _jsx(_components.code, {
                children: "useVolumeLevel"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-5",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for monitoring audio volume for your reference."
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/agora-rtc-react/blob/main/packages/agora-rtc-react/test/hook/useVolumeLevel.test.ts",
              children: "useVolumeLevel"
            })]
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
        }), _jsx(_components.h3, {
          id: "api-reference-6",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
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
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-6",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/basic/JoinChannelAudio/JoinChannelAudio.tsx",
              children: "JoinChannelAudio"
            })]
          }), `
`]
        }), _jsx(_components.p, {
          children: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/AudioMixing/AudioMixing.tsx",
              children: "AudioMixing"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-5",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
          id: "api-reference-7",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "AdjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "AdjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "AdjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "AdjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "OnAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream",
              children: _jsx(_components.code, {
                children: "MuteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "MuteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-7",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/tree/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/AudioMixing",
              children: "AudioMixing"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-6",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
          id: "api-reference-8",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unreal-engine/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-project",
          children: "Sample project"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open source sample project for your reference. Download or view the ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-CPP-Example",
            children: "SDK API-Example"
          }), " source code for a more detailed example."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-7",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
          id: "sample-projects-8",
          children: "Sample projects"
        }), _jsxs(_components.p, {
          children: ["Agora provides an open-source ", _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example",
            children: "Blueprint sample project"
          }), ` on GitHub for your reference.
To learn how to implement call volume adjustment, refer to `, _jsx(_components.a, {
            href: "https://github.com/AgoraIO-Extensions/Agora-Unreal-RTC-SDK/tree/main/Agora-Unreal-SDK-Blueprint-Example/Content/API-Example/Basic/JoinChannelAudio",
            children: "JoinChannelAudio"
          }), " in the sample project."]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-8",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
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
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/blueprint/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "FOnAudioVolumeIndication"
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
          id: "api-reference-10",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html#setvolume",
              children: _jsx(_components.code, {
                children: "ILocalAudioTrack.setVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iremoteaudiotrack.html#setvolume",
              children: _jsx(_components.code, {
                children: "IRemoteAudioTrack.setVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html#setmuted",
              children: _jsx(_components.code, {
                children: "ILocalAudioTrack.setMuted"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/ilocalaudiotrack.html#setenabled",
              children: _jsx(_components.code, {
                children: "ILocalAudioTrack.setEnabled"
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
        }), _jsx(_components.h3, {
          id: "api-reference-11",
          children: "API reference"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustrecordingsignalvolume",
              children: _jsx(_components.code, {
                children: "adjustRecordingSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustuserplaybacksignalvolume",
              children: _jsx(_components.code, {
                children: "adjustUserPlaybackSignalVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_adjustaudiomixingplayoutvolume",
              children: _jsx(_components.code, {
                children: "adjustAudioMixingPlayoutVolume"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudiovolumeindication",
              children: _jsx(_components.code, {
                children: "onAudioVolumeIndication"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_mutelocalaudiostream",
              children: _jsx(_components.code, {
                children: "muteLocalAudioStream"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/cpp/4.x/API/class_irtcengine.html#api_irtcengine_muteremoteaudiostream",
              children: _jsx(_components.code, {
                children: "muteRemoteAudioStream"
              })
            })
          }), `
`]
        }), _jsx(_components.h3, {
          id: "sample-projects-9",
          children: "Sample projects"
        }), _jsx(_components.p, {
          children: "Agora offers the following open-source sample project for adjusting recording, playback, and in-ear monitoring volumes for your reference:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioVolume",
              children: "AudioVolume"
            })]
          }), `
`]
        }), _jsx(_components.p, {
          children: "For adjusting the playback volume of mixing or audio effect files, refer to the following sample project:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["GitHub: ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioMixing",
              children: "AudioMixing"
            }), " or ", _jsx(_components.a, {
              href: "https://github.com/AgoraIO/API-Examples/tree/main/windows/APIExample/APIExample/Advanced/AudioEffect",
              children: "AudioEffect"
            })]
          }), `
`]
        }), _jsx(_components.h3, {
          id: "frequently-asked-questions-9",
          children: "Frequently asked questions"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "/en/api-reference/faq/quality/audio_low",
              children: "How can I solve the problem of low volume?"
            })
          }), `
`]
        }), _jsx(_PlatformProcessedMarker, {
          close: "true"
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "see-also",
      children: "See also"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/customize-audio-processing/custom-audio",
          children: "Custom audio source"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/capture-and-render-video/custom-video",
          children: "Custom video source"
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
