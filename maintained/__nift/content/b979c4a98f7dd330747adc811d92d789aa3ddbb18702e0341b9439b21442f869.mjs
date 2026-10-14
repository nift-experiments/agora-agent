import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Release notes",
  description: "New features, improvements and resolved issues for Cloud Recording."
};
export let _markdown = `

Agora Cloud Recording is an add-on service to record and save video calls, voice calls, and interactive streaming to
your cloud storage.

Agora Cloud Recording is compatible with RTC SDK for:

* Android, iOS, macOS, and Windows - v1.7.0 or later
* Web - v1.12 or later

This page provides the release notes for:

* [Cloud Recording](#cloud-recording)
* [Notifications](#notifications)

<a id="cloud-recording" />

## Cloud Recording [#cloud-recording]

<Accordions type="multiple">
  <Accordion title="2025.06.27" id="20250627" headingLevel="3" value="20250627">
    #### New features [#new-features]

    * **Support for self-built S3 compatible cloud storage services**

      This version adds support for self-built S3 compatible cloud storage services. When calling the \`acquire\` and \`start\` interfaces, you can specify a S3 compatible cloud storage by setting \`vendor\` to \`11\`. Specify the domain name of your cloud storage using the \`endpoint\` parameter under \`extensionParams\`. Refer to the following sample configuration:

    \`\`\`json
    "storageConfig": {
        "secretKey": "xxxxx",
        "accessKey": "xxxxx",
        "bucket": "s3-digit-test",
        // highlight-start
        "vendor": 11,
        "region": 0,
        // highlight-end
        "fileNamePrefix": [
          "agora",
          "meituan",
          "test"
        ],
        "extensionParams": {
          // highlight-start
          "endpoint": "xxxxx.xxxxx.com"
          // highlight-end
        }
      }
    \`\`\`
  </Accordion>

  <Accordion title="2024.08.02" id="20240802" headingLevel="3" value="20240802">
    This release adds the following improvement:

    To improve the security of Cloud Recording, this release adds optional \`stsToken\` and \`stsExpiration\` fields to the \`storageConfig\` of the \`start\` and \`update\` requests. You need to ensure that the validity period of \`stsToken\` and \`stsExpiration\` is long enough, so that Cloud Recording can successfully upload files to a third-party cloud storage. For details, see and [API reference](../reference/rest-api/rest).
  </Accordion>

  <Accordion title="2023.07.05" id="20230705" headingLevel="3" value="20230705">
    This release adds the following improvements:

    * Adds support for the following regions of Alibaba Cloud storage:
      * \`23\`: CN\\_Nanjing
      * \`24\`: CN\\_Fuzhou
      * \`25\`: CN\\_Wulanchabu
      * \`26\`: CN\\_Northeast\\_2
      * \`27\`: CN\\_Southeast\\_7

    * Updates the Agora transcoding script to reduce background noise.
  </Accordion>

  <Accordion title="2022.11.20" id="20221120" headingLevel="3" value="20221120">
    This release adds the following improvements:

    * Improves player compatibility for MPD files generated in individual recording \`standard\` mode, see [Recording configuration](/en/api-reference/api-ref/cloud-recording).
    * Optimizes the Agora Format Converter Script for individual recording, you can refer to [Merge audio and video files](/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files) to get the latest Agora Format Converter Script.
  </Accordion>

  <Accordion title="2022.10.20" id="20221020" headingLevel="3" value="20221020">
    This release supports the postpone transcoding feature globally. You need to set the scene field to \`2\` (postpone transcoding) when calling the \`acquire\`. After setting this scene, the recording service transcodes the recorded file within 24 hours after recording to generate an MP4 file, and uploads the MP4 file to the third-party cloud storage you specify. Please note that the \`region\` of the third-party cloud storage must be consistent with the \`region\` set when calling \`acquire\`. For details, see [Individual recording](/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode).
  </Accordion>

  <Accordion title="2022.8.12" id="2022812" headingLevel="3" value="2022812">
    This release adds support for Amazon S3 in some regions. See [Cloud storage configuration](/en/realtime-media/cloud-recording/reference/region-vendor).
  </Accordion>

  <Accordion title="2022.5.20" id="2022520" headingLevel="3" value="2022520">
    This release adds the following new feature and API changes:

    **Mobile web page mode for web page recording**

    This release adds mobile web page mode for web page recording. The API changes are as follows:

    * Adds the \`mobile\` field in \`extensionServiceConfig\`. After setting \`mobile\` to \`true\`, the recording service uses the mobile web page mode to record the current web page.
    * The value range of the \`videoWidth\` and \`videoHeight\` fields in \`extensionServiceConfig\` is changed to \\[240, 1920].

    **Transcoder script for high availability mechanism**

    In composite recording mode, Agora provides a transcoder script for merging the old M3U8 file with the new M3U8 file generated after the service enables the high availability mechanism into an MP4 file. For details, see [Manage Recorded Files](/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files#server-disconnected-or-process-killed).
  </Accordion>

  <Accordion title="2022.1.20" id="2022120" headingLevel="3" value="2022120">
    #### New features [#new-features-1]

    **Individual Audio Non-transcoding Recording**

    In order to meet the diverse recording needs of users, this release adds the [\`streamMode\`](/en/realtime-media/cloud-recording/reference/stream-mode) parameter in the \`start\` method to support [Individual Audio Non-transcoding Recording](/en/realtime-media/cloud-recording/build/start-a-recording/individual-nontranscoding).

    **Postpone Audio Mixing**
    For voice chat use-cases, this release adds the [\`appsCollection\`](/en/api-reference/api-ref/cloud-recording) and [\`transcodeOptions\`](/en/api-reference/api-ref/cloud-recording) parameters in the \`start\` method to support [Postpone Audio Mixing](/en/api-reference/api-ref/cloud-recording/start). If you enable this function, the recording service merges and transcodes the recorded files of all user IDs in the specified channel within 24 hours after the recording ends to generate an MP3/M4A/AAC file, and then uploads the recording file to your specified third-party cloud storage.

    **A Combined audio and video file after individual recording**

    When calling \`start\`, set the \`streamMode\` field of the [\`recordingConfig\`](/en/api-reference/api-ref/cloud-recording) parameter to \`standard\`, you can get a M3U8 audio index file, a M3U8 video index file and a combined M3U8 audio and video index file. If VP9 encoding is used on the web side, a combined MPD audio and video index file are generated.
    You can play the combined audio and video index file directly without using script. Agora recommends that you use this mode.

    **Support for the third-party cloud storage service encrypting and labeling recording files**

    This release adds the [\`extensionParams\`](/en/api-reference/api-ref/cloud-recording) field to support the third-party cloud storage service to encrypt and tag uploaded recording files. This feature is applicable to Amazon S3 and Alibaba Cloud OSS.
  </Accordion>

  <Accordion title="2021.12.09" id="20211209" headingLevel="3" value="20211209">
    #### New features [#new-features-2]

    This release adds support for Alibaba Cloud (\`vendor\` is \`2\`) in the following regions:

    * \`19\`：AP\\_Southeast\\_6
    * \`20\`：CN\\_Heyuan
    * \`21\`：CN\\_Guangzhou
    * \`22\`：CN\\_Chengdu

    For details, see [Alibaba Cloud Documentation](https://www.alibabacloud.com/help/doc-detail/31837.html).

    #### Fixed issues [#fixed-issues]

    This release fixed the following issue:

    When a composite recording started, the user to be recorded did not send streams. When the user sent streams, the user could not display the customized background image or background color after they stopped sending streams or left the channel.
  </Accordion>

  <Accordion title="2021.10.29" id="20211029" headingLevel="3" value="20211029">
    #### Compatibility [#compatibility]

    **Support for AES-GCM2 encryption**

    For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in \`recordingConfig\`:

    * \`AES_128_GCM2\` and \`AES_256_GCM2\` encryption modes in \`decryptionMode\` of \`recordingConfig\`. The new GCM encryption modes use a more secure KDF (Key Derivation Function) and support setting the key and salt.
    * The \`salt\` parameter in \`recordingConfig\` to add the salt for the \`AES_128_GCM2\` and \`AES_256_GCM2\` encryption modes.

    #### New features [#new-features-3]

    **Push media stream to the CDN during a web page recording**

    Adds support for converting the content and audio of a web page into a media stream and pushing it to the CDN during the web page recording. See the [\`start\`](/en/api-reference/api-ref/cloud-recording/start), [\`update\`](/en/api-reference/api-ref/cloud-recording/update) and [\`query\`](/en/api-reference/api-ref/cloud-recording/query) methods of the Agora Cloud Recording RESTful API for details.

    **Third-party cloud storage**

    Adds support for [Google Cloud](https://cloud.google.com/), [Huawei Cloud](https://www.huaweicloud.com/intl/en-us/) and [Baidu AI Cloud](https://intl.cloud.baidu.com/) as third-party storage platforms.

    #### Improvements [#improvements]

    **Capture screenshots**

    This release increases the range of the captureInterval of snapshotConfig (in seconds) to \\[1,3600] from \\[5,3600] when using the Cloud Recording RESTful API to take screenshots of a video stream.

    **Output video resolution**

    This release increases the upper limit of the output video resolution generated by the web page recording from 1280 x 720 to 1920 x 1080. That is, the range of the \`videoWidth\` and \`videoHeight\` parameters of the web page recording in \`extensionServiceConfig\` is changed to \\[480, 1920].

    **The estimated maximum number of subscribed users**

    To support a larger estimated maximum number of subscribed users, this release adds the following enumeration values of \`subscribeUidGroup\` in \`recordingConfig\`:

    * \`4\`: 17 to 32 user IDs
    * \`5\`: 32 to 49 user IDs
  </Accordion>

  <Accordion title="2021.09.06" id="20210906" headingLevel="3" value="20210906">
    #### Compatibility changes [#compatibility-changes]

    The new server version requirements for transcoding recorded files are as follows:

    * CentOS 7.0 and later x64
    * Ubuntu 14.04 and later x64
    * Debian 8.0 and later

    #### New features [#new-features-4]

    **Web page load timeout detection**

    In order to ensure the validity and completeness of page recording, this version supports page load timeout detection function. See [Web Page Load Timeout Detection](/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout).

    **Pause the page recording**

    This release adds the \`onhold\` parameter to the [\`start\`](/en/api-reference/api-ref/cloud-recording/start) and [\`update\`](/en/api-reference/api-ref/cloud-recording/update) methods, which is used to pause the recording when the web page recording starts or is in progress.

    **Capture screenshots and recording in a recording process**

    This release adds support for recording and taking screenshots in a recording process. Only the recording fee is charged. See [Capture Screenshots](/en/realtime-media/cloud-recording/build/start-a-recording/screen-capture).

    #### Improvements [#improvements-1]

    * [\`The web_recorder_stopped\`](../reference/rest-api-overview#71-web_recorder_stopped-web_recorder_stopped) callback adds error codes and error messages to indicate the reason for the abnormal stop of the web page recording. You can take corresponding measures based on the information.
    * The [\`update\`](/en/api-reference/api-ref/cloud-recording/update) method adds the \`webRecordingConfig\` parameter, which is used to update related parameters during a web page recording.
  </Accordion>

  <Accordion title="2021.07.30" id="20210730" headingLevel="3" value="20210730">
    This release includes the following new feature and API changes:

    **Screenshot event notification**

    This release adds the [\`recorder_snapshot_file\`](../reference/rest-api-overview#45-recorder_snapshot_file) callback，which indicates that the screenshot is captured successfully, and returns the name of the screenshot file.

    **New regions for Amazon S3 cloud storage**

    This release adds support for Amazon S3 in the following regions:

    * \`20\`: AP\\_NORTHEAST\\_3
    * \`21\`: EU\\_NORTH\\_1
    * \`22\`: ME\\_SOUTH\\_1
    * \`23\`: US\\_GOV\\_EAST\\_1
  </Accordion>

  <Accordion title="2021.07.07" id="20210707" headingLevel="3" value="20210707">
    #### New features [#new-features-5]

    This release adds \`maxVideoDuration\` to the [\`start\`](/en/api-reference/api-ref/cloud-recording/start) method to set the maximum duration of the MP4 slice file generated by the web page recording.

    #### Improvements [#improvements-2]

    When the page status is a \`404\` or \`5XX\` error, the page recording service automatically exits to avoid continuing to record the error page.

    #### Fixed issues [#fixed-issues-1]

    This release fixes an issue where audio was occasionally lost during a web page recording.
  </Accordion>

  <Accordion title="2021.06.10" id="20210610" headingLevel="3" value="20210610">
    This version was released on June 10, 2021.

    #### New features [#new-features-6]

    **Network Geofencing**

    This release adds the \`region\` parameter to the [\`acquire\`](/en/api-reference/api-ref/cloud-recording/acquire) method so you can geofence your cloud recording service. If you specify a region, the cloud recording server connects only to the Agora servers within that region. The following regions are supported:

    * Mainland China
    * Asia, excluding Mainland China
    * North America
    * Europe

    **Third-party cloud storage**

    This release adds support for Microsoft Azure as a third-party storage solution.

    #### Improvements [#improvements-3]

    This release optimizes the encoding settings for the web page recording, which reduce the bit rate without losing video quality.

    #### Fixed issues [#fixed-issues-2]

    Fixed security issues caused by vulnerabilities in Chrome V8.

    #### API changes [#api-changes]

    * Adds the \`region\` parameter in the [\`acquire\`](/en/api-reference/api-ref/cloud-recording/acquire) method.
    * Adds \`recorderStartTime\` in the [\`web_recorder_started\`](../reference/rest-api-overview#70-web_recorder_started-web_recorder_started) callback.
    * Adds the [\`web_recorder_reload\`](../reference/rest-api-overview#73-web_recorder_reload) callback.
  </Accordion>

  <Accordion title="2021.04.29" id="20210429" headingLevel="3" value="20210429">
    This version was released on April 29, 2021.

    **New features**

    #### MP4 format in composite recording mode [#mp4-format-in-composite-recording-mode]

    From this release, you can get MP4 files after a composite recording. Set \`avFileType\` as \`["hls","mp4"]\` when you call the start method, and the recording service generates MP4 files once a recording starts.

    #### AES-GCM encryption [#aes-gcm-encryption]

    For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in \`decryptionMode\`:

    * 128-bit AES encryption, GCM mode.
    * 256-bit AES encryption, GCM mode.

    Once you enable the built-in encryption, all users in the same channel must use the same encryption mode and key.

    **Improvement**

    From this release, the recording service automatically detects and resolves the occasional audio loss issue during a web page recording, which causes the recorded page to refresh. If necessary, you need to guarantee that the status of your web application remains the same before and after a refresh.

    **API changes**

    * Adds enumerators \`5\` and \`6\` for \`decryptionMode\` in the [\`start\`](/en/api-reference/api-ref/cloud-recording/start) method.
    * Adds the \`fileList\` field in the [\`uploaded\`](../reference/rest-api-overview#31-uploaded) and [\`backuped\`](../reference/rest-api-overview#32-backuped) callbacks.
  </Accordion>

  <Accordion title="2021.03.31" id="20210331" headingLevel="3" value="20210331">
    This version was released on March 31, 2021.

    **New feature**

    #### Background images [#background-images]

    In composite recording mode, you can set the background image for both the video canvas and an individual user region. You can update the background image during a recording session. See [Set the background color or background image](/en/realtime-media/cloud-recording/build/customize-the-recording/layout#set-the-background-color-or-background-image) for details.

    **Improvement**

    * Adds a retry logic for Kingsoft Cloud, in which the recording service retries if it fails to upload recorded files to Kingsoft Cloud.

    **Fixed issues**

    * Occasional file loss when uploading slice files to Tencent Cloud Object Storage (COS).
    * In a web page recording, the recording service could not render emoji.
    * When recording a static web page, the recording occasionally failed when the value of \`videoFps\` was too high.

    **API changes**

    * Adds the \`backgroundImage\`, \`defaultUserBackgroundImage\` and \`backgroundConfig\` fields in the \`transcodingConfig\` parameter of the [\`start\`](/en/api-reference/api-ref/cloud-recording/start) method.
    * Adds the \`backgroundImage\`, \`defaultUserBackgroundImage\` and \`backgroundConfig\` fields in the \`clientRequest\` parameter of the [\`updateLayout\`](/en/api-reference/api-ref/cloud-recording/update-layout) method.
    * Adds the \`fileList\` field in the [\`web_recorder_stopped\`](../reference/rest-api-overview#71-web_recorder_stopped) callback.
  </Accordion>

  <Accordion title="2021.02.05" id="20210205" headingLevel="3" value="20210205">
    This release raises the maximum resolution of video sources for [web page recording](/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode). The recorded web page can now contain video that has a resolution of up to 1920 × 1080.
  </Accordion>

  <Accordion title="2020.12.10" id="20201210" headingLevel="3" value="20201210">
    This release includes the following new feature and API changes:

    #### New feature [#new-feature]

    Adds [web page recording](/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode) mode. In this mode, the content and audio of a specified web page are recorded in a single file.

    #### API changes [#api-changes-1]

    * Adds \`web\` as a value for \`mode\` in the request URL for web page recording.
    * Adds \`scene\` as a new parameter in the \`acquire \`method for setting the application of the cloud recording resources.
    * Adds \`"web_recorder_service"\` as an extension service in the \`extensionServiceConfig\` parameter of the [\`start\`](/en/api-reference/api-ref/cloud-recording/start) method.
    * Adds the following callbacks, which report the status of web page recording:
    * [\`web_recorder_started\`](../reference/rest-api-overview#70-web_recorder_started)
    * [\`web_recorder_stopped\`](../reference/rest-api-overview#71-web_recorder_stopped)
    * [\`web_recorder_capability_limit\`](../reference/rest-api-overview#72-web_recorder_capability_limit)
  </Accordion>

  <Accordion title="2020.09.16" id="20200916" headingLevel="3" value="20200916">
    This release improved the stability and performance of the recording service, and fixed the following issues:

    * Failure to subscribe to a low-quality stream.
    * Occasional failure to record a whole call.
  </Accordion>

  <Accordion title="2020.07.21" id="20200721" headingLevel="3" value="20200721">
    This release adds the following new feature and API changes:

    **New feature**

    #### ApsaraVideo for VoD [#apsaravideo-for-vod]

    In composite recording mode, you can now upload recorded files to [ApsaraVideo for VoD](https://www.alibabacloud.com/help/doc-detail/51236.htm) for further processing.

    **API changes**

    * [\`start\`](/en/api-reference/api-ref/cloud-recording/start) adds the \`extensionServiceConfig\` parameter for specifying the configurations of ApsaraVideo for VoD.
    * Adds the [\`vod_started\`](../reference/rest-api-overview#60-vod_started) and the [\`vod_triggered\`](../reference/rest-api-overview#61-vod_triggered) callbacks, which report the status of uploading recorded files to ApsaraVideo for VoD.
  </Accordion>

  <Accordion title="2020.06.12" id="20200612" headingLevel="3" value="20200612">
    **New features**

    #### Flexible user ID subscription [#flexible-user-id-subscription]

    This release provides a more flexible user ID subscription feature, enabling you to set up a whitelist or blacklist for audio and video subscriptions. You can also update the subscription lists during the cloud recording. For details, see [Set up subscription lists](/en/realtime-media/cloud-recording/build/customize-the-recording/subscription).

    #### Callback for high availability [#callback-for-high-availability]

    This release adds the [\`session_failover\`](../reference/rest-api-overview#12-session_failover) event, which occurs when the high availability mechanism is enabled and reports the new recording user ID.

    **API changes**

    * In [\`start\`](/en/api-reference/api-ref/cloud-recording/start) adds the \`unSubscribeVideoUids\` and \`unSubscribeAudioUids\` parameters for setting up subscription blacklists.
    * Adds [\`update\`](/en/api-reference/api-ref/cloud-recording/update) for updating the subscription lists during the cloud recording.
    * Adds the \`session_failover\` event.
  </Accordion>

  <Accordion title="2020.05.09" id="20200509" headingLevel="3" value="20200509">
    This release adds support for Kingsoft Cloud.
  </Accordion>

  <Accordion title="2020.04.17" id="20200417" headingLevel="3" value="20200417">
    Cloud Recording now supports taking screenshots of the video streams in individual recording mode. See [Capture Screenshots](/en/realtime-media/cloud-recording/build/start-a-recording/screen-capture) for details.
  </Accordion>

  <Accordion title="2019.12.16" id="20191216" headingLevel="3" value="20191216">
    This release improved the availability of the cloud recording service. When a server is disconnected or when the process is killed, the cloud recording automatically switches to a new server to resume the service. See [Fault processing when a cloud recording server is disconnected or the process killed](/en/realtime-media/cloud-recording/product-overview) for more information.

    **API Changes**

    In the [\`acquire\`](/en/api-reference/api-ref/cloud-recording/acquire) method, adds the \`resourceExpiredHour\` parameter for setting the time limit for all cloud recording method calls.

    Adds the \`session_exit\` event, which reports the exit status of the cloud recording service.
  </Accordion>

  <Accordion title="2019.11.15" id="20191115" headingLevel="3" value="20191115">
    You can now use the \`query\` method to get the names of the recorded files immediately after the recording starts.
  </Accordion>

  <Accordion title="2019.10.24" id="20191024" headingLevel="3" value="20191024">
    This release supports Tencent Cloud as one of the third-party cloud storages.
  </Accordion>

  <Accordion title="2019.10.08" id="20191008" headingLevel="3" value="20191008">
    **New features**

    #### 1. Individual recording [#1-individual-recording]

    The RESTful API adds individual recording mode, which supports recording the audio and video of each user ID separately. See [Individual Recording](/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode) for details. Meanwhile, Agora provides the Audio & Video File Merging script, which you can use to merge the audio and video files generated in individual mode. See [Merge Audio and Video Files](/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files) for details.

    #### 2. Record specified user IDs [#2-record-specified-user-ids]

    The RESTful API adds the \`subscribeAudioUids\` and \`subscribeVideoUids\` parameters, which allow you to record only specified user IDs.

    #### 3. Customize the directory of the recorded files [#3-customize-the-directory-of-the-recorded-files]

    The RESTful API adds the \`fileNamePrefix\` parameter, which allows you to specify the directory where you want to store the recorded files in the third-party cloud storage.

    #### 4. Timestamp when the stream state changes [#4-timestamp-when-the-stream-state-changes]

    The RESTful API callback service adds the \`recorder_audio_stream_state_changed\` and \`recorder_video_stream_state_changed\` events to report the time when the state of the audio or video stream changes, as well as the corresponding user ID.

    #### 5. Format Converter script [#5-format-converter-script]

    Agora provides the Format Converter script, which you can use to convert between multiple file formats, such as TS, MP3, and MP4. See [Convert File Format](/en/realtime-media/cloud-recording/build/process-recorded-files/convert-format) for details.

    #### 6. Synchronized playback [#6-synchronized-playback]

    You can achieve synchronized playback between the recorded files and other stream files, such as online whiteboards, courseware, and messages, by using the timestamp when the recording starts. You can get the timestamp by using the RESTful API callback service, or by parsing the M3U8 file. See [Synchronized Playback](/en/realtime-media/cloud-recording/build/process-recorded-files/playback) for details.

    **Improvement**

    When an error occurs, you receive the error message in the HTTP response body, instead of just the error code. See [Agora Cloud Recording RESTful API](../reference/rest-api-overview#error-codes-for-the-agora-cloud-recording-service) for detailed information about the error codes.

    **Fixed issue**

    When uploading fails after you use the wrong \`bucket\` and \`key\` values of the third-party cloud storage, Agora Cloud Recording returns an error instead of uploading the recorded files to Agora Cloud Backup.
  </Accordion>

  <Accordion title="2019.07.22" id="20190722" headingLevel="3" value="20190722">
    **New features**

    #### Customized video layout [#customized-video-layout]

    The RESTful API adds a customized layout for the recording video. See [Set Video Layout](/en/realtime-media/cloud-recording/build/customize-the-recording/layout#customize-the-video-layout) for details.

    You can set the \`mixedVideoLayout\` parameter as \`3\` and set the regions for each user in the \`layoutConfig\` parameter when starting a recording.

    You can update the layout anytime during the recording by the \`updateLayout\` method.

    #### Customized background color [#customized-background-color]

    The RESTful API adds the \`backgroundColor\` parameter to support customized background colors for the video layout.

    #### Timestamps [#timestamps]

    To get the accurate starting time of a recording, the RESTful API provides the Unix timestamp of when the first slicing starts in the response of the \`query\` method. The RESTful API callback service adds the \`recorder_slice_start\` event to report the time when the first slicing starts and the time when the last recording fails.

    **Improvement**

    Optimizes the verification of whether \`resourceId\` corresponds with \`uid\` and \`cname\` when calling the RESTful API.

    **Fixed issue**

    Fixed minor issues in the default video layout (floating layout).
  </Accordion>

  <Accordion title="2019.07.02" id="20190702" headingLevel="3" value="20190702">
    * Changes the default background color in the composite layout to black.
    * Reduces video freeze under poor network conditions.
  </Accordion>

  <Accordion title="2019.06.13" id="20190613" headingLevel="3" value="20190613">
    This release supports RESTful APIs. With the RESTful APIs, you can use Agora Cloud Recording through HTTP requests without integrating the SDK.

    See the following documents for details:

    * [RESTful API Quickstart](/en/realtime-media/cloud-recording/index): Start cloud recording with RESTful APIs.
    * [RESTful API Reference](/en/api-reference/api-ref/cloud-recording): Details of the RESTful API methods.
    * [RESTful API Callback Service](../reference/rest-api-overview): Enable the callback service to receive notifications of Agora Cloud Recording.
  </Accordion>

  <Accordion title="2019.04.30" id="20190430" headingLevel="3" value="20190430">
    This is the first release of Agora Cloud Recording with the following functions:

    * High-quality voice and video recordings.
    * Mixed-stream voice and video recordings of all users in a channel.
    * Three composite video layouts: float (default), best fit, and vertical.
    * Third-party cloud storage. Agora Cloud Recording supports Amazon S3, and Alibaba Cloud.
    * Provides C++ and Java SDK packages.

    <a id="notifications" />
  </Accordion>
</Accordions>

## Notifications [#notifications]

### 2022.10 [#202210]

* After you enable Notifications, your server receives the events that you subscribe to in the form of HTTPS requests.
* To improve communication security between the Notifications and your server, Agora SDRTN® uses signatures
  for identity verification.
* As of this release, you can use Notifications in conjunction with this product.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: `Agora Cloud Recording is an add-on service to record and save video calls, voice calls, and interactive streaming to
your cloud storage.`
  }, {
    heading: undefined,
    content: "Agora Cloud Recording is compatible with RTC SDK for:"
  }, {
    heading: undefined,
    content: "Android, iOS, macOS, and Windows - v1.7.0 or later"
  }, {
    heading: undefined,
    content: "Web - v1.12 or later"
  }, {
    heading: undefined,
    content: "This page provides the release notes for:"
  }, {
    heading: undefined,
    content: "Cloud Recording"
  }, {
    heading: undefined,
    content: "Notifications"
  }, {
    heading: "new-features",
    content: "**Support for self-built S3 compatible cloud storage services**"
  }, {
    heading: "new-features",
    content: "This version adds support for self-built S3 compatible cloud storage services. When calling the `acquire` and `start` interfaces, you can specify a S3 compatible cloud storage by setting `vendor` to `11`. Specify the domain name of your cloud storage using the `endpoint` parameter under `extensionParams`. Refer to the following sample configuration:"
  }, {
    heading: "new-features",
    content: "This release adds the following improvement:"
  }, {
    heading: "new-features",
    content: "To improve the security of Cloud Recording, this release adds optional `stsToken` and `stsExpiration` fields to the `storageConfig` of the `start` and `update` requests. You need to ensure that the validity period of `stsToken` and `stsExpiration` is long enough, so that Cloud Recording can successfully upload files to a third-party cloud storage. For details, see and API reference."
  }, {
    heading: "new-features",
    content: "This release adds the following improvements:"
  }, {
    heading: "new-features",
    content: "Adds support for the following regions of Alibaba Cloud storage:"
  }, {
    heading: "new-features",
    content: "`23`: CN\\_Nanjing"
  }, {
    heading: "new-features",
    content: "`24`: CN\\_Fuzhou"
  }, {
    heading: "new-features",
    content: "`25`: CN\\_Wulanchabu"
  }, {
    heading: "new-features",
    content: "`26`: CN\\_Northeast\\_2"
  }, {
    heading: "new-features",
    content: "`27`: CN\\_Southeast\\_7"
  }, {
    heading: "new-features",
    content: "Updates the Agora transcoding script to reduce background noise."
  }, {
    heading: "new-features",
    content: "This release adds the following improvements:"
  }, {
    heading: "new-features",
    content: "Improves player compatibility for MPD files generated in individual recording `standard` mode, see Recording configuration."
  }, {
    heading: "new-features",
    content: "Optimizes the Agora Format Converter Script for individual recording, you can refer to Merge audio and video files to get the latest Agora Format Converter Script."
  }, {
    heading: "new-features",
    content: "This release supports the postpone transcoding feature globally. You need to set the scene field to `2` (postpone transcoding) when calling the `acquire`. After setting this scene, the recording service transcodes the recorded file within 24 hours after recording to generate an MP4 file, and uploads the MP4 file to the third-party cloud storage you specify. Please note that the `region` of the third-party cloud storage must be consistent with the `region` set when calling `acquire`. For details, see Individual recording."
  }, {
    heading: "new-features",
    content: "This release adds support for Amazon S3 in some regions. See Cloud storage configuration."
  }, {
    heading: "new-features",
    content: "This release adds the following new feature and API changes:"
  }, {
    heading: "new-features",
    content: "**Mobile web page mode for web page recording**"
  }, {
    heading: "new-features",
    content: "This release adds mobile web page mode for web page recording. The API changes are as follows:"
  }, {
    heading: "new-features",
    content: "Adds the `mobile` field in `extensionServiceConfig`. After setting `mobile` to `true`, the recording service uses the mobile web page mode to record the current web page."
  }, {
    heading: "new-features",
    content: "The value range of the `videoWidth` and `videoHeight` fields in `extensionServiceConfig` is changed to \\[240, 1920]."
  }, {
    heading: "new-features",
    content: "**Transcoder script for high availability mechanism**"
  }, {
    heading: "new-features",
    content: "In composite recording mode, Agora provides a transcoder script for merging the old M3U8 file with the new M3U8 file generated after the service enables the high availability mechanism into an MP4 file. For details, see Manage Recorded Files."
  }, {
    heading: "new-features-1",
    content: "**Individual Audio Non-transcoding Recording**"
  }, {
    heading: "new-features-1",
    content: "In order to meet the diverse recording needs of users, this release adds the `streamMode` parameter in the `start` method to support Individual Audio Non-transcoding Recording."
  }, {
    heading: "new-features-1",
    content: "**Postpone Audio Mixing**\nFor voice chat use-cases, this release adds the `appsCollection` and `transcodeOptions` parameters in the `start` method to support Postpone Audio Mixing. If you enable this function, the recording service merges and transcodes the recorded files of all user IDs in the specified channel within 24 hours after the recording ends to generate an MP3/M4A/AAC file, and then uploads the recording file to your specified third-party cloud storage."
  }, {
    heading: "new-features-1",
    content: "**A Combined audio and video file after individual recording**"
  }, {
    heading: "new-features-1",
    content: "When calling `start`, set the `streamMode` field of the `recordingConfig` parameter to `standard`, you can get a M3U8 audio index file, a M3U8 video index file and a combined M3U8 audio and video index file. If VP9 encoding is used on the web side, a combined MPD audio and video index file are generated.\nYou can play the combined audio and video index file directly without using script. Agora recommends that you use this mode."
  }, {
    heading: "new-features-1",
    content: "**Support for the third-party cloud storage service encrypting and labeling recording files**"
  }, {
    heading: "new-features-1",
    content: "This release adds the `extensionParams` field to support the third-party cloud storage service to encrypt and tag uploaded recording files. This feature is applicable to Amazon S3 and Alibaba Cloud OSS."
  }, {
    heading: "new-features-2",
    content: "This release adds support for Alibaba Cloud (`vendor` is `2`) in the following regions:"
  }, {
    heading: "new-features-2",
    content: "`19`：AP\\_Southeast\\_6"
  }, {
    heading: "new-features-2",
    content: "`20`：CN\\_Heyuan"
  }, {
    heading: "new-features-2",
    content: "`21`：CN\\_Guangzhou"
  }, {
    heading: "new-features-2",
    content: "`22`：CN\\_Chengdu"
  }, {
    heading: "new-features-2",
    content: "For details, see Alibaba Cloud Documentation."
  }, {
    heading: "fixed-issues",
    content: "This release fixed the following issue:"
  }, {
    heading: "fixed-issues",
    content: "When a composite recording started, the user to be recorded did not send streams. When the user sent streams, the user could not display the customized background image or background color after they stopped sending streams or left the channel."
  }, {
    heading: "compatibility",
    content: "**Support for AES-GCM2 encryption**"
  }, {
    heading: "compatibility",
    content: "For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in `recordingConfig`:"
  }, {
    heading: "compatibility",
    content: "`AES_128_GCM2` and `AES_256_GCM2` encryption modes in `decryptionMode` of `recordingConfig`. The new GCM encryption modes use a more secure KDF (Key Derivation Function) and support setting the key and salt."
  }, {
    heading: "compatibility",
    content: "The `salt` parameter in `recordingConfig` to add the salt for the `AES_128_GCM2` and `AES_256_GCM2` encryption modes."
  }, {
    heading: "new-features-3",
    content: "**Push media stream to the CDN during a web page recording**"
  }, {
    heading: "new-features-3",
    content: "Adds support for converting the content and audio of a web page into a media stream and pushing it to the CDN during the web page recording. See the `start`, `update` and `query` methods of the Agora Cloud Recording RESTful API for details."
  }, {
    heading: "new-features-3",
    content: "**Third-party cloud storage**"
  }, {
    heading: "new-features-3",
    content: "Adds support for Google Cloud, Huawei Cloud and Baidu AI Cloud as third-party storage platforms."
  }, {
    heading: "improvements",
    content: "**Capture screenshots**"
  }, {
    heading: "improvements",
    content: "This release increases the range of the captureInterval of snapshotConfig (in seconds) to \\[1,3600] from \\[5,3600] when using the Cloud Recording RESTful API to take screenshots of a video stream."
  }, {
    heading: "improvements",
    content: "**Output video resolution**"
  }, {
    heading: "improvements",
    content: "This release increases the upper limit of the output video resolution generated by the web page recording from 1280 x 720 to 1920 x 1080. That is, the range of the `videoWidth` and `videoHeight` parameters of the web page recording in `extensionServiceConfig` is changed to \\[480, 1920]."
  }, {
    heading: "improvements",
    content: "**The estimated maximum number of subscribed users**"
  }, {
    heading: "improvements",
    content: "To support a larger estimated maximum number of subscribed users, this release adds the following enumeration values of `subscribeUidGroup` in `recordingConfig`:"
  }, {
    heading: "improvements",
    content: "`4`: 17 to 32 user IDs"
  }, {
    heading: "improvements",
    content: "`5`: 32 to 49 user IDs"
  }, {
    heading: "compatibility-changes",
    content: "The new server version requirements for transcoding recorded files are as follows:"
  }, {
    heading: "compatibility-changes",
    content: "CentOS 7.0 and later x64"
  }, {
    heading: "compatibility-changes",
    content: "Ubuntu 14.04 and later x64"
  }, {
    heading: "compatibility-changes",
    content: "Debian 8.0 and later"
  }, {
    heading: "new-features-4",
    content: "**Web page load timeout detection**"
  }, {
    heading: "new-features-4",
    content: "In order to ensure the validity and completeness of page recording, this version supports page load timeout detection function. See Web Page Load Timeout Detection."
  }, {
    heading: "new-features-4",
    content: "**Pause the page recording**"
  }, {
    heading: "new-features-4",
    content: "This release adds the `onhold` parameter to the `start` and `update` methods, which is used to pause the recording when the web page recording starts or is in progress."
  }, {
    heading: "new-features-4",
    content: "**Capture screenshots and recording in a recording process**"
  }, {
    heading: "new-features-4",
    content: "This release adds support for recording and taking screenshots in a recording process. Only the recording fee is charged. See Capture Screenshots."
  }, {
    heading: "improvements-1",
    content: "`The web_recorder_stopped` callback adds error codes and error messages to indicate the reason for the abnormal stop of the web page recording. You can take corresponding measures based on the information."
  }, {
    heading: "improvements-1",
    content: "The `update` method adds the `webRecordingConfig` parameter, which is used to update related parameters during a web page recording."
  }, {
    heading: "improvements-1",
    content: "This release includes the following new feature and API changes:"
  }, {
    heading: "improvements-1",
    content: "**Screenshot event notification**"
  }, {
    heading: "improvements-1",
    content: "This release adds the `recorder_snapshot_file` callback，which indicates that the screenshot is captured successfully, and returns the name of the screenshot file."
  }, {
    heading: "improvements-1",
    content: "**New regions for Amazon S3 cloud storage**"
  }, {
    heading: "improvements-1",
    content: "This release adds support for Amazon S3 in the following regions:"
  }, {
    heading: "improvements-1",
    content: "`20`: AP\\_NORTHEAST\\_3"
  }, {
    heading: "improvements-1",
    content: "`21`: EU\\_NORTH\\_1"
  }, {
    heading: "improvements-1",
    content: "`22`: ME\\_SOUTH\\_1"
  }, {
    heading: "improvements-1",
    content: "`23`: US\\_GOV\\_EAST\\_1"
  }, {
    heading: "new-features-5",
    content: "This release adds `maxVideoDuration` to the `start` method to set the maximum duration of the MP4 slice file generated by the web page recording."
  }, {
    heading: "improvements-2",
    content: "When the page status is a `404` or `5XX` error, the page recording service automatically exits to avoid continuing to record the error page."
  }, {
    heading: "fixed-issues-1",
    content: "This release fixes an issue where audio was occasionally lost during a web page recording."
  }, {
    heading: "fixed-issues-1",
    content: "This version was released on June 10, 2021."
  }, {
    heading: "new-features-6",
    content: "**Network Geofencing**"
  }, {
    heading: "new-features-6",
    content: "This release adds the `region` parameter to the `acquire` method so you can geofence your cloud recording service. If you specify a region, the cloud recording server connects only to the Agora servers within that region. The following regions are supported:"
  }, {
    heading: "new-features-6",
    content: "Mainland China"
  }, {
    heading: "new-features-6",
    content: "Asia, excluding Mainland China"
  }, {
    heading: "new-features-6",
    content: "North America"
  }, {
    heading: "new-features-6",
    content: "Europe"
  }, {
    heading: "new-features-6",
    content: "**Third-party cloud storage**"
  }, {
    heading: "new-features-6",
    content: "This release adds support for Microsoft Azure as a third-party storage solution."
  }, {
    heading: "improvements-3",
    content: "This release optimizes the encoding settings for the web page recording, which reduce the bit rate without losing video quality."
  }, {
    heading: "fixed-issues-2",
    content: "Fixed security issues caused by vulnerabilities in Chrome V8."
  }, {
    heading: "api-changes",
    content: "Adds the `region` parameter in the `acquire` method."
  }, {
    heading: "api-changes",
    content: "Adds `recorderStartTime` in the `web_recorder_started` callback."
  }, {
    heading: "api-changes",
    content: "Adds the `web_recorder_reload` callback."
  }, {
    heading: "api-changes",
    content: "This version was released on April 29, 2021."
  }, {
    heading: "api-changes",
    content: "**New features**"
  }, {
    heading: "mp4-format-in-composite-recording-mode",
    content: 'From this release, you can get MP4 files after a composite recording. Set `avFileType` as `["hls","mp4"]` when you call the start method, and the recording service generates MP4 files once a recording starts.'
  }, {
    heading: "aes-gcm-encryption",
    content: "For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in `decryptionMode`:"
  }, {
    heading: "aes-gcm-encryption",
    content: "128-bit AES encryption, GCM mode."
  }, {
    heading: "aes-gcm-encryption",
    content: "256-bit AES encryption, GCM mode."
  }, {
    heading: "aes-gcm-encryption",
    content: "Once you enable the built-in encryption, all users in the same channel must use the same encryption mode and key."
  }, {
    heading: "aes-gcm-encryption",
    content: "**Improvement**"
  }, {
    heading: "aes-gcm-encryption",
    content: "From this release, the recording service automatically detects and resolves the occasional audio loss issue during a web page recording, which causes the recorded page to refresh. If necessary, you need to guarantee that the status of your web application remains the same before and after a refresh."
  }, {
    heading: "aes-gcm-encryption",
    content: "**API changes**"
  }, {
    heading: "aes-gcm-encryption",
    content: "Adds enumerators `5` and `6` for `decryptionMode` in the `start` method."
  }, {
    heading: "aes-gcm-encryption",
    content: "Adds the `fileList` field in the `uploaded` and `backuped` callbacks."
  }, {
    heading: "aes-gcm-encryption",
    content: "This version was released on March 31, 2021."
  }, {
    heading: "aes-gcm-encryption",
    content: "**New feature**"
  }, {
    heading: "background-images",
    content: "In composite recording mode, you can set the background image for both the video canvas and an individual user region. You can update the background image during a recording session. See Set the background color or background image for details."
  }, {
    heading: "background-images",
    content: "**Improvement**"
  }, {
    heading: "background-images",
    content: "Adds a retry logic for Kingsoft Cloud, in which the recording service retries if it fails to upload recorded files to Kingsoft Cloud."
  }, {
    heading: "background-images",
    content: "**Fixed issues**"
  }, {
    heading: "background-images",
    content: "Occasional file loss when uploading slice files to Tencent Cloud Object Storage (COS)."
  }, {
    heading: "background-images",
    content: "In a web page recording, the recording service could not render emoji."
  }, {
    heading: "background-images",
    content: "When recording a static web page, the recording occasionally failed when the value of `videoFps` was too high."
  }, {
    heading: "background-images",
    content: "**API changes**"
  }, {
    heading: "background-images",
    content: "Adds the `backgroundImage`, `defaultUserBackgroundImage` and `backgroundConfig` fields in the `transcodingConfig` parameter of the `start` method."
  }, {
    heading: "background-images",
    content: "Adds the `backgroundImage`, `defaultUserBackgroundImage` and `backgroundConfig` fields in the `clientRequest` parameter of the `updateLayout` method."
  }, {
    heading: "background-images",
    content: "Adds the `fileList` field in the `web_recorder_stopped` callback."
  }, {
    heading: "background-images",
    content: "This release raises the maximum resolution of video sources for web page recording. The recorded web page can now contain video that has a resolution of up to 1920 × 1080."
  }, {
    heading: "background-images",
    content: "This release includes the following new feature and API changes:"
  }, {
    heading: "new-feature",
    content: "Adds web page recording mode. In this mode, the content and audio of a specified web page are recorded in a single file."
  }, {
    heading: "api-changes-1",
    content: "Adds `web` as a value for `mode` in the request URL for web page recording."
  }, {
    heading: "api-changes-1",
    content: "Adds `scene` as a new parameter in the `acquire `method for setting the application of the cloud recording resources."
  }, {
    heading: "api-changes-1",
    content: 'Adds `"web_recorder_service"` as an extension service in the `extensionServiceConfig` parameter of the `start` method.'
  }, {
    heading: "api-changes-1",
    content: "Adds the following callbacks, which report the status of web page recording:"
  }, {
    heading: "api-changes-1",
    content: "`web_recorder_started`"
  }, {
    heading: "api-changes-1",
    content: "`web_recorder_stopped`"
  }, {
    heading: "api-changes-1",
    content: "`web_recorder_capability_limit`"
  }, {
    heading: "api-changes-1",
    content: "This release improved the stability and performance of the recording service, and fixed the following issues:"
  }, {
    heading: "api-changes-1",
    content: "Failure to subscribe to a low-quality stream."
  }, {
    heading: "api-changes-1",
    content: "Occasional failure to record a whole call."
  }, {
    heading: "api-changes-1",
    content: "This release adds the following new feature and API changes:"
  }, {
    heading: "api-changes-1",
    content: "**New feature**"
  }, {
    heading: "apsaravideo-for-vod",
    content: "In composite recording mode, you can now upload recorded files to ApsaraVideo for VoD for further processing."
  }, {
    heading: "apsaravideo-for-vod",
    content: "**API changes**"
  }, {
    heading: "apsaravideo-for-vod",
    content: "`start` adds the `extensionServiceConfig` parameter for specifying the configurations of ApsaraVideo for VoD."
  }, {
    heading: "apsaravideo-for-vod",
    content: "Adds the `vod_started` and the `vod_triggered` callbacks, which report the status of uploading recorded files to ApsaraVideo for VoD."
  }, {
    heading: "apsaravideo-for-vod",
    content: "**New features**"
  }, {
    heading: "flexible-user-id-subscription",
    content: "This release provides a more flexible user ID subscription feature, enabling you to set up a whitelist or blacklist for audio and video subscriptions. You can also update the subscription lists during the cloud recording. For details, see Set up subscription lists."
  }, {
    heading: "callback-for-high-availability",
    content: "This release adds the `session_failover` event, which occurs when the high availability mechanism is enabled and reports the new recording user ID."
  }, {
    heading: "callback-for-high-availability",
    content: "**API changes**"
  }, {
    heading: "callback-for-high-availability",
    content: "In `start` adds the `unSubscribeVideoUids` and `unSubscribeAudioUids` parameters for setting up subscription blacklists."
  }, {
    heading: "callback-for-high-availability",
    content: "Adds `update` for updating the subscription lists during the cloud recording."
  }, {
    heading: "callback-for-high-availability",
    content: "Adds the `session_failover` event."
  }, {
    heading: "callback-for-high-availability",
    content: "This release adds support for Kingsoft Cloud."
  }, {
    heading: "callback-for-high-availability",
    content: "Cloud Recording now supports taking screenshots of the video streams in individual recording mode. See Capture Screenshots for details."
  }, {
    heading: "callback-for-high-availability",
    content: "This release improved the availability of the cloud recording service. When a server is disconnected or when the process is killed, the cloud recording automatically switches to a new server to resume the service. See Fault processing when a cloud recording server is disconnected or the process killed for more information."
  }, {
    heading: "callback-for-high-availability",
    content: "**API Changes**"
  }, {
    heading: "callback-for-high-availability",
    content: "In the `acquire` method, adds the `resourceExpiredHour` parameter for setting the time limit for all cloud recording method calls."
  }, {
    heading: "callback-for-high-availability",
    content: "Adds the `session_exit` event, which reports the exit status of the cloud recording service."
  }, {
    heading: "callback-for-high-availability",
    content: "You can now use the `query` method to get the names of the recorded files immediately after the recording starts."
  }, {
    heading: "callback-for-high-availability",
    content: "This release supports Tencent Cloud as one of the third-party cloud storages."
  }, {
    heading: "callback-for-high-availability",
    content: "**New features**"
  }, {
    heading: "1-individual-recording",
    content: "The RESTful API adds individual recording mode, which supports recording the audio and video of each user ID separately. See Individual Recording for details. Meanwhile, Agora provides the Audio & Video File Merging script, which you can use to merge the audio and video files generated in individual mode. See Merge Audio and Video Files for details."
  }, {
    heading: "2-record-specified-user-ids",
    content: "The RESTful API adds the `subscribeAudioUids` and `subscribeVideoUids` parameters, which allow you to record only specified user IDs."
  }, {
    heading: "3-customize-the-directory-of-the-recorded-files",
    content: "The RESTful API adds the `fileNamePrefix` parameter, which allows you to specify the directory where you want to store the recorded files in the third-party cloud storage."
  }, {
    heading: "4-timestamp-when-the-stream-state-changes",
    content: "The RESTful API callback service adds the `recorder_audio_stream_state_changed` and `recorder_video_stream_state_changed` events to report the time when the state of the audio or video stream changes, as well as the corresponding user ID."
  }, {
    heading: "5-format-converter-script",
    content: "Agora provides the Format Converter script, which you can use to convert between multiple file formats, such as TS, MP3, and MP4. See Convert File Format for details."
  }, {
    heading: "6-synchronized-playback",
    content: "You can achieve synchronized playback between the recorded files and other stream files, such as online whiteboards, courseware, and messages, by using the timestamp when the recording starts. You can get the timestamp by using the RESTful API callback service, or by parsing the M3U8 file. See Synchronized Playback for details."
  }, {
    heading: "6-synchronized-playback",
    content: "**Improvement**"
  }, {
    heading: "6-synchronized-playback",
    content: "When an error occurs, you receive the error message in the HTTP response body, instead of just the error code. See Agora Cloud Recording RESTful API for detailed information about the error codes."
  }, {
    heading: "6-synchronized-playback",
    content: "**Fixed issue**"
  }, {
    heading: "6-synchronized-playback",
    content: "When uploading fails after you use the wrong `bucket` and `key` values of the third-party cloud storage, Agora Cloud Recording returns an error instead of uploading the recorded files to Agora Cloud Backup."
  }, {
    heading: "6-synchronized-playback",
    content: "**New features**"
  }, {
    heading: "customized-video-layout",
    content: "The RESTful API adds a customized layout for the recording video. See Set Video Layout for details."
  }, {
    heading: "customized-video-layout",
    content: "You can set the `mixedVideoLayout` parameter as `3` and set the regions for each user in the `layoutConfig` parameter when starting a recording."
  }, {
    heading: "customized-video-layout",
    content: "You can update the layout anytime during the recording by the `updateLayout` method."
  }, {
    heading: "customized-background-color",
    content: "The RESTful API adds the `backgroundColor` parameter to support customized background colors for the video layout."
  }, {
    heading: "timestamps",
    content: "To get the accurate starting time of a recording, the RESTful API provides the Unix timestamp of when the first slicing starts in the response of the `query` method. The RESTful API callback service adds the `recorder_slice_start` event to report the time when the first slicing starts and the time when the last recording fails."
  }, {
    heading: "timestamps",
    content: "**Improvement**"
  }, {
    heading: "timestamps",
    content: "Optimizes the verification of whether `resourceId` corresponds with `uid` and `cname` when calling the RESTful API."
  }, {
    heading: "timestamps",
    content: "**Fixed issue**"
  }, {
    heading: "timestamps",
    content: "Fixed minor issues in the default video layout (floating layout)."
  }, {
    heading: "timestamps",
    content: "Changes the default background color in the composite layout to black."
  }, {
    heading: "timestamps",
    content: "Reduces video freeze under poor network conditions."
  }, {
    heading: "timestamps",
    content: "This release supports RESTful APIs. With the RESTful APIs, you can use Agora Cloud Recording through HTTP requests without integrating the SDK."
  }, {
    heading: "timestamps",
    content: "See the following documents for details:"
  }, {
    heading: "timestamps",
    content: "RESTful API Quickstart: Start cloud recording with RESTful APIs."
  }, {
    heading: "timestamps",
    content: "RESTful API Reference: Details of the RESTful API methods."
  }, {
    heading: "timestamps",
    content: "RESTful API Callback Service: Enable the callback service to receive notifications of Agora Cloud Recording."
  }, {
    heading: "timestamps",
    content: "This is the first release of Agora Cloud Recording with the following functions:"
  }, {
    heading: "timestamps",
    content: "High-quality voice and video recordings."
  }, {
    heading: "timestamps",
    content: "Mixed-stream voice and video recordings of all users in a channel."
  }, {
    heading: "timestamps",
    content: "Three composite video layouts: float (default), best fit, and vertical."
  }, {
    heading: "timestamps",
    content: "Third-party cloud storage. Agora Cloud Recording supports Amazon S3, and Alibaba Cloud."
  }, {
    heading: "timestamps",
    content: "Provides C++ and Java SDK packages."
  }, {
    heading: "202210",
    content: "After you enable Notifications, your server receives the events that you subscribe to in the form of HTTPS requests."
  }, {
    heading: "202210",
    content: `To improve communication security between the Notifications and your server, Agora SDRTN® uses signatures
