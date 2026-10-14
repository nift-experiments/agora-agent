import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Device management",
  description: ""
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="web" platforms="[&#x22;android&#x22;,&#x22;ios&#x22;,&#x22;web&#x22;,&#x22;react-native&#x22;,&#x22;unity&#x22;]" showTabs="true">
  <_PlatformPanel platform="android">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="android" />

    Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio.

    This page shows you how to change audio routing in your app.

    ## Understand the tech [#understand-the-tech]

    Audio routing enables you to change the playback device from the default device to a selected device.

    #### Default audio routing [#default-audio-routing]

    The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device.

    The SDK uses the following default audio routing in different use-cases:

    * **Voice call**: Earpiece
    * **Video call**: Speaker
    * **Live voice call**: Speaker
    * **Live video streaming**: Speaker

    ## Change audio routing [#change-audio-routing]

    Depending on your role, you can change audio routing in the following ways:

    * **Device user**: Add or remove external devices, such as headphones or Bluetooth devices.
    * **App developer**:
      * Before joining a channel, call \`setDefaultAudioRoutetoSpeakerphone\` to change the default audio routing.
      * After joining a channel, call \`setEnableSpeakerphone\` to set the current audio routing.

    Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:

    1. User behavior has the highest priority for audio routing changes.
       When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.

    2. When no external device is connected, the SDK uses the default audio routing.
       Call \`setDefaultAudioRoutetoSpeakerphone\` to change this default setting. If the current audio route is the device itself, \`setDefaultAudioRoutetoSpeakerphone\` modifies the current audio route.

    3. Without system limitations, calling \`setEnableSpeakerphone\` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
       However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.

    Any changes to the audio route trigger the \`onAudioRouteChanged\` callback. Use this callback to get the current audio route.

    ### Plug and unplug devices to change audio routing [#plug-and-unplug-devices-to-change-audio-routing]

    Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device.

    Refer to the following example to see how plugging and unplugging a device changes the audio routing:

    1. A user joins the channel. Audio is routed to speakers.

    2. The user plugs in headphones. Audio routing changes to headphones.

    3. The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device.

    4. The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones.

    ### Change the default audio routing [#change-the-default-audio-routing]

    Before joining a channel, call the \`setDefaultAudioRoutetoSpeakerphone\` method to switch the default audio routing to either the handset or the speakerphone. Set the \`defaultToSpeaker\` parameter of this method to \`true\` to set the default audio route to speakerphone, and to \`false\` to set the default audio route to handset. The setting remains valid until you destroy the engine.

    Refer to the following example to understand how to change the default audio routing:

    1. The user plugs in the headset. Audio is routed to the headset.

    2. The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario.

    3. Call \`setDefaultAudioRoutetoSpeakerphone(true)\` in the app. Audio routing is changed to speakerphone.

    4. User plugs in headphones. Audio routing changes to headphones.

    5. Call \`setDefaultAudioRoutetoSpeakerphone(true)\`. The audio is still routed to the headset because \`setDefaultAudioRoutetoSpeakerphone\` only works for the audio routing of the device.

    6. The user unplugs the headphones. The audio routing is changed to speakerphone.

    ### Changing the current audio routing [#changing-the-current-audio-routing]

    If the operating system allows it, call the \`setEnableSpeakerphone\` method to change the current audio routing to speaker.

    Refer to the following example to understand how to change the current audio routing:

    * Example 1:
      1. User joins a channel. Audio is routed to the speaker.
      2. User plugs in headphones. Audio routing is changed to headphones.
      3. App calls \`setEnableSpeakerphone(true)\`. Audio is still routed to headphones.

    * Example 2:
      1. A user joins a voice call channel. Audio is routed to the speakerphone.
      2. App calls \`setEnableSpeakerphone(true)\`. Audio routing is changed to speakerphone.
      3. User plugs in headset. Audio routing changes to headset.
      4. User unplugs the headset. Audio routing changes to earpiece.
         <CalloutContainer type="info">
           <CalloutDescription>
             If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting \`setEnableSpeakerphone(true)\` is invalid and the audio is played through the external device.
           </CalloutDescription>
         </CalloutContainer>

    ## Reference [#reference]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference]

    * [\`setDefaultAudioRoutetoSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setdefaultaudioroutetospeakerphone)

    * [\`setEnableSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setenablespeakerphone)

    * [\`onAudioRouteChanged\`](https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioroutingchanged)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="ios">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="ios" />

    Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio.

    This page shows you how to change audio routing in your app.

    ## Understand the tech [#understand-the-tech-1]

    Audio routing enables you to change the playback device from the default device to a selected device.

    #### Default audio routing [#default-audio-routing-1]

    The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device.

    The SDK uses the following default audio routing in different use-cases:

    * **Voice call**: Earpiece
    * **Video call**: Speaker
    * **Live voice call**: Speaker
    * **Live video streaming**: Speaker

    ## Change audio routing [#change-audio-routing-1]

    Depending on your role, you can change audio routing in the following ways:

    * **Device user**: Add or remove external devices, such as headphones or Bluetooth devices.
    * **App developer**:
      * Before joining a channel, call \`setDefaultAudioRouteToSpeakerphone\` to change the default audio routing.
      * After joining a channel, call \`setEnableSpeakerphone\` to set the current audio routing.

    Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:

    1. User behavior has the highest priority for audio routing changes.
       When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.

    2. When no external device is connected, the SDK uses the default audio routing.
       Call \`setDefaultAudioRouteToSpeakerphone\` to change this default setting. If the current audio route is the device itself, \`setDefaultAudioRouteToSpeakerphone\` modifies the current audio route.

    3. Without system limitations, calling \`setEnableSpeakerphone\` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
       However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routing is not recognized when using **in-call volume** mode. To use an external sound card or microphone, set the **audio application** scenario to the **high quality** scenario \`AgoraAudioScenarioGameStreaming\`. In this scenario, the SDK switches to **media volume** to work around this issue.
      </CalloutDescription>
    </CalloutContainer>

    Any changes to the audio route trigger the \`didAudioRouteChanged\` callback. Use this callback to get the current audio route.

    ### Plug and unplug devices to change audio routing [#plug-and-unplug-devices-to-change-audio-routing-1]

    Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device.

    Refer to the following example to see how plugging and unplugging a device changes the audio routing:

    1. A user joins the channel. Audio is routed to speakers.

    2. The user plugs in headphones. Audio routing changes to headphones.

    3. The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device.

    4. The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones.

    ### Change the default audio routing [#change-the-default-audio-routing-1]

    Before joining a channel, call the \`setDefaultAudioRouteToSpeakerphone\` method to switch the default audio routing to either the handset or the speakerphone. Set the \`defaultToSpeaker\` parameter of this method to \`true\` to set the default audio route to speakerphone, and to \`false\` to set the default audio route to handset. The setting remains valid until you destroy the engine.

    Refer to the following example to understand how to change the default audio routing:

    1. The user plugs in the headset. Audio is routed to the headset.

    2. The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario.

    3. Call \`setDefaultAudioRouteToSpeakerphone(true)\` in the app. Audio routing is changed to speakerphone.

    4. User plugs in headphones. Audio routing changes to headphones.

    5. Call \`setDefaultAudioRouteToSpeakerphone(true)\`. The audio is still routed to the headset because \`setDefaultAudioRouteToSpeakerphone\` only works for the audio routing of the device.

    6. The user unplugs the headphones. The audio routing is changed to speakerphone.

    ### Changing the current audio routing [#changing-the-current-audio-routing-1]

    If the operating system allows it, call the \`setEnableSpeakerphone\` method to change the current audio routing to speaker.

    Refer to the following example to understand how to change the current audio routing:

    * Example 1:
      1. User joins a channel. Audio is routed to the speaker.
      2. User plugs in headphones. Audio routing is changed to headphones.
      3. App calls \`setEnableSpeakerphone(true)\`. Audio is still routed to headphones.

    * Example 2:
      1. A user joins a voice call channel. Audio is routed to the speakerphone.
      2. App calls \`setEnableSpeakerphone(true)\`. Audio routing is changed to speakerphone.
      3. User plugs in headset. Audio routing changes to headset.
      4. User unplugs the headset. Audio routing changes to earpiece.
         <CalloutContainer type="info">
           <CalloutDescription>
             If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting \`setEnableSpeakerphone(true)\` is invalid and the audio is played through the external device.
           </CalloutDescription>
         </CalloutContainer>

    ## Reference [#reference-1]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-1]

    * [\`setDefaultAudioRouteToSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdefaultaudioroutetospeakerphone\\(_:\\))

    * [\`setEnableSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setenablespeakerphone\\(_:\\))

    * [\`didAudioRouteChanged\`](https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine\\(_\\:didaudioroutechanged:\\))

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="web">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="web" />

    RTC SDK provides APIs for managing input and output devices. Use these APIs to switch devices dynamically during Video Calling and implement hot-swap logic when devices are added or removed.

    ## Understand the tech [#understand-the-tech-2]

    Managing audio and video devices involves selecting, switching, and handling changes in media input and output devices. The RTC SDK provides APIs to:

    * Change the default audio output route to a selected device.
    * List available devices, including microphones and cameras.
    * Dynamically switch devices during Video Calling.
    * Detect device changes (added or removed) and enable hot-swapping.

    ### Change the default audio route [#change-the-default-audio-route]

    To change the audio output device, retrieve a list of available media devices, filter for audio output devices, and select the desired \`deviceId\`.

    \`\`\`js
    // Request a list of media devices and filter audio output devices.
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioOutputs = devices.filter(device => device.kind == "audiooutput");

    const audioContext = new AudioContext();

    // Pick the first available audio output.
    const deviceId = audioOutputs[0].deviceId;
    await audioContext.setSinkId(deviceId)
    \`\`\`

    For further details on changing the default audio route, see [Change the destination output device in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid).

    ### Change audio or video capture devices [#change-audio-or-video-capture-devices]

    To set an audio or video capture device, retrieve available microphones and cameras using \`AgoraRTC.getMicrophones()\` and \`AgoraRTC.getCameras()\`. Then, call \`setDevice(deviceId)\` with the desired \`deviceId\` to use the selected capture device.

    \`\`\`js
    // Get available microphones and cameras
    const microphones = await AgoraRTC.getMicrophones();
    const cameras = await AgoraRTC.getCameras();

    if (!microphones.length || !cameras.length) {
     console.error("No microphone or camera found");
     return;
    }

    // Switch to the first available microphone
    localAudioTrack.setDevice(microphones[0].deviceId );
    // Switch to the first available camera
    localVideoTrack.setDevice(cameras[0].deviceId);
    \`\`\`

    Where \`localVideoTrack\` and \`localAudioTrack\` refer to the tracks you created using \`AgoraRTC.createCameraVideoTrack\` and \`AgoraRTC.createMicrophoneAudioTrack\`.

    <CalloutContainer type="info">
      <CalloutDescription>
        You can call \`setDevice\` to change the capture device even after publishing a track. However, on certain mobile devices, this operation may fail due to hardware or browser limitations.
      </CalloutDescription>
    </CalloutContainer>

    ## Hot-swap capture devices [#hot-swap-capture-devices]

    RTC SDK provides the \`onMicrophoneChanged\` and \`onCameraChanged\` callbacks to detect changes in the plug-in status of audio and video devices. Implement listeners for these callbacks and call \`setDevice()\` to switch to a newly connected device automatically.

    \`\`\`javascript
    AgoraRTC.onMicrophoneChanged = async (changedDevice) => {
     // When a new device is detected, switch to the new device
     if (changedDevice.state === "ACTIVE") {
      microphoneTrack.setDevice(changedDevice.device.deviceId);
     } else if (changedDevice.device.label === microphoneTrack.getTrackLabel()) {
      // Switch to an existing device when the unplugged device is the current device
      const oldMicrophones = await AgoraRTC.getMicrophones();
      oldMicrophones[0] && microphoneTrack.setDevice(oldMicrophones[0].deviceId);
     }
    };

    AgoraRTC.onCameraChanged = async (changedDevice) => {
     // When a new device is detected, switch to the new device
     if (changedDevice.state === "ACTIVE") {
      cameraTrack.setDevice(changedDevice.device.deviceId);
     } else if (changedDevice.device.label === cameraTrack.getTrackLabel()) {
      // Switch to an existing device when the unplugged device is the current device
      const oldCameras = await AgoraRTC.getCameras();
      oldCameras[0] && cameraTrack.setDevice(oldCameras[0].deviceId);
     }
    };
    \`\`\`

    <CalloutContainer type="warning">
      <CalloutDescription>
        If the user adds a virtual or a faulty device, hot-swap routing logic may result in no picture or no sound when the device is plugged-in or unplugged.
      </CalloutDescription>
    </CalloutContainer>

    ## Reference [#reference-2]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### API reference [#api-reference-2]

    * [\`setDevice\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#setdevice)

    * [\`onMicrophoneChanged\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#onmicrophonechanged)

    * [\`onCameraChanged\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#oncamerachanged)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="react-native">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="react-native" />

    Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio.

    This page shows you how to change audio routing in your app.

    ## Understand the tech [#understand-the-tech-3]

    Audio routing enables you to change the playback device from the default device to a selected device.

    <CalloutContainer type="info">
      <CalloutDescription>
        This guide is applicable to Android and iOS only.
      </CalloutDescription>
    </CalloutContainer>

    #### Default audio routing [#default-audio-routing-2]

    The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device.

    The SDK uses the following default audio routing in different use-cases:

    * **Voice call**: Earpiece
    * **Video call**: Speaker
    * **Live voice call**: Speaker
    * **Live video streaming**: Speaker

    ## Change audio routing [#change-audio-routing-2]

    Depending on your role, you can change audio routing in the following ways:

    * **Device user**: Add or remove external devices, such as headphones or Bluetooth devices.
    * **App developer**:
      * Before joining a channel, call \`setDefaultAudioRouteToSpeakerphone\` to change the default audio routing.
      * After joining a channel, call \`setEnableSpeakerphone\` to set the current audio routing.

    Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:

    1. User behavior has the highest priority for audio routing changes.
       When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.

    2. When no external device is connected, the SDK uses the default audio routing.
       Call \`setDefaultAudioRouteToSpeakerphone\` to change this default setting. If the current audio route is the device itself, \`setDefaultAudioRouteToSpeakerphone\` modifies the current audio route.

    3. Without system limitations, calling \`setEnableSpeakerphone\` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
       However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routing is not recognized when using **in-call volume** mode. To use an external sound card or microphone, set the **audio application** scenario to the **high quality** scenario \`AgoraAudioScenarioGameStreaming\`. In this scenario, the SDK switches to **media volume** to work around this issue.
      </CalloutDescription>
    </CalloutContainer>

    Any changes to the audio route trigger the \`onAudioRoutingChanged\` callback. Use this callback to get the current audio route.

    ### Plug and unplug devices to change audio routing [#plug-and-unplug-devices-to-change-audio-routing-2]

    Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device.

    Refer to the following example to see how plugging and unplugging a device changes the audio routing:

    1. A user joins the channel. Audio is routed to speakers.

    2. The user plugs in headphones. Audio routing changes to headphones.

    3. The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device.

    4. The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones.

    ### Change the default audio routing [#change-the-default-audio-routing-2]

    Before joining a channel, call the \`setDefaultAudioRouteToSpeakerphone\` method to switch the default audio routing to either the handset or the speakerphone. Set the \`defaultToSpeaker\` parameter of this method to \`true\` to set the default audio route to speakerphone, and to \`false\` to set the default audio route to handset. The setting remains valid until you destroy the engine.

    Refer to the following example to understand how to change the default audio routing:

    1. The user plugs in the headset. Audio is routed to the headset.

    2. The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario.

    3. Call \`setDefaultAudioRouteToSpeakerphone(true)\` in the app. Audio routing is changed to speakerphone.

    4. User plugs in headphones. Audio routing changes to headphones.

    5. Call \`setDefaultAudioRouteToSpeakerphone(true)\`. The audio is still routed to the headset because \`setDefaultAudioRouteToSpeakerphone\` only works for the audio routing of the device.

    6. The user unplugs the headphones. The audio routing is changed to speakerphone.

    ### Changing the current audio routing [#changing-the-current-audio-routing-2]

    If the operating system allows it, call the \`setEnableSpeakerphone\` method to change the current audio routing to speaker.

    Refer to the following example to understand how to change the current audio routing:

    * Example 1:
      1. User joins a channel. Audio is routed to the speaker.
      2. User plugs in headphones. Audio routing is changed to headphones.
      3. App calls \`setEnableSpeakerphone(true)\`. Audio is still routed to headphones.

    * Example 2:
      1. A user joins a voice call channel. Audio is routed to the speakerphone.
      2. App calls \`setEnableSpeakerphone(true)\`. Audio routing is changed to speakerphone.
      3. User plugs in headset. Audio routing changes to headset.
      4. User unplugs the headset. Audio routing changes to earpiece.
         <CalloutContainer type="info">
           <CalloutDescription>
             If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting \`setEnableSpeakerphone(true)\` is invalid and the audio is played through the external device.
           </CalloutDescription>
         </CalloutContainer>

    ## Reference [#reference-3]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Sample project [#sample-project]

    Agora provides the [AudioCallRoute](https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/AudioCallRoute/AudioCallRoute.tsx) open-source sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-3]

    * [\`setDefaultAudioRouteToSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setdefaultaudioroutetospeakerphone)

    * [\`setEnableSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setenablespeakerphone)

    * [\`onAudioRoutingChanged\`](https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioroutingchanged)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="unity">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="web" platform="unity" />

    Audio routing refers to selection of the audio output device used for playback by your game. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio.

    This page shows you how to change audio routing in your game.

    ## Understand the tech [#understand-the-tech-4]

    Audio routing enables you to change the playback device from the default device to a selected device.

    <CalloutContainer type="info">
      <CalloutDescription>
        This guide is applicable to Android and iOS only.
      </CalloutDescription>
    </CalloutContainer>

    #### Default audio routing [#default-audio-routing-3]

    The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device.

    The SDK uses the following default audio routing in different use-cases:

    * **Voice call**: Earpiece
    * **Video call**: Speaker
    * **Live voice call**: Speaker
    * **Live video streaming**: Speaker

    ## Change audio routing [#change-audio-routing-3]

    Depending on your role, you can change audio routing in the following ways:

    * **Device user**: Add or remove external devices, such as headphones or Bluetooth devices.
    * **App developer**:
      * Before joining a channel, call \`SetDefaultAudioRouteToSpeakerphone\` to change the default audio routing.
      * After joining a channel, call \`SetEnableSpeakerphone\` to set the current audio routing.

    Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:

    1. User behavior has the highest priority for audio routing changes.
       When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.

    2. When no external device is connected, the SDK uses the default audio routing.
       Call \`SetDefaultAudioRouteToSpeakerphone\` to change this default setting. If the current audio route is the device itself, \`SetDefaultAudioRouteToSpeakerphone\` modifies the current audio route.

    3. Without system limitations, calling \`SetEnableSpeakerphone\` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
       However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.

    <CalloutContainer type="info">
      <CalloutDescription>
        Due to iOS system limitations, some audio routing is not recognized when using **in-call volume** mode. To use an external sound card or microphone, set the **audio application** scenario to the **high quality** scenario \`AUDIO_SCENARIO_GAME_STREAMING\`. In this scenario, the SDK switches to **media volume** to work around this issue.
      </CalloutDescription>
    </CalloutContainer>

    Any changes to the audio route trigger the \`OnAudioRoutingChanged\` callback. Use this callback to get the current audio route.

    ### Plug and unplug devices to change audio routing [#plug-and-unplug-devices-to-change-audio-routing-3]

    Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device.

    Refer to the following example to see how plugging and unplugging a device changes the audio routing:

    1. A user joins the channel. Audio is routed to speakers.

    2. The user plugs in headphones. Audio routing changes to headphones.

    3. The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device.

    4. The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones.

    ### Change the default audio routing [#change-the-default-audio-routing-3]

    Before joining a channel, call the \`SetDefaultAudioRouteToSpeakerphone\` method to switch the default audio routing to either the handset or the speakerphone. Set the \`defaultToSpeaker\` parameter of this method to \`true\` to set the default audio route to speakerphone, and to \`false\` to set the default audio route to handset. The setting remains valid until you destroy the engine.

    Refer to the following example to understand how to change the default audio routing:

    1. The user plugs in the headset. Audio is routed to the headset.

    2. The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario.

    3. Call \`SetDefaultAudioRouteToSpeakerphone(true)\` in the game. Audio routing is changed to speakerphone.

    4. User plugs in headphones. Audio routing changes to headphones.

    5. Call \`SetDefaultAudioRouteToSpeakerphone(true)\`. The audio is still routed to the headset because \`SetDefaultAudioRouteToSpeakerphone\` only works for the audio routing of the device.

    6. The user unplugs the headphones. The audio routing is changed to speakerphone.

    ### Changing the current audio routing [#changing-the-current-audio-routing-3]

    If the operating system allows it, call the \`SetEnableSpeakerphone\` method to change the current audio routing to speaker.

    Refer to the following example to understand how to change the current audio routing:

    * Example 1:
      1. User joins a channel. Audio is routed to the speaker.
      2. User plugs in headphones. Audio routing is changed to headphones.
      3. App calls \`SetEnableSpeakerphone(true)\`. Audio is still routed to headphones.

    * Example 2:
      1. A user joins a voice call channel. Audio is routed to the speakerphone.
      2. App calls \`SetEnableSpeakerphone(true)\`. Audio routing is changed to speakerphone.
      3. User plugs in headset. Audio routing changes to headset.
      4. User unplugs the headset. Audio routing changes to earpiece.
         <CalloutContainer type="info">
           <CalloutDescription>
             If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting \`SetEnableSpeakerphone(true)\` is invalid and the audio is played through the external device.
           </CalloutDescription>
         </CalloutContainer>

    ## Reference [#reference-4]

    This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

    ### Sample project [#sample-project-1]

    Agora provides the [AudioCallRoute](https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/AudioCallRoute/AudioCallRoute.cs) open-source sample project for your reference. Download the project or view the source code for a more detailed example.

    ### API reference [#api-reference-4]

    * [\`SetDefaultAudioRouteToSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setdefaultaudioroutetospeakerphone)

    * [\`SetEnableSpeakerphone\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setenablespeakerphone)

    * [\`OnAudioRoutingChanged\`](https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioroutingchanged)

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
  }, {
    heading: undefined,
    content: "This page shows you how to change audio routing in your app."
  }, {
    heading: "understand-the-tech",
    content: "Audio routing enables you to change the playback device from the default device to a selected device."
  }, {
    heading: "default-audio-routing",
    content: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
  }, {
    heading: "default-audio-routing",
    content: "The SDK uses the following default audio routing in different use-cases:"
  }, {
    heading: "default-audio-routing",
    content: "**Voice call**: Earpiece"
  }, {
    heading: "default-audio-routing",
    content: "**Video call**: Speaker"
  }, {
    heading: "default-audio-routing",
    content: "**Live voice call**: Speaker"
  }, {
    heading: "default-audio-routing",
    content: "**Live video streaming**: Speaker"
  }, {
    heading: "change-audio-routing",
    content: "Depending on your role, you can change audio routing in the following ways:"
  }, {
    heading: "change-audio-routing",
    content: "**Device user**: Add or remove external devices, such as headphones or Bluetooth devices."
  }, {
    heading: "change-audio-routing",
    content: "**App developer**:"
  }, {
    heading: "change-audio-routing",
    content: "Before joining a channel, call `setDefaultAudioRoutetoSpeakerphone` to change the default audio routing."
  }, {
    heading: "change-audio-routing",
    content: "After joining a channel, call `setEnableSpeakerphone` to set the current audio routing."
  }, {
    heading: "change-audio-routing",
    content: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
  }, {
    heading: "change-audio-routing",
    content: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
  }, {
    heading: "change-audio-routing",
    content: "When no external device is connected, the SDK uses the default audio routing.\nCall `setDefaultAudioRoutetoSpeakerphone` to change this default setting. If the current audio route is the device itself, `setDefaultAudioRoutetoSpeakerphone` modifies the current audio route."
  }, {
    heading: "change-audio-routing",
    content: "Without system limitations, calling `setEnableSpeakerphone` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.\nHowever, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route."
  }, {
    heading: "change-audio-routing",
    content: "Any changes to the audio route trigger the `onAudioRouteChanged` callback. Use this callback to get the current audio route."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing",
    content: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing",
    content: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing",
    content: "A user joins the channel. Audio is routed to speakers."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing",
    content: "The user plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing",
    content: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing",
    content: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
  }, {
    heading: "change-the-default-audio-routing",
    content: "Before joining a channel, call the `setDefaultAudioRoutetoSpeakerphone` method to switch the default audio routing to either the handset or the speakerphone. Set the `defaultToSpeaker` parameter of this method to `true` to set the default audio route to speakerphone, and to `false` to set the default audio route to handset. The setting remains valid until you destroy the engine."
  }, {
    heading: "change-the-default-audio-routing",
    content: "Refer to the following example to understand how to change the default audio routing:"
  }, {
    heading: "change-the-default-audio-routing",
    content: "The user plugs in the headset. Audio is routed to the headset."
  }, {
    heading: "change-the-default-audio-routing",
    content: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
  }, {
    heading: "change-the-default-audio-routing",
    content: "Call `setDefaultAudioRoutetoSpeakerphone(true)` in the app. Audio routing is changed to speakerphone."
  }, {
    heading: "change-the-default-audio-routing",
    content: "User plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "change-the-default-audio-routing",
    content: "Call `setDefaultAudioRoutetoSpeakerphone(true)`. The audio is still routed to the headset because `setDefaultAudioRoutetoSpeakerphone` only works for the audio routing of the device."
  }, {
    heading: "change-the-default-audio-routing",
    content: "The user unplugs the headphones. The audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "If the operating system allows it, call the `setEnableSpeakerphone` method to change the current audio routing to speaker."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "Refer to the following example to understand how to change the current audio routing:"
  }, {
    heading: "changing-the-current-audio-routing",
    content: "Example 1:"
  }, {
    heading: "changing-the-current-audio-routing",
    content: "User joins a channel. Audio is routed to the speaker."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "User plugs in headphones. Audio routing is changed to headphones."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "App calls `setEnableSpeakerphone(true)`. Audio is still routed to headphones."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "Example 2:"
  }, {
    heading: "changing-the-current-audio-routing",
    content: "A user joins a voice call channel. Audio is routed to the speakerphone."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "App calls `setEnableSpeakerphone(true)`. Audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "User plugs in headset. Audio routing changes to headset."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "User unplugs the headset. Audio routing changes to earpiece."
  }, {
    heading: "changing-the-current-audio-routing",
    content: "If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting `setEnableSpeakerphone(true)` is invalid and the audio is played through the external device."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference",
    content: "`setDefaultAudioRoutetoSpeakerphone`"
  }, {
    heading: "api-reference",
    content: "`setEnableSpeakerphone`"
  }, {
    heading: "api-reference",
    content: "`onAudioRouteChanged`"
  }, {
    heading: "api-reference",
    content: "Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
  }, {
    heading: "api-reference",
    content: "This page shows you how to change audio routing in your app."
  }, {
    heading: "understand-the-tech-1",
    content: "Audio routing enables you to change the playback device from the default device to a selected device."
  }, {
    heading: "default-audio-routing-1",
    content: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
  }, {
    heading: "default-audio-routing-1",
    content: "The SDK uses the following default audio routing in different use-cases:"
  }, {
    heading: "default-audio-routing-1",
    content: "**Voice call**: Earpiece"
  }, {
    heading: "default-audio-routing-1",
    content: "**Video call**: Speaker"
  }, {
    heading: "default-audio-routing-1",
    content: "**Live voice call**: Speaker"
  }, {
    heading: "default-audio-routing-1",
    content: "**Live video streaming**: Speaker"
  }, {
    heading: "change-audio-routing-1",
    content: "Depending on your role, you can change audio routing in the following ways:"
  }, {
    heading: "change-audio-routing-1",
    content: "**Device user**: Add or remove external devices, such as headphones or Bluetooth devices."
  }, {
    heading: "change-audio-routing-1",
    content: "**App developer**:"
  }, {
    heading: "change-audio-routing-1",
    content: "Before joining a channel, call `setDefaultAudioRouteToSpeakerphone` to change the default audio routing."
  }, {
    heading: "change-audio-routing-1",
    content: "After joining a channel, call `setEnableSpeakerphone` to set the current audio routing."
  }, {
    heading: "change-audio-routing-1",
    content: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
  }, {
    heading: "change-audio-routing-1",
    content: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
  }, {
    heading: "change-audio-routing-1",
    content: "When no external device is connected, the SDK uses the default audio routing.\nCall `setDefaultAudioRouteToSpeakerphone` to change this default setting. If the current audio route is the device itself, `setDefaultAudioRouteToSpeakerphone` modifies the current audio route."
  }, {
    heading: "change-audio-routing-1",
    content: "Without system limitations, calling `setEnableSpeakerphone` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.\nHowever, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route."
  }, {
    heading: "change-audio-routing-1",
    content: "Due to iOS system limitations, some audio routing is not recognized when using **in-call volume** mode. To use an external sound card or microphone, set the **audio application** scenario to the **high quality** scenario `AgoraAudioScenarioGameStreaming`. In this scenario, the SDK switches to **media volume** to work around this issue."
  }, {
    heading: "change-audio-routing-1",
    content: "Any changes to the audio route trigger the `didAudioRouteChanged` callback. Use this callback to get the current audio route."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-1",
    content: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-1",
    content: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-1",
    content: "A user joins the channel. Audio is routed to speakers."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-1",
    content: "The user plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-1",
    content: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-1",
    content: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "Before joining a channel, call the `setDefaultAudioRouteToSpeakerphone` method to switch the default audio routing to either the handset or the speakerphone. Set the `defaultToSpeaker` parameter of this method to `true` to set the default audio route to speakerphone, and to `false` to set the default audio route to handset. The setting remains valid until you destroy the engine."
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "Refer to the following example to understand how to change the default audio routing:"
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "The user plugs in the headset. Audio is routed to the headset."
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "Call `setDefaultAudioRouteToSpeakerphone(true)` in the app. Audio routing is changed to speakerphone."
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "User plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "Call `setDefaultAudioRouteToSpeakerphone(true)`. The audio is still routed to the headset because `setDefaultAudioRouteToSpeakerphone` only works for the audio routing of the device."
  }, {
    heading: "change-the-default-audio-routing-1",
    content: "The user unplugs the headphones. The audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "If the operating system allows it, call the `setEnableSpeakerphone` method to change the current audio routing to speaker."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "Refer to the following example to understand how to change the current audio routing:"
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "Example 1:"
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "User joins a channel. Audio is routed to the speaker."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "User plugs in headphones. Audio routing is changed to headphones."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "App calls `setEnableSpeakerphone(true)`. Audio is still routed to headphones."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "Example 2:"
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "A user joins a voice call channel. Audio is routed to the speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "App calls `setEnableSpeakerphone(true)`. Audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "User plugs in headset. Audio routing changes to headset."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "User unplugs the headset. Audio routing changes to earpiece."
  }, {
    heading: "changing-the-current-audio-routing-1",
    content: "If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting `setEnableSpeakerphone(true)` is invalid and the audio is played through the external device."
  }, {
    heading: "reference-1",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-1",
    content: "`setDefaultAudioRouteToSpeakerphone`"
  }, {
    heading: "api-reference-1",
    content: "`setEnableSpeakerphone`"
  }, {
    heading: "api-reference-1",
    content: "`didAudioRouteChanged`"
  }, {
    heading: "api-reference-1",
    content: "RTC SDK provides APIs for managing input and output devices. Use these APIs to switch devices dynamically during Video Calling and implement hot-swap logic when devices are added or removed."
  }, {
    heading: "understand-the-tech-2",
    content: "Managing audio and video devices involves selecting, switching, and handling changes in media input and output devices. The RTC SDK provides APIs to:"
  }, {
    heading: "understand-the-tech-2",
    content: "Change the default audio output route to a selected device."
  }, {
    heading: "understand-the-tech-2",
    content: "List available devices, including microphones and cameras."
  }, {
    heading: "understand-the-tech-2",
    content: "Dynamically switch devices during Video Calling."
  }, {
    heading: "understand-the-tech-2",
    content: "Detect device changes (added or removed) and enable hot-swapping."
  }, {
    heading: "change-the-default-audio-route",
    content: "To change the audio output device, retrieve a list of available media devices, filter for audio output devices, and select the desired `deviceId`."
  }, {
    heading: "change-the-default-audio-route",
    content: "For further details on changing the default audio route, see Change the destination output device in Web Audio."
  }, {
    heading: "change-audio-or-video-capture-devices",
    content: "To set an audio or video capture device, retrieve available microphones and cameras using `AgoraRTC.getMicrophones()` and `AgoraRTC.getCameras()`. Then, call `setDevice(deviceId)` with the desired `deviceId` to use the selected capture device."
  }, {
    heading: "change-audio-or-video-capture-devices",
    content: "Where `localVideoTrack` and `localAudioTrack` refer to the tracks you created using `AgoraRTC.createCameraVideoTrack` and `AgoraRTC.createMicrophoneAudioTrack`."
  }, {
    heading: "change-audio-or-video-capture-devices",
    content: "You can call `setDevice` to change the capture device even after publishing a track. However, on certain mobile devices, this operation may fail due to hardware or browser limitations."
  }, {
    heading: "hot-swap-capture-devices",
    content: "RTC SDK provides the `onMicrophoneChanged` and `onCameraChanged` callbacks to detect changes in the plug-in status of audio and video devices. Implement listeners for these callbacks and call `setDevice()` to switch to a newly connected device automatically."
  }, {
    heading: "hot-swap-capture-devices",
    content: "If the user adds a virtual or a faulty device, hot-swap routing logic may result in no picture or no sound when the device is plugged-in or unplugged."
  }, {
    heading: "reference-2",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "api-reference-2",
    content: "`setDevice`"
  }, {
    heading: "api-reference-2",
    content: "`onMicrophoneChanged`"
  }, {
    heading: "api-reference-2",
    content: "`onCameraChanged`"
  }, {
    heading: "api-reference-2",
    content: "Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
  }, {
    heading: "api-reference-2",
    content: "This page shows you how to change audio routing in your app."
  }, {
    heading: "understand-the-tech-3",
    content: "Audio routing enables you to change the playback device from the default device to a selected device."
  }, {
    heading: "understand-the-tech-3",
    content: "This guide is applicable to Android and iOS only."
  }, {
    heading: "default-audio-routing-2",
    content: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
  }, {
    heading: "default-audio-routing-2",
    content: "The SDK uses the following default audio routing in different use-cases:"
  }, {
    heading: "default-audio-routing-2",
    content: "**Voice call**: Earpiece"
  }, {
    heading: "default-audio-routing-2",
    content: "**Video call**: Speaker"
  }, {
    heading: "default-audio-routing-2",
    content: "**Live voice call**: Speaker"
  }, {
    heading: "default-audio-routing-2",
    content: "**Live video streaming**: Speaker"
  }, {
    heading: "change-audio-routing-2",
    content: "Depending on your role, you can change audio routing in the following ways:"
  }, {
    heading: "change-audio-routing-2",
    content: "**Device user**: Add or remove external devices, such as headphones or Bluetooth devices."
  }, {
    heading: "change-audio-routing-2",
    content: "**App developer**:"
  }, {
    heading: "change-audio-routing-2",
    content: "Before joining a channel, call `setDefaultAudioRouteToSpeakerphone` to change the default audio routing."
  }, {
    heading: "change-audio-routing-2",
    content: "After joining a channel, call `setEnableSpeakerphone` to set the current audio routing."
  }, {
    heading: "change-audio-routing-2",
    content: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
  }, {
    heading: "change-audio-routing-2",
    content: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
  }, {
    heading: "change-audio-routing-2",
    content: "When no external device is connected, the SDK uses the default audio routing.\nCall `setDefaultAudioRouteToSpeakerphone` to change this default setting. If the current audio route is the device itself, `setDefaultAudioRouteToSpeakerphone` modifies the current audio route."
  }, {
    heading: "change-audio-routing-2",
    content: "Without system limitations, calling `setEnableSpeakerphone` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.\nHowever, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route."
  }, {
    heading: "change-audio-routing-2",
    content: "Due to iOS system limitations, some audio routing is not recognized when using **in-call volume** mode. To use an external sound card or microphone, set the **audio application** scenario to the **high quality** scenario `AgoraAudioScenarioGameStreaming`. In this scenario, the SDK switches to **media volume** to work around this issue."
  }, {
    heading: "change-audio-routing-2",
    content: "Any changes to the audio route trigger the `onAudioRoutingChanged` callback. Use this callback to get the current audio route."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-2",
    content: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-2",
    content: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-2",
    content: "A user joins the channel. Audio is routed to speakers."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-2",
    content: "The user plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-2",
    content: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-2",
    content: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "Before joining a channel, call the `setDefaultAudioRouteToSpeakerphone` method to switch the default audio routing to either the handset or the speakerphone. Set the `defaultToSpeaker` parameter of this method to `true` to set the default audio route to speakerphone, and to `false` to set the default audio route to handset. The setting remains valid until you destroy the engine."
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "Refer to the following example to understand how to change the default audio routing:"
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "The user plugs in the headset. Audio is routed to the headset."
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "Call `setDefaultAudioRouteToSpeakerphone(true)` in the app. Audio routing is changed to speakerphone."
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "User plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "Call `setDefaultAudioRouteToSpeakerphone(true)`. The audio is still routed to the headset because `setDefaultAudioRouteToSpeakerphone` only works for the audio routing of the device."
  }, {
    heading: "change-the-default-audio-routing-2",
    content: "The user unplugs the headphones. The audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "If the operating system allows it, call the `setEnableSpeakerphone` method to change the current audio routing to speaker."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "Refer to the following example to understand how to change the current audio routing:"
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "Example 1:"
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "User joins a channel. Audio is routed to the speaker."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "User plugs in headphones. Audio routing is changed to headphones."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "App calls `setEnableSpeakerphone(true)`. Audio is still routed to headphones."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "Example 2:"
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "A user joins a voice call channel. Audio is routed to the speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "App calls `setEnableSpeakerphone(true)`. Audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "User plugs in headset. Audio routing changes to headset."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "User unplugs the headset. Audio routing changes to earpiece."
  }, {
    heading: "changing-the-current-audio-routing-2",
    content: "If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting `setEnableSpeakerphone(true)` is invalid and the audio is played through the external device."
  }, {
    heading: "reference-3",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-project",
    content: "Agora provides the AudioCallRoute open-source sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-3",
    content: "`setDefaultAudioRouteToSpeakerphone`"
  }, {
    heading: "api-reference-3",
    content: "`setEnableSpeakerphone`"
  }, {
    heading: "api-reference-3",
    content: "`onAudioRoutingChanged`"
  }, {
    heading: "api-reference-3",
    content: "Audio routing refers to selection of the audio output device used for playback by your game. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
  }, {
    heading: "api-reference-3",
    content: "This page shows you how to change audio routing in your game."
  }, {
    heading: "understand-the-tech-4",
    content: "Audio routing enables you to change the playback device from the default device to a selected device."
  }, {
    heading: "understand-the-tech-4",
    content: "This guide is applicable to Android and iOS only."
  }, {
    heading: "default-audio-routing-3",
    content: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
  }, {
    heading: "default-audio-routing-3",
    content: "The SDK uses the following default audio routing in different use-cases:"
  }, {
    heading: "default-audio-routing-3",
    content: "**Voice call**: Earpiece"
  }, {
    heading: "default-audio-routing-3",
    content: "**Video call**: Speaker"
  }, {
    heading: "default-audio-routing-3",
    content: "**Live voice call**: Speaker"
  }, {
    heading: "default-audio-routing-3",
    content: "**Live video streaming**: Speaker"
  }, {
    heading: "change-audio-routing-3",
    content: "Depending on your role, you can change audio routing in the following ways:"
  }, {
    heading: "change-audio-routing-3",
    content: "**Device user**: Add or remove external devices, such as headphones or Bluetooth devices."
  }, {
    heading: "change-audio-routing-3",
    content: "**App developer**:"
  }, {
    heading: "change-audio-routing-3",
    content: "Before joining a channel, call `SetDefaultAudioRouteToSpeakerphone` to change the default audio routing."
  }, {
    heading: "change-audio-routing-3",
    content: "After joining a channel, call `SetEnableSpeakerphone` to set the current audio routing."
  }, {
    heading: "change-audio-routing-3",
    content: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
  }, {
    heading: "change-audio-routing-3",
    content: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
  }, {
    heading: "change-audio-routing-3",
    content: "When no external device is connected, the SDK uses the default audio routing.\nCall `SetDefaultAudioRouteToSpeakerphone` to change this default setting. If the current audio route is the device itself, `SetDefaultAudioRouteToSpeakerphone` modifies the current audio route."
  }, {
    heading: "change-audio-routing-3",
    content: "Without system limitations, calling `SetEnableSpeakerphone` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.\nHowever, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route."
  }, {
    heading: "change-audio-routing-3",
    content: "Due to iOS system limitations, some audio routing is not recognized when using **in-call volume** mode. To use an external sound card or microphone, set the **audio application** scenario to the **high quality** scenario `AUDIO_SCENARIO_GAME_STREAMING`. In this scenario, the SDK switches to **media volume** to work around this issue."
  }, {
    heading: "change-audio-routing-3",
    content: "Any changes to the audio route trigger the `OnAudioRoutingChanged` callback. Use this callback to get the current audio route."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-3",
    content: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-3",
    content: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-3",
    content: "A user joins the channel. Audio is routed to speakers."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-3",
    content: "The user plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-3",
    content: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
  }, {
    heading: "plug-and-unplug-devices-to-change-audio-routing-3",
    content: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "Before joining a channel, call the `SetDefaultAudioRouteToSpeakerphone` method to switch the default audio routing to either the handset or the speakerphone. Set the `defaultToSpeaker` parameter of this method to `true` to set the default audio route to speakerphone, and to `false` to set the default audio route to handset. The setting remains valid until you destroy the engine."
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "Refer to the following example to understand how to change the default audio routing:"
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "The user plugs in the headset. Audio is routed to the headset."
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "Call `SetDefaultAudioRouteToSpeakerphone(true)` in the game. Audio routing is changed to speakerphone."
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "User plugs in headphones. Audio routing changes to headphones."
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "Call `SetDefaultAudioRouteToSpeakerphone(true)`. The audio is still routed to the headset because `SetDefaultAudioRouteToSpeakerphone` only works for the audio routing of the device."
  }, {
    heading: "change-the-default-audio-routing-3",
    content: "The user unplugs the headphones. The audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "If the operating system allows it, call the `SetEnableSpeakerphone` method to change the current audio routing to speaker."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "Refer to the following example to understand how to change the current audio routing:"
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "Example 1:"
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "User joins a channel. Audio is routed to the speaker."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "User plugs in headphones. Audio routing is changed to headphones."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "App calls `SetEnableSpeakerphone(true)`. Audio is still routed to headphones."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "Example 2:"
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "A user joins a voice call channel. Audio is routed to the speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "App calls `SetEnableSpeakerphone(true)`. Audio routing is changed to speakerphone."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "User plugs in headset. Audio routing changes to headset."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "User unplugs the headset. Audio routing changes to earpiece."
  }, {
    heading: "changing-the-current-audio-routing-3",
    content: "If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting `SetEnableSpeakerphone(true)` is invalid and the audio is played through the external device."
  }, {
    heading: "reference-4",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "sample-project-1",
    content: "Agora provides the AudioCallRoute open-source sample project for your reference. Download the project or view the source code for a more detailed example."
  }, {
    heading: "api-reference-4",
    content: "`SetDefaultAudioRouteToSpeakerphone`"
  }, {
    heading: "api-reference-4",
    content: "`SetEnableSpeakerphone`"
  }, {
    heading: "api-reference-4",
    content: "`OnAudioRoutingChanged`"
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "default-audio-routing",
    content: "Default audio routing"
  }, {
    id: "change-audio-routing",
    content: "Change audio routing"
  }, {
    id: "plug-and-unplug-devices-to-change-audio-routing",
    content: "Plug and unplug devices to change audio routing"
  }, {
    id: "change-the-default-audio-routing",
    content: "Change the default audio routing"
  }, {
    id: "changing-the-current-audio-routing",
    content: "Changing the current audio routing"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "api-reference",
    content: "API reference"
  }, {
    id: "understand-the-tech-1",
    content: "Understand the tech"
  }, {
    id: "default-audio-routing-1",
    content: "Default audio routing"
  }, {
    id: "change-audio-routing-1",
    content: "Change audio routing"
  }, {
    id: "plug-and-unplug-devices-to-change-audio-routing-1",
    content: "Plug and unplug devices to change audio routing"
  }, {
    id: "change-the-default-audio-routing-1",
    content: "Change the default audio routing"
  }, {
    id: "changing-the-current-audio-routing-1",
    content: "Changing the current audio routing"
  }, {
    id: "reference-1",
    content: "Reference"
  }, {
    id: "api-reference-1",
    content: "API reference"
  }, {
    id: "understand-the-tech-2",
    content: "Understand the tech"
  }, {
    id: "change-the-default-audio-route",
    content: "Change the default audio route"
  }, {
    id: "change-audio-or-video-capture-devices",
    content: "Change audio or video capture devices"
  }, {
    id: "hot-swap-capture-devices",
    content: "Hot-swap capture devices"
  }, {
    id: "reference-2",
    content: "Reference"
  }, {
    id: "api-reference-2",
    content: "API reference"
  }, {
    id: "understand-the-tech-3",
    content: "Understand the tech"
  }, {
    id: "default-audio-routing-2",
    content: "Default audio routing"
  }, {
    id: "change-audio-routing-2",
    content: "Change audio routing"
  }, {
    id: "plug-and-unplug-devices-to-change-audio-routing-2",
    content: "Plug and unplug devices to change audio routing"
  }, {
    id: "change-the-default-audio-routing-2",
    content: "Change the default audio routing"
  }, {
    id: "changing-the-current-audio-routing-2",
    content: "Changing the current audio routing"
  }, {
    id: "reference-3",
    content: "Reference"
  }, {
    id: "sample-project",
    content: "Sample project"
  }, {
    id: "api-reference-3",
    content: "API reference"
  }, {
    id: "understand-the-tech-4",
    content: "Understand the tech"
  }, {
    id: "default-audio-routing-3",
    content: "Default audio routing"
  }, {
    id: "change-audio-routing-3",
    content: "Change audio routing"
  }, {
    id: "plug-and-unplug-devices-to-change-audio-routing-3",
    content: "Plug and unplug devices to change audio routing"
  }, {
    id: "change-the-default-audio-routing-3",
    content: "Change the default audio routing"
  }, {
    id: "changing-the-current-audio-routing-3",
    content: "Changing the current audio routing"
  }, {
    id: "reference-4",
    content: "Reference"
  }, {
    id: "sample-project-1",
    content: "Sample project"
  }, {
    id: "api-reference-4",
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
  url: "#default-audio-routing",
  title: _jsx(_Fragment, {
    children: "Default audio routing"
  })
}, {
  depth: 2,
  url: "#change-audio-routing",
  title: _jsx(_Fragment, {
    children: "Change audio routing"
  })
}, {
  depth: 3,
  url: "#plug-and-unplug-devices-to-change-audio-routing",
  title: _jsx(_Fragment, {
    children: "Plug and unplug devices to change audio routing"
  })
}, {
  depth: 3,
  url: "#change-the-default-audio-routing",
  title: _jsx(_Fragment, {
    children: "Change the default audio routing"
  })
}, {
  depth: 3,
  url: "#changing-the-current-audio-routing",
  title: _jsx(_Fragment, {
    children: "Changing the current audio routing"
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
  depth: 2,
  url: "#understand-the-tech-1",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 4,
  url: "#default-audio-routing-1",
  title: _jsx(_Fragment, {
    children: "Default audio routing"
  })
}, {
  depth: 2,
  url: "#change-audio-routing-1",
  title: _jsx(_Fragment, {
    children: "Change audio routing"
  })
}, {
  depth: 3,
  url: "#plug-and-unplug-devices-to-change-audio-routing-1",
  title: _jsx(_Fragment, {
    children: "Plug and unplug devices to change audio routing"
  })
}, {
  depth: 3,
  url: "#change-the-default-audio-routing-1",
  title: _jsx(_Fragment, {
    children: "Change the default audio routing"
  })
}, {
  depth: 3,
  url: "#changing-the-current-audio-routing-1",
  title: _jsx(_Fragment, {
    children: "Changing the current audio routing"
  })
}, {
  depth: 2,
  url: "#reference-1",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  depth: 3,
  url: "#change-the-default-audio-route",
  title: _jsx(_Fragment, {
    children: "Change the default audio route"
  })
}, {
  depth: 3,
  url: "#change-audio-or-video-capture-devices",
  title: _jsx(_Fragment, {
    children: "Change audio or video capture devices"
  })
}, {
  depth: 2,
  url: "#hot-swap-capture-devices",
  title: _jsx(_Fragment, {
    children: "Hot-swap capture devices"
  })
}, {
  depth: 2,
  url: "#reference-2",
  title: _jsx(_Fragment, {
    children: "Reference"
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
  url: "#default-audio-routing-2",
  title: _jsx(_Fragment, {
    children: "Default audio routing"
  })
}, {
  depth: 2,
  url: "#change-audio-routing-2",
  title: _jsx(_Fragment, {
    children: "Change audio routing"
  })
}, {
  depth: 3,
  url: "#plug-and-unplug-devices-to-change-audio-routing-2",
  title: _jsx(_Fragment, {
    children: "Plug and unplug devices to change audio routing"
  })
}, {
  depth: 3,
  url: "#change-the-default-audio-routing-2",
  title: _jsx(_Fragment, {
    children: "Change the default audio routing"
  })
}, {
  depth: 3,
  url: "#changing-the-current-audio-routing-2",
  title: _jsx(_Fragment, {
    children: "Changing the current audio routing"
  })
}, {
  depth: 2,
  url: "#reference-3",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#sample-project",
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
  depth: 2,
  url: "#understand-the-tech-4",
  title: _jsx(_Fragment, {
    children: "Understand the tech"
  })
}, {
  depth: 4,
  url: "#default-audio-routing-3",
  title: _jsx(_Fragment, {
    children: "Default audio routing"
  })
}, {
  depth: 2,
  url: "#change-audio-routing-3",
  title: _jsx(_Fragment, {
    children: "Change audio routing"
  })
}, {
  depth: 3,
  url: "#plug-and-unplug-devices-to-change-audio-routing-3",
  title: _jsx(_Fragment, {
    children: "Plug and unplug devices to change audio routing"
  })
}, {
  depth: 3,
  url: "#change-the-default-audio-routing-3",
  title: _jsx(_Fragment, {
    children: "Change the default audio routing"
  })
}, {
  depth: 3,
  url: "#changing-the-current-audio-routing-3",
  title: _jsx(_Fragment, {
    children: "Changing the current audio routing"
  })
}, {
  depth: 2,
  url: "#reference-4",
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
  url: "#api-reference-4",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "web",
    platforms: '["android","ios","web","react-native","unity"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "android",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "web",
        platform: "android"
      }), _jsx(_components.p, {
        children: "Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
      }), _jsx(_components.p, {
        children: "This page shows you how to change audio routing in your app."
      }), _jsx(_components.h2, {
        id: "understand-the-tech",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Audio routing enables you to change the playback device from the default device to a selected device."
      }), _jsx(_components.h4, {
        id: "default-audio-routing",
        children: "Default audio routing"
      }), _jsx(_components.p, {
        children: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
      }), _jsx(_components.p, {
        children: "The SDK uses the following default audio routing in different use-cases:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Voice call"
          }), ": Earpiece"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Video call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live voice call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live video streaming"
          }), ": Speaker"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "change-audio-routing",
        children: "Change audio routing"
      }), _jsx(_components.p, {
        children: "Depending on your role, you can change audio routing in the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Device user"
          }), ": Add or remove external devices, such as headphones or Bluetooth devices."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "App developer"
          }), ":", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "setDefaultAudioRoutetoSpeakerphone"
              }), " to change the default audio routing."]
            }), `
