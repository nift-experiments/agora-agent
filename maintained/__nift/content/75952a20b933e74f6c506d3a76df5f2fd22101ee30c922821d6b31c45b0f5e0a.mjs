import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "Shows Server Gateway's past releases."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;,&#x22;python&#x22;,&#x22;go&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    This document tracks important changes and improvements to the Server Gateway.

    <Accordions type="multiple">
      <Accordion title="v4.4.32" id="v4432" headingLevel="2" value="v4432">
        Released on April 28, 2025.

        ### Improvements [#improvements]

        * Improved the concurrent performance of the SDK when sending and receiving PCM audio streams.

        ### Fixed issues [#fixed-issues]

        * Fixed a color cast issue that occurred in specific scenarios.
        * Fixed occasional app crashes and memory leaks.
      </Accordion>

      <Accordion title="v4.4.30" id="v4430" headingLevel="2" value="v4430">
        Released on December 11, 2024.

        ### Compatibility changes [#compatibility-changes]

        #### Log encryption behavior changes [#log-encryption-behavior-changes]

        For security and performance reasons, as of this release, the SDK encrypts logs and no longer supports printing plaintext logs via the console.

        Refer to the following solutions for different needs:

        * If you need to know the API call status, please check the API logs and print the SDK callback logs yourself.
        * For any other special requirements, please contact technical support and provide the corresponding encrypted logs.

        ### New features [#new-features]

        #### Audio send buffer settings [#audio-send-buffer-settings]

        In use-cases such as AI interaction, the frequency of sending audio frames may be uneven. If the SDK sends to the Agora server according to the actual sending frequency, the receiver may experience issues such as stuttering or frame loss. To optimize audio transmission performance, this release adds methods to set the audio send buffer in the \`ILocalAudioTrack\` class:

        * \`setMaxBufferedAudioFrameNumber\`: Sets the maximum capacity of the audio send buffer.
        * \`ClearSenderBuffer\`: Clears the current audio send buffer, applicable to interrupt audio in human-machine dialogue use-cases.
        * \`setAudioFrameSendDelayMs\`: Sets the minimum data duration allowed to be sent by the audio send buffer, applicable to precise control of audio transmission delay.

        #### Audio labels [#audio-labels]

        This release introduces the audio labeling capability (\`AudioLabel\`). By adding audio labels, you can intuitively obtain audio information such as user audio energy, fundamental frequency, and voice type, making it convenient for post-processing. Contact technical support to enable and use this feature.

        #### 22050 Hz audio send sample rate [#22050-hz-audio-send-sample-rate]

        This release supports a 22050 Hz audio send sample rate, and you can set the sample rate when calling the \`sendAudioPcmData\` method to send raw audio data.

        #### SDK global custom parameters [#sdk-global-custom-parameters]

        This release adds the \`getAgoraParameter\` method in the \`IAgoraService\` class. The difference between this method and the \`getAgoraParameter\` method in the \`IRtcConnection\` class is as follows:

        * \`IAgoraService::getAgoraParameter\` is effective globally for the SDK.
        * \`IRtcConnection::getAgoraParameter\` is only effective for the current connection.

        ### Improvements [#improvements-1]

        This release reduces CPU consumption in multi-channel use-cases.

        ### Issues fixed [#issues-fixed]

        This release fixed issues caused by a null \`channelId\` pointer in the \`onPlaybackAudioFrameBeforeMixing\` callback.
      </Accordion>

      <Accordion title="v4.2.32" id="v4232" headingLevel="2" value="v4232">
        Released on August 30, 2024.

        ### Improvements [#improvements-2]

        This release enhances the efficiency and performance of the FFmpeg library when decoding H.264 and H.265 video data, improving the user experience.

        ### Fixed issues [#fixed-issues-1]

        This release fixed the issue of socket file descriptor leakage, ensuring proper management of network connection resources.
      </Accordion>

      <Accordion title="v4.2.30" id="v4230" headingLevel="2" value="v4230">
        Released on February 6, 2024.

        ### New features [#new-features-1]

        #### Multipath network transmission [#multipath-network-transmission]

        This release adds the multipath network transmission feature, which allows simultaneous transmission of audio and video streams over multiple network paths. For example, when you insert two IoT SIM cards in the device, the SDK can transmit audio and video streams through the network of both SIM cards, thereby improving the stability and reliability of audio and video transmission. Contact [support@agora.io](mailto\\:support@agora.io) to enable and use this feature.

        #### Hardware encoding acceleration [#hardware-encoding-acceleration]

        This release supports utilizing NVIDIA GPU hardware acceleration for video encoding, which reduces the power consumption of CPU and improves hardware encoding efficiency and performance. Contact [support@agora.io](mailto\\:support@agora.io) to enable and use this feature.

        ### Improvements [#improvements-3]

        #### Audio sending timestamp [#audio-sending-timestamp]

        To set the timestamp at which you send the audio data, this release adds the \`presentation_ms\` parameter in the \`sendAudioPcmData\` method. In use-cases such as video conferences and remote collaboration, this parameter allows you to achieve audio and video synchronization.

        ### Bug fixes [#bug-fixes]

        This release fixed the following issues:

        * App memory growth caused by receiving H.264 video raw data.
        * Garbled data stream when using both string-type user IDs and data stream functions simultaneously.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    This document tracks important changes and improvements to the Server Gateway.

    <Accordions type="multiple">
      <Accordion title="v4.4.32" id="v4432-1" headingLevel="2" value="v4432-1">
        Released on June 6, 2025.

        ### New features [#new-features-2]

        This release adds the following new features:

        #### Audio metadata support [#audio-metadata-support]

        This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the \`sendAudioMetadata\` method to transmit metadata. Remote users receive this information through the \`onAudioMetadataReceived\` callback.

        #### Get VAD information from raw audio data [#get-vad-information-from-raw-audio-data]

        Enable voice activity detection (VAD) for raw audio data using the new \`registerAudioFrameObserver\` method with the \`enableVad\` parameter. Access VAD status through the \`vadResult\` parameter in the \`onPlaybackAudioFrameBeforeMixing\` callback.

        #### Receive encoded audio data [#receive-encoded-audio-data]

        Access encoded audio data using these new interfaces:

        * \`registerAudioEncodedFrameObserver\`: Register an observer for encoded audio data.
        * \`IAudioEncodedFrameObserver\`: Receive encoded audio data through the \`onEncodedAudioFrameReceived\` callback.

        #### Set custom color spaces for external video [#set-custom-color-spaces-for-external-video]

        Use the new \`colorSpace\` attribute in \`ExternalVideoFrame\` to specify custom color spaces for externally captured video data.

        #### Manage connection domains [#manage-connection-domains]

        Control connection domains using the new \`domainLimit\` parameter in \`AgoraServiceConfig\`.

        ### Improvements [#improvements-4]

        This release includes the following improvements:

        #### Improved audio and video data sending interfaces [#improved-audio-and-video-data-sending-interfaces]

        Method names are now more descriptive:

        * \`sendAudioPcmData\` replaces the deprecated \`send\` in \`AgoraAudioPcmDataSender\`.
        * \`sendEncodedAudioFrame\` replaces \`send\` in \`AgoraAudioEncodedFrameSender\`.
        * \`sendEncodedVideoImage\` replaces \`send\` in \`AgoraVideoEncodedImageSender\`.
        * \`sendVideoFrame\` replaces \`send\` in \`AgoraVideoFrameSender\`.

        #### Send stream messages with byte arrays [#send-stream-messages-with-byte-arrays]

        Use the new \`sendStreamMessage\` overload to send byte array data without specifying a length parameter. The \`message\` parameter now accepts \`byte[]\` instead of \`String\`.

        ### Issues fixed [#issues-fixed-1]

        This release resolves the following issues:

        * Fixed \`alphaBuffer\` and \`metadataBuffer\` handling in \`VideoFrame\`.
        * Fixed potential crashes in the \`destroy\` method.
        * Fixed memory leaks and multi-threading issues for improved stability.
      </Accordion>

      <Accordion title="v4.4.30" id="v4430-1" headingLevel="2" value="v4430-1">
        Released on December 11, 2024.

        ### Compatibility changes [#compatibility-changes-1]

        #### Log encryption behavior changes [#log-encryption-behavior-changes-1]

        For security and performance reasons, as of this release, the SDK encrypts logs and no longer supports printing plaintext logs via the console.

        Refer to the following solutions for different needs:

        * If you need to know the API call status, check the API logs and print the SDK callback logs yourself.
        * For any other special requirements, contact technical support and provide the corresponding encrypted logs.

        ### New features [#new-features-3]

        #### Maven integration method [#maven-integration-method]

        This release supports integrating the SDK through Maven. After creating a Maven project, open the \`pom.xml\` file and replace its contents with the following:

        \`\`\`xml
        <?xml version="1.0" encoding="UTF-8"?>
        <project xmlns="http://maven.apache.org/POM/4.0.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>

        <groupId>org.example</groupId>
        <artifactId>agora-rtc-linux-java</artifactId>
        <version>1.0-SNAPSHOT</version>

        <dependencies>
            <dependency>
            <groupId>io.agora.rtc</groupId>
            <artifactId>linux-java-sdk</artifactId>
            <version>4.4.30</version>
            </dependency>
        </dependencies>

        <properties>
            <maven.compiler.source>1.8</maven.compiler.source>
            <maven.compiler.target>1.8</maven.compiler.target>
        </properties>

        <build>
            <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-shade-plugin</artifactId>
                <version>2.3</version>
                <configuration>
                <createDependencyReducedPom>true</createDependencyReducedPom>
                </configuration>
                <executions>
                <execution>
                    <phase>package</phase>
                    <goals>
                    <goal>shade</goal>
                    </goals>
                    <configuration>
                    <transformers>
                        <transformer
                            implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                        <mainClass>App</mainClass>
                        </transformer>
                    </transformers>
                    </configuration>
                </execution>
                </executions>
            </plugin>
            </plugins>
        </build>
        </project>
        \`\`\`

        #### Audio send buffer settings [#audio-send-buffer-settings-1]

        In use-cases such as AI interaction, the frequency of sending audio frames may be uneven. If the SDK sends to the Agora server according to the actual sending frequency, the receiver may experience issues such as stuttering or frame loss. To optimize audio transmission performance, this release adds methods to set the audio send buffer in the \`AgoraLocalAudioTrack\` class:

        * \`setMaxBufferedAudioFrameNumber\`: Sets the maximum capacity of the audio send buffer.
        * \`clearSenderBuffer\`: Clears the current audio send buffer, applicable to interrupt audio in human-machine dialogue use-cases.
        * \`setSendDelayMs\`: Sets the minimum data duration allowed to be sent by the audio send buffer, applicable to precise control of audio transmission delay.

        #### Audio labels [#audio-labels-1]

        This release introduces the audio labeling capability (\`AudioLabel\`). By adding audio labels, you can intuitively obtain audio information such as user audio energy, fundamental frequency, and voice type, making it convenient for post-processing. Contact technical support to enable and use this feature.

        #### 22050 Hz audio send sample rate [#22050-hz-audio-send-sample-rate-1]

        This release supports a 22050 Hz audio send sample rate, and you can set the sample rate when calling the \`AgoraAudioPcmDataSender.send\` method to send raw audio data.

        #### SDK global custom parameters [#sdk-global-custom-parameters-1]

        This release adds the \`getAgoraParameter\` method in the \`AgoraService\` class. The difference between this method and the \`getAgoraParameter\` method in the \`AgoraRtcConn\` class is as follows:

        * \`AgoraService.getAgoraParameter\` is effective globally for the SDK.
        * \`AgoraRtcConn.getAgoraParameter\` is only effective for the current connection.

        ### Improvements [#improvements-5]

        This release includes the following improvements:

        * Reduces CPU consumption in multi-channel use-cases.
        * Optimizes memory management mechanism for audio frame callbacks \`onPlaybackAudioFrameBeforeMixing\`, \`onRecordAudioFrame\`, \`onPlaybackAudioFrame\`, and \`onMixedAudioFrame\`, improving the efficiency and stability of \`AudioFrame\` processing.

        ### Fixed issues [#fixed-issues-2]

        This release fixed the following issues:

        * Issues caused by a null \`channelId\` pointer in the \`onPlaybackAudioFrameBeforeMixing\` callback.
        * Occasional crashes in the \`onRemoteAudioTrackStatistics\`, \`onUserAudioTrackSubscribed\`, \`onUserAudioTrackStateChanged\`, \`onUserVideoTrackSubscribed\`, \`onUserVideoTrackStateChanged\`, or \`onRemoteVideoTrackStatistics\` callbacks.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="python">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="python" />

    This document tracks important changes and improvements to the Server Gateway.

    <Accordions type="multiple">
      <Accordion title="v2.2.4" id="v224" headingLevel="2" value="v224">
        Released on June 6, 2025.

        ### New features [#new-features-4]

        This release adds the following new features:

        #### Audio metadata support [#audio-metadata-support-1]

        This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the \`send_audio_metadata\` method to transmit metadata. Remote users receive this information through the \`on_audio_metadata_received\` callback.

        #### Enhanced external video source support [#enhanced-external-video-source-support]

        This version adds the following fields to \`ExternalVideoFrame\`:

        * \`fill_alpha_buffer\` and \`alpha_buffer\` to support Alpha data channel.
        * \`color_space\` to support custom color space for externally captured video data.

        #### Secure data transmission [#secure-data-transmission]

        This version adds the \`enable_encryption\` method to support encryption when sending and receiving data streams. If you encounter problems during encryption and decryption that lead to failure, they are notified through the \`on_encryption_error\` callback.
      </Accordion>

      <Accordion title="v2.1.0" id="v210" headingLevel="2" value="v210">
        Released on December 11, 2024.

        This is the first version of the Server Gateway for Python.

        ### New features [#new-features-5]

        #### Media streams transmission [#media-streams-transmission]

        Server Gateway supports various audio and video encoding formats, such as H.264, H.265, VP8 for video, and OPUS, G722, and PCMA for audio. You can send and receive multiple types of audio and video data without being restricted by audio and video devices.

        #### Data streams transmission [#data-streams-transmission]

        Server Gateway supports sending and receiving data stream messages, applicable to use-cases requiring message transmission. For example, a chat application can use this feature to implement instant messaging between users.

        #### Multiple channels [#multiple-channels]

        Server Gateway supports sending or receiving media streams in multiple channels simultaneously, applicable to use-cases requiring multiple channel management. For example, an online education platform can conduct live classes for multiple classes simultaneously, ensuring that the audio and video data for each class does not interfere with one another.

        #### Subscribing to specific users [#subscribing-to-specific-users]

        You can selectively subscribe to specific users' media streams using their user IDs. For example, in a large conference, attendees can subscribe only to the speaker's media stream, saving bandwidth and improving efficiency.

        #### Audio mixing [#audio-mixing]

        Server Gateway supports mixing multiple audio streams, applicable to use-cases where multiple users or devices are sending streams simultaneously. For example, an online concert can mix audio streams from guitar, drums, and vocals into a high-quality audio stream for the audience.

        #### Cloud proxy [#cloud-proxy]

        Server Gateway allows access to Agora services within an intranet by whitelisting specific IPs and ports on the firewall. It is applicable to large enterprises, hospitals, universities, banks, and other institutions with high security requirements, ensuring a secure and stable connection.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="go">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="go" />

    This document tracks important changes and improvements to the Server Gateway.

    <Accordions type="multiple">
      <Accordion title="v2.2.4" id="v224-1" headingLevel="2" value="v224-1">
        Released on June 6, 2025.

        ### New features [#new-features-6]

        This release adds the following new features:

        #### Audio metadata support [#audio-metadata-support-2]

        This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the \`SendAudioMetadata\` method. Remote users receive the information through the \`OnAudioMetadataReceived\` callback.

        #### Enhanced external video capabilities [#enhanced-external-video-capabilities]

        This version adds the following fields to \`ExternalVideoFrame\`:

        * \`FillAlphaBuffer\` and \`AlphaMode\` to support Alpha data channel.
        * \`ColorSpace\` to support custom color space for externally captured video data.

        #### Secure data transmission [#secure-data-transmission-1]

        This version adds the \`EnableEncryption\` method to support encryption when sending and receiving data streams. If you encounter problems during encryption and decryption that lead to failure, they are notified through the \`OnEncryptionError\` callback.
      </Accordion>

      <Accordion title="v2.1.0" id="v210-1" headingLevel="2" value="v210-1">
        Released on December 11, 2024.

        This is the first version of the Server Gateway for Go.

        ### New features [#new-features-7]

        This release adds the following new features:

        #### Media streams transmission [#media-streams-transmission-1]

        Server Gateway supports various audio and video encoding formats, such as H.264, H.265, VP8 for video, and OPUS, G722, and PCMA for audio. You can send and receive multiple types of audio and video data without being restricted by audio and video devices.

        #### Data streams transmission [#data-streams-transmission-1]

        Server Gateway supports sending and receiving data stream messages, applicable to use-cases requiring message transmission. For example, a chat application can use this feature to implement instant messaging between users.

        #### Multiple channels [#multiple-channels-1]

        Server Gateway supports sending or receiving media streams in multiple channels simultaneously, applicable to use-cases requiring multiple channel management. For example, an online education platform can conduct live classes for multiple classes simultaneously, ensuring that the audio and video data for each class does not interfere with one another.

        #### Subscribing to specific users [#subscribing-to-specific-users-1]

        You can selectively subscribe to specific users' media streams using their user IDs. For example, in a large conference, attendees can subscribe only to the speaker's media stream, saving bandwidth and improving efficiency.

        #### Audio mixing [#audio-mixing-1]

        Server Gateway supports mixing multiple audio streams, applicable to use-cases where multiple users or devices are sending streams simultaneously. For example, an online concert can mix audio streams from guitar, drums, and vocals into a high-quality audio stream for the audience.

        #### Cloud proxy [#cloud-proxy-1]

        Server Gateway allows access to Agora services within an intranet by whitelisting specific IPs and ports on the firewall. It is applicable to large enterprises, hospitals, universities, banks, and other institutions with high security requirements, ensuring a secure and stable connection.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "This document tracks important changes and improvements to the Server Gateway."
  }, {
    heading: undefined,
    content: "Released on April 28, 2025."
  }, {
    heading: "improvements",
    content: "Improved the concurrent performance of the SDK when sending and receiving PCM audio streams."
  }, {
    heading: "fixed-issues",
    content: "Fixed a color cast issue that occurred in specific scenarios."
  }, {
    heading: "fixed-issues",
    content: "Fixed occasional app crashes and memory leaks."
  }, {
    heading: "fixed-issues",
    content: "Released on December 11, 2024."
  }, {
    heading: "log-encryption-behavior-changes",
    content: "For security and performance reasons, as of this release, the SDK encrypts logs and no longer supports printing plaintext logs via the console."
  }, {
    heading: "log-encryption-behavior-changes",
    content: "Refer to the following solutions for different needs:"
  }, {
    heading: "log-encryption-behavior-changes",
    content: "If you need to know the API call status, please check the API logs and print the SDK callback logs yourself."
  }, {
    heading: "log-encryption-behavior-changes",
    content: "For any other special requirements, please contact technical support and provide the corresponding encrypted logs."
  }, {
    heading: "audio-send-buffer-settings",
    content: "In use-cases such as AI interaction, the frequency of sending audio frames may be uneven. If the SDK sends to the Agora server according to the actual sending frequency, the receiver may experience issues such as stuttering or frame loss. To optimize audio transmission performance, this release adds methods to set the audio send buffer in the `ILocalAudioTrack` class:"
  }, {
    heading: "audio-send-buffer-settings",
    content: "`setMaxBufferedAudioFrameNumber`: Sets the maximum capacity of the audio send buffer."
  }, {
    heading: "audio-send-buffer-settings",
    content: "`ClearSenderBuffer`: Clears the current audio send buffer, applicable to interrupt audio in human-machine dialogue use-cases."
  }, {
    heading: "audio-send-buffer-settings",
    content: "`setAudioFrameSendDelayMs`: Sets the minimum data duration allowed to be sent by the audio send buffer, applicable to precise control of audio transmission delay."
  }, {
    heading: "audio-labels",
    content: "This release introduces the audio labeling capability (`AudioLabel`). By adding audio labels, you can intuitively obtain audio information such as user audio energy, fundamental frequency, and voice type, making it convenient for post-processing. Contact technical support to enable and use this feature."
  }, {
    heading: "22050-hz-audio-send-sample-rate",
    content: "This release supports a 22050 Hz audio send sample rate, and you can set the sample rate when calling the `sendAudioPcmData` method to send raw audio data."
  }, {
    heading: "sdk-global-custom-parameters",
    content: "This release adds the `getAgoraParameter` method in the `IAgoraService` class. The difference between this method and the `getAgoraParameter` method in the `IRtcConnection` class is as follows:"
  }, {
    heading: "sdk-global-custom-parameters",
    content: "`IAgoraService::getAgoraParameter` is effective globally for the SDK."
  }, {
    heading: "sdk-global-custom-parameters",
    content: "`IRtcConnection::getAgoraParameter` is only effective for the current connection."
  }, {
    heading: "improvements-1",
    content: "This release reduces CPU consumption in multi-channel use-cases."
  }, {
    heading: "issues-fixed",
    content: "This release fixed issues caused by a null `channelId` pointer in the `onPlaybackAudioFrameBeforeMixing` callback."
  }, {
    heading: "issues-fixed",
    content: "Released on August 30, 2024."
  }, {
    heading: "improvements-2",
    content: "This release enhances the efficiency and performance of the FFmpeg library when decoding H.264 and H.265 video data, improving the user experience."
  }, {
    heading: "fixed-issues-1",
    content: "This release fixed the issue of socket file descriptor leakage, ensuring proper management of network connection resources."
  }, {
    heading: "fixed-issues-1",
    content: "Released on February 6, 2024."
  }, {
    heading: "multipath-network-transmission",
    content: "This release adds the multipath network transmission feature, which allows simultaneous transmission of audio and video streams over multiple network paths. For example, when you insert two IoT SIM cards in the device, the SDK can transmit audio and video streams through the network of both SIM cards, thereby improving the stability and reliability of audio and video transmission. Contact support\\@agora.io to enable and use this feature."
  }, {
    heading: "hardware-encoding-acceleration",
    content: "This release supports utilizing NVIDIA GPU hardware acceleration for video encoding, which reduces the power consumption of CPU and improves hardware encoding efficiency and performance. Contact support\\@agora.io to enable and use this feature."
  }, {
    heading: "audio-sending-timestamp",
    content: "To set the timestamp at which you send the audio data, this release adds the `presentation_ms` parameter in the `sendAudioPcmData` method. In use-cases such as video conferences and remote collaboration, this parameter allows you to achieve audio and video synchronization."
  }, {
    heading: "bug-fixes",
    content: "This release fixed the following issues:"
  }, {
    heading: "bug-fixes",
    content: "App memory growth caused by receiving H.264 video raw data."
  }, {
    heading: "bug-fixes",
    content: "Garbled data stream when using both string-type user IDs and data stream functions simultaneously."
  }, {
    heading: "bug-fixes",
    content: "This document tracks important changes and improvements to the Server Gateway."
  }, {
    heading: "bug-fixes",
    content: "Released on June 6, 2025."
  }, {
    heading: "new-features-2",
    content: "This release adds the following new features:"
  }, {
    heading: "audio-metadata-support",
    content: "This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the `sendAudioMetadata` method to transmit metadata. Remote users receive this information through the `onAudioMetadataReceived` callback."
  }, {
    heading: "get-vad-information-from-raw-audio-data",
    content: "Enable voice activity detection (VAD) for raw audio data using the new `registerAudioFrameObserver` method with the `enableVad` parameter. Access VAD status through the `vadResult` parameter in the `onPlaybackAudioFrameBeforeMixing` callback."
  }, {
    heading: "receive-encoded-audio-data",
    content: "Access encoded audio data using these new interfaces:"
  }, {
    heading: "receive-encoded-audio-data",
    content: "`registerAudioEncodedFrameObserver`: Register an observer for encoded audio data."
  }, {
    heading: "receive-encoded-audio-data",
    content: "`IAudioEncodedFrameObserver`: Receive encoded audio data through the `onEncodedAudioFrameReceived` callback."
  }, {
    heading: "set-custom-color-spaces-for-external-video",
    content: "Use the new `colorSpace` attribute in `ExternalVideoFrame` to specify custom color spaces for externally captured video data."
  }, {
    heading: "manage-connection-domains",
    content: "Control connection domains using the new `domainLimit` parameter in `AgoraServiceConfig`."
  }, {
    heading: "improvements-4",
    content: "This release includes the following improvements:"
  }, {
    heading: "improved-audio-and-video-data-sending-interfaces",
    content: "Method names are now more descriptive:"
  }, {
    heading: "improved-audio-and-video-data-sending-interfaces",
    content: "`sendAudioPcmData` replaces the deprecated `send` in `AgoraAudioPcmDataSender`."
  }, {
    heading: "improved-audio-and-video-data-sending-interfaces",
    content: "`sendEncodedAudioFrame` replaces `send` in `AgoraAudioEncodedFrameSender`."
  }, {
    heading: "improved-audio-and-video-data-sending-interfaces",
    content: "`sendEncodedVideoImage` replaces `send` in `AgoraVideoEncodedImageSender`."
  }, {
    heading: "improved-audio-and-video-data-sending-interfaces",
    content: "`sendVideoFrame` replaces `send` in `AgoraVideoFrameSender`."
  }, {
    heading: "send-stream-messages-with-byte-arrays",
    content: "Use the new `sendStreamMessage` overload to send byte array data without specifying a length parameter. The `message` parameter now accepts `byte[]` instead of `String`."
  }, {
    heading: "issues-fixed-1",
    content: "This release resolves the following issues:"
  }, {
    heading: "issues-fixed-1",
    content: "Fixed `alphaBuffer` and `metadataBuffer` handling in `VideoFrame`."
  }, {
    heading: "issues-fixed-1",
    content: "Fixed potential crashes in the `destroy` method."
  }, {
    heading: "issues-fixed-1",
    content: "Fixed memory leaks and multi-threading issues for improved stability."
  }, {
    heading: "issues-fixed-1",
    content: "Released on December 11, 2024."
  }, {
    heading: "log-encryption-behavior-changes-1",
    content: "For security and performance reasons, as of this release, the SDK encrypts logs and no longer supports printing plaintext logs via the console."
  }, {
    heading: "log-encryption-behavior-changes-1",
    content: "Refer to the following solutions for different needs:"
  }, {
    heading: "log-encryption-behavior-changes-1",
    content: "If you need to know the API call status, check the API logs and print the SDK callback logs yourself."
  }, {
    heading: "log-encryption-behavior-changes-1",
    content: "For any other special requirements, contact technical support and provide the corresponding encrypted logs."
  }, {
    heading: "maven-integration-method",
    content: "This release supports integrating the SDK through Maven. After creating a Maven project, open the `pom.xml` file and replace its contents with the following:"
  }, {
    heading: "audio-send-buffer-settings-1",
    content: "In use-cases such as AI interaction, the frequency of sending audio frames may be uneven. If the SDK sends to the Agora server according to the actual sending frequency, the receiver may experience issues such as stuttering or frame loss. To optimize audio transmission performance, this release adds methods to set the audio send buffer in the `AgoraLocalAudioTrack` class:"
  }, {
    heading: "audio-send-buffer-settings-1",
    content: "`setMaxBufferedAudioFrameNumber`: Sets the maximum capacity of the audio send buffer."
  }, {
    heading: "audio-send-buffer-settings-1",
    content: "`clearSenderBuffer`: Clears the current audio send buffer, applicable to interrupt audio in human-machine dialogue use-cases."
  }, {
    heading: "audio-send-buffer-settings-1",
    content: "`setSendDelayMs`: Sets the minimum data duration allowed to be sent by the audio send buffer, applicable to precise control of audio transmission delay."
  }, {
    heading: "audio-labels-1",
    content: "This release introduces the audio labeling capability (`AudioLabel`). By adding audio labels, you can intuitively obtain audio information such as user audio energy, fundamental frequency, and voice type, making it convenient for post-processing. Contact technical support to enable and use this feature."
  }, {
    heading: "22050-hz-audio-send-sample-rate-1",
    content: "This release supports a 22050 Hz audio send sample rate, and you can set the sample rate when calling the `AgoraAudioPcmDataSender.send` method to send raw audio data."
  }, {
    heading: "sdk-global-custom-parameters-1",
    content: "This release adds the `getAgoraParameter` method in the `AgoraService` class. The difference between this method and the `getAgoraParameter` method in the `AgoraRtcConn` class is as follows:"
  }, {
    heading: "sdk-global-custom-parameters-1",
    content: "`AgoraService.getAgoraParameter` is effective globally for the SDK."
  }, {
    heading: "sdk-global-custom-parameters-1",
    content: "`AgoraRtcConn.getAgoraParameter` is only effective for the current connection."
  }, {
    heading: "improvements-5",
    content: "This release includes the following improvements:"
  }, {
    heading: "improvements-5",
    content: "Reduces CPU consumption in multi-channel use-cases."
  }, {
    heading: "improvements-5",
    content: "Optimizes memory management mechanism for audio frame callbacks `onPlaybackAudioFrameBeforeMixing`, `onRecordAudioFrame`, `onPlaybackAudioFrame`, and `onMixedAudioFrame`, improving the efficiency and stability of `AudioFrame` processing."
  }, {
    heading: "fixed-issues-2",
    content: "This release fixed the following issues:"
  }, {
    heading: "fixed-issues-2",
    content: "Issues caused by a null `channelId` pointer in the `onPlaybackAudioFrameBeforeMixing` callback."
  }, {
    heading: "fixed-issues-2",
    content: "Occasional crashes in the `onRemoteAudioTrackStatistics`, `onUserAudioTrackSubscribed`, `onUserAudioTrackStateChanged`, `onUserVideoTrackSubscribed`, `onUserVideoTrackStateChanged`, or `onRemoteVideoTrackStatistics` callbacks."
  }, {
    heading: "fixed-issues-2",
    content: "This document tracks important changes and improvements to the Server Gateway."
  }, {
    heading: "fixed-issues-2",
    content: "Released on June 6, 2025."
  }, {
    heading: "new-features-4",
    content: "This release adds the following new features:"
  }, {
    heading: "audio-metadata-support-1",
    content: "This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the `send_audio_metadata` method to transmit metadata. Remote users receive this information through the `on_audio_metadata_received` callback."
  }, {
    heading: "enhanced-external-video-source-support",
    content: "This version adds the following fields to `ExternalVideoFrame`:"
  }, {
    heading: "enhanced-external-video-source-support",
    content: "`fill_alpha_buffer` and `alpha_buffer` to support Alpha data channel."
  }, {
    heading: "enhanced-external-video-source-support",
    content: "`color_space` to support custom color space for externally captured video data."
  }, {
    heading: "secure-data-transmission",
    content: "This version adds the `enable_encryption` method to support encryption when sending and receiving data streams. If you encounter problems during encryption and decryption that lead to failure, they are notified through the `on_encryption_error` callback."
  }, {
    heading: "secure-data-transmission",
    content: "Released on December 11, 2024."
  }, {
    heading: "secure-data-transmission",
    content: "This is the first version of the Server Gateway for Python."
  }, {
    heading: "media-streams-transmission",
    content: "Server Gateway supports various audio and video encoding formats, such as H.264, H.265, VP8 for video, and OPUS, G722, and PCMA for audio. You can send and receive multiple types of audio and video data without being restricted by audio and video devices."
  }, {
    heading: "data-streams-transmission",
    content: "Server Gateway supports sending and receiving data stream messages, applicable to use-cases requiring message transmission. For example, a chat application can use this feature to implement instant messaging between users."
  }, {
    heading: "multiple-channels",
    content: "Server Gateway supports sending or receiving media streams in multiple channels simultaneously, applicable to use-cases requiring multiple channel management. For example, an online education platform can conduct live classes for multiple classes simultaneously, ensuring that the audio and video data for each class does not interfere with one another."
  }, {
    heading: "subscribing-to-specific-users",
    content: "You can selectively subscribe to specific users' media streams using their user IDs. For example, in a large conference, attendees can subscribe only to the speaker's media stream, saving bandwidth and improving efficiency."
  }, {
    heading: "audio-mixing",
    content: "Server Gateway supports mixing multiple audio streams, applicable to use-cases where multiple users or devices are sending streams simultaneously. For example, an online concert can mix audio streams from guitar, drums, and vocals into a high-quality audio stream for the audience."
  }, {
    heading: "cloud-proxy",
    content: "Server Gateway allows access to Agora services within an intranet by whitelisting specific IPs and ports on the firewall. It is applicable to large enterprises, hospitals, universities, banks, and other institutions with high security requirements, ensuring a secure and stable connection."
  }, {
    heading: "cloud-proxy",
    content: "This document tracks important changes and improvements to the Server Gateway."
  }, {
    heading: "cloud-proxy",
    content: "Released on June 6, 2025."
  }, {
    heading: "new-features-6",
    content: "This release adds the following new features:"
  }, {
    heading: "audio-metadata-support-2",
    content: "This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the `SendAudioMetadata` method. Remote users receive the information through the `OnAudioMetadataReceived` callback."
  }, {
    heading: "enhanced-external-video-capabilities",
    content: "This version adds the following fields to `ExternalVideoFrame`:"
  }, {
    heading: "enhanced-external-video-capabilities",
    content: "`FillAlphaBuffer` and `AlphaMode` to support Alpha data channel."
  }, {
    heading: "enhanced-external-video-capabilities",
    content: "`ColorSpace` to support custom color space for externally captured video data."
  }, {
    heading: "secure-data-transmission-1",
    content: "This version adds the `EnableEncryption` method to support encryption when sending and receiving data streams. If you encounter problems during encryption and decryption that lead to failure, they are notified through the `OnEncryptionError` callback."
  }, {
    heading: "secure-data-transmission-1",
    content: "Released on December 11, 2024."
  }, {
    heading: "secure-data-transmission-1",
    content: "This is the first version of the Server Gateway for Go."
  }, {
    heading: "new-features-7",
    content: "This release adds the following new features:"
  }, {
    heading: "media-streams-transmission-1",
    content: "Server Gateway supports various audio and video encoding formats, such as H.264, H.265, VP8 for video, and OPUS, G722, and PCMA for audio. You can send and receive multiple types of audio and video data without being restricted by audio and video devices."
  }, {
    heading: "data-streams-transmission-1",
    content: "Server Gateway supports sending and receiving data stream messages, applicable to use-cases requiring message transmission. For example, a chat application can use this feature to implement instant messaging between users."
  }, {
    heading: "multiple-channels-1",
    content: "Server Gateway supports sending or receiving media streams in multiple channels simultaneously, applicable to use-cases requiring multiple channel management. For example, an online education platform can conduct live classes for multiple classes simultaneously, ensuring that the audio and video data for each class does not interfere with one another."
  }, {
    heading: "subscribing-to-specific-users-1",
    content: "You can selectively subscribe to specific users' media streams using their user IDs. For example, in a large conference, attendees can subscribe only to the speaker's media stream, saving bandwidth and improving efficiency."
  }, {
    heading: "audio-mixing-1",
    content: "Server Gateway supports mixing multiple audio streams, applicable to use-cases where multiple users or devices are sending streams simultaneously. For example, an online concert can mix audio streams from guitar, drums, and vocals into a high-quality audio stream for the audience."
  }, {
    heading: "cloud-proxy-1",
    content: "Server Gateway allows access to Agora services within an intranet by whitelisting specific IPs and ports on the firewall. It is applicable to large enterprises, hospitals, universities, banks, and other institutions with high security requirements, ensuring a secure and stable connection."
  }],
  headings: [{
    id: "improvements",
    content: "Improvements"
  }, {
    id: "fixed-issues",
    content: "Fixed issues"
  }, {
    id: "compatibility-changes",
    content: "Compatibility changes"
  }, {
    id: "log-encryption-behavior-changes",
    content: "Log encryption behavior changes"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "audio-send-buffer-settings",
    content: "Audio send buffer settings"
  }, {
    id: "audio-labels",
    content: "Audio labels"
  }, {
    id: "22050-hz-audio-send-sample-rate",
    content: "22050 Hz audio send sample rate"
  }, {
    id: "sdk-global-custom-parameters",
    content: "SDK global custom parameters"
  }, {
    id: "improvements-1",
    content: "Improvements"
  }, {
    id: "issues-fixed",
    content: "Issues fixed"
  }, {
    id: "improvements-2",
    content: "Improvements"
  }, {
    id: "fixed-issues-1",
    content: "Fixed issues"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "multipath-network-transmission",
    content: "Multipath network transmission"
  }, {
    id: "hardware-encoding-acceleration",
    content: "Hardware encoding acceleration"
  }, {
    id: "improvements-3",
    content: "Improvements"
  }, {
    id: "audio-sending-timestamp",
    content: "Audio sending timestamp"
  }, {
    id: "bug-fixes",
    content: "Bug fixes"
  }, {
    id: "new-features-2",
    content: "New features"
  }, {
    id: "audio-metadata-support",
    content: "Audio metadata support"
  }, {
    id: "get-vad-information-from-raw-audio-data",
    content: "Get VAD information from raw audio data"
  }, {
    id: "receive-encoded-audio-data",
    content: "Receive encoded audio data"
  }, {
    id: "set-custom-color-spaces-for-external-video",
    content: "Set custom color spaces for external video"
  }, {
    id: "manage-connection-domains",
    content: "Manage connection domains"
  }, {
    id: "improvements-4",
    content: "Improvements"
  }, {
    id: "improved-audio-and-video-data-sending-interfaces",
    content: "Improved audio and video data sending interfaces"
  }, {
    id: "send-stream-messages-with-byte-arrays",
    content: "Send stream messages with byte arrays"
  }, {
    id: "issues-fixed-1",
    content: "Issues fixed"
  }, {
    id: "compatibility-changes-1",
    content: "Compatibility changes"
  }, {
    id: "log-encryption-behavior-changes-1",
    content: "Log encryption behavior changes"
  }, {
    id: "new-features-3",
    content: "New features"
  }, {
    id: "maven-integration-method",
    content: "Maven integration method"
  }, {
    id: "audio-send-buffer-settings-1",
    content: "Audio send buffer settings"
  }, {
    id: "audio-labels-1",
    content: "Audio labels"
  }, {
    id: "22050-hz-audio-send-sample-rate-1",
    content: "22050 Hz audio send sample rate"
  }, {
    id: "sdk-global-custom-parameters-1",
    content: "SDK global custom parameters"
  }, {
    id: "improvements-5",
    content: "Improvements"
  }, {
    id: "fixed-issues-2",
    content: "Fixed issues"
  }, {
    id: "new-features-4",
    content: "New features"
  }, {
    id: "audio-metadata-support-1",
    content: "Audio metadata support"
  }, {
    id: "enhanced-external-video-source-support",
    content: "Enhanced external video source support"
  }, {
    id: "secure-data-transmission",
    content: "Secure data transmission"
  }, {
    id: "new-features-5",
    content: "New features"
  }, {
    id: "media-streams-transmission",
    content: "Media streams transmission"
  }, {
    id: "data-streams-transmission",
    content: "Data streams transmission"
  }, {
    id: "multiple-channels",
    content: "Multiple channels"
  }, {
    id: "subscribing-to-specific-users",
    content: "Subscribing to specific users"
  }, {
    id: "audio-mixing",
    content: "Audio mixing"
  }, {
    id: "cloud-proxy",
    content: "Cloud proxy"
  }, {
    id: "new-features-6",
    content: "New features"
  }, {
    id: "audio-metadata-support-2",
    content: "Audio metadata support"
  }, {
    id: "enhanced-external-video-capabilities",
    content: "Enhanced external video capabilities"
  }, {
    id: "secure-data-transmission-1",
    content: "Secure data transmission"
  }, {
    id: "new-features-7",
    content: "New features"
  }, {
    id: "media-streams-transmission-1",
    content: "Media streams transmission"
  }, {
    id: "data-streams-transmission-1",
    content: "Data streams transmission"
  }, {
    id: "multiple-channels-1",
    content: "Multiple channels"
  }, {
    id: "subscribing-to-specific-users-1",
    content: "Subscribing to specific users"
  }, {
    id: "audio-mixing-1",
    content: "Audio mixing"
  }, {
    id: "cloud-proxy-1",
    content: "Cloud proxy"
  }]
};
export let toc = [{
  depth: 3,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 3,
  url: "#fixed-issues",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 3,
  url: "#compatibility-changes",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#log-encryption-behavior-changes",
  title: _jsx(_Fragment, {
    children: "Log encryption behavior changes"
  })
}, {
  depth: 3,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#audio-send-buffer-settings",
  title: _jsx(_Fragment, {
    children: "Audio send buffer settings"
  })
}, {
  depth: 4,
  url: "#audio-labels",
  title: _jsx(_Fragment, {
    children: "Audio labels"
  })
}, {
  depth: 4,
  url: "#22050-hz-audio-send-sample-rate",
  title: _jsx(_Fragment, {
    children: "22050 Hz audio send sample rate"
  })
}, {
  depth: 4,
  url: "#sdk-global-custom-parameters",
  title: _jsx(_Fragment, {
    children: "SDK global custom parameters"
  })
}, {
  depth: 3,
  url: "#improvements-1",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 3,
  url: "#issues-fixed",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 3,
  url: "#improvements-2",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 3,
  url: "#fixed-issues-1",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 3,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#multipath-network-transmission",
  title: _jsx(_Fragment, {
    children: "Multipath network transmission"
  })
}, {
  depth: 4,
  url: "#hardware-encoding-acceleration",
  title: _jsx(_Fragment, {
    children: "Hardware encoding acceleration"
  })
}, {
  depth: 3,
  url: "#improvements-3",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#audio-sending-timestamp",
  title: _jsx(_Fragment, {
    children: "Audio sending timestamp"
  })
}, {
  depth: 3,
  url: "#bug-fixes",
  title: _jsx(_Fragment, {
    children: "Bug fixes"
  })
}, {
  depth: 3,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#audio-metadata-support",
  title: _jsx(_Fragment, {
    children: "Audio metadata support"
  })
}, {
  depth: 4,
  url: "#get-vad-information-from-raw-audio-data",
  title: _jsx(_Fragment, {
    children: "Get VAD information from raw audio data"
  })
}, {
  depth: 4,
  url: "#receive-encoded-audio-data",
  title: _jsx(_Fragment, {
    children: "Receive encoded audio data"
  })
}, {
  depth: 4,
  url: "#set-custom-color-spaces-for-external-video",
  title: _jsx(_Fragment, {
    children: "Set custom color spaces for external video"
  })
}, {
  depth: 4,
  url: "#manage-connection-domains",
  title: _jsx(_Fragment, {
    children: "Manage connection domains"
  })
}, {
  depth: 3,
  url: "#improvements-4",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#improved-audio-and-video-data-sending-interfaces",
  title: _jsx(_Fragment, {
    children: "Improved audio and video data sending interfaces"
  })
}, {
  depth: 4,
  url: "#send-stream-messages-with-byte-arrays",
  title: _jsx(_Fragment, {
    children: "Send stream messages with byte arrays"
  })
}, {
  depth: 3,
  url: "#issues-fixed-1",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 3,
  url: "#compatibility-changes-1",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#log-encryption-behavior-changes-1",
  title: _jsx(_Fragment, {
    children: "Log encryption behavior changes"
  })
}, {
  depth: 3,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#maven-integration-method",
  title: _jsx(_Fragment, {
    children: "Maven integration method"
  })
}, {
  depth: 4,
  url: "#audio-send-buffer-settings-1",
  title: _jsx(_Fragment, {
    children: "Audio send buffer settings"
  })
}, {
  depth: 4,
  url: "#audio-labels-1",
  title: _jsx(_Fragment, {
    children: "Audio labels"
  })
}, {
  depth: 4,
  url: "#22050-hz-audio-send-sample-rate-1",
  title: _jsx(_Fragment, {
    children: "22050 Hz audio send sample rate"
  })
}, {
  depth: 4,
  url: "#sdk-global-custom-parameters-1",
  title: _jsx(_Fragment, {
    children: "SDK global custom parameters"
  })
}, {
  depth: 3,
  url: "#improvements-5",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 3,
  url: "#fixed-issues-2",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 3,
  url: "#new-features-4",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#audio-metadata-support-1",
  title: _jsx(_Fragment, {
    children: "Audio metadata support"
  })
}, {
  depth: 4,
  url: "#enhanced-external-video-source-support",
  title: _jsx(_Fragment, {
    children: "Enhanced external video source support"
  })
}, {
  depth: 4,
  url: "#secure-data-transmission",
  title: _jsx(_Fragment, {
    children: "Secure data transmission"
  })
}, {
  depth: 3,
  url: "#new-features-5",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#media-streams-transmission",
  title: _jsx(_Fragment, {
    children: "Media streams transmission"
  })
}, {
  depth: 4,
  url: "#data-streams-transmission",
  title: _jsx(_Fragment, {
    children: "Data streams transmission"
  })
}, {
  depth: 4,
  url: "#multiple-channels",
  title: _jsx(_Fragment, {
    children: "Multiple channels"
  })
}, {
  depth: 4,
  url: "#subscribing-to-specific-users",
  title: _jsx(_Fragment, {
    children: "Subscribing to specific users"
  })
}, {
  depth: 4,
  url: "#audio-mixing",
  title: _jsx(_Fragment, {
    children: "Audio mixing"
  })
}, {
  depth: 4,
  url: "#cloud-proxy",
  title: _jsx(_Fragment, {
    children: "Cloud proxy"
  })
}, {
  depth: 3,
  url: "#new-features-6",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#audio-metadata-support-2",
  title: _jsx(_Fragment, {
    children: "Audio metadata support"
  })
}, {
  depth: 4,
  url: "#enhanced-external-video-capabilities",
  title: _jsx(_Fragment, {
    children: "Enhanced external video capabilities"
  })
}, {
  depth: 4,
  url: "#secure-data-transmission-1",
  title: _jsx(_Fragment, {
    children: "Secure data transmission"
  })
}, {
  depth: 3,
  url: "#new-features-7",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#media-streams-transmission-1",
  title: _jsx(_Fragment, {
    children: "Media streams transmission"
  })
}, {
  depth: 4,
  url: "#data-streams-transmission-1",
  title: _jsx(_Fragment, {
    children: "Data streams transmission"
  })
}, {
  depth: 4,
  url: "#multiple-channels-1",
  title: _jsx(_Fragment, {
    children: "Multiple channels"
  })
}, {
  depth: 4,
  url: "#subscribing-to-specific-users-1",
  title: _jsx(_Fragment, {
    children: "Subscribing to specific users"
  })
}, {
  depth: 4,
  url: "#audio-mixing-1",
  title: _jsx(_Fragment, {
    children: "Audio mixing"
  })
}, {
  depth: 4,
  url: "#cloud-proxy-1",
  title: _jsx(_Fragment, {
    children: "Cloud proxy"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  }, { Accordion, Accordions, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  if (!_PlatformPanel)
    _missingMdxReference("_PlatformPanel", true);
  if (!_PlatformProcessedMarker)
    _missingMdxReference("_PlatformProcessedMarker", true);
  if (!_PlatformTabsGroup)
    _missingMdxReference("_PlatformTabsGroup", true);
  return _jsxs(_PlatformTabsGroup, {
    groupMode: "structured",
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java","python","go"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsx(_components.p, {
        children: "This document tracks important changes and improvements to the Server Gateway."
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v4.4.32",
          id: "v4432",
          headingLevel: 2,
          value: "v4432",
          children: [_jsx(_components.p, {
            children: "Released on April 28, 2025."
          }), _jsx(_components.h3, {
            id: "improvements",
            children: "Improvements"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Improved the concurrent performance of the SDK when sending and receiving PCM audio streams."
            }), `
