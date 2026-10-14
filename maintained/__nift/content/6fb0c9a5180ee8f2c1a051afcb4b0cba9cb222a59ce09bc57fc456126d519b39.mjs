import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "The release notes for On-Premise Recording."
};
export let _markdown = `

<_PlatformTabsGroup groupMode="structured" canonicalPlatform="linux-cpp" platforms="[&#x22;linux-cpp&#x22;,&#x22;linux-java&#x22;]" showTabs="true">
  <_PlatformPanel platform="linux-cpp">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-cpp" />

    The On-Premise Recording SDK provides recording functionality for the Agora Realtime Communication SDK. For more information see [Product overview](/en/realtime-media/on-premise-recording/product-overview).

    ## v4.x [#v4x]

    With the 4.x release, the On Premise Recording SDK version 3.x and earlier have entered the retirement phase. For detailed retirement schedule and migration plan, refer to [Service Sunset Plans](/en/realtime-media/on-premise-recording/reference/sunset).

    <Accordions type="multiple">
      <Accordion title="v4.4.151" id="v44151" headingLevel="3" value="v44151">
        Released on September 30, 2025.

        #### New Features [#new-features]

        ##### Video frame screenshots [#video-frame-screenshots]

        This release adds the video frame screenshot feature. After initialization, call \`enableRecorderVideoFrameCapture\` to enable and configure video frame screenshots. You can then get the captured video data in callbacks of \`IRecorderVideoFrameObserver\`.

        For implementation details, see [Local screenshots](/en/realtime-media/on-premise-recording/build/customize-the-recording/local-screenshot).

        ##### Single-stream recording without transcoding [#single-stream-recording-without-transcoding]

        This release adds the \`recordEncodedOnly\` parameter to \`IAgoraMediaRtcRecorder::initialize\`, enabling single-stream recording without transcoding. After you enable this parameter, the server writes remote H.264 or H.265 video data directly to MP4 files.

        This parameter is mainly for high-concurrency recording scenarios. Use it with \`VideoSubscriptionOptions.encodedFrameOnly\` set to \`true\` to maximize concurrency.

        <CalloutContainer type="warning">
          <CalloutDescription>
            When single-stream recording without transcoding is enabled, watermarking and composite recording are unavailable.
          </CalloutDescription>
        </CalloutContainer>
      </Accordion>

      <Accordion title="v4.4.150" id="v44150" headingLevel="3" value="v44150">
        Released on June 30, 2025.

        This is the first release of the On-Premise Recording 4.x SDK. It includes the following features:

        * Record real-time audio and video.
        * Record audio and video content from all participants in a single channel.
        * Record audio and video content from all participants in multiple channels simultaneously.
        * Record audio-only content from all participants in one or more channels simultaneously.
        * Support recording of encrypted channels using the built-in encryption of the Agora SDK.

        <CalloutContainer type="info">
          <CalloutDescription>
            With this release, On-Premise Recording SDK v3.x and earlier enters the retirement phase. For the detailed retirement schedule and migration plan, refer to [Service Sunset Plans](/en/realtime-media/on-premise-recording/reference/sunset).
          </CalloutDescription>
        </CalloutContainer>
      </Accordion>
    </Accordions>

    ## v3.x [#v3x]

    ### Known issues [#known-issues]

    * When you record using an Android client, the image is turned upside down when you switch from a front-facing camera to a rear one.
    * If the user calls the \`leaveChannel\` method in the channel to stop recording, the recording file ends with a period of silence determined by the \`idleLimitSec\` field set for the configuration when calling the \`joinChannel\` method.
    * The recorded voice or video files are not encrypted. To be compliant with HIPAA, encrypt the disk with a disk encryption tool, such as cryptsetup.

    <Accordions type="multiple">
      <Accordion title="v3.0.6" id="v306" headingLevel="3" value="v306">
        v3.0.6 was released on May 18, 2021.

        #### New feature [#new-feature]

        **AES-GCM encryption**

        For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in \`decryptionMode\`:

        * \`"aes-128-gcm"\`: 128-bit AES encryption, GCM mode.
        * \`"aes-256-gcm"\`: 256-bit AES encryption, GCM mode.

        Once you enable the built-in encryption, all users in the same channel must use the same encryption mode and key.

        **MP3 format in composite recording mode**

        v3.0.6 adds \`Audio_Only_Record\` and \`Secondary_Recorder\` in \`cfgFilePath\` to get a MP3 file after a composite recording. See [Record a Call](/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode) and [cfgFilePath](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/structagora_1_1recording_1_1_recording_config.html#afd78b4f136e4deeaf310061606e7bc62) for details.

        #### Improvements [#improvements]

        * You can set the sample rate of the raw audio data in PCM format (\`getAudioFrame\` is 2 or 3) through the \`cfgFilePath\` parameter. See [Record a Call](/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode) for details.

        * Optimize the sensitivity and accuracy of \`onActiveSpeaker\` and \`onAudioVolumeIndication\` callbacks.

        * You can call [mixedVideoAudio](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/structagora_1_1recording_1_1_recording_config.html#a9912a5fc16b3f0737290c618846d76a7) to get a MP4 file after a composite recording or an individual recording without transcoding.

          | Earlier than v3.0.6                                                                                                                                        | v3.0.6 or later                                                         |
          | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
          | Generates video files in TS format during the recording. When the recording ends, you can use the transcoding script to convert the TS file to MP4 format. | Generates video files in TS format and MP4 format during the recording. |

        #### API changes [#api-changes]

        Adds enumerators for \`MIXED_AV_CODEC_TYPE\`：
        \`AV_CODEC_INDIVIDUAL_TS_ONLY\`: Generates video files in TS format, and audio files in AAC format in the individual recording mode.
        \`AV_CODEC_INDIVIDUAL_TS_AND_MP4\`: Generates video files in TS format and MP4 format, and audio files in AAC format in the individual recording mode.
        \`AV_CODEC_MIXED_TS_ONLY\`: Mixes the audio and video in real time into an TS file in the composite recording mode.
        \`AV_CODEC_MIXED_TS_AND_MP4\`: Mixes the audio and video in real time into an TS file and an MP4 file in the composite recording mode.

        #### Issues fixed [#issues-fixed]

        Fix the issue that the transcoding script does not support UIDs with underscores, resulting in parsing errors.
      </Accordion>

      <Accordion title="v3.0.5" id="v305" headingLevel="3" value="v305">
        v3.0.5 was released on January 13, 2021.

        #### New feature [#new-feature-1]

        This release adds \`VIDEO_JPG_FILE\` in \`VIDEO_FRAME_TYPE\` to get video data in JPG file format.

        #### Improvements [#improvements-1]

        * To enable faster playback of the MP4 file generated from the recording, this release moves the moov atom to the start of the MP4 file, which allows for playback of the file during buffering.
        * This release removes the restriction that you cannot get the raw audio data and raw video data at the same time from an individual recording session.

        #### Issues fixed [#issues-fixed-1]

        This release fixed the following issues:

        * The captured screenshots in JPG format had rotation information missing when the video decoding format was set as \`VIDEO_FORMAT_JPG_VIDEO_FILE_TYPE\`.
        * Crashes when calling the \`leaveChannel\` method to leave a channel.
      </Accordion>

      <Accordion title="v3.0.4" id="v304" headingLevel="3" value="v304">
        v3.0.4 was released on November 25, 2020.

        #### New feature [#new-feature-2]

        v3.0.4 adds \`Chunk_Time_Span\` in \`cfgFilePath\`  to set time interval between two successive recorded files in individual recording mode of a live interactive streaming channel.

        #### Issues fixed [#issues-fixed-2]

        * When a host repeatedly joins and leaves a channel, the physical memory consumption of the recording server increased significantly.
        * Calling \`OnActiveSpeaker\` cannot get the corresponding callback.
        * Calling \`OnAudioVolumeIndication\` cannot get the corresponding callback.
        * Calling the Java API \`setUserBackground\` caused the recording service to crash.
        * Failure to merge videos shorter than 0.02 s by using the transcoding script after the recording finishes.
        * In composite recording mode, failure to output stereo audio by setting \`audioProfile\` as \`2\`.
      </Accordion>

      <Accordion title="v3.0.3" id="v303" headingLevel="3" value="v303">
        v3.0.3 was released on September 17, 2020.

        #### New feature [#new-feature-3]

        **Repair of recording files after crashes**

        Before v3.0.3, the MP4 files generated after a recording might not be playable due to recording crashes. To solve this issue, as of v3.0.3, the Agora Recording SDK provides the following solutions:

        * The SDK generates video files in TS format during the recording. When the recording ends, the SDK automatically converts the TS files to MP4 format. Even if occasional crashes occur during the recording, the MP4 files can still be played.
        * The SDK adds the \`crash_restore.sh\` script. If the recording service quits abnormally after multiple crashes, you can run the script to convert the TS files to MP4 files and repair the incomplete \`uid_UID_timestamp.txt\` files.
      </Accordion>

      <Accordion title="v3.0.2" id="v302" headingLevel="3" value="v302">
        v3.0.2 was released on July 15, 2020.

        #### Issues fixed [#issues-fixed-3]

        * Timestamps occasionally overflow in \`uid_UID_timestamp.txt\`.
        * Characters are garbled and contents lost when a line of text becomes too long in a log file.
        * MP4 files generated from a composite recording session cannot be played via Windows Media Player.
      </Accordion>

      <Accordion title="v3.0.1" id="v301" headingLevel="3" value="v301">
        v3.0.1 was released on March 16, 2020.

        #### Issue fixed [#issue-fixed]

        Recorded files from an individual recording session have an incorrect timestamp in their names.
      </Accordion>

      <Accordion title="v3.0.0" id="v300" headingLevel="3" value="v300">
        v3.0.0 was released on February 20, 2020.

        #### New features [#new-features-1]

        **1. Watermarks**

        Supports adding image watermarks, text watermarks, or a timestamp watermark in composite recording mode.

        You can either configure watermark settings in the \`setVideoMixingLayout\` method, or add, update, and remove watermark settings with the \`updateWatermarkConfigs\` method. See [Watermark](/en/realtime-media/on-premise-recording/build/customize-the-recording/watermark) for details.

        **2. Selective recording**

        Supports recording the audio or video of specified users.

        To enable selective recording when calling \`joinChannel\`:

        1. Set \`autoSubscribe\` as false in \`RecordingConfig\`.
        2. Set the \`subscribeVideoUids\` or \`subscribeAudioUids\` parameter in \`RecordingConfig \`to specify the users to record.

        Afterwards, you can call \`updateSuscribeVideoUids\` or \`updateSuscribeAudioUids\` methods to update the list of uids to record.

        **3. Last frame**

        Retains the last video frame from when the user leaves the channel in composite recording mode.

        You can set the \`keepLastFrame\` parameter when calling the \`setVideoMixingLayout\` method to enable this feature.

        **4. Cloud proxy**

        Supports the cloud proxy service. See [Use Cloud Proxy](/en/realtime-media/on-premise-recording/build/connect-through-a-firewall/cloud-proxy) for details.

        **5. New callbacks**

        ##### Channel events [#channel-events]

        * [onRejoinChannelSuccess](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a210d1e225415eba95c8fa606ae0996ea) Occurs when the recording server rejoins a channel.
        * [onConnectionStateChanged](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a08d04dd3d5f82ca0ab9cdadff20367b0) Occurs when the network connection state changes.

        ##### Statistics events [#statistics-events]

        * [onRemoteVideoStats](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a427c17ccc456444159c977aeec04a895) Reports the statistics of the video stream from each remote user/host.
        * [onRemoteAudioStats](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a151091f21f514baf78b005031b382f8b) Reports the statistics of the audio stream from each remote user/host.
        * [onRecordingStats](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a870ab8a3d043f6c3910aa89121e83f33) Reports the statistics of the recording session.

        ##### Media events [#media-events]

        * [onRemoteAudioStreamStateChanged](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a6ba41d8f2ba7ccb06695ed6ef6037159) Occurs when the state of a remote audio stream changes.
        * [onRemoteVideoStreamStateChanged](https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a98fe264a24974fb7b6ae46d2ddce3661) Occurs when the state of a remote video stream changes.

        #### Improvement [#improvement]

        * As of v3.0.0, you can disable the keyframe request by setting the \`enableIntraRequest\` parameter in RecordingConfig. After this setting:
          * All senders in the channel send the keyframe at an interval of 2 seconds.
          * You can play the video file recorded in individual recording mode from a specified position without the need to transcode.
        * As of v3.0.0, setting the recording file path in the custom configuration file is no longer mandatory. If you have specified a custom configuration file by setting \`cfgFilePath\`, you do not have to set \`Recording_Dir\` in the configuration file.

        #### Issues fixed [#issues-fixed-4]

        * In composite recording mode, the layout of the recorded video occasionally has an extra user region.
        * The playback speed of the recorded video is occasionally too fast.
        * The recording service creates too many Syslogs.
        * Setting the \`alpha\` parameter in the method call of \`setVideoMixingLayout\` causes the recording service to crash.
        * The recording service cannot record the specified uids if you set the server to record audio only, or to record video only.
        * The information reported by the \`onRemoteAudioStreamStateChanged\` and \`onRemoteVideoStreamStateChanged\` callbacks is inaccurate under poor network conditions.
        * The recorded audio is occasionally extended.
        * A black frame appears at the beginning of a video in composite recording mode.
      </Accordion>
    </Accordions>

    ## v2.x [#v2x]

    <CalloutContainer type="info">
      <CalloutDescription>
        The Agora On-Premise Recording SDK supports both Java and C++ from v2.2.0.
      </CalloutDescription>
    </CalloutContainer>

    <Accordions type="multiple">
      <Accordion title="v2.3.4" id="v234" headingLevel="3" value="v234">
        <CalloutContainer type="info">
          <CalloutDescription>
            As of December 8, 2021, Agora begins implementing the retirement process for the On-Premise Recording SDK earlier than v3.0.0. See [Service Sunset Plans for On-Premise Recording](/en/realtime-media/on-premise-recording/reference/sunset).
          </CalloutDescription>
        </CalloutContainer>

        v2.3.4 was released on August 5, 2019.

        #### Improvements [#improvements-2]

        * The following private Java API methods are now public:
          * The \`setUserBackground\` method which sets the background image of a specified user. When the user is online but does not send any video stream, the background image is displayed.
          * The \`setLogLevel\` method which sets the logging level. The SDK generates logs in the selected level and in the levels preceding the selected level.
        * Improves the robustness of Java API methods.
        * Enhances the SDK's ability to collect the information of abnormal crashes.

        #### Issues fixed [#issues-fixed-5]

        * File splitting in composite recording mode caused by switching channel profiles.
        * Failure to only record audio in composite recording mode in the Live Broadcast profile.
        * Libyuv crashes.
        * Crashes when calling the \`leaveChannel\` method to leave a channel.
      </Accordion>

      <Accordion title="v2.3.3" id="v233" headingLevel="3" value="v233">
        v2.3.3 was released on April 1, 2019.

        **New features**

        #### 1. Supports monitoring the network connection status [#1-supports-monitoring-the-network-connection-status]

        v2.3.3 adds the following callbacks to inform the app of the connection status between the recording SDK and Agora's edge server:

        * \`onConnectionLost\`: Informs that the SDK loses connection to the server.
        * \`onConnectionInterrupted\`: Informs that the connection between the SDK and the server is interrupted.

        #### 2. Informs the app of receiving the first frame [#2-informs-the-app-of-receiving-the-first-frame]

        v2.3.3 adds the following callbacks to inform the app of receiving the first remote audio or video frame:

        * \`onFirstRemoteAudioFrame\`: Informs that the first remote audio frame is received.
        * \`onFirstRemoteVideoDecoded\`: Informs that the first remote video frame is decoded.

        #### 3. Supports monitoring status changes of the receiving stream [#3-supports-monitoring-status-changes-of-the-receiving-stream]

        v2.3.3 adds the \`onReceivingStreamStatusChanged\` callback to get status changes of the receiving audio or video stream.

        #### 4. Supports the volume indication [#4-supports-the-volume-indication]

        v2.3.3 adds the \`onAudioVolumeIndication\` callback to get the list of users who are speaking and their volumes.

        **Issues fixed**

        * Fails to run the transcoding script when the recording SDK exits the channel and then enters the channel again in manual mode.
        * Occasional crashes when using invalid parameters in the \`mixedVideoAudio\` method.
        * Freezes in HD video recordings.
        * Setting the recording video frame rate does not take effect.
        * Occasional crashes when compiling the recording Java sample code in Manual Mode.
        * Fails to run the transcoding command \`-f . -m 3\`.
      </Accordion>

      <Accordion title="v2.3.0" id="v230" headingLevel="3" value="v230">
        v2.3.0 was released on January 14, 2019.

        > The calculation of the usage of the On-Premise Recording SDK v2.3.0 or later is separated from that of the Agora Voice Call/Interactive Audio Streaming SDK and the Agora Video Call/Interactive Video Streaming SDK. Contact [support@agora.io](mailto\\:support@agora.io) for details.

        **New features**

        #### 1. Supports Stereo Audio in Composite Recording Mode [#1-supports-stereo-audio-in-composite-recording-mode]

        v2.3.0 supports high audio quality (a sample rate of 48 kHz, stereo, and a bitrate of up to 192 Kbps) in Composite Recording Mode.

        > Stereo is not applicable to raw data.

        \`audio profile\` can be set as \`0\` or \`1\`:

        * Individual recording (file mode):
          * By default or set \`audio profile=0\`: A sample rate of 48 kHz, the same number of audio channels as the original audio, and an adaptive bitrate.
        * Individual recording (raw data):
          * The sample rate is fixed at 48 kHz and the number of audio channels is the same as the original audio:
            * PCM: The bitrate may change.
            * AAC: The bitrate is the same as in the file mode.
        * Composite recording (file mode):
          * \`audio profile=0\`: A sample rate of 48 kHz, mono, and a bitrate of 48 Kbps
          * \`audio profile=1\`: A sample rate of 48 kHz, mono, and a bitrate of 128 Kbps
          * \`audio profile=2\`: A sample rate of 48 kHz, stereo, and a bitrate of 192 Kbps
        * Composite recording (raw data):
          * A fixed sample rate of 48 kHz and mono.

        #### 2. Supports Web Video Players [#2-supports-web-video-players]

        Video files transcoded in real time or transcoded by the transcoding script can be played by web browsers on Android, iOS/macOS, and Windows. The following is a list of compatible web browsers on each platform.

        | Platform  | Chrome     | Safari     |
        | --------- | ---------- | ---------- |
        | Android   | Chrome 49+ | N/A        |
        | iOS       | ✘          | Safari 9+  |
        | macOS 10+ | Chrome 47+ | Safari 11+ |
        | Windows   | Chrome 49+ | N/A        |

        #### 3. Supports Custom Background Images in Composite Recording Mode [#3-supports-custom-background-images-in-composite-recording-mode]

        v2.3.0 adds the function for users to add a background image while recording audio in Composite Recording Mode. A custom image is used for any user who does not have video while recording video in Composite Recording Mode.

        > This function is not applicable to raw data and screenshots.

        #### 4. Adds Two Pre-defined Layout Templates to the Sample Code [#4-adds-two-pre-defined-layout-templates-to-the-sample-code]

        v2.3.0 provides two pre-defined layout templates for composite recording to make the On-Premise Recording SDK sample code easier to use.

        ##### Best Fit (bestFit) [#best-fit-bestfit]

        v2.3.0 adds \`bestFit\` as the default layout supporting up to 17 video streams.

        This layout automatically scales according to the number of video streams. The number of columns and rows varies depending on the number of video streams. For example:

        ![](https://web-cdn.agora.io/docs-files/1542680053900)

        ###### Vertical Presentation（verticalPresentation） [#vertical-presentationverticalpresentation]

        v2.3.0 adds the function to display a specified user's video in a large window on the left of the screen, while displaying the other users' videos in small windows arranged vertically on the right. At most, two columns with eight video windows in each column are supported.

        For example:

        ![](https://web-cdn.agora.io/docs-files/1542680070362)

        #### 5. Screenshots in Composite Recording Mode [#5-screenshots-in-composite-recording-mode]

        v2.3.0 adds the function to capture the screen of every user while recording video in Composite Recording Mode. Recording and screen capturing use the same video stream.

        #### 6. Speaker Detection [#6-speaker-detection]

        v2.3.0 adds the \`onActiveSpeaker\` callback to return the UID of the active speaker in the channel.

        This function is disabled by default and can be enabled by setting the \`audioIndicationInterval\` parameter in \`RecordingConfig\`. The On-Premise Recording SDK returns the \`onActiveSpeaker\` callback at set intervals.

        **Improvements**

        * Improves audio and video synchronization in Individual Recording Mode.
        * Supports automatic rotation of recorded video streams that are not transcoded in real time in Individual Recording Mode.
        * Changed the idle behavior in Manual Mode:
          * For versions earlier than v2.3.0 in Manual Mode, the idle mechanism takes effect immediately after joining a channel, which might cause the recording SDK to exit the channel.
          * For v2.3.0 or later, the idle mechanism does not take effect until the \`startService\` method is called.
        * Optimizes the log levels and split some logs in INFO into NOTICE, WARN, and ERROR.
        * Optimizes the naming of the recording directory to ensure the uniqueness of each folder.
      </Accordion>

      <Accordion title="v2.2.3" id="v223" headingLevel="3" value="v223">
        v2.2.3 was released on October 18, 2018.

        **Issues fixed**

        * Coredump loss caused by .backtrace.
        * System crashes caused by Java jni. and optimize stability.
        * Transcoding script issues in Manual Mode.
        * The recording video file splits into two files after a web client joins the channel.
        * Occasional system crashes caused by the subthread being active after the main thread is released.
      </Accordion>

      <Accordion title="v2.2.2" id="v222" headingLevel="3" value="v222">
        v2.2.2 was released on August 1, 2018.

        **Improvements**

        * The screenshots are named \`uidYmdHMSms.jpg\` instead of \`uidYmdHMS.jpg\`.
        * The transcoding script supports autorotation.
        * The structure of the Java folder is modified.

        **Issues fixed**

        * Abnormal webm recording times.
        * Memory leaks.
        * Multi-party intercommunication issues.
        * H.264 parser issues.
        * Audio and video out of sync.
      </Accordion>

      <Accordion title="v2.2.1" id="v221" headingLevel="3" value="v221">
        v2.2.1 was released on June 5, 2018.

        **Improvements**

        * Improves the performance of the Communication profile. The number of recording channels that a system supports with the same performance increases by 150%.
        * Improves the efficiency to find the port. The time to find the port is no longer part of the idle time.

        **Issues fixed**

        Port conflicts when the search for the port takes too long and exceeds the idle time. As a result, the port is not connected.
      </Accordion>

      <Accordion title="v2.2.0" id="v220" headingLevel="3" value="v220">
        v2.2.0 was released on May 4, 2018.

        **New features**

        > Support for both Java and C++.

        **Issues fixed**

        * Issues of oversized logs.
        * Abnormal issues when recording fast-forward videos.
        * Intermittent failures.
        * Performance issues.
        * Some crash issues.
      </Accordion>

      <Accordion title="v2.1.0" id="v210" headingLevel="3" value="v210">
        v2.1.0 was released on March 7, 2018.

        **New features**

        | Function           | Description                                                                                                                                                                                                                                                      |
        | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | Recording Mode     | Supports selecting auto or manual mode when joining a channel to flexibly control the recording.                                                                                                                                                                 |
        | Control Recording  | Adds interfaces to unbind the operations of joining a channel and recording. If the auto recording mode is used, the recording starts when a user joins the channel. If the manual recording mode is used, you can control when to start and stop the recording. |
        | Mix Raw Audio      | Supports the function of mixing raw audio data.                                                                                                                                                                                                                  |
        | Java Recording API | Supports Java APIs for recording.                                                                                                                                                                                                                                |

        **Improvements**

        | Improvement        | Description                                                                                                     |
        | ------------------ | --------------------------------------------------------------------------------------------------------------- |
        | Transcoding Script | Supports setting the transcoding frame rate and resolution, either in picture-in-picture or single-stream mode. |

        **Issues fixed**

        * Occasional recording file transcoding failures.
        * The video screen occasionally turns upside down.
        * Occasional abnormal audio during recording.
      </Accordion>

      <Accordion title="v2.0.0" id="v200" headingLevel="3" value="v200">
        v2.0 was released on November 21, 2017.

        * Optimizes the raw data to support various formats:
          * Modifies the \`decodeAudio\` and \`decodeVideo\` parameters, and adds the \`VideoJpgFrame\` struct.
          * Modifies the \`getAudioFrame\` and \`getVideoFrame\` parameters.
        * Adds the \`captureInterval\` parameter to set the time interval of capturing screenshots.
        * Adds the \`streamType\` parameter to support different video stream types.
        * Adds the \`isVideoOnly\` parameter.
        * The transcoding scripts, once used, generate a convert.log file under the same path as the voice/video file.
        * Adds the video rotating information in \`UID_HHMMSSMS.txt\`.
      </Accordion>
    </Accordions>

    ## v1.x [#v1x]

    <Accordions type="multiple">
      <Accordion title="v1.3.0" id="v130" headingLevel="3" value="v130">
        v1.3 was released on October 20, 2017.

        **New features**:

        * Adds mixing the audio and video recording functions by adding the \`mixedVideoAudio\` and \`cfgFilePath\` parameters in the \`joinChannel\` method.
        * Adds the function of merging the audio and video file of the same uid as one, see [Play the Recording Files](/en/realtime-media/cloud-recording/build/process-recorded-files/online-play).
        * Adds the \`getProperties\` method to get the recording path immediately after recording is started before joining any channel.
        * Modifies the \`onError\` and \`onLeaveChannel\` callbacks.
      </Accordion>

      <Accordion title="v1.2.0" id="v120" headingLevel="3" value="v120">
        v1.2 was released on August 21, 2017.

        **New features**:

        * Supports getting the audio and video raw data.
        * Supports detecting sexually explicit content.
        * Provides a \`recordingsys.log\` log file to check for failures.
        * Supports the recording channel timestamp, that is, the first user who starts recording in the channel.
      </Accordion>

      <Accordion title="v1.1.0" id="v110" headingLevel="3" value="v110">
        v1.1 was released on July 25, 2017.

        **New features**:

        * Adds recording at the web client.

        * Adds the real-time video mixing function.

        * Adds a set of callback functions.

        * Modifies the file format after transcoding.

        * Enables configuring the UDP port.

        * **Issues fixed**:

        * Wrong timestamps.

        * Transcoding failures.

        * Unable to playback VLC files.
      </Accordion>

      <Accordion title="v1.0.1" id="v101" headingLevel="3" value="v101">
        v1.0.1 was released on June 27, 2017, and fixes the crash when you set the channel profile of the recording as live broadcast.
      </Accordion>

      <Accordion title="v1.0.0" id="v100" headingLevel="3" value="v100">
        v1.0.0 was released on June 15, 2017.

        This is the first release of the On-Premise Recording SDK with the following functions:

        * Communication and interactive live streaming use-cases.
        * Recording the voice and video of all users in a channel.
        * Recording the voice and video of all users in multiple channels simultaneously.
        * Recording the voice of all users in a channel or in multiple channels simultaneously.
        * Recording an encrypted channel if the application has integrated the Agora built-in encryption.
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>

  <_PlatformPanel platform="linux-java">
    <_PlatformProcessedMarker groupMode="structured" canonicalPlatform="linux-cpp" platform="linux-java" />

    The On-Premise Recording SDK provides recording functionality for the Agora Realtime Communication SDK. For more information see [Product overview](/en/realtime-media/on-premise-recording/product-overview).

    ## v4.x [#v4x-1]

    With the 4.x release, the On Premise Recording SDK version 3.x and earlier have entered the retirement phase. For detailed retirement schedule and migration plan, refer to [Service Sunset Plans](/en/realtime-media/on-premise-recording/reference/sunset).

    <Accordions type="multiple">
      <Accordion title="v4.4.151" id="v44151-1" headingLevel="3" value="v44151-1">
        Released on September 30, 2025.

        #### Compatibility changes [#compatibility-changes]

        This release removes the \`AgoraMediaComponentFactory\` interface class and moves the original \`createMediaRtcRecorder\` method into the \`AgoraService\` class. If you upgrade from v4.4.150 to v4.4.151, update your integration logic accordingly.

        #### New Features [#new-features-2]

        ##### Video frame screenshots [#video-frame-screenshots-1]

        This release adds the video frame screenshot feature. After initialization, call \`enableRecorderVideoFrameCapture\` to enable and configure video frame screenshots. You can then get the captured video data in callbacks of \`IRecorderVideoFrameObserver\`.

        For implementation details, see [Local screenshots](/en/realtime-media/on-premise-recording/build/customize-the-recording/local-screenshot).

        ##### Single-stream recording without transcoding [#single-stream-recording-without-transcoding-1]

        This release adds an overloaded \`initialize\` method to \`AgoraMediaRtcRecorder\`. Use the \`recordEncodedOnly\` parameter to enable single-stream recording without transcoding. After you enable this parameter, the server writes remote H.264 or H.265 video data directly to MP4 files.

        This parameter is mainly for high-concurrency recording scenarios. Use it with \`VideoSubscriptionOptions.encodedFrameOnly\` set to \`true\` to maximize concurrency.

        <CalloutContainer type="warning">
          <CalloutDescription>
            When single-stream recording without transcoding is enabled, watermarking and composite recording are unavailable.
          </CalloutDescription>
        </CalloutContainer>
      </Accordion>

      <Accordion title="v4.4.150" id="v44150-1" headingLevel="3" value="v44150-1">
        Released on June 30, 2025.

        This is the first release of the On-Premise Recording 4.x SDK. It includes the following features:

        * Record real-time audio and video.
        * Record audio and video content from all participants in a single channel.
        * Record audio and video content from all participants in multiple channels simultaneously.
        * Record audio-only content from all participants in one or more channels simultaneously.
        * Support recording of encrypted channels using the built-in encryption of the Agora SDK.

        <CalloutContainer type="info">
          <CalloutDescription>
            With this release, On-Premise Recording SDK v3.x and earlier enters the retirement phase. For the detailed retirement schedule and migration plan, refer to [Service Sunset Plans](/en/realtime-media/on-premise-recording/reference/sunset).
          </CalloutDescription>
        </CalloutContainer>
      </Accordion>
    </Accordions>

    <_PlatformProcessedMarker close="true" />
  </_PlatformPanel>
</_PlatformTabsGroup>
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "The On-Premise Recording SDK provides recording functionality for the Agora Realtime Communication SDK. For more information see Product overview."
  }, {
    heading: "v4x",
    content: "With the 4.x release, the On Premise Recording SDK version 3.x and earlier have entered the retirement phase. For detailed retirement schedule and migration plan, refer to Service Sunset Plans."
  }, {
    heading: "v4x",
    content: "Released on September 30, 2025."
  }, {
    heading: "video-frame-screenshots",
    content: "This release adds the video frame screenshot feature. After initialization, call `enableRecorderVideoFrameCapture` to enable and configure video frame screenshots. You can then get the captured video data in callbacks of `IRecorderVideoFrameObserver`."
  }, {
    heading: "video-frame-screenshots",
    content: "For implementation details, see Local screenshots."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "This release adds the `recordEncodedOnly` parameter to `IAgoraMediaRtcRecorder::initialize`, enabling single-stream recording without transcoding. After you enable this parameter, the server writes remote H.264 or H.265 video data directly to MP4 files."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "This parameter is mainly for high-concurrency recording scenarios. Use it with `VideoSubscriptionOptions.encodedFrameOnly` set to `true` to maximize concurrency."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "When single-stream recording without transcoding is enabled, watermarking and composite recording are unavailable."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "Released on June 30, 2025."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "This is the first release of the On-Premise Recording 4.x SDK. It includes the following features:"
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "Record real-time audio and video."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "Record audio and video content from all participants in a single channel."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "Record audio and video content from all participants in multiple channels simultaneously."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "Record audio-only content from all participants in one or more channels simultaneously."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "Support recording of encrypted channels using the built-in encryption of the Agora SDK."
  }, {
    heading: "single-stream-recording-without-transcoding",
    content: "With this release, On-Premise Recording SDK v3.x and earlier enters the retirement phase. For the detailed retirement schedule and migration plan, refer to Service Sunset Plans."
  }, {
    heading: "known-issues",
    content: "When you record using an Android client, the image is turned upside down when you switch from a front-facing camera to a rear one."
  }, {
    heading: "known-issues",
    content: "If the user calls the `leaveChannel` method in the channel to stop recording, the recording file ends with a period of silence determined by the `idleLimitSec` field set for the configuration when calling the `joinChannel` method."
  }, {
    heading: "known-issues",
    content: "The recorded voice or video files are not encrypted. To be compliant with HIPAA, encrypt the disk with a disk encryption tool, such as cryptsetup."
  }, {
    heading: "known-issues",
    content: "v3.0.6 was released on May 18, 2021."
  }, {
    heading: "new-feature",
    content: "**AES-GCM encryption**"
  }, {
    heading: "new-feature",
    content: "For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in `decryptionMode`:"
  }, {
    heading: "new-feature",
    content: '`"aes-128-gcm"`: 128-bit AES encryption, GCM mode.'
  }, {
    heading: "new-feature",
    content: '`"aes-256-gcm"`: 256-bit AES encryption, GCM mode.'
  }, {
    heading: "new-feature",
    content: "Once you enable the built-in encryption, all users in the same channel must use the same encryption mode and key."
  }, {
    heading: "new-feature",
    content: "**MP3 format in composite recording mode**"
  }, {
    heading: "new-feature",
    content: "v3.0.6 adds `Audio_Only_Record` and `Secondary_Recorder` in `cfgFilePath` to get a MP3 file after a composite recording. See Record a Call and cfgFilePath for details."
  }, {
    heading: "improvements",
    content: "You can set the sample rate of the raw audio data in PCM format (`getAudioFrame` is 2 or 3) through the `cfgFilePath` parameter. See Record a Call for details."
  }, {
    heading: "improvements",
    content: "Optimize the sensitivity and accuracy of `onActiveSpeaker` and `onAudioVolumeIndication` callbacks."
  }, {
    heading: "improvements",
    content: "You can call mixedVideoAudio to get a MP4 file after a composite recording or an individual recording without transcoding."
  }, {
    heading: "improvements",
    content: "Earlier than v3.0.6"
  }, {
    heading: "improvements",
    content: "v3.0.6 or later"
  }, {
    heading: "improvements",
    content: "Generates video files in TS format during the recording. When the recording ends, you can use the transcoding script to convert the TS file to MP4 format."
  }, {
    heading: "improvements",
    content: "Generates video files in TS format and MP4 format during the recording."
  }, {
    heading: "api-changes",
    content: "Adds enumerators for `MIXED_AV_CODEC_TYPE`：\n`AV_CODEC_INDIVIDUAL_TS_ONLY`: Generates video files in TS format, and audio files in AAC format in the individual recording mode.\n`AV_CODEC_INDIVIDUAL_TS_AND_MP4`: Generates video files in TS format and MP4 format, and audio files in AAC format in the individual recording mode.\n`AV_CODEC_MIXED_TS_ONLY`: Mixes the audio and video in real time into an TS file in the composite recording mode.\n`AV_CODEC_MIXED_TS_AND_MP4`: Mixes the audio and video in real time into an TS file and an MP4 file in the composite recording mode."
  }, {
    heading: "issues-fixed",
    content: "Fix the issue that the transcoding script does not support UIDs with underscores, resulting in parsing errors."
  }, {
    heading: "issues-fixed",
    content: "v3.0.5 was released on January 13, 2021."
  }, {
    heading: "new-feature-1",
    content: "This release adds `VIDEO_JPG_FILE` in `VIDEO_FRAME_TYPE` to get video data in JPG file format."
  }, {
    heading: "improvements-1",
    content: "To enable faster playback of the MP4 file generated from the recording, this release moves the moov atom to the start of the MP4 file, which allows for playback of the file during buffering."
  }, {
    heading: "improvements-1",
    content: "This release removes the restriction that you cannot get the raw audio data and raw video data at the same time from an individual recording session."
  }, {
    heading: "issues-fixed-1",
    content: "This release fixed the following issues:"
  }, {
    heading: "issues-fixed-1",
    content: "The captured screenshots in JPG format had rotation information missing when the video decoding format was set as `VIDEO_FORMAT_JPG_VIDEO_FILE_TYPE`."
  }, {
    heading: "issues-fixed-1",
    content: "Crashes when calling the `leaveChannel` method to leave a channel."
  }, {
    heading: "issues-fixed-1",
    content: "v3.0.4 was released on November 25, 2020."
  }, {
    heading: "new-feature-2",
    content: "v3.0.4 adds `Chunk_Time_Span` in `cfgFilePath`  to set time interval between two successive recorded files in individual recording mode of a live interactive streaming channel."
  }, {
    heading: "issues-fixed-2",
    content: "When a host repeatedly joins and leaves a channel, the physical memory consumption of the recording server increased significantly."
  }, {
    heading: "issues-fixed-2",
    content: "Calling `OnActiveSpeaker` cannot get the corresponding callback."
  }, {
    heading: "issues-fixed-2",
    content: "Calling `OnAudioVolumeIndication` cannot get the corresponding callback."
  }, {
    heading: "issues-fixed-2",
    content: "Calling the Java API `setUserBackground` caused the recording service to crash."
  }, {
    heading: "issues-fixed-2",
    content: "Failure to merge videos shorter than 0.02 s by using the transcoding script after the recording finishes."
  }, {
    heading: "issues-fixed-2",
    content: "In composite recording mode, failure to output stereo audio by setting `audioProfile` as `2`."
  }, {
    heading: "issues-fixed-2",
    content: "v3.0.3 was released on September 17, 2020."
  }, {
    heading: "new-feature-3",
    content: "**Repair of recording files after crashes**"
  }, {
    heading: "new-feature-3",
    content: "Before v3.0.3, the MP4 files generated after a recording might not be playable due to recording crashes. To solve this issue, as of v3.0.3, the Agora Recording SDK provides the following solutions:"
  }, {
    heading: "new-feature-3",
    content: "The SDK generates video files in TS format during the recording. When the recording ends, the SDK automatically converts the TS files to MP4 format. Even if occasional crashes occur during the recording, the MP4 files can still be played."
  }, {
    heading: "new-feature-3",
    content: "The SDK adds the `crash_restore.sh` script. If the recording service quits abnormally after multiple crashes, you can run the script to convert the TS files to MP4 files and repair the incomplete `uid_UID_timestamp.txt` files."
  }, {
    heading: "new-feature-3",
    content: "v3.0.2 was released on July 15, 2020."
  }, {
    heading: "issues-fixed-3",
    content: "Timestamps occasionally overflow in `uid_UID_timestamp.txt`."
  }, {
    heading: "issues-fixed-3",
    content: "Characters are garbled and contents lost when a line of text becomes too long in a log file."
  }, {
    heading: "issues-fixed-3",
    content: "MP4 files generated from a composite recording session cannot be played via Windows Media Player."
  }, {
    heading: "issues-fixed-3",
    content: "v3.0.1 was released on March 16, 2020."
  }, {
    heading: "issue-fixed",
    content: "Recorded files from an individual recording session have an incorrect timestamp in their names."
  }, {
    heading: "issue-fixed",
    content: "v3.0.0 was released on February 20, 2020."
  }, {
    heading: "new-features-1",
    content: "**1. Watermarks**"
  }, {
    heading: "new-features-1",
    content: "Supports adding image watermarks, text watermarks, or a timestamp watermark in composite recording mode."
  }, {
    heading: "new-features-1",
    content: "You can either configure watermark settings in the `setVideoMixingLayout` method, or add, update, and remove watermark settings with the `updateWatermarkConfigs` method. See Watermark for details."
  }, {
    heading: "new-features-1",
    content: "**2. Selective recording**"
  }, {
    heading: "new-features-1",
    content: "Supports recording the audio or video of specified users."
  }, {
    heading: "new-features-1",
    content: "To enable selective recording when calling `joinChannel`:"
  }, {
    heading: "new-features-1",
    content: "Set `autoSubscribe` as false in `RecordingConfig`."
  }, {
    heading: "new-features-1",
    content: "Set the `subscribeVideoUids` or `subscribeAudioUids` parameter in `RecordingConfig `to specify the users to record."
  }, {
    heading: "new-features-1",
    content: "Afterwards, you can call `updateSuscribeVideoUids` or `updateSuscribeAudioUids` methods to update the list of uids to record."
  }, {
    heading: "new-features-1",
    content: "**3. Last frame**"
  }, {
    heading: "new-features-1",
    content: "Retains the last video frame from when the user leaves the channel in composite recording mode."
  }, {
    heading: "new-features-1",
    content: "You can set the `keepLastFrame` parameter when calling the `setVideoMixingLayout` method to enable this feature."
  }, {
    heading: "new-features-1",
    content: "**4. Cloud proxy**"
  }, {
    heading: "new-features-1",
    content: "Supports the cloud proxy service. See Use Cloud Proxy for details."
  }, {
    heading: "new-features-1",
    content: "**5. New callbacks**"
  }, {
    heading: "channel-events",
    content: "onRejoinChannelSuccess Occurs when the recording server rejoins a channel."
  }, {
    heading: "channel-events",
    content: "onConnectionStateChanged Occurs when the network connection state changes."
  }, {
    heading: "statistics-events",
    content: "onRemoteVideoStats Reports the statistics of the video stream from each remote user/host."
  }, {
    heading: "statistics-events",
    content: "onRemoteAudioStats Reports the statistics of the audio stream from each remote user/host."
  }, {
    heading: "statistics-events",
    content: "onRecordingStats Reports the statistics of the recording session."
  }, {
    heading: "media-events",
    content: "onRemoteAudioStreamStateChanged Occurs when the state of a remote audio stream changes."
  }, {
    heading: "media-events",
    content: "onRemoteVideoStreamStateChanged Occurs when the state of a remote video stream changes."
  }, {
    heading: "improvement",
    content: "As of v3.0.0, you can disable the keyframe request by setting the `enableIntraRequest` parameter in RecordingConfig. After this setting:"
  }, {
    heading: "improvement",
    content: "All senders in the channel send the keyframe at an interval of 2 seconds."
  }, {
    heading: "improvement",
    content: "You can play the video file recorded in individual recording mode from a specified position without the need to transcode."
  }, {
    heading: "improvement",
    content: "As of v3.0.0, setting the recording file path in the custom configuration file is no longer mandatory. If you have specified a custom configuration file by setting `cfgFilePath`, you do not have to set `Recording_Dir` in the configuration file."
  }, {
    heading: "issues-fixed-4",
    content: "In composite recording mode, the layout of the recorded video occasionally has an extra user region."
  }, {
    heading: "issues-fixed-4",
    content: "The playback speed of the recorded video is occasionally too fast."
  }, {
    heading: "issues-fixed-4",
    content: "The recording service creates too many Syslogs."
  }, {
    heading: "issues-fixed-4",
    content: "Setting the `alpha` parameter in the method call of `setVideoMixingLayout` causes the recording service to crash."
  }, {
    heading: "issues-fixed-4",
    content: "The recording service cannot record the specified uids if you set the server to record audio only, or to record video only."
  }, {
    heading: "issues-fixed-4",
    content: "The information reported by the `onRemoteAudioStreamStateChanged` and `onRemoteVideoStreamStateChanged` callbacks is inaccurate under poor network conditions."
  }, {
    heading: "issues-fixed-4",
    content: "The recorded audio is occasionally extended."
  }, {
    heading: "issues-fixed-4",
    content: "A black frame appears at the beginning of a video in composite recording mode."
  }, {
    heading: "v2x",
    content: "The Agora On-Premise Recording SDK supports both Java and C++ from v2.2.0."
  }, {
    heading: "v2x",
    content: "As of December 8, 2021, Agora begins implementing the retirement process for the On-Premise Recording SDK earlier than v3.0.0. See Service Sunset Plans for On-Premise Recording."
  }, {
    heading: "v2x",
    content: "v2.3.4 was released on August 5, 2019."
  }, {
    heading: "improvements-2",
    content: "The following private Java API methods are now public:"
  }, {
    heading: "improvements-2",
    content: "The `setUserBackground` method which sets the background image of a specified user. When the user is online but does not send any video stream, the background image is displayed."
  }, {
    heading: "improvements-2",
    content: "The `setLogLevel` method which sets the logging level. The SDK generates logs in the selected level and in the levels preceding the selected level."
  }, {
    heading: "improvements-2",
    content: "Improves the robustness of Java API methods."
  }, {
    heading: "improvements-2",
    content: "Enhances the SDK's ability to collect the information of abnormal crashes."
  }, {
    heading: "issues-fixed-5",
    content: "File splitting in composite recording mode caused by switching channel profiles."
  }, {
    heading: "issues-fixed-5",
    content: "Failure to only record audio in composite recording mode in the Live Broadcast profile."
  }, {
    heading: "issues-fixed-5",
    content: "Libyuv crashes."
  }, {
    heading: "issues-fixed-5",
    content: "Crashes when calling the `leaveChannel` method to leave a channel."
  }, {
    heading: "issues-fixed-5",
    content: "v2.3.3 was released on April 1, 2019."
  }, {
    heading: "issues-fixed-5",
    content: "**New features**"
  }, {
    heading: "1-supports-monitoring-the-network-connection-status",
    content: "v2.3.3 adds the following callbacks to inform the app of the connection status between the recording SDK and Agora's edge server:"
  }, {
    heading: "1-supports-monitoring-the-network-connection-status",
    content: "`onConnectionLost`: Informs that the SDK loses connection to the server."
  }, {
    heading: "1-supports-monitoring-the-network-connection-status",
    content: "`onConnectionInterrupted`: Informs that the connection between the SDK and the server is interrupted."
  }, {
    heading: "2-informs-the-app-of-receiving-the-first-frame",
    content: "v2.3.3 adds the following callbacks to inform the app of receiving the first remote audio or video frame:"
  }, {
    heading: "2-informs-the-app-of-receiving-the-first-frame",
    content: "`onFirstRemoteAudioFrame`: Informs that the first remote audio frame is received."
  }, {
    heading: "2-informs-the-app-of-receiving-the-first-frame",
    content: "`onFirstRemoteVideoDecoded`: Informs that the first remote video frame is decoded."
  }, {
    heading: "3-supports-monitoring-status-changes-of-the-receiving-stream",
    content: "v2.3.3 adds the `onReceivingStreamStatusChanged` callback to get status changes of the receiving audio or video stream."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "v2.3.3 adds the `onAudioVolumeIndication` callback to get the list of users who are speaking and their volumes."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "**Issues fixed**"
  }, {
    heading: "4-supports-the-volume-indication",
    content: "Fails to run the transcoding script when the recording SDK exits the channel and then enters the channel again in manual mode."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "Occasional crashes when using invalid parameters in the `mixedVideoAudio` method."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "Freezes in HD video recordings."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "Setting the recording video frame rate does not take effect."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "Occasional crashes when compiling the recording Java sample code in Manual Mode."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "Fails to run the transcoding command `-f . -m 3`."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "v2.3.0 was released on January 14, 2019."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "> The calculation of the usage of the On-Premise Recording SDK v2.3.0 or later is separated from that of the Agora Voice Call/Interactive Audio Streaming SDK and the Agora Video Call/Interactive Video Streaming SDK. Contact support\\@agora.io for details."
  }, {
    heading: "4-supports-the-volume-indication",
    content: "**New features**"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "v2.3.0 supports high audio quality (a sample rate of 48 kHz, stereo, and a bitrate of up to 192 Kbps) in Composite Recording Mode."
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "> Stereo is not applicable to raw data."
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "`audio profile` can be set as `0` or `1`:"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "Individual recording (file mode):"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "By default or set `audio profile=0`: A sample rate of 48 kHz, the same number of audio channels as the original audio, and an adaptive bitrate."
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "Individual recording (raw data):"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "The sample rate is fixed at 48 kHz and the number of audio channels is the same as the original audio:"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "PCM: The bitrate may change."
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "AAC: The bitrate is the same as in the file mode."
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "Composite recording (file mode):"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "`audio profile=0`: A sample rate of 48 kHz, mono, and a bitrate of 48 Kbps"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "`audio profile=1`: A sample rate of 48 kHz, mono, and a bitrate of 128 Kbps"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "`audio profile=2`: A sample rate of 48 kHz, stereo, and a bitrate of 192 Kbps"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "Composite recording (raw data):"
  }, {
    heading: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "A fixed sample rate of 48 kHz and mono."
  }, {
    heading: "2-supports-web-video-players",
    content: "Video files transcoded in real time or transcoded by the transcoding script can be played by web browsers on Android, iOS/macOS, and Windows. The following is a list of compatible web browsers on each platform."
  }, {
    heading: "2-supports-web-video-players",
    content: "Platform"
  }, {
    heading: "2-supports-web-video-players",
    content: "Chrome"
  }, {
    heading: "2-supports-web-video-players",
    content: "Safari"
  }, {
    heading: "2-supports-web-video-players",
    content: "Android"
  }, {
    heading: "2-supports-web-video-players",
    content: "Chrome 49+"
  }, {
    heading: "2-supports-web-video-players",
    content: "N/A"
  }, {
    heading: "2-supports-web-video-players",
    content: "iOS"
  }, {
    heading: "2-supports-web-video-players",
    content: "✘"
  }, {
    heading: "2-supports-web-video-players",
    content: "Safari 9+"
  }, {
    heading: "2-supports-web-video-players",
    content: "macOS 10+"
  }, {
    heading: "2-supports-web-video-players",
    content: "Chrome 47+"
  }, {
    heading: "2-supports-web-video-players",
    content: "Safari 11+"
  }, {
    heading: "2-supports-web-video-players",
    content: "Windows"
  }, {
    heading: "2-supports-web-video-players",
    content: "Chrome 49+"
  }, {
    heading: "2-supports-web-video-players",
    content: "N/A"
  }, {
    heading: "3-supports-custom-background-images-in-composite-recording-mode",
    content: "v2.3.0 adds the function for users to add a background image while recording audio in Composite Recording Mode. A custom image is used for any user who does not have video while recording video in Composite Recording Mode."
  }, {
    heading: "3-supports-custom-background-images-in-composite-recording-mode",
    content: "> This function is not applicable to raw data and screenshots."
  }, {
    heading: "4-adds-two-pre-defined-layout-templates-to-the-sample-code",
    content: "v2.3.0 provides two pre-defined layout templates for composite recording to make the On-Premise Recording SDK sample code easier to use."
  }, {
    heading: "best-fit-bestfit",
    content: "v2.3.0 adds `bestFit` as the default layout supporting up to 17 video streams."
  }, {
    heading: "best-fit-bestfit",
    content: "This layout automatically scales according to the number of video streams. The number of columns and rows varies depending on the number of video streams. For example:"
  }, {
    heading: "vertical-presentationverticalpresentation",
    content: "v2.3.0 adds the function to display a specified user's video in a large window on the left of the screen, while displaying the other users' videos in small windows arranged vertically on the right. At most, two columns with eight video windows in each column are supported."
  }, {
    heading: "vertical-presentationverticalpresentation",
    content: "For example:"
  }, {
    heading: "5-screenshots-in-composite-recording-mode",
    content: "v2.3.0 adds the function to capture the screen of every user while recording video in Composite Recording Mode. Recording and screen capturing use the same video stream."
  }, {
    heading: "6-speaker-detection",
    content: "v2.3.0 adds the `onActiveSpeaker` callback to return the UID of the active speaker in the channel."
  }, {
    heading: "6-speaker-detection",
    content: "This function is disabled by default and can be enabled by setting the `audioIndicationInterval` parameter in `RecordingConfig`. The On-Premise Recording SDK returns the `onActiveSpeaker` callback at set intervals."
  }, {
    heading: "6-speaker-detection",
    content: "**Improvements**"
  }, {
    heading: "6-speaker-detection",
    content: "Improves audio and video synchronization in Individual Recording Mode."
  }, {
    heading: "6-speaker-detection",
    content: "Supports automatic rotation of recorded video streams that are not transcoded in real time in Individual Recording Mode."
  }, {
    heading: "6-speaker-detection",
    content: "Changed the idle behavior in Manual Mode:"
  }, {
    heading: "6-speaker-detection",
    content: "For versions earlier than v2.3.0 in Manual Mode, the idle mechanism takes effect immediately after joining a channel, which might cause the recording SDK to exit the channel."
  }, {
    heading: "6-speaker-detection",
    content: "For v2.3.0 or later, the idle mechanism does not take effect until the `startService` method is called."
  }, {
    heading: "6-speaker-detection",
    content: "Optimizes the log levels and split some logs in INFO into NOTICE, WARN, and ERROR."
  }, {
    heading: "6-speaker-detection",
    content: "Optimizes the naming of the recording directory to ensure the uniqueness of each folder."
  }, {
    heading: "6-speaker-detection",
    content: "v2.2.3 was released on October 18, 2018."
  }, {
    heading: "6-speaker-detection",
    content: "**Issues fixed**"
  }, {
    heading: "6-speaker-detection",
    content: "Coredump loss caused by .backtrace."
  }, {
    heading: "6-speaker-detection",
    content: "System crashes caused by Java jni. and optimize stability."
  }, {
    heading: "6-speaker-detection",
    content: "Transcoding script issues in Manual Mode."
  }, {
    heading: "6-speaker-detection",
    content: "The recording video file splits into two files after a web client joins the channel."
  }, {
    heading: "6-speaker-detection",
    content: "Occasional system crashes caused by the subthread being active after the main thread is released."
  }, {
    heading: "6-speaker-detection",
    content: "v2.2.2 was released on August 1, 2018."
  }, {
    heading: "6-speaker-detection",
    content: "**Improvements**"
  }, {
    heading: "6-speaker-detection",
    content: "The screenshots are named `uidYmdHMSms.jpg` instead of `uidYmdHMS.jpg`."
  }, {
    heading: "6-speaker-detection",
    content: "The transcoding script supports autorotation."
  }, {
    heading: "6-speaker-detection",
    content: "The structure of the Java folder is modified."
  }, {
    heading: "6-speaker-detection",
    content: "**Issues fixed**"
  }, {
    heading: "6-speaker-detection",
    content: "Abnormal webm recording times."
  }, {
    heading: "6-speaker-detection",
    content: "Memory leaks."
  }, {
    heading: "6-speaker-detection",
    content: "Multi-party intercommunication issues."
  }, {
    heading: "6-speaker-detection",
    content: "H.264 parser issues."
  }, {
    heading: "6-speaker-detection",
    content: "Audio and video out of sync."
  }, {
    heading: "6-speaker-detection",
    content: "v2.2.1 was released on June 5, 2018."
  }, {
    heading: "6-speaker-detection",
    content: "**Improvements**"
  }, {
    heading: "6-speaker-detection",
    content: "Improves the performance of the Communication profile. The number of recording channels that a system supports with the same performance increases by 150%."
  }, {
    heading: "6-speaker-detection",
    content: "Improves the efficiency to find the port. The time to find the port is no longer part of the idle time."
  }, {
    heading: "6-speaker-detection",
    content: "**Issues fixed**"
  }, {
    heading: "6-speaker-detection",
    content: "Port conflicts when the search for the port takes too long and exceeds the idle time. As a result, the port is not connected."
  }, {
    heading: "6-speaker-detection",
    content: "v2.2.0 was released on May 4, 2018."
  }, {
    heading: "6-speaker-detection",
    content: "**New features**"
  }, {
    heading: "6-speaker-detection",
    content: "> Support for both Java and C++."
  }, {
    heading: "6-speaker-detection",
    content: "**Issues fixed**"
  }, {
    heading: "6-speaker-detection",
    content: "Issues of oversized logs."
  }, {
    heading: "6-speaker-detection",
    content: "Abnormal issues when recording fast-forward videos."
  }, {
    heading: "6-speaker-detection",
    content: "Intermittent failures."
  }, {
    heading: "6-speaker-detection",
    content: "Performance issues."
  }, {
    heading: "6-speaker-detection",
    content: "Some crash issues."
  }, {
    heading: "6-speaker-detection",
    content: "v2.1.0 was released on March 7, 2018."
  }, {
    heading: "6-speaker-detection",
    content: "**New features**"
  }, {
    heading: "6-speaker-detection",
    content: "Function"
  }, {
    heading: "6-speaker-detection",
    content: "Description"
  }, {
    heading: "6-speaker-detection",
    content: "Recording Mode"
  }, {
    heading: "6-speaker-detection",
    content: "Supports selecting auto or manual mode when joining a channel to flexibly control the recording."
  }, {
    heading: "6-speaker-detection",
    content: "Control Recording"
  }, {
    heading: "6-speaker-detection",
    content: "Adds interfaces to unbind the operations of joining a channel and recording. If the auto recording mode is used, the recording starts when a user joins the channel. If the manual recording mode is used, you can control when to start and stop the recording."
  }, {
    heading: "6-speaker-detection",
    content: "Mix Raw Audio"
  }, {
    heading: "6-speaker-detection",
    content: "Supports the function of mixing raw audio data."
  }, {
    heading: "6-speaker-detection",
    content: "Java Recording API"
  }, {
    heading: "6-speaker-detection",
    content: "Supports Java APIs for recording."
  }, {
    heading: "6-speaker-detection",
    content: "**Improvements**"
  }, {
    heading: "6-speaker-detection",
    content: "Improvement"
  }, {
    heading: "6-speaker-detection",
    content: "Description"
  }, {
    heading: "6-speaker-detection",
    content: "Transcoding Script"
  }, {
    heading: "6-speaker-detection",
    content: "Supports setting the transcoding frame rate and resolution, either in picture-in-picture or single-stream mode."
  }, {
    heading: "6-speaker-detection",
    content: "**Issues fixed**"
  }, {
    heading: "6-speaker-detection",
    content: "Occasional recording file transcoding failures."
  }, {
    heading: "6-speaker-detection",
    content: "The video screen occasionally turns upside down."
  }, {
    heading: "6-speaker-detection",
    content: "Occasional abnormal audio during recording."
  }, {
    heading: "6-speaker-detection",
    content: "v2.0 was released on November 21, 2017."
  }, {
    heading: "6-speaker-detection",
    content: "Optimizes the raw data to support various formats:"
  }, {
    heading: "6-speaker-detection",
    content: "Modifies the `decodeAudio` and `decodeVideo` parameters, and adds the `VideoJpgFrame` struct."
  }, {
    heading: "6-speaker-detection",
    content: "Modifies the `getAudioFrame` and `getVideoFrame` parameters."
  }, {
    heading: "6-speaker-detection",
    content: "Adds the `captureInterval` parameter to set the time interval of capturing screenshots."
  }, {
    heading: "6-speaker-detection",
    content: "Adds the `streamType` parameter to support different video stream types."
  }, {
    heading: "6-speaker-detection",
    content: "Adds the `isVideoOnly` parameter."
  }, {
    heading: "6-speaker-detection",
    content: "The transcoding scripts, once used, generate a convert.log file under the same path as the voice/video file."
  }, {
    heading: "6-speaker-detection",
    content: "Adds the video rotating information in `UID_HHMMSSMS.txt`."
  }, {
    heading: "v1x",
    content: "v1.3 was released on October 20, 2017."
  }, {
    heading: "v1x",
    content: "**New features**:"
  }, {
    heading: "v1x",
    content: "Adds mixing the audio and video recording functions by adding the `mixedVideoAudio` and `cfgFilePath` parameters in the `joinChannel` method."
  }, {
    heading: "v1x",
    content: "Adds the function of merging the audio and video file of the same uid as one, see Play the Recording Files."
  }, {
    heading: "v1x",
    content: "Adds the `getProperties` method to get the recording path immediately after recording is started before joining any channel."
  }, {
    heading: "v1x",
    content: "Modifies the `onError` and `onLeaveChannel` callbacks."
  }, {
    heading: "v1x",
    content: "v1.2 was released on August 21, 2017."
  }, {
    heading: "v1x",
    content: "**New features**:"
  }, {
    heading: "v1x",
    content: "Supports getting the audio and video raw data."
  }, {
    heading: "v1x",
    content: "Supports detecting sexually explicit content."
  }, {
    heading: "v1x",
    content: "Provides a `recordingsys.log` log file to check for failures."
  }, {
    heading: "v1x",
    content: "Supports the recording channel timestamp, that is, the first user who starts recording in the channel."
  }, {
    heading: "v1x",
    content: "v1.1 was released on July 25, 2017."
  }, {
    heading: "v1x",
    content: "**New features**:"
  }, {
    heading: "v1x",
    content: "Adds recording at the web client."
  }, {
    heading: "v1x",
    content: "Adds the real-time video mixing function."
  }, {
    heading: "v1x",
    content: "Adds a set of callback functions."
  }, {
    heading: "v1x",
    content: "Modifies the file format after transcoding."
  }, {
    heading: "v1x",
    content: "Enables configuring the UDP port."
  }, {
    heading: "v1x",
    content: "**Issues fixed**:"
  }, {
    heading: "v1x",
    content: "Wrong timestamps."
  }, {
    heading: "v1x",
    content: "Transcoding failures."
  }, {
    heading: "v1x",
    content: "Unable to playback VLC files."
  }, {
    heading: "v1x",
    content: "v1.0.1 was released on June 27, 2017, and fixes the crash when you set the channel profile of the recording as live broadcast."
  }, {
    heading: "v1x",
    content: "v1.0.0 was released on June 15, 2017."
  }, {
    heading: "v1x",
    content: "This is the first release of the On-Premise Recording SDK with the following functions:"
  }, {
    heading: "v1x",
    content: "Communication and interactive live streaming use-cases."
  }, {
    heading: "v1x",
    content: "Recording the voice and video of all users in a channel."
  }, {
    heading: "v1x",
    content: "Recording the voice and video of all users in multiple channels simultaneously."
  }, {
    heading: "v1x",
    content: "Recording the voice of all users in a channel or in multiple channels simultaneously."
  }, {
    heading: "v1x",
    content: "Recording an encrypted channel if the application has integrated the Agora built-in encryption."
  }, {
    heading: "v1x",
    content: "The On-Premise Recording SDK provides recording functionality for the Agora Realtime Communication SDK. For more information see Product overview."
  }, {
    heading: "v4x-1",
    content: "With the 4.x release, the On Premise Recording SDK version 3.x and earlier have entered the retirement phase. For detailed retirement schedule and migration plan, refer to Service Sunset Plans."
  }, {
    heading: "v4x-1",
    content: "Released on September 30, 2025."
  }, {
    heading: "compatibility-changes",
    content: "This release removes the `AgoraMediaComponentFactory` interface class and moves the original `createMediaRtcRecorder` method into the `AgoraService` class. If you upgrade from v4.4.150 to v4.4.151, update your integration logic accordingly."
  }, {
    heading: "video-frame-screenshots-1",
    content: "This release adds the video frame screenshot feature. After initialization, call `enableRecorderVideoFrameCapture` to enable and configure video frame screenshots. You can then get the captured video data in callbacks of `IRecorderVideoFrameObserver`."
  }, {
    heading: "video-frame-screenshots-1",
    content: "For implementation details, see Local screenshots."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "This release adds an overloaded `initialize` method to `AgoraMediaRtcRecorder`. Use the `recordEncodedOnly` parameter to enable single-stream recording without transcoding. After you enable this parameter, the server writes remote H.264 or H.265 video data directly to MP4 files."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "This parameter is mainly for high-concurrency recording scenarios. Use it with `VideoSubscriptionOptions.encodedFrameOnly` set to `true` to maximize concurrency."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "When single-stream recording without transcoding is enabled, watermarking and composite recording are unavailable."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "Released on June 30, 2025."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "This is the first release of the On-Premise Recording 4.x SDK. It includes the following features:"
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "Record real-time audio and video."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "Record audio and video content from all participants in a single channel."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "Record audio and video content from all participants in multiple channels simultaneously."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "Record audio-only content from all participants in one or more channels simultaneously."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "Support recording of encrypted channels using the built-in encryption of the Agora SDK."
  }, {
    heading: "single-stream-recording-without-transcoding-1",
    content: "With this release, On-Premise Recording SDK v3.x and earlier enters the retirement phase. For the detailed retirement schedule and migration plan, refer to Service Sunset Plans."
  }],
  headings: [{
    id: "v4x",
    content: "v4.x"
  }, {
    id: "new-features",
    content: "New Features"
  }, {
    id: "video-frame-screenshots",
    content: "Video frame screenshots"
  }, {
    id: "single-stream-recording-without-transcoding",
    content: "Single-stream recording without transcoding"
  }, {
    id: "v3x",
    content: "v3.x"
  }, {
    id: "known-issues",
    content: "Known issues"
  }, {
    id: "new-feature",
    content: "New feature"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "api-changes",
    content: "API changes"
  }, {
    id: "issues-fixed",
    content: "Issues fixed"
  }, {
    id: "new-feature-1",
    content: "New feature"
  }, {
    id: "improvements-1",
    content: "Improvements"
  }, {
    id: "issues-fixed-1",
    content: "Issues fixed"
  }, {
    id: "new-feature-2",
    content: "New feature"
  }, {
    id: "issues-fixed-2",
    content: "Issues fixed"
  }, {
    id: "new-feature-3",
    content: "New feature"
  }, {
    id: "issues-fixed-3",
    content: "Issues fixed"
  }, {
    id: "issue-fixed",
    content: "Issue fixed"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "channel-events",
    content: "Channel events"
  }, {
    id: "statistics-events",
    content: "Statistics events"
  }, {
    id: "media-events",
    content: "Media events"
  }, {
    id: "improvement",
    content: "Improvement"
  }, {
    id: "issues-fixed-4",
    content: "Issues fixed"
  }, {
    id: "v2x",
    content: "v2.x"
  }, {
    id: "improvements-2",
    content: "Improvements"
  }, {
    id: "issues-fixed-5",
    content: "Issues fixed"
  }, {
    id: "1-supports-monitoring-the-network-connection-status",
    content: "1\\. Supports monitoring the network connection status"
  }, {
    id: "2-informs-the-app-of-receiving-the-first-frame",
    content: "2\\. Informs the app of receiving the first frame"
  }, {
    id: "3-supports-monitoring-status-changes-of-the-receiving-stream",
    content: "3\\. Supports monitoring status changes of the receiving stream"
  }, {
    id: "4-supports-the-volume-indication",
    content: "4\\. Supports the volume indication"
  }, {
    id: "1-supports-stereo-audio-in-composite-recording-mode",
    content: "1\\. Supports Stereo Audio in Composite Recording Mode"
  }, {
    id: "2-supports-web-video-players",
    content: "2\\. Supports Web Video Players"
  }, {
    id: "3-supports-custom-background-images-in-composite-recording-mode",
    content: "3\\. Supports Custom Background Images in Composite Recording Mode"
  }, {
    id: "4-adds-two-pre-defined-layout-templates-to-the-sample-code",
    content: "4\\. Adds Two Pre-defined Layout Templates to the Sample Code"
  }, {
    id: "best-fit-bestfit",
    content: "Best Fit (bestFit)"
  }, {
    id: "vertical-presentationverticalpresentation",
    content: "Vertical Presentation（verticalPresentation）"
  }, {
    id: "5-screenshots-in-composite-recording-mode",
    content: "5\\. Screenshots in Composite Recording Mode"
  }, {
    id: "6-speaker-detection",
    content: "6\\. Speaker Detection"
  }, {
    id: "v1x",
    content: "v1.x"
  }, {
    id: "v4x-1",
    content: "v4.x"
  }, {
    id: "compatibility-changes",
    content: "Compatibility changes"
  }, {
    id: "new-features-2",
    content: "New Features"
  }, {
    id: "video-frame-screenshots-1",
    content: "Video frame screenshots"
  }, {
    id: "single-stream-recording-without-transcoding-1",
    content: "Single-stream recording without transcoding"
  }]
};
export let toc = [{
  depth: 2,
  url: "#v4x",
  title: _jsx(_Fragment, {
    children: "v4.x"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 5,
  url: "#video-frame-screenshots",
  title: _jsx(_Fragment, {
    children: "Video frame screenshots"
  })
}, {
  depth: 5,
  url: "#single-stream-recording-without-transcoding",
  title: _jsx(_Fragment, {
    children: "Single-stream recording without transcoding"
  })
}, {
  depth: 2,
  url: "#v3x",
  title: _jsx(_Fragment, {
    children: "v3.x"
  })
}, {
  depth: 3,
  url: "#known-issues",
  title: _jsx(_Fragment, {
    children: "Known issues"
  })
}, {
  depth: 4,
  url: "#new-feature",
  title: _jsx(_Fragment, {
    children: "New feature"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#api-changes",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#issues-fixed",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-feature-1",
  title: _jsx(_Fragment, {
    children: "New feature"
  })
}, {
  depth: 4,
  url: "#improvements-1",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-1",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-feature-2",
  title: _jsx(_Fragment, {
    children: "New feature"
  })
}, {
  depth: 4,
  url: "#issues-fixed-2",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#new-feature-3",
  title: _jsx(_Fragment, {
    children: "New feature"
  })
}, {
  depth: 4,
  url: "#issues-fixed-3",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#issue-fixed",
  title: _jsx(_Fragment, {
    children: "Issue fixed"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 5,
  url: "#channel-events",
  title: _jsx(_Fragment, {
    children: "Channel events"
  })
}, {
  depth: 5,
  url: "#statistics-events",
  title: _jsx(_Fragment, {
    children: "Statistics events"
  })
}, {
  depth: 5,
  url: "#media-events",
  title: _jsx(_Fragment, {
    children: "Media events"
  })
}, {
  depth: 4,
  url: "#improvement",
  title: _jsx(_Fragment, {
    children: "Improvement"
  })
}, {
  depth: 4,
  url: "#issues-fixed-4",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 2,
  url: "#v2x",
  title: _jsx(_Fragment, {
    children: "v2.x"
  })
}, {
  depth: 4,
  url: "#improvements-2",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#issues-fixed-5",
  title: _jsx(_Fragment, {
    children: "Issues fixed"
  })
}, {
  depth: 4,
  url: "#1-supports-monitoring-the-network-connection-status",
  title: _jsx(_Fragment, {
    children: "1. Supports monitoring the network connection status"
  })
}, {
  depth: 4,
  url: "#2-informs-the-app-of-receiving-the-first-frame",
  title: _jsx(_Fragment, {
    children: "2. Informs the app of receiving the first frame"
  })
}, {
  depth: 4,
  url: "#3-supports-monitoring-status-changes-of-the-receiving-stream",
  title: _jsx(_Fragment, {
    children: "3. Supports monitoring status changes of the receiving stream"
  })
}, {
  depth: 4,
  url: "#4-supports-the-volume-indication",
  title: _jsx(_Fragment, {
    children: "4. Supports the volume indication"
  })
}, {
  depth: 4,
  url: "#1-supports-stereo-audio-in-composite-recording-mode",
  title: _jsx(_Fragment, {
    children: "1. Supports Stereo Audio in Composite Recording Mode"
  })
}, {
  depth: 4,
  url: "#2-supports-web-video-players",
  title: _jsx(_Fragment, {
    children: "2. Supports Web Video Players"
  })
}, {
  depth: 4,
  url: "#3-supports-custom-background-images-in-composite-recording-mode",
  title: _jsx(_Fragment, {
    children: "3. Supports Custom Background Images in Composite Recording Mode"
  })
}, {
  depth: 4,
  url: "#4-adds-two-pre-defined-layout-templates-to-the-sample-code",
  title: _jsx(_Fragment, {
    children: "4. Adds Two Pre-defined Layout Templates to the Sample Code"
  })
}, {
  depth: 5,
  url: "#best-fit-bestfit",
  title: _jsx(_Fragment, {
    children: "Best Fit (bestFit)"
  })
}, {
  depth: 6,
  url: "#vertical-presentationverticalpresentation",
  title: _jsx(_Fragment, {
    children: "Vertical Presentation（verticalPresentation）"
  })
}, {
  depth: 4,
  url: "#5-screenshots-in-composite-recording-mode",
  title: _jsx(_Fragment, {
    children: "5. Screenshots in Composite Recording Mode"
  })
}, {
  depth: 4,
  url: "#6-speaker-detection",
  title: _jsx(_Fragment, {
    children: "6. Speaker Detection"
  })
}, {
  depth: 2,
  url: "#v1x",
  title: _jsx(_Fragment, {
    children: "v1.x"
  })
}, {
  depth: 2,
  url: "#v4x-1",
  title: _jsx(_Fragment, {
    children: "v4.x"
  })
}, {
  depth: 4,
  url: "#compatibility-changes",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New Features"
  })
}, {
  depth: 5,
  url: "#video-frame-screenshots-1",
  title: _jsx(_Fragment, {
    children: "Video frame screenshots"
  })
}, {
  depth: 5,
  url: "#single-stream-recording-without-transcoding-1",
  title: _jsx(_Fragment, {
    children: "Single-stream recording without transcoding"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    img: "img",
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
  }, { Accordion, Accordions, CalloutContainer, CalloutDescription, _PlatformPanel, _PlatformProcessedMarker, _PlatformTabsGroup } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
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
    canonicalPlatform: "linux-cpp",
    platforms: '["linux-cpp","linux-java"]',
    showTabs: "true",
    children: [_jsxs(_PlatformPanel, {
      platform: "linux-cpp",
      children: [_jsx(_PlatformProcessedMarker, {
        groupMode: "structured",
        canonicalPlatform: "linux-cpp",
        platform: "linux-cpp"
      }), _jsxs(_components.p, {
        children: ["The On-Premise Recording SDK provides recording functionality for the Agora Realtime Communication SDK. For more information see ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/product-overview",
          children: "Product overview"
        }), "."]
      }), _jsx(_components.h2, {
        id: "v4x",
        children: "v4.x"
      }), _jsxs(_components.p, {
        children: ["With the 4.x release, the On Premise Recording SDK version 3.x and earlier have entered the retirement phase. For detailed retirement schedule and migration plan, refer to ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/reference/sunset",
          children: "Service Sunset Plans"
        }), "."]
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v4.4.151",
          id: "v44151",
          headingLevel: 3,
          value: "v44151",
          children: [_jsx(_components.p, {
            children: "Released on September 30, 2025."
          }), _jsx(_components.h4, {
            id: "new-features",
            children: "New Features"
          }), _jsx(_components.h5, {
            id: "video-frame-screenshots",
            children: "Video frame screenshots"
          }), _jsxs(_components.p, {
            children: ["This release adds the video frame screenshot feature. After initialization, call ", _jsx(_components.code, {
              children: "enableRecorderVideoFrameCapture"
            }), " to enable and configure video frame screenshots. You can then get the captured video data in callbacks of ", _jsx(_components.code, {
              children: "IRecorderVideoFrameObserver"
            }), "."]
          }), _jsxs(_components.p, {
            children: ["For implementation details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/on-premise-recording/build/customize-the-recording/local-screenshot",
              children: "Local screenshots"
            }), "."]
          }), _jsx(_components.h5, {
            id: "single-stream-recording-without-transcoding",
            children: "Single-stream recording without transcoding"
          }), _jsxs(_components.p, {
            children: ["This release adds the ", _jsx(_components.code, {
              children: "recordEncodedOnly"
            }), " parameter to ", _jsx(_components.code, {
              children: "IAgoraMediaRtcRecorder::initialize"
            }), ", enabling single-stream recording without transcoding. After you enable this parameter, the server writes remote H.264 or H.265 video data directly to MP4 files."]
          }), _jsxs(_components.p, {
            children: ["This parameter is mainly for high-concurrency recording scenarios. Use it with ", _jsx(_components.code, {
              children: "VideoSubscriptionOptions.encodedFrameOnly"
            }), " set to ", _jsx(_components.code, {
              children: "true"
            }), " to maximize concurrency."]
          }), _jsx(CalloutContainer, {
            type: "warning",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "When single-stream recording without transcoding is enabled, watermarking and composite recording are unavailable."
              })
            })
          })]
        }), _jsxs(Accordion, {
          title: "v4.4.150",
          id: "v44150",
          headingLevel: 3,
          value: "v44150",
          children: [_jsx(_components.p, {
            children: "Released on June 30, 2025."
          }), _jsx(_components.p, {
            children: "This is the first release of the On-Premise Recording 4.x SDK. It includes the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Record real-time audio and video."
            }), `
