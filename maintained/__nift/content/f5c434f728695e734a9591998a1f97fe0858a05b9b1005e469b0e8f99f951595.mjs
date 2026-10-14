import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Manage recorded files",
  description: "Know the naming conventions of the recorded files, how to parse the information in the M3U8 file, and when slicing occurs"
};
export let _markdown = `

Agora Cloud Recording generates M3U8, TS/WebM, and MP4 files. To process these recorded files, such as [merging audio and video](/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files), [converting file formats](/en/realtime-media/cloud-recording/build/process-recorded-files/convert-format), or [synchronizing playback](/en/realtime-media/cloud-recording/build/process-recorded-files/playback) with other streams, it is essential to understand the following key aspects of recorded files:

* The naming convention
* How to parse information from M3U8 file
* The conditions under which file slicing occurs

## Naming conventions [#naming-conventions]

### Individual recording [#individual-recording]

The naming conventions for individual recordings are as follows:

* M3U8 file: \`<sid>_<cname>__uid_s_<uid>__uid_e_<type>.m3u8\`
* TS file: \`<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.ts\`
* WebM file: \`<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.webm\`

Where:

* \`<sid>\` is the recording ID.
* \`<cname>\` is the channel name.
* \`<uid>\` is the user ID.
* \`<type>\` is the file type (\`audio\` or \`video\`).
* \`<utc>\` is the UTC time when the slice file starts. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. When \`utc\` is \`20190611073246073\`, for example, the slice file starts at 07:32:46.073 a.m., June 11, 2019.

For example, in the file name:

\`\`\`text
sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125142485.ts
\`\`\`

\`sid713476478245\` is the recording ID, \`cnameagora\` is the channel name, \`123\` is the user ID, \`video\` is the file type, and the start time of the recording is 12:51:42.485 a.m., September 20, 2019.

### Individual audio non-transcoding recording [#individual-audio-non-transcoding-recording]

The naming conventions of [individual audio non-transcoding recording](/en/realtime-media/cloud-recording/build/start-a-recording/individual-nontranscoding) are as follows:

* M3U8 file: \`<sid>_<cname>__uid_s_<uid>__uid_e_<type>.m3u8\`
* TS file: \`<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.ts\`

Where:

* \`<sid>\` is the recording ID.
* \`<cname>\` is the channel name.
* \`<uid>\` is the user ID.
* \`<type>\` is the file type (\`audio\`).
* \`<utc>\` is the UTC time when the slice file starts. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. When \`utc\` is \`20190611073246073\`, for example, the slice file starts at 07:32:46.073 a.m., June 11, 2019.

<CalloutContainer type="info">
  <CalloutDescription>
    In individual audio non-transcoding recording, only M3U8 and TS files are generated and uploaded to the third-party cloud storage in real time.
  </CalloutDescription>
</CalloutContainer>

### Composite recording [#composite-recording]

In composite recording mode, the naming conventions are as follows:

* M3U8 files: \`<sid>_<cname>.m3u8\`
* TS files: \`<sid>_<cname>_<utc>.ts\`
* MP4 files: \`<sid>_<cname>_<index>.mp4\`

Where:

* \`<sid>\` is the recording ID.
* \`<cname>\` is the channel name.
* \`<utc>\` is the starting time (UTC) of the TS file. The time zone is UTC+0. The timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if \`<utc>\` is \`20190611073246073\`, the starting time of the TS file is 07:32:46.073 a.m., June 11, 2019.
* \`<index>\` is the index number of the MP4 file. The index number of the first MP4 file is \`0\`. The recording service automatically generates an additional MP4 file when the length of the current file reaches approximately three hours or the size of the file exceeds approximately 2 GB.

<CalloutContainer type="info">
  <CalloutDescription>
    To get MP4 files, set \`avFileType\` as \`["hls","mp4"]\`.
  </CalloutDescription>
</CalloutContainer>

### Web page recording [#web-page-recording]

In web page recording mode, the naming conventions are as follows:

* M3U8 files: \`<sid>_<cname>.m3u8\`
* TS files: \`<sid>_<cname>_<utc>.ts\`
* MP4 file: \`<sid>_<cname>_<index>.mp4\`

Where:

* \`<sid>\` is the recording ID.
* \`<cname>\` is the value of \`cname\` you use in the \`acquire\` method.
* \`<utc>\` is the starting time (UTC) of the TS file. The time zone is UTC+0. The timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if \`<utc>\` is \`20190611073246073\`, the starting time of the TS file is 07:32:46.073 a.m., June 11, 2019.
* \`<index>\` is the index number of the MP4 file. The index number of the first MP4 file is \`0\`. The recording service automatically generates a new MP4 file when the length of the current file reaches about three hours or the size of the file exceeds about 2 GB.

To generate an MP4 file, add \`mp4\` to \`avFileType\`

<CalloutContainer type="info">
  <CalloutDescription>
    Since the filename does not support special characters, any special characters in \`cname\`, including \`!\`, \`@\`, \`#\`, \`$\`, \`%\`, \`^\`, \`&\`, \`*\`, \`(\`, \`)\`, \`+\`, \`_\`, \`.\`, \`=\`, \`[\`, \`]\`, \`{\`, \`}\`, \`~\`, \`|\`, \`,\`, \`;\`, \`:\`, \`?\`, \`<\`, and \`>\`, are replaced with \`-\` in the filename.
  </CalloutDescription>
</CalloutContainer>

## Recorded files in abnormal conditions [#recorded-files-in-abnormal-conditions]

### Upload to cloud storage failed [#upload-to-cloud-storage-failed]

If Agora Cloud Recording fails to upload the recorded files to the third-party cloud storage, it transfers the files to the third-party cloud storage from the Agora Cloud Backup. In order not to overwrite the latest files, the transferred M3U8 file is appended with \`_<tick>_<index>.m3u8\`, where:

* \`<tick>\` is related to the time when the index file is generated.
* \`<index>\` is the index of the M3U8 file. The first version to be transferred has an index of \`0\`. The higher the index, the newer the version of the file.

For example:

\`\`\`text
sid713476478245_cnameagora__uid_s_123__uid_e_video_22194679897_3.m3u8
\`\`\`

where the \`3\` at the end indicates that this is the fourth version of the M3U8 file.

<CalloutContainer type="info">
  <CalloutDescription>
    When you find transferred M3U8 file(s) in the third-party cloud storage, compare the M3U8 file with the highest index to the file without a suffix, and choose the larger file.
  </CalloutDescription>
</CalloutContainer>

The cloud recording service does not append the suffix to the names of TS/WebM files and MP4 files.

### Server disconnected or process killed [#server-disconnected-or-process-killed]

When [a cloud recording server is disconnected or the process killed](../../index#features), the cloud recording service enables the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. Each time the service enables the high availability mechanism, it creates a new M3U8 file, which contains the index information of the recorded slice files from the time when the service resumes. The file name is prefixed with \`bak<n>\`, where \`n\` stands for the number of times the mechanism is enabled in a recording, starting with \`0\`.

For example, in the filename \`bak0_sid713476478245_cnameagora.m3u8\`, \`bak0\` indicates that this file is generated after enabling the high availability mechanism for the first time.

After the cloud recording service enables the high availability mechanism, the names of the recorded TS/WebM files and the MP4 files are also prefixed with \`bak<n>\`.

To merge the original M3U8 file and the new M3U8 file generated after enabling the high availability mechanism into an MP4 file, use the [transcoding script](https://download.agora.io/acrsdk/release/rtsc-ha_transcoder.v1.1.9-202204180321-release-prod.tar.gz) for file merging as follows (only applicable to merged recording files):

1. Ensure that the server executing the transcoding script uses one of the following systems:
   * Ubuntu 14.04+ x64
   * CentOS 7.0+ x64
   * Debian 8.0+

2. Enter the \`transcoder\` and \`ffmpeg\` paths in the terminal.

3. Execute the following command:

   \`\`\`sh
   ./ha_transcoder.exe -inputPath "<YourinputPath>" -ignoreNotExist -concatM3u8 -concatStrategy 0
   \`\`\`

   | Parameter         | Description                                                                                                                                                                                                                                                                                                                                                                                                       | Required |
   | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
   | \`-concatM3u8\`     | Merge the original M3U8 file and the new M3U8 file generated after enabling the high availability mechanism into one MP4 file. If this parameter is not set, the original M3U8 file and the new M3U8 file will be converted into MP4 files respectively.                                                                                                                                                          | no       |
   | \`-concatStrategy\` | Merge strategy, this parameter must be consistent with \`-concatM3u8\`. Can be set to:- 0: (Default) If there is an overlap between two M3U8 files, the overlapping part of the original M3U8 file will be cut off; if there is a time interval between the two M3U8 files, the black frame of the corresponding time interval will be added.
   - 1: Merge two M3U8 files regardless of the overlap or time interval. | no       |
   | \`-ignoreNotExist\` | Missing TS files are ignored and black frames are used instead. If this parameter is not set, the absence of any TS file will cause the conversion to fail.                                                                                                                                                                                                                                                       | no       |
   | \`-inputPath\`      | Input path, used to specify the absolute storage path of the files to be merged.                                                                                                                                                                                                                                                                                                                                  | yes      |
   | \`-outputPath\`     | Output path, used to specify the absolute storage path of the merged files. Defaults to the same as the input path.                                                                                                                                                                                                                                                                                               | no       |

## File size [#file-size]

In an individual recording, the size of a recorded file depends on the audio and video bitrates of the media source and the duration of the recording. For example, if the audio bitrate is 48 Kbps, the video bitrate is 500 Kbps, and the recording lasts for 30 minutes (1800 seconds), the size of the recorded file is approximately (48 Kbps + 500 Kbps) \\* 1800 s = 986.4 Mbit, or 123.3 MB.

In a composite recording, the size of a recorded file depends on the audio and video bitrates of the transcoding configurations and the duration of the recording. For example, if you set the \`audioProfile\` to \`1\` (sets the audio bitrate to 128 Kbps), \`bitrate\` to 800 (sets the video bitrate to 800 Kbps), and the recording lasts for 30 minutes (1800 seconds), the size of the recorded file is approximately (128 Kbps + 800 Kbps) \\* 1800 s = 1670.4 Mbit, or 208.8 MB.

## M3U8 file [#m3u8-file]

The M3U8 file contains the file names of several slice files and descriptive symbols. The M3U8 file generated by Agora Cloud Recording has three descriptive symbols:

* \`#EXT-X-AGORA-TRACK-EVENT:EVENT=<event>,TRACK_TYPE=<type>,TIME=<utc>\`: The first slice file after a stream starts or restarts after an interruption has this descriptive symbol, which describes the state of the stream.
  * \`EVENT\`: Name of the event. Currently, \`EVENT\` can only be \`START\`, which means that the stream has started or restarted after an interruption.
  * \`TRACK_TYPE\`: The content of the slice file, \`AUDIO\` or \`VIDEO\`.
  * \`TIME\`: The time when the state of the stream changes. \`TIME\` is in UTC and the time zone is UTC+0.

* \`#EXT-X-AGORA-ROTATE:WIDTH=<width>,HEIGHT=<height>,ROTATE=<rotate>,TIME=<utc>\`: The first slice file after a video rotates has this descriptive symbol, which describes the details of the rotation. A slice file may have several such symbols.
  * \`WIDTH\`: Width of the video.
  * \`HEIGHT\`: Height of the video.
  * \`ROTATE\`: The degrees by which the video rotates anticlockwise. \`ROTATE\` can only be \`0\`, \`90\`, \`180\`, or \`270\`.
  * \`TIME\`: The time when the video rotates. \`TIME\` is in UTC and the time zone is UTC+0.

* \`#EXTINF:<length>\`: Length of the slice file in seconds.

For example:

\`\`\`text
#EXT-X-AGORA-ROTATE:WIDTH=640,HEIGHT=480,ROTATE=90,TIME=20190920125142485
#EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=VIDEO,TIME=20190920125142485
#EXTINF:6.332000
sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125142485.ts
\`\`\`

The sample M3U8 file above contains the file name of a TS file and three descriptive symbols, which indicates that the TS file is the first slice file after the video stream starts or restarts after an interruption, the video rotates by 90 degrees anticlockwise, and the TS file lasts for 6.332 seconds.

<CalloutContainer type="info">
  <CalloutDescription>
    If you face compatibility issues in some M3U8 players due to the missing comma after \`#EXTINF:<length>\`, set \`privateParams\` in \`recordingConfig\` in the [start](/en/api-reference/api-ref/cloud-recording#start) request as follows: \`"recordingConfig": {"privateParams":"{\\"correctEXTINF\\":true}", ...}\`.
  </CalloutDescription>
</CalloutContainer>

## Slicing [#slicing]

### Video file slicing [#video-file-slicing]

Slicing occurs when any of the following conditions is met:

* When an I frame appears and the slice file reaches 15 seconds.
* The codec changes.
* The width or height of the video changes.
* The video stream is interrupted.
* When you set the browser to use the H.264 codec for encoding, forced slicing occurs when the slice file reaches 5.5 minutes, or the file size is over 50 MB. After forced slicing, the first frame of the new slice file might not be an I frame, in which case the slice file cannot be decoded and played directly. For example, in the communication channel, sometimes only one I frame may appear in several hours. In such case, the first frame of the new slice file is probably not an I frame.

When you set the browser to use the VP9 codec, Agora Cloud Recording does not enforce file slicing.

### Audio file slicing [#audio-file-slicing]

Slicing occurs when the slice file reaches 15 seconds.

### Sample M3U8 file for audio [#sample-m3u8-file-for-audio]

\`\`\`text
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:18
#EXT-X-DISCONTINUITY
#EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=AUDIO,TIME=20190920125142289
#EXTINF:15.019000
sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125142289.ts
#EXTINF:15.019000
sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125157307.ts
#EXTINF:15.019000
sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125212326.ts
#EXTINF:15.019000
sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125227345.ts
#EXTINF:12.523000
sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125242363.ts
#EXT-X-ENDLIST
\`\`\`

### Sample M3U8 file for video [#sample-m3u8-file-for-video]

\`\`\`text
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:34
#EXT-X-DISCONTINUITY
#EXT-X-AGORA-ROTATE:WIDTH=640,HEIGHT=480,ROTATE=0,TIME=20190920125142485
#EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=VIDEO,TIME=20190920125142485
#EXTINF:6.332000
sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125142485.ts
#EXT-X-AGORA-ROTATE:WIDTH=1280,HEIGHT=720,ROTATE=0,TIME=20190920125149174
#EXT-X-DISCONTINUITY
#EXTINF:17.442000
sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125149174.ts
#EXT-X-DISCONTINUITY
#EXT-X-AGORA-ROTATE:WIDTH=640,HEIGHT=480,ROTATE=0,TIME=20190920125206616
#EXTINF:33.326000
sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125206616.ts
#EXT-X-DISCONTINUITY
#EXT-X-AGORA-ROTATE:WIDTH=1280,HEIGHT=720,ROTATE=0,TIME=20190920125239942
#EXTINF:14.815000
sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125239942.ts
#EXT-X-ENDLIST
\`\`\`
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora Cloud Recording generates M3U8, TS/WebM, and MP4 files. To process these recorded files, such as merging audio and video, converting file formats, or synchronizing playback with other streams, it is essential to understand the following key aspects of recorded files:"
  }, {
    heading: undefined,
    content: "The naming convention"
  }, {
    heading: undefined,
    content: "How to parse information from M3U8 file"
  }, {
    heading: undefined,
    content: "The conditions under which file slicing occurs"
  }, {
    heading: "individual-recording",
    content: "The naming conventions for individual recordings are as follows:"
  }, {
    heading: "individual-recording",
    content: "M3U8 file: `<sid>_<cname>__uid_s_<uid>__uid_e_<type>.m3u8`"
  }, {
    heading: "individual-recording",
    content: "TS file: `<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.ts`"
  }, {
    heading: "individual-recording",
    content: "WebM file: `<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.webm`"
  }, {
    heading: "individual-recording",
    content: "Where:"
  }, {
    heading: "individual-recording",
    content: "`<sid>` is the recording ID."
  }, {
    heading: "individual-recording",
    content: "`<cname>` is the channel name."
  }, {
    heading: "individual-recording",
    content: "`<uid>` is the user ID."
  }, {
    heading: "individual-recording",
    content: "`<type>` is the file type (`audio` or `video`)."
  }, {
    heading: "individual-recording",
    content: "`<utc>` is the UTC time when the slice file starts. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. When `utc` is `20190611073246073`, for example, the slice file starts at 07:32:46.073 a.m., June 11, 2019."
  }, {
    heading: "individual-recording",
    content: "For example, in the file name:"
  }, {
    heading: "individual-recording",
    content: "`sid713476478245` is the recording ID, `cnameagora` is the channel name, `123` is the user ID, `video` is the file type, and the start time of the recording is 12:51:42.485 a.m., September 20, 2019."
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "The naming conventions of individual audio non-transcoding recording are as follows:"
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "M3U8 file: `<sid>_<cname>__uid_s_<uid>__uid_e_<type>.m3u8`"
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "TS file: `<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.ts`"
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "Where:"
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "`<sid>` is the recording ID."
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "`<cname>` is the channel name."
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "`<uid>` is the user ID."
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "`<type>` is the file type (`audio`)."
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "`<utc>` is the UTC time when the slice file starts. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. When `utc` is `20190611073246073`, for example, the slice file starts at 07:32:46.073 a.m., June 11, 2019."
  }, {
    heading: "individual-audio-non-transcoding-recording",
    content: "In individual audio non-transcoding recording, only M3U8 and TS files are generated and uploaded to the third-party cloud storage in real time."
  }, {
    heading: "composite-recording",
    content: "In composite recording mode, the naming conventions are as follows:"
  }, {
    heading: "composite-recording",
    content: "M3U8 files: `<sid>_<cname>.m3u8`"
  }, {
    heading: "composite-recording",
    content: "TS files: `<sid>_<cname>_<utc>.ts`"
  }, {
    heading: "composite-recording",
    content: "MP4 files: `<sid>_<cname>_<index>.mp4`"
  }, {
    heading: "composite-recording",
    content: "Where:"
  }, {
    heading: "composite-recording",
    content: "`<sid>` is the recording ID."
  }, {
    heading: "composite-recording",
    content: "`<cname>` is the channel name."
  }, {
    heading: "composite-recording",
    content: "`<utc>` is the starting time (UTC) of the TS file. The time zone is UTC+0. The timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if `<utc>` is `20190611073246073`, the starting time of the TS file is 07:32:46.073 a.m., June 11, 2019."
  }, {
    heading: "composite-recording",
    content: "`<index>` is the index number of the MP4 file. The index number of the first MP4 file is `0`. The recording service automatically generates an additional MP4 file when the length of the current file reaches approximately three hours or the size of the file exceeds approximately 2 GB."
  }, {
    heading: "composite-recording",
    content: 'To get MP4 files, set `avFileType` as `["hls","mp4"]`.'
  }, {
    heading: "web-page-recording",
    content: "In web page recording mode, the naming conventions are as follows:"
  }, {
    heading: "web-page-recording",
    content: "M3U8 files: `<sid>_<cname>.m3u8`"
  }, {
    heading: "web-page-recording",
    content: "TS files: `<sid>_<cname>_<utc>.ts`"
  }, {
    heading: "web-page-recording",
    content: "MP4 file: `<sid>_<cname>_<index>.mp4`"
  }, {
    heading: "web-page-recording",
    content: "Where:"
  }, {
    heading: "web-page-recording",
    content: "`<sid>` is the recording ID."
  }, {
    heading: "web-page-recording",
    content: "`<cname>` is the value of `cname` you use in the `acquire` method."
  }, {
    heading: "web-page-recording",
    content: "`<utc>` is the starting time (UTC) of the TS file. The time zone is UTC+0. The timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if `<utc>` is `20190611073246073`, the starting time of the TS file is 07:32:46.073 a.m., June 11, 2019."
  }, {
    heading: "web-page-recording",
    content: "`<index>` is the index number of the MP4 file. The index number of the first MP4 file is `0`. The recording service automatically generates a new MP4 file when the length of the current file reaches about three hours or the size of the file exceeds about 2 GB."
  }, {
    heading: "web-page-recording",
    content: "To generate an MP4 file, add `mp4` to `avFileType`"
  }, {
    heading: "web-page-recording",
    content: "Since the filename does not support special characters, any special characters in `cname`, including `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `+`, `_`, `.`, `=`, `[`, `]`, `{`, `}`, `~`, `|`, `,`, `;`, `:`, `?`, `<`, and `>`, are replaced with `-` in the filename."
  }, {
    heading: "upload-to-cloud-storage-failed",
    content: "If Agora Cloud Recording fails to upload the recorded files to the third-party cloud storage, it transfers the files to the third-party cloud storage from the Agora Cloud Backup. In order not to overwrite the latest files, the transferred M3U8 file is appended with `_<tick>_<index>.m3u8`, where:"
  }, {
    heading: "upload-to-cloud-storage-failed",
    content: "`<tick>` is related to the time when the index file is generated."
  }, {
    heading: "upload-to-cloud-storage-failed",
    content: "`<index>` is the index of the M3U8 file. The first version to be transferred has an index of `0`. The higher the index, the newer the version of the file."
  }, {
    heading: "upload-to-cloud-storage-failed",
    content: "For example:"
  }, {
    heading: "upload-to-cloud-storage-failed",
    content: "where the `3` at the end indicates that this is the fourth version of the M3U8 file."
  }, {
    heading: "upload-to-cloud-storage-failed",
    content: "When you find transferred M3U8 file(s) in the third-party cloud storage, compare the M3U8 file with the highest index to the file without a suffix, and choose the larger file."
  }, {
    heading: "upload-to-cloud-storage-failed",
    content: "The cloud recording service does not append the suffix to the names of TS/WebM files and MP4 files."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "When a cloud recording server is disconnected or the process killed, the cloud recording service enables the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. Each time the service enables the high availability mechanism, it creates a new M3U8 file, which contains the index information of the recorded slice files from the time when the service resumes. The file name is prefixed with `bak<n>`, where `n` stands for the number of times the mechanism is enabled in a recording, starting with `0`."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "For example, in the filename `bak0_sid713476478245_cnameagora.m3u8`, `bak0` indicates that this file is generated after enabling the high availability mechanism for the first time."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "After the cloud recording service enables the high availability mechanism, the names of the recorded TS/WebM files and the MP4 files are also prefixed with `bak<n>`."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "To merge the original M3U8 file and the new M3U8 file generated after enabling the high availability mechanism into an MP4 file, use the transcoding script for file merging as follows (only applicable to merged recording files):"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Ensure that the server executing the transcoding script uses one of the following systems:"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Ubuntu 14.04+ x64"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "CentOS 7.0+ x64"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Debian 8.0+"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Enter the `transcoder` and `ffmpeg` paths in the terminal."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Execute the following command:"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Parameter"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Description"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Required"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "`-concatM3u8`"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Merge the original M3U8 file and the new M3U8 file generated after enabling the high availability mechanism into one MP4 file. If this parameter is not set, the original M3U8 file and the new M3U8 file will be converted into MP4 files respectively."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "no"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "`-concatStrategy`"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Merge strategy, this parameter must be consistent with `-concatM3u8`. Can be set to:- 0: (Default) If there is an overlap between two M3U8 files, the overlapping part of the original M3U8 file will be cut off; if there is a time interval between the two M3U8 files, the black frame of the corresponding time interval will be added.\n- 1: Merge two M3U8 files regardless of the overlap or time interval."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "no"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "`-ignoreNotExist`"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Missing TS files are ignored and black frames are used instead. If this parameter is not set, the absence of any TS file will cause the conversion to fail."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "no"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "`-inputPath`"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Input path, used to specify the absolute storage path of the files to be merged."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "yes"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "`-outputPath`"
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "Output path, used to specify the absolute storage path of the merged files. Defaults to the same as the input path."
  }, {
    heading: "server-disconnected-or-process-killed",
    content: "no"
  }, {
    heading: "file-size",
    content: "In an individual recording, the size of a recorded file depends on the audio and video bitrates of the media source and the duration of the recording. For example, if the audio bitrate is 48 Kbps, the video bitrate is 500 Kbps, and the recording lasts for 30 minutes (1800 seconds), the size of the recorded file is approximately (48 Kbps + 500 Kbps) \\* 1800 s = 986.4 Mbit, or 123.3 MB."
  }, {
    heading: "file-size",
    content: "In a composite recording, the size of a recorded file depends on the audio and video bitrates of the transcoding configurations and the duration of the recording. For example, if you set the `audioProfile` to `1` (sets the audio bitrate to 128 Kbps), `bitrate` to 800 (sets the video bitrate to 800 Kbps), and the recording lasts for 30 minutes (1800 seconds), the size of the recorded file is approximately (128 Kbps + 800 Kbps) \\* 1800 s = 1670.4 Mbit, or 208.8 MB."
  }, {
    heading: "m3u8-file",
    content: "The M3U8 file contains the file names of several slice files and descriptive symbols. The M3U8 file generated by Agora Cloud Recording has three descriptive symbols:"
  }, {
    heading: "m3u8-file",
    content: "`#EXT-X-AGORA-TRACK-EVENT:EVENT=<event>,TRACK_TYPE=<type>,TIME=<utc>`: The first slice file after a stream starts or restarts after an interruption has this descriptive symbol, which describes the state of the stream."
  }, {
    heading: "m3u8-file",
    content: "`EVENT`: Name of the event. Currently, `EVENT` can only be `START`, which means that the stream has started or restarted after an interruption."
  }, {
    heading: "m3u8-file",
    content: "`TRACK_TYPE`: The content of the slice file, `AUDIO` or `VIDEO`."
  }, {
    heading: "m3u8-file",
    content: "`TIME`: The time when the state of the stream changes. `TIME` is in UTC and the time zone is UTC+0."
  }, {
    heading: "m3u8-file",
    content: "`#EXT-X-AGORA-ROTATE:WIDTH=<width>,HEIGHT=<height>,ROTATE=<rotate>,TIME=<utc>`: The first slice file after a video rotates has this descriptive symbol, which describes the details of the rotation. A slice file may have several such symbols."
  }, {
    heading: "m3u8-file",
    content: "`WIDTH`: Width of the video."
  }, {
    heading: "m3u8-file",
    content: "`HEIGHT`: Height of the video."
  }, {
    heading: "m3u8-file",
    content: "`ROTATE`: The degrees by which the video rotates anticlockwise. `ROTATE` can only be `0`, `90`, `180`, or `270`."
  }, {
    heading: "m3u8-file",
    content: "`TIME`: The time when the video rotates. `TIME` is in UTC and the time zone is UTC+0."
  }, {
    heading: "m3u8-file",
    content: "`#EXTINF:<length>`: Length of the slice file in seconds."
  }, {
    heading: "m3u8-file",
    content: "For example:"
  }, {
    heading: "m3u8-file",
    content: "The sample M3U8 file above contains the file name of a TS file and three descriptive symbols, which indicates that the TS file is the first slice file after the video stream starts or restarts after an interruption, the video rotates by 90 degrees anticlockwise, and the TS file lasts for 6.332 seconds."
  }, {
    heading: "m3u8-file",
    content: 'If you face compatibility issues in some M3U8 players due to the missing comma after `#EXTINF:<length>`, set `privateParams` in `recordingConfig` in the start request as follows: `"recordingConfig": {"privateParams":"{\\"correctEXTINF\\":true}", ...}`.'
  }, {
    heading: "video-file-slicing",
    content: "Slicing occurs when any of the following conditions is met:"
  }, {
    heading: "video-file-slicing",
    content: "When an I frame appears and the slice file reaches 15 seconds."
  }, {
    heading: "video-file-slicing",
    content: "The codec changes."
  }, {
    heading: "video-file-slicing",
    content: "The width or height of the video changes."
  }, {
    heading: "video-file-slicing",
    content: "The video stream is interrupted."
  }, {
    heading: "video-file-slicing",
    content: "When you set the browser to use the H.264 codec for encoding, forced slicing occurs when the slice file reaches 5.5 minutes, or the file size is over 50 MB. After forced slicing, the first frame of the new slice file might not be an I frame, in which case the slice file cannot be decoded and played directly. For example, in the communication channel, sometimes only one I frame may appear in several hours. In such case, the first frame of the new slice file is probably not an I frame."
  }, {
    heading: "video-file-slicing",
    content: "When you set the browser to use the VP9 codec, Agora Cloud Recording does not enforce file slicing."
  }, {
    heading: "audio-file-slicing",
    content: "Slicing occurs when the slice file reaches 15 seconds."
  }],
  headings: [{
    id: "naming-conventions",
    content: "Naming conventions"
  }, {
    id: "individual-recording",
    content: "Individual recording"
  }, {
    id: "individual-audio-non-transcoding-recording",
    content: "Individual audio non-transcoding recording"
  }, {
    id: "composite-recording",
    content: "Composite recording"
  }, {
    id: "web-page-recording",
    content: "Web page recording"
  }, {
    id: "recorded-files-in-abnormal-conditions",
    content: "Recorded files in abnormal conditions"
  }, {
    id: "upload-to-cloud-storage-failed",
    content: "Upload to cloud storage failed"
  }, {
    id: "server-disconnected-or-process-killed",
    content: "Server disconnected or process killed"
  }, {
    id: "file-size",
    content: "File size"
  }, {
    id: "m3u8-file",
    content: "M3U8 file"
  }, {
    id: "slicing",
    content: "Slicing"
  }, {
    id: "video-file-slicing",
    content: "Video file slicing"
  }, {
    id: "audio-file-slicing",
    content: "Audio file slicing"
  }, {
    id: "sample-m3u8-file-for-audio",
    content: "Sample M3U8 file for audio"
  }, {
    id: "sample-m3u8-file-for-video",
    content: "Sample M3U8 file for video"
  }]
};
export let toc = [{
  depth: 2,
  url: "#naming-conventions",
  title: _jsx(_Fragment, {
    children: "Naming conventions"
  })
}, {
  depth: 3,
  url: "#individual-recording",
  title: _jsx(_Fragment, {
    children: "Individual recording"
  })
}, {
  depth: 3,
  url: "#individual-audio-non-transcoding-recording",
  title: _jsx(_Fragment, {
    children: "Individual audio non-transcoding recording"
  })
}, {
  depth: 3,
  url: "#composite-recording",
  title: _jsx(_Fragment, {
    children: "Composite recording"
  })
}, {
  depth: 3,
  url: "#web-page-recording",
  title: _jsx(_Fragment, {
    children: "Web page recording"
  })
}, {
  depth: 2,
  url: "#recorded-files-in-abnormal-conditions",
  title: _jsx(_Fragment, {
    children: "Recorded files in abnormal conditions"
  })
}, {
  depth: 3,
  url: "#upload-to-cloud-storage-failed",
  title: _jsx(_Fragment, {
    children: "Upload to cloud storage failed"
  })
}, {
  depth: 3,
  url: "#server-disconnected-or-process-killed",
  title: _jsx(_Fragment, {
    children: "Server disconnected or process killed"
  })
}, {
  depth: 2,
  url: "#file-size",
  title: _jsx(_Fragment, {
    children: "File size"
  })
}, {
  depth: 2,
  url: "#m3u8-file",
  title: _jsx(_Fragment, {
    children: "M3U8 file"
  })
}, {
  depth: 2,
  url: "#slicing",
  title: _jsx(_Fragment, {
    children: "Slicing"
  })
}, {
  depth: 3,
  url: "#video-file-slicing",
  title: _jsx(_Fragment, {
    children: "Video file slicing"
  })
}, {
  depth: 3,
  url: "#audio-file-slicing",
  title: _jsx(_Fragment, {
    children: "Audio file slicing"
  })
}, {
  depth: 3,
  url: "#sample-m3u8-file-for-audio",
  title: _jsx(_Fragment, {
    children: "Sample M3U8 file for audio"
  })
}, {
  depth: 3,
  url: "#sample-m3u8-file-for-video",
  title: _jsx(_Fragment, {
    children: "Sample M3U8 file for video"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  return _jsxs(_Fragment, {
    children: [_jsxs(_components.p, {
      children: ["Agora Cloud Recording generates M3U8, TS/WebM, and MP4 files. To process these recorded files, such as ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/merge-files",
        children: "merging audio and video"
      }), ", ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/convert-format",
        children: "converting file formats"
      }), ", or ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/process-recorded-files/playback",
        children: "synchronizing playback"
      }), " with other streams, it is essential to understand the following key aspects of recorded files:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "The naming convention"
      }), `
`, _jsx(_components.li, {
        children: "How to parse information from M3U8 file"
      }), `
`, _jsx(_components.li, {
        children: "The conditions under which file slicing occurs"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "naming-conventions",
      children: "Naming conventions"
    }), `
`, _jsx(_components.h3, {
      id: "individual-recording",
      children: "Individual recording"
    }), `
`, _jsx(_components.p, {
      children: "The naming conventions for individual recordings are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["M3U8 file: ", _jsx(_components.code, {
          children: "<sid>_<cname>__uid_s_<uid>__uid_e_<type>.m3u8"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["TS file: ", _jsx(_components.code, {
          children: "<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.ts"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["WebM file: ", _jsx(_components.code, {
          children: "<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.webm"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<sid>"
        }), " is the recording ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<cname>"
        }), " is the channel name."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<uid>"
        }), " is the user ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<type>"
        }), " is the file type (", _jsx(_components.code, {
          children: "audio"
        }), " or ", _jsx(_components.code, {
          children: "video"
        }), ")."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<utc>"
        }), " is the UTC time when the slice file starts. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. When ", _jsx(_components.code, {
          children: "utc"
        }), " is ", _jsx(_components.code, {
          children: "20190611073246073"
        }), ", for example, the slice file starts at 07:32", _jsx(_components.div, {}), ".073 a.m., June 11, 2019."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For example, in the file name:"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125142485.ts"
            })
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "sid713476478245"
      }), " is the recording ID, ", _jsx(_components.code, {
        children: "cnameagora"
      }), " is the channel name, ", _jsx(_components.code, {
        children: "123"
      }), " is the user ID, ", _jsx(_components.code, {
        children: "video"
      }), " is the file type, and the start time of the recording is 12:51", _jsx(_components.div, {}), ".485 a.m., September 20, 2019."]
    }), `
`, _jsx(_components.h3, {
      id: "individual-audio-non-transcoding-recording",
      children: "Individual audio non-transcoding recording"
    }), `
`, _jsxs(_components.p, {
      children: ["The naming conventions of ", _jsx(_components.a, {
        href: "/en/realtime-media/cloud-recording/build/start-a-recording/individual-nontranscoding",
        children: "individual audio non-transcoding recording"
      }), " are as follows:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["M3U8 file: ", _jsx(_components.code, {
          children: "<sid>_<cname>__uid_s_<uid>__uid_e_<type>.m3u8"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["TS file: ", _jsx(_components.code, {
          children: "<sid>_<cname>__uid_s_<uid>__uid_e_<type>_utc.ts"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<sid>"
        }), " is the recording ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<cname>"
        }), " is the channel name."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<uid>"
        }), " is the user ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<type>"
        }), " is the file type (", _jsx(_components.code, {
          children: "audio"
        }), ")."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<utc>"
        }), " is the UTC time when the slice file starts. The time zone is UTC+0, and the timestamp consists of the year, month, day, hour, minute, second, and millisecond. When ", _jsx(_components.code, {
          children: "utc"
        }), " is ", _jsx(_components.code, {
          children: "20190611073246073"
        }), ", for example, the slice file starts at 07:32", _jsx(_components.div, {}), ".073 a.m., June 11, 2019."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "In individual audio non-transcoding recording, only M3U8 and TS files are generated and uploaded to the third-party cloud storage in real time."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "composite-recording",
      children: "Composite recording"
    }), `
`, _jsx(_components.p, {
      children: "In composite recording mode, the naming conventions are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["M3U8 files: ", _jsx(_components.code, {
          children: "<sid>_<cname>.m3u8"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["TS files: ", _jsx(_components.code, {
          children: "<sid>_<cname>_<utc>.ts"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["MP4 files: ", _jsx(_components.code, {
          children: "<sid>_<cname>_<index>.mp4"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<sid>"
        }), " is the recording ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<cname>"
        }), " is the channel name."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<utc>"
        }), " is the starting time (UTC) of the TS file. The time zone is UTC+0. The timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
          children: "<utc>"
        }), " is ", _jsx(_components.code, {
          children: "20190611073246073"
        }), ", the starting time of the TS file is 07:32", _jsx(_components.div, {}), ".073 a.m., June 11, 2019."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<index>"
        }), " is the index number of the MP4 file. The index number of the first MP4 file is ", _jsx(_components.code, {
          children: "0"
        }), ". The recording service automatically generates an additional MP4 file when the length of the current file reaches approximately three hours or the size of the file exceeds approximately 2 GB."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To get MP4 files, set ", _jsx(_components.code, {
            children: "avFileType"
          }), " as ", _jsx(_components.code, {
            children: '["hls","mp4"]'
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "web-page-recording",
      children: "Web page recording"
    }), `
`, _jsx(_components.p, {
      children: "In web page recording mode, the naming conventions are as follows:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["M3U8 files: ", _jsx(_components.code, {
          children: "<sid>_<cname>.m3u8"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["TS files: ", _jsx(_components.code, {
          children: "<sid>_<cname>_<utc>.ts"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["MP4 file: ", _jsx(_components.code, {
          children: "<sid>_<cname>_<index>.mp4"
        })]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Where:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<sid>"
        }), " is the recording ID."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<cname>"
        }), " is the value of ", _jsx(_components.code, {
          children: "cname"
        }), " you use in the ", _jsx(_components.code, {
          children: "acquire"
        }), " method."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<utc>"
        }), " is the starting time (UTC) of the TS file. The time zone is UTC+0. The timestamp consists of the year, month, day, hour, minute, second, and millisecond. For example, if ", _jsx(_components.code, {
          children: "<utc>"
        }), " is ", _jsx(_components.code, {
          children: "20190611073246073"
        }), ", the starting time of the TS file is 07:32", _jsx(_components.div, {}), ".073 a.m., June 11, 2019."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<index>"
        }), " is the index number of the MP4 file. The index number of the first MP4 file is ", _jsx(_components.code, {
          children: "0"
        }), ". The recording service automatically generates a new MP4 file when the length of the current file reaches about three hours or the size of the file exceeds about 2 GB."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To generate an MP4 file, add ", _jsx(_components.code, {
        children: "mp4"
      }), " to ", _jsx(_components.code, {
        children: "avFileType"
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Since the filename does not support special characters, any special characters in ", _jsx(_components.code, {
            children: "cname"
          }), ", including ", _jsx(_components.code, {
            children: "!"
          }), ", ", _jsx(_components.code, {
            children: "@"
          }), ", ", _jsx(_components.code, {
            children: "#"
          }), ", ", _jsx(_components.code, {
            children: "$"
          }), ", ", _jsx(_components.code, {
            children: "%"
          }), ", ", _jsx(_components.code, {
            children: "^"
          }), ", ", _jsx(_components.code, {
            children: "&"
          }), ", ", _jsx(_components.code, {
            children: "*"
          }), ", ", _jsx(_components.code, {
            children: "("
          }), ", ", _jsx(_components.code, {
            children: ")"
          }), ", ", _jsx(_components.code, {
            children: "+"
          }), ", ", _jsx(_components.code, {
            children: "_"
          }), ", ", _jsx(_components.code, {
            children: "."
          }), ", ", _jsx(_components.code, {
            children: "="
          }), ", ", _jsx(_components.code, {
            children: "["
          }), ", ", _jsx(_components.code, {
            children: "]"
          }), ", ", _jsx(_components.code, {
            children: "{"
          }), ", ", _jsx(_components.code, {
            children: "}"
          }), ", ", _jsx(_components.code, {
            children: "~"
          }), ", ", _jsx(_components.code, {
            children: "|"
          }), ", ", _jsx(_components.code, {
            children: ","
          }), ", ", _jsx(_components.code, {
            children: ";"
          }), ", ", _jsx(_components.code, {
            children: ":"
          }), ", ", _jsx(_components.code, {
            children: "?"
          }), ", ", _jsx(_components.code, {
            children: "<"
          }), ", and ", _jsx(_components.code, {
            children: ">"
          }), ", are replaced with ", _jsx(_components.code, {
            children: "-"
          }), " in the filename."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "recorded-files-in-abnormal-conditions",
      children: "Recorded files in abnormal conditions"
    }), `
`, _jsx(_components.h3, {
      id: "upload-to-cloud-storage-failed",
      children: "Upload to cloud storage failed"
    }), `
`, _jsxs(_components.p, {
      children: ["If Agora Cloud Recording fails to upload the recorded files to the third-party cloud storage, it transfers the files to the third-party cloud storage from the Agora Cloud Backup. In order not to overwrite the latest files, the transferred M3U8 file is appended with ", _jsx(_components.code, {
        children: "_<tick>_<index>.m3u8"
      }), ", where:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<tick>"
        }), " is related to the time when the index file is generated."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "<index>"
        }), " is the index of the M3U8 file. The first version to be transferred has an index of ", _jsx(_components.code, {
          children: "0"
        }), ". The higher the index, the newer the version of the file."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For example:"
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
        children: _jsx(_components.code, {
          children: _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_video_22194679897_3.m3u8"
            })
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["where the ", _jsx(_components.code, {
        children: "3"
      }), " at the end indicates that this is the fourth version of the M3U8 file."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "When you find transferred M3U8 file(s) in the third-party cloud storage, compare the M3U8 file with the highest index to the file without a suffix, and choose the larger file."
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The cloud recording service does not append the suffix to the names of TS/WebM files and MP4 files."
    }), `
`, _jsx(_components.h3, {
      id: "server-disconnected-or-process-killed",
      children: "Server disconnected or process killed"
    }), `
`, _jsxs(_components.p, {
      children: ["When ", _jsx(_components.a, {
        href: "../../index#features",
        children: "a cloud recording server is disconnected or the process killed"
      }), ", the cloud recording service enables the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. Each time the service enables the high availability mechanism, it creates a new M3U8 file, which contains the index information of the recorded slice files from the time when the service resumes. The file name is prefixed with ", _jsx(_components.code, {
        children: "bak<n>"
      }), ", where ", _jsx(_components.code, {
        children: "n"
      }), " stands for the number of times the mechanism is enabled in a recording, starting with ", _jsx(_components.code, {
        children: "0"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, in the filename ", _jsx(_components.code, {
        children: "bak0_sid713476478245_cnameagora.m3u8"
      }), ", ", _jsx(_components.code, {
        children: "bak0"
      }), " indicates that this file is generated after enabling the high availability mechanism for the first time."]
    }), `
`, _jsxs(_components.p, {
      children: ["After the cloud recording service enables the high availability mechanism, the names of the recorded TS/WebM files and the MP4 files are also prefixed with ", _jsx(_components.code, {
        children: "bak<n>"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["To merge the original M3U8 file and the new M3U8 file generated after enabling the high availability mechanism into an MP4 file, use the ", _jsx(_components.a, {
        href: "https://download.agora.io/acrsdk/release/rtsc-ha_transcoder.v1.1.9-202204180321-release-prod.tar.gz",
        children: "transcoding script"
      }), " for file merging as follows (only applicable to merged recording files):"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Ensure that the server executing the transcoding script uses one of the following systems:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Ubuntu 14.04+ x64"
          }), `
`, _jsx(_components.li, {
            children: "CentOS 7.0+ x64"
          }), `
`, _jsx(_components.li, {
            children: "Debian 8.0+"
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Enter the ", _jsx(_components.code, {
            children: "transcoder"
          }), " and ", _jsx(_components.code, {
            children: "ffmpeg"
          }), " paths in the terminal."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Execute the following command:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsx(_components.code, {
              children: _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "./ha_transcoder.exe"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -inputPath"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "<YourinputPath>"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -ignoreNotExist"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -concatM3u8"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -concatStrategy"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 0"
                })]
              })
            })
          })
        }), `
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Parameter"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Description"
              }), _jsx(_components.th, {
                style: {
                  textAlign: "left"
                },
                children: "Required"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "-concatM3u8"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Merge the original M3U8 file and the new M3U8 file generated after enabling the high availability mechanism into one MP4 file. If this parameter is not set, the original M3U8 file and the new M3U8 file will be converted into MP4 files respectively."
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "no"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "-concatStrategy"
                })
              }), _jsxs(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: [_jsxs(_components.p, {
                  children: ["Merge strategy, this parameter must be consistent with ", _jsx(_components.code, {
                    children: "-concatM3u8"
                  }), ". Can be set to:"]
                }), _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "0: (Default) If there is an overlap between two M3U8 files, the overlapping part of the original M3U8 file will be cut off; if there is a time interval between the two M3U8 files, the black frame of the corresponding time interval will be added."
                  }), `
