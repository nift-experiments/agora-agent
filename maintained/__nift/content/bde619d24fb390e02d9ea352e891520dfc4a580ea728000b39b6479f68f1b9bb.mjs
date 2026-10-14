import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "API callback service",
  description: "Receive notifications about Real-Time STT events"
};
export let _markdown = `

Agora provides the Notifications service (NCS), which sends notifications about Agora Real-Time STT events. You can set up an HTTPS server to receive these notifications. When an event occurs, the Real-Time STT service notifies the Notifications service, which then sends an HTTPS request to your server.

## Callback information [#callback-information]

After you enable Notifications, when a specified event occurs, the Notifications server sends an HTTP/HTTPS request as a callback. The request body provides the main information of the callback in a JSON object. The JSON object contains different fields for different events.

The structure of the message notification callback in version 7.x differs from that in versions 5.x and 6.x. Refer to the relevant section based on your implementation.

## v7.x [#v7x]

This section explains the structure of the message notification callback for version 7.x.

### Request body [#request-body]

The message notification callback request body includes the following fields:

| Field       | Type        | Description                                                                                                               |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| \`sid\`       | String      | The agent ID.                                                                                                             |
| \`noticeId\`  | String      | The notification ID. Uniquely identifies an event notification from the Agora service.                                    |
| \`productId\` | Number      | The service ID. \`20\` indicates speech-to-text service.                                                                    |
| \`eventType\` | Number      | The type of event. See [Event types](#event-types) for details.                                                           |
| \`notifyMs\`  | Number      | The Unix timestamp (in milliseconds) when the Agora messaging server sends the notification.                              |
| \`payload\`   | JSON object | Event-specific data. The structure of \`payload\` depends on the \`eventType\`. For details, see [Event types](#event-types). |

**Example**:

\`\`\`json
{
    "sid": "agent_id",
    "noticeId": "e94f5b6fd69446ea9d75da90a59ca8a2",
    "productId": 20,
    "eventType": 101,
    "notifyMs": 1750235972193,
    "payload": {...}
}
\`\`\`

### Event types [#event-types]

The Agora message notification service supports the following events for the speech-to-text service:

| \`eventType\` | \`event_name\`                | Description                                                                                                                           |
| ----------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| \`101\`       | \`agent joined\`              | The agent joins the channel.                                                                                                          |
| \`102\`       | \`agent left\`                | The agent leaves the channel.                                                                                                         |
| \`104\`       | \`token will expire\`         | The RTC Token used by the agent is about to expire.                                                                                   |
| \`200\`       | \`M3U8 file upload succeed\`  | A single M3U8 index file is created and uploaded successfully. If multiple M3U8 files are uploaded, this event is sent once per file. |
| \`201\`       | \`transcript upload succeed\` | All M3U8 and VTT files finish uploading successfully.                                                                                 |
| \`202\`       | \`transcript upload failed\`  | M3U8 or VTT file uploads finish, but some or all files fail to upload.                                                                |

#### Event 101: Agent joined [#event-101-agent-joined]

The \`eventType\` value \`101\` indicates that an agent has joined a channel. The \`payload\` contains the following fields:

| Field      | Type     | Description                                            |
| ---------- | -------- | ------------------------------------------------------ |
| \`agent_id\` | \`String\` | The task ID associated with the agent.                 |
| \`start_ts\` | \`Number\` | The timestamp (in milliseconds) when the task started. |
| \`channel\`  | \`String\` | The name of the channel the agent joined.              |

**Example**:

\`\`\`json
{
    "agent_id": "agent_id",
    "channel": "stt_ncs93369",
    "start_ts": 1750235971
}
\`\`\`

#### Event 102: Agent left [#event-102-agent-left]

The \`eventType\` value \`102\` indicates that an agent left the channel. The \`payload\` includes the following fields:

| Field      | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agent_id\` | \`String\` | The task ID associated with the agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| \`start_ts\` | \`Number\` | The timestamp (in milliseconds) when the task started.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| \`stop_ts\`  | \`Number\` | The timestamp (in milliseconds) when the task ended.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| \`channel\`  | \`String\` | The name of the channel the agent was in.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| \`status\`   | \`String\` | The status of the task:<br />= \`STOPPED\`: The task ended normally or due to idle timeout.<br />- \`FAILED\`: The task failed.                                                                                                                                                                                                                                                                                                                                                                        |
| \`message\`  | \`String\` | The reason the agent exited the channel:<br />- \`OK\`: The agent exited normally.<br />- \`Idle for too long\`: The task timed out due to inactivity.<br />- \`Task exceeded maximum lifetime\`: The task ended because it reached the maximum task lifetime.<br />- \`RTC connection error\`: The agent exited due to a connection error.<br />- \`Fatal ASR error\`: The task exited because of an ASR module error.<br />- \`Fatal Translation error\`: The task exited due to a translation module error. |

**Example**:

<Tabs items="[&#x22;Normal stop&#x22;, &#x22;Idle timeout&#x22;, &#x22;Lifetime exceeded&#x22;, &#x22;Connection error&#x22;, &#x22;ASR error&#x22;, &#x22;Translation error&#x22;]">
  <Tab>
    \`\`\`json
    {
        "agent_id": "agent_id",
        "channel": "stt_ncs93369",
        "message": "OK",
        "start_ts": 1750235971,
        "status": "STOPPED",
        "stop_ts": 1750235984
    }
    \`\`\`
  </Tab>

  <Tab>
    \`\`\`json
    {
        "agent_id": "agent_id",
        "channel": "stt_ncs93369",
        "message": "Idle for too long",
        "start_ts": 1750235971,
        "status": "STOPPED",
        "stop_ts": 1750235984
    }
    \`\`\`
  </Tab>

  <Tab>
    \`\`\`json
    {
        "agent_id": "agent_id",
        "channel": "stt_ncs93369",
        "message": "Task exceeded maximum lifetime",
        "start_ts": 1750235971,
        "status": "STOPPED",
        "stop_ts": 1750495171
    }
    \`\`\`
  </Tab>

  <Tab>
    \`\`\`json
    {
        "agent_id": "agent_id",
        "channel": "stt_ncs93369",
        "message": "RTC connection error",
        "start_ts": 1750235971,
        "status": "FAILED",
        "stop_ts": 1750235984
    }
    \`\`\`
  </Tab>

  <Tab>
    \`\`\`json
    {
        "agent_id": "agent_id",
        "channel": "stt_ncs93369",
        "message": "Fatal ASR error",
        "start_ts": 1750235971,
        "status": "FAILED",
        "stop_ts": 1750235984
    }
    \`\`\`
  </Tab>

  <Tab>
    \`\`\`json
    {
        "agent_id": "agent_id",
        "channel": "stt_ncs93369",
        "message": "Fatal Translation error",
        "start_ts": 1750235971,
        "status": "FAILED",
        "stop_ts": 1750235984
    }
    \`\`\`
  </Tab>
</Tabs>

#### Event 104: Token will expire [#event-104-token-will-expire]

The \`eventType\` value \`104\` indicates that the RTC Token used by the Real-Time STT engine is about to expire. The Notifications service sends this event to your server when the RTC Token has 30 seconds remaining before it expires. If the RTC Token's validity period is 30 seconds or less, the platform does not send this event. The \`payload\` contains the following fields:

| Field      | Type     | Description                                                                          |
| ---------- | -------- | ------------------------------------------------------------------------------------ |
| \`agent_id\` | \`String\` | The task ID associated with the agent.                                               |
| \`name\`     | \`String\` | The unique service identifier passed in when the task was created.                   |
| \`start_ts\` | \`Number\` | The timestamp (in seconds) when the task was created.                                |
| \`channel\`  | \`String\` | The name of the channel.                                                             |
| \`message\`  | \`String\` | A reminder that the RTC Token is about to expire. Fixed value: \`token will expire!\`. |

**Example**:

\`\`\`json
{
    "agent_id": "agent_id",
    "name": "agora-test",
    "start_ts": 1750235971,
    "channel": "stt_ncs93369",
    "message": "token will expire!"
}
\`\`\`

<CalloutContainer type="info">
  <CalloutDescription>
    Event \`104\` is for advance notification only. It does not end the task, change the task's final status, or replace the existing RTC connection error handling flow.
  </CalloutDescription>
</CalloutContainer>

#### Event 200: M3U8 file upload succeeded [#event-200-m3u8-file-upload-succeeded]

The \`eventType\` value \`200\` indicates that Agora has successfully uploaded a single M3U8 playlist file. Agora sends this event after each M3U8 index file is created and uploaded. If multiple M3U8 files are uploaded, this event is sent once per file. The \`payload\` contains the following fields:

| Field              | Type   | Description                                                                                                                                     |
| :----------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agent_id\`         | String | The task ID associated with the agent.                                                                                                          |
| \`channel\`          | String | The name of the channel.                                                                                                                        |
| \`file_name\`        | String | The name of the M3U8 file.                                                                                                                      |
| \`file_creation_ts\` | Int64  | The Unix timestamp (in milliseconds) when the M3U8 file was created.                                                                            |
| \`message\`          | String | \`A STT transcript m3u8 file was successfully generated & uploaded\`. Indicates that Agora has successfully generated and uploaded the M3U8 file. |

**Example**:

\`\`\`json
{
    "agent_id": "agent_id",
    "channel": "stt_ncs93369",
    "file_name": "prefix/1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8",
    "file_creation_ts": 1234567891000,
    "message": "A STT transcript m3u8 file was successfully generated & uploaded"
}
\`\`\`

#### Event 201: Transcript upload succeeded [#event-201-transcript-upload-succeeded]

The \`eventType\` value \`201\` indicates that Agora has successfully uploaded all M3U8 and VTT files. Agora sends this event after all M3U8 and VTT files finish uploading. The \`payload\` contains the following fields:

| Field              | Type   | Description                                                                                               |
| :----------------- | :----- | :-------------------------------------------------------------------------------------------------------- |
| \`agent_id\`         | String | The task ID associated with the agent.                                                                    |
| \`channel\`          | String | The name of the channel.                                                                                  |
| \`file_name\`        | String | The name of the M3U8 file.                                                                                |
| \`file_creation_ts\` | Int64  | The Unix timestamp (in milliseconds) when the M3U8 file was created.                                      |
| \`message\`          | String | \`STT transcript upload succeeded.\` Indicates that Agora has successfully uploaded all M3U8 and VTT files. |

**Example**:

\`\`\`json
{
    "agent_id": "agent_id",
    "channel": "stt_ncs93369",
    "file_name": "prefix/1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8",
    "file_creation_ts": 1234567891000,
    "message": "STT transcript upload succeeded."
}
\`\`\`

#### Event 202: Transcript upload failed [#event-202-transcript-upload-failed]

The \`eventType\` value \`202\` indicates that one or more M3U8 or VTT files have failed to upload. Agora sends this event when M3U8 or VTT file uploads finish, but some or all files fail to upload. The \`payload\` contains the following fields:

| Field               | Type           | Description                                                                                                                                                                                                                                  |
| :------------------ | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`agent_id\`          | String         | The task ID associated with the agent.                                                                                                                                                                                                       |
| \`channel\`           | String         | The name of the channel.                                                                                                                                                                                                                     |
| \`succeed_file_list\` | Array\\<Object> | The list of files that uploaded successfully. Each object includes:<br />- \`file_name\`: The file name.<br />- \`file_creation_ts\`: The Unix timestamp (in milliseconds) when the file was created.                                            |
| \`failed_file_list\`  | Array\\<Object> | The list of files that failed to upload. Each object includes:<br />- \`file_name\`: The file name.<br />- \`file_creation_ts\`: The Unix timestamp (in milliseconds) when the file was created.<br />- \`message\`: The reason the upload failed. |
| \`message\`           | String         | \`STT transcript upload failed.\` Indicates that one or more M3U8 or VTT files have failed to upload.                                                                                                                                          |

**Example**:

\`\`\`json
{
    "agent_id": "xxx",
    "channel": "xxx",
    "succeed_file_list": [
        {
            "file_name": "prefix/1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8",
            "file_creation_ts": 1234567891000
        },
        {
            "file_name": "prefix/zh-CN_1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8",
            "file_creation_ts": 1234567891001
        }
    ],
    "failed_file_list": [
        {
            "file_name": "prefix/ja-JP_1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8",
            "file_creation_ts": 1234567891001,
            "message": "last failed reason xxx"
        },
        {
            "file_name": "prefix/fr-FH_1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8",
            "file_creation_ts": 1234567891001,
            "message": "last failed reason xxx"
        }
    ],
    "message": "STT transcript upload failed."
}
\`\`\`

## v5.x and v6.x [#v5x-and-v6x]

This section explains the structure of the message notification callback for SDK versions 5.x and 6.x.

* The following [Payload fields](#payload-fields) are common for all Real-Time STT events.
* The values of \`eventType\`, \`serviceType\`, and \`details\` depend on the event.

### Payload fields [#payload-fields]

The \`payload\` JSON object, which is the main body of a notification, includes the following fields in each type of event notification:

* \`cname\`: String. The name of the channel to be transcribed.
* \`subBotUid\`: String. The UID of the bot subscribing to the audio.
* \`pubBotUid\`: String. The UID of the bot publishing the text to the channel.
* \`taskId\`: String. The ID of the Real-Time STT task.
* \`sequence\`: Number. The serial number of the notification, starting from \`0\`. You can use this parameter to identify notifications that are random, lost, or re-sent.
* \`serviceScene\`: String, the current service scene.
  * \`1\`: Real-Time STT service.
* \`sendts\`: Number. The time (UTC) when the event happens. Unix timestamp in ms.
* \`serviceType\`: Number. The type of Agora service.
  * \`0\`: The Real-Time STT service.
  * \`1\`: The STT module.
  * \`2\`: The uploader module.
* \`details\`: JSON. The details of the callback events provided in the tables below. The Notifications service may add new fields in the future. To ensure backward compatibility, the service will not change the data format of the existing fields.

### Callback events [#callback-events]

| eventType | serviceType                 | Event description                                                                           |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| \`4\`       | \`0\` (Real-Time STT service) | The M3U8 playlist file is generated for \`.vtt\` files.                                       |
| \`30\`      | \`2\` (uploader module)       | The upload service starts.                                                                  |
| \`31\`      | \`2\` (uploader module)       | All the \`.vtt\` files are uploaded to the specified third-party cloud storage.               |
| \`32\`      | \`2\` (uploader module)       | All the \`.vtt\` files are uploaded, but at least one file is uploaded to Agora Cloud Backup. |
| \`33\`      | \`2\` (uploader module)       | The progress of uploading the \`.vtt\` files to the cloud storage.                            |

#### \`4 cloud_recording_file_infos\` [#4-cloud_recording_file_infos]

\`eventType 4\` indicates that an M3U8 playlist file was generated and uploaded. During a recording, the recording service repeatedly uploads and overwrites the M3U8 file, but this event is triggered the first time the M3U8 file is generated and uploaded.

\`details\` includes the following fields:

* \`msgName\`: String. The message name, \`cloud_recording_file_infos\`.
* \`fileList\`: String. The name of the M3U8 file.

**Example**:

\`\`\`json
{
    "cname": "test",
    "subBotUid": "91",
    "pubBotUid": "22",
    "taskId": "ec4b91009a47366703b821bb12345678",
    "sequence": 0,
    "serviceScene": "Real-Time STT + Real-Time Translation",
    "sendts": 1715670681,
    "serviceType": 2,
    "details": {
        "fileList": "ec4b91009a47366703b821bb12345678_test.m3u8",
        "msgName": "voice_ai_file_infos"
    }
}
\`\`\`

#### \`30 uploader_started\` [#30-uploader_started]

\`eventType 30\` indicates that the upload service has started. \`details\` includes the following fields:

* \`msgName\`: String. The message name, uploader\\_started.
* \`status\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.

**Example**:

\`\`\`json
{
    "cname": "test",
    "subBotUid": "91",
    "pubBotUid": "22",
    "taskId": "c662ce961441cd8dc22f858ab7cec4d4",
    "sequence": 0,
    "serviceScene": "Real-Time STT + Real-Time Translation",
    "sendts": 1715331647,
    "serviceType": 2,
    "details": {
        "msgName": "uploader_started",
        "status": 0
    }
}
\`\`\`

#### \`31 uploaded\` [#31-uploaded]

\`eventType 31\` indicates that all the recorded files are uploaded to the specified third-party cloud storage. \`details\` includes the following fields:

* \`msgName\`: String. The message name, uploaded.
* \`status\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.
* \`fileList\`: JSONArray. An array that contains detailed information of each recorded file.
* \`fileName\`: String. The name of the M3U8 file or MP4 file.
* \`trackType\`: String. The type of the recorded file.
  * \`"audio"\`: Audio file.
  * \`"video"\`: Video file (no audio).
  * \`"text"\`: Caption/transcription file.
* \`mode\`: Number.
  * \`1\`: Service for channel,
  * \`2\`: Service for a specific UID.
* \`sliceStartTime\`: Number. The Unix time (ms) when the recording starts.

**Example**:

\`\`\`json
{
    "cname": "test",
    "subBotUid": "91",
    "pubBotUid": "22",
    "taskId": "c662ce961441cd8dc22f858ab7cec4d4",
    "sequence": 0,
    "serviceScene": "Real-Time STT + Real-Time Translation",
    "sendts": 1715331732,
    "serviceType": 2,
    "details": {
        "status": 0,
        "fileList": [
            {
 "fileName": "en-US_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8",
 "trackType": "audio",
 "mode": 2,
 "sliceStartTime": 1715331647844
            },
            {
 "fileName": "ar-SA_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8",
 "trackType": "audio",
 "mode": 2,
 "sliceStartTime": 1715331647844
            },
            {
 "fileName": "c662ce961441cd8dc22f858ab7cec4d4_test.m3u8",
 "trackType": "audio",
 "mode": 2,
 "sliceStartTime": 1715331647844
            }
        ],
        "msgName": "uploaded"
    }
}
\`\`\`

#### \`32 backuped\` [#32-backuped]

\`eventType 32\` indicates that all the \`.vtt\` files are uploaded, but at least one of them is uploaded to Agora Cloud Backup. Agora Cloud Backup automatically uploads the files to the specified third-party cloud storage. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`backuped\`.
* \`status\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.
* \`fileList\`: JSONArray. An array that contains detailed information of each recorded file.
* \`fileName\`: String. The name of the M3U8 file or MP4 file.
* \`trackType\`: String. The type of the recorded file.
  * \`"audio"\`: Audio file.
  * \`"video"\`: Video file (no audio).
  * \`"text"\`: Caption/Transcription file.
* \`mode\`: Number.
  * \`1\`: Service for channel,
  * \`2\`: Service for specific uid.
* \`sliceStartTime\`: Number. The Unix time (ms) when the recording starts.

**Example**:

\`\`\`json
{
    "cname": "test",
    "subBotUid": "91",
    "pubBotUid": "22",
    "taskId": "c662ce961441cd8dc22f858ab7cec4d4",
    "sequence": 0,
    "serviceScene": "Real-Time STT + Real-Time Translation",
    "sendts": 1715331732,
    "serviceType": 2,
    "details": {
        "status": 0,
        "fileList": [
            {
 "fileName": "en-US_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8",
 "trackType": "audio",
 "mode": 2,
 "sliceStartTime": 1715331647844
            },
            {
 "fileName": "ar-SA_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8",
 "trackType": "audio",
 "mode": 2,
 "sliceStartTime": 1715331647844
            },
            {
 "fileName": "c662ce961441cd8dc22f858ab7cec4d4_test.m3u8",
 "trackType": "audio",
 "mode": 2,
 "sliceStartTime": 1715331647844
            }
        ],
        "msgName": "backuped"
    }
}
\`\`\`

#### \`33 uploading_progress\` [#33-uploading_progress]

\`eventType 33\` indicates the current upload progress. It notifies you of the \`.vtt\` files upload progress once every minute after the Real-Time STT service starts. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`uploading_progress\`.
* \`progress\`: Number. An ever-increasing number between 0 and 10,000, equal to the ratio of the number of the uploaded files to the number of the recorded files multiplied by 10,000. After the recording service exits and when the number reaches 10,000, the upload completes.

**Example**:

\`\`\`json
{
    "cname": "test",
    "subBotUid": "91",
    "pubBotUid": "22",
    "taskId": "c662ce961441cd8dc22f858ab7cec4d4",
    "sequence": 0,
    "serviceScene": "Real-Time STT + Real-Time Translation",
    "sendts": 1715331707,
    "serviceType": 2,
    "details": {
        "msgName": "uploading_progress",
        "progress": 10000
    }
}
\`\`\`

<CalloutContainer type="warning">
  <CalloutTitle>
    Best Practice
  </CalloutTitle>

  <CalloutDescription>
    Agora does not recommended that core applications rely heavily on Notifications. If your application currently depends heavily on NCS, contact [support@agora.io](mailto\\:support@agora.io) to enable the redundant message notification function. This feature doubles the number of received notifications, thereby reducing the probability of message loss. However, after enabling this function, you must check the message SID to manage duplicate messages. Please note that message notifications still cannot guarantee a 100% arrival rate.
  </CalloutDescription>
</CalloutContainer>

## Reference [#reference]

This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product.

### What are the differences between the Notifications service and the query method? [#what-are-the-differences-between-the-notifications-service-and-the-query-method]

You can monitor the status of the Real-Time STT service either through the \`query\` method or by the Notifications service, to take action when required. Both options have pros and cons.

#### The \`query\` method [#the-query-method]

You can periodically call the \`query\` method to monitor the status of Real-Time STT.

* Pros: Reliable, as the status is queried proactively.
* Cons:
  * Provides limited status information.
  * Requires an active query. You cannot query too often because of the Queries Per Second (QPS) limit, and thus it is not as real-time as the Notifications service.

If the status reliability of Real-Time STT is a high priority, Agora strongly recommends using the \`query\` method.

#### Notifications service [#notifications-service]

You can use the Notifications service as a complementary option to monitor the service status. You need to configure an HTTP/HTTPS server to receive event notifications.

* Pros: Real-time
* Cons:
  * The server passively receives messages, and the messages may get lost.
  * The confirmation message of the message delivery may get lost, causing the message to be re-sent. In such a case, you need to deduplicate the notifications.
* The messages may not arrive in the correct order.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Agora provides the Notifications service (NCS), which sends notifications about Agora Real-Time STT events. You can set up an HTTPS server to receive these notifications. When an event occurs, the Real-Time STT service notifies the Notifications service, which then sends an HTTPS request to your server."
  }, {
    heading: "callback-information",
    content: "After you enable Notifications, when a specified event occurs, the Notifications server sends an HTTP/HTTPS request as a callback. The request body provides the main information of the callback in a JSON object. The JSON object contains different fields for different events."
  }, {
    heading: "callback-information",
    content: "The structure of the message notification callback in version 7.x differs from that in versions 5.x and 6.x. Refer to the relevant section based on your implementation."
  }, {
    heading: "v7x",
    content: "This section explains the structure of the message notification callback for version 7.x."
  }, {
    heading: "request-body",
    content: "The message notification callback request body includes the following fields:"
  }, {
    heading: "request-body",
    content: "Field"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`sid`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The agent ID."
  }, {
    heading: "request-body",
    content: "`noticeId`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The notification ID. Uniquely identifies an event notification from the Agora service."
  }, {
    heading: "request-body",
    content: "`productId`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The service ID. `20` indicates speech-to-text service."
  }, {
    heading: "request-body",
    content: "`eventType`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The type of event. See Event types for details."
  }, {
    heading: "request-body",
    content: "`notifyMs`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The Unix timestamp (in milliseconds) when the Agora messaging server sends the notification."
  }, {
    heading: "request-body",
    content: "`payload`"
  }, {
    heading: "request-body",
    content: "JSON object"
  }, {
    heading: "request-body",
    content: "Event-specific data. The structure of `payload` depends on the `eventType`. For details, see Event types."
  }, {
    heading: "request-body",
    content: "**Example**:"
  }, {
    heading: "event-types",
    content: "The Agora message notification service supports the following events for the speech-to-text service:"
  }, {
    heading: "event-types",
    content: "`eventType`"
  }, {
    heading: "event-types",
    content: "`event_name`"
  }, {
    heading: "event-types",
    content: "Description"
  }, {
    heading: "event-types",
    content: "`101`"
  }, {
    heading: "event-types",
    content: "`agent joined`"
  }, {
    heading: "event-types",
    content: "The agent joins the channel."
  }, {
    heading: "event-types",
    content: "`102`"
  }, {
    heading: "event-types",
    content: "`agent left`"
  }, {
    heading: "event-types",
    content: "The agent leaves the channel."
  }, {
    heading: "event-types",
    content: "`104`"
  }, {
    heading: "event-types",
    content: "`token will expire`"
  }, {
    heading: "event-types",
    content: "The RTC Token used by the agent is about to expire."
  }, {
    heading: "event-types",
    content: "`200`"
  }, {
    heading: "event-types",
    content: "`M3U8 file upload succeed`"
  }, {
    heading: "event-types",
    content: "A single M3U8 index file is created and uploaded successfully. If multiple M3U8 files are uploaded, this event is sent once per file."
  }, {
    heading: "event-types",
    content: "`201`"
  }, {
    heading: "event-types",
    content: "`transcript upload succeed`"
  }, {
    heading: "event-types",
    content: "All M3U8 and VTT files finish uploading successfully."
  }, {
    heading: "event-types",
    content: "`202`"
  }, {
    heading: "event-types",
    content: "`transcript upload failed`"
  }, {
    heading: "event-types",
    content: "M3U8 or VTT file uploads finish, but some or all files fail to upload."
  }, {
    heading: "event-101-agent-joined",
    content: "The `eventType` value `101` indicates that an agent has joined a channel. The `payload` contains the following fields:"
  }, {
    heading: "event-101-agent-joined",
    content: "Field"
  }, {
    heading: "event-101-agent-joined",
    content: "Type"
  }, {
    heading: "event-101-agent-joined",
    content: "Description"
  }, {
    heading: "event-101-agent-joined",
    content: "`agent_id`"
  }, {
    heading: "event-101-agent-joined",
    content: "`String`"
  }, {
    heading: "event-101-agent-joined",
    content: "The task ID associated with the agent."
  }, {
    heading: "event-101-agent-joined",
    content: "`start_ts`"
  }, {
    heading: "event-101-agent-joined",
    content: "`Number`"
  }, {
    heading: "event-101-agent-joined",
    content: "The timestamp (in milliseconds) when the task started."
  }, {
    heading: "event-101-agent-joined",
    content: "`channel`"
  }, {
    heading: "event-101-agent-joined",
    content: "`String`"
  }, {
    heading: "event-101-agent-joined",
    content: "The name of the channel the agent joined."
  }, {
    heading: "event-101-agent-joined",
    content: "**Example**:"
  }, {
    heading: "event-102-agent-left",
    content: "The `eventType` value `102` indicates that an agent left the channel. The `payload` includes the following fields:"
  }, {
    heading: "event-102-agent-left",
    content: "Field"
  }, {
    heading: "event-102-agent-left",
    content: "Type"
  }, {
    heading: "event-102-agent-left",
    content: "Description"
  }, {
    heading: "event-102-agent-left",
    content: "`agent_id`"
  }, {
    heading: "event-102-agent-left",
    content: "`String`"
  }, {
    heading: "event-102-agent-left",
    content: "The task ID associated with the agent."
  }, {
    heading: "event-102-agent-left",
    content: "`start_ts`"
  }, {
    heading: "event-102-agent-left",
    content: "`Number`"
  }, {
    heading: "event-102-agent-left",
    content: "The timestamp (in milliseconds) when the task started."
  }, {
    heading: "event-102-agent-left",
    content: "`stop_ts`"
  }, {
    heading: "event-102-agent-left",
    content: "`Number`"
  }, {
    heading: "event-102-agent-left",
    content: "The timestamp (in milliseconds) when the task ended."
  }, {
    heading: "event-102-agent-left",
    content: "`channel`"
  }, {
    heading: "event-102-agent-left",
    content: "`String`"
  }, {
    heading: "event-102-agent-left",
    content: "The name of the channel the agent was in."
  }, {
    heading: "event-102-agent-left",
    content: "`status`"
  }, {
    heading: "event-102-agent-left",
    content: "`String`"
  }, {
    heading: "event-102-agent-left",
    content: "The status of the task:= `STOPPED`: The task ended normally or due to idle timeout.- `FAILED`: The task failed."
  }, {
    heading: "event-102-agent-left",
    content: "`message`"
  }, {
    heading: "event-102-agent-left",
    content: "`String`"
  }, {
    heading: "event-102-agent-left",
    content: "The reason the agent exited the channel:- `OK`: The agent exited normally.- `Idle for too long`: The task timed out due to inactivity.- `Task exceeded maximum lifetime`: The task ended because it reached the maximum task lifetime.- `RTC connection error`: The agent exited due to a connection error.- `Fatal ASR error`: The task exited because of an ASR module error.- `Fatal Translation error`: The task exited due to a translation module error."
  }, {
    heading: "event-102-agent-left",
    content: "**Example**:"
  }, {
    heading: "event-104-token-will-expire",
    content: "The `eventType` value `104` indicates that the RTC Token used by the Real-Time STT engine is about to expire. The Notifications service sends this event to your server when the RTC Token has 30 seconds remaining before it expires. If the RTC Token's validity period is 30 seconds or less, the platform does not send this event. The `payload` contains the following fields:"
  }, {
    heading: "event-104-token-will-expire",
    content: "Field"
  }, {
    heading: "event-104-token-will-expire",
    content: "Type"
  }, {
    heading: "event-104-token-will-expire",
    content: "Description"
  }, {
    heading: "event-104-token-will-expire",
    content: "`agent_id`"
  }, {
    heading: "event-104-token-will-expire",
    content: "`String`"
  }, {
    heading: "event-104-token-will-expire",
    content: "The task ID associated with the agent."
  }, {
    heading: "event-104-token-will-expire",
    content: "`name`"
  }, {
    heading: "event-104-token-will-expire",
    content: "`String`"
  }, {
    heading: "event-104-token-will-expire",
    content: "The unique service identifier passed in when the task was created."
  }, {
    heading: "event-104-token-will-expire",
    content: "`start_ts`"
  }, {
    heading: "event-104-token-will-expire",
    content: "`Number`"
  }, {
    heading: "event-104-token-will-expire",
    content: "The timestamp (in seconds) when the task was created."
  }, {
    heading: "event-104-token-will-expire",
    content: "`channel`"
  }, {
    heading: "event-104-token-will-expire",
    content: "`String`"
  }, {
    heading: "event-104-token-will-expire",
    content: "The name of the channel."
  }, {
    heading: "event-104-token-will-expire",
    content: "`message`"
  }, {
    heading: "event-104-token-will-expire",
    content: "`String`"
  }, {
    heading: "event-104-token-will-expire",
    content: "A reminder that the RTC Token is about to expire. Fixed value: `token will expire!`."
  }, {
    heading: "event-104-token-will-expire",
    content: "**Example**:"
  }, {
    heading: "event-104-token-will-expire",
    content: "Event `104` is for advance notification only. It does not end the task, change the task's final status, or replace the existing RTC connection error handling flow."
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "The `eventType` value `200` indicates that Agora has successfully uploaded a single M3U8 playlist file. Agora sends this event after each M3U8 index file is created and uploaded. If multiple M3U8 files are uploaded, this event is sent once per file. The `payload` contains the following fields:"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "Field"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "Type"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "Description"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "`agent_id`"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "String"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "The task ID associated with the agent."
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "`channel`"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "String"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "The name of the channel."
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "`file_name`"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "String"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "The name of the M3U8 file."
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "`file_creation_ts`"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "Int64"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "The Unix timestamp (in milliseconds) when the M3U8 file was created."
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "`message`"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "String"
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "`A STT transcript m3u8 file was successfully generated & uploaded`. Indicates that Agora has successfully generated and uploaded the M3U8 file."
  }, {
    heading: "event-200-m3u8-file-upload-succeeded",
    content: "**Example**:"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "The `eventType` value `201` indicates that Agora has successfully uploaded all M3U8 and VTT files. Agora sends this event after all M3U8 and VTT files finish uploading. The `payload` contains the following fields:"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "Field"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "Type"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "Description"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "`agent_id`"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "String"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "The task ID associated with the agent."
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "`channel`"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "String"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "The name of the channel."
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "`file_name`"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "String"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "The name of the M3U8 file."
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "`file_creation_ts`"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "Int64"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "The Unix timestamp (in milliseconds) when the M3U8 file was created."
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "`message`"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "String"
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "`STT transcript upload succeeded.` Indicates that Agora has successfully uploaded all M3U8 and VTT files."
  }, {
    heading: "event-201-transcript-upload-succeeded",
    content: "**Example**:"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "The `eventType` value `202` indicates that one or more M3U8 or VTT files have failed to upload. Agora sends this event when M3U8 or VTT file uploads finish, but some or all files fail to upload. The `payload` contains the following fields:"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "Field"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "Type"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "Description"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "`agent_id`"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "String"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "The task ID associated with the agent."
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "`channel`"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "String"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "The name of the channel."
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "`succeed_file_list`"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "Array\\<Object>"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "The list of files that uploaded successfully. Each object includes:- `file_name`: The file name.- `file_creation_ts`: The Unix timestamp (in milliseconds) when the file was created."
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "`failed_file_list`"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "Array\\<Object>"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "The list of files that failed to upload. Each object includes:- `file_name`: The file name.- `file_creation_ts`: The Unix timestamp (in milliseconds) when the file was created.- `message`: The reason the upload failed."
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "`message`"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "String"
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "`STT transcript upload failed.` Indicates that one or more M3U8 or VTT files have failed to upload."
  }, {
    heading: "event-202-transcript-upload-failed",
    content: "**Example**:"
  }, {
    heading: "v5x-and-v6x",
    content: "This section explains the structure of the message notification callback for SDK versions 5.x and 6.x."
  }, {
    heading: "v5x-and-v6x",
    content: "The following Payload fields are common for all Real-Time STT events."
  }, {
    heading: "v5x-and-v6x",
    content: "The values of `eventType`, `serviceType`, and `details` depend on the event."
  }, {
    heading: "payload-fields",
    content: "The `payload` JSON object, which is the main body of a notification, includes the following fields in each type of event notification:"
  }, {
    heading: "payload-fields",
    content: "`cname`: String. The name of the channel to be transcribed."
  }, {
    heading: "payload-fields",
    content: "`subBotUid`: String. The UID of the bot subscribing to the audio."
  }, {
    heading: "payload-fields",
    content: "`pubBotUid`: String. The UID of the bot publishing the text to the channel."
  }, {
    heading: "payload-fields",
    content: "`taskId`: String. The ID of the Real-Time STT task."
  }, {
    heading: "payload-fields",
    content: "`sequence`: Number. The serial number of the notification, starting from `0`. You can use this parameter to identify notifications that are random, lost, or re-sent."
  }, {
    heading: "payload-fields",
    content: "`serviceScene`: String, the current service scene."
  }, {
    heading: "payload-fields",
    content: "`1`: Real-Time STT service."
  }, {
    heading: "payload-fields",
    content: "`sendts`: Number. The time (UTC) when the event happens. Unix timestamp in ms."
  }, {
    heading: "payload-fields",
    content: "`serviceType`: Number. The type of Agora service."
  }, {
    heading: "payload-fields",
    content: "`0`: The Real-Time STT service."
  }, {
    heading: "payload-fields",
    content: "`1`: The STT module."
  }, {
    heading: "payload-fields",
    content: "`2`: The uploader module."
  }, {
    heading: "payload-fields",
    content: "`details`: JSON. The details of the callback events provided in the tables below. The Notifications service may add new fields in the future. To ensure backward compatibility, the service will not change the data format of the existing fields."
  }, {
    heading: "callback-events",
    content: "eventType"
  }, {
    heading: "callback-events",
    content: "serviceType"
  }, {
    heading: "callback-events",
    content: "Event description"
  }, {
    heading: "callback-events",
    content: "`4`"
  }, {
    heading: "callback-events",
    content: "`0` (Real-Time STT service)"
  }, {
    heading: "callback-events",
    content: "The M3U8 playlist file is generated for `.vtt` files."
  }, {
    heading: "callback-events",
    content: "`30`"
  }, {
    heading: "callback-events",
    content: "`2` (uploader module)"
  }, {
    heading: "callback-events",
    content: "The upload service starts."
  }, {
    heading: "callback-events",
    content: "`31`"
  }, {
    heading: "callback-events",
    content: "`2` (uploader module)"
  }, {
    heading: "callback-events",
    content: "All the `.vtt` files are uploaded to the specified third-party cloud storage."
  }, {
    heading: "callback-events",
    content: "`32`"
  }, {
    heading: "callback-events",
    content: "`2` (uploader module)"
  }, {
    heading: "callback-events",
    content: "All the `.vtt` files are uploaded, but at least one file is uploaded to Agora Cloud Backup."
  }, {
    heading: "callback-events",
    content: "`33`"
  }, {
    heading: "callback-events",
    content: "`2` (uploader module)"
  }, {
    heading: "callback-events",
    content: "The progress of uploading the `.vtt` files to the cloud storage."
  }, {
    heading: "4-cloud_recording_file_infos",
    content: "`eventType 4` indicates that an M3U8 playlist file was generated and uploaded. During a recording, the recording service repeatedly uploads and overwrites the M3U8 file, but this event is triggered the first time the M3U8 file is generated and uploaded."
  }, {
    heading: "4-cloud_recording_file_infos",
    content: "`details` includes the following fields:"
  }, {
    heading: "4-cloud_recording_file_infos",
    content: "`msgName`: String. The message name, `cloud_recording_file_infos`."
  }, {
    heading: "4-cloud_recording_file_infos",
    content: "`fileList`: String. The name of the M3U8 file."
  }, {
    heading: "4-cloud_recording_file_infos",
    content: "**Example**:"
  }, {
    heading: "30-uploader_started",
    content: "`eventType 30` indicates that the upload service has started. `details` includes the following fields:"
  }, {
    heading: "30-uploader_started",
    content: "`msgName`: String. The message name, uploader\\_started."
  }, {
    heading: "30-uploader_started",
    content: "`status`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "30-uploader_started",
    content: "**Example**:"
  }, {
    heading: "31-uploaded",
    content: "`eventType 31` indicates that all the recorded files are uploaded to the specified third-party cloud storage. `details` includes the following fields:"
  }, {
    heading: "31-uploaded",
    content: "`msgName`: String. The message name, uploaded."
  }, {
    heading: "31-uploaded",
    content: "`status`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "31-uploaded",
    content: "`fileList`: JSONArray. An array that contains detailed information of each recorded file."
  }, {
    heading: "31-uploaded",
    content: "`fileName`: String. The name of the M3U8 file or MP4 file."
  }, {
    heading: "31-uploaded",
    content: "`trackType`: String. The type of the recorded file."
  }, {
    heading: "31-uploaded",
    content: '`"audio"`: Audio file.'
  }, {
    heading: "31-uploaded",
    content: '`"video"`: Video file (no audio).'
  }, {
    heading: "31-uploaded",
    content: '`"text"`: Caption/transcription file.'
  }, {
    heading: "31-uploaded",
    content: "`mode`: Number."
  }, {
    heading: "31-uploaded",
    content: "`1`: Service for channel,"
  }, {
    heading: "31-uploaded",
    content: "`2`: Service for a specific UID."
  }, {
    heading: "31-uploaded",
    content: "`sliceStartTime`: Number. The Unix time (ms) when the recording starts."
  }, {
    heading: "31-uploaded",
    content: "**Example**:"
  }, {
    heading: "32-backuped",
    content: "`eventType 32` indicates that all the `.vtt` files are uploaded, but at least one of them is uploaded to Agora Cloud Backup. Agora Cloud Backup automatically uploads the files to the specified third-party cloud storage. `details` includes the following fields:"
  }, {
    heading: "32-backuped",
    content: "`msgName`: String. The message name, `backuped`."
  }, {
    heading: "32-backuped",
    content: "`status`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "32-backuped",
    content: "`fileList`: JSONArray. An array that contains detailed information of each recorded file."
  }, {
    heading: "32-backuped",
    content: "`fileName`: String. The name of the M3U8 file or MP4 file."
  }, {
    heading: "32-backuped",
    content: "`trackType`: String. The type of the recorded file."
  }, {
    heading: "32-backuped",
    content: '`"audio"`: Audio file.'
  }, {
    heading: "32-backuped",
    content: '`"video"`: Video file (no audio).'
  }, {
    heading: "32-backuped",
    content: '`"text"`: Caption/Transcription file.'
  }, {
    heading: "32-backuped",
    content: "`mode`: Number."
  }, {
    heading: "32-backuped",
    content: "`1`: Service for channel,"
  }, {
    heading: "32-backuped",
    content: "`2`: Service for specific uid."
  }, {
    heading: "32-backuped",
    content: "`sliceStartTime`: Number. The Unix time (ms) when the recording starts."
  }, {
    heading: "32-backuped",
    content: "**Example**:"
  }, {
    heading: "33-uploading_progress",
    content: "`eventType 33` indicates the current upload progress. It notifies you of the `.vtt` files upload progress once every minute after the Real-Time STT service starts. `details` includes the following fields:"
  }, {
    heading: "33-uploading_progress",
    content: "`msgName`: String. The message name, `uploading_progress`."
  }, {
    heading: "33-uploading_progress",
    content: "`progress`: Number. An ever-increasing number between 0 and 10,000, equal to the ratio of the number of the uploaded files to the number of the recorded files multiplied by 10,000. After the recording service exits and when the number reaches 10,000, the upload completes."
  }, {
    heading: "33-uploading_progress",
    content: "**Example**:"
  }, {
    heading: "33-uploading_progress",
    content: "Agora does not recommended that core applications rely heavily on Notifications. If your application currently depends heavily on NCS, contact support\\@agora.io to enable the redundant message notification function. This feature doubles the number of received notifications, thereby reducing the probability of message loss. However, after enabling this function, you must check the message SID to manage duplicate messages. Please note that message notifications still cannot guarantee a 100% arrival rate."
  }, {
    heading: "reference",
    content: "This section contains content that completes the information on this page, or points you to documentation that explains other aspects to this product."
  }, {
    heading: "what-are-the-differences-between-the-notifications-service-and-the-query-method",
    content: "You can monitor the status of the Real-Time STT service either through the `query` method or by the Notifications service, to take action when required. Both options have pros and cons."
  }, {
    heading: "the-query-method",
    content: "You can periodically call the `query` method to monitor the status of Real-Time STT."
  }, {
    heading: "the-query-method",
    content: "Pros: Reliable, as the status is queried proactively."
  }, {
    heading: "the-query-method",
    content: "Cons:"
  }, {
    heading: "the-query-method",
    content: "Provides limited status information."
  }, {
    heading: "the-query-method",
    content: "Requires an active query. You cannot query too often because of the Queries Per Second (QPS) limit, and thus it is not as real-time as the Notifications service."
  }, {
    heading: "the-query-method",
    content: "If the status reliability of Real-Time STT is a high priority, Agora strongly recommends using the `query` method."
  }, {
    heading: "notifications-service",
    content: "You can use the Notifications service as a complementary option to monitor the service status. You need to configure an HTTP/HTTPS server to receive event notifications."
  }, {
    heading: "notifications-service",
    content: "Pros: Real-time"
  }, {
    heading: "notifications-service",
    content: "Cons:"
  }, {
    heading: "notifications-service",
    content: "The server passively receives messages, and the messages may get lost."
  }, {
    heading: "notifications-service",
    content: "The confirmation message of the message delivery may get lost, causing the message to be re-sent. In such a case, you need to deduplicate the notifications."
  }, {
    heading: "notifications-service",
    content: "The messages may not arrive in the correct order."
  }],
  headings: [{
    id: "callback-information",
    content: "Callback information"
  }, {
    id: "v7x",
    content: "v7.x"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "event-types",
    content: "Event types"
  }, {
    id: "event-101-agent-joined",
    content: "Event 101: Agent joined"
  }, {
    id: "event-102-agent-left",
    content: "Event 102: Agent left"
  }, {
    id: "event-104-token-will-expire",
    content: "Event 104: Token will expire"
  }, {
    id: "event-200-m3u8-file-upload-succeeded",
    content: "Event 200: M3U8 file upload succeeded"
  }, {
    id: "event-201-transcript-upload-succeeded",
    content: "Event 201: Transcript upload succeeded"
  }, {
    id: "event-202-transcript-upload-failed",
    content: "Event 202: Transcript upload failed"
  }, {
    id: "v5x-and-v6x",
    content: "v5.x and v6.x"
  }, {
    id: "payload-fields",
    content: "Payload fields"
  }, {
    id: "callback-events",
    content: "Callback events"
  }, {
    id: "4-cloud_recording_file_infos",
    content: "`4 cloud_recording_file_infos`"
  }, {
    id: "30-uploader_started",
    content: "`30 uploader_started`"
  }, {
    id: "31-uploaded",
    content: "`31 uploaded`"
  }, {
    id: "32-backuped",
    content: "`32 backuped`"
  }, {
    id: "33-uploading_progress",
    content: "`33 uploading_progress`"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "what-are-the-differences-between-the-notifications-service-and-the-query-method",
    content: "What are the differences between the Notifications service and the query method?"
  }, {
    id: "the-query-method",
    content: "The `query` method"
  }, {
    id: "notifications-service",
    content: "Notifications service"
  }]
};
export let toc = [{
  depth: 2,
  url: "#callback-information",
  title: _jsx(_Fragment, {
    children: "Callback information"
  })
}, {
  depth: 2,
  url: "#v7x",
  title: _jsx(_Fragment, {
    children: "v7.x"
  })
}, {
  depth: 3,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#event-types",
  title: _jsx(_Fragment, {
    children: "Event types"
  })
}, {
  depth: 4,
  url: "#event-101-agent-joined",
  title: _jsx(_Fragment, {
    children: "Event 101: Agent joined"
  })
}, {
  depth: 4,
  url: "#event-102-agent-left",
  title: _jsx(_Fragment, {
    children: "Event 102: Agent left"
  })
}, {
  depth: 4,
  url: "#event-104-token-will-expire",
  title: _jsx(_Fragment, {
    children: "Event 104: Token will expire"
  })
}, {
  depth: 4,
  url: "#event-200-m3u8-file-upload-succeeded",
  title: _jsx(_Fragment, {
    children: "Event 200: M3U8 file upload succeeded"
  })
}, {
  depth: 4,
  url: "#event-201-transcript-upload-succeeded",
  title: _jsx(_Fragment, {
    children: "Event 201: Transcript upload succeeded"
  })
}, {
  depth: 4,
  url: "#event-202-transcript-upload-failed",
  title: _jsx(_Fragment, {
    children: "Event 202: Transcript upload failed"
  })
}, {
  depth: 2,
  url: "#v5x-and-v6x",
  title: _jsx(_Fragment, {
    children: "v5.x and v6.x"
  })
}, {
  depth: 3,
  url: "#payload-fields",
  title: _jsx(_Fragment, {
    children: "Payload fields"
  })
}, {
  depth: 3,
  url: "#callback-events",
  title: _jsx(_Fragment, {
    children: "Callback events"
  })
}, {
  depth: 4,
  url: "#4-cloud_recording_file_infos",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "4 cloud_recording_file_infos"
    })
  })
}, {
  depth: 4,
  url: "#30-uploader_started",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "30 uploader_started"
    })
  })
}, {
  depth: 4,
  url: "#31-uploaded",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "31 uploaded"
    })
  })
}, {
  depth: 4,
  url: "#32-backuped",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "32 backuped"
    })
  })
}, {
  depth: 4,
  url: "#33-uploading_progress",
  title: _jsx(_Fragment, {
    children: _jsx("code", {
      children: "33 uploading_progress"
    })
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#what-are-the-differences-between-the-notifications-service-and-the-query-method",
  title: _jsx(_Fragment, {
    children: "What are the differences between the Notifications service and the query method?"
  })
}, {
  depth: 4,
  url: "#the-query-method",
  title: _jsxs(_Fragment, {
    children: ["The ", _jsx("code", {
      children: "query"
    }), " method"]
  })
}, {
  depth: 4,
  url: "#notifications-service",
  title: _jsx(_Fragment, {
    children: "Notifications service"
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, { CalloutContainer, CalloutDescription, CalloutTitle, Tab, Tabs } = _components;
  if (!CalloutContainer)
    _missingMdxReference("CalloutContainer", true);
  if (!CalloutDescription)
    _missingMdxReference("CalloutDescription", true);
  if (!CalloutTitle)
    _missingMdxReference("CalloutTitle", true);
  if (!Tab)
    _missingMdxReference("Tab", true);
  if (!Tabs)
    _missingMdxReference("Tabs", true);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "Agora provides the Notifications service (NCS), which sends notifications about Agora Real-Time STT events. You can set up an HTTPS server to receive these notifications. When an event occurs, the Real-Time STT service notifies the Notifications service, which then sends an HTTPS request to your server."
    }), `