`, _jsx(_components.li, {
              children: "Record audio and video content from all participants in a single channel."
            }), `
`, _jsx(_components.li, {
              children: "Record audio and video content from all participants in multiple channels simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Record audio-only content from all participants in one or more channels simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Support recording of encrypted channels using the built-in encryption of the Agora SDK."
            }), `
`]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["With this release, On-Premise Recording SDK v3.x and earlier enters the retirement phase. For the detailed retirement schedule and migration plan, refer to ", _jsx(_components.a, {
                  href: "/en/realtime-media/on-premise-recording/reference/sunset",
                  children: "Service Sunset Plans"
                }), "."]
              })
            })
          })]
        })]
      }), _jsx(_components.h2, {
        id: "v3x",
        children: "v3.x"
      }), _jsx(_components.h3, {
        id: "known-issues",
        children: "Known issues"
      }), _jsxs(_components.ul, {
        children: [`
`, _jsx(_components.li, {
          children: "When you record using an Android client, the image is turned upside down when you switch from a front-facing camera to a rear one."
        }), `
`, _jsxs(_components.li, {
          children: ["If the user calls the ", _jsx(_components.code, {
            children: "leaveChannel"
          }), " method in the channel to stop recording, the recording file ends with a period of silence determined by the ", _jsx(_components.code, {
            children: "idleLimitSec"
          }), " field set for the configuration when calling the ", _jsx(_components.code, {
            children: "joinChannel"
          }), " method."]
        }), `