`]
          }), _jsx(_components.h3, {
            id: "fixed-issues",
            children: "Fixed issues"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Fixed a color cast issue that occurred in specific scenarios."
            }), `
`, _jsx(_components.li, {
              children: "Fixed occasional app crashes and memory leaks."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v4.4.30",
          id: "v4430",
          headingLevel: 2,
          value: "v4430",
          children: [_jsx(_components.p, {
            children: "Released on December 11, 2024."
          }), _jsx(_components.h3, {
            id: "compatibility-changes",
            children: "Compatibility changes"
          }), _jsx(_components.h4, {
            id: "log-encryption-behavior-changes",
            children: "Log encryption behavior changes"
          }), _jsx(_components.p, {
            children: "For security and performance reasons, as of this release, the SDK encrypts logs and no longer supports printing plaintext logs via the console."
          }), _jsx(_components.p, {
            children: "Refer to the following solutions for different needs:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If you need to know the API call status, please check the API logs and print the SDK callback logs yourself."
            }), `
`, _jsx(_components.li, {
              children: "For any other special requirements, please contact technical support and provide the corresponding encrypted logs."
            }), `
`]
          }), _jsx(_components.h3, {
            id: "new-features",
            children: "New features"
          }), _jsx(_components.h4, {
            id: "audio-send-buffer-settings",
            children: "Audio send buffer settings"
          }), _jsxs(_components.p, {
            children: ["In use-cases such as AI interaction, the frequency of sending audio frames may be uneven. If the SDK sends to the Agora server according to the actual sending frequency, the receiver may experience issues such as stuttering or frame loss. To optimize audio transmission performance, this release adds methods to set the audio send buffer in the ", _jsx(_components.code, {
              children: "ILocalAudioTrack"
            }), " class:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "setMaxBufferedAudioFrameNumber"
              }), ": Sets the maximum capacity of the audio send buffer."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "ClearSenderBuffer"
              }), ": Clears the current audio send buffer, applicable to interrupt audio in human-machine dialogue use-cases."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "setAudioFrameSendDelayMs"
              }), ": Sets the minimum data duration allowed to be sent by the audio send buffer, applicable to precise control of audio transmission delay."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "audio-labels",
            children: "Audio labels"
          }), _jsxs(_components.p, {
            children: ["This release introduces the audio labeling capability (", _jsx(_components.code, {
              children: "AudioLabel"
            }), "). By adding audio labels, you can intuitively obtain audio information such as user audio energy, fundamental frequency, and voice type, making it convenient for post-processing. Contact technical support to enable and use this feature."]
          }), _jsx(_components.h4, {
            id: "22050-hz-audio-send-sample-rate",
            children: "22050 Hz audio send sample rate"
          }), _jsxs(_components.p, {
            children: ["This release supports a 22050 Hz audio send sample rate, and you can set the sample rate when calling the ", _jsx(_components.code, {
              children: "sendAudioPcmData"
            }), " method to send raw audio data."]
          }), _jsx(_components.h4, {
            id: "sdk-global-custom-parameters",
            children: "SDK global custom parameters"
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "getAgoraParameter"
            }), " method in the ", _jsx(_components.code, {
              children: "IAgoraService"
            }), " class. The difference between this method and the ", _jsx(_components.code, {
              children: "getAgoraParameter"
            }), " method in the ", _jsx(_components.code, {
              children: "IRtcConnection"
            }), " class is as follows:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "IAgoraService::getAgoraParameter"
              }), " is effective globally for the SDK."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "IRtcConnection::getAgoraParameter"
              }), " is only effective for the current connection."]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "improvements-1",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release reduces CPU consumption in multi-channel use-cases."
          }), _jsx(_components.h3, {
            id: "issues-fixed",
            children: "Issues fixed"
          }), _jsxs(_components.p, {
            children: ["This release fixed issues caused by a null ", _jsx(_components.code, {
              children: "channelId"
            }), " pointer in the ", _jsx(_components.code, {
              children: "onPlaybackAudioFrameBeforeMixing"
            }), " callback."]
          })]
        }), _jsxs(Accordion, {
          title: "v4.2.32",
          id: "v4232",
          headingLevel: 2,
          value: "v4232",
          children: [_jsx(_components.p, {
            children: "Released on August 30, 2024."
          }), _jsx(_components.h3, {
            id: "improvements-2",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release enhances the efficiency and performance of the FFmpeg library when decoding H.264 and H.265 video data, improving the user experience."
          }), _jsx(_components.h3, {
            id: "fixed-issues-1",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the issue of socket file descriptor leakage, ensuring proper management of network connection resources."
          })]
        }), _jsxs(Accordion, {
          title: "v4.2.30",
          id: "v4230",
          headingLevel: 2,
          value: "v4230",
          children: [_jsx(_components.p, {
            children: "Released on February 6, 2024."
          }), _jsx(_components.h3, {
            id: "new-features-1",
            children: "New features"
          }), _jsx(_components.h4, {
            id: "multipath-network-transmission",
            children: "Multipath network transmission"
          }), _jsxs(_components.p, {
            children: ["This release adds the multipath network transmission feature, which allows simultaneous transmission of audio and video streams over multiple network paths. For example, when you insert two IoT SIM cards in the device, the SDK can transmit audio and video streams through the network of both SIM cards, thereby improving the stability and reliability of audio and video transmission. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to enable and use this feature."]
          }), _jsx(_components.h4, {
            id: "hardware-encoding-acceleration",
            children: "Hardware encoding acceleration"
          }), _jsxs(_components.p, {
            children: ["This release supports utilizing NVIDIA GPU hardware acceleration for video encoding, which reduces the power consumption of CPU and improves hardware encoding efficiency and performance. Contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to enable and use this feature."]
          }), _jsx(_components.h3, {
            id: "improvements-3",
            children: "Improvements"
          }), _jsx(_components.h4, {
            id: "audio-sending-timestamp",
            children: "Audio sending timestamp"
          }), _jsxs(_components.p, {
            children: ["To set the timestamp at which you send the audio data, this release adds the ", _jsx(_components.code, {
              children: "presentation_ms"
            }), " parameter in the ", _jsx(_components.code, {
              children: "sendAudioPcmData"
            }), " method. In use-cases such as video conferences and remote collaboration, this parameter allows you to achieve audio and video synchronization."]
          }), _jsx(_components.h3, {
            id: "bug-fixes",
            children: "Bug fixes"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "App memory growth caused by receiving H.264 video raw data."
            }), `
