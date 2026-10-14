import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Communicate with RTC SDK",
  description: "Stream audio and video to and from RTC SDK."
};
export let _markdown = `

If your business requires not only high-quality audio and video transmission, but also easy integration, low memory usage, and low power consumption, for applications such as smart cameras and smart doorbells, Agora recommends that you use the RTC SDK with the IoT SDK.

The following table shows the data formats supported when the IoT SDK communicates with the RTC SDK (v4.x):

| RTC SDK Type                                                                                                       | Audio formats         | Video formats |
| :----------------------------------------------------------------------------------------------------------------- | :-------------------- | :------------ |
| Native/third-party frameworks (Android, iOS/macOS, Windows, Electron, Unity, Flutter, React Native) and Server SDK | G722, G711, Opus, AAC | H.264, JPEG   |
| Web (v4.x)                                                                                                         | G722, G711, Opus      | H.264         |
| Embedded systems                                                                                                   | G711, Opus            | H.264, JPEG   |

The sending and receiving ends can communicate with each other only if the set data format is consistent and complies with the above table.

The following sections describe how to set the audio and video data formats in the SDKs.

## Set up IoT SDK [#set-up-iot-sdk]

**Audio**

IoT SDK only supports mono audio data, and the data sending interval is 20 ms. If your device captures stereo audio, convert it to mono before encoding.

To send and receive \`AAC\` audio data, set \`audio_frame_info_t.data_type\` to \`AUDIO_DATA_TYPE_AACLC\` or \`AUDIO_DATA_TYPE_HEAAC\` and specify the corresponding data size when calling the \`agora_rtc_send_audio_data\` method. The size of \`AAC\` audio data needs to be resolved by the user.

To send and receive \`Opus\`, \`G722\`, or \`G711\` audio data:

1. When calling \`agora_rtc_join_channel\`, set \`rtc_channel_options_t.audio_codec_opt.audio_codec_type\` to the codec type and sampling rate you want to use.
2. When calling \`agora_rtc_send_audio_data\`, set \`audio_frame_info_t.data_type\` to \`AUDIO_DATA_TYPE_PCM\`.

Use the following recommended sampling rates and data sizes:

| Codec | Sampling rate | Data size  |
| ----- | ------------- | ---------- |
| Opus  | 16 kHz        | 640 bytes  |
| Opus  | 48 kHz        | 1920 bytes |
| G722  | 16 kHz        | 640 bytes  |
| G711  | 8 kHz         | 320 bytes  |

**Video**

In IoT SDK, \`H.264\` video data is sent and received by default.

To send and receive \`JPEG\` video data, when calling the \`agora_rtc_send_video_data\` method, set \`video_frame_info_t.data_type\` to \`VIDEO_DATA_TYPE_GENERIC_JPEG\`.

## Set up RTC SDK for Native/third-party frameworks and RTC Server SDK [#set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk]

**Audio**

In Native/third-party framework SDKs (v4.x) and RTC Server SDKs, \`Opus\` or \`AAC\` audio data is sent and received by default.

To send and receive \`G722\` or \`G711\` audio data, use the following methods:

<Tabs defaultValue="g722">
  <TabsList>
    <TabsTrigger value="g722">
      G722
    </TabsTrigger>

    <TabsTrigger value="pcma">
      G711 (PCMA)
    </TabsTrigger>

    <TabsTrigger value="pcmu">
      G711 (PCMU)
    </TabsTrigger>
  </TabsList>

  <TabsContent value="g722">
    | RTC SDK type  | Configuration                                                                                                                                                 |
    | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Android       | \`agoraEngine.setAudioProfile(6)\` or \`agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")\`                                                     |
    | iOS/macOS     | \`agoraKit.setAudioProfile(6)\` or \`agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":9}")\`                                                           |
    | Windows       | \`agoraEngine->setAudioProfile(6)\` or \`agora::base::AParameter apm(agoraEngine); apm->setParameters("{\\"che.audio. custom_payload_type\\":9}")\`                 |
    | Electron      | \`this.agoraEngine?.setAudioProfile(6)\` or \`this.agoraEngine?.setParameters("{\\"che.audio. custom_payload_type\\":9}")\`                                         |
    | Unity         | \`await agoraEngine.setAudioProfile(profile: AudioProfileType.audioProfileIot)\` or \`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")\` |
    | Flutter       | \`await agoraEngine.setAudioProfile(profile: AudioProfileType.audioProfileIot)\` or \`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")\` |
    | React Native  | \`await agoraEngine.current?.setAudioProfile(6)\` or \`await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":9}")\`                       |
    | Server C++    | \`connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":9}")\`                                                                     |
    | Server Java   | \`agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":9}")\`                                                                                       |
    | Server Python | \`connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":9}")\`                                                                      |
    | Server Go     | \`connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":9}")\`                                                                         |
  </TabsContent>

  <TabsContent value="pcma">
    | RTC SDK type  | Configuration                                                                                                        |
    | ------------- | -------------------------------------------------------------------------------------------------------------------- |
    | Android       | \`agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")\`                                                |
    | iOS/macOS     | \`agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":8}")\`                                                   |
    | Windows       | \`agora::base::AParameter apm(agoraEngine);apm->agoraEngine->setParameters("{\\"che.audio. custom_payload_type\\":8}")\` |
    | Electron      | \`this.agoraEngine?.setParameters("{\\"rtc.audio. custom_payload_type\\":8}")\`                                          |
    | Unity         | \`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")\`                                          |
    | Flutter       | \`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")\`                                          |
    | React Native  | \`await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":8}")\`                                 |
    | Server C++    | \`connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":8}")\`                            |
    | Server Java   | \`agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":8}")\`                                              |
    | Server Python | \`connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":8}")\`                             |
    | Server Go     | \`connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":8}")\`                                |
  </TabsContent>

  <TabsContent value="pcmu">
    | RTC SDK type  | Configuration                                                                                                        |
    | ------------- | -------------------------------------------------------------------------------------------------------------------- |
    | Android       | \`agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")\`                                                |
    | iOS/macOS     | \`agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":0}")\`                                                   |
    | Windows       | \`agora::base::AParameter apm(agoraEngine);apm->agoraEngine->setParameters("{\\"che.audio. custom_payload_type\\":0}")\` |
    | Electron      | \`this.agoraEngine?.setParameters("{\\"rtc.audio. custom_payload_type\\":0}")\`                                          |
    | Unity         | \`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")\`                                          |
    | Flutter       | \`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")\`                                          |
    | React Native  | \`await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":0}")\`                                 |
    | Server C++    | \`connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":0}")\`                            |
    | Server Java   | \`agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":0}")\`                                              |
    | Server Python | \`connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":0}")\`                             |
    | Server Go     | \`connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":0}")\`                                |
  </TabsContent>
</Tabs>

**Video**

In Native/third-party framework SDKs (v4.x) and RTC Server SDKs, \`H.264\` video data is sent and received by default.

To send and receive \`JPEG\` video data, use the following methods:

| RTC SDK type  | Method                                                                                                         |
| ------------- | :------------------------------------------------------------------------------------------------------------- |
| Android       | \`agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")\`                                           |
| iOS/macOS     | \`agoraKit.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")\`                                              |
| Windows       | \`agora::base::AParameter apm(agoraEngine);\`<br />\`apm->setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")\` |
| Electron      | \`this.agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                                     |
| Unity         | \`agoraEngine.SetParameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                                          |
| Flutter       | \`await agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                                    |
| React Native  | \`this.engine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                                          |
| Server C++    | \`connection->getAgoraParameter()->setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                     |
| Server Java   | \`agoraParameter.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                                       |
| Server Python | \`connection.get_agora_parameter.set_parameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                      |
| Server Go     | \`connection.GetAgoraParameter.SetParameters("{\\"engine.video.codec_type\\": \\"20\\"}");\`                         |

## Set up RTC SDK for Web [#set-up-rtc-sdk-for-web]

**Audio**

In RTC SDK for Web (v4.x), \`Opus\` audio data is sent and received by default.

To send and receive \`G722\`, \`G711\` audio data, call the following method:

* G711 (PCMA): \`AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "pcma"})\`
* G711 (PCMU): \`AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "pcmu"})\`
* G722: \`AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "g722"})\`

<CalloutContainer type="info">
  <CalloutDescription>
    Only the Web SDK version 4.9.0 or higher supports setting the audio encoding format.
  </CalloutDescription>
</CalloutContainer>

**Video**

In Web SDK (v4.x), \`VP8\` video data is sent and received by default. You call \`createClient\` to set the video data format to \`"h264"\`.

## Set up RTC SDK for embedded systems [#set-up-rtc-sdk-for-embedded-systems]

In RTC SDK for embedded systems, \`Opus\` audio data and \`H.264\` video data are sent and received by default. If you want to receive \`JPEG\` video data or send and receive \`G711\` audio data, contact [support@agora.io](mailto\\:support@agora.io) for activation.

<CalloutContainer type="info">
  <CalloutDescription>
    RTC SDK for embedded systems does not support sending \`JPEG\` video data.
  </CalloutDescription>
</CalloutContainer>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "If your business requires not only high-quality audio and video transmission, but also easy integration, low memory usage, and low power consumption, for applications such as smart cameras and smart doorbells, Agora recommends that you use the RTC SDK with the IoT SDK."
  }, {
    heading: undefined,
    content: "The following table shows the data formats supported when the IoT SDK communicates with the RTC SDK (v4.x):"
  }, {
    heading: undefined,
    content: "RTC SDK Type"
  }, {
    heading: undefined,
    content: "Audio formats"
  }, {
    heading: undefined,
    content: "Video formats"
  }, {
    heading: undefined,
    content: "Native/third-party frameworks (Android, iOS/macOS, Windows, Electron, Unity, Flutter, React Native) and Server SDK"
  }, {
    heading: undefined,
    content: "G722, G711, Opus, AAC"
  }, {
    heading: undefined,
    content: "H.264, JPEG"
  }, {
    heading: undefined,
    content: "Web (v4.x)"
  }, {
    heading: undefined,
    content: "G722, G711, Opus"
  }, {
    heading: undefined,
    content: "H.264"
  }, {
    heading: undefined,
    content: "Embedded systems"
  }, {
    heading: undefined,
    content: "G711, Opus"
  }, {
    heading: undefined,
    content: "H.264, JPEG"
  }, {
    heading: undefined,
    content: "The sending and receiving ends can communicate with each other only if the set data format is consistent and complies with the above table."
  }, {
    heading: undefined,
    content: "The following sections describe how to set the audio and video data formats in the SDKs."
  }, {
    heading: "set-up-iot-sdk",
    content: "**Audio**"
  }, {
    heading: "set-up-iot-sdk",
    content: "IoT SDK only supports mono audio data, and the data sending interval is 20 ms. If your device captures stereo audio, convert it to mono before encoding."
  }, {
    heading: "set-up-iot-sdk",
    content: "To send and receive `AAC` audio data, set `audio_frame_info_t.data_type` to `AUDIO_DATA_TYPE_AACLC` or `AUDIO_DATA_TYPE_HEAAC` and specify the corresponding data size when calling the `agora_rtc_send_audio_data` method. The size of `AAC` audio data needs to be resolved by the user."
  }, {
    heading: "set-up-iot-sdk",
    content: "To send and receive `Opus`, `G722`, or `G711` audio data:"
  }, {
    heading: "set-up-iot-sdk",
    content: "When calling `agora_rtc_join_channel`, set `rtc_channel_options_t.audio_codec_opt.audio_codec_type` to the codec type and sampling rate you want to use."
  }, {
    heading: "set-up-iot-sdk",
    content: "When calling `agora_rtc_send_audio_data`, set `audio_frame_info_t.data_type` to `AUDIO_DATA_TYPE_PCM`."
  }, {
    heading: "set-up-iot-sdk",
    content: "Use the following recommended sampling rates and data sizes:"
  }, {
    heading: "set-up-iot-sdk",
    content: "Codec"
  }, {
    heading: "set-up-iot-sdk",
    content: "Sampling rate"
  }, {
    heading: "set-up-iot-sdk",
    content: "Data size"
  }, {
    heading: "set-up-iot-sdk",
    content: "Opus"
  }, {
    heading: "set-up-iot-sdk",
    content: "16 kHz"
  }, {
    heading: "set-up-iot-sdk",
    content: "640 bytes"
  }, {
    heading: "set-up-iot-sdk",
    content: "Opus"
  }, {
    heading: "set-up-iot-sdk",
    content: "48 kHz"
  }, {
    heading: "set-up-iot-sdk",
    content: "1920 bytes"
  }, {
    heading: "set-up-iot-sdk",
    content: "G722"
  }, {
    heading: "set-up-iot-sdk",
    content: "16 kHz"
  }, {
    heading: "set-up-iot-sdk",
    content: "640 bytes"
  }, {
    heading: "set-up-iot-sdk",
    content: "G711"
  }, {
    heading: "set-up-iot-sdk",
    content: "8 kHz"
  }, {
    heading: "set-up-iot-sdk",
    content: "320 bytes"
  }, {
    heading: "set-up-iot-sdk",
    content: "**Video**"
  }, {
    heading: "set-up-iot-sdk",
    content: "In IoT SDK, `H.264` video data is sent and received by default."
  }, {
    heading: "set-up-iot-sdk",
    content: "To send and receive `JPEG` video data, when calling the `agora_rtc_send_video_data` method, set `video_frame_info_t.data_type` to `VIDEO_DATA_TYPE_GENERIC_JPEG`."
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "**Audio**"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "In Native/third-party framework SDKs (v4.x) and RTC Server SDKs, `Opus` or `AAC` audio data is sent and received by default."
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "To send and receive `G722` or `G711` audio data, use the following methods:"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "RTC SDK type"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Configuration"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Android"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraEngine.setAudioProfile(6)` or `agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "iOS/macOS"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraKit.setAudioProfile(6)` or `agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Windows"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraEngine->setAudioProfile(6)` or `agora::base::AParameter apm(agoraEngine); apm->setParameters("{\\"che.audio. custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Electron"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`this.agoraEngine?.setAudioProfile(6)` or `this.agoraEngine?.setParameters("{\\"che.audio. custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Unity"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.setAudioProfile(profile: AudioProfileType.audioProfileIot)` or `await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Flutter"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.setAudioProfile(profile: AudioProfileType.audioProfileIot)` or `await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "React Native"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.current?.setAudioProfile(6)` or `await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server C++"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Java"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Python"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Go"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":9}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "RTC SDK type"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Configuration"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Android"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "iOS/macOS"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Windows"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agora::base::AParameter apm(agoraEngine);apm->agoraEngine->setParameters("{\\"che.audio. custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Electron"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`this.agoraEngine?.setParameters("{\\"rtc.audio. custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Unity"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Flutter"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "React Native"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server C++"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Java"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Python"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Go"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":8}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "RTC SDK type"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Configuration"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Android"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "iOS/macOS"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Windows"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agora::base::AParameter apm(agoraEngine);apm->agoraEngine->setParameters("{\\"che.audio. custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Electron"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`this.agoraEngine?.setParameters("{\\"rtc.audio. custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Unity"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Flutter"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "React Native"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server C++"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Java"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Python"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Go"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":0}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "**Video**"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "In Native/third-party framework SDKs (v4.x) and RTC Server SDKs, `H.264` video data is sent and received by default."
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "To send and receive `JPEG` video data, use the following methods:"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "RTC SDK type"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Method"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Android"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "iOS/macOS"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraKit.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Windows"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agora::base::AParameter apm(agoraEngine);``apm->setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Electron"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`this.agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Unity"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraEngine.SetParameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Flutter"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`await agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "React Native"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`this.engine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server C++"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection->getAgoraParameter()->setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Java"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`agoraParameter.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Python"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.get_agora_parameter.set_parameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Server Go"
  }, {
    heading: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: '`connection.GetAgoraParameter.SetParameters("{\\"engine.video.codec_type\\": \\"20\\"}");`'
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: "**Audio**"
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: "In RTC SDK for Web (v4.x), `Opus` audio data is sent and received by default."
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: "To send and receive `G722`, `G711` audio data, call the following method:"
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: 'G711 (PCMA): `AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "pcma"})`'
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: 'G711 (PCMU): `AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "pcmu"})`'
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: 'G722: `AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "g722"})`'
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: "Only the Web SDK version 4.9.0 or higher supports setting the audio encoding format."
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: "**Video**"
  }, {
    heading: "set-up-rtc-sdk-for-web",
    content: 'In Web SDK (v4.x), `VP8` video data is sent and received by default. You call `createClient` to set the video data format to `"h264"`.'
  }, {
    heading: "set-up-rtc-sdk-for-embedded-systems",
    content: "In RTC SDK for embedded systems, `Opus` audio data and `H.264` video data are sent and received by default. If you want to receive `JPEG` video data or send and receive `G711` audio data, contact support\\@agora.io for activation."
  }, {
    heading: "set-up-rtc-sdk-for-embedded-systems",
    content: "RTC SDK for embedded systems does not support sending `JPEG` video data."
  }],
  headings: [{
    id: "set-up-iot-sdk",
    content: "Set up IoT SDK"
  }, {
    id: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
    content: "Set up RTC SDK for Native/third-party frameworks and RTC Server SDK"
  }, {
    id: "set-up-rtc-sdk-for-web",
    content: "Set up RTC SDK for Web"
  }, {
    id: "set-up-rtc-sdk-for-embedded-systems",
    content: "Set up RTC SDK for embedded systems"
  }]
};
export let toc = [{
  depth: 2,
  url: "#set-up-iot-sdk",
  title: _jsx(_Fragment, {
    children: "Set up IoT SDK"
  })
}, {
  depth: 2,
  url: "#set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
  title: _jsx(_Fragment, {
    children: "Set up RTC SDK for Native/third-party frameworks and RTC Server SDK"
  })
}, {
  depth: 2,
  url: "#set-up-rtc-sdk-for-web",
  title: _jsx(_Fragment, {
    children: "Set up RTC SDK for Web"
  })
}, {
  depth: 2,
  url: "#set-up-rtc-sdk-for-embedded-systems",
  title: _jsx(_Fragment, {
    children: "Set up RTC SDK for embedded systems"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, Tabs, TabsContent, TabsList, TabsTrigger } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  if (!TabsContent)
    _missingMdxReference("TabsContent", true);
  if (!TabsList)
    _missingMdxReference("TabsList", true);
  if (!TabsTrigger)
    _missingMdxReference("TabsTrigger", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "If your business requires not only high-quality audio and video transmission, but also easy integration, low memory usage, and low power consumption, for applications such as smart cameras and smart doorbells, Agora recommends that you use the RTC SDK with the IoT SDK."
    }), `