`, _jsx(_components.li, {
          children: "The recorded voice or video files are not encrypted. To be compliant with HIPAA, encrypt the disk with a disk encryption tool, such as cryptsetup."
        }), `
`]
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v3.0.6",
          id: "v306",
          headingLevel: 3,
          value: "v306",
          children: [_jsx(_components.p, {
            children: "v3.0.6 was released on May 18, 2021."
          }), _jsx(_components.h4, {
            id: "new-feature",
            children: "New feature"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "AES-GCM encryption"
            })
          }), _jsxs(_components.p, {
            children: ["For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in ", _jsx(_components.code, {
              children: "decryptionMode"
            }), ":"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: '"aes-128-gcm"'
              }), ": 128-bit AES encryption, GCM mode."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: '"aes-256-gcm"'
              }), ": 256-bit AES encryption, GCM mode."]
            }), `
`]
          }), _jsx(_components.p, {
            children: "Once you enable the built-in encryption, all users in the same channel must use the same encryption mode and key."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "MP3 format in composite recording mode"
            })
          }), _jsxs(_components.p, {
            children: ["v3.0.6 adds ", _jsx(_components.code, {
              children: "Audio_Only_Record"
            }), " and ", _jsx(_components.code, {
              children: "Secondary_Recorder"
            }), " in ", _jsx(_components.code, {
              children: "cfgFilePath"
            }), " to get a MP3 file after a composite recording. See ", _jsx(_components.a, {
              href: "/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode",
              children: "Record a Call"
            }), " and ", _jsx(_components.a, {
              href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/structagora_1_1recording_1_1_recording_config.html#afd78b4f136e4deeaf310061606e7bc62",
              children: "cfgFilePath"
            }), " for details."]
          }), _jsx(_components.h4, {
            id: "improvements",
            children: "Improvements"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["You can set the sample rate of the raw audio data in PCM format (", _jsx(_components.code, {
                  children: "getAudioFrame"
                }), " is 2 or 3) through the ", _jsx(_components.code, {
                  children: "cfgFilePath"
                }), " parameter. See ", _jsx(_components.a, {
                  href: "/en/realtime-media/on-premise-recording/build/record-audio-and-video/composite-mode",
                  children: "Record a Call"
                }), " for details."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["Optimize the sensitivity and accuracy of ", _jsx(_components.code, {
                  children: "onActiveSpeaker"
                }), " and ", _jsx(_components.code, {
                  children: "onAudioVolumeIndication"
                }), " callbacks."]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: ["You can call ", _jsx(_components.a, {
                  href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/structagora_1_1recording_1_1_recording_config.html#a9912a5fc16b3f0737290c618846d76a7",
                  children: "mixedVideoAudio"
                }), " to get a MP4 file after a composite recording or an individual recording without transcoding."]
              }), `