`, _jsx(_components.li, {
                    children: "1: Merge two M3U8 files regardless of the overlap or time interval."
                  }), `
`]
                })]
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "no"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "-ignoreNotExist"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Missing TS files are ignored and black frames are used instead. If this parameter is not set, the absence of any TS file will cause the conversion to fail."
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "no"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "-inputPath"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Input path, used to specify the absolute storage path of the files to be merged."
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "yes"
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: _jsx(_components.code, {
                  children: "-outputPath"
                })
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "Output path, used to specify the absolute storage path of the merged files. Defaults to the same as the input path."
              }), _jsx(_components.td, {
                style: {
                  textAlign: "left"
                },
                children: "no"
              })]
            })]
          })]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "file-size",
      children: "File size"
    }), `
`, _jsx(_components.p, {
      children: "In an individual recording, the size of a recorded file depends on the audio and video bitrates of the media source and the duration of the recording. For example, if the audio bitrate is 48 Kbps, the video bitrate is 500 Kbps, and the recording lasts for 30 minutes (1800 seconds), the size of the recorded file is approximately (48 Kbps + 500 Kbps) * 1800 s = 986.4 Mbit, or 123.3 MB."
    }), `
`, _jsxs(_components.p, {
      children: ["In a composite recording, the size of a recorded file depends on the audio and video bitrates of the transcoding configurations and the duration of the recording. For example, if you set the ", _jsx(_components.code, {
        children: "audioProfile"
      }), " to ", _jsx(_components.code, {
        children: "1"
      }), " (sets the audio bitrate to 128 Kbps), ", _jsx(_components.code, {
        children: "bitrate"
      }), " to 800 (sets the video bitrate to 800 Kbps), and the recording lasts for 30 minutes (1800 seconds), the size of the recorded file is approximately (128 Kbps + 800 Kbps) * 1800 s = 1670.4 Mbit, or 208.8 MB."]
    }), `