`, _jsxs(_components.li, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "setEnableSpeakerphone"
              }), " to set the current audio routing."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [`When no external device is connected, the SDK uses the default audio routing.
Call `, _jsx(_components.code, {
              children: "setDefaultAudioRoutetoSpeakerphone"
            }), " to change this default setting. If the current audio route is the device itself, ", _jsx(_components.code, {
              children: "setDefaultAudioRoutetoSpeakerphone"
            }), " modifies the current audio route."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Without system limitations, calling ", _jsx(_components.code, {
              children: "setEnableSpeakerphone"
            }), ` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.`]
          }), `
`]
        }), `
`]
      }), _jsxs(_components.p, {
        children: ["Any changes to the audio route trigger the ", _jsx(_components.code, {
          children: "onAudioRouteChanged"
        }), " callback. Use this callback to get the current audio route."]
      }), _jsx(_components.h3, {
        id: "plug-and-unplug-devices-to-change-audio-routing",
        children: "Plug and unplug devices to change audio routing"
      }), _jsx(_components.p, {
        children: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
      }), _jsx(_components.p, {
        children: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "A user joins the channel. Audio is routed to speakers."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "change-the-default-audio-routing",
        children: "Change the default audio routing"
      }), _jsxs(_components.p, {
        children: ["Before joining a channel, call the ", _jsx(_components.code, {
          children: "setDefaultAudioRoutetoSpeakerphone"
        }), " method to switch the default audio routing to either the handset or the speakerphone. Set the ", _jsx(_components.code, {
          children: "defaultToSpeaker"
        }), " parameter of this method to ", _jsx(_components.code, {
          children: "true"
        }), " to set the default audio route to speakerphone, and to ", _jsx(_components.code, {
          children: "false"
        }), " to set the default audio route to handset. The setting remains valid until you destroy the engine."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the default audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in the headset. Audio is routed to the headset."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "setDefaultAudioRoutetoSpeakerphone(true)"
            }), " in the app. Audio routing is changed to speakerphone."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "User plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "setDefaultAudioRoutetoSpeakerphone(true)"
            }), ". The audio is still routed to the headset because ", _jsx(_components.code, {
              children: "setDefaultAudioRoutetoSpeakerphone"
            }), " only works for the audio routing of the device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headphones. The audio routing is changed to speakerphone."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "changing-the-current-audio-routing",
        children: "Changing the current audio routing"
      }), _jsxs(_components.p, {
        children: ["If the operating system allows it, call the ", _jsx(_components.code, {
          children: "setEnableSpeakerphone"
        }), " method to change the current audio routing to speaker."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the current audio routing:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 1:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "User joins a channel. Audio is routed to the speaker."
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headphones. Audio routing is changed to headphones."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "setEnableSpeakerphone(true)"
              }), ". Audio is still routed to headphones."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 2:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "A user joins a voice call channel. Audio is routed to the speakerphone."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "setEnableSpeakerphone(true)"
              }), ". Audio routing is changed to speakerphone."]
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headset. Audio routing changes to headset."
            }), `