`, _jsx(_components.h2, {
      id: "callback-information",
      children: "Callback information"
    }), `
`, _jsx(_components.p, {
      children: "After you enable Notifications, when a specified event occurs, the Notifications server sends an HTTP/HTTPS request as a callback. The request body provides the main information of the callback in a JSON object. The JSON object contains different fields for different events."
    }), `
`, _jsx(_components.p, {
      children: "The structure of the message notification callback in version 7.x differs from that in versions 5.x and 6.x. Refer to the relevant section based on your implementation."
    }), `
`, _jsx(_components.h2, {
      id: "v7x",
      children: "v7.x"
    }), `
`, _jsx(_components.p, {
      children: "This section explains the structure of the message notification callback for version 7.x."
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "The message notification callback request body includes the following fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The agent ID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "noticeId"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The notification ID. Uniquely identifies an event notification from the Agora service."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "productId"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: ["The service ID. ", _jsx(_components.code, {
              children: "20"
            }), " indicates speech-to-text service."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: ["The type of event. See ", _jsx(_components.a, {
              href: "#event-types",
              children: "Event types"
            }), " for details."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "notifyMs"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (in milliseconds) when the Agora messaging server sends the notification."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: "JSON object"
          }), _jsxs(_components.td, {
            children: ["Event-specific data. The structure of ", _jsx(_components.code, {
              children: "payload"
            }), " depends on the ", _jsx(_components.code, {
              children: "eventType"
            }), ". For details, see ", _jsx(_components.a, {
              href: "#event-types",
              children: "Event types"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "sid"'
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
              children: '"agent_id"'
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
              children: '    "noticeId"'
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
              children: '"e94f5b6fd69446ea9d75da90a59ca8a2"'
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
              children: '    "productId"'
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
              children: "20"
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
              children: '    "eventType"'
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
              children: "101"
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
              children: '    "notifyMs"'
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
              children: "1750235972193"
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
              children: '    "payload"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "..."
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
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
`, _jsx(_components.h3, {
      id: "event-types",
      children: "Event types"
    }), `
`, _jsx(_components.p, {
      children: "The Agora message notification service supports the following events for the speech-to-text service:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "event_name"
            })
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "101"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent joined"
            })
          }), _jsx(_components.td, {
            children: "The agent joins the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "102"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent left"
            })
          }), _jsx(_components.td, {
            children: "The agent leaves the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "104"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "token will expire"
            })
          }), _jsx(_components.td, {
            children: "The RTC Token used by the agent is about to expire."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "200"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "M3U8 file upload succeed"
            })
          }), _jsx(_components.td, {
            children: "A single M3U8 index file is created and uploaded successfully. If multiple M3U8 files are uploaded, this event is sent once per file."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "201"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcript upload succeed"
            })
          }), _jsx(_components.td, {
            children: "All M3U8 and VTT files finish uploading successfully."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "202"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcript upload failed"
            })
          }), _jsx(_components.td, {
            children: "M3U8 or VTT file uploads finish, but some or all files fail to upload."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "event-101-agent-joined",
      children: "Event 101: Agent joined"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " value ", _jsx(_components.code, {
        children: "101"
      }), " indicates that an agent has joined a channel. The ", _jsx(_components.code, {
        children: "payload"
      }), " contains the following fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The task ID associated with the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Number"
            })
          }), _jsx(_components.td, {
            children: "The timestamp (in milliseconds) when the task started."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The name of the channel the agent joined."
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "agent_id"'
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
              children: '"agent_id"'
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
              children: '    "channel"'
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
              children: '"stt_ncs93369"'
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
              children: '    "start_ts"'
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
              children: "1750235971"
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
`, _jsx(_components.h4, {
      id: "event-102-agent-left",
      children: "Event 102: Agent left"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " value ", _jsx(_components.code, {
        children: "102"
      }), " indicates that an agent left the channel. The ", _jsx(_components.code, {
        children: "payload"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The task ID associated with the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Number"
            })
          }), _jsx(_components.td, {
            children: "The timestamp (in milliseconds) when the task started."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "stop_ts"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Number"
            })
          }), _jsx(_components.td, {
            children: "The timestamp (in milliseconds) when the task ended."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The name of the channel the agent was in."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "status"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsxs(_components.td, {
            children: ["The status of the task:", _jsx("br", {}), "= ", _jsx(_components.code, {
              children: "STOPPED"
            }), ": The task ended normally or due to idle timeout.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "FAILED"
            }), ": The task failed."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsxs(_components.td, {
            children: ["The reason the agent exited the channel:", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "OK"
            }), ": The agent exited normally.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Idle for too long"
            }), ": The task timed out due to inactivity.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Task exceeded maximum lifetime"
            }), ": The task ended because it reached the maximum task lifetime.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "RTC connection error"
            }), ": The agent exited due to a connection error.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Fatal ASR error"
            }), ": The task exited because of an ASR module error.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "Fatal Translation error"
            }), ": The task exited due to a translation module error."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
    }), `
`, _jsxs(Tabs, {
      items: ["Normal stop", "Idle timeout", "Lifetime exceeded", "Connection error", "ASR error", "Translation error"],
      children: [_jsx(Tab, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "agent_id"'
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
                  children: '"agent_id"'
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
                  children: '    "channel"'
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
                  children: '"stt_ncs93369"'
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
                  children: '    "message"'
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
                  children: '"OK"'
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
                  children: '    "start_ts"'
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
                  children: "1750235971"
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
                  children: '    "status"'
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
                  children: '"STOPPED"'
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
                  children: '    "stop_ts"'
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
                  children: "1750235984"
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
      }), _jsx(Tab, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "agent_id"'
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
                  children: '"agent_id"'
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
                  children: '    "channel"'
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
                  children: '"stt_ncs93369"'
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
                  children: '    "message"'
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
                  children: '"Idle for too long"'
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
                  children: '    "start_ts"'
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
                  children: "1750235971"
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
                  children: '    "status"'
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
                  children: '"STOPPED"'
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
                  children: '    "stop_ts"'
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
                  children: "1750235984"
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
      }), _jsx(Tab, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "agent_id"'
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
                  children: '"agent_id"'
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
                  children: '    "channel"'
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
                  children: '"stt_ncs93369"'
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
                  children: '    "message"'
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
                  children: '"Task exceeded maximum lifetime"'
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
                  children: '    "start_ts"'
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
                  children: "1750235971"
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
                  children: '    "status"'
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
                  children: '"STOPPED"'
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
                  children: '    "stop_ts"'
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
                  children: "1750495171"
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
      }), _jsx(Tab, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "agent_id"'
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
                  children: '"agent_id"'
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
                  children: '    "channel"'
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
                  children: '"stt_ncs93369"'
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
                  children: '    "message"'
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
                  children: '"RTC connection error"'
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
                  children: '    "start_ts"'
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
                  children: "1750235971"
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
                  children: '    "status"'
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
                  children: '"FAILED"'
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
                  children: '    "stop_ts"'
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
                  children: "1750235984"
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
      }), _jsx(Tab, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "agent_id"'
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
                  children: '"agent_id"'
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
                  children: '    "channel"'
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
                  children: '"stt_ncs93369"'
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
                  children: '    "message"'
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
                  children: '"Fatal ASR error"'
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
                  children: '    "start_ts"'
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
                  children: "1750235971"
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
                  children: '    "status"'
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
                  children: '"FAILED"'
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
                  children: '    "stop_ts"'
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
                  children: "1750235984"
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
      }), _jsx(Tab, {
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "agent_id"'
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
                  children: '"agent_id"'
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
                  children: '    "channel"'
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
                  children: '"stt_ncs93369"'
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
                  children: '    "message"'
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
                  children: '"Fatal Translation error"'
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
                  children: '    "start_ts"'
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
                  children: "1750235971"
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
                  children: '    "status"'
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
                  children: '"FAILED"'
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
                  children: '    "stop_ts"'
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
                  children: "1750235984"
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
    }), `
`, _jsx(_components.h4, {
      id: "event-104-token-will-expire",
      children: "Event 104: Token will expire"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " value ", _jsx(_components.code, {
        children: "104"
      }), " indicates that the RTC Token used by the Real-Time STT engine is about to expire. The Notifications service sends this event to your server when the RTC Token has 30 seconds remaining before it expires. If the RTC Token's validity period is 30 seconds or less, the platform does not send this event. The ", _jsx(_components.code, {
        children: "payload"
      }), " contains the following fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field"
          }), _jsx(_components.th, {
            children: "Type"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The task ID associated with the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "name"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The unique service identifier passed in when the task was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "start_ts"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Number"
            })
          }), _jsx(_components.td, {
            children: "The timestamp (in seconds) when the task was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "String"
            })
          }), _jsxs(_components.td, {
            children: ["A reminder that the RTC Token is about to expire. Fixed value: ", _jsx(_components.code, {
              children: "token will expire!"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "agent_id"'
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
              children: '"agent_id"'
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
              children: '    "name"'
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
              children: '"agora-test"'
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
              children: '    "start_ts"'
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
              children: "1750235971"
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
              children: '    "channel"'
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
              children: '"stt_ncs93369"'
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
              children: '    "message"'
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
              children: '"token will expire!"'
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
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Event ", _jsx(_components.code, {
            children: "104"
          }), " is for advance notification only. It does not end the task, change the task's final status, or replace the existing RTC connection error handling flow."]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "event-200-m3u8-file-upload-succeeded",
      children: "Event 200: M3U8 file upload succeeded"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " value ", _jsx(_components.code, {
        children: "200"
      }), " indicates that Agora has successfully uploaded a single M3U8 playlist file. Agora sends this event after each M3U8 index file is created and uploaded. If multiple M3U8 files are uploaded, this event is sent once per file. The ", _jsx(_components.code, {
        children: "payload"
      }), " contains the following fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task ID associated with the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "file_name"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the M3U8 file."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "file_creation_ts"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Int64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Unix timestamp (in milliseconds) when the M3U8 file was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "A STT transcript m3u8 file was successfully generated & uploaded"
            }), ". Indicates that Agora has successfully generated and uploaded the M3U8 file."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "agent_id"'
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
              children: '"agent_id"'
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
              children: '    "channel"'
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
              children: '"stt_ncs93369"'
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
              children: '    "file_name"'
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
              children: '"prefix/1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8"'
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
              children: '    "file_creation_ts"'
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
              children: "1234567891000"
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
              children: '    "message"'
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
              children: '"A STT transcript m3u8 file was successfully generated & uploaded"'
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
`, _jsx(_components.h4, {
      id: "event-201-transcript-upload-succeeded",
      children: "Event 201: Transcript upload succeeded"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " value ", _jsx(_components.code, {
        children: "201"
      }), " indicates that Agora has successfully uploaded all M3U8 and VTT files. Agora sends this event after all M3U8 and VTT files finish uploading. The ", _jsx(_components.code, {
        children: "payload"
      }), " contains the following fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task ID associated with the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "file_name"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the M3U8 file."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "file_creation_ts"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Int64"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Unix timestamp (in milliseconds) when the M3U8 file was created."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "STT transcript upload succeeded."
            }), " Indicates that Agora has successfully uploaded all M3U8 and VTT files."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "agent_id"'
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
              children: '"agent_id"'
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
              children: '    "channel"'
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
              children: '"stt_ncs93369"'
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
              children: '    "file_name"'
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
              children: '"prefix/1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8"'
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
              children: '    "file_creation_ts"'
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
              children: "1234567891000"
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
              children: '    "message"'
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
              children: '"STT transcript upload succeeded."'
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
`, _jsx(_components.h4, {
      id: "event-202-transcript-upload-failed",
      children: "Event 202: Transcript upload failed"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " value ", _jsx(_components.code, {
        children: "202"
      }), " indicates that one or more M3U8 or VTT files have failed to upload. Agora sends this event when M3U8 or VTT file uploads finish, but some or all files fail to upload. The ", _jsx(_components.code, {
        children: "payload"
      }), " contains the following fields:"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "agent_id"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The task ID associated with the agent."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "channel"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "succeed_file_list"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array<Object>"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The list of files that uploaded successfully. Each object includes:", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "file_name"
            }), ": The file name.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "file_creation_ts"
            }), ": The Unix timestamp (in milliseconds) when the file was created."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "failed_file_list"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Array<Object>"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The list of files that failed to upload. Each object includes:", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "file_name"
            }), ": The file name.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "file_creation_ts"
            }), ": The Unix timestamp (in milliseconds) when the file was created.", _jsx("br", {}), "- ", _jsx(_components.code, {
              children: "message"
            }), ": The reason the upload failed."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "message"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.code, {
              children: "STT transcript upload failed."
            }), " Indicates that one or more M3U8 or VTT files have failed to upload."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "agent_id"'
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
              children: '"xxx"'
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
              children: '    "channel"'
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
              children: '"xxx"'
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
              children: '    "succeed_file_list"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "file_name"'
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
              children: '"prefix/1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8"'
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
              children: '            "file_creation_ts"'
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
              children: "1234567891000"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "file_name"'
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
              children: '"prefix/zh-CN_1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8"'
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
              children: '            "file_creation_ts"'
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
              children: "1234567891001"
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
              children: '    "failed_file_list"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "file_name"'
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
              children: '"prefix/ja-JP_1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8"'
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
              children: '            "file_creation_ts"'
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
              children: "1234567891001"
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
              children: '            "message"'
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
              children: '"last failed reason xxx"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        },"
            })
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "file_name"'
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
              children: '"prefix/fr-FH_1NT29X0TOHQVO6JL1HJE118VBLXNS4SD_agora_rtc_test.m3u8"'
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
              children: '            "file_creation_ts"'
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
              children: "1234567891001"
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
              children: '            "message"'
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
              children: '"last failed reason xxx"'
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
              children: '    "message"'
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
              children: '"STT transcript upload failed."'
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
`, _jsx(_components.h2, {
      id: "v5x-and-v6x",
      children: "v5.x and v6.x"
    }), `
`, _jsx(_components.p, {
      children: "This section explains the structure of the message notification callback for SDK versions 5.x and 6.x."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The following ", _jsx(_components.a, {
          href: "#payload-fields",
          children: "Payload fields"
        }), " are common for all Real-Time STT events."]
      }), `
`, _jsxs(_components.li, {
        children: ["The values of ", _jsx(_components.code, {
          children: "eventType"
        }), ", ", _jsx(_components.code, {
          children: "serviceType"
        }), ", and ", _jsx(_components.code, {
          children: "details"
        }), " depend on the event."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "payload-fields",
      children: "Payload fields"
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "payload"
      }), " JSON object, which is the main body of a notification, includes the following fields in each type of event notification:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cname"
        }), ": String. The name of the channel to be transcribed."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "subBotUid"
        }), ": String. The UID of the bot subscribing to the audio."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "pubBotUid"
        }), ": String. The UID of the bot publishing the text to the channel."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "taskId"
        }), ": String. The ID of the Real-Time STT task."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sequence"
        }), ": Number. The serial number of the notification, starting from ", _jsx(_components.code, {
          children: "0"
        }), ". You can use this parameter to identify notifications that are random, lost, or re-sent."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "serviceScene"
        }), ": String, the current service scene.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": Real-Time STT service."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sendts"
        }), ": Number. The time (UTC) when the event happens. Unix timestamp in ms."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "serviceType"
        }), ": Number. The type of Agora service.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": The Real-Time STT service."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": The STT module."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "2"
            }), ": The uploader module."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "details"
        }), ": JSON. The details of the callback events provided in the tables below. The Notifications service may add new fields in the future. To ensure backward compatibility, the service will not change the data format of the existing fields."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "callback-events",
      children: "Callback events"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "eventType"
          }), _jsx(_components.th, {
            children: "serviceType"
          }), _jsx(_components.th, {
            children: "Event description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "4"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "0"
            }), " (Real-Time STT service)"]
          }), _jsxs(_components.td, {
            children: ["The M3U8 playlist file is generated for ", _jsx(_components.code, {
              children: ".vtt"
            }), " files."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "30"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "2"
            }), " (uploader module)"]
          }), _jsx(_components.td, {
            children: "The upload service starts."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "31"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "2"
            }), " (uploader module)"]
          }), _jsxs(_components.td, {
            children: ["All the ", _jsx(_components.code, {
              children: ".vtt"
            }), " files are uploaded to the specified third-party cloud storage."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "32"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "2"
            }), " (uploader module)"]
          }), _jsxs(_components.td, {
            children: ["All the ", _jsx(_components.code, {
              children: ".vtt"
            }), " files are uploaded, but at least one file is uploaded to Agora Cloud Backup."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "33"
            })
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "2"
            }), " (uploader module)"]
          }), _jsxs(_components.td, {
            children: ["The progress of uploading the ", _jsx(_components.code, {
              children: ".vtt"
            }), " files to the cloud storage."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "4-cloud_recording_file_infos",
      children: _jsx(_components.code, {
        children: "4 cloud_recording_file_infos"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType 4"
      }), " indicates that an M3U8 playlist file was generated and uploaded. During a recording, the recording service repeatedly uploads and overwrites the M3U8 file, but this event is triggered the first time the M3U8 file is generated and uploaded."]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "cloud_recording_file_infos"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileList"
        }), ": String. The name of the M3U8 file."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cname"'
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
              children: '"test"'
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
              children: '    "subBotUid"'
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
              children: '"91"'
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
              children: '    "pubBotUid"'
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
              children: '"22"'
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
              children: '    "taskId"'
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
              children: '"ec4b91009a47366703b821bb12345678"'
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
              children: '    "sequence"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "serviceScene"'
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
              children: '"Real-Time STT + Real-Time Translation"'
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
              children: '    "sendts"'
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
              children: "1715670681"
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
              children: '    "serviceType"'
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
              children: "2"
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
              children: '    "details"'
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
              children: '        "fileList"'
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
              children: '"ec4b91009a47366703b821bb12345678_test.m3u8"'
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
              children: '        "msgName"'
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
              children: '"voice_ai_file_infos"'
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "30-uploader_started",
      children: _jsx(_components.code, {
        children: "30 uploader_started"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType 30"
      }), " indicates that the upload service has started. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, uploader_started."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Number. The event status. 0 indicates normal status; other values indicate abnormal status."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cname"'
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
              children: '"test"'
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
              children: '    "subBotUid"'
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
              children: '"91"'
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
              children: '    "pubBotUid"'
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
              children: '"22"'
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
              children: '    "taskId"'
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
              children: '"c662ce961441cd8dc22f858ab7cec4d4"'
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
              children: '    "sequence"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "serviceScene"'
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
              children: '"Real-Time STT + Real-Time Translation"'
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
              children: '    "sendts"'
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
              children: "1715331647"
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
              children: '    "serviceType"'
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
              children: "2"
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
              children: '    "details"'
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
              children: '        "msgName"'
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
              children: '"uploader_started"'
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
              children: '        "status"'
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "31-uploaded",
      children: _jsx(_components.code, {
        children: "31 uploaded"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType 31"
      }), " indicates that all the recorded files are uploaded to the specified third-party cloud storage. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, uploaded."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Number. The event status. 0 indicates normal status; other values indicate abnormal status."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileList"
        }), ": JSONArray. An array that contains detailed information of each recorded file."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileName"
        }), ": String. The name of the M3U8 file or MP4 file."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "trackType"
        }), ": String. The type of the recorded file.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"audio"'
            }), ": Audio file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"video"'
            }), ": Video file (no audio)."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"text"'
            }), ": Caption/transcription file."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "mode"
        }), ": Number.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": Service for channel,"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "2"
            }), ": Service for a specific UID."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sliceStartTime"
        }), ": Number. The Unix time (ms) when the recording starts."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cname"'
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
              children: '"test"'
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
              children: '    "subBotUid"'
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
              children: '"91"'
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
              children: '    "pubBotUid"'
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
              children: '"22"'
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
              children: '    "taskId"'
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
              children: '"c662ce961441cd8dc22f858ab7cec4d4"'
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
              children: '    "sequence"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "serviceScene"'
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
              children: '"Real-Time STT + Real-Time Translation"'
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
              children: '    "sendts"'
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
              children: "1715331732"
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
              children: '    "serviceType"'
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
              children: "2"
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
              children: '    "details"'
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
              children: '        "status"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "fileList"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "fileName"'
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
              children: '"en-US_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8"'
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
              children: ' "trackType"'
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
              children: '"audio"'
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
              children: ' "mode"'
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
              children: "2"
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
              children: ' "sliceStartTime"'
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
              children: "1715331647844"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "fileName"'
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
              children: '"ar-SA_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8"'
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
              children: ' "trackType"'
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
              children: '"audio"'
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
              children: ' "mode"'
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
              children: "2"
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
              children: ' "sliceStartTime"'
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
              children: "1715331647844"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "fileName"'
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
              children: '"c662ce961441cd8dc22f858ab7cec4d4_test.m3u8"'
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
              children: ' "trackType"'
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
              children: '"audio"'
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
              children: ' "mode"'
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
              children: "2"
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
              children: ' "sliceStartTime"'
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
              children: "1715331647844"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "msgName"'
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
              children: '"uploaded"'
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "32-backuped",
      children: _jsx(_components.code, {
        children: "32 backuped"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType 32"
      }), " indicates that all the ", _jsx(_components.code, {
        children: ".vtt"
      }), " files are uploaded, but at least one of them is uploaded to Agora Cloud Backup. Agora Cloud Backup automatically uploads the files to the specified third-party cloud storage. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "backuped"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Number. The event status. 0 indicates normal status; other values indicate abnormal status."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileList"
        }), ": JSONArray. An array that contains detailed information of each recorded file."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileName"
        }), ": String. The name of the M3U8 file or MP4 file."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "trackType"
        }), ": String. The type of the recorded file.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"audio"'
            }), ": Audio file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"video"'
            }), ": Video file (no audio)."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"text"'
            }), ": Caption/Transcription file."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "mode"
        }), ": Number.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": Service for channel,"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "2"
            }), ": Service for specific uid."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sliceStartTime"
        }), ": Number. The Unix time (ms) when the recording starts."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cname"'
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
              children: '"test"'
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
              children: '    "subBotUid"'
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
              children: '"91"'
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
              children: '    "pubBotUid"'
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
              children: '"22"'
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
              children: '    "taskId"'
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
              children: '"c662ce961441cd8dc22f858ab7cec4d4"'
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
              children: '    "sequence"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "serviceScene"'
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
              children: '"Real-Time STT + Real-Time Translation"'
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
              children: '    "sendts"'
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
              children: "1715331732"
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
              children: '    "serviceType"'
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
              children: "2"
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
              children: '    "details"'
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
              children: '        "status"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "fileList"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "fileName"'
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
              children: '"en-US_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8"'
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
              children: ' "trackType"'
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
              children: '"audio"'
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
              children: ' "mode"'
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
              children: "2"
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
              children: ' "sliceStartTime"'
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
              children: "1715331647844"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "fileName"'
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
              children: '"ar-SA_c662ce961441cd8dc22f858ab7cec4d4_test.m3u8"'
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
              children: ' "trackType"'
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
              children: '"audio"'
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
              children: ' "mode"'
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
              children: "2"
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
              children: ' "sliceStartTime"'
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
              children: "1715331647844"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ' "fileName"'
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
              children: '"c662ce961441cd8dc22f858ab7cec4d4_test.m3u8"'
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
              children: ' "trackType"'
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
              children: '"audio"'
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
              children: ' "mode"'
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
              children: "2"
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
              children: ' "sliceStartTime"'
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
              children: "1715331647844"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "msgName"'
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
              children: '"backuped"'
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "33-uploading_progress",
      children: _jsx(_components.code, {
        children: "33 uploading_progress"
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType 33"
      }), " indicates the current upload progress. It notifies you of the ", _jsx(_components.code, {
        children: ".vtt"
      }), " files upload progress once every minute after the Real-Time STT service starts. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "uploading_progress"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "progress"
        }), ": Number. An ever-increasing number between 0 and 10,000, equal to the ratio of the number of the uploaded files to the number of the recorded files multiplied by 10,000. After the recording service exits and when the number reaches 10,000, the upload completes."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Example"
      }), ":"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "cname"'
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
              children: '"test"'
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
              children: '    "subBotUid"'
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
              children: '"91"'
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
              children: '    "pubBotUid"'
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
              children: '"22"'
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
              children: '    "taskId"'
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
              children: '"c662ce961441cd8dc22f858ab7cec4d4"'
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
              children: '    "sequence"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "serviceScene"'
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
              children: '"Real-Time STT + Real-Time Translation"'
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
              children: '    "sendts"'
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
              children: "1715331707"
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
              children: '    "serviceType"'
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
              children: "2"
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
              children: '    "details"'
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
              children: '        "msgName"'
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
              children: '"uploading_progress"'
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
              children: '        "progress"'
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
              children: "10000"
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
              children: "}"
            })
          })]
        })
      })
    }), `
`, _jsxs(CalloutContainer, {
      type: "warning",
      children: [_jsx(CalloutTitle, {
        children: "Best Practice"
      }), _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Agora does not recommended that core applications rely heavily on Notifications. If your application currently depends heavily on NCS, contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " to enable the redundant message notification function. This feature doubles the number of received notifications, thereby reducing the probability of message loss. However, after enabling this function, you must check the message SID to manage duplicate messages. Please note that message notifications still cannot guarantee a 100% arrival rate."]
        })
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
      id: "what-are-the-differences-between-the-notifications-service-and-the-query-method",
      children: "What are the differences between the Notifications service and the query method?"
    }), `
`, _jsxs(_components.p, {
      children: ["You can monitor the status of the Real-Time STT service either through the ", _jsx(_components.code, {
        children: "query"
      }), " method or by the Notifications service, to take action when required. Both options have pros and cons."]
    }), `
`, _jsxs(_components.h4, {
      id: "the-query-method",
      children: ["The ", _jsx(_components.code, {
        children: "query"
      }), " method"]
    }), `
`, _jsxs(_components.p, {
      children: ["You can periodically call the ", _jsx(_components.code, {
        children: "query"
      }), " method to monitor the status of Real-Time STT."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pros: Reliable, as the status is queried proactively."
      }), `
`, _jsxs(_components.li, {
        children: ["Cons:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Provides limited status information."
          }), `
`, _jsx(_components.li, {
            children: "Requires an active query. You cannot query too often because of the Queries Per Second (QPS) limit, and thus it is not as real-time as the Notifications service."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status reliability of Real-Time STT is a high priority, Agora strongly recommends using the ", _jsx(_components.code, {
        children: "query"
      }), " method."]
    }), `
`, _jsx(_components.h4, {
      id: "notifications-service",
      children: "Notifications service"
    }), `
`, _jsx(_components.p, {
      children: "You can use the Notifications service as a complementary option to monitor the service status. You need to configure an HTTP/HTTPS server to receive event notifications."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pros: Real-time"
      }), `
`, _jsxs(_components.li, {
        children: ["Cons:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "The server passively receives messages, and the messages may get lost."
          }), `
`, _jsx(_components.li, {
            children: "The confirmation message of the message delivery may get lost, causing the message to be re-sent. In such a case, you need to deduplicate the notifications."
          }), `
`]
        }), `
`]
      }), `
`, _jsx(_components.li, {
        children: "The messages may not arrive in the correct order."
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