`, _jsxs(_components.table, {
                children: [_jsx(_components.thead, {
                  children: _jsxs(_components.tr, {
                    children: [_jsx(_components.th, {
                      style: {
                        textAlign: "left"
                      },
                      children: "Earlier than v3.0.6"
                    }), _jsx(_components.th, {
                      style: {
                        textAlign: "left"
                      },
                      children: "v3.0.6 or later"
                    })]
                  })
                }), _jsx(_components.tbody, {
                  children: _jsxs(_components.tr, {
                    children: [_jsx(_components.td, {
                      style: {
                        textAlign: "left"
                      },
                      children: "Generates video files in TS format during the recording. When the recording ends, you can use the transcoding script to convert the TS file to MP4 format."
                    }), _jsx(_components.td, {
                      style: {
                        textAlign: "left"
                      },
                      children: "Generates video files in TS format and MP4 format during the recording."
                    })]
                  })
                })]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "api-changes",
            children: "API changes"
          }), _jsxs(_components.p, {
            children: ["Adds enumerators for ", _jsx(_components.code, {
              children: "MIXED_AV_CODEC_TYPE"
            }), `：
`, _jsx(_components.code, {
              children: "AV_CODEC_INDIVIDUAL_TS_ONLY"
            }), `: Generates video files in TS format, and audio files in AAC format in the individual recording mode.
