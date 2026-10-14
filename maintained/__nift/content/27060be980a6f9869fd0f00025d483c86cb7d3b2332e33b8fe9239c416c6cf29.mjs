import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "../runtime-jsx.mjs";
export let frontmatter = {
  title: "Media Pull Overview",
  description: "Introduces the RESTful APIs for the Media Pull service provided by Agora."
};
export let _markdown = `

**The RESTful API for Media Pull** enables you to inject an online media stream into the Agora channel as a live video source. After the injection succeeds, the online media stream automatically plays in the Agora channel, and remote users can see the content of the media stream.

## Working principle [#working-principle]

Injecting an online media stream into the Agora channel creates a Media Pull task (shown as "cloud player" in the rest of the article) in the Agora channel. You can control the cloud player through the RESTful API and accomplish the following functions for Media Pull:

* \`Create\`: Creates a cloud player in the project.
* \`Delete\`: Destroys the cloud player in the project.
* \`List\`: Queries and lists all the cloud players in the project.

Media Pull supports the following formats:

* Video codec formats: H.264, H.265, and VP9
* Audio codec formats: AAC and OPUS
* Protocols: HTTPS and RTMP
* Container formats: FLV, MP4, MPEG-TS, Matroska (MKV), and HLS

## Authentication [#authentication]

The RESTful APIs require basic HTTP authentication. You need to set the \`Authorization\` parameter in every HTTP request header. For how to get the value for Authorization, see [RESTful API authentication](./restful-authentication).

## Create API [#create-api]

This API creates a cloud player in the project.

### HTTP request [#http-request]

\`\`\`bash
POST https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/players
\`\`\`

<CalloutContainer type="warning">
  <CalloutDescription>
    The Agora RESTful API only supports HTTPS with TLS 1.0, 1.1, or 1.2 for encrypted communication. Requests over plain HTTP are not supported and will fail to connect.
  </CalloutDescription>
</CalloutContainer>

#### Path parameters [#path-parameters]

* \`appId\`: (Required) String. Agora provides the [App ID](/en/realtime-media/media-pull/reference/glossary#app-id) when you create a **project** in Agora Console. The App ID identifies each project.
* \`region\`: (Required) String. The region that the cloud player was created in. Agora supports the creation of cloud players in different regions. Currently, it supports four regions:
  * \`cn\`: China Mainland
  * \`ap\`: Asia Pacific
  * \`na\`: North America
  * \`eu\`: Europe

<CalloutContainer type="info">
  <CalloutDescription>
    Please ensure that the region you set is the same region as where your media stream originates is located.
  </CalloutDescription>
</CalloutContainer>

#### Query parameters [#query-parameters]

A sample request URL when using query parameters:

\`\`\`bash
https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/players?streamIp={streamIp}
\`\`\`

\`streamIp\`: (Optional) String. The IP address of the media stream's origin server. Must be a valid IPv4 address. Use this parameter to ensure the transmission quality of the media stream when the media stream is only available in some regions. Otherwise, ignore this parameter.

#### Request header [#request-header]

The request header contains the following fields:

* \`Content-Type\`: \`application/json\`
* \`Authorization\`: See [Authentication instructions](./restful-authentication).
* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, the Agora SDRTN<sup>®</sup> returns it in the response header.
  Best practice is to use this field. If you do not pass in any value, the Agora SDRTN<sup>®</sup> automatically generates a UUID to pass in.

#### Request body [#request-body]

If the status code is 2XX, the request succeeds.

<CalloutContainer type="info">
  <CalloutDescription>
    * You must set the cloud player's username, which can be a Number or String. Otherwise, the cloud player cannot be created, and Agora's server returns the \`400 (Bad Request)\` status code. Ensure that you have read [How can I use a username in string type?](/en/api-reference/faq/integration/string_uid) when using a username in String type.
    * To avoid failed requests, do not pass \`null\` or \`""\` in the required fields.
  </CalloutDescription>
</CalloutContainer>

The response body is a JSON Object called \`player\`, containing the following fields:

* \`audioOptions\`: (Optional) JSON Object. The audio transcoding configuration of the cloud player. Setting this field to empty or not set means that the audio is not transcoded.
  * \`Profile\`：Number. Audio profile. Sets the audio profile sample rate, bitrate, encoding mode, and the number of channels.
    * \`0\`: Default audio profile.
      * In the communication profile, the default audio profile represents a sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
      * In the live broadcasting profile, the default audio profile represents a sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps.
    * \`1\`: SPEECH\\_STANDARD. A sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
    * \`2\`: MUSIC\\_STANDARD. A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps.
    * \`3\`: MUSIC\\_STANDARD\\_STEREO. A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 80 Kbps.
    * \`4\`: MUSIC\\_HIGH\\_QUALITY. A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 96 Kbps.
    * \`5\`: MUSIC\\_HIGH\\_QUALITY\\_STEREO. A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 128 Kbps.
* \`videoOptions\`: (Optional) JSON Object. The video transcoding configuration of the cloud player. Setting this field to empty or not set means that the video is not transcoded.
  * \`width\`: Number. The width (px) of the output video. The value range is \\[66,1920].
  * \`height\`: Number. The height (px) of the output video. The value range is \\[66,1080].
  * \`widthHeightAdaption\`: Bool. Whether to enable horizontal and vertical screen adaptive mode:
    * \`true\`: Enable portrait and landscape adaptive mode. After you enable the adaptive mode, if the source media stream is in landscape mode, the output video width and height are 1280 × 720; if the source media stream is in portrait mode, the output video width and height are 720 × 1280.
    * \`false\`: (Default) Do not enable portrait and landscape adaptive mode.
  * \`frameRate\`: The frameRate (fps) of the output video. The value range is \\[1,30]. The default value is 15. For details, see [Video profile table](/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile#video-profile-table).
  * \`bitrate\`: Number. The bitrate (Kbps) of the output video. The value range is \\[1,10000]. For details, see [Video profile table](/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile#video-profile-table).
  * \`codec\`: String type. The encoding format of the output video. The following settings are supported:
    * VP9: Standard VP9.
    * H.264: (Default) Standard H.264.
      If set to other value, the default is H.264 video encoding format.
  * \`fillMode\`: String. The fill mode of the output video:
    * \`fit\`: (Default) Scales the video proportionally until it is fully displayed in the viewport.
    * \`fill\`: Scales the video proportionally until it fills the viewport.
* \`streamUrl\`: (Required) String. The RTMP/HTTPS URL of the online media stream. The maximum length of this field is 1024 bytes.

<CalloutContainer type="info">
  <CalloutDescription>
    To inject an image to the Agora channel, set \`streamUrl\` to the URL of the image you want to inject, and the cloud player will convert the image to a video and inject it to the Agora channel. Images in JPEG and PNG formats are currently supported. You can set video transcoding parameters through \`videoOptions\`.
  </CalloutDescription>
</CalloutContainer>

* \`channelName\`: (Required) String. The channel name. The maximum length of this field is 64 bytes. Supported character scopes are:
  * All lowercase English letters: a to z.
  * All uppercase English letters: A to Z.
  * All numeric characters: 0 to 9.
  * The space character.
  * Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "|", "\\~", ",".

* \`uid\`: (Optional) Number. The User ID of the cloud player in the channel. The value ranges from 0 to (2<sup>32</sup>-1). When you pass in \`0\`, Agora automatically assigns a User ID to the player.

<CalloutContainer type="info">
  <CalloutDescription>
    All UIDs within a channel must be unique. Ensure no other user or service bot is using this UID in the same channel.
  </CalloutDescription>
</CalloutContainer>

* \`account\`: (Optional) String. The User Account of the cloud player in the channel. The maximum length of this field is 255 bytes. Ensure that you set this parameter and do not set it as null. Supported character scopes are:
  * All lowercase English letters: a to z.
  * All uppercase English letters: A to Z.
  * All numeric characters: 0 to 9.
  * The space character.
  * Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "|", "\\~", ",".

<CalloutContainer type="info">
  <CalloutDescription>
    Ensure that the value is different from User Accounts of other users and players in the channel.
  </CalloutDescription>
</CalloutContainer>

* \`token\`: (Optional) String. The authentication token used by the cloud player in the channel. If you do not enable the App Certificate in Agora Console, ignore this field. If you enable the App Certificate in Agora Console, you must pass a value in this field:
  * For low-security requirements: Use the temporary token generated in Agora Console. For details, see [Generate an RTC temporary token](/en/introduction/account#generate-temporary-tokens).
  * For high-security requirements: Use the token generated at your server. For details, see [Secure authentication with tokens](/en/realtime-media/rtc/build/authenticate-users/deploy-token-server).

<CalloutContainer type="info">
  <CalloutDescription>
    When generating a token at your server, the value of \`uid\` or \`account\` must be the same as the User ID or User Account of the cloud player, and \`privilegeExpiredTs\` is recommended to be \`0\` to ensure that the token is valid for 24 hours at most.
  </CalloutDescription>
</CalloutContainer>

* \`idleTimeout\`: (Optional) Number. The maximum length of time (in seconds) that the cloud player is idle. The "idle" state means that the media stream is not playing. When the idle state exceeds \`idleTimeout\`, the cloud player is automatically destroyed. The value ranges from 5 to 600. The default value is 300. If the value is less than 5, Agora's server automatically adjusts it to 5; if the value is greater than 600, Agora's server automatically adjusts it to 600.
* \`playTs\`: (Optional) Number. The Unix timestamp (in seconds) when the cloud player starts playing the online media stream. The value range of playTs is \\[\`createTs\`-86400, \`createTs\`+300]. The default value is 0, which means the cloud player starts playing the online media stream when the cloud player is successfully created. If the value of \`playTs\` is not \`0\`, the following behavior occurs:
  * \`playTs\` > \`createTs\`: The cloud player starts playing the online media stream when the time is \`playTs\`. This is suitable for timing playback with other elements.
  * \`playTs\` \\< \`createTs\`: If the online media stream is a live stream, the cloud player starts playing the live stream when the cloud player is successfully created. If the online media stream is an on-demand stream, the cloud player starts playing the online media stream at the specified time in the stream prior to the creation of the cloud player. This is suitable for error recovery. For example, if the cloud player experiences an error during operation, you can create a new cloud player and set the \`playTs\` field of new cloud player to the unix timestamp when the old cloud player started to play the online media stream.
* \`name\`: (Optional) String. The name of the cloud player. The maximum length of this parameter is 64 bytes. Supported character scopes are:
  * All lowercase English letters: a to z.
  * All uppercase English letters: A to Z.
  * All numeric characters: 0 to 9.
  * "-", "\\_".
    \`name\` is null if you do not pass any value. Multiple cloud players using null name parameters can exist in one project at the same time; multiple cloud players with the same name cannot exist in one project at the same time. When trying to create a cloud player with the same name as an existing cloud player in the project, you will receive the \`409(Conflict)\` status code.

<CalloutContainer type="info">
  <CalloutDescription>
    To avoid creating multiple cloud players that inject the same online media stream into the same channel, use the \`name\` parameter to manage all the cloud players in your specified project. Agora recommends that you pass a value in \`name\` using a combination of the channel name (\`channelName\`) and the username (\`uid\` or \`account\`) of the cloud player, such as \`class32_101\` and \`class33_teacher101\` in the sample code.
  </CalloutDescription>
</CalloutContainer>

* \`encryptMode\`: (Optional) String. Encryption mode. Agora recommends using either the \`aes-128-gcm2\` or \`aes-256-gcm2\` encryption mode, both of which support adding a salt and are more secure.
  * \`aes-128-xts\`: 128-bit AES encryption, XTS mode.
  * \`aes-256-xts\`: 256-bit AES encryption, XTS mode.
  * \`aes-128-ecb\`: 128-bit AES encryption, ECB mode.
  * \`sm4-128-ecb\`: 128-bit SM4 encryption, ECB mode.
  * \`aes-128-gcm\`: 128-bit AES encryption, GCM mode.
  * \`aes-256-gcm\`: 256-bit AES encryption, GCM mode.
  * \`aes-128-gcm2\`: 128-bit AES encryption, GCM mode. Compared to \`aes-128-gcm\` encryption mode, \`aes-128-gcm2\` encryption mode is more secure and requires you to set the salt (\`encryptKdfSalt\`).
  * \`aes-256-gcm2\`: 256-bit AES encryption, GCM mode. Compared to \`aes-256-gcm\` encryption mode, \`aes-256-gcm2\` encryption mode is more secure and requires you to set the salt (\`encryptKdfSalt\`).
* \`encryptKey\`: (Optional) String. The encryption key with unlimited length. Agora recommends using a 32-byte key.

<CalloutContainer type="info">
  <CalloutDescription>
    If you do not set an encryption key or set it to null, built-in encryption is disabled.
  </CalloutDescription>
</CalloutContainer>

* \`encryptKdfSalt\`: (Optional) String. A 32-byte salt. Agora recommends using OpenSSL to generate this salt on your server. For details, see [Secure channel encryption](/en/realtime-media/rtc/build/secure-and-protect-channels/media-stream-encryption).

<CalloutContainer type="info">
  <CalloutDescription>
    This parameter is only valid when the encryption mode is set to \`aes-128-gcm2\` or \`aes-256-gcm2\`. In this case, ensure that it is not \`0\`.
  </CalloutDescription>
</CalloutContainer>

* \`repeatTime\`: (Optional) Int. Number of media streams played. This parameter applies only to on-demand streams. It can be set to:
  * \`1\`: (Default) Plays a media resource once.
  * \`-1\`: Plays media resources in a loop.
  * \`N\`: User-defined number of media resources to be played. It is an integer and cannot be set to \`0\`.
* \`seekPosition\`: (Optional) Number. Specifies the playback position (seconds) of the on-demand file. The default value is 0, which means play from the beginning of the on-demand file. It must be less than the media resource duration.
* dataStreamOptions: (Optional) JSON Object. The data stream configuration, which is used to set the SEI information carried by the video frame. This parameter applies only to on-demand streams.

  * \`enable\`: Set whether to inject the SEI information of Agora DataStream type.
    * \`true\`: Inject the SEI information of Agora DataStream type.
    * \`false\`: (Default) Do not inject the SEI information of Agora DataStream type.

  Agora DataStream is a data stream format of JSON type, the example is as follows:

  \`\`\`json
  message PositionData {
    # The length of the on-demand file
    int32 duration = 1;
    # The playback position of the on-demand file
    int32 position = 2;
    # The user ID of the host playing the on-demand file
    int32 uid = 3;
  }
  \`\`\`

### HTTP response [#http-response]

For all possible response status codes, see [Status codes](#code).

#### Response header [#response-header]

The response header contains the following fields:

* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. It is the same as the \`X-Request-ID\` field in the request header. If the request fails, print out this value in the log for troubleshooting.

<CalloutContainer type="info">
  <CalloutDescription>
    If you receive the \`401(Unauthorized)\` status code for this request, the response header does not contain the field.
  </CalloutDescription>
</CalloutContainer>

* \`X-Resource-ID\`: UUID (Universally Unique Identifier) to identify the cloud player created by this request:
  * When the status code is 2XX, this value is the ID of the cloud player created by this request.
  * When the status code is \`409(Conflict)\`, the name of the cloud player created by this request is duplicate with the name of other existing players in the project. This value is the ID of that existing player. Please check and modify the name of the cloud player created by this request.
  * When the status code is another value, this field is null and this request fails.

#### Response body [#response-body]

If the status code is 2XX, the request succeeds. The response body contains the following fields:

* \`player\`: JSON Object. Contains the following fields:
  * \`uid\`: Number. The User ID of the cloud player in the channel.
  * \`account\`: String. The User Account of the cloud player in the channel.
  * \`id\`: String. The ID of the cloud player. It is a UUID (Universally Unique Identifier) generated by Agora's server to identify the ID of the cloud player created.
  * \`createTs\`: Number. The Unix timestamp (in seconds) when creating the cloud player.
  * \`status\`: String. The state of the cloud player at runtime:
    * \`"idle"\`: The playback is not started.
    * \`"connecting"\`: Agora's server is connecting to the address of the media stream or detecting the audio and video data.
    * \`"running"\`: Playing.
    * \`"failed"\`: Agora's server cannot connect to the address of the media stream, or the media stream cannot be played.
  * \`fields\`: String. The field mask to represent a set of symbolic field paths. The field mask is encoded as a single string where paths are separated by a comma. It specifies a subset of fields that should be returned by this request. In the sample code using \`uid\`, \`fields\` specifies that Agora's server returns the \`uid\`, \`id\`, \`createTs\`, and \`status\` fields. For details, see [Google protobuf FieldMask](https://googleapis.dev/nodejs/pubsub/latest/google.protobuf.html#.FieldMask).

If the status code is not 2XX, the request fails. The response body contains the \`message\` field, which describes the detailed reason for the failure.

### Request example [#request-example]

**Media Pull without transcoding**

\`\`\`json
{
    "player": {
    "streamUrl": "rtmp://example.agora.io/live/class32/101",
    "channelName": "class32",
    "token": "2a784467d6",
    "uid": 101,
    "idleTimeout": 300,
    "playTs": 1575508644,
    "name": "test"
    }
}
\`\`\`

**Media Pull with transcoding**

\`\`\`json
{
    "player": {
        "audioOptions": {
            "profile": 1
        },
        "videoOptions": {
            "width": 1920,
            "height": 1080,
            "frameRate": 15,
            "bitrate": 400,
            "codec": "VP9",
            "gop": 30,
            "fillMode": "fill"
        },
    "streamUrl": "rtmp://example.agora.io/live/class32/101",
    "channelName": "class32",
    "token": "2a784467d6",
    "uid": 101,
    "idleTimeout": 300,
    "playTs": 1575508644,
    "name": "test"
    }
}
\`\`\`

### Response example [#response-example]

\`\`\`json
{
    "player": {
        "uid": 101,
        "id": "2a784467d647bb87b60b719f6fa56317",
        "createTs": 1575508644,
        "status": "running"
    },
    "fields": "player.uid,player.id,player.createTs,player.status"
}
\`\`\`

## Delete API [#delete-api]

This API destroys the cloud player in the project.

### HTTP request [#http-request-1]

\`\`\`bash
DELETE https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/players/{id}
\`\`\`

#### Path parameters [#path-parameters-1]

* \`appId\`: (Required) String. Agora provides the [App ID](/en/realtime-media/media-pull/reference/glossary#app-id) when you create a **project** in Agora Console. The App ID identifies each project.
* \`id\`: (Required) String. The ID of the cloud player.
* \`region\`: (Required) String. The \`region\` where the Player is created in.

#### Request header [#request-header-1]

* \`Authorization\`: See [Authentication](#authentication).

* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header.

<CalloutContainer type="info">
  <CalloutDescription>
    Agora recommends using this field. If you do not pass in any value, Agora's server automatically generates a UUID to pass in.
  </CalloutDescription>
</CalloutContainer>

### HTTP response [#http-response-1]

For all possible response status codes, see [Status codes](#code).

#### Response header [#response-header-1]

The response header contains the following fields:

* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. It is the same as the \`X-Request-ID\` field in the request header. If the request fails, print out this value in the log for troubleshooting.

<CalloutContainer type="info">
  <CalloutDescription>
    If you receive the \`401(Unauthorized)\` status code for this request, the response header does not contain the field.
  </CalloutDescription>
</CalloutContainer>

* \`X-Resource-ID\`: UUID (Universally Unique Identifier) to identify the ID of the cloud player created by this request. The UUID is the same as the value in the \`id\` path parameter.

#### Response body [#response-body-1]

* If the status code is 2XX, the request succeeds. The response body is empty.

* If the status code is not 2XX, the request fails. The response body contains the \`message\` field, which describes the detailed reason for the failure.

## List API [#list-api]

This API queries and lists all the cloud players in the project.

### HTTP request [#http-request-2]

\`\`\`bash
GET https://api.agora.io/v1/projects/{appId}/cloud-player/players
\`\`\`

#### Path parameters [#path-parameters-2]

\`appId\`: (Required) String. Agora provides the [App ID](/en/realtime-media/media-pull/reference/glossary#app-id) when you create a **project** in Agora Console. The App ID identifies each project.

#### Query parameters [#query-parameters-1]

A sample request URL when using query parameters:

\`\`\`bash
https://api.agora.io/v1/projects/{appId}/cloud-player/players?filter={filter}&pageSize={pageSize}&pageToken={pageToken}
\`\`\`

* \`filter\`: (Optional) String. The filter. Agora's server only lists the cloud players that meet the filter criteria in the project. The current filter is the value of \`channelName\` when creating the cloud player.

  Assuming the channel name is \`class32\`, replace \`filter={filter}\` in the sample request URL with \`filter=channelName eq class32\`; Assuming the channel name is \`bigclass\`, replace \`filter={filter}\` in the sample request URL with \`filter=channelName eq bigclass\`.

<CalloutContainer type="info">
  <CalloutDescription>
    Spaces exist before and after \`eq\` and require URL encoding.
  </CalloutDescription>
</CalloutContainer>

* \`pageSize\`: (Optional) Number. The maximum number of cloud players to return on one page. The value ranges from 1 to 500. The default value is 200, which means that for a single page, Agora's server lists up to 200 cloud players if you do not pass in any value.
* \`pageToken\`: (Optional) String. The page number to indicate the order of the pages. If you do not pass in any value, Agora's server returns to the first page.

<CalloutContainer type="info">
  <CalloutDescription>
    Recommended usage: When using the \`List\` API for the first time, do not pass any value in the \`pageToken\` query parameter. You can get the query results of the first page and the value of the \`nextPageToken\` field. The next time you use the \`List\` API, pass this value in the \`pageToken\` query parameter to query the cloud players on the next page.
  </CalloutDescription>
</CalloutContainer>

After using the above parameters, Agora's server queries and lists the cloud players according to the following steps:

1. Query the cloud players that meet the filter criteria in the specified project.
2. Set the space size of each page.
3. List the cloud players in the specified page.

   <CalloutContainer type="info">
     <CalloutDescription>
       Agora's server lists the cloud players in ascending order by \`createTs\`.
     </CalloutDescription>
   </CalloutContainer>

#### Request header [#request-header-2]

The request header contains the following fields:

* \`Authorization\`: See [Authentication](./restful-authentication).
* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header.

<CalloutContainer type="info">
  <CalloutDescription>
    Agora recommends using this field. If you do not pass in any value, Agora's server automatically generates a UUID to pass in.
  </CalloutDescription>
</CalloutContainer>

### HTTP response [#http-response-2]

For all possible response status codes, see [Status codes](#code).

#### Response header [#response-header-2]

* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. It is the same as the \`X-Request-ID\` field in the request header. If the request fails, print out this value in the log for troubleshooting.

<CalloutContainer type="info">
  <CalloutDescription>
    If you receive the \`401(Unauthorized)\` status code for this request, the response header does not contain the field.
  </CalloutDescription>
</CalloutContainer>

#### Response body [#response-body-2]

If the status code is 2XX, the request succeeds. The response body contains the following fields:

* \`totalSize\`: Number. The number of cloud players that meet the filter criteria.

* \`players\`: JSON Array. Contains the following fields:
  * \`name\`: String. The name of the cloud player.
  * \`streamUrl\`: String. The RTMP/HTTPS URL of the online media stream.
  * \`channelName\`: String. The name of the Agora channel.
  * \`uid\`: Number. The User ID of the cloud player in the Agora channel.
  * \`account\`: String. The User Account of the cloud player in the Agora channel.
  * \`id\`: String. UUID (Universally Unique Identifier) to identify the cloud player created. It is the ID of the cloud player.
  * \`createTs\`: Number. The Unix timestamp (in seconds) when creating the cloud player.
  * \`status\`: String. The state of the cloud player at runtime:
    * \`"idle"\`: The playback is not started.
    * \`"connecting"\`: Agora's server is connecting to the address of the media stream or detecting the audio and video data.
    * \`"running"\`: Playing.
    * \`"failed"\`: Agora's server cannot connect to the address of the media stream, or the media stream cannot be played.

* \`fields\`: String. The field mask to represent a set of symbolic field paths. The field mask is encoded as a single string where paths are separated by a comma. It specifies that Agora's server returns a subset of fields in each player in the \`players\` array. In the sample code using \`uid\`, \`fields\` specifies that Agora's server returns the \`name\`, \`streamUrl\`, \`channelName\`, \`uid\`, \`id\`, \`createTs\`, and \`status\` fields in each player in the \`players\` array.

* \`nextPageToken\`: String. The next page number of \`pageToken\`. You can pass the value of the \`nextPageToken\` field in the \`pageToken\` query parameter when using the \`List\` API next time. When \`nextPageToken\` is an empty string, there are no more players that match the request.

If the status code is not 2XX, the request fails. The response body contains the \`message\` field, which describes the detailed reason for the failure.

### Response example [#response-example-1]

\`\`\`json
{
    "totalSize": 10,
    "players": [{
        "name": "class32_101",
        "streamUrl": "rtmp://example.agora.io/live/class32/101",
        "channelName": "class32",
        "uid": 101,
        "id": "2a784467d647bb87b60b719f6fa56317",
        "createTs": 1575508644,
        "status": "running"
   }, {
        "name": "class68_422",
        "streamUrl": "rtmp://example.agora.io/live/class68/422",
        "channelName": "class68",
        "uid": 422,
        "id": "0b719f6fa563172a784467d647bb87b6",
        "createTs": 1575588644,
        "status": "connecting"
   }],
    "fields": "player.name,player.streamUrl,player.channelName,player.uid,player.id,player.createTs,player.status",
    "nextPageToken": "7b60b719f"
}
\`\`\`

## Update API [#update-api]

Update the cloud player you specified in the project.

### HTTP request [#http-request-3]

\`\`\`bash
PATCH https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/players/{id}
\`\`\`

#### Path parameters [#path-parameters-3]

* \`appId\`: (Required) String. Agora provides the [App ID](/en/realtime-media/media-pull/reference/glossary#app-id) when you create a **project** in Agora Console. The App ID identifies each project.
* \`id\`: (Required) String. The ID of the cloud player.
* \`region\`: (Required) String. The \`region\` where the Player is created in.

#### Query parameters [#query-parameters-2]

\`sequence\`: (Required) Number. The sequence number of the \`Update\` request. The parameter needs to be greater than or equal to 0. Ensure that the sequence number of the subsequent \`Update\` request is greater than the sequence number of the previous \`Update\` request. The serial number ensures that the Agora server updates Converter with the latest configuration you specified.

<CalloutContainer type="info">
  <CalloutDescription>
    Best practice is to fill \`sequence\` with \`0\` when calling \`Update\` for the first time. When calling \`Update\` for the second time, fill \`sequence\` with \`1\`. When calling \`Update\` for the third time, fill \`sequence\` with \`2\`. And so on. The Agora server updates cloud player according to the latest \`Update\` request (that is, the highest serial number).
  </CalloutDescription>
</CalloutContainer>

\`\`\`bash
PATCH https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/{playerid}?sequence={sequence}
\`\`\`

#### Request header [#request-header-3]

* \`Authorization\`: See [Authentication instructions](./restful-authentication).
* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header.

<div class="alert info"> Agora recommends using this field. If you do not pass in any value, Agora's server automatically generates a UUID to pass in.</div>

#### Request body [#request-body-1]

You can update the following fields at the same time:

* \`streamUrl\`
* \`audioOptions\`
* \`audioOptions.volume\`
* \`seekPosition\`
* \`isPause\`: Bool. Whether to pause the playback of the media stream source file:
  * \`true\`: Pauses playback of the media stream source file.
  * \`false\`:(Default) Plays the media stream source file.
* \`audioOptions.volume\`: Int. The volume of the cloud player. The value range is \\[0,200]. The default value is 100, which represents the original volume.

For the details of other fields, see [Create request body](#create).

### HTTP response [#http-response-3]

For all possible response status codes, see [Status codes](#code).

#### Response header [#response-header-3]

* \`X-Request-ID\`: UUID (Universally Unique Identifier) to identify this request. It is the same as the \`X-Request-ID\` field in the request header. If the request fails, print out this value in the log for troubleshooting.

<CalloutContainer type="info">
  <CalloutDescription>
    If the status code is not 2XX, the response header does not contain the field.
  </CalloutDescription>
</CalloutContainer>

* \`X-Resource-ID\`: UUID (Universally Unique Identifier) to identify the ID of the cloud player created by this request. The UUID is the same as the value in the \`id\` path parameter.

#### Response body [#response-body-3]

* If the status code is 2XX, the request succeeds. The response body is empty.
* If the status code is not 2XX, the request fails. The response body contains the \`message\` field, which describes the detailed reason for the failure.

### Request example [#request-example-1]

\`\`\`json
"player": {
   "audioOptions": {
       "volume": 10
   },
   "isPause": false,
   "streamUrl": "http://XXXX",
   "seekPosition": 40
}
\`\`\`

## Rate limits [#rate-limits]

Do not exceed the API rate limits, otherwise you receive the \`429(Too Many Requests)\` status code.

| API      | Rate limit                                                                                                                                                                                                                                                                           |
| :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`Create\` | * In a project, when creating cloud players with \`name\`, the maximum rate of creating each cloud player with a different name is 2 times per second.

* In a project, the maximum rate of creating a cloud player without \`name\` is 50 times per second.                             |
| \`Delete\` | In a project, the maximum rate of destroying a cloud player is 100 times per second.                                                                                                                                                                                                 |
| \`List\`   | - In a project, the maximum rate of querying a cloud player with \`filter\`(\`channelName\`) is 2 times per second and 15 times per minute.

- In a project, the maximum rate of querying a cloud player without \`filter\`(\`channelName\`) is 10 times per second and 20 times per minute. |

<a id="code"></a>

## Status codes [#status-codes]

* If the status code is 2XX, the request succeeds.
* If the status code is not 2XX, the request fails. Use the \`message\` field in the response body for troubleshooting.

| Status code             | Possible message field                                                                                                                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200 OK                  | /                                                                                                                                                                       |
| 400 Bad Request         | - Parameter 'streamUrl' is invalid formatted.

- Parameter channelName is invalid. Fix it in your request and retry.                                                    |
| 401 Unauthorized        | Invalid authentication credentials.                                                                                                                                     |
| 403 Forbidden           | * This project has not enabled Cloud Player product yet. Contact us to enable it.

* This project's permission to use Cloud Player was revoked. Contact us for details. |
| 404 Not Found           | Resource is not found and destroyed.                                                                                                                                    |
| 409 Conflict            | Resource with the same name already exists.                                                                                                                             |
| 429 Too Many Requests   | - Request rate limit exceeded.

- Resources quota limit exceeded.

- no available resources                                                                             |
| 500 Unknown             | Some internal error happened. Contact us to help fix it.                                                                                                                |
| 503 Service Unavailable | * Service overload. Retry with back off strategy, and contact us to help fix it.

* Service unavailable temporarily. Retry with back off strategy.                      |
| 504 Gateway Timeout     | Gateway timeout. Query to check whether the player has been created, or to create another one instead.                                                                  |

## RESTful API callback service [#restful-api-callback-service]

After using these RESTful APIs, Agora's notification server sends the callback notification to your server through an HTTP request.
For details, see [Message Notification Service](../../api-reference/ncs-events).

## Considerations [#considerations]

This section summarizes some important considerations when using the Media Pull RESTful API.

| Item                                                                                                                                                                                                                                                                     | Impact |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Ensure that the channel profile is set as \`LIVE_BROADCASTING\`.                                                                                                                                                                                                           | ★★★☆☆  |
| If the channel needs only one cloud player, ensure that you have set the \`name\` parameter. For details, see the description of \`name\`.                                                                                                                                   | ★★★☆☆  |
| If the channel needs more than one cloud player, ensure that each player has a unique user ID/account. For details, see the description of \`uid\` and \`account\`.                                                                                                          | ★★★★★  |
| Please ensure that the region you set is the same region as where your media stream originates is located. For details, see the description of \`region\`.                                                                                                                 | ★★★★★  |
| The cloud player may be deleted automatically due to server errors. Agora recommends that you enable the Message Notification Service to listen for events of Media Pull. For details, see the [Media Pull Message Notification Server](../../api-reference/enable-ncs). | ★★★★★  |
| When using the \`List\` API, the \`players\` field in the response body might only include \`id\`, \`name\`, and \`CreateTs\`. Ensure that your app logic can handle this situation.                                                                                               | ★★★★★  |
| If using the \`Create\` or \`Delete\` API results in a status code of \`504 Gateway Timeout\`, call the \`List\` API to query the actual state of the cloud player to make sure an unmanaged cloud player does not exist.                                                        | ★★★☆☆  |
| If your request fails, ensure that you print out the \`X-Request-ID\` and \`X-Resource-ID\` fields in the response header in the log for later use in troubleshooting.                                                                                                       | ★★★☆☆  |
| After creating a cloud player and receiving a response message, you need to wait about 10 seconds before using the \`List\` method to query, otherwise you may not get any information.                                                                                    | ★★★☆☆  |
| The default maximum number of concurrent tasks is 20, which means that a maximum of 20 Media Pull tasks are allowed to run simultaneously for each project. You can contact [support@agora.io](mailto\\:support@agora.io) to get a higher quota.                          | ★★★★☆  |
`;
export let structuredData = {
  contents: [{
    heading: undefined,
    content: "**The RESTful API for Media Pull** enables you to inject an online media stream into the Agora channel as a live video source. After the injection succeeds, the online media stream automatically plays in the Agora channel, and remote users can see the content of the media stream."
  }, {
    heading: "working-principle",
    content: 'Injecting an online media stream into the Agora channel creates a Media Pull task (shown as "cloud player" in the rest of the article) in the Agora channel. You can control the cloud player through the RESTful API and accomplish the following functions for Media Pull:'
  }, {
    heading: "working-principle",
    content: "`Create`: Creates a cloud player in the project."
  }, {
    heading: "working-principle",
    content: "`Delete`: Destroys the cloud player in the project."
  }, {
    heading: "working-principle",
    content: "`List`: Queries and lists all the cloud players in the project."
  }, {
    heading: "working-principle",
    content: "Media Pull supports the following formats:"
  }, {
    heading: "working-principle",
    content: "Video codec formats: H.264, H.265, and VP9"
  }, {
    heading: "working-principle",
    content: "Audio codec formats: AAC and OPUS"
  }, {
    heading: "working-principle",
    content: "Protocols: HTTPS and RTMP"
  }, {
    heading: "working-principle",
    content: "Container formats: FLV, MP4, MPEG-TS, Matroska (MKV), and HLS"
  }, {
    heading: "authentication",
    content: "The RESTful APIs require basic HTTP authentication. You need to set the `Authorization` parameter in every HTTP request header. For how to get the value for Authorization, see RESTful API authentication."
  }, {
    heading: "create-api",
    content: "This API creates a cloud player in the project."
  }, {
    heading: "http-request",
    content: "The Agora RESTful API only supports HTTPS with TLS 1.0, 1.1, or 1.2 for encrypted communication. Requests over plain HTTP are not supported and will fail to connect."
  }, {
    heading: "path-parameters",
    content: "`appId`: (Required) String. Agora provides the App ID when you create a **project** in Agora Console. The App ID identifies each project."
  }, {
    heading: "path-parameters",
    content: "`region`: (Required) String. The region that the cloud player was created in. Agora supports the creation of cloud players in different regions. Currently, it supports four regions:"
  }, {
    heading: "path-parameters",
    content: "`cn`: China Mainland"
  }, {
    heading: "path-parameters",
    content: "`ap`: Asia Pacific"
  }, {
    heading: "path-parameters",
    content: "`na`: North America"
  }, {
    heading: "path-parameters",
    content: "`eu`: Europe"
  }, {
    heading: "path-parameters",
    content: "Please ensure that the region you set is the same region as where your media stream originates is located."
  }, {
    heading: "query-parameters",
    content: "A sample request URL when using query parameters:"
  }, {
    heading: "query-parameters",
    content: "`streamIp`: (Optional) String. The IP address of the media stream's origin server. Must be a valid IPv4 address. Use this parameter to ensure the transmission quality of the media stream when the media stream is only available in some regions. Otherwise, ignore this parameter."
  }, {
    heading: "request-header",
    content: "The request header contains the following fields:"
  }, {
    heading: "request-header",
    content: "`Content-Type`: `application/json`"
  }, {
    heading: "request-header",
    content: "`Authorization`: See Authentication instructions."
  }, {
    heading: "request-header",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, the Agora SDRTN<sup>®</sup> returns it in the response header.\nBest practice is to use this field. If you do not pass in any value, the Agora SDRTN<sup>®</sup> automatically generates a UUID to pass in."
  }, {
    heading: "request-body",
    content: "If the status code is 2XX, the request succeeds."
  }, {
    heading: "request-body",
    content: "You must set the cloud player's username, which can be a Number or String. Otherwise, the cloud player cannot be created, and Agora's server returns the `400 (Bad Request)` status code. Ensure that you have read How can I use a username in string type? when using a username in String type."
  }, {
    heading: "request-body",
    content: 'To avoid failed requests, do not pass `null` or `""` in the required fields.'
  }, {
    heading: "request-body",
    content: "The response body is a JSON Object called `player`, containing the following fields:"
  }, {
    heading: "request-body",
    content: "`audioOptions`: (Optional) JSON Object. The audio transcoding configuration of the cloud player. Setting this field to empty or not set means that the audio is not transcoded."
  }, {
    heading: "request-body",
    content: "`Profile`：Number. Audio profile. Sets the audio profile sample rate, bitrate, encoding mode, and the number of channels."
  }, {
    heading: "request-body",
    content: "`0`: Default audio profile."
  }, {
    heading: "request-body",
    content: "In the communication profile, the default audio profile represents a sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps."
  }, {
    heading: "request-body",
    content: "In the live broadcasting profile, the default audio profile represents a sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps."
  }, {
    heading: "request-body",
    content: "`1`: SPEECH\\_STANDARD. A sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps."
  }, {
    heading: "request-body",
    content: "`2`: MUSIC\\_STANDARD. A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps."
  }, {
    heading: "request-body",
    content: "`3`: MUSIC\\_STANDARD\\_STEREO. A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 80 Kbps."
  }, {
    heading: "request-body",
    content: "`4`: MUSIC\\_HIGH\\_QUALITY. A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 96 Kbps."
  }, {
    heading: "request-body",
    content: "`5`: MUSIC\\_HIGH\\_QUALITY\\_STEREO. A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 128 Kbps."
  }, {
    heading: "request-body",
    content: "`videoOptions`: (Optional) JSON Object. The video transcoding configuration of the cloud player. Setting this field to empty or not set means that the video is not transcoded."
  }, {
    heading: "request-body",
    content: "`width`: Number. The width (px) of the output video. The value range is \\[66,1920]."
  }, {
    heading: "request-body",
    content: "`height`: Number. The height (px) of the output video. The value range is \\[66,1080]."
  }, {
    heading: "request-body",
    content: "`widthHeightAdaption`: Bool. Whether to enable horizontal and vertical screen adaptive mode:"
  }, {
    heading: "request-body",
    content: "`true`: Enable portrait and landscape adaptive mode. After you enable the adaptive mode, if the source media stream is in landscape mode, the output video width and height are 1280 × 720; if the source media stream is in portrait mode, the output video width and height are 720 × 1280."
  }, {
    heading: "request-body",
    content: "`false`: (Default) Do not enable portrait and landscape adaptive mode."
  }, {
    heading: "request-body",
    content: "`frameRate`: The frameRate (fps) of the output video. The value range is \\[1,30]. The default value is 15. For details, see Video profile table."
  }, {
    heading: "request-body",
    content: "`bitrate`: Number. The bitrate (Kbps) of the output video. The value range is \\[1,10000]. For details, see Video profile table."
  }, {
    heading: "request-body",
    content: "`codec`: String type. The encoding format of the output video. The following settings are supported:"
  }, {
    heading: "request-body",
    content: "VP9: Standard VP9."
  }, {
    heading: "request-body",
    content: `H.264: (Default) Standard H.264.
If set to other value, the default is H.264 video encoding format.`
  }, {
    heading: "request-body",
    content: "`fillMode`: String. The fill mode of the output video:"
  }, {
    heading: "request-body",
    content: "`fit`: (Default) Scales the video proportionally until it is fully displayed in the viewport."
  }, {
    heading: "request-body",
    content: "`fill`: Scales the video proportionally until it fills the viewport."
  }, {
    heading: "request-body",
    content: "`streamUrl`: (Required) String. The RTMP/HTTPS URL of the online media stream. The maximum length of this field is 1024 bytes."
  }, {
    heading: "request-body",
    content: "To inject an image to the Agora channel, set `streamUrl` to the URL of the image you want to inject, and the cloud player will convert the image to a video and inject it to the Agora channel. Images in JPEG and PNG formats are currently supported. You can set video transcoding parameters through `videoOptions`."
  }, {
    heading: "request-body",
    content: "`channelName`: (Required) String. The channel name. The maximum length of this field is 64 bytes. Supported character scopes are:"
  }, {
    heading: "request-body",
    content: "All lowercase English letters: a to z."
  }, {
    heading: "request-body",
    content: "All uppercase English letters: A to Z."
  }, {
    heading: "request-body",
    content: "All numeric characters: 0 to 9."
  }, {
    heading: "request-body",
    content: "The space character."
  }, {
    heading: "request-body",
    content: 'Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "|", "\\~", ",".'
  }, {
    heading: "request-body",
    content: "`uid`: (Optional) Number. The User ID of the cloud player in the channel. The value ranges from 0 to (2<sup>32</sup>-1). When you pass in `0`, Agora automatically assigns a User ID to the player."
  }, {
    heading: "request-body",
    content: "All UIDs within a channel must be unique. Ensure no other user or service bot is using this UID in the same channel."
  }, {
    heading: "request-body",
    content: "`account`: (Optional) String. The User Account of the cloud player in the channel. The maximum length of this field is 255 bytes. Ensure that you set this parameter and do not set it as null. Supported character scopes are:"
  }, {
    heading: "request-body",
    content: "All lowercase English letters: a to z."
  }, {
    heading: "request-body",
    content: "All uppercase English letters: A to Z."
  }, {
    heading: "request-body",
    content: "All numeric characters: 0 to 9."
  }, {
    heading: "request-body",
    content: "The space character."
  }, {
    heading: "request-body",
    content: 'Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "\\<", "=", ".", ">", "?", "@", "\\[", "]", "^", "\\_", " \\{", "}", "|", "\\~", ",".'
  }, {
    heading: "request-body",
    content: "Ensure that the value is different from User Accounts of other users and players in the channel."
  }, {
    heading: "request-body",
    content: "`token`: (Optional) String. The authentication token used by the cloud player in the channel. If you do not enable the App Certificate in Agora Console, ignore this field. If you enable the App Certificate in Agora Console, you must pass a value in this field:"
  }, {
    heading: "request-body",
    content: "For low-security requirements: Use the temporary token generated in Agora Console. For details, see Generate an RTC temporary token."
  }, {
    heading: "request-body",
    content: "For high-security requirements: Use the token generated at your server. For details, see Secure authentication with tokens."
  }, {
    heading: "request-body",
    content: "When generating a token at your server, the value of `uid` or `account` must be the same as the User ID or User Account of the cloud player, and `privilegeExpiredTs` is recommended to be `0` to ensure that the token is valid for 24 hours at most."
  }, {
    heading: "request-body",
    content: "`idleTimeout`: (Optional) Number. The maximum length of time (in seconds) that the cloud player is idle. The \"idle\" state means that the media stream is not playing. When the idle state exceeds `idleTimeout`, the cloud player is automatically destroyed. The value ranges from 5 to 600. The default value is 300. If the value is less than 5, Agora's server automatically adjusts it to 5; if the value is greater than 600, Agora's server automatically adjusts it to 600."
  }, {
    heading: "request-body",
    content: "`playTs`: (Optional) Number. The Unix timestamp (in seconds) when the cloud player starts playing the online media stream. The value range of playTs is \\[`createTs`-86400, `createTs`+300]. The default value is 0, which means the cloud player starts playing the online media stream when the cloud player is successfully created. If the value of `playTs` is not `0`, the following behavior occurs:"
  }, {
    heading: "request-body",
    content: "`playTs` > `createTs`: The cloud player starts playing the online media stream when the time is `playTs`. This is suitable for timing playback with other elements."
  }, {
    heading: "request-body",
    content: "`playTs` \\< `createTs`: If the online media stream is a live stream, the cloud player starts playing the live stream when the cloud player is successfully created. If the online media stream is an on-demand stream, the cloud player starts playing the online media stream at the specified time in the stream prior to the creation of the cloud player. This is suitable for error recovery. For example, if the cloud player experiences an error during operation, you can create a new cloud player and set the `playTs` field of new cloud player to the unix timestamp when the old cloud player started to play the online media stream."
  }, {
    heading: "request-body",
    content: "`name`: (Optional) String. The name of the cloud player. The maximum length of this parameter is 64 bytes. Supported character scopes are:"
  }, {
    heading: "request-body",
    content: "All lowercase English letters: a to z."
  }, {
    heading: "request-body",
    content: "All uppercase English letters: A to Z."
  }, {
    heading: "request-body",
    content: "All numeric characters: 0 to 9."
  }, {
    heading: "request-body",
    content: '"-", "\\_".\n`name` is null if you do not pass any value. Multiple cloud players using null name parameters can exist in one project at the same time; multiple cloud players with the same name cannot exist in one project at the same time. When trying to create a cloud player with the same name as an existing cloud player in the project, you will receive the `409(Conflict)` status code.'
  }, {
    heading: "request-body",
    content: "To avoid creating multiple cloud players that inject the same online media stream into the same channel, use the `name` parameter to manage all the cloud players in your specified project. Agora recommends that you pass a value in `name` using a combination of the channel name (`channelName`) and the username (`uid` or `account`) of the cloud player, such as `class32_101` and `class33_teacher101` in the sample code."
  }, {
    heading: "request-body",
    content: "`encryptMode`: (Optional) String. Encryption mode. Agora recommends using either the `aes-128-gcm2` or `aes-256-gcm2` encryption mode, both of which support adding a salt and are more secure."
  }, {
    heading: "request-body",
    content: "`aes-128-xts`: 128-bit AES encryption, XTS mode."
  }, {
    heading: "request-body",
    content: "`aes-256-xts`: 256-bit AES encryption, XTS mode."
  }, {
    heading: "request-body",
    content: "`aes-128-ecb`: 128-bit AES encryption, ECB mode."
  }, {
    heading: "request-body",
    content: "`sm4-128-ecb`: 128-bit SM4 encryption, ECB mode."
  }, {
    heading: "request-body",
    content: "`aes-128-gcm`: 128-bit AES encryption, GCM mode."
  }, {
    heading: "request-body",
    content: "`aes-256-gcm`: 256-bit AES encryption, GCM mode."
  }, {
    heading: "request-body",
    content: "`aes-128-gcm2`: 128-bit AES encryption, GCM mode. Compared to `aes-128-gcm` encryption mode, `aes-128-gcm2` encryption mode is more secure and requires you to set the salt (`encryptKdfSalt`)."
  }, {
    heading: "request-body",
    content: "`aes-256-gcm2`: 256-bit AES encryption, GCM mode. Compared to `aes-256-gcm` encryption mode, `aes-256-gcm2` encryption mode is more secure and requires you to set the salt (`encryptKdfSalt`)."
  }, {
    heading: "request-body",
    content: "`encryptKey`: (Optional) String. The encryption key with unlimited length. Agora recommends using a 32-byte key."
  }, {
    heading: "request-body",
    content: "If you do not set an encryption key or set it to null, built-in encryption is disabled."
  }, {
    heading: "request-body",
    content: "`encryptKdfSalt`: (Optional) String. A 32-byte salt. Agora recommends using OpenSSL to generate this salt on your server. For details, see Secure channel encryption."
  }, {
    heading: "request-body",
    content: "This parameter is only valid when the encryption mode is set to `aes-128-gcm2` or `aes-256-gcm2`. In this case, ensure that it is not `0`."
  }, {
    heading: "request-body",
    content: "`repeatTime`: (Optional) Int. Number of media streams played. This parameter applies only to on-demand streams. It can be set to:"
  }, {
    heading: "request-body",
    content: "`1`: (Default) Plays a media resource once."
  }, {
    heading: "request-body",
    content: "`-1`: Plays media resources in a loop."
  }, {
    heading: "request-body",
    content: "`N`: User-defined number of media resources to be played. It is an integer and cannot be set to `0`."
  }, {
    heading: "request-body",
    content: "`seekPosition`: (Optional) Number. Specifies the playback position (seconds) of the on-demand file. The default value is 0, which means play from the beginning of the on-demand file. It must be less than the media resource duration."
  }, {
    heading: "request-body",
    content: "dataStreamOptions: (Optional) JSON Object. The data stream configuration, which is used to set the SEI information carried by the video frame. This parameter applies only to on-demand streams."
  }, {
    heading: "request-body",
    content: "`enable`: Set whether to inject the SEI information of Agora DataStream type."
  }, {
    heading: "request-body",
    content: "`true`: Inject the SEI information of Agora DataStream type."
  }, {
    heading: "request-body",
    content: "`false`: (Default) Do not inject the SEI information of Agora DataStream type."
  }, {
    heading: "request-body",
    content: "Agora DataStream is a data stream format of JSON type, the example is as follows:"
  }, {
    heading: "http-response",
    content: "For all possible response status codes, see Status codes."
  }, {
    heading: "response-header",
    content: "The response header contains the following fields:"
  }, {
    heading: "response-header",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. It is the same as the `X-Request-ID` field in the request header. If the request fails, print out this value in the log for troubleshooting."
  }, {
    heading: "response-header",
    content: "If you receive the `401(Unauthorized)` status code for this request, the response header does not contain the field."
  }, {
    heading: "response-header",
    content: "`X-Resource-ID`: UUID (Universally Unique Identifier) to identify the cloud player created by this request:"
  }, {
    heading: "response-header",
    content: "When the status code is 2XX, this value is the ID of the cloud player created by this request."
  }, {
    heading: "response-header",
    content: "When the status code is `409(Conflict)`, the name of the cloud player created by this request is duplicate with the name of other existing players in the project. This value is the ID of that existing player. Please check and modify the name of the cloud player created by this request."
  }, {
    heading: "response-header",
    content: "When the status code is another value, this field is null and this request fails."
  }, {
    heading: "response-body",
    content: "If the status code is 2XX, the request succeeds. The response body contains the following fields:"
  }, {
    heading: "response-body",
    content: "`player`: JSON Object. Contains the following fields:"
  }, {
    heading: "response-body",
    content: "`uid`: Number. The User ID of the cloud player in the channel."
  }, {
    heading: "response-body",
    content: "`account`: String. The User Account of the cloud player in the channel."
  }, {
    heading: "response-body",
    content: "`id`: String. The ID of the cloud player. It is a UUID (Universally Unique Identifier) generated by Agora's server to identify the ID of the cloud player created."
  }, {
    heading: "response-body",
    content: "`createTs`: Number. The Unix timestamp (in seconds) when creating the cloud player."
  }, {
    heading: "response-body",
    content: "`status`: String. The state of the cloud player at runtime:"
  }, {
    heading: "response-body",
    content: '`"idle"`: The playback is not started.'
  }, {
    heading: "response-body",
    content: '`"connecting"`: Agora\'s server is connecting to the address of the media stream or detecting the audio and video data.'
  }, {
    heading: "response-body",
    content: '`"running"`: Playing.'
  }, {
    heading: "response-body",
    content: '`"failed"`: Agora\'s server cannot connect to the address of the media stream, or the media stream cannot be played.'
  }, {
    heading: "response-body",
    content: "`fields`: String. The field mask to represent a set of symbolic field paths. The field mask is encoded as a single string where paths are separated by a comma. It specifies a subset of fields that should be returned by this request. In the sample code using `uid`, `fields` specifies that Agora's server returns the `uid`, `id`, `createTs`, and `status` fields. For details, see Google protobuf FieldMask."
  }, {
    heading: "response-body",
    content: "If the status code is not 2XX, the request fails. The response body contains the `message` field, which describes the detailed reason for the failure."
  }, {
    heading: "request-example",
    content: "**Media Pull without transcoding**"
  }, {
    heading: "request-example",
    content: "**Media Pull with transcoding**"
  }, {
    heading: "delete-api",
    content: "This API destroys the cloud player in the project."
  }, {
    heading: "path-parameters-1",
    content: "`appId`: (Required) String. Agora provides the App ID when you create a **project** in Agora Console. The App ID identifies each project."
  }, {
    heading: "path-parameters-1",
    content: "`id`: (Required) String. The ID of the cloud player."
  }, {
    heading: "path-parameters-1",
    content: "`region`: (Required) String. The `region` where the Player is created in."
  }, {
    heading: "request-header-1",
    content: "`Authorization`: See Authentication."
  }, {
    heading: "request-header-1",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header."
  }, {
    heading: "request-header-1",
    content: "Agora recommends using this field. If you do not pass in any value, Agora's server automatically generates a UUID to pass in."
  }, {
    heading: "http-response-1",
    content: "For all possible response status codes, see Status codes."
  }, {
    heading: "response-header-1",
    content: "The response header contains the following fields:"
  }, {
    heading: "response-header-1",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. It is the same as the `X-Request-ID` field in the request header. If the request fails, print out this value in the log for troubleshooting."
  }, {
    heading: "response-header-1",
    content: "If you receive the `401(Unauthorized)` status code for this request, the response header does not contain the field."
  }, {
    heading: "response-header-1",
    content: "`X-Resource-ID`: UUID (Universally Unique Identifier) to identify the ID of the cloud player created by this request. The UUID is the same as the value in the `id` path parameter."
  }, {
    heading: "response-body-1",
    content: "If the status code is 2XX, the request succeeds. The response body is empty."
  }, {
    heading: "response-body-1",
    content: "If the status code is not 2XX, the request fails. The response body contains the `message` field, which describes the detailed reason for the failure."
  }, {
    heading: "list-api",
    content: "This API queries and lists all the cloud players in the project."
  }, {
    heading: "path-parameters-2",
    content: "`appId`: (Required) String. Agora provides the App ID when you create a **project** in Agora Console. The App ID identifies each project."
  }, {
    heading: "query-parameters-1",
    content: "A sample request URL when using query parameters:"
  }, {
    heading: "query-parameters-1",
    content: "`filter`: (Optional) String. The filter. Agora's server only lists the cloud players that meet the filter criteria in the project. The current filter is the value of `channelName` when creating the cloud player."
  }, {
    heading: "query-parameters-1",
    content: "Assuming the channel name is `class32`, replace `filter={filter}` in the sample request URL with `filter=channelName eq class32`; Assuming the channel name is `bigclass`, replace `filter={filter}` in the sample request URL with `filter=channelName eq bigclass`."
  }, {
    heading: "query-parameters-1",
    content: "Spaces exist before and after `eq` and require URL encoding."
  }, {
    heading: "query-parameters-1",
    content: "`pageSize`: (Optional) Number. The maximum number of cloud players to return on one page. The value ranges from 1 to 500. The default value is 200, which means that for a single page, Agora's server lists up to 200 cloud players if you do not pass in any value."
  }, {
    heading: "query-parameters-1",
    content: "`pageToken`: (Optional) String. The page number to indicate the order of the pages. If you do not pass in any value, Agora's server returns to the first page."
  }, {
    heading: "query-parameters-1",
    content: "Recommended usage: When using the `List` API for the first time, do not pass any value in the `pageToken` query parameter. You can get the query results of the first page and the value of the `nextPageToken` field. The next time you use the `List` API, pass this value in the `pageToken` query parameter to query the cloud players on the next page."
  }, {
    heading: "query-parameters-1",
    content: "After using the above parameters, Agora's server queries and lists the cloud players according to the following steps:"
  }, {
    heading: "query-parameters-1",
    content: "Query the cloud players that meet the filter criteria in the specified project."
  }, {
    heading: "query-parameters-1",
    content: "Set the space size of each page."
  }, {
    heading: "query-parameters-1",
    content: "List the cloud players in the specified page."
  }, {
    heading: "query-parameters-1",
    content: "Agora's server lists the cloud players in ascending order by `createTs`."
  }, {
    heading: "request-header-2",
    content: "The request header contains the following fields:"
  }, {
    heading: "request-header-2",
    content: "`Authorization`: See Authentication."
  }, {
    heading: "request-header-2",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header."
  }, {
    heading: "request-header-2",
    content: "Agora recommends using this field. If you do not pass in any value, Agora's server automatically generates a UUID to pass in."
  }, {
    heading: "http-response-2",
    content: "For all possible response status codes, see Status codes."
  }, {
    heading: "response-header-2",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. It is the same as the `X-Request-ID` field in the request header. If the request fails, print out this value in the log for troubleshooting."
  }, {
    heading: "response-header-2",
    content: "If you receive the `401(Unauthorized)` status code for this request, the response header does not contain the field."
  }, {
    heading: "response-body-2",
    content: "If the status code is 2XX, the request succeeds. The response body contains the following fields:"
  }, {
    heading: "response-body-2",
    content: "`totalSize`: Number. The number of cloud players that meet the filter criteria."
  }, {
    heading: "response-body-2",
    content: "`players`: JSON Array. Contains the following fields:"
  }, {
    heading: "response-body-2",
    content: "`name`: String. The name of the cloud player."
  }, {
    heading: "response-body-2",
    content: "`streamUrl`: String. The RTMP/HTTPS URL of the online media stream."
  }, {
    heading: "response-body-2",
    content: "`channelName`: String. The name of the Agora channel."
  }, {
    heading: "response-body-2",
    content: "`uid`: Number. The User ID of the cloud player in the Agora channel."
  }, {
    heading: "response-body-2",
    content: "`account`: String. The User Account of the cloud player in the Agora channel."
  }, {
    heading: "response-body-2",
    content: "`id`: String. UUID (Universally Unique Identifier) to identify the cloud player created. It is the ID of the cloud player."
  }, {
    heading: "response-body-2",
    content: "`createTs`: Number. The Unix timestamp (in seconds) when creating the cloud player."
  }, {
    heading: "response-body-2",
    content: "`status`: String. The state of the cloud player at runtime:"
  }, {
    heading: "response-body-2",
    content: '`"idle"`: The playback is not started.'
  }, {
    heading: "response-body-2",
    content: '`"connecting"`: Agora\'s server is connecting to the address of the media stream or detecting the audio and video data.'
  }, {
    heading: "response-body-2",
    content: '`"running"`: Playing.'
  }, {
    heading: "response-body-2",
    content: '`"failed"`: Agora\'s server cannot connect to the address of the media stream, or the media stream cannot be played.'
  }, {
    heading: "response-body-2",
    content: "`fields`: String. The field mask to represent a set of symbolic field paths. The field mask is encoded as a single string where paths are separated by a comma. It specifies that Agora's server returns a subset of fields in each player in the `players` array. In the sample code using `uid`, `fields` specifies that Agora's server returns the `name`, `streamUrl`, `channelName`, `uid`, `id`, `createTs`, and `status` fields in each player in the `players` array."
  }, {
    heading: "response-body-2",
    content: "`nextPageToken`: String. The next page number of `pageToken`. You can pass the value of the `nextPageToken` field in the `pageToken` query parameter when using the `List` API next time. When `nextPageToken` is an empty string, there are no more players that match the request."
  }, {
    heading: "response-body-2",
    content: "If the status code is not 2XX, the request fails. The response body contains the `message` field, which describes the detailed reason for the failure."
  }, {
    heading: "update-api",
    content: "Update the cloud player you specified in the project."
  }, {
    heading: "path-parameters-3",
    content: "`appId`: (Required) String. Agora provides the App ID when you create a **project** in Agora Console. The App ID identifies each project."
  }, {
    heading: "path-parameters-3",
    content: "`id`: (Required) String. The ID of the cloud player."
  }, {
    heading: "path-parameters-3",
    content: "`region`: (Required) String. The `region` where the Player is created in."
  }, {
    heading: "query-parameters-2",
    content: "`sequence`: (Required) Number. The sequence number of the `Update` request. The parameter needs to be greater than or equal to 0. Ensure that the sequence number of the subsequent `Update` request is greater than the sequence number of the previous `Update` request. The serial number ensures that the Agora server updates Converter with the latest configuration you specified."
  }, {
    heading: "query-parameters-2",
    content: "Best practice is to fill `sequence` with `0` when calling `Update` for the first time. When calling `Update` for the second time, fill `sequence` with `1`. When calling `Update` for the third time, fill `sequence` with `2`. And so on. The Agora server updates cloud player according to the latest `Update` request (that is, the highest serial number)."
  }, {
    heading: "request-header-3",
    content: "`Authorization`: See Authentication instructions."
  }, {
    heading: "request-header-3",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header."
  }, {
    heading: "request-body-1",
    content: "You can update the following fields at the same time:"
  }, {
    heading: "request-body-1",
    content: "`streamUrl`"
  }, {
    heading: "request-body-1",
    content: "`audioOptions`"
  }, {
    heading: "request-body-1",
    content: "`audioOptions.volume`"
  }, {
    heading: "request-body-1",
    content: "`seekPosition`"
  }, {
    heading: "request-body-1",
    content: "`isPause`: Bool. Whether to pause the playback of the media stream source file:"
  }, {
    heading: "request-body-1",
    content: "`true`: Pauses playback of the media stream source file."
  }, {
    heading: "request-body-1",
    content: "`false`:(Default) Plays the media stream source file."
  }, {
    heading: "request-body-1",
    content: "`audioOptions.volume`: Int. The volume of the cloud player. The value range is \\[0,200]. The default value is 100, which represents the original volume."
  }, {
    heading: "request-body-1",
    content: "For the details of other fields, see Create request body."
  }, {
    heading: "http-response-3",
    content: "For all possible response status codes, see Status codes."
  }, {
    heading: "response-header-3",
    content: "`X-Request-ID`: UUID (Universally Unique Identifier) to identify this request. It is the same as the `X-Request-ID` field in the request header. If the request fails, print out this value in the log for troubleshooting."
  }, {
    heading: "response-header-3",
    content: "If the status code is not 2XX, the response header does not contain the field."
  }, {
    heading: "response-header-3",
    content: "`X-Resource-ID`: UUID (Universally Unique Identifier) to identify the ID of the cloud player created by this request. The UUID is the same as the value in the `id` path parameter."
  }, {
    heading: "response-body-3",
    content: "If the status code is 2XX, the request succeeds. The response body is empty."
  }, {
    heading: "response-body-3",
    content: "If the status code is not 2XX, the request fails. The response body contains the `message` field, which describes the detailed reason for the failure."
  }, {
    heading: "rate-limits",
    content: "Do not exceed the API rate limits, otherwise you receive the `429(Too Many Requests)` status code."
  }, {
    heading: "rate-limits",
    content: "API"
  }, {
    heading: "rate-limits",
    content: "Rate limit"
  }, {
    heading: "rate-limits",
    content: "`Create`"
  }, {
    heading: "rate-limits",
    content: "* In a project, when creating cloud players with `name`, the maximum rate of creating each cloud player with a different name is 2 times per second.\n\n* In a project, the maximum rate of creating a cloud player without `name` is 50 times per second."
  }, {
    heading: "rate-limits",
    content: "`Delete`"
  }, {
    heading: "rate-limits",
    content: "In a project, the maximum rate of destroying a cloud player is 100 times per second."
  }, {
    heading: "rate-limits",
    content: "`List`"
  }, {
    heading: "rate-limits",
    content: "* In a project, the maximum rate of querying a cloud player with `filter`(`channelName`) is 2 times per second and 15 times per minute.\n\n* In a project, the maximum rate of querying a cloud player without `filter`(`channelName`) is 10 times per second and 20 times per minute."
  }, {
    heading: "rate-limits",
    content: '<a id="code"></a>'
  }, {
    heading: "status-codes",
    content: "If the status code is 2XX, the request succeeds."
  }, {
    heading: "status-codes",
    content: "If the status code is not 2XX, the request fails. Use the `message` field in the response body for troubleshooting."
  }, {
    heading: "status-codes",
    content: "Status code"
  }, {
    heading: "status-codes",
    content: "Possible message field"
  }, {
    heading: "status-codes",
    content: "200 OK"
  }, {
    heading: "status-codes",
    content: "/"
  }, {
    heading: "status-codes",
    content: "400 Bad Request"
  }, {
    heading: "status-codes",
    content: `* Parameter 'streamUrl' is invalid formatted.

* Parameter channelName is invalid. Fix it in your request and retry.`
  }, {
    heading: "status-codes",
    content: "401 Unauthorized"
  }, {
    heading: "status-codes",
    content: "Invalid authentication credentials."
  }, {
    heading: "status-codes",
    content: "403 Forbidden"
  }, {
    heading: "status-codes",
    content: `* This project has not enabled Cloud Player product yet. Contact us to enable it.

* This project's permission to use Cloud Player was revoked. Contact us for details.`
  }, {
    heading: "status-codes",
    content: "404 Not Found"
  }, {
    heading: "status-codes",
    content: "Resource is not found and destroyed."
  }, {
    heading: "status-codes",
    content: "409 Conflict"
  }, {
    heading: "status-codes",
    content: "Resource with the same name already exists."
  }, {
    heading: "status-codes",
    content: "429 Too Many Requests"
  }, {
    heading: "status-codes",
    content: `* Request rate limit exceeded.

* Resources quota limit exceeded.

* no available resources`
  }, {
    heading: "status-codes",
    content: "500 Unknown"
  }, {
    heading: "status-codes",
    content: "Some internal error happened. Contact us to help fix it."
  }, {
    heading: "status-codes",
    content: "503 Service Unavailable"
  }, {
    heading: "status-codes",
    content: `* Service overload. Retry with back off strategy, and contact us to help fix it.

* Service unavailable temporarily. Retry with back off strategy.`
  }, {
    heading: "status-codes",
    content: "504 Gateway Timeout"
  }, {
    heading: "status-codes",
    content: "Gateway timeout. Query to check whether the player has been created, or to create another one instead."
  }, {
    heading: "restful-api-callback-service",
    content: `After using these RESTful APIs, Agora's notification server sends the callback notification to your server through an HTTP request.
For details, see Message Notification Service.`
  }, {
    heading: "considerations",
    content: "This section summarizes some important considerations when using the Media Pull RESTful API."
  }, {
    heading: "considerations",
    content: "Item"
  }, {
    heading: "considerations",
    content: "Impact"
  }, {
    heading: "considerations",
    content: "Ensure that the channel profile is set as `LIVE_BROADCASTING`."
  }, {
    heading: "considerations",
    content: "★★★☆☆"
  }, {
    heading: "considerations",
    content: "If the channel needs only one cloud player, ensure that you have set the `name` parameter. For details, see the description of `name`."
  }, {
    heading: "considerations",
    content: "★★★☆☆"
  }, {
    heading: "considerations",
    content: "If the channel needs more than one cloud player, ensure that each player has a unique user ID/account. For details, see the description of `uid` and `account`."
  }, {
    heading: "considerations",
    content: "★★★★★"
  }, {
    heading: "considerations",
    content: "Please ensure that the region you set is the same region as where your media stream originates is located. For details, see the description of `region`."
  }, {
    heading: "considerations",
    content: "★★★★★"
  }, {
    heading: "considerations",
    content: "The cloud player may be deleted automatically due to server errors. Agora recommends that you enable the Message Notification Service to listen for events of Media Pull. For details, see the Media Pull Message Notification Server."
  }, {
    heading: "considerations",
    content: "★★★★★"
  }, {
    heading: "considerations",
    content: "When using the `List` API, the `players` field in the response body might only include `id`, `name`, and `CreateTs`. Ensure that your app logic can handle this situation."
  }, {
    heading: "considerations",
    content: "★★★★★"
  }, {
    heading: "considerations",
    content: "If using the `Create` or `Delete` API results in a status code of `504 Gateway Timeout`, call the `List` API to query the actual state of the cloud player to make sure an unmanaged cloud player does not exist."
  }, {
    heading: "considerations",
    content: "★★★☆☆"
  }, {
    heading: "considerations",
    content: "If your request fails, ensure that you print out the `X-Request-ID` and `X-Resource-ID` fields in the response header in the log for later use in troubleshooting."
  }, {
    heading: "considerations",
    content: "★★★☆☆"
  }, {
    heading: "considerations",
    content: "After creating a cloud player and receiving a response message, you need to wait about 10 seconds before using the `List` method to query, otherwise you may not get any information."
  }, {
    heading: "considerations",
    content: "★★★☆☆"
  }, {
    heading: "considerations",
    content: "The default maximum number of concurrent tasks is 20, which means that a maximum of 20 Media Pull tasks are allowed to run simultaneously for each project. You can contact support\\@agora.io to get a higher quota."
  }, {
    heading: "considerations",
    content: "★★★★☆"
  }],
  headings: [{
    id: "working-principle",
    content: "Working principle"
  }, {
    id: "authentication",
    content: "Authentication"
  }, {
    id: "create-api",
    content: "Create API"
  }, {
    id: "http-request",
    content: "HTTP request"
  }, {
    id: "path-parameters",
    content: "Path parameters"
  }, {
    id: "query-parameters",
    content: "Query parameters"
  }, {
    id: "request-header",
    content: "Request header"
  }, {
    id: "request-body",
    content: "Request body"
  }, {
    id: "http-response",
    content: "HTTP response"
  }, {
    id: "response-header",
    content: "Response header"
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
    id: "delete-api",
    content: "Delete API"
  }, {
    id: "http-request-1",
    content: "HTTP request"
  }, {
    id: "path-parameters-1",
    content: "Path parameters"
  }, {
    id: "request-header-1",
    content: "Request header"
  }, {
    id: "http-response-1",
    content: "HTTP response"
  }, {
    id: "response-header-1",
    content: "Response header"
  }, {
    id: "response-body-1",
    content: "Response body"
  }, {
    id: "list-api",
    content: "List API"
  }, {
    id: "http-request-2",
    content: "HTTP request"
  }, {
    id: "path-parameters-2",
    content: "Path parameters"
  }, {
    id: "query-parameters-1",
    content: "Query parameters"
  }, {
    id: "request-header-2",
    content: "Request header"
  }, {
    id: "http-response-2",
    content: "HTTP response"
  }, {
    id: "response-header-2",
    content: "Response header"
  }, {
    id: "response-body-2",
    content: "Response body"
  }, {
    id: "response-example-1",
    content: "Response example"
  }, {
    id: "update-api",
    content: "Update API"
  }, {
    id: "http-request-3",
    content: "HTTP request"
  }, {
    id: "path-parameters-3",
    content: "Path parameters"
  }, {
    id: "query-parameters-2",
    content: "Query parameters"
  }, {
    id: "request-header-3",
    content: "Request header"
  }, {
    id: "request-body-1",
    content: "Request body"
  }, {
    id: "http-response-3",
    content: "HTTP response"
  }, {
    id: "response-header-3",
    content: "Response header"
  }, {
    id: "response-body-3",
    content: "Response body"
  }, {
    id: "request-example-1",
    content: "Request example"
  }, {
    id: "rate-limits",
    content: "Rate limits"
  }, {
    id: "status-codes",
    content: "Status codes"
  }, {
    id: "restful-api-callback-service",
    content: "RESTful API callback service"
  }, {
    id: "considerations",
    content: "Considerations"
  }]
};
export let toc = [{
  depth: 2,
  url: "#working-principle",
  title: _jsx(_Fragment, {
    children: "Working principle"
  })
}, {
  depth: 2,
  url: "#authentication",
  title: _jsx(_Fragment, {
    children: "Authentication"
  })
}, {
  depth: 2,
  url: "#create-api",
  title: _jsx(_Fragment, {
    children: "Create API"
  })
}, {
  depth: 3,
  url: "#http-request",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameters",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 4,
  url: "#query-parameters",
  title: _jsx(_Fragment, {
    children: "Query parameters"
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
  depth: 3,
  url: "#http-response",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-header",
  title: _jsx(_Fragment, {
    children: "Response header"
  })
}, {
  depth: 4,
  url: "#response-body",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#request-example",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 3,
  url: "#response-example",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#delete-api",
  title: _jsx(_Fragment, {
    children: "Delete API"
  })
}, {
  depth: 3,
  url: "#http-request-1",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameters-1",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 4,
  url: "#request-header-1",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#http-response-1",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-header-1",
  title: _jsx(_Fragment, {
    children: "Response header"
  })
}, {
  depth: 4,
  url: "#response-body-1",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 2,
  url: "#list-api",
  title: _jsx(_Fragment, {
    children: "List API"
  })
}, {
  depth: 3,
  url: "#http-request-2",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameters-2",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 4,
  url: "#query-parameters-1",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#request-header-2",
  title: _jsx(_Fragment, {
    children: "Request header"
  })
}, {
  depth: 3,
  url: "#http-response-2",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-header-2",
  title: _jsx(_Fragment, {
    children: "Response header"
  })
}, {
  depth: 4,
  url: "#response-body-2",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#response-example-1",
  title: _jsx(_Fragment, {
    children: "Response example"
  })
}, {
  depth: 2,
  url: "#update-api",
  title: _jsx(_Fragment, {
    children: "Update API"
  })
}, {
  depth: 3,
  url: "#http-request-3",
  title: _jsx(_Fragment, {
    children: "HTTP request"
  })
}, {
  depth: 4,
  url: "#path-parameters-3",
  title: _jsx(_Fragment, {
    children: "Path parameters"
  })
}, {
  depth: 4,
  url: "#query-parameters-2",
  title: _jsx(_Fragment, {
    children: "Query parameters"
  })
}, {
  depth: 4,
  url: "#request-header-3",
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
  depth: 3,
  url: "#http-response-3",
  title: _jsx(_Fragment, {
    children: "HTTP response"
  })
}, {
  depth: 4,
  url: "#response-header-3",
  title: _jsx(_Fragment, {
    children: "Response header"
  })
}, {
  depth: 4,
  url: "#response-body-3",
  title: _jsx(_Fragment, {
    children: "Response body"
  })
}, {
  depth: 3,
  url: "#request-example-1",
  title: _jsx(_Fragment, {
    children: "Request example"
  })
}, {
  depth: 2,
  url: "#rate-limits",
  title: _jsx(_Fragment, {
    children: "Rate limits"
  })
}, {
  depth: 2,
  url: "#status-codes",
  title: _jsx(_Fragment, {
    children: "Status codes"
  })
}, {
  depth: 2,
  url: "#restful-api-callback-service",
  title: _jsx(_Fragment, {
    children: "RESTful API callback service"
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
    h4: "h4",
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
    children: [_jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "The RESTful API for Media Pull"
      }), " enables you to inject an online media stream into the Agora channel as a live video source. After the injection succeeds, the online media stream automatically plays in the Agora channel, and remote users can see the content of the media stream."]
    }), `
`, _jsx(_components.h2, {
      id: "working-principle",
      children: "Working principle"
    }), `
`, _jsx(_components.p, {
      children: 'Injecting an online media stream into the Agora channel creates a Media Pull task (shown as "cloud player" in the rest of the article) in the Agora channel. You can control the cloud player through the RESTful API and accomplish the following functions for Media Pull:'
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Create"
        }), ": Creates a cloud player in the project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Delete"
        }), ": Destroys the cloud player in the project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "List"
        }), ": Queries and lists all the cloud players in the project."]
      }), `
`]
    }), `
`, _jsx(_components.p, {
      children: "Media Pull supports the following formats:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "Video codec formats: H.264, H.265, and VP9"
      }), `
`, _jsx(_components.li, {
        children: "Audio codec formats: AAC and OPUS"
      }), `
`, _jsx(_components.li, {
        children: "Protocols: HTTPS and RTMP"
      }), `
`, _jsx(_components.li, {
        children: "Container formats: FLV, MP4, MPEG-TS, Matroska (MKV), and HLS"
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "authentication",
      children: "Authentication"
    }), `
`, _jsxs(_components.p, {
      children: ["The RESTful APIs require basic HTTP authentication. You need to set the ", _jsx(_components.code, {
        children: "Authorization"
      }), " parameter in every HTTP request header. For how to get the value for Authorization, see ", _jsx(_components.a, {
        href: "./restful-authentication",
        children: "RESTful API authentication"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "create-api",
      children: "Create API"
    }), `
`, _jsx(_components.p, {
      children: "This API creates a cloud player in the project."
    }), `
`, _jsx(_components.h3, {
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
              children: "POST"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/players"
            })]
          })
        })
      })
    }), `
`, _jsx(CalloutContainer, {
      type: "warning",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "The Agora RESTful API only supports HTTPS with TLS 1.0, 1.1, or 1.2 for encrypted communication. Requests over plain HTTP are not supported and will fail to connect."
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameters",
      children: "Path parameters"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "appId"
        }), ": (Required) String. Agora provides the ", _jsx(_components.a, {
          href: "/en/realtime-media/media-pull/reference/glossary#app-id",
          children: "App ID"
        }), " when you create a ", _jsx(_components.strong, {
          children: "project"
        }), " in Agora Console. The App ID identifies each project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": (Required) String. The region that the cloud player was created in. Agora supports the creation of cloud players in different regions. Currently, it supports four regions:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "cn"
            }), ": China Mainland"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "ap"
            }), ": Asia Pacific"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "na"
            }), ": North America"]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "eu"
            }), ": Europe"]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Please ensure that the region you set is the same region as where your media stream originates is located."
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "A sample request URL when using query parameters:"
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
              children: "https://api.agora.io/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "{region}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "/v1/projects/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "{appId}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "/cloud-player/players?streamIp"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "={streamIp}"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "streamIp"
      }), ": (Optional) String. The IP address of the media stream's origin server. Must be a valid IPv4 address. Use this parameter to ensure the transmission quality of the media stream when the media stream is only available in some regions. Otherwise, ignore this parameter."]
    }), `
`, _jsx(_components.h4, {
      id: "request-header",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "The request header contains the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Content-Type"
        }), ": ", _jsx(_components.code, {
          children: "application/json"
        })]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Authorization"
        }), ": See ", _jsx(_components.a, {
          href: "./restful-authentication",
          children: "Authentication instructions"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": UUID (Universally Unique Identifier) to identify this request. After passing in the field, the Agora SDRTN", "®", ` returns it in the response header.
Best practice is to use this field. If you do not pass in any value, the Agora SDRTN`, "®", " automatically generates a UUID to pass in."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-body",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request succeeds."
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["You must set the cloud player's username, which can be a Number or String. Otherwise, the cloud player cannot be created, and Agora's server returns the ", _jsx(_components.code, {
              children: "400 (Bad Request)"
            }), " status code. Ensure that you have read ", _jsx(_components.a, {
              href: "/en/api-reference/faq/integration/string_uid",
              children: "How can I use a username in string type?"
            }), " when using a username in String type."]
          }), `
`, _jsxs(_components.li, {
            children: ["To avoid failed requests, do not pass ", _jsx(_components.code, {
              children: "null"
            }), " or ", _jsx(_components.code, {
              children: '""'
            }), " in the required fields."]
          }), `
`]
        })
      })
    }), `
`, _jsxs(_components.p, {
      children: ["The response body is a JSON Object called ", _jsx(_components.code, {
        children: "player"
      }), ", containing the following fields:"]
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "audioOptions"
        }), ": (Optional) JSON Object. The audio transcoding configuration of the cloud player. Setting this field to empty or not set means that the audio is not transcoded.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "Profile"
            }), "：Number. Audio profile. Sets the audio profile sample rate, bitrate, encoding mode, and the number of channels.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "0"
                }), ": Default audio profile.", `
`, _jsxs(_components.ul, {
                  children: [`
`, _jsx(_components.li, {
                    children: "In the communication profile, the default audio profile represents a sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps."
                  }), `
`, _jsx(_components.li, {
                    children: "In the live broadcasting profile, the default audio profile represents a sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps."
                  }), `
`]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "1"
                }), ": SPEECH_STANDARD. A sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "2"
                }), ": MUSIC_STANDARD. A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "3"
                }), ": MUSIC_STANDARD_STEREO. A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 80 Kbps."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "4"
                }), ": MUSIC_HIGH_QUALITY. A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 96 Kbps."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "5"
                }), ": MUSIC_HIGH_QUALITY_STEREO. A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 128 Kbps."]
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
          children: "videoOptions"
        }), ": (Optional) JSON Object. The video transcoding configuration of the cloud player. Setting this field to empty or not set means that the video is not transcoded.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "width"
            }), ": Number. The width (px) of the output video. The value range is [66,1920]."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "height"
            }), ": Number. The height (px) of the output video. The value range is [66,1080]."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "widthHeightAdaption"
            }), ": Bool. Whether to enable horizontal and vertical screen adaptive mode:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": Enable portrait and landscape adaptive mode. After you enable the adaptive mode, if the source media stream is in landscape mode, the output video width and height are 1280 × 720; if the source media stream is in portrait mode, the output video width and height are 720 × 1280."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": (Default) Do not enable portrait and landscape adaptive mode."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "frameRate"
            }), ": The frameRate (fps) of the output video. The value range is [1,30]. The default value is 15. For details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile#video-profile-table",
              children: "Video profile table"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "bitrate"
            }), ": Number. The bitrate (Kbps) of the output video. The value range is [1,10000]. For details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/cloud-recording/build/customize-the-recording/recording-video-profile#video-profile-table",
              children: "Video profile table"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "codec"
            }), ": String type. The encoding format of the output video. The following settings are supported:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsx(_components.li, {
                children: "VP9: Standard VP9."
              }), `
`, _jsx(_components.li, {
                children: `H.264: (Default) Standard H.264.
If set to other value, the default is H.264 video encoding format.`
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fillMode"
            }), ": String. The fill mode of the output video:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "fit"
                }), ": (Default) Scales the video proportionally until it is fully displayed in the viewport."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "fill"
                }), ": Scales the video proportionally until it fills the viewport."]
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
          children: "streamUrl"
        }), ": (Required) String. The RTMP/HTTPS URL of the online media stream. The maximum length of this field is 1024 bytes."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To inject an image to the Agora channel, set ", _jsx(_components.code, {
            children: "streamUrl"
          }), " to the URL of the image you want to inject, and the cloud player will convert the image to a video and inject it to the Agora channel. Images in JPEG and PNG formats are currently supported. You can set video transcoding parameters through ", _jsx(_components.code, {
            children: "videoOptions"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "channelName"
          }), ": (Required) String. The channel name. The maximum length of this field is 64 bytes. Supported character scopes are:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All lowercase English letters: a to z."
          }), `
`, _jsx(_components.li, {
            children: "All uppercase English letters: A to Z."
          }), `
`, _jsx(_components.li, {
            children: "All numeric characters: 0 to 9."
          }), `
`, _jsx(_components.li, {
            children: "The space character."
          }), `
`, _jsx(_components.li, {
            children: 'Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".'
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "uid"
          }), ": (Optional) Number. The User ID of the cloud player in the channel. The value ranges from 0 to (2", "32", "-1). When you pass in ", _jsx(_components.code, {
            children: "0"
          }), ", Agora automatically assigns a User ID to the player."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "All UIDs within a channel must be unique. Ensure no other user or service bot is using this UID in the same channel."
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "account"
        }), ": (Optional) String. The User Account of the cloud player in the channel. The maximum length of this field is 255 bytes. Ensure that you set this parameter and do not set it as null. Supported character scopes are:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All lowercase English letters: a to z."
          }), `
`, _jsx(_components.li, {
            children: "All uppercase English letters: A to Z."
          }), `
`, _jsx(_components.li, {
            children: "All numeric characters: 0 to 9."
          }), `
`, _jsx(_components.li, {
            children: "The space character."
          }), `
`, _jsx(_components.li, {
            children: 'Punctuation characters and other symbols, including: "!", "#", "$", "%", "&", "(", ")", "+", "-", ":", ";", "<", "=", ".", ">", "?", "@", "[", "]", "^", "_", " {", "}", "|", "~", ",".'
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Ensure that the value is different from User Accounts of other users and players in the channel."
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "token"
        }), ": (Optional) String. The authentication token used by the cloud player in the channel. If you do not enable the App Certificate in Agora Console, ignore this field. If you enable the App Certificate in Agora Console, you must pass a value in this field:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: ["For low-security requirements: Use the temporary token generated in Agora Console. For details, see ", _jsx(_components.a, {
              href: "/en/introduction/account#generate-temporary-tokens",
              children: "Generate an RTC temporary token"
            }), "."]
          }), `
`, _jsxs(_components.li, {
            children: ["For high-security requirements: Use the token generated at your server. For details, see ", _jsx(_components.a, {
              href: "/en/realtime-media/rtc/build/authenticate-users/deploy-token-server",
              children: "Secure authentication with tokens"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["When generating a token at your server, the value of ", _jsx(_components.code, {
            children: "uid"
          }), " or ", _jsx(_components.code, {
            children: "account"
          }), " must be the same as the User ID or User Account of the cloud player, and ", _jsx(_components.code, {
            children: "privilegeExpiredTs"
          }), " is recommended to be ", _jsx(_components.code, {
            children: "0"
          }), " to ensure that the token is valid for 24 hours at most."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "idleTimeout"
        }), ': (Optional) Number. The maximum length of time (in seconds) that the cloud player is idle. The "idle" state means that the media stream is not playing. When the idle state exceeds ', _jsx(_components.code, {
          children: "idleTimeout"
        }), ", the cloud player is automatically destroyed. The value ranges from 5 to 600. The default value is 300. If the value is less than 5, Agora's server automatically adjusts it to 5; if the value is greater than 600, Agora's server automatically adjusts it to 600."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "playTs"
        }), ": (Optional) Number. The Unix timestamp (in seconds) when the cloud player starts playing the online media stream. The value range of playTs is [", _jsx(_components.code, {
          children: "createTs"
        }), "-86400, ", _jsx(_components.code, {
          children: "createTs"
        }), "+300]. The default value is 0, which means the cloud player starts playing the online media stream when the cloud player is successfully created. If the value of ", _jsx(_components.code, {
          children: "playTs"
        }), " is not ", _jsx(_components.code, {
          children: "0"
        }), ", the following behavior occurs:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "playTs"
            }), " > ", _jsx(_components.code, {
              children: "createTs"
            }), ": The cloud player starts playing the online media stream when the time is ", _jsx(_components.code, {
              children: "playTs"
            }), ". This is suitable for timing playback with other elements."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "playTs"
            }), " < ", _jsx(_components.code, {
              children: "createTs"
            }), ": If the online media stream is a live stream, the cloud player starts playing the live stream when the cloud player is successfully created. If the online media stream is an on-demand stream, the cloud player starts playing the online media stream at the specified time in the stream prior to the creation of the cloud player. This is suitable for error recovery. For example, if the cloud player experiences an error during operation, you can create a new cloud player and set the ", _jsx(_components.code, {
              children: "playTs"
            }), " field of new cloud player to the unix timestamp when the old cloud player started to play the online media stream."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "name"
        }), ": (Optional) String. The name of the cloud player. The maximum length of this parameter is 64 bytes. Supported character scopes are:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "All lowercase English letters: a to z."
          }), `
`, _jsx(_components.li, {
            children: "All uppercase English letters: A to Z."
          }), `
`, _jsx(_components.li, {
            children: "All numeric characters: 0 to 9."
          }), `
`, _jsxs(_components.li, {
            children: [`"-", "_".
`, _jsx(_components.code, {
              children: "name"
            }), " is null if you do not pass any value. Multiple cloud players using null name parameters can exist in one project at the same time; multiple cloud players with the same name cannot exist in one project at the same time. When trying to create a cloud player with the same name as an existing cloud player in the project, you will receive the ", _jsx(_components.code, {
              children: "409(Conflict)"
            }), " status code."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["To avoid creating multiple cloud players that inject the same online media stream into the same channel, use the ", _jsx(_components.code, {
            children: "name"
          }), " parameter to manage all the cloud players in your specified project. Agora recommends that you pass a value in ", _jsx(_components.code, {
            children: "name"
          }), " using a combination of the channel name (", _jsx(_components.code, {
            children: "channelName"
          }), ") and the username (", _jsx(_components.code, {
            children: "uid"
          }), " or ", _jsx(_components.code, {
            children: "account"
          }), ") of the cloud player, such as ", _jsx(_components.code, {
            children: "class32_101"
          }), " and ", _jsx(_components.code, {
            children: "class33_teacher101"
          }), " in the sample code."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "encryptMode"
        }), ": (Optional) String. Encryption mode. Agora recommends using either the ", _jsx(_components.code, {
          children: "aes-128-gcm2"
        }), " or ", _jsx(_components.code, {
          children: "aes-256-gcm2"
        }), " encryption mode, both of which support adding a salt and are more secure.", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "aes-128-xts"
            }), ": 128-bit AES encryption, XTS mode."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "aes-256-xts"
            }), ": 256-bit AES encryption, XTS mode."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "aes-128-ecb"
            }), ": 128-bit AES encryption, ECB mode."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "sm4-128-ecb"
            }), ": 128-bit SM4 encryption, ECB mode."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "aes-128-gcm"
            }), ": 128-bit AES encryption, GCM mode."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "aes-256-gcm"
            }), ": 256-bit AES encryption, GCM mode."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "aes-128-gcm2"
            }), ": 128-bit AES encryption, GCM mode. Compared to ", _jsx(_components.code, {
              children: "aes-128-gcm"
            }), " encryption mode, ", _jsx(_components.code, {
              children: "aes-128-gcm2"
            }), " encryption mode is more secure and requires you to set the salt (", _jsx(_components.code, {
              children: "encryptKdfSalt"
            }), ")."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "aes-256-gcm2"
            }), ": 256-bit AES encryption, GCM mode. Compared to ", _jsx(_components.code, {
              children: "aes-256-gcm"
            }), " encryption mode, ", _jsx(_components.code, {
              children: "aes-256-gcm2"
            }), " encryption mode is more secure and requires you to set the salt (", _jsx(_components.code, {
              children: "encryptKdfSalt"
            }), ")."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "encryptKey"
        }), ": (Optional) String. The encryption key with unlimited length. Agora recommends using a 32-byte key."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If you do not set an encryption key or set it to null, built-in encryption is disabled."
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "encryptKdfSalt"
        }), ": (Optional) String. A 32-byte salt. Agora recommends using OpenSSL to generate this salt on your server. For details, see ", _jsx(_components.a, {
          href: "/en/realtime-media/rtc/build/secure-and-protect-channels/media-stream-encryption",
          children: "Secure channel encryption"
        }), "."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["This parameter is only valid when the encryption mode is set to ", _jsx(_components.code, {
            children: "aes-128-gcm2"
          }), " or ", _jsx(_components.code, {
            children: "aes-256-gcm2"
          }), ". In this case, ensure that it is not ", _jsx(_components.code, {
            children: "0"
          }), "."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "repeatTime"
          }), ": (Optional) Int. Number of media streams played. This parameter applies only to on-demand streams. It can be set to:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "1"
            }), ": (Default) Plays a media resource once."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "-1"
            }), ": Plays media resources in a loop."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "N"
            }), ": User-defined number of media resources to be played. It is an integer and cannot be set to ", _jsx(_components.code, {
              children: "0"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "seekPosition"
          }), ": (Optional) Number. Specifies the playback position (seconds) of the on-demand file. The default value is 0, which means play from the beginning of the on-demand file. It must be less than the media resource duration."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "dataStreamOptions: (Optional) JSON Object. The data stream configuration, which is used to set the SEI information carried by the video frame. This parameter applies only to on-demand streams."
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "enable"
            }), ": Set whether to inject the SEI information of Agora DataStream type.", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "true"
                }), ": Inject the SEI information of Agora DataStream type."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: "false"
                }), ": (Default) Do not inject the SEI information of Agora DataStream type."]
              }), `
`]
            }), `
`]
          }), `
`]
        }), `
`, _jsx(_components.p, {
          children: "Agora DataStream is a data stream format of JSON type, the example is as follows:"
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
                  children: "message PositionData {"
                })
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "  #"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " The"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " length"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " of"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " the"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " on-demand"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " file"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "  int32"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " duration"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " 1;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "  #"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " The"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " playback"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " position"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " of"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " the"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " on-demand"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " file"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "  int32"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " position"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " 2;"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "  #"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " The"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " user"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " ID"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " of"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " the"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " host"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " playing"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " the"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " on-demand"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " file"
                })]
              }), `
`, _jsxs(_components.span, {
                className: "line",
                children: [_jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: "  int32"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " uid"
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " ="
                }), _jsx(_components.span, {
                  style: {
                    "--shiki-light": "#B31D28",
                    "--shiki-light-font-style": "italic",
                    "--shiki-dark": "#FDAEB7",
                    "--shiki-dark-font-style": "italic"
                  },
                  children: " 3;"
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
`, _jsx(_components.h3, {
      id: "http-response",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For all possible response status codes, see ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header",
      children: "Response header"
    }), `
`, _jsx(_components.p, {
      children: "The response header contains the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": UUID (Universally Unique Identifier) to identify this request. It is the same as the ", _jsx(_components.code, {
          children: "X-Request-ID"
        }), " field in the request header. If the request fails, print out this value in the log for troubleshooting."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you receive the ", _jsx(_components.code, {
            children: "401(Unauthorized)"
          }), " status code for this request, the response header does not contain the field."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Resource-ID"
        }), ": UUID (Universally Unique Identifier) to identify the cloud player created by this request:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsx(_components.li, {
            children: "When the status code is 2XX, this value is the ID of the cloud player created by this request."
          }), `
`, _jsxs(_components.li, {
            children: ["When the status code is ", _jsx(_components.code, {
              children: "409(Conflict)"
            }), ", the name of the cloud player created by this request is duplicate with the name of other existing players in the project. This value is the ID of that existing player. Please check and modify the name of the cloud player created by this request."]
          }), `
`, _jsx(_components.li, {
            children: "When the status code is another value, this field is null and this request fails."
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-body",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request succeeds. The response body contains the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "player"
        }), ": JSON Object. Contains the following fields:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "uid"
            }), ": Number. The User ID of the cloud player in the channel."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "account"
            }), ": String. The User Account of the cloud player in the channel."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "id"
            }), ": String. The ID of the cloud player. It is a UUID (Universally Unique Identifier) generated by Agora's server to identify the ID of the cloud player created."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "createTs"
            }), ": Number. The Unix timestamp (in seconds) when creating the cloud player."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "status"
            }), ": String. The state of the cloud player at runtime:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"idle"'
                }), ": The playback is not started."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"connecting"'
                }), ": Agora's server is connecting to the address of the media stream or detecting the audio and video data."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"running"'
                }), ": Playing."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"failed"'
                }), ": Agora's server cannot connect to the address of the media stream, or the media stream cannot be played."]
              }), `
`]
            }), `
`]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "fields"
            }), ": String. The field mask to represent a set of symbolic field paths. The field mask is encoded as a single string where paths are separated by a comma. It specifies a subset of fields that should be returned by this request. In the sample code using ", _jsx(_components.code, {
              children: "uid"
            }), ", ", _jsx(_components.code, {
              children: "fields"
            }), " specifies that Agora's server returns the ", _jsx(_components.code, {
              children: "uid"
            }), ", ", _jsx(_components.code, {
              children: "id"
            }), ", ", _jsx(_components.code, {
              children: "createTs"
            }), ", and ", _jsx(_components.code, {
              children: "status"
            }), " fields. For details, see ", _jsx(_components.a, {
              href: "https://googleapis.dev/nodejs/pubsub/latest/google.protobuf.html#.FieldMask",
              children: "Google protobuf FieldMask"
            }), "."]
          }), `
`]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not 2XX, the request fails. The response body contains the ", _jsx(_components.code, {
        children: "message"
      }), " field, which describes the detailed reason for the failure."]
    }), `
`, _jsx(_components.h3, {
      id: "request-example",
      children: "Request example"
    }), `
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Media Pull without transcoding"
      })
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
              children: '    "player"'
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
              children: '    "streamUrl"'
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
              children: '"rtmp://example.agora.io/live/class32/101"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '"class32"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "token"'
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
              children: '"2a784467d6"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '    "idleTimeout"'
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
              children: '    "playTs"'
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
              children: "1575508644"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '"test"'
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
`, _jsx(_components.p, {
      children: _jsx(_components.strong, {
        children: "Media Pull with transcoding"
      })
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
              children: '    "player"'
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
              children: '        "audioOptions"'
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
              children: '            "profile"'
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
              children: '        "videoOptions"'
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
              children: '            "width"'
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
              children: "1920"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "height"'
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
              children: "1080"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "frameRate"'
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
              children: '            "bitrate"'
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
              children: '            "codec"'
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
              children: '"VP9"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "gop"'
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
              children: "30"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '            "fillMode"'
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
              children: '"fill"'
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
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "streamUrl"'
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
              children: '"rtmp://example.agora.io/live/class32/101"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '"class32"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "token"'
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
              children: '"2a784467d6"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '    "idleTimeout"'
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
              children: '    "playTs"'
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
              children: "1575508644"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '"test"'
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
`, _jsx(_components.h3, {
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
              children: '    "player"'
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
              children: '        "uid"'
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
              children: '"2a784467d647bb87b60b719f6fa56317"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "1575508644"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '"player.uid,player.id,player.createTs,player.status"'
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
      id: "delete-api",
      children: "Delete API"
    }), `
`, _jsx(_components.p, {
      children: "This API destroys the cloud player in the project."
    }), `
`, _jsx(_components.h3, {
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
              children: "DELETE"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/players/{id}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameters-1",
      children: "Path parameters"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "appId"
        }), ": (Required) String. Agora provides the ", _jsx(_components.a, {
          href: "/en/realtime-media/media-pull/reference/glossary#app-id",
          children: "App ID"
        }), " when you create a ", _jsx(_components.strong, {
          children: "project"
        }), " in Agora Console. The App ID identifies each project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "id"
        }), ": (Required) String. The ID of the cloud player."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": (Required) String. The ", _jsx(_components.code, {
          children: "region"
        }), " where the Player is created in."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-1",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "Authorization"
          }), ": See ", _jsx(_components.a, {
            href: "#authentication",
            children: "Authentication"
          }), "."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "X-Request-ID"
          }), ": UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Agora recommends using this field. If you do not pass in any value, Agora's server automatically generates a UUID to pass in."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-response-1",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For all possible response status codes, see ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header-1",
      children: "Response header"
    }), `
`, _jsx(_components.p, {
      children: "The response header contains the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": UUID (Universally Unique Identifier) to identify this request. It is the same as the ", _jsx(_components.code, {
          children: "X-Request-ID"
        }), " field in the request header. If the request fails, print out this value in the log for troubleshooting."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you receive the ", _jsx(_components.code, {
            children: "401(Unauthorized)"
          }), " status code for this request, the response header does not contain the field."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Resource-ID"
        }), ": UUID (Universally Unique Identifier) to identify the ID of the cloud player created by this request. The UUID is the same as the value in the ", _jsx(_components.code, {
          children: "id"
        }), " path parameter."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-1",
      children: "Response body"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "If the status code is 2XX, the request succeeds. The response body is empty."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: ["If the status code is not 2XX, the request fails. The response body contains the ", _jsx(_components.code, {
            children: "message"
          }), " field, which describes the detailed reason for the failure."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h2, {
      id: "list-api",
      children: "List API"
    }), `
`, _jsx(_components.p, {
      children: "This API queries and lists all the cloud players in the project."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-2",
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
              children: " https://api.agora.io/v1/projects/{appId}/cloud-player/players"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameters-2",
      children: "Path parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "appId"
      }), ": (Required) String. Agora provides the ", _jsx(_components.a, {
        href: "/en/realtime-media/media-pull/reference/glossary#app-id",
        children: "App ID"
      }), " when you create a ", _jsx(_components.strong, {
        children: "project"
      }), " in Agora Console. The App ID identifies each project."]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-1",
      children: "Query parameters"
    }), `
`, _jsx(_components.p, {
      children: "A sample request URL when using query parameters:"
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
              children: "https://api.agora.io/v1/projects/"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "{appId}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "/cloud-player/players?filter"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "={filter}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&pageSize"
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
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "pageSize}"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "&pageToken"
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
              children: "{"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "pageToken}"
            })]
          })
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "filter"
          }), ": (Optional) String. The filter. Agora's server only lists the cloud players that meet the filter criteria in the project. The current filter is the value of ", _jsx(_components.code, {
            children: "channelName"
          }), " when creating the cloud player."]
        }), `
`, _jsxs(_components.p, {
          children: ["Assuming the channel name is ", _jsx(_components.code, {
            children: "class32"
          }), ", replace ", _jsx(_components.code, {
            children: "filter={filter}"
          }), " in the sample request URL with ", _jsx(_components.code, {
            children: "filter=channelName eq class32"
          }), "; Assuming the channel name is ", _jsx(_components.code, {
            children: "bigclass"
          }), ", replace ", _jsx(_components.code, {
            children: "filter={filter}"
          }), " in the sample request URL with ", _jsx(_components.code, {
            children: "filter=channelName eq bigclass"
          }), "."]
        }), `
`]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Spaces exist before and after ", _jsx(_components.code, {
            children: "eq"
          }), " and require URL encoding."]
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "pageSize"
        }), ": (Optional) Number. The maximum number of cloud players to return on one page. The value ranges from 1 to 500. The default value is 200, which means that for a single page, Agora's server lists up to 200 cloud players if you do not pass in any value."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "pageToken"
        }), ": (Optional) String. The page number to indicate the order of the pages. If you do not pass in any value, Agora's server returns to the first page."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Recommended usage: When using the ", _jsx(_components.code, {
            children: "List"
          }), " API for the first time, do not pass any value in the ", _jsx(_components.code, {
            children: "pageToken"
          }), " query parameter. You can get the query results of the first page and the value of the ", _jsx(_components.code, {
            children: "nextPageToken"
          }), " field. The next time you use the ", _jsx(_components.code, {
            children: "List"
          }), " API, pass this value in the ", _jsx(_components.code, {
            children: "pageToken"
          }), " query parameter to query the cloud players on the next page."]
        })
      })
    }), `
`, _jsx(_components.p, {
      children: "After using the above parameters, Agora's server queries and lists the cloud players according to the following steps:"
    }), `
`, _jsxs(_components.ol, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Query the cloud players that meet the filter criteria in the specified project."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "Set the space size of each page."
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsx(_components.p, {
          children: "List the cloud players in the specified page."
        }), `
`, _jsx(CalloutContainer, {
          type: "info",
          children: _jsx(CalloutDescription, {
            children: _jsxs(_components.p, {
              children: ["Agora's server lists the cloud players in ascending order by ", _jsx(_components.code, {
                children: "createTs"
              }), "."]
            })
          })
        }), `
`]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "request-header-2",
      children: "Request header"
    }), `
`, _jsx(_components.p, {
      children: "The request header contains the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Authorization"
        }), ": See ", _jsx(_components.a, {
          href: "./restful-authentication",
          children: "Authentication"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "Agora recommends using this field. If you do not pass in any value, Agora's server automatically generates a UUID to pass in."
        })
      })
    }), `
`, _jsx(_components.h3, {
      id: "http-response-2",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For all possible response status codes, see ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header-2",
      children: "Response header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": UUID (Universally Unique Identifier) to identify this request. It is the same as the ", _jsx(_components.code, {
          children: "X-Request-ID"
        }), " field in the request header. If the request fails, print out this value in the log for troubleshooting."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["If you receive the ", _jsx(_components.code, {
            children: "401(Unauthorized)"
          }), " status code for this request, the response header does not contain the field."]
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "response-body-2",
      children: "Response body"
    }), `
`, _jsx(_components.p, {
      children: "If the status code is 2XX, the request succeeds. The response body contains the following fields:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "totalSize"
          }), ": Number. The number of cloud players that meet the filter criteria."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "players"
          }), ": JSON Array. Contains the following fields:"]
        }), `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "name"
            }), ": String. The name of the cloud player."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "streamUrl"
            }), ": String. The RTMP/HTTPS URL of the online media stream."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "channelName"
            }), ": String. The name of the Agora channel."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "uid"
            }), ": Number. The User ID of the cloud player in the Agora channel."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "account"
            }), ": String. The User Account of the cloud player in the Agora channel."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "id"
            }), ": String. UUID (Universally Unique Identifier) to identify the cloud player created. It is the ID of the cloud player."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "createTs"
            }), ": Number. The Unix timestamp (in seconds) when creating the cloud player."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "status"
            }), ": String. The state of the cloud player at runtime:", `