for identity verification.`
  }, {
    heading: "202210",
    content: "As of this release, you can use Notifications in conjunction with this product."
  }],
  headings: [{
    id: "cloud-recording",
    content: "Cloud Recording"
  }, {
    id: "new-features",
    content: "New features"
  }, {
    id: "new-features-1",
    content: "New features"
  }, {
    id: "new-features-2",
    content: "New features"
  }, {
    id: "fixed-issues",
    content: "Fixed issues"
  }, {
    id: "compatibility",
    content: "Compatibility"
  }, {
    id: "new-features-3",
    content: "New features"
  }, {
    id: "improvements",
    content: "Improvements"
  }, {
    id: "compatibility-changes",
    content: "Compatibility changes"
  }, {
    id: "new-features-4",
    content: "New features"
  }, {
    id: "improvements-1",
    content: "Improvements"
  }, {
    id: "new-features-5",
    content: "New features"
  }, {
    id: "improvements-2",
    content: "Improvements"
  }, {
    id: "fixed-issues-1",
    content: "Fixed issues"
  }, {
    id: "new-features-6",
    content: "New features"
  }, {
    id: "improvements-3",
    content: "Improvements"
  }, {
    id: "fixed-issues-2",
    content: "Fixed issues"
  }, {
    id: "api-changes",
    content: "API changes"
  }, {
    id: "mp4-format-in-composite-recording-mode",
    content: "MP4 format in composite recording mode"
  }, {
    id: "aes-gcm-encryption",
    content: "AES-GCM encryption"
  }, {
    id: "background-images",
    content: "Background images"
  }, {
    id: "new-feature",
    content: "New feature"
  }, {
    id: "api-changes-1",
    content: "API changes"
  }, {
    id: "apsaravideo-for-vod",
    content: "ApsaraVideo for VoD"
  }, {
    id: "flexible-user-id-subscription",
    content: "Flexible user ID subscription"
  }, {
    id: "callback-for-high-availability",
    content: "Callback for high availability"
  }, {
    id: "1-individual-recording",
    content: "1\\. Individual recording"
  }, {
    id: "2-record-specified-user-ids",
    content: "2\\. Record specified user IDs"
  }, {
    id: "3-customize-the-directory-of-the-recorded-files",
    content: "3\\. Customize the directory of the recorded files"
  }, {
    id: "4-timestamp-when-the-stream-state-changes",
    content: "4\\. Timestamp when the stream state changes"
  }, {
    id: "5-format-converter-script",
    content: "5\\. Format Converter script"
  }, {
    id: "6-synchronized-playback",
    content: "6\\. Synchronized playback"
  }, {
    id: "customized-video-layout",
    content: "Customized video layout"
  }, {
    id: "customized-background-color",
    content: "Customized background color"
  }, {
    id: "timestamps",
    content: "Timestamps"
  }, {
    id: "notifications",
    content: "Notifications"
  }, {
    id: "202210",
    content: "2022.10"
  }]
};
export let toc = [{
  depth: 2,
  url: "#cloud-recording",
  title: _jsx(_Fragment, {
    children: "Cloud Recording"
  })
}, {
  depth: 4,
  url: "#new-features",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#new-features-1",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#new-features-2",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#fixed-issues",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#compatibility",
  title: _jsx(_Fragment, {
    children: "Compatibility"
  })
}, {
  depth: 4,
  url: "#new-features-3",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#compatibility-changes",
  title: _jsx(_Fragment, {
    children: "Compatibility changes"
  })
}, {
  depth: 4,
  url: "#new-features-4",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-1",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#new-features-5",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-2",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-1",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#new-features-6",
  title: _jsx(_Fragment, {
    children: "New features"
  })
}, {
  depth: 4,
  url: "#improvements-3",
  title: _jsx(_Fragment, {
    children: "Improvements"
  })
}, {
  depth: 4,
  url: "#fixed-issues-2",
  title: _jsx(_Fragment, {
    children: "Fixed issues"
  })
}, {
  depth: 4,
  url: "#api-changes",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#mp4-format-in-composite-recording-mode",
  title: _jsx(_Fragment, {
    children: "MP4 format in composite recording mode"
  })
}, {
  depth: 4,
  url: "#aes-gcm-encryption",
  title: _jsx(_Fragment, {
    children: "AES-GCM encryption"
  })
}, {
  depth: 4,
  url: "#background-images",
  title: _jsx(_Fragment, {
    children: "Background images"
  })
}, {
  depth: 4,
  url: "#new-feature",
  title: _jsx(_Fragment, {
    children: "New feature"
  })
}, {
  depth: 4,
  url: "#api-changes-1",
  title: _jsx(_Fragment, {
    children: "API changes"
  })
}, {
  depth: 4,
  url: "#apsaravideo-for-vod",
  title: _jsx(_Fragment, {
    children: "ApsaraVideo for VoD"
  })
}, {
  depth: 4,
  url: "#flexible-user-id-subscription",
  title: _jsx(_Fragment, {
    children: "Flexible user ID subscription"
  })
}, {
  depth: 4,
  url: "#callback-for-high-availability",
  title: _jsx(_Fragment, {
    children: "Callback for high availability"
  })
}, {
  depth: 4,
  url: "#1-individual-recording",
  title: _jsx(_Fragment, {
    children: "1. Individual recording"
  })
}, {
  depth: 4,
  url: "#2-record-specified-user-ids",
  title: _jsx(_Fragment, {
    children: "2. Record specified user IDs"
  })
}, {
  depth: 4,
  url: "#3-customize-the-directory-of-the-recorded-files",
  title: _jsx(_Fragment, {
    children: "3. Customize the directory of the recorded files"
  })
}, {
  depth: 4,
  url: "#4-timestamp-when-the-stream-state-changes",
  title: _jsx(_Fragment, {
    children: "4. Timestamp when the stream state changes"
  })
}, {
  depth: 4,
  url: "#5-format-converter-script",
  title: _jsx(_Fragment, {
    children: "5. Format Converter script"
  })
}, {
  depth: 4,
  url: "#6-synchronized-playback",
  title: _jsx(_Fragment, {
    children: "6. Synchronized playback"
  })
}, {
  depth: 4,
  url: "#customized-video-layout",
  title: _jsx(_Fragment, {
    children: "Customized video layout"
  })
}, {
  depth: 4,
  url: "#customized-background-color",
  title: _jsx(_Fragment, {
    children: "Customized background color"
  })
}, {
  depth: 4,
  url: "#timestamps",
  title: _jsx(_Fragment, {
    children: "Timestamps"
  })
}, {
  depth: 2,
  url: "#notifications",
  title: _jsx(_Fragment, {
    children: "Notifications"
  })
}, {
  depth: 3,
  url: "#202210",
  title: _jsx(_Fragment, {
    children: "2022.10"
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
  }, { Accordion, Accordions } = _components;
  if (!Accordion)
    _missingMdxReference("Accordion", true);
  if (!Accordions)
    _missingMdxReference("Accordions", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: `Agora Cloud Recording is an add-on service to record and save video calls, voice calls, and interactive streaming to