`, _jsx(_components.code, {
              children: "AV_CODEC_INDIVIDUAL_TS_AND_MP4"
            }), `: Generates video files in TS format and MP4 format, and audio files in AAC format in the individual recording mode.
`, _jsx(_components.code, {
              children: "AV_CODEC_MIXED_TS_ONLY"
            }), `: Mixes the audio and video in real time into an TS file in the composite recording mode.
`, _jsx(_components.code, {
              children: "AV_CODEC_MIXED_TS_AND_MP4"
            }), ": Mixes the audio and video in real time into an TS file and an MP4 file in the composite recording mode."]
          }), _jsx(_components.h4, {
            id: "issues-fixed",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "Fix the issue that the transcoding script does not support UIDs with underscores, resulting in parsing errors."
          })]
        }), _jsxs(Accordion, {
          title: "v3.0.5",
          id: "v305",
          headingLevel: 3,
          value: "v305",
          children: [_jsx(_components.p, {
            children: "v3.0.5 was released on January 13, 2021."
          }), _jsx(_components.h4, {
            id: "new-feature-1",
            children: "New feature"
          }), _jsxs(_components.p, {
            children: ["This release adds ", _jsx(_components.code, {
              children: "VIDEO_JPG_FILE"
            }), " in ", _jsx(_components.code, {
              children: "VIDEO_FRAME_TYPE"
            }), " to get video data in JPG file format."]
          }), _jsx(_components.h4, {
            id: "improvements-1",
            children: "Improvements"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "To enable faster playback of the MP4 file generated from the recording, this release moves the moov atom to the start of the MP4 file, which allows for playback of the file during buffering."
            }), `