`, _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"idle"'
                }), ": The playback is not started."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"connecting"'
                }), ": Agora's server is connecting to the address of the media stream or detecting the audio and video data."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"running"'
                }), ": Playing."]
              }), `
`, _jsxs(_components.li, {
                children: [_jsx(_components.code, {
                  children: '"failed"'
                }), ": Agora's server cannot connect to the address of the media stream, or the media stream cannot be played."]
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
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "fields"
          }), ": String. The field mask to represent a set of symbolic field paths. The field mask is encoded as a single string where paths are separated by a comma. It specifies that Agora's server returns a subset of fields in each player in the ", _jsx(_components.code, {
            children: "players"
          }), " array. In the sample code using ", _jsx(_components.code, {
            children: "uid"
          }), ", ", _jsx(_components.code, {
            children: "fields"
          }), " specifies that Agora's server returns the ", _jsx(_components.code, {
            children: "name"
          }), ", ", _jsx(_components.code, {
            children: "streamUrl"
          }), ", ", _jsx(_components.code, {
            children: "channelName"
          }), ", ", _jsx(_components.code, {
            children: "uid"
          }), ", ", _jsx(_components.code, {
            children: "id"
          }), ", ", _jsx(_components.code, {
            children: "createTs"
          }), ", and ", _jsx(_components.code, {
            children: "status"
          }), " fields in each player in the ", _jsx(_components.code, {
            children: "players"
          }), " array."]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [`
