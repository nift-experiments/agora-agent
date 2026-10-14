import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Receive webhook notifications",
  description: "Subscribe to Media Gateway events and receive webhook notifications in real time."
};
export let _markdown = `

A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Media Gateway events. With Notifications, you can subscribe to Media Gateway events and receive notifications in real time.

## Understand the tech [#understand-the-tech]

Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns \`200 OK\` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users.

1. A user commits an action that creates an event.
2. Notifications sends an HTTPS POST request to your webhook.
3. Your server validates the request signature, then sends a response to Notifications within 10 seconds. The response body must be in JSON.

If Notifications receives \`200 OK\` within 10 seconds of sending the initial notification, the callback is considered successful. If these conditions are not met, Notifications immediately resends the notification. The interval between notification attempts gradually increases. Notifications stops sending notifications after three retries.

## Prerequisites [#prerequisites]

To set up and use Notifications, you must have:

* A [valid Agora account](/en/introduction/account)
* An [active Agora project](/en/introduction/account)
* A computer with Internet access

If your network access is restricted by a firewall, call the IP address query API to retrieve the Notifications IP addresses, then configure the firewall to allow those IP addresses. The REST API reference for that endpoint remains out of scope for this prose migration.

## Handle notifications for specific events [#handle-notifications-for-specific-events]

In order to handle notifications for the events you subscribe to, you need to:

* Create your webhook
* Enable Notifications
* Verify Notifications signatures

## Create your webhook [#create-your-webhook]

Once Notifications is enabled, Agora SDRTN(R) sends notification callbacks as \`HTTPS POST\` requests to your webhook when events that you are subscribed to occur. The data format of the requests is JSON, the character encoding is \`UTF-8\`, and the signature algorithm is \`HMAC/SHA1\` or \`HMAC/SHA256\`.

For Notifications, a webhook is an endpoint on an \`HTTPS\` server that handles these requests. In a production environment you write this in your web infrastructure. For development purposes, best practice is to create a simple local server and use a service such as [ngrok](https://ngrok.com/download) to supply a public URL that you register with Agora when you enable Notifications.

To do this, take the following steps:

1. Ensure you have Go installed on your system. If not, download and install it from the [official Go website](https://go.dev/dl/).

2. Create a new project directory:

   \`\`\`sh
   mkdir agora-webhook-server
   cd agora-webhook-server
   \`\`\`

3. In the project directory, create a new file \`main.go\` and add the following code:

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
       NoticeID  string                 \`json:"noticeId"\`
       ProductID int64                  \`json:"productId"\`
       EventType int                    \`json:"eventType"\`
       NotifyMs  int64                  \`json:"notifyMs"\`
       SID       string                 \`json:"sid"\`
       Payload   map[string]interface{} \`json:"payload"\`
   }

   func rootHandler(w http.ResponseWriter, r *http.Request) {
       response := "Agora Notifications demo"
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

       fmt.Printf("\\\\n--- Webhook Notification Received ---\\\\n")
       fmt.Printf("Notice ID: %s\\\\n", req.NoticeID)
       fmt.Printf("Event Type: %d\\\\n", req.EventType)
       fmt.Printf("Session ID: %s\\\\n", req.SID)
       fmt.Printf("Timestamp: %d\\\\n", req.NotifyMs)

       prettyJSON, _ := json.MarshalIndent(req.Payload, "", "  ")
       fmt.Printf("\\\\nFull Payload:\\\\n%s\\\\n", string(prettyJSON))

       w.WriteHeader(http.StatusOK)
       w.Write([]byte("Notification received successfully"))
   }

   func main() {
       http.HandleFunc("/", rootHandler)
       http.HandleFunc("/ncsNotify", ncsHandler)

       port := ":8080"
       fmt.Printf("Notifications webhook server started on port %s\\\\n", port)
       fmt.Println("Ready to receive Agora webhook notifications...")

       if err := http.ListenAndServe(port, nil); err != nil {
           log.Fatalf("Failed to start server: %v", err)
       }
   }
   \`\`\`

4. Run the server:

   \`\`\`sh
   go run main.go
   \`\`\`

5. Create a public URL for your server. In this example you use \`ngrok\`:

   \`\`\`bash
   ngrok config add-authtoken YOUR_AUTH_TOKEN
   ngrok http 127.0.0.1:8080
   \`\`\`

To obtain an auth token, [sign up](https://dashboard.ngrok.com/signup) with ngrok.

6. Test the server by opening the public URL provided by ngrok and sending a \`POST\` request to \`https://<ngrok_url>/ncsNotify\` with the required JSON payload.

### Set up Webhook notifications [#set-up-webhook-notifications]

1. In [Agora Console](https://console.agora.io), select **Webhooks** from the sidebar.

2. Select **New Webhook**.

3. In the **Product** dropdown, select **Media Gateway**.

4. Copy the **Signing Secret**. You use this secret to [Add signature verification](#add-signature-verification).

5. Fill in the following:

   * **Region**: Select the region where your server that receives the notifications is located. Agora connects to the nearest Agora node server based on your selection.

   * **Receiving URL**: The \`HTTPS\` public address of your server that receives the notifications, for example \`https://1111-123-456-789-99.ap.ngrok.io/ncsNotify\`. Only \`HTTPS\` endpoints are supported.

   * **Subscribe to events**: Select all the events that you want to subscribe to.

   * **IP whitelist**: If your server is behind a firewall, enable this option and add the Agora Notifications server IP addresses to the firewall's allowed IP list.

6. Select **Run health check**, and when it succeeds, select **Save**.

## Verify Notifications signatures [#verify-notifications-signatures]

Best practice is to validate the request signature in your webhook server before you process the callback payload.

### Add signature verification [#add-signature-verification]

To communicate securely between Notifications and your webhook, Agora uses signatures for identity verification:

1. When you configure Notifications in Agora Console, Agora generates a secret for verification.
2. When sending a notification, Notifications generates signature values from the secret using \`HMAC/SHA1\` and \`HMAC/SHA256\`. These signatures are added as \`Agora-Signature\` and \`Agora-Signature-V2\` in the HTTPS request header.
3. When your server receives a callback, you can verify either signature using the secret, the raw request body, and the matching algorithm.

The following sample uses \`crypto/sha1\`.

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

const secret = "REPLACE_WITH_YOUR_SECRET"

func calcSignatureV1(secret, payload string) string {
    mac := hmac.New(sha1.New, []byte(secret))
    mac.Write([]byte(payload))
    return hex.EncodeToString(mac.Sum(nil))
}

func verify(requestBody, signature string) bool {
    calculatedSignature := calcSignatureV1(secret, requestBody)
    return calculatedSignature == signature
}
\`\`\`

After reading the request body, add:

\`\`\`go
if !verify(string(body), agoraSignature) {
    http.Error(w, "Invalid signature", http.StatusUnauthorized)
    return
}
\`\`\`

## Callback reference [#callback-reference]

Notification callbacks include the following headers and body fields.

### Request header [#request-header]

| Field name           | Value                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| \`Content-Type\`       | \`application/json\`                                                                                     |
| \`Agora-Signature\`    | Signature generated with the secret and the HMAC/SHA1 algorithm. Use it to verify the callback body.   |
| \`Agora-Signature-V2\` | Signature generated with the secret and the HMAC/SHA256 algorithm. Use it to verify the callback body. |

### Request body [#request-body]

| Field name  | Type   | Description                                                                 |
| ----------- | ------ | --------------------------------------------------------------------------- |
| \`noticeId\`  | String | Unique ID of the notification callback.                                     |
| \`productId\` | Number | Product ID. When this value is \`10\`, the callback belongs to Media Gateway. |
| \`eventType\` | Number | Event type code for the current callback.                                   |
| \`notifyMs\`  | Number | Callback timestamp in milliseconds.                                         |
| \`sid\`       | String | Streaming session ID. Each streaming task gets a unique SID.                |
| \`payload\`   | Object | Event-specific data. The fields depend on \`eventType\`.                      |

The callback payload also contains common fields such as \`noticeId\`, \`productId\`, \`eventType\`, \`notifyMs\`, \`sid\`, and \`payload\`.

### Common callback fields [#common-callback-fields]

| Field       | Type   | Description                                                                         |
| ----------- | ------ | ----------------------------------------------------------------------------------- |
| \`noticeId\`  | String | Unique ID of the notification callback.                                             |
| \`productId\` | Number | Product identifier. When this value is \`10\`, the callback belongs to Media Gateway. |
| \`eventType\` | Number | Event type code for the current callback.                                           |
| \`notifyMs\`  | Number | Callback timestamp in milliseconds.                                                 |
| \`sid\`       | String | Streaming session ID. Each initiated streaming task generates a unique SID.         |
| \`payload\`   | Object | Event-specific data. The fields in this object depend on \`eventType\`.               |

### Media Gateway event types [#media-gateway-event-types]

| Event type                 | Description                                                                                        | Payload highlights                                   |
| -------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| \`live_stream_connected\`    | The gateway has received the RTMP or SRT stream and successfully entered the channel.              | \`rtcInfo\`, \`transcoding\`, \`beginAt\`                  |
| \`live_stream_disconnected\` | The gateway has actively or passively disconnected and left the channel.                           | \`rtcInfo\`, \`streamStats\`, \`beginAt\`, \`endAt\`         |
| \`live_stream_aborted\`      | The gateway received a stream but terminated it because of an error.                               | \`rtcInfo\`, \`beginAt\`, \`errorCode\`, \`reason\`          |
| \`live_profile_updated\`     | Stream properties have been updated, for example after the first audio or video frame is received. | \`rtcInfo\`, \`videoProfile\`, \`audioProfile\`, \`beginAt\` |

For Media Gateway events, payload objects commonly include:

* \`rtcInfo\`: RTC information such as \`channel\` and \`uid\`
* \`transcoding\`: The transcoding configuration used for the stream
* \`streamStats\`: Statistics such as total input and output bytes
* \`videoProfile\`: Video properties such as codec, width, height, and GOP
* \`audioProfile\`: Audio properties such as sample rate and channel count

### Media Gateway payload objects [#media-gateway-payload-objects]

| Field          | Type   | Description                                                                                                                                                                             |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`rtcInfo\`      | Object | RTC information for the stream, including \`channel\` and \`uid\`. When \`channel\` or \`uid\` is empty or \`0\` in the streaming key, Media Gateway uses generated values and reports them here. |
| \`transcoding\`  | Object | Transcoding configuration used for the stream, including \`audio\` and \`video\` settings.                                                                                                  |
| \`streamStats\`  | Object | Stream statistics including \`inputAudioBytes\`, \`inputVideoBytes\`, \`outputAudioBytes\`, and \`outputVideoBytes\`.                                                                           |
| \`videoProfile\` | Object | Video properties such as \`codec\`, \`width\`, \`height\`, and \`gop\`. Not applicable for audio-only streams.                                                                                  |
| \`audioProfile\` | Object | Audio properties such as \`sampleRate\` and \`channels\`.                                                                                                                                   |
| \`beginAt\`      | String | Streaming start time in RFC 3339 format.                                                                                                                                                |
| \`endAt\`        | String | Streaming end time in RFC 3339 format. Returned in disconnect callbacks.                                                                                                                |
| \`errorCode\`    | Number | Error code returned when the stream is aborted.                                                                                                                                         |
| \`reason\`       | String | Error message corresponding to \`errorCode\`.                                                                                                                                             |

### \`live_stream_aborted\` error codes [#live_stream_aborted-error-codes]

| \`errorCode\` | Description                                                                                        | Recommended action                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`1\`         | Illegal \`streamKey\`, for example an empty \`channelName\` or unsupported characters.                 | Check the \`streamKey\` format, especially for locally generated keys.                                                                                |
| \`2\`         | Invalid \`streamKey\`, such as an expired or deleted key.                                            | Create a new \`streamKey\` and try again.                                                                                                             |
| \`3\`         | No permission to use this \`streamKey\`, for example when the custom domain and app ID do not match. | Check whether the \`streamKey\` matches the domain name used for the push.                                                                            |
| \`4\`         | Number of concurrent streams exceeds the limit.                                                    | Wait and retry.                                                                                                                                     |
| \`5\`         | Conflict detected, for example pushing to the same channel at the same time.                       | If the streams are not being pushed at the same time, try again after 5 to 10 seconds.                                                              |
| \`6\`         | Stream attribute exceeds the limit. Currently, this applies to bitrate only.                       | Check the streaming software configuration and lower the target bitrate.                                                                            |
| \`7\`         | Streaming without audio or video data for more than 10 seconds.                                    | Check whether the last push exited abnormally, and then try again.                                                                                  |
| \`8\`         | Failed to join the channel.                                                                        | Check the \`reason\` field for the specific RTC failure reason.                                                                                       |
| \`9\`         | Disconnected from the main network.                                                                | Retry several times. If the problem persists, contact technical support to confirm whether the app certificate provided during activation is valid. |
| \`10\`        | Unknown internal service error.                                                                    | Retry several times. If the problem persists, contact technical support.                                                                            |

The detailed REST and webhook field reference remains outside this prose migration scope.

### Media Gateway event types [#media-gateway-event-types-1]

Notifications can notify your server of the following Media Gateway events:

| \`eventType\` | Event name                 | Description                                                                                                       |
| ----------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| \`1\`         | \`live_stream_connected\`    | The gateway has received the RTMP or SRT stream and successfully entered the channel.                             |
| \`2\`         | \`live_stream_disconnected\` | The gateway has actively or passively disconnected and left the channel.                                          |
| \`3\`         | \`live_stream_aborted\`      | The gateway has received an RTMP or SRT stream but terminated it for some reason.                                 |
| \`4\`         | \`live_profile_updated\`     | Stream properties have been updated, such as the first audio or video frame, or an audio or video profile change. |

## IP address query API [#ip-address-query-api]

If your server that receives notification callbacks is behind a firewall, call the IP address query API to retrieve the IP addresses of Notifications and configure your firewall to trust those IP addresses.

Relevant details:

* Method: \`GET\`
* Endpoint: \`https://api.agora.io/v2/ncs/ip\`
* Body: none

The REST API reference for this endpoint remains out of scope for this prose migration.

## Considerations [#considerations]

* Notifications does not guarantee that callbacks arrive in the same order as events occur.
* Your server may receive more than one callback for a single event.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Media Gateway events. With Notifications, you can subscribe to Media Gateway events and receive notifications in real time."
  }, {
    heading: "understand-the-tech",
    content: "Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns `200 OK` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users."
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
    content: "A valid Agora account"
  }, {
    heading: "prerequisites",
    content: "An active Agora project"
  }, {
    heading: "prerequisites",
    content: "A computer with Internet access"
  }, {
    heading: "prerequisites",
    content: "If your network access is restricted by a firewall, call the IP address query API to retrieve the Notifications IP addresses, then configure the firewall to allow those IP addresses. The REST API reference for that endpoint remains out of scope for this prose migration."
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "In order to handle notifications for the events you subscribe to, you need to:"
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "Create your webhook"
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "Enable Notifications"
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "Verify Notifications signatures"
  }, {
    heading: "create-your-webhook",
    content: "Once Notifications is enabled, Agora SDRTN(R) sends notification callbacks as `HTTPS POST` requests to your webhook when events that you are subscribed to occur. The data format of the requests is JSON, the character encoding is `UTF-8`, and the signature algorithm is `HMAC/SHA1` or `HMAC/SHA256`."
  }, {
    heading: "create-your-webhook",
    content: "For Notifications, a webhook is an endpoint on an `HTTPS` server that handles these requests. In a production environment you write this in your web infrastructure. For development purposes, best practice is to create a simple local server and use a service such as ngrok to supply a public URL that you register with Agora when you enable Notifications."
  }, {
    heading: "create-your-webhook",
    content: "To do this, take the following steps:"
  }, {
    heading: "create-your-webhook",
    content: "Ensure you have Go installed on your system. If not, download and install it from the official Go website."
  }, {
    heading: "create-your-webhook",
    content: "Create a new project directory:"
  }, {
    heading: "create-your-webhook",
    content: "In the project directory, create a new file `main.go` and add the following code:"
  }, {
    heading: "create-your-webhook",
    content: "Run the server:"
  }, {
    heading: "create-your-webhook",
    content: "Create a public URL for your server. In this example you use `ngrok`:"
  }, {
    heading: "create-your-webhook",
    content: "To obtain an auth token, sign up with ngrok."
  }, {
    heading: "create-your-webhook",
    content: "Test the server by opening the public URL provided by ngrok and sending a `POST` request to `https://<ngrok_url>/ncsNotify` with the required JSON payload."
  }, {
    heading: "set-up-webhook-notifications",
    content: "In Agora Console, select **Webhooks** from the sidebar."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Select **New Webhook**."
  }, {
    heading: "set-up-webhook-notifications",
    content: "In the **Product** dropdown, select **Media Gateway**."
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
    content: "**IP whitelist**: If your server is behind a firewall, enable this option and add the Agora Notifications server IP addresses to the firewall's allowed IP list."
  }, {
    heading: "set-up-webhook-notifications",
    content: "Select **Run health check**, and when it succeeds, select **Save**."
  }, {
    heading: "verify-notifications-signatures",
    content: "Best practice is to validate the request signature in your webhook server before you process the callback payload."
  }, {
    heading: "add-signature-verification",
    content: "To communicate securely between Notifications and your webhook, Agora uses signatures for identity verification:"
  }, {
    heading: "add-signature-verification",
    content: "When you configure Notifications in Agora Console, Agora generates a secret for verification."
  }, {
    heading: "add-signature-verification",
    content: "When sending a notification, Notifications generates signature values from the secret using `HMAC/SHA1` and `HMAC/SHA256`. These signatures are added as `Agora-Signature` and `Agora-Signature-V2` in the HTTPS request header."
  }, {
    heading: "add-signature-verification",
    content: "When your server receives a callback, you can verify either signature using the secret, the raw request body, and the matching algorithm."
  }, {
    heading: "add-signature-verification",
    content: "The following sample uses `crypto/sha1`."
  }, {
    heading: "add-signature-verification",
    content: "After reading the request body, add:"
  }, {
    heading: "callback-reference",
    content: "Notification callbacks include the following headers and body fields."
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
    content: "Signature generated with the secret and the HMAC/SHA1 algorithm. Use it to verify the callback body."
  }, {
    heading: "request-header",
    content: "`Agora-Signature-V2`"
  }, {
    heading: "request-header",
    content: "Signature generated with the secret and the HMAC/SHA256 algorithm. Use it to verify the callback body."
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
    content: "Unique ID of the notification callback."
  }, {
    heading: "request-body",
    content: "`productId`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "Product ID. When this value is `10`, the callback belongs to Media Gateway."
  }, {
    heading: "request-body",
    content: "`eventType`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "Event type code for the current callback."
  }, {
    heading: "request-body",
    content: "`notifyMs`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "Callback timestamp in milliseconds."
  }, {
    heading: "request-body",
    content: "`sid`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "Streaming session ID. Each streaming task gets a unique SID."
  }, {
    heading: "request-body",
    content: "`payload`"
  }, {
    heading: "request-body",
    content: "Object"
  }, {
    heading: "request-body",
    content: "Event-specific data. The fields depend on `eventType`."
  }, {
    heading: "request-body",
    content: "The callback payload also contains common fields such as `noticeId`, `productId`, `eventType`, `notifyMs`, `sid`, and `payload`."
  }, {
    heading: "common-callback-fields",
    content: "Field"
  }, {
    heading: "common-callback-fields",
    content: "Type"
  }, {
    heading: "common-callback-fields",
    content: "Description"
  }, {
    heading: "common-callback-fields",
    content: "`noticeId`"
  }, {
    heading: "common-callback-fields",
    content: "String"
  }, {
    heading: "common-callback-fields",
    content: "Unique ID of the notification callback."
  }, {
    heading: "common-callback-fields",
    content: "`productId`"
  }, {
    heading: "common-callback-fields",
    content: "Number"
  }, {
    heading: "common-callback-fields",
    content: "Product identifier. When this value is `10`, the callback belongs to Media Gateway."
  }, {
    heading: "common-callback-fields",
    content: "`eventType`"
  }, {
    heading: "common-callback-fields",
    content: "Number"
  }, {
    heading: "common-callback-fields",
    content: "Event type code for the current callback."
  }, {
    heading: "common-callback-fields",
    content: "`notifyMs`"
  }, {
    heading: "common-callback-fields",
    content: "Number"
  }, {
    heading: "common-callback-fields",
    content: "Callback timestamp in milliseconds."
  }, {
    heading: "common-callback-fields",
    content: "`sid`"
  }, {
    heading: "common-callback-fields",
    content: "String"
  }, {
    heading: "common-callback-fields",
    content: "Streaming session ID. Each initiated streaming task generates a unique SID."
  }, {
    heading: "common-callback-fields",
    content: "`payload`"
  }, {
    heading: "common-callback-fields",
    content: "Object"
  }, {
    heading: "common-callback-fields",
    content: "Event-specific data. The fields in this object depend on `eventType`."
  }, {
    heading: "media-gateway-event-types",
    content: "Event type"
  }, {
    heading: "media-gateway-event-types",
    content: "Description"
  }, {
    heading: "media-gateway-event-types",
    content: "Payload highlights"
  }, {
    heading: "media-gateway-event-types",
    content: "`live_stream_connected`"
  }, {
    heading: "media-gateway-event-types",
    content: "The gateway has received the RTMP or SRT stream and successfully entered the channel."
  }, {
    heading: "media-gateway-event-types",
    content: "`rtcInfo`, `transcoding`, `beginAt`"
  }, {
    heading: "media-gateway-event-types",
    content: "`live_stream_disconnected`"
  }, {
    heading: "media-gateway-event-types",
    content: "The gateway has actively or passively disconnected and left the channel."
  }, {
    heading: "media-gateway-event-types",
    content: "`rtcInfo`, `streamStats`, `beginAt`, `endAt`"
  }, {
    heading: "media-gateway-event-types",
    content: "`live_stream_aborted`"
  }, {
    heading: "media-gateway-event-types",
    content: "The gateway received a stream but terminated it because of an error."
  }, {
    heading: "media-gateway-event-types",
    content: "`rtcInfo`, `beginAt`, `errorCode`, `reason`"
  }, {
    heading: "media-gateway-event-types",
    content: "`live_profile_updated`"
  }, {
    heading: "media-gateway-event-types",
    content: "Stream properties have been updated, for example after the first audio or video frame is received."
  }, {
    heading: "media-gateway-event-types",
    content: "`rtcInfo`, `videoProfile`, `audioProfile`, `beginAt`"
  }, {
    heading: "media-gateway-event-types",
    content: "For Media Gateway events, payload objects commonly include:"
  }, {
    heading: "media-gateway-event-types",
    content: "`rtcInfo`: RTC information such as `channel` and `uid`"
  }, {
    heading: "media-gateway-event-types",
    content: "`transcoding`: The transcoding configuration used for the stream"
  }, {
    heading: "media-gateway-event-types",
    content: "`streamStats`: Statistics such as total input and output bytes"
  }, {
    heading: "media-gateway-event-types",
    content: "`videoProfile`: Video properties such as codec, width, height, and GOP"
  }, {
    heading: "media-gateway-event-types",
    content: "`audioProfile`: Audio properties such as sample rate and channel count"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Field"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Type"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Description"
  }, {
    heading: "media-gateway-payload-objects",
    content: "`rtcInfo`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Object"
  }, {
    heading: "media-gateway-payload-objects",
    content: "RTC information for the stream, including `channel` and `uid`. When `channel` or `uid` is empty or `0` in the streaming key, Media Gateway uses generated values and reports them here."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`transcoding`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Object"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Transcoding configuration used for the stream, including `audio` and `video` settings."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`streamStats`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Object"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Stream statistics including `inputAudioBytes`, `inputVideoBytes`, `outputAudioBytes`, and `outputVideoBytes`."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`videoProfile`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Object"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Video properties such as `codec`, `width`, `height`, and `gop`. Not applicable for audio-only streams."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`audioProfile`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Object"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Audio properties such as `sampleRate` and `channels`."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`beginAt`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "String"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Streaming start time in RFC 3339 format."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`endAt`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "String"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Streaming end time in RFC 3339 format. Returned in disconnect callbacks."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`errorCode`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Number"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Error code returned when the stream is aborted."
  }, {
    heading: "media-gateway-payload-objects",
    content: "`reason`"
  }, {
    heading: "media-gateway-payload-objects",
    content: "String"
  }, {
    heading: "media-gateway-payload-objects",
    content: "Error message corresponding to `errorCode`."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`errorCode`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Description"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Recommended action"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`1`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Illegal `streamKey`, for example an empty `channelName` or unsupported characters."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Check the `streamKey` format, especially for locally generated keys."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`2`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Invalid `streamKey`, such as an expired or deleted key."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Create a new `streamKey` and try again."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`3`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "No permission to use this `streamKey`, for example when the custom domain and app ID do not match."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Check whether the `streamKey` matches the domain name used for the push."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`4`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Number of concurrent streams exceeds the limit."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Wait and retry."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`5`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Conflict detected, for example pushing to the same channel at the same time."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "If the streams are not being pushed at the same time, try again after 5 to 10 seconds."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`6`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Stream attribute exceeds the limit. Currently, this applies to bitrate only."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Check the streaming software configuration and lower the target bitrate."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`7`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Streaming without audio or video data for more than 10 seconds."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Check whether the last push exited abnormally, and then try again."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`8`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Failed to join the channel."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Check the `reason` field for the specific RTC failure reason."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`9`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Disconnected from the main network."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Retry several times. If the problem persists, contact technical support to confirm whether the app certificate provided during activation is valid."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "`10`"
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Unknown internal service error."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "Retry several times. If the problem persists, contact technical support."
  }, {
    heading: "live_stream_aborted-error-codes",
    content: "The detailed REST and webhook field reference remains outside this prose migration scope."
  }, {
    heading: "media-gateway-event-types-1",
    content: "Notifications can notify your server of the following Media Gateway events:"
  }, {
    heading: "media-gateway-event-types-1",
    content: "`eventType`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "Event name"
  }, {
    heading: "media-gateway-event-types-1",
    content: "Description"
  }, {
    heading: "media-gateway-event-types-1",
    content: "`1`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "`live_stream_connected`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "The gateway has received the RTMP or SRT stream and successfully entered the channel."
  }, {
    heading: "media-gateway-event-types-1",
    content: "`2`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "`live_stream_disconnected`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "The gateway has actively or passively disconnected and left the channel."
  }, {
    heading: "media-gateway-event-types-1",
    content: "`3`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "`live_stream_aborted`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "The gateway has received an RTMP or SRT stream but terminated it for some reason."
  }, {
    heading: "media-gateway-event-types-1",
    content: "`4`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "`live_profile_updated`"
  }, {
    heading: "media-gateway-event-types-1",
    content: "Stream properties have been updated, such as the first audio or video frame, or an audio or video profile change."
  }, {
    heading: "ip-address-query-api",
    content: "If your server that receives notification callbacks is behind a firewall, call the IP address query API to retrieve the IP addresses of Notifications and configure your firewall to trust those IP addresses."
  }, {
    heading: "ip-address-query-api",
    content: "Relevant details:"
  }, {
    heading: "ip-address-query-api",
    content: "Method: `GET`"
  }, {
    heading: "ip-address-query-api",
    content: "Endpoint: `https://api.agora.io/v2/ncs/ip`"
  }, {
    heading: "ip-address-query-api",
    content: "Body: none"
  }, {
    heading: "ip-address-query-api",
    content: "The REST API reference for this endpoint remains out of scope for this prose migration."
  }, {
    heading: "considerations",
    content: "Notifications does not guarantee that callbacks arrive in the same order as events occur."
  }, {
    heading: "considerations",
    content: "Your server may receive more than one callback for a single event."
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
    id: "verify-notifications-signatures",
    content: "Verify Notifications signatures"
  }, {
    id: "add-signature-verification",
    content: "Add signature verification"
  }, {
    id: "callback-reference",
    content: "Callback reference"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "common-callback-fields",
    content: "Common callback fields"
  }, {
    id: "media-gateway-event-types",
    content: "Media Gateway event types"
  }, {
    id: "media-gateway-payload-objects",
    content: "Media Gateway payload objects"
  }, {
    id: "live_stream_aborted-error-codes",
    content: "`live_stream_aborted` error codes"
  }, {
    id: "media-gateway-event-types-1",
    content: "Media Gateway event types"
  }, {
    id: "ip-address-query-api",
    content: "IP address query API"
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
  depth: 2,
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
  depth: 2,
  url: "#verify-notifications-signatures",
  title: _jsx(_Fragment, {
    children: "Verify Notifications signatures"
  })
}, {
  depth: 3,
  url: "#add-signature-verification",
  title: _jsx(_Fragment, {
    children: "Add signature verification"
  })
}, {
  depth: 2,
  url: "#callback-reference",
  title: _jsx(_Fragment, {
    children: "Callback reference"
  })
}, {
  depth: 3,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#request-body",
  title: _jsx(_Fragment, {
    children: "Request body"
  })
}, {
  depth: 3,
  url: "#common-callback-fields",
  title: _jsx(_Fragment, {
    children: "Common callback fields"
  })
}, {
  depth: 3,
  url: "#media-gateway-event-types",
  title: _jsx(_Fragment, {
    children: "Media Gateway event types"
  })
}, {
  depth: 3,
  url: "#media-gateway-payload-objects",
  title: _jsx(_Fragment, {
    children: "Media Gateway payload objects"
  })
}, {
  depth: 3,
  url: "#live_stream_aborted-error-codes",
  title: _jsxs(_Fragment, {
    children: [_jsx("code", {
      children: "live_stream_aborted"
    }), " error codes"]
  })
}, {
  depth: 3,
  url: "#media-gateway-event-types-1",
  title: _jsx(_Fragment, {
    children: "Media Gateway event types"
  })
}, {
  depth: 2,
  url: "#ip-address-query-api",
  title: _jsx(_Fragment, {
    children: "IP address query API"
  })
}, {
  depth: 2,
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
  };
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Media Gateway events. With Notifications, you can subscribe to Media Gateway events and receive notifications in real time."
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsxs(_components.p, {
      children: ["Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns ", _jsx(_components.code, {
        children: "200 OK"
      }), " to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users."]
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
        children: ["A ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "valid Agora account"
        })]
      }), `
`, _jsxs(_components.li, {
        children: ["An ", _jsx(_components.a, {
          href: "/en/introduction/account",
          children: "active Agora project"
        })]
      }), `
`, _jsx(_components.li, {
        children: "A computer with Internet access"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "If your network access is restricted by a firewall, call the IP address query API to retrieve the Notifications IP addresses, then configure the firewall to allow those IP addresses. The REST API reference for that endpoint remains out of scope for this prose migration."
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
        children: "Create your webhook"
      }), `
`, _jsx(_components.li, {
        children: "Enable Notifications"
      }), `
`, _jsx(_components.li, {
        children: "Verify Notifications signatures"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "create-your-webhook",
      children: "Create your webhook"
    }), `
`, _jsxs(_components.p, {
      children: ["Once Notifications is enabled, Agora SDRTN(R) sends notification callbacks as ", _jsx(_components.code, {
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
      }), " server that handles these requests. In a production environment you write this in your web infrastructure. For development purposes, best practice is to create a simple local server and use a service such as ", _jsx(_components.a, {
        href: "https://ngrok.com/download",
        children: "ngrok"
      }), " to supply a public URL that you register with Agora when you enable Notifications."]
    }), `
`, _jsx(_components.p, {
      children: "To do this, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
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
          children: "Create a new project directory:"
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
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["In the project directory, create a new file ", _jsx(_components.code, {
            children: "main.go"
          }), " and add the following code:"]
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
                  children: "    NoticeID  "
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
                  children: '                 `json:"noticeId"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    ProductID "
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
                  children: '                  `json:"productId"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    EventType "
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
                  children: '                    `json:"eventType"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    NotifyMs  "
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
                  children: '                  `json:"notifyMs"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    SID       "
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
                  children: '                 `json:"sid"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    Payload   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "map"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
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
                  children: "]"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "interface"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{} "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '`json:"payload"`'
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
                  children: ' "Agora Notifications demo"'
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
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "n--- Webhook Notification Received ---"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'n"'
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
                  children: '"Notice ID: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'n"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", req.NoticeID)"
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
                  children: '"Event Type: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'n"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", req.EventType)"
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
                  children: '"Session ID: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'n"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", req.SID)"
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
                  children: '"Timestamp: '
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%d\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'n"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", req.NotifyMs)"
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
                  children: "    prettyJSON, _ "
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
                  children: "MarshalIndent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(req.Payload, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '""'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"  "'
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
                  children: '"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "nFull Payload:"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "n"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "%s\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'n"'
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
                  children: "string"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(prettyJSON))"
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
                  children: '"Notification received successfully"'
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
                  children: "%s\\\\"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: 'n"'
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
                  children: '"Ready to receive Agora webhook notifications..."'
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
          children: "Run the server:"
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
`, _jsxs(_components.p, {
          children: ["Create a public URL for your server. In this example you use ", _jsx(_components.code, {
            children: "ngrok"
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
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " YOUR_AUTH_TOKEN"
                })]
              }), `