`, _jsxs(_components.li, {
              children: ["User unplugs the headset. Audio routing changes to earpiece.", `
`, _jsx(CalloutContainer, {
                type: "info",
                children: _jsx(CalloutDescription, {
                  children: _jsxs(_components.p, {
                    children: ["If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting ", _jsx(_components.code, {
                      children: "setEnableSpeakerphone(true)"
                    }), " is invalid and the audio is played through the external device."]
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
      }), _jsx(_components.h2, {
        id: "reference",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setdefaultaudioroutetospeakerphone",
              children: _jsx(_components.code, {
                children: "setDefaultAudioRoutetoSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengine.html#api_irtcengine_setenablespeakerphone",
              children: _jsx(_components.code, {
                children: "setEnableSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/android/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioroutingchanged",
              children: _jsx(_components.code, {
                children: "onAudioRouteChanged"
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
        children: "Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
      }), _jsx(_components.p, {
        children: "This page shows you how to change audio routing in your app."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-1",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Audio routing enables you to change the playback device from the default device to a selected device."
      }), _jsx(_components.h4, {
        id: "default-audio-routing-1",
        children: "Default audio routing"
      }), _jsx(_components.p, {
        children: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
      }), _jsx(_components.p, {
        children: "The SDK uses the following default audio routing in different use-cases:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Voice call"
          }), ": Earpiece"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Video call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live voice call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live video streaming"
          }), ": Speaker"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "change-audio-routing-1",
        children: "Change audio routing"
      }), _jsx(_components.p, {
        children: "Depending on your role, you can change audio routing in the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Device user"
          }), ": Add or remove external devices, such as headphones or Bluetooth devices."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "App developer"
          }), ":", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "setDefaultAudioRouteToSpeakerphone"
              }), " to change the default audio routing."]
            }), `