`, _jsxs(_components.p, {
          children: [_jsx(_components.code, {
            children: "nextPageToken"
          }), ": String. The next page number of ", _jsx(_components.code, {
            children: "pageToken"
          }), ". You can pass the value of the ", _jsx(_components.code, {
            children: "nextPageToken"
          }), " field in the ", _jsx(_components.code, {
            children: "pageToken"
          }), " query parameter when using the ", _jsx(_components.code, {
            children: "List"
          }), " API next time. When ", _jsx(_components.code, {
            children: "nextPageToken"
          }), " is an empty string, there are no more players that match the request."]
        }), `
`]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["If the status code is not 2XX, the request fails. The response body contains the ", _jsx(_components.code, {
        children: "message"
      }), " field, which describes the detailed reason for the failure."]
    }), `
`, _jsx(_components.h3, {
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
              children: '    "totalSize"'
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
              children: "10"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "players"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": [{"
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
              children: '"class32_101"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "streamUrl"'
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
              children: '"rtmp://example.agora.io/live/class32/101"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "channelName"'
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
              children: '"class32"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "uid"'
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
              children: '"2a784467d647bb87b60b719f6fa56317"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "1575508644"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "   }, {"
            })
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
              children: '"class68_422"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "streamUrl"'
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
              children: '"rtmp://example.agora.io/live/class68/422"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "channelName"'
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
              children: '"class68"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '        "uid"'
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
              children: "422"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: '"0b719f6fa563172a784467d647bb87b6"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "1575588644"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
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
              children: "   }],"
            })
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
              children: '"player.name,player.streamUrl,player.channelName,player.uid,player.id,player.createTs,player.status"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '    "nextPageToken"'
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
              children: '"7b60b719f"'
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
      id: "update-api",
      children: "Update API"
    }), `