`, _jsx(_components.h2, {
      id: "m3u8-file",
      children: "M3U8 file"
    }), `
`, _jsx(_components.p, {
      children: "The M3U8 file contains the file names of several slice files and descriptive symbols. The M3U8 file generated by Agora Cloud Recording has three descriptive symbols:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "#EXT-X-AGORA-TRACK-EVENT:EVENT=<event>,TRACK_TYPE=<type>,TIME=<utc>"
          }), ": The first slice file after a stream starts or restarts after an interruption has this descriptive symbol, which describes the state of the stream."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "EVENT"
            }), ": Name of the event. Currently, ", _jsx(_components.code, {
              children: "EVENT"
            }), " can only be ", _jsx(_components.code, {
              children: "START"
            }), ", which means that the stream has started or restarted after an interruption."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TRACK_TYPE"
            }), ": The content of the slice file, ", _jsx(_components.code, {
              children: "AUDIO"
            }), " or ", _jsx(_components.code, {
              children: "VIDEO"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TIME"
            }), ": The time when the state of the stream changes. ", _jsx(_components.code, {
              children: "TIME"
            }), " is in UTC and the time zone is UTC+0."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "#EXT-X-AGORA-ROTATE:WIDTH=<width>,HEIGHT=<height>,ROTATE=<rotate>,TIME=<utc>"
          }), ": The first slice file after a video rotates has this descriptive symbol, which describes the details of the rotation. A slice file may have several such symbols."]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "WIDTH"
            }), ": Width of the video."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "HEIGHT"
            }), ": Height of the video."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ROTATE"
            }), ": The degrees by which the video rotates anticlockwise. ", _jsx(_components.code, {
              children: "ROTATE"
            }), " can only be ", _jsx(_components.code, {
              children: "0"
            }), ", ", _jsx(_components.code, {
              children: "90"
            }), ", ", _jsx(_components.code, {
              children: "180"
            }), ", or ", _jsx(_components.code, {
              children: "270"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "TIME"
            }), ": The time when the video rotates. ", _jsx(_components.code, {
              children: "TIME"
            }), " is in UTC and the time zone is UTC+0."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "#EXTINF:<length>"
          }), ": Length of the slice file in seconds."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "For example:"
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-ROTATE:WIDTH=640,HEIGHT=480,ROTATE=90,TIME=20190920125142485"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=VIDEO,TIME=20190920125142485"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:6.332000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125142485.ts"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "The sample M3U8 file above contains the file name of a TS file and three descriptive symbols, which indicates that the TS file is the first slice file after the video stream starts or restarts after an interruption, the video rotates by 90 degrees anticlockwise, and the TS file lasts for 6.332 seconds."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you face compatibility issues in some M3U8 players due to the missing comma after ", _jsx(_components.code, {
            children: "#EXTINF:<length>"
          }), ", set ", _jsx(_components.code, {
            children: "privateParams"
          }), " in ", _jsx(_components.code, {
            children: "recordingConfig"
          }), " in the ", _jsx(_components.a, {
            href: "/en/api-reference/api-ref/cloud-recording#start",
            children: "start"
          }), " request as follows: ", _jsx(_components.code, {
            children: '"recordingConfig": {"privateParams":"{\\"correctEXTINF\\":true}", ...}'
          }), "."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "slicing",
      children: "Slicing"
    }), `