`, _jsx(_components.p, {
      children: "The following table shows the data formats supported when the IoT SDK communicates with the RTC SDK (v4.x):"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "RTC SDK Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Audio formats"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Video formats"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Native/third-party frameworks (Android, iOS/macOS, Windows, Electron, Unity, Flutter, React Native) and Server SDK"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "G722, G711, Opus, AAC"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "H.264, JPEG"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web (v4.x)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "G722, G711, Opus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "H.264"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Embedded systems"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "G711, Opus"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "H.264, JPEG"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The sending and receiving ends can communicate with each other only if the set data format is consistent and complies with the above table."
    }), `
`, _jsx(_components.p, {
      children: "The following sections describe how to set the audio and video data formats in the SDKs."
    }), `
`, _jsx(_components.h2, {
      id: "set-up-iot-sdk",
      children: "Set up IoT SDK"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Audio"
      })
    }), `
`, _jsx(_components.p, {
      children: "IoT SDK only supports mono audio data, and the data sending interval is 20 ms. If your device captures stereo audio, convert it to mono before encoding."
    }), `
`, _jsxs(_components.p, {
      children: ["To send and receive ", _jsx(_components.code, {
        children: "AAC"
      }), " audio data, set ", _jsx(_components.code, {
        children: "audio_frame_info_t.data_type"
      }), " to ", _jsx(_components.code, {
        children: "AUDIO_DATA_TYPE_AACLC"
      }), " or ", _jsx(_components.code, {
        children: "AUDIO_DATA_TYPE_HEAAC"
      }), " and specify the corresponding data size when calling the ", _jsx(_components.code, {
        children: "agora_rtc_send_audio_data"
      }), " method. The size of ", _jsx(_components.code, {
        children: "AAC"
      }), " audio data needs to be resolved by the user."]
    }), `