`, _jsx(_components.p, {
      children: "Update the cloud player you specified in the project."
    }), `
`, _jsx(_components.h3, {
      id: "http-request-3",
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
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/players/{id}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "path-parameters-3",
      children: "Path parameters"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "appId"
        }), ": (Required) String. Agora provides the ", _jsx(_components.a, {
          href: "/en/realtime-media/media-pull/reference/glossary#app-id",
          children: "App ID"
        }), " when you create a ", _jsx(_components.strong, {
          children: "project"
        }), " in Agora Console. The App ID identifies each project."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "id"
        }), ": (Required) String. The ID of the cloud player."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "region"
        }), ": (Required) String. The ", _jsx(_components.code, {
          children: "region"
        }), " where the Player is created in."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "query-parameters-2",
      children: "Query parameters"
    }), `
`, _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "sequence"
      }), ": (Required) Number. The sequence number of the ", _jsx(_components.code, {
        children: "Update"
      }), " request. The parameter needs to be greater than or equal to 0. Ensure that the sequence number of the subsequent ", _jsx(_components.code, {
        children: "Update"
      }), " request is greater than the sequence number of the previous ", _jsx(_components.code, {
        children: "Update"
      }), " request. The serial number ensures that the Agora server updates Converter with the latest configuration you specified."]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsxs(_components.p, {
          children: ["Best practice is to fill ", _jsx(_components.code, {
            children: "sequence"
          }), " with ", _jsx(_components.code, {
            children: "0"
          }), " when calling ", _jsx(_components.code, {
            children: "Update"
          }), " for the first time. When calling ", _jsx(_components.code, {
            children: "Update"
          }), " for the second time, fill ", _jsx(_components.code, {
            children: "sequence"
          }), " with ", _jsx(_components.code, {
            children: "1"
          }), ". When calling ", _jsx(_components.code, {
            children: "Update"
          }), " for the third time, fill ", _jsx(_components.code, {
            children: "sequence"
          }), " with ", _jsx(_components.code, {
            children: "2"
          }), ". And so on. The Agora server updates cloud player according to the latest ", _jsx(_components.code, {
            children: "Update"
          }), " request (that is, the highest serial number)."]
        })
      })
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
              children: "PATCH"
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://api.agora.io/{region}/v1/projects/{appId}/cloud-player/{playerid}?sequence={sequence}"
            })]
          })
        })
      })
    }), `