`, _jsx(_components.li, {
              children: "This release removes the restriction that you cannot get the raw audio data and raw video data at the same time from an individual recording session."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "issues-fixed-1",
            children: "Issues fixed"
          }), _jsx(_components.p, {
            children: "This release fixed the following issues:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The captured screenshots in JPG format had rotation information missing when the video decoding format was set as ", _jsx(_components.code, {
                children: "VIDEO_FORMAT_JPG_VIDEO_FILE_TYPE"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Crashes when calling the ", _jsx(_components.code, {
                children: "leaveChannel"
              }), " method to leave a channel."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v3.0.4",
          id: "v304",
          headingLevel: 3,
          value: "v304",
          children: [_jsx(_components.p, {
            children: "v3.0.4 was released on November 25, 2020."
          }), _jsx(_components.h4, {
            id: "new-feature-2",
            children: "New feature"
          }), _jsxs(_components.p, {
            children: ["v3.0.4 adds ", _jsx(_components.code, {
              children: "Chunk_Time_Span"
            }), " in ", _jsx(_components.code, {
              children: "cfgFilePath"
            }), "  to set time interval between two successive recorded files in individual recording mode of a live interactive streaming channel."]
          }), _jsx(_components.h4, {
            id: "issues-fixed-2",
            children: "Issues fixed"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "When a host repeatedly joins and leaves a channel, the physical memory consumption of the recording server increased significantly."
            }), `
`, _jsxs(_components.li, {
              children: ["Calling ", _jsx(_components.code, {
                children: "OnActiveSpeaker"
              }), " cannot get the corresponding callback."]
            }), `
`, _jsxs(_components.li, {
              children: ["Calling ", _jsx(_components.code, {
                children: "OnAudioVolumeIndication"
              }), " cannot get the corresponding callback."]
            }), `
`, _jsxs(_components.li, {
              children: ["Calling the Java API ", _jsx(_components.code, {
                children: "setUserBackground"
              }), " caused the recording service to crash."]
            }), `
`, _jsx(_components.li, {
              children: "Failure to merge videos shorter than 0.02 s by using the transcoding script after the recording finishes."
            }), `
`, _jsxs(_components.li, {
              children: ["In composite recording mode, failure to output stereo audio by setting ", _jsx(_components.code, {
                children: "audioProfile"
              }), " as ", _jsx(_components.code, {
                children: "2"
              }), "."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v3.0.3",
          id: "v303",
          headingLevel: 3,
          value: "v303",
          children: [_jsx(_components.p, {
            children: "v3.0.3 was released on September 17, 2020."
          }), _jsx(_components.h4, {
            id: "new-feature-3",
            children: "New feature"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Repair of recording files after crashes"
            })
          }), _jsx(_components.p, {
            children: "Before v3.0.3, the MP4 files generated after a recording might not be playable due to recording crashes. To solve this issue, as of v3.0.3, the Agora Recording SDK provides the following solutions:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "The SDK generates video files in TS format during the recording. When the recording ends, the SDK automatically converts the TS files to MP4 format. Even if occasional crashes occur during the recording, the MP4 files can still be played."
            }), `
`, _jsxs(_components.li, {
              children: ["The SDK adds the ", _jsx(_components.code, {
                children: "crash_restore.sh"
              }), " script. If the recording service quits abnormally after multiple crashes, you can run the script to convert the TS files to MP4 files and repair the incomplete ", _jsx(_components.code, {
                children: "uid_UID_timestamp.txt"
              }), " files."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v3.0.2",
          id: "v302",
          headingLevel: 3,
          value: "v302",
          children: [_jsx(_components.p, {
            children: "v3.0.2 was released on July 15, 2020."
          }), _jsx(_components.h4, {
            id: "issues-fixed-3",
            children: "Issues fixed"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Timestamps occasionally overflow in ", _jsx(_components.code, {
                children: "uid_UID_timestamp.txt"
              }), "."]
            }), `
`, _jsx(_components.li, {
              children: "Characters are garbled and contents lost when a line of text becomes too long in a log file."
            }), `
`, _jsx(_components.li, {
              children: "MP4 files generated from a composite recording session cannot be played via Windows Media Player."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v3.0.1",
          id: "v301",
          headingLevel: 3,
          value: "v301",
          children: [_jsx(_components.p, {
            children: "v3.0.1 was released on March 16, 2020."
          }), _jsx(_components.h4, {
            id: "issue-fixed",
            children: "Issue fixed"
          }), _jsx(_components.p, {
            children: "Recorded files from an individual recording session have an incorrect timestamp in their names."
          })]
        }), _jsxs(Accordion, {
          title: "v3.0.0",
          id: "v300",
          headingLevel: 3,
          value: "v300",
          children: [_jsx(_components.p, {
            children: "v3.0.0 was released on February 20, 2020."
          }), _jsx(_components.h4, {
            id: "new-features-1",
            children: "New features"
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "1. Watermarks"
            })
          }), _jsx(_components.p, {
            children: "Supports adding image watermarks, text watermarks, or a timestamp watermark in composite recording mode."
          }), _jsxs(_components.p, {
            children: ["You can either configure watermark settings in the ", _jsx(_components.code, {
              children: "setVideoMixingLayout"
            }), " method, or add, update, and remove watermark settings with the ", _jsx(_components.code, {
              children: "updateWatermarkConfigs"
            }), " method. See ", _jsx(_components.a, {
              href: "/en/realtime-media/on-premise-recording/build/customize-the-recording/watermark",
              children: "Watermark"
            }), " for details."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "2. Selective recording"
            })
          }), _jsx(_components.p, {
            children: "Supports recording the audio or video of specified users."
          }), _jsxs(_components.p, {
            children: ["To enable selective recording when calling ", _jsx(_components.code, {
              children: "joinChannel"
            }), ":"]
          }), _jsxs(_components.ol, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Set ", _jsx(_components.code, {
                children: "autoSubscribe"
              }), " as false in ", _jsx(_components.code, {
                children: "RecordingConfig"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Set the ", _jsx(_components.code, {
                children: "subscribeVideoUids"
              }), " or ", _jsx(_components.code, {
                children: "subscribeAudioUids"
              }), " parameter in ", _jsx(_components.code, {
                children: "RecordingConfig "
              }), "to specify the users to record."]
            }), `
`]
          }), _jsxs(_components.p, {
            children: ["Afterwards, you can call ", _jsx(_components.code, {
              children: "updateSuscribeVideoUids"
            }), " or ", _jsx(_components.code, {
              children: "updateSuscribeAudioUids"
            }), " methods to update the list of uids to record."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "3. Last frame"
            })
          }), _jsx(_components.p, {
            children: "Retains the last video frame from when the user leaves the channel in composite recording mode."
          }), _jsxs(_components.p, {
            children: ["You can set the ", _jsx(_components.code, {
              children: "keepLastFrame"
            }), " parameter when calling the ", _jsx(_components.code, {
              children: "setVideoMixingLayout"
            }), " method to enable this feature."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "4. Cloud proxy"
            })
          }), _jsxs(_components.p, {
            children: ["Supports the cloud proxy service. See ", _jsx(_components.a, {
              href: "/en/realtime-media/on-premise-recording/build/connect-through-a-firewall/cloud-proxy",
              children: "Use Cloud Proxy"
            }), " for details."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "5. New callbacks"
            })
          }), _jsx(_components.h5, {
            id: "channel-events",
            children: "Channel events"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a210d1e225415eba95c8fa606ae0996ea",
                children: "onRejoinChannelSuccess"
              }), " Occurs when the recording server rejoins a channel."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a08d04dd3d5f82ca0ab9cdadff20367b0",
                children: "onConnectionStateChanged"
              }), " Occurs when the network connection state changes."]
            }), `