your cloud storage.`
    }), `
`, _jsx(_components.p, {
      children: "Agora Cloud Recording is compatible with RTC SDK for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Android, iOS, macOS, and Windows - v1.7.0 or later"
      }), `
`, _jsx(_components.li, {
        children: "Web - v1.12 or later"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "This page provides the release notes for:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#cloud-recording",
          children: "Cloud Recording"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#notifications",
          children: "Notifications"
        })
      }), `
`]
    }), `
`, _jsx("a", {
      id: "cloud-recording"
    }), `
`, _jsx(_components.h2, {
      id: "cloud-recording",
      children: "Cloud Recording"
    }), `
`, _jsxs(Accordions, {
      type: "multiple",
      openFirst: true,
      children: [_jsxs(Accordion, {
        title: "2025.06.27",
        id: "20250627",
        headingLevel: 3,
        value: "20250627",
        children: [_jsx(_components.h4, {
          id: "new-features",
          children: "New features"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: _jsx(_components.strong, {
                children: "Support for self-built S3 compatible cloud storage services"
              })
            }), `
`, _jsxs(_components.p, {
              children: ["This version adds support for self-built S3 compatible cloud storage services. When calling the ", _jsx(_components.code, {
                children: "acquire"
              }), " and ", _jsx(_components.code, {
                children: "start"
              }), " interfaces, you can specify a S3 compatible cloud storage by setting ", _jsx(_components.code, {
                children: "vendor"
              }), " to ", _jsx(_components.code, {
                children: "11"
              }), ". Specify the domain name of your cloud storage using the ", _jsx(_components.code, {
                children: "endpoint"
              }), " parameter under ", _jsx(_components.code, {
                children: "extensionParams"
              }), ". Refer to the following sample configuration:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"storageConfig"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "secretKey"'
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
                  children: '"xxxxx"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "accessKey"'
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
                  children: '"xxxxx"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "bucket"'
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
                  children: '"s3-digit-test"'
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
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // highlight-start"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "vendor"'
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
                  children: "11"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "region"'
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
                  children: ","
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "    // highlight-end"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "fileNamePrefix"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": ["
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "agora"'
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "meituan"'
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "test"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "extensionParams"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "      // highlight-start"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "endpoint"'
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
                  children: '"xxxxx.xxxxx.com"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "      // highlight-end"
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
        })]
      }), _jsxs(Accordion, {
        title: "2024.08.02",
        id: "20240802",
        headingLevel: 3,
        value: "20240802",
        children: [_jsx(_components.p, {
          children: "This release adds the following improvement:"
        }), _jsxs(_components.p, {
          children: ["To improve the security of Cloud Recording, this release adds optional ", _jsx(_components.code, {
            children: "stsToken"
          }), " and ", _jsx(_components.code, {
            children: "stsExpiration"
          }), " fields to the ", _jsx(_components.code, {
            children: "storageConfig"
          }), " of the ", _jsx(_components.code, {
            children: "start"
          }), " and ", _jsx(_components.code, {
            children: "update"
          }), " requests. You need to ensure that the validity period of ", _jsx(_components.code, {
            children: "stsToken"
          }), " and ", _jsx(_components.code, {
            children: "stsExpiration"
          }), " is long enough, so that Cloud Recording can successfully upload files to a third-party cloud storage. For details, see and ", _jsx(_components.a, {
            href: "../reference/rest-api/rest",
            children: "API reference"
          }), "."]
        })]
      }), _jsxs(Accordion, {
        title: "2023.07.05",
        id: "20230705",
        headingLevel: 3,
        value: "20230705",
        children: [_jsx(_components.p, {
          children: "This release adds the following improvements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Adds support for the following regions of Alibaba Cloud storage:"
            }), `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "23"
                }), ": CN_Nanjing"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "24"
                }), ": CN_Fuzhou"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "25"
                }), ": CN_Wulanchabu"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "26"
                }), ": CN_Northeast_2"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "27"
                }), ": CN_Southeast_7"]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Updates the Agora transcoding script to reduce background noise."
            }), `
`]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2022.11.20",
        id: "20221120",
        headingLevel: 3,
        value: "20221120",
        children: [_jsx(_components.p, {
          children: "This release adds the following improvements:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Improves player compatibility for MPD files generated in individual recording ", _jsx(_components.code, {
              children: "standard"
            }), " mode, see ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording",
              children: "Recording configuration"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["Optimizes the Agora Format Converter Script for individual recording, you can refer to ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files",
              children: "Merge audio and video files"
            }), " to get the latest Agora Format Converter Script."]
          }), `
`]
        })]
      }), _jsx(Accordion, {
        title: "2022.10.20",
        id: "20221020",
        headingLevel: 3,
        value: "20221020",
        children: _jsxs(_components.p, {
          children: ["This release supports the postpone transcoding feature globally. You need to set the scene field to ", _jsx(_components.code, {
            children: "2"
          }), " (postpone transcoding) when calling the ", _jsx(_components.code, {
            children: "acquire"
          }), ". After setting this scene, the recording service transcodes the recorded file within 24 hours after recording to generate an MP4 file, and uploads the MP4 file to the third-party cloud storage you specify. Please note that the ", _jsx(_components.code, {
            children: "region"
          }), " of the third-party cloud storage must be consistent with the ", _jsx(_components.code, {
            children: "region"
          }), " set when calling ", _jsx(_components.code, {
            children: "acquire"
          }), ". For details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode",
            children: "Individual recording"
          }), "."]
        })
      }), _jsx(Accordion, {
        title: "2022.8.12",
        id: "2022812",
        headingLevel: 3,
        value: "2022812",
        children: _jsxs(_components.p, {
          children: ["This release adds support for Amazon S3 in some regions. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/reference/region-vendor",
            children: "Cloud storage configuration"
          }), "."]
        })
      }), _jsxs(Accordion, {
        title: "2022.5.20",
        id: "2022520",
        headingLevel: 3,
        value: "2022520",
        children: [_jsx(_components.p, {
          children: "This release adds the following new feature and API changes:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Mobile web page mode for web page recording"
          })
        }), _jsx(_components.p, {
          children: "This release adds mobile web page mode for web page recording. The API changes are as follows:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "mobile"
            }), " field in ", _jsx(_components.code, {
              children: "extensionServiceConfig"
            }), ". After setting ", _jsx(_components.code, {
              children: "mobile"
            }), " to ", _jsx(_components.code, {
              children: "true"
            }), ", the recording service uses the mobile web page mode to record the current web page."]
          }), `
`, _jsxs(_components.li, {
            children: ["The value range of the ", _jsx(_components.code, {
              children: "videoWidth"
            }), " and ", _jsx(_components.code, {
              children: "videoHeight"
            }), " fields in ", _jsx(_components.code, {
              children: "extensionServiceConfig"
            }), " is changed to [240, 1920]."]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Transcoder script for high availability mechanism"
          })
        }), _jsxs(_components.p, {
          children: ["In composite recording mode, Agora provides a transcoder script for merging the old M3U8 file with the new M3U8 file generated after the service enables the high availability mechanism into an MP4 file. For details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/process-recorded-files/manage-files#server-disconnected-or-process-killed",
            children: "Manage Recorded Files"
          }), "."]
        })]
      }), _jsxs(Accordion, {
        title: "2022.1.20",
        id: "2022120",
        headingLevel: 3,
        value: "2022120",
        children: [_jsx(_components.h4, {
          id: "new-features-1",
          children: "New features"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Individual Audio Non-transcoding Recording"
          })
        }), _jsxs(_components.p, {
          children: ["In order to meet the diverse recording needs of users, this release adds the ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/reference/stream-mode",
            children: _jsx(_components.code, {
              children: "streamMode"
            })
          }), " parameter in the ", _jsx(_components.code, {
            children: "start"
          }), " method to support ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-nontranscoding",
            children: "Individual Audio Non-transcoding Recording"
          }), "."]
        }), _jsxs(_components.p, {
          children: [_jsx(_components.strong, {
            children: "Postpone Audio Mixing"
          }), `
For voice chat use-cases, this release adds the `, _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording",
            children: _jsx(_components.code, {
              children: "appsCollection"
            })
          }), " and ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording",
            children: _jsx(_components.code, {
              children: "transcodeOptions"
            })
          }), " parameters in the ", _jsx(_components.code, {
            children: "start"
          }), " method to support ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/start",
            children: "Postpone Audio Mixing"
          }), ". If you enable this function, the recording service merges and transcodes the recorded files of all user IDs in the specified channel within 24 hours after the recording ends to generate an MP3/M4A/AAC file, and then uploads the recording file to your specified third-party cloud storage."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "A Combined audio and video file after individual recording"
          })
        }), _jsxs(_components.p, {
          children: ["When calling ", _jsx(_components.code, {
            children: "start"
          }), ", set the ", _jsx(_components.code, {
            children: "streamMode"
          }), " field of the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording",
            children: _jsx(_components.code, {
              children: "recordingConfig"
            })
          }), " parameter to ", _jsx(_components.code, {
            children: "standard"
          }), `, you can get a M3U8 audio index file, a M3U8 video index file and a combined M3U8 audio and video index file. If VP9 encoding is used on the web side, a combined MPD audio and video index file are generated.
You can play the combined audio and video index file directly without using script. Agora recommends that you use this mode.`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Support for the third-party cloud storage service encrypting and labeling recording files"
          })
        }), _jsxs(_components.p, {
          children: ["This release adds the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording",
            children: _jsx(_components.code, {
              children: "extensionParams"
            })
          }), " field to support the third-party cloud storage service to encrypt and tag uploaded recording files. This feature is applicable to Amazon S3 and Alibaba Cloud OSS."]
        })]
      }), _jsxs(Accordion, {
        title: "2021.12.09",
        id: "20211209",
        headingLevel: 3,
        value: "20211209",
        children: [_jsx(_components.h4, {
          id: "new-features-2",
          children: "New features"
        }), _jsxs(_components.p, {
          children: ["This release adds support for Alibaba Cloud (", _jsx(_components.code, {
            children: "vendor"
          }), " is ", _jsx(_components.code, {
            children: "2"
          }), ") in the following regions:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "19"
            }), "：AP_Southeast_6"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "20"
            }), "：CN_Heyuan"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "21"
            }), "：CN_Guangzhou"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "22"
            }), "：CN_Chengdu"]
          }), `
`]
        }), _jsxs(_components.p, {
          children: ["For details, see ", _jsx(_components.a, {
            href: "https://www.alibabacloud.com/help/doc-detail/31837.html",
            children: "Alibaba Cloud Documentation"
          }), "."]
        }), _jsx(_components.h4, {
          id: "fixed-issues",
          children: "Fixed issues"
        }), _jsx(_components.p, {
          children: "This release fixed the following issue:"
        }), _jsx(_components.p, {
          children: "When a composite recording started, the user to be recorded did not send streams. When the user sent streams, the user could not display the customized background image or background color after they stopped sending streams or left the channel."
        })]
      }), _jsxs(Accordion, {
        title: "2021.10.29",
        id: "20211029",
        headingLevel: 3,
        value: "20211029",
        children: [_jsx(_components.h4, {
          id: "compatibility",
          children: "Compatibility"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Support for AES-GCM2 encryption"
          })
        }), _jsxs(_components.p, {
          children: ["For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in ", _jsx(_components.code, {
            children: "recordingConfig"
          }), ":"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "AES_128_GCM2"
            }), " and ", _jsx(_components.code, {
              children: "AES_256_GCM2"
            }), " encryption modes in ", _jsx(_components.code, {
              children: "decryptionMode"
            }), " of ", _jsx(_components.code, {
              children: "recordingConfig"
            }), ". The new GCM encryption modes use a more secure KDF (Key Derivation Function) and support setting the key and salt."]
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "salt"
            }), " parameter in ", _jsx(_components.code, {
              children: "recordingConfig"
            }), " to add the salt for the ", _jsx(_components.code, {
              children: "AES_128_GCM2"
            }), " and ", _jsx(_components.code, {
              children: "AES_256_GCM2"
            }), " encryption modes."]
          }), `
`]
        }), _jsx(_components.h4, {
          id: "new-features-3",
          children: "New features"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Push media stream to the CDN during a web page recording"
          })
        }), _jsxs(_components.p, {
          children: ["Adds support for converting the content and audio of a web page into a media stream and pushing it to the CDN during the web page recording. See the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/start",
            children: _jsx(_components.code, {
              children: "start"
            })
          }), ", ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/update",
            children: _jsx(_components.code, {
              children: "update"
            })
          }), " and ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/query",
            children: _jsx(_components.code, {
              children: "query"
            })
          }), " methods of the Agora Cloud Recording RESTful API for details."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Third-party cloud storage"
          })
        }), _jsxs(_components.p, {
          children: ["Adds support for ", _jsx(_components.a, {
            href: "https://cloud.google.com/",
            children: "Google Cloud"
          }), ", ", _jsx(_components.a, {
            href: "https://www.huaweicloud.com/intl/en-us/",
            children: "Huawei Cloud"
          }), " and ", _jsx(_components.a, {
            href: "https://intl.cloud.baidu.com/",
            children: "Baidu AI Cloud"
          }), " as third-party storage platforms."]
        }), _jsx(_components.h4, {
          id: "improvements",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Capture screenshots"
          })
        }), _jsx(_components.p, {
          children: "This release increases the range of the captureInterval of snapshotConfig (in seconds) to [1,3600] from [5,3600] when using the Cloud Recording RESTful API to take screenshots of a video stream."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Output video resolution"
          })
        }), _jsxs(_components.p, {
          children: ["This release increases the upper limit of the output video resolution generated by the web page recording from 1280 x 720 to 1920 x 1080. That is, the range of the ", _jsx(_components.code, {
            children: "videoWidth"
          }), " and ", _jsx(_components.code, {
            children: "videoHeight"
          }), " parameters of the web page recording in ", _jsx(_components.code, {
            children: "extensionServiceConfig"
          }), " is changed to [480, 1920]."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "The estimated maximum number of subscribed users"
          })
        }), _jsxs(_components.p, {
          children: ["To support a larger estimated maximum number of subscribed users, this release adds the following enumeration values of ", _jsx(_components.code, {
            children: "subscribeUidGroup"
          }), " in ", _jsx(_components.code, {
            children: "recordingConfig"
          }), ":"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "4"
            }), ": 17 to 32 user IDs"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "5"
            }), ": 32 to 49 user IDs"]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2021.09.06",
        id: "20210906",
        headingLevel: 3,
        value: "20210906",
        children: [_jsx(_components.h4, {
          id: "compatibility-changes",
          children: "Compatibility changes"
        }), _jsx(_components.p, {
          children: "The new server version requirements for transcoding recorded files are as follows:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "CentOS 7.0 and later x64"
          }), `
`, _jsx(_components.li, {
            children: "Ubuntu 14.04 and later x64"
          }), `
`, _jsx(_components.li, {
            children: "Debian 8.0 and later"
          }), `
`]
        }), _jsx(_components.h4, {
          id: "new-features-4",
          children: "New features"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Web page load timeout detection"
          })
        }), _jsxs(_components.p, {
          children: ["In order to ensure the validity and completeness of page recording, this version supports page load timeout detection function. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout",
            children: "Web Page Load Timeout Detection"
          }), "."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Pause the page recording"
          })
        }), _jsxs(_components.p, {
          children: ["This release adds the ", _jsx(_components.code, {
            children: "onhold"
          }), " parameter to the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/start",
            children: _jsx(_components.code, {
              children: "start"
            })
          }), " and ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/update",
            children: _jsx(_components.code, {
              children: "update"
            })
          }), " methods, which is used to pause the recording when the web page recording starts or is in progress."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Capture screenshots and recording in a recording process"
          })
        }), _jsxs(_components.p, {
          children: ["This release adds support for recording and taking screenshots in a recording process. Only the recording fee is charged. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/screen-capture",
            children: "Capture Screenshots"
          }), "."]
        }), _jsx(_components.h4, {
          id: "improvements-1",
          children: "Improvements"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "../reference/rest-api-overview#71-web_recorder_stopped-web_recorder_stopped",
              children: _jsx(_components.code, {
                children: "The web_recorder_stopped"
              })
            }), " callback adds error codes and error messages to indicate the reason for the abnormal stop of the web page recording. You can take corresponding measures based on the information."]
          }), `
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/update",
              children: _jsx(_components.code, {
                children: "update"
              })
            }), " method adds the ", _jsx(_components.code, {
              children: "webRecordingConfig"
            }), " parameter, which is used to update related parameters during a web page recording."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2021.07.30",
        id: "20210730",
        headingLevel: 3,
        value: "20210730",
        children: [_jsx(_components.p, {
          children: "This release includes the following new feature and API changes:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Screenshot event notification"
          })
        }), _jsxs(_components.p, {
          children: ["This release adds the ", _jsx(_components.a, {
            href: "../reference/rest-api-overview#45-recorder_snapshot_file",
            children: _jsx(_components.code, {
              children: "recorder_snapshot_file"
            })
          }), " callback，which indicates that the screenshot is captured successfully, and returns the name of the screenshot file."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New regions for Amazon S3 cloud storage"
          })
        }), _jsx(_components.p, {
          children: "This release adds support for Amazon S3 in the following regions:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "20"
            }), ": AP_NORTHEAST_3"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "21"
            }), ": EU_NORTH_1"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "22"
            }), ": ME_SOUTH_1"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "23"
            }), ": US_GOV_EAST_1"]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2021.07.07",
        id: "20210707",
        headingLevel: 3,
        value: "20210707",
        children: [_jsx(_components.h4, {
          id: "new-features-5",
          children: "New features"
        }), _jsxs(_components.p, {
          children: ["This release adds ", _jsx(_components.code, {
            children: "maxVideoDuration"
          }), " to the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/start",
            children: _jsx(_components.code, {
              children: "start"
            })
          }), " method to set the maximum duration of the MP4 slice file generated by the web page recording."]
        }), _jsx(_components.h4, {
          id: "improvements-2",
          children: "Improvements"
        }), _jsxs(_components.p, {
          children: ["When the page status is a ", _jsx(_components.code, {
            children: "404"
          }), " or ", _jsx(_components.code, {
            children: "5XX"
          }), " error, the page recording service automatically exits to avoid continuing to record the error page."]
        }), _jsx(_components.h4, {
          id: "fixed-issues-1",
          children: "Fixed issues"
        }), _jsx(_components.p, {
          children: "This release fixes an issue where audio was occasionally lost during a web page recording."
        })]
      }), _jsxs(Accordion, {
        title: "2021.06.10",
        id: "20210610",
        headingLevel: 3,
        value: "20210610",
        children: [_jsx(_components.p, {
          children: "This version was released on June 10, 2021."
        }), _jsx(_components.h4, {
          id: "new-features-6",
          children: "New features"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Network Geofencing"
          })
        }), _jsxs(_components.p, {
          children: ["This release adds the ", _jsx(_components.code, {
            children: "region"
          }), " parameter to the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/acquire",
            children: _jsx(_components.code, {
              children: "acquire"
            })
          }), " method so you can geofence your cloud recording service. If you specify a region, the cloud recording server connects only to the Agora servers within that region. The following regions are supported:"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Mainland China"
          }), `
