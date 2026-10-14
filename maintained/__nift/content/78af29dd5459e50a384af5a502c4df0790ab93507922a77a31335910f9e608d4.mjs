import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Receive webhook notifications",
  description: "Receive notification of media push events in real time."
};
export let _markdown = `

A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Media Push events. With Notifications, you can subscribe to Media Push events and receive notifications in real time.

## Understand the tech [#understand-the-tech]

Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns \`200 Ok\` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users.

The following figure illustrates the workflow when Notifications is enabled for the specific Media Push events you subscribe to:

![media-push](https://assets-docs.agora.io/images/notification-center-service/ncs-media-push.svg)

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

Once Notifications is enabled, Agora SDRTN<sup>®</sup> sends notification callbacks as \`HTTPS POST\` requests to your webhook when events that you are subscribed to occur. The data format of the requests is JSON, the character encoding is \`UTF-8\`, and the signature algorithm is \`HMAC/SHA1\` or \`HMAC/SHA256\`.

For Notifications, a webhook is an endpoint on an \`HTTPS\` server that handles these requests. In a production environment you write this in your web infrastructure, for development purposes best practice is to create a simple local server and use a service such as [ngrok](https://ngrok.com/download) to supply a public URL that you register with Agora SDRTN<sup>®</sup> when you enable Notifications.

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

3. From the **Product** dropdown, select **Media Push**.

4. Copy the **Signing Secret**. You use this secret to [Add signature verification](#add-signature-verification).

5. Fill in the following:

   * **Region**: Select the region where your server that receives the notifications is located. Agora connects to the nearest Agora node server based on your selection.

   * **Receiving URL**: The \`HTTPS\` public address of your server that receives the notifications, for example \`https://1111-123-456-789-99.ap.ngrok.io/ncsNotify\`. Only \`HTTPS\` endpoints are supported.

   * **Subscribe to events**: Select all the events that you want to subscribe to.

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

To communicate securely between Notifications and your webhook, Agora SDRTN<sup>®</sup>  uses signatures for identity verification as follows:

1. When you configure Notifications in Agora Console, Agora SDRTN<sup>®</sup>  generates a secret you use for verification.
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

Notifications can notify your server of the following events when pushing media streams to the CDN:

| eventType | Event name                                                          | Description                                                                  |
| :-------- | :------------------------------------------------------------------ | :--------------------------------------------------------------------------- |
| \`1\`       | [Converter created](#converter-created)                             | A Converter is created by calling the \`Create\` method                        |
| \`2\`       | [Converter configuration changed](#converter-configuration-changed) | The configuration of the Converter changed.                                  |
| \`3\`       | [Converter status changed](#converter-status-changed)               | Running state of the Converter changed.                                      |
| \`4\`       | [Converter destroyed](#converter-destroyed)                         | Converter is destroyed, and the streams being pushed to the CDN are stopped. |

#### Converter created [#converter-created]

Notifications notifies your server of this event when you create a converter by calling the \`Create\` method.

The \`eventType\` is\`1 (Converter Created)\`. The following is an example the \`payload\`:

\`\`\`json
{
    "converter": {
        "id": "4c014467d647bb87b60b719f6fa57686",
        "name": "show68_vertical",
        "transcodeOptions": {
            "rtcChannel": "show68",
            "audioOptions": {
                "codecProfile": "HE-AAC",
                "sampleRate": 48000,
                "bitrate": 128,
                "audioChannels": 1,
                "rtcStreamUids": [
                    201,
                    202
                ]
            },
            "videoOptions": {
                "canvas": {
                    "width": 360,
                    "height": 640,
                    "color": 0
                },
                "layout": [
                    {
                        "rtcStreamUid": 201,
                        "region": {
                            "xPos": 0,
                            "yPos": 0,
                            "zIndex": 1,
                            "width": 360,
                            "height": 320
                        },
                        "placeholderImageUrl": "http://example.agora.io/host_placeholder.jpg"
                    },
                    {
                        "rtcStreamUid": 202,
                        "region": {
                            "xPos": 0,
                            "yPos": 320,
                            "zIndex": 1,
                            "width": 360,
                            "height": 320
                        }
                    },
                    {
                        "imageUrl": "http://example.agora.io/watchmark.jpg",
                        "region": {
                            "xPos": 0,
                            "yPos": 0,
                            "zIndex": 2,
                            "width": 36,
                            "height": 64
                        }
                    }
                ],
                "codecProfile": "High",
                "frameRate": 15,
                "bitrate": 400,
                "seiOptions": ""
            }
        },
        "rtmpUrl": "rtmp://example.agora.io/live/show68",
        "idleTimeout": 300,
        "createTs": 1591786766,
        "updateTs": 1591786835,
        "state": "connecting"
    },
    "lts": 1603456600,
    "xRequestId": "7bbcc8a4acce48c78b53c5a261a8a564"
}
\`\`\`

* The \`Converter\` contains the following fields:
  * \`id\`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.
  * \`name\`: String type field. The name of the Converter.
  * \`transcodeOptions\`: JSON Object type field. The Converter's transcoding configuration.
    * \`rtcChannel\`: String type field. The Agora channel name.
    * \`audioOptions\`: JSON Object type field. The audio transcoding configuration of the Converter.
      * \`codecProfile\`: String type field. The audio codec output by the Converter.
      * \`sampleRate\`: Number type field. The audio encoding sampling rate (Hz) output by the Converter.
      * \`bitrate\`: Number type field. The audio encoding rate (Kbps) output by the Converter.
      * \`audioChannels\`: Number type field. The number of audio channels output by the Converter.
      * \`rtcStreamUids\`: JSON Array type field. The user ID or Account of the user participating in the mixing.
    * \`videoOptions\`: JSON Object type field. The video transcoding configuration of the Converter.
      * \`canvas\`: JSON Object type field. The video canvas.
        * \`width\`: Number type field. The width of the canvas (px).
        * \`height\`: Number type field. The height of the canvas (px).
        * \`color\`: Number type field. The background color of the canvas. This is an RGB color value, expressed as a decimal number. For example, 255 represents blue.
      * \`layout\`: JSON Array type field. The content description of the video screen on the canvas. Two elements are supported:
        * RtcStreamView **element**. The video screen of each user on the canvas. It contains the following **fields**:
          * \`rtcStreamUid\`: Number type field. The user ID of the user to which the video stream belongs.
          * \`region\`: JSON Object type field. The display area of the user's video screen on the canvas.
            * \`xPos\`: Number type field. The x coordinate (px) of the screen on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen.
            * \`yPos\`: Number type field. The y coordinate (px) of the screen on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin and the y coordinate as the upper left corner of the screen.
            * \`zIndex\`: Number type field. The layer number of the screen. The value range is \\[0,100]. \`0\` represents the lowest layer. \`100\` represents the top layer.
            * \`width\`: Number type field. The width of the screen (px).
            * \`height\`: Number type field. The height of the screen (px).
          * \`placeholderImageUrl\`: String type field. The HTTP(S) URL of the substitute image.
        * ImageView **element**. The video picture on the canvas, which can be used as a watermark. It contains the following **fields**:
          * \`imageUrl\`: String type field. The HTTP(S) URL of the image.
          * \`region\`: JSON Object type field. The display area of the picture on the canvas.
            * \`xPos\`: Number type field. The x coordinate (px) of the image on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen.
            * \`yPos\`: Number type field. The y coordinate (px) of the picture on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin, and the y coordinate as the upper left corner of the screen.
            * \`zIndex\`: Number type field. The layer number of the image. The value range is \\[0,100]. \`0\` represents the lowest layer. \`100\` represents the top layer.
            * \`width\`: Number type field. The width of the image (px).
            * \`height\`: Number type field. The height of the image (px).
      * \`codecProfile\`: String type field. The encoding specification of the video.
      * \`frameRate\`: Number type field. The encoding frame rate (fps) of the video.
      * \`bitrate\`: Number type field. The audio encoding rate (Kbps) output by the Converter.
      * \`seiExtraInfo\`: String type field. The user SEI information in the video. This is used to send user-defined SEI information to the CDN.
    * \`rtmpUrl\`: (Required) String type field. The CDN streaming address.
    * \`idleTimeOut\`: Number type field. The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. After the idle state exceeds the set idleTimeOut, the Converter is destroyed automatically.
    * \`createTs\`: Number type field. The Unix timestamp (s) when the Converter was created.
    * \`updateTs\`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated.
    * \`state\`: String type field. The status of the Converter. If the state is reported \`"connecting"\`, the Converter is connecting to the Agora server.
* \`lts\`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server.
* \`xRequestId\`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the \`X-Request-ID\` field in the request header.

#### Converter configuration changed [#converter-configuration-changed]

Notifications notifies your server of this event when you update the configurations of a Converter by calling the \`Update\` method.

The \`eventType\` is \`2 (ConverterUpdatedEvent)\`.

* Update the \`converter.transcodeOptions.videoOptions.layout \` configuration. The following is an example \`payload\`:

  \`\`\`json
  {
      "converter": {
          "id": "4c014467d647bb87b60b719f6fa57686",
          "createTs": 1591786766,
          "updateTs": 1591786835,
          "state": "running",
          "transcodeOptions": {
              "rtcChannel": "show68",
              "videoOptions": {
                  "layout": [
                      {
                          "rtcStreamUid": 201,
                          "region": {
                              "xPos": 0,
                              "yPos": 0,
                              "zIndex": 1,
                              "width": 360,
                              "height": 320
                          },
                          "placeholderImageUrl": "http://example.agora.io/host_placeholder.jpg"
                      },
                      {
                          "rtcStreamUid": 202,
                          "region": {
                              "xPos": 0,
                              "yPos": 320,
                              "zIndex": 1,
                              "width": 360,
                              "height": 320
                          }
                      },
                      {
                          "imageUrl": "http://example.agora.io/watchmark.jpg",
                          "region": {
                              "xPos": 0,
                              "yPos": 0,
                              "zIndex": 2,
                              "width": 36,
                              "height": 64
                          }
                      }
                  ],
                  "codecProfile": "High",
                  "frameRate": 15,
                  "bitrate": 400,
                  "seiOptions": ""
              }
          }
      },
      "lts": 1603456600,
      "xRequestId": "7bbcc8a4acce48c78b53c5a261a8a564",
      "fields": "id,createTs,updateTs,state,transcodeOptions.videoOptions.layout"
  }
  \`\`\`

  * The \`Converter\` contains the following fields:
    * \`id\`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.
    * \`createTs\`: Number type field. The Unix timestamp (s) when the Converter was created.
    * \`updateTs\`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated.
    * \`state\`: String type field. The running status of the Converter. If \`the state is \`"running"\`, the Converter is running properly, and streams are being pushed to the CDN.\`
    * \`transcodeOptions\`: JSON Object type field. The Converter's transcoding configuration.
      * \`rtcChannel\`: String type field. The Agora channel name.
      * \`videoOptions\`: (Optional) JSON Object type field. The video transcoding configuration of the Converter.
        * \`layout\`: JSON Array type field. The content description of the video screen on the canvas. Two elements are supported:
          * \`RtcStreamView\` element. The video screen of each user on the canvas. It contains the following fields:
            * \`rtcStreamUid\`: Number type field. The user ID of the user to which the video stream belongs.
            * \`region\`: JSON Object type field. The display area of the user's video screen on the canvas.
              * \`xPos\`: Number type field. The x coordinate (px) of the screen on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen.
              * \`yPos\`: Number type field. The y coordinate (px) of the screen on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin and the y coordinate as the upper left corner of the screen.
              * \`zIndex\`: Number type field. The layer number of the screen. The value range is \\[0,100]. \`0\` represents the lowest layer. \`100\` represents the top layer.
              * \`width\`: Number type field. The width of the screen (px).
              * \`height\`: Number type field. The height of the screen (px).
            * \`placeholderImageUrl\`: String type field. The HTTP(S) URL of the substitute image.
          * \`ImageView\` element. The video picture on the canvas, which can be used as a watermark. It contains the following fields:
            * \`imageUrl\`: String type field. The HTTP(S) URL of the image.
            * \`region\`: JSON Object type field. The display area of the picture on the canvas.
              * \`xPos\`: Number type field. The x coordinate (px) of the image on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen.
              * \`yPos\`: Number type field. The y coordinate (px) of the picture on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin, and the y coordinate as the upper left corner of the screen.
              * \`zIndex\`: Number type field. The layer number of the image. The value range is \\[0,100]. \`0\` represents the lowest layer. \`100\` represents the top layer.
              * \`width\`: Number type field. The width of the image (px).
              * \`height\`: Number type field. The height of the image (px).
      * \`codecProfile\`: String type field. The encoding specification of the video.
      * \`frameRate\`: Number type field. The encoding frame rate (fps) of the video.
      * \`bitrate\`: Number type field. The encoding bitrate (Kbps) of the video.
      * \`seiExtraInfo\`: String type field. The user SEI information in the video. This is used to send user-defined SEI information to the CDN.
  * \`lts\`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server.
  * \`xRequestId\`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the \`X-Request-ID\` field in the request header.
  * \`fields\`: String type field. For the field mask of JSON encoding, please refer to the[ Google protobuf FieldMask document](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for details. This is used to specify a subset of the\`converter\` field to be returned. In this example, \`fields\` specifies a subset of the \`id\`, \`createTs\`, \`updateTs\`, and \`state\` fields in the converter field returned by the Agora server.

* Update the configuration of the list of user IDs or Accounts participating in the mixing in the \`converter.transcodeOptions.audioOptions\`. The following is an example \`payload\`:

  \`\`\`json
  {
      "converter": {
          "id": "4c014467d647bb87b60b719f6fa57686",
          "createTs": 1591786766,
          "updateTs": 1591786835,
          "state": "running",
          "transcodeOptions": {
              "rtcChannel": "show68",
              "audioOptions": {
                  "rtcStreamUids": [
                      201,
                      202
                  ]
              }
          }
      },
      "lts": 1603456600,
      "xRequestId": "7bbcc8a4acce48c78b53c5a261a8a564",
      "fields": "id,createTs,updateTs,state,transcodeOptions.audioOptions.rtcStreamUids"
  }
  \`\`\`

  * The \`Converter\` contains the following fields:
    * \`id\`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.
    * \`createTs\`: Number type field. The Unix timestamp (s) when the Converter was created.
    * \`updateTs\`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated.
    * \`state\`: String type field. The running status of the Converter. If \`the state is \`"running"\`, the Converter is running properly, and streams are being pushed to the CDN.\`
    * \`transcodeOptions\`: JSON Object type field. The Converter's transcoding configuration.
      * rtcChannel: String type field. The Agora channel name.
      * \`audioOptions\`: JSON Object type field. The audio transcoding configuration of the Converter.
        * \`rtcStreamUids\`: JSON Array type field. The user ID or Account of the user participating in the mixing.
  * \`lts\`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server.
  * \`xRequestId\`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the \`X-Request-ID\` field in the request header.
  * \`fields\`: String type field. For the field mask of JSON encoding, please refer to the[ Google protobuf FieldMask document](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for details. This is used to specify a subset of the\`converter\` field to be returned. In this example, \`fields\` specifies a subset of the \`id\`, \`createTs\`, \`updateTs\`, and \`state\`fields in the converter field returned by the Agora server.

* Update other configurations of the converter, such as \`converter.rtmpUrl\`:

  \`\`\`json
  {
      "converter": {
          "id": "4c014467d647bb87b60b719f6fa57686",
          "createTs": 1591786766,
          "updateTs": 1591786835,
          "state": "running",
          "rtmpUrl": "rtmp://example.agora.io/live/show68"
      },
      "lts": 1603456600,
      "xRequestId": "7bbcc8a4acce48c78b53c5a261a8a564",
      "fields": "id,createTs,updateTs,state,rtmpUrl"
  }
  \`\`\`

  * The \`Converter\` contains the following fields:
    * \`id\`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.
    * \`createTs\`: Number type field. The Unix timestamp (s) when the Converter was created.
    * \`updateTs\`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated.
    * \`state\`: String type field. The running status of the Converter. If \`the state is \`"running"\`, the Converter is running properly, and streams are being pushed to the CDN.\`
    * \`rtmpUrl\`: (Required) String type field. The CDN streaming address.
  * \`lts\`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server.
  * \`xRequestId\`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the \`X-Request-ID\` field in the request header.
  * \`fields\`: String type field. For the field mask of JSON encoding, please refer to the[ Google protobuf FieldMask document](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for details. This is used to specify a subset of the\`converter\` field to be returned. In this example, \`fields\` specifies a subset of the \`id\`, \`createTs\`, \`updateTs\`, and \`state\` fields in the converter field returned by the Agora server.

#### Converter status changed [#converter-status-changed]

Notifications notifies your server of this event when you have created a Converter and the running state of the Converter changes.

The \`eventType\` is \`3(ConverterStateChangedEvent)\`. The following is an example \`payload\`:

\`\`\`json
{
    "converter": {
        "id": "4c014467d647bb87b60b719f6fa57686",
        "createTs": 1603456600,
        "updateTs": 1603456600,
        "state": "running"
    },
    "lts": 1603456600,
    "fields": "id,createTs,updateTs,state"
}
\`\`\`

* The \`Converter\` contains the following fields:
  * \`id\`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.
  * \`createTs\`: Number type field. The Unix timestamp (s) when the Converter was created.
  * \`updateTs\`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated.
  * \`state\`: String type field. The running status of the Converter.
    * \`connecting\`: The Converter is connecting to the Agora server.
    * \`running\`: The Converter is running properly, and streams are being pushed to the CDN.
    * \`failed\`: There is a failure in pushing streams to the CDN.
* \`lts\`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server.
* \`fields\`: String type field. For the field mask of JSON encoding, please refer to the[ Google protobuf FieldMask document](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for details. This is used to specify a subset of the\`converter\` field to be returned. In this example, \`fields\` specifies a subset of the \`id\`, \`createTs\`, \`updateTs\`, and \`state\` fields in the converter field returned by the Agora server.

#### Converter destroyed [#converter-destroyed]

Notifications notifies your server of this event when a Converter is destroyed, and the streams being pushed to the CDN are stopped.

> For the destruction reason, see the\` destroyReason\` field.

The \`eventType\` is \`4(ConverterDestroyedEvent)\`. The following is an example \`payload\`:

\`\`\`json
{
    "converter": {
        "id": "4c014467d647bb87b60b719f6fa57686",
        "name": "show68_vertical",
        "createTs": 1603456600,
        "updateTs": 1603456600
    },
    "lts": 1603456600,
    "destroyReason": "Delete Request",
    "fields": "id,name,createTs,updateTs"
}
\`\`\`

* The \`Converter\` contains the following fields:
  * \`id\`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter.
  * \`name\`: String type field. The name of the Converter.
  * \`createTs\`: Number type field. The Unix timestamp (s) when the Converter was created.
  * \`updateTs\`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated.
* \`lts\`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server.
* \`destroyReason\`: String type field, which shows the reason for the destruction of the Converter.
  * \`Delete Request\`: The Agora server receives your Delete request.
  * \`Idle Timeout\`: After the idle state exceeds the set idleTimeOut, all users of the corresponding media streams processed by the Converter leave the channel.
  * \`Internal Error\`: Errors related to the Agora server. For example, hardware failure.
* \`fields\`: String type field. For the field mask of JSON encoding, please refer to the[ Google protobuf FieldMask document](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for details. This is used to specify a subset of the\`converter\` field to be returned. In this example, \`fields\` specifies a subset of the \`id\`, \`createTs\`, \`updateTs\`, and \`state\` fields in the converter field returned by the Agora server.

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
    content: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Media Push events. With Notifications, you can subscribe to Media Push events and receive notifications in real time."
  }, {
    heading: "understand-the-tech",
    content: "Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns `200 Ok` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users."
  }, {
    heading: "understand-the-tech",
    content: "The following figure illustrates the workflow when Notifications is enabled for the specific Media Push events you subscribe to:"
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
    content: "Once Notifications is enabled, Agora SDRTN<sup>®</sup> sends notification callbacks as `HTTPS POST` requests to your webhook when events that you are subscribed to occur. The data format of the requests is JSON, the character encoding is `UTF-8`, and the signature algorithm is `HMAC/SHA1` or `HMAC/SHA256`."
  }, {
    heading: "create-your-webhook",
    content: "For Notifications, a webhook is an endpoint on an `HTTPS` server that handles these requests. In a production environment you write this in your web infrastructure, for development purposes best practice is to create a simple local server and use a service such as ngrok to supply a public URL that you register with Agora SDRTN<sup>®</sup> when you enable Notifications."
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
    content: "From the **Product** dropdown, select **Media Push**."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Copy the **Signing Secret**. You use this secret to Add signature verification."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Fill in the following:"
  }, {
    heading: "set-up-webhook-notifications",
    content: "**Region**: Select the region where your server that receives the notifications is located. Agora connects to the nearest Agora node server based on your selection."
  }, {
    heading: "set-up-webhook-notifications",
    content: "**Receiving URL**: The `HTTPS` public address of your server that receives the notifications, for example `https://1111-123-456-789-99.ap.ngrok.io/ncsNotify`. Only `HTTPS` endpoints are supported."
  }, {
    heading: "set-up-webhook-notifications",
    content: "**Subscribe to events**: Select all the events that you want to subscribe to."
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
    content: "To communicate securely between Notifications and your webhook, Agora SDRTN<sup>®</sup>  uses signatures for identity verification as follows:"
  }, {
    heading: "add-signature-verification",
    content: "When you configure Notifications in Agora Console, Agora SDRTN<sup>®</sup>  generates a secret you use for verification."
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
    content: "Notifications can notify your server of the following events when pushing media streams to the CDN:"
  }, {
    heading: "event-types",
    content: "eventType"
  }, {
    heading: "event-types",
    content: "Event name"
  }, {
    heading: "event-types",
    content: "Description"
  }, {
    heading: "event-types",
    content: "`1`"
  }, {
    heading: "event-types",
    content: "Converter created"
  }, {
    heading: "event-types",
    content: "A Converter is created by calling the `Create` method"
  }, {
    heading: "event-types",
    content: "`2`"
  }, {
    heading: "event-types",
    content: "Converter configuration changed"
  }, {
    heading: "event-types",
    content: "The configuration of the Converter changed."
  }, {
    heading: "event-types",
    content: "`3`"
  }, {
    heading: "event-types",
    content: "Converter status changed"
  }, {
    heading: "event-types",
    content: "Running state of the Converter changed."
  }, {
    heading: "event-types",
    content: "`4`"
  }, {
    heading: "event-types",
    content: "Converter destroyed"
  }, {
    heading: "event-types",
    content: "Converter is destroyed, and the streams being pushed to the CDN are stopped."
  }, {
    heading: "converter-created",
    content: "Notifications notifies your server of this event when you create a converter by calling the `Create` method."
  }, {
    heading: "converter-created",
    content: "The `eventType` is`1 (Converter Created)`. The following is an example the `payload`:"
  }, {
    heading: "converter-created",
    content: "The `Converter` contains the following fields:"
  }, {
    heading: "converter-created",
    content: "`id`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "converter-created",
    content: "`name`: String type field. The name of the Converter."
  }, {
    heading: "converter-created",
    content: "`transcodeOptions`: JSON Object type field. The Converter's transcoding configuration."
  }, {
    heading: "converter-created",
    content: "`rtcChannel`: String type field. The Agora channel name."
  }, {
    heading: "converter-created",
    content: "`audioOptions`: JSON Object type field. The audio transcoding configuration of the Converter."
  }, {
    heading: "converter-created",
    content: "`codecProfile`: String type field. The audio codec output by the Converter."
  }, {
    heading: "converter-created",
    content: "`sampleRate`: Number type field. The audio encoding sampling rate (Hz) output by the Converter."
  }, {
    heading: "converter-created",
    content: "`bitrate`: Number type field. The audio encoding rate (Kbps) output by the Converter."
  }, {
    heading: "converter-created",
    content: "`audioChannels`: Number type field. The number of audio channels output by the Converter."
  }, {
    heading: "converter-created",
    content: "`rtcStreamUids`: JSON Array type field. The user ID or Account of the user participating in the mixing."
  }, {
    heading: "converter-created",
    content: "`videoOptions`: JSON Object type field. The video transcoding configuration of the Converter."
  }, {
    heading: "converter-created",
    content: "`canvas`: JSON Object type field. The video canvas."
  }, {
    heading: "converter-created",
    content: "`width`: Number type field. The width of the canvas (px)."
  }, {
    heading: "converter-created",
    content: "`height`: Number type field. The height of the canvas (px)."
  }, {
    heading: "converter-created",
    content: "`color`: Number type field. The background color of the canvas. This is an RGB color value, expressed as a decimal number. For example, 255 represents blue."
  }, {
    heading: "converter-created",
    content: "`layout`: JSON Array type field. The content description of the video screen on the canvas. Two elements are supported:"
  }, {
    heading: "converter-created",
    content: "RtcStreamView **element**. The video screen of each user on the canvas. It contains the following **fields**:"
  }, {
    heading: "converter-created",
    content: "`rtcStreamUid`: Number type field. The user ID of the user to which the video stream belongs."
  }, {
    heading: "converter-created",
    content: "`region`: JSON Object type field. The display area of the user's video screen on the canvas."
  }, {
    heading: "converter-created",
    content: "`xPos`: Number type field. The x coordinate (px) of the screen on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-created",
    content: "`yPos`: Number type field. The y coordinate (px) of the screen on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin and the y coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-created",
    content: "`zIndex`: Number type field. The layer number of the screen. The value range is \\[0,100]. `0` represents the lowest layer. `100` represents the top layer."
  }, {
    heading: "converter-created",
    content: "`width`: Number type field. The width of the screen (px)."
  }, {
    heading: "converter-created",
    content: "`height`: Number type field. The height of the screen (px)."
  }, {
    heading: "converter-created",
    content: "`placeholderImageUrl`: String type field. The HTTP(S) URL of the substitute image."
  }, {
    heading: "converter-created",
    content: "ImageView **element**. The video picture on the canvas, which can be used as a watermark. It contains the following **fields**:"
  }, {
    heading: "converter-created",
    content: "`imageUrl`: String type field. The HTTP(S) URL of the image."
  }, {
    heading: "converter-created",
    content: "`region`: JSON Object type field. The display area of the picture on the canvas."
  }, {
    heading: "converter-created",
    content: "`xPos`: Number type field. The x coordinate (px) of the image on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-created",
    content: "`yPos`: Number type field. The y coordinate (px) of the picture on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin, and the y coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-created",
    content: "`zIndex`: Number type field. The layer number of the image. The value range is \\[0,100]. `0` represents the lowest layer. `100` represents the top layer."
  }, {
    heading: "converter-created",
    content: "`width`: Number type field. The width of the image (px)."
  }, {
    heading: "converter-created",
    content: "`height`: Number type field. The height of the image (px)."
  }, {
    heading: "converter-created",
    content: "`codecProfile`: String type field. The encoding specification of the video."
  }, {
    heading: "converter-created",
    content: "`frameRate`: Number type field. The encoding frame rate (fps) of the video."
  }, {
    heading: "converter-created",
    content: "`bitrate`: Number type field. The audio encoding rate (Kbps) output by the Converter."
  }, {
    heading: "converter-created",
    content: "`seiExtraInfo`: String type field. The user SEI information in the video. This is used to send user-defined SEI information to the CDN."
  }, {
    heading: "converter-created",
    content: "`rtmpUrl`: (Required) String type field. The CDN streaming address."
  }, {
    heading: "converter-created",
    content: "`idleTimeOut`: Number type field. The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. After the idle state exceeds the set idleTimeOut, the Converter is destroyed automatically."
  }, {
    heading: "converter-created",
    content: "`createTs`: Number type field. The Unix timestamp (s) when the Converter was created."
  }, {
    heading: "converter-created",
    content: "`updateTs`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."
  }, {
    heading: "converter-created",
    content: '`state`: String type field. The status of the Converter. If the state is reported `"connecting"`, the Converter is connecting to the Agora server.'
  }, {
    heading: "converter-created",
    content: "`lts`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."
  }, {
    heading: "converter-created",
    content: "`xRequestId`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the `X-Request-ID` field in the request header."
  }, {
    heading: "converter-configuration-changed",
    content: "Notifications notifies your server of this event when you update the configurations of a Converter by calling the `Update` method."
  }, {
    heading: "converter-configuration-changed",
    content: "The `eventType` is `2 (ConverterUpdatedEvent)`."
  }, {
    heading: "converter-configuration-changed",
    content: "Update the `converter.transcodeOptions.videoOptions.layout ` configuration. The following is an example `payload`:"
  }, {
    heading: "converter-configuration-changed",
    content: "The `Converter` contains the following fields:"
  }, {
    heading: "converter-configuration-changed",
    content: "`id`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "converter-configuration-changed",
    content: "`createTs`: Number type field. The Unix timestamp (s) when the Converter was created."
  }, {
    heading: "converter-configuration-changed",
    content: "`updateTs`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."
  }, {
    heading: "converter-configuration-changed",
    content: '`state`: String type field. The running status of the Converter. If `the state is `"running"`, the Converter is running properly, and streams are being pushed to the CDN.`'
  }, {
    heading: "converter-configuration-changed",
    content: "`transcodeOptions`: JSON Object type field. The Converter's transcoding configuration."
  }, {
    heading: "converter-configuration-changed",
    content: "`rtcChannel`: String type field. The Agora channel name."
  }, {
    heading: "converter-configuration-changed",
    content: "`videoOptions`: (Optional) JSON Object type field. The video transcoding configuration of the Converter."
  }, {
    heading: "converter-configuration-changed",
    content: "`layout`: JSON Array type field. The content description of the video screen on the canvas. Two elements are supported:"
  }, {
    heading: "converter-configuration-changed",
    content: "`RtcStreamView` element. The video screen of each user on the canvas. It contains the following fields:"
  }, {
    heading: "converter-configuration-changed",
    content: "`rtcStreamUid`: Number type field. The user ID of the user to which the video stream belongs."
  }, {
    heading: "converter-configuration-changed",
    content: "`region`: JSON Object type field. The display area of the user's video screen on the canvas."
  }, {
    heading: "converter-configuration-changed",
    content: "`xPos`: Number type field. The x coordinate (px) of the screen on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-configuration-changed",
    content: "`yPos`: Number type field. The y coordinate (px) of the screen on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin and the y coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-configuration-changed",
    content: "`zIndex`: Number type field. The layer number of the screen. The value range is \\[0,100]. `0` represents the lowest layer. `100` represents the top layer."
  }, {
    heading: "converter-configuration-changed",
    content: "`width`: Number type field. The width of the screen (px)."
  }, {
    heading: "converter-configuration-changed",
    content: "`height`: Number type field. The height of the screen (px)."
  }, {
    heading: "converter-configuration-changed",
    content: "`placeholderImageUrl`: String type field. The HTTP(S) URL of the substitute image."
  }, {
    heading: "converter-configuration-changed",
    content: "`ImageView` element. The video picture on the canvas, which can be used as a watermark. It contains the following fields:"
  }, {
    heading: "converter-configuration-changed",
    content: "`imageUrl`: String type field. The HTTP(S) URL of the image."
  }, {
    heading: "converter-configuration-changed",
    content: "`region`: JSON Object type field. The display area of the picture on the canvas."
  }, {
    heading: "converter-configuration-changed",
    content: "`xPos`: Number type field. The x coordinate (px) of the image on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-configuration-changed",
    content: "`yPos`: Number type field. The y coordinate (px) of the picture on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin, and the y coordinate as the upper left corner of the screen."
  }, {
    heading: "converter-configuration-changed",
    content: "`zIndex`: Number type field. The layer number of the image. The value range is \\[0,100]. `0` represents the lowest layer. `100` represents the top layer."
  }, {
    heading: "converter-configuration-changed",
    content: "`width`: Number type field. The width of the image (px)."
  }, {
    heading: "converter-configuration-changed",
    content: "`height`: Number type field. The height of the image (px)."
  }, {
    heading: "converter-configuration-changed",
    content: "`codecProfile`: String type field. The encoding specification of the video."
  }, {
    heading: "converter-configuration-changed",
    content: "`frameRate`: Number type field. The encoding frame rate (fps) of the video."
  }, {
    heading: "converter-configuration-changed",
    content: "`bitrate`: Number type field. The encoding bitrate (Kbps) of the video."
  }, {
    heading: "converter-configuration-changed",
    content: "`seiExtraInfo`: String type field. The user SEI information in the video. This is used to send user-defined SEI information to the CDN."
  }, {
    heading: "converter-configuration-changed",
    content: "`lts`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."
  }, {
    heading: "converter-configuration-changed",
    content: "`xRequestId`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the `X-Request-ID` field in the request header."
  }, {
    heading: "converter-configuration-changed",
    content: "`fields`: String type field. For the field mask of JSON encoding, please refer to the Google protobuf FieldMask document for details. This is used to specify a subset of the`converter` field to be returned. In this example, `fields` specifies a subset of the `id`, `createTs`, `updateTs`, and `state` fields in the converter field returned by the Agora server."
  }, {
    heading: "converter-configuration-changed",
    content: "Update the configuration of the list of user IDs or Accounts participating in the mixing in the `converter.transcodeOptions.audioOptions`. The following is an example `payload`:"
  }, {
    heading: "converter-configuration-changed",
    content: "The `Converter` contains the following fields:"
  }, {
    heading: "converter-configuration-changed",
    content: "`id`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "converter-configuration-changed",
    content: "`createTs`: Number type field. The Unix timestamp (s) when the Converter was created."
  }, {
    heading: "converter-configuration-changed",
    content: "`updateTs`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."
  }, {
    heading: "converter-configuration-changed",
    content: '`state`: String type field. The running status of the Converter. If `the state is `"running"`, the Converter is running properly, and streams are being pushed to the CDN.`'
  }, {
    heading: "converter-configuration-changed",
    content: "`transcodeOptions`: JSON Object type field. The Converter's transcoding configuration."
  }, {
    heading: "converter-configuration-changed",
    content: "rtcChannel: String type field. The Agora channel name."
  }, {
    heading: "converter-configuration-changed",
    content: "`audioOptions`: JSON Object type field. The audio transcoding configuration of the Converter."
  }, {
    heading: "converter-configuration-changed",
    content: "`rtcStreamUids`: JSON Array type field. The user ID or Account of the user participating in the mixing."
  }, {
    heading: "converter-configuration-changed",
    content: "`lts`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."
  }, {
    heading: "converter-configuration-changed",
    content: "`xRequestId`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the `X-Request-ID` field in the request header."
  }, {
    heading: "converter-configuration-changed",
    content: "`fields`: String type field. For the field mask of JSON encoding, please refer to the Google protobuf FieldMask document for details. This is used to specify a subset of the`converter` field to be returned. In this example, `fields` specifies a subset of the `id`, `createTs`, `updateTs`, and `state`fields in the converter field returned by the Agora server."
  }, {
    heading: "converter-configuration-changed",
    content: "Update other configurations of the converter, such as `converter.rtmpUrl`:"
  }, {
    heading: "converter-configuration-changed",
    content: "The `Converter` contains the following fields:"
  }, {
    heading: "converter-configuration-changed",
    content: "`id`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "converter-configuration-changed",
    content: "`createTs`: Number type field. The Unix timestamp (s) when the Converter was created."
  }, {
    heading: "converter-configuration-changed",
    content: "`updateTs`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."
  }, {
    heading: "converter-configuration-changed",
    content: '`state`: String type field. The running status of the Converter. If `the state is `"running"`, the Converter is running properly, and streams are being pushed to the CDN.`'
  }, {
    heading: "converter-configuration-changed",
    content: "`rtmpUrl`: (Required) String type field. The CDN streaming address."
  }, {
    heading: "converter-configuration-changed",
    content: "`lts`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."
  }, {
    heading: "converter-configuration-changed",
    content: "`xRequestId`: String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the `X-Request-ID` field in the request header."
  }, {
    heading: "converter-configuration-changed",
    content: "`fields`: String type field. For the field mask of JSON encoding, please refer to the Google protobuf FieldMask document for details. This is used to specify a subset of the`converter` field to be returned. In this example, `fields` specifies a subset of the `id`, `createTs`, `updateTs`, and `state` fields in the converter field returned by the Agora server."
  }, {
    heading: "converter-status-changed",
    content: "Notifications notifies your server of this event when you have created a Converter and the running state of the Converter changes."
  }, {
    heading: "converter-status-changed",
    content: "The `eventType` is `3(ConverterStateChangedEvent)`. The following is an example `payload`:"
  }, {
    heading: "converter-status-changed",
    content: "The `Converter` contains the following fields:"
  }, {
    heading: "converter-status-changed",
    content: "`id`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "converter-status-changed",
    content: "`createTs`: Number type field. The Unix timestamp (s) when the Converter was created."
  }, {
    heading: "converter-status-changed",
    content: "`updateTs`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."
  }, {
    heading: "converter-status-changed",
    content: "`state`: String type field. The running status of the Converter."
  }, {
    heading: "converter-status-changed",
    content: "`connecting`: The Converter is connecting to the Agora server."
  }, {
    heading: "converter-status-changed",
    content: "`running`: The Converter is running properly, and streams are being pushed to the CDN."
  }, {
    heading: "converter-status-changed",
    content: "`failed`: There is a failure in pushing streams to the CDN."
  }, {
    heading: "converter-status-changed",
    content: "`lts`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."
  }, {
    heading: "converter-status-changed",
    content: "`fields`: String type field. For the field mask of JSON encoding, please refer to the Google protobuf FieldMask document for details. This is used to specify a subset of the`converter` field to be returned. In this example, `fields` specifies a subset of the `id`, `createTs`, `updateTs`, and `state` fields in the converter field returned by the Agora server."
  }, {
    heading: "converter-destroyed",
    content: "Notifications notifies your server of this event when a Converter is destroyed, and the streams being pushed to the CDN are stopped."
  }, {
    heading: "converter-destroyed",
    content: "> For the destruction reason, see the` destroyReason` field."
  }, {
    heading: "converter-destroyed",
    content: "The `eventType` is `4(ConverterDestroyedEvent)`. The following is an example `payload`:"
  }, {
    heading: "converter-destroyed",
    content: "The `Converter` contains the following fields:"
  }, {
    heading: "converter-destroyed",
    content: "`id`: String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."
  }, {
    heading: "converter-destroyed",
    content: "`name`: String type field. The name of the Converter."
  }, {
    heading: "converter-destroyed",
    content: "`createTs`: Number type field. The Unix timestamp (s) when the Converter was created."
  }, {
    heading: "converter-destroyed",
    content: "`updateTs`: Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."
  }, {
    heading: "converter-destroyed",
    content: "`lts`: Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."
  }, {
    heading: "converter-destroyed",
    content: "`destroyReason`: String type field, which shows the reason for the destruction of the Converter."
  }, {
    heading: "converter-destroyed",
    content: "`Delete Request`: The Agora server receives your Delete request."
  }, {
    heading: "converter-destroyed",
    content: "`Idle Timeout`: After the idle state exceeds the set idleTimeOut, all users of the corresponding media streams processed by the Converter leave the channel."
  }, {
    heading: "converter-destroyed",
    content: "`Internal Error`: Errors related to the Agora server. For example, hardware failure."
  }, {
    heading: "converter-destroyed",
    content: "`fields`: String type field. For the field mask of JSON encoding, please refer to the Google protobuf FieldMask document for details. This is used to specify a subset of the`converter` field to be returned. In this example, `fields` specifies a subset of the `id`, `createTs`, `updateTs`, and `state` fields in the converter field returned by the Agora server."
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
    id: "converter-created",
    content: "Converter created"
  }, {
    id: "converter-configuration-changed",
    content: "Converter configuration changed"
  }, {
    id: "converter-status-changed",
    content: "Converter status changed"
  }, {
    id: "converter-destroyed",
    content: "Converter destroyed"
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
  url: "#converter-created",
  title: _jsx(_Fragment, {
    children: "Converter created"
  })
}, {
  depth: 4,
  url: "#converter-configuration-changed",
  title: _jsx(_Fragment, {
    children: "Converter configuration changed"
  })
}, {
  depth: 4,
  url: "#converter-status-changed",
  title: _jsx(_Fragment, {
    children: "Converter status changed"
  })
}, {
  depth: 4,
  url: "#converter-destroyed",
  title: _jsx(_Fragment, {
    children: "Converter destroyed"
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
    blockquote: "blockquote",
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
      children: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Media Push events. With Notifications, you can subscribe to Media Push events and receive notifications in real time."
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
      children: "The following figure illustrates the workflow when Notifications is enabled for the specific Media Push events you subscribe to:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/notification-center-service/ncs-media-push.svg",
        alt: "media-push"
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
      children: ["Once Notifications is enabled, Agora SDRTN", "®", " sends notification callbacks as ", _jsx(_components.code, {
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
      }), " to supply a public URL that you register with Agora SDRTN", "®", " when you enable Notifications."]
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
          children: ["From the ", _jsx(_components.strong, {
            children: "Product"
          }), " dropdown, select ", _jsx(_components.strong, {
            children: "Media Push"
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
                children: "Region"
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
                children: "Subscribe to events"
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
`, _jsxs(_components.p, {
      children: ["To communicate securely between Notifications and your webhook, Agora SDRTN", "®", "  uses signatures for identity verification as follows:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["When you configure Notifications in Agora Console, Agora SDRTN", "®", "  generates a secret you use for verification."]
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
      children: "Notifications can notify your server of the following events when pushing media streams to the CDN:"
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
              children: "1"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.a, {
              href: "#converter-created",
              children: "Converter created"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["A Converter is created by calling the ", _jsx(_components.code, {
              children: "Create"
            }), " method"]
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
            children: _jsx(_components.a, {
              href: "#converter-configuration-changed",
              children: "Converter configuration changed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The configuration of the Converter changed."
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
            children: _jsx(_components.a, {
              href: "#converter-status-changed",
              children: "Converter status changed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Running state of the Converter changed."
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
            children: _jsx(_components.a, {
              href: "#converter-destroyed",
              children: "Converter destroyed"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Converter is destroyed, and the streams being pushed to the CDN are stopped."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "converter-created",
      children: "Converter created"
    }), `
`, _jsxs(_components.p, {
      children: ["Notifications notifies your server of this event when you create a converter by calling the ", _jsx(_components.code, {
        children: "Create"
      }), " method."]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " is", _jsx(_components.code, {
        children: "1 (Converter Created)"
      }), ". The following is an example the ", _jsx(_components.code, {
        children: "payload"
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
              children: '    "converter"'
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
              children: '        "id"'
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
              children: '"4c014467d647bb87b60b719f6fa57686"'
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
              children: '        "name"'
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
              children: '"show68_vertical"'
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
              children: '        "transcodeOptions"'
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
              children: '            "rtcChannel"'
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
              children: '"show68"'
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
              children: '            "audioOptions"'
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
              children: '                "codecProfile"'
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
              children: '"HE-AAC"'
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
              children: '                "sampleRate"'
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
              children: "48000"
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
              children: '                "bitrate"'
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
              children: "128"
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
              children: '                "audioChannels"'
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
              children: '                "rtcStreamUids"'
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                    201"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "                    202"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                ]"
            })
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "videoOptions"'
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
              children: '                "canvas"'
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
              children: '                    "width"'
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
              children: "360"
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
              children: '                    "height"'
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
              children: "640"
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
              children: '                    "color"'
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
              children: "                },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "layout"'
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
              children: "                    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                        "rtcStreamUid"'
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
              children: "201"
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
              children: '                        "region"'
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
              children: '                            "xPos"'
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
              children: '                            "yPos"'
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
              children: '                            "zIndex"'
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
              children: '                            "width"'
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
              children: "360"
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
              children: '                            "height"'
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
              children: "320"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                        "placeholderImageUrl"'
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
              children: '"http://example.agora.io/host_placeholder.jpg"'
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                        "rtcStreamUid"'
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
              children: "202"
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
              children: '                        "region"'
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
              children: '                            "xPos"'
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
              children: '                            "yPos"'
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
              children: "320"
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
              children: '                            "zIndex"'
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
              children: '                            "width"'
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
              children: "360"
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
              children: '                            "height"'
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
              children: "320"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                    },"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                    {"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                        "imageUrl"'
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
              children: '"http://example.agora.io/watchmark.jpg"'
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
              children: '                        "region"'
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
              children: '                            "xPos"'
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
              children: '                            "yPos"'
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
              children: '                            "zIndex"'
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
              children: '                            "width"'
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
              children: "36"
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
              children: '                            "height"'
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
              children: "64"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                        }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                    }"
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "                ],"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '                "codecProfile"'
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
              children: '"High"'
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
              children: '                "frameRate"'
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
              children: "15"
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
              children: '                "bitrate"'
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
              children: "400"
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
              children: '                "seiOptions"'
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
              children: '""'
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
              children: "        },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "rtmpUrl"'
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
              children: '"rtmp://example.agora.io/live/show68"'
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
              children: '        "idleTimeout"'
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
              children: "300"
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
              children: '        "createTs"'
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
              children: "1591786766"
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
              children: '        "updateTs"'
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
              children: "1591786835"
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
              children: '        "state"'
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
              children: '"connecting"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "lts"'
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
              children: "1603456600"
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
              children: '    "xRequestId"'
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
              children: '"7bbcc8a4acce48c78b53c5a261a8a564"'
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
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "Converter"
        }), " contains the following fields:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "id"
            }), ": String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "name"
            }), ": String type field. The name of the Converter."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "transcodeOptions"
            }), ": JSON Object type field. The Converter's transcoding configuration.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtcChannel"
                }), ": String type field. The Agora channel name."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "audioOptions"
                }), ": JSON Object type field. The audio transcoding configuration of the Converter.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "codecProfile"
                    }), ": String type field. The audio codec output by the Converter."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "sampleRate"
                    }), ": Number type field. The audio encoding sampling rate (Hz) output by the Converter."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "bitrate"
                    }), ": Number type field. The audio encoding rate (Kbps) output by the Converter."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "audioChannels"
                    }), ": Number type field. The number of audio channels output by the Converter."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "rtcStreamUids"
                    }), ": JSON Array type field. The user ID or Account of the user participating in the mixing."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "videoOptions"
                }), ": JSON Object type field. The video transcoding configuration of the Converter.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "canvas"
                    }), ": JSON Object type field. The video canvas.", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.code, {
                          children: "width"
                        }), ": Number type field. The width of the canvas (px)."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.code, {
                          children: "height"
                        }), ": Number type field. The height of the canvas (px)."]
                      }), `
`, _jsxs(_components.li, {
                        children: [_jsx(_components.code, {
                          children: "color"
                        }), ": Number type field. The background color of the canvas. This is an RGB color value, expressed as a decimal number. For example, 255 represents blue."]
                      }), `
`]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "layout"
                    }), ": JSON Array type field. The content description of the video screen on the canvas. Two elements are supported:", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: ["RtcStreamView ", _jsx(_components.strong, {
                          children: "element"
                        }), ". The video screen of each user on the canvas. It contains the following ", _jsx(_components.strong, {
                          children: "fields"
                        }), ":", `
`, _jsxs(_components.ul, {
                          children: [`
`, _jsxs(_components.li, {
                            children: [_jsx(_components.code, {
                              children: "rtcStreamUid"
                            }), ": Number type field. The user ID of the user to which the video stream belongs."]
                          }), `
`, _jsxs(_components.li, {
                            children: [_jsx(_components.code, {
                              children: "region"
                            }), ": JSON Object type field. The display area of the user's video screen on the canvas.", `
`, _jsxs(_components.ul, {
                              children: [`
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "xPos"
                                }), ": Number type field. The x coordinate (px) of the screen on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "yPos"
                                }), ": Number type field. The y coordinate (px) of the screen on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin and the y coordinate as the upper left corner of the screen."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "zIndex"
                                }), ": Number type field. The layer number of the screen. The value range is [0,100]. ", _jsx(_components.code, {
                                  children: "0"
                                }), " represents the lowest layer. ", _jsx(_components.code, {
                                  children: "100"
                                }), " represents the top layer."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "width"
                                }), ": Number type field. The width of the screen (px)."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "height"
                                }), ": Number type field. The height of the screen (px)."]
                              }), `
`]
                            }), `
`]
                          }), `
`, _jsxs(_components.li, {
                            children: [_jsx(_components.code, {
                              children: "placeholderImageUrl"
                            }), ": String type field. The HTTP(S) URL of the substitute image."]
                          }), `
`]
                        }), `
`]
                      }), `
`, _jsxs(_components.li, {
                        children: ["ImageView ", _jsx(_components.strong, {
                          children: "element"
                        }), ". The video picture on the canvas, which can be used as a watermark. It contains the following ", _jsx(_components.strong, {
                          children: "fields"
                        }), ":", `
`, _jsxs(_components.ul, {
                          children: [`
`, _jsxs(_components.li, {
                            children: [_jsx(_components.code, {
                              children: "imageUrl"
                            }), ": String type field. The HTTP(S) URL of the image."]
                          }), `
`, _jsxs(_components.li, {
                            children: [_jsx(_components.code, {
                              children: "region"
                            }), ": JSON Object type field. The display area of the picture on the canvas.", `
`, _jsxs(_components.ul, {
                              children: [`
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "xPos"
                                }), ": Number type field. The x coordinate (px) of the image on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "yPos"
                                }), ": Number type field. The y coordinate (px) of the picture on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin, and the y coordinate as the upper left corner of the screen."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "zIndex"
                                }), ": Number type field. The layer number of the image. The value range is [0,100]. ", _jsx(_components.code, {
                                  children: "0"
                                }), " represents the lowest layer. ", _jsx(_components.code, {
                                  children: "100"
                                }), " represents the top layer."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "width"
                                }), ": Number type field. The width of the image (px)."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "height"
                                }), ": Number type field. The height of the image (px)."]
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
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "codecProfile"
                    }), ": String type field. The encoding specification of the video."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "frameRate"
                    }), ": Number type field. The encoding frame rate (fps) of the video."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "bitrate"
                    }), ": Number type field. The audio encoding rate (Kbps) output by the Converter."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "seiExtraInfo"
                    }), ": String type field. The user SEI information in the video. This is used to send user-defined SEI information to the CDN."]
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtmpUrl"
                }), ": (Required) String type field. The CDN streaming address."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "idleTimeOut"
                }), ": Number type field. The maximum time (s) that the Converter is idle. Idle means that all users of the corresponding media streams processed by the Converter have left the channel. After the idle state exceeds the set idleTimeOut, the Converter is destroyed automatically."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "createTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter was created."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "updateTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "state"
                }), ": String type field. The status of the Converter. If the state is reported ", _jsx(_components.code, {
                  children: '"connecting"'
                }), ", the Converter is connecting to the Agora server."]
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
        children: [_jsx(_components.code, {
          children: "lts"
        }), ": Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "xRequestId"
        }), ": String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the ", _jsx(_components.code, {
          children: "X-Request-ID"
        }), " field in the request header."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "converter-configuration-changed",
      children: "Converter configuration changed"
    }), `
`, _jsxs(_components.p, {
      children: ["Notifications notifies your server of this event when you update the configurations of a Converter by calling the ", _jsx(_components.code, {
        children: "Update"
      }), " method."]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " is ", _jsx(_components.code, {
        children: "2 (ConverterUpdatedEvent)"
      }), "."]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Update the ", _jsx(_components.code, {
            children: "converter.transcodeOptions.videoOptions.layout "
          }), " configuration. The following is an example ", _jsx(_components.code, {
            children: "payload"
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
                  children: '    "converter"'
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
                  children: '        "id"'
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
                  children: '"4c014467d647bb87b60b719f6fa57686"'
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
                  children: '        "createTs"'
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
                  children: "1591786766"
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
                  children: '        "updateTs"'
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
                  children: "1591786835"
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
                  children: '        "state"'
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
                  children: '"running"'
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
                  children: '        "transcodeOptions"'
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
                  children: '            "rtcChannel"'
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
                  children: '"show68"'
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
                  children: '            "videoOptions"'
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
                  children: '                "layout"'
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
                  children: "                    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                        "rtcStreamUid"'
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
                  children: "201"
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
                  children: '                        "region"'
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
                  children: '                            "xPos"'
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
                  children: '                            "yPos"'
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
                  children: '                            "zIndex"'
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
                  children: '                            "width"'
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
                  children: "360"
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
                  children: '                            "height"'
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
                  children: "320"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                        },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                        "placeholderImageUrl"'
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
                  children: '"http://example.agora.io/host_placeholder.jpg"'
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                        "rtcStreamUid"'
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
                  children: "202"
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
                  children: '                        "region"'
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
                  children: '                            "xPos"'
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
                  children: '                            "yPos"'
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
                  children: "320"
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
                  children: '                            "zIndex"'
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
                  children: '                            "width"'
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
                  children: "360"
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
                  children: '                            "height"'
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
                  children: "320"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                        }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    },"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                        "imageUrl"'
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
                  children: '"http://example.agora.io/watchmark.jpg"'
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
                  children: '                        "region"'
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
                  children: '                            "xPos"'
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
                  children: '                            "yPos"'
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
                  children: '                            "zIndex"'
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
                  children: '                            "width"'
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
                  children: "36"
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
                  children: '                            "height"'
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
                  children: "64"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                        }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                    }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                ],"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '                "codecProfile"'
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
                  children: '"High"'
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
                  children: '                "frameRate"'
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
                  children: "15"
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
                  children: '                "bitrate"'
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
                  children: "400"
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
                  children: '                "seiOptions"'
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
                  children: '""'
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
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "lts"'
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
                  children: "1603456600"
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
                  children: '    "xRequestId"'
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
                  children: '"7bbcc8a4acce48c78b53c5a261a8a564"'
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
                  children: '    "fields"'
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
                  children: '"id,createTs,updateTs,state,transcodeOptions.videoOptions.layout"'
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
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "Converter"
            }), " contains the following fields:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "createTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter was created."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "updateTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "state"
                }), ": String type field. The running status of the Converter. If ", _jsx(_components.code, {
                  children: "the state is "
                }), '"running"', _jsx(_components.code, {
                  children: ", the Converter is running properly, and streams are being pushed to the CDN."
                })]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "transcodeOptions"
                }), ": JSON Object type field. The Converter's transcoding configuration.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "rtcChannel"
                    }), ": String type field. The Agora channel name."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "videoOptions"
                    }), ": (Optional) JSON Object type field. The video transcoding configuration of the Converter.", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.code, {
                          children: "layout"
                        }), ": JSON Array type field. The content description of the video screen on the canvas. Two elements are supported:", `
`, _jsxs(_components.ul, {
                          children: [`
`, _jsxs(_components.li, {
                            children: [_jsx(_components.code, {
                              children: "RtcStreamView"
                            }), " element. The video screen of each user on the canvas. It contains the following fields:", `
`, _jsxs(_components.ul, {
                              children: [`
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "rtcStreamUid"
                                }), ": Number type field. The user ID of the user to which the video stream belongs."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "region"
                                }), ": JSON Object type field. The display area of the user's video screen on the canvas.", `
`, _jsxs(_components.ul, {
                                  children: [`
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "xPos"
                                    }), ": Number type field. The x coordinate (px) of the screen on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "yPos"
                                    }), ": Number type field. The y coordinate (px) of the screen on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin and the y coordinate as the upper left corner of the screen."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "zIndex"
                                    }), ": Number type field. The layer number of the screen. The value range is [0,100]. ", _jsx(_components.code, {
                                      children: "0"
                                    }), " represents the lowest layer. ", _jsx(_components.code, {
                                      children: "100"
                                    }), " represents the top layer."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "width"
                                    }), ": Number type field. The width of the screen (px)."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "height"
                                    }), ": Number type field. The height of the screen (px)."]
                                  }), `
`]
                                }), `
`]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "placeholderImageUrl"
                                }), ": String type field. The HTTP(S) URL of the substitute image."]
                              }), `
`]
                            }), `
`]
                          }), `
`, _jsxs(_components.li, {
                            children: [_jsx(_components.code, {
                              children: "ImageView"
                            }), " element. The video picture on the canvas, which can be used as a watermark. It contains the following fields:", `
`, _jsxs(_components.ul, {
                              children: [`
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "imageUrl"
                                }), ": String type field. The HTTP(S) URL of the image."]
                              }), `
`, _jsxs(_components.li, {
                                children: [_jsx(_components.code, {
                                  children: "region"
                                }), ": JSON Object type field. The display area of the picture on the canvas.", `
`, _jsxs(_components.ul, {
                                  children: [`
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "xPos"
                                    }), ": Number type field. The x coordinate (px) of the image on the canvas. This is the lateral displacement relative to the origin, taking the upper left corner of the canvas as the origin and the x coordinate as the upper left corner of the screen."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "yPos"
                                    }), ": Number type field. The y coordinate (px) of the picture on the canvas. This is the longitudinal displacement relative to the origin, taking the upper left corner of the canvas as the origin, and the y coordinate as the upper left corner of the screen."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "zIndex"
                                    }), ": Number type field. The layer number of the image. The value range is [0,100]. ", _jsx(_components.code, {
                                      children: "0"
                                    }), " represents the lowest layer. ", _jsx(_components.code, {
                                      children: "100"
                                    }), " represents the top layer."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "width"
                                    }), ": Number type field. The width of the image (px)."]
                                  }), `
`, _jsxs(_components.li, {
                                    children: [_jsx(_components.code, {
                                      children: "height"
                                    }), ": Number type field. The height of the image (px)."]
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
`]
                      }), `
`]
                    }), `
`]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "codecProfile"
                    }), ": String type field. The encoding specification of the video."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "frameRate"
                    }), ": Number type field. The encoding frame rate (fps) of the video."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "bitrate"
                    }), ": Number type field. The encoding bitrate (Kbps) of the video."]
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "seiExtraInfo"
                    }), ": String type field. The user SEI information in the video. This is used to send user-defined SEI information to the CDN."]
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
            children: [_jsx(_components.code, {
              children: "lts"
            }), ": Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "xRequestId"
            }), ": String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), " field in the request header."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fields"
            }), ": String type field. For the field mask of JSON encoding, please refer to the", _jsx(_components.a, {
              href: "https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask",
              children: " Google protobuf FieldMask document"
            }), " for details. This is used to specify a subset of the", _jsx(_components.code, {
              children: "converter"
            }), " field to be returned. In this example, ", _jsx(_components.code, {
              children: "fields"
            }), " specifies a subset of the ", _jsx(_components.code, {
              children: "id"
            }), ", ", _jsx(_components.code, {
              children: "createTs"
            }), ", ", _jsx(_components.code, {
              children: "updateTs"
            }), ", and ", _jsx(_components.code, {
              children: "state"
            }), " fields in the converter field returned by the Agora server."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Update the configuration of the list of user IDs or Accounts participating in the mixing in the ", _jsx(_components.code, {
            children: "converter.transcodeOptions.audioOptions"
          }), ". The following is an example ", _jsx(_components.code, {
            children: "payload"
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
                  children: '    "converter"'
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
                  children: '        "id"'
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
                  children: '"4c014467d647bb87b60b719f6fa57686"'
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
                  children: '        "createTs"'
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
                  children: "1591786766"
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
                  children: '        "updateTs"'
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
                  children: "1591786835"
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
                  children: '        "state"'
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
                  children: '"running"'
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
                  children: '        "transcodeOptions"'
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
                  children: '            "rtcChannel"'
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
                  children: '"show68"'
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
                  children: '            "audioOptions"'
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
                  children: '                "rtcStreamUids"'
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                    201"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "                    202"
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "                ]"
                })
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
                  children: "    },"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "lts"'
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
                  children: "1603456600"
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
                  children: '    "xRequestId"'
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
                  children: '"7bbcc8a4acce48c78b53c5a261a8a564"'
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
                  children: '    "fields"'
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
                  children: '"id,createTs,updateTs,state,transcodeOptions.audioOptions.rtcStreamUids"'
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
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "Converter"
            }), " contains the following fields:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "createTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter was created."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "updateTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "state"
                }), ": String type field. The running status of the Converter. If ", _jsx(_components.code, {
                  children: "the state is "
                }), '"running"', _jsx(_components.code, {
                  children: ", the Converter is running properly, and streams are being pushed to the CDN."
                })]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "transcodeOptions"
                }), ": JSON Object type field. The Converter's transcoding configuration.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "rtcChannel: String type field. The Agora channel name."
                  }), `
`, _jsxs(_components.li, {
                    children: [_jsx(_components.code, {
                      children: "audioOptions"
                    }), ": JSON Object type field. The audio transcoding configuration of the Converter.", `
`, _jsxs(_components.ul, {
                      children: [`
`, _jsxs(_components.li, {
                        children: [_jsx(_components.code, {
                          children: "rtcStreamUids"
                        }), ": JSON Array type field. The user ID or Account of the user participating in the mixing."]
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "lts"
            }), ": Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "xRequestId"
            }), ": String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), " field in the request header."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fields"
            }), ": String type field. For the field mask of JSON encoding, please refer to the", _jsx(_components.a, {
              href: "https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask",
              children: " Google protobuf FieldMask document"
            }), " for details. This is used to specify a subset of the", _jsx(_components.code, {
              children: "converter"
            }), " field to be returned. In this example, ", _jsx(_components.code, {
              children: "fields"
            }), " specifies a subset of the ", _jsx(_components.code, {
              children: "id"
            }), ", ", _jsx(_components.code, {
              children: "createTs"
            }), ", ", _jsx(_components.code, {
              children: "updateTs"
            }), ", and ", _jsx(_components.code, {
              children: "state"
            }), "fields in the converter field returned by the Agora server."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Update other configurations of the converter, such as ", _jsx(_components.code, {
            children: "converter.rtmpUrl"
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
                  children: '    "converter"'
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
                  children: '        "id"'
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
                  children: '"4c014467d647bb87b60b719f6fa57686"'
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
                  children: '        "createTs"'
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
                  children: "1591786766"
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
                  children: '        "updateTs"'
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
                  children: "1591786835"
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
                  children: '        "state"'
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
                  children: '"running"'
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
                  children: '        "rtmpUrl"'
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
                  children: '"rtmp://example.agora.io/live/show68"'
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: '    "lts"'
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
                  children: "1603456600"
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
                  children: '    "xRequestId"'
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
                  children: '"7bbcc8a4acce48c78b53c5a261a8a564"'
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
                  children: '    "fields"'
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
                  children: '"id,createTs,updateTs,state,rtmpUrl"'
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
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["The ", _jsx(_components.code, {
              children: "Converter"
            }), " contains the following fields:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "id"
                }), ": String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "createTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter was created."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "updateTs"
                }), ": Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "state"
                }), ": String type field. The running status of the Converter. If ", _jsx(_components.code, {
                  children: "the state is "
                }), '"running"', _jsx(_components.code, {
                  children: ", the Converter is running properly, and streams are being pushed to the CDN."
                })]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "rtmpUrl"
                }), ": (Required) String type field. The CDN streaming address."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "lts"
            }), ": Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "xRequestId"
            }), ": String type field, which identifies the UUID (Universal Unique Identifier) of this request. This is the same as the ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), " field in the request header."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fields"
            }), ": String type field. For the field mask of JSON encoding, please refer to the", _jsx(_components.a, {
              href: "https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask",
              children: " Google protobuf FieldMask document"
            }), " for details. This is used to specify a subset of the", _jsx(_components.code, {
              children: "converter"
            }), " field to be returned. In this example, ", _jsx(_components.code, {
              children: "fields"
            }), " specifies a subset of the ", _jsx(_components.code, {
              children: "id"
            }), ", ", _jsx(_components.code, {
              children: "createTs"
            }), ", ", _jsx(_components.code, {
              children: "updateTs"
            }), ", and ", _jsx(_components.code, {
              children: "state"
            }), " fields in the converter field returned by the Agora server."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "converter-status-changed",
      children: "Converter status changed"
    }), `
`, _jsx(_components.p, {
      children: "Notifications notifies your server of this event when you have created a Converter and the running state of the Converter changes."
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " is ", _jsx(_components.code, {
        children: "3(ConverterStateChangedEvent)"
      }), ". The following is an example ", _jsx(_components.code, {
        children: "payload"
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
              children: '    "converter"'
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
              children: '        "id"'
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
              children: '"4c014467d647bb87b60b719f6fa57686"'
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
              children: '        "createTs"'
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
              children: "1603456600"
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
              children: '        "updateTs"'
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
              children: "1603456600"
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
              children: '        "state"'
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
              children: '"running"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "lts"'
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
              children: "1603456600"
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
              children: '    "fields"'
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
              children: '"id,createTs,updateTs,state"'
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
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "Converter"
        }), " contains the following fields:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "id"
            }), ": String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "createTs"
            }), ": Number type field. The Unix timestamp (s) when the Converter was created."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "updateTs"
            }), ": Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "state"
            }), ": String type field. The running status of the Converter.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "connecting"
                }), ": The Converter is connecting to the Agora server."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "running"
                }), ": The Converter is running properly, and streams are being pushed to the CDN."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "failed"
                }), ": There is a failure in pushing streams to the CDN."]
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
        children: [_jsx(_components.code, {
          children: "lts"
        }), ": Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fields"
        }), ": String type field. For the field mask of JSON encoding, please refer to the", _jsx(_components.a, {
          href: "https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask",
          children: " Google protobuf FieldMask document"
        }), " for details. This is used to specify a subset of the", _jsx(_components.code, {
          children: "converter"
        }), " field to be returned. In this example, ", _jsx(_components.code, {
          children: "fields"
        }), " specifies a subset of the ", _jsx(_components.code, {
          children: "id"
        }), ", ", _jsx(_components.code, {
          children: "createTs"
        }), ", ", _jsx(_components.code, {
          children: "updateTs"
        }), ", and ", _jsx(_components.code, {
          children: "state"
        }), " fields in the converter field returned by the Agora server."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "converter-destroyed",
      children: "Converter destroyed"
    }), `
`, _jsx(_components.p, {
      children: "Notifications notifies your server of this event when a Converter is destroyed, and the streams being pushed to the CDN are stopped."
    }), `
`, _jsxs(_components.blockquote, {
      children: [`
`, _jsxs(_components.p, {
        children: ["For the destruction reason, see the", _jsx(_components.code, {
          children: " destroyReason"
        }), " field."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "eventType"
      }), " is ", _jsx(_components.code, {
        children: "4(ConverterDestroyedEvent)"
      }), ". The following is an example ", _jsx(_components.code, {
        children: "payload"
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
              children: '    "converter"'
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
              children: '        "id"'
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
              children: '"4c014467d647bb87b60b719f6fa57686"'
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
              children: '        "name"'
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
              children: '"show68_vertical"'
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
              children: '        "createTs"'
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
              children: "1603456600"
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
              children: '        "updateTs"'
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
              children: "1603456600"
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "lts"'
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
              children: "1603456600"
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
              children: '    "destroyReason"'
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
              children: '"Delete Request"'
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
              children: '    "fields"'
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
              children: '"id,name,createTs,updateTs"'
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
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["The ", _jsx(_components.code, {
          children: "Converter"
        }), " contains the following fields:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "id"
            }), ": String type field. The ID of the Converter. This is a UUID (Universal Unique Identifier) generated by the Agora server to identify a created Converter."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "name"
            }), ": String type field. The name of the Converter."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "createTs"
            }), ": Number type field. The Unix timestamp (s) when the Converter was created."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "updateTs"
            }), ": Number type field. The Unix timestamp (s) when the Converter configurationwas last updated."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "lts"
        }), ": Number type field. The Unix timestamp (ms) when the event occurred on the Agora server."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "destroyReason"
        }), ": String type field, which shows the reason for the destruction of the Converter.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Delete Request"
            }), ": The Agora server receives your Delete request."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Idle Timeout"
            }), ": After the idle state exceeds the set idleTimeOut, all users of the corresponding media streams processed by the Converter leave the channel."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Internal Error"
            }), ": Errors related to the Agora server. For example, hardware failure."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fields"
        }), ": String type field. For the field mask of JSON encoding, please refer to the", _jsx(_components.a, {
          href: "https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask",
          children: " Google protobuf FieldMask document"
        }), " for details. This is used to specify a subset of the", _jsx(_components.code, {
          children: "converter"
        }), " field to be returned. In this example, ", _jsx(_components.code, {
          children: "fields"
        }), " specifies a subset of the ", _jsx(_components.code, {
          children: "id"
        }), ", ", _jsx(_components.code, {
          children: "createTs"
        }), ", ", _jsx(_components.code, {
          children: "updateTs"
        }), ", and ", _jsx(_components.code, {
          children: "state"
        }), " fields in the converter field returned by the Agora server."]
      }), `
`]
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