`, _jsxs(_components.li, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "setEnableSpeakerphone"
              }), " to set the current audio routing."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [`When no external device is connected, the SDK uses the default audio routing.
Call `, _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone"
            }), " to change this default setting. If the current audio route is the device itself, ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone"
            }), " modifies the current audio route."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Without system limitations, calling ", _jsx(_components.code, {
              children: "setEnableSpeakerphone"
            }), ` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.`]
          }), `
`]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Due to iOS system limitations, some audio routing is not recognized when using ", _jsx(_components.strong, {
              children: "in-call volume"
            }), " mode. To use an external sound card or microphone, set the ", _jsx(_components.strong, {
              children: "audio application"
            }), " scenario to the ", _jsx(_components.strong, {
              children: "high quality"
            }), " scenario ", _jsx(_components.code, {
              children: "AgoraAudioScenarioGameStreaming"
            }), ". In this scenario, the SDK switches to ", _jsx(_components.strong, {
              children: "media volume"
            }), " to work around this issue."]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Any changes to the audio route trigger the ", _jsx(_components.code, {
          children: "didAudioRouteChanged"
        }), " callback. Use this callback to get the current audio route."]
      }), _jsx(_components.h3, {
        id: "plug-and-unplug-devices-to-change-audio-routing-1",
        children: "Plug and unplug devices to change audio routing"
      }), _jsx(_components.p, {
        children: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
      }), _jsx(_components.p, {
        children: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "A user joins the channel. Audio is routed to speakers."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "change-the-default-audio-routing-1",
        children: "Change the default audio routing"
      }), _jsxs(_components.p, {
        children: ["Before joining a channel, call the ", _jsx(_components.code, {
          children: "setDefaultAudioRouteToSpeakerphone"
        }), " method to switch the default audio routing to either the handset or the speakerphone. Set the ", _jsx(_components.code, {
          children: "defaultToSpeaker"
        }), " parameter of this method to ", _jsx(_components.code, {
          children: "true"
        }), " to set the default audio route to speakerphone, and to ", _jsx(_components.code, {
          children: "false"
        }), " to set the default audio route to handset. The setting remains valid until you destroy the engine."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the default audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in the headset. Audio is routed to the headset."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone(true)"
            }), " in the app. Audio routing is changed to speakerphone."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "User plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone(true)"
            }), ". The audio is still routed to the headset because ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone"
            }), " only works for the audio routing of the device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headphones. The audio routing is changed to speakerphone."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "changing-the-current-audio-routing-1",
        children: "Changing the current audio routing"
      }), _jsxs(_components.p, {
        children: ["If the operating system allows it, call the ", _jsx(_components.code, {
          children: "setEnableSpeakerphone"
        }), " method to change the current audio routing to speaker."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the current audio routing:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 1:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "User joins a channel. Audio is routed to the speaker."
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headphones. Audio routing is changed to headphones."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "setEnableSpeakerphone(true)"
              }), ". Audio is still routed to headphones."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 2:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "A user joins a voice call channel. Audio is routed to the speakerphone."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "setEnableSpeakerphone(true)"
              }), ". Audio routing is changed to speakerphone."]
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headset. Audio routing changes to headset."
            }), `