`, _jsx(_components.li, {
              children: "Garbled data stream when using both string-type user IDs and data stream functions simultaneously."
            }), `
`]
          })]
        })]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "linux-java",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-java"
      }), _jsx(_components.p, {
        children: "This document tracks important changes and improvements to the Server Gateway."
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v4.4.32",
          id: "v4432-1",
          headingLevel: 2,
          value: "v4432-1",
          children: [_jsx(_components.p, {
            children: "Released on June 6, 2025."
          }), _jsx(_components.h3, {
            id: "new-features-2",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds the following new features:"
          }), _jsx(_components.h4, {
            id: "audio-metadata-support",
            children: "Audio metadata support"
          }), _jsxs(_components.p, {
            children: ["This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the ", _jsx(_components.code, {
              children: "sendAudioMetadata"
            }), " method to transmit metadata. Remote users receive this information through the ", _jsx(_components.code, {
              children: "onAudioMetadataReceived"
            }), " callback."]
          }), _jsx(_components.h4, {
            id: "get-vad-information-from-raw-audio-data",
            children: "Get VAD information from raw audio data"
          }), _jsxs(_components.p, {
            children: ["Enable voice activity detection (VAD) for raw audio data using the new ", _jsx(_components.code, {
              children: "registerAudioFrameObserver"
            }), " method with the ", _jsx(_components.code, {
              children: "enableVad"
            }), " parameter. Access VAD status through the ", _jsx(_components.code, {
              children: "vadResult"
            }), " parameter in the ", _jsx(_components.code, {
              children: "onPlaybackAudioFrameBeforeMixing"
            }), " callback."]
          }), _jsx(_components.h4, {
            id: "receive-encoded-audio-data",
            children: "Receive encoded audio data"
          }), _jsx(_components.p, {
            children: "Access encoded audio data using these new interfaces:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "registerAudioEncodedFrameObserver"
              }), ": Register an observer for encoded audio data."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "IAudioEncodedFrameObserver"
              }), ": Receive encoded audio data through the ", _jsx(_components.code, {
                children: "onEncodedAudioFrameReceived"
              }), " callback."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "set-custom-color-spaces-for-external-video",
            children: "Set custom color spaces for external video"
          }), _jsxs(_components.p, {
            children: ["Use the new ", _jsx(_components.code, {
              children: "colorSpace"
            }), " attribute in ", _jsx(_components.code, {
              children: "ExternalVideoFrame"
            }), " to specify custom color spaces for externally captured video data."]
          }), _jsx(_components.h4, {
            id: "manage-connection-domains",
            children: "Manage connection domains"
          }), _jsxs(_components.p, {
            children: ["Control connection domains using the new ", _jsx(_components.code, {
              children: "domainLimit"
            }), " parameter in ", _jsx(_components.code, {
              children: "AgoraServiceConfig"
            }), "."]
          }), _jsx(_components.h3, {
            id: "improvements-4",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release includes the following improvements:"
          }), _jsx(_components.h4, {
            id: "improved-audio-and-video-data-sending-interfaces",
            children: "Improved audio and video data sending interfaces"
          }), _jsx(_components.p, {
            children: "Method names are now more descriptive:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "sendAudioPcmData"
              }), " replaces the deprecated ", _jsx(_components.code, {
                children: "send"
              }), " in ", _jsx(_components.code, {
                children: "AgoraAudioPcmDataSender"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "sendEncodedAudioFrame"
              }), " replaces ", _jsx(_components.code, {
                children: "send"
              }), " in ", _jsx(_components.code, {
                children: "AgoraAudioEncodedFrameSender"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "sendEncodedVideoImage"
              }), " replaces ", _jsx(_components.code, {
                children: "send"
              }), " in ", _jsx(_components.code, {
                children: "AgoraVideoEncodedImageSender"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "sendVideoFrame"
              }), " replaces ", _jsx(_components.code, {
                children: "send"
              }), " in ", _jsx(_components.code, {
                children: "AgoraVideoFrameSender"
              }), "."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "send-stream-messages-with-byte-arrays",
            children: "Send stream messages with byte arrays"
          }), _jsxs(_components.p, {
            children: ["Use the new ", _jsx(_components.code, {
              children: "sendStreamMessage"
            }), " overload to send byte array data without specifying a length parameter. The ", _jsx(_components.code, {
              children: "message"
            }), " parameter now accepts ", _jsx(_components.code, {
              children: "byte[]"
            }), " instead of ", _jsx(_components.code, {
              children: "String"
            }), "."]
          }), _jsx(_components.h3, {
            id: "issues-fixed-1",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release resolves the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Fixed ", _jsx(_components.code, {
                children: "alphaBuffer"
              }), " and ", _jsx(_components.code, {
                children: "metadataBuffer"
              }), " handling in ", _jsx(_components.code, {
                children: "VideoFrame"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Fixed potential crashes in the ", _jsx(_components.code, {
                children: "destroy"
              }), " method."]
            }), `