`, _jsx(_components.li, {
            children: "Asia, excluding Mainland China"
          }), `
`, _jsx(_components.li, {
            children: "North America"
          }), `
`, _jsx(_components.li, {
            children: "Europe"
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Third-party cloud storage"
          })
        }), _jsx(_components.p, {
          children: "This release adds support for Microsoft Azure as a third-party storage solution."
        }), _jsx(_components.h4, {
          id: "improvements-3",
          children: "Improvements"
        }), _jsx(_components.p, {
          children: "This release optimizes the encoding settings for the web page recording, which reduce the bit rate without losing video quality."
        }), _jsx(_components.h4, {
          id: "fixed-issues-2",
          children: "Fixed issues"
        }), _jsx(_components.p, {
          children: "Fixed security issues caused by vulnerabilities in Chrome V8."
        }), _jsx(_components.h4, {
          id: "api-changes",
          children: "API changes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "region"
            }), " parameter in the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/acquire",
              children: _jsx(_components.code, {
                children: "acquire"
              })
            }), " method."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds ", _jsx(_components.code, {
              children: "recorderStartTime"
            }), " in the ", _jsx(_components.a, {
              href: "../reference/rest-api-overview#70-web_recorder_started-web_recorder_started",
              children: _jsx(_components.code, {
                children: "web_recorder_started"
              })
            }), " callback."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.a, {
              href: "../reference/rest-api-overview#73-web_recorder_reload",
              children: _jsx(_components.code, {
                children: "web_recorder_reload"
              })
            }), " callback."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2021.04.29",
        id: "20210429",
        headingLevel: 3,
        value: "20210429",
        children: [_jsx(_components.p, {
          children: "This version was released on April 29, 2021."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsx(_components.h4, {
          id: "mp4-format-in-composite-recording-mode",
          children: "MP4 format in composite recording mode"
        }), _jsxs(_components.p, {
          children: ["From this release, you can get MP4 files after a composite recording. Set ", _jsx(_components.code, {
            children: "avFileType"
          }), " as ", _jsx(_components.code, {
            children: '["hls","mp4"]'
          }), " when you call the start method, and the recording service generates MP4 files once a recording starts."]
        }), _jsx(_components.h4, {
          id: "aes-gcm-encryption",
          children: "AES-GCM encryption"
        }), _jsxs(_components.p, {
          children: ["For use-cases requiring high security, to guarantee the confidentiality, integrity, and authenticity of the data and to improve the computational efficiency of the data encryption, this release adds the following options in ", _jsx(_components.code, {
            children: "decryptionMode"
          }), ":"]
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "128-bit AES encryption, GCM mode."
          }), `
