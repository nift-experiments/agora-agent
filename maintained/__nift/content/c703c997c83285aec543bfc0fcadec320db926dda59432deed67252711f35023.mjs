import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Receive webhook notifications",
  description: "Receive notification of channel events in real time."
};
export let _markdown = `

A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Cloud Recording events. With Notifications, you can subscribe to Cloud Recording events and receive notifications in real time.

## Understand the tech [#understand-the-tech]

Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns \`200 Ok\` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users.

The following figure illustrates the workflow when Notifications is enabled for the specific Cloud Recording events you subscribe to:

![cloud-recording](https://assets-docs.agora.io/images/notification-center-service/ncs-cloud-recording-workflow.svg)

1. A user commits an action that creates an event.
2. Notifications sends an HTTPS POST request to your webhook.
3. Your server validates the request signature, then sends a response to Notifications within 10 seconds. The response body must be in JSON.

If Notifications receives \`200 OK\` within 10 seconds of sending the initial notification, the callback is considered successful. If these conditions are not met, Notifications immediately resends the notification. The interval between notification attempts gradually increases. Notifications stops sending notifications after three retries.

## Prerequisites [#prerequisites]

To set up and use Notifications, you must have:

* A [valid Agora account](/en/introduction/account#sign-up-for-an-agora-account).
* An [active Agora project](/en/introduction/account#your-first-agora-project).
* A computer with Internet access.

  If your network access is restricted by a firewall, call the [IP address query API](#ip-address-query-api) to retrieve the Notifications IP addresses , then configure the firewall to allow these IP addresses.

## Handle notifications for specific events [#handle-notifications-for-specific-events]

In order to handle notifications for the events you subscribe to, you need to:

* [Create your webhook](#create-your-webhook)
* [Set up Webhook notifications](#set-up-webhook-notifications)
* [Verify Notifications signatures](#add-signature-verification)

### Create your webhook [#create-your-webhook]

Once Notifications is enabled, Agora SDRTN® sends notification callbacks as \`HTTPS POST\` requests to your webhook when events that you are subscribed to occur. The data format of the requests is JSON, the character encoding is \`UTF-8\`, and the signature algorithm is \`HMAC/SHA1\` or \`HMAC/SHA256\`.

For Notifications, a webhook is an endpoint on an \`HTTPS\` server that handles these requests. In a production environment you write this in your web infrastructure, for development purposes best practice is to create a simple local server and use a service such as [ngrok](https://ngrok.com/download) to supply a public URL that you register with Agora SDRTN® when you enable Notifications.

To do this, take the following steps:

1. **Set up Go**

   Ensure you have Go installed on your system. If not, download and install it from the [official Go website](https://go.dev/dl/).

2. **Create a Go project for your server**

   Create a new directory for your project and navigate into it:

   \`\`\`sh
   mkdir agora-webhook-server
   cd agora-webhook-server
   \`\`\`

   In the project directory, create a new file \`main.go\`. Open the file in your preferred text editor and add the following code:

   \`\`\`go
   package main

   import (
     "encoding/json"
     "fmt"
     "io"
     "log"
     "net/http"
   )

   type WebhookRequest struct {
       NoticeID   string \`json:"noticeId"\`
       ProductID  int64  \`json:"productId"\`
       EventType  int    \`json:"eventType"\`
       Payload    Payload \`json:"payload"\`
   }

   type Payload struct {
       ClientSeq   int64  \`json:"clientSeq"\`
       UID         int    \`json:"uid"\`
       ChannelName string \`json:"channelName"\`
   }

   func rootHandler(w http.ResponseWriter, r *http.Request) {
       response := \`<h1>Agora Notifications demo</h1>\`
       w.WriteHeader(http.StatusOK)
       w.Write([]byte(response))
   }

   func ncsHandler(w http.ResponseWriter, r *http.Request) {
       agoraSignature := r.Header.Get("Agora-Signature")
       fmt.Println("Agora-Signature:", agoraSignature)

       body, err := io.ReadAll(r.Body)
       if err != nil {
           http.Error(w, "Unable to read request body", http.StatusBadRequest)
           return
       }

       var req WebhookRequest
       if err := json.Unmarshal(body, &req); err != nil {
           http.Error(w, "Invalid JSON", http.StatusBadRequest)
           return
       }

       fmt.Printf("Event code: %d Uid: %d Channel: %s ClientSeq: %d\\n",
           req.EventType, req.Payload.UID, req.Payload.ChannelName, req.Payload.ClientSeq)

       w.WriteHeader(http.StatusOK)
       w.Write([]byte("Ok"))
   }

   func main() {
       http.HandleFunc("/", rootHandler)
       http.HandleFunc("/ncsNotify", ncsHandler)

       port := ":8080"
       fmt.Printf("Notifications webhook server started on port %s\\n", port)
       if err := http.ListenAndServe(port, nil); err != nil {
           log.Fatalf("Failed to start server: %v", err)
       }
   }
   \`\`\`

3. **Run your Go server**

   Run the server using the following command:

   \`\`\`sh
   go run main.go
   \`\`\`

4. **Create a public URL for your server**

   In this example you use \`ngrok\` to create a public URL for your server.

   1. Download and install [ngrok](https://ngrok.com/download). If you have \`Chocolatey\`, use the following command:

      \`\`\`bash
      choco install ngrok
      \`\`\`

   2. Add an \`authtoken\` to ngrok:

      \`\`\`bash
      ngrok config add-authtoken <authToken>
      \`\`\`

      To obtain an \`authToken\`, [sign up](https://dashboard.ngrok.com/signup) with ngrok.

   3. Start a tunnel to your local server using the following command:

      \`\`\`bash
      ngrok http 127.0.0.1:8080
      \`\`\`

      You see a **Forwarding** URL and a **Web Interface** URL in the console. Open the web interface URL in your browser.

5. **Test the server**

   Open a web browser and navigate to the public URL provided by \`ngrok\` to see the root handler response.

   Use curl, [Postman](https://www.postman.com/), or another tool to send a \`POST\` request to \`https://<ngrok_url>/ncsNotify\` with the required \`JSON\` payload.

   Example using \`curl\`:

   \`\`\`sh
   curl -X POST <ngrok_url>/ncsNotify \\
   -H "Content-Type: application/json" \\
   -H "Agora-Signature: your_signature" \\
   -d '{
     "noticeId": "some_notice_id",
     "productId": 12345,
     "eventType": 1,
     "payload": {
       "clientSeq": 67890,
       "uid": 123,
       "channelName": "test_channel"
     }
   }'
   \`\`\`

   Make sure you replace \`ngrok_url\` with the forwarding url.

   Once the HTTP request is successful, you see the following \`JSON\` payload in your browser:

   \`\`\`json
   {
     "noticeId": "some_notice_id",
     "productId": 12345,
     "eventType": 1,
     "payload": {
       "clientSeq": 67890,
       "uid": 123,
       "channelName": "test_channel"
     }
   }
   \`\`\`

### Set up Webhook notifications [#set-up-webhook-notifications]

1. In [Agora Console](https://console.agora.io), select **Webhooks** from the sidebar.

2. Select **New Webhook**.

3. In the **Product** dropdown, select **Cloud Recording**.

4. Copy the **Signing Secret**. You use this secret to [Add signature verification](#add-signature-verification).

5. Fill in the following:

   * **Receiving region**: Select the region where your server that receives the notifications is located. Agora connects to the nearest Agora node server based on your selection.

   * **Receiving URL**: The \`HTTPS\` public address of your server that receives the notifications, for example \`https://1111-123-456-789-99.ap.ngrok.io/ncsNotify\`. Only \`HTTPS\` endpoints are supported.

   * **Subscribed events**: Select all the events that you want to subscribe to.

     If the selected events generate a high number of queries per second (QPS), ensure that your server has sufficient processing capacity.

   * **IP whitelist**: If your server is behind a firewall, enable this option, then call the [IP address query API](#ip-address-query-api) to get the IP addresses of the Agora Notifications server and add them to the firewall's allowed IP list.

   <CalloutContainer type="info">
     <CalloutDescription>
       To reduce the delay in notification delivery, best practice is to activate \`HTTP\` persistent connection (also called \`HTTP\` keep-alive) on your server with the following settings:

       * \`MaxKeepAliveRequests\`: 100 or more
       * \`KeepAliveTimeout\`: 10 seconds or more
     </CalloutDescription>
   </CalloutContainer>

6. Select **Run health check**. Agora performs a health test for your configuration as follows:

   1. The health test generates test events that correspond to your subscribed events, and then sends test event callbacks to your server.

   2. After receiving each test event callback, your server must respond within 10 seconds with a status code of \`200\`. The response body must be in JSON format.

7. When the health check succeeds, select **Save**.

   If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:

   * Request timeout (590): Your server does not return the status code \`200\` within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working.
   * Domain name unreachable (591): The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed.
   * Certificate error (592): The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list.
   * Other response errors: Your server returns a response with a status code other than \`200\`. See the prompt in Agora Console for the specific status code and error messages.

### Add signature verification [#add-signature-verification]

To communicate securely between Notifications and your webhook, Agora SDRTN®  uses signatures for identity verification as follows:

1. When you configure Notifications in Agora Console, Agora SDRTN®  generates a secret you use for verification.
2. When sending a notification, Notifications generates two signature values from the secret using \`HMAC/SHA1\` and \`HMAC/SHA256\` algorithms. These signatures are added as \`Agora-Signature\` and \`Agora-Signature-V2\` to the \`HTTPS\` request header.
3. When your server receives a callback, you can verify \`Agora-Signature\` or \`Agora-Signature-V2\`:

   * To verify \`Agora-Signature\`, use the secret, the raw request body, and the \`crypto/sha1\` algorithm.
   * To verify \`Agora-Signature-V2\`, use the secret, the raw request body, and the \`crypto/sha256\` algorithm.

The following sample code uses \`crypto/sha1\`.

To add signature verification to your server, take the following steps:

1. In the \`main.go\` file, replace your imports with the following:

   \`\`\`go
   import (
       "crypto/hmac"
       "crypto/sha1"
       "encoding/hex"
       "encoding/json"
       "fmt"
       "io"
       "log"
       "net/http"
   )
   \`\`\`

2. Add the following code after the list of imports:

   \`\`\`go
   // Replace with your NCS secret
   const secret = "<Replace with your secret code>"

   // calcSignatureV1 computes the HMAC/SHA256 signature for a given payload and secret
   func calcSignatureV1(secret, payload string) string {
       mac := hmac.New(sha1.New, []byte(secret))
       mac.Write([]byte(payload))
       return hex.EncodeToString(mac.Sum(nil))
   }

   // verify checks if the provided signature matches the HMAC/SHA256 signature of the request body
   func verify(requestBody, signature string) bool {
       calculatedSignature := calcSignatureV1(secret, requestBody)
       fmt.Println("Calculated Signature:", calculatedSignature)
       fmt.Println("Received Signature:", signature)
       return calculatedSignature == signature
   }
   \`\`\`

3. In \`main.go\`, add the following code after you read the request body:

   \`\`\`go
   // Verify the signature
   if !verify(string(body), agoraSignature) {
       http.Error(w, "Invalid signature", http.StatusUnauthorized)
       return
   }
   \`\`\`

4. To test the server, follow the steps given in the [Set up Webhook notifications](#set-up-webhook-notifications) section.

5. When you receive an event from the console, and if the signature matches, the event details are displayed in your browser.

## Reference [#reference]

This section contains in depth information about Notifications.

### Request Header [#request-header]

The header of notification callbacks contains the following fields:

| Field name           | Value                                                                                                                                                                                                                                                |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`Content-Type\`       | \`application/json\`                                                                                                                                                                                                                                   |
| \`Agora-Signature\`    | The signature generated by Agora using the **Secret** and the HMAC/SHA1 algorithm. You need to use the Secret and HMAC/SHA1 algorithm to verify the signature value. For details, see [Signature verification](#add-signature-verification).         |
| \`Agora-Signature-V2\` | The signature generated by Agora using the **Secret** and the HMAC/SHA256 algorithm. You need to use the Secret and the HMAC/SHA256 algorithm to verify the signature value. For details, see [Signature verification](#add-signature-verification). |

### Request Body [#request-body]

The request body of notification callbacks contains the following fields:

| Field name  | Type        | Description                                                                                                                                             |
| :---------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`noticeId\`  | String      | The notification ID, identifying the notification callback when the event occurs.                                                                       |
| \`productId\` | Number      | The product ID:- \`1\`: Realtime Communication (RTC) service
- \`3\`: Cloud Recording
- \`4\`: Media Pull
- \`5\`: Media Push                                   |
| \`eventType\` | Number      | The type of event being notified. For details, see [event types](#event-types).                                                                         |
| \`notifyMs\`  | Number      | The Unix timestamp (ms) when Notifications sends a callback to your server. This value is updated when Notifications resends the notification callback. |
| \`payload\`   | JSON Object | The content of the event being notified. The payload varies with event type.                                                                            |

#### Example [#example]

\`\`\`json
{
   "noticeId":"2000001428:4330:107",
   "productId":1,
   "eventType":101,
   "notifyMs":1611566412672,
   "payload":{
      ...
   }
}
\`\`\`

### Event types [#event-types]

You can subscribe to the following Cloud Recording events from Agora Console:

| eventType                                  | Event name                            | serviceType                   | Event description                                                                                                             |
| :----------------------------------------- | :------------------------------------ | :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [1](#cloud_recording_error)                | \`cloud_recording_error\`               | 0 (cloud recording service)   | An error occurs during the recording.                                                                                         |
| [2](#cloud_recording_warning)              | \`cloud_recording_warning\`             | 0 (cloud recording service)   | A warning occurs during the recording.                                                                                        |
| [3](#cloud_recording_status_update)        | \`cloud_recording_status_update\`       | 0 (cloud recording service)   | The status of the Agora Cloud Recording service changes.                                                                      |
| [4](#cloud_recording_file_infos)           | \`cloud_recording_file_infos\`          | 0 (cloud recording service)   | The M3U8 playlist file is generated.                                                                                          |
| [11](#session_exit)                        | \`session_exit\`                        | 0 (cloud recording service)   | The cloud recording service has ended its tasks and exited.                                                                   |
| [12](#session_failover)                    | \`session_failover\`                    | 0 (cloud recording service)   | The cloud recording service has enabled the [high availability mechanism](/en/realtime-media/cloud-recording).                |
| [30](#uploader_started)                    | \`uploader_started\`                    | 2 (uploader module)           | The upload service starts.                                                                                                    |
| [31](#uploaded)                            | \`uploaded\`                            | 2 (uploader module)           | All the recorded files are uploaded to the specified third-party cloud storage.                                               |
| [32](#backuped)                            | \`backuped\`                            | 2 (uploader module)           | All the recorded files are uploaded, but at least one file is uploaded to Agora Cloud Backup.                                 |
| [33](#uploading_progress)                  | \`uploading_progress\`                  | 2 (uploader module)           | The progress of uploading the recorded files to the cloud storage.                                                            |
| [40](#recorder_started)                    | \`recorder_started\`                    | 1 (recorder module)           | The recording starts.                                                                                                         |
| [41](#recorder_leave)                      | \`recorder_leave\`                      | 1 (recorder module)           | The recording exits.                                                                                                          |
| [42](#recorder_slice_start)                | \`recorder_slice_start\`                | 1 (recorder module)           | The recording service syncs the information of the recorded files.                                                            |
| [43](#recorder_audio_stream_state_changed) | \`recorder_audio_stream_state_changed\` | 1 (recorder module)           | The state of the audio stream changes.                                                                                        |
| [44](#recorder_video_stream_state_changed) | \`recorder_video_stream_state_changed\` | 1 (recorder module)           | The state of the video stream changes.                                                                                        |
| [45](#recorder_snapshot_file)              | \`recorder_snapshot_file\`              | 1 (recorder module)           | The screenshot is captured successfully.                                                                                      |
| [60](#vod_started)                         | \`vod_started\`                         | 4 (extension services)        | The uploader for ApsaraVideo for VoD has started and successfully acquired the upload credential.                             |
| [61](#vod_triggered)                       | \`vod_triggered\`                       | 4 (extension services)        | All recorded files have been uploaded to ApsaraVideo for VoD.                                                                 |
| [70](#web_recorder_started)                | \`web_recorder_started\`                | 6 (web page recording module) | Web page recording starts.                                                                                                    |
| [71](#web_recorder_stopped)                | \`web_recorder_stopped\`                | 6 (web page recording module) | Web page recording stops.                                                                                                     |
| [72](#web_recorder_capability_limit)       | \`web_recorder_capability_limit\`       | 6 (web page recording module) | The web page to record uses a feature that is unsupported by web page recording. The recording service will stop immediately. |
| [73](#web_recorder_reload)                 | \`web_recorder_reload\`                 | 6 (web page recording module) | The web page reloads.                                                                                                         |
| [80](#transcoder_started)                  | \`transcoder_started\`                  | 0 (cloud recording service)   | The transcoding starts.                                                                                                       |
| [81](#transcoder_completed)                | \`transcoder_completed\`                | 0 (cloud recording service)   | The transcoding completes.                                                                                                    |
| [90](#download_failed)                     | \`download_failed\`                     | 8（download module）            | The recording service fails to download the recorded files.                                                                   |
| [100](#rtmp_publish_status)                | \`rtmp_publish_status\`                 | 6（web page recording module）  | The CDN streaming status of the web page recording changes.                                                                   |
| [1001](#postpone_transcode_final_result)   | \`postpone_transcode_final_result\`     | 0 (cloud recording service)   | The result of the transcoding.                                                                                                |

#### Fields in payload [#fields-in-payload]

\`payload\` is a JSON object, which is the main body of the notification. \`payload\` in each type of event notification includes the following fields:

* \`cname\`: String. The name of the channel to be recorded.
* \`uid\`: String. The user ID of the recording client.
* \`sid\`: String. The recording ID. The unique identifier of each recording.
* \`sequence\`: Number. The serial number of the notifications, starting from 0. You can use this parameter to identify notifications that are random, lost, or resent.
* \`sendts\`: Number. The time (UTC) when the event happens. Unix timestamp in ms.
* \`serviceType\`: Number. The type of Agora service.
  * \`0\`: The cloud recording service.
  * \`1\`: The recorder module.
  * \`2\`: The uploader module.
  * \`4\`: The extension services.
  * \`6\`: The web page recording module.
  * \`8\`: The download module.
* \`details\`: JSON. The details of the callback events are described in the following section. Notifications may add new fields to \`details\` in the future. To ensure backward compatibility, the service will not change the data format of existing fields.

The relevant fields of each Agora Cloud Recording callback event are listed below:

#### cloud\\_recording\\_error [#cloud_recording_error]

\`eventType\` 1 indicates that an error occurs during the recording. \`details\` includes the following fields:

* \`msgName\`: String. The name of the message, \`"cloud_recording_error"\`.
* \`module\`: Number. The module in which the error occurs.
  * \`0\`: The recorder
  * \`1\`: The uploader
  * \`2\`: The Agora Cloud Recording Service
  * \`6\`：The Agora Web Page Recording Service
* \`errorLevel\`: Number. The error level.
  * \`1\`: Debug
  * \`2\`: Minor
  * \`3\`: Medium
  * \`4\`: Major
  * \`5\`: Fatal. A fatal error may cause the recording to exit. If you receive a message of this level, call \`query\` to check the current status and process the error according to the error notifications.
* \`errorCode\`: Number. The error code.
  * If the error occurs in the recorder module (\`0\`), see [common errors](/en/realtime-media/cloud-recording/reference/common-errors).
  * If the error occurs in the uploader (\`1\`), see [upload error code](#error-codes-related-to-uploading).
  * If the error occurs in the Agora Cloud Recording Service (\`2\`), see [cloud recording service error code](#error-codes-for-the-agora-cloud-recording-service).
  * If the error occurs in the other modules, see [common errors](/en/realtime-media/cloud-recording/reference/common-errors).
    If you do not find any error code in the above-mentioned pages, contact our technical support.
* \`stat\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.
* \`errorMsg\`: String. The detailed description of the error.

#### cloud\\_recording\\_warning [#cloud_recording_warning]

\`eventType\` 2 indicates that a warning occurs during the recording. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`cloud_recording_warning\`.
* \`module\`: Number. The name of the module where the warning occurs.
  * \`0\`: The recorder.
  * \`1\`: The uploader.
* \`warnCode\`: Number. The warning code.
* If the warning occurs in the recorder, \`warnCode\` indicates the warning code.
* If the warning occurs in the uploader, see [upload warning code](#warning-codes-related-to-uploading).

#### cloud\\_recording\\_status\\_update [#cloud_recording_status_update]

\`eventType\` 3 indicates that the method call fails because it does not match the status of the cloud recording service. For example, the method call of \`start\` fails if the service has already started. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`cloud_recording_status_update\`.
* \`status\`: Number. The status of the cloud recording service. See [Status codes for the Agora Cloud Recording service](#status-codes-for-the-agora-cloud-recording-service) for details.
* \`recordingMode\`: Number. The recording mode:
  * \`0\`: Individual recording mode
  * \`1\`: Composite recording mode
* \`fileList\`: String. The name of the M3U8 index file generated by the service.

#### cloud\\_recording\\_file\\_infos [#cloud_recording_file_infos]

\`eventType\` 4 indicates that an M3U8 playlist file is generated and uploaded. During a recording, the recording service repeatedly uploads and overwrites the M3U8 file, but this event is triggered the first time the M3U8 file is generated and uploaded.

\`details\` includes the following fields:

* \`msgName\`: String. The message name, \`cloud_recording_file_infos\`.
* \`fileList\`: String. The name of the M3U8 file.

#### session\\_exit [#session_exit]

\`eventType\` 11 indicates that the cloud recording service has ended its tasks and exited. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`session_exit\`.
* \`exitStatus\`: Number. The exit status.
  * \`0\`: A normal exit, indicating that the recording service exits after the recording ends and the recorded files are uploaded.
  * \`1\`: An abnormal exit. An abnormal exist occurs when, for example, a parameter is incorrectly set.

#### session\\_failover [#session_failover]

\`eventType\` 12 indicates that the cloud recording service has enabled the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`session_failover\`.
* \`newUid\`: Number. A randomly-generated recording user ID. After the high availability mechanism is enabled and the service is switched to a new server, the service rejoins the channel with a randomly-generated recording user ID, abandoning the old one.

#### uploader\\_started [#uploader_started]

\`eventType\` 30 indicates that the upload service starts, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`uploader_started\`.
* \`status\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.

#### uploaded [#uploaded]

\`eventType\` 31 indicates that all the recorded files are uploaded to the specified third-party cloud storage, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`uploaded\`.
* \`status\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.
* \`fileList\`: JSONArray. An array that contains detailed information of each recorded file.
  * \`fileName\`: String. The name of the M3U8 file or MP4 file.
  * \`trackType\`: String. The type of the recorded file.
    * \`"audio"\`: Audio file.
    * \`"video"\`: Video file (no audio).
    * \`"audio_and_video"\`: Video file (with audio).
  * \`uid\`: String. The user ID. The user whose audio or video is recorded in the file. In composite recording mode, \`uid\` is \`"0"\`.
  * \`mixedAllUser\`: Boolean. Whether the audio and video of all users are combined into a single file.
    * \`true\`: All users are recorded in a single file.
    * \`false\`: Each user is recorded separately.
  * \`isPlayable\`: Boolean. Whether the file can be played online.
    * \`true\`: The file can be played online.
    * \`false\`: The file cannot be played online.
  * \`sliceStartTime\`: Number. The Unix time (ms) when the recording starts.

#### Examples [#examples]

* Individual recording:

  \`\`\`json
  {
    "msgName": "uploaded",
    "fileList": [
      {
        "fileName": "xxx.m3u8",
        "trackType": "audio",
        "uid": "57297",
        "mixedAllUser": false,
        "isPlayable": true,
        "sliceStartTime": 1619172871089
      },
      {
        "fileName": "xxx.m3u8",
        "trackType": "audio",
        "uid": "10230",
        "mixedAllUser": false,
        "isPlayable": true,
        "sliceStartTime": 1619172871099
      }
    ],
    "status": 0
  }
  \`\`\`

* Composite recording with no MP4 files generated:

  \`\`\`json
  {
    "msgName": "uploaded",
    "fileList": [
      {
        "fileName": xxx.m3u8",
        "trackType": "audio_and_video",
        "uid": "0",
        "mixedAllUser": true,
        "isPlayable": true,
        "sliceStartTime": 1619170461821
      }
    ],
    "status": 0
  }
  \`\`\`

* Composite recording with MP4 files generated:

  \`\`\`json
  {
    "msgName": "uploaded",
    "fileList": [
      {
        "fileName": "xxx.mp4",
        "trackType": "audio_and_video",
        "uid": "0",
        "mixedAllUser": true,
        "isPlayable": true,
        "sliceStartTime": 1619172632080
      },
      {
        "fileName": "xxx.m3u8",
        "trackType": "audio_and_video",
        "uid": "0",
        "mixedAllUser": true,
        "isPlayable": true,
        "sliceStartTime": 1619172632080
      }
    ],
    "status": 0
  }
  \`\`\`

* Web page recording with MP4 files generated:

  \`\`\`json
  {
    "msgName": "uploaded",
    "status": 0
  }
  \`\`\`

#### backuped [#backuped]

\`eventType\` 32 indicates that all the recorded files are uploaded, but at least one of them is uploaded to Agora Cloud Backup. Agora Cloud Backup automatically uploads the files to the specified third-party cloud storage. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`backuped\`.
* \`status\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.
* \`fileList\`: JSONArray. An array that contains detailed information of each recorded file.
  * \`fileName\`: String. The name of the M3U8 file or MP4 file.
  * \`trackType\`: String. The type of the recorded file.
    * \`"audio"\`: Audio file.
    * \`"video"\`: Video file (no audio).
    * \`"audio_and_video"\`: Video file with audio.
  * \`uid\`: String. The user ID. The user whose audio or video is recorded in the file. In composite recording mode, \`uid\` is \`"0"\`.
  * \`mixedAllUser\`: Boolean. Whether the audio and video of all users are combined into a single file.
    * \`true\`: All users are recorded in a single file.
    * \`false\`: Each user is recorded separately.
  * \`isPlayable\`: Boolean. Whether the file can be played online.
    * \`true\`: The file can be played online.
    * \`false\`: The file cannot be played online.
  * \`sliceStartTime\`: Number. The Unix time (ms) when the recording starts.

#### Examples [#examples-1]

* Individual recording:

  \`\`\`json
  {
    "msgName": "backuped",
    "fileList": [
      {
        "fileName": "xxx.m3u8",
        "trackType": "audio",
        "uid": "57297",
        "mixedAllUser": false,
        "isPlayable": true,
        "sliceStartTime": 1619172871089
      },
      {
        "fileName": "xxx.m3u8",
        "trackType": "audio",
        "uid": "10230",
        "mixedAllUser": false,
        "isPlayable": true,
        "sliceStartTime": 1619172871099
      }
    ],
    "status": 0
  }
  \`\`\`

* Composite recording with no MP4 files generated:

  \`\`\`json
  {
    "msgName": "backuped",
    "fileList": [
      {
        "fileName": "xxx.m3u8",
        "trackType": "audio_and_video",
        "uid": "0",
        "mixedAllUser": true,
        "isPlayable": true,
        "sliceStartTime": 1619170461821
      }
    ],
    "status": 0
  }
  \`\`\`

* Composite recording with MP4 files generated:

  \`\`\`json
  {
    "msgName": "backuped",
    "fileList": [
      {
        "fileName": "xxx.mp4",
        "trackType": "audio_and_video",
        "uid": "0",
        "mixedAllUser": true,
        "isPlayable": true,
        "sliceStartTime": 1619172632080
      },
      {
        "fileName": "xxx.m3u8",
        "trackType": "audio_and_video",
        "uid": "0",
        "mixedAllUser": true,
        "isPlayable": true,
        "sliceStartTime": 1619172632080
      }
    ],
    "status": 0
  }
  \`\`\`

* Web page recording with MP4 files generated:

  \`\`\`json
  {
    "msgName": "backuped",
    "status": 0
  }
  \`\`\`

#### uploading\\_progress [#uploading_progress]

\`eventType\` 33 indicates the current upload progress. The Agora server notifies you of the upload progress once every minute after the recording starts. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`uploading_progress\`.
* \`progress\`: Number. An ever-increasing number between 0 and 10,000, equal to the ratio of the number of the uploaded files to the number of the recorded files multiplied by 10,000. After the recording service exits and when the number reaches 10,000, the upload completes.

#### recorder\\_started [#recorder_started]

\`eventType\` 40 indicates that the recording service starts, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`recorder_started\`.
* \`status\`: Number. The event status. 0 indicates normal status; other values indicate abnormal status.

#### recorder\\_leave [#recorder_leave]

\`eventType\` 41 indicates that the recorder leaves the channel, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`recorder_leave\`.
* \`leaveCode\`: Number. The leave code. You can perform a bitwise AND operation on the code and each enum value, and those with non-zero results are the reason for the exit. For example, if you perform a bit-by-bit AND operation on code 6 (binary 110) and each enum value, only LEAVE\\_CODE\\_SIG (binary 10) and LEAVE\\_CODE\\_NO\\_USERS (binary 100) get a non-zero result. The reasons for exiting, in this case, include a timeout and a signal triggering the exit.

| Enumerator                | Description                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| \`LEAVE_CODE_INIT\`         | 0: The initialization fails.                                                                                               |
| \`LEAVE_CODE_SIG\`          | 2 (binary 10): The AgoraCoreService process receives the SIGINT signal.                                                    |
| \`LEAVE_CODE_NO_USERS\`     | 4 (binary 100): The recording server automatically leaves the channel and stops recording because the channel has no user. |
| \`LEAVE_CODE_TIMER_CATCH\`  | 8 (binary 1000): Ignore it.                                                                                                |
| \`LEAVE_CODE_CLIENT_LEAVE\` | 16 (binary 10000): The recording server calls the \`leaveChannel\` method to leave the channel.                              |

#### recorder\\_slice\\_start [#recorder_slice_start]

\`eventType\` 42 indicates that the recording service syncs the information of the recorded files, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`recorder_slice_start\`.
* \`startUtcMs\`：Number. The time (ms) in UTC when the recording starts (the starting time of the first slice file).
* \`discontinueUtcMs\`：Number. In most cases, this field is the same as \`startUtcMs\`. When the recording is interrupted, the Agora Cloud Recording service automatically resumes the recording and triggers this event. In this case, the value of this field is the time (ms) in UTC when the last slice file stops.
* \`mixedAllUser\`: Boolean. Whether the audio and video of all users are mixed into a single file.
  * \`true\`: All users are recorded in a single file.
  * \`false\`: Each user is recorded separately.
* \`streamUid\`: String. User ID. The user whose audio or video is recorded in the file. In composite mode, \`streamUid\` is \`0\`.
* \`trackType\`: String. Type of the recorded file.
  * \`"audio"\`: Audio file.
  * \`"video"\`: Video file (no audio).
  * \`"audio_and_video"\`: Video file with audio.

For example, you start a recording session and get this event notification in which \`startUtcMs\` is the starting time of slice file 1. Then, the recording session continues and records slice file 2 to slice file N, during which the recording service does not send this notification again. If an error occurs when recording slice file N + 1, you lose this file and the recording session stops. Agora Cloud Recording automatically resumes the recording and triggers this event again. In the event notification, \`startUtcMs\` is the time when slice file N + 2 starts, and \`discontinueUtcMs\` is the time when slice file N stops.

#### recorder\\_audio\\_stream\\_state\\_changed [#recorder_audio_stream_state_changed]

eventType 43 indicates that the state of the audio stream has changed, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`recorder_audio_stream_state_changed\`.
* \`streamUid\`: String. The ID of the user whose audio is being recorded. In composite recording mode, \`streamUid\` can be \`0\`, which represents the combined stream of all or the specified user IDs.
* \`state\` : Number. Whether Agora Cloud Recording is receiving the audio stream.
  * \`0\`: Agora Cloud Recording is receiving the audio stream.
  * \`1\`: Agora Cloud Recording is not receiving the audio stream.
* \`UtcMs\`: Number. The UTC time (ms) when the state of the audio stream changes.

#### recorder\\_video\\_stream\\_state\\_changed [#recorder_video_stream_state_changed]

\`eventType\` 44 indicates that the state of the video stream has changed, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`recorder_video_stream_state_changed\`.
* \`streamUid\`: String. The ID of the user whose video is being recorded. In composite recording mode, \`streamUid\` can be \`0\`, which represents the combined stream of all or the specified user IDs.
* \`state\`: Number. Whether Agora Cloud Recording is receiving the video stream.
  * \`0\`: Agora Cloud Recording is receiving the video stream.
  * \`1\`: Agora Cloud Recording is not receiving the video stream.
* \`UtcMs\`: Number. The UTC time (ms) when the state of the video stream changes.

#### recorder\\_snapshot\\_file [#recorder_snapshot_file]

\`eventType\` 45 indicates that the screenshot is captured successfully and uploaded to the third-party cloud storage. The \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"recorder_snapshot_file"\`.
* \`fileName\`: String. The file name of the JPG file generated by the screenshot. The format is: \`"fileName": "<fileNamePrefix>/<file name>"\`. The \`fileNamePrefix\` refers to the path of the screenshot files in the third-party cloud storage.

#### vod\\_started [#vod_started]

\`eventType\` 60 indicates that the uploader for ApsaraVideo for VoD has started and successfully acquired the upload credential. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"vod_started"\`.
* \`aliVodInfo\`: JSON. The information of the video to upload.
  * \`videoId\`: String. The video ID.

#### vod\\_triggered [#vod_triggered]

\`eventType\` 61 indicates that all recorded files have been uploaded to ApsaraVideo for VoD. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"vod_triggered"\`.

#### web\\_recorder\\_started [#web_recorder_started]

\`eventType\` 70 indicates that web page recording starts. \`details\` includes the following field:

* \`msgName\`: String. The message name, \`"web_recorder_started"\`.
* \`recorderStartTime\`: Number. The time (UTC) when the recording starts. Unix timestamp in milliseconds.

#### web\\_recorder\\_stopped [#web_recorder_stopped]

\`eventType\` 71 indicates that web page recording stops. \`details\` includes the following field:

* \`msgName\`: String. The message name, \`"web_recorder_stopped"\`.
* \`code\`: Number. The error code. If the error code is not \`0\`, it means that the web page recording stopped abnormally.
* \`message\`: String. The error message, which indicates the reason why the recording stopped normally or abnormally.
* \`details\`: String. A specific description of the error message, which provides a more complete description of the reason why the recording stopped normally or abnormally. You can take corresponding measures based on the information.
* \`fileList\`: JSONArray. An array that contains detailed information of each recorded file.
  * \`fileName\`: String. The name of the M3U8 file or MP4 file.
  * \`sliceStartTime\`: Number. The Unix timestamp (ms) when the recording starts.

| Error Code | Message               | Description                                                                                                                                                                                                 |
| :--------- | :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`0\`        | \`ok\`                  | Normal, the user stops the recording.                                                                                                                                                                       |
| \`1\`        | \`max_recording_hour\`  | The recording time reaches the set maximum recording length (\`maxRecordingHour\`), which causes the recording to stop.                                                                                       |
| \`2\`        | \`capability_limit\`    | The web page to be recorded uses an unsupported function, causing the web page recording to stop.                                                                                                           |
| \`3\`        | \`start_engine_failed\` | The recording engine failed to start, causing the web page recording to stop.                                                                                                                               |
| \`4\`        | \`page_load_timeout\`   | When you use the [web page load timeout detection](/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout), the web page load timeout causes the web page recording to stop. |
| \`5\`        | \`access_url_failed\`   | An error occurred when opening the web page to be recorded, which causes the web page recording to stop.                                                                                                    |
| \`6\`        | \`recorder_error \`     | The web page recording has an error and cannot continue, causing the web page recording to stop.                                                                                                            |

#### Example [#example-1]

\`\`\`json
{
  "msgName": "web_recorder_stopped",
  "code": 1,
  "message": "max_recording_hour",
  "details": "max recording hour is 4",
  "fileList": [
    {
      "filename": "test_p1627613634_www.m3u8",
      "sliceStartTime": 1627613641393
    },
    {
      "filename": "test_p1627613634_www_0.mp4",
      "sliceStartTime": 1627613641393
    }
  ]
}
\`\`\`

#### web\\_recorder\\_capability\\_limit [#web_recorder_capability_limit]

\`eventType\` 72 indicates that the web page to record uses a feature that is unsupported by web page recording, and the recording service will stop immediately. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"web_recorder_capability_limit"\`.
* \`limitType\`: String. The type of the feature that causes the failure.
  * \`"resolution"\`: The web page to record contains a video source with a resolution that exceeds 1280 × 720.
  * \`"WebGL"\`: The web page to record uses WebGL.
  * \`"bandwidth"\`：The upstream bandwidth exceeds 10 M, or the downstream bandwidth exceeds 1 G.

#### web\\_recorder\\_reload [#web_recorder_reload]

\`eventType\` 73 indicates a web page reload. \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"web_recorder_reload"\`.
* \`reason\`: String. The reason for the page reload:
  * \`"audio_silence"\`: Audio loss issue.
  * \`"page_load_timeout"\`: Web page load timeout. The callback returns this field only if the web page load detection function is enabled and there is a web page load timeout. See [Web page load detection](/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout).

#### transcoder\\_started [#transcoder_started]

\`eventType\` 80 indicates that the transcoding starts, and \`details\` includes the following field:

\`msgName\`: String. The message name, \`"transcoder_started"\`.

#### transcoder\\_completed [#transcoder_completed]

\`eventType\` 81 indicates that the transcoding completes, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"transcoder_completed"\`.
* \`result\`: String. The result of the transcoding.
  * \`"all_success"\`: Successfully transcodes all files.
  * \`"partial_success"\`: Fails to transcode some files.
  * \`"fail"\`: The transcoding fails.
* \`uids\`: JSONArray. The array contains the transcoding result and the name of the MP4 file of a specific user ID.
  * \`uid\`: String. The corresponding user ID of the MP4 file.
  * \`result\`: String. The result of transcoding.
    * \`"success"\`: Transcoding succeeds.
    * \`"fail"\`: Transcoding fails.
  * \`fileList\`: JSONArray. The array contains information about the MP4 file.
    * \`fileName\`: String. The name of the MP4 file.

#### download\\_failed [#download_failed]

\`eventType\` 90 indicates that the recording service fails to download the recorded files. This callback is triggered only once in the entire recording process, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"download_failed"\`.
* \`vendor\`: Number. The name of the third-party cloud storage service, which is the same as \`vendor\` in your \`start\` request.
* \`region\`: Number. The region of the third-party cloud storage, which is the same as region set in your \`start\` request.
* \`bucket\`: String. The bucket name of the third-party cloud storage, which is the same as \`bucket\` set in your \`start\` request.
* \`fileName\`: String. The list of M3U8 or TS/WebM files that fail to be downloaded. The file names are separated by \`";"\`.

#### rtmp\\_publish\\_status [#rtmp_publish_status]

\`eventType\` 100 indicates the CDN streaming status of the web page recording. \`details\` includes the following fields:

* \`msgName\`：String. The message name, \`"rtmp_publish_status"\`.
* \`rtmpUrl\`: String. The CDN address you want to the push the stream to.
* \`status\`: Number. The CDN streaming status of the web page recording, including the following options:
  * \`"connecting"\`: Connecting to the CDN server.
  * \`"publishing"\`: Pushing the stream to the CDN server.
  * \`"onhold"\`: Pause streaming.
  * \`"disconnected"\`: Failed to connect to the CDN server. Agora recommends that you change the CDN address.

#### postpone\\_transcode\\_final\\_result [#postpone_transcode_final_result]

\`eventType\` 1001 indicates the final transcoding result, and \`details\` includes the following fields:

* \`msgName\`: String. The message name, \`"postpone_transcode_final_result"\`.
* \`result\`: String. The final result of the transcoding.\\\\
  * \`"total_success"\`: Successfully transcodes all files.
  * \`"partial_success"\`: Fails to transcode some files.
  * \`"failed"\`: The transcoding fails.
* \`fileList\`: JSONArray. The array contains information about the generated MP4 files.
  * \`fileName\`: String. The name of an individual MP4 file.

#### Error codes related to uploading [#error-codes-related-to-uploading]

| Error code | Description                                                            |
| :--------- | :--------------------------------------------------------------------- |
| 32         | An error occurs in the configuration of the third-party cloud storage. |
| 47         | The recording file upload fails.                                       |
| 51         | An error occurs when the uploader processes the recorded files.        |

#### Warning codes related to uploading [#warning-codes-related-to-uploading]

| Warning code | Description                                                                     |
| :----------- | :------------------------------------------------------------------------------ |
| 31           | The recording service re-uploads the slice file to the specified cloud storage. |
| 32           | The recording service re-uploads the slice file to Agora Cloud Backup.          |

#### Error codes for the Agora Cloud Recording service [#error-codes-for-the-agora-cloud-recording-service]

| Error code | Description                                               |
| :--------- | :-------------------------------------------------------- |
| 50         | A timeout occurs in uploading the recorded files.         |
| 52         | A timeout occurs in starting the Cloud Recording Service. |

#### Status codes for the Agora Cloud Recording service [#status-codes-for-the-agora-cloud-recording-service]

| Status code | Description                                                                                                           |
| :---------- | :-------------------------------------------------------------------------------------------------------------------- |
| 0           | The recording has not started.                                                                                        |
| 1           | The initialization is complete.                                                                                       |
| 2           | The recorder is starting.                                                                                             |
| 3           | The uploader is ready.                                                                                                |
| 4           | The recorder is ready.                                                                                                |
| 5           | The first recorded file is uploaded. After uploading the first file, the status is \`5\` when the recording is running. |
| 6           | The recording stops.                                                                                                  |
| 7           | The Agora Cloud Recording service stops.                                                                              |
| 8           | The recording is ready to exit.                                                                                       |
| 20          | The recording exits abnormally.                                                                                       |

### IP address query API [#ip-address-query-api]

If your server that receives notification callbacks is behind a firewall, call the IP address query API to retrieve the IP addresses of Notifications and configure your firewall to trust all these IP addresses.

Agora occasionally adjusts the Notifications IP addresses. Best practice is to call this endpoint at least every 24 hours and automatically update the firewall configuration.

#### Prototype [#prototype]

* Method: \`GET\`
* Endpoint: \`https://api.agora.io/v2/ncs/ip\`

#### Request header [#request-header-1]

Authorization: You must generate a Base64-encoded credential with the Customer ID and Customer Secret provided by Agora, and then pass the credential to the Authorization field in the HTTP request header.

#### Request body [#request-body-1]

This API has no body parameters.

#### Response body [#response-body]

When the request succeeds, the response body looks like the following:

\`\`\`json
{
    "data": {
        "service": {
            "hosts": [
                {
                    "primaryIP": "xxx.xxx.xxx.xxx"
                },
                {
                    "primaryIP": "xxx.xxx.xxx.xxx"
                }
            ]
        }
    }
}
\`\`\`

Each primary IP field shows an IP address of Notifications server. When you receive a response, you need to note the primary IP fields and add all these IP addresses to your firewall's allowed IP list.

### Considerations [#considerations]

* Notifications does not guarantee that notification callbacks arrive at your server in the same order as events occur. Implement a strategy to handle messages arriving out of order.
* For improved reliability of Notifications, your server may receive more than one notification callback for a single event. Your server must be able to handle repeated messages.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Cloud Recording events. With Notifications, you can subscribe to Cloud Recording events and receive notifications in real time."
  }, {
    heading: "understand-the-tech",
    content: "Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns `200 Ok` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users."
  }, {
    heading: "understand-the-tech",
    content: "The following figure illustrates the workflow when Notifications is enabled for the specific Cloud Recording events you subscribe to:"
  }, {
    heading: "understand-the-tech",
    content: "A user commits an action that creates an event."
  }, {
    heading: "understand-the-tech",
    content: "Notifications sends an HTTPS POST request to your webhook."
  }, {
    heading: "understand-the-tech",
    content: "Your server validates the request signature, then sends a response to Notifications within 10 seconds. The response body must be in JSON."
  }, {
    heading: "understand-the-tech",
    content: "If Notifications receives `200 OK` within 10 seconds of sending the initial notification, the callback is considered successful. If these conditions are not met, Notifications immediately resends the notification. The interval between notification attempts gradually increases. Notifications stops sending notifications after three retries."
  }, {
    heading: "prerequisites",
    content: "To set up and use Notifications, you must have:"
  }, {
    heading: "prerequisites",
    content: "A valid Agora account."
  }, {
    heading: "prerequisites",
    content: "An active Agora project."
  }, {
    heading: "prerequisites",
    content: "A computer with Internet access."
  }, {
    heading: "prerequisites",
    content: "If your network access is restricted by a firewall, call the IP address query API to retrieve the Notifications IP addresses , then configure the firewall to allow these IP addresses."
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "In order to handle notifications for the events you subscribe to, you need to:"
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "Create your webhook"
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "Set up Webhook notifications"
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "Verify Notifications signatures"
  }, {
    heading: "create-your-webhook",
    content: "Once Notifications is enabled, Agora SDRTN® sends notification callbacks as `HTTPS POST` requests to your webhook when events that you are subscribed to occur. The data format of the requests is JSON, the character encoding is `UTF-8`, and the signature algorithm is `HMAC/SHA1` or `HMAC/SHA256`."
  }, {
    heading: "create-your-webhook",
    content: "For Notifications, a webhook is an endpoint on an `HTTPS` server that handles these requests. In a production environment you write this in your web infrastructure, for development purposes best practice is to create a simple local server and use a service such as ngrok to supply a public URL that you register with Agora SDRTN® when you enable Notifications."
  }, {
    heading: "create-your-webhook",
    content: "To do this, take the following steps:"
  }, {
    heading: "create-your-webhook",
    content: "**Set up Go**"
  }, {
    heading: "create-your-webhook",
    content: "Ensure you have Go installed on your system. If not, download and install it from the official Go website."
  }, {
    heading: "create-your-webhook",
    content: "**Create a Go project for your server**"
  }, {
    heading: "create-your-webhook",
    content: "Create a new directory for your project and navigate into it:"
  }, {
    heading: "create-your-webhook",
    content: "In the project directory, create a new file `main.go`. Open the file in your preferred text editor and add the following code:"
  }, {
    heading: "create-your-webhook",
    content: "**Run your Go server**"
  }, {
    heading: "create-your-webhook",
    content: "Run the server using the following command:"
  }, {
    heading: "create-your-webhook",
    content: "**Create a public URL for your server**"
  }, {
    heading: "create-your-webhook",
    content: "In this example you use `ngrok` to create a public URL for your server."
  }, {
    heading: "create-your-webhook",
    content: "Download and install ngrok. If you have `Chocolatey`, use the following command:"
  }, {
    heading: "create-your-webhook",
    content: "Add an `authtoken` to ngrok:"
  }, {
    heading: "create-your-webhook",
    content: "To obtain an `authToken`, sign up with ngrok."
  }, {
    heading: "create-your-webhook",
    content: "Start a tunnel to your local server using the following command:"
  }, {
    heading: "create-your-webhook",
    content: "You see a **Forwarding** URL and a **Web Interface** URL in the console. Open the web interface URL in your browser."
  }, {
    heading: "create-your-webhook",
    content: "**Test the server**"
  }, {
    heading: "create-your-webhook",
    content: "Open a web browser and navigate to the public URL provided by `ngrok` to see the root handler response."
  }, {
    heading: "create-your-webhook",
    content: "Use curl, Postman, or another tool to send a `POST` request to `https://<ngrok_url>/ncsNotify` with the required `JSON` payload."
  }, {
    heading: "create-your-webhook",
    content: "Example using `curl`:"
  }, {
    heading: "create-your-webhook",
    content: "Make sure you replace `ngrok_url` with the forwarding url."
  }, {
    heading: "create-your-webhook",
    content: "Once the HTTP request is successful, you see the following `JSON` payload in your browser:"
  }, {
    heading: "set-up-webhook-notifications",
    content: "In Agora Console, select **Webhooks** from the sidebar."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Select **New Webhook**."
  }, {
    heading: "set-up-webhook-notifications",
    content: "In the **Product** dropdown, select **Cloud Recording**."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Copy the **Signing Secret**. You use this secret to Add signature verification."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Fill in the following:"
  }, {
    heading: "set-up-webhook-notifications",
    content: "**Receiving region**: Select the region where your server that receives the notifications is located. Agora connects to the nearest Agora node server based on your selection."
  }, {
    heading: "set-up-webhook-notifications",
    content: "**Receiving URL**: The `HTTPS` public address of your server that receives the notifications, for example `https://1111-123-456-789-99.ap.ngrok.io/ncsNotify`. Only `HTTPS` endpoints are supported."
  }, {
    heading: "set-up-webhook-notifications",
    content: "**Subscribed events**: Select all the events that you want to subscribe to."
  }, {
    heading: "set-up-webhook-notifications",
    content: "If the selected events generate a high number of queries per second (QPS), ensure that your server has sufficient processing capacity."
  }, {
    heading: "set-up-webhook-notifications",
    content: "**IP whitelist**: If your server is behind a firewall, enable this option, then call the IP address query API to get the IP addresses of the Agora Notifications server and add them to the firewall's allowed IP list."
  }, {
    heading: "set-up-webhook-notifications",
    content: "To reduce the delay in notification delivery, best practice is to activate `HTTP` persistent connection (also called `HTTP` keep-alive) on your server with the following settings:"
  }, {
    heading: "set-up-webhook-notifications",
    content: "`MaxKeepAliveRequests`: 100 or more"
  }, {
    heading: "set-up-webhook-notifications",
    content: "`KeepAliveTimeout`: 10 seconds or more"
  }, {
    heading: "set-up-webhook-notifications",
    content: "Select **Run health check**. Agora performs a health test for your configuration as follows:"
  }, {
    heading: "set-up-webhook-notifications",
    content: "The health test generates test events that correspond to your subscribed events, and then sends test event callbacks to your server."
  }, {
    heading: "set-up-webhook-notifications",
    content: "After receiving each test event callback, your server must respond within 10 seconds with a status code of `200`. The response body must be in JSON format."
  }, {
    heading: "set-up-webhook-notifications",
    content: "When the health check succeeds, select **Save**."
  }, {
    heading: "set-up-webhook-notifications",
    content: "If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:"
  }, {
    heading: "set-up-webhook-notifications",
    content: "Request timeout (590): Your server does not return the status code `200` within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Domain name unreachable (591): The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Certificate error (592): The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Other response errors: Your server returns a response with a status code other than `200`. See the prompt in Agora Console for the specific status code and error messages."
  }, {
    heading: "add-signature-verification",
    content: "To communicate securely between Notifications and your webhook, Agora SDRTN®  uses signatures for identity verification as follows:"
  }, {
    heading: "add-signature-verification",
    content: "When you configure Notifications in Agora Console, Agora SDRTN®  generates a secret you use for verification."
  }, {
    heading: "add-signature-verification",
    content: "When sending a notification, Notifications generates two signature values from the secret using `HMAC/SHA1` and `HMAC/SHA256` algorithms. These signatures are added as `Agora-Signature` and `Agora-Signature-V2` to the `HTTPS` request header."
  }, {
    heading: "add-signature-verification",
    content: "When your server receives a callback, you can verify `Agora-Signature` or `Agora-Signature-V2`:"
  }, {
    heading: "add-signature-verification",
    content: "To verify `Agora-Signature`, use the secret, the raw request body, and the `crypto/sha1` algorithm."
  }, {
    heading: "add-signature-verification",
    content: "To verify `Agora-Signature-V2`, use the secret, the raw request body, and the `crypto/sha256` algorithm."
  }, {
    heading: "add-signature-verification",
    content: "The following sample code uses `crypto/sha1`."
  }, {
    heading: "add-signature-verification",
    content: "To add signature verification to your server, take the following steps:"
  }, {
    heading: "add-signature-verification",
    content: "In the `main.go` file, replace your imports with the following:"
  }, {
    heading: "add-signature-verification",
    content: "Add the following code after the list of imports:"
  }, {
    heading: "add-signature-verification",
    content: "In `main.go`, add the following code after you read the request body:"
  }, {
    heading: "add-signature-verification",
    content: "To test the server, follow the steps given in the Set up Webhook notifications section."
  }, {
    heading: "add-signature-verification",
    content: "When you receive an event from the console, and if the signature matches, the event details are displayed in your browser."
  }, {
    heading: "reference",
    content: "This section contains in depth information about Notifications."
  }, {
    heading: "request-header",
    content: "The header of notification callbacks contains the following fields:"
  }, {
    heading: "request-header",
    content: "Field name"
  }, {
    heading: "request-header",
    content: "Value"
  }, {
    heading: "request-header",
    content: "`Content-Type`"
  }, {
    heading: "request-header",
    content: "`application/json`"
  }, {
    heading: "request-header",
    content: "`Agora-Signature`"
  }, {
    heading: "request-header",
    content: "The signature generated by Agora using the **Secret** and the HMAC/SHA1 algorithm. You need to use the Secret and HMAC/SHA1 algorithm to verify the signature value. For details, see Signature verification."
  }, {
    heading: "request-header",
    content: "`Agora-Signature-V2`"
  }, {
    heading: "request-header",
    content: "The signature generated by Agora using the **Secret** and the HMAC/SHA256 algorithm. You need to use the Secret and the HMAC/SHA256 algorithm to verify the signature value. For details, see Signature verification."
  }, {
    heading: "request-body",
    content: "The request body of notification callbacks contains the following fields:"
  }, {
    heading: "request-body",
    content: "Field name"
  }, {
    heading: "request-body",
    content: "Type"
  }, {
    heading: "request-body",
    content: "Description"
  }, {
    heading: "request-body",
    content: "`noticeId`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The notification ID, identifying the notification callback when the event occurs."
  }, {
    heading: "request-body",
    content: "`productId`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The product ID:- `1`: Realtime Communication (RTC) service\n- `3`: Cloud Recording\n- `4`: Media Pull\n- `5`: Media Push"
  }, {
    heading: "request-body",
    content: "`eventType`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The type of event being notified. For details, see event types."
  }, {
    heading: "request-body",
    content: "`notifyMs`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The Unix timestamp (ms) when Notifications sends a callback to your server. This value is updated when Notifications resends the notification callback."
  }, {
    heading: "request-body",
    content: "`payload`"
  }, {
    heading: "request-body",
    content: "JSON Object"
  }, {
    heading: "request-body",
    content: "The content of the event being notified. The payload varies with event type."
  }, {
    heading: "event-types",
    content: "You can subscribe to the following Cloud Recording events from Agora Console:"
  }, {
    heading: "event-types",
    content: "eventType"
  }, {
    heading: "event-types",
    content: "Event name"
  }, {
    heading: "event-types",
    content: "serviceType"
  }, {
    heading: "event-types",
    content: "Event description"
  }, {
    heading: "event-types",
    content: "1"
  }, {
    heading: "event-types",
    content: "`cloud_recording_error`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "An error occurs during the recording."
  }, {
    heading: "event-types",
    content: "2"
  }, {
    heading: "event-types",
    content: "`cloud_recording_warning`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "A warning occurs during the recording."
  }, {
    heading: "event-types",
    content: "3"
  }, {
    heading: "event-types",
    content: "`cloud_recording_status_update`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "The status of the Agora Cloud Recording service changes."
  }, {
    heading: "event-types",
    content: "4"
  }, {
    heading: "event-types",
    content: "`cloud_recording_file_infos`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "The M3U8 playlist file is generated."
  }, {
    heading: "event-types",
    content: "11"
  }, {
    heading: "event-types",
    content: "`session_exit`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "The cloud recording service has ended its tasks and exited."
  }, {
    heading: "event-types",
    content: "12"
  }, {
    heading: "event-types",
    content: "`session_failover`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "The cloud recording service has enabled the high availability mechanism."
  }, {
    heading: "event-types",
    content: "30"
  }, {
    heading: "event-types",
    content: "`uploader_started`"
  }, {
    heading: "event-types",
    content: "2 (uploader module)"
  }, {
    heading: "event-types",
    content: "The upload service starts."
  }, {
    heading: "event-types",
    content: "31"
  }, {
    heading: "event-types",
    content: "`uploaded`"
  }, {
    heading: "event-types",
    content: "2 (uploader module)"
  }, {
    heading: "event-types",
    content: "All the recorded files are uploaded to the specified third-party cloud storage."
  }, {
    heading: "event-types",
    content: "32"
  }, {
    heading: "event-types",
    content: "`backuped`"
  }, {
    heading: "event-types",
    content: "2 (uploader module)"
  }, {
    heading: "event-types",
    content: "All the recorded files are uploaded, but at least one file is uploaded to Agora Cloud Backup."
  }, {
    heading: "event-types",
    content: "33"
  }, {
    heading: "event-types",
    content: "`uploading_progress`"
  }, {
    heading: "event-types",
    content: "2 (uploader module)"
  }, {
    heading: "event-types",
    content: "The progress of uploading the recorded files to the cloud storage."
  }, {
    heading: "event-types",
    content: "40"
  }, {
    heading: "event-types",
    content: "`recorder_started`"
  }, {
    heading: "event-types",
    content: "1 (recorder module)"
  }, {
    heading: "event-types",
    content: "The recording starts."
  }, {
    heading: "event-types",
    content: "41"
  }, {
    heading: "event-types",
    content: "`recorder_leave`"
  }, {
    heading: "event-types",
    content: "1 (recorder module)"
  }, {
    heading: "event-types",
    content: "The recording exits."
  }, {
    heading: "event-types",
    content: "42"
  }, {
    heading: "event-types",
    content: "`recorder_slice_start`"
  }, {
    heading: "event-types",
    content: "1 (recorder module)"
  }, {
    heading: "event-types",
    content: "The recording service syncs the information of the recorded files."
  }, {
    heading: "event-types",
    content: "43"
  }, {
    heading: "event-types",
    content: "`recorder_audio_stream_state_changed`"
  }, {
    heading: "event-types",
    content: "1 (recorder module)"
  }, {
    heading: "event-types",
    content: "The state of the audio stream changes."
  }, {
    heading: "event-types",
    content: "44"
  }, {
    heading: "event-types",
    content: "`recorder_video_stream_state_changed`"
  }, {
    heading: "event-types",
    content: "1 (recorder module)"
  }, {
    heading: "event-types",
    content: "The state of the video stream changes."
  }, {
    heading: "event-types",
    content: "45"
  }, {
    heading: "event-types",
    content: "`recorder_snapshot_file`"
  }, {
    heading: "event-types",
    content: "1 (recorder module)"
  }, {
    heading: "event-types",
    content: "The screenshot is captured successfully."
  }, {
    heading: "event-types",
    content: "60"
  }, {
    heading: "event-types",
    content: "`vod_started`"
  }, {
    heading: "event-types",
    content: "4 (extension services)"
  }, {
    heading: "event-types",
    content: "The uploader for ApsaraVideo for VoD has started and successfully acquired the upload credential."
  }, {
    heading: "event-types",
    content: "61"
  }, {
    heading: "event-types",
    content: "`vod_triggered`"
  }, {
    heading: "event-types",
    content: "4 (extension services)"
  }, {
    heading: "event-types",
    content: "All recorded files have been uploaded to ApsaraVideo for VoD."
  }, {
    heading: "event-types",
    content: "70"
  }, {
    heading: "event-types",
    content: "`web_recorder_started`"
  }, {
    heading: "event-types",
    content: "6 (web page recording module)"
  }, {
    heading: "event-types",
    content: "Web page recording starts."
  }, {
    heading: "event-types",
    content: "71"
  }, {
    heading: "event-types",
    content: "`web_recorder_stopped`"
  }, {
    heading: "event-types",
    content: "6 (web page recording module)"
  }, {
    heading: "event-types",
    content: "Web page recording stops."
  }, {
    heading: "event-types",
    content: "72"
  }, {
    heading: "event-types",
    content: "`web_recorder_capability_limit`"
  }, {
    heading: "event-types",
    content: "6 (web page recording module)"
  }, {
    heading: "event-types",
    content: "The web page to record uses a feature that is unsupported by web page recording. The recording service will stop immediately."
  }, {
    heading: "event-types",
    content: "73"
  }, {
    heading: "event-types",
    content: "`web_recorder_reload`"
  }, {
    heading: "event-types",
    content: "6 (web page recording module)"
  }, {
    heading: "event-types",
    content: "The web page reloads."
  }, {
    heading: "event-types",
    content: "80"
  }, {
    heading: "event-types",
    content: "`transcoder_started`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "The transcoding starts."
  }, {
    heading: "event-types",
    content: "81"
  }, {
    heading: "event-types",
    content: "`transcoder_completed`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "The transcoding completes."
  }, {
    heading: "event-types",
    content: "90"
  }, {
    heading: "event-types",
    content: "`download_failed`"
  }, {
    heading: "event-types",
    content: "8（download module）"
  }, {
    heading: "event-types",
    content: "The recording service fails to download the recorded files."
  }, {
    heading: "event-types",
    content: "100"
  }, {
    heading: "event-types",
    content: "`rtmp_publish_status`"
  }, {
    heading: "event-types",
    content: "6（web page recording module）"
  }, {
    heading: "event-types",
    content: "The CDN streaming status of the web page recording changes."
  }, {
    heading: "event-types",
    content: "1001"
  }, {
    heading: "event-types",
    content: "`postpone_transcode_final_result`"
  }, {
    heading: "event-types",
    content: "0 (cloud recording service)"
  }, {
    heading: "event-types",
    content: "The result of the transcoding."
  }, {
    heading: "fields-in-payload",
    content: "`payload` is a JSON object, which is the main body of the notification. `payload` in each type of event notification includes the following fields:"
  }, {
    heading: "fields-in-payload",
    content: "`cname`: String. The name of the channel to be recorded."
  }, {
    heading: "fields-in-payload",
    content: "`uid`: String. The user ID of the recording client."
  }, {
    heading: "fields-in-payload",
    content: "`sid`: String. The recording ID. The unique identifier of each recording."
  }, {
    heading: "fields-in-payload",
    content: "`sequence`: Number. The serial number of the notifications, starting from 0. You can use this parameter to identify notifications that are random, lost, or resent."
  }, {
    heading: "fields-in-payload",
    content: "`sendts`: Number. The time (UTC) when the event happens. Unix timestamp in ms."
  }, {
    heading: "fields-in-payload",
    content: "`serviceType`: Number. The type of Agora service."
  }, {
    heading: "fields-in-payload",
    content: "`0`: The cloud recording service."
  }, {
    heading: "fields-in-payload",
    content: "`1`: The recorder module."
  }, {
    heading: "fields-in-payload",
    content: "`2`: The uploader module."
  }, {
    heading: "fields-in-payload",
    content: "`4`: The extension services."
  }, {
    heading: "fields-in-payload",
    content: "`6`: The web page recording module."
  }, {
    heading: "fields-in-payload",
    content: "`8`: The download module."
  }, {
    heading: "fields-in-payload",
    content: "`details`: JSON. The details of the callback events are described in the following section. Notifications may add new fields to `details` in the future. To ensure backward compatibility, the service will not change the data format of existing fields."
  }, {
    heading: "fields-in-payload",
    content: "The relevant fields of each Agora Cloud Recording callback event are listed below:"
  }, {
    heading: "cloud_recording_error",
    content: "`eventType` 1 indicates that an error occurs during the recording. `details` includes the following fields:"
  }, {
    heading: "cloud_recording_error",
    content: '`msgName`: String. The name of the message, `"cloud_recording_error"`.'
  }, {
    heading: "cloud_recording_error",
    content: "`module`: Number. The module in which the error occurs."
  }, {
    heading: "cloud_recording_error",
    content: "`0`: The recorder"
  }, {
    heading: "cloud_recording_error",
    content: "`1`: The uploader"
  }, {
    heading: "cloud_recording_error",
    content: "`2`: The Agora Cloud Recording Service"
  }, {
    heading: "cloud_recording_error",
    content: "`6`：The Agora Web Page Recording Service"
  }, {
    heading: "cloud_recording_error",
    content: "`errorLevel`: Number. The error level."
  }, {
    heading: "cloud_recording_error",
    content: "`1`: Debug"
  }, {
    heading: "cloud_recording_error",
    content: "`2`: Minor"
  }, {
    heading: "cloud_recording_error",
    content: "`3`: Medium"
  }, {
    heading: "cloud_recording_error",
    content: "`4`: Major"
  }, {
    heading: "cloud_recording_error",
    content: "`5`: Fatal. A fatal error may cause the recording to exit. If you receive a message of this level, call `query` to check the current status and process the error according to the error notifications."
  }, {
    heading: "cloud_recording_error",
    content: "`errorCode`: Number. The error code."
  }, {
    heading: "cloud_recording_error",
    content: "If the error occurs in the recorder module (`0`), see common errors."
  }, {
    heading: "cloud_recording_error",
    content: "If the error occurs in the uploader (`1`), see upload error code."
  }, {
    heading: "cloud_recording_error",
    content: "If the error occurs in the Agora Cloud Recording Service (`2`), see cloud recording service error code."
  }, {
    heading: "cloud_recording_error",
    content: `If the error occurs in the other modules, see common errors.
If you do not find any error code in the above-mentioned pages, contact our technical support.`
  }, {
    heading: "cloud_recording_error",
    content: "`stat`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "cloud_recording_error",
    content: "`errorMsg`: String. The detailed description of the error."
  }, {
    heading: "cloud_recording_warning",
    content: "`eventType` 2 indicates that a warning occurs during the recording. `details` includes the following fields:"
  }, {
    heading: "cloud_recording_warning",
    content: "`msgName`: String. The message name, `cloud_recording_warning`."
  }, {
    heading: "cloud_recording_warning",
    content: "`module`: Number. The name of the module where the warning occurs."
  }, {
    heading: "cloud_recording_warning",
    content: "`0`: The recorder."
  }, {
    heading: "cloud_recording_warning",
    content: "`1`: The uploader."
  }, {
    heading: "cloud_recording_warning",
    content: "`warnCode`: Number. The warning code."
  }, {
    heading: "cloud_recording_warning",
    content: "If the warning occurs in the recorder, `warnCode` indicates the warning code."
  }, {
    heading: "cloud_recording_warning",
    content: "If the warning occurs in the uploader, see upload warning code."
  }, {
    heading: "cloud_recording_status_update",
    content: "`eventType` 3 indicates that the method call fails because it does not match the status of the cloud recording service. For example, the method call of `start` fails if the service has already started. `details` includes the following fields:"
  }, {
    heading: "cloud_recording_status_update",
    content: "`msgName`: String. The message name, `cloud_recording_status_update`."
  }, {
    heading: "cloud_recording_status_update",
    content: "`status`: Number. The status of the cloud recording service. See Status codes for the Agora Cloud Recording service for details."
  }, {
    heading: "cloud_recording_status_update",
    content: "`recordingMode`: Number. The recording mode:"
  }, {
    heading: "cloud_recording_status_update",
    content: "`0`: Individual recording mode"
  }, {
    heading: "cloud_recording_status_update",
    content: "`1`: Composite recording mode"
  }, {
    heading: "cloud_recording_status_update",
    content: "`fileList`: String. The name of the M3U8 index file generated by the service."
  }, {
    heading: "cloud_recording_file_infos",
    content: "`eventType` 4 indicates that an M3U8 playlist file is generated and uploaded. During a recording, the recording service repeatedly uploads and overwrites the M3U8 file, but this event is triggered the first time the M3U8 file is generated and uploaded."
  }, {
    heading: "cloud_recording_file_infos",
    content: "`details` includes the following fields:"
  }, {
    heading: "cloud_recording_file_infos",
    content: "`msgName`: String. The message name, `cloud_recording_file_infos`."
  }, {
    heading: "cloud_recording_file_infos",
    content: "`fileList`: String. The name of the M3U8 file."
  }, {
    heading: "session_exit",
    content: "`eventType` 11 indicates that the cloud recording service has ended its tasks and exited. `details` includes the following fields:"
  }, {
    heading: "session_exit",
    content: "`msgName`: String. The message name, `session_exit`."
  }, {
    heading: "session_exit",
    content: "`exitStatus`: Number. The exit status."
  }, {
    heading: "session_exit",
    content: "`0`: A normal exit, indicating that the recording service exits after the recording ends and the recorded files are uploaded."
  }, {
    heading: "session_exit",
    content: "`1`: An abnormal exit. An abnormal exist occurs when, for example, a parameter is incorrectly set."
  }, {
    heading: "session_failover",
    content: "`eventType` 12 indicates that the cloud recording service has enabled the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. `details` includes the following fields:"
  }, {
    heading: "session_failover",
    content: "`msgName`: String. The message name, `session_failover`."
  }, {
    heading: "session_failover",
    content: "`newUid`: Number. A randomly-generated recording user ID. After the high availability mechanism is enabled and the service is switched to a new server, the service rejoins the channel with a randomly-generated recording user ID, abandoning the old one."
  }, {
    heading: "uploader_started",
    content: "`eventType` 30 indicates that the upload service starts, and `details` includes the following fields:"
  }, {
    heading: "uploader_started",
    content: "`msgName`: String. The message name, `uploader_started`."
  }, {
    heading: "uploader_started",
    content: "`status`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "uploaded",
    content: "`eventType` 31 indicates that all the recorded files are uploaded to the specified third-party cloud storage, and `details` includes the following fields:"
  }, {
    heading: "uploaded",
    content: "`msgName`: String. The message name, `uploaded`."
  }, {
    heading: "uploaded",
    content: "`status`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "uploaded",
    content: "`fileList`: JSONArray. An array that contains detailed information of each recorded file."
  }, {
    heading: "uploaded",
    content: "`fileName`: String. The name of the M3U8 file or MP4 file."
  }, {
    heading: "uploaded",
    content: "`trackType`: String. The type of the recorded file."
  }, {
    heading: "uploaded",
    content: '`"audio"`: Audio file.'
  }, {
    heading: "uploaded",
    content: '`"video"`: Video file (no audio).'
  }, {
    heading: "uploaded",
    content: '`"audio_and_video"`: Video file (with audio).'
  }, {
    heading: "uploaded",
    content: '`uid`: String. The user ID. The user whose audio or video is recorded in the file. In composite recording mode, `uid` is `"0"`.'
  }, {
    heading: "uploaded",
    content: "`mixedAllUser`: Boolean. Whether the audio and video of all users are combined into a single file."
  }, {
    heading: "uploaded",
    content: "`true`: All users are recorded in a single file."
  }, {
    heading: "uploaded",
    content: "`false`: Each user is recorded separately."
  }, {
    heading: "uploaded",
    content: "`isPlayable`: Boolean. Whether the file can be played online."
  }, {
    heading: "uploaded",
    content: "`true`: The file can be played online."
  }, {
    heading: "uploaded",
    content: "`false`: The file cannot be played online."
  }, {
    heading: "uploaded",
    content: "`sliceStartTime`: Number. The Unix time (ms) when the recording starts."
  }, {
    heading: "examples",
    content: "Individual recording:"
  }, {
    heading: "examples",
    content: "Composite recording with no MP4 files generated:"
  }, {
    heading: "examples",
    content: "Composite recording with MP4 files generated:"
  }, {
    heading: "examples",
    content: "Web page recording with MP4 files generated:"
  }, {
    heading: "backuped",
    content: "`eventType` 32 indicates that all the recorded files are uploaded, but at least one of them is uploaded to Agora Cloud Backup. Agora Cloud Backup automatically uploads the files to the specified third-party cloud storage. `details` includes the following fields:"
  }, {
    heading: "backuped",
    content: "`msgName`: String. The message name, `backuped`."
  }, {
    heading: "backuped",
    content: "`status`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "backuped",
    content: "`fileList`: JSONArray. An array that contains detailed information of each recorded file."
  }, {
    heading: "backuped",
    content: "`fileName`: String. The name of the M3U8 file or MP4 file."
  }, {
    heading: "backuped",
    content: "`trackType`: String. The type of the recorded file."
  }, {
    heading: "backuped",
    content: '`"audio"`: Audio file.'
  }, {
    heading: "backuped",
    content: '`"video"`: Video file (no audio).'
  }, {
    heading: "backuped",
    content: '`"audio_and_video"`: Video file with audio.'
  }, {
    heading: "backuped",
    content: '`uid`: String. The user ID. The user whose audio or video is recorded in the file. In composite recording mode, `uid` is `"0"`.'
  }, {
    heading: "backuped",
    content: "`mixedAllUser`: Boolean. Whether the audio and video of all users are combined into a single file."
  }, {
    heading: "backuped",
    content: "`true`: All users are recorded in a single file."
  }, {
    heading: "backuped",
    content: "`false`: Each user is recorded separately."
  }, {
    heading: "backuped",
    content: "`isPlayable`: Boolean. Whether the file can be played online."
  }, {
    heading: "backuped",
    content: "`true`: The file can be played online."
  }, {
    heading: "backuped",
    content: "`false`: The file cannot be played online."
  }, {
    heading: "backuped",
    content: "`sliceStartTime`: Number. The Unix time (ms) when the recording starts."
  }, {
    heading: "examples-1",
    content: "Individual recording:"
  }, {
    heading: "examples-1",
    content: "Composite recording with no MP4 files generated:"
  }, {
    heading: "examples-1",
    content: "Composite recording with MP4 files generated:"
  }, {
    heading: "examples-1",
    content: "Web page recording with MP4 files generated:"
  }, {
    heading: "uploading_progress",
    content: "`eventType` 33 indicates the current upload progress. The Agora server notifies you of the upload progress once every minute after the recording starts. `details` includes the following fields:"
  }, {
    heading: "uploading_progress",
    content: "`msgName`: String. The message name, `uploading_progress`."
  }, {
    heading: "uploading_progress",
    content: "`progress`: Number. An ever-increasing number between 0 and 10,000, equal to the ratio of the number of the uploaded files to the number of the recorded files multiplied by 10,000. After the recording service exits and when the number reaches 10,000, the upload completes."
  }, {
    heading: "recorder_started",
    content: "`eventType` 40 indicates that the recording service starts, and `details` includes the following fields:"
  }, {
    heading: "recorder_started",
    content: "`msgName`: String. The message name, `recorder_started`."
  }, {
    heading: "recorder_started",
    content: "`status`: Number. The event status. 0 indicates normal status; other values indicate abnormal status."
  }, {
    heading: "recorder_leave",
    content: "`eventType` 41 indicates that the recorder leaves the channel, and `details` includes the following fields:"
  }, {
    heading: "recorder_leave",
    content: "`msgName`: String. The message name, `recorder_leave`."
  }, {
    heading: "recorder_leave",
    content: "`leaveCode`: Number. The leave code. You can perform a bitwise AND operation on the code and each enum value, and those with non-zero results are the reason for the exit. For example, if you perform a bit-by-bit AND operation on code 6 (binary 110) and each enum value, only LEAVE\\_CODE\\_SIG (binary 10) and LEAVE\\_CODE\\_NO\\_USERS (binary 100) get a non-zero result. The reasons for exiting, in this case, include a timeout and a signal triggering the exit."
  }, {
    heading: "recorder_leave",
    content: "Enumerator"
  }, {
    heading: "recorder_leave",
    content: "Description"
  }, {
    heading: "recorder_leave",
    content: "`LEAVE_CODE_INIT`"
  }, {
    heading: "recorder_leave",
    content: "0: The initialization fails."
  }, {
    heading: "recorder_leave",
    content: "`LEAVE_CODE_SIG`"
  }, {
    heading: "recorder_leave",
    content: "2 (binary 10): The AgoraCoreService process receives the SIGINT signal."
  }, {
    heading: "recorder_leave",
    content: "`LEAVE_CODE_NO_USERS`"
  }, {
    heading: "recorder_leave",
    content: "4 (binary 100): The recording server automatically leaves the channel and stops recording because the channel has no user."
  }, {
    heading: "recorder_leave",
    content: "`LEAVE_CODE_TIMER_CATCH`"
  }, {
    heading: "recorder_leave",
    content: "8 (binary 1000): Ignore it."
  }, {
    heading: "recorder_leave",
    content: "`LEAVE_CODE_CLIENT_LEAVE`"
  }, {
    heading: "recorder_leave",
    content: "16 (binary 10000): The recording server calls the `leaveChannel` method to leave the channel."
  }, {
    heading: "recorder_slice_start",
    content: "`eventType` 42 indicates that the recording service syncs the information of the recorded files, and `details` includes the following fields:"
  }, {
    heading: "recorder_slice_start",
    content: "`msgName`: String. The message name, `recorder_slice_start`."
  }, {
    heading: "recorder_slice_start",
    content: "`startUtcMs`：Number. The time (ms) in UTC when the recording starts (the starting time of the first slice file)."
  }, {
    heading: "recorder_slice_start",
    content: "`discontinueUtcMs`：Number. In most cases, this field is the same as `startUtcMs`. When the recording is interrupted, the Agora Cloud Recording service automatically resumes the recording and triggers this event. In this case, the value of this field is the time (ms) in UTC when the last slice file stops."
  }, {
    heading: "recorder_slice_start",
    content: "`mixedAllUser`: Boolean. Whether the audio and video of all users are mixed into a single file."
  }, {
    heading: "recorder_slice_start",
    content: "`true`: All users are recorded in a single file."
  }, {
    heading: "recorder_slice_start",
    content: "`false`: Each user is recorded separately."
  }, {
    heading: "recorder_slice_start",
    content: "`streamUid`: String. User ID. The user whose audio or video is recorded in the file. In composite mode, `streamUid` is `0`."
  }, {
    heading: "recorder_slice_start",
    content: "`trackType`: String. Type of the recorded file."
  }, {
    heading: "recorder_slice_start",
    content: '`"audio"`: Audio file.'
  }, {
    heading: "recorder_slice_start",
    content: '`"video"`: Video file (no audio).'
  }, {
    heading: "recorder_slice_start",
    content: '`"audio_and_video"`: Video file with audio.'
  }, {
    heading: "recorder_slice_start",
    content: "For example, you start a recording session and get this event notification in which `startUtcMs` is the starting time of slice file 1. Then, the recording session continues and records slice file 2 to slice file N, during which the recording service does not send this notification again. If an error occurs when recording slice file N + 1, you lose this file and the recording session stops. Agora Cloud Recording automatically resumes the recording and triggers this event again. In the event notification, `startUtcMs` is the time when slice file N + 2 starts, and `discontinueUtcMs` is the time when slice file N stops."
  }, {
    heading: "recorder_audio_stream_state_changed",
    content: "eventType 43 indicates that the state of the audio stream has changed, and `details` includes the following fields:"
  }, {
    heading: "recorder_audio_stream_state_changed",
    content: "`msgName`: String. The message name, `recorder_audio_stream_state_changed`."
  }, {
    heading: "recorder_audio_stream_state_changed",
    content: "`streamUid`: String. The ID of the user whose audio is being recorded. In composite recording mode, `streamUid` can be `0`, which represents the combined stream of all or the specified user IDs."
  }, {
    heading: "recorder_audio_stream_state_changed",
    content: "`state` : Number. Whether Agora Cloud Recording is receiving the audio stream."
  }, {
    heading: "recorder_audio_stream_state_changed",
    content: "`0`: Agora Cloud Recording is receiving the audio stream."
  }, {
    heading: "recorder_audio_stream_state_changed",
    content: "`1`: Agora Cloud Recording is not receiving the audio stream."
  }, {
    heading: "recorder_audio_stream_state_changed",
    content: "`UtcMs`: Number. The UTC time (ms) when the state of the audio stream changes."
  }, {
    heading: "recorder_video_stream_state_changed",
    content: "`eventType` 44 indicates that the state of the video stream has changed, and `details` includes the following fields:"
  }, {
    heading: "recorder_video_stream_state_changed",
    content: "`msgName`: String. The message name, `recorder_video_stream_state_changed`."
  }, {
    heading: "recorder_video_stream_state_changed",
    content: "`streamUid`: String. The ID of the user whose video is being recorded. In composite recording mode, `streamUid` can be `0`, which represents the combined stream of all or the specified user IDs."
  }, {
    heading: "recorder_video_stream_state_changed",
    content: "`state`: Number. Whether Agora Cloud Recording is receiving the video stream."
  }, {
    heading: "recorder_video_stream_state_changed",
    content: "`0`: Agora Cloud Recording is receiving the video stream."
  }, {
    heading: "recorder_video_stream_state_changed",
    content: "`1`: Agora Cloud Recording is not receiving the video stream."
  }, {
    heading: "recorder_video_stream_state_changed",
    content: "`UtcMs`: Number. The UTC time (ms) when the state of the video stream changes."
  }, {
    heading: "recorder_snapshot_file",
    content: "`eventType` 45 indicates that the screenshot is captured successfully and uploaded to the third-party cloud storage. The `details` includes the following fields:"
  }, {
    heading: "recorder_snapshot_file",
    content: '`msgName`: String. The message name, `"recorder_snapshot_file"`.'
  }, {
    heading: "recorder_snapshot_file",
    content: '`fileName`: String. The file name of the JPG file generated by the screenshot. The format is: `"fileName": "<fileNamePrefix>/<file name>"`. The `fileNamePrefix` refers to the path of the screenshot files in the third-party cloud storage.'
  }, {
    heading: "vod_started",
    content: "`eventType` 60 indicates that the uploader for ApsaraVideo for VoD has started and successfully acquired the upload credential. `details` includes the following fields:"
  }, {
    heading: "vod_started",
    content: '`msgName`: String. The message name, `"vod_started"`.'
  }, {
    heading: "vod_started",
    content: "`aliVodInfo`: JSON. The information of the video to upload."
  }, {
    heading: "vod_started",
    content: "`videoId`: String. The video ID."
  }, {
    heading: "vod_triggered",
    content: "`eventType` 61 indicates that all recorded files have been uploaded to ApsaraVideo for VoD. `details` includes the following fields:"
  }, {
    heading: "vod_triggered",
    content: '`msgName`: String. The message name, `"vod_triggered"`.'
  }, {
    heading: "web_recorder_started",
    content: "`eventType` 70 indicates that web page recording starts. `details` includes the following field:"
  }, {
    heading: "web_recorder_started",
    content: '`msgName`: String. The message name, `"web_recorder_started"`.'
  }, {
    heading: "web_recorder_started",
    content: "`recorderStartTime`: Number. The time (UTC) when the recording starts. Unix timestamp in milliseconds."
  }, {
    heading: "web_recorder_stopped",
    content: "`eventType` 71 indicates that web page recording stops. `details` includes the following field:"
  }, {
    heading: "web_recorder_stopped",
    content: '`msgName`: String. The message name, `"web_recorder_stopped"`.'
  }, {
    heading: "web_recorder_stopped",
    content: "`code`: Number. The error code. If the error code is not `0`, it means that the web page recording stopped abnormally."
  }, {
    heading: "web_recorder_stopped",
    content: "`message`: String. The error message, which indicates the reason why the recording stopped normally or abnormally."
  }, {
    heading: "web_recorder_stopped",
    content: "`details`: String. A specific description of the error message, which provides a more complete description of the reason why the recording stopped normally or abnormally. You can take corresponding measures based on the information."
  }, {
    heading: "web_recorder_stopped",
    content: "`fileList`: JSONArray. An array that contains detailed information of each recorded file."
  }, {
    heading: "web_recorder_stopped",
    content: "`fileName`: String. The name of the M3U8 file or MP4 file."
  }, {
    heading: "web_recorder_stopped",
    content: "`sliceStartTime`: Number. The Unix timestamp (ms) when the recording starts."
  }, {
    heading: "web_recorder_stopped",
    content: "Error Code"
  }, {
    heading: "web_recorder_stopped",
    content: "Message"
  }, {
    heading: "web_recorder_stopped",
    content: "Description"
  }, {
    heading: "web_recorder_stopped",
    content: "`0`"
  }, {
    heading: "web_recorder_stopped",
    content: "`ok`"
  }, {
    heading: "web_recorder_stopped",
    content: "Normal, the user stops the recording."
  }, {
    heading: "web_recorder_stopped",
    content: "`1`"
  }, {
    heading: "web_recorder_stopped",
    content: "`max_recording_hour`"
  }, {
    heading: "web_recorder_stopped",
    content: "The recording time reaches the set maximum recording length (`maxRecordingHour`), which causes the recording to stop."
  }, {
    heading: "web_recorder_stopped",
    content: "`2`"
  }, {
    heading: "web_recorder_stopped",
    content: "`capability_limit`"
  }, {
    heading: "web_recorder_stopped",
    content: "The web page to be recorded uses an unsupported function, causing the web page recording to stop."
  }, {
    heading: "web_recorder_stopped",
    content: "`3`"
  }, {
    heading: "web_recorder_stopped",
    content: "`start_engine_failed`"
  }, {
    heading: "web_recorder_stopped",
    content: "The recording engine failed to start, causing the web page recording to stop."
  }, {
    heading: "web_recorder_stopped",
    content: "`4`"
  }, {
    heading: "web_recorder_stopped",
    content: "`page_load_timeout`"
  }, {
    heading: "web_recorder_stopped",
    content: "When you use the web page load timeout detection, the web page load timeout causes the web page recording to stop."
  }, {
    heading: "web_recorder_stopped",
    content: "`5`"
  }, {
    heading: "web_recorder_stopped",
    content: "`access_url_failed`"
  }, {
    heading: "web_recorder_stopped",
    content: "An error occurred when opening the web page to be recorded, which causes the web page recording to stop."
  }, {
    heading: "web_recorder_stopped",
    content: "`6`"
  }, {
    heading: "web_recorder_stopped",
    content: "`recorder_error `"
  }, {
    heading: "web_recorder_stopped",
    content: "The web page recording has an error and cannot continue, causing the web page recording to stop."
  }, {
    heading: "web_recorder_capability_limit",
    content: "`eventType` 72 indicates that the web page to record uses a feature that is unsupported by web page recording, and the recording service will stop immediately. `details` includes the following fields:"
  }, {
    heading: "web_recorder_capability_limit",
    content: '`msgName`: String. The message name, `"web_recorder_capability_limit"`.'
  }, {
    heading: "web_recorder_capability_limit",
    content: "`limitType`: String. The type of the feature that causes the failure."
  }, {
    heading: "web_recorder_capability_limit",
    content: '`"resolution"`: The web page to record contains a video source with a resolution that exceeds 1280 × 720.'
  }, {
    heading: "web_recorder_capability_limit",
    content: '`"WebGL"`: The web page to record uses WebGL.'
  }, {
    heading: "web_recorder_capability_limit",
    content: '`"bandwidth"`：The upstream bandwidth exceeds 10 M, or the downstream bandwidth exceeds 1 G.'
  }, {
    heading: "web_recorder_reload",
    content: "`eventType` 73 indicates a web page reload. `details` includes the following fields:"
  }, {
    heading: "web_recorder_reload",
    content: '`msgName`: String. The message name, `"web_recorder_reload"`.'
  }, {
    heading: "web_recorder_reload",
    content: "`reason`: String. The reason for the page reload:"
  }, {
    heading: "web_recorder_reload",
    content: '`"audio_silence"`: Audio loss issue.'
  }, {
    heading: "web_recorder_reload",
    content: '`"page_load_timeout"`: Web page load timeout. The callback returns this field only if the web page load detection function is enabled and there is a web page load timeout. See Web page load detection.'
  }, {
    heading: "transcoder_started",
    content: "`eventType` 80 indicates that the transcoding starts, and `details` includes the following field:"
  }, {
    heading: "transcoder_started",
    content: '`msgName`: String. The message name, `"transcoder_started"`.'
  }, {
    heading: "transcoder_completed",
    content: "`eventType` 81 indicates that the transcoding completes, and `details` includes the following fields:"
  }, {
    heading: "transcoder_completed",
    content: '`msgName`: String. The message name, `"transcoder_completed"`.'
  }, {
    heading: "transcoder_completed",
    content: "`result`: String. The result of the transcoding."
  }, {
    heading: "transcoder_completed",
    content: '`"all_success"`: Successfully transcodes all files.'
  }, {
    heading: "transcoder_completed",
    content: '`"partial_success"`: Fails to transcode some files.'
  }, {
    heading: "transcoder_completed",
    content: '`"fail"`: The transcoding fails.'
  }, {
    heading: "transcoder_completed",
    content: "`uids`: JSONArray. The array contains the transcoding result and the name of the MP4 file of a specific user ID."
  }, {
    heading: "transcoder_completed",
    content: "`uid`: String. The corresponding user ID of the MP4 file."
  }, {
    heading: "transcoder_completed",
    content: "`result`: String. The result of transcoding."
  }, {
    heading: "transcoder_completed",
    content: '`"success"`: Transcoding succeeds.'
  }, {
    heading: "transcoder_completed",
    content: '`"fail"`: Transcoding fails.'
  }, {
    heading: "transcoder_completed",
    content: "`fileList`: JSONArray. The array contains information about the MP4 file."
  }, {
    heading: "transcoder_completed",
    content: "`fileName`: String. The name of the MP4 file."
  }, {
    heading: "download_failed",
    content: "`eventType` 90 indicates that the recording service fails to download the recorded files. This callback is triggered only once in the entire recording process, and `details` includes the following fields:"
  }, {
    heading: "download_failed",
    content: '`msgName`: String. The message name, `"download_failed"`.'
  }, {
    heading: "download_failed",
    content: "`vendor`: Number. The name of the third-party cloud storage service, which is the same as `vendor` in your `start` request."
  }, {
    heading: "download_failed",
    content: "`region`: Number. The region of the third-party cloud storage, which is the same as region set in your `start` request."
  }, {
    heading: "download_failed",
    content: "`bucket`: String. The bucket name of the third-party cloud storage, which is the same as `bucket` set in your `start` request."
  }, {
    heading: "download_failed",
    content: '`fileName`: String. The list of M3U8 or TS/WebM files that fail to be downloaded. The file names are separated by `";"`.'
  }, {
    heading: "rtmp_publish_status",
    content: "`eventType` 100 indicates the CDN streaming status of the web page recording. `details` includes the following fields:"
  }, {
    heading: "rtmp_publish_status",
    content: '`msgName`：String. The message name, `"rtmp_publish_status"`.'
  }, {
    heading: "rtmp_publish_status",
    content: "`rtmpUrl`: String. The CDN address you want to the push the stream to."
  }, {
    heading: "rtmp_publish_status",
    content: "`status`: Number. The CDN streaming status of the web page recording, including the following options:"
  }, {
    heading: "rtmp_publish_status",
    content: '`"connecting"`: Connecting to the CDN server.'
  }, {
    heading: "rtmp_publish_status",
    content: '`"publishing"`: Pushing the stream to the CDN server.'
  }, {
    heading: "rtmp_publish_status",
    content: '`"onhold"`: Pause streaming.'
  }, {
    heading: "rtmp_publish_status",
    content: '`"disconnected"`: Failed to connect to the CDN server. Agora recommends that you change the CDN address.'
  }, {
    heading: "postpone_transcode_final_result",
    content: "`eventType` 1001 indicates the final transcoding result, and `details` includes the following fields:"
  }, {
    heading: "postpone_transcode_final_result",
    content: '`msgName`: String. The message name, `"postpone_transcode_final_result"`.'
  }, {
    heading: "postpone_transcode_final_result",
    content: "`result`: String. The final result of the transcoding.\\\\"
  }, {
    heading: "postpone_transcode_final_result",
    content: '`"total_success"`: Successfully transcodes all files.'
  }, {
    heading: "postpone_transcode_final_result",
    content: '`"partial_success"`: Fails to transcode some files.'
  }, {
    heading: "postpone_transcode_final_result",
    content: '`"failed"`: The transcoding fails.'
  }, {
    heading: "postpone_transcode_final_result",
    content: "`fileList`: JSONArray. The array contains information about the generated MP4 files."
  }, {
    heading: "postpone_transcode_final_result",
    content: "`fileName`: String. The name of an individual MP4 file."
  }, {
    heading: "error-codes-related-to-uploading",
    content: "Error code"
  }, {
    heading: "error-codes-related-to-uploading",
    content: "Description"
  }, {
    heading: "error-codes-related-to-uploading",
    content: "32"
  }, {
    heading: "error-codes-related-to-uploading",
    content: "An error occurs in the configuration of the third-party cloud storage."
  }, {
    heading: "error-codes-related-to-uploading",
    content: "47"
  }, {
    heading: "error-codes-related-to-uploading",
    content: "The recording file upload fails."
  }, {
    heading: "error-codes-related-to-uploading",
    content: "51"
  }, {
    heading: "error-codes-related-to-uploading",
    content: "An error occurs when the uploader processes the recorded files."
  }, {
    heading: "warning-codes-related-to-uploading",
    content: "Warning code"
  }, {
    heading: "warning-codes-related-to-uploading",
    content: "Description"
  }, {
    heading: "warning-codes-related-to-uploading",
    content: "31"
  }, {
    heading: "warning-codes-related-to-uploading",
    content: "The recording service re-uploads the slice file to the specified cloud storage."
  }, {
    heading: "warning-codes-related-to-uploading",
    content: "32"
  }, {
    heading: "warning-codes-related-to-uploading",
    content: "The recording service re-uploads the slice file to Agora Cloud Backup."
  }, {
    heading: "error-codes-for-the-agora-cloud-recording-service",
    content: "Error code"
  }, {
    heading: "error-codes-for-the-agora-cloud-recording-service",
    content: "Description"
  }, {
    heading: "error-codes-for-the-agora-cloud-recording-service",
    content: "50"
  }, {
    heading: "error-codes-for-the-agora-cloud-recording-service",
    content: "A timeout occurs in uploading the recorded files."
  }, {
    heading: "error-codes-for-the-agora-cloud-recording-service",
    content: "52"
  }, {
    heading: "error-codes-for-the-agora-cloud-recording-service",
    content: "A timeout occurs in starting the Cloud Recording Service."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "Status code"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "Description"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "0"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The recording has not started."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "1"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The initialization is complete."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "2"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The recorder is starting."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "3"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The uploader is ready."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "4"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The recorder is ready."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "5"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The first recorded file is uploaded. After uploading the first file, the status is `5` when the recording is running."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "6"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The recording stops."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "7"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The Agora Cloud Recording service stops."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "8"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The recording is ready to exit."
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "20"
  }, {
    heading: "status-codes-for-the-agora-cloud-recording-service",
    content: "The recording exits abnormally."
  }, {
    heading: "ip-address-query-api",
    content: "If your server that receives notification callbacks is behind a firewall, call the IP address query API to retrieve the IP addresses of Notifications and configure your firewall to trust all these IP addresses."
  }, {
    heading: "ip-address-query-api",
    content: "Agora occasionally adjusts the Notifications IP addresses. Best practice is to call this endpoint at least every 24 hours and automatically update the firewall configuration."
  }, {
    heading: "prototype",
    content: "Method: `GET`"
  }, {
    heading: "prototype",
    content: "Endpoint: `https://api.agora.io/v2/ncs/ip`"
  }, {
    heading: "request-header-1",
    content: "Authorization: You must generate a Base64-encoded credential with the Customer ID and Customer Secret provided by Agora, and then pass the credential to the Authorization field in the HTTP request header."
  }, {
    heading: "request-body-1",
    content: "This API has no body parameters."
  }, {
    heading: "response-body",
    content: "When the request succeeds, the response body looks like the following:"
  }, {
    heading: "response-body",
    content: "Each primary IP field shows an IP address of Notifications server. When you receive a response, you need to note the primary IP fields and add all these IP addresses to your firewall's allowed IP list."
  }, {
    heading: "considerations",
    content: "Notifications does not guarantee that notification callbacks arrive at your server in the same order as events occur. Implement a strategy to handle messages arriving out of order."
  }, {
    heading: "considerations",
    content: "For improved reliability of Notifications, your server may receive more than one notification callback for a single event. Your server must be able to handle repeated messages."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "handle-notifications-for-specific-events",
    content: "Handle notifications for specific events"
  }, {
    id: "create-your-webhook",
    content: "Create your webhook"
  }, {
    id: "set-up-webhook-notifications",
    content: "Set up Webhook notifications"
  }, {
    id: "add-signature-verification",
    content: "Add signature verification"
  }, {
    id: "reference",
    content: "Reference"
  }, {
    id: "request-header",
    content: "Request Header"
  }, {
    id: "request-body",
    content: "Request Body"
  }, {
    id: "example",
    content: "Example"
  }, {
    id: "event-types",
    content: "Event types"
  }, {
    id: "fields-in-payload",
    content: "Fields in payload"
  }, {
    id: "cloud_recording_error",
    content: "cloud_recording_error"
  }, {
    id: "cloud_recording_warning",
    content: "cloud_recording_warning"
  }, {
    id: "cloud_recording_status_update",
    content: "cloud_recording_status_update"
  }, {
    id: "cloud_recording_file_infos",
    content: "cloud_recording_file_infos"
  }, {
    id: "session_exit",
    content: "session_exit"
  }, {
    id: "session_failover",
    content: "session_failover"
  }, {
    id: "uploader_started",
    content: "uploader_started"
  }, {
    id: "uploaded",
    content: "uploaded"
  }, {
    id: "examples",
    content: "Examples"
  }, {
    id: "backuped",
    content: "backuped"
  }, {
    id: "examples-1",
    content: "Examples"
  }, {
    id: "uploading_progress",
    content: "uploading_progress"
  }, {
    id: "recorder_started",
    content: "recorder_started"
  }, {
    id: "recorder_leave",
    content: "recorder_leave"
  }, {
    id: "recorder_slice_start",
    content: "recorder_slice_start"
  }, {
    id: "recorder_audio_stream_state_changed",
    content: "recorder_audio_stream_state_changed"
  }, {
    id: "recorder_video_stream_state_changed",
    content: "recorder_video_stream_state_changed"
  }, {
    id: "recorder_snapshot_file",
    content: "recorder_snapshot_file"
  }, {
    id: "vod_started",
    content: "vod_started"
  }, {
    id: "vod_triggered",
    content: "vod_triggered"
  }, {
    id: "web_recorder_started",
    content: "web_recorder_started"
  }, {
    id: "web_recorder_stopped",
    content: "web_recorder_stopped"
  }, {
    id: "example-1",
    content: "Example"
  }, {
    id: "web_recorder_capability_limit",
    content: "web_recorder_capability_limit"
  }, {
    id: "web_recorder_reload",
    content: "web_recorder_reload"
  }, {
    id: "transcoder_started",
    content: "transcoder_started"
  }, {
    id: "transcoder_completed",
    content: "transcoder_completed"
  }, {
    id: "download_failed",
    content: "download_failed"
  }, {
    id: "rtmp_publish_status",
    content: "rtmp_publish_status"
  }, {
    id: "postpone_transcode_final_result",
    content: "postpone_transcode_final_result"
  }, {
    id: "error-codes-related-to-uploading",
    content: "Error codes related to uploading"
  }, {
    id: "warning-codes-related-to-uploading",
    content: "Warning codes related to uploading"
  }, {
    id: "error-codes-for-the-agora-cloud-recording-service",
    content: "Error codes for the Agora Cloud Recording service"
  }, {
    id: "status-codes-for-the-agora-cloud-recording-service",
    content: "Status codes for the Agora Cloud Recording service"
  }, {
    id: "ip-address-query-api",
    content: "IP address query API"
  }, {
    id: "prototype",
    content: "Prototype"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "response-body",
    content: "Response body"
  }, {
    id: "considerations",
    content: "Considerations"
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
  url: "#handle-notifications-for-specific-events",
  title: _jsx(_Fragment, {
    children: "Handle notifications for specific events"
  })
}, {
  depth: 3,
  url: "#create-your-webhook",
  title: _jsx(_Fragment, {
    children: "Create your webhook"
  })
}, {
  depth: 3,
  url: "#set-up-webhook-notifications",
  title: _jsx(_Fragment, {
    children: "Set up Webhook notifications"
  })
}, {
  depth: 3,
  url: "#add-signature-verification",
  title: _jsx(_Fragment, {
    children: "Add signature verification"
  })
}, {
  depth: 2,
  url: "#reference",
  title: _jsx(_Fragment, {
    children: "Reference"
  })
}, {
  depth: 3,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request Header"
  })
}, {
  depth: 3,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request Body"
  })
}, {
  depth: 4,
  url: "#example",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 3,
  url: "#event-types",
  title: _jsx(_Fragment, {
    children: "Event types"
  })
}, {
  depth: 4,
  url: "#fields-in-payload",
  title: _jsx(_Fragment, {
    children: "Fields in payload"
  })
}, {
  depth: 4,
  url: "#cloud_recording_error",
  title: _jsx(_Fragment, {
    children: "cloud_recording_error"
  })
}, {
  depth: 4,
  url: "#cloud_recording_warning",
  title: _jsx(_Fragment, {
    children: "cloud_recording_warning"
  })
}, {
  depth: 4,
  url: "#cloud_recording_status_update",
  title: _jsx(_Fragment, {
    children: "cloud_recording_status_update"
  })
}, {
  depth: 4,
  url: "#cloud_recording_file_infos",
  title: _jsx(_Fragment, {
    children: "cloud_recording_file_infos"
  })
}, {
  depth: 4,
  url: "#session_exit",
  title: _jsx(_Fragment, {
    children: "session_exit"
  })
}, {
  depth: 4,
  url: "#session_failover",
  title: _jsx(_Fragment, {
    children: "session_failover"
  })
}, {
  depth: 4,
  url: "#uploader_started",
  title: _jsx(_Fragment, {
    children: "uploader_started"
  })
}, {
  depth: 4,
  url: "#uploaded",
  title: _jsx(_Fragment, {
    children: "uploaded"
  })
}, {
  depth: 4,
  url: "#examples",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 4,
  url: "#backuped",
  title: _jsx(_Fragment, {
    children: "backuped"
  })
}, {
  depth: 4,
  url: "#examples-1",
  title: _jsx(_Fragment, {
    children: "Examples"
  })
}, {
  depth: 4,
  url: "#uploading_progress",
  title: _jsx(_Fragment, {
    children: "uploading_progress"
  })
}, {
  depth: 4,
  url: "#recorder_started",
  title: _jsx(_Fragment, {
    children: "recorder_started"
  })
}, {
  depth: 4,
  url: "#recorder_leave",
  title: _jsx(_Fragment, {
    children: "recorder_leave"
  })
}, {
  depth: 4,
  url: "#recorder_slice_start",
  title: _jsx(_Fragment, {
    children: "recorder_slice_start"
  })
}, {
  depth: 4,
  url: "#recorder_audio_stream_state_changed",
  title: _jsx(_Fragment, {
    children: "recorder_audio_stream_state_changed"
  })
}, {
  depth: 4,
  url: "#recorder_video_stream_state_changed",
  title: _jsx(_Fragment, {
    children: "recorder_video_stream_state_changed"
  })
}, {
  depth: 4,
  url: "#recorder_snapshot_file",
  title: _jsx(_Fragment, {
    children: "recorder_snapshot_file"
  })
}, {
  depth: 4,
  url: "#vod_started",
  title: _jsx(_Fragment, {
    children: "vod_started"
  })
}, {
  depth: 4,
  url: "#vod_triggered",
  title: _jsx(_Fragment, {
    children: "vod_triggered"
  })
}, {
  depth: 4,
  url: "#web_recorder_started",
  title: _jsx(_Fragment, {
    children: "web_recorder_started"
  })
}, {
  depth: 4,
  url: "#web_recorder_stopped",
  title: _jsx(_Fragment, {
    children: "web_recorder_stopped"
  })
}, {
  depth: 4,
  url: "#example-1",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#web_recorder_capability_limit",
  title: _jsx(_Fragment, {
    children: "web_recorder_capability_limit"
  })
}, {
  depth: 4,
  url: "#web_recorder_reload",
  title: _jsx(_Fragment, {
    children: "web_recorder_reload"
  })
}, {
  depth: 4,
  url: "#transcoder_started",
  title: _jsx(_Fragment, {
    children: "transcoder_started"
  })
}, {
  depth: 4,
  url: "#transcoder_completed",
  title: _jsx(_Fragment, {
    children: "transcoder_completed"
  })
}, {
  depth: 4,
  url: "#download_failed",
  title: _jsx(_Fragment, {
    children: "download_failed"
  })
}, {
  depth: 4,
  url: "#rtmp_publish_status",
  title: _jsx(_Fragment, {
    children: "rtmp_publish_status"
  })
}, {
  depth: 4,
  url: "#postpone_transcode_final_result",
  title: _jsx(_Fragment, {
    children: "postpone_transcode_final_result"
  })
}, {
  depth: 4,
  url: "#error-codes-related-to-uploading",
  title: _jsx(_Fragment, {
    children: "Error codes related to uploading"
  })
}, {
  depth: 4,
  url: "#warning-codes-related-to-uploading",
  title: _jsx(_Fragment, {
    children: "Warning codes related to uploading"
  })
}, {
  depth: 4,
  url: "#error-codes-for-the-agora-cloud-recording-service",
  title: _jsx(_Fragment, {
    children: "Error codes for the Agora Cloud Recording service"
  })
}, {
  depth: 4,
  url: "#status-codes-for-the-agora-cloud-recording-service",
  title: _jsx(_Fragment, {
    children: "Status codes for the Agora Cloud Recording service"
  })
}, {
  depth: 3,
  url: "#ip-address-query-api",
  title: _jsx(_Fragment, {
    children: "IP address query API"
  })
}, {
  depth: 4,
  url: "#prototype",
  title: _jsx(_Fragment, {
    children: "Prototype"
  })
}, {
  depth: 4,
  url: "#request-header-1",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body-1",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 4,
  url: "#response-body",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#considerations",
  title: _jsx(_Fragment, {
    children: "Considerations"
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
    children: [_jsx(_components.p, {
      children: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Cloud Recording events. With Notifications, you can subscribe to Cloud Recording events and receive notifications in real time."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns ", _jsx(_components.code, {
        children: "200 Ok"
      }), " to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users."]
    }), `
`, _jsx(_components.p, {
      children: "The following figure illustrates the workflow when Notifications is enabled for the specific Cloud Recording events you subscribe to:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/notification-center-service/ncs-cloud-recording-workflow.svg",
        alt: "cloud-recording"
      })
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "A user commits an action that creates an event."
      }), `
`, _jsx(_components.li, {
        children: "Notifications sends an HTTPS POST request to your webhook."
      }), `
`, _jsx(_components.li, {
        children: "Your server validates the request signature, then sends a response to Notifications within 10 seconds. The response body must be in JSON."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If Notifications receives ", _jsx(_components.code, {
        children: "200 OK"
      }), " within 10 seconds of sending the initial notification, the callback is considered successful. If these conditions are not met, Notifications immediately resends the notification. The interval between notification attempts gradually increases. Notifications stops sending notifications after three retries."]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To set up and use Notifications, you must have:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["A ", _jsx(_components.a, {
            href: "/en/introduction/account#sign-up-for-an-agora-account",
            children: "valid Agora account"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["An ", _jsx(_components.a, {
            href: "/en/introduction/account#your-first-agora-project",
            children: "active Agora project"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "A computer with Internet access."
        }), `
`, _jsxs(_components.p, {
          children: ["If your network access is restricted by a firewall, call the ", _jsx(_components.a, {
            href: "#ip-address-query-api",
            children: "IP address query API"
          }), " to retrieve the Notifications IP addresses , then configure the firewall to allow these IP addresses."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "handle-notifications-for-specific-events",
      children: "Handle notifications for specific events"
    }), `
`, _jsx(_components.p, {
      children: "In order to handle notifications for the events you subscribe to, you need to:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#create-your-webhook",
          children: "Create your webhook"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#set-up-webhook-notifications",
          children: "Set up Webhook notifications"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#add-signature-verification",
          children: "Verify Notifications signatures"
        })
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "create-your-webhook",
      children: "Create your webhook"
    }), `
`, _jsxs(_components.p, {
      children: ["Once Notifications is enabled, Agora SDRTN® sends notification callbacks as ", _jsx(_components.code, {
        children: "HTTPS POST"
      }), " requests to your webhook when events that you are subscribed to occur. The data format of the requests is JSON, the character encoding is ", _jsx(_components.code, {
        children: "UTF-8"
      }), ", and the signature algorithm is ", _jsx(_components.code, {
        children: "HMAC/SHA1"
      }), " or ", _jsx(_components.code, {
        children: "HMAC/SHA256"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For Notifications, a webhook is an endpoint on an ", _jsx(_components.code, {
        children: "HTTPS"
      }), " server that handles these requests. In a production environment you write this in your web infrastructure, for development purposes best practice is to create a simple local server and use a service such as ", _jsx(_components.a, {
        href: "https://ngrok.com/download",
        children: "ngrok"
      }), " to supply a public URL that you register with Agora SDRTN® when you enable Notifications."]
    }), `
`, _jsx(_components.p, {
      children: "To do this, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Set up Go"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Ensure you have Go installed on your system. If not, download and install it from the ", _jsx(_components.a, {
            href: "https://go.dev/dl/",
            children: "official Go website"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Create a Go project for your server"
          })
        }), `
`, _jsx(_components.p, {
          children: "Create a new directory for your project and navigate into it:"
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
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "mkdir"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " agora-webhook-server"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "cd"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " agora-webhook-server"
                })]
              })]
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["In the project directory, create a new file ", _jsx(_components.code, {
            children: "main.go"
          }), ". Open the file in your preferred text editor and add the following code:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "package"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " main"
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
                  children: "import"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "encoding/json"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "fmt"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "io"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "net/http"
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
                  children: ")"
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
                  children: "type"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " WebhookRequest"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " struct"
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
                  children: "    NoticeID   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' `json:"noticeId"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ProductID  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int64"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  `json:"productId"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    EventType  "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    `json:"eventType"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Payload    "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Payload"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' `json:"payload"`'
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
                  children: "type"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " Payload"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " struct"
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
                  children: "    ClientSeq   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int64"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  `json:"clientSeq"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    UID         "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    `json:"uid"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ChannelName "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' `json:"channelName"`'
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
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " rootHandler"
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
                  children: "w"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " http"
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
                  children: "ResponseWriter"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "r"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "http"
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
                  children: "Request"
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
                  children: "    response "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " `<h1>Agora Notifications demo</h1>`"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WriteHeader"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(http.StatusOK)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Write"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "([]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "byte"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(response))"
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
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " ncsHandler"
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
                  children: "w"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " http"
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
                  children: "ResponseWriter"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "r"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "http"
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
                  children: "Request"
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
                  children: "    agoraSignature "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " r.Header."
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
                  children: "("
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Agora-Signature"'
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
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: '"Agora-Signature:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", agoraSignature)"
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
                  children: "    body, err "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " io."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ReadAll"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(r.Body)"
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
                  children: " err "
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
                  children: " nil"
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
                  children: "        http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(w, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Unable to read request body"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", http.StatusBadRequest)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
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
                  children: " req "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WebhookRequest"
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
                  children: " err "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " json."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Unmarshal"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(body, "
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
                  children: "req); err "
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
                  children: " nil"
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
                  children: "        http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(w, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Invalid JSON"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", http.StatusBadRequest)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "        return"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    fmt."
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Event code: '
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
                  children: " Uid: "
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
                  children: " Channel: "
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
                  children: " ClientSeq: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d\\n"
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
                  children: "        req.EventType, req.Payload.UID, req.Payload.ChannelName, req.Payload.ClientSeq)"
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
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "WriteHeader"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(http.StatusOK)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    w."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Write"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "([]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "byte"
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
                  children: '"Ok"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
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
                  children: "func"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " main"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "HandleFunc"
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
                  children: '"/"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", rootHandler)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "HandleFunc"
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
                  children: '"/ncsNotify"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", ncsHandler)"
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
                  children: "    port "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' ":8080"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    fmt."
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Notifications webhook server started on port '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s\\n"
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
                  children: ", port)"
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
                  children: " err "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "ListenAndServe"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(port, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "nil"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "); err "
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
                  children: " nil"
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
                  children: "        log."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Fatalf"
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
                  children: '"Failed to start server: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%v"
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
                  children: ", err)"
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Run your Go server"
          })
        }), `
`, _jsx(_components.p, {
          children: "Run the server using the following command:"
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
                  children: "go"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " run"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " main.go"
                })]
              })
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Create a public URL for your server"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["In this example you use ", _jsx(_components.code, {
            children: "ngrok"
          }), " to create a public URL for your server."]
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Download and install ", _jsx(_components.a, {
                href: "https://ngrok.com/download",
                children: "ngrok"
              }), ". If you have ", _jsx(_components.code, {
                children: "Chocolatey"
              }), ", use the following command:"]
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
                      children: "choco"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " install"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " ngrok"
                    })]
                  })
                })
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["Add an ", _jsx(_components.code, {
                children: "authtoken"
              }), " to ngrok:"]
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
                      children: "ngrok"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " config"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " add-authtoken"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: " <"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: "authToke"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#24292E",
                        "--shiki-dark": "#E1E4E8"
                      },
                      children: "n"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#D73A49",
                        "--shiki-dark": "#F97583"
                      },
                      children: ">"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["To obtain an ", _jsx(_components.code, {
                children: "authToken"
              }), ", ", _jsx(_components.a, {
                href: "https://dashboard.ngrok.com/signup",
                children: "sign up"
              }), " with ngrok."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "Start a tunnel to your local server using the following command:"
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
                      children: "ngrok"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " http"
                    }), _jsx(_components.span, {
                      style: {
                        "--shiki-light": "#032F62",
                        "--shiki-dark": "#9ECBFF"
                      },
                      children: " 127.0.0.1:8080"
                    })]
                  })
                })
              })
            }), `
`, _jsxs(_components.p, {
              children: ["You see a ", _jsx(_components.strong, {
                children: "Forwarding"
              }), " URL and a ", _jsx(_components.strong, {
                children: "Web Interface"
              }), " URL in the console. Open the web interface URL in your browser."]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.strong, {
            children: "Test the server"
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Open a web browser and navigate to the public URL provided by ", _jsx(_components.code, {
            children: "ngrok"
          }), " to see the root handler response."]
        }), `
`, _jsxs(_components.p, {
          children: ["Use curl, ", _jsx(_components.a, {
            href: "https://www.postman.com/",
            children: "Postman"
          }), ", or another tool to send a ", _jsx(_components.code, {
            children: "POST"
          }), " request to ", _jsx(_components.code, {
            children: "https://<ngrok_url>/ncsNotify"
          }), " with the required ", _jsx(_components.code, {
            children: "JSON"
          }), " payload."]
        }), `
`, _jsxs(_components.p, {
          children: ["Example using ", _jsx(_components.code, {
            children: "curl"
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
            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "curl"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " -X"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " POST"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " <"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "ngrok_ur"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "l"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "/ncsNotify"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "-H "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Content-Type: application/json"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "-H "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Agora-Signature: your_signature"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " \\"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "-d "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'{"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "noticeId": "some_notice_id",'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "productId": 12345,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "eventType": 1,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "payload": {'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "clientSeq": 67890,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "uid": 123,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "channelName": "test_channel"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "}'"
                })
              })]
            })
          })
        }), `
`, _jsxs(_components.p, {
          children: ["Make sure you replace ", _jsx(_components.code, {
            children: "ngrok_url"
          }), " with the forwarding url."]
        }), `
`, _jsxs(_components.p, {
          children: ["Once the HTTP request is successful, you see the following ", _jsx(_components.code, {
            children: "JSON"
          }), " payload in your browser:"]
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
                  children: '  "noticeId"'
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
                  children: '"some_notice_id"'
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
                  children: '  "productId"'
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
                  children: "12345"
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
                  children: '  "eventType"'
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
                  children: "1"
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
                  children: '  "payload"'
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
                  children: '    "clientSeq"'
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
                  children: "67890"
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
                  children: '    "uid"'
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
                  children: "123"
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
                  children: '    "channelName"'
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
                  children: '"test_channel"'
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
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "set-up-webhook-notifications",
      children: "Set up Webhook notifications"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In ", _jsx(_components.a, {
            href: "https://console.agora.io",
            children: "Agora Console"
          }), ", select ", _jsx(_components.strong, {
            children: "Webhooks"
          }), " from the sidebar."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "New Webhook"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.strong, {
            children: "Product"
          }), " dropdown, select ", _jsx(_components.strong, {
            children: "Cloud Recording"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Copy the ", _jsx(_components.strong, {
            children: "Signing Secret"
          }), ". You use this secret to ", _jsx(_components.a, {
            href: "#add-signature-verification",
            children: "Add signature verification"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Fill in the following:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Receiving region"
              }), ": Select the region where your server that receives the notifications is located. Agora connects to the nearest Agora node server based on your selection."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Receiving URL"
              }), ": The ", _jsx(_components.code, {
                children: "HTTPS"
              }), " public address of your server that receives the notifications, for example ", _jsx(_components.code, {
                children: "https://1111-123-456-789-99.ap.ngrok.io/ncsNotify"
              }), ". Only ", _jsx(_components.code, {
                children: "HTTPS"
              }), " endpoints are supported."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Subscribed events"
              }), ": Select all the events that you want to subscribe to."]
            }), `
`, _jsx(_components.p, {
              children: "If the selected events generate a high number of queries per second (QPS), ensure that your server has sufficient processing capacity."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "IP whitelist"
              }), ": If your server is behind a firewall, enable this option, then call the ", _jsx(_components.a, {
                href: "#ip-address-query-api",
                children: "IP address query API"
              }), " to get the IP addresses of the Agora Notifications server and add them to the firewall's allowed IP list."]
            }), `
`]
          }), `
`]
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsxs(CalloutDescription, {
            children: [_jsxs(_components.p, {
              children: ["To reduce the delay in notification delivery, best practice is to activate ", _jsx(_components.code, {
                children: "HTTP"
              }), " persistent connection (also called ", _jsx(_components.code, {
                children: "HTTP"
              }), " keep-alive) on your server with the following settings:"]
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "MaxKeepAliveRequests"
                }), ": 100 or more"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "KeepAliveTimeout"
                }), ": 10 seconds or more"]
              }), `
`]
            })]
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Select ", _jsx(_components.strong, {
            children: "Run health check"
          }), ". Agora performs a health test for your configuration as follows:"]
        }), `
`, _jsxs(_components.ol, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The health test generates test events that correspond to your subscribed events, and then sends test event callbacks to your server."
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["After receiving each test event callback, your server must respond within 10 seconds with a status code of ", _jsx(_components.code, {
                children: "200"
              }), ". The response body must be in JSON format."]
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
          children: ["When the health check succeeds, select ", _jsx(_components.strong, {
            children: "Save"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: "If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["Request timeout (590): Your server does not return the status code ", _jsx(_components.code, {
              children: "200"
            }), " within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working."]
          }), `
`, _jsx(_components.li, {
            children: "Domain name unreachable (591): The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed."
          }), `
`, _jsx(_components.li, {
            children: "Certificate error (592): The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list."
          }), `
`, _jsxs(_components.li, {
            children: ["Other response errors: Your server returns a response with a status code other than ", _jsx(_components.code, {
              children: "200"
            }), ". See the prompt in Agora Console for the specific status code and error messages."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "add-signature-verification",
      children: "Add signature verification"
    }), `
`, _jsx(_components.p, {
      children: "To communicate securely between Notifications and your webhook, Agora SDRTN®  uses signatures for identity verification as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "When you configure Notifications in Agora Console, Agora SDRTN®  generates a secret you use for verification."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["When sending a notification, Notifications generates two signature values from the secret using ", _jsx(_components.code, {
            children: "HMAC/SHA1"
          }), " and ", _jsx(_components.code, {
            children: "HMAC/SHA256"
          }), " algorithms. These signatures are added as ", _jsx(_components.code, {
            children: "Agora-Signature"
          }), " and ", _jsx(_components.code, {
            children: "Agora-Signature-V2"
          }), " to the ", _jsx(_components.code, {
            children: "HTTPS"
          }), " request header."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["When your server receives a callback, you can verify ", _jsx(_components.code, {
            children: "Agora-Signature"
          }), " or ", _jsx(_components.code, {
            children: "Agora-Signature-V2"
          }), ":"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["To verify ", _jsx(_components.code, {
              children: "Agora-Signature"
            }), ", use the secret, the raw request body, and the ", _jsx(_components.code, {
              children: "crypto/sha1"
            }), " algorithm."]
          }), `
`, _jsxs(_components.li, {
            children: ["To verify ", _jsx(_components.code, {
              children: "Agora-Signature-V2"
            }), ", use the secret, the raw request body, and the ", _jsx(_components.code, {
              children: "crypto/sha256"
            }), " algorithm."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The following sample code uses ", _jsx(_components.code, {
        children: "crypto/sha1"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "To add signature verification to your server, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the ", _jsx(_components.code, {
            children: "main.go"
          }), " file, replace your imports with the following:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "import"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "crypto/hmac"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "crypto/sha1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "encoding/hex"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "encoding/json"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "fmt"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "io"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "log"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '    "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "net/http"
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
                  children: ")"
                })
              })]
            })
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Add the following code after the list of imports:"
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Replace with your NCS secret"
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
                  children: " secret"
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
                  children: ' "<Replace with your secret code>"'
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
                  children: "// calcSignatureV1 computes the HMAC/SHA256 signature for a given payload and secret"
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
                  children: " calcSignatureV1"
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
                  children: "secret"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "payload"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " string"
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
                  children: "string"
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
                  children: "    mac "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " hmac."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "New"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(sha1.New, []"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "byte"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(secret))"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    mac."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Write"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "([]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "byte"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(payload))"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " hex."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "EncodeToString"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(mac."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Sum"
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
                  children: "nil"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "))"
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
                  children: "// verify checks if the provided signature matches the HMAC/SHA256 signature of the request body"
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
                  children: " verify"
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
                  children: "requestBody"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "signature"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " string"
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
                  children: "bool"
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
                  children: "    calculatedSignature "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ":="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " calcSignatureV1"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(secret, requestBody)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: '"Calculated Signature:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", calculatedSignature)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    fmt."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Println"
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
                  children: '"Received Signature:"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", signature)"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " calculatedSignature "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "=="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " signature"
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
          children: ["In ", _jsx(_components.code, {
            children: "main.go"
          }), ", add the following code after you read the request body:"]
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
            icon: '<svg viewBox="0 0 24 24"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" fill="currentColor" /></svg>',
            children: _jsxs(_components.code, {
              children: [_jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "// Verify the signature"
                })
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "verify"
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
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(body), agoraSignature) {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    http."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Error"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(w, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"Invalid signature"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", http.StatusUnauthorized)"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    return"
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
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To test the server, follow the steps given in the ", _jsx(_components.a, {
            href: "#set-up-webhook-notifications",
            children: "Set up Webhook notifications"
          }), " section."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "When you receive an event from the console, and if the signature matches, the event details are displayed in your browser."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "reference",
      children: "Reference"
    }), `
`, _jsx(_components.p, {
      children: "This section contains in depth information about Notifications."
    }), `
`, _jsx(_components.h3, {
      id: "request-header",
      children: "Request Header"
    }), `
`, _jsx(_components.p, {
      children: "The header of notification callbacks contains the following fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Value"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Content-Type"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "application/json"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Agora-Signature"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The signature generated by Agora using the ", _jsx(_components.strong, {
              children: "Secret"
            }), " and the HMAC/SHA1 algorithm. You need to use the Secret and HMAC/SHA1 algorithm to verify the signature value. For details, see ", _jsx(_components.a, {
              href: "#add-signature-verification",
              children: "Signature verification"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Agora-Signature-V2"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The signature generated by Agora using the ", _jsx(_components.strong, {
              children: "Secret"
            }), " and the HMAC/SHA256 algorithm. You need to use the Secret and the HMAC/SHA256 algorithm to verify the signature value. For details, see ", _jsx(_components.a, {
              href: "#add-signature-verification",
              children: "Signature verification"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request Body"
    }), `
`, _jsx(_components.p, {
      children: "The request body of notification callbacks contains the following fields:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Field name"
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
              children: "noticeId"
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
            children: "The notification ID, identifying the notification callback when the event occurs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "productId"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [_jsx(_components.p, {
              children: "The product ID:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Realtime Communication (RTC) service"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": Cloud Recording"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": Media Pull"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Media Push"]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The type of event being notified. For details, see ", _jsx(_components.a, {
              href: "#event-types",
              children: "event types"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "notifyMs"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Unix timestamp (ms) when Notifications sends a callback to your server. This value is updated when Notifications resends the notification callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "JSON Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The content of the event being notified. The payload varies with event type."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "example",
      children: "Example"
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
              children: '   "noticeId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"2000001428:4330:107"'
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
              children: '   "productId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
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
              children: '   "eventType"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
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
              children: '   "notifyMs"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1611566412672"
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
              children: '   "payload"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ":{"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: "      ..."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   }"
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
`, _jsx(_components.h3, {
      id: "event-types",
      children: "Event types"
    }), `
`, _jsx(_components.p, {
      children: "You can subscribe to the following Cloud Recording events from Agora Console:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "eventType"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Event name"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "serviceType"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Event description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#cloud_recording_error",
              children: "1"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cloud_recording_error"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An error occurs during the recording."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#cloud_recording_warning",
              children: "2"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cloud_recording_warning"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A warning occurs during the recording."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#cloud_recording_status_update",
              children: "3"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cloud_recording_status_update"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The status of the Agora Cloud Recording service changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#cloud_recording_file_infos",
              children: "4"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "cloud_recording_file_infos"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The M3U8 playlist file is generated."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#session_exit",
              children: "11"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "session_exit"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The cloud recording service has ended its tasks and exited."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#session_failover",
              children: "12"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "session_failover"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The cloud recording service has enabled the ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording",
              children: "high availability mechanism"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#uploader_started",
              children: "30"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uploader_started"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2 (uploader module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The upload service starts."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#uploaded",
              children: "31"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uploaded"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2 (uploader module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All the recorded files are uploaded to the specified third-party cloud storage."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#backuped",
              children: "32"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "backuped"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2 (uploader module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All the recorded files are uploaded, but at least one file is uploaded to Agora Cloud Backup."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#uploading_progress",
              children: "33"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uploading_progress"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2 (uploader module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The progress of uploading the recorded files to the cloud storage."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#recorder_started",
              children: "40"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recorder_started"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1 (recorder module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording starts."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#recorder_leave",
              children: "41"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recorder_leave"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1 (recorder module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording exits."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#recorder_slice_start",
              children: "42"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recorder_slice_start"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1 (recorder module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording service syncs the information of the recorded files."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#recorder_audio_stream_state_changed",
              children: "43"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recorder_audio_stream_state_changed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1 (recorder module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The state of the audio stream changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#recorder_video_stream_state_changed",
              children: "44"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recorder_video_stream_state_changed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1 (recorder module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The state of the video stream changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#recorder_snapshot_file",
              children: "45"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recorder_snapshot_file"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1 (recorder module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The screenshot is captured successfully."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#vod_started",
              children: "60"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "vod_started"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4 (extension services)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The uploader for ApsaraVideo for VoD has started and successfully acquired the upload credential."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#vod_triggered",
              children: "61"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "vod_triggered"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4 (extension services)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "All recorded files have been uploaded to ApsaraVideo for VoD."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#web_recorder_started",
              children: "70"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "web_recorder_started"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 (web page recording module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web page recording starts."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#web_recorder_stopped",
              children: "71"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "web_recorder_stopped"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 (web page recording module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Web page recording stops."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#web_recorder_capability_limit",
              children: "72"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "web_recorder_capability_limit"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 (web page recording module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The web page to record uses a feature that is unsupported by web page recording. The recording service will stop immediately."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#web_recorder_reload",
              children: "73"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "web_recorder_reload"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6 (web page recording module)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The web page reloads."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#transcoder_started",
              children: "80"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "transcoder_started"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The transcoding starts."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#transcoder_completed",
              children: "81"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "transcoder_completed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The transcoding completes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#download_failed",
              children: "90"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "download_failed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "8（download module）"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording service fails to download the recorded files."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#rtmp_publish_status",
              children: "100"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "rtmp_publish_status"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6（web page recording module）"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The CDN streaming status of the web page recording changes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#postpone_transcode_final_result",
              children: "1001"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "postpone_transcode_final_result"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0 (cloud recording service)"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The result of the transcoding."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "fields-in-payload",
      children: "Fields in payload"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "payload"
      }), " is a JSON object, which is the main body of the notification. ", _jsx(_components.code, {
        children: "payload"
      }), " in each type of event notification includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "cname"
        }), ": String. The name of the channel to be recorded."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "uid"
        }), ": String. The user ID of the recording client."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sid"
        }), ": String. The recording ID. The unique identifier of each recording."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "sequence"
        }), ": Number. The serial number of the notifications, starting from 0. You can use this parameter to identify notifications that are random, lost, or resent."]
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
            }), ": The cloud recording service."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": The recorder module."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "2"
            }), ": The uploader module."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "4"
            }), ": The extension services."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "6"
            }), ": The web page recording module."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "8"
            }), ": The download module."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "details"
        }), ": JSON. The details of the callback events are described in the following section. Notifications may add new fields to ", _jsx(_components.code, {
          children: "details"
        }), " in the future. To ensure backward compatibility, the service will not change the data format of existing fields."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The relevant fields of each Agora Cloud Recording callback event are listed below:"
    }), `
`, _jsx(_components.h4, {
      id: "cloud_recording_error",
      children: "cloud_recording_error"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 1 indicates that an error occurs during the recording. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The name of the message, ", _jsx(_components.code, {
          children: '"cloud_recording_error"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "module"
        }), ": Number. The module in which the error occurs.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": The recorder"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": The uploader"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "2"
            }), ": The Agora Cloud Recording Service"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "6"
            }), "：The Agora Web Page Recording Service"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errorLevel"
        }), ": Number. The error level.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": Debug"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "2"
            }), ": Minor"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "3"
            }), ": Medium"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "4"
            }), ": Major"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "5"
            }), ": Fatal. A fatal error may cause the recording to exit. If you receive a message of this level, call ", _jsx(_components.code, {
              children: "query"
            }), " to check the current status and process the error according to the error notifications."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errorCode"
        }), ": Number. The error code.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["If the error occurs in the recorder module (", _jsx(_components.code, {
              children: "0"
            }), "), see ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/reference/common-errors",
              children: "common errors"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the error occurs in the uploader (", _jsx(_components.code, {
              children: "1"
            }), "), see ", _jsx(_components.a, {
              href: "#error-codes-related-to-uploading",
              children: "upload error code"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the error occurs in the Agora Cloud Recording Service (", _jsx(_components.code, {
              children: "2"
            }), "), see ", _jsx(_components.a, {
              href: "#error-codes-for-the-agora-cloud-recording-service",
              children: "cloud recording service error code"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["If the error occurs in the other modules, see ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/reference/common-errors",
              children: "common errors"
            }), `.
If you do not find any error code in the above-mentioned pages, contact our technical support.`]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "stat"
        }), ": Number. The event status. 0 indicates normal status; other values indicate abnormal status."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "errorMsg"
        }), ": String. The detailed description of the error."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "cloud_recording_warning",
      children: "cloud_recording_warning"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 2 indicates that a warning occurs during the recording. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "cloud_recording_warning"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "module"
        }), ": Number. The name of the module where the warning occurs.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": The recorder."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": The uploader."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "warnCode"
        }), ": Number. The warning code."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the warning occurs in the recorder, ", _jsx(_components.code, {
          children: "warnCode"
        }), " indicates the warning code."]
      }), `
`, _jsxs(_components.li, {
        children: ["If the warning occurs in the uploader, see ", _jsx(_components.a, {
          href: "#warning-codes-related-to-uploading",
          children: "upload warning code"
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "cloud_recording_status_update",
      children: "cloud_recording_status_update"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 3 indicates that the method call fails because it does not match the status of the cloud recording service. For example, the method call of ", _jsx(_components.code, {
        children: "start"
      }), " fails if the service has already started. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "cloud_recording_status_update"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Number. The status of the cloud recording service. See ", _jsx(_components.a, {
          href: "#status-codes-for-the-agora-cloud-recording-service",
          children: "Status codes for the Agora Cloud Recording service"
        }), " for details."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "recordingMode"
        }), ": Number. The recording mode:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": Individual recording mode"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": Composite recording mode"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileList"
        }), ": String. The name of the M3U8 index file generated by the service."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "cloud_recording_file_infos",
      children: "cloud_recording_file_infos"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 4 indicates that an M3U8 playlist file is generated and uploaded. During a recording, the recording service repeatedly uploads and overwrites the M3U8 file, but this event is triggered the first time the M3U8 file is generated and uploaded."]
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
`, _jsx(_components.h4, {
      id: "session_exit",
      children: "session_exit"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 11 indicates that the cloud recording service has ended its tasks and exited. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "session_exit"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "exitStatus"
        }), ": Number. The exit status.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": A normal exit, indicating that the recording service exits after the recording ends and the recorded files are uploaded."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": An abnormal exit. An abnormal exist occurs when, for example, a parameter is incorrectly set."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "session_failover",
      children: "session_failover"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 12 indicates that the cloud recording service has enabled the high availability mechanism, where the fault processing center automatically switches to a new server within 90 seconds to resume the service. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "session_failover"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "newUid"
        }), ": Number. A randomly-generated recording user ID. After the high availability mechanism is enabled and the service is switched to a new server, the service rejoins the channel with a randomly-generated recording user ID, abandoning the old one."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "uploader_started",
      children: "uploader_started"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 30 indicates that the upload service starts, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "uploader_started"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Number. The event status. 0 indicates normal status; other values indicate abnormal status."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "uploaded",
      children: "uploaded"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 31 indicates that all the recorded files are uploaded to the specified third-party cloud storage, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "uploaded"
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
        }), ": JSONArray. An array that contains detailed information of each recorded file.", `
`, _jsxs(_components.ul, {
          children: [`
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
                  children: '"audio_and_video"'
                }), ": Video file (with audio)."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "uid"
            }), ": String. The user ID. The user whose audio or video is recorded in the file. In composite recording mode, ", _jsx(_components.code, {
              children: "uid"
            }), " is ", _jsx(_components.code, {
              children: '"0"'
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "mixedAllUser"
            }), ": Boolean. Whether the audio and video of all users are combined into a single file.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": All users are recorded in a single file."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": Each user is recorded separately."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "isPlayable"
            }), ": Boolean. Whether the file can be played online.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": The file can be played online."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": The file cannot be played online."]
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "examples",
      children: "Examples"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Individual recording:"
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
                  children: '  "msgName"'
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
                  children: '  "fileList"'
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.m3u8"'
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
                  children: '      "trackType"'
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
                  children: '      "uid"'
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
                  children: '"57297"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172871089"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.m3u8"'
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
                  children: '      "trackType"'
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
                  children: '      "uid"'
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
                  children: '"10230"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172871099"
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
                  children: "  ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "status"'
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
`, _jsx(_components.p, {
          children: "Composite recording with no MP4 files generated:"
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
                  children: '  "msgName"'
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
                  children: '  "fileList"'
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ": "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "xxx.m"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "3"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "u"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "8"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '",'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "trackType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '": "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "audio_and_video"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '",'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "uid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '": "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "0"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '",'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "mixedAllUser"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '": true,'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "isPlayable"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '": true,'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '      "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "sliceStartTime"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '": 1619170461821'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "  ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "status"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '": 0'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
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
`, _jsx(_components.p, {
          children: "Composite recording with MP4 files generated:"
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
                  children: '  "msgName"'
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
                  children: '  "fileList"'
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.mp4"'
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
                  children: '      "trackType"'
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
                  children: '"audio_and_video"'
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
                  children: '      "uid"'
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
                  children: '"0"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172632080"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.m3u8"'
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
                  children: '      "trackType"'
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
                  children: '"audio_and_video"'
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
                  children: '      "uid"'
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
                  children: '"0"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172632080"
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
                  children: "  ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "status"'
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
`, _jsx(_components.p, {
          children: "Web page recording with MP4 files generated:"
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
                  children: '  "msgName"'
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
                  children: '  "status"'
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
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "backuped",
      children: "backuped"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 32 indicates that all the recorded files are uploaded, but at least one of them is uploaded to Agora Cloud Backup. Agora Cloud Backup automatically uploads the files to the specified third-party cloud storage. ", _jsx(_components.code, {
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
        }), ": JSONArray. An array that contains detailed information of each recorded file.", `
`, _jsxs(_components.ul, {
          children: [`
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
                  children: '"audio_and_video"'
                }), ": Video file with audio."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "uid"
            }), ": String. The user ID. The user whose audio or video is recorded in the file. In composite recording mode, ", _jsx(_components.code, {
              children: "uid"
            }), " is ", _jsx(_components.code, {
              children: '"0"'
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "mixedAllUser"
            }), ": Boolean. Whether the audio and video of all users are combined into a single file.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": All users are recorded in a single file."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": Each user is recorded separately."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "isPlayable"
            }), ": Boolean. Whether the file can be played online.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": The file can be played online."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": The file cannot be played online."]
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
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "examples-1",
      children: "Examples"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Individual recording:"
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
                  children: '  "msgName"'
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
                  children: '  "fileList"'
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.m3u8"'
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
                  children: '      "trackType"'
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
                  children: '      "uid"'
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
                  children: '"57297"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172871089"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.m3u8"'
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
                  children: '      "trackType"'
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
                  children: '      "uid"'
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
                  children: '"10230"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172871099"
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
                  children: "  ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "status"'
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
`, _jsx(_components.p, {
          children: "Composite recording with no MP4 files generated:"
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
                  children: '  "msgName"'
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
                  children: '  "fileList"'
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.m3u8"'
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
                  children: '      "trackType"'
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
                  children: '"audio_and_video"'
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
                  children: '      "uid"'
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
                  children: '"0"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619170461821"
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
                  children: "  ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "status"'
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
`, _jsx(_components.p, {
          children: "Composite recording with MP4 files generated:"
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
                  children: '  "msgName"'
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
                  children: '  "fileList"'
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
                  children: "    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.mp4"'
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
                  children: '      "trackType"'
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
                  children: '"audio_and_video"'
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
                  children: '      "uid"'
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
                  children: '"0"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172632080"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    },"
                })
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '      "fileName"'
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
                  children: '"xxx.m3u8"'
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
                  children: '      "trackType"'
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
                  children: '"audio_and_video"'
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
                  children: '      "uid"'
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
                  children: '"0"'
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
                  children: '      "mixedAllUser"'
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
                  children: '      "isPlayable"'
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
                  children: '      "sliceStartTime"'
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
                  children: "1619172632080"
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
                  children: "  ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '  "status"'
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
`, _jsx(_components.p, {
          children: "Web page recording with MP4 files generated:"
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
                  children: '  "msgName"'
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
                  children: '  "status"'
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
                  children: "}"
                })
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "uploading_progress",
      children: "uploading_progress"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 33 indicates the current upload progress. The Agora server notifies you of the upload progress once every minute after the recording starts. ", _jsx(_components.code, {
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
`, _jsx(_components.h4, {
      id: "recorder_started",
      children: "recorder_started"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 40 indicates that the recording service starts, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "recorder_started"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Number. The event status. 0 indicates normal status; other values indicate abnormal status."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "recorder_leave",
      children: "recorder_leave"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 41 indicates that the recorder leaves the channel, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "recorder_leave"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "leaveCode"
        }), ": Number. The leave code. You can perform a bitwise AND operation on the code and each enum value, and those with non-zero results are the reason for the exit. For example, if you perform a bit-by-bit AND operation on code 6 (binary 110) and each enum value, only LEAVE_CODE_SIG (binary 10) and LEAVE_CODE_NO_USERS (binary 100) get a non-zero result. The reasons for exiting, in this case, include a timeout and a signal triggering the exit."]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Enumerator"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LEAVE_CODE_INIT"
            })
          }), _jsx(_components.td, {
            children: "0: The initialization fails."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LEAVE_CODE_SIG"
            })
          }), _jsx(_components.td, {
            children: "2 (binary 10): The AgoraCoreService process receives the SIGINT signal."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LEAVE_CODE_NO_USERS"
            })
          }), _jsx(_components.td, {
            children: "4 (binary 100): The recording server automatically leaves the channel and stops recording because the channel has no user."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LEAVE_CODE_TIMER_CATCH"
            })
          }), _jsx(_components.td, {
            children: "8 (binary 1000): Ignore it."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "LEAVE_CODE_CLIENT_LEAVE"
            })
          }), _jsxs(_components.td, {
            children: ["16 (binary 10000): The recording server calls the ", _jsx(_components.code, {
              children: "leaveChannel"
            }), " method to leave the channel."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "recorder_slice_start",
      children: "recorder_slice_start"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 42 indicates that the recording service syncs the information of the recorded files, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "recorder_slice_start"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "startUtcMs"
        }), "：Number. The time (ms) in UTC when the recording starts (the starting time of the first slice file)."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "discontinueUtcMs"
        }), "：Number. In most cases, this field is the same as ", _jsx(_components.code, {
          children: "startUtcMs"
        }), ". When the recording is interrupted, the Agora Cloud Recording service automatically resumes the recording and triggers this event. In this case, the value of this field is the time (ms) in UTC when the last slice file stops."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "mixedAllUser"
        }), ": Boolean. Whether the audio and video of all users are mixed into a single file.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), ": All users are recorded in a single file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), ": Each user is recorded separately."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "streamUid"
        }), ": String. User ID. The user whose audio or video is recorded in the file. In composite mode, ", _jsx(_components.code, {
          children: "streamUid"
        }), " is ", _jsx(_components.code, {
          children: "0"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "trackType"
        }), ": String. Type of the recorded file.", `
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
              children: '"audio_and_video"'
            }), ": Video file with audio."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For example, you start a recording session and get this event notification in which ", _jsx(_components.code, {
        children: "startUtcMs"
      }), " is the starting time of slice file 1. Then, the recording session continues and records slice file 2 to slice file N, during which the recording service does not send this notification again. If an error occurs when recording slice file N + 1, you lose this file and the recording session stops. Agora Cloud Recording automatically resumes the recording and triggers this event again. In the event notification, ", _jsx(_components.code, {
        children: "startUtcMs"
      }), " is the time when slice file N + 2 starts, and ", _jsx(_components.code, {
        children: "discontinueUtcMs"
      }), " is the time when slice file N stops."]
    }), `
`, _jsx(_components.h4, {
      id: "recorder_audio_stream_state_changed",
      children: "recorder_audio_stream_state_changed"
    }), `
`, _jsxs(_components.p, {
      children: ["eventType 43 indicates that the state of the audio stream has changed, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "recorder_audio_stream_state_changed"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "streamUid"
        }), ": String. The ID of the user whose audio is being recorded. In composite recording mode, ", _jsx(_components.code, {
          children: "streamUid"
        }), " can be ", _jsx(_components.code, {
          children: "0"
        }), ", which represents the combined stream of all or the specified user IDs."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "state"
        }), " : Number. Whether Agora Cloud Recording is receiving the audio stream.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": Agora Cloud Recording is receiving the audio stream."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": Agora Cloud Recording is not receiving the audio stream."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "UtcMs"
        }), ": Number. The UTC time (ms) when the state of the audio stream changes."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "recorder_video_stream_state_changed",
      children: "recorder_video_stream_state_changed"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 44 indicates that the state of the video stream has changed, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: "recorder_video_stream_state_changed"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "streamUid"
        }), ": String. The ID of the user whose video is being recorded. In composite recording mode, ", _jsx(_components.code, {
          children: "streamUid"
        }), " can be ", _jsx(_components.code, {
          children: "0"
        }), ", which represents the combined stream of all or the specified user IDs."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "state"
        }), ": Number. Whether Agora Cloud Recording is receiving the video stream.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "0"
            }), ": Agora Cloud Recording is receiving the video stream."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": Agora Cloud Recording is not receiving the video stream."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "UtcMs"
        }), ": Number. The UTC time (ms) when the state of the video stream changes."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "recorder_snapshot_file",
      children: "recorder_snapshot_file"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 45 indicates that the screenshot is captured successfully and uploaded to the third-party cloud storage. The ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"recorder_snapshot_file"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileName"
        }), ": String. The file name of the JPG file generated by the screenshot. The format is: ", _jsx(_components.code, {
          children: '"fileName": "<fileNamePrefix>/<file name>"'
        }), ". The ", _jsx(_components.code, {
          children: "fileNamePrefix"
        }), " refers to the path of the screenshot files in the third-party cloud storage."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "vod_started",
      children: "vod_started"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 60 indicates that the uploader for ApsaraVideo for VoD has started and successfully acquired the upload credential. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"vod_started"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "aliVodInfo"
        }), ": JSON. The information of the video to upload.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "videoId"
            }), ": String. The video ID."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "vod_triggered",
      children: "vod_triggered"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 61 indicates that all recorded files have been uploaded to ApsaraVideo for VoD. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"vod_triggered"'
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "web_recorder_started",
      children: "web_recorder_started"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 70 indicates that web page recording starts. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following field:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"web_recorder_started"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "recorderStartTime"
        }), ": Number. The time (UTC) when the recording starts. Unix timestamp in milliseconds."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "web_recorder_stopped",
      children: "web_recorder_stopped"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 71 indicates that web page recording stops. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following field:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"web_recorder_stopped"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "code"
        }), ": Number. The error code. If the error code is not ", _jsx(_components.code, {
          children: "0"
        }), ", it means that the web page recording stopped abnormally."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "message"
        }), ": String. The error message, which indicates the reason why the recording stopped normally or abnormally."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "details"
        }), ": String. A specific description of the error message, which provides a more complete description of the reason why the recording stopped normally or abnormally. You can take corresponding measures based on the information."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileList"
        }), ": JSONArray. An array that contains detailed information of each recorded file.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fileName"
            }), ": String. The name of the M3U8 file or MP4 file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "sliceStartTime"
            }), ": Number. The Unix timestamp (ms) when the recording starts."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Error Code"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Message"
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
              children: "0"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "ok"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Normal, the user stops the recording."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "1"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "max_recording_hour"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The recording time reaches the set maximum recording length (", _jsx(_components.code, {
              children: "maxRecordingHour"
            }), "), which causes the recording to stop."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "2"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "capability_limit"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The web page to be recorded uses an unsupported function, causing the web page recording to stop."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "3"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "start_engine_failed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording engine failed to start, causing the web page recording to stop."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "4"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "page_load_timeout"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["When you use the ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout",
              children: "web page load timeout detection"
            }), ", the web page load timeout causes the web page recording to stop."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "5"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "access_url_failed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An error occurred when opening the web page to be recorded, which causes the web page recording to stop."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "6"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "recorder_error "
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The web page recording has an error and cannot continue, causing the web page recording to stop."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "example-1",
      children: "Example"
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
              children: '  "msgName"'
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
              children: '"web_recorder_stopped"'
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
              children: '  "code"'
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
              children: "1"
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
              children: '  "message"'
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
              children: '"max_recording_hour"'
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
              children: '  "details"'
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
              children: '"max recording hour is 4"'
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
              children: '  "fileList"'
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
              children: "    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "filename"'
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
              children: '"test_p1627613634_www.m3u8"'
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
              children: '      "sliceStartTime"'
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
              children: "1627613641393"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "filename"'
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
              children: '"test_p1627613634_www_0.mp4"'
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
              children: '      "sliceStartTime"'
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
              children: "1627613641393"
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
              children: "  ]"
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
      id: "web_recorder_capability_limit",
      children: "web_recorder_capability_limit"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 72 indicates that the web page to record uses a feature that is unsupported by web page recording, and the recording service will stop immediately. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"web_recorder_capability_limit"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "limitType"
        }), ": String. The type of the feature that causes the failure.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"resolution"'
            }), ": The web page to record contains a video source with a resolution that exceeds 1280 × 720."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"WebGL"'
            }), ": The web page to record uses WebGL."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"bandwidth"'
            }), "：The upstream bandwidth exceeds 10 M, or the downstream bandwidth exceeds 1 G."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "web_recorder_reload",
      children: "web_recorder_reload"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 73 indicates a web page reload. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"web_recorder_reload"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "reason"
        }), ": String. The reason for the page reload:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"audio_silence"'
            }), ": Audio loss issue."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"page_load_timeout"'
            }), ": Web page load timeout. The callback returns this field only if the web page load detection function is enabled and there is a web page load timeout. See ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/customize-the-recording/webpage-load-timeout",
              children: "Web page load detection"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "transcoder_started",
      children: "transcoder_started"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 80 indicates that the transcoding starts, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following field:"]
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "msgName"
      }), ": String. The message name, ", _jsx(_components.code, {
        children: '"transcoder_started"'
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "transcoder_completed",
      children: "transcoder_completed"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 81 indicates that the transcoding completes, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"transcoder_completed"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "result"
        }), ": String. The result of the transcoding.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"all_success"'
            }), ": Successfully transcodes all files."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"partial_success"'
            }), ": Fails to transcode some files."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"fail"'
            }), ": The transcoding fails."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "uids"
        }), ": JSONArray. The array contains the transcoding result and the name of the MP4 file of a specific user ID.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "uid"
            }), ": String. The corresponding user ID of the MP4 file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "result"
            }), ": String. The result of transcoding.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"success"'
                }), ": Transcoding succeeds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"fail"'
                }), ": Transcoding fails."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fileList"
            }), ": JSONArray. The array contains information about the MP4 file.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "fileName"
                }), ": String. The name of the MP4 file."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "download_failed",
      children: "download_failed"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 90 indicates that the recording service fails to download the recorded files. This callback is triggered only once in the entire recording process, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"download_failed"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "vendor"
        }), ": Number. The name of the third-party cloud storage service, which is the same as ", _jsx(_components.code, {
          children: "vendor"
        }), " in your ", _jsx(_components.code, {
          children: "start"
        }), " request."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": Number. The region of the third-party cloud storage, which is the same as region set in your ", _jsx(_components.code, {
          children: "start"
        }), " request."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "bucket"
        }), ": String. The bucket name of the third-party cloud storage, which is the same as ", _jsx(_components.code, {
          children: "bucket"
        }), " set in your ", _jsx(_components.code, {
          children: "start"
        }), " request."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileName"
        }), ": String. The list of M3U8 or TS/WebM files that fail to be downloaded. The file names are separated by ", _jsx(_components.code, {
          children: '";"'
        }), "."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "rtmp_publish_status",
      children: "rtmp_publish_status"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 100 indicates the CDN streaming status of the web page recording. ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), "：String. The message name, ", _jsx(_components.code, {
          children: '"rtmp_publish_status"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "rtmpUrl"
        }), ": String. The CDN address you want to the push the stream to."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "status"
        }), ": Number. The CDN streaming status of the web page recording, including the following options:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"connecting"'
            }), ": Connecting to the CDN server."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"publishing"'
            }), ": Pushing the stream to the CDN server."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"onhold"'
            }), ": Pause streaming."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"disconnected"'
            }), ": Failed to connect to the CDN server. Agora recommends that you change the CDN address."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "postpone_transcode_final_result",
      children: "postpone_transcode_final_result"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "eventType"
      }), " 1001 indicates the final transcoding result, and ", _jsx(_components.code, {
        children: "details"
      }), " includes the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "msgName"
        }), ": String. The message name, ", _jsx(_components.code, {
          children: '"postpone_transcode_final_result"'
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "result"
        }), ": String. The final result of the transcoding.\\", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"total_success"'
            }), ": Successfully transcodes all files."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"partial_success"'
            }), ": Fails to transcode some files."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: '"failed"'
            }), ": The transcoding fails."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fileList"
        }), ": JSONArray. The array contains information about the generated MP4 files.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fileName"
            }), ": String. The name of an individual MP4 file."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "error-codes-related-to-uploading",
      children: "Error codes related to uploading"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Error code"
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
            children: "32"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An error occurs in the configuration of the third-party cloud storage."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "47"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording file upload fails."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "51"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "An error occurs when the uploader processes the recorded files."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "warning-codes-related-to-uploading",
      children: "Warning codes related to uploading"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Warning code"
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
            children: "31"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording service re-uploads the slice file to the specified cloud storage."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "32"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording service re-uploads the slice file to Agora Cloud Backup."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "error-codes-for-the-agora-cloud-recording-service",
      children: "Error codes for the Agora Cloud Recording service"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Error code"
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
            children: "50"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A timeout occurs in uploading the recorded files."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "52"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "A timeout occurs in starting the Cloud Recording Service."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "status-codes-for-the-agora-cloud-recording-service",
      children: "Status codes for the Agora Cloud Recording service"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Status code"
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
            children: "0"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording has not started."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The initialization is complete."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recorder is starting."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The uploader is ready."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recorder is ready."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The first recorded file is uploaded. After uploading the first file, the status is ", _jsx(_components.code, {
              children: "5"
            }), " when the recording is running."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording stops."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "7"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The Agora Cloud Recording service stops."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "8"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording is ready to exit."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "20"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The recording exits abnormally."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "ip-address-query-api",
      children: "IP address query API"
    }), `
`, _jsx(_components.p, {
      children: "If your server that receives notification callbacks is behind a firewall, call the IP address query API to retrieve the IP addresses of Notifications and configure your firewall to trust all these IP addresses."
    }), `
`, _jsx(_components.p, {
      children: "Agora occasionally adjusts the Notifications IP addresses. Best practice is to call this endpoint at least every 24 hours and automatically update the firewall configuration."
    }), `
`, _jsx(_components.h4, {
      id: "prototype",
      children: "Prototype"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["Method: ", _jsx(_components.code, {
          children: "GET"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["Endpoint: ", _jsx(_components.code, {
          children: "https://api.agora.io/v2/ncs/ip"
        })]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-1",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "Authorization: You must generate a Base64-encoded credential with the Customer ID and Customer Secret provided by Agora, and then pass the credential to the Authorization field in the HTTP request header."
    }), `
`, _jsx(_components.h4, {
      id: "request-body-1",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "This API has no body parameters."
    }), `
`, _jsx(_components.h4, {
      id: "response-body",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "When the request succeeds, the response body looks like the following:"
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
              children: '    "data"'
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
              children: '        "service"'
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
              children: '            "hosts"'
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
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "primaryIP"'
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
              children: '"xxx.xxx.xxx.xxx"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                    "primaryIP"'
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
              children: '"xxx.xxx.xxx.xxx"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "            ]"
            })
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
`, _jsx(_components.p, {
      children: "Each primary IP field shows an IP address of Notifications server. When you receive a response, you need to note the primary IP fields and add all these IP addresses to your firewall's allowed IP list."
    }), `
`, _jsx(_components.h3, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Notifications does not guarantee that notification callbacks arrive at your server in the same order as events occur. Implement a strategy to handle messages arriving out of order."
      }), `
`, _jsx(_components.li, {
        children: "For improved reliability of Notifications, your server may receive more than one notification callback for a single event. Your server must be able to handle repeated messages."
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