`, _jsxs(_components.p, {
      children: ["To send and receive ", _jsx(_components.code, {
        children: "Opus"
      }), ", ", _jsx(_components.code, {
        children: "G722"
      }), ", or ", _jsx(_components.code, {
        children: "G711"
      }), " audio data:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: ["When calling ", _jsx(_components.code, {
          children: "agora_rtc_join_channel"
        }), ", set ", _jsx(_components.code, {
          children: "rtc_channel_options_t.audio_codec_opt.audio_codec_type"
        }), " to the codec type and sampling rate you want to use."]
      }), `
`, _jsxs(_components.li, {
        children: ["When calling ", _jsx(_components.code, {
          children: "agora_rtc_send_audio_data"
        }), ", set ", _jsx(_components.code, {
          children: "audio_frame_info_t.data_type"
        }), " to ", _jsx(_components.code, {
          children: "AUDIO_DATA_TYPE_PCM"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Use the following recommended sampling rates and data sizes:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Codec"
          }), _jsx(_components.th, {
            children: "Sampling rate"
          }), _jsx(_components.th, {
            children: "Data size"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Opus"
          }), _jsx(_components.td, {
            children: "16 kHz"
          }), _jsx(_components.td, {
            children: "640 bytes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Opus"
          }), _jsx(_components.td, {
            children: "48 kHz"
          }), _jsx(_components.td, {
            children: "1920 bytes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "G722"
          }), _jsx(_components.td, {
            children: "16 kHz"
          }), _jsx(_components.td, {
            children: "640 bytes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "G711"
          }), _jsx(_components.td, {
            children: "8 kHz"
          }), _jsx(_components.td, {
            children: "320 bytes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Video"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In IoT SDK, ", _jsx(_components.code, {
        children: "H.264"
      }), " video data is sent and received by default."]
    }), `