`, _jsx(_components.li, {
              children: "Fixed memory leaks and multi-threading issues for improved stability."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v4.4.30",
          id: "v4430-1",
          headingLevel: 2,
          value: "v4430-1",
          children: [_jsx(_components.p, {
            children: "Released on December 11, 2024."
          }), _jsx(_components.h3, {
            id: "compatibility-changes-1",
            children: "Compatibility changes"
          }), _jsx(_components.h4, {
            id: "log-encryption-behavior-changes-1",
            children: "Log encryption behavior changes"
          }), _jsx(_components.p, {
            children: "For security and performance reasons, as of this release, the SDK encrypts logs and no longer supports printing plaintext logs via the console."
          }), _jsx(_components.p, {
            children: "Refer to the following solutions for different needs:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "If you need to know the API call status, check the API logs and print the SDK callback logs yourself."
            }), `
`, _jsx(_components.li, {
              children: "For any other special requirements, contact technical support and provide the corresponding encrypted logs."
            }), `
`]
          }), _jsx(_components.h3, {
            id: "new-features-3",
            children: "New features"
          }), _jsx(_components.h4, {
            id: "maven-integration-method",
            children: "Maven integration method"
          }), _jsxs(_components.p, {
            children: ["This release supports integrating the SDK through Maven. After creating a Maven project, open the ", _jsx(_components.code, {
              children: "pom.xml"
            }), " file and replace its contents with the following:"]
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
                    children: "<?"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "xml"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"1.0"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " encoding"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"UTF-8"'
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "?>"
                  })]
                }), `