`, _jsx(_components.li, {
            children: "256-bit AES encryption, GCM mode."
          }), `
`]
        }), _jsx(_components.p, {
          children: "Once you enable the built-in encryption, all users in the same channel must use the same encryption mode and key."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsx(_components.p, {
          children: "From this release, the recording service automatically detects and resolves the occasional audio loss issue during a web page recording, which causes the recorded page to refresh. If necessary, you need to guarantee that the status of your web application remains the same before and after a refresh."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API changes"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Adds enumerators ", _jsx(_components.code, {
              children: "5"
            }), " and ", _jsx(_components.code, {
              children: "6"
            }), " for ", _jsx(_components.code, {
              children: "decryptionMode"
            }), " in the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/start",
              children: _jsx(_components.code, {
                children: "start"
              })
            }), " method."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "fileList"
            }), " field in the ", _jsx(_components.a, {
              href: "../reference/rest-api-overview#31-uploaded",
              children: _jsx(_components.code, {
                children: "uploaded"
              })
            }), " and ", _jsx(_components.a, {
              href: "../reference/rest-api-overview#32-backuped",
              children: _jsx(_components.code, {
                children: "backuped"
              })
            }), " callbacks."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2021.03.31",
        id: "20210331",
        headingLevel: 3,
        value: "20210331",
        children: [_jsx(_components.p, {
          children: "This version was released on March 31, 2021."
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New feature"
          })
        }), _jsx(_components.h4, {
          id: "background-images",
          children: "Background images"
        }), _jsxs(_components.p, {
          children: ["In composite recording mode, you can set the background image for both the video canvas and an individual user region. You can update the background image during a recording session. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/customize-the-recording/layout#set-the-background-color-or-background-image",
            children: "Set the background color or background image"
          }), " for details."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Adds a retry logic for Kingsoft Cloud, in which the recording service retries if it fails to upload recorded files to Kingsoft Cloud."
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Fixed issues"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Occasional file loss when uploading slice files to Tencent Cloud Object Storage (COS)."
          }), `