`, _jsx(_components.h4, {
      id: "request-header-3",
      children: "Request header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "Authorization"
        }), ": See ", _jsx(_components.a, {
          href: "./restful-authentication",
          children: "Authentication instructions"
        }), "."]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": UUID (Universally Unique Identifier) to identify this request. After passing in the field, Agora's server returns it in the response header."]
      }), `
`]
    }), `
`, `
`, _jsx(_components.h4, {
      id: "request-body-1",
      children: "Request body"
    }), `
`, _jsx(_components.p, {
      children: "You can update the following fields at the same time:"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "streamUrl"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "audioOptions"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "audioOptions.volume"
        })
      }), `
`, _jsx(_components.li, {
        children: _jsx(_components.code, {
          children: "seekPosition"
        })
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "isPause"
        }), ": Bool. Whether to pause the playback of the media stream source file:", `
`, _jsxs(_components.ul, {
          children: [`
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "true"
            }), ": Pauses playback of the media stream source file."]
          }), `
`, _jsxs(_components.li, {
            children: [_jsx(_components.code, {
              children: "false"
            }), ":(Default) Plays the media stream source file."]
          }), `
`]
        }), `
`]
      }), `
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "audioOptions.volume"
        }), ": Int. The volume of the cloud player. The value range is [0,200]. The default value is 100, which represents the original volume."]
      }), `