`]
          }), _jsx(_components.h5, {
            id: "statistics-events",
            children: "Statistics events"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a427c17ccc456444159c977aeec04a895",
                children: "onRemoteVideoStats"
              }), " Reports the statistics of the video stream from each remote user/host."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a151091f21f514baf78b005031b382f8b",
                children: "onRemoteAudioStats"
              }), " Reports the statistics of the audio stream from each remote user/host."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a870ab8a3d043f6c3910aa89121e83f33",
                children: "onRecordingStats"
              }), " Reports the statistics of the recording session."]
            }), `
`]
          }), _jsx(_components.h5, {
            id: "media-events",
            children: "Media events"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a6ba41d8f2ba7ccb06695ed6ef6037159",
                children: "onRemoteAudioStreamStateChanged"
              }), " Occurs when the state of a remote audio stream changes."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.a, {
                href: "https://api-ref.agora.io/en/on-premise-recording-sdk/linux-cpp/3.x/classagora_1_1recording_1_1_i_recording_engine_event_handler.html#a98fe264a24974fb7b6ae46d2ddce3661",
                children: "onRemoteVideoStreamStateChanged"
              }), " Occurs when the state of a remote video stream changes."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "improvement",
            children: "Improvement"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["As of v3.0.0, you can disable the keyframe request by setting the ", _jsx(_components.code, {
                children: "enableIntraRequest"
              }), " parameter in RecordingConfig. After this setting:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "All senders in the channel send the keyframe at an interval of 2 seconds."
                }), `
`, _jsx(_components.li, {
                  children: "You can play the video file recorded in individual recording mode from a specified position without the need to transcode."
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: ["As of v3.0.0, setting the recording file path in the custom configuration file is no longer mandatory. If you have specified a custom configuration file by setting ", _jsx(_components.code, {
                children: "cfgFilePath"
              }), ", you do not have to set ", _jsx(_components.code, {
                children: "Recording_Dir"
              }), " in the configuration file."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "issues-fixed-4",
            children: "Issues fixed"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "In composite recording mode, the layout of the recorded video occasionally has an extra user region."
            }), `
`, _jsx(_components.li, {
              children: "The playback speed of the recorded video is occasionally too fast."
            }), `
`, _jsx(_components.li, {
              children: "The recording service creates too many Syslogs."
            }), `
`, _jsxs(_components.li, {
              children: ["Setting the ", _jsx(_components.code, {
                children: "alpha"
              }), " parameter in the method call of ", _jsx(_components.code, {
                children: "setVideoMixingLayout"
              }), " causes the recording service to crash."]
            }), `
`, _jsx(_components.li, {
              children: "The recording service cannot record the specified uids if you set the server to record audio only, or to record video only."
            }), `
`, _jsxs(_components.li, {
              children: ["The information reported by the ", _jsx(_components.code, {
                children: "onRemoteAudioStreamStateChanged"
              }), " and ", _jsx(_components.code, {
                children: "onRemoteVideoStreamStateChanged"
              }), " callbacks is inaccurate under poor network conditions."]
            }), `
`, _jsx(_components.li, {
              children: "The recorded audio is occasionally extended."
            }), `
`, _jsx(_components.li, {
              children: "A black frame appears at the beginning of a video in composite recording mode."
            }), `
`]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "v2x",
        children: "v2.x"
      }), _jsx(CalloutContainer, {
        type: "info",
        children: _jsx(CalloutDescription, {
          children: _jsx(_components.p, {
            children: "The Agora On-Premise Recording SDK supports both Java and C++ from v2.2.0."
          })
        })
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v2.3.4",
          id: "v234",
          headingLevel: 3,
          value: "v234",
          children: [_jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["As of December 8, 2021, Agora begins implementing the retirement process for the On-Premise Recording SDK earlier than v3.0.0. See ", _jsx(_components.a, {
                  href: "/en/realtime-media/on-premise-recording/reference/sunset",
                  children: "Service Sunset Plans for On-Premise Recording"
                }), "."]
              })
            })
          }), _jsx(_components.p, {
            children: "v2.3.4 was released on August 5, 2019."
          }), _jsx(_components.h4, {
            id: "improvements-2",
            children: "Improvements"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The following private Java API methods are now public:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["The ", _jsx(_components.code, {
                    children: "setUserBackground"
                  }), " method which sets the background image of a specified user. When the user is online but does not send any video stream, the background image is displayed."]
                }), `
`, _jsxs(_components.li, {
                  children: ["The ", _jsx(_components.code, {
                    children: "setLogLevel"
                  }), " method which sets the logging level. The SDK generates logs in the selected level and in the levels preceding the selected level."]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.li, {
              children: "Improves the robustness of Java API methods."
            }), `
`, _jsx(_components.li, {
              children: "Enhances the SDK's ability to collect the information of abnormal crashes."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "issues-fixed-5",
            children: "Issues fixed"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "File splitting in composite recording mode caused by switching channel profiles."
            }), `
`, _jsx(_components.li, {
              children: "Failure to only record audio in composite recording mode in the Live Broadcast profile."
            }), `
`, _jsx(_components.li, {
              children: "Libyuv crashes."
            }), `
`, _jsxs(_components.li, {
              children: ["Crashes when calling the ", _jsx(_components.code, {
                children: "leaveChannel"
              }), " method to leave a channel."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.3.3",
          id: "v233",
          headingLevel: 3,
          value: "v233",
          children: [_jsx(_components.p, {
            children: "v2.3.3 was released on April 1, 2019."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "New features"
            })
          }), _jsx(_components.h4, {
            id: "1-supports-monitoring-the-network-connection-status",
            children: "1. Supports monitoring the network connection status"
          }), _jsx(_components.p, {
            children: "v2.3.3 adds the following callbacks to inform the app of the connection status between the recording SDK and Agora's edge server:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onConnectionLost"
              }), ": Informs that the SDK loses connection to the server."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onConnectionInterrupted"
              }), ": Informs that the connection between the SDK and the server is interrupted."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "2-informs-the-app-of-receiving-the-first-frame",
            children: "2. Informs the app of receiving the first frame"
          }), _jsx(_components.p, {
            children: "v2.3.3 adds the following callbacks to inform the app of receiving the first remote audio or video frame:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onFirstRemoteAudioFrame"
              }), ": Informs that the first remote audio frame is received."]
            }), `
`, _jsxs(_components.li, {
              children: [_jsx(_components.code, {
                children: "onFirstRemoteVideoDecoded"
              }), ": Informs that the first remote video frame is decoded."]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "3-supports-monitoring-status-changes-of-the-receiving-stream",
            children: "3. Supports monitoring status changes of the receiving stream"
          }), _jsxs(_components.p, {
            children: ["v2.3.3 adds the ", _jsx(_components.code, {
              children: "onReceivingStreamStatusChanged"
            }), " callback to get status changes of the receiving audio or video stream."]
          }), _jsx(_components.h4, {
            id: "4-supports-the-volume-indication",
            children: "4. Supports the volume indication"
          }), _jsxs(_components.p, {
            children: ["v2.3.3 adds the ", _jsx(_components.code, {
              children: "onAudioVolumeIndication"
            }), " callback to get the list of users who are speaking and their volumes."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issues fixed"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Fails to run the transcoding script when the recording SDK exits the channel and then enters the channel again in manual mode."
            }), `
`, _jsxs(_components.li, {
              children: ["Occasional crashes when using invalid parameters in the ", _jsx(_components.code, {
                children: "mixedVideoAudio"
              }), " method."]
            }), `
`, _jsx(_components.li, {
              children: "Freezes in HD video recordings."
            }), `
`, _jsx(_components.li, {
              children: "Setting the recording video frame rate does not take effect."
            }), `
`, _jsx(_components.li, {
              children: "Occasional crashes when compiling the recording Java sample code in Manual Mode."
            }), `
`, _jsxs(_components.li, {
              children: ["Fails to run the transcoding command ", _jsx(_components.code, {
                children: "-f . -m 3"
              }), "."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.3.0",
          id: "v230",
          headingLevel: 3,
          value: "v230",
          children: [_jsx(_components.p, {
            children: "v2.3.0 was released on January 14, 2019."
          }), _jsxs(_components.blockquote, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The calculation of the usage of the On-Premise Recording SDK v2.3.0 or later is separated from that of the Agora Voice Call/Interactive Audio Streaming SDK and the Agora Video Call/Interactive Video Streaming SDK. Contact ", _jsx(_components.a, {
                href: "mailto:support@agora.io",
                children: "support@agora.io"
              }), " for details."]
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "New features"
            })
          }), _jsx(_components.h4, {
            id: "1-supports-stereo-audio-in-composite-recording-mode",
            children: "1. Supports Stereo Audio in Composite Recording Mode"
          }), _jsx(_components.p, {
            children: "v2.3.0 supports high audio quality (a sample rate of 48 kHz, stereo, and a bitrate of up to 192 Kbps) in Composite Recording Mode."
          }), _jsxs(_components.blockquote, {
            children: [`
`, _jsx(_components.p, {
              children: "Stereo is not applicable to raw data."
            }), `
`]
          }), _jsxs(_components.p, {
            children: [_jsx(_components.code, {
              children: "audio profile"
            }), " can be set as ", _jsx(_components.code, {
              children: "0"
            }), " or ", _jsx(_components.code, {
              children: "1"
            }), ":"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Individual recording (file mode):", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["By default or set ", _jsx(_components.code, {
                    children: "audio profile=0"
                  }), ": A sample rate of 48 kHz, the same number of audio channels as the original audio, and an adaptive bitrate."]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: ["Individual recording (raw data):", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["The sample rate is fixed at 48 kHz and the number of audio channels is the same as the original audio:", `
`, _jsxs(_components.ul, {
                    children: [`
`, _jsx(_components.li, {
                      children: "PCM: The bitrate may change."
                    }), `