`, _jsxs(_components.li, {
              children: ["User unplugs the headset. Audio routing changes to earpiece.", `
`, _jsx(CalloutContainer, {
                type: "info",
                children: _jsx(CalloutDescription, {
                  children: _jsxs(_components.p, {
                    children: ["If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting ", _jsx(_components.code, {
                      children: "setEnableSpeakerphone(true)"
                    }), " is invalid and the audio is played through the external device."]
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
      }), _jsx(_components.h2, {
        id: "reference-1",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-1",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setdefaultaudioroutetospeakerphone(_:)",
              children: _jsx(_components.code, {
                children: "setDefaultAudioRouteToSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginekit/setenablespeakerphone(_:)",
              children: _jsx(_components.code, {
                children: "setEnableSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/ios/4.x/documentation/agorartckit/agorartcenginedelegate/rtcengine(_:didaudioroutechanged:)",
              children: _jsx(_components.code, {
                children: "didAudioRouteChanged"
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
        children: "RTC SDK provides APIs for managing input and output devices. Use these APIs to switch devices dynamically during Video Calling and implement hot-swap logic when devices are added or removed."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-2",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Managing audio and video devices involves selecting, switching, and handling changes in media input and output devices. The RTC SDK provides APIs to:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "Change the default audio output route to a selected device."
        }), `
