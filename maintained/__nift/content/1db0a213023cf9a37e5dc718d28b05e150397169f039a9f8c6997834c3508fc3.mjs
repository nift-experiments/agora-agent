import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Receive webhook notifications",
  description: "Shows how to use the Agora Chat SDK to implement SetupWebhook management."
};
export let _markdown = `

Chat supports HTTP callbacks (webhooks) for synchronization of messages on your own server or moderation of message content. After you set up HTTP callbacks for your Chat app, the Chat server sends notifications in the form of HTTP POST requests to your app server when specified events occur. According to whether the message delivery is intervened, the callbacks are divided in two categories:

* Pre-delivery callbacks: Mainly used for content moderation. When the Chat server receives a message from the client app, it sends a request to your app server and waits for a response that decides if the message delivery is passed or rejected. Pre-delivery callbacks only apply to messages sent from your client apps.
* Post-delivery callbacks: Mainly used for data synchronization. When certain events occur, for example, a user sends out a message or gets offline, the Chat server sends a request to your app server and does not validate the response content. Post-delivery callbacks apply to messages and other events sent from you client and server apps.

## Understand the tech [#understand-the-tech]

**Difference between pre-delivery and post-delivery callbacks**

The following table summarizes the differences between the two categories of callbacks.

| Category             | Pre-delivery callback | Post-delivery callback       |
| -------------------- | --------------------- | ---------------------------- |
| Supported components | Client SDKs           | Client SDKs and REST APIs    |
| Supported scopes     | Only messages         | Messages and other events    |
| Response required    | Yes                   | No                           |
| Typical use case     | Content moderation    | Chat history synchronization |

**Callback security**

For pre-delivery and post-delivery callbacks, the Chat server sends HTTP/HTTPS POST requests with JSON payloads to your app server. The requests are encoded in UTF-8 and the message in each request is signed with an MD5 signature. In each request header, the \`Content-Type\` field is \`application/json\`.

For post-delivery callbacks, the message in requests is signed with an MD5 signature calculated with \`org.apache.commons.codec.digest.DigestUtils#md5Hex\`.

You can verify the signature to check whether the callbacks are sent from the Chat server.

1. Retrieve the following information:
   * The callback ID, which is the \`callId\` parameter in the request body of the callback.

   * The secret assigned to the callback rule. You can find it on the callback rule list on the **Callback** page on the [Agora console](https://console.agora.io/).

     ![](https://assets-docs.agora.io/images/im/callback_secret.png)

   * The callback timestamp, which is the timestamp parameter in the request body of the callback.

2. Calculate the [MD5](https://en.wikipedia.org/wiki/MD5) value of the concatenated string of the callback ID, the secret, and the callback timestamp.

3. Check if the calculated value equals to the secret parameter in the request body. If yes, the callback is sent by Agora Chat.

## Prerequisites [#prerequisites]

To use the HTTP callbacks, you must meet the following requirements:

* You have an Agora project with Chat [enabled](../../get-started/enable).
* You understand the API call frequency limit as described in [Limitations](../limitations).
* The HTTP callback feature is not enabled by default. To use this feature, you need to subscribe to the **Pro** or **Enterprise** [pricing plan](../../reference/pricing-plan-details) and enable it in [Agora Console](https://console.agora.io/).

<CalloutContainer type="info">
  <CalloutDescription>
    You must contact [support@agora.io](mailto\\:support@agora.io) to disable this feature as this operation will delete all the relevant configurations.
  </CalloutDescription>
</CalloutContainer>

## Configure callback rules [#configure-callback-rules]

To receive the HTTP callbacks, you need to configure rules for the pre- or post-delivery callbacks in Agora Console.

1. Log in to Agora Console and find your project on the **Project Management** page, then click the edit button.

2. Find **Chat** on the project editing page, and click **Configure**.

3. Choose **Features** > **Callback** and click **Add Callback Address** on the **Callback** page.

   ![](https://assets-docs.agora.io/images/im/callback_addr_list.png)

4. To add a rule for pre-delivery callbacks, fill the following fields under the **Pre Send** tab and then click **Save**:

   ![](https://assets-docs.agora.io/images/im/pre-delivery-callback.png)

   * **Rule Name**: Enter a name for the rule. Under one project, each rule must have a unique name.
   * **Conversation Type**: Select the types of chat this rule applies to.
   * **Message Type**: Select the types of messages this rule applies to.
   * **Timeout**: Specify the time (in ms) that the Chat server should wait for the HTTP responses. The default value is 200ms. If the response times out, the Chat server continues with the fallback action.
   * **Fallback Action**: Select the action of the Chat server when the HTTP response times out or an error is returned. The default value is **Passed**.
   * **Report Error**: Set whether to notify the message sender when their message is rejected. The default value is **No**, indicating that the sender is not notified of the message delivery failure.
   * **Status**: Set whether to enable this rule. The default value is **Disabled**.
   * **Callback URL**: Enter the URL of your app server for receiving the pre-delivery callbacks. Both HTTP and HTTPS URLs are allowed.

5. To add a rule for post-delivery callbacks, fill the following fields under the **Post Send** tab and then click **Save**:

   ![](https://assets-docs.agora.io/images/im/post-delivery-callback.png)

   ![](https://assets-docs.agora.io/images/im/post-delivery-callback-advanced.png)

   * **Rule Name**: Enter a name for the rule. Under one project, each rule must have a unique name.
   * **Callback URL**: Enter the URL of your app server for receiving the post-delivery callbacks. Both HTTP and HTTPS URLs are allowed.
   * **Status**: Set whether to enable this rule. The default value is **Disabled**.
   * **Callback Type**: Select the type of events that you want to received callback for.
   * **Message Type**: To synchronize the chat history on your own server, select chat messages. All messages sent by the users are chat messages, regardless of the online status of the message receiver. To push message notifications, select offline messages. Messages sent to an offline user are counted as offline messages.
   * **REST Message Required**: Set whether the callback should cover messages sent via RESTful API.
   * **From ID** (Optional): The sender UID.
   * **To ID** (Optional): The recipient UID.
   * **Group/Chatroom ID** (Optional): The ID of the relevant chat room or chat group. If you set this parameter, the server will only make callbacks for messages or events in this group or room.
   * **Extension Attribute Key** (Optional): The attribute key in the message extension field. If you set this parameter, the server will only make callbacks for messages containing this attribute key.

     <CalloutContainer type="success" />

If the sender, receiver, and group/room ID are set at the same time, the sender will not receive a callback when sending a single chat or group chat message to the receiver.
\\:::

The rules take effect immediately.

Note the following for the rule configurations:

* By default, you can add four rules for the pre- and post-delivery callbacks in total. To extend the limit, contact [support@agora.io](mailto\\:support@agora.io).
* To receive notifications for other events, configure callbacks under **Chat > Features > Callbacks** for your project in [Agora Console](https://console.agora.io/). See [Callbacks and events](/en/realtime-media/im/build/notifications-and-event-handling/callbacks-events) for details.

## Pre-delivery callbacks [#pre-delivery-callbacks]

The following figure shows how the pre-delivery callbacks work.

Pre-delivery callback

![](https://assets-docs.agora.io/images/im/pre_delivery_callback.png)

As shown in the figure, the workflow of pre-delivery callbacks is as follows:

1. The Chat server receives a message from Client A.
2. The Chat server sends an HTTP request that contains the information of the message to your app server.
3. Your app server processes the received data and sends the processing result in the form of HTTP response to the Chat server.
4. The Chat server receives the HTTP response and decides if the message delivery is passed.
5. If the message delivery is passed, the Chat server delivers the message to Client B.

The Chat server determines whether to send the message according to the HTTP response received from your app server. If the HTTP status code is 200 in the response, the Chat server handles the message as specified in the matching pre-delivery callback rule. If a response error occurs, including the required field \`valid\` being absent or fields being of an incorrect type, the Chat server handles the message as specified by **Fallback Action** in the matching pre-delivery callback rule and \`custom internal error\` is reported on the client (only when **Report Error** on the **Pre Send tab** page is set to **Yes** on the Agora Console).

<CalloutContainer type="info">
  <CalloutDescription>
    For pre-delivery callbacks, if your app server does not return the HTTP code 200 and the valid status, the Chat server does not resend the callback and takes the fallback action specified by the applicable rule.
  </CalloutDescription>
</CalloutContainer>

### HTTP request and response [#http-request-and-response]

#### Request header [#request-header]

| Field          | Description                                          |
| :------------- | :--------------------------------------------------- |
| \`Content-Type\` | The parameter type. The value is \`application/json\`. |

#### Request body [#request-body]

| Field             | Type   | Description                                                                                                                                                                                                                                                                                                                                                             |
| :---------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`callId\`          | String | The callback ID which is the unique identifier assigned to each callback. The callback ID is in the format of \`{appKey}_{uuid}\`, where the value of \`uuid\` is randomly generated.                                                                                                                                                                                       |
| \`timestamp\`       | Number | The Unix timestamp when the Chat server receives the message, in milliseconds.                                                                                                                                                                                                                                                                                          |
| \`chat_type\`       | String | The chat type: \`chat\`: One-to-one chats. \`group\`: Chat groups. \`chatroom\`: Chat room chats.                                                                                                                                                                                                                                                                             |
| \`group_id\`        | String | The group or chat room where the message included in the request is to be sent. This parameter is valid only for group and room chats.                                                                                                                                                                                                                                  |
| \`from\`            | String | The user ID of the message sender.                                                                                                                                                                                                                                                                                                                                      |
| \`to\`              | String | The message recipient.:One-to-one chat: The user ID of the message recipient.Group chat: The group ID. Chat room chat: The chat room ID.                                                                                                                                                                                                                                |
| \`msg_id\`          | String | The ID of the message for which the callback request is sent. This ID is the same as the \`msg_id\` generated by the Chat server when the message is sent to the recipient.                                                                                                                                                                                               |
| \`payload\`         | JSON   | The message content which matches the [content of the \`payload\` parameter in historical messages retrieved with the REST API](/en/api-reference/api-ref/im/message-management#content-of-historical-messages).                                                                                                                                                          |
| \`securityVersion\` | String | The security check version which is 1.0.0.                                                                                                                                                                                                                                                                                                                              |
| \`security\`        | String | The signature used to identify whether the HTTP callback request is from the Chat server. The signature is an MD5 hash in the format of \`{callId}+{secret}+{timestamp}\`, where \`secret\` is generated by the Chat server to produce the signature and is displayed on the callback rule list on the **Callback** page on the [Agora Console](https://console.agora.io/). |

#### Response body [#response-body]

The HTTP responses cannot exceed 1,000 characters; otherwise, the callbacks fail as the Chat server deems the responses as attack packets.

| Field     | Type    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-------- | :------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`valid\`   | Boolean | Yes      | Controls whether the message is appropriate according to the rules specified on your app server: \`true\`: The message is valid and the Chat server should deliver the message; \`false\`: The message is invalid and the Chat server should reject the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \`code\`    | String  | No       | Custom pre-delivery callback error description on the client. The value of the \`code\` field is displayed as the error on the client only when **Report Error** on the **Pre Send** tab page is set to **Yes** on the Agora Console. Callback errors are displayed as follows on the client: If \`code\` contains the content of the string type, the content is reported as the error; If \`code\` is not included in the response, \`custom logic denied\` is displayed. If \`code\` is returned as an empty string, \`Message blocked by external logic\` is displayed on a mobile client; If no response is received within the specified period, the default error \`custom internal error\` is reported. If a response error occurs, including the \`valid\` field being absent or fields being of an incorrect type, \`custom internal error\` is reported. |
| \`payload\` | Object  | No       | The modified message content. Currently, only the text content is allowed. The modified content must be in the same format as the original message and cannot exceed 1 KB. If it is unnecessary to modify the message, ignore this field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Request example [#request-example]

\`\`\`bash
{
    "callId":"easemob-demo#test_XXXX-dp01-6c50-XXXX-cf3b48b20e7e",
    "timestamp":1600060847294,
    "chat_type":"groupchat",
    "group_id":"16934809238921545",
    "from":"user1",
    "to":"user2",
    "msg_id":"8924312242322",
    "payload":{
    // Message content
    },
    "securityVersion":"1.0.0",
    "security":"2ca02c394bef9e7abc83958bcc3156d3"
}
\`\`\`

#### Response example [#response-example]

\`\`\`json
{
  "valid": true,
  "code": "HX:10000",
  "payload": {
    // Modified message content.
    // Only text contents are allowed.
  }
}
\`\`\`

## Post-delivery callbacks [#post-delivery-callbacks]

The workflow of post-delivery callbacks is as follows:

Post-delivery callback

![](https://assets-docs.agora.io/images/im/post_delivery_callback.png)

As shown in the figure, the workflow of post-delivery callbacks is as follows:

1. The Chat server receives a message or other event from a client or server.
2. The Chat server sends an HTTP request that contains the information of the message or event to your app server.
3. Your app server sends an HTTP response to the Chat server to indicate that the callback is received.

   <CalloutContainer type="warning">
     <CalloutDescription>
       If you have set both pre- and post-delivery callbacks, and a message is rejected after the pre-delivery callback returns, the post-delivery callbacks are not triggered.If you want to use strong encryption, you can encrypt the data yourself and enable your app server to decrypt the data included in the post-delivery callback requests received from the Chat server.
     </CalloutDescription>
   </CalloutContainer>

The Chat server places full trust in callback responses received from your app server without verifying them. As long as the returned HTTP status code is 200, the Chat server regards that the callback succeeds.

Responses to the requests cannot exceed 1,000 characters; otherwise, the callbacks fail as the Chat server deems the responses as attack packets.

**Retry logic**

For post-delivery callbacks, the Chat server records a notification failure and tries resending the callback once again. If the second attempt fails, the Chat server stops trying.

If 90 notification failures occur in 30 seconds, the callback rules involving the app server will be temporarily disabled for 5 minutes.

* [Query the callback data stored on the Chat server](#query-the-callback-data-stored-on-the-chat-server)

* [Resend the callback data stored on the Chat server](#resend-the-callback-data-stored-on-the-chat-server)

### Query the callback data stored on the Chat server [#query-the-callback-data-stored-on-the-chat-server]

In the case of post-delivery callback failures (due to link timeout, response timeout, and disabled callback rules), the messages and events generated within 10 minutes will be stored as a date key on the Chat server. You can query the callback data stored on the Chat server.

The callback data can be stored on the Chat server for up to 3 days by default. You need to consider to resend callback requests for such data before they are cleared from the server.

#### Authorization [#authorization]

Agora Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following \`Authorization\` field must be filled in the request header:

\`\`\`bash
Authorization: Bearer \${YourAppToken}
\`\`\`

In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log into the chat system. The Agora Chat RESTful API only supports authenticating users using app tokens. For details, see [Secure authentication with tokens](../secure-access-and-authentication/authentication).

#### HTTP request [#http-request]

\`\`\`bash
GET https://{host}/app-id/{app_id}/callbacks/storage/info
\`\`\`

#### Path parameter [#path-parameter]

| Parameter | Type   | Description                                                                                                                                                                                     | Required |
| :-------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`host\`    | String | The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see [Get Chat project information](../../get-started/enable#get-chat-project-information). | Yes      |
| \`app_id\`  | String | The unique identifier automatically assigned to each project by Agora                                                                                                                           | Yes      |

#### Request header [#request-header-1]

| Parameter       | Type   | Description                                                                                                                                                                                        | Required |
| :-------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Authorization\` | String | The authentication token of the app administrator, in the format of \`Bearer \${YourAppToken}\`, where \`Bearer\` is a fixed character, followed by an English space and then the obtained token value. | Yes      |

#### Response body [#response-body-1]

| Parameter         | Type   | Description                                                                                                                                                                                |
| :---------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`path\`            | String | The request path, which is part of the request URL.                                                                                                                                        |
| \`uri\`             | String | The request URI.                                                                                                                                                                           |
| \`timestamp\`       | Number | The Unix timestamp (ms) of the HTTP response.                                                                                                                                              |
| \`organization\`    | String | The unique identifier assigned to each company (organization) by the Chat service. It is the same as \`org_name\` in the request.                                                            |
| \`application\`     | String | A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter.                                                                                       |
| \`action\`          | String | The request method.                                                                                                                                                                        |
| \`duration\`        | Number | The duration (ms) from when the HTTP request is sent to the time the response is received.                                                                                                 |
| \`applicationName\` | String | The unique identifier assigned to each app by the Chat service. It is the same as \`app_name\` in the request.                                                                               |
| \`data\`            | Object | The data in the response that includes the \`date\`, \`size\`, and \`retry\` parameters.                                                                                                         |
| - \`date\`          | String | The date key that can be resent. Messages and events generated within 10 minutes will be stored as a date key. The key in the date key indicates the starting time spot of the 10 minutes. |
| - \`size\`          | Number | The number of messages in the date key.                                                                                                                                                    |
| - \`retry\`         | Number | The number of times the data in the date key is resent. The value is \`0\` before the first resending attempt is made.                                                                       |

#### Request example [#request-example-1]

\`\`\`bash
curl -X GET 'https://a1.easemob.com/easemob-demo/easeim/callbacks/storage/info' \\
-H 'Authorization: Bearer '
\`\`\`

#### Response example [#response-example-1]

\`\`\`json
{
  "path": "/callbacks",
  "uri": "https://XXXX/app-id/XXXX/callbacks",
  "timestamp": 1631193031254,
  "organization": "XXXX",
  "application": "8dfb1641-XXXX-XXXX-bbe9-d8d45a3be39f",
  "action": "post",
  "data": [
    {
      "date": "202109091440",
      "size": 15,
      "retry": 0
    },
    {
      "date": "202109091450",
      "size": 103,
      "retry": 1
    }
  ],
  "duration": 153,
  "applicationName": "XXXX"
}
\`\`\`

### Resend the callback data stored on the Chat server [#resend-the-callback-data-stored-on-the-chat-server]

You can resend the callback data stored on the Chat server by date key. It is recommended that the callback data be resent for up to 10 times.

#### HTTP request [#http-request-1]

\`\`\`bash
POST https://{host}/app-id/{app_id}/callbacks/storage/retry
\`\`\`

#### Path parameter [#path-parameter-1]

| Parameter | Type   | Description                                                                                                                                                                                           | Required |
| :-------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`host\`    | String | The domain name assigned by the Agora Chat service to access RESTful APIs. For how to get the domain name, see [Get Chat project information](../../get-started/enable#get-chat-project-information). | Yes      |
| \`app_id\`  | String | The unique identifier automatically assigned to each project by Agora                                                                                                                                 | Yes      |

#### Request header [#request-header-2]

| Parameter       | Type   | Description                                                                                                                                                                                     | Required |
| :-------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| \`Content-Type\`  | String | The content type. Set it as \`application/json\`.                                                                                                                                                 | Yes      |
| \`Authorization\` | String | The authentication token of app administrator, in the format of \`Bearer \${YourAppToken}\`, where \`Bearer\` is a fixed character, followed by an English space, and then the obtained token value. | Yes      |

#### Request body [#request-body-1]

| Parameter   | Type   | Required | Description                                                                                                                                                                                |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`date\`      | String | Yes      | The date key that can be resent. Messages and events generated within 10 minutes will be stored as a date key. The key in the date key indicates the starting time spot of the 10 minutes. |
| \`retry\`     | Number | No       | The number of times the data in the date key is resent. The value is \`0\` before the first resending attempt is made.                                                                       |
| \`targetUrl\` | String | No       | The address for receiving the callback request that is resent. If this parameter is not specified, the original callback address is used.                                                  |

#### Response body [#response-body-2]

| Parameter      | Type    | Description                                                                                                                           |
| :------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| \`path\`         | String  | The request path, which is part of the request URL.                                                                                   |
| \`uri\`          | String  | The request URI.                                                                                                                      |
| \`timestamp\`    | Number  | The Unix timestamp (ms) of the HTTP response.                                                                                         |
| \`organization\` | String  | The unique identifier assigned to each company (organization) by the Agora Chat service. It is the same as \`org_name\` in the request. |
| \`application\`  | String  | A unique internal ID assigned to each app by the Agora Chat service. You can safely ignore this parameter.                            |
| \`action\`       | String  | The request method.                                                                                                                   |
| \`data\`         | Boolean | Whether the callback data is successfully resent: \`success\`: The data is successfully sent. \`failure\`: The data fails to be resent.   |
| \`duration\`     | Number  | The duration (ms) from when the HTTP request is sent to the time the response is received.                                            |

#### Request example [#request-example-2]

\`\`\`bash
curl -X POST 'https://XXXX/app-id/XXXX/callback/storage/retry' \\
-H 'Authorization: Bearer ' \\
-H 'Content-Type: application/json' \\
-d '{
    "date": "202108272230",
    "retry": 0,
    "targetUrl": "https://localhost:8000/test"
}'
\`\`\`

#### Response example [#response-example-2]

\`\`\`json
{
  "path": "/callbacks",
  "uri": "https://XXXX/app-id/XXXX/callbacks",
  "timestamp": 1631194031721,
  "organization": "XXXX",
  "application": "8dfb1641-XXXX-XXXX-bbe9-d8d45a3be39f",
  "action": "post",
  "data": "success",
  "duration": 225,
  "applicationName": "XXXX"
}
\`\`\`

## Status codes [#status-codes]

For details, see [HTTP Status Codes](../http-status-codes).

## FAQ [#faq]

Q: Why is the message delivered to the intended recipient even though the value of the \`valid\` field is \`false\` in the pre-delivery callback response?

A: Maybe your server fails to return the pre-delivery callback response within the period specified with the **Timeout** parameter in the pre-delivery callback rule on the **Pre Send** page on the [Agora Console](https://console.agora.io/). In this case, the message is delivered if **Fallback Action** on the **Pre Send** page is set to **Passed**. To avoid this issue, you are advised to increase the value of the **Timeout** parameter (200 milliseconds by default), for example, to 1000 milliseconds.
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "Chat supports HTTP callbacks (webhooks) for synchronization of messages on your own server or moderation of message content. After you set up HTTP callbacks for your Chat app, the Chat server sends notifications in the form of HTTP POST requests to your app server when specified events occur. According to whether the message delivery is intervened, the callbacks are divided in two categories:"
  }, {
    heading: undefined,
    content: "Pre-delivery callbacks: Mainly used for content moderation. When the Chat server receives a message from the client app, it sends a request to your app server and waits for a response that decides if the message delivery is passed or rejected. Pre-delivery callbacks only apply to messages sent from your client apps."
  }, {
    heading: undefined,
    content: "Post-delivery callbacks: Mainly used for data synchronization. When certain events occur, for example, a user sends out a message or gets offline, the Chat server sends a request to your app server and does not validate the response content. Post-delivery callbacks apply to messages and other events sent from you client and server apps."
  }, {
    heading: "understand-the-tech",
    content: "**Difference between pre-delivery and post-delivery callbacks**"
  }, {
    heading: "understand-the-tech",
    content: "The following table summarizes the differences between the two categories of callbacks."
  }, {
    heading: "understand-the-tech",
    content: "Category"
  }, {
    heading: "understand-the-tech",
    content: "Pre-delivery callback"
  }, {
    heading: "understand-the-tech",
    content: "Post-delivery callback"
  }, {
    heading: "understand-the-tech",
    content: "Supported components"
  }, {
    heading: "understand-the-tech",
    content: "Client SDKs"
  }, {
    heading: "understand-the-tech",
    content: "Client SDKs and REST APIs"
  }, {
    heading: "understand-the-tech",
    content: "Supported scopes"
  }, {
    heading: "understand-the-tech",
    content: "Only messages"
  }, {
    heading: "understand-the-tech",
    content: "Messages and other events"
  }, {
    heading: "understand-the-tech",
    content: "Response required"
  }, {
    heading: "understand-the-tech",
    content: "Yes"
  }, {
    heading: "understand-the-tech",
    content: "No"
  }, {
    heading: "understand-the-tech",
    content: "Typical use case"
  }, {
    heading: "understand-the-tech",
    content: "Content moderation"
  }, {
    heading: "understand-the-tech",
    content: "Chat history synchronization"
  }, {
    heading: "understand-the-tech",
    content: "**Callback security**"
  }, {
    heading: "understand-the-tech",
    content: "For pre-delivery and post-delivery callbacks, the Chat server sends HTTP/HTTPS POST requests with JSON payloads to your app server. The requests are encoded in UTF-8 and the message in each request is signed with an MD5 signature. In each request header, the `Content-Type` field is `application/json`."
  }, {
    heading: "understand-the-tech",
    content: "For post-delivery callbacks, the message in requests is signed with an MD5 signature calculated with `org.apache.commons.codec.digest.DigestUtils#md5Hex`."
  }, {
    heading: "understand-the-tech",
    content: "You can verify the signature to check whether the callbacks are sent from the Chat server."
  }, {
    heading: "understand-the-tech",
    content: "Retrieve the following information:"
  }, {
    heading: "understand-the-tech",
    content: "The callback ID, which is the `callId` parameter in the request body of the callback."
  }, {
    heading: "understand-the-tech",
    content: "The secret assigned to the callback rule. You can find it on the callback rule list on the **Callback** page on the Agora console."
  }, {
    heading: "understand-the-tech",
    content: "The callback timestamp, which is the timestamp parameter in the request body of the callback."
  }, {
    heading: "understand-the-tech",
    content: "Calculate the MD5 value of the concatenated string of the callback ID, the secret, and the callback timestamp."
  }, {
    heading: "understand-the-tech",
    content: "Check if the calculated value equals to the secret parameter in the request body. If yes, the callback is sent by Agora Chat."
  }, {
    heading: "prerequisites",
    content: "To use the HTTP callbacks, you must meet the following requirements:"
  }, {
    heading: "prerequisites",
    content: "You have an Agora project with Chat enabled."
  }, {
    heading: "prerequisites",
    content: "You understand the API call frequency limit as described in Limitations."
  }, {
    heading: "prerequisites",
    content: "The HTTP callback feature is not enabled by default. To use this feature, you need to subscribe to the **Pro** or **Enterprise** pricing plan and enable it in Agora Console."
  }, {
    heading: "prerequisites",
    content: "You must contact support\\@agora.io to disable this feature as this operation will delete all the relevant configurations."
  }, {
    heading: "configure-callback-rules",
    content: "To receive the HTTP callbacks, you need to configure rules for the pre- or post-delivery callbacks in Agora Console."
  }, {
    heading: "configure-callback-rules",
    content: "Log in to Agora Console and find your project on the **Project Management** page, then click the edit button."
  }, {
    heading: "configure-callback-rules",
    content: "Find **Chat** on the project editing page, and click **Configure**."
  }, {
    heading: "configure-callback-rules",
    content: "Choose **Features** > **Callback** and click **Add Callback Address** on the **Callback** page."
  }, {
    heading: "configure-callback-rules",
    content: "To add a rule for pre-delivery callbacks, fill the following fields under the **Pre Send** tab and then click **Save**:"
  }, {
    heading: "configure-callback-rules",
    content: "**Rule Name**: Enter a name for the rule. Under one project, each rule must have a unique name."
  }, {
    heading: "configure-callback-rules",
    content: "**Conversation Type**: Select the types of chat this rule applies to."
  }, {
    heading: "configure-callback-rules",
    content: "**Message Type**: Select the types of messages this rule applies to."
  }, {
    heading: "configure-callback-rules",
    content: "**Timeout**: Specify the time (in ms) that the Chat server should wait for the HTTP responses. The default value is 200ms. If the response times out, the Chat server continues with the fallback action."
  }, {
    heading: "configure-callback-rules",
    content: "**Fallback Action**: Select the action of the Chat server when the HTTP response times out or an error is returned. The default value is **Passed**."
  }, {
    heading: "configure-callback-rules",
    content: "**Report Error**: Set whether to notify the message sender when their message is rejected. The default value is **No**, indicating that the sender is not notified of the message delivery failure."
  }, {
    heading: "configure-callback-rules",
    content: "**Status**: Set whether to enable this rule. The default value is **Disabled**."
  }, {
    heading: "configure-callback-rules",
    content: "**Callback URL**: Enter the URL of your app server for receiving the pre-delivery callbacks. Both HTTP and HTTPS URLs are allowed."
  }, {
    heading: "configure-callback-rules",
    content: "To add a rule for post-delivery callbacks, fill the following fields under the **Post Send** tab and then click **Save**:"
  }, {
    heading: "configure-callback-rules",
    content: "**Rule Name**: Enter a name for the rule. Under one project, each rule must have a unique name."
  }, {
    heading: "configure-callback-rules",
    content: "**Callback URL**: Enter the URL of your app server for receiving the post-delivery callbacks. Both HTTP and HTTPS URLs are allowed."
  }, {
    heading: "configure-callback-rules",
    content: "**Status**: Set whether to enable this rule. The default value is **Disabled**."
  }, {
    heading: "configure-callback-rules",
    content: "**Callback Type**: Select the type of events that you want to received callback for."
  }, {
    heading: "configure-callback-rules",
    content: "**Message Type**: To synchronize the chat history on your own server, select chat messages. All messages sent by the users are chat messages, regardless of the online status of the message receiver. To push message notifications, select offline messages. Messages sent to an offline user are counted as offline messages."
  }, {
    heading: "configure-callback-rules",
    content: "**REST Message Required**: Set whether the callback should cover messages sent via RESTful API."
  }, {
    heading: "configure-callback-rules",
    content: "**From ID** (Optional): The sender UID."
  }, {
    heading: "configure-callback-rules",
    content: "**To ID** (Optional): The recipient UID."
  }, {
    heading: "configure-callback-rules",
    content: "**Group/Chatroom ID** (Optional): The ID of the relevant chat room or chat group. If you set this parameter, the server will only make callbacks for messages or events in this group or room."
  }, {
    heading: "configure-callback-rules",
    content: "**Extension Attribute Key** (Optional): The attribute key in the message extension field. If you set this parameter, the server will only make callbacks for messages containing this attribute key."
  }, {
    heading: "configure-callback-rules",
    content: `If the sender, receiver, and group/room ID are set at the same time, the sender will not receive a callback when sending a single chat or group chat message to the receiver.
\\:::`
  }, {
    heading: "configure-callback-rules",
    content: "The rules take effect immediately."
  }, {
    heading: "configure-callback-rules",
    content: "Note the following for the rule configurations:"
  }, {
    heading: "configure-callback-rules",
    content: "By default, you can add four rules for the pre- and post-delivery callbacks in total. To extend the limit, contact support\\@agora.io."
  }, {
    heading: "configure-callback-rules",
    content: "To receive notifications for other events, configure callbacks under **Chat > Features > Callbacks** for your project in Agora Console. See Callbacks and events for details."
  }, {
    heading: "pre-delivery-callbacks",
    content: "The following figure shows how the pre-delivery callbacks work."
  }, {
    heading: "pre-delivery-callbacks",
    content: "Pre-delivery callback"
  }, {
    heading: "pre-delivery-callbacks",
    content: "As shown in the figure, the workflow of pre-delivery callbacks is as follows:"
  }, {
    heading: "pre-delivery-callbacks",
    content: "The Chat server receives a message from Client A."
  }, {
    heading: "pre-delivery-callbacks",
    content: "The Chat server sends an HTTP request that contains the information of the message to your app server."
  }, {
    heading: "pre-delivery-callbacks",
    content: "Your app server processes the received data and sends the processing result in the form of HTTP response to the Chat server."
  }, {
    heading: "pre-delivery-callbacks",
    content: "The Chat server receives the HTTP response and decides if the message delivery is passed."
  }, {
    heading: "pre-delivery-callbacks",
    content: "If the message delivery is passed, the Chat server delivers the message to Client B."
  }, {
    heading: "pre-delivery-callbacks",
    content: "The Chat server determines whether to send the message according to the HTTP response received from your app server. If the HTTP status code is 200 in the response, the Chat server handles the message as specified in the matching pre-delivery callback rule. If a response error occurs, including the required field `valid` being absent or fields being of an incorrect type, the Chat server handles the message as specified by **Fallback Action** in the matching pre-delivery callback rule and `custom internal error` is reported on the client (only when **Report Error** on the **Pre Send tab** page is set to **Yes** on the Agora Console)."
  }, {
    heading: "pre-delivery-callbacks",
    content: "For pre-delivery callbacks, if your app server does not return the HTTP code 200 and the valid status, the Chat server does not resend the callback and takes the fallback action specified by the applicable rule."
  }, {
    heading: "request-header",
    content: "Field"
  }, {
    heading: "request-header",
    content: "Description"
  }, {
    heading: "request-header",
    content: "`Content-Type`"
  }, {
    heading: "request-header",
    content: "The parameter type. The value is `application/json`."
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
    content: "`callId`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The callback ID which is the unique identifier assigned to each callback. The callback ID is in the format of `{appKey}_{uuid}`, where the value of `uuid` is randomly generated."
  }, {
    heading: "request-body",
    content: "`timestamp`"
  }, {
    heading: "request-body",
    content: "Number"
  }, {
    heading: "request-body",
    content: "The Unix timestamp when the Chat server receives the message, in milliseconds."
  }, {
    heading: "request-body",
    content: "`chat_type`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The chat type: `chat`: One-to-one chats. `group`: Chat groups. `chatroom`: Chat room chats."
  }, {
    heading: "request-body",
    content: "`group_id`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The group or chat room where the message included in the request is to be sent. This parameter is valid only for group and room chats."
  }, {
    heading: "request-body",
    content: "`from`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The user ID of the message sender."
  }, {
    heading: "request-body",
    content: "`to`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The message recipient.:One-to-one chat: The user ID of the message recipient.Group chat: The group ID. Chat room chat: The chat room ID."
  }, {
    heading: "request-body",
    content: "`msg_id`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The ID of the message for which the callback request is sent. This ID is the same as the `msg_id` generated by the Chat server when the message is sent to the recipient."
  }, {
    heading: "request-body",
    content: "`payload`"
  }, {
    heading: "request-body",
    content: "JSON"
  }, {
    heading: "request-body",
    content: "The message content which matches the content of the `payload` parameter in historical messages retrieved with the REST API."
  }, {
    heading: "request-body",
    content: "`securityVersion`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The security check version which is 1.0.0."
  }, {
    heading: "request-body",
    content: "`security`"
  }, {
    heading: "request-body",
    content: "String"
  }, {
    heading: "request-body",
    content: "The signature used to identify whether the HTTP callback request is from the Chat server. The signature is an MD5 hash in the format of `{callId}+{secret}+{timestamp}`, where `secret` is generated by the Chat server to produce the signature and is displayed on the callback rule list on the **Callback** page on the Agora Console."
  }, {
    heading: "response-body",
    content: "The HTTP responses cannot exceed 1,000 characters; otherwise, the callbacks fail as the Chat server deems the responses as attack packets."
  }, {
    heading: "response-body",
    content: "Field"
  }, {
    heading: "response-body",
    content: "Type"
  }, {
    heading: "response-body",
    content: "Required"
  }, {
    heading: "response-body",
    content: "Description"
  }, {
    heading: "response-body",
    content: "`valid`"
  }, {
    heading: "response-body",
    content: "Boolean"
  }, {
    heading: "response-body",
    content: "Yes"
  }, {
    heading: "response-body",
    content: "Controls whether the message is appropriate according to the rules specified on your app server: `true`: The message is valid and the Chat server should deliver the message; `false`: The message is invalid and the Chat server should reject the message."
  }, {
    heading: "response-body",
    content: "`code`"
  }, {
    heading: "response-body",
    content: "String"
  }, {
    heading: "response-body",
    content: "No"
  }, {
    heading: "response-body",
    content: "Custom pre-delivery callback error description on the client. The value of the `code` field is displayed as the error on the client only when **Report Error** on the **Pre Send** tab page is set to **Yes** on the Agora Console. Callback errors are displayed as follows on the client: If `code` contains the content of the string type, the content is reported as the error; If `code` is not included in the response, `custom logic denied` is displayed. If `code` is returned as an empty string, `Message blocked by external logic` is displayed on a mobile client; If no response is received within the specified period, the default error `custom internal error` is reported. If a response error occurs, including the `valid` field being absent or fields being of an incorrect type, `custom internal error` is reported."
  }, {
    heading: "response-body",
    content: "`payload`"
  }, {
    heading: "response-body",
    content: "Object"
  }, {
    heading: "response-body",
    content: "No"
  }, {
    heading: "response-body",
    content: "The modified message content. Currently, only the text content is allowed. The modified content must be in the same format as the original message and cannot exceed 1 KB. If it is unnecessary to modify the message, ignore this field."
  }, {
    heading: "post-delivery-callbacks",
    content: "The workflow of post-delivery callbacks is as follows:"
  }, {
    heading: "post-delivery-callbacks",
    content: "Post-delivery callback"
  }, {
    heading: "post-delivery-callbacks",
    content: "As shown in the figure, the workflow of post-delivery callbacks is as follows:"
  }, {
    heading: "post-delivery-callbacks",
    content: "The Chat server receives a message or other event from a client or server."
  }, {
    heading: "post-delivery-callbacks",
    content: "The Chat server sends an HTTP request that contains the information of the message or event to your app server."
  }, {
    heading: "post-delivery-callbacks",
    content: "Your app server sends an HTTP response to the Chat server to indicate that the callback is received."
  }, {
    heading: "post-delivery-callbacks",
    content: "If you have set both pre- and post-delivery callbacks, and a message is rejected after the pre-delivery callback returns, the post-delivery callbacks are not triggered.If you want to use strong encryption, you can encrypt the data yourself and enable your app server to decrypt the data included in the post-delivery callback requests received from the Chat server."
  }, {
    heading: "post-delivery-callbacks",
    content: "The Chat server places full trust in callback responses received from your app server without verifying them. As long as the returned HTTP status code is 200, the Chat server regards that the callback succeeds."
  }, {
    heading: "post-delivery-callbacks",
    content: "Responses to the requests cannot exceed 1,000 characters; otherwise, the callbacks fail as the Chat server deems the responses as attack packets."
  }, {
    heading: "post-delivery-callbacks",
    content: "**Retry logic**"
  }, {
    heading: "post-delivery-callbacks",
    content: "For post-delivery callbacks, the Chat server records a notification failure and tries resending the callback once again. If the second attempt fails, the Chat server stops trying."
  }, {
    heading: "post-delivery-callbacks",
    content: "If 90 notification failures occur in 30 seconds, the callback rules involving the app server will be temporarily disabled for 5 minutes."
  }, {
    heading: "post-delivery-callbacks",
    content: "Query the callback data stored on the Chat server"
  }, {
    heading: "post-delivery-callbacks",
    content: "Resend the callback data stored on the Chat server"
  }, {
    heading: "query-the-callback-data-stored-on-the-chat-server",
    content: "In the case of post-delivery callback failures (due to link timeout, response timeout, and disabled callback rules), the messages and events generated within 10 minutes will be stored as a date key on the Chat server. You can query the callback data stored on the Chat server."
  }, {
    heading: "query-the-callback-data-stored-on-the-chat-server",
    content: "The callback data can be stored on the Chat server for up to 3 days by default. You need to consider to resend callback requests for such data before they are cleared from the server."
  }, {
    heading: "authorization",
    content: "Agora Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following `Authorization` field must be filled in the request header:"
  }, {
    heading: "authorization",
    content: "In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log into the chat system. The Agora Chat RESTful API only supports authenticating users using app tokens. For details, see Secure authentication with tokens."
  }, {
    heading: "path-parameter",
    content: "Parameter"
  }, {
    heading: "path-parameter",
    content: "Type"
  }, {
    heading: "path-parameter",
    content: "Description"
  }, {
    heading: "path-parameter",
    content: "Required"
  }, {
    heading: "path-parameter",
    content: "`host`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see Get Chat project information."
  }, {
    heading: "path-parameter",
    content: "Yes"
  }, {
    heading: "path-parameter",
    content: "`app_id`"
  }, {
    heading: "path-parameter",
    content: "String"
  }, {
    heading: "path-parameter",
    content: "The unique identifier automatically assigned to each project by Agora"
  }, {
    heading: "path-parameter",
    content: "Yes"
  }, {
    heading: "request-header-1",
    content: "Parameter"
  }, {
    heading: "request-header-1",
    content: "Type"
  }, {
    heading: "request-header-1",
    content: "Description"
  }, {
    heading: "request-header-1",
    content: "Required"
  }, {
    heading: "request-header-1",
    content: "`Authorization`"
  }, {
    heading: "request-header-1",
    content: "String"
  }, {
    heading: "request-header-1",
    content: "The authentication token of the app administrator, in the format of `Bearer ${YourAppToken}`, where `Bearer` is a fixed character, followed by an English space and then the obtained token value."
  }, {
    heading: "request-header-1",
    content: "Yes"
  }, {
    heading: "response-body-1",
    content: "Parameter"
  }, {
    heading: "response-body-1",
    content: "Type"
  }, {
    heading: "response-body-1",
    content: "Description"
  }, {
    heading: "response-body-1",
    content: "`path`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The request path, which is part of the request URL."
  }, {
    heading: "response-body-1",
    content: "`uri`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The request URI."
  }, {
    heading: "response-body-1",
    content: "`timestamp`"
  }, {
    heading: "response-body-1",
    content: "Number"
  }, {
    heading: "response-body-1",
    content: "The Unix timestamp (ms) of the HTTP response."
  }, {
    heading: "response-body-1",
    content: "`organization`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The unique identifier assigned to each company (organization) by the Chat service. It is the same as `org_name` in the request."
  }, {
    heading: "response-body-1",
    content: "`application`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter."
  }, {
    heading: "response-body-1",
    content: "`action`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The request method."
  }, {
    heading: "response-body-1",
    content: "`duration`"
  }, {
    heading: "response-body-1",
    content: "Number"
  }, {
    heading: "response-body-1",
    content: "The duration (ms) from when the HTTP request is sent to the time the response is received."
  }, {
    heading: "response-body-1",
    content: "`applicationName`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The unique identifier assigned to each app by the Chat service. It is the same as `app_name` in the request."
  }, {
    heading: "response-body-1",
    content: "`data`"
  }, {
    heading: "response-body-1",
    content: "Object"
  }, {
    heading: "response-body-1",
    content: "The data in the response that includes the `date`, `size`, and `retry` parameters."
  }, {
    heading: "response-body-1",
    content: "- `date`"
  }, {
    heading: "response-body-1",
    content: "String"
  }, {
    heading: "response-body-1",
    content: "The date key that can be resent. Messages and events generated within 10 minutes will be stored as a date key. The key in the date key indicates the starting time spot of the 10 minutes."
  }, {
    heading: "response-body-1",
    content: "- `size`"
  }, {
    heading: "response-body-1",
    content: "Number"
  }, {
    heading: "response-body-1",
    content: "The number of messages in the date key."
  }, {
    heading: "response-body-1",
    content: "- `retry`"
  }, {
    heading: "response-body-1",
    content: "Number"
  }, {
    heading: "response-body-1",
    content: "The number of times the data in the date key is resent. The value is `0` before the first resending attempt is made."
  }, {
    heading: "resend-the-callback-data-stored-on-the-chat-server",
    content: "You can resend the callback data stored on the Chat server by date key. It is recommended that the callback data be resent for up to 10 times."
  }, {
    heading: "path-parameter-1",
    content: "Parameter"
  }, {
    heading: "path-parameter-1",
    content: "Type"
  }, {
    heading: "path-parameter-1",
    content: "Description"
  }, {
    heading: "path-parameter-1",
    content: "Required"
  }, {
    heading: "path-parameter-1",
    content: "`host`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "The domain name assigned by the Agora Chat service to access RESTful APIs. For how to get the domain name, see Get Chat project information."
  }, {
    heading: "path-parameter-1",
    content: "Yes"
  }, {
    heading: "path-parameter-1",
    content: "`app_id`"
  }, {
    heading: "path-parameter-1",
    content: "String"
  }, {
    heading: "path-parameter-1",
    content: "The unique identifier automatically assigned to each project by Agora"
  }, {
    heading: "path-parameter-1",
    content: "Yes"
  }, {
    heading: "request-header-2",
    content: "Parameter"
  }, {
    heading: "request-header-2",
    content: "Type"
  }, {
    heading: "request-header-2",
    content: "Description"
  }, {
    heading: "request-header-2",
    content: "Required"
  }, {
    heading: "request-header-2",
    content: "`Content-Type`"
  }, {
    heading: "request-header-2",
    content: "String"
  }, {
    heading: "request-header-2",
    content: "The content type. Set it as `application/json`."
  }, {
    heading: "request-header-2",
    content: "Yes"
  }, {
    heading: "request-header-2",
    content: "`Authorization`"
  }, {
    heading: "request-header-2",
    content: "String"
  }, {
    heading: "request-header-2",
    content: "The authentication token of app administrator, in the format of `Bearer ${YourAppToken}`, where `Bearer` is a fixed character, followed by an English space, and then the obtained token value."
  }, {
    heading: "request-header-2",
    content: "Yes"
  }, {
    heading: "request-body-1",
    content: "Parameter"
  }, {
    heading: "request-body-1",
    content: "Type"
  }, {
    heading: "request-body-1",
    content: "Required"
  }, {
    heading: "request-body-1",
    content: "Description"
  }, {
    heading: "request-body-1",
    content: "`date`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "Yes"
  }, {
    heading: "request-body-1",
    content: "The date key that can be resent. Messages and events generated within 10 minutes will be stored as a date key. The key in the date key indicates the starting time spot of the 10 minutes."
  }, {
    heading: "request-body-1",
    content: "`retry`"
  }, {
    heading: "request-body-1",
    content: "Number"
  }, {
    heading: "request-body-1",
    content: "No"
  }, {
    heading: "request-body-1",
    content: "The number of times the data in the date key is resent. The value is `0` before the first resending attempt is made."
  }, {
    heading: "request-body-1",
    content: "`targetUrl`"
  }, {
    heading: "request-body-1",
    content: "String"
  }, {
    heading: "request-body-1",
    content: "No"
  }, {
    heading: "request-body-1",
    content: "The address for receiving the callback request that is resent. If this parameter is not specified, the original callback address is used."
  }, {
    heading: "response-body-2",
    content: "Parameter"
  }, {
    heading: "response-body-2",
    content: "Type"
  }, {
    heading: "response-body-2",
    content: "Description"
  }, {
    heading: "response-body-2",
    content: "`path`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The request path, which is part of the request URL."
  }, {
    heading: "response-body-2",
    content: "`uri`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The request URI."
  }, {
    heading: "response-body-2",
    content: "`timestamp`"
  }, {
    heading: "response-body-2",
    content: "Number"
  }, {
    heading: "response-body-2",
    content: "The Unix timestamp (ms) of the HTTP response."
  }, {
    heading: "response-body-2",
    content: "`organization`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The unique identifier assigned to each company (organization) by the Agora Chat service. It is the same as `org_name` in the request."
  }, {
    heading: "response-body-2",
    content: "`application`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "A unique internal ID assigned to each app by the Agora Chat service. You can safely ignore this parameter."
  }, {
    heading: "response-body-2",
    content: "`action`"
  }, {
    heading: "response-body-2",
    content: "String"
  }, {
    heading: "response-body-2",
    content: "The request method."
  }, {
    heading: "response-body-2",
    content: "`data`"
  }, {
    heading: "response-body-2",
    content: "Boolean"
  }, {
    heading: "response-body-2",
    content: "Whether the callback data is successfully resent: `success`: The data is successfully sent. `failure`: The data fails to be resent."
  }, {
    heading: "response-body-2",
    content: "`duration`"
  }, {
    heading: "response-body-2",
    content: "Number"
  }, {
    heading: "response-body-2",
    content: "The duration (ms) from when the HTTP request is sent to the time the response is received."
  }, {
    heading: "status-codes",
    content: "For details, see HTTP Status Codes."
  }, {
    heading: "faq",
    content: "Q: Why is the message delivered to the intended recipient even though the value of the `valid` field is `false` in the pre-delivery callback response?"
  }, {
    heading: "faq",
    content: "A: Maybe your server fails to return the pre-delivery callback response within the period specified with the **Timeout** parameter in the pre-delivery callback rule on the **Pre Send** page on the Agora Console. In this case, the message is delivered if **Fallback Action** on the **Pre Send** page is set to **Passed**. To avoid this issue, you are advised to increase the value of the **Timeout** parameter (200 milliseconds by default), for example, to 1000 milliseconds."
  }],
  headings: [{
    id: "understand-the-tech",
    content: "Understand the tech"
  }, {
    id: "prerequisites",
    content: "Prerequisites"
  }, {
    id: "configure-callback-rules",
    content: "Configure callback rules"
  }, {
    id: "pre-delivery-callbacks",
    content: "Pre-delivery callbacks"
  }, {
    id: "http-request-and-response",
    content: "HTTP request and response"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "response-body",
    content: "Response body"
  }, {
    id: "request-example",
    content: "Request example"
  }, {
    id: "response-example",
    content: "Response example"
  }, {
    id: "post-delivery-callbacks",
    content: "Post-delivery callbacks"
  }, {
    id: "query-the-callback-data-stored-on-the-chat-server",
    content: "Query the callback data stored on the Chat server"
  }, {
    id: "authorization",
    content: "Authorization"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameter",
    content: "Path parameter"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "response-body-1",
    content: "Response body"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "response-example-1",
    content: "Response example"
  }, {
    id: "resend-the-callback-data-stored-on-the-chat-server",
    content: "Resend the callback data stored on the Chat server"
  }, {
    id: "http-request-1",
    content: "HTTP request"
  }, {
    id: "path-parameter-1",
    content: "Path parameter"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "response-body-2",
    content: "Response body"
  }, {
    id: "request-example-2",
    content: "Request example"
  }, {
    id: "response-example-2",
    content: "Response example"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "faq",
    content: "FAQ"
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
  url: "#configure-callback-rules",
  title: _jsx(_Fragment, {
    children: "Configure callback rules"
  })
}, {
  depth: 2,
  url: "#pre-delivery-callbacks",
  title: _jsx(_Fragment, {
    children: "Pre-delivery callbacks"
  })
}, {
  depth: 3,
  url: "#http-request-and-response",
  title: _jsx(_Fragment, {
    children: "HTTP request and response"
  })
}, {
  depth: 4,
  url: "#request-header",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#request-body",
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
  depth: 4,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#post-delivery-callbacks",
  title: _jsx(_Fragment, {
    children: "Post-delivery callbacks"
  })
}, {
  depth: 3,
  url: "#query-the-callback-data-stored-on-the-chat-server",
  title: _jsx(_Fragment, {
    children: "Query the callback data stored on the Chat server"
  })
}, {
  depth: 4,
  url: "#authorization",
  title: _jsx(_Fragment, {
    children: "Authorization"
  })
}, {
  depth: 4,
  url: "#http-request",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-header-1",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 4,
  url: "#response-body-1",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 4,
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-1",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 3,
  url: "#resend-the-callback-data-stored-on-the-chat-server",
  title: _jsx(_Fragment, {
    children: "Resend the callback data stored on the Chat server"
  })
}, {
  depth: 4,
  url: "#http-request-1",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameter-1",
  title: _jsx(_Fragment, {
    children: "Path parameter"
  })
}, {
  depth: 4,
  url: "#request-header-2",
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
  url: "#response-body-2",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 4,
  url: "#request-example-2",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 4,
  url: "#response-example-2",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 2,
  url: "#faq",
  title: _jsx(_Fragment, {
    children: "FAQ"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
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
      children: "Chat supports HTTP callbacks (webhooks) for synchronization of messages on your own server or moderation of message content. After you set up HTTP callbacks for your Chat app, the Chat server sends notifications in the form of HTTP POST requests to your app server when specified events occur. According to whether the message delivery is intervened, the callbacks are divided in two categories:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Pre-delivery callbacks: Mainly used for content moderation. When the Chat server receives a message from the client app, it sends a request to your app server and waits for a response that decides if the message delivery is passed or rejected. Pre-delivery callbacks only apply to messages sent from your client apps."
      }), `
`, _jsx(_components.li, {
        children: "Post-delivery callbacks: Mainly used for data synchronization. When certain events occur, for example, a user sends out a message or gets offline, the Chat server sends a request to your app server and does not validate the response content. Post-delivery callbacks apply to messages and other events sent from you client and server apps."
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "understand-the-tech",
      children: "Understand the tech"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Difference between pre-delivery and post-delivery callbacks"
      })
    }), `
`, _jsx(_components.p, {
      children: "The following table summarizes the differences between the two categories of callbacks."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Category"
          }), _jsx(_components.th, {
            children: "Pre-delivery callback"
          }), _jsx(_components.th, {
            children: "Post-delivery callback"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Supported components"
          }), _jsx(_components.td, {
            children: "Client SDKs"
          }), _jsx(_components.td, {
            children: "Client SDKs and REST APIs"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Supported scopes"
          }), _jsx(_components.td, {
            children: "Only messages"
          }), _jsx(_components.td, {
            children: "Messages and other events"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Response required"
          }), _jsx(_components.td, {
            children: "Yes"
          }), _jsx(_components.td, {
            children: "No"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "Typical use case"
          }), _jsx(_components.td, {
            children: "Content moderation"
          }), _jsx(_components.td, {
            children: "Chat history synchronization"
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Callback security"
      })
    }), `
`, _jsxs(_components.p, {
      children: ["For pre-delivery and post-delivery callbacks, the Chat server sends HTTP/HTTPS POST requests with JSON payloads to your app server. The requests are encoded in UTF-8 and the message in each request is signed with an MD5 signature. In each request header, the ", _jsx(_components.code, {
        children: "Content-Type"
      }), " field is ", _jsx(_components.code, {
        children: "application/json"
      }), "."]
    }), `
`, _jsxs(_components.p, {
      children: ["For post-delivery callbacks, the message in requests is signed with an MD5 signature calculated with ", _jsx(_components.code, {
        children: "org.apache.commons.codec.digest.DigestUtils#md5Hex"
      }), "."]
    }), `
`, _jsx(_components.p, {
      children: "You can verify the signature to check whether the callbacks are sent from the Chat server."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Retrieve the following information:"
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The callback ID, which is the ", _jsx(_components.code, {
                children: "callId"
              }), " parameter in the request body of the callback."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: ["The secret assigned to the callback rule. You can find it on the callback rule list on the ", _jsx(_components.strong, {
                children: "Callback"
              }), " page on the ", _jsx(_components.a, {
                href: "https://console.agora.io/",
                children: "Agora console"
              }), "."]
            }), `
`, _jsx(_components.p, {
              children: _jsx(_components.img, {
                src: "https://assets-docs.agora.io/images/im/callback_secret.png",
                alt: ""
              })
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsx(_components.p, {
              children: "The callback timestamp, which is the timestamp parameter in the request body of the callback."
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
          children: ["Calculate the ", _jsx(_components.a, {
            href: "https://en.wikipedia.org/wiki/MD5",
            children: "MD5"
          }), " value of the concatenated string of the callback ID, the secret, and the callback timestamp."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Check if the calculated value equals to the secret parameter in the request body. If yes, the callback is sent by Agora Chat."
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), `
`, _jsx(_components.p, {
      children: "To use the HTTP callbacks, you must meet the following requirements:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["You have an Agora project with Chat ", _jsx(_components.a, {
          href: "../../get-started/enable",
          children: "enabled"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["You understand the API call frequency limit as described in ", _jsx(_components.a, {
          href: "../limitations",
          children: "Limitations"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["The HTTP callback feature is not enabled by default. To use this feature, you need to subscribe to the ", _jsx(_components.strong, {
          children: "Pro"
        }), " or ", _jsx(_components.strong, {
          children: "Enterprise"
        }), " ", _jsx(_components.a, {
          href: "../../reference/pricing-plan-details",
          children: "pricing plan"
        }), " and enable it in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), "."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["You must contact ", _jsx(_components.a, {
            href: "mailto:support@agora.io",
            children: "support@agora.io"
          }), " to disable this feature as this operation will delete all the relevant configurations."]
        })
      })
    }), `
`, _jsx(_components.h2, {
      id: "configure-callback-rules",
      children: "Configure callback rules"
    }), `
`, _jsx(_components.p, {
      children: "To receive the HTTP callbacks, you need to configure rules for the pre- or post-delivery callbacks in Agora Console."
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Log in to Agora Console and find your project on the ", _jsx(_components.strong, {
            children: "Project Management"
          }), " page, then click the edit button."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Find ", _jsx(_components.strong, {
            children: "Chat"
          }), " on the project editing page, and click ", _jsx(_components.strong, {
            children: "Configure"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["Choose ", _jsx(_components.strong, {
            children: "Features"
          }), " > ", _jsx(_components.strong, {
            children: "Callback"
          }), " and click ", _jsx(_components.strong, {
            children: "Add Callback Address"
          }), " on the ", _jsx(_components.strong, {
            children: "Callback"
          }), " page."]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/callback_addr_list.png",
            alt: ""
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To add a rule for pre-delivery callbacks, fill the following fields under the ", _jsx(_components.strong, {
            children: "Pre Send"
          }), " tab and then click ", _jsx(_components.strong, {
            children: "Save"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/pre-delivery-callback.png",
            alt: ""
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Rule Name"
            }), ": Enter a name for the rule. Under one project, each rule must have a unique name."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Conversation Type"
            }), ": Select the types of chat this rule applies to."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Message Type"
            }), ": Select the types of messages this rule applies to."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Timeout"
            }), ": Specify the time (in ms) that the Chat server should wait for the HTTP responses. The default value is 200ms. If the response times out, the Chat server continues with the fallback action."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Fallback Action"
            }), ": Select the action of the Chat server when the HTTP response times out or an error is returned. The default value is ", _jsx(_components.strong, {
              children: "Passed"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Report Error"
            }), ": Set whether to notify the message sender when their message is rejected. The default value is ", _jsx(_components.strong, {
              children: "No"
            }), ", indicating that the sender is not notified of the message delivery failure."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Status"
            }), ": Set whether to enable this rule. The default value is ", _jsx(_components.strong, {
              children: "Disabled"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.strong, {
              children: "Callback URL"
            }), ": Enter the URL of your app server for receiving the pre-delivery callbacks. Both HTTP and HTTPS URLs are allowed."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["To add a rule for post-delivery callbacks, fill the following fields under the ", _jsx(_components.strong, {
            children: "Post Send"
          }), " tab and then click ", _jsx(_components.strong, {
            children: "Save"
          }), ":"]
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/post-delivery-callback.png",
            alt: ""
          })
        }), `
`, _jsx(_components.p, {
          children: _jsx(_components.img, {
            src: "https://assets-docs.agora.io/images/im/post-delivery-callback-advanced.png",
            alt: ""
          })
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Rule Name"
              }), ": Enter a name for the rule. Under one project, each rule must have a unique name."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Callback URL"
              }), ": Enter the URL of your app server for receiving the post-delivery callbacks. Both HTTP and HTTPS URLs are allowed."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Status"
              }), ": Set whether to enable this rule. The default value is ", _jsx(_components.strong, {
                children: "Disabled"
              }), "."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Callback Type"
              }), ": Select the type of events that you want to received callback for."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Message Type"
              }), ": To synchronize the chat history on your own server, select chat messages. All messages sent by the users are chat messages, regardless of the online status of the message receiver. To push message notifications, select offline messages. Messages sent to an offline user are counted as offline messages."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "REST Message Required"
              }), ": Set whether the callback should cover messages sent via RESTful API."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "From ID"
              }), " (Optional): The sender UID."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "To ID"
              }), " (Optional): The recipient UID."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Group/Chatroom ID"
              }), " (Optional): The ID of the relevant chat room or chat group. If you set this parameter, the server will only make callbacks for messages or events in this group or room."]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [`
`, _jsxs(_components.p, {
              children: [_jsx(_components.strong, {
                children: "Extension Attribute Key"
              }), " (Optional): The attribute key in the message extension field. If you set this parameter, the server will only make callbacks for messages containing this attribute key."]
            }), `
`, _jsx(CalloutContainer, {
              type: "success"
            }), `
`]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: `If the sender, receiver, and group/room ID are set at the same time, the sender will not receive a callback when sending a single chat or group chat message to the receiver.
:::`
    }), `
`, _jsx(_components.p, {
      children: "The rules take effect immediately."
    }), `
`, _jsx(_components.p, {
      children: "Note the following for the rule configurations:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: ["By default, you can add four rules for the pre- and post-delivery callbacks in total. To extend the limit, contact ", _jsx(_components.a, {
          href: "mailto:support@agora.io",
          children: "support@agora.io"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: ["To receive notifications for other events, configure callbacks under ", _jsx(_components.strong, {
          children: "Chat > Features > Callbacks"
        }), " for your project in ", _jsx(_components.a, {
          href: "https://console.agora.io/",
          children: "Agora Console"
        }), ". See ", _jsx(_components.a, {
          href: "/en/realtime-media/im/build/notifications-and-event-handling/callbacks-events",
          children: "Callbacks and events"
        }), " for details."]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "pre-delivery-callbacks",
      children: "Pre-delivery callbacks"
    }), `
`, _jsx(_components.p, {
      children: "The following figure shows how the pre-delivery callbacks work."
    }), `
`, _jsx(_components.p, {
      children: "Pre-delivery callback"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/im/pre_delivery_callback.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "As shown in the figure, the workflow of pre-delivery callbacks is as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsx(_components.li, {
        children: "The Chat server receives a message from Client A."
      }), `
`, _jsx(_components.li, {
        children: "The Chat server sends an HTTP request that contains the information of the message to your app server."
      }), `
`, _jsx(_components.li, {
        children: "Your app server processes the received data and sends the processing result in the form of HTTP response to the Chat server."
      }), `
`, _jsx(_components.li, {
        children: "The Chat server receives the HTTP response and decides if the message delivery is passed."
      }), `
`, _jsx(_components.li, {
        children: "If the message delivery is passed, the Chat server delivers the message to Client B."
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["The Chat server determines whether to send the message according to the HTTP response received from your app server. If the HTTP status code is 200 in the response, the Chat server handles the message as specified in the matching pre-delivery callback rule. If a response error occurs, including the required field ", _jsx(_components.code, {
        children: "valid"
      }), " being absent or fields being of an incorrect type, the Chat server handles the message as specified by ", _jsx(_components.strong, {
        children: "Fallback Action"
      }), " in the matching pre-delivery callback rule and ", _jsx(_components.code, {
        children: "custom internal error"
      }), " is reported on the client (only when ", _jsx(_components.strong, {
        children: "Report Error"
      }), " on the ", _jsx(_components.strong, {
        children: "Pre Send tab"
      }), " page is set to ", _jsx(_components.strong, {
        children: "Yes"
      }), " on the Agora Console)."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "For pre-delivery callbacks, if your app server does not return the HTTP code 200 and the valid status, the Chat server does not resend the callback and takes the fallback action specified by the applicable rule."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-request-and-response",
      children: "HTTP request and response"
    }), `
`, _jsx(_components.h4, {
      id: "request-header",
      children: "Request header"
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
            children: "Description"
          })]
        })
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Content-Type"
            })
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The parameter type. The value is ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
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
              children: "callId"
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
            children: ["The callback ID which is the unique identifier assigned to each callback. The callback ID is in the format of ", _jsx(_components.code, {
              children: "{appKey}_{uuid}"
            }), ", where the value of ", _jsx(_components.code, {
              children: "uuid"
            }), " is randomly generated."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "timestamp"
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
            children: "The Unix timestamp when the Chat server receives the message, in milliseconds."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "chat_type"
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
            children: ["The chat type: ", _jsx(_components.code, {
              children: "chat"
            }), ": One-to-one chats. ", _jsx(_components.code, {
              children: "group"
            }), ": Chat groups. ", _jsx(_components.code, {
              children: "chatroom"
            }), ": Chat room chats."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "group_id"
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
            children: "The group or chat room where the message included in the request is to be sent. This parameter is valid only for group and room chats."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "from"
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
            children: "The user ID of the message sender."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "to"
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
            children: ["The message recipient.", _jsx(_components.div, {}), " chat: The user ID of the message recipient.Group chat: The group ID. Chat room chat: The chat room ID."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "msg_id"
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
            children: ["The ID of the message for which the callback request is sent. This ID is the same as the ", _jsx(_components.code, {
              children: "msg_id"
            }), " generated by the Chat server when the message is sent to the recipient."]
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
            children: "JSON"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The message content which matches the ", _jsxs(_components.a, {
              href: "/en/api-reference/api-ref/im/message-management#content-of-historical-messages",
              children: ["content of the ", _jsx(_components.code, {
                children: "payload"
              }), " parameter in historical messages retrieved with the REST API"]
            }), "."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "securityVersion"
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
            children: "The security check version which is 1.0.0."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "security"
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
            children: ["The signature used to identify whether the HTTP callback request is from the Chat server. The signature is an MD5 hash in the format of ", _jsx(_components.code, {
              children: "{callId}+{secret}+{timestamp}"
            }), ", where ", _jsx(_components.code, {
              children: "secret"
            }), " is generated by the Chat server to produce the signature and is displayed on the callback rule list on the ", _jsx(_components.strong, {
              children: "Callback"
            }), " page on the ", _jsx(_components.a, {
              href: "https://console.agora.io/",
              children: "Agora Console"
            }), "."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-body",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "The HTTP responses cannot exceed 1,000 characters; otherwise, the callbacks fail as the Chat server deems the responses as attack packets."
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
            children: "Required"
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
              children: "valid"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Boolean"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Controls whether the message is appropriate according to the rules specified on your app server: ", _jsx(_components.code, {
              children: "true"
            }), ": The message is valid and the Chat server should deliver the message; ", _jsx(_components.code, {
              children: "false"
            }), ": The message is invalid and the Chat server should reject the message."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "code"
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
            children: "No"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Custom pre-delivery callback error description on the client. The value of the ", _jsx(_components.code, {
              children: "code"
            }), " field is displayed as the error on the client only when ", _jsx(_components.strong, {
              children: "Report Error"
            }), " on the ", _jsx(_components.strong, {
              children: "Pre Send"
            }), " tab page is set to ", _jsx(_components.strong, {
              children: "Yes"
            }), " on the Agora Console. Callback errors are displayed as follows on the client: If ", _jsx(_components.code, {
              children: "code"
            }), " contains the content of the string type, the content is reported as the error; If ", _jsx(_components.code, {
              children: "code"
            }), " is not included in the response, ", _jsx(_components.code, {
              children: "custom logic denied"
            }), " is displayed. If ", _jsx(_components.code, {
              children: "code"
            }), " is returned as an empty string, ", _jsx(_components.code, {
              children: "Message blocked by external logic"
            }), " is displayed on a mobile client; If no response is received within the specified period, the default error ", _jsx(_components.code, {
              children: "custom internal error"
            }), " is reported. If a response error occurs, including the ", _jsx(_components.code, {
              children: "valid"
            }), " field being absent or fields being of an incorrect type, ", _jsx(_components.code, {
              children: "custom internal error"
            }), " is reported."]
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
            children: "Object"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The modified message content. Currently, only the text content is allowed. The modified content must be in the same format as the original message and cannot exceed 1 KB. If it is unnecessary to modify the message, ignore this field."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example",
      children: "Request example"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "callId"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"easemob-demo#test_XXXX-dp01-6c50-XXXX-cf3b48b20e7e"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "timestamp"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ":1600060847294,"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "chat_type"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"groupchat"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "group_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"16934809238921545"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "from"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"user1"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "to"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"user2"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "msg_id"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"8924312242322"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "payload"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "{"
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "    //"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Message"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " content"
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
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "securityVersion"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"1.0.0"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '    "security"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: '"2ca02c394bef9e7abc83958bcc3156d3"'
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
      id: "response-example",
      children: "Response example"
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
              children: '  "valid"'
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
              children: '  "code"'
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
              children: '"HX:10000"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Modified message content."
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // Only text contents are allowed."
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
`, _jsx(_components.h2, {
      id: "post-delivery-callbacks",
      children: "Post-delivery callbacks"
    }), `
`, _jsx(_components.p, {
      children: "The workflow of post-delivery callbacks is as follows:"
    }), `
`, _jsx(_components.p, {
      children: "Post-delivery callback"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://assets-docs.agora.io/images/im/post_delivery_callback.png",
        alt: ""
      })
    }), `
`, _jsx(_components.p, {
      children: "As shown in the figure, the workflow of post-delivery callbacks is as follows:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The Chat server receives a message or other event from a client or server."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "The Chat server sends an HTTP request that contains the information of the message or event to your app server."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Your app server sends an HTTP response to the Chat server to indicate that the callback is received."
        }), `
`, _jsx(CalloutContainer, {
          type: "warning",
          children: _jsx(CalloutDescription, {
            children: _jsx(_components.p, {
              children: "If you have set both pre- and post-delivery callbacks, and a message is rejected after the pre-delivery callback returns, the post-delivery callbacks are not triggered.If you want to use strong encryption, you can encrypt the data yourself and enable your app server to decrypt the data included in the post-delivery callback requests received from the Chat server."
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "The Chat server places full trust in callback responses received from your app server without verifying them. As long as the returned HTTP status code is 200, the Chat server regards that the callback succeeds."
    }), `
`, _jsx(_components.p, {
      children: "Responses to the requests cannot exceed 1,000 characters; otherwise, the callbacks fail as the Chat server deems the responses as attack packets."
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Retry logic"
      })
    }), `
`, _jsx(_components.p, {
      children: "For post-delivery callbacks, the Chat server records a notification failure and tries resending the callback once again. If the second attempt fails, the Chat server stops trying."
    }), `
`, _jsx(_components.p, {
      children: "If 90 notification failures occur in 30 seconds, the callback rules involving the app server will be temporarily disabled for 5 minutes."
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "#query-the-callback-data-stored-on-the-chat-server",
            children: "Query the callback data stored on the Chat server"
          })
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: _jsx(_components.a, {
            href: "#resend-the-callback-data-stored-on-the-chat-server",
            children: "Resend the callback data stored on the Chat server"
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
      id: "query-the-callback-data-stored-on-the-chat-server",
      children: "Query the callback data stored on the Chat server"
    }), `
`, _jsx(_components.p, {
      children: "In the case of post-delivery callback failures (due to link timeout, response timeout, and disabled callback rules), the messages and events generated within 10 minutes will be stored as a date key on the Chat server. You can query the callback data stored on the Chat server."
    }), `
`, _jsx(_components.p, {
      children: "The callback data can be stored on the Chat server for up to 3 days by default. You need to consider to resend callback requests for such data before they are cleared from the server."
    }), `
`, _jsx(_components.h4, {
      id: "authorization",
      children: "Authorization"
    }), `
`, _jsxs(_components.p, {
      children: ["Agora Chat RESTful APIs require Bearer HTTP authentication. Every time an HTTP request is sent, the following ", _jsx(_components.code, {
        children: "Authorization"
      }), " field must be filled in the request header:"]
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
              children: "Authorization:"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " Bearer"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " ${YourAppToken}"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["In order to improve the security of the project, Agora uses a token (dynamic key) to authenticate users before they log into the chat system. The Agora Chat RESTful API only supports authenticating users using app tokens. For details, see ", _jsx(_components.a, {
        href: "../secure-access-and-authentication/authentication",
        children: "Secure authentication with tokens"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "http-request",
      children: "HTTP request"
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
              children: "GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://{host}/app-id/{app_id}/callbacks/storage/info"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter",
      children: "Path parameter"
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
            children: "Type"
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
              children: "host"
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
            children: ["The domain name assigned by the Chat service to access RESTful APIs. For how to get the domain name, see ", _jsx(_components.a, {
              href: "../../get-started/enable#get-chat-project-information",
              children: "Get Chat project information"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "app_id"
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
            children: "The unique identifier automatically assigned to each project by Agora"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-1",
      children: "Request header"
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
            children: "Type"
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
      }), _jsx(_components.tbody, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Authorization"
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
            children: ["The authentication token of the app administrator, in the format of ", _jsx(_components.code, {
              children: "Bearer ${YourAppToken}"
            }), ", where ", _jsx(_components.code, {
              children: "Bearer"
            }), " is a fixed character, followed by an English space and then the obtained token value."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-1",
      children: "Response body"
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
              children: "path"
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
            children: "The request path, which is part of the request URL."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uri"
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
            children: "The request URI."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "timestamp"
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
            children: "The Unix timestamp (ms) of the HTTP response."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "organization"
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
            children: ["The unique identifier assigned to each company (organization) by the Chat service. It is the same as ", _jsx(_components.code, {
              children: "org_name"
            }), " in the request."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "application"
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
            children: "A unique internal ID assigned to each app by the Chat service. You can safely ignore this parameter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "action"
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
            children: "The request method."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "duration"
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
            children: "The duration (ms) from when the HTTP request is sent to the time the response is received."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "applicationName"
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
            children: ["The unique identifier assigned to each app by the Chat service. It is the same as ", _jsx(_components.code, {
              children: "app_name"
            }), " in the request."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Object"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The data in the response that includes the ", _jsx(_components.code, {
              children: "date"
            }), ", ", _jsx(_components.code, {
              children: "size"
            }), ", and ", _jsx(_components.code, {
              children: "retry"
            }), " parameters."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- ", _jsx(_components.code, {
              children: "date"
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "String"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The date key that can be resent. Messages and events generated within 10 minutes will be stored as a date key. The key in the date key indicates the starting time spot of the 10 minutes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- ", _jsx(_components.code, {
              children: "size"
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The number of messages in the date key."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["- ", _jsx(_components.code, {
              children: "retry"
            })]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Number"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The number of times the data in the date key is resent. The value is ", _jsx(_components.code, {
              children: "0"
            }), " before the first resending attempt is made."]
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-1",
      children: "Request example"
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
              children: " GET"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://a1.easemob.com/easemob-demo/easeim/callbacks/storage/info'"
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
              children: "'Authorization: Bearer '"
            })]
          })]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-example-1",
      children: "Response example"
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
              children: '  "path"'
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
              children: '"/callbacks"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uri"'
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
              children: '"https://XXXX/app-id/XXXX/callbacks"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "timestamp"'
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
              children: "1631193031254"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "organization"'
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
              children: '"XXXX"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "application"'
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
              children: '"8dfb1641-XXXX-XXXX-bbe9-d8d45a3be39f"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "action"'
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
              children: '"post"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
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
              children: '      "date"'
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
              children: '"202109091440"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "size"'
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
              children: '      "retry"'
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
              children: '      "date"'
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
              children: '"202109091450"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "size"'
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
              children: "103"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '      "retry"'
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
              children: '  "duration"'
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
              children: "153"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "applicationName"'
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
              children: '"XXXX"'
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
      id: "resend-the-callback-data-stored-on-the-chat-server",
      children: "Resend the callback data stored on the Chat server"
    }), `
`, _jsx(_components.p, {
      children: "You can resend the callback data stored on the Chat server by date key. It is recommended that the callback data be resent for up to 10 times."
    }), `
`, _jsx(_components.h4, {
      id: "http-request-1",
      children: "HTTP request"
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
              children: "POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://{host}/app-id/{app_id}/callbacks/storage/retry"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameter-1",
      children: "Path parameter"
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
            children: "Type"
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
              children: "host"
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
            children: ["The domain name assigned by the Agora Chat service to access RESTful APIs. For how to get the domain name, see ", _jsx(_components.a, {
              href: "../../get-started/enable#get-chat-project-information",
              children: "Get Chat project information"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "app_id"
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
            children: "The unique identifier automatically assigned to each project by Agora"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-2",
      children: "Request header"
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
            children: "Type"
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
              children: "Content-Type"
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
            children: ["The content type. Set it as ", _jsx(_components.code, {
              children: "application/json"
            }), "."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Authorization"
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
            children: ["The authentication token of app administrator, in the format of ", _jsx(_components.code, {
              children: "Bearer ${YourAppToken}"
            }), ", where ", _jsx(_components.code, {
              children: "Bearer"
            }), " is a fixed character, followed by an English space, and then the obtained token value."]
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Yes"
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-body-1",
      children: "Request body"
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
            children: "Type"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Required"
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
              children: "date"
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
            children: "Yes"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The date key that can be resent. Messages and events generated within 10 minutes will be stored as a date key. The key in the date key indicates the starting time spot of the 10 minutes."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "retry"
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
            children: "No"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The number of times the data in the date key is resent. The value is ", _jsx(_components.code, {
              children: "0"
            }), " before the first resending attempt is made."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "targetUrl"
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
            children: "No"
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "The address for receiving the callback request that is resent. If this parameter is not specified, the original callback address is used."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-2",
      children: "Response body"
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
              children: "path"
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
            children: "The request path, which is part of the request URL."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "uri"
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
            children: "The request URI."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "timestamp"
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
            children: "The Unix timestamp (ms) of the HTTP response."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "organization"
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
            children: ["The unique identifier assigned to each company (organization) by the Agora Chat service. It is the same as ", _jsx(_components.code, {
              children: "org_name"
            }), " in the request."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "application"
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
            children: "A unique internal ID assigned to each app by the Agora Chat service. You can safely ignore this parameter."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "action"
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
            children: "The request method."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "data"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Boolean"
          }), _jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Whether the callback data is successfully resent: ", _jsx(_components.code, {
              children: "success"
            }), ": The data is successfully sent. ", _jsx(_components.code, {
              children: "failure"
            }), ": The data fails to be resent."]
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "duration"
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
            children: "The duration (ms) from when the HTTP request is sent to the time the response is received."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h4, {
      id: "request-example-2",
      children: "Request example"
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'https://XXXX/app-id/XXXX/callback/storage/retry'"
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
              children: "'Authorization: Bearer '"
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
              children: "'Content-Type: application/json'"
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
              children: '    "date": "202108272230",'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "retry": 0,'
            })
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "targetUrl": "https://localhost:8000/test"'
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
`, _jsx(_components.h4, {
      id: "response-example-2",
      children: "Response example"
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
              children: '  "path"'
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
              children: '"/callbacks"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "uri"'
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
              children: '"https://XXXX/app-id/XXXX/callbacks"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "timestamp"'
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
              children: "1631194031721"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "organization"'
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
              children: '"XXXX"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "application"'
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
              children: '"8dfb1641-XXXX-XXXX-bbe9-d8d45a3be39f"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "action"'
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
              children: '"post"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"success"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: ": "
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "225"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  "applicationName"'
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
              children: '"XXXX"'
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
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsxs(_components.p, {
      children: ["For details, see ", _jsx(_components.a, {
        href: "../http-status-codes",
        children: "HTTP Status Codes"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "faq",
      children: "FAQ"
    }), `
`, _jsxs(_components.p, {
      children: ["Q: Why is the message delivered to the intended recipient even though the value of the ", _jsx(_components.code, {
        children: "valid"
      }), " field is ", _jsx(_components.code, {
        children: "false"
      }), " in the pre-delivery callback response?"]
    }), `
`, _jsxs(_components.p, {
      children: ["A: Maybe your server fails to return the pre-delivery callback response within the period specified with the ", _jsx(_components.strong, {
        children: "Timeout"
      }), " parameter in the pre-delivery callback rule on the ", _jsx(_components.strong, {
        children: "Pre Send"
      }), " page on the ", _jsx(_components.a, {
        href: "https://console.agora.io/",
        children: "Agora Console"
      }), ". In this case, the message is delivered if ", _jsx(_components.strong, {
        children: "Fallback Action"
      }), " on the ", _jsx(_components.strong, {
        children: "Pre Send"
      }), " page is set to ", _jsx(_components.strong, {
        children: "Passed"
      }), ". To avoid this issue, you are advised to increase the value of the ", _jsx(_components.strong, {
        children: "Timeout"
      }), " parameter (200 milliseconds by default), for example, to 1000 milliseconds."]
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