`]
    }), `
`, _jsxs(_components.p, {
      children: ["For the details of other fields, see ", _jsx(_components.a, {
        href: "#create",
        children: "Create request body"
      }), "."]
    }), `
`, _jsx(_components.h3, {
      id: "http-response-3",
      children: "HTTP response"
    }), `
`, _jsxs(_components.p, {
      children: ["For all possible response status codes, see ", _jsx(_components.a, {
        href: "#code",
        children: "Status codes"
      }), "."]
    }), `
`, _jsx(_components.h4, {
      id: "response-header-3",
      children: "Response header"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Request-ID"
        }), ": UUID (Universally Unique Identifier) to identify this request. It is the same as the ", _jsx(_components.code, {
          children: "X-Request-ID"
        }), " field in the request header. If the request fails, print out this value in the log for troubleshooting."]
      }), `
`]
    }), `
`, _jsx(CalloutContainer, {
      type: "info",
      children: _jsx(CalloutDescription, {
        children: _jsx(_components.p, {
          children: "If the status code is not 2XX, the response header does not contain the field."
        })
      })
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "X-Resource-ID"
        }), ": UUID (Universally Unique Identifier) to identify the ID of the cloud player created by this request. The UUID is the same as the value in the ", _jsx(_components.code, {
          children: "id"
        }), " path parameter."]
      }), `