`, _jsx(_components.li, {
          children: "List available devices, including microphones and cameras."
        }), `
`, _jsx(_components.li, {
          children: "Dynamically switch devices during Video Calling."
        }), `
`, _jsx(_components.li, {
          children: "Detect device changes (added or removed) and enable hot-swapping."
        }), `
`]
      }), _jsx(_components.h3, {
        id: "change-the-default-audio-route",
        children: "Change the default audio route"
      }), _jsxs(_components.p, {
        children: ["To change the audio output device, retrieve a list of available media devices, filter for audio output devices, and select the desired ", _jsx(_components.code, {
          children: "deviceId"
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
            children: [_jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Request a list of media devices and filter audio output devices."
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
                children: " devices"
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
                children: "enumerateDevices"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " audioOutputs"
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
                  "--shiki-light": "#E36209",
                  "--shiki-dark": "#FFAB70"
                },
                children: "device"
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
                children: " device.kind "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "=="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ' "audiooutput"'
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " audioContext"
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
                children: " AudioContext"
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
                children: "// Pick the first available audio output."
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
                children: " deviceId"
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
                children: " audioOutputs["
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
                children: "await"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " audioContext."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setSinkId"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(deviceId)"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["For further details on changing the default audio route, see ", _jsx(_components.a, {
          href: "https://developer.chrome.com/blog/audiocontext-setsinkid",
          children: "Change the destination output device in Web Audio"
        }), "."]
      }), _jsx(_components.h3, {
        id: "change-audio-or-video-capture-devices",
        children: "Change audio or video capture devices"
      }), _jsxs(_components.p, {
        children: ["To set an audio or video capture device, retrieve available microphones and cameras using ", _jsx(_components.code, {
          children: "AgoraRTC.getMicrophones()"
        }), " and ", _jsx(_components.code, {
          children: "AgoraRTC.getCameras()"
        }), ". Then, call ", _jsx(_components.code, {
          children: "setDevice(deviceId)"
        }), " with the desired ", _jsx(_components.code, {
          children: "deviceId"
        }), " to use the selected capture device."]
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
                children: "// Get available microphones and cameras"
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
                children: " microphones"
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
                children: "getMicrophones"
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
                children: "const"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " cameras"
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
                children: "getCameras"
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
                children: "if"
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
                children: "microphones."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "length"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: " ||"
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
                children: "cameras."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "length"
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
                children: " console."
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
                children: '"No microphone or camera found"'
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
                children: " return"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Switch to the first available microphone"
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
                children: "setDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(microphones["
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
                children: "].deviceId );"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "// Switch to the first available camera"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "localVideoTrack."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(cameras["
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
                children: "].deviceId);"
              })]
            })]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Where ", _jsx(_components.code, {
          children: "localVideoTrack"
        }), " and ", _jsx(_components.code, {
          children: "localAudioTrack"
        }), " refer to the tracks you created using ", _jsx(_components.code, {
          children: "AgoraRTC.createCameraVideoTrack"
        }), " and ", _jsx(_components.code, {
          children: "AgoraRTC.createMicrophoneAudioTrack"
        }), "."]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["You can call ", _jsx(_components.code, {
              children: "setDevice"
            }), " to change the capture device even after publishing a track. However, on certain mobile devices, this operation may fail due to hardware or browser limitations."]
          })
        })
      }), _jsx(_components.h2, {
        id: "hot-swap-capture-devices",
        children: "Hot-swap capture devices"
      }), _jsxs(_components.p, {
        children: ["RTC SDK provides the ", _jsx(_components.code, {
          children: "onMicrophoneChanged"
        }), " and ", _jsx(_components.code, {
          children: "onCameraChanged"
        }), " callbacks to detect changes in the plug-in status of audio and video devices. Implement listeners for these callbacks and call ", _jsx(_components.code, {
          children: "setDevice()"
        }), " to switch to a newly connected device automatically."]
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
                children: "onMicrophoneChanged"
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
                children: " async"
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
                children: "changedDevice"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // When a new device is detected, switch to the new device"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " (changedDevice.state "
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
                children: ' "ACTIVE"'
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
                children: "  microphoneTrack."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(changedDevice.device.deviceId);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: "else"
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
                children: " (changedDevice.device.label "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "==="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " microphoneTrack."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getTrackLabel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Switch to an existing device when the unplugged device is the current device"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " oldMicrophones"
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
                children: "getMicrophones"
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
                children: "  oldMicrophones["
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
                children: "] "
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
                children: " microphoneTrack."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(oldMicrophones["
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
                children: "].deviceId);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " }"
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
                children: "onCameraChanged"
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
                children: " async"
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
                children: "changedDevice"
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
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: " // When a new device is detected, switch to the new device"
              })
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: " (changedDevice.state "
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
                children: ' "ACTIVE"'
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
                children: "  cameraTrack."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(changedDevice.device.deviceId);"
              })]
            }), `