`, _jsxs(_components.p, {
      children: ["To send and receive ", _jsx(_components.code, {
        children: "JPEG"
      }), " video data, when calling the ", _jsx(_components.code, {
        children: "agora_rtc_send_video_data"
      }), " method, set ", _jsx(_components.code, {
        children: "video_frame_info_t.data_type"
      }), " to ", _jsx(_components.code, {
        children: "VIDEO_DATA_TYPE_GENERIC_JPEG"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "set-up-rtc-sdk-for-nativethird-party-frameworks-and-rtc-server-sdk",
      children: "Set up RTC SDK for Native/third-party frameworks and RTC Server SDK"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Audio"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In Native/third-party framework SDKs (v4.x) and RTC Server SDKs, ", _jsx(_components.code, {
        children: "Opus"
      }), " or ", _jsx(_components.code, {
        children: "AAC"
      }), " audio data is sent and received by default."]
    }), `
`, _jsxs(_components.p, {
      children: ["To send and receive ", _jsx(_components.code, {
        children: "G722"
      }), " or ", _jsx(_components.code, {
        children: "G711"
      }), " audio data, use the following methods:"]
    }), `
`, _jsxs(Tabs, {
      defaultValue: "g722",
      children: [_jsxs(TabsList, {
        children: [_jsx(TabsTrigger, {
          value: "g722",
          children: "G722"
        }), _jsx(TabsTrigger, {
          value: "pcma",
          children: "G711 (PCMA)"
        }), _jsx(TabsTrigger, {
          value: "pcmu",
          children: "G711 (PCMU)"
        })]
      }), _jsx(TabsContent, {
        value: "g722",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "RTC SDK type"
              }), _jsx(_components.th, {
                children: "Configuration"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Android"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "agoraEngine.setAudioProfile(6)"
                }), " or ", _jsx(_components.code, {
                  children: 'agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")'
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "iOS/macOS"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "agoraKit.setAudioProfile(6)"
                }), " or ", _jsx(_components.code, {
                  children: 'agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":9}")'
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Windows"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "agoraEngine->setAudioProfile(6)"
                }), " or ", _jsx(_components.code, {
                  children: 'agora::base::AParameter apm(agoraEngine); apm->setParameters("{\\"che.audio. custom_payload_type\\":9}")'
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Electron"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "this.agoraEngine?.setAudioProfile(6)"
                }), " or ", _jsx(_components.code, {
                  children: 'this.agoraEngine?.setParameters("{\\"che.audio. custom_payload_type\\":9}")'
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Unity"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "await agoraEngine.setAudioProfile(profile: AudioProfileType.audioProfileIot)"
                }), " or ", _jsx(_components.code, {
                  children: 'await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")'
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Flutter"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "await agoraEngine.setAudioProfile(profile: AudioProfileType.audioProfileIot)"
                }), " or ", _jsx(_components.code, {
                  children: 'await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":9}")'
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "React Native"
              }), _jsxs(_components.td, {
                children: [_jsx(_components.code, {
                  children: "await agoraEngine.current?.setAudioProfile(6)"
                }), " or ", _jsx(_components.code, {
                  children: 'await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":9}")'
                })]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server C++"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":9}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Java"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":9}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Python"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":9}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Go"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":9}")'
                })
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "pcma",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "RTC SDK type"
              }), _jsx(_components.th, {
                children: "Configuration"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Android"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "iOS/macOS"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Windows"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agora::base::AParameter apm(agoraEngine);apm->agoraEngine->setParameters("{\\"che.audio. custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Electron"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'this.agoraEngine?.setParameters("{\\"rtc.audio. custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Unity"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Flutter"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "React Native"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server C++"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Java"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Python"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":8}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Go"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":8}")'
                })
              })]
            })]
          })]
        })
      }), _jsx(TabsContent, {
        value: "pcmu",
        children: _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "RTC SDK type"
              }), _jsx(_components.th, {
                children: "Configuration"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Android"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "iOS/macOS"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agoraKit.setParameters("{\\"che.audio. custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Windows"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agora::base::AParameter apm(agoraEngine);apm->agoraEngine->setParameters("{\\"che.audio. custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Electron"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'this.agoraEngine?.setParameters("{\\"rtc.audio. custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Unity"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Flutter"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'await agoraEngine.setParameters("{\\"che.audio. custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "React Native"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'await agoraEngine.current?.setParameters("{\\"che.audio. custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server C++"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection->getAgoraParameter()->setParameters("{\\"che.audio.custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Java"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'agoraParameter.setParameters("{\\"che.audio.custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Python"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection.get_agora_parameter.set_parameters("{\\"che.audio.custom_payload_type\\":0}")'
                })
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Server Go"
              }), _jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: 'connection.GetAgoraParameter.SetParameters("{\\"che.audio.custom_payload_type\\":0}")'
                })
              })]
            })]
          })]
        })
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Video"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In Native/third-party framework SDKs (v4.x) and RTC Server SDKs, ", _jsx(_components.code, {
        children: "H.264"
      }), " video data is sent and received by default."]
    }), `