`, _jsxs(_components.span, {
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
                    children: "project"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: " xmlns"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"http://maven.apache.org/POM/4.0.0"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    xmlns:xsi"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"http://www.w3.org/2001/XMLSchema-instance"'
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "    xsi:schemaLocation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"'
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "modelVersion"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">4.0.0</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "modelVersion"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">org.example</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">agora-rtc-linux-java</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.0-SNAPSHOT</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependencies"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependency"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">io.agora.rtc</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">linux-java-sdk</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">4.4.30</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
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
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependency"
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
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "dependencies"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "properties"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.source"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.8</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.source"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.target"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">1.8</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "maven.compiler.target"
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
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "properties"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">"
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
                    children: "<"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "build"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugins"
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
                    children: "    <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugin"
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
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">org.apache.maven.plugins</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "groupId"
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
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">maven-shade-plugin</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "artifactId"
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
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">2.3</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "version"
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
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
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
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "createDependencyReducedPom"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">true</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "createDependencyReducedPom"
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
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
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
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "executions"
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
                    children: "        <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "execution"
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
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "phase"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">package</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "phase"
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
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goals"
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
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goal"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">shade</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goal"
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
                    children: "            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "goals"
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
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
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
                    children: "            <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformers"
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
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformer"
                  })]
                }), `