`]
    }), `
`, _jsx(_components.h4, {
      id: "response-body-3",
      children: "Response body"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the status code is 2XX, the request succeeds. The response body is empty."
      }), `
`, _jsxs(_components.li, {
        children: ["If the status code is not 2XX, the request fails. The response body contains the ", _jsx(_components.code, {
          children: "message"
        }), " field, which describes the detailed reason for the failure."]
      }), `
`]
    }), `
`, _jsx(_components.h3, {
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
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: _jsxs(_components.code, {
          children: [_jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"player"'
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
              children: '   "audioOptions"'
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
              children: '       "volume"'
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
              children: "10"
            })]
          }), `
`, _jsx(_components.span, {
            className: "line",
            children: _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "   },"
            })
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '   "isPause"'
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
              children: '   "streamUrl"'
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
              children: '"http://XXXX"'
            }), _jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), `
`, _jsxs(_components.span, {
            className: "line",
            children: [_jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '   "seekPosition"'
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
              children: "40"
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
      id: "rate-limits",
      children: "Rate limits"
    }), `
`, _jsxs(_components.p, {
      children: ["Do not exceed the API rate limits, otherwise you receive the ", _jsx(_components.code, {
        children: "429(Too Many Requests)"
      }), " status code."]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "API"
          }), _jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rate limit"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Create"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In a project, when creating cloud players with ", _jsx(_components.code, {
                    children: "name"
                  }), ", the maximum rate of creating each cloud player with a different name is 2 times per second."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In a project, the maximum rate of creating a cloud player without ", _jsx(_components.code, {
                    children: "name"
                  }), " is 50 times per second."]
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "Delete"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "In a project, the maximum rate of destroying a cloud player is 100 times per second."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsx(_components.code, {
              children: "List"
            })
          }), _jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In a project, the maximum rate of querying a cloud player with ", _jsx(_components.code, {
                    children: "filter"
                  }), "(", _jsx(_components.code, {
                    children: "channelName"
                  }), ") is 2 times per second and 15 times per minute."]
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsxs(_components.p, {
                  children: ["In a project, the maximum rate of querying a cloud player without ", _jsx(_components.code, {
                    children: "filter"
                  }), "(", _jsx(_components.code, {
                    children: "channelName"
                  }), ") is 10 times per second and 20 times per minute."]
                }), `