`, _jsxs(_components.p, {
      children: ["To send and receive ", _jsx(_components.code, {
        children: "JPEG"
      }), " video data, use the following methods:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "RTC SDK type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Method"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Android"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "iOS/macOS"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'agoraKit.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Windows"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "agora::base::AParameter apm(agoraEngine);"
            }), _jsx("br", {}), _jsx(_components.code, {
              children: 'apm->setParameters("{\\"engine.video.codec_type\\": \\"20\\"}")'
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Electron"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'this.agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Unity"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'agoraEngine.SetParameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Flutter"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'await agoraEngine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "React Native"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'this.engine.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Server C++"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'connection->getAgoraParameter()->setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Server Java"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'agoraParameter.setParameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Server Python"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'connection.get_agora_parameter.set_parameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Server Go"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: 'connection.GetAgoraParameter.SetParameters("{\\"engine.video.codec_type\\": \\"20\\"}");'
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "set-up-rtc-sdk-for-web",
      children: "Set up RTC SDK for Web"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Audio"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In RTC SDK for Web (v4.x), ", _jsx(_components.code, {
        children: "Opus"
      }), " audio data is sent and received by default."]
    }), `
`, _jsxs(_components.p, {
      children: ["To send and receive ", _jsx(_components.code, {
        children: "G722"
      }), ", ", _jsx(_components.code, {
        children: "G711"
      }), " audio data, call the following method:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["G711 (PCMA): ", _jsx(_components.code, {
          children: 'AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "pcma"})'
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["G711 (PCMU): ", _jsx(_components.code, {
          children: 'AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "pcmu"})'
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["G722: ", _jsx(_components.code, {
          children: 'AgoraRTC.createClient({mode: "live", codec: "h264", audioCodec: "g722"})'
        })]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Only the Web SDK version 4.9.0 or higher supports setting the audio encoding format."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Video"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In Web SDK (v4.x), ", _jsx(_components.code, {
        children: "VP8"
      }), " video data is sent and received by default. You call ", _jsx(_components.code, {
        children: "createClient"
      }), " to set the video data format to ", _jsx(_components.code, {
        children: '"h264"'
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "set-up-rtc-sdk-for-embedded-systems",
      children: "Set up RTC SDK for embedded systems"
    }), `
`, _jsxs(_components.p, {
      children: ["In RTC SDK for embedded systems, ", _jsx(_components.code, {
        children: "Opus"
      }), " audio data and ", _jsx(_components.code, {
        children: "H.264"
      }), " video data are sent and received by default. If you want to receive ", _jsx(_components.code, {
        children: "JPEG"
      }), " video data or send and receive ", _jsx(_components.code, {
        children: "G711"
      }), " audio data, contact ", _jsx(_components.a, {
        href: "mailto:support@agora.io",
        children: "support@agora.io"
      }), " for activation."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["RTC SDK for embedded systems does not support sending ", _jsx(_components.code, {
            children: "JPEG"
          }), " video data."]
        })
      })
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