`, _jsxs(_components.span, {
                  className: "line",
                  children: [_jsx(_components.span, {
                    style: {
                      "--shiki-light": "#6F42C1",
                      "--shiki-dark": "#B392F0"
                    },
                    children: "                    implementation"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: "="
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#032F62",
                      "--shiki-dark": "#9ECBFF"
                    },
                    children: '"org.apache.maven.plugins.shade.resource.ManifestResourceTransformer"'
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
                    children: "                <"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "mainClass"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#24292E",
                      "--shiki-dark": "#E1E4E8"
                    },
                    children: ">App</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "mainClass"
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
                    children: "                </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformer"
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
                    children: "            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "transformers"
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
                    children: "            </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "configuration"
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
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "execution"
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
                    children: "        </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "executions"
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
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugin"
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
                    children: "    </"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "plugins"
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
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "build"
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
                    children: "</"
                  }), _jsx(_components.span, {
                    style: {
                      "--shiki-light": "#22863A",
                      "--shiki-dark": "#85E89D"
                    },
                    children: "project"
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
          }), _jsx(_components.h4, {
            id: "audio-send-buffer-settings-1",
            children: "Audio send buffer settings"
          }), _jsxs(_components.p, {
            children: ["In use-cases such as AI interaction, the frequency of sending audio frames may be uneven. If the SDK sends to the Agora server according to the actual sending frequency, the receiver may experience issues such as stuttering or frame loss. To optimize audio transmission performance, this release adds methods to set the audio send buffer in the ", _jsx(_components.code, {
              children: "AgoraLocalAudioTrack"
            }), " class:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "setMaxBufferedAudioFrameNumber"
              }), ": Sets the maximum capacity of the audio send buffer."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "clearSenderBuffer"
              }), ": Clears the current audio send buffer, applicable to interrupt audio in human-machine dialogue use-cases."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "setSendDelayMs"
              }), ": Sets the minimum data duration allowed to be sent by the audio send buffer, applicable to precise control of audio transmission delay."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "audio-labels-1",
            children: "Audio labels"
          }), _jsxs(_components.p, {
            children: ["This release introduces the audio labeling capability (", _jsx(_components.code, {
              children: "AudioLabel"
            }), "). By adding audio labels, you can intuitively obtain audio information such as user audio energy, fundamental frequency, and voice type, making it convenient for post-processing. Contact technical support to enable and use this feature."]
          }), _jsx(_components.h4, {
            id: "22050-hz-audio-send-sample-rate-1",
            children: "22050 Hz audio send sample rate"
          }), _jsxs(_components.p, {
            children: ["This release supports a 22050 Hz audio send sample rate, and you can set the sample rate when calling the ", _jsx(_components.code, {
              children: "AgoraAudioPcmDataSender.send"
            }), " method to send raw audio data."]
          }), _jsx(_components.h4, {
            id: "sdk-global-custom-parameters-1",
            children: "SDK global custom parameters"
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "getAgoraParameter"
            }), " method in the ", _jsx(_components.code, {
              children: "AgoraService"
            }), " class. The difference between this method and the ", _jsx(_components.code, {
              children: "getAgoraParameter"
            }), " method in the ", _jsx(_components.code, {
              children: "AgoraRtcConn"
            }), " class is as follows:"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "AgoraService.getAgoraParameter"
              }), " is effective globally for the SDK."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "AgoraRtcConn.getAgoraParameter"
              }), " is only effective for the current connection."]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "improvements-5",
            children: "Improvements"
          }), _jsx(_components.p, {
            children: "This release includes the following improvements:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Reduces CPU consumption in multi-channel use-cases."
            }), `