`, _jsx(_components.li, {
            children: "In a web page recording, the recording service could not render emoji."
          }), `
`, _jsxs(_components.li, {
            children: ["When recording a static web page, the recording occasionally failed when the value of ", _jsx(_components.code, {
              children: "videoFps"
            }), " was too high."]
          }), `
`]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API changes"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "backgroundImage"
            }), ", ", _jsx(_components.code, {
              children: "defaultUserBackgroundImage"
            }), " and ", _jsx(_components.code, {
              children: "backgroundConfig"
            }), " fields in the ", _jsx(_components.code, {
              children: "transcodingConfig"
            }), " parameter of the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/start",
              children: _jsx(_components.code, {
                children: "start"
              })
            }), " method."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "backgroundImage"
            }), ", ", _jsx(_components.code, {
              children: "defaultUserBackgroundImage"
            }), " and ", _jsx(_components.code, {
              children: "backgroundConfig"
            }), " fields in the ", _jsx(_components.code, {
              children: "clientRequest"
            }), " parameter of the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/update-layout",
              children: _jsx(_components.code, {
                children: "updateLayout"
              })
            }), " method."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "fileList"
            }), " field in the ", _jsx(_components.a, {
              href: "../reference/rest-api-overview#71-web_recorder_stopped",
              children: _jsx(_components.code, {
                children: "web_recorder_stopped"
              })
            }), " callback."]
          }), `