`, _jsx(_components.li, {
                      children: "AAC: The bitrate is the same as in the file mode."
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
              children: ["Composite recording (file mode):", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "audio profile=0"
                  }), ": A sample rate of 48 kHz, mono, and a bitrate of 48 Kbps"]
                }), `
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "audio profile=1"
                  }), ": A sample rate of 48 kHz, mono, and a bitrate of 128 Kbps"]
                }), `
`, _jsxs(_components.li, {
                  children: [_jsx(_components.code, {
                    children: "audio profile=2"
                  }), ": A sample rate of 48 kHz, stereo, and a bitrate of 192 Kbps"]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: ["Composite recording (raw data):", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "A fixed sample rate of 48 kHz and mono."
                }), `
`]
              }), `
`]
            }), `
`]
          }), _jsx(_components.h4, {
            id: "2-supports-web-video-players",
            children: "2. Supports Web Video Players"
          }), _jsx(_components.p, {
            children: "Video files transcoded in real time or transcoded by the transcoding script can be played by web browsers on Android, iOS/macOS, and Windows. The following is a list of compatible web browsers on each platform."
          }), _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  children: "Platform"
                }), _jsx(_components.th, {
                  children: "Chrome"
                }), _jsx(_components.th, {
                  children: "Safari"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Android"
                }), _jsx(_components.td, {
                  children: "Chrome 49+"
                }), _jsx(_components.td, {
                  children: "N/A"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "iOS"
                }), _jsx(_components.td, {
                  children: "✘"
                }), _jsx(_components.td, {
                  children: "Safari 9+"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "macOS 10+"
                }), _jsx(_components.td, {
                  children: "Chrome 47+"
                }), _jsx(_components.td, {
                  children: "Safari 11+"
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Windows"
                }), _jsx(_components.td, {
                  children: "Chrome 49+"
                }), _jsx(_components.td, {
                  children: "N/A"
                })]
              })]
            })]
          }), _jsx(_components.h4, {
            id: "3-supports-custom-background-images-in-composite-recording-mode",
            children: "3. Supports Custom Background Images in Composite Recording Mode"
          }), _jsx(_components.p, {
            children: "v2.3.0 adds the function for users to add a background image while recording audio in Composite Recording Mode. A custom image is used for any user who does not have video while recording video in Composite Recording Mode."
          }), _jsxs(_components.blockquote, {
            children: [`
`, _jsx(_components.p, {
              children: "This function is not applicable to raw data and screenshots."
            }), `
`]
          }), _jsx(_components.h4, {
            id: "4-adds-two-pre-defined-layout-templates-to-the-sample-code",
            children: "4. Adds Two Pre-defined Layout Templates to the Sample Code"
          }), _jsx(_components.p, {
            children: "v2.3.0 provides two pre-defined layout templates for composite recording to make the On-Premise Recording SDK sample code easier to use."
          }), _jsx(_components.h5, {
            id: "best-fit-bestfit",
            children: "Best Fit (bestFit)"
          }), _jsxs(_components.p, {
            children: ["v2.3.0 adds ", _jsx(_components.code, {
              children: "bestFit"
            }), " as the default layout supporting up to 17 video streams."]
          }), _jsx(_components.p, {
            children: "This layout automatically scales according to the number of video streams. The number of columns and rows varies depending on the number of video streams. For example:"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1542680053900",
              alt: ""
            })
          }), _jsx(_components.h6, {
            id: "vertical-presentationverticalpresentation",
            children: "Vertical Presentation（verticalPresentation）"
          }), _jsx(_components.p, {
            children: "v2.3.0 adds the function to display a specified user's video in a large window on the left of the screen, while displaying the other users' videos in small windows arranged vertically on the right. At most, two columns with eight video windows in each column are supported."
          }), _jsx(_components.p, {
            children: "For example:"
          }), _jsx(_components.p, {
            children: _jsx(_components.img, {
              src: "https://web-cdn.agora.io/docs-files/1542680070362",
              alt: ""
            })
          }), _jsx(_components.h4, {
            id: "5-screenshots-in-composite-recording-mode",
            children: "5. Screenshots in Composite Recording Mode"
          }), _jsx(_components.p, {
            children: "v2.3.0 adds the function to capture the screen of every user while recording video in Composite Recording Mode. Recording and screen capturing use the same video stream."
          }), _jsx(_components.h4, {
            id: "6-speaker-detection",
            children: "6. Speaker Detection"
          }), _jsxs(_components.p, {
            children: ["v2.3.0 adds the ", _jsx(_components.code, {
              children: "onActiveSpeaker"
            }), " callback to return the UID of the active speaker in the channel."]
          }), _jsxs(_components.p, {
            children: ["This function is disabled by default and can be enabled by setting the ", _jsx(_components.code, {
              children: "audioIndicationInterval"
            }), " parameter in ", _jsx(_components.code, {
              children: "RecordingConfig"
            }), ". The On-Premise Recording SDK returns the ", _jsx(_components.code, {
              children: "onActiveSpeaker"
            }), " callback at set intervals."]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Improvements"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Improves audio and video synchronization in Individual Recording Mode."
            }), `
`, _jsx(_components.li, {
              children: "Supports automatic rotation of recorded video streams that are not transcoded in real time in Individual Recording Mode."
            }), `
`, _jsxs(_components.li, {
              children: ["Changed the idle behavior in Manual Mode:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsx(_components.li, {
                  children: "For versions earlier than v2.3.0 in Manual Mode, the idle mechanism takes effect immediately after joining a channel, which might cause the recording SDK to exit the channel."
                }), `
`, _jsxs(_components.li, {
                  children: ["For v2.3.0 or later, the idle mechanism does not take effect until the ", _jsx(_components.code, {
                    children: "startService"
                  }), " method is called."]
                }), `
`]
              }), `
`]
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the log levels and split some logs in INFO into NOTICE, WARN, and ERROR."
            }), `
`, _jsx(_components.li, {
              children: "Optimizes the naming of the recording directory to ensure the uniqueness of each folder."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.2.3",
          id: "v223",
          headingLevel: 3,
          value: "v223",
          children: [_jsx(_components.p, {
            children: "v2.2.3 was released on October 18, 2018."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issues fixed"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Coredump loss caused by .backtrace."
            }), `
`, _jsx(_components.li, {
              children: "System crashes caused by Java jni. and optimize stability."
            }), `
`, _jsx(_components.li, {
              children: "Transcoding script issues in Manual Mode."
            }), `
`, _jsx(_components.li, {
              children: "The recording video file splits into two files after a web client joins the channel."
            }), `
`, _jsx(_components.li, {
              children: "Occasional system crashes caused by the subthread being active after the main thread is released."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.2.2",
          id: "v222",
          headingLevel: 3,
          value: "v222",
          children: [_jsx(_components.p, {
            children: "v2.2.2 was released on August 1, 2018."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Improvements"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["The screenshots are named ", _jsx(_components.code, {
                children: "uidYmdHMSms.jpg"
              }), " instead of ", _jsx(_components.code, {
                children: "uidYmdHMS.jpg"
              }), "."]
            }), `
`, _jsx(_components.li, {
              children: "The transcoding script supports autorotation."
            }), `
`, _jsx(_components.li, {
              children: "The structure of the Java folder is modified."
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issues fixed"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Abnormal webm recording times."
            }), `
`, _jsx(_components.li, {
              children: "Memory leaks."
            }), `
`, _jsx(_components.li, {
              children: "Multi-party intercommunication issues."
            }), `
`, _jsx(_components.li, {
              children: "H.264 parser issues."
            }), `
`, _jsx(_components.li, {
              children: "Audio and video out of sync."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.2.1",
          id: "v221",
          headingLevel: 3,
          value: "v221",
          children: [_jsx(_components.p, {
            children: "v2.2.1 was released on June 5, 2018."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Improvements"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Improves the performance of the Communication profile. The number of recording channels that a system supports with the same performance increases by 150%."
            }), `
`, _jsx(_components.li, {
              children: "Improves the efficiency to find the port. The time to find the port is no longer part of the idle time."
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issues fixed"
            })
          }), _jsx(_components.p, {
            children: "Port conflicts when the search for the port takes too long and exceeds the idle time. As a result, the port is not connected."
          })]
        }), _jsxs(Accordion, {
          title: "v2.2.0",
          id: "v220",
          headingLevel: 3,
          value: "v220",
          children: [_jsx(_components.p, {
            children: "v2.2.0 was released on May 4, 2018."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "New features"
            })
          }), _jsxs(_components.blockquote, {
            children: [`
`, _jsx(_components.p, {
              children: "Support for both Java and C++."
            }), `
`]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issues fixed"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Issues of oversized logs."
            }), `
`, _jsx(_components.li, {
              children: "Abnormal issues when recording fast-forward videos."
            }), `
`, _jsx(_components.li, {
              children: "Intermittent failures."
            }), `
`, _jsx(_components.li, {
              children: "Performance issues."
            }), `
`, _jsx(_components.li, {
              children: "Some crash issues."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.1.0",
          id: "v210",
          headingLevel: 3,
          value: "v210",
          children: [_jsx(_components.p, {
            children: "v2.1.0 was released on March 7, 2018."
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "New features"
            })
          }), _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  children: "Function"
                }), _jsx(_components.th, {
                  children: "Description"
                })]
              })
            }), _jsxs(_components.tbody, {
              children: [_jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Recording Mode"
                }), _jsx(_components.td, {
                  children: "Supports selecting auto or manual mode when joining a channel to flexibly control the recording."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Control Recording"
                }), _jsx(_components.td, {
                  children: "Adds interfaces to unbind the operations of joining a channel and recording. If the auto recording mode is used, the recording starts when a user joins the channel. If the manual recording mode is used, you can control when to start and stop the recording."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Mix Raw Audio"
                }), _jsx(_components.td, {
                  children: "Supports the function of mixing raw audio data."
                })]
              }), _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Java Recording API"
                }), _jsx(_components.td, {
                  children: "Supports Java APIs for recording."
                })]
              })]
            })]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Improvements"
            })
          }), _jsxs(_components.table, {
            children: [_jsx(_components.thead, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.th, {
                  children: "Improvement"
                }), _jsx(_components.th, {
                  children: "Description"
                })]
              })
            }), _jsx(_components.tbody, {
              children: _jsxs(_components.tr, {
                children: [_jsx(_components.td, {
                  children: "Transcoding Script"
                }), _jsx(_components.td, {
                  children: "Supports setting the transcoding frame rate and resolution, either in picture-in-picture or single-stream mode."
                })]
              })
            })]
          }), _jsx(_components.p, {
            children: _jsx(_components.strong, {
              children: "Issues fixed"
            })
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Occasional recording file transcoding failures."
            }), `
`, _jsx(_components.li, {
              children: "The video screen occasionally turns upside down."
            }), `
`, _jsx(_components.li, {
              children: "Occasional abnormal audio during recording."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v2.0.0",
          id: "v200",
          headingLevel: 3,
          value: "v200",
          children: [_jsx(_components.p, {
            children: "v2.0 was released on November 21, 2017."
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Optimizes the raw data to support various formats:", `
`, _jsxs(_components.ul, {
                children: [`
`, _jsxs(_components.li, {
                  children: ["Modifies the ", _jsx(_components.code, {
                    children: "decodeAudio"
                  }), " and ", _jsx(_components.code, {
                    children: "decodeVideo"
                  }), " parameters, and adds the ", _jsx(_components.code, {
                    children: "VideoJpgFrame"
                  }), " struct."]
                }), `
`, _jsxs(_components.li, {
                  children: ["Modifies the ", _jsx(_components.code, {
                    children: "getAudioFrame"
                  }), " and ", _jsx(_components.code, {
                    children: "getVideoFrame"
                  }), " parameters."]
                }), `
`]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "captureInterval"
              }), " parameter to set the time interval of capturing screenshots."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "streamType"
              }), " parameter to support different video stream types."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "isVideoOnly"
              }), " parameter."]
            }), `
`, _jsx(_components.li, {
              children: "The transcoding scripts, once used, generate a convert.log file under the same path as the voice/video file."
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the video rotating information in ", _jsx(_components.code, {
                children: "UID_HHMMSSMS.txt"
              }), "."]
            }), `
`]
          })]
        })]
      }), _jsx(_components.h2, {
        id: "v1x",
        children: "v1.x"
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v1.3.0",
          id: "v130",
          headingLevel: 3,
          value: "v130",
          children: [_jsx(_components.p, {
            children: "v1.3 was released on October 20, 2017."
          }), _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "New features"
            }), ":"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: ["Adds mixing the audio and video recording functions by adding the ", _jsx(_components.code, {
                children: "mixedVideoAudio"
              }), " and ", _jsx(_components.code, {
                children: "cfgFilePath"
              }), " parameters in the ", _jsx(_components.code, {
                children: "joinChannel"
              }), " method."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the function of merging the audio and video file of the same uid as one, see ", _jsx(_components.a, {
                href: "/en/realtime-media/cloud-recording/build/process-recorded-files/online-play",
                children: "Play the Recording Files"
              }), "."]
            }), `
`, _jsxs(_components.li, {
              children: ["Adds the ", _jsx(_components.code, {
                children: "getProperties"
              }), " method to get the recording path immediately after recording is started before joining any channel."]
            }), `
`, _jsxs(_components.li, {
              children: ["Modifies the ", _jsx(_components.code, {
                children: "onError"
              }), " and ", _jsx(_components.code, {
                children: "onLeaveChannel"
              }), " callbacks."]
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v1.2.0",
          id: "v120",
          headingLevel: 3,
          value: "v120",
          children: [_jsx(_components.p, {
            children: "v1.2 was released on August 21, 2017."
          }), _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "New features"
            }), ":"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Supports getting the audio and video raw data."
            }), `
`, _jsx(_components.li, {
              children: "Supports detecting sexually explicit content."
            }), `
`, _jsxs(_components.li, {
              children: ["Provides a ", _jsx(_components.code, {
                children: "recordingsys.log"
              }), " log file to check for failures."]
            }), `
`, _jsx(_components.li, {
              children: "Supports the recording channel timestamp, that is, the first user who starts recording in the channel."
            }), `
`]
          })]
        }), _jsxs(Accordion, {
          title: "v1.1.0",
          id: "v110",
          headingLevel: 3,
          value: "v110",
          children: [_jsx(_components.p, {
            children: "v1.1 was released on July 25, 2017."
          }), _jsxs(_components.p, {
            children: [_jsx(_components.strong, {
              children: "New features"
            }), ":"]
          }), _jsxs(_components.ul, {
            children: [`
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Adds recording at the web client."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Adds the real-time video mixing function."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Adds a set of callback functions."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Modifies the file format after transcoding."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Enables configuring the UDP port."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsxs(_components.p, {
                children: [_jsx(_components.strong, {
                  children: "Issues fixed"
                }), ":"]
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Wrong timestamps."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Transcoding failures."
              }), `
`]
            }), `
`, _jsxs(_components.li, {
              children: [`
`, _jsx(_components.p, {
                children: "Unable to playback VLC files."
              }), `
`]
            }), `
`]
          })]
        }), _jsx(Accordion, {
          title: "v1.0.1",
          id: "v101",
          headingLevel: 3,
          value: "v101",
          children: _jsx(_components.p, {
            children: "v1.0.1 was released on June 27, 2017, and fixes the crash when you set the channel profile of the recording as live broadcast."
          })
        }), _jsxs(Accordion, {
          title: "v1.0.0",
          id: "v100",
          headingLevel: 3,
          value: "v100",
          children: [_jsx(_components.p, {
            children: "v1.0.0 was released on June 15, 2017."
          }), _jsx(_components.p, {
            children: "This is the first release of the On-Premise Recording SDK with the following functions:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Communication and interactive live streaming use-cases."
            }), `
`, _jsx(_components.li, {
              children: "Recording the voice and video of all users in a channel."
            }), `
`, _jsx(_components.li, {
              children: "Recording the voice and video of all users in multiple channels simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Recording the voice of all users in a channel or in multiple channels simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Recording an encrypted channel if the application has integrated the Agora built-in encryption."
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
      }), _jsxs(_components.p, {
        children: ["The On-Premise Recording SDK provides recording functionality for the Agora Realtime Communication SDK. For more information see ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/product-overview",
          children: "Product overview"
        }), "."]
      }), _jsx(_components.h2, {
        id: "v4x-1",
        children: "v4.x"
      }), _jsxs(_components.p, {
        children: ["With the 4.x release, the On Premise Recording SDK version 3.x and earlier have entered the retirement phase. For detailed retirement schedule and migration plan, refer to ", _jsx(_components.a, {
          href: "/en/realtime-media/on-premise-recording/reference/sunset",
          children: "Service Sunset Plans"
        }), "."]
      }), _jsxs(Accordions, {
        type: "multiple",
        openFirst: true,
        children: [_jsxs(Accordion, {
          title: "v4.4.151",
          id: "v44151-1",
          headingLevel: 3,
          value: "v44151-1",
          children: [_jsx(_components.p, {
            children: "Released on September 30, 2025."
          }), _jsx(_components.h4, {
            id: "compatibility-changes",
            children: "Compatibility changes"
          }), _jsxs(_components.p, {
            children: ["This release removes the ", _jsx(_components.code, {
              children: "AgoraMediaComponentFactory"
            }), " interface class and moves the original ", _jsx(_components.code, {
              children: "createMediaRtcRecorder"
            }), " method into the ", _jsx(_components.code, {
              children: "AgoraService"
            }), " class. If you upgrade from v4.4.150 to v4.4.151, update your integration logic accordingly."]
          }), _jsx(_components.h4, {
            id: "new-features-2",
            children: "New Features"
          }), _jsx(_components.h5, {
            id: "video-frame-screenshots-1",
            children: "Video frame screenshots"
          }), _jsxs(_components.p, {
            children: ["This release adds the video frame screenshot feature. After initialization, call ", _jsx(_components.code, {
              children: "enableRecorderVideoFrameCapture"
            }), " to enable and configure video frame screenshots. You can then get the captured video data in callbacks of ", _jsx(_components.code, {
              children: "IRecorderVideoFrameObserver"
            }), "."]
          }), _jsxs(_components.p, {
            children: ["For implementation details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/on-premise-recording/build/customize-the-recording/local-screenshot",
              children: "Local screenshots"
            }), "."]
          }), _jsx(_components.h5, {
            id: "single-stream-recording-without-transcoding-1",
            children: "Single-stream recording without transcoding"
          }), _jsxs(_components.p, {
            children: ["This release adds an overloaded ", _jsx(_components.code, {
              children: "initialize"
            }), " method to ", _jsx(_components.code, {
              children: "AgoraMediaRtcRecorder"
            }), ". Use the ", _jsx(_components.code, {
              children: "recordEncodedOnly"
            }), " parameter to enable single-stream recording without transcoding. After you enable this parameter, the server writes remote H.264 or H.265 video data directly to MP4 files."]
          }), _jsxs(_components.p, {
            children: ["This parameter is mainly for high-concurrency recording scenarios. Use it with ", _jsx(_components.code, {
              children: "VideoSubscriptionOptions.encodedFrameOnly"
            }), " set to ", _jsx(_components.code, {
              children: "true"
            }), " to maximize concurrency."]
          }), _jsx(CalloutContainer, {
            type: "warning",
            children: _jsx(CalloutDescription, {
              children: _jsx(_components.p, {
                children: "When single-stream recording without transcoding is enabled, watermarking and composite recording are unavailable."
              })
            })
          })]
        }), _jsxs(Accordion, {
          title: "v4.4.150",
          id: "v44150-1",
          headingLevel: 3,
          value: "v44150-1",
          children: [_jsx(_components.p, {
            children: "Released on June 30, 2025."
          }), _jsx(_components.p, {
            children: "This is the first release of the On-Premise Recording 4.x SDK. It includes the following features:"
          }), _jsxs(_components.ul, {
            children: [`
`, _jsx(_components.li, {
              children: "Record real-time audio and video."
            }), `
`, _jsx(_components.li, {
              children: "Record audio and video content from all participants in a single channel."
            }), `
`, _jsx(_components.li, {
              children: "Record audio and video content from all participants in multiple channels simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Record audio-only content from all participants in one or more channels simultaneously."
            }), `
`, _jsx(_components.li, {
              children: "Support recording of encrypted channels using the built-in encryption of the Agora SDK."
            }), `
`]
          }), _jsx(CalloutContainer, {
            type: "info",
            children: _jsx(CalloutDescription, {
              children: _jsxs(_components.p, {
                children: ["With this release, On-Premise Recording SDK v3.x and earlier enters the retirement phase. For the detailed retirement schedule and migration plan, refer to ", _jsx(_components.a, {
                  href: "/en/realtime-media/on-premise-recording/reference/sunset",
                  children: "Service Sunset Plans"
                }), "."]
              })
            })
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