`, _jsxs(_components.span, {
              className: "line",
              children: [_jsx(_components.span, {
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
                children: "else"
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
                children: " (changedDevice.device.label "
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "==="
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " cameraTrack."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "getTrackLabel"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "()) {"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6A737D",
                  "--shiki-dark": "#6A737D"
                },
                children: "  // Switch to an existing device when the unplugged device is the current device"
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
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " oldCameras"
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
                children: "getCameras"
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
                children: "  oldCameras["
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
                children: "] "
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
                children: " cameraTrack."
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "setDevice"
              }), _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "(oldCameras["
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
                children: "].deviceId);"
              })]
            }), `
`, _jsx(_components.span, {
              className: "line",
              children: _jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " }"
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
      }), _jsx(CalloutContainer, {
        type: "warning",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "If the user adds a virtual or a faulty device, hot-swap routing logic may result in no picture or no sound when the device is plugged-in or unplugged."
          })
        })
      }), _jsx(_components.h2, {
        id: "reference-2",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "api-reference-2",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/imicrophoneaudiotrack.html#setdevice",
              children: _jsx(_components.code, {
                children: "setDevice"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#onmicrophonechanged",
              children: _jsx(_components.code, {
                children: "onMicrophoneChanged"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartc.html#oncamerachanged",
              children: _jsx(_components.code, {
                children: "onCameraChanged"
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
        children: "Audio routing refers to selection of the audio output device used for playback by your app. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
      }), _jsx(_components.p, {
        children: "This page shows you how to change audio routing in your app."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-3",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Audio routing enables you to change the playback device from the default device to a selected device."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This guide is applicable to Android and iOS only."
          })
        })
      }), _jsx(_components.h4, {
        id: "default-audio-routing-2",
        children: "Default audio routing"
      }), _jsx(_components.p, {
        children: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
      }), _jsx(_components.p, {
        children: "The SDK uses the following default audio routing in different use-cases:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Voice call"
          }), ": Earpiece"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Video call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live voice call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live video streaming"
          }), ": Speaker"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "change-audio-routing-2",
        children: "Change audio routing"
      }), _jsx(_components.p, {
        children: "Depending on your role, you can change audio routing in the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Device user"
          }), ": Add or remove external devices, such as headphones or Bluetooth devices."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "App developer"
          }), ":", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "setDefaultAudioRouteToSpeakerphone"
              }), " to change the default audio routing."]
            }), `
`, _jsxs(_components.li, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "setEnableSpeakerphone"
              }), " to set the current audio routing."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [`When no external device is connected, the SDK uses the default audio routing.
Call `, _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone"
            }), " to change this default setting. If the current audio route is the device itself, ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone"
            }), " modifies the current audio route."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Without system limitations, calling ", _jsx(_components.code, {
              children: "setEnableSpeakerphone"
            }), ` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.`]
          }), `
`]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Due to iOS system limitations, some audio routing is not recognized when using ", _jsx(_components.strong, {
              children: "in-call volume"
            }), " mode. To use an external sound card or microphone, set the ", _jsx(_components.strong, {
              children: "audio application"
            }), " scenario to the ", _jsx(_components.strong, {
              children: "high quality"
            }), " scenario ", _jsx(_components.code, {
              children: "AgoraAudioScenarioGameStreaming"
            }), ". In this scenario, the SDK switches to ", _jsx(_components.strong, {
              children: "media volume"
            }), " to work around this issue."]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Any changes to the audio route trigger the ", _jsx(_components.code, {
          children: "onAudioRoutingChanged"
        }), " callback. Use this callback to get the current audio route."]
      }), _jsx(_components.h3, {
        id: "plug-and-unplug-devices-to-change-audio-routing-2",
        children: "Plug and unplug devices to change audio routing"
      }), _jsx(_components.p, {
        children: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
      }), _jsx(_components.p, {
        children: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "A user joins the channel. Audio is routed to speakers."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "change-the-default-audio-routing-2",
        children: "Change the default audio routing"
      }), _jsxs(_components.p, {
        children: ["Before joining a channel, call the ", _jsx(_components.code, {
          children: "setDefaultAudioRouteToSpeakerphone"
        }), " method to switch the default audio routing to either the handset or the speakerphone. Set the ", _jsx(_components.code, {
          children: "defaultToSpeaker"
        }), " parameter of this method to ", _jsx(_components.code, {
          children: "true"
        }), " to set the default audio route to speakerphone, and to ", _jsx(_components.code, {
          children: "false"
        }), " to set the default audio route to handset. The setting remains valid until you destroy the engine."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the default audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in the headset. Audio is routed to the headset."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone(true)"
            }), " in the app. Audio routing is changed to speakerphone."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "User plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone(true)"
            }), ". The audio is still routed to the headset because ", _jsx(_components.code, {
              children: "setDefaultAudioRouteToSpeakerphone"
            }), " only works for the audio routing of the device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headphones. The audio routing is changed to speakerphone."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "changing-the-current-audio-routing-2",
        children: "Changing the current audio routing"
      }), _jsxs(_components.p, {
        children: ["If the operating system allows it, call the ", _jsx(_components.code, {
          children: "setEnableSpeakerphone"
        }), " method to change the current audio routing to speaker."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the current audio routing:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 1:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "User joins a channel. Audio is routed to the speaker."
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headphones. Audio routing is changed to headphones."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "setEnableSpeakerphone(true)"
              }), ". Audio is still routed to headphones."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 2:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "A user joins a voice call channel. Audio is routed to the speakerphone."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "setEnableSpeakerphone(true)"
              }), ". Audio routing is changed to speakerphone."]
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headset. Audio routing changes to headset."
            }), `