`]
        })]
      }), _jsx(Accordion, {
        title: "2021.02.05",
        id: "20210205",
        headingLevel: 3,
        value: "20210205",
        children: _jsxs(_components.p, {
          children: ["This release raises the maximum resolution of video sources for ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode",
            children: "web page recording"
          }), ". The recorded web page can now contain video that has a resolution of up to 1920 × 1080."]
        })
      }), _jsxs(Accordion, {
        title: "2020.12.10",
        id: "20201210",
        headingLevel: 3,
        value: "20201210",
        children: [_jsx(_components.p, {
          children: "This release includes the following new feature and API changes:"
        }), _jsx(_components.h4, {
          id: "new-feature",
          children: "New feature"
        }), _jsxs(_components.p, {
          children: ["Adds ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/webpage-mode",
            children: "web page recording"
          }), " mode. In this mode, the content and audio of a specified web page are recorded in a single file."]
        }), _jsx(_components.h4, {
          id: "api-changes-1",
          children: "API changes"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Adds ", _jsx(_components.code, {
              children: "web"
            }), " as a value for ", _jsx(_components.code, {
              children: "mode"
            }), " in the request URL for web page recording."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds ", _jsx(_components.code, {
              children: "scene"
            }), " as a new parameter in the ", _jsx(_components.code, {
              children: "acquire "
            }), "method for setting the application of the cloud recording resources."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds ", _jsx(_components.code, {
              children: '"web_recorder_service"'
            }), " as an extension service in the ", _jsx(_components.code, {
              children: "extensionServiceConfig"
            }), " parameter of the ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/start",
              children: _jsx(_components.code, {
                children: "start"
              })
            }), " method."]
          }), `
`, _jsx(_components.li, {
            children: "Adds the following callbacks, which report the status of web page recording:"
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "../reference/rest-api-overview#70-web_recorder_started",
              children: _jsx(_components.code, {
                children: "web_recorder_started"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "../reference/rest-api-overview#71-web_recorder_stopped",
              children: _jsx(_components.code, {
                children: "web_recorder_stopped"
              })
            })
          }), `
`, _jsx(_components.li, {
            children: _jsx(_components.a, {
              href: "../reference/rest-api-overview#72-web_recorder_capability_limit",
              children: _jsx(_components.code, {
                children: "web_recorder_capability_limit"
              })
            })
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2020.09.16",
        id: "20200916",
        headingLevel: 3,
        value: "20200916",
        children: [_jsx(_components.p, {
          children: "This release improved the stability and performance of the recording service, and fixed the following issues:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Failure to subscribe to a low-quality stream."
          }), `