`, _jsxs(_components.li, {
              children: ["Optimizes memory management mechanism for audio frame callbacks ", _jsx(_components.code, {
                children: "onPlaybackAudioFrameBeforeMixing"
              }), ", ", _jsx(_components.code, {
                children: "onRecordAudioFrame"
              }), ", ", _jsx(_components.code, {
                children: "onPlaybackAudioFrame"
              }), ", and ", _jsx(_components.code, {
                children: "onMixedAudioFrame"
              }), ", improving the efficiency and stability of ", _jsx(_components.code, {
                children: "AudioFrame"
              }), " processing."]
            }), `
`]
          }), _jsx(_components.h3, {
            id: "fixed-issues-2",
            children: "Fixed issues"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Issues caused by a null ", _jsx(_components.code, {
                children: "channelId"
              }), " pointer in the ", _jsx(_components.code, {
                children: "onPlaybackAudioFrameBeforeMixing"
              }), " callback."]
            }), `
`, _jsxs(_components.li, {
              children: ["Occasional crashes in the ", _jsx(_components.code, {
                children: "onRemoteAudioTrackStatistics"
              }), ", ", _jsx(_components.code, {
                children: "onUserAudioTrackSubscribed"
              }), ", ", _jsx(_components.code, {
                children: "onUserAudioTrackStateChanged"
              }), ", ", _jsx(_components.code, {
                children: "onUserVideoTrackSubscribed"
              }), ", ", _jsx(_components.code, {
                children: "onUserVideoTrackStateChanged"
              }), ", or ", _jsx(_components.code, {
                children: "onRemoteVideoTrackStatistics"
              }), " callbacks."]
            }), `
