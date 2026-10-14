import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Receive notifications about channel events",
  description: "Receive notification of channel events in real time."
};
export let _markdown = `

A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Video Calling events. With Notifications, you can subscribe to Video Calling events and receive notifications in real time.

## Understand the tech [#understand-the-tech]

Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns \`200 Ok\` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users.

The following figure illustrates the workflow when Notifications is enabled for the specific Video Calling events you subscribe to:

**Channel events notification workflow**

![rtc-channel](https://assets-docs.agora.io/images/shared/ncs-worflow.svg)

1. A user commits an action that creates an event.
2. Notifications sends an HTTPS POST request to your webhook.
3. Your server validates the request signature, then sends a response to Notifications within 10 seconds. The response body must be in JSON.

If Notifications receives \`200 OK\` within 10 seconds of sending the initial notification, the callback is considered successful. If these conditions are not met, Notifications immediately resends the notification. The interval between notification attempts gradually increases. Notifications stops sending notifications after three retries.

## Prerequisites [#prerequisites]

To set up and use Notifications, you must have:

* A [valid Agora account](/en/introduction/account#sign-up-for-an-agora-account).
* An [active Agora project](/en/introduction/account#your-first-agora-project).
* A computer with Internet access.

  If your network access is restricted by a firewall, call the [IP address query API](#ip-address-query-api) to retrieve the Notifications IP addresses, then configure the firewall to allow these IP addresses.

## Handle notifications for specific events [#handle-notifications-for-specific-events]

In order to handle notifications for the events you subscribe to, you need to:

* [Create your webhook](#create-your-webhook)
* [Enable Notifications](#enable-notifications)
* [Verify Notifications signatures](#add-signature-verification)
* [Handle redundant notifications and abnormal user activity](#handle-redundant-notifications-and-abnormal-user-activity)
* [Implement online user status tracking](#implement-online-user-status-tracking)

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
     NoticeID  string \`json:"noticeId"\`
     ProductID int64 \`json:"productId"\`
     EventType int  \`json:"eventType"\`
     Payload  Payload \`json:"payload"\`
   }

   type Payload struct {
     ClientSeq  int64 \`json:"clientSeq"\`
     UID     int  \`json:"uid"\`
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

### Enable Notifications [#enable-notifications]

To enable Webhook notifications for RTC channel events:

1. In [Agora Console](https://console.agora.io), select **Webhooks** from the sidebar.

2. Select **New Webhook**.

3. From the **Product** dropdown, select **RTC**.

   ![RTC Webhooks](https://assets-docs.agora.io/images/console/webhook-rtc.png)

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

      In test event callbacks, the channelName is \`test_webhook\`, and the uid is \`12121212\`.

   2. After receiving each test event callback, your server must respond within 10 seconds with a status code of \`200\`. The response body must be in JSON format.

7. When the health check succeeds, select **Save**.

   If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:

   | Status code | Error                   | Description                                                                                                                                                                                                                                                                                                             |
   | ----------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | \`590\`       | Request timeout         | Your server does not return the status code \`200\` within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working. |
   | \`591\`       | Domain name unreachable | The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed.                                                                                                                                                                                             |
   | \`592\`       | Certificate error       | The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list.            |
   | Other       | Other response errors   | Your server returns a response with a status code other than \`200\`. See the prompt in Agora Console for the specific status code and error messages.                                                                                                                                                                    |

### Add signature verification [#add-signature-verification]

To communicate securely between Notifications and your webhook, Agora SDRTN® uses signatures for identity verification as follows:

1. When you configure Notifications in Agora Console, Agora SDRTN® generates a secret you use for verification.
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

   // calcSignatureV1 computes the HMAC/SHA1 signature for a given payload and secret
   func calcSignatureV1(secret, payload string) string {
     mac := hmac.New(sha1.New, []byte(secret))
     mac.Write([]byte(payload))
     return hex.EncodeToString(mac.Sum(nil))
   }

   // verify checks if the provided signature matches the HMAC/SHA1 signature of the request body
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

4. To test the server, follow the steps given in the [Enable Notifications](#enable-notifications) section.

5. When you receive an event from the console, and if the signature matches, the event details are displayed in your browser.

### Handle redundant notifications and abnormal user activity [#handle-redundant-notifications-and-abnormal-user-activity]

When using Notifications to maintain the online status of your app users, your server might experience the following issues:

* **Message notifications are redundant**. You receive multiple notifications because the Agora Notifications server can send more than one notification callback for each channel event to ensure reliability of the service.
* **Message notifications arrive out of order**. Network issues cause callbacks to arrive at your server in a different order than the order of event occurrence.

To accurately maintain the online status of users, your server needs to be able to deal with redundant notifications and handle received notifications in the same order as events occur. The following section shows you how to use channel event callbacks to accomplish this.

#### Handle redundant or out of order notifications [#handle-redundant-or-out-of-order-notifications]

Agora Notifications sends RTC channel event callbacks to your server. All channel events, except for \`101\` and \`102\` events, contain the \`clientSeq\` field (\`Uint64\`) in \`payload\`, which represents the sequence number of an event. This field is used to identify the order in which events occur on the app client. For notification callbacks reporting the activities of the same user, the value of the \`clientSeq\` field increases as events happen.

Refer to the following steps to use the \`clientSeq\` field to enable your server to handle redundant messages, and messages arriving out of order:

1. Enable Agora Notifications, and subscribe to RTC channel event callbacks. Best practice is to subscribe to the following event types according to your use case:

   * In the \`LIVE_BROADCASTING\` profile: \`103\`, \`104\`, \`105\`, \`106\`, \`111\`, and \`112\`.
   * In the \`COMMUNICATION\` profile: \`107\`, \`108\`, \`111\`, and \`112\`.

2. Use the channel event callbacks to get the latest status updates about the following at your server:

   * Channel lists
   * User lists in each channel
   * Data for each user, including the user ID, user role, whether the user is in a channel, and \`clientSeq\` of channel events

3. When receiving notification callbacks of a user, search for the user in the user lists. If there is no data for the user, create data specific to the user.

4. Compare the value in the \`clientSeq\` field of the latest notification callback you receive with that of the last notification callback handled by your server:

   * If the former is greater than the latter, the notification callback needs to be handled.
   * If the former is less than the latter, the notification callback should be ignored.

5. When receiving notification callbacks reporting a user leaving a channel, wait for one minute before deleting the user data. If it is deleted immediately, your server cannot handle notifications in the same order as channel events happen when receiving redundant notifications or notifications out of order.

#### Deal with abnormal user activities [#deal-with-abnormal-user-activities]

When your server receives a notification callback of event \`104\` with reason as \`999\`, it means that the user is considered to have abnormal activities due to frequent login and logout actions. In this case, best practice is that your server calls the Banning user privileges API to remove the user from the current channel one minute after receiving such notification callback; otherwise, the notification callbacks your server receives about the user's events might be redundant or arrive out of order, which makes it hard for you to accurately maintain the online status of this user.

### Implement online user status tracking [#implement-online-user-status-tracking]

This section provides sample Go code to show how to use channel event callbacks to maintain online user status at your app server.

To maintain a user registry, take the following steps:

1. Replace the content of the \`main.go\` file with the following code:

   \`\`\`go
   package main

   import (
     "crypto/hmac"
     "crypto/sha1"
     "encoding/hex"
     "encoding/json"
     "fmt"
     "io"
     "log"
     "net/http"
     "sync"
     "time"
   )

   const secret = "<Add Your secret key here>"

   type WebhookRequest struct {
     NoticeID string \`json:"noticeId"\`
     ProductID int64  \`json:"productId"\`
     EventType int   \`json:"eventType"\`
     Payload  Payload \`json:"payload"\`
   }

   type Payload struct {
     ClientSeq  int64 \`json:"clientSeq"\`
     UID     int  \`json:"uid"\`
     ChannelName string \`json:"channelName"\`
   }

   const (
     EventBroadcasterJoin     = 103
     EventBroadcasterQuit     = 104
     EventAudienceJoin      = 105
     EventAudienceQuit      = 106
     EventChangeRoleToBroadcaster = 111
     EventChangeRoleToAudience  = 112

     RoleBroadcaster = 1
     RoleAudience  = 2
     WaitTimeoutMs  = 60 * 1000
   )

   var (
     channels = make(map[string]*Channel)
     mu    sync.Mutex
   )

   type User struct {
     UID      int
     Role     int
     IsOnline   bool
     LastClientSeq int64
   }

   type Channel struct {
     Users map[int]*User
   }

   func handleNCSEvent(channelName string, uid int, eventType int, clientSeq int64) {
     mu.Lock()
     defer mu.Unlock()

     if !isValidEventType(eventType) {
       return
     }

     isOnlineInNotice := isUserOnlineInNotice(eventType)
     roleInNotice := getUserRoleInNotice(eventType)

     channel, exists := channels[channelName]
     if !exists {
       channel = &Channel{Users: make(map[int]*User)}
       channels[channelName] = channel
       fmt.Println("New channel", channelName, "created")
     }

     user, exists := channel.Users[uid]
     if !exists {
       user = &User{UID: uid, Role: roleInNotice, IsOnline: isOnlineInNotice, LastClientSeq: clientSeq}
       channel.Users[uid] = user

       if isOnlineInNotice {
         fmt.Println("New User", uid, "joined channel", channelName)
       } else {
         delayedRemoveUserFromChannel(channelName, uid, clientSeq)
       }
     } else if clientSeq > user.LastClientSeq {
       user.Role = roleInNotice
       user.IsOnline = isOnlineInNotice
       user.LastClientSeq = clientSeq

       if !isOnlineInNotice && user.IsOnline {
         fmt.Println("User", uid, "quit channel", channelName)
         delayedRemoveUserFromChannel(channelName, uid, clientSeq)
       }
     }
   }

   func delayedRemoveUserFromChannel(channelName string, uid int, clientSeq int64) {
     time.AfterFunc(WaitTimeoutMs*time.Millisecond, func() {
       mu.Lock()
       defer mu.Unlock()

       channel, exists := channels[channelName]
       if !exists {
         return
       }

       user, exists := channel.Users[uid]
       if !exists {
         return
       }

       if user.LastClientSeq == clientSeq && !user.IsOnline {
         delete(channel.Users, uid)
         fmt.Println("User", uid, "removed from channel", channelName)
       }
     })
   }

   func isValidEventType(eventType int) bool {
     return eventType == EventBroadcasterJoin ||
       eventType == EventBroadcasterQuit ||
       eventType == EventAudienceJoin ||
       eventType == EventAudienceQuit ||
       eventType == EventChangeRoleToBroadcaster ||
       eventType == EventChangeRoleToAudience
   }

   func isUserOnlineInNotice(eventType int) bool {
     return eventType == EventBroadcasterJoin ||
       eventType == EventAudienceJoin ||
       eventType == EventChangeRoleToBroadcaster ||
       eventType == EventChangeRoleToAudience
   }

   func getUserRoleInNotice(eventType int) int {
     switch eventType {
     case EventBroadcasterJoin, EventChangeRoleToBroadcaster:
       return RoleBroadcaster
     case EventAudienceJoin, EventChangeRoleToAudience:
       return RoleAudience
     default:
       return RoleAudience
     }
   }

   func calcSignatureV1(secret, payload string) string {
     mac := hmac.New(sha1.New, []byte(secret))
     mac.Write([]byte(payload))
     return hex.EncodeToString(mac.Sum(nil))
   }

   func verify(requestBody, signature string) bool {
     calculatedSignature := calcSignatureV1(secret, requestBody)
     return calculatedSignature == signature
   }

   func rootHandler(w http.ResponseWriter, r *http.Request) {
     response := \`<h1>Agora Notifications demo</h1>\`
     w.WriteHeader(http.StatusOK)
     w.Write([]byte(response))
   }

   func ncsHandler(w http.ResponseWriter, r *http.Request) {
     agoraSignature := r.Header.Get("Agora-Signature")

     body, err := io.ReadAll(r.Body)
     if err != nil {
       http.Error(w, "Unable to read request body", http.StatusBadRequest)
       return
     }

     if !verify(string(body), agoraSignature) {
       http.Error(w, "Invalid signature", http.StatusUnauthorized)
       return
     }

     var req WebhookRequest
     if err := json.Unmarshal(body, &req); err != nil {
       http.Error(w, "Invalid JSON", http.StatusBadRequest)
       return
     }

     handleNCSEvent(req.Payload.ChannelName, req.Payload.UID, req.EventType, req.Payload.ClientSeq)

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

2. Run the server:

   \`\`\`sh
   go run main.go
   \`\`\`

3. Configure Notifications in Agora Console, and subscribe to the relevant RTC channel event callbacks.

### Request Header [#request-header]

The header of notification callbacks contains the following fields:

| Field name           | Value                                                                                                                                                                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`Content-Type\`       | \`application/json\`                                                                                                                                                                                                                                   |
| \`Agora-Signature\`    | The signature generated by Agora using the **Secret** and the \`HMAC/SHA1\` algorithm. You need to use the Secret and \`HMAC/SHA1\` algorithm to verify the signature value. For details, see [Signature verification](#add-signature-verification).     |
| \`Agora-Signature-V2\` | The signature generated by Agora using the **Secret** and the \`HMAC/SHA256\` algorithm. You need to use the Secret and \`HMAC/SHA256\` algorithm to verify the signature value. For details, see [Signature verification](#add-signature-verification). |

### Request Body [#request-body]

The request body of notification callbacks contains the following fields:

| Field name  | Type        | Description                                                                                                                                             |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`noticeId\`  | String      | The notification ID, identifying the notification callback when the event occurs.                                                                       |
| \`productId\` | Number      | The product ID:- \`1\`: Realtime Communication (RTC) service
- \`3\`: Cloud Recording
- \`4\`: Media Pull
- \`5\`: Media Push                                   |
| \`eventType\` | Number      | The type of event being notified. For details, see [Event types](#event-types).                                                                         |
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

The Agora Notifications server notifies your server of the following RTC channel event types when you use the RTC service:

|                         eventType                        | Event name                                 | Description                                                                                                                         |
| :------------------------------------------------------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
|               [\`101\`](#101-channel-create)               | channel create                             | Initializes the channel.                                                                                                            |
|               [\`102\`](#102-channel-destroy)              | channel destroy                            | Destroys the channel.                                                                                                               |
|          [\`103\`](#103-broadcaster-join-channel)          | broadcaster join channel                   | In the streaming profile, the host joins the channel.                                                                               |
|          [\`104\`](#104-broadcaster-leave-channel)         | broadcaster leave channel                  | In the streaming profile, the host leaves the channel.                                                                              |
|            [\`105\`](#105-audience-join-channel)           | audience join channel                      | In the streaming profile, an audience member joins the channel.                                                                     |
|           [\`106\`](#106-audience-leave-channel)           | audience leave channel                     | In the streaming profile, an audience member leaves the channel.                                                                    |
|  [\`107\`](#107-user-join-channel-with-communication-mode) | user join channel with communication mode  | In the communication profile, a user joins the channel.                                                                             |
| [\`108\`](#108-user-leave-channel-with-communication-mode) | user leave channel with communication mode | In the communication profile, a user leaves the channel.                                                                            |
|      [\`111\`](#111-client-role-change-to-broadcaster)     | client role change to broadcaster          | In the communication profile in RTC v4.x products or in the streaming profile, an audience member switches their user role to host. |
|       [\`112\`](#112-client-role-change-to-audience)       | client role change to audience             | In the communication profile in RTC v4.x products or in the streaming profile, a host switches their user role to audience member.  |

#### 101 channel create [#101-channel-create]

This event type indicates that a channel is initialized when the first user joins the channel. The payload contains the following fields:

| Field name    | Type   | Description                                                           |
| ------------- | ------ | --------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                              |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server. |

##### Example [#example-1]

\`\`\`json
{
  "channelName":"test_webhook",
  "ts":1560399999
}
\`\`\`

#### 102 channel destroy [#102-channel-destroy]

This event type indicates that the last user in the channel leaves the channel and the channel is destroyed. The payload contains the following fields:

| Field name    | Type   | Description                                                           |
| ------------- | ------ | --------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                              |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server. |
| \`lastUid\`     | Number | The ID of the last user to leave the channel.                         |

<CalloutContainer type="info">
  <CalloutDescription>
    If multiple people leave the channel at the same time, Agora Notifications may return different \`lastUid\` values. You can choose any one of them.
  </CalloutDescription>
</CalloutContainer>

##### Example [#example-2]

\`\`\`json
{
  "channelName":"test_webhook",
  "ts":1560399999,
  "lastUid":12121212
}
\`\`\`

#### 103 broadcaster join channel [#103-broadcaster-join-channel]

This event type indicates that a host joins the channel in the streaming profile. The payload contains the following fields:

| Field name    | Type   | Description                                                                                                                                                                         |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                            |
| \`uid\`         | Number | The user ID of the host in the channel.                                                                                                                                             |
| \`platform\`    | Number | The platform type of the host's device:- \`1\`: Android
- \`2\`: iOS
- \`5\`: Windows
- \`6\`: Linux
- \`7\`: Web
- \`8\`: macOS
- \`0\`: Other platform                                          |
| \`clientType\`  | Number | The type of services used by the host on Linux. Common return values include:- \`3\`: On-premise Recording
- \`10\`: Cloud RecordingThis field is only returned when \`platform\` is \`6\`. |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order.       |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                               |

##### Example [#example-3]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "platform":1,
  "clientSeq":1625051030746,
  "ts":1560396843
}
\`\`\`

#### 104 broadcaster leave channel [#104-broadcaster-leave-channel]

This event type indicates that a host leaves the channel in the streaming profile. The payload contains the following fields:

| Field name    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| \`uid\`         | Number | The user ID of the host in the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| \`platform\`    | Number | The platform type of the host's device:- \`1\`: Android
- \`2\`: iOS
- \`5\`: Windows
- \`6\`: Linux
- \`7\`: Web
- \`8\`: macOS
- \`0\`: Other platform                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \`clientType\`  | Number | The type of services used by the host on Linux. Common return values include:- \`3\`: On-premise Recording
- \`10\`: Cloud RecordingThis field is only returned when \`platform\` is \`6\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| \`reason\`      | Number | The reason why the host leaves the channel. Values include:- \`1\`: The host quits the call.
- \`2\`: The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds.
- \`3\`: Permission issues. For example, the host is kicked out of the channel by the administrator through the Banning user privileges RESTful API.
- \`4\`: Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client.
- \`5\`: The host uses a new device to join the channel, which forces the old device to leave.
- \`9\`: The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN.
- \`10\`: Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status.
- \`12\`: Token error or expired token.
- \`99\`: The SDK disconnected from the Agora server due to an unknown network problem. Normally, the SDK tries to reconnect.
- \`999\`: The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the \`104\` or \`106\` event callback with reason \`999\`, your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel.
- \`0\`: Other reasons. |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| \`duration\`    | Number | The length of time (s) that the host stays in the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

##### Example [#example-4]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "platform":1,
  "clientSeq":1625051030789,
  "reason":1,
  "ts":1560396943,
  "duration":600
}
\`\`\`

#### 105 audience join channel [#105-audience-join-channel]

This event type indicates that an audience member joins the channel in the streaming profile. The payload includes the following fields:

| Field name    | Type   | Description                                                                                                                                                                         |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                            |
| \`uid\`         | Number | The user ID of the audience member in the channel.                                                                                                                                  |
| \`platform\`    | Number | The platform type of the audience member's device:- \`1\`: Android
- \`2\`: iOS
- \`5\`: Windows
- \`6\`: Linux
- \`7\`: Web
- \`8\`: macOS
- \`0\`: Other platform                               |
| \`clientType\`  | Number | The type of services used by the host on Linux. Common return values include:- \`3\`: On-premise Recording
- \`10\`: Cloud RecordingThis field is only returned when \`platform\` is \`6\`. |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order.       |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                               |

##### Example [#example-5]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "platform":1,
  "clientSeq":1625051035346,
  "ts":1560396843
}
\`\`\`

#### 106 audience leave channel [#106-audience-leave-channel]

This event type indicates that an audience member leaves the channel in the streaming profile. The payload includes the following fields:

| Field name    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \`uid\`         | Number | The user ID of the audience member in the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| \`platform\`    | Number | The platform type of the audience member's device:- \`1\`: Android
- \`2\`: iOS
- \`5\`: Windows
- \`6\`: Linux
- \`7\`: Web
- \`8\`: macOS
- \`0\`: Other platform                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`clientType\`  | Number | The type of services used by the audience member on Linux. Common return values include:- \`3\`: On-premise Recording
- \`10\`: Cloud RecordingThis field is only returned when \`platform\` is \`6\`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| \`reason\`      | Number | The reason why the audience member leaves the channel. Values include:- \`1\`: The audience member quits the call.
- \`2\`: The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds.
- \`3\`: Permission issues. For example, the audience member is kicked out of the channel by the administrator through the Banning user privileges RESTful API.
- \`4\`: Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client.
- \`5\`: The audience member uses a new device to join the channel, which forces the old device to leave.
- \`9\`: The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN.
- \`10\`: Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status.
- \`999\`: The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the \`104\` or \`106\` event callback with reason \`999\`, your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel.
- \`0\`: Other reasons. |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \`duration\`    | Number | The length of time (s) that the audience member stays in the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

##### Example [#example-6]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "platform":1,
  "clientSeq":1625051035390,
  "reason":1,
  "ts":1560396943,
  "duration":600
}
\`\`\`

#### 107 user join channel with communication mode [#107-user-join-channel-with-communication-mode]

This event type indicates that a user joins the channel in the communication profile. The payload includes the following fields:

| Field name    | Type   | Description                                                                                                                                                                   |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                      |
| \`uid\`         | Number | The user ID of the user in the channel.                                                                                                                                       |
| \`platform\`    | Number | The platform type of the user's device:- \`1\`: Android
- \`2\`: iOS
- \`5\`: Windows
- \`6\`: Linux
- \`7\`: Web
- \`8\`: macOS
- \`0\`: Other platform                                    |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order. |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                         |

##### Example [#example-7]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "platform":1,
  "clientSeq":1625051035369,
  "ts":1560396834
}
\`\`\`

#### 108 user leave channel with communication mode [#108-user-leave-channel-with-communication-mode]

This event type indicates that a user leaves the channel in the communication profile. The payload includes the following fields:

| Field name    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \`uid\`         | Number | The user ID of the user in the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \`platform\`    | Number | The platform type of the user's device:- \`1\`: Android
- \`2\`: iOS
- \`5\`: Windows
- \`6\`: Linux
- \`7\`: Web
- \`8\`: macOS
- \`0\`: Other platform                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| \`reason\`      | Number | The reason why the user leaves the channel. Values include:- \`1\`: The user quits the call.
- \`2\`: The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds.
- \`3\`: Permission issues. For example, the user is kicked out of the channel by the administrator through the Banning user privileges RESTful API.
- \`4\`: Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client.
- \`5\`: The user uses a new device to join the channel, which forces the old device to leave.
- \`9\`: The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN.
- \`10\`: Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status.
- \`999\`: The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the \`104\` or \`106\` event callback with reason \`999\`, your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel.
- \`0\`: Other reasons. |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| \`duration\`    | Number | The length of time (s) that the user stays in the channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

##### Example [#example-8]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "platform":1,
  "clientSeq":1625051037369,
  "reason":1,
  "ts":1560496834,
  "duration":600
}
\`\`\`

#### 111 client role change to broadcaster [#111-client-role-change-to-broadcaster]

This event type indicates that an audience member calls \`setClientRole\` to switch their user role to host in the streaming profile. The payload includes the following fields:

| Field name    | Type   | Description                                                                                                                                                                   |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                      |
| \`uid\`         | Number | The user ID of the user in the channel.                                                                                                                                       |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order. |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                         |

##### Example [#example-9]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "clientSeq":1625051035469,
  "ts":1560396834
}
\`\`\`

#### 112 client role change to audience [#112-client-role-change-to-audience]

This event type indicates that a host calls \`setClientRole\` to switch their user role to audience member in the streaming profile. The payload contains the following fields:

| Field name    | Type   | Description                                                                                                                                                                   |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`channelName\` | String | The name of the channel.                                                                                                                                                      |
| \`uid\`         | Number | The user ID of the user in the channel.                                                                                                                                       |
| \`clientSeq\`   | Number | The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order. |
| \`ts\`          | Number | The Unix timestamp (s) when the event occurs on the Agora RTC server.                                                                                                         |

##### Example [#example-10]

\`\`\`json
{
  "channelName":"test_webhook",
  "uid":12121212,
  "clientSeq":16250510358369,
  "ts":1560496834
}
\`\`\`

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

Each \`primaryIP\` field shows an IP address of the Notifications server. When you receive a response, add all these IP addresses to your firewall's allowed IP list.

### Considerations [#considerations]

* Notifications does not guarantee that notification callbacks arrive at your server in the same order as events occur. Implement a strategy to handle messages arriving out of order.
* For improved reliability of Notifications, your server may receive more than one notification callback for a single event. Your server must be able to handle repeated messages.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Video Calling events. With Notifications, you can subscribe to Video Calling events and receive notifications in real time."
  }, {
    heading: "understand-the-tech",
    content: "Using Agora Console you subscribe to specific events for your project and configure the URL of the webhooks to receive these events. Agora sends notifications of your events to your webhook every time they occur. Your server authenticates the notification and returns `200 Ok` to confirm reception. You use the information in the JSON payload of each notification to give the best user experience to your users."
  }, {
    heading: "understand-the-tech",
    content: "The following figure illustrates the workflow when Notifications is enabled for the specific Video Calling events you subscribe to:"
  }, {
    heading: "understand-the-tech",
    content: "**Channel events notification workflow**"
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
    content: "If your network access is restricted by a firewall, call the IP address query API to retrieve the Notifications IP addresses, then configure the firewall to allow these IP addresses."
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
    heading: "handle-notifications-for-specific-events",
    content: "Handle redundant notifications and abnormal user activity"
  }, {
    heading: "handle-notifications-for-specific-events",
    content: "Implement online user status tracking"
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
    heading: "enable-notifications",
    content: "To enable Webhook notifications for RTC channel events:"
  }, {
    heading: "enable-notifications",
    content: "In Agora Console, select **Webhooks** from the sidebar."
  }, {
    heading: "enable-notifications",
    content: "Select **New Webhook**."
  }, {
    heading: "enable-notifications",
    content: "From the **Product** dropdown, select **RTC**."
  }, {
    heading: "enable-notifications",
    content: "Copy the **Signing Secret**. You use this secret to Add signature verification."
  }, {
    heading: "enable-notifications",
    content: "Fill in the following:"
  }, {
    heading: "enable-notifications",
    content: "**Region**: Select the region where your server that receives the notifications is located. Agora connects to the nearest Agora node server based on your selection."
  }, {
    heading: "enable-notifications",
    content: "**Receiving URL**: The `HTTPS` public address of your server that receives the notifications, for example `https://1111-123-456-789-99.ap.ngrok.io/ncsNotify`. Only `HTTPS` endpoints are supported."
  }, {
    heading: "enable-notifications",
    content: "**Subscribe to events**: Select all the events that you want to subscribe to."
  }, {
    heading: "enable-notifications",
    content: "If the selected events generate a high number of queries per second (QPS), ensure that your server has sufficient processing capacity."
  }, {
    heading: "enable-notifications",
    content: "**IP whitelist**: If your server is behind a firewall, enable this option, then call the IP address query API to get the IP addresses of the Agora Notifications server and add them to the firewall's allowed IP list."
  }, {
    heading: "enable-notifications",
    content: "To reduce the delay in notification delivery, best practice is to activate `HTTP` persistent connection (also called `HTTP` keep-alive) on your server with the following settings:"
  }, {
    heading: "enable-notifications",
    content: "`MaxKeepAliveRequests`: 100 or more"
  }, {
    heading: "enable-notifications",
    content: "`KeepAliveTimeout`: 10 seconds or more"
  }, {
    heading: "enable-notifications",
    content: "Select **Run health check**. Agora performs a health test for your configuration as follows:"
  }, {
    heading: "enable-notifications",
    content: "The health test generates test events that correspond to your subscribed events, and then sends test event callbacks to your server."
  }, {
    heading: "enable-notifications",
    content: "In test event callbacks, the channelName is `test_webhook`, and the uid is `12121212`."
  }, {
    heading: "enable-notifications",
    content: "After receiving each test event callback, your server must respond within 10 seconds with a status code of `200`. The response body must be in JSON format."
  }, {
    heading: "enable-notifications",
    content: "When the health check succeeds, select **Save**."
  }, {
    heading: "enable-notifications",
    content: "If the health check fails, follow the prompt in Agora Console to troubleshoot the error. Common errors include the following:"
  }, {
    heading: "enable-notifications",
    content: "Status code"
  }, {
    heading: "enable-notifications",
    content: "Error"
  }, {
    heading: "enable-notifications",
    content: "Description"
  }, {
    heading: "enable-notifications",
    content: "`590`"
  }, {
    heading: "enable-notifications",
    content: "Request timeout"
  }, {
    heading: "enable-notifications",
    content: "Your server does not return the status code `200` within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working."
  }, {
    heading: "enable-notifications",
    content: "`591`"
  }, {
    heading: "enable-notifications",
    content: "Domain name unreachable"
  }, {
    heading: "enable-notifications",
    content: "The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed."
  }, {
    heading: "enable-notifications",
    content: "`592`"
  }, {
    heading: "enable-notifications",
    content: "Certificate error"
  }, {
    heading: "enable-notifications",
    content: "The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list."
  }, {
    heading: "enable-notifications",
    content: "Other"
  }, {
    heading: "enable-notifications",
    content: "Other response errors"
  }, {
    heading: "enable-notifications",
    content: "Your server returns a response with a status code other than `200`. See the prompt in Agora Console for the specific status code and error messages."
  }, {
    heading: "add-signature-verification",
    content: "To communicate securely between Notifications and your webhook, Agora SDRTN® uses signatures for identity verification as follows:"
  }, {
    heading: "add-signature-verification",
    content: "When you configure Notifications in Agora Console, Agora SDRTN® generates a secret you use for verification."
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
    content: "To test the server, follow the steps given in the Enable Notifications section."
  }, {
    heading: "add-signature-verification",
    content: "When you receive an event from the console, and if the signature matches, the event details are displayed in your browser."
  }, {
    heading: "handle-redundant-notifications-and-abnormal-user-activity",
    content: "When using Notifications to maintain the online status of your app users, your server might experience the following issues:"
  }, {
    heading: "handle-redundant-notifications-and-abnormal-user-activity",
    content: "**Message notifications are redundant**. You receive multiple notifications because the Agora Notifications server can send more than one notification callback for each channel event to ensure reliability of the service."
  }, {
    heading: "handle-redundant-notifications-and-abnormal-user-activity",
    content: "**Message notifications arrive out of order**. Network issues cause callbacks to arrive at your server in a different order than the order of event occurrence."
  }, {
    heading: "handle-redundant-notifications-and-abnormal-user-activity",
    content: "To accurately maintain the online status of users, your server needs to be able to deal with redundant notifications and handle received notifications in the same order as events occur. The following section shows you how to use channel event callbacks to accomplish this."
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "Agora Notifications sends RTC channel event callbacks to your server. All channel events, except for `101` and `102` events, contain the `clientSeq` field (`Uint64`) in `payload`, which represents the sequence number of an event. This field is used to identify the order in which events occur on the app client. For notification callbacks reporting the activities of the same user, the value of the `clientSeq` field increases as events happen."
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "Refer to the following steps to use the `clientSeq` field to enable your server to handle redundant messages, and messages arriving out of order:"
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "Enable Agora Notifications, and subscribe to RTC channel event callbacks. Best practice is to subscribe to the following event types according to your use case:"
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "In the `LIVE_BROADCASTING` profile: `103`, `104`, `105`, `106`, `111`, and `112`."
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "In the `COMMUNICATION` profile: `107`, `108`, `111`, and `112`."
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "Use the channel event callbacks to get the latest status updates about the following at your server:"
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "Channel lists"
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "User lists in each channel"
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "Data for each user, including the user ID, user role, whether the user is in a channel, and `clientSeq` of channel events"
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "When receiving notification callbacks of a user, search for the user in the user lists. If there is no data for the user, create data specific to the user."
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "Compare the value in the `clientSeq` field of the latest notification callback you receive with that of the last notification callback handled by your server:"
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "If the former is greater than the latter, the notification callback needs to be handled."
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "If the former is less than the latter, the notification callback should be ignored."
  }, {
    heading: "handle-redundant-or-out-of-order-notifications",
    content: "When receiving notification callbacks reporting a user leaving a channel, wait for one minute before deleting the user data. If it is deleted immediately, your server cannot handle notifications in the same order as channel events happen when receiving redundant notifications or notifications out of order."
  }, {
    heading: "deal-with-abnormal-user-activities",
    content: "When your server receives a notification callback of event `104` with reason as `999`, it means that the user is considered to have abnormal activities due to frequent login and logout actions. In this case, best practice is that your server calls the Banning user privileges API to remove the user from the current channel one minute after receiving such notification callback; otherwise, the notification callbacks your server receives about the user's events might be redundant or arrive out of order, which makes it hard for you to accurately maintain the online status of this user."
  }, {
    heading: "implement-online-user-status-tracking",
    content: "This section provides sample Go code to show how to use channel event callbacks to maintain online user status at your app server."
  }, {
    heading: "implement-online-user-status-tracking",
    content: "To maintain a user registry, take the following steps:"
  }, {
    heading: "implement-online-user-status-tracking",
    content: "Replace the content of the `main.go` file with the following code:"
  }, {
    heading: "implement-online-user-status-tracking",
    content: "Run the server:"
  }, {
    heading: "implement-online-user-status-tracking",
    content: "Configure Notifications in Agora Console, and subscribe to the relevant RTC channel event callbacks."
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
    content: "The signature generated by Agora using the **Secret** and the `HMAC/SHA1` algorithm. You need to use the Secret and `HMAC/SHA1` algorithm to verify the signature value. For details, see Signature verification."
  }, {
    heading: "request-header",
    content: "`Agora-Signature-V2`"
  }, {
    heading: "request-header",
    content: "The signature generated by Agora using the **Secret** and the `HMAC/SHA256` algorithm. You need to use the Secret and `HMAC/SHA256` algorithm to verify the signature value. For details, see Signature verification."
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
    content: "The type of event being notified. For details, see Event types."
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
    content: "The Agora Notifications server notifies your server of the following RTC channel event types when you use the RTC service:"
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
    content: "`101`"
  }, {
    heading: "event-types",
    content: "channel create"
  }, {
    heading: "event-types",
    content: "Initializes the channel."
  }, {
    heading: "event-types",
    content: "`102`"
  }, {
    heading: "event-types",
    content: "channel destroy"
  }, {
    heading: "event-types",
    content: "Destroys the channel."
  }, {
    heading: "event-types",
    content: "`103`"
  }, {
    heading: "event-types",
    content: "broadcaster join channel"
  }, {
    heading: "event-types",
    content: "In the streaming profile, the host joins the channel."
  }, {
    heading: "event-types",
    content: "`104`"
  }, {
    heading: "event-types",
    content: "broadcaster leave channel"
  }, {
    heading: "event-types",
    content: "In the streaming profile, the host leaves the channel."
  }, {
    heading: "event-types",
    content: "`105`"
  }, {
    heading: "event-types",
    content: "audience join channel"
  }, {
    heading: "event-types",
    content: "In the streaming profile, an audience member joins the channel."
  }, {
    heading: "event-types",
    content: "`106`"
  }, {
    heading: "event-types",
    content: "audience leave channel"
  }, {
    heading: "event-types",
    content: "In the streaming profile, an audience member leaves the channel."
  }, {
    heading: "event-types",
    content: "`107`"
  }, {
    heading: "event-types",
    content: "user join channel with communication mode"
  }, {
    heading: "event-types",
    content: "In the communication profile, a user joins the channel."
  }, {
    heading: "event-types",
    content: "`108`"
  }, {
    heading: "event-types",
    content: "user leave channel with communication mode"
  }, {
    heading: "event-types",
    content: "In the communication profile, a user leaves the channel."
  }, {
    heading: "event-types",
    content: "`111`"
  }, {
    heading: "event-types",
    content: "client role change to broadcaster"
  }, {
    heading: "event-types",
    content: "In the communication profile in RTC v4.x products or in the streaming profile, an audience member switches their user role to host."
  }, {
    heading: "event-types",
    content: "`112`"
  }, {
    heading: "event-types",
    content: "client role change to audience"
  }, {
    heading: "event-types",
    content: "In the communication profile in RTC v4.x products or in the streaming profile, a host switches their user role to audience member."
  }, {
    heading: "101-channel-create",
    content: "This event type indicates that a channel is initialized when the first user joins the channel. The payload contains the following fields:"
  }, {
    heading: "101-channel-create",
    content: "Field name"
  }, {
    heading: "101-channel-create",
    content: "Type"
  }, {
    heading: "101-channel-create",
    content: "Description"
  }, {
    heading: "101-channel-create",
    content: "`channelName`"
  }, {
    heading: "101-channel-create",
    content: "String"
  }, {
    heading: "101-channel-create",
    content: "The name of the channel."
  }, {
    heading: "101-channel-create",
    content: "`ts`"
  }, {
    heading: "101-channel-create",
    content: "Number"
  }, {
    heading: "101-channel-create",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "102-channel-destroy",
    content: "This event type indicates that the last user in the channel leaves the channel and the channel is destroyed. The payload contains the following fields:"
  }, {
    heading: "102-channel-destroy",
    content: "Field name"
  }, {
    heading: "102-channel-destroy",
    content: "Type"
  }, {
    heading: "102-channel-destroy",
    content: "Description"
  }, {
    heading: "102-channel-destroy",
    content: "`channelName`"
  }, {
    heading: "102-channel-destroy",
    content: "String"
  }, {
    heading: "102-channel-destroy",
    content: "The name of the channel."
  }, {
    heading: "102-channel-destroy",
    content: "`ts`"
  }, {
    heading: "102-channel-destroy",
    content: "Number"
  }, {
    heading: "102-channel-destroy",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "102-channel-destroy",
    content: "`lastUid`"
  }, {
    heading: "102-channel-destroy",
    content: "Number"
  }, {
    heading: "102-channel-destroy",
    content: "The ID of the last user to leave the channel."
  }, {
    heading: "102-channel-destroy",
    content: "If multiple people leave the channel at the same time, Agora Notifications may return different `lastUid` values. You can choose any one of them."
  }, {
    heading: "103-broadcaster-join-channel",
    content: "This event type indicates that a host joins the channel in the streaming profile. The payload contains the following fields:"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Field name"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Type"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Description"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "`channelName`"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "String"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "The name of the channel."
  }, {
    heading: "103-broadcaster-join-channel",
    content: "`uid`"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Number"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "The user ID of the host in the channel."
  }, {
    heading: "103-broadcaster-join-channel",
    content: "`platform`"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Number"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "The platform type of the host's device:- `1`: Android\n- `2`: iOS\n- `5`: Windows\n- `6`: Linux\n- `7`: Web\n- `8`: macOS\n- `0`: Other platform"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "`clientType`"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Number"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "The type of services used by the host on Linux. Common return values include:- `3`: On-premise Recording\n- `10`: Cloud RecordingThis field is only returned when `platform` is `6`."
  }, {
    heading: "103-broadcaster-join-channel",
    content: "`clientSeq`"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Number"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "103-broadcaster-join-channel",
    content: "`ts`"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "Number"
  }, {
    heading: "103-broadcaster-join-channel",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "This event type indicates that a host leaves the channel in the streaming profile. The payload contains the following fields:"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Field name"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Type"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Description"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`channelName`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "String"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The name of the channel."
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`uid`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Number"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The user ID of the host in the channel."
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`platform`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Number"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The platform type of the host's device:- `1`: Android\n- `2`: iOS\n- `5`: Windows\n- `6`: Linux\n- `7`: Web\n- `8`: macOS\n- `0`: Other platform"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`clientType`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Number"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The type of services used by the host on Linux. Common return values include:- `3`: On-premise Recording\n- `10`: Cloud RecordingThis field is only returned when `platform` is `6`."
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`clientSeq`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Number"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`reason`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Number"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The reason why the host leaves the channel. Values include:- `1`: The host quits the call.\n- `2`: The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds.\n- `3`: Permission issues. For example, the host is kicked out of the channel by the administrator through the Banning user privileges RESTful API.\n- `4`: Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client.\n- `5`: The host uses a new device to join the channel, which forces the old device to leave.\n- `9`: The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN.\n- `10`: Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status.\n- `12`: Token error or expired token.\n- `99`: The SDK disconnected from the Agora server due to an unknown network problem. Normally, the SDK tries to reconnect.\n- `999`: The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the `104` or `106` event callback with reason `999`, your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel.\n- `0`: Other reasons."
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`ts`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Number"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "`duration`"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "Number"
  }, {
    heading: "104-broadcaster-leave-channel",
    content: "The length of time (s) that the host stays in the channel."
  }, {
    heading: "105-audience-join-channel",
    content: "This event type indicates that an audience member joins the channel in the streaming profile. The payload includes the following fields:"
  }, {
    heading: "105-audience-join-channel",
    content: "Field name"
  }, {
    heading: "105-audience-join-channel",
    content: "Type"
  }, {
    heading: "105-audience-join-channel",
    content: "Description"
  }, {
    heading: "105-audience-join-channel",
    content: "`channelName`"
  }, {
    heading: "105-audience-join-channel",
    content: "String"
  }, {
    heading: "105-audience-join-channel",
    content: "The name of the channel."
  }, {
    heading: "105-audience-join-channel",
    content: "`uid`"
  }, {
    heading: "105-audience-join-channel",
    content: "Number"
  }, {
    heading: "105-audience-join-channel",
    content: "The user ID of the audience member in the channel."
  }, {
    heading: "105-audience-join-channel",
    content: "`platform`"
  }, {
    heading: "105-audience-join-channel",
    content: "Number"
  }, {
    heading: "105-audience-join-channel",
    content: "The platform type of the audience member's device:- `1`: Android\n- `2`: iOS\n- `5`: Windows\n- `6`: Linux\n- `7`: Web\n- `8`: macOS\n- `0`: Other platform"
  }, {
    heading: "105-audience-join-channel",
    content: "`clientType`"
  }, {
    heading: "105-audience-join-channel",
    content: "Number"
  }, {
    heading: "105-audience-join-channel",
    content: "The type of services used by the host on Linux. Common return values include:- `3`: On-premise Recording\n- `10`: Cloud RecordingThis field is only returned when `platform` is `6`."
  }, {
    heading: "105-audience-join-channel",
    content: "`clientSeq`"
  }, {
    heading: "105-audience-join-channel",
    content: "Number"
  }, {
    heading: "105-audience-join-channel",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "105-audience-join-channel",
    content: "`ts`"
  }, {
    heading: "105-audience-join-channel",
    content: "Number"
  }, {
    heading: "105-audience-join-channel",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "106-audience-leave-channel",
    content: "This event type indicates that an audience member leaves the channel in the streaming profile. The payload includes the following fields:"
  }, {
    heading: "106-audience-leave-channel",
    content: "Field name"
  }, {
    heading: "106-audience-leave-channel",
    content: "Type"
  }, {
    heading: "106-audience-leave-channel",
    content: "Description"
  }, {
    heading: "106-audience-leave-channel",
    content: "`channelName`"
  }, {
    heading: "106-audience-leave-channel",
    content: "String"
  }, {
    heading: "106-audience-leave-channel",
    content: "The name of the channel."
  }, {
    heading: "106-audience-leave-channel",
    content: "`uid`"
  }, {
    heading: "106-audience-leave-channel",
    content: "Number"
  }, {
    heading: "106-audience-leave-channel",
    content: "The user ID of the audience member in the channel."
  }, {
    heading: "106-audience-leave-channel",
    content: "`platform`"
  }, {
    heading: "106-audience-leave-channel",
    content: "Number"
  }, {
    heading: "106-audience-leave-channel",
    content: "The platform type of the audience member's device:- `1`: Android\n- `2`: iOS\n- `5`: Windows\n- `6`: Linux\n- `7`: Web\n- `8`: macOS\n- `0`: Other platform"
  }, {
    heading: "106-audience-leave-channel",
    content: "`clientType`"
  }, {
    heading: "106-audience-leave-channel",
    content: "Number"
  }, {
    heading: "106-audience-leave-channel",
    content: "The type of services used by the audience member on Linux. Common return values include:- `3`: On-premise Recording\n- `10`: Cloud RecordingThis field is only returned when `platform` is `6`."
  }, {
    heading: "106-audience-leave-channel",
    content: "`clientSeq`"
  }, {
    heading: "106-audience-leave-channel",
    content: "Number"
  }, {
    heading: "106-audience-leave-channel",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "106-audience-leave-channel",
    content: "`reason`"
  }, {
    heading: "106-audience-leave-channel",
    content: "Number"
  }, {
    heading: "106-audience-leave-channel",
    content: "The reason why the audience member leaves the channel. Values include:- `1`: The audience member quits the call.\n- `2`: The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds.\n- `3`: Permission issues. For example, the audience member is kicked out of the channel by the administrator through the Banning user privileges RESTful API.\n- `4`: Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client.\n- `5`: The audience member uses a new device to join the channel, which forces the old device to leave.\n- `9`: The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN.\n- `10`: Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status.\n- `999`: The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the `104` or `106` event callback with reason `999`, your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel.\n- `0`: Other reasons."
  }, {
    heading: "106-audience-leave-channel",
    content: "`ts`"
  }, {
    heading: "106-audience-leave-channel",
    content: "Number"
  }, {
    heading: "106-audience-leave-channel",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "106-audience-leave-channel",
    content: "`duration`"
  }, {
    heading: "106-audience-leave-channel",
    content: "Number"
  }, {
    heading: "106-audience-leave-channel",
    content: "The length of time (s) that the audience member stays in the channel."
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "This event type indicates that a user joins the channel in the communication profile. The payload includes the following fields:"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "Field name"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "Type"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "Description"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "`channelName`"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "String"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "The name of the channel."
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "`uid`"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "The user ID of the user in the channel."
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "`platform`"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "The platform type of the user's device:- `1`: Android\n- `2`: iOS\n- `5`: Windows\n- `6`: Linux\n- `7`: Web\n- `8`: macOS\n- `0`: Other platform"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "`clientSeq`"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "`ts`"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "107-user-join-channel-with-communication-mode",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "This event type indicates that a user leaves the channel in the communication profile. The payload includes the following fields:"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Field name"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Type"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Description"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "`channelName`"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "String"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "The name of the channel."
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "`uid`"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "The user ID of the user in the channel."
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "`platform`"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "The platform type of the user's device:- `1`: Android\n- `2`: iOS\n- `5`: Windows\n- `6`: Linux\n- `7`: Web\n- `8`: macOS\n- `0`: Other platform"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "`clientSeq`"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "`reason`"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "The reason why the user leaves the channel. Values include:- `1`: The user quits the call.\n- `2`: The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds.\n- `3`: Permission issues. For example, the user is kicked out of the channel by the administrator through the Banning user privileges RESTful API.\n- `4`: Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client.\n- `5`: The user uses a new device to join the channel, which forces the old device to leave.\n- `9`: The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN.\n- `10`: Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status.\n- `999`: The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the `104` or `106` event callback with reason `999`, your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel.\n- `0`: Other reasons."
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "`ts`"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "`duration`"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "Number"
  }, {
    heading: "108-user-leave-channel-with-communication-mode",
    content: "The length of time (s) that the user stays in the channel."
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "This event type indicates that an audience member calls `setClientRole` to switch their user role to host in the streaming profile. The payload includes the following fields:"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "Field name"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "Type"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "Description"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "`channelName`"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "String"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "The name of the channel."
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "`uid`"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "Number"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "The user ID of the user in the channel."
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "`clientSeq`"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "Number"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "`ts`"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "Number"
  }, {
    heading: "111-client-role-change-to-broadcaster",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
  }, {
    heading: "112-client-role-change-to-audience",
    content: "This event type indicates that a host calls `setClientRole` to switch their user role to audience member in the streaming profile. The payload contains the following fields:"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "Field name"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "Type"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "Description"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "`channelName`"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "String"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "The name of the channel."
  }, {
    heading: "112-client-role-change-to-audience",
    content: "`uid`"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "Number"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "The user ID of the user in the channel."
  }, {
    heading: "112-client-role-change-to-audience",
    content: "`clientSeq`"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "Number"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
  }, {
    heading: "112-client-role-change-to-audience",
    content: "`ts`"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "Number"
  }, {
    heading: "112-client-role-change-to-audience",
    content: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
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
    content: "Each `primaryIP` field shows an IP address of the Notifications server. When you receive a response, add all these IP addresses to your firewall's allowed IP list."
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
    id: "enable-notifications",
    content: "Enable Notifications"
  }, {
    id: "add-signature-verification",
    content: "Add signature verification"
  }, {
    id: "handle-redundant-notifications-and-abnormal-user-activity",
    content: "Handle redundant notifications and abnormal user activity"
  }, {
    id: "handle-redundant-or-out-of-order-notifications",
    content: "Handle redundant or out of order notifications"
  }, {
    id: "deal-with-abnormal-user-activities",
    content: "Deal with abnormal user activities"
  }, {
    id: "implement-online-user-status-tracking",
    content: "Implement online user status tracking"
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
    id: "101-channel-create",
    content: "101 channel create"
  }, {
    id: "example-1",
    content: "Example"
  }, {
    id: "102-channel-destroy",
    content: "102 channel destroy"
  }, {
    id: "example-2",
    content: "Example"
  }, {
    id: "103-broadcaster-join-channel",
    content: "103 broadcaster join channel"
  }, {
    id: "example-3",
    content: "Example"
  }, {
    id: "104-broadcaster-leave-channel",
    content: "104 broadcaster leave channel"
  }, {
    id: "example-4",
    content: "Example"
  }, {
    id: "105-audience-join-channel",
    content: "105 audience join channel"
  }, {
    id: "example-5",
    content: "Example"
  }, {
    id: "106-audience-leave-channel",
    content: "106 audience leave channel"
  }, {
    id: "example-6",
    content: "Example"
  }, {
    id: "107-user-join-channel-with-communication-mode",
    content: "107 user join channel with communication mode"
  }, {
    id: "example-7",
    content: "Example"
  }, {
    id: "108-user-leave-channel-with-communication-mode",
    content: "108 user leave channel with communication mode"
  }, {
    id: "example-8",
    content: "Example"
  }, {
    id: "111-client-role-change-to-broadcaster",
    content: "111 client role change to broadcaster"
  }, {
    id: "example-9",
    content: "Example"
  }, {
    id: "112-client-role-change-to-audience",
    content: "112 client role change to audience"
  }, {
    id: "example-10",
    content: "Example"
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
  url: "#enable-notifications",
  title: _jsx(_Fragment, {
    children: "Enable Notifications"
  })
}, {
  depth: 3,
  url: "#add-signature-verification",
  title: _jsx(_Fragment, {
    children: "Add signature verification"
  })
}, {
  depth: 3,
  url: "#handle-redundant-notifications-and-abnormal-user-activity",
  title: _jsx(_Fragment, {
    children: "Handle redundant notifications and abnormal user activity"
  })
}, {
  depth: 4,
  url: "#handle-redundant-or-out-of-order-notifications",
  title: _jsx(_Fragment, {
    children: "Handle redundant or out of order notifications"
  })
}, {
  depth: 4,
  url: "#deal-with-abnormal-user-activities",
  title: _jsx(_Fragment, {
    children: "Deal with abnormal user activities"
  })
}, {
  depth: 3,
  url: "#implement-online-user-status-tracking",
  title: _jsx(_Fragment, {
    children: "Implement online user status tracking"
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
  url: "#101-channel-create",
  title: _jsx(_Fragment, {
    children: "101 channel create"
  })
}, {
  depth: 5,
  url: "#example-1",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#102-channel-destroy",
  title: _jsx(_Fragment, {
    children: "102 channel destroy"
  })
}, {
  depth: 5,
  url: "#example-2",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#103-broadcaster-join-channel",
  title: _jsx(_Fragment, {
    children: "103 broadcaster join channel"
  })
}, {
  depth: 5,
  url: "#example-3",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#104-broadcaster-leave-channel",
  title: _jsx(_Fragment, {
    children: "104 broadcaster leave channel"
  })
}, {
  depth: 5,
  url: "#example-4",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#105-audience-join-channel",
  title: _jsx(_Fragment, {
    children: "105 audience join channel"
  })
}, {
  depth: 5,
  url: "#example-5",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#106-audience-leave-channel",
  title: _jsx(_Fragment, {
    children: "106 audience leave channel"
  })
}, {
  depth: 5,
  url: "#example-6",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#107-user-join-channel-with-communication-mode",
  title: _jsx(_Fragment, {
    children: "107 user join channel with communication mode"
  })
}, {
  depth: 5,
  url: "#example-7",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#108-user-leave-channel-with-communication-mode",
  title: _jsx(_Fragment, {
    children: "108 user leave channel with communication mode"
  })
}, {
  depth: 5,
  url: "#example-8",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#111-client-role-change-to-broadcaster",
  title: _jsx(_Fragment, {
    children: "111 client role change to broadcaster"
  })
}, {
  depth: 5,
  url: "#example-9",
  title: _jsx(_Fragment, {
    children: "Example"
  })
}, {
  depth: 4,
  url: "#112-client-role-change-to-audience",
  title: _jsx(_Fragment, {
    children: "112 client role change to audience"
  })
}, {
  depth: 5,
  url: "#example-10",
  title: _jsx(_Fragment, {
    children: "Example"
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
    h5: "h5",
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
      children: "A webhook is a user-defined callback over HTTPS that allows your app or back-end system to receive notifications when certain events occur. Agora calls your webhook endpoint from its servers to send notifications about Video Calling events. With Notifications, you can subscribe to Video Calling events and receive notifications in real time."
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
      children: "The following figure illustrates the workflow when Notifications is enabled for the specific Video Calling events you subscribe to:"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Channel events notification workflow"
      })
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/shared/ncs-worflow.svg",
        alt: "rtc-channel"
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
          }), " to retrieve the Notifications IP addresses, then configure the firewall to allow these IP addresses."]
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
          href: "#enable-notifications",
          children: "Enable Notifications"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#add-signature-verification",
          children: "Verify Notifications signatures"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#handle-redundant-notifications-and-abnormal-user-activity",
          children: "Handle redundant notifications and abnormal user activity"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "#implement-online-user-status-tracking",
          children: "Implement online user status tracking"
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
                  children: ' "'
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
                  children: ' "'
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
                  children: ' "'
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
                  children: ' "'
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
                  children: ' "'
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
                  children: "  NoticeID  "
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
                  children: "  ProductID "
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
                  children: ' `json:"productId"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  EventType "
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
                  children: '  `json:"eventType"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  Payload  "
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
                  children: "  ClientSeq  "
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
                  children: ' `json:"clientSeq"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  UID     "
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
                  children: '  `json:"uid"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ChannelName "
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
                  children: "  response "
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
                  children: "  w."
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
                  children: "  w."
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
                  children: "  agoraSignature "
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
                  children: "  fmt."
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
                  children: "  body, err "
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
                  children: "  if"
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
                  children: "  }"
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
                  children: "  var"
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
                  children: "  if"
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
                  children: "  }"
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
                  children: "  fmt."
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
                  children: "    req.EventType, req.Payload.UID, req.Payload.ChannelName, req.Payload.ClientSeq)"
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
                  children: "  w."
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
                  children: "  w."
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
                  children: "  http."
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
                  children: "  http."
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
                  children: "  port "
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
                  children: "  fmt."
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
                  children: "  if"
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
                  children: "    log."
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
                  children: ' "noticeId": "some_notice_id",'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "productId": 12345,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "eventType": 1,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: ' "payload": {'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "clientSeq": 67890,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "uid": 123,'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '  "channelName": "test_channel"'
                })
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " }"
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
                  children: ' "noticeId"'
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
                  children: ' "productId"'
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
                  children: ' "eventType"'
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
                  children: ' "payload"'
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
                  children: '  "clientSeq"'
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
                  children: '  "uid"'
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
                  children: '  "channelName"'
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
      id: "enable-notifications",
      children: "Enable Notifications"
    }), `
`, _jsx(_components.p, {
      children: "To enable Webhook notifications for RTC channel events:"
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
            children: "RTC"
          }), "."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/console/webhook-rtc.png",
            alt: "RTC Webhooks"
          })
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
`, _jsxs(_components.p, {
              children: ["In test event callbacks, the channelName is ", _jsx(_components.code, {
                children: "test_webhook"
              }), ", and the uid is ", _jsx(_components.code, {
                children: "12121212"
              }), "."]
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
`, _jsxs(_components.table, {
          children: [_jsx(_components.thead, {
            children: _jsxs(_components.tr, {
              children: [_jsx(_components.th, {
                children: "Status code"
              }), _jsx(_components.th, {
                children: "Error"
              }), _jsx(_components.th, {
                children: "Description"
              })]
            })
          }), _jsxs(_components.tbody, {
            children: [_jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "590"
                })
              }), _jsx(_components.td, {
                children: "Request timeout"
              }), _jsxs(_components.td, {
                children: ["Your server does not return the status code ", _jsx(_components.code, {
                  children: "200"
                }), " within 10 seconds. Check whether your server responds to the request properly. If your server responds to the request properly, contact Agora Technical Support to check if the network connection between the Agora Notifications server and your server is working."]
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "591"
                })
              }), _jsx(_components.td, {
                children: "Domain name unreachable"
              }), _jsx(_components.td, {
                children: "The domain name is invalid and cannot be resolved to the target IP address. Check whether your server is properly deployed."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: _jsx(_components.code, {
                  children: "592"
                })
              }), _jsx(_components.td, {
                children: "Certificate error"
              }), _jsx(_components.td, {
                children: "The Agora Notifications server fails to verify the SSL certificates returned by your server. Check if the SSL certificates of your server are valid. If your server is behind a firewall, check whether you have added all IP addresses of the Agora Notifications server to the firewall's allowed IP list."
              })]
            }), _jsxs(_components.tr, {
              children: [_jsx(_components.td, {
                children: "Other"
              }), _jsx(_components.td, {
                children: "Other response errors"
              }), _jsxs(_components.td, {
                children: ["Your server returns a response with a status code other than ", _jsx(_components.code, {
                  children: "200"
                }), ". See the prompt in Agora Console for the specific status code and error messages."]
              })]
            })]
          })]
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
      children: "To communicate securely between Notifications and your webhook, Agora SDRTN® uses signatures for identity verification as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "When you configure Notifications in Agora Console, Agora SDRTN® generates a secret you use for verification."
      }), `
`, _jsxs(_components.li, {
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
`, _jsxs(_components.li, {
        children: ["When your server receives a callback, you can verify ", _jsx(_components.code, {
          children: "Agora-Signature"
        }), " or ", _jsx(_components.code, {
          children: "Agora-Signature-V2"
        }), ":", `
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
                  children: '  "'
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
                  children: '  "'
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
                  children: '  "'
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
                  children: "// calcSignatureV1 computes the HMAC/SHA1 signature for a given payload and secret"
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
                  children: "  mac "
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
                  children: "  mac."
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
                  children: "  return"
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
                  children: "// verify checks if the provided signature matches the HMAC/SHA1 signature of the request body"
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
                  children: "  calculatedSignature "
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
                  children: "  fmt."
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
                  children: "  fmt."
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
                  children: "  return"
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
                  children: "  http."
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
                  children: "  return"
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
            href: "#enable-notifications",
            children: "Enable Notifications"
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
`, _jsx(_components.h3, {
      id: "handle-redundant-notifications-and-abnormal-user-activity",
      children: "Handle redundant notifications and abnormal user activity"
    }), `
`, _jsx(_components.p, {
      children: "When using Notifications to maintain the online status of your app users, your server might experience the following issues:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Message notifications are redundant"
        }), ". You receive multiple notifications because the Agora Notifications server can send more than one notification callback for each channel event to ensure reliability of the service."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.strong, {
          children: "Message notifications arrive out of order"
        }), ". Network issues cause callbacks to arrive at your server in a different order than the order of event occurrence."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "To accurately maintain the online status of users, your server needs to be able to deal with redundant notifications and handle received notifications in the same order as events occur. The following section shows you how to use channel event callbacks to accomplish this."
    }), `
`, _jsx(_components.h4, {
      id: "handle-redundant-or-out-of-order-notifications",
      children: "Handle redundant or out of order notifications"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora Notifications sends RTC channel event callbacks to your server. All channel events, except for ", _jsx(_components.code, {
        children: "101"
      }), " and ", _jsx(_components.code, {
        children: "102"
      }), " events, contain the ", _jsx(_components.code, {
        children: "clientSeq"
      }), " field (", _jsx(_components.code, {
        children: "Uint64"
      }), ") in ", _jsx(_components.code, {
        children: "payload"
      }), ", which represents the sequence number of an event. This field is used to identify the order in which events occur on the app client. For notification callbacks reporting the activities of the same user, the value of the ", _jsx(_components.code, {
        children: "clientSeq"
      }), " field increases as events happen."]
    }), `
`, _jsxs(_components.p, {
      children: ["Refer to the following steps to use the ", _jsx(_components.code, {
        children: "clientSeq"
      }), " field to enable your server to handle redundant messages, and messages arriving out of order:"]
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Enable Agora Notifications, and subscribe to RTC channel event callbacks. Best practice is to subscribe to the following event types according to your use case:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["In the ", _jsx(_components.code, {
              children: "LIVE_BROADCASTING"
            }), " profile: ", _jsx(_components.code, {
              children: "103"
            }), ", ", _jsx(_components.code, {
              children: "104"
            }), ", ", _jsx(_components.code, {
              children: "105"
            }), ", ", _jsx(_components.code, {
              children: "106"
            }), ", ", _jsx(_components.code, {
              children: "111"
            }), ", and ", _jsx(_components.code, {
              children: "112"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["In the ", _jsx(_components.code, {
              children: "COMMUNICATION"
            }), " profile: ", _jsx(_components.code, {
              children: "107"
            }), ", ", _jsx(_components.code, {
              children: "108"
            }), ", ", _jsx(_components.code, {
              children: "111"
            }), ", and ", _jsx(_components.code, {
              children: "112"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Use the channel event callbacks to get the latest status updates about the following at your server:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "Channel lists"
          }), `
`, _jsx(_components.li, {
            children: "User lists in each channel"
          }), `
`, _jsxs(_components.li, {
            children: ["Data for each user, including the user ID, user role, whether the user is in a channel, and ", _jsx(_components.code, {
              children: "clientSeq"
            }), " of channel events"]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "When receiving notification callbacks of a user, search for the user in the user lists. If there is no data for the user, create data specific to the user."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Compare the value in the ", _jsx(_components.code, {
            children: "clientSeq"
          }), " field of the latest notification callback you receive with that of the last notification callback handled by your server:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "If the former is greater than the latter, the notification callback needs to be handled."
          }), `
`, _jsx(_components.li, {
            children: "If the former is less than the latter, the notification callback should be ignored."
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "When receiving notification callbacks reporting a user leaving a channel, wait for one minute before deleting the user data. If it is deleted immediately, your server cannot handle notifications in the same order as channel events happen when receiving redundant notifications or notifications out of order."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "deal-with-abnormal-user-activities",
      children: "Deal with abnormal user activities"
    }), `
`, _jsxs(_components.p, {
      children: ["When your server receives a notification callback of event ", _jsx(_components.code, {
        children: "104"
      }), " with reason as ", _jsx(_components.code, {
        children: "999"
      }), ", it means that the user is considered to have abnormal activities due to frequent login and logout actions. In this case, best practice is that your server calls the Banning user privileges API to remove the user from the current channel one minute after receiving such notification callback; otherwise, the notification callbacks your server receives about the user's events might be redundant or arrive out of order, which makes it hard for you to accurately maintain the online status of this user."]
    }), `
`, _jsx(_components.h3, {
      id: "implement-online-user-status-tracking",
      children: "Implement online user status tracking"
    }), `
`, _jsx(_components.p, {
      children: "This section provides sample Go code to show how to use channel event callbacks to maintain online user status at your app server."
    }), `
`, _jsx(_components.p, {
      children: "To maintain a user registry, take the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Replace the content of the ", _jsx(_components.code, {
            children: "main.go"
          }), " file with the following code:"]
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
                  children: '  "'
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
                  children: '  "'
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
                  children: "sync"
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
                  children: "time"
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
                  children: ' "<Add Your secret key here>"'
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
                  children: "  NoticeID "
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
                  children: "  ProductID "
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
                  children: "  EventType "
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
                  children: '   `json:"eventType"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  Payload  "
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
                  children: "  ClientSeq  "
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
                  children: ' `json:"clientSeq"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  UID     "
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
                  children: '  `json:"uid"`'
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  ChannelName "
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
                  children: "const"
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
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  EventBroadcasterJoin"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "     ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 103"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  EventBroadcasterQuit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "     ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 104"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  EventAudienceJoin"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "      ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 105"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  EventAudienceQuit"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "      ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 106"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  EventChangeRoleToBroadcaster"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 111"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  EventChangeRoleToAudience"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 112"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  RoleBroadcaster"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  RoleAudience"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 2"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: "  WaitTimeoutMs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 60"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " *"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " 1000"
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
                  children: "var"
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
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  channels "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: " make"
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Channel"
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
                  children: "  mu    "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "sync"
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
                  children: "Mutex"
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
                  children: " User"
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
                  children: "  UID      "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  Role     "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  IsOnline   "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "bool"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  LastClientSeq "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "int64"
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
                  children: " Channel"
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
                  children: "  Users "
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
                  children: "int"
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "User"
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
                  children: " handleNCSEvent"
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
                  children: "channelName"
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "uid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                  children: "eventType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                  children: "clientSeq"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int64"
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
                  children: "  mu."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Lock"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  defer"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " mu."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Unlock"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                  children: "  if"
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
                  children: "isValidEventType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(eventType) {"
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
                  children: "  }"
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
                  children: "  isOnlineInNotice "
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
                  children: " isUserOnlineInNotice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(eventType)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  roleInNotice "
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
                  children: " getUserRoleInNotice"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(eventType)"
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
                  children: "  channel, exists "
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
                  children: " channels[channelName]"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
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
                  children: "exists {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    channel "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " &"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Channel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{Users: "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "make"
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
                  children: "int"
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
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "User"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")}"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    channels[channelName] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " channel"
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
                  children: '"New channel"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", channelName, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"created"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ")"
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
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  user, exists "
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
                  children: " channel.Users[uid]"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  if"
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
                  children: "exists {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    user "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " &"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "User"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "{UID: uid, Role: roleInNotice, IsOnline: isOnlineInNotice, LastClientSeq: clientSeq}"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    channel.Users[uid] "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " user"
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
                  children: " isOnlineInNotice {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      fmt."
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
                  children: '"New User"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", uid, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"joined channel"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", channelName)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    } "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "else"
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
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "      delayedRemoveUserFromChannel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(channelName, uid, clientSeq)"
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
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "  } "
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
                  children: " clientSeq "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: ">"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " user.LastClientSeq {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    user.Role "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " roleInNotice"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    user.IsOnline "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " isOnlineInNotice"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    user.LastClientSeq "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " clientSeq"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "isOnlineInNotice "
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
                  children: " user.IsOnline {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      fmt."
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
                  children: '"User"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", uid, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"quit channel"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", channelName)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "      delayedRemoveUserFromChannel"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(channelName, uid, clientSeq)"
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
                  children: " delayedRemoveUserFromChannel"
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
                  children: "channelName"
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
                  children: ", "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#E36209",
                    "--shiki-dark": "#FFAB70"
                  },
                  children: "uid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                  children: "clientSeq"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int64"
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
                  children: "  time."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "AfterFunc"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(WaitTimeoutMs"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "*"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "time.Millisecond, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "func"
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
                  children: "    mu."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Lock"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "    defer"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " mu."
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "Unlock"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "()"
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
                  children: "    channel, exists "
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
                  children: " channels[channelName]"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "exists {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "      return"
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
                  children: "    user, exists "
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
                  children: " channel.Users[uid]"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " !"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "exists {"
                })]
              }), `
`, _jsx(_components.span, {
                className: "line",
                children: _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "      return"
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
                  children: "    if"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " user.LastClientSeq "
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
                  children: " clientSeq "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "&&"
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
                  children: "user.IsOnline {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "      delete"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(channel.Users, uid)"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "      fmt."
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
                  children: '"User"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", uid, "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"removed from channel"'
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", channelName)"
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
                  children: "  })"
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
                  children: " isValidEventType"
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
                  children: "eventType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " eventType "
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
                  children: " EventBroadcasterJoin "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventBroadcasterQuit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventAudienceJoin "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventAudienceQuit "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventChangeRoleToBroadcaster "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventChangeRoleToAudience"
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
                  children: " isUserOnlineInNotice"
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
                  children: "eventType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  return"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " eventType "
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
                  children: " EventBroadcasterJoin "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventAudienceJoin "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventChangeRoleToBroadcaster "
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "||"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "    eventType "
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
                  children: " EventChangeRoleToAudience"
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
                  children: " getUserRoleInNotice"
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
                  children: "eventType"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: " int"
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
                  children: "int"
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
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  switch"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " eventType {"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " EventBroadcasterJoin, EventChangeRoleToBroadcaster:"
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
                  children: " RoleBroadcaster"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  case"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: " EventAudienceJoin, EventChangeRoleToAudience:"
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
                  children: " RoleAudience"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#D73A49",
                    "--shiki-dark": "#F97583"
                  },
                  children: "  default"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ":"
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
                  children: " RoleAudience"
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
                  children: "  mac "
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
                  children: "  mac."
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
                  children: "  return"
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
                  children: "  calculatedSignature "
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
                  children: "  return"
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
                  children: "  response "
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
                  children: "  w."
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
                  children: "  w."
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
                  children: "  agoraSignature "
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
                  children: "  body, err "
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
                  children: "  if"
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
                  children: "  }"
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
                  children: "  if"
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
                  children: "  }"
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
                  children: "  var"
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
                  children: "  if"
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
                  children: "  }"
                })
              }), `
`, _jsx(_components.span, {
                className: "line"
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "  handleNCSEvent"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "(req.Payload.ChannelName, req.Payload.UID, req.EventType, req.Payload.ClientSeq)"
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
                  children: "  w."
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
                  children: "  w."
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
                  children: "  http."
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
                  children: "  http."
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
                  children: "  port "
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
                  children: "  fmt."
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
                  children: "  if"
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
                  children: "    log."
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
`, _jsx(_components.p, {
          children: "Configure Notifications in Agora Console, and subscribe to the relevant RTC channel event callbacks."
        }), `
`]
      }), `
`]
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
          }), _jsxs(_components.td, {
            children: ["The signature generated by Agora using the ", _jsx(_components.strong, {
              children: "Secret"
            }), " and the ", _jsx(_components.code, {
              children: "HMAC/SHA1"
            }), " algorithm. You need to use the Secret and ", _jsx(_components.code, {
              children: "HMAC/SHA1"
            }), " algorithm to verify the signature value. For details, see ", _jsx(_components.a, {
              href: "#add-signature-verification",
              children: "Signature verification"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "Agora-Signature-V2"
            })
          }), _jsxs(_components.td, {
            children: ["The signature generated by Agora using the ", _jsx(_components.strong, {
              children: "Secret"
            }), " and the ", _jsx(_components.code, {
              children: "HMAC/SHA256"
            }), " algorithm. You need to use the Secret and ", _jsx(_components.code, {
              children: "HMAC/SHA256"
            }), " algorithm to verify the signature value. For details, see ", _jsx(_components.a, {
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
            children: "The notification ID, identifying the notification callback when the event occurs."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "productId"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
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
            children: _jsx(_components.code, {
              children: "eventType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: ["The type of event being notified. For details, see ", _jsx(_components.a, {
              href: "#event-types",
              children: "Event types"
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "notifyMs"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (ms) when Notifications sends a callback to your server. This value is updated when Notifications resends the notification callback."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "payload"
            })
          }), _jsx(_components.td, {
            children: "JSON Object"
          }), _jsx(_components.td, {
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
              children: '  "noticeId"'
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
              children: '  "productId"'
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
              children: '  "eventType"'
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
              children: '  "notifyMs"'
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
              children: '  "payload"'
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
              children: "     ..."
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
      children: "The Agora Notifications server notifies your server of the following RTC channel event types when you use the RTC service:"
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "eventType"
          }), _jsx(_components.th, {
            children: "Event name"
          }), _jsx(_components.th, {
            children: "Description"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#101-channel-create",
              children: _jsx(_components.code, {
                children: "101"
              })
            })
          }), _jsx(_components.td, {
            children: "channel create"
          }), _jsx(_components.td, {
            children: "Initializes the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#102-channel-destroy",
              children: _jsx(_components.code, {
                children: "102"
              })
            })
          }), _jsx(_components.td, {
            children: "channel destroy"
          }), _jsx(_components.td, {
            children: "Destroys the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#103-broadcaster-join-channel",
              children: _jsx(_components.code, {
                children: "103"
              })
            })
          }), _jsx(_components.td, {
            children: "broadcaster join channel"
          }), _jsx(_components.td, {
            children: "In the streaming profile, the host joins the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#104-broadcaster-leave-channel",
              children: _jsx(_components.code, {
                children: "104"
              })
            })
          }), _jsx(_components.td, {
            children: "broadcaster leave channel"
          }), _jsx(_components.td, {
            children: "In the streaming profile, the host leaves the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#105-audience-join-channel",
              children: _jsx(_components.code, {
                children: "105"
              })
            })
          }), _jsx(_components.td, {
            children: "audience join channel"
          }), _jsx(_components.td, {
            children: "In the streaming profile, an audience member joins the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#106-audience-leave-channel",
              children: _jsx(_components.code, {
                children: "106"
              })
            })
          }), _jsx(_components.td, {
            children: "audience leave channel"
          }), _jsx(_components.td, {
            children: "In the streaming profile, an audience member leaves the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#107-user-join-channel-with-communication-mode",
              children: _jsx(_components.code, {
                children: "107"
              })
            })
          }), _jsx(_components.td, {
            children: "user join channel with communication mode"
          }), _jsx(_components.td, {
            children: "In the communication profile, a user joins the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#108-user-leave-channel-with-communication-mode",
              children: _jsx(_components.code, {
                children: "108"
              })
            })
          }), _jsx(_components.td, {
            children: "user leave channel with communication mode"
          }), _jsx(_components.td, {
            children: "In the communication profile, a user leaves the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#111-client-role-change-to-broadcaster",
              children: _jsx(_components.code, {
                children: "111"
              })
            })
          }), _jsx(_components.td, {
            children: "client role change to broadcaster"
          }), _jsx(_components.td, {
            children: "In the communication profile in RTC v4.x products or in the streaming profile, an audience member switches their user role to host."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "center"
            },
            children: _jsx(_components.a, {
              href: "#112-client-role-change-to-audience",
              children: _jsx(_components.code, {
                children: "112"
              })
            })
          }), _jsx(_components.td, {
            children: "client role change to audience"
          }), _jsx(_components.td, {
            children: "In the communication profile in RTC v4.x products or in the streaming profile, a host switches their user role to audience member."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "101-channel-create",
      children: "101 channel create"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that a channel is initialized when the first user joins the channel. The payload contains the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "ts"'
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
              children: "1560399999"
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
      id: "102-channel-destroy",
      children: "102 channel destroy"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that the last user in the channel leaves the channel and the channel is destroyed. The payload contains the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "lastUid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The ID of the last user to leave the channel."
          })]
        })]
      })]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If multiple people leave the channel at the same time, Agora Notifications may return different ", _jsx(_components.code, {
            children: "lastUid"
          }), " values. You can choose any one of them."]
        })
      })
    }), `
`, _jsx(_components.h5, {
      id: "example-2",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "ts"'
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
              children: "1560399999"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "lastUid"'
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
              children: "12121212"
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
      id: "103-broadcaster-join-channel",
      children: "103 broadcaster join channel"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that a host joins the channel in the streaming profile. The payload contains the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the host in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "platform"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The platform type of the host's device:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Android"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": iOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Windows"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": Linux"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": Web"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": macOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other platform"]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The type of services used by the host on Linux. Common return values include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": On-premise Recording"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": Cloud Recording"]
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["This field is only returned when ", _jsx(_components.code, {
                children: "platform"
              }), " is ", _jsx(_components.code, {
                children: "6"
              }), "."]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-3",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "platform"'
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
              children: '  "clientSeq"'
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
              children: "1625051030746"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "ts"'
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
              children: "1560396843"
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
      id: "104-broadcaster-leave-channel",
      children: "104 broadcaster leave channel"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that a host leaves the channel in the streaming profile. The payload contains the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the host in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "platform"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The platform type of the host's device:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Android"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": iOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Windows"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": Linux"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": Web"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": macOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other platform"]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The type of services used by the host on Linux. Common return values include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": On-premise Recording"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": Cloud Recording"]
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["This field is only returned when ", _jsx(_components.code, {
                children: "platform"
              }), " is ", _jsx(_components.code, {
                children: "6"
              }), "."]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The reason why the host leaves the channel. Values include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": The host quits the call."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": Permission issues. For example, the host is kicked out of the channel by the administrator through the Banning user privileges RESTful API."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": The host uses a new device to join the channel, which forces the old device to leave."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "9"
                }), ": The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "12"
                }), ": Token error or expired token."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "99"
                }), ": The SDK disconnected from the Agora server due to an unknown network problem. Normally, the SDK tries to reconnect."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "999"
                }), ": The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the ", _jsx(_components.code, {
                  children: "104"
                }), " or ", _jsx(_components.code, {
                  children: "106"
                }), " event callback with reason ", _jsx(_components.code, {
                  children: "999"
                }), ", your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other reasons."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "duration"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The length of time (s) that the host stays in the channel."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-4",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "platform"'
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
              children: '  "clientSeq"'
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
              children: "1625051030789"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "reason"'
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
              children: '  "ts"'
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
              children: "1560396943"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "duration"'
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
              children: "600"
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
      id: "105-audience-join-channel",
      children: "105 audience join channel"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that an audience member joins the channel in the streaming profile. The payload includes the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the audience member in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "platform"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The platform type of the audience member's device:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Android"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": iOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Windows"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": Linux"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": Web"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": macOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other platform"]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The type of services used by the host on Linux. Common return values include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": On-premise Recording"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": Cloud Recording"]
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["This field is only returned when ", _jsx(_components.code, {
                children: "platform"
              }), " is ", _jsx(_components.code, {
                children: "6"
              }), "."]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-5",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "platform"'
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
              children: '  "clientSeq"'
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
              children: "1625051035346"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "ts"'
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
              children: "1560396843"
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
      id: "106-audience-leave-channel",
      children: "106 audience leave channel"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that an audience member leaves the channel in the streaming profile. The payload includes the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the audience member in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "platform"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The platform type of the audience member's device:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Android"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": iOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Windows"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": Linux"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": Web"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": macOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other platform"]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientType"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The type of services used by the audience member on Linux. Common return values include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": On-premise Recording"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": Cloud Recording"]
              }), `
`]
            }), _jsxs(_components.p, {
              children: ["This field is only returned when ", _jsx(_components.code, {
                children: "platform"
              }), " is ", _jsx(_components.code, {
                children: "6"
              }), "."]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The reason why the audience member leaves the channel. Values include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": The audience member quits the call."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": Permission issues. For example, the audience member is kicked out of the channel by the administrator through the Banning user privileges RESTful API."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": The audience member uses a new device to join the channel, which forces the old device to leave."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "9"
                }), ": The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "999"
                }), ": The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the ", _jsx(_components.code, {
                  children: "104"
                }), " or ", _jsx(_components.code, {
                  children: "106"
                }), " event callback with reason ", _jsx(_components.code, {
                  children: "999"
                }), ", your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other reasons."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "duration"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The length of time (s) that the audience member stays in the channel."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-6",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "platform"'
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
              children: '  "clientSeq"'
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
              children: "1625051035390"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "reason"'
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
              children: '  "ts"'
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
              children: "1560396943"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "duration"'
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
              children: "600"
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
      id: "107-user-join-channel-with-communication-mode",
      children: "107 user join channel with communication mode"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that a user joins the channel in the communication profile. The payload includes the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the user in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "platform"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The platform type of the user's device:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Android"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": iOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Windows"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": Linux"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": Web"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": macOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other platform"]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-7",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "platform"'
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
              children: '  "clientSeq"'
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
              children: "1625051035369"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "ts"'
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
              children: "1560396834"
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
      id: "108-user-leave-channel-with-communication-mode",
      children: "108 user leave channel with communication mode"
    }), `
`, _jsx(_components.p, {
      children: "This event type indicates that a user leaves the channel in the communication profile. The payload includes the following fields:"
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the user in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "platform"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The platform type of the user's device:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": Android"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": iOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": Windows"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "6"
                }), ": Linux"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "7"
                }), ": Web"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "8"
                }), ": macOS"]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other platform"]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "reason"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsxs(_components.td, {
            children: [_jsx(_components.p, {
              children: "The reason why the user leaves the channel. Values include:"
            }), _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": The user quits the call."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": The connection between the app client and the Agora RTC server times out. This occurs when the Agora RTC server does not receive any data packets from the app client for more than 10 seconds."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": Permission issues. For example, the user is kicked out of the channel by the administrator through the Banning user privileges RESTful API."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": Internal issues with the Agora RTC server. For example, the Agora RTC server disconnects from the app client for a short period of time for load balancing. When load balancing finishes, the Agora RTC server reconnects with the client."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": The user uses a new device to join the channel, which forces the old device to leave."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "9"
                }), ": The app client has multiple IP addresses, so the SDK actively disconnects from the Agora RTC server and reconnects. The user is not aware of this process. Check whether the app client has multiple public IP addresses or uses a VPN."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "10"
                }), ": Due to network connection issues, for example, the SDK does not receive any data packets from the Agora RTC server for more than 4 seconds or a socket connection error occurs, the SDK actively disconnects from the Agora server and reconnects. The user is not aware of this process. Check the network connection status."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "999"
                }), ": The user has unusual activities, such as frequent login and logout actions. 60 seconds after receiving the ", _jsx(_components.code, {
                  children: "104"
                }), " or ", _jsx(_components.code, {
                  children: "106"
                }), " event callback with reason ", _jsx(_components.code, {
                  children: "999"
                }), ", your app server needs to call the Banning user privileges API to remove the user from the current channel; otherwise, your server could fail to receive callbacks for the user's events if the user rejoins the channel."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Other reasons."]
              }), `
`]
            })]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "duration"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The length of time (s) that the user stays in the channel."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-8",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "platform"'
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
              children: '  "clientSeq"'
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
              children: "1625051037369"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "reason"'
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
              children: '  "ts"'
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
              children: "1560496834"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "duration"'
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
              children: "600"
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
      id: "111-client-role-change-to-broadcaster",
      children: "111 client role change to broadcaster"
    }), `
`, _jsxs(_components.p, {
      children: ["This event type indicates that an audience member calls ", _jsx(_components.code, {
        children: "setClientRole"
      }), " to switch their user role to host in the streaming profile. The payload includes the following fields:"]
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the user in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-9",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "clientSeq"'
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
              children: "1625051035469"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "ts"'
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
              children: "1560396834"
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
      id: "112-client-role-change-to-audience",
      children: "112 client role change to audience"
    }), `
`, _jsxs(_components.p, {
      children: ["This event type indicates that a host calls ", _jsx(_components.code, {
        children: "setClientRole"
      }), " to switch their user role to audience member in the streaming profile. The payload contains the following fields:"]
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
              children: "channelName"
            })
          }), _jsx(_components.td, {
            children: "String"
          }), _jsx(_components.td, {
            children: "The name of the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "uid"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The user ID of the user in the channel."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "clientSeq"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The sequence number used to identify the order in which events occur on the app client. You can use the value of this field to sort a user's events into chronological order."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: _jsx(_components.code, {
              children: "ts"
            })
          }), _jsx(_components.td, {
            children: "Number"
          }), _jsx(_components.td, {
            children: "The Unix timestamp (s) when the event occurs on the Agora RTC server."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h5, {
      id: "example-10",
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
              children: '  "channelName"'
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
              children: '"test_webhook"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uid"'
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
              children: "12121212"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "clientSeq"'
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
              children: "16250510358369"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "ts"'
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
              children: "1560496834"
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
              children: '  "data"'
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
              children: '    "service"'
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
              children: '      "hosts"'
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
              children: '          "primaryIP"'
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
              children: '          "primaryIP"'
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
              children: "      ]"
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
`, _jsxs(_components.p, {
      children: ["Each ", _jsx(_components.code, {
        children: "primaryIP"
      }), " field shows an IP address of the Notifications server. When you receive a response, add all these IP addresses to your firewall's allowed IP list."]
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