`, _jsx(_components.li, {
            children: "Occasional failure to record a whole call."
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2020.07.21",
        id: "20200721",
        headingLevel: 3,
        value: "20200721",
        children: [_jsx(_components.p, {
          children: "This release adds the following new feature and API changes:"
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New feature"
          })
        }), _jsx(_components.h4, {
          id: "apsaravideo-for-vod",
          children: "ApsaraVideo for VoD"
        }), _jsxs(_components.p, {
          children: ["In composite recording mode, you can now upload recorded files to ", _jsx(_components.a, {
            href: "https://www.alibabacloud.com/help/doc-detail/51236.htm",
            children: "ApsaraVideo for VoD"
          }), " for further processing."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API changes"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/start",
              children: _jsx(_components.code, {
                children: "start"
              })
            }), " adds the ", _jsx(_components.code, {
              children: "extensionServiceConfig"
            }), " parameter for specifying the configurations of ApsaraVideo for VoD."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.a, {
              href: "../reference/rest-api-overview#60-vod_started",
              children: _jsx(_components.code, {
                children: "vod_started"
              })
            }), " and the ", _jsx(_components.a, {
              href: "../reference/rest-api-overview#61-vod_triggered",
              children: _jsx(_components.code, {
                children: "vod_triggered"
              })
            }), " callbacks, which report the status of uploading recorded files to ApsaraVideo for VoD."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2020.06.12",
        id: "20200612",
        headingLevel: 3,
        value: "20200612",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsx(_components.h4, {
          id: "flexible-user-id-subscription",
          children: "Flexible user ID subscription"
        }), _jsxs(_components.p, {
          children: ["This release provides a more flexible user ID subscription feature, enabling you to set up a whitelist or blacklist for audio and video subscriptions. You can also update the subscription lists during the cloud recording. For details, see ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/customize-the-recording/subscription",
            children: "Set up subscription lists"
          }), "."]
        }), _jsx(_components.h4, {
          id: "callback-for-high-availability",
          children: "Callback for high availability"
        }), _jsxs(_components.p, {
          children: ["This release adds the ", _jsx(_components.a, {
            href: "../reference/rest-api-overview#12-session_failover",
            children: _jsx(_components.code, {
              children: "session_failover"
            })
          }), " event, which occurs when the high availability mechanism is enabled and reports the new recording user ID."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API changes"
          })
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["In ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/start",
              children: _jsx(_components.code, {
                children: "start"
              })
            }), " adds the ", _jsx(_components.code, {
              children: "unSubscribeVideoUids"
            }), " and ", _jsx(_components.code, {
              children: "unSubscribeAudioUids"
            }), " parameters for setting up subscription blacklists."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds ", _jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording/update",
              children: _jsx(_components.code, {
                children: "update"
              })
            }), " for updating the subscription lists during the cloud recording."]
          }), `
`, _jsxs(_components.li, {
            children: ["Adds the ", _jsx(_components.code, {
              children: "session_failover"
            }), " event."]
          }), `
`]
        })]
      }), _jsx(Accordion, {
        title: "2020.05.09",
        id: "20200509",
        headingLevel: 3,
        value: "20200509",
        children: _jsx(_components.p, {
          children: "This release adds support for Kingsoft Cloud."
        })
      }), _jsx(Accordion, {
        title: "2020.04.17",
        id: "20200417",
        headingLevel: 3,
        value: "20200417",
        children: _jsxs(_components.p, {
          children: ["Cloud Recording now supports taking screenshots of the video streams in individual recording mode. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/screen-capture",
            children: "Capture Screenshots"
          }), " for details."]
        })
      }), _jsxs(Accordion, {
        title: "2019.12.16",
        id: "20191216",
        headingLevel: 3,
        value: "20191216",
        children: [_jsxs(_components.p, {
          children: ["This release improved the availability of the cloud recording service. When a server is disconnected or when the process is killed, the cloud recording automatically switches to a new server to resume the service. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/product-overview",
            children: "Fault processing when a cloud recording server is disconnected or the process killed"
          }), " for more information."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "API Changes"
          })
        }), _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording/acquire",
            children: _jsx(_components.code, {
              children: "acquire"
            })
          }), " method, adds the ", _jsx(_components.code, {
            children: "resourceExpiredHour"
          }), " parameter for setting the time limit for all cloud recording method calls."]
        }), _jsxs(_components.p, {
          children: ["Adds the ", _jsx(_components.code, {
            children: "session_exit"
          }), " event, which reports the exit status of the cloud recording service."]
        })]
      }), _jsx(Accordion, {
        title: "2019.11.15",
        id: "20191115",
        headingLevel: 3,
        value: "20191115",
        children: _jsxs(_components.p, {
          children: ["You can now use the ", _jsx(_components.code, {
            children: "query"
          }), " method to get the names of the recorded files immediately after the recording starts."]
        })
      }), _jsx(Accordion, {
        title: "2019.10.24",
        id: "20191024",
        headingLevel: 3,
        value: "20191024",
        children: _jsx(_components.p, {
          children: "This release supports Tencent Cloud as one of the third-party cloud storages."
        })
      }), _jsxs(Accordion, {
        title: "2019.10.08",
        id: "20191008",
        headingLevel: 3,
        value: "20191008",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsx(_components.h4, {
          id: "1-individual-recording",
          children: "1. Individual recording"
        }), _jsxs(_components.p, {
          children: ["The RESTful API adds individual recording mode, which supports recording the audio and video of each user ID separately. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-mode",
            children: "Individual Recording"
          }), " for details. Meanwhile, Agora provides the Audio & Video File Merging script, which you can use to merge the audio and video files generated in individual mode. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files",
            children: "Merge Audio and Video Files"
          }), " for details."]
        }), _jsx(_components.h4, {
          id: "2-record-specified-user-ids",
          children: "2. Record specified user IDs"
        }), _jsxs(_components.p, {
          children: ["The RESTful API adds the ", _jsx(_components.code, {
            children: "subscribeAudioUids"
          }), " and ", _jsx(_components.code, {
            children: "subscribeVideoUids"
          }), " parameters, which allow you to record only specified user IDs."]
        }), _jsx(_components.h4, {
          id: "3-customize-the-directory-of-the-recorded-files",
          children: "3. Customize the directory of the recorded files"
        }), _jsxs(_components.p, {
          children: ["The RESTful API adds the ", _jsx(_components.code, {
            children: "fileNamePrefix"
          }), " parameter, which allows you to specify the directory where you want to store the recorded files in the third-party cloud storage."]
        }), _jsx(_components.h4, {
          id: "4-timestamp-when-the-stream-state-changes",
          children: "4. Timestamp when the stream state changes"
        }), _jsxs(_components.p, {
          children: ["The RESTful API callback service adds the ", _jsx(_components.code, {
            children: "recorder_audio_stream_state_changed"
          }), " and ", _jsx(_components.code, {
            children: "recorder_video_stream_state_changed"
          }), " events to report the time when the state of the audio or video stream changes, as well as the corresponding user ID."]
        }), _jsx(_components.h4, {
          id: "5-format-converter-script",
          children: "5. Format Converter script"
        }), _jsxs(_components.p, {
          children: ["Agora provides the Format Converter script, which you can use to convert between multiple file formats, such as TS, MP3, and MP4. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/process-recorded-files/convert-format",
            children: "Convert File Format"
          }), " for details."]
        }), _jsx(_components.h4, {
          id: "6-synchronized-playback",
          children: "6. Synchronized playback"
        }), _jsxs(_components.p, {
          children: ["You can achieve synchronized playback between the recorded files and other stream files, such as online whiteboards, courseware, and messages, by using the timestamp when the recording starts. You can get the timestamp by using the RESTful API callback service, or by parsing the M3U8 file. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/process-recorded-files/playback",
            children: "Synchronized Playback"
          }), " for details."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsxs(_components.p, {
          children: ["When an error occurs, you receive the error message in the HTTP response body, instead of just the error code. See ", _jsx(_components.a, {
            href: "../reference/rest-api-overview#error-codes-for-the-agora-cloud-recording-service",
            children: "Agora Cloud Recording RESTful API"
          }), " for detailed information about the error codes."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Fixed issue"
          })
        }), _jsxs(_components.p, {
          children: ["When uploading fails after you use the wrong ", _jsx(_components.code, {
            children: "bucket"
          }), " and ", _jsx(_components.code, {
            children: "key"
          }), " values of the third-party cloud storage, Agora Cloud Recording returns an error instead of uploading the recorded files to Agora Cloud Backup."]
        })]
      }), _jsxs(Accordion, {
        title: "2019.07.22",
        id: "20190722",
        headingLevel: 3,
        value: "20190722",
        children: [_jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "New features"
          })
        }), _jsx(_components.h4, {
          id: "customized-video-layout",
          children: "Customized video layout"
        }), _jsxs(_components.p, {
          children: ["The RESTful API adds a customized layout for the recording video. See ", _jsx(_components.a, {
            href: "/en/realtime-media/cloud-recording/build/customize-the-recording/layout#customize-the-video-layout",
            children: "Set Video Layout"
          }), " for details."]
        }), _jsxs(_components.p, {
          children: ["You can set the ", _jsx(_components.code, {
            children: "mixedVideoLayout"
          }), " parameter as ", _jsx(_components.code, {
            children: "3"
          }), " and set the regions for each user in the ", _jsx(_components.code, {
            children: "layoutConfig"
          }), " parameter when starting a recording."]
        }), _jsxs(_components.p, {
          children: ["You can update the layout anytime during the recording by the ", _jsx(_components.code, {
            children: "updateLayout"
          }), " method."]
        }), _jsx(_components.h4, {
          id: "customized-background-color",
          children: "Customized background color"
        }), _jsxs(_components.p, {
          children: ["The RESTful API adds the ", _jsx(_components.code, {
            children: "backgroundColor"
          }), " parameter to support customized background colors for the video layout."]
        }), _jsx(_components.h4, {
          id: "timestamps",
          children: "Timestamps"
        }), _jsxs(_components.p, {
          children: ["To get the accurate starting time of a recording, the RESTful API provides the Unix timestamp of when the first slicing starts in the response of the ", _jsx(_components.code, {
            children: "query"
          }), " method. The RESTful API callback service adds the ", _jsx(_components.code, {
            children: "recorder_slice_start"
          }), " event to report the time when the first slicing starts and the time when the last recording fails."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Improvement"
          })
        }), _jsxs(_components.p, {
          children: ["Optimizes the verification of whether ", _jsx(_components.code, {
            children: "resourceId"
          }), " corresponds with ", _jsx(_components.code, {
            children: "uid"
          }), " and ", _jsx(_components.code, {
            children: "cname"
          }), " when calling the RESTful API."]
        }), _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Fixed issue"
          })
        }), _jsx(_components.p, {
          children: "Fixed minor issues in the default video layout (floating layout)."
        })]
      }), _jsx(Accordion, {
        title: "2019.07.02",
        id: "20190702",
        headingLevel: 3,
        value: "20190702",
        children: _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Changes the default background color in the composite layout to black."
          }), `
`, _jsx(_components.li, {
            children: "Reduces video freeze under poor network conditions."
          }), `
`]
        })
      }), _jsxs(Accordion, {
        title: "2019.06.13",
        id: "20190613",
        headingLevel: 3,
        value: "20190613",
        children: [_jsx(_components.p, {
          children: "This release supports RESTful APIs. With the RESTful APIs, you can use Agora Cloud Recording through HTTP requests without integrating the SDK."
        }), _jsx(_components.p, {
          children: "See the following documents for details:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/index",
              children: "RESTful API Quickstart"
            }), ": Start cloud recording with RESTful APIs."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "/en/api-reference/api-ref/cloud-recording",
              children: "RESTful API Reference"
            }), ": Details of the RESTful API methods."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.a, {
              href: "../reference/rest-api-overview",
              children: "RESTful API Callback Service"
            }), ": Enable the callback service to receive notifications of Agora Cloud Recording."]
          }), `
`]
        })]
      }), _jsxs(Accordion, {
        title: "2019.04.30",
        id: "20190430",
        headingLevel: 3,
        value: "20190430",
        children: [_jsx(_components.p, {
          children: "This is the first release of Agora Cloud Recording with the following functions:"
        }), _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "High-quality voice and video recordings."
          }), `
`, _jsx(_components.li, {
            children: "Mixed-stream voice and video recordings of all users in a channel."
          }), `
`, _jsx(_components.li, {
            children: "Three composite video layouts: float (default), best fit, and vertical."
          }), `
`, _jsx(_components.li, {
            children: "Third-party cloud storage. Agora Cloud Recording supports Amazon S3, and Alibaba Cloud."
          }), `
`, _jsx(_components.li, {
            children: "Provides C++ and Java SDK packages."
          }), `
`]
        }), _jsx("a", {
          id: "notifications"
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "notifications",
      children: "Notifications"
    }), `
`, _jsx(_components.h3, {
      id: "202210",
      children: "2022.10"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "After you enable Notifications, your server receives the events that you subscribe to in the form of HTTPS requests."
      }), `
`, _jsx(_components.li, {
        children: `To improve communication security between the Notifications and your server, Agora SDRTN® uses signatures
for identity verification.`
      }), `
`, _jsx(_components.li, {
        children: "As of this release, you can use Notifications in conjunction with this product."
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