`]
          })]
        })]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "python",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "python"
      }), _jsx(_components.p, {
        children: "This document tracks important changes and improvements to the Server Gateway."
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v2.2.4",
          id: "v224",
          headingLevel: 2,
          value: "v224",
          children: [_jsx(_components.p, {
            children: "Released on June 6, 2025."
          }), _jsx(_components.h3, {
            id: "new-features-4",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds the following new features:"
          }), _jsx(_components.h4, {
            id: "audio-metadata-support-1",
            children: "Audio metadata support"
          }), _jsxs(_components.p, {
            children: ["This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the ", _jsx(_components.code, {
              children: "send_audio_metadata"
            }), " method to transmit metadata. Remote users receive this information through the ", _jsx(_components.code, {
              children: "on_audio_metadata_received"
            }), " callback."]
          }), _jsx(_components.h4, {
            id: "enhanced-external-video-source-support",
            children: "Enhanced external video source support"
          }), _jsxs(_components.p, {
            children: ["This version adds the following fields to ", _jsx(_components.code, {
              children: "ExternalVideoFrame"
            }), ":"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "fill_alpha_buffer"
              }), " and ", _jsx(_components.code, {
                children: "alpha_buffer"
              }), " to support Alpha data channel."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "color_space"
              }), " to support custom color space for externally captured video data."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "secure-data-transmission",
            children: "Secure data transmission"
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "enable_encryption"
            }), " method to support encryption when sending and receiving data streams. If you encounter problems during encryption and decryption that lead to failure, they are notified through the ", _jsx(_components.code, {
              children: "on_encryption_error"
            }), " callback."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.1.0",
          id: "v210",
          headingLevel: 2,
          value: "v210",
          children: [_jsx(_components.p, {
            children: "Released on December 11, 2024."
          }), _jsx(_components.p, {
            children: "This is the first version of the Server Gateway for Python."
          }), _jsx(_components.h3, {
            id: "new-features-5",
            children: "New features"
          }), _jsx(_components.h4, {
            id: "media-streams-transmission",
            children: "Media streams transmission"
          }), _jsx(_components.p, {
            children: "Server Gateway supports various audio and video encoding formats, such as H.264, H.265, VP8 for video, and OPUS, G722, and PCMA for audio. You can send and receive multiple types of audio and video data without being restricted by audio and video devices."
          }), _jsx(_components.h4, {
            id: "data-streams-transmission",
            children: "Data streams transmission"
          }), _jsx(_components.p, {
            children: "Server Gateway supports sending and receiving data stream messages, applicable to use-cases requiring message transmission. For example, a chat application can use this feature to implement instant messaging between users."
          }), _jsx(_components.h4, {
            id: "multiple-channels",
            children: "Multiple channels"
          }), _jsx(_components.p, {
            children: "Server Gateway supports sending or receiving media streams in multiple channels simultaneously, applicable to use-cases requiring multiple channel management. For example, an online education platform can conduct live classes for multiple classes simultaneously, ensuring that the audio and video data for each class does not interfere with one another."
          }), _jsx(_components.h4, {
            id: "subscribing-to-specific-users",
            children: "Subscribing to specific users"
          }), _jsx(_components.p, {
            children: "You can selectively subscribe to specific users' media streams using their user IDs. For example, in a large conference, attendees can subscribe only to the speaker's media stream, saving bandwidth and improving efficiency."
          }), _jsx(_components.h4, {
            id: "audio-mixing",
            children: "Audio mixing"
          }), _jsx(_components.p, {
            children: "Server Gateway supports mixing multiple audio streams, applicable to use-cases where multiple users or devices are sending streams simultaneously. For example, an online concert can mix audio streams from guitar, drums, and vocals into a high-quality audio stream for the audience."
          }), _jsx(_components.h4, {
            id: "cloud-proxy",
            children: "Cloud proxy"
          }), _jsx(_components.p, {
            children: "Server Gateway allows access to Agora services within an intranet by whitelisting specific IPs and ports on the firewall. It is applicable to large enterprises, hospitals, universities, banks, and other institutions with high security requirements, ensuring a secure and stable connection."
          })]
        })]
      }), _jsx(_PlatformProcessedMarker, {
        close: "true"
      })]
    }), _jsxs(_PlatformPanel, {
      platform: "go",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "go"
      }), _jsx(_components.p, {
        children: "This document tracks important changes and improvements to the Server Gateway."
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v2.2.4",
          id: "v224-1",
          headingLevel: 2,
          value: "v224-1",
          children: [_jsx(_components.p, {
            children: "Released on June 6, 2025."
          }), _jsx(_components.h3, {
            id: "new-features-6",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds the following new features:"
          }), _jsx(_components.h4, {
            id: "audio-metadata-support-2",
            children: "Audio metadata support"
          }), _jsxs(_components.p, {
            children: ["This version adds the ability to send and receive audio metadata. In use-cases where you need to send auxiliary audio information, such as playback progress, call the ", _jsx(_components.code, {
              children: "SendAudioMetadata"
            }), " method. Remote users receive the information through the ", _jsx(_components.code, {
              children: "OnAudioMetadataReceived"
            }), " callback."]
          }), _jsx(_components.h4, {
            id: "enhanced-external-video-capabilities",
            children: "Enhanced external video capabilities"
          }), _jsxs(_components.p, {
            children: ["This version adds the following fields to ", _jsx(_components.code, {
              children: "ExternalVideoFrame"
            }), ":"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "FillAlphaBuffer"
              }), " and ", _jsx(_components.code, {
                children: "AlphaMode"
              }), " to support Alpha data channel."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "ColorSpace"
              }), " to support custom color space for externally captured video data."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "secure-data-transmission-1",
            children: "Secure data transmission"
          }), _jsxs(_components.p, {
            children: ["This version adds the ", _jsx(_components.code, {
              children: "EnableEncryption"
            }), " method to support encryption when sending and receiving data streams. If you encounter problems during encryption and decryption that lead to failure, they are notified through the ", _jsx(_components.code, {
              children: "OnEncryptionError"
            }), " callback."]
          })]
        }), _jsxs(Accordion, {
          title: "v2.1.0",
          id: "v210-1",
          headingLevel: 2,
          value: "v210-1",
          children: [_jsx(_components.p, {
            children: "Released on December 11, 2024."
          }), _jsx(_components.p, {
            children: "This is the first version of the Server Gateway for Go."
          }), _jsx(_components.h3, {
            id: "new-features-7",
            children: "New features"
          }), _jsx(_components.p, {
            children: "This release adds the following new features:"
          }), _jsx(_components.h4, {
            id: "media-streams-transmission-1",
            children: "Media streams transmission"
          }), _jsx(_components.p, {
            children: "Server Gateway supports various audio and video encoding formats, such as H.264, H.265, VP8 for video, and OPUS, G722, and PCMA for audio. You can send and receive multiple types of audio and video data without being restricted by audio and video devices."
          }), _jsx(_components.h4, {
            id: "data-streams-transmission-1",
            children: "Data streams transmission"
          }), _jsx(_components.p, {
            children: "Server Gateway supports sending and receiving data stream messages, applicable to use-cases requiring message transmission. For example, a chat application can use this feature to implement instant messaging between users."
          }), _jsx(_components.h4, {
            id: "multiple-channels-1",
            children: "Multiple channels"
          }), _jsx(_components.p, {
            children: "Server Gateway supports sending or receiving media streams in multiple channels simultaneously, applicable to use-cases requiring multiple channel management. For example, an online education platform can conduct live classes for multiple classes simultaneously, ensuring that the audio and video data for each class does not interfere with one another."
          }), _jsx(_components.h4, {
            id: "subscribing-to-specific-users-1",
            children: "Subscribing to specific users"
          }), _jsx(_components.p, {
            children: "You can selectively subscribe to specific users' media streams using their user IDs. For example, in a large conference, attendees can subscribe only to the speaker's media stream, saving bandwidth and improving efficiency."
          }), _jsx(_components.h4, {
            id: "audio-mixing-1",
            children: "Audio mixing"
          }), _jsx(_components.p, {
            children: "Server Gateway supports mixing multiple audio streams, applicable to use-cases where multiple users or devices are sending streams simultaneously. For example, an online concert can mix audio streams from guitar, drums, and vocals into a high-quality audio stream for the audience."
          }), _jsx(_components.h4, {
            id: "cloud-proxy-1",
            children: "Cloud proxy"
          }), _jsx(_components.p, {
            children: "Server Gateway allows access to Agora services within an intranet by whitelisting specific IPs and ports on the firewall. It is applicable to large enterprises, hospitals, universities, banks, and other institutions with high security requirements, ensuring a secure and stable connection."
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