`, _jsxs(_components.span, {
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
              })]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["To obtain an auth token, ", _jsx(_components.a, {
        href: "https://dashboard.ngrok.com/signup",
        children: "sign up"
      }), " with ngrok."]
    }), `
`, _jsxs(_components.ol, {
      start: "6",
      children: [`
`, _jsxs(_components.li, {
        children: ["Test the server by opening the public URL provided by ngrok and sending a ", _jsx(_components.code, {
          children: "POST"
        }), " request to ", _jsx(_components.code, {
          children: "https://<ngrok_url>/ncsNotify"
        }), " with the required JSON payload."]
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
            children: "Media Gateway"
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
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "IP whitelist"
              }), ": If your server is behind a firewall, enable this option and add the Agora Notifications server IP addresses to the firewall's allowed IP list."]
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
          children: ["Select ", _jsx(_components.strong, {
            children: "Run health check"
          }), ", and when it succeeds, select ", _jsx(_components.strong, {
            children: "Save"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "verify-notifications-signatures",
      children: "Verify Notifications signatures"
    }), `
`, _jsx(_components.p, {
      children: "Best practice is to validate the request signature in your webhook server before you process the callback payload."
    }), `
`, _jsx(_components.h3, {
      id: "add-signature-verification",
      children: "Add signature verification"
    }), `