`, _jsx(_components.h3, {
      id: "video-file-slicing",
      children: "Video file slicing"
    }), `
`, _jsx(_components.p, {
      children: "Slicing occurs when any of the following conditions is met:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "When an I frame appears and the slice file reaches 15 seconds."
      }), `
`, _jsx(_components.li, {
        children: "The codec changes."
      }), `
`, _jsx(_components.li, {
        children: "The width or height of the video changes."
      }), `
`, _jsx(_components.li, {
        children: "The video stream is interrupted."
      }), `
`, _jsx(_components.li, {
        children: "When you set the browser to use the H.264 codec for encoding, forced slicing occurs when the slice file reaches 5.5 minutes, or the file size is over 50 MB. After forced slicing, the first frame of the new slice file might not be an I frame, in which case the slice file cannot be decoded and played directly. For example, in the communication channel, sometimes only one I frame may appear in several hours. In such case, the first frame of the new slice file is probably not an I frame."
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "When you set the browser to use the VP9 codec, Agora Cloud Recording does not enforce file slicing."
    }), `
`, _jsx(_components.h3, {
      id: "audio-file-slicing",
      children: "Audio file slicing"
    }), `
`, _jsx(_components.p, {
      children: "Slicing occurs when the slice file reaches 15 seconds."
    }), `