`, _jsxs(_components.li, {
              children: ["User unplugs the headset. Audio routing changes to earpiece.", `
`, _jsx(CalloutContainer, {
                type: "info",
                children: _jsx(CalloutDescription, {
                  children: _jsxs(_components.p, {
                    children: ["If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting ", _jsx(_components.code, {
                      children: "setEnableSpeakerphone(true)"
                    }), " is invalid and the audio is played through the external device."]
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
      }), _jsx(_components.h2, {
        id: "reference-3",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "sample-project",
        children: "Sample project"
      }), _jsxs(_components.p, {
        children: ["Agora provides the ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Extensions/react-native-agora/blob/main/example/src/examples/advanced/AudioCallRoute/AudioCallRoute.tsx",
          children: "AudioCallRoute"
        }), " open-source sample project for your reference. Download the project or view the source code for a more detailed example."]
      }), _jsx(_components.h3, {
        id: "api-reference-3",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setdefaultaudioroutetospeakerphone",
              children: _jsx(_components.code, {
                children: "setDefaultAudioRouteToSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengine.html#api_irtcengine_setenablespeakerphone",
              children: _jsx(_components.code, {
                children: "setEnableSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/react-native/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioroutingchanged",
              children: _jsx(_components.code, {
                children: "onAudioRoutingChanged"
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
        children: "Audio routing refers to selection of the audio output device used for playback by your game. This can include a variety of devices such as earpieces, headphones, speakers, and Bluetooth devices capable of playing audio."
      }), _jsx(_components.p, {
        children: "This page shows you how to change audio routing in your game."
      }), _jsx(_components.h2, {
        id: "understand-the-tech-4",
        children: "Understand the tech"
      }), _jsx(_components.p, {
        children: "Audio routing enables you to change the playback device from the default device to a selected device."
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "This guide is applicable to Android and iOS only."
          })
        })
      }), _jsx(_components.h4, {
        id: "default-audio-routing-3",
        children: "Default audio routing"
      }), _jsx(_components.p, {
        children: "The routing employed by the device itself, such as the speakers on a mobile device, is called the default audio routing of that device."
      }), _jsx(_components.p, {
        children: "The SDK uses the following default audio routing in different use-cases:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Voice call"
          }), ": Earpiece"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Video call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live voice call"
          }), ": Speaker"]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Live video streaming"
          }), ": Speaker"]
        }), `
`]
      }), _jsx(_components.h2, {
        id: "change-audio-routing-3",
        children: "Change audio routing"
      }), _jsx(_components.p, {
        children: "Depending on your role, you can change audio routing in the following ways:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "Device user"
          }), ": Add or remove external devices, such as headphones or Bluetooth devices."]
        }), `
`, _jsxs(_components.li, {
          children: [_jsx(_components.strong, {
            children: "App developer"
          }), ":", `
`, _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Before joining a channel, call ", _jsx(_components.code, {
                children: "SetDefaultAudioRouteToSpeakerphone"
              }), " to change the default audio routing."]
            }), `
`, _jsxs(_components.li, {
              children: ["After joining a channel, call ", _jsx(_components.code, {
                children: "SetEnableSpeakerphone"
              }), " to set the current audio routing."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), _jsx(_components.p, {
        children: "Regardless of the method used to make changes to audio routing, the priority for the changes to take effect follows these principles:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: `User behavior has the highest priority for audio routing changes.
When a user connects an external device such as a wired headset, or a Bluetooth headset, audio routing automatically switches to the external device. If the user connects multiple external devices successively, audio routing will automatically switch to the last connected device.`
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: [`When no external device is connected, the SDK uses the default audio routing.
Call `, _jsx(_components.code, {
              children: "SetDefaultAudioRouteToSpeakerphone"
            }), " to change this default setting. If the current audio route is the device itself, ", _jsx(_components.code, {
              children: "SetDefaultAudioRouteToSpeakerphone"
            }), " modifies the current audio route."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Without system limitations, calling ", _jsx(_components.code, {
              children: "SetEnableSpeakerphone"
            }), ` switches the current audio routing regardless of whether the current audio routing is an external device, a speaker, or an earpiece.
However, this method only works for the current channel, it does not change the default audio routing of the device. If the user leaves the current channel and joins a new channel, the SDK still uses the default audio route.`]
          }), `
`]
        }), `
`]
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsxs(_components.p, {
            children: ["Due to iOS system limitations, some audio routing is not recognized when using ", _jsx(_components.strong, {
              children: "in-call volume"
            }), " mode. To use an external sound card or microphone, set the ", _jsx(_components.strong, {
              children: "audio application"
            }), " scenario to the ", _jsx(_components.strong, {
              children: "high quality"
            }), " scenario ", _jsx(_components.code, {
              children: "AUDIO_SCENARIO_GAME_STREAMING"
            }), ". In this scenario, the SDK switches to ", _jsx(_components.strong, {
              children: "media volume"
            }), " to work around this issue."]
          })
        })
      }), _jsxs(_components.p, {
        children: ["Any changes to the audio route trigger the ", _jsx(_components.code, {
          children: "OnAudioRoutingChanged"
        }), " callback. Use this callback to get the current audio route."]
      }), _jsx(_components.h3, {
        id: "plug-and-unplug-devices-to-change-audio-routing-3",
        children: "Plug and unplug devices to change audio routing"
      }), _jsx(_components.p, {
        children: "Audio routing changes when the user connects an audio device. For example, when headphones are plugged in, audio routing automatically switches to headphones. When multiple devices are connected, audio routing switches to the last connected device."
      }), _jsx(_components.p, {
        children: "Refer to the following example to see how plugging and unplugging a device changes the audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "A user joins the channel. Audio is routed to speakers."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user connects the mobile device to a Bluetooth audio device without unplugging the headset. Audio routing changes to the Bluetooth audio device."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user disconnects the Bluetooth audio device from the mobile device. Audio routing changes back to headphones."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "change-the-default-audio-routing-3",
        children: "Change the default audio routing"
      }), _jsxs(_components.p, {
        children: ["Before joining a channel, call the ", _jsx(_components.code, {
          children: "SetDefaultAudioRouteToSpeakerphone"
        }), " method to switch the default audio routing to either the handset or the speakerphone. Set the ", _jsx(_components.code, {
          children: "defaultToSpeaker"
        }), " parameter of this method to ", _jsx(_components.code, {
          children: "true"
        }), " to set the default audio route to speakerphone, and to ", _jsx(_components.code, {
          children: "false"
        }), " to set the default audio route to handset. The setting remains valid until you destroy the engine."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the default audio routing:"
      }), _jsxs(_components.ol, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user plugs in the headset. Audio is routed to the headset."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headset. Audio routing is changed to the default audio routing of the mobile device, depending on your usage scenario."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "SetDefaultAudioRouteToSpeakerphone(true)"
            }), " in the game. Audio routing is changed to speakerphone."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "User plugs in headphones. Audio routing changes to headphones."
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsxs(_components.p, {
            children: ["Call ", _jsx(_components.code, {
              children: "SetDefaultAudioRouteToSpeakerphone(true)"
            }), ". The audio is still routed to the headset because ", _jsx(_components.code, {
              children: "SetDefaultAudioRouteToSpeakerphone"
            }), " only works for the audio routing of the device."]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "The user unplugs the headphones. The audio routing is changed to speakerphone."
          }), `
`]
        }), `
`]
      }), _jsx(_components.h3, {
        id: "changing-the-current-audio-routing-3",
        children: "Changing the current audio routing"
      }), _jsxs(_components.p, {
        children: ["If the operating system allows it, call the ", _jsx(_components.code, {
          children: "SetEnableSpeakerphone"
        }), " method to change the current audio routing to speaker."]
      }), _jsx(_components.p, {
        children: "Refer to the following example to understand how to change the current audio routing:"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 1:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "User joins a channel. Audio is routed to the speaker."
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headphones. Audio routing is changed to headphones."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "SetEnableSpeakerphone(true)"
              }), ". Audio is still routed to headphones."]
            }), `
`]
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: "Example 2:"
          }), `
`, _jsxs(_components.ol, {
            children: [`
`, _jsx(_components.li, {
              children: "A user joins a voice call channel. Audio is routed to the speakerphone."
            }), `
`, _jsxs(_components.li, {
              children: ["App calls ", _jsx(_components.code, {
                children: "SetEnableSpeakerphone(true)"
              }), ". Audio routing is changed to speakerphone."]
            }), `
`, _jsx(_components.li, {
              children: "User plugs in headset. Audio routing changes to headset."
            }), `
`, _jsxs(_components.li, {
              children: ["User unplugs the headset. Audio routing changes to earpiece.", `
`, _jsx(CalloutContainer, {
                type: "info",
                children: _jsx(CalloutDescription, {
                  children: _jsxs(_components.p, {
                    children: ["If the user uses an external audio playback device, such as a Bluetooth headset or a wired headset, setting ", _jsx(_components.code, {
                      children: "SetEnableSpeakerphone(true)"
                    }), " is invalid and the audio is played through the external device."]
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
      }), _jsx(_components.h2, {
        id: "reference-4",
        children: "Reference"
      }), _jsx(_components.p, {
        children: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
      }), _jsx(_components.h3, {
        id: "sample-project-1",
        children: "Sample project"
      }), _jsxs(_components.p, {
        children: ["Agora provides the ", _jsx(_components.a, {
          href: "https://github.com/AgoraIO-Extensions/Agora-Unity-Quickstart/blob/main/API-Example-Unity/Assets/API-Example/Examples/Advanced/AudioCallRoute/AudioCallRoute.cs",
          children: "AudioCallRoute"
        }), " open-source sample project for your reference. Download the project or view the source code for a more detailed example."]
      }), _jsx(_components.h3, {
        id: "api-reference-4",
        children: "API reference"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setdefaultaudioroutetospeakerphone",
              children: _jsx(_components.code, {
                children: "SetDefaultAudioRouteToSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengine.html#api_irtcengine_setenablespeakerphone",
              children: _jsx(_components.code, {
                children: "SetEnableSpeakerphone"
              })
            })
          }), `
`]
        }), `
`, _jsxs(_components.li, {
          children: [`
`, _jsx(_components.p, {
            children: _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/video-sdk/unity/4.x/API/class_irtcengineeventhandler.html#callback_irtcengineeventhandler_onaudioroutingchanged",
              children: _jsx(_components.code, {
                children: "OnAudioRoutingChanged"
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