`, _jsx(_components.p, {
      children: "To communicate securely between Notifications and your webhook, Agora uses signatures for identity verification:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "When you configure Notifications in Agora Console, Agora generates a secret for verification."
      }), `
`, _jsxs(_components.li, {
        children: ["When sending a notification, Notifications generates signature values from the secret using ", _jsx(_components.code, {
          children: "HMAC/SHA1"
        }), " and ", _jsx(_components.code, {
          children: "HMAC/SHA256"
        }), ". These signatures are added as ", _jsx(_components.code, {
          children: "Agora-Signature"
        }), " and ", _jsx(_components.code, {
          children: "Agora-Signature-V2"
        }), " in the HTTPS request header."]
      }), `
`, _jsx(_components.li, {
        children: "When your server receives a callback, you can verify either signature using the secret, the raw request body, and the matching algorithm."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The following sample uses ", _jsx(_components.code, {
        children: "crypto/sha1"
      }), "."]
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
              children: ' "REPLACE_WITH_YOUR_SECRET"'
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
`, _jsx(_components.p, {
      children: "After reading the request body, add:"
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
`, _jsx(_components.h2, {
      id: "callback-reference",
      children: "Callback reference"
    }), `
`, _jsx(_components.p, {
      children: "Notification callbacks include the following headers and body fields."
    }), `
`, _jsx(_components.h3, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field name"
          }), _jsx(_components.th, {
            children: "Value"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Content-Type"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "application/json"
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Agora-Signature"
            })
          }), _jsx(_components.td, {
            children: "Signature generated with the secret and the HMAC/SHA1 algorithm. Use it to verify the callback body."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Agora-Signature-V2"
            })
          }), _jsx(_components.td, {
            children: "Signature generated with the secret and the HMAC/SHA256 algorithm. Use it to verify the callback body."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Field name"
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
              children: "noticeId"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Unique ID of the notification callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "productId"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: ["Product ID. When this value is ", _jsx(_components.code, {
              children: "10"
            }), ", the callback belongs to Media Gateway."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Event type code for the current callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "notifyMs"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Callback timestamp in milliseconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Streaming session ID. Each streaming task gets a unique SID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["Event-specific data. The fields depend on ", _jsx(_components.code, {
              children: "eventType"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.p, {
      children: ["The callback payload also contains common fields such as ", _jsx(_components.code, {
        children: "noticeId"
      }), ", ", _jsx(_components.code, {
        children: "productId"
      }), ", ", _jsx(_components.code, {
        children: "eventType"
      }), ", ", _jsx(_components.code, {
        children: "notifyMs"
      }), ", ", _jsx(_components.code, {
        children: "sid"
      }), ", and ", _jsx(_components.code, {
        children: "payload"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "common-callback-fields",
      children: "Common callback fields"
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
              children: "noticeId"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Unique ID of the notification callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "productId"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: ["Product identifier. When this value is ", _jsx(_components.code, {
              children: "10"
            }), ", the callback belongs to Media Gateway."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Event type code for the current callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "notifyMs"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Callback timestamp in milliseconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "sid"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Streaming session ID. Each initiated streaming task generates a unique SID."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["Event-specific data. The fields in this object depend on ", _jsx(_components.code, {
              children: "eventType"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h3, {
      id: "media-gateway-event-types",
      children: "Media Gateway event types"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Event type"
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Payload highlights"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_stream_connected"
            })
          }), _jsx(_components.td, {
            children: "The gateway has received the RTMP or SRT stream and successfully entered the channel."
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "rtcInfo"
            }), ", ", _jsx(_components.code, {
              children: "transcoding"
            }), ", ", _jsx(_components.code, {
              children: "beginAt"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_stream_disconnected"
            })
          }), _jsx(_components.td, {
            children: "The gateway has actively or passively disconnected and left the channel."
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "rtcInfo"
            }), ", ", _jsx(_components.code, {
              children: "streamStats"
            }), ", ", _jsx(_components.code, {
              children: "beginAt"
            }), ", ", _jsx(_components.code, {
              children: "endAt"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_stream_aborted"
            })
          }), _jsx(_components.td, {
            children: "The gateway received a stream but terminated it because of an error."
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "rtcInfo"
            }), ", ", _jsx(_components.code, {
              children: "beginAt"
            }), ", ", _jsx(_components.code, {
              children: "errorCode"
            }), ", ", _jsx(_components.code, {
              children: "reason"
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_profile_updated"
            })
          }), _jsx(_components.td, {
            children: "Stream properties have been updated, for example after the first audio or video frame is received."
          }), _jsxs(_components.td, {
            children: [_jsx(_components.code, {
              children: "rtcInfo"
            }), ", ", _jsx(_components.code, {
              children: "videoProfile"
            }), ", ", _jsx(_components.code, {
              children: "audioProfile"
            }), ", ", _jsx(_components.code, {
              children: "beginAt"
            })]
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "For Media Gateway events, payload objects commonly include:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "rtcInfo"
        }), ": RTC information such as ", _jsx(_components.code, {
          children: "channel"
        }), " and ", _jsx(_components.code, {
          children: "uid"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "transcoding"
        }), ": The transcoding configuration used for the stream"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "streamStats"
        }), ": Statistics such as total input and output bytes"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "videoProfile"
        }), ": Video properties such as codec, width, height, and GOP"]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "audioProfile"
        }), ": Audio properties such as sample rate and channel count"]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "media-gateway-payload-objects",
      children: "Media Gateway payload objects"
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
              children: "rtcInfo"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["RTC information for the stream, including ", _jsx(_components.code, {
              children: "channel"
            }), " and ", _jsx(_components.code, {
              children: "uid"
            }), ". When ", _jsx(_components.code, {
              children: "channel"
            }), " or ", _jsx(_components.code, {
              children: "uid"
            }), " is empty or ", _jsx(_components.code, {
              children: "0"
            }), " in the streaming key, Media Gateway uses generated values and reports them here."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "transcoding"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["Transcoding configuration used for the stream, including ", _jsx(_components.code, {
              children: "audio"
            }), " and ", _jsx(_components.code, {
              children: "video"
            }), " settings."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "streamStats"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["Stream statistics including ", _jsx(_components.code, {
              children: "inputAudioBytes"
            }), ", ", _jsx(_components.code, {
              children: "inputVideoBytes"
            }), ", ", _jsx(_components.code, {
              children: "outputAudioBytes"
            }), ", and ", _jsx(_components.code, {
              children: "outputVideoBytes"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "videoProfile"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["Video properties such as ", _jsx(_components.code, {
              children: "codec"
            }), ", ", _jsx(_components.code, {
              children: "width"
            }), ", ", _jsx(_components.code, {
              children: "height"
            }), ", and ", _jsx(_components.code, {
              children: "gop"
            }), ". Not applicable for audio-only streams."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "audioProfile"
            })
          }), _jsx(_components.td, {
            children: "Object"
          }), _jsxs(_components.td, {
            children: ["Audio properties such as ", _jsx(_components.code, {
              children: "sampleRate"
            }), " and ", _jsx(_components.code, {
              children: "channels"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "beginAt"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Streaming start time in RFC 3339 format."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "endAt"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "Streaming end time in RFC 3339 format. Returned in disconnect callbacks."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "errorCode"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "Error code returned when the stream is aborted."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsxs(_components.td, {
            children: ["Error message corresponding to ", _jsx(_components.code, {
              children: "errorCode"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsxs(_components.h3, {
      id: "live_stream_aborted-error-codes",
      children: [_jsx(_components.code, {
        children: "live_stream_aborted"
      }), " error codes"]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "errorCode"
            })
          }), _jsx(_components.th, {
            children: "Description"
          }), _jsx(_components.th, {
            children: "Recommended action"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "1"
            })
          }), _jsxs(_components.td, {
            children: ["Illegal ", _jsx(_components.code, {
              children: "streamKey"
            }), ", for example an empty ", _jsx(_components.code, {
              children: "channelName"
            }), " or unsupported characters."]
          }), _jsxs(_components.td, {
            children: ["Check the ", _jsx(_components.code, {
              children: "streamKey"
            }), " format, especially for locally generated keys."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "2"
            })
          }), _jsxs(_components.td, {
            children: ["Invalid ", _jsx(_components.code, {
              children: "streamKey"
            }), ", such as an expired or deleted key."]
          }), _jsxs(_components.td, {
            children: ["Create a new ", _jsx(_components.code, {
              children: "streamKey"
            }), " and try again."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "3"
            })
          }), _jsxs(_components.td, {
            children: ["No permission to use this ", _jsx(_components.code, {
              children: "streamKey"
            }), ", for example when the custom domain and app ID do not match."]
          }), _jsxs(_components.td, {
            children: ["Check whether the ", _jsx(_components.code, {
              children: "streamKey"
            }), " matches the domain name used for the push."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "4"
            })
          }), _jsx(_components.td, {
            children: "Number of concurrent streams exceeds the limit."
          }), _jsx(_components.td, {
            children: "Wait and retry."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "5"
            })
          }), _jsx(_components.td, {
            children: "Conflict detected, for example pushing to the same channel at the same time."
          }), _jsx(_components.td, {
            children: "If the streams are not being pushed at the same time, try again after 5 to 10 seconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "6"
            })
          }), _jsx(_components.td, {
            children: "Stream attribute exceeds the limit. Currently, this applies to bitrate only."
          }), _jsx(_components.td, {
            children: "Check the streaming software configuration and lower the target bitrate."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "7"
            })
          }), _jsx(_components.td, {
            children: "Streaming without audio or video data for more than 10 seconds."
          }), _jsx(_components.td, {
            children: "Check whether the last push exited abnormally, and then try again."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "8"
            })
          }), _jsx(_components.td, {
            children: "Failed to join the channel."
          }), _jsxs(_components.td, {
            children: ["Check the ", _jsx(_components.code, {
              children: "reason"
            }), " field for the specific RTC failure reason."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "9"
            })
          }), _jsx(_components.td, {
            children: "Disconnected from the main network."
          }), _jsx(_components.td, {
            children: "Retry several times. If the problem persists, contact technical support to confirm whether the app certificate provided during activation is valid."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "10"
            })
          }), _jsx(_components.td, {
            children: "Unknown internal service error."
          }), _jsx(_components.td, {
            children: "Retry several times. If the problem persists, contact technical support."
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: "The detailed REST and webhook field reference remains outside this prose migration scope."
    }), `
`, _jsx(_components.h3, {
      id: "media-gateway-event-types-1",
      children: "Media Gateway event types"
    }), `
`, _jsx(_components.p, {
      children: "Notifications can notify your server of the following Media Gateway events:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.th, {
            children: "Event name"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "1"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_stream_connected"
            })
          }), _jsx(_components.td, {
            children: "The gateway has received the RTMP or SRT stream and successfully entered the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "2"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_stream_disconnected"
            })
          }), _jsx(_components.td, {
            children: "The gateway has actively or passively disconnected and left the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "3"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_stream_aborted"
            })
          }), _jsx(_components.td, {
            children: "The gateway has received an RTMP or SRT stream but terminated it for some reason."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "4"
            })
          }), _jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "live_profile_updated"
            })
          }), _jsx(_components.td, {
            children: "Stream properties have been updated, such as the first audio or video frame, or an audio or video profile change."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "ip-address-query-api",
      children: "IP address query API"
    }), `
`, _jsx(_components.p, {
      children: "If your server that receives notification callbacks is behind a firewall, call the IP address query API to retrieve the IP addresses of Notifications and configure your firewall to trust those IP addresses."
    }), `
`, _jsx(_components.p, {
      children: "Relevant details:"
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
`, _jsx(_components.li, {
        children: "Body: none"
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The REST API reference for this endpoint remains out of scope for this prose migration."
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Notifications does not guarantee that callbacks arrive in the same order as events occur."
      }), `
`, _jsx(_components.li, {
        children: "Your server may receive more than one callback for a single event."
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