`, _jsx(_components.h3, {
      id: "sample-m3u8-file-for-audio",
      children: "Sample M3U8 file for audio"
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTM3U"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-VERSION:3"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-MEDIA-SEQUENCE:0"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-ALLOW-CACHE:YES"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-TARGETDURATION:18"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-DISCONTINUITY"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=AUDIO,TIME=20190920125142289"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:15.019000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125142289.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:15.019000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125157307.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:15.019000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125212326.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:15.019000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125227345.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:12.523000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_audio_20190920125242363.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-ENDLIST"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "sample-m3u8-file-for-video",
      children: "Sample M3U8 file for video"
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
          children: [_jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTM3U"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-VERSION:3"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-MEDIA-SEQUENCE:0"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-ALLOW-CACHE:YES"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-TARGETDURATION:34"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-DISCONTINUITY"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-ROTATE:WIDTH=640,HEIGHT=480,ROTATE=0,TIME=20190920125142485"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-TRACK-EVENT:EVENT=START,TRACK_TYPE=VIDEO,TIME=20190920125142485"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:6.332000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125142485.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-ROTATE:WIDTH=1280,HEIGHT=720,ROTATE=0,TIME=20190920125149174"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-DISCONTINUITY"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:17.442000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125149174.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-DISCONTINUITY"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-ROTATE:WIDTH=640,HEIGHT=480,ROTATE=0,TIME=20190920125206616"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:33.326000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125206616.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-DISCONTINUITY"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-AGORA-ROTATE:WIDTH=1280,HEIGHT=720,ROTATE=0,TIME=20190920125239942"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXTINF:14.815000"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sid713476478245_cnameagora__uid_s_123__uid_e_video_20190920125239942.ts"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#EXT-X-ENDLIST"
            })
          })]
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