`]
              }), `
`]
            })
          })]
        })]
      })]
    }), `
`, _jsx(_components.p, {}), `
`, _jsx(_components.h2, {
      id: "status-codes",
      children: "Status codes"
    }), `
`, _jsxs(_components.ul, {
      children: [`
`, _jsx(_components.li, {
        children: "If the status code is 2XX, the request succeeds."
      }), `
`, _jsxs(_components.li, {
        children: ["If the status code is not 2XX, the request fails. Use the ", _jsx(_components.code, {
          children: "message"
        }), " field in the response body for troubleshooting."]
      }), `
`]
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Status code"
          }), _jsx(_components.th, {
            children: "Possible message field"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "200 OK"
          }), _jsx(_components.td, {
            children: "/"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "400 Bad Request"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Parameter 'streamUrl' is invalid formatted."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Parameter channelName is invalid. Fix it in your request and retry."
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "401 Unauthorized"
          }), _jsx(_components.td, {
            children: "Invalid authentication credentials."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "403 Forbidden"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "This project has not enabled Cloud Player product yet. Contact us to enable it."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "This project's permission to use Cloud Player was revoked. Contact us for details."
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "404 Not Found"
          }), _jsx(_components.td, {
            children: "Resource is not found and destroyed."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "409 Conflict"
          }), _jsx(_components.td, {
            children: "Resource with the same name already exists."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "429 Too Many Requests"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Request rate limit exceeded."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Resources quota limit exceeded."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "no available resources"
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "500 Unknown"
          }), _jsx(_components.td, {
            children: "Some internal error happened. Contact us to help fix it."
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "503 Service Unavailable"
          }), _jsx(_components.td, {
            children: _jsxs(_components.ul, {
              children: [`
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Service overload. Retry with back off strategy, and contact us to help fix it."
                }), `
`]
              }), `
`, _jsxs(_components.li, {
                children: [`
`, _jsx(_components.p, {
                  children: "Service unavailable temporarily. Retry with back off strategy."
                }), `
`]
              }), `
`]
            })
          })]
        }), _jsxs(_components.tr, {
          children: [_jsx(_components.td, {
            children: "504 Gateway Timeout"
          }), _jsx(_components.td, {
            children: "Gateway timeout. Query to check whether the player has been created, or to create another one instead."
          })]
        })]
      })]
    }), `
`, _jsx(_components.h2, {
      id: "restful-api-callback-service",
      children: "RESTful API callback service"
    }), `
`, _jsxs(_components.p, {
      children: [`After using these RESTful APIs, Agora's notification server sends the callback notification to your server through an HTTP request.
For details, see `, _jsx(_components.a, {
        href: "../../api-reference/ncs-events",
        children: "Message Notification Service"
      }), "."]
    }), `
`, _jsx(_components.h2, {
      id: "considerations",
      children: "Considerations"
    }), `
`, _jsx(_components.p, {
      children: "This section summarizes some important considerations when using the Media Pull RESTful API."
    }), `
`, _jsxs(_components.table, {
      children: [_jsx(_components.thead, {
        children: _jsxs(_components.tr, {
          children: [_jsx(_components.th, {
            children: "Item"
          }), _jsx(_components.th, {
            children: "Impact"
          })]
        })
      }), _jsxs(_components.tbody, {
        children: [_jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Ensure that the channel profile is set as ", _jsx(_components.code, {
              children: "LIVE_BROADCASTING"
            }), "."]
          }), _jsx(_components.td, {
            children: "★★★☆☆"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["If the channel needs only one cloud player, ensure that you have set the ", _jsx(_components.code, {
              children: "name"
            }), " parameter. For details, see the description of ", _jsx(_components.code, {
              children: "name"
            }), "."]
          }), _jsx(_components.td, {
            children: "★★★☆☆"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["If the channel needs more than one cloud player, ensure that each player has a unique user ID/account. For details, see the description of ", _jsx(_components.code, {
              children: "uid"
            }), " and ", _jsx(_components.code, {
              children: "account"
            }), "."]
          }), _jsx(_components.td, {
            children: "★★★★★"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["Please ensure that the region you set is the same region as where your media stream originates is located. For details, see the description of ", _jsx(_components.code, {
              children: "region"
            }), "."]
          }), _jsx(_components.td, {
            children: "★★★★★"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["The cloud player may be deleted automatically due to server errors. Agora recommends that you enable the Message Notification Service to listen for events of Media Pull. For details, see the ", _jsx(_components.a, {
              href: "../../api-reference/enable-ncs",
              children: "Media Pull Message Notification Server"
            }), "."]
          }), _jsx(_components.td, {
            children: "★★★★★"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["When using the ", _jsx(_components.code, {
              children: "List"
            }), " API, the ", _jsx(_components.code, {
              children: "players"
            }), " field in the response body might only include ", _jsx(_components.code, {
              children: "id"
            }), ", ", _jsx(_components.code, {
              children: "name"
            }), ", and ", _jsx(_components.code, {
              children: "CreateTs"
            }), ". Ensure that your app logic can handle this situation."]
          }), _jsx(_components.td, {
            children: "★★★★★"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["If using the ", _jsx(_components.code, {
              children: "Create"
            }), " or ", _jsx(_components.code, {
              children: "Delete"
            }), " API results in a status code of ", _jsx(_components.code, {
              children: "504 Gateway Timeout"
            }), ", call the ", _jsx(_components.code, {
              children: "List"
            }), " API to query the actual state of the cloud player to make sure an unmanaged cloud player does not exist."]
          }), _jsx(_components.td, {
            children: "★★★☆☆"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["If your request fails, ensure that you print out the ", _jsx(_components.code, {
              children: "X-Request-ID"
            }), " and ", _jsx(_components.code, {
              children: "X-Resource-ID"
            }), " fields in the response header in the log for later use in troubleshooting."]
          }), _jsx(_components.td, {
            children: "★★★☆☆"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["After creating a cloud player and receiving a response message, you need to wait about 10 seconds before using the ", _jsx(_components.code, {
              children: "List"
            }), " method to query, otherwise you may not get any information."]
          }), _jsx(_components.td, {
            children: "★★★☆☆"
          })]
        }), _jsxs(_components.tr, {
          children: [_jsxs(_components.td, {
            children: ["The default maximum number of concurrent tasks is 20, which means that a maximum of 20 Media Pull tasks are allowed to run simultaneously for each project. You can contact ", _jsx(_components.a, {
              href: "mailto:support@agora.io",
              children: "support@agora.io"
            }), " to get a higher quota."]
          }), _jsx(_components.td, {
            children: "★★★★☆"
          })]
        })]
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
